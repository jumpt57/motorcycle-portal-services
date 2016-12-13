module.exports = function(tableName){
    return {
        schema: 'data_bikes',
        force: false,
        underscored: true,
        tableName: tableName
    }
}