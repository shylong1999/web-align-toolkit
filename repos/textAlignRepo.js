var db = require('../utils/db');
var mysql = require('mysql');

const logger = require('../utils/logger');


exports.addMultiple = (value) => {
    var sql = `INSERT INTO para_documents(lang1,lang2,text1,text2,score,creator_id,status) VALUES ?`;
    return db.saveAll(sql, value);
};
exports.addRow = (obj) => {
    var sql = `INSERT INTO para_documents(lang1,lang2,text1,text2,score,creator_id,status) VALUES (?,?,?,?,?,?,?)`;
    return db.save(sql, obj);
};
exports.updateRow = (obj) => {
    var currentTime = (new Date().getTime() + 7*3600*1000);
    var date = new Date(currentTime).toISOString();
    var sql = "UPDATE ?? SET ?? = ?, ??= ? WHERE ?? = ?";
    let query = mysql.format(sql, ["para_documents","status",obj.status, "updated_date", date, "id", obj.id]);
    return db.save(query);
};
exports.deleteRow = (id) => {
    var sql = "DELETE FROM ?? WHERE ?? = ?";
    let query = mysql.format(sql, ["para_documents", "id", id]);
    return db.save(query);
};
exports.loadAll = (options) => {
    var sql;
    let query;
    if (options.offset && options.limit) {
        sql = "SELECT P.*,S.name as status_name FROM para_documents P JOIN sentence_status S ON P.status = S.id WHERE P.status = ? ORDER BY P.created_date DESC LIMIT ? OFFSET ?";
        query = mysql.format(sql, [1,options.limit, options.offset]);
    } else {
        sql = "SELECT P.*,S.name as status_name FROM para_documents P JOIN sentence_status S ON P.status = S.id WHERE P.status = ? ORDER BY P.created_date DESC";
        query = mysql.format(sql, [1]);
    }
    return db.load(query);
};

exports.loadOne = (id) => {
    var sql;
    let query;
    sql = "SELECT P.*,S.name as status_name FROM para_documents P JOIN sentence_status S ON P.status = S.id WHERE P.id = ?";
    query = mysql.format(sql, [id]);

    return db.load(query);
};
exports.count = () => {
    var sql = `SELECT COUNT(*) AS total FROM ??`;
    let query = mysql.format(sql, ["para_documents"]);
    return db.load(query);
}
exports.deleteMulti = (ids) => {
    var sql = `DELETE FROM ?? WHERE ?? IN `+ids;
    let query = mysql.format(sql, ["para_documents","id"]);
    return db.save(query);
}
exports.copyItem = (ids) => {
    var sql = `INSERT ?? SELECT id,lang1,lang2,score,user_id,create_date,update_time,delete_date FROM ?? WHERE ?? IN `+ ids;
    let query = mysql.format(sql, ["para_documents","text_align","id"]);
    console.log(query)
    return db.save(query);
}