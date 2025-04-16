---
abbrlink: ''
abstracts: Spring Boot 中有许多常用的注解，这些注解用于配置、管理和定义 Spring Boot 应用程序的各个方面。
categories:
- - 后端
date: 2025-4-16-22.02
description: Spring Boot 中有许多常用的注解，这些注解用于配置、管理和定义 Spring Boot 应用程序的各个方面。
tags:
- SpringBoot
title: Spring Boot 常用注解大全
updated: '2025-04-16T22:00:38.961+08:00'
---
---
title: {{ title }}
date: {{ date }}
tags: #看情况可不写
categories: #看情况可不写
cover: #图片
description: {{ description }} #里面简介可不写
abstracts: {{ abstracts }} #图片摘要简介可不写
author: 
  name:"好名字都是狗起的",
  avatar:https://raw.githubusercontent.com/3309446352/Images/main/img/preview.jpg,
  description:古来圣贤皆寂寞，惟有饮者留其名。,
  link":https://hexo-git-test-3309446352s-projects.vercel.app/",
  socials:
    github":"https://github.com/3309446352
---
#  {{ title }}

## 简介 : {{ description}}


Spring Boot 中有许多常用的注解，这些注解用于配置、管理和定义 Spring Boot 应用程序的各个方面。以下是这些注解按大类和小类的方式分类，并附有解释和示例。

## 一、Spring Boot 核心注解

### @SpringBootApplication  

解释：这是一个组合注解，通常用于主应用程序类，标志着这是 Spring Boot 应用程序的入口点。它包含了其他注解，如@Configuration、@ComponentScan 和@EnableAutoConfiguration。  

示例：

```markdown
typescript 代码解读复制代码@SpringBootApplication
public class MyApplication {
    public static void main(String[] args) {
        SpringApplication.run(MyApplication.class, args);
    }
}
```

### @Configuration

1. 解释：标志着一个类作为配置类，它通常用于定义 Bean。
2. 示例：

```markdown
typescript 代码解读复制代码@Configuration
public class MyConfig {
    @Beanpublic MyBean myBean() {
        return new MyBean();
    }
}
```

### @ComponentScan  

解释：用于指定 Spring 容器扫描组件的基本包路径。  

示例：

```markdown
less 代码解读复制代码  @SpringBootApplication
  @ComponentScan(basePackages = "com.example")
  public class MyApplication {
    public static void main(String[] args) {
        SpringApplication.run(MyApplication.class, args);
    }
}
```

## 二、Spring Boot Web 注解

### @Controller

