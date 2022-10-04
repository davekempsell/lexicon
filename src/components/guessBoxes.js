const guessBoxes = (array, winState, guesses) => {
  if(winState) {
    if(guesses.length < 6) {
    return (
      <div key={`emptyGrid-guess`} className="grid">
        <div className="box-empty" key={`emptyBox-1`}></div>
        <div className="box-empty" key={`emptyBox-2`}></div>
        <div className="box-empty" key={`emptyBox-3`}></div>
        <div className="box-empty" key={`emptyBox-4`}></div>
        <div className="box-empty" key={`emptyBox-5`}></div>
      </div>
    )
    }
  } else if(guesses.length < 6) {
    return (
      <div key={`emptyGrid-guess`} className="grid">
        <div className="box-empty" key={`emptyBox-1`}>{array[0]}</div>
        <div className="box-empty" key={`emptyBox-2`}>{array[1]}</div>
        <div className="box-empty" key={`emptyBox-3`}>{array[2]}</div>
        <div className="box-empty" key={`emptyBox-4`}>{array[3]}</div>
        <div className="box-empty" key={`emptyBox-5`}>{array[4]}</div>
      </div>
    )
  }
}

export default guessBoxes