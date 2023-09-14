const express = require('express');

const app = express();

const PORT = 3000;

app.get('/api/test', (request, response) => {
    response.send('Bora devs')
    });
app.listen(3000, () => console.log(`Running at port ${PORT}`));