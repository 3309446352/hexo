import{P as O,u as N}from"./c5f0c112.js";import{d as y,u as T,c as f,_ as b,g as o,l as $,k as v,e as i,f as t,t as _,n as B,W as P,q as A,L as E,i as s,h as p,F as C,j as L,H as x,O as q,X as M,D as j,S as J,Y as V,Z as W,r as D,$ as H,s as F,N as G,a0 as I,o as K,a1 as U}from"./2c862cc9.js";import{C as X}from"./fda8ed59.js";import{B as Y}from"./c3326020.js";import"https://unpkg.com/@waline/client@v2/dist/waline.mjs";const Z=y({name:"ARLinkAvatar",components:{},props:{title:String,link:String,source:{type:String}},setup(){const e=T();return{linkGroupClasses:f(()=>({"links-group-avatar h-[120px] w-[120px] flex items-center justify-center text-white text-6xl font-bold":!0,"diamond-shape":e.themeConfig.theme.profile_shape==="diamond-avatar"})),avatarClasses:f(()=>({"h-full w-full shadow-xl m-0 transform-gpu":!0,[e.themeConfig.theme.profile_shape]:!0,"scale-[1.15]":e.themeConfig.theme.profile_shape==="diamond-avatar"}))}}}),Q=["href","title"],ee=["src","title"];function te(e,n,r,m,g,k){const d=i("ob-skeleton");return t(),o("a",{class:$(e.linkGroupClasses),href:e.link,target:"_blank",title:e.title},[e.source?(t(),o("img",{key:0,class:$(e.avatarClasses),src:e.source,alt:"link-avatar",title:e.title},null,10,ee)):(t(),v(d,{key:1,class:$(e.avatarClasses),width:"100%",height:"100%",circle:""},null,8,["class"]))],10,Q)}const ne=b(Z,[["render",te]]),se=y({name:"ARPrimaryButton",components:{},props:{text:String},setup(){const e=T();return{gradientBackground:f(()=>({background:e.themeConfig.theme.header_gradient_css}))}}});function oe(e,n,r,m,g,k){return t(),o("a",{class:"py-1 px-3 text-white flex items-center justify-center z-10 transition cursor-pointer rounded-xl font-semibold select-none",style:B(e.gradientBackground)},_(e.text),5)}const ae=b(se,[["render",oe]]),ie=y({name:"ARSecondaryButton",components:{},props:{text:String},setup(){}}),re={class:"py-1 px-3 text-ob-bright flex items-center justify-center z-10 transition cursor-pointer rounded-xl bg-ob-deep-900 border-solid border-ob-bright border-t-2 border-b-2 border-r-2 border-l-2 opacity-80 select-none"};function le(e,n,r,m,g,k){return t(),o("a",re,_(e.text),1)}const ce=b(ie,[["render",le]]),pe=y({name:"ARLinkBox",components:{LinkAvatar:ne,MainTitle:P,PrimaryButton:ae,SecondaryButton:ce},emits:["onApplyClicked"],props:{gradientBackground:{type:Object,default:()=>({}),required:!0},data:{type:Array,default:()=>[],required:!0}},setup(e,{emit:n}){const{t:r}=A(),m=E();return{applyClicked:()=>{n("onApplyClicked")},randomJump:()=>{m.sendNotification(r("settings.notification-random-jump")),setTimeout(()=>{const l=e.data[Math.floor(Math.random()*24)][Math.floor(Math.random()*2)];window.open(l.link,"_blank")},6e3)},t:r}}});const de={class:"ob-gradient-plate absolute bg-ob-deep-900 rounded-xl opacity-90 flex justify-center items-center shadow-lg hover:shadow-2xl duration-300 overflow-hidden"},ue={class:"flex w-full relative overflow-hidden"},me={class:"top-6 left-6 absolute flex flex-col"},ge={class:"hidden md:flex text-ob-dim text-sm"},ke={class:"absolute right-8 top-8 flex space-x-3"},he={class:"link-group-wrapper flex flex-nowrap pt-28 left-0 top-0"};function fe(e,n,r,m,g,k){const d=i("MainTitle"),l=i("SecondaryButton"),u=i("PrimaryButton"),a=i("LinkAvatar");return t(),o("div",{class:"h-[25rem] w-full rounded-2xl relative shadow-xl mb-8 flex",style:B(e.gradientBackground)},[s("div",de,[s("div",ue,[s("div",me,[s("div",ge,_(e.t("settings.links")),1),p(d,{title:"settings.links-slogan",icon:"friends","text-size":"text-3xl",paddings:"hidden md:flex pb-2",margins:"mb-0 mt-0",uppercase:!1})]),s("div",ke,[p(l,{text:e.t("settings.links-random-visit"),onClick:n[0]||(n[0]=c=>e.randomJump())},null,8,["text"]),p(u,{text:e.t("settings.links-apply"),onClick:n[1]||(n[1]=c=>e.applyClicked())},null,8,["text"])]),s("div",he,[e.data.length===0?(t(),o(C,{key:0},L(48,c=>s("div",{class:"links-group-avatar-pair ml-4 pb-7 pt-4 select-none",key:c},[p(a),p(a)])),64)):(t(!0),o(C,{key:1},L(e.data.entries(),([c,h])=>(t(),o("div",{class:"links-group-avatar-pair ml-4 pb-7 pt-4 select-none",key:c},[p(a,{title:h[0].nick,link:h[0].link,source:h[0].avatar},null,8,["title","link","source"]),p(a,{title:h[1].nick,link:h[1].link,source:h[1].avatar},null,8,["title","link","source"])]))),128))])])])],4)}const _e=b(pe,[["render",fe]]),ve=y({name:"ARLinkCard",components:{},props:{avatar:String,link:String,nick:String,description:String,type:String,vip:Boolean,categoryMode:Boolean},setup(e){const n=T(),{t:r}=A();return{t:r,titleStyle:{"text-xl":!0,"vip-text":!!e.vip},gradientBackground:f(()=>({background:n.themeConfig.theme.header_gradient_css})),articleClasses:f(()=>({"article-container":!0,highlighted:!!e.vip,"category-mode":!!e.categoryMode}))}}});const ye={class:"article"},be={class:"article-thumbnail"},$e={key:0,alt:""},Ce={key:1,src:q},Le={class:"article-content"},Se={key:0},we=["href"],Be={key:0};function Te(e,n,r,m,g,k){const d=i("ob-skeleton"),l=M("lazy");return t(),o("li",{id:"link-card",class:$(e.articleClasses)},[s("div",ye,[s("div",be,[e.avatar?x((t(),o("img",$e,null,512)),[[l,e.avatar]]):(t(),o("img",Ce)),s("span",{class:"thumbnail-screen",style:B(e.gradientBackground)},null,4)]),s("div",Le,[s("span",null,[e.type&&!e.vip?(t(),o("b",Se,_(e.t(e.type)),1)):e.type&&e.vip?(t(),o("b",{key:1,class:"vip",style:B(e.gradientBackground)},_(e.t(e.type)),5)):(t(),v(d,{key:2,tag:"b",height:"20px",width:"35px"}))]),s("a",{href:e.link,target:"_blank"},[s("h1",{class:$(e.titleStyle)},_(e.nick),3)],8,we),e.description?(t(),o("p",Be,_(e.description),1)):(t(),v(d,{key:1,tag:"p",count:4,height:"16px"}))])])],2)}const z=b(ve,[["render",Te]]),Ae=["links-badge-tech","links-badge-designer","links-badge-vip","links-badge-personal"];function R(e){return Ae.includes(e.replace("-desc",""))?`settings.${e}`:e.match("-desc")?"":e}const De=y({name:"ARLinkCategory",components:{LinkCard:z,MainTitle:P},props:{links:{type:Object,default:()=>({})}},setup(){const{t:e}=A();return{linkWrapperClasses:n=>({"grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6":!0,"xl:grid-cols-5":n!=="links-badge-vip","xl:grid-cols-4":n==="links-badge-vip"}),localizeLink:R,t:e}}}),Pe={class:"text-ob-dim mb-8 text-lg"};function xe(e,n,r,m,g,k){const d=i("MainTitle"),l=i("LinkCard");return e.links?(t(!0),o(C,{key:0},L(Object.keys(e.links),u=>(t(),o(C,{key:u},[p(d,{title:e.localizeLink(u),count:e.links[u].length,margins:"mb-2",uppercase:!1},null,8,["title","count"]),s("span",Pe,_(e.t(`${e.localizeLink(u+"-desc")}`)),1),s("ul",{class:$(e.linkWrapperClasses(u))},[(t(!0),o(C,null,L(e.links[u].entries(),([a,c])=>(t(),v(l,{key:a,nick:c.nick,link:c.link,avatar:c.avatar,description:c.description,type:e.localizeLink(c.label),vip:c.label==="links-badge-vip","category-mode":!0},null,8,["nick","link","avatar","description","type","vip"]))),128))],2)],64))),128)):j("",!0)}const Me=b(De,[["render",xe]]),je=y({name:"ARLinkList",components:{SubTitle:J},props:{links:{type:Array,default:()=>[],required:!0}},setup(){return{localizeLink:R}}}),ze={class:"grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-8"};function Re(e,n,r,m,g,k){const d=i("SubTitle"),l=i("LinkCard");return t(),o("div",null,[p(d,{title:"settings.links",icon:"friends",count:e.links.length,uppercase:!1},null,8,["count"]),s("ul",ze,[(t(!0),o(C,null,L(e.links.entries(),([u,a])=>(t(),v(l,{key:u,nick:a.nick,link:a.link,avatar:a.avatar,description:a.description,type:e.localizeLink(a.label),vip:a.label==="links-badge-vip"},null,8,["nick","link","avatar","description","type","vip"]))),128))])])}const Oe=b(je,[["render",Re]]),Ne=y({name:"ARLinks",components:{ObSkeleton:V,PostStats:O,LinkBox:_e,LinkCard:z,LinkCategoryList:Me,LinkList:Oe,Comment:X,Breadcrumbs:Y},setup(){const e=W(),n=T(),r=D(new H),m=D(),g=F(),{t:k}=A(),{pageTitle:d,updateTitle:l}=G(),{jumpToEle:u}=N(),{enabledCommentPlugin:a}=I(),c=async()=>{var S,w;r.value=await e.fetchArticle("links"),l(n.locale),await U(),(S=m.value)==null||S.getCommentCount(),(w=m.value)==null||w.getPostView()},h=()=>{u("content")};return K(c),{currentPath:f(()=>g.path),pluginConfigs:f(()=>n.themeConfig.plugins),gradientBackground:f(()=>({background:n.themeConfig.theme.header_gradient_css})),enabledComment:f(()=>r.value.comments&&a.value.plugin!==""),pageTitle:d,jumpToContent:h,postStatsRef:m,pageData:r,t:k}}}),Ee={class:"mt-20"},qe={class:"flex flex-col"},Je={class:"post-header"},Ve={key:0,class:"post-title text-white uppercase"},We={class:"flex flex-row items-center justify-start mt-8 mb-4"},He={class:"mt-8",id:"content"},Fe=["innerHTML"],Ge={key:1,class:"bg-ob-deep-800 px-14 py-16 rounded-2xl shadow-xl block min-h-screen"},Ie={key:2,id:"comments"};function Ke(e,n,r,m,g,k){const d=i("Breadcrumbs"),l=i("ob-skeleton"),u=i("PostStats"),a=i("LinkBox"),c=i("LinkCategoryList"),h=i("LinkList"),S=i("Comment"),w=M("scroll-spy");return t(),o("div",Ee,[p(d,{current:e.pageTitle},null,8,["current"]),s("div",qe,[s("div",Je,[e.pageTitle?(t(),o("h1",Ve,_(e.pageTitle),1)):(t(),v(l,{key:1,class:"post-title text-white uppercase",width:"100%",height:"clamp(1.2rem, calc(1rem + 3.5vw), 4rem)"})),s("div",We,[p(u,{"post-word-count":e.pageData.count_time.symbolsCount,"post-time-count":e.pageData.count_time.symbolsTime,"post-title":e.pageData.title,"current-path":e.currentPath,"plugin-configs":e.pluginConfigs,comments:e.enabledComment,ref:"postStatsRef"},null,8,["post-word-count","post-time-count","post-title","current-path","plugin-configs","comments"])])]),p(a,{"gradient-background":e.gradientBackground,data:e.pageData.avatarWall,onOnApplyClicked:n[0]||(n[0]=Ue=>e.jumpToContent())},null,8,["gradient-background","data"]),e.pageData.categoryMode?(t(),v(c,{key:0,links:e.pageData.data},null,8,["links"])):(t(),v(h,{key:1,links:e.pageData.data},null,8,["links"])),s("div",He,[e.pageData.content?x((t(),o("div",{key:0,class:"post-html",innerHTML:e.pageData.content},null,8,Fe)),[[w,{sectionSelector:"h1, h2, h3, h4, h5, h6"}]]):(t(),o("div",Ge,[p(l,{tag:"div",count:1,height:"36px",width:"150px",class:"mb-6"}),n[1]||(n[1]=s("br",null,null,-1)),p(l,{tag:"div",count:35,height:"16px",width:"100px",class:"mr-2"}),n[2]||(n[2]=s("br",null,null,-1)),n[3]||(n[3]=s("br",null,null,-1)),p(l,{tag:"div",count:25,height:"16px",width:"100px",class:"mr-2"})]))]),e.enabledComment&&e.pageData.title&&e.pageData.text&&e.pageData.uid?(t(),o("div",Ie,[p(S,{title:e.pageData.title,body:e.pageData.text,uid:e.pageData.uid},null,8,["title","body","uid"])])):j("",!0)])])}const tt=b(Ne,[["render",Ke]]);export{tt as default};
