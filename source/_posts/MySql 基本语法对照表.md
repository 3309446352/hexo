---
categories: ''
tags:
  - 数据库
  - hexo
description: ‘Mysql函数是指对每一行数据进行处理并返回一个结果的函数’
permalink: ''
title: MySql 基本语法对照表
date: '2025-10-11 15:38:00'
cover: /images/ed96f5daf90dd688028a20369ffc1d24.jpg
updated: '2025-10-11 16:31:00'
---

# **MySql 基本语法对照表**


## **1 单行函数**

> 在 MySQL 8.0 中，单行函数 是指对每一行数据进行处理并返回一个结果的函数。它们不会聚合多行，而是“一行进，一行出”。下面是一些常见类别和简单易记的描述：

### **字符串函数**

> 处理文本字符串：
- `UPPER(str)`：转大写
- `LOWER(str)`：转小写
- `TRIM(str)`：去掉前后空格
- `CONCAT(str1, str2)`：拼接字符串
- `SUBSTRING(str, 起始, 长度)`：截取字符串（从第几位开始取多少字符）
- `LENGTH(str)`：字符串字节长度（中文占 3 字节）
- `CHAR_LENGTH(str)`：字符个数（中文也算 1 个字符）

---


### **数值函数**

> 处理数字：
- `ROUND(num, 小数位)`：四舍五入到几位小数
- `ABS(num)`：绝对值
- `CEIL(num)`：向上取整（天花板）
- `FLOOR(num)`：向下取整（地板）
- `MOD(a, b)`：求余数（a 除以 b 的余数）

---


### **日期函数**

> 处理日期时间：
- `NOW()`：当前年月日时分秒
- `CURDATE()`：今天日期（年月日）
- `CURTIME()`：现在时间（时分秒）
- `YEAR(date)`：从日期中提取年份（同理 `MONTH`, `DAY`）
- `DATEDIFF(日期1, 日期2)`：两个日期相差多少天
- `DATE_ADD(date, INTERVAL 1 DAY/MONTH/YEAR)`：日期加减（可加 1 天、1 月等）

---


### **条件/逻辑函数**

> 根据条件返回不同值：
- `IF(条件, 值1, 值2)`：如果条件真，返回值 1，否则值 2
- `IFNULL(字段, 默认值)`：如果字段是 NULL，就用默认值代替
- `CASE WHEN ... THEN ... ELSE ... END`：像“开关”一样，多种情况判断

---


### **空间函数**

> MySQL 的空间函数是用来处理地理数据的工具，可以计算距离、判断位置关系、查询附近的对象等。

MySQL 支持以下常见的空间数据类型：

- **`POINT`**：表示一个点（经纬度坐标）。
- **`LINESTRING`**：表示一条线，由多个点组成。
- **`POLYGON`**：表示一个多边形，由多个点围成的封闭区域。
- **`GEOMETRY`**：通用的空间数据类型，可以表示任意几何对象。

---


### **聚合函数**

> 是一种用于对一组数据进行计算并返回单个结果的函数。它们通常与 GROUP BY 子句一起使用，用于统计或分析数据

### **常见的 MySQL 聚合函数包括：**

- **`COUNT()`**：计算行数。
- **`SUM()`**：计算总和。
- **`AVG()`**：计算平均值。
- **`MAX()`**：找出最大值。
- **`MIN()`**：找出最小值。

---


### **8.x 新特性：窗口函数**

> 窗口函数可以在查询结果中执行分组和排序，同时保留所有行，常用于排名、累计计算和分桶分析。

### **窗口函数的核心特点：**

- **不改变行数**：与 `GROUP BY` 不同，窗口函数不会将多行合并为一行。
- **支持分组和排序**：可以通过 `PARTITION BY` 分组，通过 `ORDER BY` 排序。
- **常见函数**：`ROW_NUMBER()`、`RANK()`、`SUM()`、`AVG()` 等。

---


### **✅ 窗口函数的基本语法**


```plain text
function_name(expression) OVER (
 
     [PARTITION BY partition_expression]   -- 分组
     [ORDER BY sort_expression]            -- 排序
 )
```

- **`PARTITION BY`**：类似于 `GROUP BY`，用于分组。
- **`ORDER BY`**：指定排序规则。
- **`function_name`**：可以是聚合函数（如 `SUM()`、`AVG()`）或专用窗口函数（如 `ROW_NUMBER()`、`RANK()`）。

---


## **2 高级查询语句**

> 在 SQL 中，高级查询语句（Advanced Query Statement）是 SQL 语言中的一种高级查询功能，用于从数据库中检索、过滤和排序数据。以下是一些常见的高级查询语句：

---


### **✅ JOIN ON 子句**

> 作用：用于将两个或多个表中的数据根据指定条件进行关联查询。

```plain text
SELECT * FROM 表1 JOIN 表2 ON 表1.字段 = 表2.字段;
```


---


### **✅ 表的关系**


| **关系类型** | **说明**                            |
| -------- | --------------------------------- |
| **一对一**  | A 表一条记录对应 B 表一条记录（如：用户 ↔ 身份证）     |
| **一对多**  | A 表一条记录对应 B 表多条记录（如：部门 ↔ 员工）      |
| **多对多**  | A 表多条记录对应 B 表多条记录（需中间表，如：学生 ↔ 课程） |

> 🔍 连接的基础是表之间的 外键关系。

---


### **✅ 关联查询**

