const randomNumber = () => (Math.floor(Math.random() * 100));
const Upper = (string) => string.toUpperCase();
const firstLetter = (string) => string[0];
const concatenateStrings = (a, b) => `${a} ${b}`;
function fetchDog() {
  return fetch("https://dog.ceo/api/breeds/image/random").then(response =>
    response
      .json()
      .then(json =>
        response.ok ? Promise.resolve(json) : Promise.reject(json)
      )
  );
}

module.exports = { randomNumber, Upper, firstLetter, concatenateStrings, fetchDog };