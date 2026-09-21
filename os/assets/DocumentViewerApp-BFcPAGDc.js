import{b as n,j as e,C as r,B as l,P as i,q as c}from"./index-B472ZjZ2.js";import{S as d,E as o}from"./skills-pzTDUVdG.js";/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=n("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=n("Printer",[["polyline",{points:"6 9 6 2 18 2 18 9",key:"1306q4"}],["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["rect",{width:"12",height:"8",x:"6",y:"14",key:"5ipwut"}]]),p=`# navairgap
**Defensive Security × Backend** — Remote

${l}

## Projects
${Object.values(i).map(a=>`- **${a.name}** — ${a.desc}`).join(`
`)}

## Skills
${d.map(a=>`- ${a.label}: ${a.rows.map(s=>s[0]).join(", ")}`).join(`
`)}
- EXPLORING: ${o}

## Contact
- ${r}
- ${c}
`;function j(){const a=()=>{const s=new Blob([p],{type:"text/markdown"}),t=document.createElement("a");t.href=URL.createObjectURL(s),t.download="navairgap-resume.md",t.click(),URL.revokeObjectURL(t.href)};return e.jsxs("div",{className:"h-full flex flex-col bg-[#3a3a3f]",children:[e.jsxs("div",{className:"flex items-center gap-2 px-3 py-2 bg-[#232328] border-b border-[rgba(255,255,255,.08)]",children:[e.jsx("span",{className:"text-[12px] text-[rgba(244,244,245,.62)]",children:"resume.pdf"}),e.jsxs("div",{className:"ml-auto flex gap-1.5",children:[e.jsxs("button",{onClick:()=>window.print(),className:"flex items-center gap-1.5 px-2.5 py-1 rounded-[6px] bg-[rgba(255,255,255,.08)] text-[12px] text-[#f4f4f5] hover:bg-[rgba(255,255,255,.14)]",children:[e.jsx(m,{size:12})," Print / PDF"]}),e.jsxs("button",{onClick:a,className:"flex items-center gap-1.5 px-2.5 py-1 rounded-[6px] bg-[#7c9cff] text-black text-[12px] font-semibold",children:[e.jsx(x,{size:12})," .md"]})]})]}),e.jsx("div",{className:"flex-1 overflow-auto p-6 grid place-items-start justify-center",children:e.jsxs("div",{id:"resume-doc",className:"bg-white text-[#18181b] w-[640px] max-w-full rounded-[4px] shadow-[0_10px_40px_rgba(0,0,0,.4)] p-10 text-[13px] leading-[1.65]",children:[e.jsx("h1",{className:"text-[24px] font-bold tracking-tight",children:"navairgap"}),e.jsxs("div",{className:"text-[#555] mb-4",children:["Defensive Security × Backend · Remote · ",r]}),e.jsx("p",{className:"mb-4",children:l}),e.jsx("h2",{className:"text-[14px] font-bold uppercase tracking-wide mt-5 mb-2 border-b border-[#ddd] pb-1",children:"Projects"}),Object.values(i).map(s=>e.jsxs("div",{className:"mb-2.5",children:[e.jsx("b",{children:s.name})," — ",e.jsx("span",{className:"text-[#444]",children:s.desc})]},s.name)),e.jsx("h2",{className:"text-[14px] font-bold uppercase tracking-wide mt-5 mb-2 border-b border-[#ddd] pb-1",children:"Skills"}),d.map(s=>e.jsxs("div",{className:"mb-1",children:[e.jsx("b",{className:"w-28 inline-block",children:s.label})," ",s.rows.map(t=>t[0]).join(", ")]},s.label)),e.jsxs("div",{children:[e.jsx("b",{className:"w-28 inline-block",children:"EXPLORING"})," ",o]}),e.jsx("h2",{className:"text-[14px] font-bold uppercase tracking-wide mt-5 mb-2 border-b border-[#ddd] pb-1",children:"Links"}),e.jsx("div",{children:c})]})})]})}export{j as default};
