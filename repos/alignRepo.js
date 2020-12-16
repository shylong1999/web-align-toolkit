var db = require('../utils/db');
const logger = require('../utils/logger');


exports.addMultiple = (value) => {
    var sql = `INSERT INTO sen_align_data(lang1,lang2,scope,user_id) VALUES ?`;
    return db.saveAll(sql,value);
};
exports.addOne = (value) => {
    var sql = `INSERT INTO sen_align_data(lang1,lang2,scope,user_id) VALUES ?`;
    return db.save(sql);
};