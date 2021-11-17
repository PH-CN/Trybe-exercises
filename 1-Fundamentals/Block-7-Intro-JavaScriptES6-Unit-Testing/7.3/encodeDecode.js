function encode(phrase) {
  let vogals = ['a', 'e', 'i', 'o', 'u']
  let numbers = [1, 2, 3, 4, 5,];
  let encoded = ''
  for (let i = 0; i < phrase.length; i += 1) {
    if (phrase[i] === vogals[0]) {
      encoded += numbers[0]
    } else if (phrase[i] === vogals[1]) {
      encoded += numbers[1]
    } else if (phrase[i] === vogals[2]) {
      encoded += numbers[2]
    } else if (phrase[i] === vogals[3]) {
      encoded += numbers[3]
    } else if (phrase[i] === vogals[4]) {
      encoded += numbers[4]
    } else {
      encoded += phrase[i]
    }
  }
  return encoded
}
function decode(phrase) {
  let vogals = ['a', 'e', 'i', 'o', 'u']
  let numbers = [1, 2, 3, 4, 5,];
  let decoded = ''
  for (let i = 0; i < phrase.length; i += 1) {
    if (phrase[i] == numbers[0]) {
      decoded += vogals [0]
    } else if (phrase[i] == numbers[1]) {
      decoded += vogals[1]
    } else if (phrase[i] == numbers[2]) {
      decoded += vogals[2]
    } else if (phrase[i] == numbers[3]) {
      decoded += vogals[3]
    } else if (phrase[i] == numbers[4]) {
      decoded += vogals[4]
    } else {
      decoded += phrase[i]
    }
  }
  return decoded
}

module.exports = { encode, decode };