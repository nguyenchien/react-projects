import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {
  
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0)
  
  const fetchJobs = async() => {
    let response = await fetch(url);
    let newJobs = await response.json();
    setJobs(newJobs);
    setLoading(false);
  }
  
  useEffect(()=>{
    fetchJobs();
  }, []);
  
  if (loading) {
    return (
      <div className="section loading">
        <h1>Loading</h1>
      </div>
    )
  }
    
  const {title, dates, company, duties} = jobs[value];
  
  return (
    <section className="section">
      <div className="title">
        <h2>expierence</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        {/* btn container */}
        <div className="btn-container">
          {
            jobs.map((item, index)=>{
              return (
                <button key={index} className={`job-btn ${value === index ? 'active-btn' : ''}`} onClick={()=>setValue(index)}>
                  {item.company}
                </button>     
              )
            })
          }
        </div>
        
        {/* job info */}
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p>{dates}</p>
            {duties.map((duty, index)=>{
              return (
                <div key={index} className="job-desc">
                  <FaAngleDoubleRight className='job-icon' />
                  <p>{duty}</p>
                </div>
              )
            })}
        </article>
      </div>
    </section>
  )
}

export default App
