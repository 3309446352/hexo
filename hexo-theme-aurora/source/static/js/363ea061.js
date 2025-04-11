import{d as k,p as x,b as w,_ as h,e as d,f as m,g as u,i as l,h as a,D as B,S,a9 as C,a1 as $,r as p,o as E,B as j,c as v,R as f,k as H,E as g,H as b,I,n as N,G as L,aa as z}from"./4ce168ee.js";import{u as D}from"./bac92b40.js";const M=k({name:"ArNavigator",components:{SvgIcon:x},props:{comments:Boolean},setup(){const o=w(),{jumpToEle:e}=D();return{goBack:()=>{o.back()},backToTop:()=>{window.scrollTo({top:0,behavior:"smooth"})},jumpToComments:()=>{e("comments")}}}}),q={id:"sidebar-navigator",class:"flex flex-row bg-ob-deep-800 rounded-xl shadow-2xl justify-items-center overflow-hidden"};function R(o,e,r,t,s,n){const c=d("SvgIcon");return m(),u("ul",q,[l("li",{class:"border-r-4 border-ob-deep-900 flex justify-center py-3 w-full hover:opacity-50 hover:text-ob transition-all cursor-pointer",onClick:e[0]||(e[0]=(...i)=>o.goBack&&o.goBack(...i))},[a(c,{class:"inline-block text-3xl","icon-class":"go-back",fill:"none",stroke:"currentColor"})]),l("li",{class:"border-r-4 border-ob-deep-900 flex justify-center py-3 w-full hover:opacity-50 hover:text-ob transition-all cursor-pointer",onClick:e[1]||(e[1]=(...i)=>o.backToTop&&o.backToTop(...i))},[a(c,{class:"inline-block text-3xl","icon-class":"back-to-top",fill:"none",stroke:"currentColor"})]),o.comments?(m(),u("li",{key:0,class:"flex justify-center py-3 w-full hover:opacity-50 hover:text-ob transition-all cursor-pointer",onClick:e[2]||(e[2]=(...i)=>o.jumpToComments&&o.jumpToComments(...i)),"data-dia":"jump-to-comment"},[a(c,{class:"inline-block text-3xl","icon-class":"quote",fill:"none",stroke:"currentColor"})])):B("",!0)])}const V=h(M,[["render",R],["__scopeId","data-v-0d371069"]]),A=k({name:"ObTOC",components:{SubTitle:S,Sticky:C,Navigator:V},props:{toc:String,comments:Boolean},setup(o){const e=$(o).toc,r=p(0),t=p(0),s=()=>{const n=document.getElementById("sidebar-navigator");r.value=n?n.clientHeight:0,t.value=window.innerHeight-r.value-63-18-46-18-60-18};return E(()=>{s(),window.addEventListener("resize",s)}),j(()=>{window.removeEventListener("resize",s)}),{tocData:e,showToc:v(()=>!(e!==void 0&&e.value==="")),sideBoxStyle:v(()=>({maxHeight:`${t.value}px`,overflowY:"scroll",overflowX:"hidden"}))}}}),O={id:"sticky-sidebar"},G={class:"sidebar-box mb-4"},J=["innerHTML"];function U(o,e,r,t,s,n){const c=d("SubTitle"),i=d("Navigator"),y=d("Sticky"),T=f("scroll-spy-active"),_=f("scroll-spy-link");return m(),H(y,{stickyTop:16+63,endingElId:"footer-link",dynamicElClass:"#sticky-sidebar"},{default:g(()=>[l("div",O,[a(L,{name:"fade-slide-y",mode:"out-in"},{default:g(()=>[b(l("div",G,[a(c,{title:"titles.toc",icon:"toc"}),b(l("div",{id:"toc-side-box",innerHTML:o.tocData,style:N(o.sideBoxStyle)},null,12,J),[[T,{selector:".toc-item"}],[_]])],512),[[I,o.showToc]])]),_:1}),a(i,{comments:o.comments},null,8,["comments"])])]),_:1})}const F=h(A,[["render",U]]);function K(){const o=z(),e=t=>{o.openImage(t)};return{initializeLightBox:()=>{const t=document.querySelector(".post-html");if(!t)return;let s=t.querySelectorAll("img");for(let n=0;n<s.length;n++)o.addImage(s[n].src),s[n].addEventListener("click",function(){e(this)})}}}export{F as T,K as u};
