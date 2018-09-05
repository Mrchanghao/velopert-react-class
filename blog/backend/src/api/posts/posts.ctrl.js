const Post = require('models/post')
const {ObjectId} = require('mongoose').Types

// 타입체크
exports.checkObjectId = (ctx, next) => {
    const {id} = ctx.params;

    // 검증 실패
    if(!ObjectId.isValid(id)) {
        ctx.status = 400
        return null;
    }
    return next();
}

// 포스트 작성
// POST /api/posts
exports.write = async (ctx) => {
    // rest api req.body는 ctx.request.body에서 조회
    const {title, body, tags} = ctx.request.body;

    // post instance 생성
    const post = new Post({
        title, body, tags
    });

    try {
        await post.save() //db 에 저장
        ctx.body = post;
    } catch (err) {
        ctx.throw(e, 500);
    }
    
}

// 포스트 목록 조회
// GET /api/posts
exports.list = async (ctx) => {
    try {
        const posts = await Post.find().exec();
        ctx.body = posts;
    } catch (err) {
        ctx.throw(err, 500);
    }
};

// 특정 포스트 조회
// GET /api/posts/:id
exports.read = async (ctx) => {
    const { id } = ctx.params
    console.log(typeof id)
    try {
        const post = await Post.findById(id).exec();
        // 만약 포스트가 존재 하지 않으면??
        if(!post) {
            ctx.status = 404;
            return;
        }
        ctx.body = post;
    } catch (err) {
        ctx.throw(err, 500);
    }
};

// 특정 포스트 삭제
// DELETE /api/posts/:id
exports.remove = async (ctx) => {
    const {id} = ctx.params;
    try {
        await Post.findByIdAndRemove(id).exec();
        ctx.status = 204;
    } catch (err) {
        ctx.throw(err, 500);
    }
};

// // 포스트 수정 및 교체
// // PUT /api/posts/:id
// exports.replace = (ctx) => {
   
// };

// 포스트 수정(특정 필드 만)
// PATCH /api/posts/:id
exports.update = async (ctx) => {
    const { id } = ctx.params;
    try {
        const post = await Post.findByIdAndUpdate(id, ctx.request.body, {
            new: true
            // 이 객체값을 설정 해 줘야 함
        }).exec();
        if(!post) {
            ctx.status = 404;
            return;
        }
        ctx.body = post;
    } catch (err) {
        ctx.throw(err, 500);
    }
};
