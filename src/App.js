import React from 'react'
import './App.css'
import Logo from './lexBrickLogo.png'
import EmptyGrid from './components/emptyGrid';

function App() {
  return (
    <div id="game">
      <div className="title">
        <img src={Logo} className="logo" alt="logo"/>
        <h1>LEXICON</h1>
      </div>
      {EmptyGrid(1)}
      {EmptyGrid(2)}
      {EmptyGrid(3)}
      {EmptyGrid(4)}
      {EmptyGrid(5)}
      {EmptyGrid(6)}
      
      <div className="keyboard-top">
        <button type="submit">Q</button>
        <button type="submit">W</button>
        <button type="submit">E</button>
        <button type="submit">R</button>
        <button type="submit">T</button>
        <button type="submit">Y</button>
        <button type="submit">U</button>
        <button type="submit">I</button>
        <button type="submit">O</button>
        <button type="submit">P</button>
      </div>
      <div className="keyboard-middle">
        <button type="submit">A</button>
        <button type="submit">S</button>
        <button type="submit">D</button>
        <button type="submit">F</button>
        <button type="submit">G</button>
        <button type="submit">H</button>
        <button type="submit">J</button>
        <button type="submit">K</button>
        <button type="submit">L</button>
      </div>
      <div className="keyboard-bottom">
      <button type="submit">
          del
        </button>
        <button type="submit">Z</button>
        <button type="submit">X</button>
        <button type="submit">C</button>
        <button type="submit">V</button>
        <button type="submit">B</button>
        <button type="submit">N</button>
        <button type="submit">M</button>
        <button type="submit">Ent</button>
      </div>
      <div className="footer">
        <p>Built by Dave Kempsell 2022</p>
      </div>
    </div>
  );
}

export default App;