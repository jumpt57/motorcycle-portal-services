var Curl = require('node-libcurl').Curl;

module.exports = function (server) {

    server.route({
        method: 'GET',
        path: '/lbc/{name}/{yearMin}/{yearMax}',
        handler: function (request, reply) {

            var url = 'https://mobile.leboncoin.fr/templates/api/list.json?c=3&ps=1&it=1&';

            if (request.params.name !== '') {
                url += "q=" + request.params.name.replace(" ", "%20") + "&";
            }

            if (request.params.yearMin !== '') {
                url += "rs=" + request.params.yearMin + "&";
            }

            if (request.params.yearMax !== '') {
                url += "re=" + request.params.yearMax + "&";
            }

            url = url.slice(0, -1);
            var curl = new Curl();

            curl.setOpt(Curl.option.URL, url);
            curl.setOpt(Curl.option.CUSTOMREQUEST, 'POST');
            curl.setOpt(Curl.option.HTTPHEADER, ['Content-Type: application/x-www-form-urlencoded']); // -H
            curl.setOpt(Curl.option.POST, 2);
            curl.setOpt(Curl.option.SSL_VERIFYPEER, false);
            curl.setOpt(Curl.option.POSTFIELDS, 'app_id=leboncoin_android&key=d2c84cdd525dddd7cbcc0d0a86609982c2c59e22eb01ee4202245b7b187f49f1546e5f027d48b8d130d9aa918b29e991c029f732f4f8930fc56dbea67c5118ce');

            curl.perform();
            
            curl.on('end', function (statusCode, body, headers) {

                console.info(statusCode);
                console.info('---');
                console.info(body.length);
                console.info('---');
                console.info(this.getInfo('TOTAL_TIME'));


                reply(body);

                this.close();
            });

            curl.on('error', function (statusCode, body, headers) {
                curl.close.bind(curl)

                reply(statusCode + " " + body);
            });

        }
    });

}