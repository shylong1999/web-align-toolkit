var db = require('../utils/db');
var mysql = require('mysql');

const logger = require('../utils/logger');


exports.addMultiple = (value) => {
    var sql = `INSERT INTO para_sentences(text1,text2,score,status,editor_id,para_document_id) VALUES ?`;
    return db.saveAll(sql, value);
};
exports.addRow = (obj) => {
    var sql = `INSERT INTO para_sentences(text1,text2,score,status,editor_id,para_document_id,origin_para_sentences_id) VALUES (?,?,?,?,?,?,?)`;
    return db.save(sql, obj);
};
exports.updateStatus = (obj) => {
    console.log("obj",obj);
    var currentTime = (new Date().getTime() + 7*3600*1000);
    var date = new Date(currentTime).toISOString();
    var sql = "UPDATE ?? SET ?? = ?, ?? = ? WHERE ?? = ?";
    let query = mysql.format(sql, ["para_sentences","status",obj.status,"updated_date",date,"id", obj.id]);
    return db.save(query);
};
exports.updateRate = (obj) => {
    console.log("obj",obj);
    var currentTime = (new Date().getTime() + 7*3600*1000);
    var date = new Date(currentTime).toISOString();
    var sql = "UPDATE ?? SET ?? = ?, ?? = ? WHERE ?? = ?";
    let query = mysql.format(sql, ["para_sentences","rate_id",obj.rate_id,"updated_date",date,"id", obj.id]);
    return db.save(query);
};


exports.saveAll = (ids) => {
    var sql = "UPDATE ?? SET ?? = ? WHERE ?? IN"+ids;
    let query = mysql.format(sql, ["para_sentences", "status",2,"id"]);
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
    let query = mysql.format(sql, ["para_sentences", "id", id]);
    return db.save(query);
};
exports.loadDraftSentences = (options) => {
    var sql;
    let query;
    if (options.offset && options.limit) {
        sql = "SELECT P.*,S.name as status_name, R.name as rate_name FROM para_sentences P JOIN sentence_status S ON P.status = S.id LEFT JOIN rates R ON R.id = P.rate_id WHERE P.status = ? ORDER BY P.created_date DESC LIMIT ? OFFSET ?";
        query = mysql.format(sql, [1,options.limit, options.offset]);
    } else {
        sql = "SELECT P.*,S.name as status_name, R.name as rate_name FROM para_sentences P JOIN sentence_status S ON P.status = S.id LEFT JOIN rates R ON R.id = P.rate_id WHERE P.status = ? ORDER BY P.created_date DESC";
        query = mysql.format(sql, [1]);
    }

    return db.load(query);
};
exports.loadAll = (options) => {
    var sql;
    let query;
    if (options.offset && options.limit) {
        sql = "SELECT P.*,S.name as status_name FROM para_sentences P JOIN sentence_status S ON P.status = S.id WHERE P.status = ? OR P.status = ? ORDER BY P.created_date DESC LIMIT ? OFFSET ?";
        query = mysql.format(sql, [1,2,options.limit, options.offset]);
    } else {
        sql = "SELECT P.*,S.name as status_name FROM para_sentences P JOIN sentence_status S ON P.status = S.id WHERE P.status = ? OR P.status = ? ORDER BY P.created_date DESC";
        query = mysql.format(sql, [1,2]);
    }

    return db.load(query);
};
exports.loadOne = (id) => {
    var sql;
    let query;
    sql = "SELECT P.*,S.name as status_name FROM para_sentences P JOIN sentence_status S ON P.status = S.id WHERE P.id = ?";
    query = mysql.format(sql, [id]);
    return db.load(query);
};
exports.count = () => {
    var sql = `SELECT COUNT(*) AS total FROM ??`;
    let query = mysql.format(sql, ["para_sentences"]);
    return db.load(query);
}
exports.deleteMulti = (ids) => {
    var sql = `DELETE FROM ?? WHERE ?? IN `+ids;
    let query = mysql.format(sql, ["para_sentences","id"]);
    return db.save(query);
}