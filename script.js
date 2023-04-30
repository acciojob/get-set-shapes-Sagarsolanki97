class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Rectangle extends Shape {
  getWidth() {
    return this.width;
  }

  getHeight() {
    return this.height;
  }

  getArea() {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  constructor(side) {
    super(side, side);
  }

  getPerimeter() {
    return 4 * this.width;
  }
}

