var mysql = require('mysql');
var util = require('util');

var config = require('../config/config');
var logger = require('../utils/logger');
exports.load = sql => {
    return new Promise((resolve, reject) => {
        var connection = mysql.createConnection(config.dbOptions);
        connection.connect((err) => {
            if (err) {
                logger.error(util.inspect(err, { showHidden: false, depth: null }));
                return;
            }
        });

        connection.query(sql, (error, rows, fields) => {
            if (error) {
                logger.error(util.inspect(err, { showHidden: false, depth: null }));
                reject(error);
            } else {
                resolve(rows);
            }

            connection.end();
        });
    });
}

exports.save = (sql,value) => {
    return new Promise((resolve, reject) => {
        var connection = mysql.createConnection(config.dbOptions);

        connection.connect((err) => {
            if (err) {
                logger.error(util.inspect(err, { showHidden: false, depth: null }));
                return;
            }
        });

        connection.query(sql,value, function(error, value) {
            if (error) {
                logger.error(util.inspect(err, { showHidden: false, depth: null }));
                reject(error);
            } else {
                resolve(value);
            }

            connection.end();
        });
    });
}
exports.saveAll = (sql,params) => {
    return new Promise((resolve, reject) => {
        var connection = mysql.createConnection(config.dbOptions);

        connection.connect((err) => {
            if (err) {
                logger.error(util.inspect(err, { showHidden: false, depth: null }));
                return;
            }
        });

        connection.query(sql, [params],  function(error, value) {
            if (error) {
                logger.error(util.inspect(err, { showHidden: false, depth: null }));
                reject(error);
            } else {
                resolve(value);
            }

            connection.end();
        });
    });
}