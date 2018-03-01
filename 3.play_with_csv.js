"use strict"
const fs = require('fs')

class Product {
  constructor(name, category, price) {
    this.name = name;
    this.category = category;
    this.price = price;
  }
}

class ProductParser {
  constructor(file){
    this._file = file
    this._Collection = []
  }
  data(){
    let fsSplit = fs.readFileSync(this._file, 'utf-8').split('\n')

    return fsSplit;
  }
  convert(){
    let arr = []
    for (let i = 1; i < this.data().length-1; i++){
      arr.push(this.data()[i].split(`,`));
    }
    for (let j = 0; j < arr.length; j++) {
      let product = new Product(arr[j][0],arr[j][1],arr[j][2],arr[j][3]);
      this._Collection.push(product);
    }
    return this._Collection
  }
}

let parser = new ProductParser('data.csv')
console.log(parser.convert())
/*
NAME, CATEGORY, PRICE
Xiaomi Redmi 5A, Smartphone, 1199000
Macbook Air, Laptop, 13775000
Samsung Galaxy J7, Smartphone, 3549000
DELL XPS 13, Laptop, 26799000
Xiaomi Mi 6, Smartphone, 5399000
LG V30 Plus, Smartphone, 10499000

*/
