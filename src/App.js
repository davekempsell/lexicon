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

  const [keyboardGuesses, setKeyboardGuesses] = useState([])

  const onKeyPress = key => {
    if(keyboardGuesses.length < 5) {
    const newKeyboardGuess = key.target.value
    setKeyboardGuesses([...keyboardGuesses, newKeyboardGuess])
    }
  }

  const deleteLetter = () => {
    setKeyboardGuesses(keyboardGuesses.slice(0,-1))
  }

  const keyboardSubmit = () => {
    console.log(TargetWord)
    const kbGuess = keyboardGuesses.join("")
    let newGuess = kbGuess.toUpperCase()
    if(
        winState === false
        && guesses.length < 6
        && kbGuess.length === 5
        && /^[A-Z]+$/.test(newGuess)
        && (allowedWords.includes(kbGuess.toLowerCase()))
        && !guesses.includes(newGuess)
      ) {
        setGuesses([...guesses, newGuess])
        setEmptyGrids(emptyGrids.slice(0,-1))
        checkWin(newGuess)
        setKeyboardGuesses([])
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
        {guessBoxes(keyboardGuesses)}
        {emptyGrids.map(n => {
          return EmptyGrid(n, keyboardGuesses)
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