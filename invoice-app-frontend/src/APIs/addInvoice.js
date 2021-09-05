
export const addDBInvoice = (newinvoice) => {


    var queryString = Object.keys(newinvoice).map(key => key + '=' + newinvoice[key]).join('&');
    console.log(queryString)



    const API = `http://127.0.0.1:5000/add-invoice`;

    return fetch(API, {
        method: "POST", headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newinvoice)
    })
}