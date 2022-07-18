const path = require("path");
const fs = require("fs");

const targetPath = path.join(global.__basedir, "data", "products.json");

module.exports = class Product {

  constructor(title, imgLink, price, description) {
    this.id = Math.random().toString() + Math.random().toString(); // just a random id creation for now
    this.title = title;
    this.imgLink = imgLink;
    this.price = price;
    this.description = description;
  }

  /*
         cb : it is callback function which takes 
              one parameter (basically all the fetched data)
  */

  static fetchAll(cb) { // fetches all data! 
    fs.readFile(targetPath, (err, fileContent) => {
      if (!err && fileContent.length > 0) cb(JSON.parse(fileContent));
      else cb([]);
    });
  }

  static findbyId(id, cb) {
    Product.fetchAll(products => {
      const product = products.find(p => p.id === id);
      cb(product);
    });
  }

  save() { // saves this item to the json file 
    Product.fetchAll(products => {
      products.push(this);
      fs.writeFile(targetPath, JSON.stringify(products), err => {
        if (err) console.log(err);
      });
    });
  }
};
