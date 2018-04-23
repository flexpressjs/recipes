module.exports = {

    /*
     * Mongoose configuration
     * Learn more about the available configuration on http://mongoosejs.com
     */
    mongoose: {

        /*
         * The URL to connect to MongoDB. You can also specify several more parameters:
         *      mongodb://username:password@host:port/database?options...
         *
         * Learn more about this on https://docs.mongodb.com/manual/reference/connection-string/
         */
        url: process.env.MONGO_URL || 'mongodb://localhost/test',

        /*
         * An options object which will be passed on to the underlying MongoDB driver.
         *
         * Learn more about this on http://mongodb.github.io/node-mongodb-native/2.2/api/MongoClient.html#connect
         */
        options: {},

    },

}
