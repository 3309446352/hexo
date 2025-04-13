<template>
  <div class="layout hide-aside" id="content-inner">
    <div id="page" class="thumbnail_canvas">
      <div id="todolist-main">
        <div id="todolist-left-container">
          <div id="todolist-left">
            <div class="todolist-item">
              <h3 class="todolist-title">参加的比赛</h3>
              <ul class="todolist-ul">
                <li>
                  <i style="font-size: 19px; margin-right: 5px" class="haofont hao-icon-yuan">
                  </i>第十四届蓝桥杯全国软件和信息技术专业人才大赛（个人赛）省赛
                  4月1号 省级三等奖
                </li>

                <li>
                  <i style="font-size: 19px; margin-right: 5px" class="haofont hao-icon-yuan">
                  </i>2023年睿抗机器人开发者大赛（RAICOM）CAIP编程设计赛道
                  “编程技能赛”省赛 7月15号 省级二等奖
                </li>

                <li>
                  <i style="font-size: 19px; margin-right: 5px" class="haofont hao-icon-yuan">
                  </i>2023嵌入式芯片与系统设计竞赛 7月29号 省级二等奖
                </li>

                <li>
                  <i style="font-size: 19px; margin-right: 5px" class="haofont hao-icon-yuan">
                  </i>2023年睿抗机器人开发者大赛（RAICOM）CAIP编程设计赛道
                  “编程技能赛”国赛 8月18号 国家级三等奖
                </li>

                <li>
                  <i style="font-size: 19px; margin-right: 5px" class="haofont hao-icon-yuan">
                  </i>2023中国机器人大赛暨RoboCup机器人世界杯中国赛救援仿真
                  10月13号 福建晋江 全国亚军（全国一等奖）
                </li>
              </ul>
            </div>
          </div>

          <div id="todolist-left">
            <div class="todolist-item">
              <h3 class="todolist-title">今年计划</h3>
              <ul class="todolist-ul">
                <li>
                  <i style="font-size: 19px; margin-right: 5px" class="haofont hao-icon-yuan">
                  </i>背JAVA面试八股文
                </li>

                <li>
                  <i style="font-size: 19px; margin-right: 5px" class="haofont hao-icon-yuan">
                  </i>大三期间参加实习
                </li>

                <li class="achieve">
                  <i style="font-size: 19px; margin-right: 5px" class="haofont hao-icon-check-circle">
                  </i>拥有至少一个第一作者身份的开源项目
                </li>

                <li>
                  <i style="font-size: 19px; margin-right: 5px" class="haofont hao-icon-yuan">
                  </i>结识更多技术大佬
                </li>

                <li>
                  <i style="font-size: 19px; margin-right: 5px" class="haofont hao-icon-yuan">
                  </i>编写更多技术文章
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div id="todolist-right-container">
          <div id="todolist-right">
            <div class="todolist-item">
              <h3 class="todolist-title">Halo相关开发</h3>
              <ul>
                <li class="achieve">
                  <i style="font-size: 19px; margin-right: 5px" class="haofont hao-icon-check-circle">
                  </i>持续优化halo-theme-hao主题
                </li>

                <li class="achieve">
                  <i style="font-size: 19px; margin-right: 5px" class="haofont hao-icon-check-circle">
                  </i>编写一个插件适配追番页
                </li>

                <li class="achieve">
                  <i style="font-size: 19px; margin-right: 5px" class="haofont hao-icon-check-circle">
                  </i>以第一作者身份开发一款Halo博客的主题 Halo-Theme-Aurora
                </li>
              </ul>
            </div>
          </div>

          <div id="todolist-right">
            <div class="todolist-item">
              <h3 class="todolist-title">学习的课程</h3>
              <ul>
                <li class="achieve">
                  <i style="font-size: 19px; margin-right: 5px" class="haofont hao-icon-check-circle">
                  </i>数据结构
                </li>

                <li class="achieve">
                  <i style="font-size: 19px; margin-right: 5px" class="haofont hao-icon-check-circle">
                  </i>算法设计与分析
                </li>

                <li class="achieve">
                  <i style="font-size: 19px; margin-right: 5px" class="haofont hao-icon-check-circle">
                  </i>计算机组成原理
                </li>

                <li class="achieve">
                  <i style="font-size: 19px; margin-right: 5px" class="haofont hao-icon-check-circle">
                  </i>计算机网络
                </li>

                <li class="achieve">
                  <i style="font-size: 19px; margin-right: 5px" class="haofont hao-icon-check-circle">
                  </i>操作系统
                </li>

                <li class="achieve">
                  <i style="font-size: 19px; margin-right: 5px" class="haofont hao-icon-check-circle">
                  </i>编译原理
                </li>

                <li>
                  <i style="font-size: 19px; margin-right: 5px" class="haofont hao-icon-yuan">
                  </i>软件工程
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>
<style lang="scss" scoped>
#twikoo .tk-tag-green {
  background-color: #3b70fc;
  border: none;
  border-radius: 4px;
  color: #fff;
}

:root {
  --todo-border: 1px solid #f7a796;
}

[data-theme='dark'] {
  --todo-border: 1px solid #51908b;
}

.todolist-item i.haofont {
  display: var(--fa-display, inline-block);
}

#todolist-main {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 16px 0 10px;
}

#todolist-main li {
  list-style: none;
  font-size: 17px;
}

#todolist-main ul {
  margin: 0;
  padding: 0;
}

#todolist-left-container,
#todolist-right-container {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 50%;
}

#todolist-left {
  width: 100%;
  padding: 0 8px 0 0;
}

#todolist-right {
  width: 100%;
  padding: 0 0 0 8px;
}

.todolist-item {
  position: relative;
  background: #fae4df;
  border-radius: 12px;
  padding: 10px 1rem 1.2rem;
  border: 2px dashed #f7a796;
  margin-bottom: 1rem;
}

@media screen and (max-width: 768px) {

  #todolist-left-container,
  #todolist-right-container {
    width: 100%;
  }

  #todolist-left,
  #todolist-right {
    padding: 0 0 0 0;
  }
}

[data-theme='dark'] .todolist-item {
  background: #242424;
  border: 2px dashed #51908b;
}

h3.todolist-title {
  margin: 0 !important;
  border-bottom: var(--todo-border);
}

.todolist-item li {
  margin: 0 !important;
  border-bottom: var(--todo-border);
}

.todolist-item li::marker {
  content: none;
}

li.achieve {
  opacity: 0.8;
  text-decoration: line-through;
}
</style>
