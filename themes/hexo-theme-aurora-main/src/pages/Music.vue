<template>
  <div class="main-container">
    <!-- 左侧导航栏 -->
    <div class="left-nav">
      <div class="search-section">
        <input
          v-model="state.searchKeyword"
          placeholder="Search for something..."
          class="nav-search"
        />
        <svg class="search-icon" viewBox="0 0 1024 1024">
          <path
            d="M909.6 854.5L649.9 594.8C688.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.8-23.8 182.7-66.9l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM412 640c-126.5 0-230-103.5-230-230s103.5-230 230-230 230 103.5 230 230-103.5 230-230 230z"
          />
        </svg>
      </div>

      <!-- 导航选项卡 -->
      <div class="nav-tabs">
        <div
          v-for="tab in tabs"
          :key="tab.value"
          class="tab-item"
          :class="{ active: state.activeTab === tab.value }"
          @click="state.activeTab = tab.value"
        >
          {{ tab.label }}
        </div>
      </div>
    </div>

    <!-- 右侧内容区域 -->
    <div class="content-area">
      <!-- 过滤栏 -->
      <div class="filter-bar">
        <div class="filter-buttons">
          <button
            v-for="filter in filters"
            :key="filter"
            class="filter-btn"
            :class="{ active: state.activeFilter === filter }"
            @click="state.activeFilter = filter"
          >
            {{ filter }}
          </button>
        </div>
      </div>

      <!-- 音乐卡片列表 -->
      <div class="music-grid">
        <div
          v-for="(item, index) in filteredList"
          :key="index"
          class="music-card"
        >
          <div class="cover-wrapper">
            <img :src="item.cover" class="cover-image" />
            <div class="play-count">
              <svg class="play-icon" viewBox="0 0 1024 1024">
                <path
                  d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
                />
                <path
                  d="M719.4 499.1l-296.1-215c-10.6-7.7-25.7-.5-25.7 12.6v430c0 13.1 15.1 20.3 25.7 12.6l296.1-215c8.1-5.9 8.1-18.9 0-24.8z"
                />
              </svg>
              {{ item.playCount }}
            </div>
          </div>

          <div class="info-wrapper">
            <h3 class="title">{{ item.title }}</h3>
            <div class="subtitle">{{ item.subtitle }}</div>
            <div class="creator">
              <svg class="user-icon" viewBox="0 0 1024 1024">
                <path
                  d="M858.5 763.6a374 374 0 0 0-80.6-119.5 375.63 375.63 0 0 0-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 0 0-80.6 119.5A371.7 371.7 0 0 0 136 901.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 0 0 8-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"
                />
              </svg>
              {{ item.creator }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, computed } from 'vue'

const tabs = [
  { label: '推荐', value: 'recommend' },
  { label: '我的歌单', value: 'playlist' },
  { label: '排行榜', value: 'rank' },
  { label: '歌手', value: 'artist' },
  { label: '最新音乐', value: 'new' }
]

const filters = ['默认', '最新', '最热']

const state = reactive({
  searchKeyword: '',
  activeTab: 'recommend',
  activeFilter: '默认',
  musicList: [
    {
      cover: 'https://dummyimage.com/600x400/67c23a/fff',
      title: '夏天的风',
      subtitle: '经典回忆杀',
      creator: '周杰伦',
      playCount: '123.4万'
    },
    {
      cover: 'https://dummyimage.com/600x400/409eff/fff',
      title: '夜曲',
      subtitle: '暗黑系旋律',
      creator: 'Taylor Swift',
      playCount: '89.2万'
    },
    {
      cover: 'https://dummyimage.com/600x400/409eff/fff',
      title: '夜曲',
      subtitle: '暗黑系旋律',
      creator: 'Taylor Swift',
      playCount: '89.2万'
    },
    {
      cover: 'https://dummyimage.com/600x400/FFB6C1/fff', // 粉色系封面
      title: '轻快英文歌：轻烟漫袭热歌BGM',
      subtitle: '酷我音乐 | 前线之旅',
      creator: '酷我专区小编',
      playCount: '22.9万'
    },
    {
      cover: 'https://dummyimage.com/600x400/87CEEB/fff', // 天蓝系封面
      title: '抖音霸榜音频：穿梭于潮流前线之旅',
      subtitle: '烂尾工程 | 30+精选',
      creator: '梦侍予桓H',
      playCount: '5.5万'
    },
    {
      cover: 'https://dummyimage.com/600x400/98FB98/fff', // 薄荷绿封面
      title: '2024年9月抖音热歌精选',
      subtitle: 'DJ热歌 | 36首',
      creator: '酷我音乐',
      playCount: '12.9万'
    },
    {
      cover: 'https://dummyimage.com/600x400/DDA0DD/fff', // 淡紫系封面
      title: '氛围感BGM：光影之间，定格流年',
      subtitle: '今芬_ | 影视原声',
      creator: '妈呀又要去学教学了_在线',
      playCount: '7.1万'
    },
    {
      cover: 'https://dummyimage.com/600x400/FFA07A/fff', // 橙红系封面
      title: '「升调变速」听悲伤的情歌，看离别的雨',
      subtitle: '升调特效 | 45首',
      creator: '酷我专区小编',
      playCount: '6.3万'
    },
    {
      cover: 'https://dummyimage.com/600x400/778899/fff', // 灰蓝系封面
      title: '2024年8月抖音热歌精选',
      subtitle: '月度TOP50 | 16首',
      creator: '早春不过一颗树',
      playCount: '75.5万'
    },
    {
      cover: 'https://dummyimage.com/600x400/FF6347/fff', // 番茄红封面
      title: '2024年8月DJ热歌精选',
      subtitle: '夜店热单 | 24首',
      creator: 'MyOnly',
      playCount: '22万'
    },
    {
      cover: 'https://dummyimage.com/600x400/2E8B57/fff', // 海绿色封面
      title: '怀旧金曲500首：旧梦再现，故人已去',
      subtitle: "80's金曲合集",
      creator: '玫柔r',
      playCount: '24.5万'
    },
    {
      cover: 'https://dummyimage.com/600x400/9370DB/fff', // 中紫色封面
      title: '耳机避风港：来场极致的心动作战',
      subtitle: '沉浸式体验 | 18首',
      creator: '沥儿',
      playCount: '22.3万'
    },
    {
      cover: 'https://dummyimage.com/600x400/FFD700/fff', // 金色系封面
      title: '变装卡点 | 一键get抖音潮流前线',
      subtitle: '踩点教学 | 39首',
      creator: '酷我音乐',
      playCount: '12.6万'
    },
    {
      cover: 'https://dummyimage.com/600x400/00CED1/fff', // 宝石蓝封面
      title: '解压踩点 | 低频律动，灵魂共振',
      subtitle: 'ASMR音效 | 23首',
      creator: '婉枫、张朕',
      playCount: '20.3万'
    },
    {
      cover: 'https://dummyimage.com/600x400/FF69B4/fff', // 亮粉系封面
      title: '抖音神级曲：破茧成蝶的氛围感浪漫',
      subtitle: '影视原声 | 548首',
      creator: 'LRC音乐',
      playCount: '75.5万'
    },
    {
      cover: 'https://dummyimage.com/600x400/FF69B4/fff', // 亮粉系封面
      title: '抖音神级曲：破茧成蝶的氛围感浪漫',
      subtitle: '影视原声 | 548首',
      creator: 'LRC音乐',
      playCount: '75.5万'
    }
    // 可继续添加更多测试数据...
  ]
})

