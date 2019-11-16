//Register modules
require('module-alias/register');

const Hapi = require('@hapi/hapi');

const ModuleLoader = require('@helpers/ModuleLoader');
const Router = require('@routes/Router');

//Create server object
const server = new Hapi.Server({
    host: process.env.NODE_ENV != 'production' ? '192.168.0.210' : null,
    port: process.env.PORT || 3030,
    routes: {
        cors: {
            origin: ['*']
        }
    }
});

//Init function
const start = async () => {
    //Register server modules
    await server.register(ModuleLoader);

    //Register routes
    server.route(Router);

    // server.subscription('/room/{id}');

    await server.start();
};

start()
    .then(() => {
        console.log('Server running on %s', server.info.uri);
    })
    .catch(error => {
        console.log(error);
    });
