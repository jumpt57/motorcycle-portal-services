module.exports = function(server) {

    server.route({
        method: 'GET',
        path: '/categories',
        handler: function(request, reply) {
            server.sequelize.model('category').findAll().then(function(data) {
                reply(data);
            });
        }
    });

    server.route({
        method: 'GET',
        path: '/categories/{id}/bikes',
        handler: function(request, reply) {
            server.sequelize.model('category').findAll({
                attributes: ['id', 'name'],
                where: {
                    id: request.params.id
                },
                include: [
                    {
                        model: server.sequelize.model('bike'),
                        as: 'bikes',
                        attributes: ['id', 'name', 'year', 'imagesUrl'],
                        through: {
                            attributes: []
                        },
                        include: [
                            {
                                model: server.sequelize.model('manufacturer'),
                                attributes: ['id', 'name', 'logoUrl']
                            }
                        ]
                    }
                ]
            }).then(function(data) {
                reply(data);
            });
        }
    });

};