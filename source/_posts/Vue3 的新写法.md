---
abbrlink: ''
abstracts: 让已经有 Vue2 开发经验的 人 ，快速掌握 Vue3 的写法。
author:
  avatar: https://raw.githubusercontent.com/3309446352/Images/main/img/preview.jpg
  description: 古来圣贤皆寂寞，惟有饮者留其名。
  link: https://hexo-git-test-3309446352s-projects.vercel.app/
  name: 好名字都是狗起的,
  socials:
    github: https://github.com/3309446352
categories:
- - 前端
cover: https://raw.githubusercontent.com/3309446352/Images/main/img/啊，什么时候雨停啊！.webp
date: '2025-04-16T22:47:49.663313+08:00'
description: description
tags:
- Vue
title: Vue3 的新写法
updated: '2025-04-16T22:49:07.052+08:00'
---
#  {{title}}

## 简介 : {{description}}

最近因为项目需要，不得不学习一下 Vue3。于是花了 4 个小时，把 Vue3 过了一遍。现在我来带你快速了解 Vue3 的写法。

> 文章首发于飞书：[原文链接（更好的阅读体验）](https://link.juejin.cn?target=https%3A%2F%2Fsimplest-frontend.feishu.cn%2Fwiki%2FwikcnTpCoVC9iZsNVmw8XiHssmI "https://simplest-frontend.feishu.cn/wiki/wikcnTpCoVC9iZsNVmw8XiHssmI")

**本文的目的，是为了让已经有 Vue2 开发经验的** **人** **，快速掌握 Vue3 的写法。**

**因此，** **本篇假定你已经掌握 Vue 的核心内容** **，只为你介绍编写 Vue3 代码，需要了解的内容。**

## 一、Vue3 里 `script` 的三种写法

首先，Vue3 新增了一个叫做组合式 api 的东西，英文名叫 Composition API。因此 Vue3 的 `script` 现在支持三种写法，

### **1、最基本的 Vue2 写法**

```vue
html 代码解读复制代码<template>
  <div>{{ count }}</div>
  <button @click="onClick">
    增加 1
  </button>
</template>

<script>
export default {
  data() {
    return {
      count: 1,
    };
  },
  methods: {
    onClick() {
      this.count += 1;
    },
  },
}
</script>
```

### **2、setup() 属性**

```vue
xml 代码解读复制代码<template>
  <div>{{ count }}</div>
  <button @click="onClick">
    增加 1
  </button>
</template>

<script>
import { ref } from 'vue';
export default {

  // 注意这部分
  setup() {
    let count = ref(1);
    const onClick = () => {
      count.value += 1;
    };
    return {
      count,
      onClick,
    };
  },
  
}
</script>
```

### 3、`<script setup>`

```vue
xml 代码解读复制代码<template>
  <div>{{ count }}</div>
  <button @click="onClick">
    增加 1
  </button>
</template>

<script setup>
import { ref } from 'vue';

const count = ref(1);
const onClick = () => {
  count.value += 1;
};
</script>
```

正如你看到的那样，无论是代码行数，还是代码的精简度，`<script setup>` 的方式是最简单的形式。

**如果你对 Vue 很熟悉，那么，我推荐你使用** **`<script setup>`** **的方式。**

这种写法，让 Vue3 成了我最喜欢的前端框架。

**如果你还是前端新人，那么，我推荐你先学习第一种写法。**

因为第一种写法的学习负担更小，先学第一种方式，掌握最基本的 Vue 用法，然后再根据我这篇文章，快速掌握 Vue3 里最需要关心的内容。

第一种写法，跟过去 Vue2 的写法是一样的，所以我们不过多介绍。

第二种写法，所有的对象和方法都需要 `return` 才能使用，太啰嗦。除了旧项目，可以用这种方式体验 Vue3 的新特性以外，我个人不建议了解这种方式。反正我自己暂时不打算精进这部分。

所以，接下来，我们主要介绍的，也就是 `<script setup>` ，这种写法里需要了解的内容。

**注意：** `<script setup>` 本质上是第二种写法的语法糖，掌握了这种写法，其实第二种写法也基本上就会了。（又多了一个不学第二种写法的理由）。

## 二、如何使用 `<script setup>` 编写组件

**学习 Vue3 并不代表你需要新学习一个技术，Vue3 的底层开发思想，跟 Vue2 是没有差别的。**

**V3 和 V2 的区别就像是，你用不同的语言或者方言说同一句话。**

所以我们需要关心的，就是 Vue2 里的内容，怎么用 Vue3 的方式写出来。

### 1、`data`——唯一需要注意的地方

整个 `data` 这一部分的内容，你只需要记住下面这一点。

**以前在** **`data`** **中创建的属性，现在全都用** **`ref()`** **声明。**

**在** **`template`** **中直接用，在** **`script`** **中记得加** **`.value`** **。**

在开头，我就已经写了一个简单的例子，我们直接拿过来做对比。

#### **1）写法对比**

```vue
xml 代码解读复制代码 // Vue2 的写法

<template>
  <div>{{ count }}</div>
  <button @click="onClick">
    增加 1
  </button>
</template>

<script>
export default {
  data() {
    return {
      count: 1,
    };
  },
  methods: {
    onClick() {
      this.count += 1;
    },
  },
}
</script>
```

```vue
xml 代码解读复制代码 // Vue3 的写法

<template>
  <div>{{ count }}</div>
  <button @click="onClick">
    增加 1
  </button>
</template>

<script setup>
import { ref } from 'vue';

 // 用这种方式声明
const count = ref(1);

const onClick = () => {
   // 使用的时候记得 .value
  count.value += 1;
};
</script>
```

#### **2）注意事项——组合式** **api** **的心智负担**

##### **a、ref 和 reactive**

Vue3 里，还提供了一个叫做 `reactive` 的 `api`。

但是我的建议是，你不需要关心它。绝大多数场景下，`ref` 都够用了。

##### **b、什么时候用** **`ref()`** **包裹，什么时候不用。**

要不要用ref，就看你的这个变量的值改变了以后，页面要不要跟着变。

当然，你可以完全不需要关心这一点，跟过去写 `data` 一样就行。

只不过这样做，你在使用的时候，需要一直 `.value`。

##### **c、不要解构使用**

在使用时，不要像下面这样去写，会**丢失响应性。**

**也就是会出现更新了值，但是页面没有更新的情况**

```vue
xml 代码解读复制代码// Vue3 的写法
<template>
  <div>{{ count }}</div>
  <button @click="onClick">
    增加 1
  </button>
</template>

<script setup>
import { ref } from 'vue';

const count = ref(1);
const onClick = () => {
  // 不要这样写！！
  const { value } = count;
  value += 1;
};
</script>
```

**注意：** 学习 Vue3 就需要考虑像这样的内容，徒增了学习成本。实际上这些心智负担，在学习的过程中，是可以完全不需要考虑的。

**这也是为什么我推荐新人先学习 Vue2 的写法。**

### **2、methods**

声明事件方法，我们只需要在 `script` 标签里，创建一个方法对象即可。

剩下的在 Vue2 里是怎么写的，Vue3 是同样的写法。

```vue
xml 代码解读复制代码// Vue2 的写法
<template>
  <div @click="onClick">
    这是一个div
  </div>
</template>

<script>
export default {
  methods: {
    onClick() {
      console.log('clicked')
    },
  },
}
</script>
```

```vue
xml 代码解读复制代码// Vue3 的写法
<template>
  <div @click="onClick">
    这是一个div
  </div>
</template>

<script setup>

// 注意这部分
const onClick = () => {
  console.log('clicked')
}

</script>
```

### **3、props**

声明 `props` 我们可以用 `defineProps()`，具体写法，我们看代码。

#### **1）写法对比**

```vue
xml 代码解读复制代码// Vue2 的写法
<template>
  <div>{{ foo }}</div>
</template>

<script>
export default {
  props: {
    foo: String,
  },
  created() {
    console.log(this.foo);
  },
}
</script>
```

```vue
xml 代码解读复制代码// Vue3 的写法
<template>
  <div>{{ foo }}</div>
</template>

<script setup>

// 注意这里
const props = defineProps({
  foo: String
})

// 在 script 标签里使用
console.log(props.foo)
</script>
```

#### **2）注意事项——组合式** **api** **的心智负担**

使用 props 时，同样注意不要使用解构的方式。

```ts
xml 代码解读复制代码<script setup>
const props = defineProps({
  foo: String
})

 // 不要这样写
const { foo } = props;
console.log(foo)
</script>
```

### **4、emits 事件**

与 `props` 相同，声明 `emits` 我们可以用 `defineEmits()`，具体写法，我们看代码。

```vue
xml 代码解读复制代码// Vue2 的写法
<template>
  <div @click="onClick">
    这是一个div
  </div>
</template>

<script>
export default {

  emits: ['click'], // 注意这里
  methods: {
    onClick() {
      this.$emit('click'); // 注意这里
    },
  },
 
}
</script>
```

```vue
xml 代码解读复制代码// Vue3 的写法
<template>
  <div @click="onClick">
    这是一个div
  </div>
</template>

<script setup>

// 注意这里
const emit = defineEmits(['click']);

const onClick = () => {
  emit('click') // 注意这里
}

</script>
```

### **5、computed**

直接上写法对比。

```vue
xml 代码解读复制代码// Vue2 的写法
<template>
  <div>
    <span>{{ value }}</span>
    <span>{{ reversedValue }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 'this is a value',
    };
  },
  computed: {
    reversedValue() {
      return value
        .split('').reverse().join('');
    },
  },
}
</script>
```

```vue
xml 代码解读复制代码// Vue3 的写法
<template>
  <div>
    <span>{{ value }}</span>
    <span>{{ reversedValue }}</span>
  </div>
</template>

<script setup>
import {ref, computed} from 'vue'
const value = ref('this is a value')

// 注意这里
const reversedValue = computed(() => {
  // 使用 ref 需要 .value
  return value.value
    .split('').reverse().join('');
})

</script>
```

### 6、watch

这一部分，我们需要注意一下了，Vue3 中，watch 有两种写法。一种是直接使用 `watch`，还有一种是使用 `watchEffect`。

两种写法的区别是：

+ `watch` 需要你明确指定依赖的变量，才能做到监听效果。
+ 而 `watchEffect` 会根据你使用的变量，自动的实现监听效果。

#### 1）直接使用 `watch`

```vue
xml 代码解读复制代码// Vue2 的写法
<template>
  <div>{{ count }}</div>
  <div>{{ anotherCount }}</div>
  <button @click="onClick">
    增加 1
  </button>
</template>

<script>
export default {
  data() {
    return {  
      count: 1,
      anotherCount: 0,
    };
  },
  methods: {
    onClick() {
      this.count += 1;
    },
  },
  watch: {
    count(newValue) {
      this.anotherCount = newValue - 1;
    },
  },
}
</script>
```

```vue
xml 代码解读复制代码// Vue3 的写法
<template>
  <div>{{ count }}</div>
  <div>{{ anotherCount }}</div>
  <button @click="onClick">
    增加 1
  </button>
</template>

<script setup>
import { ref, watch } from 'vue';

const count = ref(1);
const onClick = () => {
  count.value += 1;
};

const anotherCount = ref(0);

// 注意这里
// 需要在这里，
// 明确指定依赖的是 count 这个变量
watch(count, (newValue) => {
  anotherCount.value = newValue - 1;
})

</script>
```

#### 2）使用 `watchEffect`

```vue
xml 代码解读复制代码// Vue2 的写法
<template>
  <div>{{ count }}</div>
  <div>{{ anotherCount }}</div>
  <button @click="onClick">
    增加 1
  </button>
</template>

<script>
export default {
  data() {
    return {  
      count: 1,
      anotherCount: 0,
    };
  },
  methods: {
    onClick() {
      this.count += 1;
    },
  },
  watch: {
    count(newValue) {
      this.anotherCount = newValue - 1;
    },
  },
}
</script>
```

```vue
xml 代码解读复制代码// Vue3 的写法
<template>
  <div>{{ count }}</div>
  <div>{{ anotherCount }}</div>
  <button @click="onClick">
    增加 1
  </button>
</template>

<script setup>
import { ref, watchEffect } from 'vue';

const count = ref(1);
const onClick = () => {
  count.value += 1;
};

const anotherCount = ref(0);

// 注意这里
watchEffect(() => {
  // 会自动根据 count.value 的变化，
  // 触发下面的操作
  anotherCount.value = count.value - 1;
})

</script>
```

### 7、生命周期

Vue3 里，除了将两个 `destroy` 相关的钩子，改成了 `unmount`，剩下的需要注意的，就是在 `<script setup>` 中，不能使用 `beforeCreate` 和 `created` 两个钩子。

如果你熟悉相关的生命周期，只需要记得在 `setup` 里，用 `on` 开头，加上大写首字母就行。

```vue
xml 代码解读复制代码// 选项式 api 写法
<template>
  <div></div>
</template>

<script>
export default {
  beforeCreate() {},
  created() {},
  
  beforeMount() {},
  mounted() {},
  
  beforeUpdate() {},
  updated() {},
  
  // Vue2 里叫 beforeDestroy
  beforeUnmount() {},
  // Vue2 里叫 destroyed
  unmounted() {},
  
  // 其他钩子不常用，所以不列了。
}
</script>
```

```vue
xml 代码解读复制代码// 组合式 api 写法
<template>
  <div></div>
</template>


<script setup>
import {
  onBeforeMount,
  onMounted,

  onBeforeUpdate,
  onUpdated,

  onBeforeUnmount,
  onUnmounted,
} from 'vue'

onBeforeMount(() => {})
onMounted(() => {})

onBeforeUpdate(() => {})
onUpdated(() => {})

onBeforeUnmount(() => {})
onUnmounted(() => {})
</script>
```

## 三、结语

好了，对于快速上手 Vue3 来说，以上内容基本已经足够了。

如果觉得这篇文章不错，有帮你节省时间的话，还想听我说哪些内容，欢迎评论区里告诉我。

这篇文章本身不能做到帮你理解所有 Vue3 的内容，但是能帮你快速掌握 Vue3 的写法。

如果想做到对 Vue3 的整个内容心里有数，还需要你自己多看看 Vue3 的官方文档。

---

推荐阅读：

+ [《JavaScript 为什么要有微任务》](https://juejin.cn/post/7086307441847042062 "https://juejin.cn/post/7086307441847042062")
+ [《一个帮你轻松搞定所有学习的方法——RH2W》](https://juejin.cn/post/7278692297013018636 "https://juejin.cn/post/7278692297013018636")

为了帮助更多人拥有像我一样的学习能力，我制作了《[极简化学习](https://link.juejin.cn/?target=https%3A%2F%2Fsstudy.wiki "https://link.juejin.cn/?target=https%3A%2F%2Fsstudy.wiki")》这个系列，欢迎了解。
