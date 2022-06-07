"use strict";
const water = 'solid';
const RG = 1;
const myComputer = 'linux';
const myVogal = 'u';
class Dog {
    constructor(race) {
        this.bark = () => {
            console.log(`${this.race}: AUAUAUAUAAUAU WOOF WOOF`);
        };
        this.race = race;
    }
}
const Dog1 = new Dog('Yorkshire');
Dog1.bark();
class House {
    constructor(street, number, floors) {
        this.informLocalization = (proprietary) => {
            console.log(`${proprietary}'s house is located at ${this.street} number ${this.number} and has ${this.floors} floors.`);
        };
        this.street = street;
        this.number = number;
        this.floors = floors;
    }
}
const House1 = new House('Alameda São francisco', 22, 2);
House1.informLocalization('Joesley');
class Flight {
    constructor(id, airplane, destination) {
        this.getInfos = (weather) => {
            console.log(`Flight number ${this.id} is currently in progress, the airplane executing it is the ${this.airplane}, the destination is ${this.destination} and the weather is ${weather}.`);
        };
        this.id = id;
        this.airplane = airplane;
        this.destination = destination;
    }
}
const Flight1 = new Flight(12142, 'boing-006', 'Paris');
Flight1.getInfos('sunny');
