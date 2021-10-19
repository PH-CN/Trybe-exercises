function verifyPalindrome (word) {
let wordFront = ''
let wordBack = ''

for(i = 0; i < word.length; i++) {
  wordFront = wordFront + word[i]
  }
for (n = word.length - 1; n >= 0; n--) {
  wordBack = wordBack + word[n]
  }
if (wordFront === wordBack) {
  console.log(true)
  return true
  } else {
    console.log(false)
    return false
  }
}

verifyPalindrome('carambolas')