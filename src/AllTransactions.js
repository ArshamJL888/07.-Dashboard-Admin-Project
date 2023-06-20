

async function getTransactions() {
    let allTransactions = []
    await fetch(`https://dashboard-admin-30327-default-rtdb.firebaseio.com/transactions.json`, {
        method: 'GET'
    }).then(response => {
        if (response.status === 200) {
            return response.json();
        }
    }).then(data => {
        allTransactions = Object.entries(data) ?? []
    })
    return allTransactions;
}


export default getTransactions;