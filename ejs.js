const ejs = require('ejs');

ejs.renderFile('./views/ejs.ejs', {name : 'blue'}, function(err, data) {
    if(err) {
        console.log('编译失败');
    } else {
        console.log(data);
    }
});