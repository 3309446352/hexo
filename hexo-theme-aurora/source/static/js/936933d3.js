import{d as i,L as u,Z as l,r as d,$ as f,q as g,N as _,o as B,B as C,O as b,_ as h,g as A,h as c,e as m,f as P}from"./ecd144dc.js";import{P as T}from"./23ae4cd8.js";import{B as $}from"./e8b27180.js";import"https://unpkg.com/@waline/client@v2/dist/waline.mjs";import"./775124ba.js";import"./54c097e6.js";const v=i({name:"ARAbout",components:{PageContent:T,Breadcrumbs:$},setup(){const e=u(),o=l(),t=d(new f),{t:a}=g(),{pageTitle:n,updateTitle:s}=_();return B(async()=>{t.value=await o.fetchArticle("about"),e.setHeaderImage(b),s()}),C(()=>{e.resetHeaderImage()}),{pageTitle:n,pageData:t,t:a}}}),S={class:"mt-20"};function I(e,o,t,a,n,s){const r=m("Breadcrumbs"),p=m("PageContent");return P(),A("div",S,[c(r,{current:e.pageTitle},null,8,["current"]),c(p,{post:e.pageData,title:e.pageTitle},null,8,["post","title"])])}const y=h(v,[["render",I]]);export{y as default};
