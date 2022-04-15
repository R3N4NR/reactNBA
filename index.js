const express = require('express');
const app = express()

const timesNBA2 = require("./timesNBA2");
const conferencias = require ("./conferencias");
// const ligas = require ("./ligas")


app.use('/times', timesNBA2);
app.use('/conferencias', conferencias);
// app.use('/ligas', ligas);

app.listen(3000, () => {
    console.log(`Executando` );
});