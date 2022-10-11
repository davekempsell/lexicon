// Setting the status of each letter so as to set the correct colour on the corresponding key

export function updateLetters(guess, setLetterState, letterState) {
  let letters = letterState
  guess.forEach(letter => {
    if(letter.includes('!')) {
      if(!letters[letter[0]]) {
      letters[letter[0]] = 'wrong'
      }
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

// Function to check if guessWord has already been guessed before
export function alreadyGuessed(guesses, guessWord) {
  let guessesWithLettersOnly = guesses.map(word => {
    return word.map(letter => {
      return letter[0]
    }).join("")
  })

  return guessesWithLettersOnly.includes(guessWord)
}

export function correctLetterCheck(guesses, guessWord) {
  if(guesses.length > 0) {
    let lastGuess = guesses[guesses.length - 1]
    let message = ''
    lastGuess.forEach((letter, index) => {
      if(!letter.includes('?') && !letter.includes('!')) {
        if(guessWord[index] !== letter) {
          message = `${index + 1}${ordinals[index + 1]} letter must be ${letter}`
        }
      }
    })
    return message
  } else {
    return ''
  }
}

export function closeLetterCheck(guesses, guessWord) {
  if(guesses.length > 0) {
    let correctGuesses = []
    guesses.forEach(guess => {
      guess.forEach(letter => {
        if(!letter.includes('?') && !letter.includes('!')) {
          correctGuesses.push(letter)
        }
      })
    })
  }
  
  
}

const ordinals = {
  1: 'st',
  2: 'nd',
  3: 'rd',
  4: 'th',
  5: 'th'
}