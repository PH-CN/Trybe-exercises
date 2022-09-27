interface Automobile {
  doors: 6,
  wheels: 4,
  windoes: 4,
  type: string,
}

interface Feline {
  biped: false,
  paws: 4,
  race: string,
}

interface Airplane {
  wings: 2,
  fly(): void,
  land(): void,
  material: string,
}