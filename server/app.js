const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const fs = require('fs')
//const router = require('koa-router')();
const app = new Koa();

// 解析请求体
app.use(bodyParser());


// 引入路由分发
const router = require('./routes')


app.use(router.routes());

//若无其他处理 则返回index.html
app.use(async ctx =>{
  ctx.set('Access-Control-Allow-Origin','*');
  if(ctx.body == undefined){
    //console.log(ctx.body)
    ctx.type='html';
    ctx.body = fs.readFileSync('../web/dist/index.html');
  }
});

// 启动程序，监听端口
let port = 8080;
app.listen(port, () => console.log('listening on port '+port));
