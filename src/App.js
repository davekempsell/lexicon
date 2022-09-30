import React, { useState } from 'react'
import './App.css'
import Logo from './lexBrickLogo.png'
import EmptyGrid from './components/emptyGrid';
import { KeyboardTop, KeyboardMiddle, KeyboardBottom } from './components/keyboard';
import words from './wordlists/allowedWords'
import GuessGrid from './components/guessGrid';

function App() {
  const [guess, setGuess] = useState("")
  const [guesses, setGuesses]  = useState([])
  const [emptyGrids, setEmptyGrids] = useState([1,2,3,4,5,6])

  const onChangeGuess = g => {
    const latestGuess = g.target.value;
    setGuess(latestGuess)
  }

  const submitGuess = () => {
    let newGuess = guess.toUpperCase()
    if(
        guess.length === 5
        && /^[A-Z]+$/.test(newGuess)
        && words.includes(guess.toLowerCase())
        && !guesses.includes(newGuess)
      ) {
        setGuesses([...guesses, newGuess])
        setEmptyGrids(emptyGrids.slice(0,-1))
        setGuess("")
      }
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
        {emptyGrids.map(n => {
          return EmptyGrid(n)
        })}
      <div className="keyboard-container">
        {KeyboardTop()}
        {KeyboardMiddle()}
        {KeyboardBottom()}
      </div>
      <div className='typed-input'>
        <input
          type="text"
          maxLength={5}
          placeholder='Type guess here'
          value={guess}
          onChange={onChangeGuess}
        />
        <button
          type="button"
          onClick={submitGuess}
        >
          Guess
        </button>
      </div>
      <div className="footer">
        Built by Dave Kempsell 2022
      </div>
    </div>
  );
}

export default App;