> 定义：通过 JOIN 将多个表的数据合并成一个结果集。

```plain text
-- 示例：查询员工姓名和所在部门名称
 SELECT e.name, d.dept_name
 FROM employees e
 JOIN departments d ON e.dept_id = d.id;
```

> ✅ 实现跨表数据展示，避免重复存储。

---


### **✅ 内连接（INNER JOIN）**

> 含义：只返回两个表中 满足连接条件的匹配行。

```plain text
SELECT * FROM A INNER JOIN B ON A.id = B.a_id;
```

- ❌ 不匹配的行被丢弃
- ✅ 结果集较小，效率高
> 💡 等价于省略 INNER 的写法：A JOIN B ON ...

---


### **✅ 左连接（LEFT JOIN）**

> 含义：返回左表所有行，以及右表中匹配的行；右表无匹配则为 NULL。

```plain text
SELECT * FROM A LEFT JOIN B ON A.id = B.a_id;
```

- ✅ 保留左表全部数据
- ⚠️ 右表缺失时显示 `NULL`
> 🎯 适用场景：查询“所有员工及所属部门”（部分员工可能未分配部门）

---


### **✅ 右连接（RIGHT JOIN）**

> 含义：返回右表所有行，以及左表中匹配的行；左表无匹配则为 NULL。

```plain text
SELECT * FROM A RIGHT JOIN B ON A.id = B.a_id;
```

- ✅ 保留右表全部数据
- ⚠️ 左表缺失时显示 `NULL`
> 💡 实际开发中较少使用，可转换为 LEFT JOIN + 表名交换

---


### **✅ 自连接（Self Join）**

> 含义：一个表与自身进行连接，常用于树形结构或层级关系。

```plain text
-- 示例：查询每个员工的直属上级
 SELECT e1.name AS 员工, e2.name AS 上级
 FROM employees e1
 LEFT JOIN employees e2 ON e1.manager_id = e2.id;
```

- ✅ 适用于“上下级”、“父子节点”等场景
- ⚠️ 注意别名区分（如 `e1`, `e2`）

---


### **✅ 总结对比表**


| **连接类型**     | **是否保留左表** | **是否保留右表** | **匹配失败处理** |
| ------------ | ---------- | ---------- | ---------- |
| `INNER JOIN` | ❌          | ❌          | 不显示        |
| `LEFT JOIN`  | ✅          | ❌          | 右表为 `NULL` |
| `RIGHT JOIN` | ❌          | ✅          | 左表为 `NULL` |
| `SELF JOIN`  | ✅          | ✅          | 根据条件决定     |


---


✅ **一句话口诀**：

> “内连取交集，左连保左边，右连保右边，自连自己连。”

---


当然可以！以下是按照你提供的目录顺序，**简明扼要地举例介绍 SQL 的核心查询子句**，适合快速掌握和记忆。


---


## **3 合并查询结果（UNION / UNION ALL）**

> 作用：将两个或多个 SELECT 查询的结果集合并为一个结果。

```plain text
-- 示例：合并两个表的员工姓名
 SELECT name FROM employees
 UNION
 SELECT name FROM temp_employees;
```

- ✅ `UNION`：自动去重（默认）
- ✅ `UNION ALL`：保留所有行（不去重）
> 💡 适用于“从不同来源获取相同结构的数据”

---


## **4 GROUP BY 子句**

> 作用：按指定列分组，常用于聚合函数（如 COUNT, SUM）。

```plain text
-- 示例：统计每个部门的员工人数
 SELECT dept_id, COUNT(*) AS count
 FROM employees
 GROUP BY dept_id;
```

- ✅ 分组后每组一行
- ⚠️ 聚合函数必须与 `GROUP BY` 字段一起使用
> 💡 类比：把一箱苹果按颜色分类，每类算一个总数

---


### **✅ HAVING 子句**

> 作用：对分组后的结果进行筛选（过滤聚合结果）。

```plain text
-- 示例：只显示人数 > 5 的部门
 SELECT dept_id, COUNT(*) AS count
 FROM employees
 GROUP BY dept_id
 HAVING COUNT(*) > 5;
```

- ✅ `HAVING` 用于过滤 **分组后** 的数据
- ❌ `WHERE` 不能用于过滤聚合结果
> 💡 口诀：“先分组，再筛选” → GROUP BY → HAVING

---


## **5 ORDER BY 子句**

> 作用：对查询结果按指定列排序。

```plain text
-- 示例：按工资降序排列
 SELECT name, salary
 FROM employees
 ORDER BY salary DESC;
 
 -- 按部门升序，工资降序
 ORDER BY dept_id ASC, salary DESC;
```

- ✅ `ASC`：升序（默认）
- ✅ `DESC`：降序
- ⚠️ 排序不影响数据本身，仅影响显示顺序
> 💡 类比：像排座位，高个子坐后面

---


## **6 LIMIT 子句**

> 作用：限制返回结果的数量（常用于分页）。

```plain text
-- 示例：只取前10条记录
 SELECT * FROM employees
 LIMIT 10;
 
 -- 示例：跳过前10条，取接下来5条（分页）
 SELECT * FROM employees
 LIMIT 5 OFFSET 10;
```

- ✅ `LIMIT n`：取前 n 条
- ✅ `LIMIT n OFFSET m`：跳过 m 条，取 n 条
- ⚠ MySQL 支持，其他数据库可能用 `FETCH FIRST` 或 `TOP`
> 💡 类比：翻书时只看第一页的前 10 行

