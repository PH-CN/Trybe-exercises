let n = 5;
let symbol = '*';
let inputLine = '';
let middle = (n + 1) / 2;
let left = middle;
let right = middle;

for (let lineIndex = 0; lineIndex <= middle; lineIndex ++) {
  for (let columnIndex = 0; columnIndex <= n; columnIndex ++) {
    if (columnIndex > left && columnIndex < right) {
      inputLine = inputLine + symbol;
    } else {
      inputLine = inputLine + ' ';
    }
  }
  console.log(inputLine);
  inputLine = '';
  right ++;
  left --; 
};