require('marko/node-require');

const Koa = require('koa');
const app = new Koa();  
const mount = require("koa-mount"); // 1.把整个应用程序挂载到一个特定路径  2.把中间件挂载到一个特定路径
const serve = require("koa-static");

const html = require('./html');  

// 配置 lasso 处理 js/css/etc... 文件   
require('lasso').configure({   
  plugins: [ 'lasso-marko' ],  // 编译marko模板, 并灌入客户端  
  outputDir: __dirname + '/static', // 生成的js/css/etc.等文件的存放路径
  bundlingEnabled: true, // 是否打包
  minify: false, // 是否压缩
  // fingerprintsEnabled: false // Only add fingerprints to URLs in production 不理解
});

app.use(mount("/static", serve(__dirname + "/static")));

app.use( ctx => {
  ctx.type = 'html';
  ctx.body = html.stream({
    name: 'Marko',
    colors: ['red','green','blue']
  })
});

app.listen( 8080, ()=>{
  console.log('I am listening !');
});
