
// Setting the status of each letter so as to set the correct colour on the corresponding key
export function updateLetters(array, callback, TargetWord) {
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
  callback(letters)
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