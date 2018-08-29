let postId = 1;

const posts = [
    {
        id: 1,
        title: 'dfdf',
        body: 'main'
    }
];

// 포스트 작성
// POST /api/posts
exports.write = (ctx) => {
    // rest api req.body는 ctx.request.body에서 조회
    const {
        title,
        body
    } = ctx.request.body;
    postId += 1;
    const post = {title, id: postId, body};
    posts.push(post);
    ctx.body = post;
}

// 포스트 목록 조회
// GET /api/posts
exports.list = (ctx) => {
    ctx.body = posts;
};

// 특정 포스트 조회
// GET /api/posts/:id
exports.read = (ctx) => {
    const { id } = ctx.params;
    // id 값으로 포스트를 찾는다
    // 받아온 문자열 쿼리를 스트링 혹은 숫자로 변환
    const post = posts.find(p => p.id.toString() === id);

    // 포스트 없으면 오류
    if(!post) {
        ctx.status = 404;
        ctx.body = {
            message: '포스트가 존재하지 않는다'
        }
        return;
    }
    ctx.body = post;
};

// 특정 포스트 삭제
// DELETE /api/posts/:id
exports.remove = (ctx) => {
    const { id } = ctx.params;
    // 해당 포스트가 몇번째 인지를 확인
    const index = posts.findIndex(p => p.id.toString() === id);
    //  index 가 -1 이면 해당 포스트가 없는 것이므로 오류 
    if(index === -1) {
        ctx.status = 404;
        ctx.body = {
            message: '찾으시는 포스트가 이미 존재하지 않는다고!!!'
        }
        return;
    }
    posts.splice(index, 1);
    ctx.status = 204;
};

// 포스트 수정 및 교체
// PUT /api/posts/:id
exports.replace = (ctx) => {
    const { id } = ctx.params;
    // 해당 id의 index를 확인
    const index = posts.findIndex(p => p.id.toString() === id);
    if(index === -1) {
        ctx.status = 404;
        ctx.body = {
            message: '포스트가 존재하지 앟음'
        }
        return;
    }
    // 전체 객체를 덮어 준다
    posts[index] = {
        id, 
        ...ctx.request.body
    };
    ctx.body = posts[index];
};

// 포스트 수정(특정 필드 만)
// PATCH /api/posts/:id
exports.update = (ctx) => {
    const {id} = ctx.params;
    const index = posts.findIndex(p => p.id.toString() === id);
    if(index === -1) {
        ctx.status = 404;
        ctx.body = {
            message: '찾으시는 포스트가 없음'
        }
        return;
    }
    // 포스트 객체를 덮어 쓴다
    posts[index] = {
        id,
        ...ctx.request.body
    }
    ctx.body = posts[index]
};
