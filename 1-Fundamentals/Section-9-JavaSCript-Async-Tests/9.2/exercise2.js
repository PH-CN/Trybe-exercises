
const fetchCoins = async () => {
  const url = 'https://api.coincap.io/v2/assets';

  const coins = await fetch(url)
    .then((response) => response.json())
    .then((data) => data.data)
    .catch((error) => error.toString());

  return coins;
}

const setCoins = async () => {
  const coins = await fetchCoins();

  const filteredCoins = coins.filter((coin) => Number(coin.rank) <= 10);

  const list = document.querySelector('#coinsList');

  filteredCoins.forEach((coin) => {
    const myLi = document.createElement('li');

    myLi.innerHTML = `${coin.name} (${coin.symbol}): ${Number(coin.priceUsd).toFixed(2)}`;

    list.appendChild(myLi)
  })
}

window.onload = () => setCoins();