import React from 'react'
import TargetWord from "../wordlists/targetWord"

function GuessGrid(line, guess) {

  const guessArray = guess.split("")
  const targetArray = TargetWord.split("")
  const count = {}
  for (const element of targetArray) {
    if(count[element]) {
      count[element] += 1;
    } else {
      count[element] = 1;
    }
  }

  return (
    <div key={`guessGrid-${line}`} className="grid">
      {guessArray.map((letter, index) => {
        if(letter === TargetWord[index]) {
          count[letter] -= 1;
          return (
            <div className="box-correct" key={`guess-${index}`}>{letter}</div>
          )
        } else if(TargetWord.includes(letter) && count[letter] > 0) {
          count[letter] -= 1;
          return (
            <div className="box-close" key={`guess-${index}`}>{letter}</div>
          )
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
