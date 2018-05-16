const express = require('express');
const bodyParser = require('body-parser');
const {user, article} = require('./models/database');
const request = require('request');
const app = express();

// Use Pug to render views
app.set('view engine', 'pug');

// Serve assets from the public folder
app.use(express.static('public'));

// Decode form data
app.use(bodyParser.urlencoded({extended: true}));

// Parse JSON body
app.use(bodyParser.json());


app.get('/', (req, res) => {

    request({
            url: 'http://localhost:3000/api/articles', headers: {'User-Agent': 'student'}
        },
        (err, response, body) => {
            if (err) {
                console.error(err);
            } else {
                // body is a string that needs to be parsed
                const article = JSON.parse(body);
                console.log(article);
                res.render('homepage', {article})
            }
        });
});

app.get('/admin/users', (req, res) => {
    request({
            url: 'http://localhost:3000/api/users', headers: {'User-Agent': 'student'}
        },
        (err, response, body) => {
            if (err) {
                console.error(err);
            } else {
                // body is a string that needs to be parsed
                const user = JSON.parse(body);
                console.log(user);
                res.render('list', {user})
            }
        });
});


// Get for all Articles and Users => API
app.get('/api/articles', (req, res) => {

    article.findAll()
        .then(articles => res.json(articles))
        .catch((error) => {
            res.render('500', { error: error});
        })

});

app.get('/api/users', (req, res) => {

    user.findAll()
        .then(users => res.json(users))
        .catch((error) => {
            res.render('500', { error: error});
        })

});

// Post for create Articles and Users => API
app.post('/api/user', (req, res) => {

    user.create(req.body)
        .then(user => res.json(user))
        .catch((error) => {
            res.render('500', { error: error});
        })

});


app.post('/api/article', (req, res) => {

    article.create(req.body)
        .then(user => res.json(user))
        .catch((error) => {
            res.render('500', { error: error});
        })
});


app.listen(3000);