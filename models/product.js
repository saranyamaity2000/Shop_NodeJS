const path = require("path");
const fs = require("fs");

module.exports = class Product {

  constructor(title, imgLink, price, description) {
    this.id = Math.random().toString() + Math.random().toString(); // just a random id creation for now
    this.title = title;
    this.imgLink = imgLink;
    this.price = price;
    this.description = description;
  }

  static fetchAll(cb) {
    /*
         cb : it is callback function which takes 
              one parameter (basically all the fetched data)
    */
    const targetPath = path.join(global.__basedir, "data", "products.json");
    fs.readFile(targetPath, (err, fileContent) => {
      if (!err && fileContent.length > 0) cb(JSON.parse(fileContent));
      else cb([]);
    });
  }

  save() {
    /*
    saves this item to the json file 
    */
    const targetPath = path.join(global.__basedir, "data", "products.json");
    Product.fetchAll((products) => {
      products.push(this);
      fs.writeFile(targetPath, JSON.stringify(products), err => {
        if (err) console.log(err);
      });
    });
  }
};
