const keyboardKey = (style, index, letter, onKeyPress) => {
  return (
    <button 
      className={style} 
      key={`keyboard-${index}`} 
      type="submit" 
      value={letter}
      onClick={onKeyPress}>
        {letter}
    </button>
  )
}

function KeyboardTop(onKeyPress, letterState) {

  const keyValues = ['Q','W','E','R','T','Y','U','I','O','P']

  return (
    <div className="keyboard-top" key="keyboard-top">
      {keyValues.map((letter, index) => {
        if(letterState[letter] === 'correct') {
          return keyboardKey("key-correct", index, letter, onKeyPress)
        } else if(letterState[letter] === 'close') {
          return keyboardKey("key-close", index, letter, onKeyPress)
        } else if(letterState[letter] === 'wrong') {
          return keyboardKey("key-wrong", index, letter, onKeyPress)
        } else {
          return keyboardKey("key-standard", index, letter, onKeyPress)
        }
      })}
    </div>
  )
}

function KeyboardMiddle(onKeyPress, letterState) {

  const keyValues = ['A','S','D','F','G','H','J','K','L']

  return (
    <div className="keyboard-middle">
      {keyValues.map((letter, index) => {
        if(letterState[letter] === 'correct') {
          return keyboardKey("key-correct", index, letter, onKeyPress)
        } else if(letterState[letter] === 'close') {
          return keyboardKey("key-close", index, letter, onKeyPress)
        } else if(letterState[letter] === 'wrong') {
          return keyboardKey("key-wrong", index, letter, onKeyPress)
        } else {
          return keyboardKey("key-standard", index, letter, onKeyPress)
        }
      })}
    </div>
  )
}

function KeyboardBottom(onKeyPress, deleteLetter, submitGuess, letterState) {

  const keyValues = ['Z','X','C','V','B','N','M']
  return (
    <div className="keyboard-bottom">
      <button 
        className="key-action" 
        key={`keyboard-Ent`} 
        type="submit" 
        value={'Ent'}
        onClick={submitGuess}>
          Ent
      </button>
      {keyValues.map((letter, index) => {
        if(letterState[letter] === 'correct') {
          return keyboardKey("key-correct", index, letter, onKeyPress)
        } else if(letterState[letter] === 'close') {
          return keyboardKey("key-close", index, letter, onKeyPress)
        } else if(letterState[letter] === 'wrong') {
          return keyboardKey("key-wrong", index, letter, onKeyPress)
        } else {
          return keyboardKey("key-standard", index, letter, onKeyPress)
        }
      })}
      <button 
        className="key-action" 
        key={`keyboard-del`} 
        type="submit" 
        value={'del'}
        onClick={deleteLetter}>
          del
      </button>
    </div>
  )
}

export function createKeyboard (onKeyPress, deleteLetter, submitGuess, letterState) {
  return (
    <div className="keyboard-container">
    {KeyboardTop(onKeyPress, letterState)}
    {KeyboardMiddle(onKeyPress, letterState)}
    {KeyboardBottom(onKeyPress, deleteLetter, submitGuess, letterState)}
  </div>
  )
}