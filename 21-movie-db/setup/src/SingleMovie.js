import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { API_ENDPOINT } from './context'

const SingleMovie = () => {
  const {id} = useParams();
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({show: false, msg: ''});
  
  const fetchMovie = async(url) => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.Response === 'True') {
        setMovie(data);
      } else {
        setError({show: true, msg: data.Error});
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }
  
  useEffect (()=>{
    fetchMovie(`${API_ENDPOINT}&i=${id}`);
  }, [id]);
  
  if (isLoading === true) {
    return <div className='loading'></div>
  }
  
  if (error.show === true) {
    return (
      <div className='page-error'>
        <h1 className='error'>{error.msg}</h1>
        <Link to='/' className='btn'>back to movies</Link>
      </div>
    )
  }
  
  const {
    Poster: poster,
    Title: title,
    Plot: plot,
    Year: year,
  } = movie;
  return (
    <div className="single-movie">
      <img src={poster} alt={title} />
      <div className="single-movie-info">
        <h2>{title}</h2>
        <p>{plot}</p>
        <h4>{year}</h4>
        <Link to='/' className='btn'>back to movies</Link>
      </div>
    </div>
  )
}

export default SingleMovie
