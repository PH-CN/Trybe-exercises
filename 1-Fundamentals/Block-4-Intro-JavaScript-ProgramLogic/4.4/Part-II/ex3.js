function indexOfLowest (numbers) {
  let lowestIndex = 0;
  for(i in numbers) {
    if (numbers[lowestIndex] > numbers[i]) {
    lowestIndex = i
    }  
  }
  console.log(lowestIndex)
  return lowestIndex
}

indexOfLowest([2, 4, 6, 7, 10, 0, -3])
