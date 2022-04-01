const Koa = require('koa');
const parser = require('koa-bodyparser');
const cors = require('@koa/cors');
const router = require('./router.js');
const {main} = require('./models/db');
const app = new Koa();

app.use(cors());
app.use(parser());
app.use(router.routes());


(async function bootstrap(){
  const connection = await main();
  app.listen(3000, () => { console.log('server running on port 3000')})
})()