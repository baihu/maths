const qe=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}};qe();function I(){}function Se(e,t){for(const n in t)e[n]=t[n];return e}function je(e){return e()}function _e(){return Object.create(null)}function F(e){e.forEach(je)}function Oe(e){return typeof e=="function"}function Z(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function Me(e){return Object.keys(e).length===0}function De(e,...t){if(e==null)return I;const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function y(e,t){e.appendChild(t)}function N(e,t,n){e.insertBefore(t,n||null)}function R(e){e.parentNode.removeChild(e)}function ee(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function O(e){return document.createElement(e)}function x(e){return document.createTextNode(e)}function P(){return x(" ")}function le(){return x("")}function V(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function j(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Te(e){return Array.from(e.childNodes)}function te(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function ze(e,t,n,r){n===null?e.style.removeProperty(t):e.style.setProperty(t,n,r?"important":"")}function Fe(e,t,{bubbles:n=!1,cancelable:r=!1}={}){const o=document.createEvent("CustomEvent");return o.initCustomEvent(e,n,r,t),o}let X;function W(e){X=e}function ie(){if(!X)throw new Error("Function called outside component initialization");return X}function Be(e){ie().$$.after_update.push(e)}function Ue(e){ie().$$.on_destroy.push(e)}function Ye(){const e=ie();return(t,n,{cancelable:r=!1}={})=>{const o=e.$$.callbacks[t];if(o){const i=Fe(t,n,{cancelable:r});return o.slice().forEach(u=>{u.call(e,i)}),!i.defaultPrevented}return!0}}function he(e,t){const n=e.$$.callbacks[t.type];n&&n.slice().forEach(r=>r.call(this,t))}const K=[],pe=[],J=[],ge=[],Le=Promise.resolve();let oe=!1;function xe(){oe||(oe=!0,Le.then(Ae))}function Ke(){return xe(),Le}function se(e){J.push(e)}const ne=new Set;let H=0;function Ae(){const e=X;do{for(;H<K.length;){const t=K[H];H++,W(t),We(t.$$)}for(W(null),K.length=0,H=0;pe.length;)pe.pop()();for(let t=0;t<J.length;t+=1){const n=J[t];ne.has(n)||(ne.add(n),n())}J.length=0}while(K.length);for(;ge.length;)ge.pop()();oe=!1,ne.clear(),W(e)}function We(e){if(e.fragment!==null){e.update(),F(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(se)}}const Q=new Set;let T;function ce(){T={r:0,c:[],p:T}}function ue(){T.r||F(T.c),T=T.p}function D(e,t){e&&e.i&&(Q.delete(e),e.i(t))}function z(e,t,n,r){if(e&&e.o){if(Q.has(e))return;Q.add(e),T.c.push(()=>{Q.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}}function Ce(e,t){const n={},r={},o={$$scope:1};let i=e.length;for(;i--;){const u=e[i],s=t[i];if(s){for(const l in u)l in s||(r[l]=1);for(const l in s)o[l]||(n[l]=s[l],o[l]=1);e[i]=s}else for(const l in u)o[l]=1}for(const u in r)u in n||(n[u]=void 0);return n}function Ie(e){return typeof e=="object"&&e!==null?e:{}}function G(e){e&&e.c()}function U(e,t,n,r){const{fragment:o,on_mount:i,on_destroy:u,after_update:s}=e.$$;o&&o.m(t,n),r||se(()=>{const l=i.map(je).filter(Oe);u?u.push(...l):F(l),e.$$.on_mount=[]}),s.forEach(se)}function Y(e,t){const n=e.$$;n.fragment!==null&&(F(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Xe(e,t){e.$$.dirty[0]===-1&&(K.push(e),xe(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ae(e,t,n,r,o,i,u,s=[-1]){const l=X;W(e);const c=e.$$={fragment:null,ctx:null,props:i,update:I,not_equal:o,bound:_e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(l?l.$$.context:[])),callbacks:_e(),dirty:s,skip_bound:!1,root:t.target||l.$$.root};u&&u(c.root);let h=!1;if(c.ctx=n?n(e,t.props||{},(m,b,..._)=>{const v=_.length?_[0]:b;return c.ctx&&o(c.ctx[m],c.ctx[m]=v)&&(!c.skip_bound&&c.bound[m]&&c.bound[m](v),h&&Xe(e,m)),b}):[],c.update(),h=!0,F(c.before_update),c.fragment=r?r(c.ctx):!1,t.target){if(t.hydrate){const m=Te(t.target);c.fragment&&c.fragment.l(m),m.forEach(R)}else c.fragment&&c.fragment.c();t.intro&&D(e.$$.fragment),U(e,t.target,t.anchor,t.customElement),Ae()}W(l)}class fe{$destroy(){Y(this,1),this.$destroy=I}$on(t,n){const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(t){this.$$set&&!Me(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const B=[];function Re(e,t){return{subscribe:Pe(e,t).subscribe}}function Pe(e,t=I){let n;const r=new Set;function o(s){if(Z(e,s)&&(e=s,n)){const l=!B.length;for(const c of r)c[1](),B.push(c,e);if(l){for(let c=0;c<B.length;c+=2)B[c][0](B[c+1]);B.length=0}}}function i(s){o(s(e))}function u(s,l=I){const c=[s,l];return r.add(c),r.size===1&&(n=t(o)||I),s(e),()=>{r.delete(c),r.size===0&&(n(),n=null)}}return{set:o,update:i,subscribe:u}}function Ne(e,t,n){const r=!Array.isArray(e),o=r?[e]:e,i=t.length<2;return Re(n,u=>{let s=!1;const l=[];let c=0,h=I;const m=()=>{if(c)return;h();const _=t(r?l[0]:l,u);i?u(_):h=Oe(_)?_:I},b=o.map((_,v)=>De(_,A=>{l[v]=A,c&=~(1<<v),s&&m()},()=>{c|=1<<v}));return s=!0,m(),function(){F(b),h()}})}function Ge(e,t){if(e instanceof RegExp)return{keys:!1,pattern:e};var n,r,o,i,u=[],s="",l=e.split("/");for(l[0]||l.shift();o=l.shift();)n=o[0],n==="*"?(u.push("wild"),s+="/(.*)"):n===":"?(r=o.indexOf("?",1),i=o.indexOf(".",1),u.push(o.substring(1,~r?r:~i?i:o.length)),s+=!!~r&&!~i?"(?:/([^/]+?))?":"/([^/]+?)",~i&&(s+=(~r?"?":"")+"\\"+o.substring(i))):s+="/"+o;return{keys:u,pattern:new RegExp("^"+s+(t?"(?=$|/)":"/?$"),"i")}}function He(e){let t,n,r;const o=[e[2]];var i=e[0];function u(s){let l={};for(let c=0;c<o.length;c+=1)l=Se(l,o[c]);return{props:l}}return i&&(t=new i(u()),t.$on("routeEvent",e[7])),{c(){t&&G(t.$$.fragment),n=le()},m(s,l){t&&U(t,s,l),N(s,n,l),r=!0},p(s,l){const c=l&4?Ce(o,[Ie(s[2])]):{};if(i!==(i=s[0])){if(t){ce();const h=t;z(h.$$.fragment,1,0,()=>{Y(h,1)}),ue()}i?(t=new i(u()),t.$on("routeEvent",s[7]),G(t.$$.fragment),D(t.$$.fragment,1),U(t,n.parentNode,n)):t=null}else i&&t.$set(c)},i(s){r||(t&&D(t.$$.fragment,s),r=!0)},o(s){t&&z(t.$$.fragment,s),r=!1},d(s){s&&R(n),t&&Y(t,s)}}}function Je(e){let t,n,r;const o=[{params:e[1]},e[2]];var i=e[0];function u(s){let l={};for(let c=0;c<o.length;c+=1)l=Se(l,o[c]);return{props:l}}return i&&(t=new i(u()),t.$on("routeEvent",e[6])),{c(){t&&G(t.$$.fragment),n=le()},m(s,l){t&&U(t,s,l),N(s,n,l),r=!0},p(s,l){const c=l&6?Ce(o,[l&2&&{params:s[1]},l&4&&Ie(s[2])]):{};if(i!==(i=s[0])){if(t){ce();const h=t;z(h.$$.fragment,1,0,()=>{Y(h,1)}),ue()}i?(t=new i(u()),t.$on("routeEvent",s[6]),G(t.$$.fragment),D(t.$$.fragment,1),U(t,n.parentNode,n)):t=null}else i&&t.$set(c)},i(s){r||(t&&D(t.$$.fragment,s),r=!0)},o(s){t&&z(t.$$.fragment,s),r=!1},d(s){s&&R(n),t&&Y(t,s)}}}function Qe(e){let t,n,r,o;const i=[Je,He],u=[];function s(l,c){return l[1]?0:1}return t=s(e),n=u[t]=i[t](e),{c(){n.c(),r=le()},m(l,c){u[t].m(l,c),N(l,r,c),o=!0},p(l,[c]){let h=t;t=s(l),t===h?u[t].p(l,c):(ce(),z(u[h],1,1,()=>{u[h]=null}),ue(),n=u[t],n?n.p(l,c):(n=u[t]=i[t](l),n.c()),D(n,1),n.m(r.parentNode,r))},i(l){o||(D(n),o=!0)},o(l){z(n),o=!1},d(l){u[t].d(l),l&&R(r)}}}function me(){const e=window.location.href.indexOf("#/");let t=e>-1?window.location.href.substr(e+1):"/";const n=t.indexOf("?");let r="";return n>-1&&(r=t.substr(n+1),t=t.substr(0,n)),{location:t,querystring:r}}const de=Re(null,function(t){t(me());const n=()=>{t(me())};return window.addEventListener("hashchange",n,!1),function(){window.removeEventListener("hashchange",n,!1)}});Ne(de,e=>e.location);Ne(de,e=>e.querystring);const be=Pe(void 0);function Ve(e,t,n){let{routes:r={}}=t,{prefix:o=""}=t,{restoreScrollState:i=!1}=t;class u{constructor(f,g){if(!g||typeof g!="function"&&(typeof g!="object"||g._sveltesparouter!==!0))throw Error("Invalid component object");if(!f||typeof f=="string"&&(f.length<1||f.charAt(0)!="/"&&f.charAt(0)!="*")||typeof f=="object"&&!(f instanceof RegExp))throw Error('Invalid value for "path" argument - strings must start with / or *');const{pattern:w,keys:E}=Ge(f);this.path=f,typeof g=="object"&&g._sveltesparouter===!0?(this.component=g.component,this.conditions=g.conditions||[],this.userData=g.userData,this.props=g.props||{}):(this.component=()=>Promise.resolve(g),this.conditions=[],this.props={}),this._pattern=w,this._keys=E}match(f){if(o){if(typeof o=="string")if(f.startsWith(o))f=f.substr(o.length)||"/";else return null;else if(o instanceof RegExp){const k=f.match(o);if(k&&k[0])f=f.substr(k[0].length)||"/";else return null}}const g=this._pattern.exec(f);if(g===null)return null;if(this._keys===!1)return g;const w={};let E=0;for(;E<this._keys.length;){try{w[this._keys[E]]=decodeURIComponent(g[E+1]||"")||null}catch{w[this._keys[E]]=null}E++}return w}async checkConditions(f){for(let g=0;g<this.conditions.length;g++)if(!await this.conditions[g](f))return!1;return!0}}const s=[];r instanceof Map?r.forEach((p,f)=>{s.push(new u(f,p))}):Object.keys(r).forEach(p=>{s.push(new u(p,r[p]))});let l=null,c=null,h={};const m=Ye();async function b(p,f){await Ke(),m(p,f)}let _=null,v=null;i&&(v=p=>{p.state&&p.state.__svelte_spa_router_scrollY?_=p.state:_=null},window.addEventListener("popstate",v),Be(()=>{_?window.scrollTo(_.__svelte_spa_router_scrollX,_.__svelte_spa_router_scrollY):window.scrollTo(0,0)}));let A=null,L=null;const $=de.subscribe(async p=>{A=p;let f=0;for(;f<s.length;){const g=s[f].match(p.location);if(!g){f++;continue}const w={route:s[f].path,location:p.location,querystring:p.querystring,userData:s[f].userData,params:g&&typeof g=="object"&&Object.keys(g).length?g:null};if(!await s[f].checkConditions(w)){n(0,l=null),L=null,b("conditionsFailed",w);return}b("routeLoading",Object.assign({},w));const E=s[f].component;if(L!=E){E.loading?(n(0,l=E.loading),L=E,n(1,c=E.loadingParams),n(2,h={}),b("routeLoaded",Object.assign({},w,{component:l,name:l.name,params:c}))):(n(0,l=null),L=null);const k=await E();if(p!=A)return;n(0,l=k&&k.default||k),L=E}g&&typeof g=="object"&&Object.keys(g).length?n(1,c=g):n(1,c=null),n(2,h=s[f].props),b("routeLoaded",Object.assign({},w,{component:l,name:l.name,params:c})).then(()=>{be.set(c)});return}n(0,l=null),L=null,be.set(void 0)});Ue(()=>{$(),v&&window.removeEventListener("popstate",v)});function S(p){he.call(this,e,p)}function q(p){he.call(this,e,p)}return e.$$set=p=>{"routes"in p&&n(3,r=p.routes),"prefix"in p&&n(4,o=p.prefix),"restoreScrollState"in p&&n(5,i=p.restoreScrollState)},e.$$.update=()=>{e.$$.dirty&32&&(history.scrollRestoration=i?"manual":"auto")},[l,c,h,r,o,i,S,q]}class Ze extends fe{constructor(t){super(),ae(this,t,Ve,Qe,Z,{routes:3,prefix:4,restoreScrollState:5})}}function ye(e,t,n){const r=e.slice();return r[14]=t[n],r[16]=n,r}function we(e,t,n){const r=e.slice();return r[17]=t[n],r[16]=n,r}function ve(e,t,n){const r=e.slice();return r[19]=t[n],r[16]=n,r}function ke(e){let t,n,r,o,i,u,s=e[19]+"",l,c,h,m,b;return{c(){t=O("span"),n=O("input"),i=P(),u=O("label"),l=x(s),h=P(),j(n,"id",r=`range${e[16]}`),j(n,"class","peer"),j(n,"type","radio"),n.__value=o=e[19],n.value=n.__value,e[9][0].push(n),j(u,"for",c=`range${e[16]}`),j(u,"class","peer-checked:text-sky-500 peer-checked:font-bold")},m(_,v){N(_,t,v),y(t,n),n.checked=n.__value===e[1],y(t,i),y(t,u),y(u,l),y(t,h),m||(b=V(n,"change",e[8]),m=!0)},p(_,v){v&2&&(n.checked=n.__value===_[1])},d(_){_&&R(t),e[9][0].splice(e[9][0].indexOf(n),1),m=!1,b()}}}function $e(e){let t,n,r,o,i,u,s=e[4][e[17]]+"",l,c,h,m,b;return{c(){t=O("span"),n=O("input"),i=P(),u=O("label"),l=x(s),h=P(),j(n,"id",r=`method${e[16]}`),j(n,"class","peer"),j(n,"type","radio"),n.__value=o=e[17],n.value=n.__value,e[9][1].push(n),j(u,"for",c=`method${e[16]}`),j(u,"class","peer-checked:text-sky-500 peer-checked:font-bold")},m(_,v){N(_,t,v),y(t,n),n.checked=n.__value===e[0],y(t,i),y(t,u),y(u,l),y(t,h),m||(b=V(n,"change",e[10]),m=!0)},p(_,v){v&1&&(n.checked=n.__value===_[0])},d(_){_&&R(t),e[9][1].splice(e[9][1].indexOf(n),1),m=!1,b()}}}function Ee(e){let t,n,r=e[14][0].toString().padStart(e[3])+"",o,i,u=e[14][1]+"",s,l,c=e[14][2].toString().padStart(e[3])+"",h,m;return{c(){t=O("pre"),n=x(""),o=x(r),i=x(" "),s=x(u),l=x(" "),h=x(c),m=x(" = ___"),j(t,"class","flex items-center justify-center")},m(b,_){N(b,t,_),y(t,n),y(t,o),y(t,i),y(t,s),y(t,l),y(t,h),y(t,m)},p(b,_){_&12&&r!==(r=b[14][0].toString().padStart(b[3])+"")&&te(o,r),_&4&&u!==(u=b[14][1]+"")&&te(s,u),_&12&&c!==(c=b[14][2].toString().padStart(b[3])+"")&&te(h,c)},d(b){b&&R(t)}}}function et(e){let t,n,r,o,i,u,s,l,c,h,m,b,_,v,A,L,$,S,q,p=e[5],f=[];for(let d=0;d<p.length;d+=1)f[d]=ke(ve(e,p,d));let g=Object.keys(e[4]),w=[];for(let d=0;d<g.length;d+=1)w[d]=$e(we(e,g,d));let E=e[2],k=[];for(let d=0;d<E.length;d+=1)k[d]=Ee(ye(e,E,d));return{c(){t=O("div"),n=O("div"),r=O("strong"),r.textContent="\u8303\u56F4\uFF1A",o=P();for(let d=0;d<f.length;d+=1)f[d].c();i=P(),u=O("div"),s=O("strong"),s.textContent="\u8FD0\u7B97\uFF1A",l=P();for(let d=0;d<w.length;d+=1)w[d].c();c=P(),h=O("div"),m=O("button"),m.textContent="\u751F\u6210",b=P(),_=O("button"),v=x("\u6253\u5370"),L=P(),$=O("div");for(let d=0;d<k.length;d+=1)k[d].c();j(n,"class","mr-12"),j(u,"class","mr-12"),j(m,"class","bg-sky-500 border-none text-white px-4 py-1 cursor-pointer hover:bg-sky-400 "),j(_,"class","bg-sky-500 border-none text-white px-4 py-1 cursor-pointer hover:bg-sky-400 disabled:bg-neutral-400 disabled:text-neutral-200 disabled:cursor-not-allowed disabled:hover:bg-neutral-400 "),_.disabled=A=e[2].length===0,j(h,"class","mr-12"),j(t,"class","flex items-center justify-center my-10 print:hidden"),j($,"class","flex-grow flex-shrink-0 max-w-[800px] mx-auto p-12 shadow bg-white text-xl grid grid-cols-4 print:p-0 print:shadow-none"),ze($,"font-family","consolas")},m(d,C){N(d,t,C),y(t,n),y(n,r),y(n,o);for(let a=0;a<f.length;a+=1)f[a].m(n,null);y(t,i),y(t,u),y(u,s),y(u,l);for(let a=0;a<w.length;a+=1)w[a].m(u,null);y(t,c),y(t,h),y(h,m),y(h,b),y(h,_),y(_,v),N(d,L,C),N(d,$,C);for(let a=0;a<k.length;a+=1)k[a].m($,null);S||(q=[V(m,"click",e[6]),V(_,"click",e[7])],S=!0)},p(d,[C]){if(C&34){p=d[5];let a;for(a=0;a<p.length;a+=1){const M=ve(d,p,a);f[a]?f[a].p(M,C):(f[a]=ke(M),f[a].c(),f[a].m(n,null))}for(;a<f.length;a+=1)f[a].d(1);f.length=p.length}if(C&17){g=Object.keys(d[4]);let a;for(a=0;a<g.length;a+=1){const M=we(d,g,a);w[a]?w[a].p(M,C):(w[a]=$e(M),w[a].c(),w[a].m(u,null))}for(;a<w.length;a+=1)w[a].d(1);w.length=g.length}if(C&4&&A!==(A=d[2].length===0)&&(_.disabled=A),C&12){E=d[2];let a;for(a=0;a<E.length;a+=1){const M=ye(d,E,a);k[a]?k[a].p(M,C):(k[a]=Ee(M),k[a].c(),k[a].m($,null))}for(;a<k.length;a+=1)k[a].d(1);k.length=E.length}},i:I,o:I,d(d){d&&R(t),ee(f,d),ee(w,d),d&&R(L),d&&R($),ee(k,d),S=!1,F(q)}}}let re=60;function tt(e,t,n){let r;const o={add:"\u52A0\u6CD5",sub:"\u51CF\u6CD5",add_sub:"\u52A0\u51CF\u6CD5"};let i=localStorage.getItem("currentMethod")||"add";const u=[10,20,50,100];let s=localStorage.getItem("currentRange")?parseInt(localStorage.getItem("currentRange")):10,l=[];const c=($=0,S=s)=>Math.floor(Math.random()*(S-$))+$,h=()=>{let $=c(),S=c();return[$,"+",S]},m=()=>{let $=c(),S=c(0,$);return[$,"-",S]},b=()=>{let $=[];switch(i){case"add":for(let S=0;S<re;S++){const q=h();$.push(q)}break;case"sub":for(let S=0;S<re;S++){const q=m();$.push(q)}break;case"add_sub":for(let S=0;S<re;S++){const p=c(0,2)?h():m();$.push(p)}}n(2,l=$)},_=()=>{window.print()},v=[[],[]];function A(){s=this.__value,n(1,s)}function L(){i=this.__value,n(0,i)}return e.$$.update=()=>{e.$$.dirty&1&&localStorage.setItem("currentMethod",i),e.$$.dirty&2&&localStorage.setItem("currentRange",s.toString()),e.$$.dirty&2&&n(3,r=(s-1).toString().length),e.$$.dirty&3&&(document.title=`${s}\u4EE5\u5185${o[i]}`)},[i,s,l,r,o,u,b,_,A,v,L]}class nt extends fe{constructor(t){super(),ae(this,t,tt,et,Z,{})}}var rt={"/":nt};function ot(e){let t,n,r;return n=new Ze({props:{routes:rt}}),{c(){t=O("main"),G(n.$$.fragment)},m(o,i){N(o,t,i),U(n,t,null),r=!0},p:I,i(o){r||(D(n.$$.fragment,o),r=!0)},o(o){z(n.$$.fragment,o),r=!1},d(o){o&&R(t),Y(n)}}}class st extends fe{constructor(t){super(),ae(this,t,null,ot,Z,{})}}new st({target:document.getElementById("app")});
