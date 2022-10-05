const keyboardKey = (style, index, letter, callback) => {
  return (
    <button 
      className={style} 
      key={`keyboard-${index}`} 
      type="submit" 
      value={letter}
      onClick={callback}>
        {letter}
    </button>
  )
}

function KeyboardTop(callback, letterState) {

  const keyValues = ['Q','W','E','R','T','Y','U','I','O','P']

  return (
    <div className="keyboard-top" key="keyboard-top">
      {keyValues.map((letter, index) => {
        if(letterState[letter] === 'correct') {
          return keyboardKey("key-correct", index, letter, callback)
        } else if(letterState[letter] === 'close') {
          return keyboardKey("key-close", index, letter, callback)
        } else if(letterState[letter] === 'wrong') {
          return keyboardKey("key-wrong", index, letter, callback)
        } else {
          return keyboardKey("key-standard", index, letter, callback)
        }
      })}
    </div>
  )
}

function KeyboardMiddle(callback, letterState) {

  const keyValues = ['A','S','D','F','G','H','J','K','L']

  return (
    <div className="keyboard-middle">
      {keyValues.map((letter, index) => {
        if(letterState[letter] === 'correct') {
          return keyboardKey("key-correct", index, letter, callback)
        } else if(letterState[letter] === 'close') {
          return keyboardKey("key-close", index, letter, callback)
        } else if(letterState[letter] === 'wrong') {
          return keyboardKey("key-wrong", index, letter, callback)
        } else {
          return keyboardKey("key-standard", index, letter, callback)
        }
      })}
    </div>
  )
}

function KeyboardBottom(callback1, callback2, callback3, letterState) {

  const keyValues = ['Z','X','C','V','B','N','M']
  return (
    <div className="keyboard-bottom">
      <button 
        className="key-action" 
        key={`keyboard-Ent`} 
        type="submit" 
        value={'Ent'}
        onClick={callback3}>
          Ent
      </button>
      {keyValues.map((letter, index) => {
        if(letterState[letter] === 'correct') {
          return keyboardKey("key-correct", index, letter, callback1)
        } else if(letterState[letter] === 'close') {
          return keyboardKey("key-close", index, letter, callback1)
        } else if(letterState[letter] === 'wrong') {
          return keyboardKey("key-wrong", index, letter, callback1)
        } else {
          return keyboardKey("key-standard", index, letter, callback1)
        }
      })}
      <button 
        className="key-action" 
        key={`keyboard-del`} 
        type="submit" 
        value={'del'}
        onClick={callback2}>
          del
      </button>
    </div>
  )
}

export function createKeyboard (callback1, callback2, callback3, object) {
  return (
    <div className="keyboard-container">
    {KeyboardTop(callback1, object)}
    {KeyboardMiddle(callback1, object)}
    {KeyboardBottom(callback1, callback2, callback3, object)}
  </div>
  )
}