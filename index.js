const express = require('express');
const app = express()

const db = require('./config/db');

const timesNBA2 = require("./timesNBA2");
const conferencia = require ("./conferencia");
const ligas = require ("./ligas")



app.get('/', (req,res) => {
    res.send('TIMES DA NBA')
})

app.use('/times', timesNBA2);
app.use('/conferecia', conferencia);
app.use('/ligas', ligas);

app.listen(3000, () => {
    console.log(`Executando` );
});