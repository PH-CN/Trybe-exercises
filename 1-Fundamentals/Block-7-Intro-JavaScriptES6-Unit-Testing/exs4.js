// Maior palavra de uma frase 
const longestWord = phrase => {

  let arr = phrase.split(' ');
  let length = 0;
  let result = '';

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i].length > length) {
      length = arr[i].length
      result = arr[i]
    }
  }
  return result
}
