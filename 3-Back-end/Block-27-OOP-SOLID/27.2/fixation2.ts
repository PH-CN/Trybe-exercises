interface MyInterface {
  myNumber: number;
  myFunc(myParam: number): string;
}

class MyClass implements MyInterface {
  constructor(public myNumber: number) { }

  myFunc(myParam: number): string {
    const sum = this.myNumber + myParam
    return `${sum}`
  }
}

const obj1 = new MyClass(30);

console.log(obj1.myFunc(60));