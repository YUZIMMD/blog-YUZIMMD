var student_sql={
    insertOne:'insert into tb_student (student_id,name,subject,grade,sex) values (?,?,?,?,?)',
    deleteOne:'delete from tb_student where student_id = ?',
    updateOne:'update tb_student set name = ?,subject = ?,grade = ?,sex = ? where student_id = ?',
    selectOne:'select * from tb_student where student_id = ?',
    selectAll:'select * from tb_student',
}
var user_sql = {
    insertOne:'insert into tb_user (name,passWord) values (?,?)',
    deleteOne:'delete from tb_user where id = ?',
    updateOne:'update tb_user set name = ?,passWord = ? where id = ?',
    selectOne:'select * from tb_user where id = ?',
    selectAll:'select * from tb_user',
    selectName:'select * from tb_user where name = ?'
}
var font_sql = {
    insertOne:'insert into tb_font (title,tags,kinds,content,createTime) values (?,?,?,?,?)',
    deleteOne:'delete from tb_font where id = ?',
    updateOne:'update tb_font set title = ?,tags = ?,kinds = ?,content = ?,updateTime = ? where id = ?',
    selectOne:'select * from tb_font where id = ?',
    selectAll:'select * from tb_font',
    selectName:'select * from tb_font where name = ?'
}
module.exports={
    student_sql,
    user_sql,
    font_sql
}