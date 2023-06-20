

async function getXAxisData() {
    let XAxisDatas = []
    await fetch(`https://dashboard-admin-30327-default-rtdb.firebaseio.com/xAxisData.json`, {
        method: 'GET'
    }).then(response => {
        if (response.status === 200) {
            return response.json();
        }
    }).then(data => {
        XAxisDatas = Object.entries(data) ?? []
    })

    return XAxisDatas;
}


export default getXAxisData;