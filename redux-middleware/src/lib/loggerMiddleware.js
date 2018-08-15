import store from '../store';


const loggerMiddleware = sotre => next => actions => {

    console.log('현재 상태', store.getState());

    // 액션기록
    console.log('액션', actions);
    
    // 액션을 다음 미들웨어 또는 리듀서로 넘김
    const result = next(actions);

    // 액션 처리 후의 스토어 상태를 확인
    console.log('다음 상태', store.getState());
    console.log('\n');

    return result;

};

export default loggerMiddleware;