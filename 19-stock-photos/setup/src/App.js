import React, { useState, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'
import Photo from './Photo'
const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`
const mainUrl = `https://api.unsplash.com/photos/`
const searchUrl = `https://api.unsplash.com/search/photos/`

function App() {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);
  const fetchImages = async() => {
    setLoading(true);
    const url = `${mainUrl}${clientID}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      setPhotos(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }
  
  // handle fetch image on init
  useEffect(()=> {
    fetchImages();
  },[]);
  
  // handle scroll loading image
  useEffect(()=>{
    const event = window.addEventListener('scroll', ()=>{
      if (!loading && window.innerHeight + window.scrollY >= document.body.scrollHeight) {
        console.log('loading image');
      }
    });
    return ()=> {
      window.removeEventListener('scroll', event);
    }
  }, []);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('handleSubmit called');
  }
  
  return (
    <main>
      <section className="search">
        <form className="search-form">
          <input type="text" className='form-input' placeholder='search' />
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
                <Photo key={image.id} {...image} />
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
