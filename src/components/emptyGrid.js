function EmptyGrid(line) {

  return (
    <div key={`emptyGrid-${line}`} className="grid">
      <div className="box-empty"></div>
      <div className="box-empty"></div>
      <div className="box-empty"></div>
      <div className="box-empty"></div>
      <div className="box-empty"></div>
    </div>
  )
} 

export default EmptyGrid
