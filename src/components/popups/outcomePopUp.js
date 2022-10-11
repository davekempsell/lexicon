import linkedIn from './linkedinlogo.png'

function outcomeText(state, word) {
  if(state) {
    return (
      <div className="popup-winner">
        <h1>Winner Winner!</h1>
        <h4>Congratulations on beating Lexicon!</h4>
        <p>To play again, simply refresh the screen and Lexicon will provide you with a brand new word.</p>
      </div>
    )
  } else {
    return (
      <div className="popup-loser">
        <h1>Unlucky!</h1>
        <h4>The word you were looking for was {word}</h4>
        <p>To play again, simply refresh the screen and Lexicon will provide you with a brand new word.</p>
      </div>
    )
  }
}

export function PopUp(callback, winState, TargetWord, popUpState) {
  if(popUpState) {
  return (
    <div className="popup">
      <button 
        className='popup-close'
        type="submit"
        onClick={callback}>
          X
      </button>
      <div className="popup-content">
        {outcomeText(winState, TargetWord)}
        <div className="popup-jobstuff">
          <p>
            Lexicon is modelled on the original Wordle game. It is a single page React.js app, built by Dave Kempsell in October 2022  
          </p>
          <p>Dave is currently looking for a job, check out his LinkedIn!</p>
          <a href="https://www.linkedin.com/in/dave-kempsell-207069179" target="_blank" rel="noreferrer">
            <img src={linkedIn} className="logo" alt="linkedin"/>
          </a>
        </div>
      </div>
    </div>
  )
  }
}