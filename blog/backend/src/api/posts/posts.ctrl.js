const Post = require('models/post')

// 포스트 작성
// POST /api/posts
exports.write = (ctx) => {
    // rest api req.body는 ctx.request.body에서 조회
    
}

// 포스트 목록 조회
// GET /api/posts
exports.list = (ctx) => {
   
};

// 특정 포스트 조회
// GET /api/posts/:id
exports.read = (ctx) => {
   
};

// 특정 포스트 삭제
// DELETE /api/posts/:id
exports.remove = (ctx) => {
   
};

// 포스트 수정 및 교체
// PUT /api/posts/:id
exports.replace = (ctx) => {
   
};

// 포스트 수정(특정 필드 만)
// PATCH /api/posts/:id
exports.update = (ctx) => {
   
};
