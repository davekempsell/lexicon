function GuessGrid(line, guess, TargetWord) {

  const guessArray = guess.split("")
  const targetArray = TargetWord.split("")

  // Creating an object defining the instances of each letter in the Target Word
  const count = {}
  for (const element of targetArray) {
    count[element] ? count[element] += 1 : count[element] = 1;
  }

  return (
    <div key={`guessGrid-${line}`} className="grid">
      {guessArray.map((letter, index) => {
        // returning a green box if the letter is in the same place as in the Target Word
        if(letter === TargetWord[index]) {
          count[letter] -= 1;
          return (
            <div className="box-correct" key={`guess-${index}`}>{letter}</div>
          )
        } else if( count[letter] > 0) {
          // cG shortcut for correctGuesses
          let cG = {}
          guessArray.forEach((letter, index) => {
            if (letter === targetArray[index]) {
              cG[letter] ? cG[letter] += 1 : cG[letter] = 1;
            } else {
              cG[letter] = 0;
            }
          })
          if(count[letter] > cG[letter]) {
            count[letter] -= 1;
            return (
              <div className="box-close" key={`guess-${index}`}>{letter}</div>
            )
          } else {
            return (
              <div className="box-wrong" key={`guess-${index}`}>{letter}</div>
            )
          }
        } else {
          return (
            <div className="box-wrong" key={`guess-${index}`}>{letter}</div>
          )
        }
      })}
    </div>
  )
} 

export default GuessGrid
