class Car {
  public color: string;
  private year: number;

  constructor(color: string, year: number) {
    this.color = color;
    this.year = year;
  }

  public drive() {
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
