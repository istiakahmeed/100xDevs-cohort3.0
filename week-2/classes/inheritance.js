// Inheritance in class
/**
Inheritance in JavaScript classes allows one class to inherit properties and methods from another class. This mechanism enables code reuse, making it easier to create new classes that are based on existing ones, without having to duplicate code.
 */

class Circle {
  constructor(radius, color) {
    this.radius = radius;
    this.color = color;
  }
  area() {
    const area = this.radius * this.radius * Math.PI;
  }
  paint() {
    console.log(`The color of the circle is ${this.color}`);
  }
}

const circle = new Circle(2, "red");
const area = circle.area();
console.log(area);

class Circle extends Shape {
  constructor(radius, color) {
    super(color); // Call the parent class constructor to set the color
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius * this.radius;
  }

  getDescription() {
    return `A circle with radius ${this.radius} and color ${this.color}`;
  }
}

const circle2 = new Circle(3, "blue");

console.log(circle2.area());
