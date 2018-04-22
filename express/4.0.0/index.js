const app = require('./src/app');

app.get('express').get('/', require('./src/controllers/welcome')(app));

app.get('server').listen(app.config.port, () => {
    console.log('Application running on port '+app.config.port)
})
