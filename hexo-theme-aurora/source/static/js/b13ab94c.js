import{d as v,Z as b,u as P,w as S,r as g,$ as B,s as D,q as T,a0 as w,y,z as A,c as f,_ as $,g as C,h as l,E as k,e as i,f as _,D as E}from"./aa42fd17.js";import{P as I}from"./d85b13e0.js";import{B as M}from"./504d9e13.js";import{C as N}from"./b642a1a5.js";import"https://unpkg.com/@waline/client@v2/dist/waline.mjs";import"./3e89645e.js";import"./aa15216e.js";const R=v({name:"ARPage",components:{PageContent:I,Breadcrumbs:M,Comment:N},setup(){const e=b(),a=P(),u=S(),n=g(new B),s=D(),{t:p}=T(),o=g(),{enabledCommentPlugin:r}=w(),m=async()=>{const t=await e.fetchArticle(String(s.params.slug));n.value=t,o.value=t.title,d(a.locale)},d=t=>{const h=t??"en",c=a.themeConfig.menu.menus[String(s.params.slug)];o.value=c.i18n&&c.i18n[h]||c.name,u.setTitle(o.value)};return y(()=>a.locale,t=>{t&&d(t)}),A(m),{enabledComment:f(()=>n.value.comments&&r.value.plugin!==""),pageTitle:f(()=>o.value),pageData:n,t:p}}}),V={class:"mt-20"},q={key:0,id:"comments"};function z(e,a,u,n,s,p){const o=i("Breadcrumbs"),r=i("Comment"),m=i("PageContent");return _(),C("div",V,[l(o,{current:e.pageTitle},null,8,["current"]),l(m,{post:e.pageData,title:e.pageTitle},{default:k(()=>[e.enabledComment?(_(),C("div",q,[l(r,{title:e.pageData.title,body:e.pageData.text,uid:e.pageData.uid},null,8,["title","body","uid"])])):E("",!0)]),_:1},8,["post","title"])])}const K=$(R,[["render",z]]);export{K as default};
