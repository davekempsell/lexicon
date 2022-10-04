import React, { useState } from 'react'
import './App.css'
import Logo from './lexBrickLogo.png'
import EmptyGrid from './components/emptyGrid';
import GuessGrid from './components/guessGrid'
import TargetWord from "./wordlists/targetWord"
import allowedWords from './wordlists/allowedWords';
import guessBoxes from './components/guessBoxes';
import { createKeyboard } from './components/keyboard';

function App() {
  const [guesses, setGuesses]  = useState([])
  const [emptyGrids, setEmptyGrids] = useState([2,3,4,5,6])
  const [winState, setWinState] = useState(false)

  const [guessLetters, setGuessLetters] = useState([])
  const [letterState, setLetterState] = useState({})

  const checkWin = lastGuess => {
    if(lastGuess === TargetWord) {
      setWinState(true)
    }
  }

  const onKeyPress = key => {
    if(guessLetters.length < 5) {
    const newGuessLetter = key.target.value
    setGuessLetters([...guessLetters, newGuessLetter])
    }
  }

  const deleteLetter = () => {
    setGuessLetters(guessLetters.slice(0,-1))
  }

  function keyboardSubmit() {
    let tempGuesses = guesses
    if(guessLetters.length === 5) {
      const guessWord = guessLetters.join("")
      if(
          winState === false
          && guesses.length < 6
          && (allowedWords.includes(guessWord.toLowerCase()))
          && !guesses.includes(guessWord)
        ) {
          setGuesses([...guesses, guessWord])
          setEmptyGrids(emptyGrids.slice(0,-1))
          checkWin(guessWord)
          setGuessLetters([])
          tempGuesses.push(guessWord)
          updateLetters(tempGuesses)
        }
    }
  }

  const updateLetters = (array) => {
    let letters = {}
    array.forEach(guess => {
      guess.split("").forEach((letter, index) => {
        if(letter === TargetWord[index]) {
          letters[letter] = 'correct'
        } else if(TargetWord.includes(letter)) {
          if(!letters[letter]) {
            letters[letter] = 'close'
          }
        } else {
          letters[letter] = 'wrong'
        }
      })
    })
    setLetterState(letters)
  }

  return (
    <div id="game">
      <div className="title">
        <img src={Logo} className="logo" alt="logo"/>
        <h1>LEXICON</h1>
      </div>
        {guesses.map((guess, index) => {
          return GuessGrid(index, guess)
        })}
        {guessBoxes(guessLetters, winState, guesses)}
        {emptyGrids.map(n => {
          return EmptyGrid(n, guessLetters)
        })}
      {createKeyboard(onKeyPress, deleteLetter, keyboardSubmit, letterState)}
    </div>
  );
}

export default App;