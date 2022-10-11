function GuessGrid(line, guess) {

  return (
    <div key={`guessGrid-${line}`} className="grid">
      {guess.map((letter, index) => {
        if(letter.includes('!')) {
          return (
            <div className="box-wrong" key={`guess-${index}`}>{letter[0]}</div>
          )
        } else if(letter.includes('?')) {
          return (
            <div className="box-close" key={`guess-${index}`}>{letter[0]}</div>
          )
        } else {
          return (
            <div className="box-correct" key={`guess-${index}`}>{letter}</div>
          )
        }
      })}
    </div>
  )
} 

export default GuessGrid
