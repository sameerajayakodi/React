class Rectangle {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
    console.log("new rectangle created!");

    getArea = () => {
      return this.width * this.height;
    };
  }
}

const r1 = new Rectangle();
