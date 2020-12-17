var db = require('../utils/db');
var mysql = require('mysql');

const logger = require('../utils/logger');


exports.addMultiple = (value) => {
    var sql = `INSERT INTO sen_align_data(lang1,lang2,scope,user_id) VALUES ?`;
    return db.saveAll(sql,value);
};
exports.addRow = (obj) => {
    var sql = `INSERT INTO sen_align_data(lang1,lang2,scope,user_id) VALUES (?,?,?,?)`;
    return db.save(sql,obj);
};
exports.updateRow = (obj) => {
    var sql = "UPDATE ?? SET ?? = ?, ?? = ?, ?? = ?, ?? = ?, ??= ? WHERE ?? = ?";
    let query = mysql.format(sql,["sen_align_data","lang1",obj.lang1,"lang2",obj.lang2,"scope",obj.scope,"user_id",1,"update_time",Date.now(),"id",obj.id]);
    return db.save(query);
};
exports.deleteRow = (id) => {
    var sql = "DELETE FROM ?? WHERE ?? = ?";
    let query = mysql.format(sql,["sen_align_data","id",id]);
    return db.save(query);
};