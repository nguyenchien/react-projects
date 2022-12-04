import React, { useState, useContext, useReducer, useEffect } from 'react'
import cartItems from './data'
import reducer from './reducer'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext()

const initState = {
  loading: false,
  cart: cartItems,
  amount: 0,
  total: 0,
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);
  
  const clearCart = () => {
    dispatch({type: 'CLEAR_CART'})
  }
  
  const removeItem = (id) => {
    dispatch({type: 'REMOVE', payload: id})
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        removeItem
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
