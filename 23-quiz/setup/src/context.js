import axios from 'axios'
import React, { useState, useContext, useEffect } from 'react'

const table = {
  sports: 21,
  history: 23,
  politics: 24,
}

const API_ENDPOINT = 'https://opentdb.com/api.php?'

const url = ''
const tempUrl = 'https://opentdb.com/api.php?amount=10&category=10&difficulty=easy&type=multiple'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [waiting, setWaiting] = useState(true);
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [error, setError] = useState(false);
  const [isModelOpen, setIsModelOpen] = useState(false);
  
  const fetchQuestions = async(url) => {
    setWaiting(false);
    setLoading(true);
    try {
      const response = await axios(url).catch(error => console.log(error));
      const data  = response.data.results;
      if (data.length > 0) {
        setQuestions(data);
        setWaiting(false);
        setLoading(false);
        setError(false);
      }
    } catch (error) {
      console.log(error);
      setWaiting(true);
      setLoading(true);
      setError(true);
    }
  }
  
  useEffect(()=>{
    fetchQuestions(tempUrl);
  }, []);
    
  return <AppContext.Provider value={{
    waiting,
    loading,
    questions,
    index,
    correct,
    error,
    isModelOpen,
  }}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
