const posiviteNegative = (num) => {
  if (num === 0) return 'Neutro'
  if (num > 0) return 'Positivo'
  if (num < 0) return 'Negativo'
  if (typeof num !== 'number') {
    return 'O valor deve ser um número'
  }
}

module.exports = posiviteNegative;
