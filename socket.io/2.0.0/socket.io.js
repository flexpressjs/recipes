const io = require('socket.io')

module.exports = (app) => {
    app.io = io(app.server, app.config['socket.io'])
}
