const password = require('passport');

module.exports = {
    configure: (app) => {

        /*
         * Configure the local strategy for use by Passport.
         *
         * The local strategy require a `verify` function which receives the credentials
         * (`username` and `password`) submitted by the user.  The function must verify
         * that the password is correct and then invoke `cb` with a user object, which
         * will be set at `req.user` in route handlers after authentication.
         */
        passport.use(new Strategy((username, password, cb) => {
            // Implement your own strategy here, like fetching the user from your database.
            // Read more on https://github.com/jaredhanson/passport
        }));

        /*
         * Configure Passport authenticated session persistence.
         *
         * In order to restore authentication state across HTTP requests, Passport needs
         * to serialize users into and deserialize users out of the session.  The
         * typical implementation of this is as simple as supplying the user ID when
         * serializing, and querying the user record by ID from the database when
         * deserializing.
         */
        passport.serializeUser(function(user, cb) {
            // Implement your own logic here.
        });

        passport.deserializeUser(function(id, cb) {
            // Implement your own logic here.
        });

        app.set('passport', () => {
            return passport;
        });
    },

    boot: (app) => {
        app.get('express').use(app.get('passport').initialize());

        if (typeof app.session !== 'undefined') {
            app.get('express').use(app.get('passport').session());
        }
    },
};
