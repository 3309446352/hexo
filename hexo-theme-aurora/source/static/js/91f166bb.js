import{d as c,m as i,N as d,_ as l,g as p,i as e,h as o,t as m,e as a,f as _}from"./99708753.js";import"https://unpkg.com/@waline/client@v2/dist/waline.mjs";import{B as u}from"./b684df7c.js";const f=c({name:"ArCategory",components:{Sidebar:i,Breadcrumbs:u},setup(){const{pageTitle:s}=d();return{pageTitle:s}}}),h={class:"flex flex-col mt-20"},g={class:"post-header"},b={class:"post-title text-white uppercase"},v={class:"main-grid"},x={class:"col-span-1"};function B(s,t,y,S,T,$){const r=a("Breadcrumbs"),n=a("Sidebar");return _(),p("div",h,[e("div",g,[o(r,{current:s.pageTitle},null,8,["current"]),e("h1",b,m(s.pageTitle),1)]),e("div",v,[t[0]||(t[0]=e("div",{class:"relative"},[e("div",{class:"post-html bg-ob-deep-800 px-14 py-16 rounded-2xl shadow-xl block min-h-screen"})],-1)),e("div",x,[o(n)])])])}const w=l(f,[["render",B]]);export{w as default};
