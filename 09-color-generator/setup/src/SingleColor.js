import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb, weight, index, hexColor}) => {
  const bgc = rgb.join(',');
  const hexValue = `#${hexColor}`;
  const [alert, setAlert] = useState(false);
  
  useEffect(() => {
    const timeout = setTimeout(() =>{
      setAlert(false);
    }, 3000);
    return () => {
      clearTimeout(timeout);
    }
  },[alert]);
  
  return (
    <article 
      className={`color ${index > 10 && 'color-light'}`} 
      style={{backgroundColor: `rgb(${rgb})`}}
      onClick = {()=>{
        setAlert(true);
        navigator.clipboard?.writeText && navigator.clipboard.writeText(hexValue);
      }}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{hexValue}</p>
      {alert && <p className='alert'>copy to clipboard</p>}
    </article>
  )
}

export default SingleColor
