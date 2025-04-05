---
abbrlink: ''
abstracts: TypeScript 是由 Microsoft 开发的一种解释型/动态类型开源编程语言
author: ' Zmc'
categories: []
cover: https://gitee.com/Testcss_qweer/Images/raw/main/img/TS.png
date: '2025-04-06T02:09:20.411132+08:00'
description: TypeScript 是由 Microsoft 开发的一种解释型/动态类型开源编程语言
tags: []
title: TS入门教程
updated: '2025-04-06T02:09:22.293+08:00'
---
#  {{ title }}


**目录**

[1. 什么是TS](#t0)

[2\. TS基本使用](#t1)

[3 TS基础语法](#t2)

[3.1 基础类型约束](#t3)

 [3.11 string，number，boolean， null和undefined](#t4) 

 [3.12 any](#t5) 

[3.13 unknown](#t6)

[3.14 void](#t7)

[3.15 数组](#t8)

 [3.16 对象](#t9)

 [3.2 函数的约束](#t10)

[3.21 普通写法](#t11)

[3.22 函数表达式](#t12)

[3.22 可选参数](#t13)

[3.33 默认参数](#t14)

[3.34 函数赋值](#t15)

[3.3 interface](#t16)

[3.31 基本概念](#t17)

[3.32 可选属性](#t18)

[3.33 只读属性](#t19)

[3.34 描述函数类型](#t20)

[3.35 索引签名](#t21)

[3.4 类](#t22)

[3.41 封装，继承和多态](#t23)

[① 封装](#%E2%91%A0%C2%A0%E5%B0%81%E8%A3%85)

[②继承](#%E2%91%A1%E7%BB%A7%E6%89%BF)

[③多态](#%E2%91%A2%E5%A4%9A%E6%80%81)

[3.42 修饰符](#t24)

[① public](#%E2%91%A0%20public%C2%A0) 

[② private](#%E2%91%A1%20private)

 [③ protectd](#%C2%A0%E2%91%A2%20protectd)

[④ static](#%E2%91%A3%20static)

[⑤ readonly](#%E2%91%A4%20readonly)

[3.43 抽象类](#t25)

[3.44 implements](#t26)

[① 基本概念](#%E2%91%A0%20%E5%9F%BA%E6%9C%AC%E6%A6%82%E5%BF%B5)

[② 约束公共属性和方法](#%E2%91%A1%20%E7%BA%A6%E6%9D%9F%E5%85%AC%E5%85%B1%E5%B1%9E%E6%80%A7%E5%92%8C%E6%96%B9%E6%B3%95)

[3.5 枚举](#t27)

[3.51 基本枚举](#t28)

[3.52 手动赋值](#t29)

[3.53 字符串枚举](#t30)

[3.54 常量成员和计算成员](#t31)

[3.55 枚举的使用示例](#t32)

[3.56 枚举的反向映射](#t33)

[3.6 类型推论](#t34)

[3.61 基础类型推断](#t35)

[3.62 上下文类型推断](#t36)

[3.63 联合类型推断](#t37)

[4\. TS进阶语法【一】](#t38)

[4.1 联合类型](#t39)

[4.2 交叉类型](#t40)

[4.3 类型别名](#t41)

[4.4 类型保护](#t42)

[4.5 常量类型](#t43)

[4.6 泛型](#t44)

[4.61 泛型函数](#t45)

[4.62 泛型类型](#t46)

[4.63 泛型类](#t47)

[4.64 泛型接口](#t48)

[4.65 泛型约束](#t49)

[4.66 泛型与默认类型](#t50)

[4.7 条件类型](#t51)

[4.8 映射类型](#t52)

[操作符](#t53)

[4.9 工具类型](#t54)

[5\. TS进阶语法【二】](#t55)

[5.1 配置文件-tsconfig.json](#t56)

[1\. 基本使用](#t57)

[2.  基本结构](#t58)

[3. 常用 compilerOptions 选项](#t59)

[5.2 模块](#t60)

[1\. 导入和导出](#t61)

[2\. 导出语法](#t62)

[3\. 导入语法](#t63)

[5.3 装饰器](#t64)

[1. 类装饰器](#t65)

[2. 方法装饰器](#t66)

[3. 访问器装饰器](#t67)

[4. 属性装饰器](#t68)

[5\. 参数装饰器](#t69)

[6\. 实际应用示例](#t70)

[5.4 declare](#t71)

[1\. 基本概念](#t72)

[2\. 常用情况](#t73)

[3\. .d.ts 类型声明文件](#t74)

[1\. 创建文件](#1.%20%E5%88%9B%E5%BB%BA%E6%96%87%E4%BB%B6)

[2\. 配置文件](#2.%20%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6)

[5.5 注释指令](#t75)

[1\. @ts-ignore](#t76)

[2\. @ts-expect-error](#t77)

[3\. @ts-nocheck](#t78)

[4\. @ts-check](#t79)

[5\. @ts-ignore、@ts-expect-error 与 eslint-disable 组合](#t80)

---

## 1. 什么是TS

TypeScript 是由 Microsoft 开发的一种解释型/动态类型开源编程语言，它是 JavaScript 的一个超集，为 JavaScript 添加了类型系统和一些其他特性。TypeScript 的代码最终会被编译（或称为转译）成 JavaScript，以便在浏览器或任何支持 JavaScript 的环境中运行。使用 TypeScript 的主要目的是在开发阶段捕获错误、改进代码质量和提供更丰富的开发体验。


| TypeScript                                      | JavaScript                       |
| ----------------------------------------------- | -------------------------------- |
| JavaScript 的超集，用于解决大型项目的代码复杂性 | 一种脚本语言，用于创建动态网页。 |
| 强类型，支持静态和动态类型                      | 动态弱类型语言                   |
| 可以在编译期间发现并纠正错误                    | 只能在运行时发现错误             |
| 不允许改变变量的数据类型                        | 变量可以被赋予不同类型的值       |

总的来说，因为JavaScrip不是编译性语言，虽然灵活性强，但无法在编译的时候发现错误，容易出现潜在错误。而使用约束性强，具有静态检查能力的TypeScript，将它编译成JavaScrip后，会减少许多潜在错误，提高代码质量。而且两者相较之下，TS有JS没有的。但JS有的，TS都有。

---

## 2\. TS基本使用

① 安装TypeScript，

```markdown
> npm install -g typescriptAI写代码
```

② 创建，编辑 .ts文件。如：

```TypeScript
var language: string = 'TypeScript'var version: number = 4console.log(language, ':', version)AI写代码
```

③ 编译TypeScript

编写完TS代码后，需要用TS编译器（tsc）将其编译成JavaScript代码。可通过在终端中运行`tsc`命令并指定 .ts 文件来完成。例如：

```bash
>  tsc demo1/index.tsAI写代码
```

编译后的 index.js 文件

```javascript
var language = 'TypeScript';var version = 4;console.log(language, ':', version);AI写代码
```

④运行TypeScript，实际上运行的是TS编译成的JS代码。可以使用Node.js或浏览器等JS运行环境来运行编译后的JS文件。

---

## 3 TS基础语法

### 3.1 基础类型约束

类型约束的作用主要是严格检查代码中的数据类型，防止意外赋值，以减少类型错误提高开发效率，如：

![](https://i-blog.csdnimg.cn/direct/1576796da8bf4c02958beef9aeda91c6.png)

我们定义了一个约束类型为string的变量language，当我们将其重新赋值为number类型的数值时，就会给出错误提示。 注意：约束类型首字母应该小写

---

####  **3.11 string，number，boolean， null和undefined** 

```TypeScript
let str: string = 'TypeScript'    //String类型let num: number = 4               //Number 类型let bool: boolean = true          //Boolean 类型let ud: undefined = undefined     // undefined 类型let nl: null = null               // null 类型AI写代码
```

注意：string类型是支持[模板字符串](https://so.csdn.net/so/search?q=%E6%A8%A1%E6%9D%BF%E5%AD%97%E7%AC%A6%E4%B8%B2&spm=1001.2101.3001.7020)的，如：let str: string = \`modle ${name}\` 

---

####  **3.12 any** 

代表任何类型，在我们不清楚用什么类型时，可以使用 any 类型。它的值可能来自于动态的内容，比如来自用户输入或第三方代码库，但通常不建议使用 any，不然就丧失了 TS 的意义。

```TypeScript
let anyType: any = 4anyType = "string"             // 可以是 string 类型anyType = false                // 也可以是 boolean 类型anyType.name                   // 可以随便调用属性和方法anyType.getName()AI写代码
```

---

#### 3.13 unknown

代表任何类型，与any相似。但不同的是，“any 是合法的，而unknown是不合法的 ”。如：

```TypeScript
function divide(param: any) {    return param / 2;}AI写代码
```

我们把 param 定义为 any 类型，TS 编译能顺利通过，但没有把潜在的风险暴露出来：如果传的不是 number 类型，就无法达到预期。

而我们将 param 定义为 unknown 类型 ，TS 编译器就能拦住潜在风险，如：

![](https://i-blog.csdnimg.cn/direct/024095eb3f0b4ab8bd205437287cc555.png)

因为不知道 param 的类型，使用运算符 `/`，导致报错。

此时，我们再配合类型断言，即可解决这个问题，

```TypeScript
function divide(param: unknown) {    return param as number / 2;}AI写代码
```

使用类型断言，相当于告诉TypeScript编译器：“我知道这个对象有这些属性，请相信我。”然而，这种方法应该谨慎使用，因为它会绕过TypeScript的类型检查系统。

---

#### 3.14 **void**

代表没有任何类型，与 any 类型相反。比如函数没有明确返回值，默认返回 Void 类型

```TypeScript
function greetting():void {    console.log('hello!')}AI写代码
```

---

#### 3.15 数组

① 如果需要约束数组内元素类型为同一类型

```TypeScript
let num_list: number[] = [1, 2, 3] //或另一种写法，泛型约束数组（后面细讲）let num_list: Array<number> = [1, 2, 3] num_list.push(4)               // 可以调用数组上的方法AI写代码
```

数组内元素类型不匹配会报错：

![](https://i-blog.csdnimg.cn/direct/5090df4dc13348c9857d63649687adad.png)

 同理，其它约束类型也可以这样，如：

```TypeScript
let num_list: Array<number> = [1, 2]let str_list: Array<string> = ['1', '2']let bool_list: Array<boolean> = [true, false]let any_list: Array<any> = [1, '2', true]const obj1 = {}let obj_list: Array<object> = [obj1]AI写代码
```

---

②如果需要约束数组内元素类型在多个类型范围内

```TypeScript
let list: (number | string)[] = [1, '2']//或 初始化时，不限制元素数量let list: (number | string)[] = [] list.push(3)list.push('4')AI写代码
```

如果元素类型既不匹配number，也不匹配string则会报错

---

③元组：如果需要约束数组内元素类型在多个类型范围内，同时需要约束其初始化时的内容数量

```TypeScript
let tuple: [number, string] = [18, 'lin']AI写代码
```

在初始化时，元素类型、数量、位置都需要何约束类型一一对应

![](https://i-blog.csdnimg.cn/direct/66dc7bef78df4762bd9237a3260d48fd.png)

可以对元组使用数组的方法，添加类型匹配的元素 时，不会报错

![](https://i-blog.csdnimg.cn/direct/2573dc507c4f4566a8459549e1f8c0ec.png)

---

####  3.16 对象

对对象的属性进行类型约束，需要严格一一对应，属性需要存在且类型匹配

```TypeScript
let obj: {    name: string,    age: number} = {    name: 'Jack',    age: 18}AI写代码
```

也可以用可选参数 / 缺省写法 ：在 参数后加个问号，代表这个参数是可选的

```TypeScript
let obj: {    name: string    age?: number} = {    name: 'Jack'}AI写代码
```

---

###  3.2 函数的约束

#### 3.21 普通写法

TS 定义函数类型需要定义输入参数类型和输出类型。不过，输出类型也可以忽略，因为 TS 能够根据返回语句自动推断出返回值类型。

```TypeScript
function sum(x: number, y: number): number {    return x + y}sum(1, 2)AI写代码
```

函数没有明确返回值，默认返回 Void 类型

```TypeScript
function greetting(): void {    console.log('hello');}AI写代码
```

---

#### 3.22 函数表达式

```TypeScript
var sum = (params1: number, params2: number) => {    return params1 + params2}....编译后的JS代码var sum = function (params1, params2) {    return params1 + params2;}AI写代码
```

注意：sum的写法有点像ES6的箭头函数，但并不是箭头函数。而是相当于我们对函数进行了约束，然后将其赋值给一个变量sum

同时，我们也可以对sum进行约束。如：

```TypeScript
let sum: (params1: number, params2: string) => string = (a: number, b: string): string => {    return a + b}.....编译后JS代码var sum = function (a, b) {    return a + b}AI写代码
```

这样就约束了sum可接受的函数的约束类型

---

#### 3.22 可选参数

与对象的可选参数写法类似。在参数后加个问号，代表这个参数是可选的。

```TypeScript
function sum(x: number, y?: number) {    if (y) return x + y    return x}...编译后的JS代码function sum(x, y) {    if (y)        return x + y;    return x;}AI写代码
```

注意：必选参数不能位于可选参数的后面，也不能直接使用可选参数，不然会导致编译错误。

![](https://i-blog.csdnimg.cn/direct/0a10d1d29ca9467dbda1267a844e8326.png)

---

#### 3.33 默认参数

```TypeScript
function sum(x: number, y: number = 100) {    return x + y}.....编译后的JS代码function sum(x, y) {    if (y === void 0) { y = 100; }    return x + y;}AI写代码
```

注意：如果带默认值的参数不是最后一个参数，用户必须明确的传入 `undefined`值来获得默认值。

![](https://i-blog.csdnimg.cn/direct/95e1f510f6fb428a8568b4f3e4139121.png)

---

#### 3.34 函数赋值

在JS中变量可以随意赋值，不会抛出错误

```TypeScript
function sum(){}//或箭头函数  let sum =()=>{}sum='123'AI写代码
```

但在TS中，函数不能随便赋值（将函数赋值给函数也不行），会报错的

![](https://i-blog.csdnimg.cn/direct/0d542cdcbd594fabb80c857b0b2750c8.png)

但可以有下面这种写法，和上面介绍的TS中的函数表达式写法原理一样。

```TypeScript
function sum(x: number, y: number) {    return x + y}const sum2 = sumAI写代码
```

---

### 3.3 interface

#### 3.31 基本概念

如果我们需要对一个十分复杂的数据结构进行类型约束，比如

```TypeScript
let data = {    message: '成功',    success: true,    data: { list: [ { id: 0, name: 'Jack' } , { id: 1, name: 'Tom' }] }}AI写代码
```

这种情况我们就需要不断嵌套约束，比如这样：

```TypeScript
data: {    message: string,    success: boolean,    data: { list: { id: number, name: string }[]}}AI写代码
```

但以这样的方式来约束每一个复杂的数据结构，不但代码会变得十分冗余，且后期维护会较为困难。所以TS提供了interface(接口)来解决这个问题。它是 TS 设计出来专门用于定义对象类型的，可以对对象的形状进行描述。

以上面的例子，我们将对data的描述定义为一个接口，再用它去约束多个data对象

```TypeScript
interface Idata{    message: string;    success: boolean;    data: { list: { id: number; name: string }[]; }} let data1: Idata= {    //....略}let data2: Idata= {    //....略}AI写代码
```

但这样的写法，代码的复用性依然不高。所以我们对 Idata 再拆分：

```TypeScript
interface Idata {    message: string;    success: boolean;    data: Ilist}interface Ilist {    list: { id: number; name: string; }[]} let data1: Idata= {....略 }AI写代码
```

这样，我们在今后对代码进行维护时就只用对少量的代码层进行维护，同时也提高了代码的复用性

注意：

① 定义的接口首字母应该大写以便和普通约束类型区分。

② 接口内的结束时  ;  结尾

③被接口约束的对象，其属性少写或类型错写均会报错提示（此处不再演示）

④ interface 不是 JS 中的关键字，所以 TS 编译成 JS 之后，这些 interface 是不会被转换过去的，都会被删除掉，interface 只是在 TS 中用来做静态检查

---

#### 3.32 可选属性

既然接口就是用来描述对象的，那么当然也可以使用可选参数，和上面3.16 介绍的一样

```TypeScript
interface Person {    name: string;    age?: number;}let p: Person = {    name: 'jack'}AI写代码
```

---

#### 3.33 只读属性

如果希望某个属性不被改变，可以这么写：

```TypeScript
interface Person {    readonly name: string;    age: number;}let p: Person = {    name: 'jack',    age: 18}AI写代码
```

如果尝试重新为name赋值，则会报错

![](https://i-blog.csdnimg.cn/direct/a433c788efa64917a504cf97c683c0b3.png)

---

#### 3.34 [描述函数](https://so.csdn.net/so/search?q=%E6%8F%8F%E8%BF%B0%E5%87%BD%E6%95%B0&spm=1001.2101.3001.7020)类型

在JS中作为一种特殊的对象的函数，自然也是可以使用接口来描述的：

```TypeScript
interface ISum {    (params1: number, params2: number): number}const sum: ISum = (x, y) => {    return x + y}AI写代码
```

---

#### 3.35 **索引签名**

它允许你定义一个灵活的接口，该接口可以包含任意数量的属性，只要这些属性的键和值符合索引签名的要求。如：

```TypeScript
interface DynamicProps {    [key: string]: number; // 任意字符串作为键，值必须是number类型  }let obj: DynamicProps = {    a: 1,    b: 3,};AI写代码
```

甚至我们可以用这样的方法制造一个TS中的伪数组

```TypeScript
interface Fake {    [key: number]: any; // 任意数字作为键，值可以是任何类型  }let fake_arr: Fake = [1, '2', null]AI写代码
```

尝试使用数组方法，会发现不存在。

![](https://i-blog.csdnimg.cn/direct/88dd8856df9f4465b0df115c4dedb38e.png)

但其编译之后的JS代码却是一个普通数组，具有数组方法。和其它有约束类型的数组一样，再TS中有约束，但编译后的JS不受约束。

```TypeScript
var fake_arr = [1, '2', null];fake_arr.push(666)  //[1, '2', null, 666]AI写代码
```

---

### 3.4 类

JS是通过原型和原型链来实现面向对象编程的，而在ES6中，官方新增了class和extends语法糖 。

TS中的类，写法和 JS 差不多只是要定义一些类型而已。但是它增加了一些修饰符来增强了 JS 中的类，如 public、private、protected等

---

#### 3.41 封装，继承和多态

##### ① 封装

封装一个person类，有属性 name 和 方法 sayHello

```TypeScript
class Person {    name: string    constructor(name: string) {        this.name = name    }    sayHello() {        console.log(`hello !,my name is ${this.name}`);    }}// 新建实例  ，并访问其方法const p = new Person('Jack')p.namep.sayHello()AI写代码
```

---

##### ②继承

使用 extends 关键字实现继承，并使用 super 关键字来继承父类的属性。定义一个 Man 类继承自 Person 类。

```TypeScript
class Man extends Person {    age: number             //定义man自己的属性    constructor(name: string, age: number) {        super(name)         //super关键字继承Person的name属性        this.age = age    }    //定义man自己的方法    greetting() {        console.log('一个真正的Man');    }}const m = new Man('Ikun', 18)//...访问方法和属性AI写代码
```

---

##### ③多态

子类对父类的方法进行了重写，子类和父类调同一个方法时会不一样。

```TypeScript
class Man extends Person {    constructor(name: string) {        super(name)    }    sayHello() {       console.log(`我是${this.name}`)    }}const m = new Man('Ikun')m.sayHello()//输出：  我是 IkunAI写代码
```

---

#### 3.42 修饰符

##### ① **public** 

公有的，一个类里默认所有的方法和属性都是 public。public 可写可不写，不写默认也是 public。比如上面的Person类其实也是这样的

```TypeScript
class Person {    public name: string    public constructor(name: string) {        this.name = name    }    public sayHello() {        console.log(`hello !,my name is ${this.name}`);    }}AI写代码
```

---

##### ② **private**

私有的，只属于这个类自己，它的实例和继承它的子类都访问不到。如：

```TypeScript
class Person {    private name: string}const p = new Person()p.nameAI写代码
```

实例访问报错：**只能在类中访问**

![](https://i-blog.csdnimg.cn/direct/555a5f671ad848eabc65557982d03c48.png)

---

#####  ③ **protectd**

受保护的，继承它的子类可以访问，实例不能访问。如：

```TypeScript
class Person {    protected name: string}const p = new Person()p.nameAI写代码
```

实例访问报错：**只能在类及其子类中访问**

![](https://i-blog.csdnimg.cn/direct/b20ef774a8a04335874a705bffd93a0c.png)

---

##### ④ **static**

静态属性，可以理解为是类上的一些**常量**，实例不能访问。如：

```TypeScript
class PI {    static pi = 3.14}const p = new PI()PI.pip.piAI写代码
```

p.pi访问报误，**只能通过类访问静态成员**

![](https://i-blog.csdnimg.cn/direct/42fb6dd8aa4d41d5b74fe4505774e9d1.png)

---

##### ⑤ readonly

只读，不可重新赋值

```TypeScript
class PI {    readonly pi = 3.14}const p = new PI()p.pi = 3AI写代码
```

修改报错：**只读属性，无法修改**。

 ![](https://i-blog.csdnimg.cn/direct/290f80c197834d11b75ee5327a8eaf27.png)

---

#### 3.43 [抽象类](https://so.csdn.net/so/search?q=%E6%8A%BD%E8%B1%A1%E7%B1%BB&spm=1001.2101.3001.7020)

+ 抽象类不完成具体功能
+ 抽象类不能被实例化，只能继承。且如果要继承，则子类中必须实现该抽象类中的抽象方法
+ 抽象类和抽象方法通过关键字abstract 来声明

尝试实例化抽象类Student，报错，无法创建抽象类实例![](https://i-blog.csdnimg.cn/direct/6530ba402fa64cfa8a303addd100af98.png)

继承抽象类而不实现抽象方法，报错，子类需要主动实现抽象方法

![](https://i-blog.csdnimg.cn/direct/063937968f134859a13cd59dabae1e2a.png)

正确使用如下：

```TypeScript
abstract class Student {    abstract study(): void}class Jack extends Student {    study(): string {        return '看书'    }}AI写代码
```

在面向对象的概念中，所有的对象都是通过类来描绘的，但是反过来，并不是所有的类都是用来描绘对象的，如果一个类中没有包含足够的信息来描绘一个具体的对象，这样的类就是抽象类。

比如上面的 Student 类和 Jack 类的关系，学生会学习，但每个人学习的的方式可能不同。

所以抽象类的用法是用来定义一个基类，声明共有属性和方法，拿去被继承。

抽象类的好处是可以抽离出事物的共性，有利于代码的复用。

---

#### 3.44 implements

##### ① 基本概念

上文中，我们提到TS中的interface 是用于定义对象类型的。而它同样也可以用来约束 class，要实现约束，需要用到 implements关键字。

implements是实现的意思，即定义了约束后，class 必须要满足接口上的所有条件。如下：

```TypeScript
interface Ip1 {    name: string;    age: number}interface Ip2 {    greeet(): void}class Person implements Ip1, Ip2 { }AI写代码
```

因为Person并没有实现接口上的条件，所以会报错：

![](https://i-blog.csdnimg.cn/direct/6cb2408c45d046b6886b25c750624a2d.png)

---

##### ② 约束公共属性和方法

有时候，会存在不同的类有一些共同的属性和方法的情况，比如手机和音响都有播放音乐的功能，如果我们使用继承，那么该由谁来继承自谁呢？

而且TypeScript中的类**仅支持单继承，**由于两者只能提取处少量的共同点，如果单独提取出一个基类来继承，这样做的话显得很不划算。

所以我们使用 implements 接口就轻松解决了顾虑，同时还可以实现多个接口，来约束不同的类。

大大提高了代码的复用性：

```TypeScript
interface Call {    makePhoneCall(): void}interface MusicInterface {    playMusic(): void}class Sound implements MusicInterface {    playMusic() { }}class Phone implements MusicInterface, Call {    playMusic() { }    makePhoneCall() { }}AI写代码
```

---

### 3.5 枚举

TS中的枚举（Enum）是一种强大的特性，它允许你定义一个由一组命名的常量组成的类型。枚举提供了一种清晰的方式来定义一组固定的值，并让代码更加易读和易于维护。

枚举简单来说就是取值是在一定范围内的一系列常量。

#### 3.51 基本枚举

```TypeScript
enum Color {    Red,    Green,    Blue} let c: Color = Color.Green; console.log(Color.Red); //0...AI写代码
```

在这个例子中，Color 是一个枚举类型，它有三个成员：Red、Green 和 Blue。**默认情况下，枚举成员的数值从 0 开始递增**，所以 Red 的值是 0，Green 的值是 1，Blue 的值是 2。

---

#### 3.52 手动赋值

你也可以手动为枚举成员指定值：

```TypeScript
enum Color {      Red = 1,      Green,      Blue  }    // 在这里，Red = 1, Green = 2, Blue = 3AI写代码
```

---

#### 3.53 字符串枚举

从TypeScript 2.4开始，你也可以定义字符串枚举：

```TypeScript
enum Direction {      Up = "UP",      Down = "DOWN",      Left = "LEFT",      Right = "RIGHT",  }    let direction: Direction = Direction.Up;AI写代码
```

在字符串枚举中，每个成员都必须被赋予一个字符串字面量值，或者通过其他已赋值的字符串枚举成员来计

---

#### 3.54 常量成员和计算成员

枚举成员可以是常量或计算得出的值。在上面的例子中，Red = 1、Up = "UP" 是常量成员，而 Green和Blue（3.51 和 3.52 中）则是计算成员，因为它们的值是从前面的成员推导出来的。

---

#### 3.55 枚举的使用示例

枚举在TypeScript中非常灵活，可以用于各种场景，包括但不限于状态管理、错误码定义、配置选项等。通过合理使用枚举，你可以使你的TypeScript代码更加清晰、易于理解和维护。

比如：将 x 约束在E的范围内：

```TypeScript
enum E {      A,      B  }  function f(x: E) {      return x;  }  f(E.A); // 正确  f(99); // 错误，因为99不是E的成员AI写代码
```

---

#### 3.56 枚举的反向映射

枚举成员不仅向前映射（从枚举成员到值的映射），而且还反向映射（从值到枚举成员的映射）。这意味着你可以使用枚举值来查找枚举成员的名字：

```TypeScript
enum Color {    Red,    Green,    Blue}console.log(Color[0]);  //Redconsole.log(Color[1]);  //Greenconsole.log(Color[2]);  //BlueAI写代码
```

那么枚举是如何实现反向映射的呢？我们不妨来看一下编译后的JS代码，

```TypeScript
var Color;(function (Color) {    Color[Color["Red"] = 0] = "Red";    Color[Color["Green"] = 1] = "Green";    Color[Color["Blue"] = 2] = "Blue";})(Color || (Color = {}));var c = Color.Green;AI写代码
```

首先将主体的赋值代码放在一个 “立即执行函数（匿名函数的自运行）”中，使得这段代码在程序中拥有独立作用域并只能执行一次。

定义一个变量Color，作为参数传入立即执行函数进行赋值操作。

```TypeScript
执行下面的代码Color[Color["Red"] = 0] = "Red"; 相当于分别执行Color["Red"] = 0和Color[0] = "Red";AI写代码
```

这样就实现了枚举的向前映射和反向映射。 

---

### 3.6 类型推论

类型推断是TypeScript的一个核心特性，它允许开发者在声明变量或函数时不必显式地指定类型，而是由TypeScript编译器根据上下文自动推断出类型。这种机制减少了代码中的冗余，并使得代码更加简洁。

#### 3.61 **基础类型推断**

①  当变量被初始化时，TS会根据初始值的类型来推断变量的类型。例如，`let x = 10;` 中，`x` 会被推断为 `number` 类型。

② 如果变量没有初始化，TS则无法推断出具体的类型，此时变量的类型默认为 `any`。

```TypeScript
let num1          //anylet num2 = 5      //numberAI写代码
```

注意：类型推论是具有类型约束效力的，例：如果我们重新为num2赋值，会赋值失败：

![](https://i-blog.csdnimg.cn/direct/eacab80cdf674fa9826108f0c5840b29.png)

---

#### 3.62 **上下文类型推断**

在某些情况下，TS会根据变量的使用上下文来推断其类型。例如，在函数参数或返回值中，如果参数或返回值的类型没有显式指定，TS会根据函数体中的代码来推断其类型。

```TypeScript
function fun(num = 10) {    return '666'}AI写代码
```

推断结果：默认参数num被推断为可选的number 类型，函数返回值被推断为string

![](https://i-blog.csdnimg.cn/direct/04eabec7c6344ac18e6882facbbbcb7b.png)

---

#### 3.63 **联合类型推断**

当变量可能包含多种类型时，TS会推断出一个联合类型。如：

```TypeScript
let arr = [0, 1, null, 'lin']AI写代码
```

 被推断为：

![](https://i-blog.csdnimg.cn/direct/775d9e9f688245ac9839e6b425ff6af0.png)

---

## 

## 4\. TS进阶语法【一】

### 4.1 联合类型

联合类型（union types），用来定义可支持多种类型的变量。

如下: num可以是number类型也可以是string类型

```javascript
let num: string | number num = '5'num = 5AI写代码
```

注意：因为不确定num具体是哪一种变量，所以**调用方法时最好只调用共有的或配合类型断言**。

---

### 4.2 交叉类型

交叉类型一般用于对对象进行扩展，

```TypeScript
interface Person {    name: string,    age: number}type Student = Person & { id: number }const s1: Student = {    id: 1134,    name: 'LiHua',    age: 18}console.log(s1);//{ id: 1134, name: 'LiHua', age: 18 }AI写代码
```

这和类的继承是一模一样的，这样 Student 就继承了 Person 上的属性。

类似于interface 的extends，都是为了实现对象形状的组合和扩展。

```TypeScript
interface Person {    name: string;    age: number;}interface Student extends Person {    id: number}AI写代码
```

---

### 4.3 类型别名

就是给类型起一个别名，使用 type 关键字来声明，比如在项目开发中

```TypeScript
import componentA from '../../../../components/componentA/index.vue'import componentA from '@/components/componentA/index.vueAI写代码
```

使用@来代替相对路径，就能很方便的引入组件。

```TypeScript
type arrItem = number | string                  // 联合类型const arr: arrItem[] = [1, '2', 3] type Name = string // 基本类型type Person = {    name: Name} type Student = Person & { grade: number }       // 交叉类型type Teacher = Person & { major: string }type StudentAndTeacherList = [Student, Teacher]  // 元组类型 const list: StudentAndTeacherList = [    { name: 'lin', grade: 100 },    { name: 'liu', major: 'Chinese' }]AI写代码
```

有了类型别名，我们书写 TS 的时候可以更加方便简洁。

**type 和 interface**

仔细观察上面的例子可以发现类型别名和接口的功能在某些时候相似有点相似，为了不将两者混淆，我们对比一下两者的异同。

两者相同点：

+ 都可以定义一个对象（或函数）
+ 都允许继承，但type 继承通过交叉类型&来实现，interface继承通过extends来实现
+ 甚至还可以  type 继承 interface， interface 继承 type

```TypeScript
// interface 继承 interfaceinterface Person {    name: string}interface Student extends Person {    grade: number} // type 继承 typetype Person = {    name: string}type Student = Person & { grade: number }   // 用交叉类型AI写代码
```

两者不同点：

+ interface（接口） 是 TS 设计出来用于定义对象类型的，可以对对象的形状进行描述。
+ type 是**类型别名**，用于给**各种类型**定义别名，让 TS 写起来更简洁、清晰。
+ type 可以声明基本类型、联合类型、交叉类型、元组，interface 不行
+ interface重复声明会合并属性，type 重复声明会报错

```TypeScript
interface Person {    name: string}interface Person { / 重复声明 interface，会合并属性    age: number}const person: Person = {    name: 'lin',    age: 18}AI写代码
```

---

### 4.4 类型保护

联合变量，因为不确定具体是哪一种变量，所以调用方法时需要对其进行类型保护，以减少出错概率，我们可以使用typeof 和 分支条件来缩小范围

```TypeScript
function getParamsLen(params: number | string | Array<any>): number {    if (typeof params === 'number') {        return params.toString().length    } else {        return params.length    }}getParamsLen([1, 2, 3])AI写代码
```

也可以使用类型断言as，使用类型断言，相当于告诉TS编译器：“我知道这个对象有这些属性，请相信我。然而，这种方法应该谨慎使用，因为它会绕过TS的类型检查系统。”

```TypeScript
function getParamsLen(params: number | string | Array<any>) {    const strOrArr = params as string | Array<any>    if (strOrArr.length) {        return strOrArr.length    } else {        return params.toString().length as number    }}getParamsLen(666)AI写代码
```

---

### 4.5 常量类型

有时候，我们需要定义一些常量，并将它的选值约束在一定范围内，就可以使用type，

```TypeScript
type Sex = '男' | '女'let sex: Sex = '女'----------------------------解析后的JS代码var sex = '女'AI写代码
```

将sex的选值约束在Sex中，如果选值不在其中就会报错。

有点类似于枚举。但明显在这种限选常量的声明中更加好用

```TypeScript
enum Sex {    A = '男',    B = '女'}let sex: Sex = Sex.A-----------------------解析后的JS代码var Sex;(function (Sex) {    Sex['A'] = '\u7537'    Sex['B'] = '\u5973'})(Sex || (Sex = {}))var sex = Sex.AAI写代码
```

---

### 4.6 泛型

**泛型是一种参数化类型，**它可以将类型由原来具体的类型变成一种类型参数，**即定义函数、类或接口时使用参数类型的占位符，然后在调用时才传入具体的类型作为参数**，从而增加代码的灵活性和复用性。

泛型的特点：

+ 函数和类可以轻松地支持多种类型，增强程序的拓展性
+ 不必写冗长的联合类型，增强代码的可读性
+ 灵活控制类型之间的约束
+ 泛型的语法是 `<>` 里写类型参数，一般可以用 `T` 来表示。

#### 4.61 **泛型函数**

在函数定义时使用类型参数，这些参数可在函数内使用，从而使函数可以处理多种类型的数据。

```TypeScript
function identify<T>(arg: T): T {    return arg}AI写代码
```

这里`<T>`表示这是一个泛型函数，`T`是一个类型参数，可以在函数体内使用。**`T`就像一个占位符**、或者说一个变量，在使用的时候可以把定义的类型**像参数一样传入**，它可以**原封不动地输出**。

这样，我们就做到了输入和输出的类型统一，且可以输入输出任何类型。

 ![](https://i-blog.csdnimg.cn/direct/3b510aa4223c48ddbf291157e965b675.png)

---

#### **4.62 泛型类型**

TS泛型允许在定义接口、类等类型时使用类型参数。

```TypeScript
type identify = <T>(arg: T) => Tconst check: identify = function (arg) {    return arg} interface identify<T> {//函数签名，传参和返回值类型相同    (arg: T): T}const check: identify<number> = function (num) {    return num}AI写代码
```

---

#### **4.63 泛型类**

允许在类的实例成员或静态成员上使用类型参数。

```TypeScript
class Stack<T> {    private data: T[] = []    push(item: T) {        return this.data.push(item)    }    pop(): T | undefined {        return this.data.pop()    }}const stack = new Stack<number>()stack.push(6)// Stack<T>是一个泛型类，元素出入类型相同 //泛型数组也是基于此const arr: Array<number> = [1,2,3]AI写代码
```

---

#### 4.64 泛型接口

这些类型参数在接口的实现或使用时被具体的类型所替代。让接口的实现更加灵活

```TypeScript
interface Pair<T> {      first: T;      second: T;  }let numberPair: Pair<number> = { first: 1, second: 2 }; AI写代码
```

---

#### 4.65 泛型约束

泛型约束允许**限制泛型类型的范围**，使泛型类型必须符合特定条件。这可以通过使用`extends`关键字来实现。

```TypeScript
interface Lengthwise { length: number; }function loggingIdentity<T extends Lengthwise>(arg: T): T {    console.log(arg.length);    return arg;}loggingIdentity({ length: 4, a: '0' })loggingIdentity('xue')AI写代码
```

上面这个例子里定义了一个泛型函数loggingIdentity<T>，并使用了泛型约束extends Lengthwise，表示泛型类型T必须符合Lengthwise接口的结构。这样，在函数内部就可以安全地访问arg参数的length属性。

![](https://i-blog.csdnimg.cn/direct/2f41874d2185404995140546c5f2d97e.png)

---

#### 4.66 泛型与默认类型

在TS中，可以为泛型参数指定默认类型。这样，如果在调用函数或创建类实例时没有明确指定泛型类型，就会使用默认类型。

```TypeScript
function createArray<T = number>(length: number, value: T): T[] {    let result: T[] = [];    for (let i = 0; i < length; i++) {        result.push(value);    }    return result;}AI写代码
```

---

### 4.7 条件类型

条件类型允许根据某个类型的属性是否满足某个条件，来确定最终的类型。

**语法**：`T extends U ? X : Y`，若类型T可以赋值给类型U，返回类型X，否则返回类型

```TypeScript
type IsString<T> = T extends string ? true : false;type I0 = IsString<number>; // false  type I1 = IsString<"abc">; // trueAI写代码
```

---

### 4.8 映射类型

映射类型允许基于现有类型创建新的类型，同时对新类型的每个属性应用一个转换函数。减少重复，提升开发效率

```TypeScript
type Person = {    name: string;    age: number;    isStudent: boolean;};type Key = keyof Person; // name |age | isStudent type Stringify<T> = {    [P in Key]: string}; type PersonStringified = Stringify<Person>;// { name: string; age: string; isStudent: string; }let p: PersonStringified = {    name: '',    age: '',    isStudent: ''}AI写代码
```

#### **操作符**

keyof 类型操作符用于**获取一个对象类型中所有公共属性名的联合类型**。

in 操作符，用来对联合类型实现遍历。

Partial操作符**，**`Partial<T>`将`T`的所有属性映射为可选。

```TypeScript
type Person = {    name: string;    age: number;    isStudent: boolean;};type PartialP = Partial<Person>//{ name?: string; age?: number; isStudent?: boolean;};let p: PartialP = {} //原理：借助keyof和intype Partial<T> = {    [P in keyof T]?: T[P]}AI写代码
```

Readonly操作符，`Readonly<T>`将`T`的所有属性映射为只读。

```TypeScript
type Person = {    name: string;    age: number;    isStudent: boolean;};type ReadonlyP = Readonly<Person>//{ readonly name: string; readonly age: number; readonly isStudent: boolean;}let p: ReadonlyP = {    name: 'LILI',    age: 8,    isStudent: true} //原理type Readonly<T> = {    readonly [P in keyof T]: T[P]}AI写代码
```

Pick操作符，用于抽取对象子集，挑选一组属性并组成一个新的类型。

```TypeScript
type Person = {    name: string;    age: number;    isStudent: boolean;};type PickP =  Pick<Person,'name'>//{ name: string;} //原理type Pick<T, K extends keyof T> = {    [P in K]: T[P]}AI写代码
```

---

### 4.9 工具类型

TS提供的一系列内置工具类型来帮助开发者更方便地进行类型操作。且它们的实现原理基本都借助了条件类型。**常用工具类型**：

+ `Exclude<T, U>`：从类型T中排除可以赋值给类型U的所有属性，返回剩余属性的类型。

```TypeScript
type T1 = string | number | boolean;type T2 = Exclude<T1, number | boolean>; // T2 的类型是 string// 原理，借助了条件类型type Exclude<T, U> = T extends U ? never : TAI写代码
```

+ `Extract<T, U>`：提取类型T中可以赋值给类型U的所有属性，返回这些属性的类型。

```TypeScript
type T1 = string | number | boolean;type T2 = Extract<T1, string | boolean>; // T2 的类型是 string | boolean // 原理，借助了条件类型type Extract<T, U> = T extends U ? T : neverAI写代码
```

+ `NonNullable<T>`：从类型T中排除null和undefined，返回剩余属性的类型。

```TypeScript
type T1 = string | null | undefined;  type T2 = NonNullable<T1>; // T2 的类型是 stringAI写代码
```

+ `Parameters<T>`：获取函数类型T的参数类型，返回一个元组类型。

```TypeScript
function foo(a: number, b: string): boolean {      return a > 0 && b.length > 0;  }    type T1 = Parameters<typeof foo>; // T1 的类型是 [a: number, b: string]AI写代码
```

+ `ReturnType<T>`：获取函数类型T的返回类型。

```TypeScript
function bar(): string {      return "hello";  }    type T1 = ReturnType<typeof bar>; // T1 的类型是 stringAI写代码
```

+ `Omit<T, U>`从类型 `T` 中剔除 `U` 中的所有属性。

```TypeScript
interface IPerson {    name: string    age: number} type IOmit = Omit<IPerson, 'age'>// name: stringAI写代码
```

---

## 5\. TS进阶语法【二】

### 5.1 配置文件-tsconfig.json

**tsconfig.json**是TypeScript编译器的配置文件，用于指定**编译**TS代码时的编译选项和编译目标等信息。通过修改它，可以定制TS编译器的行为，例如指定编译目标、启用或禁用特定的语言特性、设置代码检查规则等。它允许开发者根据项目需求进行定制，从而**覆盖**TS**编译器的默认行为**

#### 1\. 基本使用

在终端命令行中运行下面的命令，会在当前目录下生成一个tsconfig.json文件

```csharp
tsc --initAI写代码
```

我们举一个使用示例：在TS中默认使用严格模式，所以在函数中若无特别指出，this不会指向全局对象，值为undefined，

![](https://i-blog.csdnimg.cn/direct/f0a3d074e4694e9b8fbe471b0732057e.png)

然而，我们修改配置文件中的配置项，将配置项 compilerOptions  中的选项 代码 "strict": true,   注释掉，

![](https://i-blog.csdnimg.cn/direct/e915683e43df480f81b43f1f19051105.png)

然后在TS文件中，就取消了严格而模式。当然，实际上并不建议这么做！！

![](https://i-blog.csdnimg.cn/direct/2b66c638a0f14f4e8344b37f4794e461.png)

---

#### 2.  基本结构

```TypeScript
{  "compilerOptions": {    // 编译器选项  },  "include": [    // 包含的文件或文件夹    "src/**/*"  ],  "exclude": [    // 排除的文件或文件夹    "node_modules",       // 排除 node_modules 文件夹    "dist",               // 排除 dist 文件夹    "**/*.test.ts",       // 排除任意文件夹下的所有 .test.ts 文件    "src/temp/**/*"       // 排除 src/temp 文件夹及其所有子文件夹中的文件  ],  "files": [    // 精确指定要编译的文件    "src/index.ts",    "src/utils.ts"  ]}AI写代码
```

+ **include**：指定要包含的文件（也就是该配置文件的规则对哪些.ts文件生效），支持通配符
+ **exclude**：指定要排除的文件或文件夹（和include相反），支持通配符
+ **files**：明确列出需要编译的文件

files和include的作用差不多，都是用来指定配置项只对哪部分文件生效，区别在于

files用于明确列出文件路径，只会编译数组中列出的文件，不会包含任何其他文件。适用于小型项目，或只需要编译特定文件时。

include 用于指定文件模式，支持通配符匹配文件路径。会递归匹配指定目录中的文件，并将符合模式的文件包含在编译中。适合大型项目，或需要编译某个文件夹中的所有文件。

---

#### 3. 常用 compilerOptions 选项

+ **target**：指定 TypeScript 代码编译成的 JavaScript 版本，常用的有 `es5`、`es6`、`esnext` 等。
+ **module**：指定模块系统，如 `commonjs`、`es6`、`umd` 等。
+ **lib**：定义需要包含在编译中的库，如 `ES6`、`DOM` 等。
+ **outDir**：输出目录，编译后的文件会放在这里。
+ **rootDir**：输入文件的根目录，用于指定项目根目录。
+ **strict**：启用所有严格类型检查选项，默认为 `true`。
+ **noImplicitAny**：不允许使用隐式 `any` 类型。
+ **strictNullChecks**：启用严格的空值检查。
+ **esModuleInterop**：允许导入 CommonJS 模块并生成适当的 `__esModule` 标志。
+ **sourceMap**：生成 `.map` 文件，帮助调试。
+ **experimentalDecorators**：启用实验性的装饰器。
+ **emitDecoratorMetadata**：与装饰器一起使用，生成类型元数据。

---

### 5.2 模块

模块（module）语法用于定义模块化的代码结构，帮助组织和封装代码，以便在项目中实现模块复用，并利用模块作用域实现变量隔离，防止污染。（在tsconfig.json文件中可配置相关选项）

```TypeScript
{  "compilerOptions": {    "module": "commonjs",    /* Specify what module code is generated. */  }}AI写代码
```

#### 1\. **导入和导出**

TSc支持两种导入和导出方式：**ES Modules** 和 **CommonJS**。

+ **ES Modules**：现代模块系统，遵循 ECMAScript 标准，适用于前端框架以及新式后端框架。
+ **CommonJS**：Node.js 默认模块系统，适用于传统的 Node.js 项目。

#### 2\. **导出语法**

+ **默认导出**（`export default`）：每个模块只能有一个默认导出。

```TypeScript
// module1.tsexport default function greet() {  console.log("Hello");}AI写代码
```

+ **命名导出**（`export`）：可以导出多个内容（变量、函数、类等），通过 `{}` 导入

```TypeScript
// module2.tsexport function greet() {  console.log("Hello");}export const PI = 3.14;AI写代码
```

---

#### 3\. **导入语法**

+ **导入默认导出**

```TypeScript
// 引入 module1.ts 中的默认导出import greet from "./module1";greet(); // HelloAI写代码
```

+ 导入命名导出

```TypeScript
// 引入 module2.ts 中的命名导出import { greet, PI } from "./module2";greet(); // Helloconsole.log(PI); // 3.14AI写代码
```

+ 全部导入为一个对象

```TypeScript
import * as math from "./module2";math.greet(); // Helloconsole.log(math.PI); // 3.14AI写代码
```

---

### 5.3 装饰器

装饰器是一种特殊声明，可以附加到类、方法、访问器、属性或参数上，允许你在编译时修改类的行为或添加元数据。TS中的装饰器功能主要用于元编程，可以帮助简化代码，增强可重用性。

装饰器的使用需在 `tsconfig.json` 中启用 `experimentalDecorators`：

```TypeScript
{  "compilerOptions": {    "experimentalDecorators": true  }}AI写代码
```

#### 1. 类装饰器

类装饰器应用于类的定义，可以用来修改类或替换类的构造函数。

```TypeScript
function ClassDecorator(constructor: Function) {  console.log("ClassDecorator called");} @ClassDecoratorclass MyClass {  constructor() {}}AI写代码
```

#### 2. 方法装饰器

方法装饰器用于装饰类的方法，可以修改方法的行为或元数据。

```TypeScript
function MethodDecorator(target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor) {  console.log("MethodDecorator called on:", propertyKey);  // 可以修改 descriptor.value 来替换方法实现} class MyClass {  @MethodDecorator  myMethod() {    console.log("Original method");  }}AI写代码
```

#### 3. 访问器装饰器

访问器装饰器用于 `getter` 或 `setter` 方法，允许修改访问器的行为。

```TypeScript
function AccessorDecorator(target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor) {  console.log("AccessorDecorator called on:", propertyKey);} class MyClass {  private _value: string = "test";   @AccessorDecorator  get value() {    return this._value;  }   set value(newValue: string) {    this._value = newValue;  }}AI写代码
```

#### 4. 属性装饰器

属性装饰器用于装饰类的属性，但不会直接改变属性的值或行为

```TypeScript
function PropertyDecorator(target: Object, propertyKey: string | symbol) {  console.log("PropertyDecorator called on:", propertyKey);} class MyClass {  @PropertyDecorator  myProperty: string;}AI写代码
```

#### 5\. 参数装饰器

参数装饰器用于方法参数，可以用来记录参数信息。

```TypeScript
function ParameterDecorator(target: Object, propertyKey: string | symbol, parameterIndex: number) {  console.log("ParameterDecorator called on:", propertyKey, "at parameter index:", parameterIndex);} class MyClass {  myMethod(@ParameterDecorator param: string) {    console.log(param);  }}AI写代码
```

#### 6\. 实际应用示例

下面是一个简单的日志装饰器示例：

```TypeScript
function Log(target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor) {  const originalMethod = descriptor.value;  descriptor.value = function (...args: any[]) {    console.log(`Calling ${String(propertyKey)} with arguments`, args);    const result = originalMethod.apply(this, args);    console.log(`Result of ${String(propertyKey)}:`, result);    return result;  };} class MyClass {  @Log  sum(a: number, b: number) {    return a + b;  }} const myClass = new MyClass();myClass.sum(2, 3);AI写代码
```

---

### 5.4 declare

#### 1\. 基本概念

`declare` 关键字用于声明一些在其他地方定义的内容，如变量、函数、类、模块等，以便在代码中引用它们而不会导致编译错误。 

最常见的例子，就是当使用第三方库时，很多三方库不是用 TS 写的，我们需要引用它的声明文件，才能获得对应的代码补全、接口提示等功能。

比如在 TS 中直接使用 Vue，就会报错，

```TypeScript
const app = new Vue({  el: '#app',  data: {    message: 'Hello Vue!'  }})AI写代码
```

![](https://i-blog.csdnimg.cn/direct/010ddc392cbb4d42a3118c684175f1f5.png)

这时，我们可以使用 `declare` 关键字来定义 Vue 的类型，简单写一个模拟一下，

```TypeScript
interface VueOption {    el: string,    data: any} declare class Vue {    options: VueOption    constructor(options: VueOption)} const app = new Vue({    el: '#app',    data: {        message: 'Hello Vue!'    }})AI写代码
```

#### 2\. 常用情况

`declare` 通常用于以下情况：

+ `declare var`、`declare let`、`declare const`：声明全局变量。
+ `declare function`：声明全局函数。
+ `declare class`：声明全局类。
+ `declare namespace`：声明全局命名空间。
+ `declare module`：声明模块（特别用于第三方模块）。
+ `declare type` / `declare interface`：声明类型或接口（通常在类型声明文件中使用）。

#### 3\. .d.ts 类型声明文件

TS 的 `.d.ts` 文件（类型声明文件）专门用于放置 `declare` 声明，以便为 JS 项目或未定义类型的第三方库提供类型检查支持。

##### 1\. 创建文件

`.d.ts` 文件可以手动编写，也可以通过 TS自动生成：

+ **手动创建**：当你有第三方库或 JS 代码没有类型支持时，手动为它们写 `.d.ts` 文件。
+ **自动生成**：将 TS 编译选项 `declaration` 设置为 `true`，TS 会在编译时生成 `.d.ts` 文件。

```TypeScript
// tsconfig.json{  "compilerOptions": {    "declaration": true  }}AI写代码
```

##### 2\. 配置文件

① **声明全局变量**

如果 `.d.ts` 文件中声明的是全局变量、全局函数或命名空间等全局类型（即不属于任何模块），TS 会自动识别这些声明，并且它们会直接在任何 TS文件中生效。

创建globals.d.ts文件，声明变量

```TypeScript
// globals.d.tsdeclare var myGlobalVar: string;declare function myGlobalFunction(): void;AI写代码
```

在任何 `.ts` 文件中都可以直接使用 `myGlobalVar` 和 `myGlobalFunction`，TS 编译器会识别这些声明而不会报错：

```TypeScript
// example.tsconsole.log(myGlobalVar); // 使用 myGlobalVarmyGlobalFunction(); // 使用 myGlobalFunctionAI写代码
```

但如果你尝试使用tsc .\\src\\example.ts命令将其编译成JS文件，你会发现它会报错，找不到变量？？**这是因为****`.d.ts` 文件中的全局变量声明无法在 JS 环境中找到实际实现，因为 `.d.ts` 文件只是类型声明，而没有实际的 JS代码**。

② **模块声明**（第三方模块或自定义模块）

如果 `.d.ts` 文件中声明的是一个模块（使用 `declare module`），则在 TS 文件中可以使用 `import` 导入该模块。

创建`myModule.d.ts`文件，声明模块 ：

```TypeScript
// myModule.d.tsdeclare module "myModule" {  export function myFunction(): void;}AI写代码
```

在 `.ts` 文件中，可以通过 `import` 导入该模块并使用：

```TypeScript
// example.tsimport { myFunction } from "myModule"; myFunction();AI写代码
```

**注意**：如果 `.d.ts` 文件没有被项目自动识别（例如它位于项目根目录之外的某个文件夹中），可以在 `tsconfig.json` 中手动将其包含

```TypeScript
{  "include": ["src", "types"], // 假设类型声明文件在 types 文件夹中}AI写代码
```

### 5.5 注释指令

TS 提供了一些注释指令，帮助开发者在代码中控制编译行为、管理代码提示和静态分析。这些指令通常是通过特殊的注释格式写在代码的特定位置，以下是一些常见的 TypeScript 注释指令及其使用方法：

#### 1\. @ts-ignore

用于忽略下一行的 TS 错误，它会跳过 TS 对该行的类型检查

```TypeScript
// @ts-ignoreconst value: number = "This will not cause a type error";AI写代码
```

注意：尽量少用 `@ts-ignore`，只有在明确知道某一行会导致无害的类型错误时才使用。

#### 2\. @ts-expect-error

告诉 TS 预期下一行会有错误。如果在这行没有发生错误，TS 编译器会报出提示，提醒开发者移除该指令。相比 @ts-ignore更加安全，因为如果代码在后续改动中修复了该错误，这条指令就不再有效。

```TypeScript
// @ts-expect-errorconst value: number = "This is expected to cause a type error";AI写代码
```

#### 3\. @ts-nocheck

```TypeScript
// @ts-checklet num = 5;num = "Hello"; // 将报类型错误，因为 `num` 是数字AI写代码
```

禁用整个文件的类型检查。使用时需要放在文件的开头，且 TS 编译选项 allowJs 必须为 true。通常用于临时绕过类型检查（如迁移代码时），但在长期代码中使用较少。

```TypeScript
// @ts-nocheckconsole.log("Type checking is disabled for this file.");AI写代码
```

#### 4\. @ts-check

与 @ts-nocheck 相反，@ts-check 启用对 JavaScript 文件的类型检查（当文件后缀是 .js 时）。如果项目中有大量的 JSt 文件，可以在需要类型检查的文件中添加此注释。

```TypeScript
// @ts-checklet num = 5;num = "Hello"; // 将报类型错误，因为 `num` 是数字AI写代码
```

![](https://i-blog.csdnimg.cn/direct/ec90e32471644625ae99097e61e8e2dc.png)

#### 5\. @ts-ignore、@ts-expect-error 与 eslint-disable 组合

可以将 TypeScript 的注释指令与 ESLint 的指令组合使用，以忽略特定类型检查和 ESLint 规则。例如：

```TypeScript
// @ts-expect-error: Suppresses the TS error, expecting an error due to type incompatibility// eslint-disable-next-line no-unused-varsconst someValue: number = "text";AI写代码
```

 6. **JSDoc 注释与 TypeScript 结合**

在 JavaScript 文件中，使用 JSDoc 也可以获得类型检查和自动补全的支持。配合 `@ts-check` 和 `@type` 指令，可以帮助为未转换为 TypeScript 的项目提供类型信息：

```TypeScript
// example.js // @ts-check/** * @param {number} a - The first number * @param {number} b - The second number * @returns {number} - The sum of a and b */function add(a, b) {  return a + b;}AI写代码
```

---

在vue 3项目中使用TS，参考官方文档： [搭配 TypeScript 使用 Vue | Vue.js (vuejs.org)](https://cn.vuejs.org/guide/typescript/overview.html "搭配 TypeScript 使用 Vue | Vue.js (vuejs.org)")

---

> 若有错误或描述不当的地方，烦请评论或私信指正，万分感谢 😃
>
> 很多知识笔者也是通过从各种教程里搬运以及请教  “C老师” 写出来的，自己也没有完全掌握，这也是我写本文的最主要目的，搜集知识，忘了的时候自己看看。共勉！💪
>
> 如果我的文章对你有帮助，你的赞👍就是对我的最大支持^\_^
>


</form>
</div>
