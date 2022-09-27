function mostCharacters (words) {
  let biggest = words[0]
  for(i = 0; i < words.length; i++) {
    if (biggest.length < words[i].length) {
      biggest = words[i]
      }
    }
    console.log(biggest)
    return biggest
}
mostCharacters(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])