class Rectangle {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
    console.log("new rectangle created!");
  }
  getArea = () => {
    return this.width * this.height;
  };

  aboutMe = () => {
    return `My width is ${this.width}.
    My Color is ${this.color}`;
  };
}

const r1 = new Rectangle(5, 4, "red");

console.log("Area = " + r1.getArea());
console.log(r1.aboutMe());
