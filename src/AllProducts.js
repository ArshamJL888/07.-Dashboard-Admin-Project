

async function getProducts() {
    let allProducts = []
    await fetch(`https://dashboard-admin-30327-default-rtdb.firebaseio.com/allProducts.json`, {
        method: 'GET'
    }).then(response => {
        if (response.status === 200) {
            return response.json();
        }
    }).then(data => {
        allProducts = Object.entries(data) ?? []
    })

    return allProducts;
}


async function deleteProduct(productID) {
    await fetch(`https://dashboard-admin-30327-default-rtdb.firebaseio.com/allProducts/${productID}.json`, {
        method: 'DELETE'
    }).then(response => {
        if (response.status !== 200) {
            throw new Error('Failed to Delete!!!!')
        }
    }).catch(err => console.warn(err))
}


async function editProduct(productID, newInfo) {
    await fetch(`https://dashboard-admin-30327-default-rtdb.firebaseio.com/allProducts/${productID}.json`, {
        method: 'PATCH',
        headers: {
            'Content-type': 'Application/json'
        },
        body: JSON.stringify(newInfo)
    }).then(response => {
        if (response.status !== 200) { 
            throw new Error('Failed to Edit!!!!')
        }
    }).catch(err => console.warn(err))
}

export {editProduct, deleteProduct, getProducts}