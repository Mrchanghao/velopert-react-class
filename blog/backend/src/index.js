const Koa = require('koa');
const Router = require('koa-router');   
const bodyParser = require('koa-bodyparser');

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

app.listen(3000, () => {
    console.log('Koa server is running on 3000')
})