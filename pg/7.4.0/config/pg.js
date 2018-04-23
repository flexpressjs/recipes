module.exports = {

    /*
     * PostgreSQL configuration
     * Learn more about the available configuration on https://node-postgres.com/features/connecting
     */
    pg: {

        host: process.env.PGHOST || 'localhost',

        user: process.env.PGUSER || process.env.USER,

        database: process.env.PGDATABASE || process.env.USER,

        password: process.env.PGPASSWORD || null,

        port: process.env.PGPORT || 5432,

    },

}
