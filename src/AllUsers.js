

async function getUsers() {
    let allUsers = []
    await fetch(`https://dashboard-admin-30327-default-rtdb.firebaseio.com/allusers.json`, {
        method: 'GET'
    }).then(response => {
        if (response.status === 200) {
            return response.json();
        }
    }).then(data => {
        allUsers = Object.entries(data) ?? []
    })

    return allUsers;
}


async function deleteUser(userID) {
    await fetch(`https://dashboard-admin-30327-default-rtdb.firebaseio.com/allusers/${userID}.json`, {
        method: 'DELETE'
    }).then(response => {
        if (response.status !== 200) {
            throw new Error('Failed to Delete!!!!')
        }
    }).catch(err => console.warn(err))
}


async function editUser(userID, newInfo) {
    await fetch(`https://dashboard-admin-30327-default-rtdb.firebaseio.com/allusers/${userID}.json`, {
        method: 'PUT',
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


export {getUsers, editUser, deleteUser}