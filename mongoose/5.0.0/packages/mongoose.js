const mongoose = require('mongoose');

module.exports = {
    configure: (app) => {
        app.set('mongoose', () => {
            mongoose.connect(app.config.mongoose.url, app.config.mongoose.options);

            return mongoose;
        });

        app.set('db', () => {
            const db = app.get('mongoose').connection;

            db.on('error', (err) => {
                throw err;
            });

            return db;
        });
    },

    boot: (app) => {
        app.get('db').once('open', () => {
            if (app.has('logger')) {
                app.get('logger').log({ level: 'info', message: 'Application is connected to MongoDB' });
            } else {
                console.log('Application is connected to MongoDB');
            }
        });
    },
};
