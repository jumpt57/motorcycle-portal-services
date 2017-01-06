import * as Hapi from 'hapi';
import * as Sequelize from 'sequelize';

import CategoriesController from './categories.controller';
import BikesController from './bikes.controller';
import FilesController from './files.controller';
import LbcController from './lbc.controller';
import ManufacturersController from './manufacturers.controller';

export default class Routes {

    constructor(server: Hapi.Server, sequelize: Sequelize.Sequelize){
        new CategoriesController(server, sequelize);  
        new BikesController(server, sequelize);
        new FilesController(server);
        new LbcController(server, sequelize);
        new ManufacturersController(server, sequelize);
    }

}