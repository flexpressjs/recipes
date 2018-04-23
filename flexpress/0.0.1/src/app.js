const fs = require('fs');
const path = require('path');

class App {
    constructor(env) {
        this.env = env;
        this.rootDir = path.dirname(__dirname);
        this._booted = false;

        this._configPath = this.rootDir+'/config';
        this.config = {};

        this._packagesPath = this.rootDir+'/packages';
        this._modules = [];

        this._definitions = {};
        this._services = {};
    }

    boot() {
        // Modules should not be able to reboot the app
        if (this._booted) {
            throw new Error('The application is already booted');
        }

        this._booted = true;

        // Load the packages configuration
        Object.assign(this.config, this._loadConfigDirectory(this._configPath));
        if (fs.existsSync(this._configPath+'/'+this.env)) {
            Object.assign(this.config, this._loadConfigDirectory(this._configPath+'/'+this.env));
        }

        // Load and apply modules
        this._loadModuleDirectory(this._packagesPath);
        if (fs.existsSync(this._packagesPath+'/'+this.env)) {
            this._loadModuleDirectory(this._packagesPath+'/'+this.env);
        }

        this._modules.forEach(module => typeof module.configure !== 'undefined' && module.configure(this));
        this._modules.forEach(module => typeof module.boot !== 'undefined' && module.boot(this));
    }

    set(serviceName, factory) {
        this._definitions[serviceName] = factory;
    }

    get(serviceName) {
        if (typeof this._definitions[serviceName] === 'undefined') {
            throw new Error('You have requested a non-existent service "'+serviceName+'"');
        }

        if (typeof this._services[serviceName] === 'undefined') {
            this._services[serviceName] = this._definitions[serviceName]();
        }

        return this._services[serviceName];
    }

    _loadConfigDirectory(configDir) {
        let config = {};

        fs.readdirSync(configDir).forEach(file => {
            if (file.endsWith('.js') && fs.statSync(configDir+'/'+file).isFile()) {
                Object.assign(config, require(configDir+'/'+file));
            }
        });

        return config;
    }

    _loadModuleDirectory(moduleDir) {
        fs.readdirSync(moduleDir).forEach(file => {
            if (file.endsWith('.js') && fs.statSync(moduleDir+'/'+file).isFile()) {
                this._modules.push(require(moduleDir+'/'+file));
            }
        });
    }
}

const app = new App(process.env.NODE_ENV === 'production' ? 'prod' : 'dev');
app.boot();

module.exports = app;
