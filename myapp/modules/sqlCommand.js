var student_sql={
    insertOne:'insert into tb_student (student_id,name,subject,grade,sex) values (?,?,?,?,?)',
    deleteOne:'delete from tb_student where student_id = ?',
    updateOne:'update tb_student set name = ?,subject = ?,grade = ?,sex = ? where student_id = ?',
    selectOne:'select * from tb_student where student_id = ?',
    selectAll:'select * from tb_student',
}
module.exports=student_sql