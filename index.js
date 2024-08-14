const express =require('express');
const fs = require('fs');
const app = express();

// const data = JSON.parse(fs.readFileSync('./data.json', 'utf-8'));
const data = {
    "hexn": {
        "freeTrial":[
            {
                "key": "123",
                "isExpied": false,
                "activeTime": "",
                "owner": "@"
            }
        ],
        "paid":[
            {
                "key": "123",
                "activeTime": "",
                "owner": "@"
            }
        ]
    }
}

app.get('/api', (req, res) => {
    res.json(data);
});

module.exports = app;
