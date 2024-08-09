class Squre {
  constructor(width) {
    this.width = width;
  }

  get area() {
    return this.width * this.width;
  }
}

const s1 = new Squre(5);
console.log(s1.area);
