module.exports = function (server) {
    require('./controllers/manufacturers.controller')(server);    
    require('./controllers/categories.controller')(server);           
    require('./controllers/bike.controller')(server);  
};