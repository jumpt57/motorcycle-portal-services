module.exports = function (server) {

    server.route({
        method: 'GET',
        path: '/images/{path*}',
        handler: {
            directory: {
                path: './images',
                listing: true,
                index: true
            }
        }
    });

}