import React from 'react'
import { useGlobalContext } from './context'
import { Link } from 'react-router-dom'
const url =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'

const Movies = () => {
  const {isLoading, movies} = useGlobalContext();
  if (isLoading) return <div className="loading"></div>
  return (
    <div className="movies">
      {
        movies && movies.map((movie)=>{
          const {imdbID: id, Title: title, Poster: poster,Year: year} = movie;
          return (
            <Link key={id} to={`/movies/${id}`} className='movie'>
              <article>
                <img src={poster==='N/A' ? url : poster} alt={title} />
                <div className="movie-info">
                  <h4>{title}</h4>
                  <p>{year}</p>
                </div>
              </article>
            </Link> 
          )          
        })
      }
    </div>
  )
}

export default Movies
