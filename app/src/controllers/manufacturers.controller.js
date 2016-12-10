const Manufacturer = require('../entities/manufacturer.entity');

module.exports = function(server){

    server.route({
        method: 'GET',
        path: '/manufacturers',
        handler: function (request, reply) {
            reply(Manufacturer.findAll());
        }
    });

}