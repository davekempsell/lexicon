import linkedIn from './linkedinlogo.png'

function ExampleGrid1() {
  return (
    <div key={'ExampleGrid-1'} className="grid">
      <div className="example-box-correct" key='exampleBox-1'>A</div>
      <div className="example-box-empty" key='exampleBox-2'>G</div>
      <div className="example-box-empty" key='exampleBox-3'>I</div>
      <div className="example-box-empty" key='exampleBox-4'>L</div>
      <div className="example-box-empty" key='exampleBox-5'>E</div>
    </div>
  )
} 

function ExampleGrid2() {
  return (
    <div key={'ExampleGrid-2'} className="grid">
      <div className="example-box-empty" key='exampleBox-1'>R</div>
      <div className="example-box-close" key='exampleBox-2'>E</div>
      <div className="example-box-empty" key='exampleBox-3'>A</div>
      <div className="example-box-empty" key='exampleBox-4'>C</div>
      <div className="example-box-empty" key='exampleBox-5'>T</div>
    </div>
  )
} 

function ExampleGrid3() {
  return (
    <div key={'ExampleGrid-3'} className="grid">
      <div className="example-box-empty" key='exampleBox-1'>S</div>
      <div className="example-box-empty" key='exampleBox-2'>T </div>
      <div className="example-box-empty" key='exampleBox-3'>A</div>
      <div className="example-box-wrong" key='exampleBox-4'>C</div>
      <div className="example-box-empty" key='exampleBox-5'>K</div>
    </div>
  )
} 

export function InfoPopUp(closePopUp, popUpState, infoState) {
  if(infoState && !popUpState) {
    return (
      <div className="info-popup">
        <button 
          className='popup-close'
          type="submit"
          onClick={closePopUp}>
            X
        </button>
        <div className="popup-content">
          <div className="info-box">
            <div className='how-to-play'>How to play:</div>
              <div className='instructions'>
                <p>Guess the word in six tries.</p>
                <li>Every guess must be a valid 5-letter word.</li>
                <li>The colour of the tiles will change to give you clues.</li>
              </div>
              <div className='examples'>
                <p>Examples</p>
              <div className="grid-description">
                  {ExampleGrid1()}
                  <p>A is in the word in that place.</p>
                </div>
                <div className="grid-description">
                  {ExampleGrid2()}
                  <p>E is in the word, but not there!</p>
                </div>
                <div className="grid-description">
                  {ExampleGrid3()}
                  <p>C is not in the word.</p>
                </div>
              </div>
              <div className='hardmode-instructions'>
                (In Hard Mode, you must use all revealed clues.)
              </div>
          </div>
        </div>
        <div className="info-popup-jobstuff">
            <p>
              Lexicon is modelled on the original Wordle game. It is a single page React.js app, built by Dave Kempsell in October 2022  
            </p>
            <p>Dave is currently looking for a job, check out his LinkedIn!</p>
            <a href="https://www.linkedin.com/in/dave-kempsell-207069179" target="_blank" rel="noreferrer">
              <img src={linkedIn} className="logo" alt="linkedin"/>
            </a>
          </div>
      </div>
    )
  }
}

  // Info Button
export function infoButton(popUpState, setInfoState) {

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