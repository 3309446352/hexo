---
abbrlink: 爬取小说章节
abstracts: Redis是一个由 Salvatore Sanfilippo 写的 key-value 存储系统，是跨平台的非关系型数据库。
author:
  avatar: https://raw.githubusercontent.com/3309446352/Images/main/img/preview.jpg
  description: 古来圣贤皆寂寞，惟有饮者留其名。
  link: https://hexo-git-test-3309446352s-projects.vercel.app/
  name: 好名字都是狗起的
  socials:
    github: https://github.com/3309446352
categories: []
cover: https://redis.io/
date: '2024-03-24T23:13:16.329363+08:00'
description: REmote DIctionary Server(Redis) 是一个由 Salvatore Sanfilippo 写的 key-value 存储系统，是跨平台的非关系型数据库。  Redis 是一个开源的使用 ANSI C 语言编写、遵守 BSD 协议、支持网络、可基于内存、分布式、可选持久性的键值对(Key-Value)存储数据库，并提供多种语言的 API。
tags:
- 后端
title: Redis使用方法
updated: '2024-03-25T00:45:17.710+08:00'
---
# 简介：

{{ description}}

# redis

## 引入

```yaml
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-data-redis</artifactId>
        </dependency>
        <dependency>
            <groupId>org.apache.commons</groupId>
            <artifactId>commons-pool2</artifactId> 
        </dependency>

```

## 配置

```yaml
spring:
  redis:
    # Redis服务器地址
    host: 19.1.5.11
    # Redis服务器端口号
    port: 6379
    # 使用的数据库索引，默认是0
    database: 0
    # 连接超时时间
    timeout: 1800000
     # 设置密码
    password: "123456"
    lettuce:
      pool:
        # 最大阻塞等待时间，负数表示没有限制
        max-wait: -1
        # 连接池中的最大空闲连接
        max-idle: 5
        # 连接池中的最小空闲连接
        min-idle: 0
        # 连接池中最大连接数，负数表示没有限制
        max-active: 20

```

## 序列化防止乱码

```java
@Bean
pubtic RedisTemptate<String, Object> redisTemptate(RedisConnectionFactory redisConnectionFactory) { 
   
    RedisTemptate<String, 0bject> redisTemptate = new RedisTempLate<>() ;
    //Redis连接工厂
    redisTemptate.setConnectionFactory(redisConnectionFactory);
    redisTemptate . setKeySeriaLizer(new StringRedisSeriaLizer());
    // 役 置 vatue 的 序列 化 策略 
    redisTemptate.setVatueSeriatizer(new Jackson2JsonRedisSeriatizer<>(0bject.ctass));
    return redisTemptate;
}
```

或

```java
@Configuration
public class RedisConfig {
    @Bean
    public RedisTemplate<String, Object> redisTemplate(RedisConnectionFactory redisConnectionFactory)
            throws UnknownHostException {
        // 创建模板
        RedisTemplate<String, Object> redisTemplate = new RedisTemplate<>();
        // 设置连接工厂
        redisTemplate.setConnectionFactory(redisConnectionFactory);
        // 设置序列化工具
        GenericJackson2JsonRedisSerializer jsonRedisSerializer =
                new GenericJackson2JsonRedisSerializer();
        // key和 hashKey采用 string序列化
        redisTemplate.setKeySerializer(RedisSerializer.string());
        redisTemplate.setHashKeySerializer(RedisSerializer.string());
        // value和 hashValue采用 JSON序列化
        redisTemplate.setValueSerializer(jsonRedisSerializer);
        redisTemplate.setHashValueSerializer(jsonRedisSerializer);
        return redisTemplate;
    }
}

```

## 增删改查

