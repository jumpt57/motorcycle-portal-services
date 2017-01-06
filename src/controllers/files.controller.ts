import * as Hapi from 'hapi';
import * as Sequelize from 'sequelize';

export default class FilesController {

    constructor(server: Hapi.Server) {
        server.route([
            this.getFiles()
        ]);
    }

    getFiles(): Hapi.IRouteConfiguration {
        return {
            method: 'GET',
            path: '/images/{path*}',
            handler: {
                directory: {
                    path: '../../src/public/images',
                    listing: true,
                    index: true
                }
            }
        };
    }
}