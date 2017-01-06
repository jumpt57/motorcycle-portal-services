import * as Hapi from 'hapi';
import * as Sequelize from 'sequelize';
import * as Iconv from 'iconv-lite';
var Curl = require('node-libcurl').Curl;
var entities = require('html-entities').AllHtmlEntities;
declare function escape(s:string): string;


export default class LbcController {
    private sequelize: Sequelize.Sequelize;

    constructor(server: Hapi.Server, sequelize: Sequelize.Sequelize) {
        this.sequelize = sequelize;
        server.route([
            this.getAds()
        ]);
    }

    getAds(): Hapi.IRouteConfiguration {
        return {
            method: 'GET',
            path: '/lbc/{name}/{yearMin}/{yearMax}',
            handler: (request: Hapi.Request, reply: Hapi.IReply) => {
                var url = 'https://mobile.leboncoin.fr/templates/api/list.json?c=3&ps=1&it=1&';

            if (request.params['name'] !== '') {
                url += "q=" + escape(request.params['name']) + "&";
            }

            if (request.params['yearMin'] !== '') {
                url += "rs=" + request.params['yearMin'] + "&";
            }

            if (request.params['yearMax'] !== '') {
                url += "re=" + request.params['yearMax'] + "&";
            }

            url = url.slice(0, -1);
            //console.log(url);
            var curl = new Curl();

            curl.setOpt(Curl.option.URL, url);
            curl.setOpt(Curl.option.CUSTOMREQUEST, 'POST');
            curl.setOpt(Curl.option.HTTPHEADER, ['Content-Type: application/x-www-form-urlencoded']); // -H
            curl.setOpt(Curl.option.POST, 2);
            curl.setOpt(Curl.option.SSL_VERIFYPEER, false);
            curl.setOpt(Curl.option.POSTFIELDS, 'app_id=leboncoin_android&key=d2c84cdd525dddd7cbcc0d0a86609982c2c59e22eb01ee4202245b7b187f49f1546e5f027d48b8d130d9aa918b29e991c029f732f4f8930fc56dbea67c5118ce');

            curl.enable(Curl.feature.NO_DATA_PARSING);

            curl.perform();

            curl.on('end', function (statusCode: any, body: any, headers: any) {
                var response = Iconv.decode(body, 'ISO-8859-1');
                response = entities.decode(response);
                reply(JSON.parse(response).ads);
                this.close();
            });

            curl.on('error', function (statusCode: any, body: any, headers: any) {
                curl.close.bind(curl)

                reply(statusCode + " " + body);
            });
            }
        };
    }
}