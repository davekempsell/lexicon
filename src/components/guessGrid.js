import React from 'react'
import TargetWord from "../wordlists/targetWord"

function gridDisplay(line, guess) {

  let guessArray = guess.split("")

  return (
    <div key={`guessGrid-${line}`} className="grid">
      {guessArray.map((letter, index) => {
        if(!TargetWord.includes(letter)) {
          return (
            <div className="box-wrong" key={`guess-${index}`}>{letter}</div>
          )
        } else if(letter === TargetWord[index]) {
          return (
            <div className="box-right" key={`guess-${index}`}>{letter}</div>
          )
        } else {
          return (
            <div className="box-close" key={`guess-${index}`}>{letter}</div>
          )
        }
      })}
    </div>
  )
} 

export default gridDisplay
