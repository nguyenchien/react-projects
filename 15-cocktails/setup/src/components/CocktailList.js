import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {
  const {loading, coctails} = useGlobalContext();
  if (loading) {
    return <Loading/>
  }
  
  if (coctails.length < 1) {
    return (
      <h2 className='section-title'>no cocktail matched your search criteria</h2>
    )
  }
  return (
    <div>
      <h2>cocktail list component</h2>
    </div>
  )
}

export default CocktailList