---


## **7 总结对比表**


| **子句**     | **作用** | **示例**                                    |
| ---------- | ------ | ----------------------------------------- |
| `UNION`    | 合并结果集  | `SELECT a FROM t1 UNION SELECT a FROM t2` |
| `GROUP BY` | 分组聚合   | `GROUP BY dept_id`                        |
| `HAVING`   | 过滤分组结果 | `HAVING COUNT(*) > 5`                     |
| `ORDER BY` | 结果排序   | `ORDER BY salary DESC`                    |
| `LIMIT`    | 限制行数   | `LIMIT 10`                                |


**一句话口诀**：

> “合并用 UNION，分组用 GROUP BY，筛选用 HAVING，排序用 ORDER BY，限行用 LIMIT。”

---


## **8 子查询**


### **✅ 在 SELECT 语句的 SELECT 子句中嵌套子查询**

> 作用：在 SELECT 列表中使用子查询返回一个值或列。

```plain text
-- 示例：查询员工姓名和所在部门名称
 SELECT name,
        (SELECT dept_name FROM departments WHERE id = e.dept_id) AS dept_name
 FROM employees e;
```

- ✅ 子查询为每行执行一次（相关子查询）
- ⚠ 若结果多行会报错 → 必须返回单值（如 `MAX`, `MIN`, `SINGLE ROW`）
> 💡 类比：像“查名字 + 同时查他家地址”

---


### **✅ 在 SELECT 语句的 WHERE 子句中嵌套子查询**

> 作用：在 WHERE 条件中使用子查询过滤数据。

```plain text
-- 示例：查询工资高于平均工资的员工
 SELECT *
 FROM employees
 WHERE salary > (SELECT AVG(salary) FROM employees);
```

- ✅ 子查询先执行，返回一个值（如平均工资）
- ✅ 用于比较、存在性判断等
> 💡 类比：“找出比全班平均分高的同学”

---


### **✅ 在 SELECT 语句的 EXISTS 子句中嵌套子查询**

> 作用：检查子查询是否返回结果，返回 TRUE 或 FALSE。

```plain text
-- 示例：查询有下属的员工（即：是经理）
 SELECT *
 FROM employees e1
 WHERE EXISTS (
     SELECT 1
     FROM employees e2
     WHERE e2.manager_id = e1.id
 );
```

- ✅ 不关心具体数据，只关心“是否存在”
- ✅ 性能好，适合“存在性”判断
> 💡 类比：“有没有人叫我老板？” → 有就显示我

---


### **✅ 在 SELECT 语句的 FROM 子句中嵌套子查询**

> 作用：将子查询结果作为临时表使用。

```plain text
-- 示例：查询各部门平均工资，并按部门排序
 SELECT dept_id, avg_salary
 FROM (
     SELECT dept_id, AVG(salary) AS avg_salary
     FROM employees
     GROUP BY dept_id
 ) AS dept_avg
 ORDER BY avg_salary DESC;
```

- ✅ 子查询结果当作“临时表”使用
- ✅ 可加别名（如 `AS dept_avg`）
> 💡 类比：“先把每个部门的平均工资算出来，再排序”

---


### **✅ 在 UPDATE 语句中嵌套子查询**

> 作用：根据子查询结果更新某列。

```plain text
-- 示例：将所有员工的工资上调 10%
 UPDATE employees
 SET salary = salary * 1.1
 WHERE dept_id IN (
     SELECT id
     FROM departments
     WHERE budget > 1000000
 );
```

- ✅ 先执行子查询，获取符合条件的 `dept_id`
- ✅ 再更新这些部门的员工工资
> 💡 类比：“给预算超百万的部门员工涨薪”

---


### **✅ 在 DELETE 语句中嵌套子查询**

> 作用：根据子查询条件删除数据。

```plain text
-- 示例：删除没有员工的部门
 DELETE FROM departments
 WHERE id NOT IN (
     SELECT DISTINCT dept_id
     FROM employees
 );
```

- ✅ 使用 `NOT IN` 检查是否“无匹配”
- ⚠ 注意空值问题（建议用 `NOT EXISTS` 更安全）
> 💡 类比：“删掉没人住的房子”

---


### **✅ 使用子查询复制表结构和数据**

> 作用：通过 CREATE TABLE ... AS SELECT 复制表。

```plain text
-- 示例：复制 employees 表结构和数据
 CREATE TABLE employees_backup AS
 SELECT * FROM employees;
 
 -- 示例：只复制结构（无数据）
 CREATE TABLE employees_struct AS
 SELECT * FROM employees WHERE 1=0;
```

- ✅ `WHERE 1=0` 确保不返回数据
- ✅ 适用于备份、测试环境搭建
> 💡 类比：“复印一份文件，可带内容或不带”

---


### **✅ 总结对比表**


| **场景**         | **用途** | **示例**                                    |
| -------------- | ------ | ----------------------------------------- |
| `SELECT` 子句    | 返回列值   | `(SELECT dept_name FROM ...) AS name`     |
| `WHERE` 子句     | 过滤条件   | `salary > (SELECT AVG(...))`              |
| `EXISTS` 子句    | 检查存在性  | `EXISTS (SELECT 1 FROM ...)`              |
| `FROM` 子句      | 临时表    | `FROM (SELECT ...) AS temp`               |
| `UPDATE` 语句    | 更新数据   | `SET salary = ... WHERE dept_id IN (...)` |
| `DELETE` 语句    | 删除数据   | `DELETE FROM ... WHERE id NOT IN (...)`   |
| `CREATE TABLE` | 复制表    | `CREATE TABLE ... AS SELECT ...`          |


