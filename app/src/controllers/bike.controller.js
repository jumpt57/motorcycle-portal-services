const Bike = require('../entities/bike.entity');

module.exports = function(server){

    server.route({
        method: 'GET',
        path: '/bikes',
        handler: function (request, reply) {
            reply(Bike.findAll());
        }
    });

}