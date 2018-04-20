const app = require('./kernel')

app.get('/', (req, res) => {
    res.send('Welcome on Flexpress! <a href="">Read the documentation</a> to learn more about what to do next!');
})

app.server.listen(app.config.port, () => {
    console.log('Flexpress is running on port '+app.config.port)
})
