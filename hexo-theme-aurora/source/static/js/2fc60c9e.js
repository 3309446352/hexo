import{_ as d,g as h,i as a,f as w}from"./99708753.js";import"https://unpkg.com/@waline/client@v2/dist/waline.mjs";(function(){(function(){function b(){this.classList.add("bangumi-active");for(var s=this.siblings(),m=0;m<s.length;m++)s[m].classList.remove("bangumi-active");var l=this.id.replace("tab","item"),g=document.getElementById(l);g.classList.remove("bangumi-hide"),g.classList.add("bangumi-show"),s=document.getElementById(l).siblings();for(var t=0;t<s.length;t++)s[t].classList.remove("bangumi-show"),s[t].classList.add("bangumi-hide")}Element.prototype.siblings=function(){for(var s=[],m=this.parentNode.children,l=0;l<m.length;l++)m[l]!==this&&s.push(m[l]);return s};for(var e=document.getElementsByClassName("bangumi-tab"),u=0;u<e.length;u++)e[u].onclick=b,e[u].onclick.apply(e[u]);typeof pagenumsPre<"u"&&axios.get(new URL("../bangumis.json",window.location.href)).then(function(s){if(s.data){var m={wantWatch:s.data.wantWatch.slice(10).map(function(l){return ejs.render(ejsTemplate,{item:l,loading,metaColor,type})}).join(`
`),watching:s.data.watching.slice(10).map(function(l){return ejs.render(ejsTemplate,{item:l,loading,metaColor,type})}).join(`
`),watched:s.data.watched.slice(10).map(function(l){return ejs.render(ejsTemplate,{item:l,loading,metaColor,type})}).join(`
`)};document.querySelectorAll("#bangumi-item1>.bangumi-pagination")[0].insertAdjacentHTML("beforeBegin",m.wantWatch),document.querySelectorAll("#bangumi-item2>.bangumi-pagination")[0].insertAdjacentHTML("beforeBegin",m.watching),document.querySelectorAll("#bangumi-item3>.bangumi-pagination")[0].insertAdjacentHTML("beforeBegin",m.watched)}})})(),function(){var b=Math.ceil;function e(n,i){return`${n+1} / ${b(i.length/10==0?1:b(i.length/10))}`}function u(){const n=this.parentNode.siblings();g(n,0),this.parentNode.getElementsByClassName("bangumi-pagenum")[0].innerText=e(0,n)}function s(){const n=this.parentNode.siblings();let i=this.parentNode.getElementsByClassName("bangumi-pagenum")[0].innerText;i=i.substr(0,i.indexOf("/")-1),i=parseInt(i,10)-1,0<i&&i--,g(n,i),this.parentNode.getElementsByClassName("bangumi-pagenum")[0].innerText=e(i,n)}function m(){const n=this.parentNode.siblings();let i=this.parentNode.getElementsByClassName("bangumi-pagenum")[0].innerText;i=i.substr(0,i.indexOf("/")-1),i=parseInt(i,10)-1,i<b(n.length/10)-1&&i++,g(n,i),this.parentNode.getElementsByClassName("bangumi-pagenum")[0].innerText=e(i,n)}function l(){const n=this.parentNode.siblings();g(n,b(n.length/10)-1),this.parentNode.getElementsByClassName("bangumi-pagenum")[0].innerText=e(b(n.length/10)-1==-1?0:b(n.length/10)-1,n)}function g(n,i){for(let c=0;c<n.length;c++)Math.floor(c/10)===i?(n[c].classList.remove("bangumi-hide"),n[c].getElementsByTagName("img")):n[c].classList.add("bangumi-hide")}const t=document.getElementsByClassName("bangumi-firstpage"),p=document.getElementsByClassName("bangumi-previouspage"),f=document.getElementsByClassName("bangumi-nextpage"),r=document.getElementsByClassName("bangumi-lastpage"),o=document.getElementsByClassName("bangumi-pagenum");for(let n=0;n<t.length;n++){t[n].onclick=u,p[n].onclick=s,f[n].onclick=m,r[n].onclick=l;const i=typeof pagenumsPre>"u"?o[n].parentNode.siblings().length:pagenumsPre[n]??o[n].parentNode.siblings().length;t[n].click(),o[n].innerText=`1 / ${b(i/10)===0?1:b(i/10)}`}}()})();const v={},y={class:"bg-ob-deep-800 rounded-2xl shadow-xl block",style:{"padding-top":"1rem","padding-bottom":"1rem","padding-left":"2.5rem","padding-right":"2.5rem"}};function x(b,e,u,s,m,l){return w(),h("div",y,e[0]||(e[0]=[a("div",{class:"flex justify-event flex-wrap pt-2"},[a("div",{id:"article-container"},[a("div",{class:"bangumi-tabs"},[a("a",{class:"bangumi-tab",id:"bangumi-tab1",href:"javascript:;",rel:"external",target:"_self",onclick:"return false","data-pjax-state":""}," 想看 (12)"),a("a",{class:"bangumi-tab bangumi-active",id:"bangumi-tab2",href:"javascript:;",rel:"external",target:"_self",onclick:"return false","data-pjax-state":""}," 在看 (244)"),a("a",{class:"bangumi-tab",id:"bangumi-tab3",href:"javascript:;",rel:"external",target:"_self",onclick:"return false","data-pjax-state":""}," 已看 (20)")]),a("div",null,[a("div",{id:"bangumi-item1",class:"bangumi-hide"},[a("div",{class:"bangumi-item"},[a("div",{class:"bangumi-picture"},[a("img",{src:"https://i0.hdslb.com/bfs/bangumi/image/c1cb16bbd7d13aa3a68c1b7a8178a4f541fab3f6.png@220w_280h.webp",referrerpolicy:"no-referrer",width:"110",style:{width:"110px",margin:"20px auto"}})]),a("div",{class:"bangumi-info"},[a("div",{class:"bangumi-title"},[a("a",{target:"_blank",href:"https://www.bilibili.com/bangumi/media/md6038"},"风灵玉秀")]),a("div",{class:"bangumi-meta"},[a("span",{class:"bangumi-info-items"},[a("span",{class:"bangumi-info-item"},[a("span",{class:"bangumi-info-total"},"全26话"),a("em",{class:"bangumi-info-label-em"},"0")]),a("span",{class:"bangumi-info-item bangumi-area"},[a("span",{class:"bangumi-info-label"},"国创"),a("em",null,"中国大陆")]),a("span",{class:"bangumi-info-item bangumi-play"},[a("span",{class:"bangumi-info-label"},"总播放"),a("em",null,"1.3 亿")]),a("span",{class:"bangumi-info-item bangumi-follow"},[a("span",{class:"bangumi-info-label"},"追番人数"),a("em",null,"318.3 万")]),a("span",{class:"bangumi-info-item bangumi-coin"},[a("span",{class:"bangumi-info-label"},"硬币数"),a("em",null,"209.3 万")]),a("span",{class:"bangumi-info-item bangumi-danmaku"},[a("span",{class:"bangumi-info-label"},"弹幕总数"),a("em",null,"108.0 万")]),a("span",{class:"bangumi-info-item bangumi-info-item-score"},[a("span",{class:"bangumi-info-label"},"评分"),a("em",null,"9.8")])])]),a("div",{class:"bangumi-comments"},[a("p",null," 随着白发少女白钰袖身世的逐渐展开，越来越多的江湖异事向她而来。事件的指向总是绕不开那个叫做红阳血精的武林禁物，不单单是白钰袖，就连风铃儿、南笙、崔玉都开始与之牵连起来。一切的一切，似巧合又不是巧合……... ")])])]),a("div",{class:"bangumi-item"},[a("div",{class:"bangumi-picture"},[a("img",{src:"https://i0.hdslb.com/bfs/bangumi/image/477785aede9e241eeb57691016a38d98df1cb4bf.png@220w_280h.webp",referrerpolicy:"no-referrer",width:"110",style:{width:"110px",margin:"20px auto"}})]),a("div",{class:"bangumi-info"},[a("div",{class:"bangumi-title"},[a("a",{target:"_blank",href:"https://www.bilibili.com/bangumi/media/md20328226"},"少年歌行 海外仙山篇")]),a("div",{class:"bangumi-meta"},[a("span",{class:"bangumi-info-items"},[a("span",{class:"bangumi-info-item"},[a("span",{class:"bangumi-info-total"},"全26话"),a("em",{class:"bangumi-info-label-em"},"0")]),a("span",{class:"bangumi-info-item bangumi-area"},[a("span",{class:"bangumi-info-label"},"国创"),a("em",null,"中国大陆")]),a("span",{class:"bangumi-info-item bangumi-play"},[a("span",{class:"bangumi-info-label"},"总播放"),a("em",null,"1.5 亿")]),a("span",{class:"bangumi-info-item bangumi-follow"},[a("span",{class:"bangumi-info-label"},"追番人数"),a("em",null,"478.8 万")]),a("span",{class:"bangumi-info-item bangumi-coin"},[a("span",{class:"bangumi-info-label"},"硬币数"),a("em",null,"20.4 万")]),a("span",{class:"bangumi-info-item bangumi-danmaku"},[a("span",{class:"bangumi-info-label"},"弹幕总数"),a("em",null,"26.2 万")]),a("span",{class:"bangumi-info-item bangumi-info-item-score"},[a("span",{class:"bangumi-info-label"},"评分"),a("em",null,"8.1")])])]),a("div",{class:"bangumi-comments"},[a("p",null,"行到水穷处，坐看云起时。雷家堡一战后，雷家家主战死，剑仙陨落，萧瑟强行使用内力导致自身生命垂危。为挽救萧瑟，众人踏向神秘的海外仙山，只为寻找那传说之中的仙人。而与此同时的朝堂与江湖之争，仍在继续。... ")])])]),a("div",{class:"bangumi-item"},[a("div",{class:"bangumi-picture"},[a("img",{src:"https://i0.hdslb.com/bfs/bangumi/image/2f57b2255f0b8608fabdca55612d40b4249d4dcb.png@220w_280h.webp",referrerpolicy:"no-referrer",width:"110",style:{width:"110px",margin:"20px auto"}})]),a("div",{class:"bangumi-info"},[a("div",{class:"bangumi-title"},[a("a",{target:"_blank",href:"https://www.bilibili.com/bangumi/media/md20266559"},"总之就是非常可爱 第二季")]),a("div",{class:"bangumi-meta"},[a("span",{class:"bangumi-info-items"},[a("span",{class:"bangumi-info-item"},[a("span",{class:"bangumi-info-total"},"全16话"),a("em",{class:"bangumi-info-label-em"},"0")]),a("span",{class:"bangumi-info-item bangumi-area"},[a("span",{class:"bangumi-info-label"},"番剧"),a("em",null,"日本")]),a("span",{class:"bangumi-info-item bangumi-play"},[a("span",{class:"bangumi-info-label"},"总播放"),a("em",null,"4539.3 万")]),a("span",{class:"bangumi-info-item bangumi-follow"},[a("span",{class:"bangumi-info-label"},"追番人数"),a("em",null,"567.9 万")]),a("span",{class:"bangumi-info-item bangumi-coin"},[a("span",{class:"bangumi-info-label"},"硬币数"),a("em",null,"24.0 万")]),a("span",{class:"bangumi-info-item bangumi-danmaku"},[a("span",{class:"bangumi-info-label"},"弹幕总数"),a("em",null,"36.2 万")]),a("span",{class:"bangumi-info-item bangumi-info-item-score"},[a("span",{class:"bangumi-info-label"},"评分"),a("em",null,"9.5")])])]),a("div",{class:"bangumi-comments"},[a("p",null,"“一人无法成形，因而起誓二人相爱” 一对新婚夫妻经历了命运般的邂逅、求婚、在破公寓过新婚生活、买结婚戒指、问候父母，他们在公寓被烧毁后也不气馁，在昭和年代的房子中加深爱意……丈夫名叫由崎星空（NASA... ")])])]),a("div",{class:"bangumi-item"},[a("div",{class:"bangumi-picture"},[a("img",{src:"http://i0.hdslb.com/bfs/bangumi/image/05257c5235d8d39385c73c8e2644c44d955a7587.jpg@220w_280h.webp",referrerpolicy:"no-referrer",width:"110",style:{width:"110px",margin:"20px auto"}})]),a("div",{class:"bangumi-info"},[a("div",{class:"bangumi-title"},[a("a",{target:"_blank",href:"https://www.bilibili.com/bangumi/media/md28229117"},"女武神的餐桌 第二季")]),a("div",{class:"bangumi-meta"},[a("span",{class:"bangumi-info-items"},[a("span",{class:"bangumi-info-item"},[a("span",{class:"bangumi-info-total"},"全8话"),a("em",{class:"bangumi-info-label-em"},"0")]),a("span",{class:"bangumi-info-item bangumi-area"},[a("span",{class:"bangumi-info-label"},"国创"),a("em",null,"中国大陆")]),a("span",{class:"bangumi-info-item bangumi-play"},[a("span",{class:"bangumi-info-label"},"总播放"),a("em",null,"5097.0 万")]),a("span",{class:"bangumi-info-item bangumi-follow"},[a("span",{class:"bangumi-info-label"},"追番人数"),a("em",null,"187.4 万")]),a("span",{class:"bangumi-info-item bangumi-coin"},[a("span",{class:"bangumi-info-label"},"硬币数"),a("em",null,"58.7 万")]),a("span",{class:"bangumi-info-item bangumi-danmaku"},[a("span",{class:"bangumi-info-label"},"弹幕总数"),a("em",null,"40.2 万")]),a("span",{class:"bangumi-info-item bangumi-info-item-score"},[a("span",{class:"bangumi-info-label"},"评分"),a("em",null,"9.3")])])]),a("div",{class:"bangumi-comments"},[a("p",null,"女武神带着美食与心意归来，崩坏3《女武神的餐桌》动画第二季回归。 等春天化作一杯冰甜的樱花酿，等樱桃酱在夏夜中熬成，等海鲜浓汤带来大海的秋风，等熔岩巧克力融化在冬日的心间。 女武神们希望和你一起，让四...")])])]),a("div",{class:"bangumi-item"},[a("div",{class:"bangumi-picture"},[a("img",{src:"https://i0.hdslb.com/bfs/bangumi/image/e650639bebe4f41aa33816c509462072cc59c375.png@220w_280h.webp",referrerpolicy:"no-referrer",width:"110",style:{width:"110px",margin:"20px auto"}})]),a("div",{class:"bangumi-info"},[a("div",{class:"bangumi-title"},[a("a",{target:"_blank",href:"https://www.bilibili.com/bangumi/media/md28412512"},"虚构推理 第二季")]),a("div",{class:"bangumi-meta"},[a("span",{class:"bangumi-info-items"},[a("span",{class:"bangumi-info-item"},[a("span",{class:"bangumi-info-total"},"全12话"),a("em",{class:"bangumi-info-label-em"},"0")]),a("span",{class:"bangumi-info-item bangumi-area"},[a("span",{class:"bangumi-info-label"},"番剧"),a("em",null,"日本")]),a("span",{class:"bangumi-info-item bangumi-play"},[a("span",{class:"bangumi-info-label"},"总播放"),a("em",null,"4952.1 万")]),a("span",{class:"bangumi-info-item bangumi-follow"},[a("span",{class:"bangumi-info-label"},"追番人数"),a("em",null,"552.1 万")]),a("span",{class:"bangumi-info-item bangumi-coin"},[a("span",{class:"bangumi-info-label"},"硬币数"),a("em",null,"15.4 万")]),a("span",{class:"bangumi-info-item bangumi-danmaku"},[a("span",{class:"bangumi-info-label"},"弹幕总数"),a("em",null,"15.0 万")]),a("span",{class:"bangumi-info-item bangumi-info-item-score"},[a("span",{class:"bangumi-info-label"},"评分"),a("em",null,"9.6")])])]),a("div",{class:"bangumi-comments"},[a("p",null,"被称为“鬼怪”的生物，如理所当然般真实存在于世。 少女岩永琴子作为鬼怪们的“智慧之神”，今天也有鬼怪找她排忧解难。琴子身边有一名连鬼怪都畏惧不已的男子，那就是她一见钟情的恋人，名叫樱川九郎。 本片讲述...")])])]),a("div",{class:"bangumi-item"},[a("div",{class:"bangumi-picture"},[a("img",{src:"http://i0.hdslb.com/bfs/bangumi/image/473b8f1c7e23c79b868ef46df3f3cff67362f285.jpg@220w_280h.webp",referrerpolicy:"no-referrer",width:"110",style:{width:"110px",margin:"20px auto"}})]),a("div",{class:"bangumi-info"},[a("div",{class:"bangumi-title"},[a("a",{target:"_blank",href:"https://www.bilibili.com/bangumi/media/md130412"},"刀剑神域 Alicization")]),a("div",{class:"bangumi-meta"},[a("span",{class:"bangumi-info-items"},[a("span",{class:"bangumi-info-item"},[a("span",{class:"bangumi-info-total"},"全24话"),a("em",{class:"bangumi-info-label-em"},"0")]),a("span",{class:"bangumi-info-item bangumi-area"},[a("span",{class:"bangumi-info-label"},"番剧"),a("em",null,"日本")]),a("span",{class:"bangumi-info-item bangumi-play"},[a("span",{class:"bangumi-info-label"},"总播放"),a("em",null,"2.1 亿")]),a("span",{class:"bangumi-info-item bangumi-follow"},[a("span",{class:"bangumi-info-label"},"追番人数"),a("em",null,"470.0 万")]),a("span",{class:"bangumi-info-item bangumi-coin"},[a("span",{class:"bangumi-info-label"},"硬币数"),a("em",null,"120.5 万")]),a("span",{class:"bangumi-info-item bangumi-danmaku"},[a("span",{class:"bangumi-info-label"},"弹幕总数"),a("em",null,"322.1 万")]),a("span",{class:"bangumi-info-item bangumi-info-item-score"},[a("span",{class:"bangumi-info-label"},"评分"),a("em",null,"8.3")])])]),a("div",{class:"bangumi-comments"},[a("p",null," 【本片翻译由版权方提供】“这里是哪儿”察觉到的时候，桐人不知为什么陷入了庞大的幻想风格虚拟世界。登录前的记忆模糊不清，只得在周围徘徊寻找线索。之后，他同一名少年相遇了。“我的名字是尤吉欧。请多关照，桐... ")])])]),a("div",{class:"bangumi-item"},[a("div",{class:"bangumi-picture"},[a("img",{src:"http://i0.hdslb.com/bfs/bangumi/eecd5201559d7edc7eee9b77be55053a81873f26.jpg@220w_280h.webp",referrerpolicy:"no-referrer",width:"110",style:{width:"110px",margin:"20px auto"}})]),a("div",{class:"bangumi-info"},[a("div",{class:"bangumi-title"},[a("a",{target:"_blank",href:"https://www.bilibili.com/bangumi/media/md897"},"神的记事本")]),a("div",{class:"bangumi-meta"},[a("span",{class:"bangumi-info-items"},[a("span",{class:"bangumi-info-item"},[a("span",{class:"bangumi-info-total"},"全12话"),a("em",{class:"bangumi-info-label-em"},"0")]),a("span",{class:"bangumi-info-item bangumi-area"},[a("span",{class:"bangumi-info-label"},"番剧"),a("em",null,"日本")]),a("span",{class:"bangumi-info-item bangumi-play"},[a("span",{class:"bangumi-info-label"},"总播放"),a("em",null,"993.2 万")]),a("span",{class:"bangumi-info-item bangumi-follow"},[a("span",{class:"bangumi-info-label"},"追番人数"),a("em",null,"109.5 万")]),a("span",{class:"bangumi-info-item bangumi-coin"},[a("span",{class:"bangumi-info-label"},"硬币数"),a("em",null,"3.3 万")]),a("span",{class:"bangumi-info-item bangumi-danmaku"},[a("span",{class:"bangumi-info-label"},"弹幕总数"),a("em",null,"20.1 万")]),a("span",{class:"bangumi-info-item bangumi-info-item-score"},[a("span",{class:"bangumi-info-label"},"评分"),a("em",null,"9.3")])])]),a("div",{class:"bangumi-comments"},[a("p",null," 神様のメモ帐（神的记事本）是日本作家杉井光所做轻小说，并衍生成为漫画，动画及广播剧作品。该作故事讲述了“尼特侦探”爱丽丝和身为侦探助手的藤岛鸣海所编织的无奈奇怪但稍微会展现出一点勇气的故事。在闹区的巷... ")])])]),a("div",{class:"bangumi-item"},[a("div",{class:"bangumi-picture"},[a("img",{src:"http://i0.hdslb.com/bfs/bangumi/image/81c9dc929e6071a2d42f1b5a207bbcef4a1aead7.png@220w_280h.webp",referrerpolicy:"no-referrer",width:"110",style:{width:"110px",margin:"20px auto"}})]),a("div",{class:"bangumi-info"},[a("div",{class:"bangumi-title"},[a("a",{target:"_blank",href:"https://www.bilibili.com/bangumi/media/md28237141"},"约会大作战 第四季")]),a("div",{class:"bangumi-meta"},[a("span",{class:"bangumi-info-items"},[a("span",{class:"bangumi-info-item"},[a("span",{class:"bangumi-info-total"},"全12话"),a("em",{class:"bangumi-info-label-em"},"0")]),a("span",{class:"bangumi-info-item bangumi-area"},[a("span",{class:"bangumi-info-label"},"番剧"),a("em",null,"日本")]),a("span",{class:"bangumi-info-item bangumi-play"},[a("span",{class:"bangumi-info-label"},"总播放"),a("em",null,"7883.9 万")]),a("span",{class:"bangumi-info-item bangumi-follow"},[a("span",{class:"bangumi-info-label"},"追番人数"),a("em",null,"591.7 万")]),a("span",{class:"bangumi-info-item bangumi-coin"},[a("span",{class:"bangumi-info-label"},"硬币数"),a("em",null,"93.6 万")]),a("span",{class:"bangumi-info-item bangumi-danmaku"},[a("span",{class:"bangumi-info-label"},"弹幕总数"),a("em",null,"54.7 万")]),a("span",{class:"bangumi-info-item bangumi-info-item-score"},[a("span",{class:"bangumi-info-label"},"评分"),a("em",null,"9.8")])])]),a("div",{class:"bangumi-comments"},[a("p",null,"百万动漫爱好者一键三连推荐的入宅必看之作。 狂三、十香、士道、与精灵约会，使其娇羞等大家熟悉的名字和梗，都源于《约战》系列动画~如果你还没有看过，不妨就从最新的第四部开始，再往前补吧：） 名为五河士...")])])]),a("div",{class:"bangumi-item"},[a("div",{class:"bangumi-picture"},[a("img",{src:"https://i0.hdslb.com/bfs/bangumi/image/c8cec0e4a963e48387ecf26dda4c100a16d03861.png@220w_280h.webp",referrerpolicy:"no-referrer",width:"110",style:{width:"110px",margin:"20px auto"}})]),a("div",{class:"bangumi-info"},[a("div",{class:"bangumi-title"},[a("a",{target:"_blank",href:"https://www.bilibili.com/bangumi/media/md28344587"},"被解雇的暗黑士兵慢生活的第二人生")]),a("div",{class:"bangumi-meta"},[a("span",{class:"bangumi-info-items"},[a("span",{class:"bangumi-info-item"},[a("span",{class:"bangumi-info-total"},"全12话"),a("em",{class:"bangumi-info-label-em"},"0")]),a("span",{class:"bangumi-info-item bangumi-area"},[a("span",{class:"bangumi-info-label"},"番剧"),a("em",null,"日本")]),a("span",{class:"bangumi-info-item bangumi-play"},[a("span",{class:"bangumi-info-label"},"总播放"),a("em",null,"2471.0 万")]),a("span",{class:"bangumi-info-item bangumi-follow"},[a("span",{class:"bangumi-info-label"},"追番人数"),a("em",null,"53.7 万")]),a("span",{class:"bangumi-info-item bangumi-coin"},[a("span",{class:"bangumi-info-label"},"硬币数"),a("em",null,"3.6 万")]),a("span",{class:"bangumi-info-item bangumi-danmaku"},[a("span",{class:"bangumi-info-label"},"弹幕总数"),a("em",null,"8.2 万")]),a("span",{class:"bangumi-info-item bangumi-info-item-score"},[a("span",{class:"bangumi-info-label"},"评分"),a("em",null,"8.6")])])]),a("div",{class:"bangumi-comments"},[a("p",null," 作为暗黑士兵被培养长大的达里艾尔，虽然很有能力但不会使用魔法。新上司嫉妒达里艾尔的能力，以他不会魔法为借口解雇了他。达里艾尔在归途上偶遇了一名少女，并在她的带领下来到了一个人类村落。在村庄里学习冒险者... ")])])]),a("div",{class:"bangumi-item"},[a("div",{class:"bangumi-picture"},[a("img",{src:"http://i0.hdslb.com/bfs/bangumi/image/5ff116e56fcd30bddb0f4684fc4257b7566c74b3.jpg@220w_280h.webp",referrerpolicy:"no-referrer",width:"110",style:{width:"110px",margin:"20px auto"}})]),a("div",{class:"bangumi-info"},[a("div",{class:"bangumi-title"},[a("a",{target:"_blank",href:"https://www.bilibili.com/bangumi/media/md28237351"},"黑之召唤士")]),a("div",{class:"bangumi-meta"},[a("span",{class:"bangumi-info-items"},[a("span",{class:"bangumi-info-item"},[a("span",{class:"bangumi-info-total"},"全12话"),a("em",{class:"bangumi-info-label-em"},"0")]),a("span",{class:"bangumi-info-item bangumi-area"},[a("span",{class:"bangumi-info-label"},"番剧"),a("em",null,"日本")]),a("span",{class:"bangumi-info-item bangumi-play"},[a("span",{class:"bangumi-info-label"},"总播放"),a("em",null,"5765.1 万")]),a("span",{class:"bangumi-info-item bangumi-follow"},[a("span",{class:"bangumi-info-label"},"追番人数"),a("em",null,"125.6 万")]),a("span",{class:"bangumi-info-item bangumi-coin"},[a("span",{class:"bangumi-info-label"},"硬币数"),a("em",null,"13.5 万")]),a("span",{class:"bangumi-info-item bangumi-danmaku"},[a("span",{class:"bangumi-info-label"},"弹幕总数"),a("em",null,"30.1 万")]),a("span",{class:"bangumi-info-item bangumi-info-item-score"},[a("span",{class:"bangumi-info-label"},"评分"),a("em",null,"9.1")])])]),a("div",{class:"bangumi-comments"},[a("p",null,"“这是第一次呢，竟然让我这个神来当他的手下。” 凯尔文醒来后发现自己转生到了异世界。而且，他将异世界向导同时也是那个世界的女神认作了自己的属下。 用前世记忆作为交换，得到超高等级的召唤技能与魔法技能的...")])])]),a("div",{class:"bangumi-item bangumi-hide"},[a("div",{class:"bangumi-picture"},[a("img",{src:"http://i0.hdslb.com/bfs/bangumi/image/0310ac2b537fb8aed2eccd95a2762cf48bab0904.png@220w_280h.webp",referrerpolicy:"no-referrer",width:"110",style:{width:"110px",margin:"20px auto"}})]),a("div",{class:"bangumi-info"},[a("div",{class:"bangumi-title"},[a("a",{target:"_blank",href:"https://www.bilibili.com/bangumi/media/md28224145"},"虚构推理")]),a("div",{class:"bangumi-meta"},[a("span",{class:"bangumi-info-items"},[a("span",{class:"bangumi-info-item"},[a("span",{class:"bangumi-info-total"},"全12话"),a("em",{class:"bangumi-info-label-em"},"0")]),a("span",{class:"bangumi-info-item bangumi-area"},[a("span",{class:"bangumi-info-label"},"番剧"),a("em",null,"日本")]),a("span",{class:"bangumi-info-item bangumi-play"},[a("span",{class:"bangumi-info-label"},"总播放"),a("em",null,"1.3 亿")]),a("span",{class:"bangumi-info-item bangumi-follow"},[a("span",{class:"bangumi-info-label"},"追番人数"),a("em",null,"558.8 万")]),a("span",{class:"bangumi-info-item bangumi-coin"},[a("span",{class:"bangumi-info-label"},"硬币数"),a("em",null,"54.8 万")]),a("span",{class:"bangumi-info-item bangumi-danmaku"},[a("span",{class:"bangumi-info-label"},"弹幕总数"),a("em",null,"148.7 万")]),a("span",{class:"bangumi-info-item bangumi-info-item-score"},[a("span",{class:"bangumi-info-label"},"评分"),a("em",null,"9.2")])])]),a("div",{class:"bangumi-comments"},[a("p",null,"成为“怪异”们的智慧之神，每天都在解决着“怪异”们带来的麻烦的少女·岩永琴子，她一见钟情的对象·樱川九郎，是个让“怪异”都感到畏惧的男人！？ 这样毫不普通的两人，迎战“怪异”们引发的神秘事件的［恋爱×...")])])]),a("div",{class:"bangumi-item bangumi-hide"},[a("div",{class:"bangumi-picture"},[a("img",{src:"http://i0.hdslb.com/bfs/bangumi/7625ac0a9409923bd3b285a978aeba04db4fd406.png@220w_280h.webp",referrerpolicy:"no-referrer",width:"110",style:{width:"110px",margin:"20px auto"}})]),a("div",{class:"bangumi-info"},[a("div",{class:"bangumi-title"},[a("a",{target:"_blank",href:"https://www.bilibili.com/bangumi/media/md21986963"},"我们无法一起学习")]),a("div",{class:"bangumi-meta"},[a("span",{class:"bangumi-info-items"},[a("span",{class:"bangumi-info-item"},[a("span",{class:"bangumi-info-total"},"全13话"),a("em",{class:"bangumi-info-label-em"},"0")]),a("span",{class:"bangumi-info-item bangumi-area"},[a("span",{class:"bangumi-info-label"},"番剧"),a("em",null,"日本")]),a("span",{class:"bangumi-info-item bangumi-play"},[a("span",{class:"bangumi-info-label"},"总播放"),a("em",null,"6518.7 万")]),a("span",{class:"bangumi-info-item bangumi-follow"},[a("span",{class:"bangumi-info-label"},"追番人数"),a("em",null,"203.1 万")]),a("span",{class:"bangumi-info-item bangumi-coin"},[a("span",{class:"bangumi-info-label"},"硬币数"),a("em",null,"26.9 万")]),a("span",{class:"bangumi-info-item bangumi-danmaku"},[a("span",{class:"bangumi-info-label"},"弹幕总数"),a("em",null,"96.4 万")]),a("span",{class:"bangumi-info-item bangumi-info-item-score"},[a("span",{class:"bangumi-info-label"},"评分"),a("em",null,"9.2")])])]),a("div",{class:"bangumi-comments"},[a("p",null," 刻苦学习的高中3年生·唯我成幸，为了获得免除大学学费的“特别VIP推荐”资格，而要去担任为备考而苦战的同级生们的教育指导员。教导的对象是“文学之森的睡美人”古桥文乃和“机关精巧的拇指姑娘”绪方理珠这两... ")])])]),a("div",{class:"bangumi-pagination"},[a("a",{class:"bangumi-button bangumi-firstpage",href:"javascript:;",target:"_self",onclick:"return false","data-pjax-state":""}," 首页"),a("a",{class:"bangumi-button bangumi-previouspage",href:"javascript:;",target:"_self",onclick:"return false","data-pjax-state":""},"上一页"),a("span",{class:"bangumi-pagenum"},"1 / 2"),a("a",{class:"bangumi-button bangumi-nextpage",href:"javascript:;",target:"_self",onclick:"return false","data-pjax-state":""},"下一页"),a("a",{class:"bangumi-button bangumi-lastpage",href:"javascript:;",target:"_self",onclick:"return false","data-pjax-state":""},"尾页")])]),a("div",{id:"bangumi-item2",class:"bangumi-show"},[a("div",{class:"bangumi-item"},[a("div",{class:"bangumi-picture"},[a("img",{src:"https://i0.hdslb.com/bfs/bangumi/image/69b8b2e5bb2fb041500e25103a1ef8cd9e12b1d1.png@220w_280h.webp",referrerpolicy:"no-referrer",width:"110",style:{width:"110px",margin:"20px auto"}})]),a("div",{class:"bangumi-info"},[a("div",{class:"bangumi-title"},[a("a",{target:"_blank",href:"https://www.bilibili.com/bangumi/media/md21082961"},"牧神记")]),a("div",{class:"bangumi-meta"},[a("span",{class:"bangumi-info-items"},[a("span",{class:"bangumi-info-item"},[a("span",{class:"bangumi-info-total"},"全78话"),a("em",{class:"bangumi-info-label-em"},"0")]),a("span",{class:"bangumi-info-item bangumi-area"},[a("span",{class:"bangumi-info-label"},"国创"),a("em",null,"中国大陆")]),a("span",{class:"bangumi-info-item bangumi-play"},[a("span",{class:"bangumi-info-label"},"总播放"),a("em",null,"4.1 亿")]),a("span",{class:"bangumi-info-item bangumi-follow"},[a("span",{class:"bangumi-info-label"},"追番人数"),a("em",null,"299.3 万")]),a("span",{class:"bangumi-info-item bangumi-coin"},[a("span",{class:"bangumi-info-label"},"硬币数"),a("em",null,"130.3 万")]),a("span",{class:"bangumi-info-item bangumi-danmaku"},[a("span",{class:"bangumi-info-label"},"弹幕总数"),a("em",null,"59.0 万")]),a("span",{class:"bangumi-info-item bangumi-info-item-score"},[a("span",{class:"bangumi-info-label"},"评分"),a("em",null,"9.7")])])]),a("div",{class:"bangumi-comments"},[a("p",null," 【第14集起大会员专享】主角秦牧，幼时被一女尸托举至涌江边并被司婆婆捡到，村长根据玉佩上的字为其取名为“秦牧”。被一只母牛哺乳长大，是天生凡体，但被村长骗为霸体，修炼霸体三丹功。后走出大墟闯荡，进入京... ")])])]),a("div",{class:"bangumi-item"},[a("div",{class:"bangumi-picture"},[a("img",{src:"https://i0.hdslb.com/bfs/bangumi/image/ee347bb7ec67696bce514d51b4cef55a5e192284.png@220w_280h.webp",referrerpolicy:"no-referrer",width:"110",style:{width:"110px",margin:"20px auto"}})]),a("div",{class:"bangumi-info"},[a("div",{class:"bangumi-title"},[a("a",{target:"_blank",href:"https://www.bilibili.com/bangumi/media/md28223043"},"凡人修仙传")]),a("div",{class:"bangumi-meta"},[a("span",{class:"bangumi-info-items"},[a("span",{class:"bangumi-info-item"},[a("span",{class:"bangumi-info-total"},"全0话"),a("em",{class:"bangumi-info-label-em"},"0")]),a("span",{class:"bangumi-info-item bangumi-area"},[a("span",{class:"bangumi-info-label"},"国创"),a("em",null,"中国大陆")]),a("span",{class:"bangumi-info-item bangumi-play"},[a("span",{class:"bangumi-info-label"},"总播放"),a("em",null,"33.5 亿")]),a("span",{class:"bangumi-info-item bangumi-follow"},[a("span",{class:"bangumi-info-label"},"追番人数"),a("em",null,"1066.9 万")]),a("span",{class:"bangumi-info-item bangumi-coin"},[a("span",{class:"bangumi-info-label"},"硬币数"),a("em",null,"2828.3 万")]),a("span",{class:"bangumi-info-item bangumi-danmaku"},[a("span",{class:"bangumi-info-label"},"弹幕总数"),a("em",null,"1315.5 万")]),a("span",{class:"bangumi-info-item bangumi-info-item-score"},[a("span",{class:"bangumi-info-label"},"评分"),a("em",null,"9.7")])])]),a("div",{class:"bangumi-comments"},[a("p",null,"【第2-76集限免中，第126-128集大会员抢先，第129集起大会员专享】 看机智的凡人小子韩立如何稳健发展、步步为营，战魔道、夺至宝、驰骋星海、快意恩仇，成为纵横三界的强者。他日仙界重相逢，一声道...")])])]),a("div",{class:"bangumi-item"},[a("div",{class:"bangumi-picture"},[a("img",{src:"https://i0.hdslb.com/bfs/bangumi/image/7a72973b174b473850556d4b6402a13db679f7b8.png@220w_280h.webp",referrerpolicy:"no-referrer",width:"110",style:{width:"110px",margin:"20px auto"}})]),a("div",{class:"bangumi-info"},[a("div",{class:"bangumi-title"},[a("a",{target:"_blank",href:"https://www.bilibili.com/bangumi/media/md22730760"},"宗门里除了我都是卧底")]),a("div",{class:"bangumi-meta"},[a("span",{class:"bangumi-info-items"},[a("span",{class:"bangumi-info-item"},[a("span",{class:"bangumi-info-total"},"全100话"),a("em",{class:"bangumi-info-label-em"},"0")]),a("span",{class:"bangumi-info-item bangumi-area"},[a("span",{class:"bangumi-info-label"},"国创"),a("em",null,"未知")]),a("span",{class:"bangumi-info-item bangumi-play"},[a("span",{class:"bangumi-info-label"},"总播放"),a("em",null,"未知")]),a("span",{class:"bangumi-info-item bangumi-follow"},[a("span",{class:"bangumi-info-label"},"追番人数"),a("em",null,"未知")]),a("span",{class:"bangumi-info-item bangumi-coin"},[a("span",{class:"bangumi-info-label"},"硬币数"),a("em",null,"未知")]),a("span",{class:"bangumi-info-item bangumi-danmaku"},[a("span",{class:"bangumi-info-label"},"弹幕总数"),a("em",null,"未知")]),a("span",{class:"bangumi-info-item bangumi-info-item-score"},[a("span",{class:"bangumi-info-label"},"评分"),a("em",null,"暂无")])])]),a("div",{class:"bangumi-comments"},[a("p",null," 传奇黑客为拯救人类被系统AI追杀身死，意外成为异界第一宗门的宗主，但为了应对宗内全是卧底的局面和随身而来的系统危机，陈宁只想低调的再观望看看。但如锥处囊中，纵使他冷面无双心系世人，也是万花丛中过，朵朵... ")])])]),a("div",{class:"bangumi-item"},[a("div",{class:"bangumi-picture"},[a("img",{src:"https://i0.hdslb.com/bfs/bangumi/image/8faa8d52a5a60bc99116492173ec29cc108a14d8.jpg@220w_280h.webp",referrerpolicy:"no-referrer",width:"110",style:{width:"110px",margin:"20px auto"}})]),a("div",{class:"bangumi-info"},[a("div",{class:"bangumi-title"},[a("a",{target:"_blank",href:"https://www.bilibili.com/bangumi/media/md25627369"},"小黄人特辑1")]),a("div",{class:"bangumi-meta"},[a("span",{class:"bangumi-info-items"},[a("span",{class:"bangumi-info-item"},[a("span",{class:"bangumi-info-total"},"全1话"),a("em",{class:"bangumi-info-label-em"},"0")]),a("span",{class:"bangumi-info-item bangumi-area"},[a("span",{class:"bangumi-info-label"},"番剧"),a("em",null,"未知")]),a("span",{class:"bangumi-info-item bangumi-play"},[a("span",{class:"bangumi-info-label"},"总播放"),a("em",null,"未知")]),a("span",{class:"bangumi-info-item bangumi-follow"},[a("span",{class:"bangumi-info-label"},"追番人数"),a("em",null,"未知")]),a("span",{class:"bangumi-info-item bangumi-coin"},[a("span",{class:"bangumi-info-label"},"硬币数"),a("em",null,"未知")]),a("span",{class:"bangumi-info-item bangumi-danmaku"},[a("span",{class:"bangumi-info-label"},"弹幕总数"),a("em",null,"未知")]),a("span",{class:"bangumi-info-item bangumi-info-item-score"},[a("span",{class:"bangumi-info-label"},"评分"),a("em",null,"暂无")])])]),a("div",{class:"bangumi-comments"},[a("p",null,"《小黄人特辑 1》是《神偷奶爸》系列的小黄人短片系列合集，讲述小黄人生活中的精彩的小故事：想为自己找只宠物的小黄人给外星飞碟系上了宠物绳，阴差阳错之下却为外星飞碟找到了回家的办法，外星飞碟既高兴又不舍... ")])])]),a("div",{class:"bangumi-item"},[a("div",{class:"bangumi-picture"},[a("img",{src:"https://i0.hdslb.com/bfs/bangumi/image/9c716a761afd055e6b65c96aac7880d2a960dd0b.png@220w_280h.webp",referrerpolicy:"no-referrer",width:"110",style:{width:"110px",margin:"20px auto"}})]),a("div",{class:"bangumi-info"},[a("div",{class:"bangumi-title"},[a("a",{target:"_blank",href:"https://www.bilibili.com/bangumi/media/md23154901"},"关于我转生变成史莱姆这档事 第三季")]),a("div",{class:"bangumi-meta"},[a("span",{class:"bangumi-info-items"},[a("span",{class:"bangumi-info-item"},[a("span",{class:"bangumi-info-total"},"全24话"),a("em",{class:"bangumi-info-label-em"},"0")]),a("span",{class:"bangumi-info-item bangumi-area"},[a("span",{class:"bangumi-info-label"},"番剧"),a("em",null,"日本")]),a("span",{class:"bangumi-info-item bangumi-play"},[a("span",{class:"bangumi-info-label"},"总播放"),a("em",null,"5087.5 万")]),a("span",{class:"bangumi-info-item bangumi-follow"},[a("span",{class:"bangumi-info-label"},"追番人数"),a("em",null,"1049.8 万")]),a("span",{class:"bangumi-info-item bangumi-coin"},[a("span",{class:"bangumi-info-label"},"硬币数"),a("em",null,"8.6 万")]),a("span",{class:"bangumi-info-item bangumi-danmaku"},[a("span",{class:"bangumi-info-label"},"弹幕总数"),a("em",null,"9.8 万")]),a("span",{class:"bangumi-info-item bangumi-info-item-score"},[a("span",{class:"bangumi-info-label"},"评分"),a("em",null,"7.2")])])]),a("div",{class:"bangumi-comments"},[a("p",null,"利姆鲁击败克莱曼，正式成为了魔王。而且魔王盛宴后，他的领地扩大到了鸠拉大森林全域。 利姆鲁预想到各种族的代表会纷纷前来觐见，便决定借机举办“开国庆典”，以魔王身份正式亮相，并同时为特恩佩斯特吸引新居民...")])])]),a("div",{class:"bangumi-item"},[a("div",{class:"bangumi-picture"},[a("img",{src:"https://i0.hdslb.com/bfs/bangumi/image/a50f4e5b7de83c2040a104c6d8bbaaa2bd9fac80.png@220w_280h.webp",referrerpolicy:"no-referrer",width:"110",style:{width:"110px",margin:"20px auto"}})]),a("div",{class:"bangumi-info"},[a("div",{class:"bangumi-title"},[a("a",{target:"_blank",href:"https://www.bilibili.com/bangumi/media/md21096409"},"少年歌行 血染天启篇")]),a("div",{class:"bangumi-meta"},[a("span",{class:"bangumi-info-items"},[a("span",{class:"bangumi-info-item"},[a("span",{class:"bangumi-info-total"},"全26话"),a("em",{class:"bangumi-info-label-em"},"0")]),a("span",{class:"bangumi-info-item bangumi-area"},[a("span",{class:"bangumi-info-label"},"国创"),a("em",null,"中国大陆")]),a("span",{class:"bangumi-info-item bangumi-play"},[a("span",{class:"bangumi-info-label"},"总播放"),a("em",null,"4550.3 万")]),a("span",{class:"bangumi-info-item bangumi-follow"},[a("span",{class:"bangumi-info-label"},"追番人数"),a("em",null,"470.0 万")]),a("span",{class:"bangumi-info-item bangumi-coin"},[a("span",{class:"bangumi-info-label"},"硬币数"),a("em",null,"5.3 万")]),a("span",{class:"bangumi-info-item bangumi-danmaku"},[a("span",{class:"bangumi-info-label"},"弹幕总数"),a("em",null,"6.4 万")]),a("span",{class:"bangumi-info-item bangumi-info-item-score"},[a("span",{class:"bangumi-info-label"},"评分"),a("em",null,"7.6")])])]),a("div",{class:"bangumi-comments"},[a("p",null,"海外仙山一役后，莫衣入梦十年，萧瑟隐疾痊愈。返回北离得知明德帝病危，萧瑟在众人陪同下返回天启，誓要借此机会铲除当年琅琊王案幕后黑手。天启风云变幻，一场涉及江湖与朝堂的夺嫡、谋乱之战就此拉开序幕……... ")])])]),a("div",{class:"bangumi-item"},[a("div",{class:"bangumi-picture"},[a("img",{src:"https://i0.hdslb.com/bfs/bangumi/image/22f15dde8b03be01b225f79e966a3f4b0a80b18e.png@220w_280h.webp",referrerpolicy:"no-referrer",width:"110",style:{width:"110px",margin:"20px auto"}})]),a("div",{class:"bangumi-info"},[a("div",{class:"bangumi-title"},[a("a",{target:"_blank",href:"https://www.bilibili.com/bangumi/media/md24499077"},"青之驱魔师 终夜篇")]),a("div",{class:"bangumi-meta"},[a("span",{class:"bangumi-info-items"},[a("span",{class:"bangumi-info-item"},[a("span",{class:"bangumi-info-total"},"全12话"),a("em",{class:"bangumi-info-label-em"},"0")]),a("span",{class:"bangumi-info-item bangumi-area"},[a("span",{class:"bangumi-info-label"},"番剧"),a("em",null,"未知")]),a("span",{class:"bangumi-info-item bangumi-play"},[a("span",{class:"bangumi-info-label"},"总播放"),a("em",null,"未知")]),a("span",{class:"bangumi-info-item bangumi-follow"},[a("span",{class:"bangumi-info-label"},"追番人数"),a("em",null,"未知")]),a("span",{class:"bangumi-info-item bangumi-coin"},[a("span",{class:"bangumi-info-label"},"硬币数"),a("em",null,"未知")]),a("span",{class:"bangumi-info-item bangumi-danmaku"},[a("span",{class:"bangumi-info-label"},"弹幕总数"),a("em",null,"未知")]),a("span",{class:"bangumi-info-item bangumi-info-item-score"},[a("span",{class:"bangumi-info-label"},"评分"),a("em",null,"暂无")])])]),a("div",{class:"bangumi-comments"},[a("p",null,"人类所居住的“物质界”和恶魔所居住的“虚无界”，本应是两个无法互相干涉的维度，但恶魔却能凭依在一切物质上，对物质界进行干涉。 而人类之中，也存在着能驱逐这种恶魔的”驱魔师”。 《青之驱魔师》，是加藤和...")])])]),a("div",{class:"bangumi-item"},[a("div",{class:"bangumi-picture"},[a("img",{src:"https://i0.hdslb.com/bfs/bangumi/image/9580fba03884c8e0298683cb2302793324c787e1.png@220w_280h.webp",referrerpolicy:"no-referrer",width:"110",style:{width:"110px",margin:"20px auto"}})]),a("div",{class:"bangumi-info"},[a("div",{class:"bangumi-title"},[a("a",{target:"_blank",href:"https://www.bilibili.com/bangumi/media/md25557812"},"凸变英雄X 日语版")]),a("div",{class:"bangumi-meta"},[a("span",{class:"bangumi-info-items"},[a("span",{class:"bangumi-info-item"},[a("span",{class:"bangumi-info-total"},"全24话"),a("em",{class:"bangumi-info-label-em"},"0")]),a("span",{class:"bangumi-info-item bangumi-area"},[a("span",{class:"bangumi-info-label"},"国创"),a("em",null,"未知")]),a("span",{class:"bangumi-info-item bangumi-play"},[a("span",{class:"bangumi-info-label"},"总播放"),a("em",null,"未知")]),a("span",{class:"bangumi-info-item bangumi-follow"},[a("span",{class:"bangumi-info-label"},"追番人数"),a("em",null,"未知")]),a("span",{class:"bangumi-info-item bangumi-coin"},[a("span",{class:"bangumi-info-label"},"硬币数"),a("em",null,"未知")]),a("span",{class:"bangumi-info-item bangumi-danmaku"},[a("span",{class:"bangumi-info-label"},"弹幕总数"),a("em",null,"未知")]),a("span",{class:"bangumi-info-item bangumi-info-item-score"},[a("span",{class:"bangumi-info-label"},"评分"),a("em",null,"暂无")])])]),a("div",{class:"bangumi-comments"},[a("p",null," 这是一个由人们的信赖造就英雄的世界，而获得最多信赖的英雄被誉为——X。在这个世界里，人们的信赖是可以被数据统计出来的，并且这些数值会反映在每个人的手腕上。只要获得足够多的信赖值，普通人也能拥有超能力，... ")])])]),a("div",{class:"bangumi-item"},[a("div",{class:"bangumi-picture"},[a("img",{src:"http://i0.hdslb.com/bfs/bangumi/851f979c8ebcc7583a43abd4b786c4e2e66b746b.jpg@220w_280h.webp",referrerpolicy:"no-referrer",width:"110",style:{width:"110px",margin:"20px auto"}})]),a("div",{class:"bangumi-info"},[a("div",{class:"bangumi-title"},[a("a",{target:"_blank",href:"https://www.bilibili.com/bangumi/media/md8792"},"OVERLORD Ⅱ")]),a("div",{class:"bangumi-meta"},[a("span",{class:"bangumi-info-items"},[a("span",{class:"bangumi-info-item"},[a("span",{class:"bangumi-info-total"},"全13话"),a("em",{class:"bangumi-info-label-em"},"0")]),a("span",{class:"bangumi-info-item bangumi-area"},[a("span",{class:"bangumi-info-label"},"番剧"),a("em",null,"日本")]),a("span",{class:"bangumi-info-item bangumi-play"},[a("span",{class:"bangumi-info-label"},"总播放"),a("em",null,"4.4 亿")]),a("span",{class:"bangumi-info-item bangumi-follow"},[a("span",{class:"bangumi-info-label"},"追番人数"),a("em",null,"567.9 万")]),a("span",{class:"bangumi-info-item bangumi-coin"},[a("span",{class:"bangumi-info-label"},"硬币数"),a("em",null,"125.8 万")]),a("span",{class:"bangumi-info-item bangumi-danmaku"},[a("span",{class:"bangumi-info-label"},"弹幕总数"),a("em",null,"430.1 万")]),a("span",{class:"bangumi-info-item bangumi-info-item-score"},[a("span",{class:"bangumi-info-label"},"评分"),a("em",null,"9.6")])])]),a("div",{class:"bangumi-comments"},[a("p",null," 时为2138年。曾卷起一大风潮的虚拟现实体感型网络游戏《YGGDRASIL》即将迎来停服。玩家飞鼠在曾经以同伴和荣华自傲的根据地纳萨力克地下大坟墓，独自一人安静等待着那一刻。但是，不料发生了结束时间已... ")])])]),a("div",{class:"bangumi-item"},[a("div",{class:"bangumi-picture"},[a("img",{src:"https://i0.hdslb.com/bfs/bangumi/image/4cd5d75b3ac57d30a114bbe21a9dacd4f7c2fa81.png@220w_280h.webp",referrerpolicy:"no-referrer",width:"110",style:{width:"110px",margin:"20px auto"}})]),a("div",{class:"bangumi-info"},[a("div",{class:"bangumi-title"},[a("a",{target:"_blank",href:"https://www.bilibili.com/bangumi/media/md21827044"},"喜羊羊与灰太狼")]),a("div",{class:"bangumi-meta"},[a("span",{class:"bangumi-info-items"},[a("span",{class:"bangumi-info-item"},[a("span",{class:"bangumi-info-total"},"全530话"),a("em",{class:"bangumi-info-label-em"},"0")]),a("span",{class:"bangumi-info-item bangumi-area"},[a("span",{class:"bangumi-info-label"},"国创"),a("em",null,"中国大陆")]),a("span",{class:"bangumi-info-item bangumi-play"},[a("span",{class:"bangumi-info-label"},"总播放"),a("em",null,"7115.8 万")]),a("span",{class:"bangumi-info-item bangumi-follow"},[a("span",{class:"bangumi-info-label"},"追番人数"),a("em",null,"184.1 万")]),a("span",{class:"bangumi-info-item bangumi-coin"},[a("span",{class:"bangumi-info-label"},"硬币数"),a("em",null,"7.9 万")]),a("span",{class:"bangumi-info-item bangumi-danmaku"},[a("span",{class:"bangumi-info-label"},"弹幕总数"),a("em",null,"8.2 万")]),a("span",{class:"bangumi-info-item bangumi-info-item-score"},[a("span",{class:"bangumi-info-label"},"评分"),a("em",null,"9.8")])])]),a("div",{class:"bangumi-comments"},[a("p",null,"羊历3131年，青青草原上，羊羊族群十分兴旺发达，羊羊们在这里幸福地生活着。直到灰太狼带着妻子红太狼搬到对岸的森林，羊羊们才真正在现实中见到书上记载的狼。 灰太狼每天想尽办法要跨越铁栅栏抓羊，但他没想...")])])]),a("div",{class:"bangumi-pagination"},[a("a",{class:"bangumi-button bangumi-firstpage",href:"javascript:;",target:"_self",onclick:"return false","data-pjax-state":""}," 首页"),a("a",{class:"bangumi-button bangumi-previouspage",href:"javascript:;",target:"_self",onclick:"return false","data-pjax-state":""},"上一页"),a("span",{class:"bangumi-pagenum"},"1 / 2"),a("a",{class:"bangumi-button bangumi-nextpage",href:"javascript:;",target:"_self",onclick:"return false","data-pjax-state":""},"下一页"),a("a",{class:"bangumi-button bangumi-lastpage",href:"javascript:;",target:"_self",onclick:"return false","data-pjax-state":""},"尾页")])])])])],-1)]))}const j=d(v,[["render",x]]);export{j as default};
