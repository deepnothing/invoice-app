export const getInvoices = () => {

    const API = 'http://127.0.0.1:5000/';

    return fetch(API, { method: "GET" })

}