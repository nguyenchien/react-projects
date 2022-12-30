import React, { useState, useEffect } from 'react'
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from 'react-icons/fa'
const url = 'https://randomuser.me/api/'
const defaultImage = 'https://randomuser.me/api/portraits/men/75.jpg'
function App() {
  const [loading, setLoading] = useState(true);
  const [person, setPerson] = useState(null);
  const [title, setTitle] = useState('name');
  const [value, setValue] = useState('random person');
  const handleValue = (e) => {
    console.log(e.target);
  }
  
  const getPerson = async() => {
    const response = await fetch(url);
    const data = await response.json();
    const person = data.results[0];
    const {first, last} = person.name;
    const {email, phone} = person;
    const {age} = person.dob;
    const {number, name} = person.location.street;
    const {password} = person.login;
    const {large: image} = person.picture;
    const newPerson = {
      image,
      phone,
      email,
      password,
      age,
      street: `${number} ${name}`,
      name: `${first} ${last}`,
    }
    setPerson(newPerson);
    setLoading(false);
    setTitle('name');
    setValue(name);
  }
  
  useEffect( () => {
    getPerson();
  }, [])
  return <main>
    <div className="block bcg-black"></div>
      <div className="block">
        <div className="container">
          <img src={(person && person.image) || defaultImage} className="user-img" alt="" />
          <p className="user-title">my {title} is</p>
          <p className="user-value">{value}</p>
          <div className="values-list">
            <button className="icon" data-lable="name" onMouseOver={handleValue}>
              <FaUser/>
            </button>
            <button className="icon" data-lable="email" onMouseOver={handleValue}>
              <FaEnvelopeOpen/>
            </button>
            <button className="icon" data-lable="age" onMouseOver={handleValue}>
              <FaCalendarTimes/>
            </button>
            <button className="icon" data-lable="street" onMouseOver={handleValue}>
              <FaMap/>
            </button>
            <button className="icon" data-lable="phone" onMouseOver={handleValue}>
              <FaPhone/>
            </button>
            <button className="icon" data-lable="password" onMouseOver={handleValue}>
              <FaLock/>
            </button>
          </div>
          <button  type='button' className='btn' onClick={getPerson}>
            {loading ? 'loading...' : 'random user'}
          </button>
        </div>
      </div>
  </main>
}

export default App
