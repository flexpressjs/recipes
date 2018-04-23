module.exports = {

    /*
     * Express session middleware configuration (read more on https://github.com/expressjs/session)
     */
    session: {

        /*
         * The name of the session ID cookie to set in the response (and read from in the request).
         *
         * If you have multiple apps running on the same hostname, then you need to separate the session cookies
         * from each other. The simplest method is to simply set different names per app.
         */
        name: 'connect.sid',

        /*
         * This is the secret used to sign the session ID cookie. This can be either a string
         * for a single secret, or an array of multiple secrets. If an array of secrets is
         * provided, only the first element will be used to sign the session ID cookie, while
         * all the elements will be considered when verifying the signature in requests.
         */
        secret: '',

        /*
         * The session store instance, defaults to a new `MemoryStore` instance.
         *
         * Install a compatible store from https://github.com/expressjs/session#compatible-session-stores
         * to use it here.
         */
        // store: null,

        /*
         * Forces the session to be saved back to the session store, even if the session
         * was never modified during the request. Depending on your store this may be
         * necessary, but it can also create race conditions where a client makes two
         * parallel requests to your server and changes made to the session in one
         * request may get overwritten when the other request ends, even if it made no
         * changes (this behavior also depends on what store you're using).
         *
         * The default value is `true`, but using the default has been deprecated,
         * as the default will change in the future. Please research into this setting
         * and choose what is appropriate to your use-case. Typically, you'll want
         * `false`.
         *
         * How do I know if this is necessary for my store? The best way to know is to
         * check with your store if it implements the `touch` method. If it does, then
         * you can safely set `resave: false`. If it does not implement the `touch`
         * method and your store sets an expiration date on stored sessions, then you
         * likely need `resave: true`.
         */
        resave: false,

        /*
         * Forces a session that is "uninitialized" to be saved to the store. A session is
         * uninitialized when it is new but not modified. Choosing `false` is useful for
         * implementing login sessions, reducing server storage usage, or complying with
         * laws that require permission before setting a cookie. Choosing `false` will also
         * help with race conditions where a client makes multiple parallel requests
         * without a session.
         *
         * The default value is `true`, but using the default has been deprecated, as the
         * default will change in the future. Please research into this setting and
         * choose what is appropriate to your use-case.
         */
        saveUninitialized: false,

        /*
         * Control the result of unsetting `req.session` (through `delete`, setting to `null`, etc.).
         *    - `'destroy'` The session will be destroyed (deleted) when the response ends.
         *    - `'keep'` The session in the store will be kept, but modifications made during
         *        the request are ignored and not saved.
         */
        unset: 'keep',

        /*
         * Settings object for the session ID cookie.
         */
        cookie: {

            /*
             * Specifies the value for the `Path` `Set-Cookie`
             */
            path: '/',

            /*
             * Specifies the `boolean` value for the `HttpOnly` `Set-Cookie` attribute.
             *
             * **Note** be careful when setting this to `true`, as compliant clients will not allow
             * client-side JavaScript to see the cookie in `document.cookie`.
             */
            httpOnly: true,

            /*
             * Specifies the `boolean` value for the `Secure` `Set-Cookie` attribute.
             */
            secure: false,

            /*
             * Specifies the `number` (in milliseconds) to use when calculating the `Expires`
             * `Set-Cookie` attribute. This is done by taking the current server time and adding
             * `maxAge` milliseconds to the value to calculate an `Expires` datetime.
             */
            // maxAge: 3600000,

            /*
             * Specifies the value for the `Domain` `Set-Cookie` attribute.
             */
            // domain: '',

        },

    },

}
