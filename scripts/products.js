class Product {
  constructor(name, weight, price){
    this._name = name;
    this._weight = weight;
    this._price = price;
    this._productRatings = [];
    this._productNumber = 1000;
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
  get productNumber(){
    return this._productNumber;
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
  getAverageRating(){
    let ratingSum = this.productRatings.reduce((acc, val) =>
      acc + val, 0) / this._productRatings.length;
    return ratingSum;
  }
  addProductRatings(newRating){
    this._productRatings.push(newRating);
  }
  generateProductNumber(){
    let randomNumber = Math.floor(Math.random() * 2999) + 1111;
    this._productNumber+= randomNumber;
  }
}

// Testing the superclass
const newProduct = new Product("product", 33, 45);
console.log(`${newProduct.name} is ${newProduct.weight}kg and costs $${newProduct.price}.`);
// newProduct.toggleInStockStatus();
console.log(newProduct.inStock);
newProduct.addProductRatings(1, 3, 4, 2, 0);
console.log(newProduct.productRatings);
console.log(newProduct.getAverageRating());
console.log(newProduct.generateProductNumber());