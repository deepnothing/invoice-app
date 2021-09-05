
export const deleteDBInvoice = (id) => {

    const API = `http://127.0.0.1:5000/delete-invoice/${id}`;

    return fetch(API, { method: "DELETE" })
}