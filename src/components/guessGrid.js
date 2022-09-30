function GuessGrid(line, guess) {

  let guessArray = guess.split("")

  return (
    <div key={`guessGrid-${line}`} className="grid">
      <div className="box">{guessArray[0]}</div>
      <div className="box">{guessArray[1]}</div>
      <div className="box">{guessArray[2]}</div>
      <div className="box">{guessArray[3]}</div>
      <div className="box">{guessArray[4]}</div>
    </div>
  )
} 

export default GuessGrid