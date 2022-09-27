function techList(techArr, name) {
  techArr = techArr.sort();
  let output = [];
  let object = {};
  if (techArr.length < 1) {
    return 'Vazio!';
  }
  for (let i = 0; i < techArr.length; i += 1) {
    object.tech = techArr[i];
    object.name = name;
    output.push(object);
    object = {};
  }
  return output;
}

module.exports = techList;