const io = require('socket.io')

module.exports = {
    configure: (app) => {
        app.set('io', () => {
            return io(app.get('server'), app.config['socket.io']);
        });
    },
};
