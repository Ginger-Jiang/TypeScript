// 接口初探
function fn(obj: { label: string }) {
  // 参数类型检查
  console.log(obj.label)
}
let myObj = { size: 10, label: 'Size 10' }
fn(myObj) // Size 10

interface LabeldValue {
  // 接口
  label: string
}
function fn2(obj: LabeldValue) {
  // 参数类型检查
  console.log(obj.label)
}
fn(myObj) // Size 10

// 可选属性
interface Square {
  color: string
  area: number
}
interface SquareConfig {
  color?: string
  width?: number
}
function createSquare(config: SquareConfig): Square {
  let newSquare = { color: 'white', area: 100 }
  if (config.color) {
    newSquare.color = config.color
  }
  if (config.width) {
    newSquare.area = config.width * config.width
  }
  return newSquare
}
let mySquare = createSquare({ color: 'black' })
console.log(mySquare)

// 只读属性
interface Point {
  readonly x: number
  readonly y: number
}
let p1: Point = { x: 10, y: 20 }
// p1.x = 12 // 无法分配给p1.x 因为他是只读的

// ReadeonlyArray
let a: number[] = [1, 2, 3, 4]
let ro: ReadonlyArray<number> = a
// ro[0] = 1 // 报错 只读
// ro.push(1) // 报错 只读

a[0] = 2
console.log(a) // [2,2,3,4]
console.log(ro) // [2,2,3,4]

// 断言
a = ro as number[]
console.log(a) // [ 2, 2, 3, 4 ]

// 任意类型
interface Person {
  name: string
  age: number
  [propName: string]: any // 其他属性按照任意类型
}
let tom: Person = {
  name: 'Tom',
  age: 12,
  gender: 'male'
}

// 函数类型
interface SearchFunc {
  // 参数 参数 返回值
  (source: string, subString: string): boolean
}
let mySearch: SearchFunc
mySearch = function(src, sub) {
  let res = src.search(sub)
  return !res
}
console.log(mySearch('1', '2')) // false

// 可索引类型
interface StringArray {
  [index: number]: string
}
let myArray: StringArray
myArray = ['a', 'b', 'c']
let myStr = myArray[0]
console.log(myStr) // a

