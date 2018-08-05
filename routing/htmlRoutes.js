var path = require('path');
function register(app) {
    app.get('/survey', function (req, res) {
        res.sendFile(path.join(__basedir + '/public/survey.html'))
    })
    app.get('/survey.js', function (req, res) {
        res.sendFile(path.join(__basedir + '/public/survey.js'))
    })
    app.get('/style.css', function (req, res) {
        res.sendFile(path.join(__basedir + '/public/style.css'))
    })
    app.get('*', function (req, res) {
        res.send('GET request to home')
    });
}

module.exports = {
    register
};