let n = 7;
let symbol = '*';
let middle = (n + 1) / 2;
let left = middle;
let right = middle;

for (let lineIndex = 1; lineIndex <= middle; lineIndex ++) {
  let outputLine = '';
  for (let columnIndex = 1; columnIndex <= n; columnIndex ++) {
    if (columnIndex == left || columnIndex == right || lineIndex == middle) {
      outputLine = outputLine + symbol;
    } else {
      outputLine = outputLine + ' ';
    }
  }
  console.log(outputLine);
  right ++;
  left --; 
};