const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

const isEven = (fas) => {
  if (fas % 2 === 0) {
    console.log(fas, 'is even');
  }
};

const isOdd = (fas) => {
  if ((fas % 2) > 0) {
    console.log(fas, 'is odd');
  }
};

repeat(3, isEven); // Testa quais números serão pares;
repeat(3, isOdd); // Testa quais números serão ímpares;