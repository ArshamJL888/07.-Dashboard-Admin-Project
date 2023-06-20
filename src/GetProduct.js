import { getProducts } from "./AllProducts";

async function getProduct(productID) {
    let product = {};
    await getProducts().then(data => {
        product = data.find(info => info[1].id === productID)
    })
    return product;
}

export {getProduct}