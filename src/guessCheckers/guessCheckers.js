// Setting the status of each letter so as to set the correct colour on the corresponding key

export function updateLetters(guess, setLetterState, letterState) {
  let letters = letterState
  guess.forEach(letter => {
    if(letter.includes('!')) {
      letters[letter[0]] = 'wrong'
    } else if(!letters[letter] && letter.includes('?')) {
      letters[letter[0]] = 'close'
    } else {
      letters[letter] = 'correct'
    }
  })
  setLetterState(letters)
}

// Function to check if all letters revealed in previous guesses are being used in current guess (hardmode)
export function guessChecker(word, letterState) {
  let revealedLetters = Object.keys(letterState)
    .filter(key => letterState[key] === 'correct' || letterState[key] === 'close')
  
  let missingLetters = []
  revealedLetters.forEach(letter => {
    if(!word.includes(letter)) {
      missingLetters.push(letter)
    }
  })

  return missingLetters
}