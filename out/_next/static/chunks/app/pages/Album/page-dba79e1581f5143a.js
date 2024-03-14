(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[780],{16295:function(e,t,n){Promise.resolve().then(n.bind(n,85504))},85504:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return z}});var r=n(57437),l=n(2265),i=n(55777);function o(e){let{width:t,height:n}=e;return t/n}function s(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=10**t;return Math.round((e+Number.EPSILON)*n)/n}class c{greater(e,t){return 0>this.comparator(this.heap[e],this.heap[t])}swap(e,t){let n=this.heap[e];this.heap[e]=this.heap[t],this.heap[t]=n}swim(e){let t=e,n=Math.floor(t/2);for(;t>1&&this.greater(n,t);)this.swap(n,t),n=Math.floor((t=n)/2)}sink(e){let t=e,n=2*t;for(;n<=this.n&&(n<this.n&&this.greater(n,n+1)&&(n+=1),this.greater(t,n));)this.swap(t,n),n=2*(t=n)}push(e){this.n+=1,this.heap[this.n]=e,this.swim(this.n)}pop(){if(0===this.n)return;this.swap(1,this.n),this.n-=1;let e=this.heap.pop();return this.sink(1),e}size(){return this.n}constructor(e){this.comparator=e,this.heap=[],this.n=0}}function a(e,t,n,r){return(t-(e.length-1)*n-2*r*e.length)/e.reduce((e,t)=>e+o(t),0)}function u(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return[...t].filter(e=>!!e).join(" ")}function h(e,t,n){let{width:r,photosCount:l}=t,{spacing:i,padding:o,containerWidth:c}=n,a=i*(l-1)+2*o*l;return"calc((".concat(e," - ").concat(a,"px) / ").concat(s((c-a)/r,5),")")}function d(e,t,n){var r,l;return h(null!=(l=null==(r=e.match(/^\s*calc\((.*)\)\s*$/))?void 0:r[1])?l:e,t,n)}function p(e){var t,n;let{photo:r,layout:i,layoutOptions:o,imageProps:{style:s,className:c,...a}={},renderPhoto:p}=e,{onClick:m}=o,f={display:"block",boxSizing:"content-box",width:"rows"!==o.layout?"calc(100% - ".concat(2*o.padding,"px)"):h("100%",i,o),height:"auto",aspectRatio:"".concat(r.width," / ").concat(r.height),...o.padding?{padding:"".concat(o.padding,"px")}:null,...("columns"===o.layout||"masonry"===o.layout)&&i.photoIndex<i.photosCount-1?{marginBottom:"".concat(o.spacing,"px")}:null,...m?{cursor:"pointer"}:null,...s},g=m?e=>{m({event:e,photo:r,index:i.index})}:void 0,x={src:r.src,alt:null!=(t=r.alt)?t:"",title:r.title,onClick:g,style:f,className:u("react-photo-album--photo",c),loading:"lazy",decoding:"async",...function(e,t,n){let r,l;let i=e.srcSet||e.images;return i&&i.length>0&&(r=i.concat(i.find(t=>{let{width:n}=t;return n===e.width})?[]:[{src:e.src,width:e.width,height:e.height}]).sort((e,t)=>e.width-t.width).map(e=>"".concat(e.src," ").concat(e.width,"w")).join(", ")),n.sizes?l=(n.sizes.sizes||[]).map(e=>{let{viewport:r,size:l}=e;return"".concat(r," ").concat(d(l,t,n))}).concat(d(n.sizes.size,t,n)).join(", "):r&&(l="".concat(Math.ceil(t.width/n.containerWidth*100),"vw")),{srcSet:r,sizes:l}}(r,i,o),...a},w=e=>{let{src:t,alt:n,srcSet:r,sizes:i,style:o,...s}=x;return l.createElement("img",{alt:n,...r?{srcSet:r,sizes:i}:null,src:t,style:(null==e?void 0:e.wrapped)?{display:"block",width:"100%",height:"100%"}:o,...s})},v=(e=>{let{display:t,boxSizing:n,width:r,aspectRatio:l,padding:i,marginBottom:o,cursor:s}=e;return{display:t,boxSizing:n,width:r,aspectRatio:l,padding:i,marginBottom:o,cursor:s}})(f);return l.createElement(l.Fragment,null,null!=(n=null==p?void 0:p({photo:r,layout:i,layoutOptions:o,imageProps:x,renderDefaultPhoto:w,wrapperStyle:v}))?n:w())}function m(e){let{layoutOptions:t,rowIndex:n,rowsCount:r,renderRowContainer:i,rowContainerProps:{style:o,className:s,...c}={},children:a}=e,h={className:u("react-photo-album--row",s),style:{display:"flex",flexDirection:"row",flexWrap:"nowrap",alignItems:"flex-start",justifyContent:"space-between",...n<r-1?{marginBottom:"".concat(t.spacing,"px")}:null,...o},...c};return l.createElement(l.Fragment,null,(null!=i?i:function(e){let{rowContainerProps:t,children:n}=e;return l.createElement("div",{...t},n)})({layoutOptions:t,rowIndex:n,rowsCount:r,rowContainerProps:h,children:a}))}function f(e){let{photos:t,layoutOptions:n,renderPhoto:r,renderRowContainer:i,componentsProps:{imageProps:u,rowContainerProps:h}}=e,d=function(e){let{photos:t,layoutOptions:n}=e,{spacing:r,padding:l,containerWidth:i,targetRowHeight:u,rowConstraints:h}=n,d=function(e){let{photos:t,targetRowHeight:n,containerWidth:r}=e;return s(r/n/t.reduce((e,t)=>Math.min(o(t),e),Number.MAX_VALUE))+2}({photos:t,containerWidth:i,targetRowHeight:u}),p=function(e,t,n){let r=function(e,t,n){var r;let l=new Map,i=new Set,o=new Map;o.set(t,0);let s=new c((r=e=>e.weight,(e,t)=>r(t)-r(e)));for(s.push({id:t,weight:0});s.size()>0;){let{id:t,weight:n}=s.pop();if(!i.has(t)){let r=e(t);i.add(t),r.forEach((e,r)=>{let i=n+e,c=l.get(r),a=o.get(r);(void 0===a||a>i&&(a/i>1.005||void 0!==c&&c<t))&&(o.set(r,i),s.push({id:r,weight:i}),l.set(r,t))})}}return o.has(n)?l:void 0}(e,0,n);return r?function(e,t){let n=[];for(let r=t;void 0!==r;r=e.get(r))n.push(r);return n.reverse()}(r,n):void 0}(function(e){let{photos:t,layoutOptions:n,targetRowHeight:r,limitNodeSearch:l,rowConstraints:i}=e;return e=>{var o,s;let{containerWidth:c,spacing:u,padding:h}=n,d=new Map;d.set(e,0);let p=null!=(o=null==i?void 0:i.minPhotos)?o:1,m=Math.min(l,null!=(s=null==i?void 0:i.maxPhotos)?s:1/0);for(let n=e+p;n<t.length+1&&!(n-e>m);n+=1){let l=function(e,t,n,r,l,i,o){let s=e.slice(t,n),c=a(s,r,i,o);return c>0?(c-l)**2*s.length:void 0}(t,e,n,c,r,u,h);if(void 0===l)break;d.set(n,l)}return d}}({photos:t,layoutOptions:n,targetRowHeight:u,limitNodeSearch:d,rowConstraints:h}),0,t.length);if(void 0===p)return;let m=[];for(let e=1;e<p.length;e+=1){let n=t.map((e,t)=>({photo:e,index:t})).slice(p[e-1],p[e]),s=a(n.map(e=>{let{photo:t}=e;return t}),i,r,l);m.push(n.map((e,t)=>{let{photo:r,index:l}=e;return{photo:r,layout:{height:s,width:s*o(r),index:l,photoIndex:t,photosCount:n.length}}}))}return m}({photos:t,layoutOptions:n});return d?l.createElement(l.Fragment,null,d.map((e,t)=>l.createElement(m,{key:"row-".concat(t),layoutOptions:n,rowIndex:t,rowsCount:d.length,renderRowContainer:i,rowContainerProps:h},e.map(e=>{let{photo:t,layout:i}=e;return l.createElement(p,{key:t.key||t.src,photo:t,layout:i,layoutOptions:n,renderPhoto:r,imageProps:u})})))):null}function g(e){let{path:t,photos:n,containerWidth:r,columnsGaps:l,columnsRatios:i,spacing:s,padding:c}=e,a=[],u=i.reduce((e,t)=>e+t,0);for(let e=0;e<t.length-1;e+=1){let h=n.map((e,t)=>({photo:e,index:t})).slice(t[e],t[e+1]),d=i.reduce((t,n,r)=>t+(l[e]-l[r])*n,0),p=(r-(t.length-2)*s-2*(t.length-1)*c-d)*i[e]/u;a.push(h.map((e,t)=>{let{photo:n,index:r}=e;return{photo:n,layout:{width:p,height:p/o(n),index:r,photoIndex:t,photosCount:h.length}}}))}return a}function x(e){let{layoutOptions:t,renderColumnContainer:n,children:r,columnContainerProps:{style:i,className:o,...c}={},...a}=e,h={className:u("react-photo-album--column",o),style:{display:"flex",flexDirection:"column",flexWrap:"nowrap",alignItems:"flex-start",width:function(e){let{layoutOptions:t,columnIndex:n,columnsCount:r,columnsGaps:l,columnsRatios:i}=e,{layout:o,spacing:c,padding:a}=t;if("masonry"===o||!l||!i)return"calc((100% - ".concat(c*(r-1),"px) / ").concat(r,")");let u=i.reduce((e,t)=>e+t,0),h=i.reduce((e,t,r)=>e+(l[n]-l[r])*t,0);return"calc((100% - ".concat(s((r-1)*c+2*r*a+h,3),"px) * ").concat(s(i[n]/u,5)," + ").concat(2*a,"px)")}(e),justifyContent:"columns"===t.layout?"space-between":"flex-start",...i},...c};return l.createElement(l.Fragment,null,(null!=n?n:function(e){let{columnContainerProps:t,children:n}=e;return l.createElement("div",{...t},n)})({layoutOptions:t,columnContainerProps:h,children:r,...a}))}function w(e){let{photos:t,layoutOptions:n,renderPhoto:r,renderColumnContainer:i,componentsProps:{imageProps:s,columnContainerProps:c}}=e,a=function(e){let{photos:t,layoutOptions:n}=e;return function e(t){let{photos:n,layoutOptions:r}=t,{columns:l,spacing:i,padding:s,containerWidth:c}=r,{columnsGaps:a,columnsRatios:u,columnsModel:h}=function(e){var t;let{photos:n,layoutOptions:r,targetColumnWidth:l}=e,{columns:i,spacing:s,padding:c,containerWidth:a}=r,u=[],h=[];if(n.length<=i){let e=n.length>0?n.reduce((e,t)=>e+o(t),0)/n.length:1;for(let t=0;t<i;t+=1)u[t]=2*c,h[t]=t<n.length?o(n[t]):e;let t=g({path:Array.from({length:i+1}).map((e,t)=>Math.min(t,n.length)),photos:n,columnsRatios:h,columnsGaps:u,containerWidth:a,spacing:s,padding:c});return{columnsGaps:u,columnsRatios:h,columnsModel:t}}let d=(n.reduce((e,t)=>e+l/o(t),0)+s*(n.length-i)+2*c*n.length)/i,p=function(e,t,n){let r=[n];for(let l=n,i=t;i>0;i-=1)r.push(l=e.get(l)[i].node);return r.reverse()}(function(e,t,n,r){let l=new Map,i=new Set;i.add(0);for(let n=0;n<t;n+=1){let o=[...i.keys()];i.clear(),o.forEach(o=>{let s=n>0?l.get(o)[n].weight:0;e(o).forEach(e=>{let{neighbor:c,weight:a}=e,u=l.get(c);u||(u=[],l.set(c,u));let h=s+a,d=u[n+1];(!d||d.weight>h&&(d.weight/h>1.0001||o<d.node))&&(u[n+1]={node:o,weight:h}),n<t-1&&c!==r&&i.add(c)})})}return l}(function(e){let{photos:t,spacing:n,padding:r,targetColumnWidth:l,targetColumnHeight:i}=e;return e=>{let s=[],c=1.5*i,a=l/o(t[e])+2*r;for(let u=e+1;u<t.length+1&&(s.push({neighbor:u,weight:(i-a)**2}),!(a>c)&&u!==t.length);u+=1)a+=l/o(t[u])+n+2*r;return s}}({photos:n,targetColumnWidth:l,targetColumnHeight:d,spacing:s,padding:c}),i,0,t=n.length),i,t);for(let e=0;e<p.length-1;e+=1){let t=n.slice(p[e],p[e+1]);u[e]=s*(t.length-1)+2*c*t.length,h[e]=1/t.reduce((e,t)=>e+1/o(t),0)}let m=g({path:p,photos:n,columnsRatios:h,columnsGaps:u,containerWidth:a,spacing:s,padding:c});return{columnsGaps:u,columnsRatios:h,columnsModel:m}}({photos:n,layoutOptions:r,targetColumnWidth:(c-i*(l-1)-2*s*l)/l});return h.findIndex(e=>e.findIndex(e=>{let{layout:{width:t,height:n}}=e;return t<0||n<0})>=0)>=0?l>1?e({photos:n,layoutOptions:{...r,columns:l-1}}):void 0:{columnsModel:h,columnsGaps:a,columnsRatios:u}}({photos:t,layoutOptions:n})}({photos:t,layoutOptions:n});if(!a)return null;let{columnsModel:u,columnsRatios:h,columnsGaps:d}=a;return l.createElement(l.Fragment,null,u.map((e,t)=>l.createElement(x,{key:"column-".concat(t),layoutOptions:n,columnIndex:t,columnsCount:u.length,columnsGaps:d,columnsRatios:h,renderColumnContainer:i,columnContainerProps:c},e.map(e=>{let{photo:t,layout:i}=e;return l.createElement(p,{key:t.key||t.src,photo:t,layout:i,layoutOptions:n,renderPhoto:r,imageProps:s})}))))}function v(e){let{photos:t,layoutOptions:n,renderPhoto:r,renderColumnContainer:i,componentsProps:{imageProps:s,columnContainerProps:c}}=e,a=function e(t){let{photos:n,layoutOptions:r}=t,{columns:l,spacing:i,padding:s,containerWidth:c}=r,a=(c-i*(l-1)-2*s*l)/l;if(a<=0)return l>1?e({...t,layoutOptions:{...r,columns:l-1}}):void 0;let u=[];for(let e=0;e<l;e+=1)u[e]=0;return n.reduce((e,t,n)=>{let r=u.reduce((e,t,n)=>t<u[e]-1?n:e,0);return u[r]=u[r]+a/o(t)+i+2*s,e[r].push({photo:t,index:n}),e},Array.from({length:l}).map(()=>[])).map(e=>e.map((t,n)=>{let{photo:r,index:l}=t;return{photo:r,layout:{width:a,height:a/o(r),index:l,photoIndex:n,photosCount:e.length}}}))}({photos:t,layoutOptions:n});return a?l.createElement(l.Fragment,null,a.map((e,t)=>l.createElement(x,{key:"masonry-column-".concat(t),layoutOptions:n,columnsCount:a.length,columnIndex:t,renderColumnContainer:i,columnContainerProps:c},e.map(e=>{let{photo:t,layout:i}=e;return l.createElement(p,{key:t.key||t.src,photo:t,layout:i,layoutOptions:n,renderPhoto:r,imageProps:s})})))):null}function y(e){let{layout:t,renderContainer:n,children:r,containerRef:i,containerProps:{style:o,className:s,...c}={}}=e,a={className:u("react-photo-album","react-photo-album--".concat(t),s),style:{display:"flex",flexWrap:"nowrap",justifyContent:"space-between",flexDirection:"rows"===t?"column":"row",...o},...c};return l.createElement(l.Fragment,null,(null!=n?n:function(e){let{containerProps:t,children:n,containerRef:r}=e;return l.createElement("div",{ref:r,...t},n)})({containerProps:a,containerRef:i,layout:t,children:r}))}function b(e,t){let{newContainerWidth:n,newScrollbarWidth:r}=t,{containerWidth:l,scrollbarWidth:i}=e;return void 0!==l&&void 0!==i&&void 0!==n&&void 0!==r&&n>l&&n-l<=20&&r<i?{containerWidth:l,scrollbarWidth:r}:l!==n||i!==r?{containerWidth:n,scrollbarWidth:r}:e}let j=Object.freeze([1200,600,300,0]);function k(e,t){return"function"==typeof e?e(t):e}function N(e,t){return void 0!==e?k(e,t):void 0}function E(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,l=N(e,t);return Math.round(Math.max(void 0===l?function(e,t){let n=j.findIndex(e=>e<=t);return k(e[n>=0?n:0],t)}(n,t):l,r))}function C(e){let{photos:t,layout:n,renderContainer:r,defaultContainerWidth:i,breakpoints:o}=e,{containerRef:s,containerWidth:c}=function(e,t){let[{containerWidth:n},r]=l.useReducer(b,{containerWidth:t}),i=l.useRef(null),o=l.useRef();return{containerRef:l.useCallback(t=>{var n;null==(n=o.current)||n.disconnect(),o.current=void 0,i.current=t;let l=()=>r({newContainerWidth:function(e,t){let n=null==e?void 0:e.clientWidth;if(void 0!==n&&t&&t.length>0){let e=[...t.filter(e=>e>0)].sort((e,t)=>t-e);e.push(Math.floor(e[e.length-1]/2));let r=n;n=e.find((t,n)=>t<=r||n===e.length-1)}return n}(i.current,e),newScrollbarWidth:window.innerWidth-document.documentElement.clientWidth});l(),t&&"undefined"!=typeof ResizeObserver&&(o.current=new ResizeObserver(l),o.current.observe(t))},[e]),containerWidth:n}}(function(e){let t=l.useRef(e);return e&&t.current&&e.join()===t.current.join()||(t.current=e),t.current}(o),i);if(!n||!["rows","columns","masonry"].includes(n)||!Array.isArray(t))return null;let a=c?function(e){let{layout:t,onClick:n,containerWidth:r,targetRowHeight:l,rowConstraints:i,columns:o,spacing:s,padding:c,sizes:a}=e;return{layout:t,onClick:n,containerWidth:r,columns:E(o,r,[5,4,3,2],1),spacing:E(s,r,[20,15,10,5]),padding:E(c,r,[0,0,0,0,0]),targetRowHeight:E(l,r,[e=>e/5,e=>e/4,e=>e/3,e=>e/2]),rowConstraints:N(i,r),sizes:a}}({containerWidth:c,...e}):void 0,u=function(e,t,n){let{photos:r,componentsProps:l}=e,i=k(l,t)||{};if(n){let{layout:e,spacing:t,padding:l,rowConstraints:o}=n;if("rows"===e){let{singleRowMaxHeight:e}=o||{};if(e){let n=Math.floor(r.reduce((t,n)=>{let{width:r,height:i}=n;return t+r/i*e-2*l},l*r.length*2+t*(r.length-1)));n>0&&(i.containerProps=i.containerProps||{},i.containerProps.style={maxWidth:n,...i.containerProps.style})}}}return i}(e,c,a);return l.createElement(y,{layout:n,containerRef:s,renderContainer:r,containerProps:u.containerProps},a&&function(e,t,n){let{photos:r,layout:i,renderPhoto:o,renderRowContainer:s,renderColumnContainer:c}=e,a={photos:r,renderPhoto:o,componentsProps:t};return"rows"===i?l.createElement(f,{layoutOptions:n,renderRowContainer:s,...a}):"columns"===i?l.createElement(w,{layoutOptions:n,renderColumnContainer:c,...a}):l.createElement(v,{layoutOptions:n,renderColumnContainer:c,...a})}(e,u,a))}n(10243);var P=n(138),z=e=>{let[t,n]=l.useState(!1),[o,s]=(0,l.useState)(""),c=e=>{s(e),n(!0)},a={name:"About",subPage:"Album"};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.Z,{name:a.name,subPage:a.subPage}),(0,r.jsxs)("div",{className:"max-[430px]:px-[10px] min-[1440px]:px-[150px] min-[2000px]:px-[700px] lg:h-[100%] justify-center mb-24 items-center  mt-[30px] ",children:[(0,r.jsx)(C,{layout:"rows",photos:[{id:1,src:"/img/dron.jpg",name:"dron",width:500,height:400,srcSet:[{src:"/images/dron_400x300.jpg",width:400,height:300},{src:"/images/fuck_200x150.jpg",width:200,height:150}]},{id:2,src:"/img/fuck.jpg",name:"fuck you",width:500,height:400,srcSet:[{src:"/images/dron_400x300.jpg",width:400,height:300},{src:"/images/fuck_200x150.jpg",width:200,height:150}]},{id:3,src:"/img/dron.jpg",width:500,height:400,srcSet:[{src:"/images/dron_400x300.jpg",width:400,height:300},{src:"/images/fuck_200x150.jpg",width:200,height:150}]},{id:4,src:"/img/dron.jpg",width:500,height:400,srcSet:[{src:"/images/dron_400x300.jpg",width:400,height:300},{src:"/images/fuck_200x150.jpg",width:200,height:150}]},{id:5,src:"/img/dron.jpg",width:500,height:400,srcSet:[{src:"/images/dron_400x300.jpg",width:400,height:300},{src:"/images/fuck_200x150.jpg",width:200,height:150}]}],onClick:e=>{c(e.photo),console.log(e.photo)}}),t?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ",children:(0,r.jsx)("div",{className:"relative w-auto my-6 mx-auto max-w-3xl",children:(0,r.jsxs)("div",{className:"border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none",children:[(0,r.jsxs)("div",{className:"flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t",children:[(0,r.jsx)("h3",{className:"text-3xl font-semibold",children:o.name}),(0,r.jsx)("button",{className:"text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",type:"button",onClick:()=>n(!1),children:"Close"})]}),(0,r.jsx)("div",{className:"bg-purple-200 relative p-6 flex-auto",children:(0,r.jsx)("p",{className:"my-4 text-blueGray-500 text-lg leading-relaxed",children:(0,r.jsxs)(P.Z,{className:"m-[70px] z-[9] bg-white",dots:!0,infinite:!0,speed:1200,slidesToShow:1,slidesToScroll:1,autoplay:!1,autoplaySpeed:4e3,pauseOnHover:!1,adaptiveHeight:!0,fade:!0,arrows:!0,cssEase:"cubic-bezier(0.7, 0, 0.3, 1)",cssColor:"red",children:[(0,r.jsx)("div",{children:(0,r.jsx)("img",{className:" w-full h-[680px] overflow-hidden opacity-[0.8] object-cover",src:o.src,alt:""})}),(0,r.jsx)("div",{children:(0,r.jsx)("img",{className:"w-full h-[680px] overflow-hidden opacity-[0.8] object-cover",src:o.src,alt:""})}),(0,r.jsx)("div",{children:(0,r.jsx)("img",{className:"w-full h-[680px] overflow-hidden opacity-[0.7] object-cover",src:o.src,alt:""})}),(0,r.jsx)("div",{children:(0,r.jsx)("img",{className:"w-full h-[680px] overflow-hidden opacity-[0.8] object-cover",src:o.src,alt:""})})]})})}),(0,r.jsx)("div",{className:"flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b"})]})})}),(0,r.jsx)("div",{className:"opacity-25 fixed inset-0 z-40 bg-black"})]}):null]})]})}},55777:function(e,t,n){"use strict";var r=n(57437);n(2265),t.Z=e=>(0,r.jsxs)(r.Fragment,{children:["      ",(0,r.jsxs)("div",{className:"z-[-1] relative",children:[(0,r.jsx)("div",{children:(0,r.jsx)("img",{src:"/img/symembpage.png",alt:"",className:" absolute w-full h-[280px] overflow-hidden opacity-[0.5] object-cover "})}),(0,r.jsx)("div",{className:"object-cover h-[280px] opacity-[0.9] ",children:(0,r.jsx)("div",{className:"flex justify-center h-[280px]",children:(0,r.jsx)("div",{className:" mt-[100px] items-center flex justify-center w-[200px] h-[100px] border-1 rounded-lg bg-red-900  ",children:(0,r.jsxs)("h2",{className:"p-8 border-none rounded-md text-center text-white font-sans font-bold text-xl",children:[e.name," ",(0,r.jsx)("br",{})," "]})})})})]})]})}},function(e){e.O(0,[384,138,251,971,69,744],function(){return e(e.s=16295)}),_N_E=e.O()}]);