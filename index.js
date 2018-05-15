const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Use Pug to render views
app.set('view engine', 'pug');

// Serve assets from the public folder
app.use(express.static('public'));

// Decode form data
app.use(bodyParser.urlencoded({extended: true}));

// Parse JSON body
app.use(bodyParser.json());

// Render the home page
app.get('/', (req, res) => {
    res.render('homepage');
});


app.listen(3000);