## 是什么？

    TypeScript是JavaScript类型的超集，他可以编译成纯JavaScript。
    以后使用js表示JavaScript ts表示TypeScript

## 安装 Ts

```cmd
1、安装 Node.js

2、通过命令行安装  `npm install -g typescript`

3、输入 tsc -V 查看安装结果。出现版本号则表示安装成功 `Version 3.5.2`
```

## 初体验

```JavaScript
// js
function greeter (person) {
  return 'Hello ' + person
}
console.log(greeter('Ginger')) // Hello Ginger

// ts
function greeter2(person: string) {
  return 'Hello ' + person
}
console.log(greeter('Ginger'))
```

## 编译

```bash
tsc 01-ts写法.ts
```

1、代码编写

```JavaScript
// js
function greeter (person) {
  return 'Hello ' + person
}
console.log(greeter('Ginger')) // Hello Ginger

// ts
function greeter2(person: string) {
  return 'Hello ' + person
}
console.log(greeter('Ginger'))
```

2、使用 `tsc` 命令进行编译

```JavaScript
tsc 01-ts写法.ts
```

3、编译后多出一个同名的 `.js` 后缀的文件

```JavaScript
// js
function greeter (person) {
  return 'Hello ' + person
}
console.log(greeter('Ginger')) // Hello Ginger
```

​
