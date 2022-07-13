const path = require("path");
const fs = require("fs");

module.exports = class Product {
  constructor(title, imgLink) {
    this.title = title;
    this.imgLink = imgLink;
  }
  save() {
    const targetPath = path.join(global.__basedir, "data", "products.json");
    fs.readFile(targetPath, (err, fileContent) => {
      let products = [];
      if (!err && fileContent.length > 0) products = JSON.parse(fileContent);
      products.push(this); // if I had used normal function this would refer to the local this of the function , so better use arrow function instead;
      fs.writeFile(targetPath, JSON.stringify(products), (err) => {
        console.error("Some Problem has Occured! While writing new data!");
      });
    });
  }
  static fetchAll(cb) {
    const targetPath = path.join(global.__basedir, "data", "products.json");
    fs.readFile(targetPath, (err, fileContent) => {
      if (!err && fileContent.length > 0) products = JSON.parse(fileContent); // if file content length is 0 then parse dosen't work! 
      
      else cb([]); // implementing like this for overcomming the async problem!
    });
  }
};
