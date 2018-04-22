const io = require('socket.io')

module.exports = (app) => {
    app.set('io', () => {
        return io(app.get('server'), app.config['socket.io']);
    });
};