---


✅ **一句话口诀**：

> “SELECT 套取列，WHERE 套筛行，EXISTS 查存，FROM 嵗作表，UPDATE/DELETE 改删，CREATE 复制结构。”

---


## **9 通用表达式（Common Table Expressions, CTE）**

> MySQL 8.0 引入了通用表达式，也称为“公共表表达式”，它允许在查询中定义一个临时的结果集，供后续查询使用，提升代码可读性和复用性, 是 MySQL 8.0 中一项重要的增强功能。

### **示例：**


假设我们有一个销售表 `sales`，想计算每个销售人员的总销售额，并找出销售额最高的前 3 名。


```plain text
WITH sales_summary AS (
     SELECT
         salesperson_id,
         SUM(amount) AS total_sales
     FROM sales
     GROUP BY salesperson_id
 )
 SELECT *
 FROM sales_summary
 ORDER BY total_sales DESC
 LIMIT 3;
```


### **说明：**

- `WITH sales_summary AS (...)` 定义了一个 CTE，用于汇总每个销售人员的销售额。
- 主查询从这个临时结果集中选取数据。
- CTE 可以被多次引用（如嵌套使用），且逻辑清晰，易于维护。

### **优点：**

- 提高查询可读性；
- 支持递归查询（如层级结构）；
- 避免重复子查询。

以下是按顺序简明扼要介绍 MySQL 中的各类约束（含 8.0 新特性）：


---


## **10 约束**


### **非空约束**

> 非空约束确保字段值不为空。

```plain text
-- 插入时 `name` 必须有值。
 CREATE TABLE user (id INT, name VARCHAR(50) NOT NULL);
```


---


### **唯一键约束（UNIQUE）**

> 保证字段值唯一，可为空（但只能有一个 NULL）。

```plain text
-- 同一邮箱不能重复插入。
 CREATE TABLE user (email VARCHAR(50) UNIQUE);
```


---


### **主键约束（PRIMARY KEY）**

> 唯一标识表中每一行，自动添加非空和唯一约束。

```plain text
-- 主键不可为空且必须唯一。
 CREATE TABLE user (id INT PRIMARY KEY, name VARCHAR(50));
```


---


### **自增属性（AUTO_INCREMENT）**

> 常用于主键，自动递增数值。

```plain text
-- 插入新记录时，`id` 自动从 1 开始递增。
 CREATE TABLE user (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(50));
```


---


### **默认值约束（DEFAULT）**

> 为表字段设置默认值

```plain text
-- 未指定 `status` 时，默认为 `'active'`。
 CREATE TABLE user (status VARCHAR(10) DEFAULT 'active');
```


---


### **外键约束（FOREIGN KEY）**

> 建立表间关联，确保引用完整性。

```plain text
-- `order_id` 必须在 `orders` 表中存在。
 -- order_detail 插入数据时，MySQL 会自动检查该条数据order_id在不在orders表中
 CREATE TABLE order_detail (
     id INT PRIMARY KEY,
     order_id INT,
     FOREIGN KEY (order_id) REFERENCES orders(id)
 );
```


---


### **检查约束（CHECK）**

> MySQL 8.0 新特性：检查约束限制列值范围，增强数据有效性。 \

```plain text
-- 插入年龄必须在 0~120 之间，否则报错。
 CREATE TABLE user (
     age INT CHECK (age >= 0 AND age <= 120)
 );
```


---


## **11 视图**


### **创建视图**

> 通过 CREATE VIEW 语句从一个或多个表中定义虚拟表。例如：

```plain text
CREATE VIEW 学生信息视图 AS
 SELECT 学号, 姓名, 班级 FROM 学生表;
```


### **视图算法**

> 数据库系统使用特定算法（如合并、物化等）来处理视图查询。例如，查询视图时自动转换为对基表的查询。

**9.3 查看视图**


使用 `DESCRIBE` 或 `SHOW CREATE VIEW` 查看视图结构。例如：


```plain text
DESCRIBE 学生信息视图;
```


### **修改视图**

> 使用 CREATE OR REPLACE VIEW 更新视图定义。例如：

```plain text
CREATE OR REPLACE VIEW 学生信息视图 AS
 SELECT 学号, 姓名, 班级, 年龄 FROM 学生表;
```


### **删除视图**

> 使用 DROP VIEW 删除视图

```plain text
DROP VIEW 学生信息视图;
```


### **更新视图数据**


某些视图支持 `INSERT`、`UPDATE`、`DELETE` 操作，但需满足条件（如无聚合函数、唯一映射等）


```plain text
UPDATE 学生信息视图 SET 年龄 = 20 WHERE 学号 = '001';
```


### **视图的作用**

> 简化复杂查询、增强安全性（隐藏敏感字段）、提供数据抽象和逻辑独立性, 视图是虚拟表，用于封装查询逻辑，提升可维护性和安全性。掌握创建、查看、修改、删除及更新视图的操作是数据库管理的重要技能。

---


## **13 存储过程和函数**


### **变量**

> 变量用于存储临时数据，分为系统变量、用户变量和局部变量。

### **1 系统变量**


