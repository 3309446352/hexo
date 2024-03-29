---
title: Mysql
date: 2024-03-18 21:22:27
tags: 
  -Mysql
categories:
  - 数据库
feature: true
cover: https://raw.githubusercontent.com/3309446352/Images/main/img/Snipaste_2023-03-27_21-42-14.png
---

# 1Mysql

## **1****、数据库的三范式是什么**

第一范式：列不可再分 **原子性**

第二范式：行可以唯一区分，主键约束** 唯一性**

第三范式：表的非主属性不能依赖与其他表的非主属性 外键约束 **独立性**

且三大范式是一级一级依赖的，第二范式建立在第一范式上，第三范式建立第一第二范式上。

## 18.事务的四大特性(ACID)

原子性(Atomicity)： 要么全部成功要么全部失败。
一致性(Consistency)： 事务执行前和事务执行后，原本和数据库一致的数据仍然一致。
隔离性(Isolation)： 事务与事务之间互不干扰。
持久性(Durability)： 事务一旦被提交了，那么对数据库中的数据的改变就是永久的。

## 12.为什么使用B+树不用B树

①B树只适合随机检索，而B+树同时支持随机检索和顺序检索(因为叶子节点相当于链表，保存索引值都是有序的)。
顺序检索： 按照序列顺序遍历比较找到给定值。
随机检索： 不断从序列中随机抽取数据进行比较，最终找到结果。

②减少了磁盘IO，提高空间利用率： 因为B+树非叶子节点不会存放数据，只有索引值，所以非叶子节点可以保存更多的索引值，这样B+树就可以更矮，减少IO次数。

