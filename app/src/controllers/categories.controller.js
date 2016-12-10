const Category = require('../entities/categoriy.entity');

module.exports = function(server){

    server.route({
        method: 'GET',
        path: '/categories',
        handler: function (request, reply) {
            reply(Category.findAll());
        }
    });

}