// 闭包
function fn() {
  var a = 10
  return function() {
    var b = a + a
    return b
  }
}
console.log(fn()()) // 20

// 变量提升
function fn2(flag) {
  if (flag) {
    var x = 10
  }
  return x
}
console.log(fn2(true)) // 10
console.log(fn2(false)) // undefined

// 变量覆盖
function fn3(array) {
  var sum = 0
  for (var i = 0; i < array.length; i++) {
    var arr = array[i]
    for (var i = 0; i < arr.length; i++) {
      sum += arr[i]
    }
  }
  return sum
}
console.log(fn3([[1, 2, 3], [4, 5, 6]])) // 3 -> 双层循环都是同一个`i`,内层循环到 i = 3 外层循环就结束

// let 块级作用域
function fn4(inupt: boolean) {
  let a: number = 100
  if (inupt) {
    let b = a + 1
    return b // 不报错
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
let input = [1, 2, 3]
let [one, two, three] = input // 解构 相当于 let one = input[0]

let input2: [number, number] = [1, 2]
function f5([one, two]: [number, number]) {
  console.log(one) // 1
  console.log(two) // 2
}
f5(input2)
// 对象解构
let obj2 = {
  a: 'a',
  b: 'b',
  c: 'c'
}
let { a, b, c } = obj2 // 对象解构 相当于 let a = obj2.a
let { a: newA, b: newB, c: newC } = obj2 // 对象解构 相当于 let newA = obj2.a

// 展开
// 数组展开
let first = [1, 2]
let second = [3, 4]
let res = [0, ...first, ...second, 5]
console.log(res) // [0,1,2,3,4,5]
// 对象展开
let obj3 = {
  a: 1,
  b: 2,
  c: 3
}
let res2 = { ...obj3, a: 4 }
console.log(res2) // { a: 1, b: 2, c: 3, d: 4 }
