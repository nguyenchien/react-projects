import React, { useState, useEffect } from 'react'
import data from './data'
import Article from './Article'

function App() {
  const getLocalStorageTheme = () => {
    let theme = 'light-theme';
    if (localStorage.getItem('theme')) {
      theme = localStorage.getItem('theme');
    }
    return theme;
  }
  
  const [theme, setTheme] = useState(getLocalStorageTheme());
  
  const handleToggle = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme');
    } else {
      setTheme('light-theme');
    }
  }
  
  useEffect(() => {
   document.documentElement.className = theme;
   localStorage.setItem('theme', theme);
  }, [theme]);
  
  return (
    <main>
      <nav className="nav-center">
        <h1>overreacted</h1>
        <button className='btn' onClick={handleToggle}>toogle</button>
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
