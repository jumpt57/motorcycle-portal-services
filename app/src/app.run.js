'use strict';

const Sequelize = require('sequelize');
const Hapi = require('hapi');
const Path = require('path');

const server = new Hapi.Server();

server.connection(
    {
        port: 3000,
        routes: {
            cors: true,
            files: {
                relativeTo: Path.join(__dirname, 'public')
            }
        }
    }
);

server.register({
    register: require('inert')
}, function (err) {
    if (err) {
        throw err;
    }
});

server.sequelize = new Sequelize('postgres://motorcycleportal:motorcycleportal@localhost:5432/motorcycleportal');

require('./app.routes')(server);
require('./app.entities')(server);

server.sequelize.sync();

server.start((err) => {
    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});