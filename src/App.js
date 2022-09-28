import React from 'react'
import './App.css'
import Logo from './lexBrickLogo.png'

function App() {
  return (
    <div id="game">
      <div class="title">
        <img src={Logo} class="logo" />
        <h1>LEXICON</h1>
      </div>
      <div id="grid-1" class="grid">
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
      </div>
      <div id="grid-2" class="grid">
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
      </div>
      <div id="grid-3" class="grid">
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
      </div>
      <div id="grid-4" class="grid">
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
      </div>
      <div id="grid-5" class="grid">
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
      </div>
      <div id="grid-6" class="grid">
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
      </div>
      <div class="keyboard-top">
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
      <div class="keyboard-middle">
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
      <div class="keyboard-bottom">
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
      <div class="footer">
        <p>Built by Dave Kempsell 2022</p>
      </div>
    </div>
  );
}

export default App;