var db = require('../utils/db');
var mysql = require('mysql');

const logger = require('../utils/logger');


exports.addMultiple = (value) => {
    var sql = `INSERT INTO text_align(lang1,lang2,scope,user_id) VALUES ?`;
    return db.saveAll(sql, value);
};
exports.addRow = (obj) => {
    var sql = `INSERT INTO text_align(lang1,lang2,score,user_id) VALUES (?,?,?,?)`;
    return db.save(sql, obj);
};
exports.updateRow = (obj) => {
    var currentTime = (new Date().getTime() + 7*3600*1000);
    var date = new Date(currentTime).toISOString();
    var sql = "UPDATE ?? SET ?? = ?, ?? = ?, ?? = ?, ?? = ?, ??= ? WHERE ?? = ?";
    let query = mysql.format(sql, ["text_align", "lang1", obj.viText, "lang2", obj.kmText, "score", obj.scope, "user_id", 1, "updated_date", date, "id", obj.id]);
    return db.save(query);
};
exports.deleteRow = (id) => {
    var sql = "DELETE FROM ?? WHERE ?? = ?";
    let query = mysql.format(sql, ["text_align", "id", id]);
    return db.save(query);
};
exports.loadAll = (options) => {
    var sql;
    let query;
    if (options.offset && options.limit) {
        sql = "SELECT * FROM ?? ORDER BY ?? DESC LIMIT ? OFFSET ?";
        query = mysql.format(sql, ["text_align", "created_date",options.limit, options.offset]);
    } else {
        sql = "SELECT * FROM ?? ORDER BY ?? DESC";
        query = mysql.format(sql, ["text_align","created_date"]);
    }
    return db.load(query);
};

exports.loadOne = (id) => {
    var sql;
    let query;
    sql = "SELECT * FROM ?? WHERE ?? = ?";
    query = mysql.format(sql, ["text_align", "id",id]);

    return db.load(query);
};
exports.count = () => {
    var sql = `SELECT COUNT(*) AS total FROM ??`;
    let query = mysql.format(sql, ["text_align"]);
    return db.load(query);
}
exports.deleteMulti = (ids) => {
    var sql = `DELETE FROM ?? WHERE ?? IN `+ids;
    let query = mysql.format(sql, ["text_align","id"]);
    return db.save(query);
}
exports.copyItem = (ids) => {
    var sql = `INSERT ?? SELECT id,lang1,lang2,score,user_id,create_date,update_time,delete_date FROM ?? WHERE ?? IN `+ ids;
    let query = mysql.format(sql, ["sen_align_data","text_align","id"]);
    console.log(query)
    return db.save(query);
}