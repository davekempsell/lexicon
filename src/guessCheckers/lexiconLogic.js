export function lexiconLogic (guessWord, targetWord) {
  let guess = guessWord.split("")
  let target = targetWord.split("")

  let letterCount = {}

  target.forEach(letter => {
    if(letterCount[letter]) {
      letterCount[letter] += 1;
    } else {
      letterCount[letter] = 1;
    }
  })

  let correctGuesses = {}

  guess.forEach((letter, index) => {
    if(letter === target[index]) {
      if(correctGuesses[letter]) {
        correctGuesses[letter] += 1;
      } else {
        correctGuesses[letter] = 1;
      }
    } else {
      correctGuesses[letter] = 0;
    }
  })
  
  let outcome = guess.map((letter, index) => {
    if(letter === target[index]) {
      letterCount[letter] =- 1;
      return letter
    } else if(!target.includes(letter)) {
      return letter + '!'
    } else if(target.includes(letter) && letterCount[letter] > correctGuesses[letter]) {
      if(letterCount[letter] > 0) {
        letterCount[letter] -= 1;
        return letter + '?'
      } else {
        return letter + '!'
      }
    } else {
      return letter + '!'
    }
  })

  return outcome
}