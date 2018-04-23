const session = require('express-session');

module.exports = {
    boot: (app) => {
        app.get('express').set('views', app.rootDir+'/views');
        app.get('express').set('view engine', 'pug');
    },
};
