const winston = require('winston');

module.exports = {
    configure: (app) => {
        app.set('logger', () => {
            return winston.createLogger({
                level: 'info',
                format: winston.format.json(),
                transports: [
                    new winston.transports.File({ filename: app.rootDir+'/logs/error.log', level: 'error' }),
                    new winston.transports.File({ filename: app.rootDir+'/logs/combined.log' })
                ],
            });
        });
    },
};
