import React from 'react'

import { useGlobalContext } from './context'

const Stories = () => {
  const {isLoading, hits, removeStory} = useGlobalContext();
  if (isLoading) {
    return <div className="loading"></div>
  }
  return (
    <div className="stories">
      {
        hits && hits.map((story)=>{
          const {objectID, author, num_comments, points, title, url} = story;
          return (
            <div key={objectID} className="story">
              <h4 className="title">{title}</h4>
              <p className="info">
                {points} point by {author} | <span>{num_comments}</span> comments
              </p>
              <div>
                <a href={url} className="read-link" target="_blank" rel="noopener noreferrer">read more</a>
                <button 
                  className="remove-btn"
                  onClick={()=>removeStory(objectID)}
                >
                  remove
                </button>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Stories
