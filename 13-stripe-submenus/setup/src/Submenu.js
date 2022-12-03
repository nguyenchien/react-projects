import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'

const Submenu = () => {
  const {isSubmenuOpen, location} = useGlobalContext();
  const {center, bottom} = location;
  const containerRef = useRef(null);
  
  useEffect(()=> {
    const subMenu = containerRef.current;
    subMenu.style.left = `${center}px`;
    subMenu.style.top = `${bottom}px`;
  }, [location]);
  
  return (
    <aside className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`} ref={containerRef}>
      submenu
    </aside>
  )
}

export default Submenu
