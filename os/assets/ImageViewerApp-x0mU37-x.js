import{c as n,r,j as e,M as x,R as d}from"./index-B_28SK1p.js";/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=n("Maximize2",[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=n("ZoomIn",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=n("ZoomOut",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]),u=`
 ██████╗ █████╗ ████████╗
██╔════╝██╔══██╗╚══██╔══╝
██║     ███████║   ██║
██║     ██╔══██║   ██║
╚██████╗██║  ██║   ██║
 ╚═════╝╚═╝  ╚═╝   ╚═╝`;function b({win:c}){const[o,t]=r.useState(1),[l,a]=r.useState(0),i=(c.props.path||"avatar.png").split("/").pop();return e.jsxs("div",{className:"h-full flex flex-col bg-[#0a0a0c] text-[#f4f4f5]",children:[e.jsxs("div",{className:"flex items-center gap-1 px-2 py-1.5 border-b border-[rgba(255,255,255,.08)]",children:[e.jsx("span",{className:"text-[12px] text-[rgba(244,244,245,.62)]",children:i}),e.jsxs("div",{className:"ml-auto flex items-center gap-1",children:[e.jsx("button",{onClick:()=>t(s=>Math.max(.2,s-.2)),className:"p-1.5 rounded hover:bg-[rgba(255,255,255,.08)]",children:e.jsx(p,{size:13})}),e.jsxs("span",{className:"text-[11px] w-10 text-center",children:[Math.round(o*100),"%"]}),e.jsx("button",{onClick:()=>t(s=>Math.min(5,s+.2)),className:"p-1.5 rounded hover:bg-[rgba(255,255,255,.08)]",children:e.jsx(y,{size:13})}),e.jsx("button",{onClick:()=>{t(1),a(0)},className:"p-1.5 rounded hover:bg-[rgba(255,255,255,.08)]",children:e.jsx(m,{size:13})}),e.jsx("button",{onClick:()=>a(s=>s-90),className:"p-1.5 rounded hover:bg-[rgba(255,255,255,.08)]",children:e.jsx(x,{size:13})}),e.jsx("button",{onClick:()=>a(s=>s+90),className:"p-1.5 rounded hover:bg-[rgba(255,255,255,.08)]",children:e.jsx(d,{size:13})})]})]}),e.jsx("div",{className:"flex-1 overflow-auto grid place-items-center",children:e.jsx("pre",{className:"text-[#cdc4ba] transition-transform duration-200 select-none",style:{transform:`scale(${o}) rotate(${l}deg)`},children:u})})]})}export{b as default};
