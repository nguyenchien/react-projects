import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const {name, job, image, text} = people[index];
  
  
  const checkNum = (num) => {
    if (num < 0 ) {
      return people.length - 1;
    }
    if (num > people.length - 1) {
      return 0;
    }
    return num;
  }
  
  const prevPerson = () => {
    setIndex((index)=>{
      let newIndex = index - 1;
      return checkNum(newIndex)
    });
  }
  
  const nextPerson = () => {
    setIndex((index)=>{
      let newIndex = index + 1;
      return checkNum(newIndex);
    });
  }
  
  const randomPerson = () => {
    let randomNum =  Math.floor(Math.random() * people.length);
    if (randomNum === index) {
      randomNum ++;
    }
    console.log(checkNum(randomNum));
    setIndex(checkNum(randomNum));
  }
  
  return (
    <article className='review'>
      <div className="img-container">
        <img className='person-img' src={image} alt={name} />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}><FaChevronLeft /></button>
        <button className="next-btn" onClick={nextPerson}><FaChevronRight /></button>
        <button className="random-btn" onClick={randomPerson}>suprise me</button>
      </div>
    </article>
  );
};

export default Review;
