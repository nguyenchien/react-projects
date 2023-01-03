import React, { useState, useEffect, useRef } from 'react'
import { FaSearch } from 'react-icons/fa'
import Photo from './Photo'
const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`
const mainUrl = `https://api.unsplash.com/photos/`
const searchUrl = `https://api.unsplash.com/search/photos/`

/*
  Fix List
  - remove current scroll code
  - set default page to 1
  - setup 2 useEffects
  - dont't run second on initial render
  - check for query value
  - if page 1, fetch images
  - otherwise, setPage(1)
  - fix scoll function
*/

function App() {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const mounted = useRef(false);
  const [newImages, setNewImages] = useState(false);
  
  const fetchImages = async() => {
    setLoading(true);
    const urlPage = `&page=${page}`;
    const urlQuery = `&query=${query}`;
    let url;
    if (query) {
      url = `${searchUrl}${clientID}${urlPage}${urlQuery}`;
    } else {
      url = `${mainUrl}${clientID}${urlPage}`;
    }
    try {
      const response = await fetch(url);
      const data = await response.json();
      setPhotos((oldPhotos)=>{
        if (query && page === 1 ) {
          return data.results
        } else if (query) {
          return [...oldPhotos, ...data.results]
        } else {
          return [...oldPhotos, ...data]
        }
      });
      setLoading(false);
      setNewImages(false);
    } catch (error) {
      setLoading(false);
      setNewImages(false);
      console.log(error);
    }
  }
  
  // handle fetch image on init
  useEffect(() => {
    fetchImages();
    console.log('init');
    // eslint-disable-next-line
  }, [page]);
  
  // handle load more images
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    if(loading) return;
    if(!newImages) return;
    console.log('second');
    // eslint-disable-next-line
  }, [newImages])
  
  const event = () => {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 2) {
      console.log('load new images');
      setNewImages(true);
      setPage((oldPage) => oldPage + 1);
    }
  }
  
  useEffect(() => {
    window.addEventListener('scroll', event);
    return () => window.removeEventListener('scroll', event);
  }, [])
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query) return;
    if (page === 1) {
      fetchImages();
    }
    setPage(1);
  }
  
  return (
    <main>
      <section className="search">
        <form className="search-form">
          <input 
            type="text" 
            className='form-input' 
            placeholder='search'
            value={query} 
            onChange={(e)=>{setQuery(e.target.value)}}
          />
          <button type="submit" className='submit-btn' onClick={handleSubmit}>
            <FaSearch/>
          </button>
        </form>
      </section>
      <section className="photos">
        <div className="photos-center">
          {
            photos.map((image, index)=>{
              return (
                <Photo key={index} {...image} />
              )
            })
          }
        </div>
      </section>
      {loading && <h2 style={{textAlign: 'center'}}>loading...</h2>}
    </main>
  )
}

export default App
