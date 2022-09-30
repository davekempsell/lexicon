function EmptyGrid(line) {

  const boxArray = [1,2,3,4,5]

  return (
    <div key={`emptyGrid-${line}`} className="grid">
      {boxArray.map((e, index) => {
        return (
          <div 
            className="box-empty" 
            key={`emptyBox-${index}`}>
          </div>
        )
      })}
    </div>
  )
} 

export default EmptyGrid
