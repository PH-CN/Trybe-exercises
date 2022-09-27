function hydrate(phrase) {
  let count = 0;
  phrase = phrase.replace(/[^0-9]/g, '');
  for (let i = 0; i < phrase.length; i += 1) {
    count += parseInt(phrase[i]);
  }
  if (count === 1) {
    return count + ' copo de água';
  }
  return count + ' copos de água';
}

module.exports = hydrate;