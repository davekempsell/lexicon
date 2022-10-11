import { lexiconLogic } from "./lexiconLogic";

describe('Lexicon Logic function', () => {
  it('returns the guess word as an array of letters if all guessed in correct place', () => {
    expect(lexiconLogic('REACT', 'REACT')).toEqual(['R','E','A','C','T'])
  })
  it('returns guess word with ! after letters not in word', () => {
    expect(lexiconLogic('REACH', 'REACT')).toEqual(['R','E','A','C','H!'])
  })
  it('returns guess word with ? after letters in word, but in wrong place', () => {
    expect(lexiconLogic('CRATE', 'REACT')).toEqual(['C?','R?','A','T?','E?'])
  })
  it('only returns a ? after the first letter included in the word when only one is present', () => {
    expect(lexiconLogic('ELATE', 'REACT')).toEqual(['E?','L!','A','T?','E!'])
  })
  it('returns a ! after a letter if it is in the correct place later in the guess', () => {
    expect(lexiconLogic('TREAT', 'REACT')).toEqual(['T!','R?','E?','A?','T'])
  })
})