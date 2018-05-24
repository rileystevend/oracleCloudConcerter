const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');
const helper = require('../helpers/apirequest.js');
let port = process.env.PORT || 8080;

let app = express();
app.use(cors());
app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({ extended: false })); //????
app.use(bodyParser.json());



app.get('/app', function(req, res) {
    res.end();
});
app.post('/app', function(req, res) {
let zip = req.body.zipcode;
let date = req.body.date;
//let sInd = req.body.showInd || null;
//let dInd = req.body.restInd || null;
console.log(req.body.zipcode, req.body.date)

helper.getPair(zip, date /*, sInd, dInd*/)
    .then((resultArray) => {
        res.send(resultArray)
    })
    .catch((err) => {
        console.log('ERROR AT SERVER LEVEL', err)
    })

});

app.listen(port, console.log(`listening on port ${port}`));