如 `@@autocommit`，查看当前会话自动提交状态


```plain text
SELECT @@autocommit;
```


### **2 新特性：全局变量的持久化**

> 使用 PERSIST 设置全局变量并保存到配置文件中

```plain text
SET PERSIST max_connections = 200;
```


### **用户变量**

> 用 @ 定义

```plain text
SET @name = '张三';
 SELECT @name;
```


### **存储过程**

> 预编译的 SQL 代码块，可重复调用。

### **创建和调用存储过程**


```plain text
DELIMITER //
 CREATE PROCEDURE GetStudentInfo()
 BEGIN
 SELECT * FROM student;
 END //
 DELIMITER ;
 CALL GetStudentInfo();
```


### **声明局部变量**

> 在存储过程中使用 DECLARE 声明

```plain text
DECLARE count INT DEFAULT 0;
```


### **查看存储过程**

> 使用 SHOW CREATE PROCEDURE 查看定义

```plain text
SHOW CREATE PROCEDURE GetStudentInfo;
```


### **修改存储过程**

> 重新创建或使用 ALTER PROCEDURE（部分语法支持）。

### **删除存储过程**


```plain text
DROP PROCEDURE IF EXISTS GetStudentInfo;
```


### **自定义函数**

> 返回单个值的存储程序，可像内置函数一样使用

```plain text
CREATE FUNCTION GetAge(birth_date DATE)
     RETURNS INT
     READS SQL DATA
     RETURN TIMESTAMPDIFF(YEAR, birth_date, CURDATE());
```


### **定义条件和处理程序**

> 用于捕获异常或错误。例如：

```plain text
DECLARE EXIT HANDLER FOR SQLEXCEPTION
     BEGIN
     ROLLBACK;
     RESIGNAL;
     END;
```


### **流程控制结构**

> 实现逻辑判断与循环。

### **1 IF 条件判断语句**


```plain text
IF score >= 60 THEN
 SET result = '及格';
 ELSE
 SET result = '不及格';
 END IF;
```


### **2 CASE 条件判断语句**


```plain text
CASE score
     WHEN 90 THEN SET grade = 'A';
     WHEN 80 THEN SET grade = 'B';
     ELSE SET grade = 'C';
     END CASE;
```


### **3 WHILE 循环语句**


```plain text
WHILE i <= 10 DO
     INSERT INTO log VALUES (i);
     SET i = i + 1;
     END WHILE;
```


### **4 REPEAT 循环语句**


```plain text
REPEAT
   INSERT INTO log VALUES (j);
   SET j = j + 1;
 UNTIL j > 10 END REPEAT;
```


### **5 LEAVE 退出语句**

> 跳出循环或结构

```plain text
IF i = 5 THEN LEAVE loop_name;
     END IF;
```


### **7 LOOP 循环语句**

> 配合 LEAVE 使用

```plain text
loop_label: LOOP
 -- 业务逻辑
 LEAVE loop_label;
 END LOOP;
```


### **8 游标的使用**

> 用于逐行处理查询结果集。

```plain text
DECLARE cur CURSOR FOR SELECT name FROM student;
     OPEN cur;
     FETCH cur INTO v_name;
     CLOSE cur;
```


### **存储过程和函数的对比**


| **特性**        | **存储过程**      | **函数**  |
| ------------- | ------------- | ------- |
| 返回值           | 可无返回值         | 必须返回一个值 |
| 调用方式          | `CALL proc()` | 在表达式中使用 |
| 可在 SELECT 中使用 | 否             | 是       |


---


## **14 事件和触发器**


### **触发器**

> 触发器是数据库中的一种特殊对象，用于在特定事件（如 INSERT、UPDATE、DELETE）发生时自动执行预定义的 SQL 语句
1. 创建触发器
- 创建一个在员工表插入新记录时自动记录操作日志的触发器。 sql 体验 AI 代码助手 代码解读 复制代码

```plain text
CREATE TRIGGER log_employee_insert
 AFTER INSERT ON employees
 FOR EACH ROW
 INSERT INTO audit_log (action, employee_id, timestamp)
 VALUES ('INSERT', NEW.id, NOW());
```

1. 查看触发器
- 使用系统视图查看当前数据库中的所有触发器信息

```plain text
SELECT * FROM information_schema.triggers WHERE trigger_schema = 'public';
```

1. 删除触发器
- 删除名为 `log_employee_insert` 的触发器

```plain text
DROP TRIGGER log_employee_insert ON employees;
```


### **事件**

> MySQL 事件是“定时任务”，类似 Linux 的 cron 或 Windows 任务计划程序，用于在指定时间自动执行 SQL 语句。

### **开启或关闭事件调度器**

> 控制是否允许事件运行。默认可能关闭。

```plain text
-- 开启事件调度器
 SET GLOBAL event_scheduler = ON;
 
 -- 关闭事件调度器
 SET GLOBAL event_scheduler = OFF;
 
 -- 查看当前状态
 SHOW VARIABLES LIKE 'event_scheduler';
```

> 📌 Tips: 服务器刚装好时，事件调度器默认关闭，需手动开启才能让事件生效。

### **创建事件**

> 创建一个定时执行的任务，例如每天凌晨 2 点自动清理 30 天前的日志数据

```plain text
CREATE EVENT daily_cleanup
 ON SCHEDULE EVERY 1 DAY
 STARTS '2025-04-01 02:00:00'
 DO
   DELETE FROM logs WHERE created_at < NOW() - INTERVAL 30 DAY;
```


