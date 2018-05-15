const Squelize = require('sequelize');

const db = new Squelize('nodedata', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

const User = db.define('user', {
    fullname: {type: Squelize.STRING},
    email: {type: Squelize.STRING}
});

const Article = db.define('article', {
    title: {type: Squelize.STRING},
    content: {type: Squelize.TEXT},
    picture: {type: Squelize.STRING}
});

User
    .sync()
    .then(() => {

        User.create({
            fullname: 'Jane Doe',
            email: 'jane.doe@gmail.com'
        });

    })
    .then(() => {
        User.create({
            fullname: 'Mitch Doe',
            email: 'mitch.doe@gmail.com'
        });
    })
    .then(() => {
        return User.findAll();
    })
    .then((users) => {
        console.log(users);
    });

Article
    .sync()
    .then(() => {

        Article.create({
            title: 'La biche de Raptor Jesus',
            content:
                'Restabat ut Caesar post haec properaret accitus et abstergendae causa suspicionis sororem suam, eius uxorem, Constantius ad se tandem desideratam venire multis fictisque blanditiis hortabatur. quae licet ambigeret metuens saepe cruentum, spe tamen quod eum lenire poterit ut germanum profecta, cum Bithyniam introisset, in statione quae Caenos Gallicanos appellatur, absumpta est vi febrium repentina. cuius post obitum maritus contemplans cecidisse fiduciam qua se fultum existimabat, anxia cogitatione, quid moliretur haerebat.',
            picture: ''
        });

    })
    .then(() => {
        Article.create({
            title: 'La biche de Raptor Jesus II',
            content:
                'Restabat ut Caesar post haec properaret accitus et abstergendae causa suspicionis sororem suam, eius uxorem, Constantius ad se tandem desideratam venire multis fictisque blanditiis hortabatur. quae licet ambigeret metuens saepe cruentum, spe tamen quod eum lenire poterit ut germanum profecta, cum Bithyniam introisset, in statione quae Caenos Gallicanos appellatur, absumpta est vi febrium repentina. cuius post obitum maritus contemplans cecidisse fiduciam qua se fultum existimabat, anxia cogitatione, quid moliretur haerebat.',
            picture: ''
        });
    })
    .then(() => {
        return Article.findAll();
    })
    .then((articles) => {
        console.log(articles);
    });
