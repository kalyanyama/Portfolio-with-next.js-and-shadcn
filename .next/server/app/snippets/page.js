(()=>{var e={};e.id=277,e.ids=[277],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},4538:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>n.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>c,routeModule:()=>m,tree:()=>d}),r(583),r(6203),r(1506),r(5866);var a=r(3191),s=r(8716),i=r(7922),n=r.n(i),l=r(5231),o={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>l[e]);r.d(t,o);let d=["",{children:["snippets",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,583)),"/Users/kalyanyama/Desktop/portfolio/app/snippets/page.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,6203)),"/Users/kalyanyama/Desktop/portfolio/app/snippets/layout.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,1506)),"/Users/kalyanyama/Desktop/portfolio/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,5866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["/Users/kalyanyama/Desktop/portfolio/app/snippets/page.tsx"],u="/snippets/page",p={require:r,loadChunk:()=>Promise.resolve()},m=new a.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/snippets/page",pathname:"/snippets",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},9153:(e,t,r)=>{Promise.resolve().then(r.bind(r,1918))},1224:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2994,23)),Promise.resolve().then(r.t.bind(r,6114,23)),Promise.resolve().then(r.t.bind(r,9727,23)),Promise.resolve().then(r.t.bind(r,9671,23)),Promise.resolve().then(r.t.bind(r,1868,23)),Promise.resolve().then(r.t.bind(r,4759,23))},5621:()=>{},5303:()=>{},1918:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>x});var a=r(326),s=r(7577),i=r(4214),n=r(8671),l=r(7863);let o=(0,n.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-2 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),d=s.forwardRef(({className:e,variant:t,size:r,asChild:s=!1,...n},d)=>{let c=s?i.g7:"button";return a.jsx(c,{className:(0,l.cn)(o({variant:t,size:r,className:e})),ref:d,...n})});d.displayName="Button";var c=r(2643),u=r(2331),p=r(6812),m=r(434);let f=[{catagory:"UI",defaultCount:6,list:[{label:"",image:""},{label:"",image:""},{label:"",image:""},{label:"",image:""},{label:"",image:""},{label:"",image:""},{label:"",image:""},{label:"",image:""},{label:"",image:""},{label:"",image:""},{label:"",image:""}]},{catagory:"Integrations",defaultCount:6,list:[{label:"",image:""}]}],x=()=>(0,a.jsxs)("div",{className:"min-h-700 container sm:max-w-5xl",children:[a.jsx("h2",{className:"text-xl font-bold",children:"Snippets"}),f.map(e=>(0,a.jsxs)("div",{children:[a.jsx(u.Z,{}),(0,a.jsxs)("div",{className:"flex justify-between items-center",children:[a.jsx("h2",{className:"text-base font-bold",children:e.catagory}),(0,a.jsxs)(d,{variant:"link",onClick:()=>e.defaultCount=e.list.length,children:["+ ",e.list.length," other items"]})]}),e.list&&a.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8",children:e.list.map((e,t)=>a.jsx("div",{children:(0,a.jsxs)(c.Zb,{className:"hover:shadow-xl transition ease-in-out duration-500 hover:-translate-y-1 ",children:[(0,a.jsxs)(c.Ol,{children:[a.jsx(c.ll,{children:"Archive Product"}),a.jsx(c.SZ,{children:"Lipsum dolor sit amet, consectetur adipiscing elit."})]}),a.jsx(c.aY,{children:a.jsx(d,{size:"sm",asChild:!0,children:(0,a.jsxs)(m.default,{href:"/snippets/12345",className:"text-sm",children:[a.jsx(p.YGl,{className:"mr-1 h-3 w-3"})," ","Take a Look?"]})})})]})},t)).slice(0,e.defaultCount)})]},e.catagory))]})},2643:(e,t,r)=>{"use strict";r.d(t,{Ol:()=>l,SZ:()=>d,Zb:()=>n,aY:()=>c,ll:()=>o});var a=r(326),s=r(7577),i=r(7863);let n=s.forwardRef(({className:e,...t},r)=>a.jsx("div",{ref:r,className:(0,i.cn)("rounded-xl border bg-card text-card-foreground shadow",e),...t}));n.displayName="Card";let l=s.forwardRef(({className:e,...t},r)=>a.jsx("div",{ref:r,className:(0,i.cn)("flex flex-col space-y-1.5 p-6",e),...t}));l.displayName="CardHeader";let o=s.forwardRef(({className:e,...t},r)=>a.jsx("h3",{ref:r,className:(0,i.cn)("font-semibold leading-none tracking-tight",e),...t}));o.displayName="CardTitle";let d=s.forwardRef(({className:e,...t},r)=>a.jsx("p",{ref:r,className:(0,i.cn)("text-sm text-muted-foreground",e),...t}));d.displayName="CardDescription";let c=s.forwardRef(({className:e,...t},r)=>a.jsx("div",{ref:r,className:(0,i.cn)("p-6 pt-0",e),...t}));c.displayName="CardContent",s.forwardRef(({className:e,...t},r)=>a.jsx("div",{ref:r,className:(0,i.cn)("flex items-center p-6 pt-0",e),...t})).displayName="CardFooter"},2331:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var a=r(326);let s=()=>a.jsx("div",{className:"border max-w-2 border-y my-6"})},7863:(e,t,r)=>{"use strict";r.d(t,{cn:()=>i});var a=r(1135),s=r(1009);function i(...e){return(0,s.m6)((0,a.W)(e))}},1506:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>d,metadata:()=>o});var a=r(9510),s=r(8215),i=r.n(s),n=r(623),l=r.n(n);r(7272);let o={title:"Kalyan yama - Developer & Designer.",description:"I’m a web developer/designer who loves creating cool stuff with React.js and Node.js."};function d({children:e}){return a.jsx("html",{lang:"en",children:a.jsx("body",{className:`${i().variable} ${l().variable} antialiased`,children:e})})}},6203:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i,metadata:()=>s});var a=r(9510);let s={title:"Snippets - Kalyan yama",description:""},i=({children:e})=>a.jsx(a.Fragment,{children:e})},583:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});let a=(0,r(8570).createProxy)(String.raw`/Users/kalyanyama/Desktop/portfolio/app/snippets/page.tsx#default`)},7481:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});var a=r(6621);let s=e=>[{type:"image/x-icon",sizes:"48x48",url:(0,a.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},7272:()=>{},8671:(e,t,r)=>{"use strict";r.d(t,{j:()=>i});let a=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,s=function(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=function e(t){var r,a,s="";if("string"==typeof t||"number"==typeof t)s+=t;else if("object"==typeof t){if(Array.isArray(t))for(r=0;r<t.length;r++)t[r]&&(a=e(t[r]))&&(s&&(s+=" "),s+=a);else for(r in t)t[r]&&(s&&(s+=" "),s+=r)}return s}(e))&&(a&&(a+=" "),a+=t);return a},i=(e,t)=>r=>{var i;if((null==t?void 0:t.variants)==null)return s(e,null==r?void 0:r.class,null==r?void 0:r.className);let{variants:n,defaultVariants:l}=t,o=Object.keys(n).map(e=>{let t=null==r?void 0:r[e],s=null==l?void 0:l[e];if(null===t)return null;let i=a(t)||a(s);return n[e][i]}),d=r&&Object.entries(r).reduce((e,t)=>{let[r,a]=t;return void 0===a||(e[r]=a),e},{});return s(e,o,null==t?void 0:null===(i=t.compoundVariants)||void 0===i?void 0:i.reduce((e,t)=>{let{class:r,className:a,...s}=t;return Object.entries(s).every(e=>{let[t,r]=e;return Array.isArray(r)?r.includes({...l,...d}[t]):({...l,...d})[t]===r})?[...e,r,a]:e},[]),null==r?void 0:r.class,null==r?void 0:r.className)}}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[948,520,336,339,434],()=>r(4538));module.exports=a})();