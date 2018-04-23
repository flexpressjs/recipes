const winston = require('winston');

module.exports = {
    boot: (app) => {
        app.get('logger').add(new winston.transports.Console({
            format: winston.format.simple(),
        }));
    },
};
