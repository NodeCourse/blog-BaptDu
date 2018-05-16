/*
 * Code produit par DUMONT Baptiste sur PhpStorm
 *
 * WebSite(www.dumontbaptiste.fr)
 * @link  https://github.com/BaptDu for all source repository
 * @copyright Copyright (c) 2018
 */
const Sequelize = require('sequelize');

const database = new Sequelize('nodedata', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

const user = database.define('user', {
    fullname: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    }


});

const article = database.define('article', {
    title: {
        type: Sequelize.STRING
    },
    content: {
        type: Sequelize.TEXT
    },
    picture: {
        type: Sequelize.STRING
    }
});

module.exports = {user, article};
