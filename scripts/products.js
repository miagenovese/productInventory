class Product {
  constructor(name, weight, price){
    this._name = name;
    this._weight = weight;
    this._price = price;
    this._productRatings = [];
    this._inStock = true;
  }
  get name(){
    return this._name;
  }
  get weight(){
    return this._weight;
  }
  get price(){
    return this._price;
  }
  get productRatings(){
    return this._productRatings;
  }
  get inStock(){
    return this._inStock;
  }
  toggleInStockStatus(){
    this._inStock = !this._inStock;
  }
  set inStock(status){
    return this._inStock = status;
  }
  outputStockStatus(){
    if (this._inStock === true) {
      return `in stock`;
    } else { return `not in stock`}
  }
  getAverageRating(){
    let ratingSum = this.productRatings.reduce((acc, val) =>
      acc + val, 0) / this._productRatings.length;
    return ratingSum;
  }
  addProductRatings(newRating){
    this._productRatings.push(newRating);
  }
}

// Testing the superclass
const newProduct = new Product("product", 33, 45);
newProduct.toggleInStockStatus();
console.log(`${newProduct.name} is ${newProduct.weight}kg, costs $${newProduct.price} and is ${newProduct.outputStockStatus()}.`);
console.log(newProduct.inStock);
newProduct.addProductRatings(1);
newProduct.addProductRatings(4);
newProduct.addProductRatings(4);
newProduct.addProductRatings(3);
console.log(newProduct.productRatings);
console.log(newProduct.getAverageRating());

class Lighting extends Product {
  constructor(name, weight, price, energyClass) {
    super(name, weight, price);
    this._energyClass = energyClass;
  }
  get energyClass(){
    return this._energyClass;
  }
}

const stockholmLamp = new Lighting("Stockholm", 10, 42, "A++");
console.log(`Check out the new high efficiency collection, featuring the ${stockholmLamp.name}. Only $${stockholmLamp.price} for a limited time. Currently ${stockholmLamp.outputStockStatus()}.`);