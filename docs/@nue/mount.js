var F=Object.create;var{defineProperty:C,getPrototypeOf:G,getOwnPropertyNames:H}=Object;var I=Object.prototype.hasOwnProperty;var J=(g,k,y)=>{y=g!=null?F(G(g)):{};const f=k||!g||!g.__esModule?C(y,"default",{value:g,enumerable:!0}):y;for(let L of H(g))if(!I.call(f,L))C(f,L,{get:()=>g[L],enumerable:!0});return f};var K=(g)=>{return import.meta.require(g)};async function N(g){const k=document.querySelector('[name="nue:components"]')?.getAttribute("content");if(!k)return[];const y=[];for(let f of k.split(" ")){if(f==g)f+=`?${++M}`;const{lib:L}=await import(f);if(L)y.push(...L)}return y}async function D(g){const k=document.querySelectorAll("[island]"),y=k[0]?await N(g):[];if(!y[0])return;const{createApp:f}=await import("./nue.js");for(let L of[...k]){const w=L.getAttribute("island"),z=L.nextElementSibling,E=z?.type=="application/json"?JSON.parse(z.textContent):{},B=y.find((q)=>q.name==w);if(B){const q=f(B,E,y).mount(L);v.push(q)}else console.error("Component not defined:",w)}}async function P(){v.forEach((g)=>g.unmount()),v=[]}var v=[],M=0;addEventListener("route",D);addEventListener("DOMContentLoaded",D);export{P as unmountAll,D as mountAll};