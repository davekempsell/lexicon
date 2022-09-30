import React from 'react'
import TargetWord from "../wordlists/targetWord"

function gridDisplay(line, guess) {

  let guessArray = guess.split("")
  const targetArray = TargetWord.split("")

  return (
    <div key={`guessGrid-${line}`} className="grid">
      {guessArray.map((letter, index) => {
        if(!targetArray.includes(letter)) {
          return (
            <div className="box-wrong" key={`guess-${index}`}>{letter}</div>
          )
        } else if(letter === targetArray[index]) {
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
