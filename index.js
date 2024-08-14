import express from 'express';
const fs = require('fs');
const app = express();

const data = JSON.parse(fs.readFileSync('./data.json', 'utf-8'));

app.get('/api', (req, res) => {
    res.json(data);
});

module.exports = app;
