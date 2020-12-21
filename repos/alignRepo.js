var db = require('../utils/db');
var mysql = require('mysql');

const logger = require('../utils/logger');


exports.addMultiple = (value) => {
    var sql = `INSERT INTO sen_align_data(lang1,lang2,scope,user_id) VALUES ?`;
    return db.saveAll(sql, value);
};
exports.addRow = (obj) => {
    var sql = `INSERT INTO sen_align_data(lang1,lang2,scope,user_id) VALUES (?,?,?,?)`;
    return db.save(sql, obj);
};
exports.updateRow = (obj) => {
    console.log("obj",obj);
    var currentTime = (new Date().getTime() + 7*3600*1000);
    var date = new Date(currentTime).toISOString();
    var sql = "UPDATE ?? SET ?? = ?, ?? = ?, ?? = ?, ?? = ?, ??= ? WHERE ?? = ?";
    let query = mysql.format(sql, ["sen_align_data", "lang1", obj.viText, "lang2", obj.kmText, "scope", obj.scope, "user_id", 1, "update_time", date, "id", obj.id]);
    return db.save(query);
};

exports.sortDelete = (id) => {
    console.log("obj",id);
    var sql = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
    let query = mysql.format(sql, ["sen_align_data", "isDelete",1,"id",id]);
    return db.save(query);
};


exports.isChecked = (id) => {
    console.log("obj",id);
    var sql = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
    let query = mysql.format(sql, ["sen_align_data", "isCheck",1,"id",id]);
    return db.save(query);
};


exports.deleteRow = (id) => {
    var sql = "DELETE FROM ?? WHERE ?? = ?";
    let query = mysql.format(sql, ["sen_align_data", "id", id]);
    return db.save(query);
};
exports.loadAll = (options) => {
    var sql;
    let query;
    if (options.offset && options.limit) {
        sql = "SELECT * FROM ?? WHERE ?? = ? AND ?? = ? ORDER BY ?? DESC LIMIT ? OFFSET ?";
        query = mysql.format(sql, ["sen_align_data","isCheck",0,"isDelete",0, "create_date",options.limit, options.offset]);
    } else {
        sql = "SELECT * FROM ?? WHERE ?? = ? AND ?? = ? ORDER BY ?? DESC";
        query = mysql.format(sql, ["sen_align_data","isCheck",0,"isDelete",0,"create_date"]);
    }
    console.log(query);

    return db.load(query);
};
exports.loadOne = (id) => {
    var sql;
    let query;
    sql = "SELECT * FROM ?? WHERE ?? = ?";
    query = mysql.format(sql, ["sen_align_data", "id",id]);

    return db.load(query);
};
exports.count = () => {
    var sql = `SELECT COUNT(*) AS total FROM ??`;
    let query = mysql.format(sql, ["sen_align_data"]);
    return db.load(query);
}
exports.deleteMulti = (ids) => {
    var sql = `DELETE FROM ?? WHERE ?? IN `+ids;
    let query = mysql.format(sql, ["sen_align_data","id"]);
    return db.save(query);
}