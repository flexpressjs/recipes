const express = require('express');
const http = require('http');

module.exports = (app) => {
    app.set('express', () => {
        return express();
    });

    app.set('server', () => {
        return http.Server(app.get('express'));
    });
};