### **查看事件**

> 查看当前数据库中有哪些事件，例如：运维人员定期检查事件是否存在、是否启用、下次执行时间等

```plain text
-- 查看所有事件
 SHOW EVENTS;
 
 -- 查看特定事件详情
 SELECT * FROM information_schema.EVENTS
 WHERE EVENT_NAME = 'daily_cleanup';
```


### **启动或关闭事件**

> 临时启用或禁用某个事件，无需删除重建，维护, 投产期间临时关闭清理事件，避免误删数据；维护完再启用。

```plain text
-- 禁用事件
 ALTER EVENT daily_cleanup DISABLE;
 
 -- 启用事件
 ALTER EVENT daily_cleanup ENABLE;
```


### **修改改事件**

> 修改已有事件的时间、SQL 内容等, 例如：业务调整后，将日志保留期从 30 天延长到 60 天，并推迟执行时间。

```plain text
ALTER EVENT daily_cleanup
 ON SCHEDULE EVERY 1 DAY
 STARTS '2025-04-01 03:00:00'  -- 改为凌晨3点执行
 DO
   DELETE FROM logs WHERE created_at < NOW() - INTERVAL 60 DAY;  -- 清理60天前数据
```


### **删除事件**

> 彻底移除不再需要的事件, 统重构后，旧的定时清理逻辑被替代，原事件可安全删除。

```plain text
DROP EVENT daily_cleanup;
```


### **一句话总结**

> MySQL 事件 = 定时任务管理器，支持创建、查看、启停、修改、删除，配合事件调度器实现自动化运维。

## **15 用户与权限管理**


### **权限表**

> MySQL 通过系统数据库 mysql 中的几张权限表控制用户访问。权限检查按“全局 → 数据库 → 表 → 列 → 存储过程”层级进行。

### **user 表**

> 存储全局权限（所有数据库），如登录、创建用户、管理权限等

```plain text
SELECT User, Host, Select_priv FROM mysql.user WHERE User = 'admin';
```


→ 若 `Select_priv='Y'`，表示该用户可在任何数据库执行 SELECT。


---


### **db 表**

> 制用户对特定数据库的访问权限, 例如用户 analyst 在 sales 库可查、可插数据。

```plain text
INSERT INTO mysql.db (Host, Db, User, Select_priv, Insert_priv)
 VALUES ('localhost', 'sales', 'analyst', 'Y', 'Y');
 FLUSH PRIVILEGES;
```


→ 用户 `analyst` 在 `sales` 库可查、可插数据。


---


### **tables_priv 和 columns_priv 表**

> tables_priv：控制对某张表的权限（如 SELECT、UPDATE）。 columns_priv：控制对某列的权限（如仅允许读取 email 列）。

```plain text
-- 允许 user1 对 orders 表有 UPDATE 权限
 INSERT INTO mysql.tables_priv (Host, Db, User, Table_name, Table_priv)
 VALUES ('%', 'shop', 'user1', 'orders', 'Update');
 
 -- 允许 user1 仅读取 users 表的 email 列
 INSERT INTO mysql.columns_priv (Host, Db, User, Table_name, Column_name, Column_priv)
 VALUES ('%', 'shop', 'user1', 'users', 'email', 'Select');
 FLUSH PRIVILEGES;
```


### **procs_priv 表**

> 控制用户对存储过程/函数的执行权限, 例如用户 accountant 可执行 finance.calculate_bonus() 过程。

```plain text
INSERT INTO mysql.procs_priv (Host, Db, User, Routine_name, Routine_type, Proc_priv)
 VALUES ('%', 'finance', 'accountant', 'calculate_bonus', 'PROCEDURE', 'Execute');
 FLUSH PRIVILEGES;
```


---


### **访问控制**

> MySQL 访问控制分两步：
> 1. **连接验证**：检查 `user` 表中用户名+主机是否匹配；
> 2. **请求验证**：根据 `db`, `tables_priv`, `columns_priv`, `procs_priv` 等逐层判断操作权限。
>
> 例如用户 `john@192.168.1.%` 登录 → 查看 `user` 表是否允许连接 → 执行 `SELECT * FROM sales.orders` → 检查 `db` 表是否有 `sales` 库 SELECT 权 → 再查 `tables_priv` 是否允许对 `orders` 表 SELECT → 最终放行或拒绝。
>
>

### **总结**

> 权限由多张表协同控制，遵循“最小权限原则”，修改后需 FLUSH PRIVILEGES; 生效。

### **用户管理**


### **创建新用户**

> 举例： 创建本地用户 dev_user，密码为 DevPass123!, 默认无权限，需后续用 GRANT 授权

```plain text
CREATE USER 'dev_user'@'localhost' IDENTIFIED BY 'DevPass123!';
```


---


### **修改用户**

> 重命名用户（MySQL 5.7+）

```plain text
ALTER USER 'dev_user'@'localhost' RENAME TO 'new_dev'@'localhost';
```


---


### **用户账户锁定和解锁**

> 临时禁用账号，但不影响权限配置

```plain text
-- 锁定
 ALTER USER 'new_dev'@'localhost' ACCOUNT LOCK;
 
 -- 解锁
 ALTER USER 'new_dev'@'localhost' ACCOUNT UNLOCK;
 
 SELECT user, account_locked FROM mysql.user;
```


### **限制用户使用资源**

