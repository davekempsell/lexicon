function EmptyGrid(line) {

  return (
    <div key={`emptyGrid-${line}`} className="grid">
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
    </div>
  )
} 

export default EmptyGrid
