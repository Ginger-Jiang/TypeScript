var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// 闭包
function fn() {
    var a = 10;
    return function () {
        var b = a + a;
        return b;
    };
}
console.log(fn()()); // 20
// 变量提升
function fn2(flag) {
    if (flag) {
        var x = 10;
    }
    return x;
}
console.log(fn2(true)); // 10
console.log(fn2(false)); // undefined
// 变量覆盖
function fn3(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        var arr = array[i];
        for (var i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
    }
    return sum;
}
console.log(fn3([[1, 2, 3], [4, 5, 6]])); // 3 -> 双层循环都是同一个`i`,内层循环到 i = 3 外层循环就结束
// let 块级作用域
function fn4(inupt) {
    var a = 100;
    if (inupt) {
        var b_1 = a + 1;
        return b_1; // 不报错
    }
    // return b // 报错 b只在if语句内容区生效
}
// console.log(name)
// let name = 'Jay'
// let num:number = 1
// let num:number = 10 // 报错
// const
// const obj = {
//   name: 'Jack',
//   age: 8
// }
// obj = {}
// 解构
var input = [1, 2, 3];
var one = input[0], two = input[1], three = input[2]; // 解构 相当于 let one = input[0]
var input2 = [1, 2];
function f5(_a) {
    var one = _a[0], two = _a[1];
    console.log(one); // 1
    console.log(two); // 2
}
f5(input2);
// 对象解构
var obj2 = {
    a: 'a',
    b: 'b',
    c: 'c'
};
var a = obj2.a, b = obj2.b, c = obj2.c; // 对象解构 相当于 let a = obj2.a
var newA = obj2.a, newB = obj2.b, newC = obj2.c; // 对象解构 相当于 let newA = obj2.a
// 展开
// 数组展开
var first = [1, 2];
var second = [3, 4];
var res = [0].concat(first, second, [5]);
console.log(res); // [0,1,2,3,4,5]
// 对象展开
var obj3 = {
    a: 1,
    b: 2,
    c: 3
};
var res2 = __assign({}, obj3, { a: 4 });
console.log(res2); // { a: 1, b: 2, c: 3, d: 4 }