> 例如: 限制每小时连接数、查询数、并发连接数, 设置为 0 表示不限制

```plain text
ALTER USER 'new_dev'@'localhost'
   WITH MAX_CONNECTIONS_PER_HOUR 50
        MAX_QUERIES_PER_HOUR 200
        MAX_USER_CONNECTIONS 3;
```


---


### **修改用户密码**

> MySQL 5.7+ 登录后改自己密码：`SET PASSWORD = 'xxx';

```plain text
ALTER USER 'new_dev'@'localhost' IDENTIFIED BY 'NewPass456!';
```


---


### **忘记 root 密码的解决方案（MySQL 8.0+）**

> 📌 操作期间禁止远程访问（--skip-networking），重置后务必恢复正常启动方式

bash


体验 AI 代码助手


代码解读


复制代码


```plain text
# 1. 停服务
 sudo systemctl stop mysqld
 
 # 2. 跳过权限启动
 sudo mysqld_safe --skip-grant-tables --skip-networking &
 
 # 3. 登录（无需密码）
 mysql -u root
 
 # 4. 重置密码
 FLUSH PRIVILEGES;
 ALTER USER 'root'@'localhost' IDENTIFIED BY 'NewRootPass!';
 
 # 5. 重启服务
 sudo killall mysqld
 sudo systemctl start mysqld
```


---


### **删除用户**

> 彻底删除用户及其权限记录, 删除前建议确认无应用正在使用该账号

```plain text
DROP USER 'new_dev'@'localhost';
```


---


### **总结与注意实现**


---


### **总结**


| **操作**    | **一句话口诀**                            |
| --------- | ------------------------------------ |
| 创建用户      | `CREATE USER ... IDENTIFIED BY ...`  |
| 修改用户      | `ALTER USER ... RENAME / IDENTIFIED` |
| 锁定/解锁     | `ACCOUNT LOCK / UNLOCK`              |
| 限制资源      | `WITH MAX_...`                       |
| 修改密码      | `ALTER USER ... IDENTIFIED BY ...`   |
| root 密码丢失 | `--skip-grant-tables + ALTER USER`   |
| 删除用户      | `DROP USER ...`                      |


### **注意事项**

- 所有操作后建议执行 `FLUSH PRIVILEGES;` 刷新权限（虽然多数情况自动刷新）
- 生产环境慎用 `DROP USER` 和 `-skip-grant-tables`
- 推荐配合 `GRANT` 分配权限（如 `GRANT SELECT ON db.* TO 'user'@'host';`）

---


### **权限管理**


MySQL 权限系统采用 **分层控制**：从全局 → 数据库 → 表 → 列 → 程序（存储过程/函数），逐级细化。权限可授予或撤销。


---


### **查看用户权限**

> 作用：查看某个用户当前拥有的所有权限。

```plain text
SHOW GRANTS FOR 'alice'@'localhost';
 -- 输出示例：
 -- GRANT USAGE ON *.* TO `alice`@`localhost`
 -- GRANT SELECT, INSERT ON `test_db`.* TO `alice`@`localhost`
 
 -- `USAGE` 表示“无任何权限”，但账户存在。
```


---


### **授予和撤销列级权限**

> 作用：控制用户对 某张表中特定列 的访问（如只允许查姓名，不允许查薪资）, 且要注意列级权限不能单独使用，需配合表级权限（如已有 SELECT 表权限）
- **语法**：

```plain text
GRANT 权限 (列名) ON 数据库.表 TO '用户'@'主机';
 REVOKE 权限 (列名) ON 数据库.表 FROM '用户'@'主机';
```

- **举例**：

```plain text
-- 授予 alice 对 employees 表中 name 列的 SELECT 权限
 GRANT SELECT (name) ON company.employees TO 'alice'@'localhost';
 
 -- 撤销该权限
 REVOKE SELECT (name) ON company.employees FROM 'alice'@'localhost';
```


---


### **授予和撤销表级权限**

> 作用：控制用户对 某张表 的操作权限（增删改查等） 常用权限：SELECT、INSERT、UPDATE、DELETE、DROP、ALTER 等。
- **语法**：

```plain text
GRANT 权限 ON 数据库.表 TO '用户'@'主机';
 REVOKE 权限 ON 数据库.表 FROM '用户'@'主机';
```

- **举例**：

```plain text
-- 授予 bob 对 orders 表的 SELECT 和 UPDATE 权限
 GRANT SELECT, UPDATE ON shop.orders TO 'bob'@'%';
 
 -- 撤销 UPDATE 权限
 REVOKE UPDATE ON shop.orders FROM 'bob'@'%';
```


---


### **授予和撤销数据库层级权限**

> 作用：控制用户对 整个数据库 的所有表的操作权限, 注意 ALL PRIVILEGES 包含除 GRANT OPTION 外的所有操作权限。
- **语法**：

```plain text
GRANT 权限 ON 数据库.* TO '用户'@'主机';
 REVOKE 权限 ON 数据库.* FROM '用户'@'主机';
```

- **举例**：

```plain text
-- 授予 charlie 对 test_db 所有表的全部权限
 GRANT ALL PRIVILEGES ON test_db.* TO 'charlie'@'localhost';
 
 -- 撤销所有权限
 REVOKE ALL PRIVILEGES ON test_db.* FROM 'charlie'@'localhost';
