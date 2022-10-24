import React from 'react';
import Tour from './Tour';
const Tours = ({tours, removeMyTours}) => {
  
  return (
    <section>
      <div className='title'>
        <h2>our tour</h2>
        <p className='underline'></p>
      </div>
      {
        tours.map((tour)=>{
          return <Tour key={tour.id} {...tour} removeMyTours={removeMyTours} />
        })
      }
    </section>
  );
  
};

export default Tours;
