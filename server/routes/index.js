'use strict'
//路由
const router = require('koa-router')()
const fs = require('fs')
//mysql
let mysql = require('mysql');
let connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123',
  database : 'mywebsite'
});
connection.connect();
let querysql = function(sql){
  return new Promise(function(resolve,reject){
    connection.query(sql,(error,res)=>{
      if (error) {
        console.log(error);
        reject(error);
      }else{
        resolve(res);
      }
    });
  })
} 

// api article?id=111
let article = async (ctx,next) => {
  let id = ctx.request.query.id;
  try{
    let data = (await querysql('select id,title,createdate,sumary,`like` from article where id = '+id))[0];
    data.content = fs.readFileSync('./md/'+ id+'.md').toString();
    let res = {status:true,msg:'请求成功',data:data};
    ctx.body = res;
  }catch(error){
    console.log(error)
    ctx.body = {status:false,msg:'文章不存在'}
  }
  next();
};
router.get('/article', article);



// api list?page=1&limmit=2
let list = async (ctx,next)=>{
  let page = ctx.request.query.page || 1;
  let limit = ctx.request.query.limit || 2;
  let sql = 'select id,title,createdate,sumary,`like` from article ORDER BY createdate desc limit ' + limit+' offset ' + (page-1)*limit;
  let data = await querysql(sql);
  let topicnum = (await querysql('select count(*) as num from article'))[0].num;
  ctx.body = {data,topicnum};
  next();
}

router.get('/list', list);

module.exports = router
