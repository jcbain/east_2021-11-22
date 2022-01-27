class Rectangle {
  constructor(width, length){
    this.width = width;
    this.length = length;
  };

  calculateArea(){
    return this.width * this.length;
  }
};

// const rectangle = new Rectangle(4, 4);
// console.log(rectangle.calculateArea());

class RectangularPrism extends Rectangle {
  constructor(width, length, height){
    super( width, length);
    this.height = height;
  };

  calculateVolume(){
    return this.calculateArea() * this.height;
  }

};

const prism = new RectangularPrism(6, 7, 5);
console.log(prism.calculateVolume());

// const calculateVolume = prism.calculateVolume;
// calculateVolume();
