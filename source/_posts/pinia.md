---
title:  pinia 使用方法详解
date: 2024-03-19 15:34:53
tags:
    - pinia
categories:
    - 前端
cover: https://raw.githubusercontent.com/3309446352/Images/main/img/logo.svg
---

## 一：Pinia简介和五大优势

Pinia是vue生态里Vuex的替代者，一个全新的vue状态管理库。在Vue3成为正式版以后，尤雨溪强势推荐的项目就是Pinia。
那先来看看Pinia比Vuex好的地方，也就是Pinia的五大优势。

1. 可以对Vue2和Vue3做到很好的支持，也就是老项目也可以使用Pinia。
2. 抛弃了Mutations的操作，只有state、getters和actions.极大的简化了状态管理库的使用，让代码编写更加容易直观。
3. 不需要嵌套模块，符合Vue3的Composition api ，让代码更加扁平化。
4. 完整的TypeScript支持。Vue3版本的一大优势就是对TypeScript的支持，所以Pinia也做到了完整的支持。如果你对Vuex很熟悉的化，一定知道Vuex对TS的语法支持不是完整的（经常被吐槽）。
5. 代码更加简洁，可以实现很好的代码自动分割。Vue2的时代，写代码需要来回翻滚屏幕屏幕找变量，非常的麻烦，Vue3的Composition api完美了解决这个问题。 可以实现代码自动分割，pinia也同样继承了这个优点。
   

## 二：Pinia开发环境安装

####  1.使用Vite就需要先初始化vite： 

```shell
npm init vite@latest

```

####  2.启动项目： 

```shell
npm install
npm run dev

```

####  3.pinia的安装： 

```shell
npm install pinia

```

## 三：用Pinia的方式创建一个store

####  1.在main.ts文件里引入Pinia 

```js
import { createPinia } from 'pinia'

app.use(createPinia())
```

#### **2.创建pinia**

```
import {defineStore} from 'pinia'
const useAgeStore = defineStore('use', {
    state:()=>{//state 相当于 data 存储变量
        return {}
    },
    getters: {//getters 相当于计算属性 computed
        getAge: (state) => {
            return state.age
        }
    },
    actions: {//actions 相当于 methods
        setAge(age) {
            this.age = age
        }
    }
}) 
```



#### 2.创建store

**<u>*store实例相当于一个容器，里面存放的有类似于data，计算属性，方法之类的东西</u>***。通过defineStore()方法定义

在src下面创建一个store文件夹，再创建与之对应的js文件，比如user.js

```js
import { defineStore } from 'pinia'
​
// useStore 可以是 useUser、useCart 之类的任何东西
// 第一个参数是应用程序中 store 的唯一 id
export const useUser = defineStore('user', {
  // other options...
})
```

3.使用store

```javascript
<script setup>
import { useUser } from '@/store/user.js'
const store = useUser()
console.log(store)
</script>
```

 4.添加state 

```
import { defineStore } from 'pinia'
​
// 第一个参数是应用程序中 store 的唯一 id
// 第二个参数是配置对象
export const useUser = defineStore('user', {
  // state是一个函数，返回一个对象
  state: () => {
    return {
      userName: 'jack',
      avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/363.jpg'
    }
  }
})
```

## 1.state

1.读取state

```js
import { storeToRefs } from 'pinia'
const userStore = useUser()
// 如果直接解构出数据，这个数据不是响应式的。如果想要变成响应式的，需要调用storeToRefs方法
const { userName, avatar } = storeToRefs(userStore)
```

####  1.修改state 

```js
userStore.userName = '张三'
```

####  2.批量修改state 

```js
// 可以用来修改单个属性
userStore.$patch({
  userName: '张三'
})
    
// 这种回调函数的形式适合修改集合类的数据，比如数组
userStore.$patch((state) => {
  state.avatar = 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/596.jpg'
})
```

####  3.重置state 

```js
// 重置
  userStore.$reset()
```

#### 4.直接替换整个state 

```js
// 替换
userStore.$state = { userName: 'rose', avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/854.jpg' }
```



## 2.getters

#### 1.基础使用

类似计算属性。推荐里面传递一个形参的写法，不容易出错。

```js
  getters: {
    isAdult: (state) => {
      return state.age >= 18 ? '成年人' : '未成年'
    }
  }
```

####  2.获取 

```js
// 直接获取
<div>{{userStore.isAdult}}</div>
```

#### 3. 调用本模块其他getters 

```js
  getters: {
    isAdult: (state) => {
      return state.age >= 18 ? '成年人' : '未成年'
    },
    msg: (state) => {
      // msg这个getter访问了自身的getter（isAdult）
      return state.userName + state.isAdult
    }
  }
```

#### 4.getters传参 

```js
  getters: {
    isAdmin: (state) => {
      // 如果getter里面是返回的函数，那么它就可以传参数了
      return (name) => name === 'admin' ? '是管理员' : '不是管理员'
    }
  }
```

 调用： 

```vue
{{userStore.isAdmin}}
```

## 3.actions

```js
  actions: {
    // 这里的方法要写成普通函数，因为里面需要通过this去访问state里面的数据
    changeNameAsync (newName) {
      setTimeout(() => {
        // actions里面可以访问state
        this.userName = newName
      }, 1000)
    }
  }
```

详情可见官方文档 :  https://pinia.vuejs.org