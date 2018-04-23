const {Pool, Client} = require('pg');

module.exports = {
    configure: (app) => {
        app.set('pg_client', () => {
            return new Client(app.config.pg);
        });

        app.set('pg_pool', () => {
            const pool = new Pool(app.config.pg);

            pool.on('error', (err, client) => {
                throw err;
            });

            return pool;
        });
    },
};
