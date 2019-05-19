const jd = require('jade');
const fs = require('fs');

// var jdResult = jd.render('html');
//pretty 美化的作用
var jdResult = jd.renderFile('./views/jade.jd', {pretty : true});

//将输出的内容，写入到结果文件当中
fs.writeFile('./www/a.html', jdResult, function(err) {
    if(err == null) {
        console.log();
        console.log('写入成功',jdResult);
    } else {
        console.log('写入失败');
    }
});

