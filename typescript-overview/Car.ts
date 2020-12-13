export class Car {
  year: number;

  constructor() {
    this.year = 2010;
  }

  drive(speed: number) {
    console.log(`Driving at ${speed}`);
  }
}