1. 解释：标志着一个类是 Spring MVC 控制器，处理 **[HTTP](https://link.juejin.cn?target=https%3A%2F%2Fapifox.com%2Fapiskills%2Fthe-5-pillars-of-every-http-request%2F "https://apifox.com/apiskills/the-5-pillars-of-every-http-request/")** 请求。
2. 示例：

```markdown
kotlin 代码解读复制代码@Controller
public class MyController {
    // Controller methods here
}
```

### @RestController  

解释：结合@Controller 和@ResponseBody，用于创建 **[RESTful](https://link.juejin.cn?target=https%3A%2F%2Fapifox.com%2Fapiskills%2Frest-api%2F "https://apifox.com/apiskills/rest-api/")** 风格的控制器。  示例：

```markdown
kotlin 代码解读复制代码@RestController
public class MyRestController {
    @GetMapping("/hello")
    public String hello() {
        return "Hello, World!";
    }
}
```

### @RequestMapping  

解释：用于映射 HTTP 请求到控制器方法，并指定 URL 路径。  

示例：

```markdown
less 代码解读复制代码@Controller
@RequestMapping("/my")
public class MyController {
    @GetMapping("/hello")
    public String hello() {
        return "Hello, World!";
    }
}
```

## 三、Spring Boot Bean 注解

### **@Component**

解释：标志着一个类是 **[Spring](https://link.juejin.cn?target=https%3A%2F%2Fapifox.com%2Fapiskills%2Frest-api-best-practice%2F "https://apifox.com/apiskills/rest-api-best-practice/")** 的组件，会被 Spring 扫描并注册为一个 Bean。

示例：

```markdown
kotlin 代码解读复制代码@Component
public class MyComponent {
  // Component logic here
}
```

### **@Service**

解释：

用于标记一个类作为业务逻辑的服务组件。

示例：

```markdown
kotlin 代码解读复制代码@Service
public class MyService {
  // Service logic here
}
```

### **@Repository**

解释：

用于标记一个类作为数据访问组件，通常用于持久层。

示例：

```markdown
kotlin 代码解读复制代码@Repository
public class MyRepository {
  // Repository logic here
}
```

### **@Controller**

解释：用于标记一个类作为 Spring MVC 控制器。

示例：

```markdown
kotlin 代码解读复制代码@Controller
public class MyController {
  // Controller logic here
}
```

### **@RestController**

解释：结合@Controller 和@ResponseBody，用于创建 RESTful 风格的控制器。

示例：

```markdown
kotlin 代码解读复制代码@RestController
public class MyRestController {
  @GetMapping("/hello")
  public String hello() {
      return "Hello, World!";
  }
}
```

### **@Configuration**

解释：标志着一个类是 Spring 的配置类，通常用于定义 Bean。

示例：

```markdown
typescript 代码解读复制代码@Configuration
public class MyConfig {
  @Bean
  public MyBean myBean() {
      return new MyBean();
  }
}
```

这些注解用于定义和管理 Spring Bean，是 Spring Boot 应用程序中的重要组成部分。每个注解都有不同的用途和上下文，你可以根据应用程序的需求使用适当的注解。在 Spring Boot 应用程序中，使用这些注解可以轻松创建和管理 Bean，而无需显式的 XML 配置。

## 四、Spring Boot 数据访问注解

### @Repository  

解释：标志着一个类是 Spring Data 仓库，用于数据库访问。  

示例：

```markdown
kotlin 代码解读复制代码@Repository
  public class UserRepository {
    // Data access methods here
}
```

### @Entity  

解释：用于定义 JPA 实体类，映射到数据库表。

示例：

```markdown
kotlin 代码解读复制代码@Entity
  public class User {
    // Entity fields and methods here
}
```

## 五、Spring Boot 依赖注入注解

### @Autowired  

解释：用于自动装配 Bean，通常与构造函数、Setter 方法或字段一起使用。  

示例：

```markdown
kotlin 代码解读复制代码  @Service
  public class MyService {
    private final MyRepository repository;

  @Autowired
  public MyService(MyRepository repository) {
        this.repository = repository;
    }
}

```

### @Qualifier  

解释：与@Autowired 一起使用，用于指定要注入的 Bean 的名称。  

示例：

```markdown
kotlin 代码解读复制代码  @Service
  public class MyService {
    private final MyRepository repository;

  @Autowired
  public MyService(@Qualifier("myRepository") MyRepository repository) {
        this.repository = repository;
    }
}
```

## 六、其他常用注解

### @Value

1. 解释：用于注入属性值，通常从配置文件中获取。
2. 示例：

```markdown
kotlin 代码解读复制代码@Component
public class MyComponent {
    @Value("${my.property}")
    private String myProperty;
}
```

### @ConfigurationProperties

解释：用于将配置属性绑定到一个 POJO 类，通常用于从配置文件中读取属性值。

示例：

```markdown
less 代码解读复制代码  @Configuration
  @ConfigurationProperties(prefix = "my")
  public class MyProperties {
    private String property1;
    private int property2;
    // Getters and setters
}
```

这只是 Spring Boot 中一些常用注解的分类和示例，还有许多其他注解可用于更专业的用例。根据你的需求，你可以选择使用适当的注解来配置和管理你的 Spring Boot 应用程序。

## 使用 Apifox 测试和管理接口

[Apifox](https://link.juejin.cn?target=https%3A%2F%2Fapifox.com%2F "https://apifox.com/") 是一个比 Postman 更强大的接口测试工具，Apifox = Postman + Swagger + Mock + JMeter， 支持调试 http（s）、WebSocket、Socket、**[gRPC](https://link.juejin.cn?target=https%3A%2F%2Fapifox.com%2Fapiskills%2Fintroduction-to-grpc%2F "https://apifox.com/apiskills/introduction-to-grpc/")**、**[Dubbo](https://link.juejin.cn?target=https%3A%2F%2Fapifox.com%2Fapiskills%2Fdubbo-framework%2F "https://apifox.com/apiskills/dubbo-framework/")** 等协议的接口，并且集成了 **[IDEA 插件](https://link.juejin.cn?target=https%3A%2F%2Fapifox.com%2Fapiskills%2Fapifox-auto-generates-api-docs%2F "https://apifox.com/apiskills/apifox-auto-generates-api-docs/")**。在开发完接口后，可以通过 Apifox 的 IDEA 插件一键自动生成接口文档，多端同步，非常方便测试和维护。

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b3d02d1c2938471cab69c6273a1af16e~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=1280&h=755&s=264692&e=png&b=35383b)![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bd97da894ddd495f973432d7305bbaa6~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=1280&h=810&s=414796&e=png&a=1&b=1f2025)

***知识扩展：***

+ ***[一文看懂 Spring Boot Banner 生成功能](https://link.juejin.cn?target=https%3A%2F%2Fapifox.com%2Fapiskills%2Fspring-boot-banner%2F "https://apifox.com/apiskills/spring-boot-banner/")***
+ ***[Spring Boot Bean 生命周期的用法详解](https://link.juejin.cn?target=https%3A%2F%2Fapifox.com%2Fapiskills%2Fspring-boot-bean-life-cycle%2F "https://apifox.com/apiskills/spring-boot-bean-life-cycle/")***

</form>
</div>
