import{Q as h,c as _,g as l,i as t,H as C,R as b,F as n,j as u,f as i,l as d,t as c,C as v}from"./ddb2108d.js";import"https://unpkg.com/@waline/client@v2/dist/waline.mjs";const g={class:"main-container"},x={class:"left-nav"},F={class:"search-section"},w={class:"nav-tabs"},B=["onClick"],D={class:"content-area"},M={class:"filter-bar"},L={class:"filter-buttons"},S=["onClick"],k={class:"music-grid"},z={class:"cover-wrapper"},T=["src"],A={class:"play-count"},E={class:"info-wrapper"},K={class:"title"},R={class:"subtitle"},V={class:"creator"},N={__name:"Music",setup(G){const f=[{label:"推荐",value:"recommend"},{label:"我的歌单",value:"playlist"},{label:"排行榜",value:"rank"},{label:"歌手",value:"artist"},{label:"最新音乐",value:"new"}],p=["默认","最新","最热"],a=h({searchKeyword:"",activeTab:"recommend",activeFilter:"默认",musicList:[{cover:"https://dummyimage.com/600x400/67c23a/fff",title:"夏天的风",subtitle:"经典回忆杀",creator:"周杰伦",playCount:"123.4万"},{cover:"https://dummyimage.com/600x400/409eff/fff",title:"夜曲",subtitle:"暗黑系旋律",creator:"Taylor Swift",playCount:"89.2万"},{cover:"https://dummyimage.com/600x400/409eff/fff",title:"夜曲",subtitle:"暗黑系旋律",creator:"Taylor Swift",playCount:"89.2万"},{cover:"https://dummyimage.com/600x400/FFB6C1/fff",title:"轻快英文歌：轻烟漫袭热歌BGM",subtitle:"酷我音乐 | 前线之旅",creator:"酷我专区小编",playCount:"22.9万"},{cover:"https://dummyimage.com/600x400/87CEEB/fff",title:"抖音霸榜音频：穿梭于潮流前线之旅",subtitle:"烂尾工程 | 30+精选",creator:"梦侍予桓H",playCount:"5.5万"},{cover:"https://dummyimage.com/600x400/98FB98/fff",title:"2024年9月抖音热歌精选",subtitle:"DJ热歌 | 36首",creator:"酷我音乐",playCount:"12.9万"},{cover:"https://dummyimage.com/600x400/DDA0DD/fff",title:"氛围感BGM：光影之间，定格流年",subtitle:"今芬_ | 影视原声",creator:"妈呀又要去学教学了_在线",playCount:"7.1万"},{cover:"https://dummyimage.com/600x400/FFA07A/fff",title:"「升调变速」听悲伤的情歌，看离别的雨",subtitle:"升调特效 | 45首",creator:"酷我专区小编",playCount:"6.3万"},{cover:"https://dummyimage.com/600x400/778899/fff",title:"2024年8月抖音热歌精选",subtitle:"月度TOP50 | 16首",creator:"早春不过一颗树",playCount:"75.5万"},{cover:"https://dummyimage.com/600x400/FF6347/fff",title:"2024年8月DJ热歌精选",subtitle:"夜店热单 | 24首",creator:"MyOnly",playCount:"22万"},{cover:"https://dummyimage.com/600x400/2E8B57/fff",title:"怀旧金曲500首：旧梦再现，故人已去",subtitle:"80's金曲合集",creator:"玫柔r",playCount:"24.5万"},{cover:"https://dummyimage.com/600x400/9370DB/fff",title:"耳机避风港：来场极致的心动作战",subtitle:"沉浸式体验 | 18首",creator:"沥儿",playCount:"22.3万"},{cover:"https://dummyimage.com/600x400/FFD700/fff",title:"变装卡点 | 一键get抖音潮流前线",subtitle:"踩点教学 | 39首",creator:"酷我音乐",playCount:"12.6万"},{cover:"https://dummyimage.com/600x400/00CED1/fff",title:"解压踩点 | 低频律动，灵魂共振",subtitle:"ASMR音效 | 23首",creator:"婉枫、张朕",playCount:"20.3万"},{cover:"https://dummyimage.com/600x400/FF69B4/fff",title:"抖音神级曲：破茧成蝶的氛围感浪漫",subtitle:"影视原声 | 548首",creator:"LRC音乐",playCount:"75.5万"},{cover:"https://dummyimage.com/600x400/FF69B4/fff",title:"抖音神级曲：破茧成蝶的氛围感浪漫",subtitle:"影视原声 | 548首",creator:"LRC音乐",playCount:"75.5万"}]}),y=_(()=>a.musicList.filter(o=>o.title.toLowerCase().includes(a.searchKeyword.toLowerCase())||o.creator.toLowerCase().includes(a.searchKeyword.toLowerCase())).sort((o,s)=>a.activeFilter==="最新"?new Date(s.date)-new Date(o.date):a.activeFilter==="最热"?m(s.playCount)-m(o.playCount):0));function m(o){const s=parseFloat(o);return o.includes("万")?s*1e4:s}return(o,s)=>(i(),l("div",g,[t("div",x,[t("div",F,[C(t("input",{"onUpdate:modelValue":s[0]||(s[0]=e=>a.searchKeyword=e),placeholder:"Search for something...",class:"nav-search"},null,512),[[b,a.searchKeyword]]),s[1]||(s[1]=t("svg",{class:"search-icon",viewBox:"0 0 1024 1024"},[t("path",{d:"M909.6 854.5L649.9 594.8C688.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.8-23.8 182.7-66.9l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM412 640c-126.5 0-230-103.5-230-230s103.5-230 230-230 230 103.5 230 230-103.5 230-230 230z"})],-1))]),t("div",w,[(i(),l(n,null,u(f,e=>t("div",{key:e.value,class:d(["tab-item",{active:a.activeTab===e.value}]),onClick:r=>a.activeTab=e.value},c(e.label),11,B)),64))])]),t("div",D,[t("div",M,[t("div",L,[(i(),l(n,null,u(p,e=>t("button",{key:e,class:d(["filter-btn",{active:a.activeFilter===e}]),onClick:r=>a.activeFilter=e},c(e),11,S)),64))])]),t("div",k,[(i(!0),l(n,null,u(y.value,(e,r)=>(i(),l("div",{key:r,class:"music-card"},[t("div",z,[t("img",{src:e.cover,class:"cover-image"},null,8,T),t("div",A,[s[2]||(s[2]=t("svg",{class:"play-icon",viewBox:"0 0 1024 1024"},[t("path",{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}),t("path",{d:"M719.4 499.1l-296.1-215c-10.6-7.7-25.7-.5-25.7 12.6v430c0 13.1 15.1 20.3 25.7 12.6l296.1-215c8.1-5.9 8.1-18.9 0-24.8z"})],-1)),v(" "+c(e.playCount),1)])]),t("div",E,[t("h3",K,c(e.title),1),t("div",R,c(e.subtitle),1),t("div",V,[s[3]||(s[3]=t("svg",{class:"user-icon",viewBox:"0 0 1024 1024"},[t("path",{d:"M858.5 763.6a374 374 0 0 0-80.6-119.5 375.63 375.63 0 0 0-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 0 0-80.6 119.5A371.7 371.7 0 0 0 136 901.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 0 0 8-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"})],-1)),v(" "+c(e.creator),1)])])]))),128))])])]))}};export{N as default};
