const express = require('express');
const app = express();
const port = 3001;
const multer = require('multer');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');

app.use(cors());

// for parsing application/json
app.use(bodyParser.json());

// for parsing application/xwww-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

// for parsing multipart/form-data
app.use(multer().single());

app.get('/pirates', (req, res) => {
    res.json(db.pirates);
});

app.post('/pirates', (req, res) => {
    if (req.body.name && req.body.role) {
        res.json(db.addPirate(req.body.name, req.body.role));
        return;
    }
    res.sendStatus(400);
});

app.listen(port, () => {
    console.log(`test-server listening @ http://localhost:${port}`)
});