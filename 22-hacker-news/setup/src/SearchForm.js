import React from 'react'
import { useGlobalContext } from './context'

const SearchForm = () => {
  const {query, searchStories} = useGlobalContext();
  return (
    <form className="search-form" onSubmit={(e)=>e.preventDefault()}>
      <h2>search news</h2>
      <input 
        type="text" 
        className='form-input' 
        value={query} 
        onChange={(e)=>searchStories(e.target.value)}
      />
    </form>
  )
}

export default SearchForm
