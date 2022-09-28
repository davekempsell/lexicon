import React from 'react'

function EmptyGrid(line) {
  return (
    <div key={`grid-${line}`} className="grid">
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
    </div>
  )
} 

export default EmptyGrid
