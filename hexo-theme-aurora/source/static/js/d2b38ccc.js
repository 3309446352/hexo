import{d as i,L as u,X as l,r as d,Y as f,q as g,N as _,o as B,B as C,O as b,_ as h,g as A,h as c,e as m,f as P}from"./ad5a6b1d.js";import{P as T}from"./1a9631ea.js";import{B as v}from"./440d6894.js";import"https://unpkg.com/@waline/client@v2/dist/waline.mjs";import"./2ffa78e7.js";import"./db1f744c.js";const S=i({name:"ARAbout",components:{PageContent:T,Breadcrumbs:v},setup(){const e=u(),o=l(),t=d(new f),{t:a}=g(),{pageTitle:n,updateTitle:s}=_();return B(async()=>{t.value=await o.fetchArticle("about"),e.setHeaderImage(b),s()}),C(()=>{e.resetHeaderImage()}),{pageTitle:n,pageData:t,t:a}}}),$={class:"mt-20"};function I(e,o,t,a,n,s){const r=m("Breadcrumbs"),p=m("PageContent");return P(),A("div",$,[c(r,{current:e.pageTitle},null,8,["current"]),c(p,{post:e.pageData,title:e.pageTitle},null,8,["post","title"])])}const y=h(S,[["render",I]]);export{y as default};
