import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'

function App() {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);
  
  const removeMyTours = (id) => {
    const newTours = tours.filter((tour)=>{
      return tour.id !== id;
    });
    setTours(newTours);
  }
   
  const fetchTours = async() => {
    
    try {
      const res = await fetch(url);
      const data = await res.json();
      setLoading(false);
      setTours(data);
    } catch (error) {
      setLoading(true);
      console.log(error);
    }
  }
  
  useEffect(() => {
    setLoading(true);
    fetchTours();
  }, []);
  
  if (loading) {
    return <Loading />
  }
  
  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button className='btn' onClick={()=>fetchTours()}>refesh</button>
        </div>
      </main>
    )
  }
  
  return (
    <main>
      <Tours tours={tours} removeMyTours={removeMyTours} />
    </main>
  )
}

export default App
