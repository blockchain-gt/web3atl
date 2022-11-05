const express = require('express');
const cors = require('cors');
const fs = require('fs');
const { exit } = require('process');
require('dotenv').config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT;

app.get('/data', (req, res) => {
    fs.readFile('data.json', 'utf-8', (err, data) => {
        if (err) {
            console.log(err)
            exit()
        }
        res.send(data)
    })
});


app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));