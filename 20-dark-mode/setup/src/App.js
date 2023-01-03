import React, { useState, useEffect } from 'react'
import data from './data'
import Article from './Article'

function App() {
  return (
    <main>
      <nav className="nav-center">
        <h1>overreacted</h1>
        <button className='btn'>toogle</button>
      </nav>
      <section className="articles">  
      {
        data.map((item, index) => {
          return <Article key={index} {...item} />
        })
      }
      </section>
    </main>
  )
}

export default App
