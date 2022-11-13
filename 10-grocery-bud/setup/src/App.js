import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'


// Get list from localStorage
const getLocalStorage = () => {
  const list = localStorage.getItem('list');
  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
}

getLocalStorage();

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({
    show: false, 
    msg: '', 
    type: ''
  });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      // Alert error message
      showAlert(true, 'Please enter value', 'danger');
    } else if (name && isEditing) {
      // Edit item
      setList(
        list.map((item) => {
        if (item.id === editID) {
          // keep old properties and only update property title of item
          return {...item, title: name}
        }
        return item;
       }));
       setName('');
       setIsEditing(false);
       setEditID(null);
       showAlert(true, 'update success', 'success');
    } else {
      // Add new item to list
      const newItem = {
        id: new Date().getTime(),
        title: name
      }
      setList([...list, newItem]);
      setName('');
      showAlert(true, 'new item added', 'success');
    }
  }
  
  const handleClear = () => {
    setList([]);
    showAlert(true, 'The list is empty', 'danger');
  }
  
  const showAlert = (show=false, msg='', type='') => {
    setAlert({show, msg, type});
  }
  
  const removeItem = (id) => {
    setList(list.filter((item) => item.id !== id))
    showAlert (true, 'item removed', 'danger');
  }
  
  const editItem = (id) => {
    const editingID = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(editingID.title);
  }
  
  // Save list to localStorage
  useEffect(()=>{
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);
  
  return (
    <div className="section-center">  
      <form className='grocery-form' onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert = {showAlert} list={list} />}
        <h3>grocery bud</h3>
        <div className="form-control">
          <input
            type="text"
            className='grocery'
            onChange={(e)=>{setName(e.target.value)}}
            value = {name}
            placeholder='eg. eggs'
          />
          <button
            className='submit-btn'
            type='submit'
          >
            {isEditing ? 'edit' : 'submit'}
          </button>
        </div>
      </form>
      
      {list.length > 0 && (
        <div className="grocery-container">
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <button 
            className="clear-btn"
            onClick={handleClear}
          >
            clear items
          </button>
        </div>
      )}
    </div>
  )
}

export default App
