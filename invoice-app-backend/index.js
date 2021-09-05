const express = require('express');
const cors = require('cors');
const knex = require('knex');
const bodyParser = require("body-parser");
require('dotenv').config();
const querystring = require('querystring');


const db = knex({
    client: 'pg',
    connection: {
        host: process.env.DATABASE_HOST,
        user: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE,
    },
});

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


const parser = express.urlencoded({ extended: false })
app.use(cors());

app.get('/', (req, res) => {
    db.select('*')
        .from('invoices')
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            console.log(err);
        });
});

app.post('/add-invoice', (req, res) => {
    newinvoice = JSON.parse('{"' + decodeURI(req.params.newinvoice).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');

    console.log(req.body, 'test')
    db('invoices')
        .insert(req.body)
        .then(() => {

            console.log('Invoice Added');
            return res.json({ msg: 'Invoice Added' });
        })
        .catch((err) => {
            console.log(err)
            return (err);
        });

});

app.delete('/delete-invoice/:number', (req, res) => {

    db('invoices')
        .where('id', '=', req.params.number)
        .del()
        .then(() => {
            console.log('Invoice Deleted');
            return res.json({ msg: 'Invoice Deleted' });
        })
        .catch((err) => {
            console.log(err);
        });
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}, http://localhost:${port}`));