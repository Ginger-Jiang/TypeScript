// Boolean
let login: boolean = true
let sex: boolean = false

// Number
let a1: number = 10 // 十进制
let a2: number = 0x14 // 十六进制
let a4: number = 0b10100 // 二进制
let a5: number = 0o24 // 八进制

// String
let names: string = 'Ginger'
let names2: string = `Hi, ${names} ` // 模板字符串

// void -> 不返回任何值
let v: void = null
let v2: void = undefined
function warn() {
  console.log('没有返回值就是void ')
}

// null and undefined
let u: undefined = undefined // 只能赋值undefined
let n: null = null // 只能赋值null
// undefined 和 null 是所有类型的子类型
let num: number = u // 不报错
let num2: number = n // 不报错


// any 任意类型 -> 不进行类型检查
let any: any = 3
any = '123'
any = true
let list3: any = [1, '2', true, null]
