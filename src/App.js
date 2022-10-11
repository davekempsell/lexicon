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
import { ToggleSwitch } from './components/ToggleSwitch/toggleSwitch';
import { updateLetters, guessChecker, alreadyGuessed } from './guessCheckers/guessCheckers';
import { lexiconLogic } from './guessCheckers/lexiconLogic'

function App() {
  const TargetWord = targetWord
  const [guesses, setGuesses]  = useState([])
  const [emptyGrids, setEmptyGrids] = useState([1,2,3,4,5])
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
  const checkOutcome = (lastGuess) => {
    if(lastGuess.join("") === TargetWord) {
      setEndState(true)
      setWinState(true)
      setPopUpState(true)
    } else if(guesses.length > 5) {
      setEndState(true)
      setPopUpState(true)
    }
  }

  // Inputting letters using the onscreen keyboard
  // also, checking the selected letter is available to use in a guess (hard mode)
  const onKeyPress = key => {
    if(!infoState) {
      if(hardMode && letterState[key.target.value] === 'wrong') {
        notAllowed('Letter not in word')
      } else if(guessLetters.length < 5) {
          const newGuessLetter = key.target.value
          setGuessLetters([...guessLetters, newGuessLetter])
      }
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

    const guessWord = guessLetters.join("")
    let wordGuessedAlready = alreadyGuessed(guesses, guessWord)
    const missingLetters = guessChecker(guessWord, letterState)
    
    if(!endState && !winState && !infoState) {
      if(guessLetters.length < 5) {
        notAllowed('Not enough letters')
      } else if(!allowedWords.includes(guessWord.toLowerCase())){
        notAllowed('Not in word list')
      } else if(wordGuessedAlready) {
        notAllowed('Word already gussed')
      } else if(hardMode && missingLetters.length > 0) {
        notAllowed('All clues must be used')
      } else {
        let outcome = lexiconLogic(guessWord, TargetWord)
        updateLetters(outcome, setLetterState, letterState)
        setGuesses([...guesses, outcome])
        setEmptyGrids(emptyGrids.slice(0,-1))
        setGuessLetters([])
        checkOutcome(outcome)
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
      return InfoPopUp(closeInfoPopUp, popUpState)
    }
  }

  // Function passed to the 'X' button in InfoPopUp component to remove popup from screen
  const closeInfoPopUp = () => {
    setInfoState(false)
  }

  // Info Button
  const infoButton = () => {

    // Info pop up cannot be selected if the outcome pop up is on the screen
    const showInfo = () => {
      if(!popUpState) {
      setInfoState(true)
      }
    }

    return (
      <div className='info'>
        <button
          className='info-button'
          type="submit"
          onClick={showInfo}
        >?</button>
      </div>
    )
  }

  return (
    <div className='main-container'>
      {displayOutcomePopUp()}
      {displayRulesPopUp()}
      {displayInfoPopUp()}
      <div className='switch'>
        {ToggleSwitch(setHardMode, started, hardMode, notAllowed)}
      </div>
      <div className="title-container">
        <img src={Logo} className="logo" alt="logo"/>
        <div className='title'>LEXICON</div>
      </div>
      {infoButton()}
      <div>
        {guesses.map((guess, index) => {
          return GuessGrid(index, guess)
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