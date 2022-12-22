import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('a');
  const [cocktails, setCocktails] = useState([]);
  
  const fetchData = async() => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${searchTerm}`);
      const data = await response.json();
      const {drinks} = data;
      if (drinks) {
        const newDrinks = drinks.map((item)=>{
          const {idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass} = item;
          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            glass: strGlass,
            info: strAlcoholic
          }
        });
        setCocktails(newDrinks);
      } else {
        setCocktails([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }
  
  useEffect(()=>{
    fetchData();
  }, [searchTerm]);
  
  return (
    <AppContext.Provider value={{
      loading,
      setSearchTerm,
      cocktails
    }}>
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