const filteredList = computed(() => {
  return state.musicList
    .filter(
      item =>
        item.title.toLowerCase().includes(state.searchKeyword.toLowerCase()) ||
        item.creator.toLowerCase().includes(state.searchKeyword.toLowerCase())
    )
    .sort((a, b) => {
      if (state.activeFilter === '最新') {
        return new Date(b.date) - new Date(a.date)
      }
      if (state.activeFilter === '最热') {
        return convertPlayCount(b.playCount) - convertPlayCount(a.playCount)
      }
      return 0
    })
})

// 转换播放量数字
function convertPlayCount(playCount) {
  const num = parseFloat(playCount)
  return playCount.includes('万') ? num * 10000 : num
}
</script>
<script></script>
<style>
/* 完整的CSS样式 */
.main-container {
  display: flex;
  min-height: 100vh;
  background: #f5f7faa1;
  border-radius: 30px;
}

.left-nav {
  width: 160px;
  height: 100vh;
  padding: 20px 15px;
  background: white;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
}

.search-section {
  margin-bottom: 10px;
  position: relative;
}

.nav-search {
  width: 100%;
  height: 40px;
  padding: 0 30px 0 15px;
  border: none;
  border-radius: 18px;
  background: #f5f7fa;
  font-size: 14px;
}

.search-icon {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 18px;
  height: 18px;
  fill: #909399;
}

.nav-tabs {
  margin-top: 20px;
}

.tab-item {
  padding: 14px 24px;
  margin: 6px 0;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s;
  color: #303133;
  font-size: 14px;
}

.tab-item:hover {
  background: rgba(64, 158, 255, 0.08);
}

.tab-item.active {
  background: rgba(64, 158, 255, 0.1);
  color: #409eff;
  font-weight: 500;
}

.content-area {
  flex: 1;
  padding: 30px 40px;
}

.filter-buttons {
  display: flex;
  gap: 10px;
  margin-bottom: 30px;
}

.filter-btn {
  padding: 8px 20px;
  border: none;
  border-radius: 15px;
  background: #f0f2f5;
  color: #909399;
  cursor: pointer;
  transition: all 0.3s;
}

.filter-btn:hover {
  color: #409eff;
}

.filter-btn.active {
  background: #409eff;
  color: white;
  box-shadow: 0 2px 6px rgba(64, 158, 255, 0.3);
}

.music-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 20px;
}

.music-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s;
}

.music-card:hover {
  transform: translateY(-5px);
}

.cover-wrapper {
  position: relative;
  padding-top: 56.25%;
  background: #ebeef5;
}

.cover-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.play-count {
  position: absolute;
  top: 10px;
  right: 10px;
  color: white;
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 5px;
  background: rgba(0, 0, 0, 0.5);
  padding: 4px 10px;
  border-radius: 10px;
}

.play-icon {
  width: 14px;
  height: 14px;
  fill: white;
}

.info-wrapper {
  padding: 16px;
}

.title {
  margin: 0 0 8px;
  font-size: 15px;
  color: #303133;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.subtitle {
  font-size: 12px;
  color: #909399;
  margin-bottom: 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.creator {
  font-size: 12px;
  color: #a0a4a9;
  display: flex;
  align-items: center;
  gap: 6px;
}

.user-icon {
  width: 14px;
  height: 14px;
  fill: #a0a4a9;
}
</style>
