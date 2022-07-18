const fs = require('fs'); 
const path = require('path');

const targetPath = path.join(global.__basedir, "data", "cart-products.json");

/*
In cart , we basically need product id , their quantity and total price
*/

module.exports = class Cart { // now there will be single instance so lets make 
    // everything static 
    static totalPrice = 0; 
    static cartProducts = []

    static addProduct(product) { // prduct will be a object with properties 
        
    }
}
