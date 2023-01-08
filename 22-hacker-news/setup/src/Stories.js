import React from 'react'

import { useGlobalContext } from './context'

const Stories = () => {
  const {isLoading, hits} = useGlobalContext();
  console.log(hits);
  if (isLoading) {
    return <div className="loading"></div>
  }
  return (
    <h2>stories components</h2>
  )
}

export default Stories
