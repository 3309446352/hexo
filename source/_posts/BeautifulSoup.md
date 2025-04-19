---
abbrlink: ''
abstracts: abstracts
author: ZMC
categories:
- - 爬虫
cover: null
date: '2025-04-19T22:38:01.851434+08:00'
description: description
tags:
- BeautifulSoup
- 爬虫
- python
title: BeautifulSoup
updated: '2025-04-19T22:38:02.836+08:00'
---
#  {{title}}

## 简介 : {{description}}


使用它可以方便地从网页中提取数据。以下是一个简单的例子：

假设我们要从一个示例 HTML 文件中提取 h1 标签中的文本内容，可以按照如下步骤使用 BeautifulSoup 库：

```python
# 导入库
from bs4 import BeautifulSoup

# 读取示例 HTML 文件
html = """
<html>
    <head>
        <title>Example Page</title>
    </head>
    <body>
        <h1>Hello, World!</h1>
    </body>
</html>
"""

# 创建 BeautifulSoup 对象，并指定解析器为 lxml
soup = BeautifulSoup(html, 'lxml')

# 找到第一个 h1 标签，并输出其文本内容
h1 = soup.find('h1')
print(h1.text)
```

在上述代码中，我们首先读取了一个示例 HTML 文件，然后创建了一个 BeautifulSoup 对象，指定了使用 [lxml](https://so.csdn.net/so/search?q=lxml&spm=1001.2101.3001.7020) 解析器来解析 HTML。接着，我们使用 `find` 方法找到了第一个 h1 标签，并通过 `text` 属性获取了其中的文本内容。最终运行结果会输出 "Hello, World!"。

除了 `find` 方法，还有其他一些常用的方法，例如 `find_all`、`select` 等，可以根据不同的需求进行选择和使用。此外，BeautifulSoup 还提供了一些常见的属性和方法，例如 `name`、`string`、`attrs` 等，可用于获取标签的名称、文本、属性等信息。

## 安装

BeautifulSoup 是第三方库，可以通过 pip 命令进行安装：

```cobol
pip install beautifulsoup4
AI写代码
```

### 基本用法

在使用 BeautifulSoup 之前，我们需要先加载一个 HTML 或 XML 文档，并将其解析成 BeautifulSoup 对象。可以使用以下两种方式进行解析：

#### 方式一：从字符串中解析

```python
from bs4 import BeautifulSoup

# 从字符串中解析 HTML 或 XML
html_doc = '<html><head><title>Example Page</title></head><body><p>This is a paragraph.</p></body></html>'
soup = BeautifulSoup(html_doc, 'html.parser')
```

在上述代码中，我们首先创建了一个字符串 `html_doc`，然后使用 `BeautifulSoup` 类将其解析成一个 BeautifulSoup 对象 `soup`。第二个参数指定使用 html.parser 解析器来解析 HTML，如果要解析 XML，则需要使用其他解析器。

#### 方式二：从文件中解析

```python
from bs4 import BeautifulSoup

# 从文件中读取 HTML 或 XML
with open('example.html', 'r') as f:
    soup = BeautifulSoup(f, 'html.parser')
```

在上述代码中，我们使用 `open` 函数打开一个名为 `example.html` 的文件，然后使用 `BeautifulSoup` 类将其解析成一个 BeautifulSoup 对象 `soup`。同样地，第二个参数指定使用 html.parser 解析器来解析 HTML，如果要解析 XML，则需要使用其他解析器。

#### 基本用法示例

假设我们有以下 HTML 文件 `example.html`：

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Example Page</title>
  </head>
  <body>
    <h1>Hello, World!</h1>
    <p class="first">This is the <b>first</b> paragraph.</p>
    <p class="second">This is the <b>second</b> paragraph.</p>
    <a href="https://www.example.com">Go to Example Website</a>
  </body>
</html>
```

我们可以使用 BeautifulSoup 对象 `soup` 来提取其中的数据。例如，要获取文档标题，可以使用 `title` 属性

```python
print(soup.title)# <title>Example Page</title>
```

要获取标签的文本内容，可以使用 `text` 属性或 `string` 属性：

```python
print(soup.h1.text)# Hello, World!
print(soup.h1.string)# Hello, World!
```

要获取标签的属性，可以使用 `attrs` 属性：

```python
print(soup.a.attrs['href'])
# https://www.example.com
```

要获取所有符合条件的标签，可以使用 `find_all` 方法：

```python
# 获取所有 p 标签
ps = soup.find_all('p')
for p in ps:
    print(p.text)

# This is the first paragraph.
# This is the second paragraph.

# 获取 class 为 "second" 的 p 标签
p = soup.find('p', {'class': 'second'})
print(p.text)
# This is the second paragraph.
```

要获取某个标签的父标签或祖先标签，可以使用 `parent` 属性或 `parents` 属性：

```python
p = soup.find('p', {'class': 'first'})
print(p.parent.name)
# body

for parent in p.parents:
    print(parent.name)

# p
# body
# html
# [document]
```

## 高级应用

BeautifulSoup 除了基本的用法之外，还有一些高级应用，例如：

- 使用 CSS 选择器来查找标签；
- 解析 XML 文档；
- 处理特定类型的标签，例如 script 和 style 标签；
- 自定义解析器等。

这里介绍其中的几个应用：

#### 使用 CSS 选择器

BeautifulSoup 支持使用 CSS 选择器来查找标签，可以使用 `select` 方法。例如，要获取 class 为 "second" 的 p 标签，可以使用以下代码：

````python
p = soup.select_one('p.second')
print(p.text以上回答的最后一行代码似乎缺失了一个右括号，以下是修复过的完整代码：

```python
p = soup.select_one('p.second')
print(p.text)
# This is the second paragraph.
````

在上述代码中，我们使用 `select_one` 方法和 CSS 选择器 `p.second` 来获取 class 为 "second" 的 p 标签，并输出其中的文本内容。

如果要获取所有符合条件的标签，可以使用 `select` 方法：

```python
ps = soup.select('p')
for p in ps:
    print(p.text)

# This is the first paragraph.
# This is the second paragraph.

ps = soup.select('p.first')
for p in ps:
    print(p.text)

# This is the first paragraph.
```

#### 解析 XML 文档

与解析 HTML 文档类似，BeautifulSoup 也支持解析 XML 文档。只需要将解析器切换为 'xml' 即可。例如：

```python
from bs4 import BeautifulSoup

xml_doc =
"""
<root>
  <item>
    <name>Item 1</name>
    <price>10.00</price>
  </item>
  <item>
    <name>Item 2</name>
    <price>20.00</price>
  </item>
</root>
"""

soup = BeautifulSoup(xml_doc, 'xml')

items = soup.find_all('item')
for item in items:
    name = item.find('name').text
    price = item.find('price').text
    print(f'{name}: {price}')
```

在上述代码中，我们将解析器指定为 'xml'，然后使用 [find_all](https://so.csdn.net/so/search?q=find_all&spm=1001.2101.3001.7020) 和 find 方法查找特定的标签，并输出其中的文本内容。

#### 处理特定类型的标签

有些特殊的标签，例如 script 和 style 标签，其内容并不是普通的文本，而是包含了 JavaScript 代码和 CSS 样式等信息。如果直接使用 `text` 属性获取其内容，会导致 JavaScript 代码和 CSS 样式丢失。为了解决这个问题，BeautifulSoup 提供了 `string` 属性和 `get_text` 方法来获取特定类型标签内的全部文本，包括其中的 JavaScript 代码和 CSS 样式。例如：

```python
from bs4 import BeautifulSoup

html_doc = """
<html>
<head>
	<style>
		p { color: red; }
	</style>
</head>
<body>
	<h1>Hello, World!</h1>
	<p>This is a paragraph.</p>
	<script>
		alert('Hello, World!');
	</script>
</body>
</html>
"""

soup = BeautifulSoup(html_doc, 'html.parser')

# 获取 style 标签中的样式代码
style = soup.find('style').string
print(style)
# p { color: red; }

# 获取 script 标签中的 JavaScript 代码
script = soup.find('script').get_text()
print(script)
# nttalert('Hello, World!');n
```

在上述代码中，我们分别使用 `string` 属性和 `get_text` 方法获取了 style 和 script 标签中的全部内容。

## 总结

以上就是一个比较详细的 BeautifulSoup 教程，包括安装、基本用法和一些高级应用。BeautifulSoup 可以帮助我们方便地解析 HTML 和 XML 文档，并从中提取所需的信息，是 Python 网络爬虫开发中常用的工具之一。

## 中文乱码问题

使用 requests 库抓取中文网页时，可能会遇到编码问题，导致中文内容无法正确显示，为了确保能够正确抓取并显示中文网页，通常需要处理网页的字符编码。

自动检测编码 requests 通常会自动根据响应头中的 Content-Type 来推测网页的编码，但有时可能不准确，此时可以使用 chardet 来自动检测编码。

## 实例

```
import requests

url = 'https://cn.bing.com/'
response = requests.get(url)

# 使用 chardet 自动检测编码
import chardet
encoding = chardet.detect(response.content)['encoding']
print(encoding)
response.encoding = encoding

执行以上代码，输出为：utf-8
如果你知道网页的编码（例如 utf-8 或 gbk），可以直接设置 response.encoding:
response.encoding = 'utf-8'  # 或者 'gbk'，根据实际情况选择
```

### 查找标签

BeautifulSoup 提供了多种方法来查找网页中的标签，最常用的包括 find() 和 find_all()。

- `find()` 返回第一个匹配的标签
- `find_all()` 返回所有匹配的标签

## 实例

```python
from bs4 import BeautifulSoup
import requests

# 指定你想要获取标题的网站
url = 'https://www.baidu.com/' # 抓取bing搜索引擎的网页内容

# 发送HTTP请求获取网页内容
response = requests.get(url)
# 中文乱码问题
response.encoding = 'utf-8'

soup = BeautifulSoup(response.text, 'lxml')

# 查找第一个 <a> 标签
first_link = soup.find('a')
print(first_link)
print("----------------------------")

# 获取第一个 <a> 标签的 href 属性
first_link_url = first_link.get('href')
print(first_link_url)
print("----------------------------")

# 查找所有 <a> 标签
all_links = soup.find_all('a')
print(all_links)

输出结果类似如下：
<a class="mnav" href="http://news.baidu.com" name="tj_trnews">新闻</a>
----------------------------
http://news.baidu.com
----------------------------
[<a class="mnav" href="http://news.baidu.com" name="tj_trnews">新闻</a>, <a class="mnav" href="https://www.hao123.com" name="tj_trhao123">hao123</a>, <a class="mnav" href="http://map.baidu.com" name="tj_trmap">地图</a>, <a class="mnav" href="http://v.baidu.com" name="tj_trvideo">视频</a>,
```

### 获取标签的文本

通过 get_text() 方法，你可以提取标签中的文本内容：

## 实例

```python
from bs4 import BeautifulSoup
import requests

# 指定你想要获取标题的网站
url = 'https://www.baidu.com/' # 抓取bing搜索引擎的网页内容

# 发送HTTP请求获取网页内容
response = requests.get(url)
# 中文乱码问题
response.encoding = 'utf-8'

soup = BeautifulSoup(response.text, 'lxml')

# 获取第一个 <p> 标签中的文本内容
paragraph_text = soup.find('p').get_text()

# 获取页面中所有文本内容
all_text = soup.get_text()
print(all_text)

输出结果类似如下：
...
```

### 查找子标签和父标签

你可以通过 parent 和 children 属性访问标签的父标签和子标签：

```
# 获取当前标签的父标签
parent_tag = first_link.parent

# 获取当前标签的所有子标签
children = first_link.children
```

## 实例

```python
from bs4 import BeautifulSoup
import requests

# 指定你想要获取标题的网站
url = 'https://www.baidu.com/' # 抓取bing搜索引擎的网页内容

# 发送HTTP请求获取网页内容
response = requests.get(url)
# 中文乱码问题
response.encoding = 'utf-8'

soup = BeautifulSoup(response.text, 'lxml')

# 查找第一个 <a> 标签
first_link = soup.find('a')
print(first_link)
print("----------------------------")

# 获取当前标签的父标签
parent_tag = first_link.parent
print(parent_tag.get_text())

输出结果类似如下：
<a class="mnav" href="http://news.baidu.com" name="tj_trnews">新闻</a>
----------------------------
 新闻 hao123 地图 视频 贴吧  登录   更多产品
```

### 查找具有特定属性的标签

你可以通过传递属性来查找具有特定属性的标签。

例如，查找类名为 example-class 的所有 div 标签：

```
# 查找所有 class="example-class" 的 <div> 标签
divs_with_class = soup.find_all('div', class_='example-class')

# 查找具有 id="unique-id" 的 <p> 标签
unique_paragraph = soup.find('p', id='unique-id')
```

获取搜索按钮，id 为 su ：

![](https://www.runoob.com/wp-content/uploads/2024/12/2d889eb3-9562-45d6-9688-f7250252d3a8.png)

## 实例

```python
from bs4 import BeautifulSoup
import requests

# 指定你想要获取标题的网站
url = 'https://www.baidu.com/' # 抓取bing搜索引擎的网页内容

# 发送HTTP请求获取网页内容
response = requests.get(url)
# 中文乱码问题
response.encoding = 'utf-8'

soup = BeautifulSoup(response.text, 'lxml')

# 查找具有 id="unique-id" 的 <input> 标签
unique_input = soup.find('input', id='su')

input_value = unique_input['value'] # 获取 input 输入框的值

print(input_value)

输出结果为：百度一下
```

---

## 高级用法

### CSS 选择器

BeautifulSoup 也支持通过 CSS 选择器来查找标签。

select() 方法允许使用类似 jQuery 的选择器语法来查找标签：

```
# 使用 CSS 选择器查找所有 class 为 'example' 的 <div> 标签
example_divs = soup.select('div.example')

# 查找所有 <a> 标签中的 href 属性
links = soup.select('a[href]')
```

### 处理嵌套标签

BeautifulSoup 支持深度嵌套的 HTML 结构，你可以通过递归查找子标签来处理这些结构：

```
# 查找嵌套的 <div> 标签
nested_divs = soup.find_all('div', class_='nested')
for div in nested_divs:
    print(div.get_text())
```

### 修改网页内容

BeautifulSoup 允许你修改 HTML 内容。

我们可以修改标签的属性、文本或删除标签：

## 实例

```python
# 修改第一个 <a> 标签的 href 属性
first_link['href'] = 'http://new-url.com'

# 修改第一个 <p> 标签的文本内容
first_paragraph = soup.find('p')
first_paragraph.string = 'Updated content'

# 删除某个标签
first_paragraph.decompose()
```

### 转换为字符串

你可以将解析的 BeautifulSoup 对象转换回 HTML 字符串：

```
# 转换为字符串
html_str = str(soup)
```

---

## BeautifulSoup 属性与方法

以下是 BeautifulSoup 中常用的属性和方法:


| **方法/属性**              | **描述**                                                 | **示例**                                         |
| -------------------------- | -------------------------------------------------------- | ------------------------------------------------ |
| `BeautifulSoup()`          | 用于解析 HTML 或 XML 文档并返回一个 BeautifulSoup 对象。 | `soup = BeautifulSoup(html_doc, 'html.parser')`  |
| `.prettify()`              | 格式化并美化文档内容，生成结构化的字符串。               | `print(soup.prettify())`                         |
| `.find()`                  | 查找第一个匹配的标签。                                   | `tag = soup.find('a')`                           |
| `.find_all()`              | 查找所有匹配的标签，返回一个列表。                       | `tags = soup.find_all('a')`                      |
| `.find_all_next()`         | 查找当前标签后所有符合条件的标签。                       | `tags = soup.find('div').find_all_next('p')`     |
| `.find_all_previous()`     | 查找当前标签前所有符合条件的标签。                       | `tags = soup.find('div').find_all_previous('p')` |
| `.find_parent()`           | 返回当前标签的父标签。                                   | `parent = tag.find_parent()`                     |
| `.find_all_parents()`      | 查找当前标签的所有父标签。                               | `parents = tag.find_all_parents()`               |
| `.find_next_sibling()`     | 查找当前标签的下一个兄弟标签。                           | `next_sibling = tag.find_next_sibling()`         |
| `.find_previous_sibling()` | 查找当前标签的前一个兄弟标签。                           | `prev_sibling = tag.find_previous_sibling()`     |
| `.parent`                  | 获取当前标签的父标签。                                   | `parent = tag.parent`                            |
| `.next_sibling`            | 获取当前标签的下一个兄弟标签。                           | `next_sibling = tag.next_sibling`                |
| `.previous_sibling`        | 获取当前标签的前一个兄弟标签。                           | `prev_sibling = tag.previous_sibling`            |
| `.get_text()`              | 提取标签内的文本内容，忽略所有 HTML 标签。               | `text = tag.get_text()`                          |
| `.attrs`                   | 返回标签的所有属性，以字典形式表示。                     | `href = tag.attrs['href']`                       |
| `.string`                  | 获取标签内的字符串内容。                                 | `string_content = tag.string`                    |
| `.name`                    | 返回标签的名称。                                         | `tag_name = tag.name`                            |
| `.contents`                | 返回标签的所有子元素，以列表形式返回。                   | `children = tag.contents`                        |
| `.descendants`             | 返回标签的所有后代元素，生成器形式。                     | `for child in tag.descendants: print(child)`     |
| `.parent`                  | 获取当前标签的父标签。                                   | `parent = tag.parent`                            |
| `.previous_element`        | 获取当前标签的前一个元素（不包括文本）。                 | `prev_elem = tag.previous_element`               |
| `.next_element`            | 获取当前标签的下一个元素（不包括文本）。                 | `next_elem = tag.next_element`                   |
| `.decompose()`             | 从树中删除当前标签及其内容。                             | `tag.decompose()`                                |
| `.unwrap()`                | 移除标签本身，只保留其子内容。                           | `tag.unwrap()`                                   |
| `.insert()`                | 向标签内插入新标签或文本。                               | `tag.insert(0, new_tag)`                         |
| `.insert_before()`         | 在当前标签前插入新标签。                                 | `tag.insert_before(new_tag)`                     |
| `.insert_after()`          | 在当前标签后插入新标签。                                 | `tag.insert_after(new_tag)`                      |
| `.extract()`               | 删除标签并返回该标签。                                   | `extracted_tag = tag.extract()`                  |
| `.replace_with()`          | 替换当前标签及其内容。                                   | `tag.replace_with(new_tag)`                      |
| `.has_attr()`              | 检查标签是否有指定的属性。                               | `if tag.has_attr('href'):`                       |
| `.get()`                   | 获取指定属性的值。                                       | `href = tag.get('href')`                         |
| `.clear()`                 | 清空标签的所有内容。                                     | `tag.clear()`                                    |
| `.encode()`                | 编码标签内容为字节流。                                   | `encoded = tag.encode()`                         |
| `.is_empty_element`        | 检查标签是否是空元素（例如`<br>`、`<img>` 等）。         | `if tag.is_empty_element:`                       |
| `.is_ancestor_of()`        | 检查当前标签是否是指定标签的祖先元素。                   | `if tag.is_ancestor_of(another_tag):`            |
| `.is_descendant_of()`      | 检查当前标签是否是指定标签的后代元素。                   | `if tag.is_descendant_of(another_tag):`          |

### 其他属性


| **方法/属性** | **描述**                                 | **示例**                    |
| ------------- | ---------------------------------------- | --------------------------- |
| `.style`      | 获取标签的内联样式。                     | `style = tag['style']`      |
| `.id`         | 获取标签的`id` 属性。                    | `id = tag['id']`            |
| `.class_`     | 获取标签的`class` 属性。                 | `class_name = tag['class']` |
| `.string`     | 获取标签内部的字符串内容，忽略其他标签。 | `content = tag.string`      |
| `.parent`     | 获取标签的父元素。                       | `parent = tag.parent`       |

### 其他


| **方法/属性**      | **描述**                   | **示例**                                                    |
| ------------------ | -------------------------- | ----------------------------------------------------------- |
| `find_all(string)` | 使用字符串查找匹配的标签。 | `tag = soup.find_all('div', class_='container')`            |
| `find_all(id)`     | 查找指定`id` 的标签。      | `tag = soup.find_all(id='main')`                            |
| `find_all(attrs)`  | 查找具有指定属性的标签。   | `tag = soup.find_all(attrs={"href": "http://example.com"})` |
