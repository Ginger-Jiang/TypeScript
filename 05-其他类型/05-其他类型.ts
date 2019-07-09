// 类型推断
// let str = '这是一个字符串'
// str = 1 // 报错 不能将number类型赋值给string类型

let any
any = 1 // 不报错 
any = '字符串' // 不报错

// 联合类型
let num:string|number
num = 1 // 不报错
num = '字符串' // 不报错
// num = true // 报错

