function register(app) {
    app.get('/api/friends', function (req, res) {
        res.send('GET request to the Friends')
    })
    app.post('/api/friends', function (req, res) {
        res.send('POST request to home')
    });
}

module.exports = {
    register
};