import * as Sequelize from 'sequelize';

import CategoryEntity from './category.entity';
import BikeEntity from './bike.entity';
import EngineEntity from './engine.entity';
import FeaturesDictionaryEntity from './features-dictionary.entity';
import AssociationsEntity from './associations';
import ManufacturerEntity from './manufacturer.entity';
import FrameEntity from './frame.entity';
import FrontAxleEntity from './front-axle.entity';
import RearAxleEntity from './rear-axle.entity';
import TransmissionEntity from './transmission.entity';

export default class Entities {
    constructor(sequelize: Sequelize.Sequelize){
        new ManufacturerEntity(sequelize);
        new CategoryEntity(sequelize);
        new BikeEntity(sequelize);
        new EngineEntity(sequelize);
        new FrameEntity(sequelize);
        new FrontAxleEntity(sequelize);
        new RearAxleEntity(sequelize);
        new TransmissionEntity(sequelize);
        new FeaturesDictionaryEntity(sequelize);

        new AssociationsEntity(sequelize);
        sequelize.sync();
    }
}