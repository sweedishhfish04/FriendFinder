var path = require('path');
function register(app) {
    app.get('/home', function (req, res) {
        res.sendFile(path.join(__basedir + '/public/home.html'))
    })
    app.get('/survey.js', function (req, res) {
        res.sendFile(path.join(__basedir + '/public/survey.js'))
    })
    app.get('/style.css', function (req, res) {
        res.sendFile(path.join(__basedir + '/public/style.css'))
    })
}

module.exports = {
    register
};