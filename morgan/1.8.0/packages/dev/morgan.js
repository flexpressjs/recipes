const morgan = require('morgan');

module.exports = {
    boot: (app) => {
        app.get('express').use(morgan('dev'));
    },
};
