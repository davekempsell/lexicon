export function KeyboardTop(callback) {

  const keyValues = ['Q','W','E','R','T','Y','U','I','O','P']

  return (
    <div className="keyboard-top" key="keyboard-top">
      {keyValues.map((letter, index) => {
        return (
          <button 
            className="key-standard" 
            key={`keyboard-${index}`} 
            type="submit" 
            value={letter}
            onClick={callback}>
              {letter}
            </button>
        )
      })}
    </div>
  )
}

export function KeyboardMiddle(callback) {

  const keyValues = ['A','S','D','F','G','H','J','K','L']

  return (
    <div className="keyboard-middle">
      {keyValues.map((letter, index) => {
        return (
          <button 
            className="key-standard" 
            key={`keyboard-${index}`} 
            type="submit" 
            value={letter}
            onClick={callback}>
              {letter}
            </button>
        )
      })}
    </div>
  )
}

export function KeyboardBottom(callback1, callback2, callback3) {

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
        return (
          <button 
            className="key-standard" 
            key={`keyboard-${index}`} 
            type="submit" 
            value={letter}
            onClick={callback1}>
              {letter}
            </button>
        )
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