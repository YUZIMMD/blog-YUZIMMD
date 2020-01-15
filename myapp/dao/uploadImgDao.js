// 上传图片
const fs = require("fs");
const path = require("path");
/* formidable用于解析表单数据，特别是文件上传 */
const formidable = require("formidable");
/* 用于时间格式化 */
const formatTime = require("silly-datetime");

/* 图片上传 */
module.exports = (req, res) => {
  /* 创建上传表单 */
  let form = new formidable.IncomingForm();
  /* 设置编码格式 */
  form.encoding = "utf-8";
  /* 设置上传目录(这个目录必须先创建好) */
  form.uploadDir = path.join(__dirname, "../serverImage");
  /* 保留文件后缀名 */
  form.keepExtensions = true;
  /* 设置文件大小 */
  form.maxFieldsSize = 2 * 1024 * 1024;

  /* 格式化form数据 */
  form.parse(req, (err, fields, files) => {
    let file = files.file;
    /* 如果出错，则拦截 */
    if (err) {
      return res.send({ status: 500, msg: "服务器内部错误", result: "" });
    }

    if (file.size > form.maxFieldsSize) {
      fs.unlink(file.path);
      return res.send({ status: -1, msg: "图片不能超过2M", result: "" });
    }

    /* 存储后缀名 */
    let extName = "";

    switch (file.type) {
      case "image/png":
        extName = "png";
        break;
      case "image/x-png":
        extName = "png";
        break;
      case "image/jpg":
        extName = "jpg";
        break;
      case "image/jpeg":
        extName = "jpg";
        break;
    }
    if (extName.length == 0) {
      return res.send({
        status: -1,
        msg: "只支持jpg和png格式图片",
        result: ""
      });
    }

    /* 拼接新的文件名 */
    let time = formatTime.format(new Date(), "YYYYMMDDHHmmss");
    let num = Math.floor(Math.random() * 8999 + 10000);
    let imageName = `${time}_${num}.${extName}`;
    let newPath = form.uploadDir + "/" + imageName;

    /* 更改名字和路径 */
    fs.rename(file.path, newPath, err => {
      if (err) {
        return res.send({ status: -1, msg: "图片上传失败", result: "" });
      } else {
        return res.send({
          status: 200,
          msg: "图片上传成功",
          result: { url: `http://localhost:3000/serverImage/${imageName}` }
        });
      }
    });
  });
};