③B+树适合范围查找： 这才是关键，因为数据库大部分都是范围查找，B+树的叶子节点是有序链表，直接遍历就行，而B树的范围查找可能两个节点距离很远，只能通过中序遍历去查找，所以使用B+树更合适。
中序遍历： (根在中，从左往右，一棵树的左子树永远在根前面，根永远在右子树前面）

## 21.怎么优化数据库

①SQL优化
②加缓存
③分表
④读写分离

## 22.SQL优化

①不要用select *，要使用具体字段。
②使用数值代替字符串，比如：0=唱，1=跳，2=rap。
③避免返回大量数据，采用分页最好。
④使用索引，提升查询速度，不宜建太多索引，不能建在重复数据比较多的字段上。
⑤批量插入比单条插入要快，因为事务只需要开启一次，数据量太小体现不了。
⑥避免子查询，优化为多表连接查询。
⑦尽量使用union all替代union，因为union会自动去重。

## **2****、数据库引擎有哪些**

如何查看mysql提供的所有存储引擎

`mysql> show engines;`

mysql常用引擎包括：MYISAM、Innodb、Memory、MERGE

- MYISAM：全表锁，拥有较高的执行速度，不支持事务，不支持外键，并发性能差，占用空间相对
- 较小，对事务完整性没有要求，以select、insert为主的应用基本上可以使用这引擎
- Innodb:行级锁，提供了具有提交、回滚和崩溃回复能力的事务安全，支持自动增长列，支持外键
- 约束，并发能力强，占用空间是MYISAM的2.5倍，处理效率相对会差一些
- Memory:全表锁，存储在内容中，速度快，但会占用和数据量成正比的内存空间且数据在mysql重
- 启时会丢失，默认使用HASH索引，检索效率非常高，但不适用于精确查找，主要用于那些内容变
- 化不频繁的代码表
- MERGE：是一组MYISAM表的组合

## **3****、****InnoDB****与****MyISAM****的区别

1. InnoDB支持事务，MyISAM不支持，对于InnoDB每一条SQL语言都默认封装成事务，自动提交，

这样会影响速度，所以最好把多条SQL语言放在begin和commit之间，组成一个事务；

2. InnoDB支持外键，而MyISAM不支持。对一个包含外键的InnoDB表转为MYISAM会失败；
3. InnoDB是聚集索引，数据文件是和索引绑在一起的，必须要有主键，通过主键索引效率很高。但

是辅助索引需要两次查询，先查询到主键，然后再通过主键查询到数据。因此，主键不应该过大，

因为主键太大，其他索引也都会很大。而MyISAM是非聚集索引，数据文件是分离的，索引保存的

是数据文件的指针。主键索引和辅助索引是独立的。

4. InnoDB不保存表的具体行数，执行select count(*) from table时需要全表扫描。而MyISAM用一

个变量保存了整个表的行数，执行上述语句时只需要读出该变量即可，速度很快；

5. Innodb不支持全文索引，而MyISAM支持全文索引，查询效率上MyISAM要高；

mysql> show engines;**如何选择引擎？**

如果没有特别的需求，使用默认的 Innodb 即可。

MyISAM：以读写插入为主的应用程序，比如博客系统、新闻门户网站。

Innodb：更新（删除）操作频率也高，或者要保证数据的完整性；并发量高，支持事务和外键。比如

OA自动化办公系统。

**4****、数据库的事务**

## 4****、数据库的事务**

**什么是事务？**

**：** 多条sql语句，要么全部成功，要么全部失败。

**事务的特性：**

**数据库事务特性：原子性****(Atomic)****、一致性****(Consistency)****、隔离性****(Isolation)****、持久性****(Durabiliy)****。**

**简称****ACID****。**

原子性：组成一个事务的多个数据库操作是一个不可分割的原子单元，只有所有操作都成功，整个

事务才会提交。任何一个操作失败，已经执行的任何操作都必须撤销，让数据库返回初始状态。

一致性：事务操作成功后，数据库所处的状态和它的业务规则是一致的。即数据不会被破坏。如A

转账100元给B，不管操作是否成功，A和B的账户总额是不变的。

隔离性：在并发数据操作时，不同的事务拥有各自的数据空间，它们的操作不会对彼此产生干扰

持久性：一旦事务提交成功，事务中的所有操作都必须持久化到数据库中。

## **5**、索引问题

索引是对数据库表中一个或多个列的值进行排序的结构，建立索引有助于快速获取信息。

你也可以这样理解：索引就是加快检索表中数据的方法。数据库的索引类似于书籍的索引。在书籍中，

索引允许用户不必翻阅完整个书就能迅速地找到所需要的信息。在数据库中，索引也允许数据库程序迅

速地找到表中的数据，而不必扫描整个数据库。

mysql 有4种不同的索引：

1. 主键索引（PRIMARY）
2. 数据列不允许重复，不允许为NULL，一个表只能有一个主键。
3. 唯一索引（UNIQUE）
4. 数据列不允许重复，允许为NULL值，一个表允许多个列创建唯一索引。
5. 可以通过 ALTER TABLE table_name ADD UNIQUE (column); 创建唯一索引
6. 可以通过 ALTER TABLE table_name ADD UNIQUE (column1,column2); 创建唯一组合索
7. 引
8. 普通索引（INDEX）
9. 可以通过 ALTER TABLE table_name ADD INDEX index_name (column); 创建普通索引
10. 可以通过 ALTER TABLE table_name ADD INDEX index_name(column1, column2,
11. column3); 创建组合索引
12. 全文索引（FULLTEXT）
13. 可以通过 ALTER TABLE table_name ADD FULLTEXT (column); 创建全文索引

**索引并非是越多越好，创建索引也需要耗费资源，一是增加了数据库的存储空间，二是在插入和删除时**

**要花费较多的时间维护索引**

1. 索引加快数据库的检索速度
2. 索引降低了插入、删除、修改等维护任务的速度
3. 唯一索引可以确保每一行数据的唯一性
4. 通过使用索引，可以在查询的过程中使用优化隐藏器，提高系统的性能
5. 索引需要占物理和数据空间

## 6、SQL优化

1、查询语句中不要使用select *

2、尽量减少子查询，使用关联查询（left join,right join,inner join）替代

3、减少使用IN或者NOT IN ,使用exists，not exists或者关联查询语句替代

4、or 的查询尽量用 union或者union all 代替(在确认没有重复数据或者不用剔除重复数据时，union

all会更好)

5、应尽量避免在 where 子句中使用!=或<>操作符，否则将引擎放弃使用索引而进行全表扫描。

6、应尽量避免在 where 子句中对字段进行 null 值判断，否则将导致引擎放弃使用索引而进行全表扫

描，如： select id from t where num is null 可以在num上设置默认值0，确保表中num列没有null

值，然后这样查询： select id from t where num=0

## **7****、简单说一说****drop****、****delete****与****truncate****的区别**

SQL中的drop、delete、truncate都表示删除，但是三者有一些差别

delete和truncate只删除表的数据不删除表的结构

速度,一般来说: drop> truncate >delete

delete语句是dml,这个操作会放到rollback segement中,事务提交之后才生效;

如果有相应的trigger,执行的时候将被触发. truncate,drop是ddl, 操作立即生效,原数据不放到rollback

segment中,不能回滚. 操作不触发trigger.

## **8****、什么是视图**

视图是一种虚拟的表，具有和物理表相同的功能。可以对视图进行增，改，查，操作，试图通常是有一

个表或者多个表的行或列的子集。对视图的修改不影响基本表。它使得我们获取数据更容易，相比多表

查询。

## **9****、 什么是内联接、左外联接、右外联接？**

1. 内联接（Inner Join）：匹配2张表中相关联的记录。
2. 左外联接（Left Outer Join）：除了匹配2张表中相关联的记录外，还会匹配左表中剩余的记录，
3. 右表中未匹配到的字段用NULL表示。
4. 右外联接（Right Outer Join）：除了匹配2张表中相关联的记录外，还会匹配右表中剩余的记录，
5. 左表中未匹配到的字段用NULL表示。在判定左表和右表时，要根据表名出现在Outer Join的左右
6. 位置关系。

## **10****、并发事务带来哪些问题****?****隔离级别**

**脏读**

**不可重复读**

**幻影读**

READ-UNCOMMITTED

√

√

√

READ-COMMITTED

×

√

√

REPEATABLE-READ

×

×

√

SERIALIZABLE

×

×

×

在典型的应用程序中，多个事务并发运行，经常会操作相同的数据来完成各自的任务（多个用户对同一

数据进行操作）。并发虽然是必须的，但可能会导致以下的问题。

**脏读（****Dirty read****）****:** 当一个事务正在访问数据并且对数据进行了修改，而这种修改还没有提交到

数据库中，这时另外一个事务也访问了这个数据，然后使用了这个数据。因为这个数据是还没有提

交的数据，那么另外一个事务读到的这个数据是“脏数据”，依据“脏数据”所做的操作可能是不正确

的。

**丢失修改（****Lost to modify****）****:** 指在一个事务读取一个数据时，另外一个事务也访问了该数据，那

么在第一个事务中修改了这个数据后，第二个事务也修改了这个数据。这样第一个事务内的修改结

果就被丢失，因此称为丢失修改。 例如：事务1读取某表中的数据A=20，事务2也读取A=20，事

务1修改A=A-1，事务2也修改A=A-1，最终结果A=19，事务1的修改被丢失。

**不可重复读（****Unrepeatableread****）****:** 指在一个事务内多次读同一数据。在这个事务还没有结束

时，另一个事务也访问该数据。那么，在第一个事务中的两次读数据之间，由于第二个事务的修改

导致第一个事务两次读取的数据可能不太一样。这就发生了在一个事务内两次读到的数据是不一样

的情况，因此称为不可重复读。

**幻读（****Phantom read****）****:** 幻读与不可重复读类似。它发生在一个事务（T1）读取了几行数据，接

着另一个并发事务（T2）插入了一些数据时。在随后的查询中，第一个事务（T1）就会发现多了

一些原本不存在的记录，就好像发生了幻觉一样，所以称为幻读。

**不可重复读和幻读区别：**

不可重复读的重点是修改比如多次读取一条记录发现其中某些列的值被修改，幻读的重点在于新增或者

删除比如多次读取一条记录发现记录增多或减少了。

## **11****、事务隔离级别有哪些****?MySQL****的默认隔离级别是****?**

**SQL** **标准定义了四个隔离级别：**

**READ-UNCOMMITTED(****读取未提交****)****：** 最低的隔离级别，允许读取尚未提交的数据变更，**可能会**

**导致脏读、幻读或不可重复读**。

**READ-COMMITTED(****读取已提交****)****：** 允许读取并发事务已经提交的数据，**可以阻止脏读，但是幻**

**读或不可重复读仍有可能发生**。

**REPEATABLE-READ(****可重复读****)****：** 对同一字段的多次读取结果都是一致的，除非数据是被本身事务

自己所修改，**可以阻止脏读和不可重复读，但幻读仍有可能发生**。

**SERIALIZABLE(****可串行化****)****：** 最高的隔离级别，完全服从ACID的隔离级别。所有的事务依次逐个执

行，这样事务之间就完全不可能产生干扰，也就是说，**该级别可以防止脏读、不可重复读以及幻**

**读**。

MySQL InnoDB 存储引擎的默认支持的隔离级别是 **REPEATABLE-READ****（可重读）**。我们可以通过

SELECT @@tx_isolation; 命令来查看这里需要注意的是：与 SQL 标准不同的地方在于 InnoDB 存储引擎在 **REPEATABLE-READ****（可重读）**

事务隔离级别下使用的是Next-Key Lock 锁算法，因此可以避免幻读的产生，这与其他数据库系统(如

SQL Server) 是不同的。所以说InnoDB 存储引擎的默认支持的隔离级别是 **REPEATABLE-READ****（可重**

**读）** 已经可以完全保证事务的隔离性要求，即达到了 SQL标准的 **SERIALIZABLE(****可串行化****)** 隔离级

别。因为隔离级别越低，事务请求的锁越少，所以大部分数据库系统的隔离级别都是 **READ**

**COMMITTED(****读取提交内容****)** ，但是你要知道的是InnoDB 存储引擎默认使用 **REPEAaTABLE**

**READ****（可重读）** 并不会有任何性能损失。

InnoDB 存储引擎在 **分布式事务** 的情况下一般会用到 **SERIALIZABLE(****可串行化****)** 隔离级别。

## **12****、大表如何优化？**

当MySQL单表记录数过大时，数据库的CRUD性能会明显下降，一些常见的优化措施如下：

**1.** **限定数据的范围**

务必禁止不带任何限制数据范围条件的查询语句。比如：我们当用户在查询订单历史的时候，我们可以

控制在一个月的范围内；

**2.** **读****/****写分离**

经典的数据库拆分方案，主库负责写，从库负责读；

**3.** **垂直分区**

**根据数据库里面数据表的相关性进行拆分。** 例如，用户表中既有用户的登录信息又有用户的基本信息，

可以将用户表拆分成两个单独的表，甚至放到单独的库做分库。

**简单来说垂直拆分是指数据表列的拆分，把一张列比较多的表拆分为多张表。** 如下图所示，这样来说大

家应该就更容易理解了。

**垂直拆分的优点：** 可以使得列数据变小，在查询时减少读取的Block数，减少I/O次数。此外，垂

直分区可以简化表的结构，易于维护。

**垂直拆分的缺点：** 主键会出现冗余，需要管理冗余列，并会引起Join操作，可以通过在应用层进行

Join来解决。此外，垂直分区会让事务变得更加复杂；

**4.** **水平分区**

mysql> SELECT @@tx_isolation;

+-----------------+

| @@tx_isolation |

+-----------------+

| REPEATABLE-READ |

+-----------------+**保持数据表结构不变，通过某种策略存储数据分片。这样每一片数据分散到不同的表或者库中，达到了**

**分布式的目的。 水平拆分可以支撑非常大的数据量。**

水平拆分是指数据表行的拆分，表的行数超过200万行时，就会变慢，这时可以把一张的表的数据拆成

多张表来存放。举个例子：我们可以将用户信息表拆分成多个用户信息表，这样就可以避免单一表数据

量过大对性能造成影响。

水平拆分可以支持非常大的数据量。需要注意的一点是：分表仅仅是解决了单一表数据过大的问题，但

由于表的数据还是在同一台机器上，其实对于提升MySQL并发能力没有什么意义，所以 **水平拆分最好**

**分库** 。

水平拆分能够 **支持非常大的数据量存储，应用端改造也少**，但 **分片事务难以解决** ，跨节点Join性能较

差，逻辑复杂。《Java工程师修炼之道》的作者推荐 **尽量不要对数据进行分片，因为拆分会带来逻辑、**

**部署、运维的各种复杂度** ，一般的数据表在优化得当的情况下支撑千万以下的数据量是没有太大问题

的。如果实在要分片，尽量选择客户端分片架构，这样可以减少一次和中间件的网络I/O。

**下面补充一下数据库分片的两种常见方案：**

**客户端代理： 分片逻辑在应用端，封装在****jar****包中，通过修改或者封装****JDBC****层来实现。** 当当网的

**Sharding-JDBC** 、阿里的TDDL是两种比较常用的实现。

**中间件代理： 在应用和数据中间加了一个代理层。分片逻辑统一维护在中间件服务中。** 我们现在

谈的 **Mycat** 、360的Atlas、网易的DDB等等都是这种架构的实现。

详细内容可以参考： MySQL大表优化方案: https://segmentfault.com/a/1190000006158186

## **13****、分库分表之后****,id** **主键如何处理？**

因为要是分成多个表之后，每个表都是从 1 开始累加，这样是不对的，我们需要一个全局唯一的 id 来

支持。

生成全局 id 有下面这几种方式：

**UUID**：不适合作为主键，因为太长了，并且无序不可读，查询效率低。比较适合用于生成唯一的

名字的标示比如文件的名字。

**数据库自增** **id** : 两台数据库分别设置不同步长，生成不重复ID的策略来实现高可用。这种方式生成

的 id 有序，但是需要独立部署数据库实例，成本高，还会有性能瓶颈。

**利用** **redis** **生成** **id :** 性能比较好，灵活方便，不依赖于数据库。但是，引入了新的组件造成系统更

加复杂，可用性降低，编码更加复杂，增加了系统成本。

**Twitter****的****snowflake****算法** ：Github 地址：https://github.com/twitter-archive/snowflake。

**美团的****Leaf****分布式****ID****生成系统** ：Leaf 是美团开源的分布式ID生成器，能保证全局唯一性、趋势递

增、单调递增、信息安全，里面也提到了几种分布式方案的对比，但也需要依赖关系数据库、

Zookeeper等中间件。感觉还不错。美团技术团队的一篇文章：https://tech.meituan.com/2017/

04/21/mt-leaf.html 。**14****、****mysql****有关权限的表都有哪几个**

MySQL服务器通过权限表来控制用户对数据库的访问，权限表存放在mysql数据库里，由

mysql_install_db脚本初始化。这些权限表分别user，db，table_priv，columns_priv和host。下面分

别介绍一下这些表的结构和内容：

user权限表：记录允许连接到服务器的用户帐号信息，里面的权限是全局级的。

db权限表：记录各个帐号在各个数据库上的操作权限。

table_priv权限表：记录数据表级的操作权限。

columns_priv权限表：记录数据列级的操作权限。

host权限表：配合db权限表对给定主机上数据库级操作权限作更细致的控制。这个权限表不受

GRANT和REVOKE语句的影响。

## **15****、****mysql****有哪些数据类型**

**1****、整数类型** ，包括TINYINT、SMALLINT、MEDIUMINT、INT、BIGINT，分别表示1字节、2字节、3

字节、4字节、8字节整数。任何整数类型都可以加上UNSIGNED属性，表示数据是无符号的，即非负整

数。

长度：整数类型可以被指定长度，例如：INT(11)表示长度为11的INT类型。长度在大多数场景是没有意

义的，它不会限制值的合法范围，只会影响显示字符的个数，而且需要和UNSIGNED ZEROFILL属性配

合使用才有意义。

例子，假定类型设定为INT(5)，属性为UNSIGNED ZEROFILL，如果用户插入的数据为12的话，那么数

据库实际存储数据为00012。

**2****、实数类型**，包括FLOAT、DOUBLE、DECIMAL。

DECIMAL可以用于存储比BIGINT还大的整型，能存储精确的小数。

而FLOAT和DOUBLE是有取值范围的，并支持使用标准的浮点进行近似计算。

计算时FLOAT和DOUBLE相比DECIMAL效率更高一些，DECIMAL你可以理解成是用字符串进行处理。

**3****、字符串类型**，包括VARCHAR、CHAR、TEXT、BLOB

VARCHAR用于存储可变长字符串，它比定长类型更节省空间。

VARCHAR使用额外1或2个字节存储字符串长度。列长度小于255字节时，使用1字节表示，否则使用2

字节表示。

VARCHAR存储的内容超出设置的长度时，内容会被截断。

CHAR是定长的，根据定义的字符串长度分配足够的空间。

CHAR会根据需要使用空格进行填充方便比较。

CHAR适合存储很短的字符串，或者所有值都接近同一个长度。

CHAR存储的内容超出设置的长度时，内容同样会被截断。

**使用策略：**

对于经常变更的数据来说，CHAR比VARCHAR更好，因为CHAR不容易产生碎片。

对于非常短的列，CHAR比VARCHAR在存储空间上更有效率。

使用时要注意只分配需要的空间，更长的列排序时会消耗更多内存。

尽量避免使用TEXT/BLOB类型，查询时会使用临时表，导致严重的性能开销。

**4****、枚举类型（****ENUM****）**，把不重复的数据存储为一个预定义的集合。

有时可以使用ENUM代替常用的字符串类型。

ENUM存储非常紧凑，会把列表值压缩到一个或两个字节。

ENUM在内部存储时，其实存的是整数。

尽量避免使用数字作为ENUM枚举的常量，因为容易混乱。

排序是按照内部存储的整数**5****、日期和时间类型**，尽量使用timestamp，空间效率高于datetime，

用整数保存时间戳通常不方便处理。

如果需要存储微妙，可以使用bigint存储。

看到这里，这道真题是不是就比较容易回答了。

## **16****、创建索引的三种方式，删除索引**

第一种方式：在执行CREATE TABLE时创建索引

第二种方式：使用ALTER TABLE命令去增加索引

ALTER TABLE用来创建普通索引、UNIQUE索引或PRIMARY KEY索引。

其中table_name是要增加索引的表名，column_list指出对哪些列进行索引，多列时各列之间用逗号分

隔。

索引名index_name可自己命名，缺省时，MySQL将根据第一个索引列赋一个名称。另外，ALTER

TABLE允许在单个语句中更改多个表，因此可以在同时创建多个索引。

第三种方式：使用CREATE INDEX命令创建

CREATE INDEX可对表增加普通索引或UNIQUE索引。（但是，不能创建PRIMARY KEY索引）

删除索引

根据索引名删除普通索引、唯一索引、全文索引： alter table 表名 drop KEY 索引名

删除主键索引： alter table 表名 drop primary key （因为主键只有一个）。这里值得注意的是，

如果主键自增长，那么不能直接执行此操作（自增长依赖于主键索引）：

CREATE TABLE user_index2 (

id INT auto_increment PRIMARY KEY,

first_name VARCHAR (16),

last_name VARCHAR (16),

id_card VARCHAR (18),

information text,

KEY name (first_name, last_name),

FULLTEXT KEY (information),

UNIQUE KEY (id_card)

);

ALTER TABLE table_name ADD INDEX index_name (column_list);

CREATE INDEX index_name ON table_name (column_list);

alter table user_index drop KEY name;

alter table user_index drop KEY id_card;

alter table user_index drop KEY information;需要取消自增长再行删除：

但通常不会删除主键，因为设计主键一定与业务逻辑无关。

## 4.索引是什么

是一种高效获取数据的数据结构，相当于目录，更快的找到数据，是一个文件，占用物理空间。

## 5.索引的优点和缺点

优点：
①提高检索的速度。
②索引列对数据排序，降低排序成本。
③mysql 8之后引入了，隐藏索引，当一个索引被隐藏就不会被优化器所使用，就可以看出来索引对数据库的影响，有利于调优。
缺点：
①索引也是一个文件，所以会占用空间。
②降低更新的速度，因为不光要更新数据，还要更新索引。

## 6.索引的类型

①普通索引： 基本索引类型，允许定义索引的字段为空值和重复值。
②唯一索引： 索引的值必须唯一，允许定义索引的字段为空值。
③主键索引： 索引的值必须唯一，不可以为空。
④复合索引： 多个字段加索引，遵守最左匹配规则。
⑤全局索引： 只有在 MyISAM 引擎上才能使用。

## 7.索引怎么设计(优化)

①选择唯一性索引：值是唯一的，查询的更快。
②经常作为查询条件的字段加索引。
③为经常需要排序、分组和联合操作的字段建立索引：order by、group by、union(联合)、distinct(去重)等。
④限制索引个数：索引数量多，需要的磁盘空间就越多，更新表时，对索引的重构和更新就很费劲。
⑤表数据少的不建议使用索引(百万级以内)：数据过少，有可能查询的速度，比遍历索引的速度都快。
⑥删除不常用和不再使用的索引。
⑦用类型小的类型做索引：比如：int和BIGINT能用int就使用int。因为类型小，查询速度快和索引占用的空间更少。
⑧使用前缀索引，要是字符串越长，那么索引占的空间越大，并且比较起来就时间就越长。

## 1.char和varchar的区别

①char设置多少长度就是多少长度，varchar可以改变长度，所以char的空间利用率不如varchar的空间利用率高。
②因为长度固定，所以存取速度要比varchar快。
③char适用于固定长度的字符串，比如身份证号、手机号等，varchar适用于不固定的字符串。
