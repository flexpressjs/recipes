const express = require('express');
const path = require('path');
const http = require('http');

module.exports = {
    configure: (app) => {
        app.set('express', () => {
            return express();
        });

        app.set('server', () => {
            return http.Server(app.get('express'));
        });
    },

    boot: (app) => {
        app.get('express').use(express.json());
        app.get('express').use(express.urlencoded({ extended: false }));
        app.get('express').use(express.static(path.join(__dirname, 'public')));
    },
};
