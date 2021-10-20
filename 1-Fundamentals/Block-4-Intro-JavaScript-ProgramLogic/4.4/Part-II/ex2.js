function indexOfBiggest (numbers) {
  let biggestIndex = 0;
  for(i in numbers) {
    if (numbers[biggestIndex] < numbers[i]) {
    biggestIndex = i
    }  
  }
  console.log(biggestIndex)
  return biggestIndex
}

indexOfBiggest([2, 3, 6, 7, 10, 1])