[增删改查](https://img-blog.csdnimg.cn/20190412005015660.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2p1c3RyeV9kZW5n,size_16,color_FFFFFF,t_70)

#### String-字符串类型

```java
package com.tensquare.article;

import com.tensquare.article.pojo.User;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import java.util.concurrent.TimeUnit;

@SpringBootTest
@RunWith(SpringJUnit4ClassRunner.class)
public class RedisTemTest {
    @Autowired
    private RedisTemplate redisTemplate;

    /*
     * String类型的数据增删改查
     * */
    @Test
    public void StringDataTest() {
        // 创建User对象 ,要存入String类型的对象,需要实现 Serializable 接口
        User user = new User("1", "Tom", "打棒球", 15);

        // 添加数据
        redisTemplate.opsForValue().set("user", user);

        // 添加数据并设置有效时间为30s, (30, TimeUnit.SECONDS) 分别代表数字,计量单位
        redisTemplate.opsForValue().set("user1", "Rose", 30, TimeUnit.SECONDS);

        //查找数据 根据key获取value
        User value = (User) redisTemplate.opsForValue().get("user");

        //查找数据 长度
        Long size = redisTemplate.opsForValue().size("user1");

        // 删除数据
        redisTemplate.delete("user1");
    }
}

```

#### Set-集合类型

```java
 /*
     * Set 集合类型CURD
     * */
    @Test
    public void SetDataTest() {
        User user = new User("1", "Tom", "打棒球", 15);
        User user1 = new User("2", "Jack", "打网球", 17);
        User user2 = new User("3", "Rose", "打篮球", 18);
        User user3 = new User("4", "Jerry", "踢足球", 19);

        // 添加 key为user_1的user对象
        redisTemplate.opsForSet().add("user_1", user);
        redisTemplate.opsForSet().add("user_1", user1);

		// 定时 设置 user_1 数据的存活时间为5秒 测试时注释
        redisTemplate.expire("user_1", 5, TimeUnit.SECONDS);

        // 查询 user_1 集合中的所有 value
        Set user1_list = redisTemplate.opsForSet().members("user_1");
        // 查询 user_1 集合中是否有 user 对象
        Boolean result = redisTemplate.opsForSet().isMember("user_1", user);

        // 删除 user_1 集合中的 user对象 ,并返回移除成功数量
        Long success_count = redisTemplate.opsForSet().remove("user_1", user);
        // 删除 user_1 集合中的栈顶元素
        Object user_1 = redisTemplate.opsForSet().pop("user_1");

        // 测试 交集 并集 差集的数据
        redisTemplate.opsForSet().add("names1", user, user1, user2);
        redisTemplate.opsForSet().add("names2", user, user1, user3);
        //取交集
        Set<User> intersect = redisTemplate.opsForSet().intersect("names1", "names2");
        for (User u1 : intersect) {
            System.out.println("交集: " + u1);
        }
        //取并集
        Set<User> union = redisTemplate.opsForSet().union("names1", "names2");
        for (User u2 : union) {
            System.out.println("并集: " + u2);
        }
        //取差集[第一个集合中存在，但第二个集合中不存在的元素]
        Set<User> difference = redisTemplate.opsForSet().difference("names1", "names2");
        for (User u3 : difference) {
            System.out.println("差集: " + u3);
        }
    }

```

#### List-链表类型

```java
 /*
     * List 数据类型的CRUD
     * */
    @Test
    public void ListDataTest() {
        User user = new User("1", "Tom", "打棒球", 15);
        User user1 = new User("2", "Jack", "打网球", 17);

        //从左边添加一个元素
        redisTemplate.opsForList().rightPush("user1", user);
        //从左边添加多个元素
        redisTemplate.opsForList().leftPushAll("user2", user, user1);

        //从右边添加一个元素
        redisTemplate.opsForList().rightPush("user3", user1);
        //从右边添加多个元素
        redisTemplate.opsForList().rightPushAll("user4", user, user1);

		// 定时 设置 user2 数据的存活时间为5秒 测试时注释
        redisTemplate.expire("user2", 5, TimeUnit.SECONDS);

        /* 根据key和元素索引进行查询
         *  0和正数代表从左边开始
         *  负数代表从右边开始
         * */
        // 查询 user3 链表中所有的元素
        List user3 = redisTemplate.opsForList().range("user3", 0, -1);
        // 查询 user3 链表中第一个元素
        User data = (User) redisTemplate.opsForList().index("user3", 0);
        System.out.println(data);

        // 修改 user3 链表中第一个的元素为 user1 对象
        redisTemplate.opsForList().set("user3", 0, user);
  	  
  	    // 删除链表左侧第二个 user 对象
        redisTemplate.opsForList().remove("user3", 2, user);
        //删除 user3 链表中左侧的第一个元素
        redisTemplate.opsForList().leftPop("user3");
        //删除 user3 链表中右侧的第一个元素
        redisTemplate.opsForList().rightPop("user3");
    }

```

#### Hash-[散列](https://so.csdn.net/so/search?q=%E6%95%A3%E5%88%97&spm=1001.2101.3001.7020)类型

```java
    /*
     * Hash集合CRUD
     * */
    @Test
    public void HashDataTest() {
        User user = new User("1", "Tom", "打棒球", 15);
        User user1 = new User("2", "Jack", "打网球", 17);

        // 添加 user 到 hash集合
        redisTemplate.opsForHash().put("hash", "1", user);
        redisTemplate.opsForHash().put("hash", "2", user1);

		// 定时 设置 hash 的数据存活时间为5秒 测试时注释
        redisTemplate.expire("hash", 5, TimeUnit.SECONDS);
  
        // 查询 hash中hashKey 为1的值
        User hash = (User) redisTemplate.opsForHash().get("hash", "1");
        // 查询 hash中 所有hashKey 对应的的值
        List<User> userList = redisTemplate.opsForHash().values("hash");
        // 查询 hash中 所有hashKey 对应的键值对
        Map<String, User> hashKeyMap = redisTemplate.opsForHash().entries("hash");
        // 查询 hash中所有的hashKey
        Set hashKeyList = redisTemplate.opsForHash().keys("hash");
        // 查询 hash 中 是否有 hashKey 为1
        Boolean result = redisTemplate.opsForHash().hasKey("hash", "1");

        // 删除hash 中 HashKey为的1 的值(如需要删除多个,只需要用 "," 隔开
        Long removeSize = redisTemplate.opsForHash().delete("hash", "1");
    }

```

#### [Zset]-有序集合类型

```java
/*
     * zSet集合CRUD
     * */
    @Test
    public void zSetDataTest() {
        // 添加值
        redisTemplate.opsForZSet().add("student", "wangwu", 60);
        redisTemplate.opsForZSet().add("student", "lishi", 100);
        redisTemplate.opsForZSet().add("student", "zhangshan", 90);

		// 定时 设置 student 的数据存活时间为5秒 测试时注释
        redisTemplate.expire("student", 5, TimeUnit.SECONDS);

        // 增加分数
        redisTemplate.opsForZSet().incrementScore("student", "wangwu", 30);
        // 减少分数
        redisTemplate.opsForZSet().incrementScore("student", "wangwu", -50);

        //查询 student 下 wangwu 的分数
        Double score = redisTemplate.opsForZSet().score("student", "wangwu");
        //查询 一个元素在集合中的排名  排名从0开始
        Long rank = redisTemplate.opsForZSet().rank("student", "zhangshan");
        // 查询前三个元素
        Set<String> students = redisTemplate.opsForZSet().range("student", 0, 2);
        // 查询  前三个元素的键值对
        Set<ZSetOperations.TypedTuple<String>> student = redisTemplate.opsForZSet().rangeWithScores("student", 0, 2);
        // 查询 根据值的区间查询 key
        Set<String> students1 = redisTemplate.opsForZSet().rangeByScore("student", 50, 100);
        // 查询 根据值区间查询 Set集合
        Set<ZSetOperations.TypedTuple<String>> student1 = redisTemplate.opsForZSet().rangeByScoreWithScores("student", 50, 100);
        //查询 student 中有几个 key
        Long result = redisTemplate.opsForZSet().zCard("student");

        //根据key-value删除 value允许传入多个
        redisTemplate.opsForZSet().remove("student","zhangsan","lisi");
        //根据排名区间删除
        redisTemplate.opsForZSet().removeRange("student",0,1);
        //根据分数区间删除
        redisTemplate.opsForZSet().removeRangeByScore("student",70,90);
    }

```

### 增删改查工具类

```java
package com.lsqingfeng.springboot.utils; 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Component;
 
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.TimeUnit;
 
/**
 * @className: RedisUtil
 * @description:
 * @author: sh.Liu
 * @date: 2022-03-09 14:07
 */
@Component
public class RedisUtil {
 
    @Autowired
    private RedisTemplate redisTemplate;
    /**
     * 给一个指定的 key 值附加过期时间
     *
     * @param key
     * @param time
     * @return
     */
    public boolean expire(String key, long time) {
        return redisTemplate.expire(key, time, TimeUnit.SECONDS);
    }
    /**
     * 根据key 获取过期时间
     *
     * @param key
     * @return
     */
    public long getTime(String key) {
        return redisTemplate.getExpire(key, TimeUnit.SECONDS);
    }
    /**
     * 根据key 获取过期时间
     *
     * @param key
     * @return
     */
    public boolean hasKey(String key) {
        return redisTemplate.hasKey(key);
    }
    /**
     * 移除指定key 的过期时间
     *
     * @param key
     * @return
     */
    public boolean persist(String key) {
        return redisTemplate.boundValueOps(key).persist();
    }
 
    //- - - - - - - - - - - - - - - - - - - - -  String类型 - - - - - - - - - - - - - - - - - - - -
 
    /**
     * 根据key获取值
     *
     * @param key 键
     * @return 值
     */
    public Object get(String key) {
        return key == null ? null : redisTemplate.opsForValue().get(key);
    }
 
    /**
     * 将值放入缓存
     *
     * @param key   键
     * @param value 值
     * @return true成功 false 失败
     */
    public void set(String key, String value) {
        redisTemplate.opsForValue().set(key, value);
    }
 
    /**
     * 将值放入缓存并设置时间
     *
     * @param key   键
     * @param value 值
     * @param time  时间(秒) -1为无期限
     * @return true成功 false 失败
     */
    public void set(String key, String value, long time) {
        if (time > 0) {
            redisTemplate.opsForValue().set(key, value, time, TimeUnit.SECONDS);
        } else {
            redisTemplate.opsForValue().set(key, value);
        }
    }
 
    /**
     * 批量添加 key (重复的键会覆盖)
     *
     * @param keyAndValue
     */
    public void batchSet(Map<String, String> keyAndValue) {
        redisTemplate.opsForValue().multiSet(keyAndValue);
    }
 
    /**
     * 批量添加 key-value 只有在键不存在时,才添加
     * map 中只要有一个key存在,则全部不添加
     *
     * @param keyAndValue
     */
    public void batchSetIfAbsent(Map<String, String> keyAndValue) {
        redisTemplate.opsForValue().multiSetIfAbsent(keyAndValue);
    }
 
    /**
     * 对一个 key-value 的值进行加减操作,
     * 如果该 key 不存在 将创建一个key 并赋值该 number
     * 如果 key 存在,但 value 不是长整型 ,将报错
     *
     * @param key
     * @param number
     */
    public Long increment(String key, long number) {
        return redisTemplate.opsForValue().increment(key, number);
    }
 
    /**
     * 对一个 key-value 的值进行加减操作,
     * 如果该 key 不存在 将创建一个key 并赋值该 number
     * 如果 key 存在,但 value 不是 纯数字 ,将报错
     *
     * @param key
     * @param number
     */
    public Double increment(String key, double number) {
        return redisTemplate.opsForValue().increment(key, number);
    }
 
    //- - - - - - - - - - - - - - - - - - - - -  set类型 - - - - - - - - - - - - - - - - - - - -
 
    /**
     * 将数据放入set缓存
     *
     * @param key 键
     * @return
     */
    public void sSet(String key, String value) {
        redisTemplate.opsForSet().add(key, value);
    }
 
    /**
     * 获取变量中的值
     *
     * @param key 键
     * @return
     */
    public Set<Object> members(String key) {
        return redisTemplate.opsForSet().members(key);
    }
 
    /**
     * 随机获取变量中指定个数的元素
     *
     * @param key   键
     * @param count 值
     * @return
     */
    public void randomMembers(String key, long count) {
        redisTemplate.opsForSet().randomMembers(key, count);
    }
 
    /**
     * 随机获取变量中的元素
     *
     * @param key 键
     * @return
     */
    public Object randomMember(String key) {
        return redisTemplate.opsForSet().randomMember(key);
    }
 
    /**
     * 弹出变量中的元素
     *
     * @param key 键
     * @return
     */
    public Object pop(String key) {
        return redisTemplate.opsForSet().pop("setValue");
    }
 
    /**
     * 获取变量中值的长度
     *
     * @param key 键
     * @return
     */
    public long size(String key) {
        return redisTemplate.opsForSet().size(key);
    }
 
    /**
     * 根据value从一个set中查询,是否存在
     *
     * @param key   键
     * @param value 值
     * @return true 存在 false不存在
     */
    public boolean sHasKey(String key, Object value) {
        return redisTemplate.opsForSet().isMember(key, value);
    }
 
    /**
     * 检查给定的元素是否在变量中。
     *
     * @param key 键
     * @param obj 元素对象
     * @return
     */
    public boolean isMember(String key, Object obj) {
        return redisTemplate.opsForSet().isMember(key, obj);
    }
 
    /**
     * 转移变量的元素值到目的变量。
     *
     * @param key     键
     * @param value   元素对象
     * @param destKey 元素对象
     * @return
     */
    public boolean move(String key, String value, String destKey) {
        return redisTemplate.opsForSet().move(key, value, destKey);
    }
 
    /**
     * 批量移除set缓存中元素
     *
     * @param key    键
     * @param values 值
     * @return
     */
    public void remove(String key, Object... values) {
        redisTemplate.opsForSet().remove(key, values);
    }
 
    /**
     * 通过给定的key求2个set变量的差值
     *
     * @param key     键
     * @param destKey 键
     * @return
     */
    public Set<Set> difference(String key, String destKey) {
        return redisTemplate.opsForSet().difference(key, destKey);
    }
 
 
    //- - - - - - - - - - - - - - - - - - - - -  hash类型 - - - - - - - - - - - - - - - - - - - -
 
    /**
     * 加入缓存
     *
     * @param key 键
     * @param map 键
     * @return
     */
    public void add(String key, Map<String, String> map) {
        redisTemplate.opsForHash().putAll(key, map);
    }
 
    /**
     * 获取 key 下的 所有  hashkey 和 value
     *
     * @param key 键
     * @return
     */
    public Map<Object, Object> getHashEntries(String key) {
        return redisTemplate.opsForHash().entries(key);
    }
 
    /**
     * 验证指定 key 下 有没有指定的 hashkey
     *
     * @param key
     * @param hashKey
     * @return
     */
    public boolean hashKey(String key, String hashKey) {
        return redisTemplate.opsForHash().hasKey(key, hashKey);
    }
 
    /**
     * 获取指定key的值string
     *
     * @param key  键
     * @param key2 键
     * @return
     */
    public String getMapString(String key, String key2) {
        return redisTemplate.opsForHash().get("map1", "key1").toString();
    }
 
    /**
     * 获取指定的值Int
     *
     * @param key  键
     * @param key2 键
     * @return
     */
    public Integer getMapInt(String key, String key2) {
        return (Integer) redisTemplate.opsForHash().get("map1", "key1");
    }
 
    /**
     * 弹出元素并删除
     *
     * @param key 键
     * @return
     */
    public String popValue(String key) {
        return redisTemplate.opsForSet().pop(key).toString();
    }
 
    /**
     * 删除指定 hash 的 HashKey
     *
     * @param key
     * @param hashKeys
     * @return 删除成功的 数量
     */
    public Long delete(String key, String... hashKeys) {
        return redisTemplate.opsForHash().delete(key, hashKeys);
    }
 
    /**
     * 给指定 hash 的 hashkey 做增减操作
     *
     * @param key
     * @param hashKey
     * @param number
     * @return
     */
    public Long increment(String key, String hashKey, long number) {
        return redisTemplate.opsForHash().increment(key, hashKey, number);
    }
 
    /**
     * 给指定 hash 的 hashkey 做增减操作
     *
     * @param key
     * @param hashKey
     * @param number
     * @return
     */
    public Double increment(String key, String hashKey, Double number) {
        return redisTemplate.opsForHash().increment(key, hashKey, number);
    }
 
    /**
     * 获取 key 下的 所有 hashkey 字段
     *
     * @param key
     * @return
     */
    public Set<Object> hashKeys(String key) {
        return redisTemplate.opsForHash().keys(key);
    }
 
    /**
     * 获取指定 hash 下面的 键值对 数量
     *
     * @param key
     * @return
     */
    public Long hashSize(String key) {
        return redisTemplate.opsForHash().size(key);
    }
 
    //- - - - - - - - - - - - - - - - - - - - -  list类型 - - - - - - - - - - - - - - - - - - - -
 
    /**
     * 在变量左边添加元素值
     *
     * @param key
     * @param value
     * @return
     */
    public void leftPush(String key, Object value) {
        redisTemplate.opsForList().leftPush(key, value);
    }
 
    /**
     * 获取集合指定位置的值。
     *
     * @param key
     * @param index
     * @return
     */
    public Object index(String key, long index) {
        return redisTemplate.opsForList().index("list", 1);
    }
 
    /**
     * 获取指定区间的值。
     *
     * @param key
     * @param start
     * @param end
     * @return
     */
    public List<Object> range(String key, long start, long end) {
        return redisTemplate.opsForList().range(key, start, end);
    }
 
    /**
     * 把最后一个参数值放到指定集合的第一个出现中间参数的前面，
     * 如果中间参数值存在的话。
     *
     * @param key
     * @param pivot
     * @param value
     * @return
     */
    public void leftPush(String key, String pivot, String value) {
        redisTemplate.opsForList().leftPush(key, pivot, value);
    }
 
    /**
     * 向左边批量添加参数元素。
     *
     * @param key
     * @param values
     * @return
     */
    public void leftPushAll(String key, String... values) {
//        redisTemplate.opsForList().leftPushAll(key,"w","x","y");
        redisTemplate.opsForList().leftPushAll(key, values);
    }
 
    /**
     * 向集合最右边添加元素。
     *
     * @param key
     * @param value
     * @return
     */
    public void leftPushAll(String key, String value) {
        redisTemplate.opsForList().rightPush(key, value);
    }
 
    /**
     * 向左边批量添加参数元素。
     *
     * @param key
     * @param values
     * @return
     */
    public void rightPushAll(String key, String... values) {
        //redisTemplate.opsForList().leftPushAll(key,"w","x","y");
        redisTemplate.opsForList().rightPushAll(key, values);
    }
 
    /**
     * 向已存在的集合中添加元素。
     *
     * @param key
     * @param value
     * @return
     */
    public void rightPushIfPresent(String key, Object value) {
        redisTemplate.opsForList().rightPushIfPresent(key, value);
    }
 
    /**
     * 向已存在的集合中添加元素。
     *
     * @param key
     * @return
     */
    public long listLength(String key) {
        return redisTemplate.opsForList().size(key);
    }
 
    /**
     * 移除集合中的左边第一个元素。
     *
     * @param key
     * @return
     */
    public void leftPop(String key) {
        redisTemplate.opsForList().leftPop(key);
    }
 
    /**
     * 移除集合中左边的元素在等待的时间里，如果超过等待的时间仍没有元素则退出。
     *
     * @param key
     * @return
     */
    public void leftPop(String key, long timeout, TimeUnit unit) {
        redisTemplate.opsForList().leftPop(key, timeout, unit);
    }
 
    /**
     * 移除集合中右边的元素。
     *
     * @param key
     * @return
     */
    public void rightPop(String key) {
        redisTemplate.opsForList().rightPop(key);
    }
 
    /**
     * 移除集合中右边的元素在等待的时间里，如果超过等待的时间仍没有元素则退出。
     *
     * @param key
     * @return
     */
    public void rightPop(String key, long timeout, TimeUnit unit) {
        redisTemplate.opsForList().rightPop(key, timeout, unit);
    }
}

```

## 缓存穿透

[穿透](https://img-blog.csdnimg.cn/37bd6dbb88c045ce84deb3fed774b59c.png)

## 缓存雪崩

[雪崩](https://img-blog.csdnimg.cn/9c38ab494d4b4d13930ea14d8f3f0db7.png)

## 缓存击穿

[击穿](https://img-blog.csdnimg.cn/3d01ccb55bde4a2d96aad731d98f4ef3.png)

## 主从集群-复制

## 哨兵
