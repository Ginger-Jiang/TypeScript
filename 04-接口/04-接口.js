// 接口初探
function fn(obj) {
    // 参数类型检查
    console.log(obj.label);
}
var myObj = { size: 10, label: 'Size 10' };
fn(myObj); // Size 10
function fn2(obj) {
    // 参数类型检查
    console.log(obj.label);
}
fn(myObj); // Size 10
function createSquare(config) {
    var newSquare = { color: 'white', area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: 'black' });
console.log(mySquare);
var p1 = { x: 10, y: 20 };
// p1.x = 12 // 无法分配给p1.x 因为他是只读的
// ReadeonlyArray
var a = [1, 2, 3, 4];
var ro = a;
// ro[0] = 1 // 报错 只读
// ro.push(1) // 报错 只读
a[0] = 2;
console.log(a); // [2,2,3,4]
console.log(ro); // [2,2,3,4]
// 断言
a = ro;
console.log(a); // [ 2, 2, 3, 4 ]
var tom = {
    name: 'Tom',
    age: 12,
    gender: 'male'
};
var mySearch;
mySearch = function (src, sub) {
    var res = src.search(sub);
    return !res;
};
console.log(mySearch('1', '2')); // false
var myArray;
myArray = ['a', 'b', 'c'];
var myStr = myArray[0];
console.log(myStr); // a
