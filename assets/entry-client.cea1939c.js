const e={};function t(t){e.context=t}const n={equals:(e,t)=>e===t};let r=null,o=B;const s={},l={owned:null,cleanups:null,context:null,owner:null},[i,u]=y(!1);var a=null;let c,f=null,d=null,h=null,p=null,g=0;function v(e,t){const n=f,r=a,o=0===e.length?l:{owned:null,cleanups:null,context:null,owner:t||r};a=o,f=null;try{return j((()=>e((()=>V(o)))),!0)}finally{f=n,a=r}}function y(e,t){t=t?Object.assign({},n,t):n;const r={value:e,observers:null,observerSlots:null,pending:s,comparator:t.equals||void 0};return[L.bind(r),e=>("function"==typeof e&&(e=e(r.pending!==s?r.pending:r.value)),q(r,e))]}function b(e,t,n){T(R(e,t,!0,1))}function m(e,t,n){T(R(e,t,!1,1))}function w(e,t,r){r=r?Object.assign({},n,r):n;const o=R(e,t,!0,0);return o.pending=s,o.observers=null,o.observerSlots=null,o.comparator=r.equals||void 0,T(o),L.bind(o)}function x(e){if(d)return e();let t;const n=d=[];try{t=e()}finally{d=null}return j((()=>{for(let e=0;e<n.length;e+=1){const t=n[e];if(t.pending!==s){const e=t.pending;t.pending=s,q(t,e)}}}),!1),t}function A(e){let t,n=f;return f=null,t=e(),f=n,t}function P(e,t,n){const r=Array.isArray(e);let o,s=n&&n.defer;return n=>{let l;if(r){l=[];for(let t=0;t<e.length;t++)l.push(e[t]())}else l=e();if(s)return void(s=!1);const i=A((()=>t(l,o,n)));return o=l,i}}function S(e){!function(e,t,n){o=M;const r=R(e,t,!1,1);r.user=!0,p?p.push(r):queueMicrotask((()=>T(r)))}((()=>A(e)))}function $(e){return null===a||(null===a.cleanups?a.cleanups=[e]:a.cleanups.push(e)),e}function C(e){const t=f,n=a;return Promise.resolve().then((()=>{f=t,a=n,x(e)}))}function E(e){const t=Symbol("context");return{id:t,Provider:I(t),defaultValue:e}}function k(e){let t;return void 0!==(t=K(a,e.id))?t:e.defaultValue}function N(e){const t=w(e);return w((()=>U(t())))}function L(){if(this.sources&&this.state){const e=h;h=null,1===this.state?T(this):D(this),h=e}if(f){const e=this.observers?this.observers.length:0;f.sources?(f.sources.push(this),f.sourceSlots.push(e)):(f.sources=[this],f.sourceSlots=[e]),this.observers?(this.observers.push(f),this.observerSlots.push(f.sources.length-1)):(this.observers=[f],this.observerSlots=[f.sources.length-1])}return this.value}function q(e,t,n){if(d)return e.pending===s&&d.push(e),e.pending=t,t;if(e.comparator&&e.comparator(e.value,t))return t;let r=!1;return e.value=t,e.observers&&e.observers.length&&j((()=>{for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];r,n.state||(n.pure?h.push(n):p.push(n),n.observers&&H(n)),n.state=1}if(h.length>1e6)throw h=[],new Error}),!1),t}function T(e){if(!e.fn)return;V(e);const t=a,n=f,r=g;f=a=e,function(e,t,n){let r;try{r=e.fn(t)}catch(o){_(o)}(!e.updatedAt||e.updatedAt<=n)&&(e.observers&&e.observers.length?q(e,r):e.value=r,e.updatedAt=n)}(e,e.value,r),f=n,a=t}function R(e,t,n,r=1,o){const s={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:a,context:null,pure:n};return null===a||a!==l&&(a.owned?a.owned.push(s):a.owned=[s]),s}function O(e){if(0===e.state)return;if(2===e.state)return D(e);if(e.suspense&&A(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<g);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(1===(e=t[n]).state)T(e);else if(2===e.state){const n=h;h=null,D(e,t[0]),h=n}}function j(e,t){if(h)return e();let n=!1;t||(h=[]),p?n=!0:p=[],g++;try{return e()}catch(r){_(r)}finally{!function(e){h&&(B(h),h=null);if(e)return;p.length?x((()=>{o(p),p=null})):p=null}(n)}}function B(e){for(let t=0;t<e.length;t++)O(e[t])}function M(e){let t,n=0;for(t=0;t<e.length;t++){const r=e[t];r.user?e[n++]=r:O(r)}const r=e.length;for(t=0;t<n;t++)O(e[t]);for(t=r;t<e.length;t++)O(e[t])}function D(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const r=e.sources[n];r.sources&&(1===r.state?r!==t&&O(r):2===r.state&&D(r,t))}}function H(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=2,n.pure?h.push(n):p.push(n),n.observers&&H(n))}}function V(e){let t;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),n=e.sourceSlots.pop(),r=t.observers;if(r&&r.length){const e=r.pop(),o=t.observerSlots.pop();n<r.length&&(e.sourceSlots[o]=n,r[n]=e,t.observerSlots[n]=o)}}if(e.owned){for(t=0;t<e.owned.length;t++)V(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function _(e){const t=r&&K(a,r);if(!t)throw e;t.forEach((t=>t(e)))}function K(e,t){return e?e.context&&void 0!==e.context[t]?e.context[t]:K(e.owner,t):void 0}function U(e){if("function"==typeof e&&!e.length)return U(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const r=U(e[n]);Array.isArray(r)?t.push.apply(t,r):t.push(r)}return t}return e}function I(e){return function(t){let n;return b((()=>n=A((()=>(a.context={[e]:t.value},N((()=>t.children))))))),n}}let F,W=!1;function G(n,r){if(W&&e.context){const o=e.context;t({...e.context,id:`${e.context.id}${e.context.count++}-`,count:0});const s=A((()=>n(r)));return t(o),s}return A((()=>n(r)))}function Y(e){let t=!1;const n=w((()=>e.when),void 0,{equals:(e,n)=>t?e===n:!e==!n});return w((()=>{const r=n();if(r){const n=e.children;return(t="function"==typeof n&&n.length>0)?A((()=>n(r))):n}return e.fallback}))}function J(){F&&[...F].forEach((e=>e()))}function X(t){let n;e.context&&e.load&&(n=e.load(e.context.id+e.context.count));const[o,s]=y(n);let l;return F||(F=new Set),F.add(s),$((()=>F.delete(s))),w((()=>{if(null!=(l=o())){const e=t.fallback;return"function"==typeof e&&e.length?A((()=>e(l,(()=>s(null))))):e}var e;return e=s,r||(r=Symbol("error")),null===a||(null===a.context?a.context={[r]:[e]}:a.context[r]?a.context[r].push(e):a.context[r]=[e]),t.children}))}function z(e,t,n){const r=document.createElement("template");r.innerHTML=e;let o=r.content.firstChild;return n&&(o=o.firstChild),o}function Q(e,t,n){null==n?e.removeAttribute(t):e.setAttribute(t,n)}function Z(e,t,n,r){if(void 0===n||r||(r=[]),"function"!=typeof t)return oe(e,t,r,n);m((r=>oe(e,t(),r,n)),r)}function ee(t,n,r={}){e.completed=globalThis._$HY.completed,e.events=globalThis._$HY.events,e.load=globalThis._$HY.load,e.gather=e=>ue(n,e),e.registry=new Map,e.context={id:r.renderId||"",count:0},ue(n,r.renderId);const o=function(e,t,n){let r;return v((o=>{r=o,t===document?e():Z(t,e(),t.firstChild?null:void 0,n)})),()=>{r(),t.textContent=""}}(t,n,[...n.childNodes]);return e.context=null,o}function te(t){let n,r;return e.context&&(n=e.registry.get(r=function(){const t=e.context;return`${t.id}${t.count++}`}()))?(e.completed&&e.completed.add(n),e.registry.delete(r),n):t.cloneNode(!0)}function ne(t){let n=t,r=0,o=[];if(e.context)for(;n;){if(8===n.nodeType){const e=n.nodeValue;if("#"===e)r++;else if("/"===e){if(0===r)return[n,o];r--}}o.push(n),n=n.nextSibling}return[n,o]}function re(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get:()=>n||document});null!==n;){const r=n[t];if(r&&!n.disabled){const o=n[`${t}Data`];if(void 0!==o?r(o,e):r(e),e.cancelBubble)return}n=n.host&&n.host!==n&&n.host instanceof Node?n.host:n.parentNode}}function oe(t,n,r,o,s){for(e.context&&!r&&(r=[...t.childNodes]);"function"==typeof r;)r=r();if(n===r)return r;const l=typeof n,i=void 0!==o;if(t=i&&r[0]&&r[0].parentNode||t,"string"===l||"number"===l){if(e.context)return r;if("number"===l&&(n=n.toString()),i){let e=r[0];e&&3===e.nodeType?e.data=n:e=document.createTextNode(n),r=ie(t,r,o,e)}else r=""!==r&&"string"==typeof r?t.firstChild.data=n:t.textContent=n}else if(null==n||"boolean"===l){if(e.context)return r;r=ie(t,r,o)}else{if("function"===l)return m((()=>{let e=n();for(;"function"==typeof e;)e=e();r=oe(t,e,r,o)})),()=>r;if(Array.isArray(n)){const l=[];if(se(l,n,s))return m((()=>r=oe(t,l,r,o,!0))),()=>r;if(e.context)for(let e=0;e<l.length;e++)if(l[e].parentNode)return r=l;if(0===l.length){if(r=ie(t,r,o),i)return r}else Array.isArray(r)?0===r.length?le(t,l,o):function(e,t,n){let r=n.length,o=t.length,s=r,l=0,i=0,u=t[o-1].nextSibling,a=null;for(;l<o||i<s;)if(t[l]!==n[i]){for(;t[o-1]===n[s-1];)o--,s--;if(o===l){const t=s<r?i?n[i-1].nextSibling:n[s-i]:u;for(;i<s;)e.insertBefore(n[i++],t)}else if(s===i)for(;l<o;)a&&a.has(t[l])||t[l].remove(),l++;else if(t[l]===n[s-1]&&n[i]===t[o-1]){const r=t[--o].nextSibling;e.insertBefore(n[i++],t[l++].nextSibling),e.insertBefore(n[--s],r),t[o]=n[s]}else{if(!a){a=new Map;let e=i;for(;e<s;)a.set(n[e],e++)}const r=a.get(t[l]);if(null!=r)if(i<r&&r<s){let u,c=l,f=1;for(;++c<o&&c<s&&null!=(u=a.get(t[c]))&&u===r+f;)f++;if(f>r-i){const o=t[l];for(;i<r;)e.insertBefore(n[i++],o)}else e.replaceChild(n[i++],t[l++])}else l++;else t[l++].remove()}}else l++,i++}(t,r,l):(r&&ie(t),le(t,l));r=l}else if(n instanceof Node){if(e.context&&n.parentNode)return r=i?[n]:n;if(Array.isArray(r)){if(i)return r=ie(t,r,o,n);ie(t,r,null,n)}else null!=r&&""!==r&&t.firstChild?t.replaceChild(n,t.firstChild):t.appendChild(n);r=n}}return r}function se(e,t,n){let r=!1;for(let o=0,s=t.length;o<s;o++){let s,l=t[o];if(l instanceof Node)e.push(l);else if(null==l||!0===l||!1===l);else if(Array.isArray(l))r=se(e,l)||r;else if("string"==(s=typeof l))e.push(document.createTextNode(l));else if("function"===s)if(n){for(;"function"==typeof l;)l=l();r=se(e,Array.isArray(l)?l:[l])||r}else e.push(l),r=!0;else e.push(document.createTextNode(l.toString()))}return r}function le(e,t,n){for(let r=0,o=t.length;r<o;r++)e.insertBefore(t[r],n)}function ie(e,t,n,r){if(void 0===n)return e.textContent="";const o=r||document.createTextNode("");if(t.length){let r=!1;for(let s=t.length-1;s>=0;s--){const l=t[s];if(o!==l){const t=l.parentNode===e;r||s?t&&l.remove():t?e.replaceChild(o,l):e.insertBefore(o,n)}else r=!0}}else e.insertBefore(o,n);return[o]}function ue(t,n){const r=t.querySelectorAll("*[data-hk]");for(let o=0;o<r.length;o++){const t=r[o],s=t.getAttribute("data-hk");n&&!s.startsWith(n)||e.registry.set(s,t)}}function ae(){}function ce(t){return e.context?void 0:t.children}const fe=E(),de=["title","meta"],he=e=>{const t=new Map,[n,r]=y({});S((()=>{const e=document.head.querySelectorAll('[data-sm=""]');Array.prototype.forEach.call(e,(e=>e.parentNode.removeChild(e)))}));const o={addClientTag:(e,n)=>{if(-1!==de.indexOf(e)){r((t=>{const r=t[e]||[];return{...t,[e]:[...r,n]}}));const o=t.has(e)?t.get(e)+1:0;return t.set(e,o),o}return-1},shouldRenderTag:(e,t)=>{if(-1!==de.indexOf(e)){const r=n()[e];return r&&r.lastIndexOf(r[t])===t}return!0},removeClientTag:(e,t)=>{r((n=>{const r=n[e];return r?(r[t]=null,{...n,[e]:r}):n}))}};return G(fe.Provider,{value:o,get children(){return e.children}})};function pe(){return function(e,t,n,r){let o=!1;const s=e=>"string"==typeof e?{value:e}:e,l=function([e,t],n,r){return[n?()=>n(e()):e,r?e=>t(r(e)):t]}(y(s(e()),{equals:(e,t)=>e.value===t.value}),void 0,(e=>(!o&&t(e),e)));return n&&$(n(((t=e())=>{o=!0,l[1](s(t)),o=!1}))),{signal:l,utils:r}}((()=>({value:window.location.pathname+window.location.search+window.location.hash,state:history.state})),(({value:e,replace:t,scroll:n,state:r})=>{t?window.history.replaceState(r,"",e):window.history.pushState(r,"",e),n&&window.scrollTo(0,0)}),(e=>{return t=window,n="popstate",r=()=>e(),t.addEventListener(n,r),()=>t.removeEventListener(n,r);var t,n,r}),{go:e=>window.history.go(e)})}const ge=/^(?:[a-z0-9]+:)?\/\//i,ve=/^\/+|\/+$|\s+/g;function ye(e){const t=e.replace(ve,"");return t?t.startsWith("?")?t:"/"+t:""}function be(e,t,n){if(ge.test(t))return;const r=ye(e),o=n&&ye(n);let s="";return s=o&&"/"!==t.charAt(0)?0!==o.toLowerCase().indexOf(r.toLowerCase())?r+o:o:r,s+ye(t)||"/"}function me(e,t){return ye(e).replace(/\/*(\*.*)?$/g,"")+ye(t)}function we(e,t){const[n,r]=e.split("/*",2),o=n.split("/").filter(Boolean),s=o.length;return e=>{const n=e.split("/").filter(Boolean),l=n.length-s;if(l<0||l>0&&void 0===r&&!t)return null;const i={path:s?"":"/",params:{}};for(let t=0;t<s;t++){const e=o[t],r=n[t];if(":"===e[0])i.params[e.slice(1)]=r;else if(0!==e.localeCompare(r,void 0,{sensitivity:"base"}))return null;i.path+=`/${r}`}return r&&(i.params[r]=l?n.slice(-l).join("/"):""),i}}function xe(e){const[t,n]=e.pattern.split("/*",2),r=t.split("/").filter(Boolean);return r.reduce(((e,t)=>e+(t.startsWith(":")?2:3)),r.length-(void 0===n?0:1))}function Ae(e){const t=new Map,n=a;return new Proxy({},{get:(r,o)=>(t.has(o)||function(e,t){const n=a;a=e;try{j(t,!0)}finally{a=n}}(n,(()=>t.set(o,w((()=>e()[o]))))),t.get(o)()),getOwnPropertyDescriptor:()=>({enumerable:!0,configurable:!0}),ownKeys:()=>Reflect.ownKeys(e())})}const Pe=E(),Se=E(),$e=()=>function(e,t){if(null==e)throw new Error(t);return e}(k(Pe),"Make sure your app is wrapped in a <Router />"),Ce=()=>k(Se)||$e().base;function Ee(e,t="",n){const{path:r,component:o,data:s,children:l}=e,i=!l||Array.isArray(l)&&!l.length,u=me(t,r),a=i?u:u.split("/*",1)[0];return{originalPath:r,pattern:a,element:o?()=>G(o,{}):()=>{const{element:t}=e;return void 0===t&&n?G(n,{}):t},preload:e.component?o.preload:e.preload,data:s,matcher:we(a,!i)}}function ke(e,t=0){return{routes:e,score:1e4*xe(e[e.length-1])-t,matcher(t){const n=[];for(let r=e.length-1;r>=0;r--){const o=e[r],s=o.matcher(t);if(!s)return null;n.unshift({...s,route:o})}return n}}}function Ne(e,t="",n,r=[],o=[]){const s=Array.isArray(e)?e:[e];for(let l=0,i=s.length;l<i;l++){const e=s[l];if(e&&"object"==typeof e&&e.hasOwnProperty("path")){const s=Ee(e,t,n);if(r.push(s),e.children)Ne(e.children,s.pattern,n,r,o);else{const e=ke([...r],o.length);o.push(e)}r.pop()}}return r.length?o:o.sort(((e,t)=>t.score-e.score))}function Le(e,t="",n,r){const{signal:[o,s],utils:l={}}=function(e){return e?Array.isArray(e)?{signal:e}:e:{signal:y({value:""})}}(e),u=l.parsePath||(e=>e),a=l.renderPath||(e=>e),c=be("",t);if(void 0===c)throw new Error(`${c} is not a valid base path`);c&&!o().value&&s({value:c,replace:!0,scroll:!1});const[f,d]=[i,C],[h,p]=y(o().value),[g,v]=y(o().state),b=function(e,t){const n=new URL("http://sar"),r=w((t=>{const r=e();try{return new URL(r,n)}catch(o){return console.error(`Invalid path ${r}`),t}}),n,{equals:(e,t)=>e.href===t.href}),o=w((()=>r().pathname)),s=w((()=>r().search.slice(1))),l=w((()=>r().hash.slice(1))),i=w((()=>""));return{get pathname(){return o()},get search(){return s()},get hash(){return l()},get state(){return t()},get key(){return i()},query:Ae(P(s,(()=>function(e){const t={};return e.searchParams.forEach(((e,n)=>{t[n]=e})),t}(r()))))}}(h,g),x=[],S={pattern:c,params:{},path:()=>c,outlet:()=>null,resolvePath:e=>be(c,e)};function E(e,t,n){A((()=>{if("number"==typeof t)return void(t&&(l.go?l.go(t):console.warn("Router integration does not support relative routing")));const{replace:r,resolve:o,scroll:i,state:u}={replace:!1,resolve:!0,scroll:!0,...n},a=o?e.resolvePath(t):be("",t);if(void 0===a)throw new Error(`Path '${t}' is not a routable path`);if(x.length>=100)throw new Error("Too many redirects");const c=h();if(a!==c||u!==g()){const e=x.push({value:c,replace:r,scroll:i,state:g});d((()=>{p(a),v(u),J()})).then((()=>{x.length===e&&function(e){const t=x[0];t&&(e.value===t.value&&e.state===t.state||s({...e,replace:t.replace,scroll:t.scroll}),x.length=0)}({value:a,state:u})}))}}))}function N(e){return e=e||k(Se)||S,(t,n)=>E(e,t,n)}S.data=n&&n({data:void 0,params:{},location:b,navigate:N(S)}),m((()=>{const{value:e,state:t}=o();e!==A(h)&&d((()=>{p(e),v(t)}))}));{let e=function(e){if(e.defaultPrevented||0!==e.button||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)return;const t=e.composedPath().find((e=>e instanceof Node&&"A"===e.nodeName.toUpperCase()));if(!t)return;const n=t instanceof SVGAElement,r=n?t.href.baseVal:t.href;if((n?t.target.baseVal:t.target)||!r&&!t.hasAttribute("state"))return;const o=(t.getAttribute("rel")||"").split(/\s+/);if(t.hasAttribute("download")||o&&o.includes("external"))return;const s=n?new URL(r,document.baseURI):new URL(r);if(s.origin!==window.location.origin||c&&s.pathname&&!s.pathname.toLowerCase().startsWith(c.toLowerCase()))return;const l=u(s.pathname+s.search+s.hash),i=t.getAttribute("state");e.preventDefault(),E(S,l,{resolve:!1,replace:t.hasAttribute("replace"),scroll:!t.hasAttribute("noscroll"),state:i&&JSON.parse(i)})};document.addEventListener("click",e),$((()=>document.removeEventListener("click",e)))}return{base:S,out:void 0,location:b,isRouting:f,renderPath:a,parsePath:u,navigatorFactory:N}}function qe(e,t,n,r){const{base:o,location:s,navigatorFactory:l}=e,{pattern:i,element:u,preload:a,data:c}=r().route,f=w((()=>r().path)),d=Ae((()=>r().params));a&&a();const h={parent:t,pattern:i,get child(){return n()},path:f,params:d,outlet:u,resolvePath:e=>be(o.path(),e,f())};return h.data=c?c({data:t.data,params:d,location:s,navigate:l(h)}):t.data,h}const Te=e=>{const{source:t,url:n,base:r,data:o,out:s}=e,l=Le(t||pe(),r,o);return G(Pe.Provider,{value:l,get children(){return e.children}})},Re=e=>{const t=$e(),n=Ce(),r=w((()=>Ne(e.children,me(n.pattern,e.base||""),Oe))),o=w((()=>function(e,t){for(let n=0,r=e.length;n<r;n++){const r=e[n].matcher(t);if(r)return r}return[]}(r(),t.location.pathname)));t.out&&t.out.matches.push(o().map((({route:e,path:t,params:n})=>({originalPath:e.originalPath,pattern:e.pattern,path:t,params:n}))));const s=[];let l;const i=w(P(o,((e,r,u)=>{let a=r&&e.length===r.length;const c=[];for(let l=0,f=e.length;l<f;l++){const f=r&&r[l],d=e[l];u&&f&&d.route.pattern===f.route.pattern?c[l]=u[l]:(a=!1,s[l]&&s[l](),v((e=>{s[l]=e,c[l]=qe(t,c[l-1]||n,(()=>i()[l+1]),(()=>o()[l]))})))}return s.splice(e.length).forEach((e=>e())),u&&a?u:(l=c[0],c)})));return G(Y,{get when(){return i()&&l},children:e=>G(Se.Provider,{value:e,get children(){return e.outlet()}})})},Oe=()=>{const e=Ce();return G(Y,{get when(){return e.child},children:e=>G(Se.Provider,{value:e,get children(){return e.outlet()}})})},je=E({});function Be(e){return G(je.Provider,{get value(){return e.context||{}},get children(){return e.children}})}const Me=[{component:function(n){let r,o;const s=s=>{const l=e.context;if(l){const[e,s]=y();(o||(o=n())).then((e=>{t(l),s((()=>e.default)),t()})),r=e}else if(r){const e=r();if(e)return e(s)}else{const[t]=function(t,n,r){2===arguments.length?"object"==typeof n&&(r=n,n=t,t=!0):1===arguments.length&&(n=t,t=!0),r||(r={}),!1!==r.globalRefetch&&(c||(c=new Set),c.add(L),a&&$((()=>c.delete(L))));const o=new Set,[s,l]=y(r.initialValue),[i,u]=y(void 0,{equals:!1}),[d,h]=y(!1),[p,g]=y();let v,m=null,w=null,P=null,S=!1,C="function"==typeof t;function E(e,t,n,o){return m===e&&(m=null,w&&e===w&&r.onHydrated&&r.onHydrated(o,{value:t}),w=null,g(v=n),k(t)),t}function k(e){x((()=>{l((()=>e)),h(!1);for(const e of o.keys())e.decrement();o.clear()}))}function N(){const e=void 0,t=s();if(v)throw v;return f&&!f.user&&e&&b((()=>{i(),m&&(e.resolved||o.has(e)||(e.increment(),o.add(e)))})),t}function L(e=!0){if(e&&S)return;S=!1,g(v=void 0);const r=C?t():t;if(null==r||!1===r)return void E(m,A(s));const o=w||A((()=>n(r,{value:s(),refetching:e})));return"object"==typeof o&&"then"in o?(m=o,S=!0,queueMicrotask((()=>S=!1)),x((()=>{h(!0),u()})),o.then((e=>E(o,e,void 0,r)),(e=>E(o,e,e)))):(E(m,o),o)}return e.context&&(P=`${e.context.id}${e.context.count++}`,e.load&&(w=e.load(P))),Object.defineProperties(N,{loading:{get:()=>d()},error:{get:()=>p()}}),C?b((()=>L(!1))):L(!1),[N,{refetch:L,mutate:l}]}((()=>(o||(o=n())).then((e=>e.default))),{globalRefetch:!1});r=t}let i;return w((()=>(i=r())&&A((()=>{if(!l)return i(s);const n=e.context;t(l);const r=i(s);return t(n),r}))))};return s.preload=()=>o||((o=n()).then((e=>r=()=>e.default)),o),s}((()=>import("./index.bea50268.js"))),path:"/"}],De=(He=Me,()=>G(Re,{base:Ve,children:He}));var He,Ve;function _e(){return k(je),[G(ae,{}),G(ce,{get children(){return false}})]}const Ke=new Set([301,302,303,307,308]);const Ue=z('<div><div><p id="error-message"></p><button id="reset-errors">Clear errors and retry</button><pre></pre></div></div>');function Ie(e){const t=$e().navigatorFactory();return G(X,{fallback:n=>{const r=()=>{if(n instanceof Response)return n;try{let e=JSON.parse(n.message,((e,t)=>{if(!t)return t;if("headers"===t.$type){let e=new Headers;return t.headers.forEach(((t,n)=>e.set(n,t))),e}return"request"===t.$type?new Request(t.url,{method:t.method,headers:t.headers}):t}));if("response"===e.$type)return new Response(e.body,{status:e.status,headers:new Headers(e.headers)})}catch(e){}};return G(Y,{get when(){return!function(e){return e&&e instanceof Response&&Ke.has(e.status)}(r())},fallback:()=>{let e=r();return C((()=>{t(e.headers.get("Location")),J()})),null},get children(){return G(Y,{get when(){return!e.fallback},get fallback(){return e.fallback(n)},get children(){return G(Fe,{error:n})}})}})},get children(){return e.children}})}function Fe(t){return(()=>{const n=te(Ue),r=n.firstChild,o=r.firstChild,s=o.nextSibling,l=s.nextSibling;var i,u,a;return n.style.setProperty("padding","16px"),r.style.setProperty("background-color","rgba(252, 165, 165)"),r.style.setProperty("color","rgb(153, 27, 27)"),r.style.setProperty("border-radius","5px"),r.style.setProperty("overflow","scroll"),r.style.setProperty("padding","16px"),r.style.setProperty("margin-bottom","8px"),o.style.setProperty("font-weight","bold"),Z(o,(()=>t.error.message)),i=s,u="click",a=J,!0?Array.isArray(a)?(i[`$$${u}`]=a[0],i[`$$${u}Data`]=a[1]):i[`$$${u}`]=a:Array.isArray(a)?i.addEventListener(u,(e=>a[0](a[1],e))):i.addEventListener(u,a),s.style.setProperty("color","rgba(252, 165, 165)"),s.style.setProperty("background-color","rgb(153, 27, 27)"),s.style.setProperty("border-radius","5px"),s.style.setProperty("padding","4px 8px"),l.style.setProperty("margin-top","8px"),l.style.setProperty("width","100%"),Z(l,(()=>t.error.stack)),e.events&&!e.events.queued&&(queueMicrotask((()=>{const{completed:t,events:n}=e;for(n.queued=!1;n.length;){const[e,r]=n[0];if(!t.has(e))return;re(r),n.shift()}})),e.events.queued=!0),n})()}function We(){return(()=>{const e=te(),t=function(e,t){for(;e&&e.localName!==t;)e=e.nextSibling;return e}(e.firstChild,"body"),n=t.firstChild,[r,o]=ne(n.nextSibling),s=r.nextSibling,[l,i]=ne(s.nextSibling);return Z(t,G(Ie,{get children(){return G(De,{})}}),r,o),Z(t,G(_e,{}),l,i),e})()}!function(e,t=window.document){const n=t._$DX_DELEGATE||(t._$DX_DELEGATE=new Set);for(let r=0,o=e.length;r<o;r++){const o=e[r];n.has(o)||(n.add(o),t.addEventListener(o,re))}}(["click"]);const Ge=Object.values({})[0],Ye=Ge?Ge.default:void 0;var Je=()=>G(Be,{get children(){return G(he,{get children(){return G(Te,{data:Ye,get children(){return G(We,{})}})}})}});((...e)=>{W=!0,ee(...e)})((()=>G(Je,{})),document);export{ne as a,G as b,y as c,m as d,te as g,Z as i,Q as s,z as t};
