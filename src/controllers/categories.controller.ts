import * as Hapi from 'hapi';
import * as Sequelize from 'sequelize';

export default class CategoriesController {
    private sequelize: Sequelize.Sequelize;

    constructor(server: Hapi.Server, sequelize: Sequelize.Sequelize) {
        this.sequelize = sequelize;
        server.route([
            this.allCategs(),
            this.getCategBikes()
        ]);
    }

    allCategs(): Hapi.IRouteConfiguration {
        return {
            method: 'GET',
            path: '/categories',
            handler: (request: Hapi.Request, reply: Hapi.IReply) => {
                this.sequelize.model('category').findAll({
                    attributes: ['name']
                }).then((result) => {
                    reply(result);
                });
            }
        };
    }

    getCategBikes(): Hapi.IRouteConfiguration {
        return {
            method: 'GET',
            path: '/categories/{id}/bikes',
            handler: (request: Hapi.Request, reply: Hapi.IReply) => {
                this.sequelize.model('category').findAll({
                    attributes: ['id', 'name'],
                    where: {
                        id: request.params['id']
                    },
                    include: [
                        {
                            model: this.sequelize.model('bike'),
                            as: 'bikes',
                            attributes: ['id', 'name', 'year', 'imagesUrl'],
                            through: {
                                attributes: []
                            },
                            include: [
                                {
                                    model: this.sequelize.model('manufacturer'),
                                    attributes: ['id', 'name', 'logoUrl']
                                }
                            ]
                        }
                    ]
                }).then((result) => {
                    reply(result);
                });
            }
        };
    }
}