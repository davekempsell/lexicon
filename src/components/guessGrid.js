import { lexiconLogic } from '../guessCheckers/lexiconLogic'

function GuessGrid(line, guess, TargetWord) {

  let outcome = lexiconLogic(guess, TargetWord)

  return (
    <div key={`guessGrid-${line}`} className="grid">
      {outcome.map((letter, index) => {
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
