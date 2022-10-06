import React, { useState } from 'react'
import './App.css'
import Logo from './lexBrickLogo.png'
import EmptyGrid from './components/emptyGrid';
import GuessGrid from './components/guessGrid'
import targetWord from "./wordlists/targetWord"
import allowedWords from './wordlists/allowedWords';
import guessBoxes from './components/guessBoxes';
import { createKeyboard } from './components/keyboard';
import { PopUp } from './components/popups/outcomePopUp';
import { rulesPopUp } from './components/popups/rulesPopUp';
import { InfoPopUp } from './components/popups/infoPopUp';
import { ToggleSwitch, hardModeLabel } from './components/ToggleSwitch/toggleSwitch';
import { updateLetters, guessChecker } from './guessCheckers/guessCheckers';

function App() {
  const TargetWord = targetWord
  const [guesses, setGuesses]  = useState([])
  const [emptyGrids, setEmptyGrids] = useState([2,3,4,5,6])
  const [winState, setWinState] = useState(false)
  const [endState, setEndState] = useState(false)
  const [popUpState, setPopUpState] = useState(false)
  const [rulesState, setRulesState] = useState(false)
  const [guessLetters, setGuessLetters] = useState([])
  const [letterState, setLetterState] = useState({})
  const [rulesMessage, setRulesMessage] = useState('')
  const [hardMode, setHardMode] = useState(false)
  const [started, setStarted] = useState(false)
  const [infoState, setInfoState] = useState(false)

  // Function is run after each guess to check if the game has ended,
  // due to matching the target word, or running out of guesses.
  const checkOutcome = (lastGuess, array) => {
    if(lastGuess === TargetWord) {
      setEndState(true)
      setWinState(true)
      setPopUpState(true)
    } else if(array.length > 5) {
      setEndState(true)
      setPopUpState(true)
    }
  }

  // Checking the selected letter is available to use in a guess (hard mode)
  const onKeyPress = key => {
    if(!infoState) {
      if(hardMode && letterState[key.target.value] === 'wrong') {
        notAllowed('Letter not in word')
      } else {
        inputLetter(key)
      } 
    }
  }

  // Inputting letters using the letter keys on the keyboard into the guessLetters array
  const inputLetter = key => {
    if(guessLetters.length < 5) {
      const newGuessLetter = key.target.value
      setGuessLetters([...guessLetters, newGuessLetter])
    }
  }

  // Removing the last letter from the guessLetters array, set on the Delete key
  const deleteLetter = () => {
    if(!infoState){
      setGuessLetters(guessLetters.slice(0,-1))
    }
  }

  // Submitting a guess for approval, set to the Enter key on the keyboard
  const submitGuess = () => {
    
    let tempGuesses = guesses
    const guessWord = guessLetters.join("")
    const missingLetters = guessChecker(guessWord, letterState)
    
    if(!endState && !winState && !infoState) {
      if(guessLetters.length < 5) {
        notAllowed('Not enough letters')
      } else if(!allowedWords.includes(guessWord.toLowerCase())){
        notAllowed('Not in word list')
      } else if(hardMode && guesses.includes(guessWord)) {
        notAllowed('Word already gussed')
      } else if(hardMode && missingLetters.length > 0) {
        notAllowed('All clues must be used')
      } else {
        setGuesses([...guesses, guessWord])
        setEmptyGrids(emptyGrids.slice(0,-1))
        setGuessLetters([])
        tempGuesses.push(guessWord)
        checkOutcome(guessWord, tempGuesses)
        updateLetters(tempGuesses, setLetterState, TargetWord)
        setStarted(true)
      }
    }
  }


  // Displaying the outcome popup once the end of the game is triggered
  const displayOutcomePopUp = () => {
    if(popUpState) {
      return PopUp(closePopUp, winState, TargetWord)
    }
  }

  // Function passed to the 'X' button in OutcomePopUp component to remove popup from screen
  const closePopUp = () => {
    setPopUpState(false)
  }

  // Triggered when a rule is broken, setting what message to display to the player.
  // The message disappears after 2s due to the setTimeOut function 
  const notAllowed = (error) => {
    setRulesMessage(error)
    setRulesState(true)
    setTimeout(() => {
      setRulesState(false);
    }, 2000)
  }

  // Displays a message to inform the player which rule their guess goes against
  const displayRulesPopUp = () => {
    if(rulesState) {
      return rulesPopUp(rulesMessage, endState)
    }
  }

  // Displaying the info popup if the ? is clicked
  const displayInfoPopUp = () => {
    if(infoState) {
      return InfoPopUp(closeInfoPopUp, endState)
    }
  }

  // Function passed to the 'X' button in InfoPopUp component to remove popup from screen
  const closeInfoPopUp = () => {
    setInfoState(false)
  }

  return (
    <div className='main-container'>
      {displayOutcomePopUp()}
      {displayRulesPopUp()}
      {displayInfoPopUp()}
      <div className='switch'>
        {ToggleSwitch(setHardMode, started, hardMode, notAllowed)}
        {hardModeLabel(hardMode)}
      </div>
      <div className="title-container">
        <img src={Logo} className="logo" alt="logo"/>
        <div className='title'>LEXICON</div>
      </div>
      <div className='info'>
        <button
          className='info-button'
          type="submit"
          onClick={setInfoState}
        >?</button>
      </div>
      <div>
        {guesses.map((guess, index) => {
          return GuessGrid(index, guess, TargetWord)
        })}
        {guessBoxes(guessLetters, winState, guesses)}
        {emptyGrids.map(n => {
          return EmptyGrid(n, guessLetters)
        })}
      </div>
      {createKeyboard(onKeyPress, deleteLetter, submitGuess, letterState)}
    </div>
  );
}

export default App;