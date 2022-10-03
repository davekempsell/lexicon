let TargetWord = "realm"

function letterGuesses(word) {
  const letters = word.split("")
  const count = {};

  for (const element of letters) {
    if(count[element]) {
      count[element] += 1;
    } else {
      count[element] = 1;
    }
  }

  return count
}

console.log(letterGuesses(TargetWord))