const posiviteNegative = (num) => {
  if (num === 0) return 'Neutro'
  if (num > 0) return 'Positivo'
  if (num < 0) return 'Negativo'
}

module.exports = posiviteNegative;