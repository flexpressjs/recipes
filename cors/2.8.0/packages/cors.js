const cors = require('cors');

module.exports = {
    boot: (app) => {
        app.get('express').use(cors(app.config.cors));
    },
};
