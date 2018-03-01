"use strict"
/*Find all purchases made in February.

Find all purchases made by Ari, and add grand total by sum all total price of items. The output should only a number.

Find people who have purchases with grand total lower than 300000. The output is an array of people name. Duplicate name is not allowed.
*/
let fs = require('fs')
let data = JSON.parse(fs.readFileSync('data.json', 'utf-8'))


// console.log(data[0], data[1], data[2])
//   console.log('\n')
  //console.log(data[0], data[2], data[4])
class Market{

    constructor(file){
      this._file = file
      this._Collection = []
    }
    dataFebruari(){
  console.log(data[0], data[1], data[2] + '\n')
    }
    phurcaseByAri(){
      let allPhurchase = data[0].items[0].price + data[0].items[1].price +
      data[2].items[0].price + data[2].items[1].price +
      data[4].items[0].price + data[4].items[1].price;

      console.log('all phurchase by ari :' +allPhurchase);
    }
    phurcaseLower(){
      console.log(data[5].customer)
    }
  }

let market = new Market();
// console.log(market.dataFebruari())
console.log(market.phurcaseByAri());
console.log(market.phurcaseLower());
