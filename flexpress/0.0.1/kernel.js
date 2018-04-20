const fs = require('fs')

// Load the packages configuration
let config = {};
fs.readdirSync('./config').forEach(file => {
    Object.assign(config, require('./config/'+file))
})

// Create the base app
const app = require('express')()
app.config = config;
app.server = require('http').Server(app);

// Load and apply modules
const modules = require('./modules');
modules.forEach(applyModule => applyModule(app));

module.exports = app;
