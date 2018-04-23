const app = require('./src/app');

require('./src/routes/welcome')(app);

app.get('server').listen(app.config.port, () => {
    console.log('Application running on port '+app.config.port)
});
