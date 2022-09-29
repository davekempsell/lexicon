import React from 'react'
import './App.css'
import Logo from './lexBrickLogo.png'
import EmptyGrid from './components/emptyGrid';
import { KeyboardTop, KeyboardMiddle, KeyboardBottom } from './components/keyboard';

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
      <div className="keyboard-container">
        {KeyboardTop()}
        {KeyboardMiddle()}
        {KeyboardBottom()}
      </div>
      <div className="footer">
        <p>Built by Dave Kempsell 2022</p>
      </div>
    </div>
  );
}

export default App;