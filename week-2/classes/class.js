// Classes
/**In Javascript, classes are a way to define blueprint for creating objects(these object are different from the objects define in the last section
 *
 * For example:
 */
class Rectangle {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  area() {
    const area = this.width * this.height;
    return area;
  }

  paint() {
    console.log(`Painting with color ${this.color}`);
  }
}

const rect = new Rectangle(2, 4);
const area = rect.area();
console.log(area);
