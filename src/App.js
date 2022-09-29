import React, { useState } from 'react'
import './App.css'
import Logo from './lexBrickLogo.png'
import EmptyGrid from './components/emptyGrid';
import { KeyboardTop, KeyboardMiddle, KeyboardBottom } from './components/keyboard';

function App() {

  const [guessCounter, setGuessCounter] = useState(0)
  const [guess, setGuess] = useState("")
  const [guesses, setGuesses]  = useState([])

  const [firstGuess, setFirstGuess] = useState("")
  const [secondGuess, setSecondGuess] = useState("")
  const [thirdGuess, setThirdGuess] = useState("")
  const [fourthGuess, setFourthGuess] = useState("")
  const [fifthGuess, setFifthGuess] = useState("")
  const [sixthGuess, setSixthGuess] = useState("")

  const onChangeGuess = g => {
    const latestGuess = g.target.value;
    setGuess(latestGuess)
  }

  const submitGuess = () => {
    console.log(guessCounter)
    console.log(guesses)
    if(guess.length === 5) {
      if(guessCounter < 1) {
        setFirstGuess(guess)
        setGuesses([...guesses, guess])
        setGuessCounter(guessCounter + 1);
      } else if(guessCounter === 1 && !guesses.includes(guess)) {
        setSecondGuess(guess)
        setGuesses([...guesses, guess])
        setGuessCounter(guessCounter + 1);
      } else if(guessCounter === 2 && !guesses.includes(guess)) {
        setThirdGuess(guess)
        setGuesses([...guesses, guess])
        setGuessCounter(guessCounter + 1);
      } else if(guessCounter === 3 && !guesses.includes(guess)) {
        setFourthGuess(guess)
        setGuesses([...guesses, guess])
        setGuessCounter(guessCounter + 1);
      } else if(guessCounter === 4 && !guesses.includes(guess)) {
        setFifthGuess(guess)
        setGuesses([...guesses, guess])
        setGuessCounter(guessCounter + 1);
      } else if(guessCounter === 5 && !guesses.includes(guess)) {
        setSixthGuess(guess)
        setGuesses([...guesses, guess])
        setGuessCounter(guessCounter + 1);
      }
    }
  }

  return (
    <div id="game">
      <div className="title">
        <img src={Logo} className="logo" alt="logo"/>
        <h1>LEXICON</h1>
      </div>
      {EmptyGrid(1, firstGuess)}
      {EmptyGrid(2, secondGuess)}
      {EmptyGrid(3, thirdGuess)}
      {EmptyGrid(4, fourthGuess)}
      {EmptyGrid(5, fifthGuess)}
      {EmptyGrid(6, sixthGuess)}
      <div className="keyboard-container">
        {KeyboardTop()}
        {KeyboardMiddle()}
        {KeyboardBottom()}
      </div>
      <div>
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
        <p>Built by Dave Kempsell 2022</p>
      </div>
    </div>
  );
}

export default App;