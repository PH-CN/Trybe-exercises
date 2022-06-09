type Bird = {
  wings: 2,
  beaks: 1,
  canFly: true,
}

type Sum = (a: number, b: number ) => number;

type Adress = {
  street: 'idk',
  number: 22
}

type Matter = 'liquid' | 'solid' | 'gaseous';

const water: Matter = 'solid';

type Id = number | string;

const RG: Id = 1;

type Os = 'linux' | 'windows' | 'mac';

const myComputer: Os = 'linux';

type Vogals = 'a' | 'e' | 'i' | 'o' | 'u';

const myVogal: Vogals = 'u'

class Dog {
  race: string;
  constructor(race: string) {
    this.race = race;
  }

  bark = (): void => {
    console.log(`${this.race}: AUAUAUAUAAUAU WOOF WOOF`)
  }
}

const Dog1 = new Dog('Yorkshire');

Dog1.bark();

class House {
  street: string;
  number: number;
  floors: number;
  constructor(street: string, number: number, floors: number) {
    this.street = street;
    this.number = number;
    this.floors = floors
  }

  informLocalization = (proprietary: string): void => {
    console.log(`${proprietary}'s house is located at ${this.street} number ${this.number} and has ${this.floors} floors.`);
  }
}

const House1 = new House('Alameda São francisco', 22, 2);

House1.informLocalization('Joesley');

class Flight {
  id: number;
  airplane: string;
  destination: string;
  constructor(id: number, airplane: string, destination: string) {
    this.id = id;
    this.airplane = airplane;
    this.destination = destination;
  }

  getInfos = (weather: string) => {
    console.log(`Flight number ${this.id} is currently in progress, the airplane executing it is the ${this.airplane}, the destination is ${this.destination} and the weather is ${weather}.`)
  }
}

const Flight1 = new Flight(12142, 'boing-006', 'Paris');

Flight1.getInfos('sunny');