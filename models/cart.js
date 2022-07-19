const fs = require('fs');
const path = require('path');

const targetPath = path.join(global.__basedir, "data", "cart-products.json");

/*
In cart , we basically need product id , their quantity and total price
*/

module.exports = class Cart { // now there will be single instance so lets make 
    // everything static 

    static addProduct(product) { // product will be a object with properties  

        Cart.getCart(cart => {
            const existingProductIdx = cart.products.findIndex(p => p.id === product.id);

            if (existingProductIdx != -1) {
                const existingProduct = cart.products[existingProductIdx];
                const updatedProduct = { ...existingProduct };
                updatedProduct.quantity += 1;
                cart.products[existingProductIdx] = updatedProduct;
            } else {
                const updatedProduct = {
                    id: product.id,
                    title: product.title,
                    imgLink: product.imgLink,
                    price: product.price,
                    quantity: 1
                };
                cart.products.push(updatedProduct);
            }
            cart.totalPrice += +product.price;

            fs.writeFile(targetPath, JSON.stringify(cart), err => {
                if (err) console.error(err);
            });
        });
    }

    static getCart(cb) {
        fs.readFile(targetPath, (err, fileContent) => {
            let cart = {
                products: [],
                totalPrice: 0
            };
            if (!err && fileContent.length > 0) {
                cart = JSON.parse(fileContent);
            }
            cb(cart);
        });
    }
}
