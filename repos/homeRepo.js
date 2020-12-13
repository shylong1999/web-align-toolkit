var db = require('../utils/db');
const logger = require('../utils/logger');

exports.login = (user) => {
    var sql = `select * from users u where u.username = '${user.username}' and u.password = '${user.password}'`;
    console.log(db)
    return db.load(sql);
};
// exports.loadByOption = (option) => {
//     var sql;
//     if (option.search) {
//         sql = `select * from vi_tri vt where vt.ten_vi_tri like '%${option.search.trim()}%' `;
//     } else {
//         sql = `select * from vi_tri vt limit ${option.limit} offset ${option.offset} `;
//     }
//     return db.load(sql);
// }
//
// exports.loadByName = (name) => {
//     var sql = `select * from vi_tri vt where lower(vt.ten_vi_tri) like '%${name}%' `;
//     return db.load(sql);
// }
//
// exports.single = (id) => {
//     var sql = `select * from vi_tri vt
//                     where vt.id_vi_tri = ${id}`;
//     return db.load(sql);
// }
// exports.add = (ten_vi_tri) => {
//     var def = 'DEFAULT';
//     var sql = `insert into vi_tri (id_vi_tri, ten_vi_tri)
//     values(${def},'${ten_vi_tri}')`;
//     return db.save(sql);
// }
//
// exports.delete = (id) => {
//     var sql = `delete from vi_tri vt where vt.id_vi_tri = ${id}`;
//     return db.save(sql);
// }
//
// exports.update = (obj) => {
//     var sql = `update vi_tri set ten_vi_tri = '${obj.ten_vi_tri}' where id_vi_tri = ${obj.id}`;
//     return db.save(sql);
// }
// exports.count = () => {
//     var sql = `select count(*) as so_vi_tri from vi_tri`;
//     return db.load(sql);
// }