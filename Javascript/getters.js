class Squre {
  constructor(width) {
    this.width = width;
  }

  get area() {
    return this.width * this.width;
  }

  set area(newArea) {
    this.width = Math.sqrt(newArea);
  }
}

const s1 = new Squre(5);
console.log(s1.area);

s1.area = 625;

console.log(s1.area);
