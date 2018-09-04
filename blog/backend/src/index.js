require('dotenv').config();

const Koa = require('koa');
const Router = require('koa-router');   
const bodyParser = require('koa-bodyparser');
const mongoose = require('mongoose');

const {
    PORT: port = 4000,
    MONGO_URI: mongoURI
} = process.env;

// db 연결
mongoose.Promise = global.Promise;
mongoose.connect(mongoURI)
.then(() => {
    console.log('connect to mongodb');
})
.catch(err => {
    console.error(err);
});

const app = new Koa();
const router = new Router();
const api = require('./api');


// 라우터 설정
router.get('/', (ctx) => {
    ctx.body = '<h1>홈</h1>'
})

router.use('/api', api.routes())

router.get('/about/:name', (ctx) => {
    const { name } = ctx.params;
    ctx.body = name ? `<h1>${name}소개</h1>` : '<h1>소개 아직 없음</h1>'
} )

// router.get('/about', (ctx) => {
//     ctx.body = `<h2>소개</h2>`
// });

router.get('/posts', (ctx) => {
    const {id} = ctx.query;
    // id 존재 에 따라 결과 출력
    console.log(ctx.query);
    ctx.body = id ? `<p>post #${id}</p>` : `포스트가 없음`
})

app.use(bodyParser());

// app 에 라우터 적용
app.use(router.routes()).use(router.allowedMethods());

app.listen(port, () => {
    console.log('Koa server is running on ', port)
})