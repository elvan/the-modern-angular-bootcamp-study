class Car {
  constructor(public color: string, private year: number) {}

  drive() {
    this.putInGear();
    this.pressPedal();
    this.turnWheel();
  }

  private putInGear() {}

  private pressPedal() {}

  private turnWheel() {}
}

const myCar = new Car('red', 2000);
myCar.drive();

console.log(myCar.color);
