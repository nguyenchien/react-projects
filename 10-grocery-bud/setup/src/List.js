import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({items, removeItem, editItem}) => {
  return (
    <article className="grocery-container">
      {items && items.map((item)=>{
        const {id, title} = item;
        return (
          <div key={id} className="grocery-item">
            <p className="title">{title}</p>
            <div className="grocery-btn">  
              <button className="edit-btn" onClick={()=>editItem(id)}><FaEdit /></button>
              <button className="delete-btn" onClick={()=>removeItem(id)}><FaTrash /></button>
            </div>
          </div>          
        )
      })}
    </article>
  )
}

export default List
