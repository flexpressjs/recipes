const session = require('express-session');

module.exports = {
    boot: (app) => {
        app.get('express').use(session(app.config.session));
    },
};
