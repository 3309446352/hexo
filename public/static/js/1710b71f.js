import{a7 as I,d as $,Q as M,a3 as b,u as q,v as z,y,o as P,c as R,a8 as F,a9 as V,aa as N,_ as U,e as A,g as B,h as D,l as E,i as v,f as K}from"./4da77462.js";const O=({appId:o,appKey:u,avatar:h,placeholder:f,visitor:e,lang:r,meta:i,requiredFields:_,avatarForce:t,path:n})=>{new Valine({el:"#vcomments",appId:o,appKey:u,avatar:h,placeholder:f,visitor:e,lang:r,meta:i??[],requiredFields:_??[],avatarForce:t,path:I(n)})},Q=$({name:"ObComment",props:{title:{type:String,default:""},body:{type:String,default:""},uid:{type:String,default:""}},components:{MainTitle:M},setup(o){const u=b(o).title,h=b(o).body,f=b(o).uid,e=q(),r=z();let i;const _=(t,n,c)=>{const k=!t||t===""?"":t,x=!n||n===""?window.location.href:`${window.location.href} 
 ${n}`,S=e.themeConfig.plugins.gitalk.id==="pathname"?window.location.pathname:c;if(r.setCache({title:t,body:n,uid:c}),!!e.configReady){if(e.themeConfig.plugins.gitalk.enable){const a=e.themeConfig.plugins.gitalk.proxy===""?"https://cors-anywhere.azm.workers.dev/https://github.com/login/oauth/access_token":e.themeConfig.plugins.gitalk.proxy,{clientID:l,clientSecret:s,repo:d,owner:p,admin:m,language:g}=e.themeConfig.plugins.gitalk;F({clientID:l,clientSecret:s,repo:d,owner:p,admin:m,language:g,uid:S,title:k,body:x,proxy:a})}else if(e.themeConfig.plugins.valine.enable){const{app_id:a,app_key:l,avatar:s,placeholder:d,visitor:p,lang:m,meta:g,requiredFields:w,avatarForce:C}=e.themeConfig.plugins.valine;O({appId:a,appKey:l,avatar:s,placeholder:d,visitor:p,lang:m,meta:g,requiredFields:w,avatarForce:C,path:window.location.pathname})}else if(e.themeConfig.plugins.twikoo.enable){const{envId:a,region:l,lang:s}=e.themeConfig.plugins.twikoo;V({envId:a,region:l,lang:s,path:window.location.pathname})}else if(e.themeConfig.plugins.waline.enable){const{serverURL:a,login:l,reaction:s,meta:d,requiredMeta:p,commentSorting:m,wordLimit:g,imageUploader:w,pageSize:C}=e.themeConfig.plugins.waline;i=N({serverURL:a,lang:e.locale??"en",login:l,reaction:s,meta:d,requiredMeta:p,commentSorting:m,wordLimit:g,imageUploader:w,pageSize:C})}}};return y(()=>e.configReady,(t,n)=>{if(!n&&t){const c=r.cachePost;_(c.title,c.body,c.uid)}}),y(()=>e.locale,(t,n)=>{i&&t!==void 0&&t!==n&&i.update({lang:t})}),P(()=>{_(u.value,h.value,f.value)}),{wrapperClasses:R(()=>({"bg-ob-deep-800 p-4 mt-8 lg:px-14 lg:py-10 rounded-2xl shadow-xl mb-8 lg:mb-0":!0,[`comment-${e.themeConfig.theme.profile_shape}`]:!0}))}}});const T=v("div",{id:"gitalk-container"},null,-1),j=v("div",{id:"vcomments"},null,-1),G=v("div",{id:"tcomment"},null,-1),H=v("div",{id:"waline"},null,-1);function J(o,u,h,f,e,r){const i=A("MainTitle");return K(),B("div",{class:E(o.wrapperClasses)},[D(i,{title:"titles.comment",icon:"quote",paddings:"pb-2 pt-0","text-size":"text-2xl md:text-3xl"},null,8,["title"]),T,j,G,H],2)}const W=U(Q,[["render",J]]);export{W as C};
