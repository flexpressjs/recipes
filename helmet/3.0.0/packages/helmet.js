const helmet = require('helmet');

module.exports = {
    boot: (app) => {
        app.get('express').use(helmet());
    },
};
