import React, { useState } from 'react'
import './App.css'
import Logo from './lexBrickLogo.png'
import EmptyGrid from './components/emptyGrid';
import GuessGrid from './components/guessGrid'
import targetWord from "./wordlists/targetWord"
import allowedWords from './wordlists/allowedWords';
import guessBoxes from './components/guessBoxes';
import { createKeyboard } from './components/keyboard';
import { PopUp } from './components/winPopUp';

function App() {
  const TargetWord = targetWord
  const [guesses, setGuesses]  = useState([])
  const [emptyGrids, setEmptyGrids] = useState([2,3,4,5,6])
  const [winState, setWinState] = useState(false)
  const [popUpState, setPopUpState] = useState(false)

  const [guessLetters, setGuessLetters] = useState([])
  const [letterState, setLetterState] = useState({})

  const checkWin = lastGuess => {
    if(lastGuess === TargetWord) {
      setWinState(true)
      setPopUpState(true)
    }
  }

  const checkEnd = (array) => {
    if(array.length === 6) {
      setPopUpState(true)
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
          checkEnd(tempGuesses)
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

  function closePopUp() {
    setPopUpState(false)
  }

  const displayPopUp = () => {
    if(popUpState) {
      return PopUp(closePopUp, winState, TargetWord)
    }
  }

  return (
    <div id="game">
      {displayPopUp()}
      <div className="title">
        <img src={Logo} className="logo" alt="logo"/>
        <h1>LEXICON</h1>
      </div>
      {guesses.map((guess, index) => {
        return GuessGrid(index, guess, TargetWord)
      })}
      {guessBoxes(guessLetters, winState, guesses)}
      {emptyGrids.map(n => {
        return EmptyGrid(n, guessLetters)
      })}
      {createKeyboard(onKeyPress, deleteLetter, keyboardSubmit, letterState)}
      <p>{TargetWord}</p>
    </div>
  );
}

export default App;