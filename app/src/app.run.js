'use strict';

const Sequelize = require('sequelize');
const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({ port: 3000 });
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