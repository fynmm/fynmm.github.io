import{_ as y,o as c,c as v,d,u as _,g,b as l,w as A,l as r,e as w,A as u,a0 as C,a1 as b,a2 as x,a3 as P,a4 as F,a5 as E,a6 as R,a7 as D,a8 as L,a9 as S,aa as T,j as $,x as j,ab as k,ac as B,ad as O,ae as V}from"./chunks/framework.f15d8f8c.js";import{t as f}from"./chunks/theme.ee8790a1.js";const I={},N={class:"footer"};function H(e,t){return c(),v("div",N," Copyright 2023-2024 by HeartlessSoy. ")}const G=y(I,[["render",H],["__scopeId","data-v-d78c18ea"]]),M=d({__name:"Layout",setup(e){const{Layout:t}=f,{page:a,theme:n,frontmatter:s}=_(),h=g(()=>s.value.aside!==!1&&s.value.layout!=="home");return(Q,W)=>(c(),l(r(t),null,{"layout-bottom":A(()=>{var p,i;return[!h.value&&(((p=r(n).footerConfig)==null?void 0:p.showFooter)??!0)&&(((i=r(s))==null?void 0:i.showFooter)??!0)?(c(),l(G,{key:0})):w("",!0)]}),_:1}))}}),U={Layout:M,extends:f,NotFound:()=>"custom 404",enhanceApp({app:e,router:t,siteData:a}){}};function m(e){if(e.extends){const t=m(e.extends);return{...t,...e,async enhanceApp(a){t.enhanceApp&&await t.enhanceApp(a),e.enhanceApp&&await e.enhanceApp(a)}}}return e}const o=m(U),q=d({name:"VitePressApp",setup(){const{site:e}=_();return $(()=>{j(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),k(),B(),O(),o.setup&&o.setup(),()=>V(o.Layout)}});async function z(){const e=K(),t=J();t.provide(b,e);const a=x(e.route);return t.provide(P,a),t.component("Content",F),t.component("ClientOnly",E),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return a.frontmatter.value}},$params:{get(){return a.page.value.params}}}),o.enhanceApp&&await o.enhanceApp({app:t,router:e,siteData:R}),{app:t,router:e,data:a}}function J(){return D(q)}function K(){let e=u,t;return L(a=>{let n=S(a);return n?(e&&(t=n),(e||t===n)&&(n=n.replace(/\.js$/,".lean.js")),u&&(e=!1),T(()=>import(n),[])):null},o.NotFound)}u&&z().then(({app:e,router:t,data:a})=>{t.go().then(()=>{C(t.route,a.site),e.mount("#app")})});export{z as createApp};