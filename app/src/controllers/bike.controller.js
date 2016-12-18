module.exports = function(server) {

    server.route({
        method: 'GET',
        path: '/api/bikes',
        handler: function(request, reply) {
            server.sequelize.model('bike').findAll().then(function(data) {
                reply(data);
            });
        }
    });

    server.route({
        method: 'GET',
        path: '/api/bikes/min',
        handler: function(request, reply) {
            server.sequelize.model('bike').findAll({
                attributes: [
                    'id',
                    'name',
                    'year',
                    'imagesUrl'
                ]
            }).then(function(data) {
                reply(data);
            });
        }
    });

    server.route({
        method: 'GET',
        path: '/api/bikes/{id}',
        handler: function(request, reply) {
            server.sequelize.model('bike').findAll({
                where: {
                    id: request.params.id
                },
                include: [
                    {
                        model: server.sequelize.model('engine'),
                    },
                    {
                        model: server.sequelize.model('frame'),
                    },
                    {
                        model: server.sequelize.model('front_axle'),
                    },
                    {
                        model: server.sequelize.model('rear_axle'),
                    },
                    {
                        model: server.sequelize.model('transmission')
                    },
                    {
                        model: server.sequelize.model('category')
                    },
                    {
                        model: server.sequelize.model('manufacturer')
                    }
                ]
            }).then(function(bikes) {
                reply(bikes);
            });
        }
    });

}