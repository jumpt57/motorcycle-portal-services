export default class ConfigSequelize {

    constructor(tableName: string) {
        return {
            schema: "data_bikes",
            force: false,
            underscored: true,
            paranoid: true,
            tableName: tableName
        }
    }
}