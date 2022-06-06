export function greeter(name: string) {
  return `Olá ${name}!`;
}

export function personAge(name: string, age: number) {
  return `${name} tem ${age} anos!`;
}

export function add(x: number, y: number): number {
  return x + y;
}

export function sumArray(numbers: number[]): number {
  return numbers.reduce(add, 0);
}

export function triangle(base: number, height: number): number {
  return (base * height) / 2;
}

export function square(side: number): number {
  return side ** 2;
}

export function rectangle(base: number, height: number): number {
  return base * height;
}

export const diamond = (bigger: number, smaller: number) => {
  return (bigger * smaller) / 2
}

export const trapeze = (bigger: number, smaller: number, height: number) => {
  return (( bigger + smaller) * height) / 2
}

export const circle = (radius: number) => {
  return 3.14 * (radius ** 2)
}