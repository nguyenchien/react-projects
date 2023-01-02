import React, { useState, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'
import Photo from './Photo'
// const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`
//Access Key: KTrpVjdTpUVAYYfhMS1VMjV7hyPjarBrKcbOEqgxrnA
//Secret key: unUgwWqFB7dliE4OECglBpQiY_efxYVsj1VfoerBXhU
const mainUrl = `https://api.unsplash.com/photos/`
const searchUrl = `https://api.unsplash.com/search/photos/`

function App() {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);
  const fetchImages = async() => {
    try {
      setLoading(true);
      const url = `${mainUrl}?client_id=KTrpVjdTpUVAYYfhMS1VMjV7hyPjarBrKcbOEqgxrnA`;
      const response = await fetch(url);
      const data = await response.json();
      setPhotos(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }
  
  useEffect(()=> {
    fetchImages();
  },[]);
  return (
    <main>
      <h1>{loading && loading ? 'loading...' : ''}</h1>
    </main>
  )
}

export default App
