// 示例
var student_sql={
    insertOne:'insert into tb_student (student_id,name,subject,grade,sex) values (?,?,?,?,?)',
    deleteOne:'delete from tb_student where student_id = ?',
    updateOne:'update tb_student set name = ?,subject = ?,grade = ?,sex = ? where student_id = ?',
    selectOne:'select * from tb_student where student_id = ?',
    selectAll:'select * from tb_student',
}
// 用户
var user_sql = {
    insertOne:'insert into tb_user (name,passWord) values (?,?)',
    deleteOne:'delete from tb_user where id = ?',
    updateOne:'update tb_user set name = ?,passWord = ? where id = ?',
    selectOne:'select * from tb_user where id = ?',
    selectAll:'select * from tb_user',
    selectName:'select * from tb_user where name = ?'
}
// 前端
var font_sql = {
    insertOne:'insert into tb_font (title,tags,kinds,content,createTime) values (?,?,?,?,?)',
    deleteOne:'delete from tb_font where id = ?',
    updateOne:'update tb_font set title = ?,tags = ?,kinds = ?,content = ?,updateTime = ? where id = ?',
    selectOne:'select * from tb_font where id = ?',
    selectAll:'select * from tb_font',
    selectKindsName:'select * from tb_font where kinds = ?'
}
// 后段
var end_sql = {
    insertOne:'insert into tb_end (title,tags,kinds,content,createTime) values (?,?,?,?,?)',
    deleteOne:'delete from tb_end where id = ?',
    updateOne:'update tb_end set title = ?,tags = ?,kinds = ?,content = ?,updateTime = ? where id = ?',
    selectOne:'select * from tb_end where id = ?',
    selectAll:'select * from tb_end',
    selectName:'select * from tb_end where name = ?'
}
// 服务器
var server_sql = {
    insertOne:'insert into tb_server (title,tags,content,createTime) values (?,?,?,?)',
    deleteOne:'delete from tb_server where id = ?',
    updateOne:'update tb_server set title = ?,tags = ?,content = ?,updateTime = ? where id = ?',
    selectOne:'select * from tb_server where id = ?',
    selectAll:'select * from tb_server',
    selectName:'select * from tb_server where name = ?'
}
// 其他
var other_sql = {
    insertOne:'insert into tb_other (title,tags,kinds,content,createTime) values (?,?,?,?,?)',
    deleteOne:'delete from tb_other where id = ?',
    updateOne:'update tb_other set title = ?,tags = ?,kinds = ?,content = ?,updateTime = ? where id = ?',
    selectOne:'select * from tb_other where id = ?',
    selectAll:'select * from tb_other',
    selectName:'select * from tb_other where name = ?'
}
// 自检清单
var font_list_sql = {
    insertOne:'insert into tb_font_list (name,fid,fname) values (?,?,?)', // 插入一条
    deleteOne:'delete from tb_font_list where id = ?', // 删除一条
    selectAll:'select * from tb_font_list', // 查询全部
    selectName:'select * from tb_font_list where name = ?' // 通过名字查询下面的一条
}
// 进度报表
var progress_sql = {
    insertOne:'insert into tb_progress (name,content,createTime) values (?,?,?)', // 插入一条
    selectAll:'select * from tb_progress' // 查询全部
}
module.exports={
    student_sql,
    user_sql,
    font_sql,
    end_sql,
    server_sql,
    other_sql,
    font_list_sql,
    progress_sql
}