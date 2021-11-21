const raffle = (myNumber, callback) => {
  const winner = Math.round(Math.random() * 100);
  console.log(winner);

  return callback(myNumber, winner) ? 'Parabéns você ganhou' : 'Tente novamente';
}

const checkNumber = (myNumber, winner) => {
    if (myNumber === winner) {
      return true;
    } else {
      return false;
    };
};

console.log(raffle(10, checkNumber));