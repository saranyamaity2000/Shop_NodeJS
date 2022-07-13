const path = require("path");
const fs = require("fs");

module.exports = class Product {
  constructor(title, imgLink) {
    this.title = title;
    this.imgLink = imgLink;
  }
  static fetchAll(cb) {
    const targetPath = path.join(global.__basedir, "data", "products.json");
    fs.readFile(targetPath, (err, fileContent) => {
      if (!err && fileContent.length > 0) cb(JSON.parse(fileContent));
      else cb([]);
    });
  }
  save() {
    const targetPath = path.join(global.__basedir, "data", "products.json");
    Product.fetchAll((products) => {
      products.push(this);
      fs.writeFile(targetPath, JSON.stringify(products), err => {
        if (err) console.log(err);
      });
    });
  }
};
