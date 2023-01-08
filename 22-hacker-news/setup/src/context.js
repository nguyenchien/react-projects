import React, { useContext, useEffect, useReducer } from 'react'

import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from './actions'
import reducer from './reducer'

const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?'

const initialState = {
  isLoading: true,
  query: 'react',
  hits: [],
  page: 0,
  nbPages: 0,
}

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [state, dispath] = useReducer(reducer, initialState);
  
  const fetchStories = async(url) => {
    dispath({type: SET_LOADING})
    try {
      const response = await fetch(url);
      const data = await response.json();
      dispath({type: SET_STORIES, payload: {hits: data.hits, nbPages: data.nbPages}})
    } catch (error) {
      console.log(error);
    }
  }
  
  const removeStory = (id) => {
    dispath({type: REMOVE_STORY, payload: {id: id}})
  }
  
  useEffect(() => {
   fetchStories(`${API_ENDPOINT}query=${state.query}`); 
  }, []);
  
  return <AppContext.Provider value={{
    ...state,
    removeStory
  }}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
