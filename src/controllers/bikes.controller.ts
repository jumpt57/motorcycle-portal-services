import * as Hapi from 'hapi';
import * as Sequelize from 'sequelize';

export default class BikesController {
    private sequelize: Sequelize.Sequelize;

    constructor(server: Hapi.Server, sequelize: Sequelize.Sequelize) {
        this.sequelize = sequelize;
        server.route(this.allBikes());
        server.route(this.allBikesMin());
        server.route(this.getBikeById());
    }

    allBikes(): Hapi.IRouteConfiguration {
        return {
            method: 'GET',
            path: '/bikes',
            handler: (request: Hapi.Request, reply: Hapi.IReply) => {
                this.sequelize.model('bike').findAll().then((result) => {
                    reply(result);
                });
            }
        };
    }

    allBikesMin(): Hapi.IRouteConfiguration {
        return {
            method: 'GET',
            path: '/bikes/min',
            handler: (request: Hapi.Request, reply: Hapi.IReply) => {
                this.sequelize.model('bike').findAll({
                    attributes: [
                        'id',
                        'name',
                        'year',
                        'imagesUrl'
                    ]
                }).then((result) => {
                    reply(result);
                });
            }
        };
    }

    getBikeById(): Hapi.IRouteConfiguration {
        return {
            method: 'GET',
            path: '/bikes/{id}',
            handler: (request: Hapi.Request, reply: Hapi.IReply) => {
                this.sequelize.model('bike').findAll({
                    where: {
                        id: request.params['id']
                    },
                    include: [
                        {
                            model: this.sequelize.model('engine'),
                        },
                        {
                            model: this.sequelize.model('frame'),
                        },
                        {
                            model: this.sequelize.model('front_axle'),
                        },
                        {
                            model: this.sequelize.model('rear_axle')
                        },
                        {
                            model: this.sequelize.model('transmission')
                        },
                        {
                            model: this.sequelize.model('category')
                        },
                        {
                            model: this.sequelize.model('manufacturer')
                        }
                    ]
                }).then((result) => {
                    reply(result);
                });
            }
        }
    }
    
}