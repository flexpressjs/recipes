const prettyError = require('pretty-error');

module.exports = {
    boot: () => {
        prettyError.start();
    },
};
