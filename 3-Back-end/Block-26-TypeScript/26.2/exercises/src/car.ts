import Colors from "./colors";
import Directions from "./directions";
import Doors from "./doors";

class Car {
  brand: string;
  color: Colors;
  doors: number;

  constructor(brand: string, color: Colors, doors: number) {
    this.brand = brand;
    this.color = color;
    this.doors = doors;
  }

  honk = (): void => {
    console.log('BIIIIIIP BIIIIIIP')
  }

  openTheDoor = (door: Doors): void => {
    console.log(`Opening ${door}`)
  }

  closeTheDoor = (door: Doors): void => {
    console.log(`Closing ${door}`)
  }

  turnOn = (): void => {
    console.log('hikhikhik starting up the car');
  }

  turnOff = (): void => {
    console.log('vrum... turning the car off');
  }

  speedUp = (): void => {
    console.log('accelerating!!!')
  }

  speedDown = (): void => {
    console.log('braking!!!')
  }

  stop = (): void => {
    console.log('fully stopping the car')
  }

  turn = (direction: Directions): void => {
    console.log(`turning ${direction}`)
  }
}

export default Car;