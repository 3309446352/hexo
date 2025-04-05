import{d as C,W as S,m as w,a2 as P,u as k,L as T,s as x,q as B,a3 as b,r as $,Z as H,y,o as I,B as L,c as m,$ as R,_ as V,g as d,i as o,t as D,k as M,h as n,H as O,a4 as j,E,e as c,V as N,f as r}from"./b74346a1.js";import{T as q,u as z}from"./96951ca5.js";import{P as A}from"./77e13276.js";const U=C({name:"ObPageContent",components:{ObSkeleton:S,Sidebar:w,Toc:q,Profile:P,PostStats:A},props:{post:{type:Object,default:()=>({})},title:{type:String,default:""}},setup(t){const e=k(),p=T(),_=x(),{t:f}=B(),a=b(t).post,s=b(t).title,l=$(),{enabledCommentPlugin:h}=H(),{initializeLightBox:g}=z();return y(()=>a.value.covers,i=>{i&&p.setHeaderImage(i)}),y(()=>a.value.count_time.symbolsTime,async i=>{var u,v;i&&(await R(),g(),(u=l.value)==null||u.getCommentCount(),(v=l.value)==null||v.getPostView())}),I(()=>{p.setHeaderImage(a.value.covers)}),L(()=>{p.resetHeaderImage()}),{enabledComment:m(()=>a.value.comments&&h.value.plugin!==""),pageTitle:m(()=>s.value!==""?s.value:a.value.title),currentPath:m(()=>_.path),pluginConfigs:m(()=>e.themeConfig.plugins),postStatsRef:l,t:f}}});const W={class:"flex flex-col"},Z={class:"post-header"},F={key:0,class:"post-title text-white uppercase"},G={class:"flex flex-row items-center justify-start mt-8"},J={class:"main-grid"},K={class:"relative"},Q=["innerHTML"],X={key:1,class:"bg-ob-deep-800 px-14 py-16 rounded-2xl shadow-xl block min-h-screen"},Y={class:"col-span-1"};function tt(t,e,p,_,f,a){const s=c("ob-skeleton"),l=c("PostStats"),h=c("Profile"),g=c("Toc"),i=c("Sidebar"),u=N("scroll-spy");return r(),d("div",W,[o("div",Z,[t.post.title?(r(),d("h1",F,D(t.pageTitle),1)):(r(),M(s,{key:1,class:"post-title text-white uppercase",width:"100%",height:"clamp(1.2rem, calc(1rem + 3.5vw), 4rem)"})),o("div",G,[n(l,{"post-word-count":t.post.count_time.symbolsCount,"post-time-count":t.post.count_time.symbolsTime,"post-title":t.post.title,"current-path":t.currentPath,"plugin-configs":t.pluginConfigs,comments:t.enabledComment,ref:"postStatsRef"},null,8,["post-word-count","post-time-count","post-title","current-path","plugin-configs","comments"])])]),o("div",J,[o("div",K,[t.post.content?O((r(),d("div",{key:0,class:"post-html",innerHTML:t.post.content},null,8,Q)),[[u,{sectionSelector:"h1, h2, h3, h4, h5, h6"}]]):(r(),d("div",X,[n(s,{tag:"div",count:1,height:"36px",width:"150px",class:"mb-6"}),e[0]||(e[0]=o("br",null,null,-1)),n(s,{tag:"div",count:35,height:"16px",width:"100px",class:"mr-2"}),e[1]||(e[1]=o("br",null,null,-1)),e[2]||(e[2]=o("br",null,null,-1)),n(s,{tag:"div",count:25,height:"16px",width:"100px",class:"mr-2"})])),j(t.$slots,"default",{},void 0,!0)]),o("div",Y,[n(i,null,{default:E(()=>[n(h,{author:"blog-author"}),n(g,{toc:t.post.toc,comments:t.enabledComment},null,8,["toc","comments"])]),_:1})])])])}const nt=V(U,[["render",tt],["__scopeId","data-v-1d305902"]]);export{nt as P};
