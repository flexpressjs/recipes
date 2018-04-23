module.exports = (app) => {

    app.get('express').get('/', (req, res) => {
        res.send(
            'Welcome on Flexpress!<br />' +
            '<a href="https://github.com/flexpressjs/flexpress">Read the documentation</a> to learn more about what to do next!'
        );
    });

};
