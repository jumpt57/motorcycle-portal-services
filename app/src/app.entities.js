module.exports = function (server) {
    require('./entities/categoriy.entity')(server);
    require('./entities/manufacturer.entity')(server);
    require('./entities/bike.entity')(server);
    require('./entities/engine.entity')(server);
    require('./entities/frame.entity')(server);
    require('./entities/front-axle.entity')(server);
    require('./entities/rear-axle.entity')(server);
    require('./entities/transmission.entity')(server);
    require('./entities/features-dictionary.entity')(server);
    require('./entities/associations')(server);
}