export function KeyboardTop() {

  const keyValues = ['Q','W','E','R','T','Y','U','I','O','P']

  return (
    <div className="keyboard-top" key="keyboard-top">
      {keyValues.map((letter, index) => {
        return (
          <button 
            className="key-standard" 
            key={`keyboard-${index}`} 
            type="submit" 
            value={letter}>
              {letter}
            </button>
        )
      })}
    </div>
  )
}

export function KeyboardMiddle() {

  const keyValues = ['A','S','D','F','G','H','J','K','L']

  return (
    <div className="keyboard-middle">
      {keyValues.map((letter, index) => {
        return (
          <button 
            className="key-standard" 
            key={`keyboard-${index}`} 
            type="submit" 
            value={letter}>
              {letter}
            </button>
        )
      })}
    </div>
  )
}

export function KeyboardBottom() {

  const keyValues = ['Z','X','C','V','B','N','M']
  return (
    <div className="keyboard-bottom">
      <button 
        className="key-action" 
        key={`keyboard-Ent`} 
        type="submit" 
        value={'Ent'}>
          Ent
      </button>
      {keyValues.map((letter, index) => {
        return (
          <button 
            className="key-standard" 
            key={`keyboard-${index}`} 
            type="submit" 
            value={letter}>
              {letter}
            </button>
        )
      })}
      <button 
        className="key-action" 
        key={`keyboard-del`} 
        type="submit" 
        value={'del'}>
          del
      </button>
    </div>
  )
}