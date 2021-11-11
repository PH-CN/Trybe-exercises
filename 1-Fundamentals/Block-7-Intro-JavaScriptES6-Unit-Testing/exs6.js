let mySkills = ['HTML', 'JS', 'CSS', 'DOM', 'UNIX']
mySkills = mySkills.sort()

function makePhrase(replacement) {
  const string = param => `Tryber ${param} aqui!`

  let result = `  ${string(replacement)}

  Minhas principais skills são:

  -${mySkills[0]}
  -${mySkills[1]}
  -${mySkills[2]}
  -${mySkills[3]}
  -${mySkills[4]}
  
  #goTrybe`

  return result
}

console.log(makePhrase('Pedro'))