import * as Sequelize from 'sequelize';
import * as Hapi from 'hapi';
import * as Path from 'path';
import * as Inert from 'inert';

import Entities from './entities/entities';
import Routes from './controllers/routes';

class Application {
    private server: Hapi.Server;
    private sequelize: Sequelize.Sequelize;
    private port: number;

    constructor(port: number) {
        this.port = port;
        this.server = new Hapi.Server();
        this.sequelize = new Sequelize('postgres://motorcycleportal:motorcycleportal@localhost:5432/motorcycleportal', {
            logging: false
        })
    }

    onStart() {
        this.server.connection({
            port: this.port,
            routes: {
                cors: true,
                files: {
                    relativeTo: Path.join(__dirname, 'public')
                }
            }
        });

        this.server.realm.modifiers.route.prefix = '/api';

        this.server.register({
            register: Inert
        }, (err: Error) => {
            if (err) {
                throw err;
            }
        });

        this.server.start((err: Error) => {
            if(err){
                throw err;
            }
            console.log(`Server running at: ${this.server.info.uri}`);
        });

        new Routes(this.server, this.sequelize);
        new Entities(this.sequelize);
    }
}

let app = new Application(3000).onStart();
