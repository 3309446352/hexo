import{d as T,P as k,L as B,v as C,q as P,r as f,a0 as b,N as w,z as S,B as $,O as x,_ as A,g as l,h as p,i as e,t as n,F as g,j as y,e as _,f as r,E as H}from"./b74346a1.js";import{B as I}from"./fce2c7e6.js";import"https://unpkg.com/@waline/client@v2/dist/waline.mjs";const N=T({name:"ArArchives",components:{Breadcrumbs:I,Paginator:k},setup(){const t=B(),s=C(),{t:h}=P(),d=f(new b().data),i=f({pageTotal:0,page:1}),{pageTitle:v,updateTitle:m}=w(),c=async()=>{const a=await s.fetchArchives(i.value.page);i.value.pageTotal=a.total,d.value=a.data,t.setHeaderImage(x),m()},u=a=>{i.value.page=a,window.scrollTo({top:0,behavior:"smooth"}),c()};return S(c),$(()=>{t.resetHeaderImage()}),{pageTitle:v,pageChangeHandler:u,pagination:i,archives:d,t:h}}});const z={class:"flex flex-col mt-20"},D={class:"post-header"},E={class:"post-title text-white uppercase"},F={class:"bg-ob-deep-800 px-14 py-16 rounded-2xl shadow-xl block min-h-screen"},L={class:"timeline timeline-centered"},V={class:"timeline-item period"},j={class:"timeline-content"},q={class:"timeline-title"},M={class:"timeline-info"},O={class:"timeline-content"},U={class:"timeline-title"};function G(t,s,h,d,i,v){const m=_("Breadcrumbs"),c=_("router-link"),u=_("Paginator");return r(),l("div",z,[p(m,{current:t.pageTitle},null,8,["current"]),e("div",D,[e("h1",E,n(t.pageTitle),1)]),e("div",F,[e("ul",L,[(r(!0),l(g,null,y(t.archives,a=>(r(),l(g,{key:`${a.month}-${a.year}}`},[e("li",V,[s[0]||(s[0]=e("div",{class:"timeline-info"},null,-1)),s[1]||(s[1]=e("div",{class:"timeline-marker"},null,-1)),e("div",j,[e("h2",q,n(t.t(a.month))+" "+n(a.year),1)])]),(r(!0),l(g,null,y(a.posts,o=>(r(),l("li",{class:"timeline-item",key:o.slug},[e("div",M,[e("span",null,n(t.t(o.date.month))+" "+n(o.date.day)+", "+n(o.date.year),1)]),s[2]||(s[2]=e("div",{class:"timeline-marker"},null,-1)),e("div",O,[p(c,{to:{name:"post-slug",params:{slug:o.slug}}},{default:H(()=>[e("h3",U,n(o.title),1)]),_:2},1032,["to"]),e("p",null,n(o.text),1)])]))),128))],64))),128))]),p(u,{pageSize:12,pageTotal:t.pagination.pageTotal,page:t.pagination.page,onPageChange:t.pageChangeHandler},null,8,["pageTotal","page","onPageChange"])])])}const R=A(N,[["render",G],["__scopeId","data-v-2a5ed61d"]]);export{R as default};
