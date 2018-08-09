// console.log(Redux);

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const increment = (diff) => ({
    type: INCREMENT,
    diff
});

const decrement = (diff) => ({
    type: DECREMENT,
    diff
});

// console.log(increment(2))
// console.log(decrement(3))

// reducer
// 상태 변화를 일으키는 함수 파라미터를 두개를 받는다 하나는 state, 하나는 action
const initialState = {
    number: 0,
    foo: 'foo'
};

// 카운터 리듀서 정의
const counter = (state = initialState, action) => {
    switch(action.type) {
        case INCREMENT:
            return Object.assign({}, state, {number: state.number + action.diff})
        case DECREMENT:
            return {...state, number: state.number - action.diff}
        default:
            return state;
    }
};

console.log(counter(initialState, decrement(3)))

// redux store 정의 
const { createStore } = Redux;

const store = createStore(counter);

console.log(store);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(increment(3));
store.dispatch(decrement(2));