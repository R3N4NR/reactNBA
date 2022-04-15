const express = require('express');
const app = express()

const timesNBA2 = require("./timesNBA2");
const conferencia = require ("./conferencia");
// const ligas = require ("./ligas")


app.use('/times', timesNBA2);
app.use('/conferencia', conferencia);
// app.use('/ligas', ligas);

app.listen(3000, () => {
    console.log(`Executando` );
});