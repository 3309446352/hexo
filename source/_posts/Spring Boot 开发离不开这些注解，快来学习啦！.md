---
abbrlink: ''
abstracts: Spring Boot 是一款非常流行的 Java 框架，其注解用法复杂而丰富。在 Spring Boot 中，除了常规的 AOP 注解外，还有以下几类注解，常记定能有所感悟。
author: ZMC
categories:
- - 后端
cover: https://raw.githubusercontent.com/3309446352/Images/main/img/096b379a6b6dde15abcd6b389eb82e3f.webp
date: '2026-02-16T01:17:37.870624+08:00'
description: description
tags:
- Springboot
title: Spring Boot 开发离不开这些注解，快来学习啦！
updated: '2026-02-16T01:17:37.620+08:00'
---
#  {{title}}


# Spring Boot 开发离不开这些注解，快来学习啦！

Spring Boot 是一款非常流行的 Java 框架，其注解用法复杂而丰富。 在介绍 Spring Boot 的注解之前，我们需要先了解 Spring 框架中的 AOP（面向切面编程）概念。 Spring 的 AOP 可以帮助开发者实现一些非业务功能的代码，如日志记录、性能监控等。这些功能可以通过定义一个 `Aspect`（切面） 类来实现。

在 Spring Boot 中，除了常规的 AOP 注解外，还有以下几类注解，这也是我看到一个[脑图](https://link.juejin.cn?target=https%3A%2F%2Fwww.processon.com%2Fview%2F6066792d7d9c0829db68b987%3Ffromnew%3D1 "https://www.processon.com/view/6066792d7d9c0829db68b987?fromnew=1")后的一点点收获，想要自己也能够总结总结所用到的注解，常记定能有所感悟。

1. 核心注解
2. 原型注解
3. SpringBoot 注解
4. SpringCloud 注解
5. 缓存注解
6. 测试注解
7. 数据库访问注解
8. JPA 注解
9. SpringMVC 跟 REST 注解
10. 全局异常处理注解

**![image.png](https://raw.githubusercontent.com/3309446352/Images/main/Content/c851bfe63130437c992c246be3d1e364tplv-k3u1fbpfcp-zoom-in-crop-mark1512000.webp)**

接下来我们将分别介绍这几类注解及其使用方法。

## 一、核心注解

### @Configuration

`@Configuration` 注解可以被用来标记一个类，表示这个类是一个 Bean 配置类。在配置类中，我们可以使用其他 Bean 的定义和依赖，甚至可以使用 `@Autowired` 和 `@Value` 注解将其他 Bean 注入到当前的 Bean 中。下面是一个简单的例子：

```java
java

@Configuration
public class AppConfig {
    @Bean
    public MyService myService() {
        return new MyServiceImpl();
    }
}
```

### @Autowired

`@Autowired` 注解可以将一个 Bean 自动注入到当前类中。默认情况下，`@Autowired` 的匹配规则是根据类型进行匹配。如果有多个类型相同的 Bean，可以使用 `@Qualifier` 进行限定。

```java
java

@Component
public class MyController {
    private final MyService myService;

    @Autowired
    public MyController(MyService myService) {
        this.myService = myService;
    }
}
```

### @Value

`@Value` 注解用于从配置文件或环境变量中获取值，可以注入 String、int、long、double、boolean 等类型。使用 `${}` 可以引用配置文件中的属性，使用 `$()` 可以引用系统环境变量。

例如：

```java
java

@Component
public class MyComponent {
    @Value("${my.config.property}")
    private String configProperty;

    @Value("$MY_ENV_VAR")
    private String envVar;
}
```

### @Bean

`@Bean` 注解用于定义一个 Bean，将其加入到 Spring 容器中。通常在 `@Configuration` 类中使用。可以指定该 Bean 的名称、作用域、相关依赖等。

```java
java

@Configuration
public class AppConfig {
    @Bean(name = "myService", scope = ConfigurableBeanFactory.SCOPE_PROTOTYPE)
    public MyService myService() {
        return new MyServiceImpl();
    }
}
```

### @ComponentScan

`@ComponentScan` 注解用于扫描包中的组件（包括 Bean、Controller 等），将这些组件加入到 Spring 容器中。

```java
java

@Configuration
@ComponentScan(basePackages = { "com.example" })
public class AppConfig {
}
```

### @EnableAutoConfiguration

`@EnableAutoConfiguration` 注解可以自动配置 Spring Boot 应用程序。在启用该注解时，Spring Boot 将根据类路径和配置文件中的信息来尝试猜测并配置应用程序。

```java
java

@SpringBootApplication
public class MyApp {
    public static void main(String[] args) {
        SpringApplication.run(MyApp.class, args);
    }
}
```

## 二、原型注解

### @Scope

`@Scope` 注解用于设置 Bean 的作用域，包括 Singleton、Prototype、Request、Session 等。默认情况下，Bean 是 Singleton 的。

```java
java

@Configuration
public class AppConfig {
    @Bean(name = "myService")
    @Scope( ConfigurableBeanFactory.SCOPE_PROTOTYPE )
    public MyService myService() {
        return new MyServiceImpl();
    }
}
```

### @Lazy

`@Lazy` 注解用于标记一个 Bean 延迟初始化。当容器从 XML 文件、Java 配置类或其他方式加载时，不会创建这个 Bean。

```java
java

@Configuration
public class AppConfig {
    @Bean(name = "myService")
    @Lazy
    public MyService myService() {
        return new MyServiceImpl();
    }
}
```

### @DependsOn

`@DependsOn` 注解用于标识 Bean 之间的依赖关系。在容器启动时，先创建 `@DependsOn` 注解中指定的 Bean，再创建当前 Bean。

```java
java

@Configuration
public class AppConfig {
    @Bean(name = "myService")
    public MyService myService() {
        return new MyServiceImpl();
    }

    @Bean(name = "myController")
    @DependsOn("myService")
    public MyController myController() {
        return new MyController(myService());
    }
}
```

## 三、SpringBoot 注解

### @SpringBootApplication

`@SpringBootApplication` 注解是一个组合注解，等价于同时使用 `@Configuration`、`@EnableAutoConfiguration` 和 `@ComponentScan` 注解。它用于标记主类，并告诉 Spring Boot 启动该应用程序。

```java
java

@SpringBootApplication
public class MyApp {
    public static void main(String[] args) {
        SpringApplication.run(MyApp.class, args);
    }
}
```

### @RestController

`@RestController` 注解表示控制器中所有方法都返回 JSON 格式数据。它是 Spring MVC 中 `@Controller` 注解的扩展。下面是一个简单的例子：

```java
java

@RestController
public class MyController {
    @GetMapping("/greeting")
    public String greeting() {
        return "Hello, world!";
    }
}
```

### @RequestMapping

`@RequestMapping` 注解用于映射 HTTP 请求。可以使用 `value` 属性指定 URL 映射，使用 `method` 属性指定请求方法。

```java
java

@RestController
@RequestMapping("/api")
public class MyController {
    @GetMapping("/greeting")
    public String greeting() {
        return "Hello, world!";
    }
}
```

### @GetMapping

`@GetMapping` 注解等同于 `@RequestMapping(method = RequestMethod.GET)`，用于映射 HTTP GET 请求。

```java
java

@RestController
@RequestMapping("/api")
public class MyController {
    @GetMapping("/greeting")
    public String greeting() {
        return "Hello, world!";
    }
}
```

### @PostMapping

`@PostMapping` 注解等同于 `@RequestMapping(method = RequestMethod.POST)`，用于映射 HTTP POST 请求。

```java
java

@RestController
@RequestMapping("/api")
public class MyController {
    @PostMapping("/greeting")
    public String greeting() {
        return "Hello, world!";
    }
}
```

### @PutMapping

`@PutMapping` 注解等同于 `@RequestMapping(method = RequestMethod.PUT)`，用于映射 HTTP PUT 请求。

```java
java

@RestController
@RequestMapping("/api")
public class MyController {
    @PutMapping("/greeting")
    public String greeting() {
        return "Hello, world!";
    }
}
```

### @DeleteMapping

`@DeleteMapping` 注解等同于 `@RequestMapping(method = RequestMethod.DELETE)`，用于映射 HTTP DELETE 请求。

```java
java

@RestController
@RequestMapping("/api")
public class MyController {
    @DeleteMapping("/greeting")
    public String greeting() {
        return "Hello, world!";
    }
}
```

### @RequestParam

`@RequestParam` 注解用于将请求参数映射到方法的参数中。可以使用 `value` 属性指定参数名，使用 `required` 属性指定是否必填，使用 `defaultValue` 属性指定默认值。

```java
java

@RestController
@RequestMapping("/api")
public class MyController {
    @GetMapping("/greeting")
    public String greeting(@RequestParam("name") String name) {
        return "Hello, " + name + "!";
    }
}
```

### @PathVariable

`@PathVariable` 注解用于将 URL 中的占位符映射到方法的参数中。可以使用 `value` 属性指定占位符名称。

```java
java

@RestController
@RequestMapping("/api")
public class MyController {
    @GetMapping("/{name}")
    public String greeting(@PathVariable("name") String name) {
        return "Hello, " + name + "!";
    }
}
```

### @RequestBody

`@RequestBody` 注解用于从请求体中获取数据。通常用于处理 POST、PUT 请求。

```java
java

@RestController
@RequestMapping("/api")
public class MyController {
    @PostMapping("/greeting")
    public String greeting(@RequestBody GreetingRequest request) {
        return "Hello, " + request.getName() + "!";
    }
}

public class GreetingRequest {
    private String name;

    // getters and setters
}
```

### @ResponseBody

`@ResponseBody` 注解表示该方法返回的结果直接输出到响应体中。

```java
java

@RestController
@RequestMapping("/api")
public class MyController {
    @GetMapping("/greeting")
    @ResponseBody
    public String greeting() {
        return "Hello, world!";
    }
}
```

### @ResponseStatus

`@ResponseStatus` 注解用于指定请求处理完成后的状态码。

```java
java

@RestController
@RequestMapping("/api")
public class MyController {
    @GetMapping("/greeting")
    @ResponseStatus(HttpStatus.OK)
    public String greeting() {
        return "Hello, world!";
    }
}
```

### @ExceptionHandler

`@ExceptionHandler` 注解用于处理请求抛出的异常。

```java
java

@RestControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler(IllegalArgumentException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ErrorResult handleIllegalArgumentException(IllegalArgumentException ex) {
        return new ErrorResult(ex.getMessage());
    }
}

public class ErrorResult {
    private String message;

    public ErrorResult(String message) {
        this.message = message;
    }

    // getters and setters
}
```

## 四、SpringCloud 注解

### @EnableDiscoveryClient

`@EnableDiscoveryClient` 注解用于启用服务发现功能。使用该注解后，应用程序能够将自己注册到 Eureka 服务器，并从中获取其他实例的信息。

```java
java

@SpringBootApplication
@EnableDiscoveryClient
public class MyApp {
    public static void main(String[] args) {
        SpringApplication.run(MyApp.class, args);
    }
}
```

### @LoadBalanced

`@LoadBalanced` 注解用于标记 RestTemplate Bean，以启用负载均衡功能。在使用 REST 请求时，RestTemplate 将根据服务名自动选择一个可用的实例。

```java
java

@Configuration
public class AppConfig {
    @Bean
    @LoadBalanced
    public RestTemplate restTemplate() {
        return new RestTemplate();
    }
}
```

### @FeignClient

`@FeignClient` 注解用于定义一个 Feign 客户端。Feign 是一款用于简化 HTTP API 客户端的工具，它支持声明式 REST 客户端。使用 `@FeignClient` 注解后，我们可以通过接口来调用具有相同功能的微服务。

```java
java

@FeignClient(name = "my-service")
public interface MyServiceClient {
    @GetMapping("/greeting")
    String greeting();
}
```

## 五、缓存注解

### @Cacheable

`@Cacheable` 注解表示方法的结果应该被缓存起来，下次调用该方法时，如果参数和之前相同，则返回缓存结果。

```java
java

@Service
public class MyService {
    @Cacheable("greetingCache")
    public String greeting(String name) {
        return "Hello, " + name + "!";
    }
}
```

### @CachePut

`@CachePut` 注解表示方法的结果应该被缓存起来，下次调用该方法时，不会返回缓存结果，而是重新计算结果并缓存起来。

```java
java

@Service
public class MyService {
    @CachePut("greetingCache")
    public String greeting(String name) {
        return "Hello, " + name + "!";
    }
}
```

### @CacheEvict

`@CacheEvict` 注解表示方法执行后从缓存中删除指定项。

```java
java

@Service
public class MyService {
    @CacheEvict("greetingCache")
    public void clearGreetingCache() {
    }
}
```

## 六、测试注解

### @SpringBootTest

`@SpringBootTest` 注解用于测试 Spring Boot 应用程序。它会创建一个完整的 Spring 应用程序上下文，并在测试期间使用它。

```java
java

@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
public class MyControllerTest {
    @Autowired
    private TestRestTemplate restTemplate;

    @Test
    public void testGreeting() {
        ResponseEntity<String> responseEntity = restTemplate.getForEntity("/api/greeting", String.class);
        assertThat(responseEntity.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat(responseEntity.getBody()).isEqualTo("Hello, world!");
    }
}
```

### @MockBean

`@MockBean` 注解用于模拟一个 Bean 的实现。在测试过程中，可以使用 `Mockito.when()` 等方法来指定一些行为。

```java
java

@SpringBootTest
public class MyServiceTest {
    @Autowired
    private MyService myService;

    @MockBean
    private MyRepository myRepository;

    @Test
    public void testFindById() {
        Mockito.when(myRepository.findById(1L)).thenReturn(Optional.of(new MyEntity()));
        MyEntity entity = myService.findById(1L);
        assertThat(entity).isNotNull();
        Mockito.verify(myRepository).findById(1L);
    }
}
```

## 七、数据库访问注解

### @Transactional

`@Transactional` 注解用于指定一个方法需要在事务中执行。默认情况下，只有 RuntimeException 会触发事务回滚。

```java
java

@Service
public class MyService {
    @Autowired
    private MyRepository myRepository;

    @Transactional
    public void save(MyEntity entity) {
        myRepository.save(entity);
    }
}
```

### @Repository

`@Repository` 注解用于标记数据访问层，表示这个类是一个数据仓库。

```java
java

@Repository
public interface MyRepository extends JpaRepository<MyEntity, Long> {
}
```

### @Entity

`@Entity` 注解用于标记实体类，表示这个类是一个 JPA 实体。它与数据库中的表相对应。

```java
java

@Entity
@Table(name = "my_entity")
public class MyEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // getters and setters
}
```

### @Id

`@Id` 注解用于标记主键字段。

```java
java

@Entity
@Table(name = "my_entity")
public class MyEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // getters and setters
}
```

### @GeneratedValue

`@GeneratedValue` 注解用于指定主键的生成策略。

```java
java

@Entity
@Table(name = "my_entity")
public class MyEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // getters and setters
}
```

### @Column

`@Column` 注解用于指定实体属性与数据库表列之间的映射关系。

```java
java

@Entity
@Table(name = "my_entity")
public class MyEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    // getters and setters
}
```

## 八、JPA 注解

### @EnableJpaRepositories

`@EnableJpaRepositories` 注解用于启用 Spring Data JPA 功能。它会自动配置 Spring Data JPA 相关的 Bean。

```java
java

@SpringBootApplication
@EnableJpaRepositories
public class MyApp {
    public static void main(String[] args) {
        SpringApplication.run(MyApp.class, args);
    }
}
```

### @Query

`@Query` 注解用于自定义查询语句。

```java
java

@Repository
public interface MyRepository extends JpaRepository<MyEntity, Long> {
    @Query("select e from MyEntity e where e.name = :name")
    List<MyEntity> findByName(@Param("name") String name);
}
```

## 九、全局异常处理注解

### @ControllerAdvice

`@ControllerAdvice` 注解用于定义一个全局异常处理类，用于捕获所有控制器中抛出的异常，进行统一处理。

```java
java

@ControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler(Exception.class)
    public ModelAndView handleException(HttpServletRequest request, Exception ex) {
        ModelAndView mav = new ModelAndView();
        mav.addObject("exception", ex);
        mav.addObject("url", request.getRequestURI());
        mav.setViewName("error");
        return mav;
    }
}
```

以上是 Spring Boot 中常见的注解和使用方法，终于干完了，虽然相关注解还有很多，以后一点一点充实这篇文章吧。

### 原文取自

[Spring Boot 开发离不开这些注解，快来学习啦！Spring Boot 是一款非常流行的 Java 框架，其注解 - 掘金](https://juejin.cn/post/7239279470250934327#heading-46)
