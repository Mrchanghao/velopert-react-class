import {Map, List, fromJS} from 'immutable'

// const map1 = Map({a: 1, b: 2, c: 3});
// console.log(map1)

// const map2 = map1.set('b', 32);

// console.log(
//     map1.get('b'),  'vs',  map2.get('b')
// )

// // 객체 키값은 string으로 출력 

// const object1 = {
//     a: 23,
//     b: 45,
//     c: 'string'
// };

// const mapObj = Map(object1);
// console.log(mapObj.get('a'))
// console.log(mapObj == object1)

// const clone = mapObj; 

// const list1 = List([1, 2]);
// console.log(list1);
// console.log(
//     list1.push(3, 4, 5)
// );

// console.log(list1.unshift(0))

// const alpha = Map({a: 1, b: 2, c: 3, d: 4});

// const keyUpper = alpha.map((value, key) => {
//     console.log(value + 2)
//     return key.toUpperCase();
// });

// console.log(keyUpper.join(' '));

// const map3 = Map({a: 1, b: 2, c: 20, d: 4});

// const map4 = Map({c: 3, a: 20, t: 100});

// const obj = {d: 100, o: 200, g: 300};


// // 겹치는 키값은 절차적 순서대로 나중에 선언된 값으로 대체됨
// const map5 = map3.merge(map4, obj);
// console.log(map5);

// const arr1 = List([1, 2, 3]);
// const arr2 = List([4, 5, 6]);
// const basicArr = [7, 8, 9];

// const mergedArr = arr1.concat(arr2, basicArr);

// console.log(mergedArr.get(2))

const data = Map({
    a: 1,
    b: 2,
    c: Map({
        d: 3,
        e: 4,
        f: 5
    })
})

const data2 = fromJS({
    a: 1,
    b: 2,
    c: {
        d: 3,
        e: 4,
        f: 5
    }
})

console.log(data2)

// toJS: Map 된 객체를 원형의 객체로
const deserialized = data2.toJS();



console.log(deserialized);
console.log(data.getIn('a'))