```


---


### **授予和撤销全局权限**

> 作用：控制用户在 整个 MySQL 实例 中的权限（如创建数据库、管理用户等）, 注意全局权限影响最大，通常只给管理员账户。
- **语法**：

```plain text
GRANT 权限 ON *.* TO '用户'@'主机';
 REVOKE 权限 ON *.* FROM '用户'@'主机';
```

- **举例**：

```plain text
-- 授予 admin 用户全局 CREATE USER 和 RELOAD 权限
 GRANT CREATE USER, RELOAD ON *.* TO 'admin'@'localhost';
 
 -- 撤销全局权限
 REVOKE CREATE USER, RELOAD ON *.* FROM 'admin'@'localhost';
```


---


### **✅ 12.3.6 授予和撤销程序权限**

> 作用：控制用户对 存储过程、函数、触发器、事件 的创建与执行权限, CREATE ROUTINE：创建存储过程/函数；ALTER ROUTINE：修改；EXECUTE：执行。
- **语法**：

```plain text
GRANT EXECUTE ON PROCEDURE 数据库.程序名 TO '用户'@'主机';
 GRANT CREATE ROUTINE, ALTER ROUTINE ON 数据库.* TO '用户'@'主机';
 REVOKE ... FROM ...
```

- **举例**：

```plain text
-- 授予 dave 执行存储过程 get_employee_salary 的权限
 GRANT EXECUTE ON PROCEDURE hr.get_employee_salary TO 'dave'@'localhost';
 
 -- 授予创建和修改存储过程的权限
 GRANT CREATE ROUTINE, ALTER ROUTINE ON hr.* TO 'dave'@'localhost';
 
 -- 撤销执行权限
 REVOKE EXECUTE ON PROCEDURE hr.get_employee_salary FROM 'dave'@'localhost';
```


---


### **总结对比表（快速查阅）**


| **权限级别** | **作用范围**    | **示例命令**                                 |
| -------- | ----------- | ---------------------------------------- |
| 全局       | 整个 MySQL 实例 | `GRANT CREATE USER ON *.* TO ...`        |
| 数据库      | 某个数据库内所有表   | `GRANT SELECT ON db.* TO ...`            |
| 表        | 某张表         | `GRANT UPDATE ON db.table TO ...`        |
| 列        | 某张表中的某些列    | `GRANT SELECT (name) ON db.table TO ...` |
| 程序       | 存储过程/函数等    | `GRANT EXECUTE ON PROCEDURE ... TO ...`  |


---


### **最佳实践建议：**

- 遵循最小权限原则（Least Privilege）
- 定期审查权限（`SHOW GRANTS`）
- 生产环境避免使用 `GRANT ALL ON *.*`
- 使用 `FLUSH PRIVILEGES;` 刷新权限（修改后生效）

---


### **MySql 8x 新特性**


### **认证插件更新**

> 默认认证插件从 mysql_native_password 改为 caching_sha2_password，安全性更高。
>
> 👉 示例：
>
>

```plain text
CREATE USER 'user1'@'localhost' IDENTIFIED BY 'password123';
 -- 默认使用 caching_sha2_password 插件
```


---


### **限制 GRANT 语句功能**

> 引入 GRANT OPTION FOR 子句，控制用户是否可转授权限。

👉 示例：


```plain text
GRANT SELECT ON db.* TO 'user1'@'localhost' WITH GRANT OPTION;
 -- user1 可以把 SELECT 权限授予他人
 
 GRANT SELECT ON db.* TO 'user2'@'localhost' WITH GRANT OPTION FOR 'user1'@'localhost';
 -- user2 只能转授 user1 的权限（更细粒度控制）
```


---


### **PASSWORD() 函数弃用**

> PASSWORD() 函数被标记为废弃，推荐改用 ALTER USER ... IDENTIFIED BY。
>
> 👉 示例：
>
>
> ❌ 不推荐：
>
>

```plain text
SET PASSWORD = PASSWORD('newpass');
```


✅ 推荐：


```plain text
ALTER USER 'root'@'localhost' IDENTIFIED BY 'newpass';
```


---


### **密码到期更换策略**

> 支持设置密码过期时间，强制用户定期修改密码。
>
> 👉 示例：
>
>

```plain text
ALTER USER 'user1'@'localhost' PASSWORD EXPIRE INTERVAL 90 DAY;
 -- 90天后密码过期，登录时必须重设
 
 -- 全局默认：
 SET GLOBAL default_password_lifetime = 180;
```


---


### **12.4.5 限制密码重复使用**

> 可配置禁止用户重复使用最近 N 次用过的密码。
>
> 👉 示例：
>
>

```plain text
-- 设置全局禁止重复使用最近 5 次密码
 SET GLOBAL password_history = 5;
 SET GLOBAL password_reuse_interval = 5;
 
 -- 或对特定用户：
 ALTER USER 'user1'@'localhost' PASSWORD HISTORY 3;
```


---


### **管理角色**

> 支持创建、分配、撤销角色，简化权限管理。

👉 示例：


```plain text
-- 创建角色
 CREATE ROLE 'developer', 'analyst';
 
 -- 授予权限给角色
 GRANT SELECT, INSERT ON db.* TO 'developer';
 
 -- 分配角色给用户
 GRANT 'developer' TO 'user1'@'localhost';
 
 -- 启用角色（登录后）
 SET ROLE 'developer';
 
 -- 撤销角色
 REVOKE 'developer' FROM 'user1'@'localhost';
```

