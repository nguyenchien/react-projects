import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext();

const AppProvider = ({children}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  
  const openSidebar = () => {
    setIsSidebarOpen(true);
  }
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  }
  const openSubmenu = () => {
    setIsSubmenuOpen(true);
  }
  const closeSubmenu = () => {
    setIsSidebarOpen(false);
  }
  
  return (
    <AppContext.Provider value={{
      isSidebarOpen,
      isSubmenuOpen,
      openSidebar,
      closeSidebar,
      openSubmenu,
      closeSubmenu
    }}>
      {children}
    </AppContext.Provider>
  )
}

// custom hook
const useGlobalContext = () => {
  return useContext(AppContext);
}

export {AppContext, AppProvider, useGlobalContext}