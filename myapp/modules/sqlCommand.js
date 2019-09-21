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
    updateOne:'update tb_user set name = ?,passWord = ?',
    selectOne:'select * from tb_user where id = ?',
    selectAll:'select * from tb_user',
    selectName:'select * from tb_user where name = ?'
}
module.exports={
    student_sql,
    user_sql
}