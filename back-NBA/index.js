const express = require('express');
const app = express()

const timesNBA2 = require("./timesNBA2");

// const ligas = require ("./ligas")


app.use('/times', timesNBA2);
// app.use('/ligas', ligas);

app.listen(3001, () => {
    console.log(`Executando` );
});