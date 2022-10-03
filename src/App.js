import React, { useState } from 'react'
import './App.css'
import Logo from './lexBrickLogo.png'
import EmptyGrid from './components/emptyGrid';
import { KeyboardTop, KeyboardMiddle, KeyboardBottom } from './components/keyboard';
import GuessGrid from './components/guessGrid'
import TargetWord from "./wordlists/targetWord"
import allowedWords from './wordlists/allowedWords';

function App() {
  const [guesses, setGuesses]  = useState([])
  const [emptyGrids, setEmptyGrids] = useState([2,3,4,5,6])
  const [winState, setWinState] = useState(false)

  const [guessLetters, setGuessLetters] = useState([])

  const onKeyPress = key => {
    if(guessLetters.length < 5) {
    const newGuessLetter = key.target.value
    setGuessLetters([...guessLetters, newGuessLetter])
    }
  }

  const deleteLetter = () => {
    setGuessLetters(guessLetters.slice(0,-1))
  }

  const keyboardSubmit = () => {
    if(guessLetters.length === 5) {
      const guessWord = guessLetters.join("")
      if(
          winState === false
          && guesses.length < 6
          && /^[A-Z]+$/.test(guessWord)
          && (allowedWords.includes(guessWord.toLowerCase()))
          && !guesses.includes(guessWord)
        ) {
          setGuesses([...guesses, guessWord])
          setEmptyGrids(emptyGrids.slice(0,-1))
          checkWin(guessWord)
          setGuessLetters([])
        }
    }
  }

  const checkWin = (lastGuess) => {
    if(lastGuess === TargetWord) {
      setWinState(true)
    }
  }

  const guessBoxes = (array) => {
    if(winState) {
      return (
        <div key={`emptyGrid-guess`} className="grid">
          <div className="box-empty" key={`emptyBox-1`}></div>
          <div className="box-empty" key={`emptyBox-2`}></div>
          <div className="box-empty" key={`emptyBox-3`}></div>
          <div className="box-empty" key={`emptyBox-4`}></div>
          <div className="box-empty" key={`emptyBox-5`}></div>
        </div>
      )
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

  return (
    <div id="game">
      <div className="title">
        <img src={Logo} className="logo" alt="logo"/>
        <h1>LEXICON</h1>
      </div>
        <p>{TargetWord}</p>
        {guesses.map((guess, index) => {
        return GuessGrid(index, guess)
        })}
        {guessBoxes(guessLetters)}
        {emptyGrids.map(n => {
          return EmptyGrid(n, guessLetters)
        })}
      <div className="keyboard-container">
        {KeyboardTop(onKeyPress)}
        {KeyboardMiddle(onKeyPress)}
        {KeyboardBottom(onKeyPress, deleteLetter, keyboardSubmit)}
      </div>
      <div className="footer">
        Built by Dave Kempsell 2022
      </div>
    </div>
  );
}

export default App;