const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const port = 3000;

app.listen(port, () => {
    console.log('Server is running on port: ' + port);
})

app.get('/teste', (req, res) => {
    res.status(200)
    res.send('api funcionando');
})