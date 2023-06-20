

async function getNewMembers() {
    let newMembers = []
    await fetch(`https://dashboard-admin-30327-default-rtdb.firebaseio.com/newMembers.json`, {
        method: 'GET'
    }).then(response => {
        if (response.status === 200) {
            return response.json();
        }
    }).then(data => {
        newMembers = Object.entries(data) ?? []
    })

    return newMembers;
}


export default getNewMembers