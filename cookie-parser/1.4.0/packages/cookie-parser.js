const cookieParser = require('cookie-parser');

module.exports = {
    boot: (app) => {
        app.get('express').use(cookieParser());
    },
};
