import{r as m,a as e,F as b,j as c,k as x,c as g,d as F}from"./app.4d4dc35b.js";var h={};(function(u){Object.defineProperty(u,"__esModule",{value:!0});var t="fas",a="check",s=512,l=512,i=[10003,10004],r="f00c",o="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z";u.definition={prefix:t,iconName:a,icon:[s,l,i,r,o]},u.faCheck=u.definition,u.prefix=t,u.iconName=a,u.width=s,u.height=l,u.ligatures=i,u.unicode=r,u.svgPathData=o,u.aliases=i})(h);function N({id:u,choices:t,correction:a=void 0}){const[s,l]=m.exports.useState("");return e("div",{className:"flex flex-col gap-4 ml-4",children:t.map((i,r)=>e(C,{qId:u,id:`${u}-a-${r}`,currentValue:s,setValue:l,value:i,correction:a},r))})}const C=({qId:u,id:t,setValue:a,value:s,currentValue:l,correction:i=void 0})=>{const r=l===t?"text-second":"text-transparent",o=t===i?"bg-green-600 text-white rounded p-1":"";return e(b,{children:c("label",{htmlFor:t,className:"flex cursor-pointer items-center gap-2 text-xl ",children:[c("span",{className:"relative flex justify-center items-center w-5 aspect-square border bg-white border-main",children:[e(x,{icon:h.faCheck,className:r,size:"sm"}),e("input",{required:!0,className:"absolute top-1 right-0 z-[-1]",onChange:f=>a(f.target.value),id:t,type:"radio",name:u,value:t})]}),e("span",{className:o,children:s})]})})};function q({id:u,correction:t}){const[a,s]=m.exports.useState();let l;(r=>{r.True="true",r.False="false"})(l||(l={}));const i=r=>a===r?"text-second":"text-transparent";return c("div",{className:"flex flex-col gap-4 ml-4",children:[c("label",{htmlFor:`${u}-a-1`,className:"flex cursor-pointer items-center gap-2 text-xl relative",children:[c("span",{className:"relative flex justify-center items-center w-5 aspect-square border bg-white border-main",children:[e(x,{icon:h.faCheck,className:i("true"),size:"sm"}),e("input",{required:!0,className:"absolute top-1 right-0 z-[-1]",onChange:r=>s(r.target.value),id:`${u}-a-1`,type:"radio",name:u,value:"true"})]}),e("span",{className:t==="true"?"bg-green-600 text-white rounded p-1":"",children:"\u0635\u062D"})]}),c("label",{htmlFor:`${u}-a-2`,className:"flex cursor-pointer items-center gap-2 text-xl relative",children:[c("span",{className:"relative flex justify-center items-center w-5 aspect-square border bg-white border-main",children:[e(x,{icon:h.faCheck,className:i("false"),size:"sm"}),e("input",{required:!0,className:"absolute top-1 right-0 z-[-1]",onChange:r=>s(r.target.value),id:`${u}-a-2`,type:"radio",name:u,value:"false"})]}),e("span",{className:t==="false"?"bg-green-600 text-white rounded p-1":"",children:"\u062E\u0637\u0623"})]})]})}const v=[{q:"\u0643\u0645 \u0639\u062F\u062F \u0627\u0646\u0648\u0627\u0639 \u0627\u0644\u0628\u064A\u0627\u0646\u0648\u061F",a:["\u0646\u0648\u0639\u0627\u0646","3 \u0627\u0646\u0648\u0627\u0639","4 \u0627\u0646\u0648\u0627\u0639"]},{q:"\u0645\u0646 \u0627\u062E\u062A\u0631\u0639 \u0623\u0644\u0629 \u0627\u0644\u0628\u064A\u0627\u0646\u0648\u061F",a:["\u0628\u0627\u0631\u062A\u0648\u0644\u0648\u0645\u064A\u0648 \u0643\u0631\u064A\u0633\u062A\u0648\u0641\u0648\u0631\u064A","\u0623\u0646\u062F\u0631\u064A\u0627 \u0623\u0645\u0627\u062A\u064A","\u0643\u064A\u0631\u0644 \u062F\u0627\u0645\u064A\u0627\u0646"]},{q:"\u0645\u062A\u0649 \u0627\u062E\u062A\u0631\u0639 \u0627\u0644\u0628\u064A\u0627\u0646\u0648\u061F ",a:["1800","1700","1750"]},{q:"\u0639\u0644\u0649 \u0623\u064A \u0645\u0641\u0627\u062A\u064A\u062D \u062A\u0643\u062A\u0628 \u0646\u0648\u062A\u0629 \u0627\u0644\u0628\u064A\u0627\u0646\u0648",a:["\u0635\u0648\u0644\u060C \u0641\u0627","\u0635\u0648\u0644\u060C \u062F\u0648 \u062A\u064A\u0646\u0648\u0631","\u0641\u0627\u060C \u062F\u0648 \u062A\u064A\u0646\u0648\u0631"]},{q:"\u0643\u0645 \u0639\u062F\u062F \u0623\u0643\u062A\u0627\u0641\u0627\u062A \u0627\u0644\u0628\u064A\u0627\u0646\u0648",a:["\u0633\u062A\u0629 \u0623\u0643\u062A\u0627\u0641\u0627\u062A","\u0633\u0628\u0639\u0629 \u0623\u0643\u062A\u0627\u0641\u0627\u062A","\u062B\u0645\u0627\u0646\u064A\u0629 \u0623\u0643\u062A\u0627\u0641\u0627\u062A"]},{q:"\u0623\u0648\u062A\u0627\u0631 \u0627\u0644\u0628\u064A\u0627\u0646\u0648 \u0627\u0644\u062A\u064A \u062A\u0643\u0648\u0646 \u0639\u0644\u0649 \u0634\u0643\u0644 \u0645\u062B\u0644\u062B \u0639\u0645\u0648\u062F\u064A \u062A\u0643\u0648\u0646 \u0641\u064A",a:["\u0628\u064A\u0627\u0646\u0648 \u062C\u0631\u0627\u0646\u062F","\u0628\u064A\u0627\u0646\u0648 \u0623\u0644\u0643\u062A\u0631\u0648\u0646\u064A","\u0628\u064A\u0627\u0646\u0648 \u0642\u0627\u0626\u0645"]},{q:"\u062A\u062D\u062A\u0648\u064A \u0645\u0639\u0638\u0645 \u0627\u0644\u0628\u064A\u0627\u0646\u0648 \u0627\u0644\u062D\u062F\u064A\u062B \u0639\u0644\u0649 \u0644\u0648\u062D\u0629 \u0645\u0641\u0627\u062A\u064A\u062D \u0645\u0643\u0648\u0646\u0629 \u0645\u0646 \u0635\u0641 \u0645\u0646",a:["88 \u0645\u0641\u062A\u0627\u062D\u0627\u064B","77 \u0645\u0641\u062A\u0627\u062D\u0627\u064B","66 \u0645\u0641\u062A\u0627\u062D\u0627\u064B"]},{q:"\u062A\u0635\u0646\u0639 \u0627\u0644\u0645\u0641\u0627\u062A\u064A\u062D \u0644\u0644\u0628\u064A\u0627\u0646\u0648\u0647\u0627\u062A \u0627\u0644\u063A\u0627\u0644\u064A\u0629 \u0645\u0646 ",a:["\u0639\u0627\u062C \u0627\u0644\u0641\u064A\u0644","\u062E\u0634\u0628 \u0627\u0644\u0632\u0627\u0646","\u0627\u0644\u0628\u0644\u0627\u0633\u062A\u064A\u0643 \u0627\u0644\u0645\u0642\u0648\u0649"]}],D=["\u0627\u0644\u0633\u0644\u0645 \u0627\u0644\u0645\u0648\u0633\u064A\u0642\u064A: \u0647\u0648 \u0645\u062C\u0645\u0648\u0639\u0629 \u0645\u0646 \u0627\u0644\u0646\u0648\u062A\u0627\u062A \u0627\u0644\u0645\u0648\u0633\u064A\u0642\u064A\u0629 \u0645\u0631\u062A\u0628\u0629 \u062D\u0633\u0628 \u0627\u0644\u062A\u0631\u062F\u062F \u0627\u0644\u0623\u0633\u0627\u0633\u064A \u0623\u0648 \u0637\u0628\u0642\u0629 \u0627\u0644\u0635\u0648\u062A\u060C \u064A\u062A\u0641\u0631\u0639 \u0625\u0644\u0649 \u0633\u0628\u0639 \u0646\u063A\u0645\u0627\u062A ","\u0644\u064A\u0633 \u0645\u0646 \u0627\u0644\u0636\u0631\u0648\u0631\u064A \u0623\u0646 \u064A\u062A\u0645 \u0627\u0644\u0639\u0632\u0641 \u0639\u0644\u0649 \u0627\u0644\u0628\u064A\u0627\u0646\u0648 \u0628\u0623\u0637\u0631\u0627\u0641 \u0627\u0644\u0623\u0635\u0627\u0628\u0639","\u0625\u0635\u0628\u0639 \u0627\u0644\u0625\u0628\u0647\u0627\u0645 \u0628\u062D\u064A\u062B \u064A\u0623\u062E\u0630 \u0627\u0644\u0631\u0642\u0645 1 \u0641\u064A \u0627\u0644\u064A\u062F \u0627\u0644\u064A\u0645\u0646\u0649 \u0648\u0627\u0644\u0631\u0642\u0645 5 \u0641\u064A \u0627\u0644\u064A\u062F \u0627\u0644\u064A\u0633\u0631\u0649","\u064A\u062A\u0643\u0648\u0646 \u0627\u0644\u0645\u062F\u0631\u062C \u0627\u0644\u0645\u0648\u0633\u064A\u0642\u064A \u0645\u0646 \u062E\u0645\u0633\u0629 \u062E\u0637\u0648\u0637 \u0623\u0641\u0642\u064A\u0629 \u0648\u0623\u0631\u0628\u0639\u0629 \u0645\u0633\u0627\u0641\u0627\u062A ","\u062A\u0639\u0632\u0641 \u0627\u0644\u064A\u062F \u0627\u0644\u064A\u0645\u0646\u0649 \u0627\u0644\u0646\u0648\u062A\u0627\u062A \u0627\u0644\u0645\u0648\u0633\u064A\u0642\u064A\u0629 \u0627\u0644\u0645\u0643\u062A\u0648\u0628\u0629 \u0639\u0644\u0649 \u0645\u062F\u0631\u062C \u0635\u0648\u0644 \u0648\u0627\u0644\u064A\u062F \u0627\u0644\u064A\u0633\u0631\u0649 \u0627\u0644\u0646\u0648\u062A\u0627\u062A \u0627\u0644\u0645\u0648\u0633\u064A\u0642\u064A\u0629 \u0627\u0644\u0645\u0643\u062A\u0648\u0628\u0629 \u0639\u0644\u0649 \u0645\u062F\u0631\u062C \u0641\u0627  ","\u062A\u0643\u062A\u0628 \u0646\u063A\u0645\u0629 \u062F\u0648 \u0627\u0644\u0648\u0633\u0637\u0649 \u0623\u0639\u0644\u0649 \u0645\u062F\u0631\u062C \u0635\u0648\u0644 \u0648\u0623\u0633\u0641\u0644 \u0645\u062F\u0631\u062C \u0641\u0627 ","\u0627\u0644\u062E\u0637 \u0627\u0644\u062B\u0627\u0646\u064A \u0641\u064A \u0645\u062F\u0631\u062C \u0635\u0648\u0644 \u064A\u0633\u0645\u0649 \u0645\u064A","\u0645\u0646 \u0634\u0631\u0648\u0637 \u0627\u0644\u062C\u0644\u0633\u0629 \u0627\u0644\u0635\u062D\u064A\u062D\u0629 \u0644\u0622\u0644\u0629 \u0627\u0644\u0628\u064A\u0627\u0646\u0648 \u0627\u0644\u062C\u0644\u0648\u0633 \u0639\u0644\u0649 \u062D\u0627\u0641\u0629 \u0645\u0642\u0639\u062F \u0627\u0644\u0628\u064A\u0627\u0646\u0648 \u0648\u0645\u062D\u0627\u0630\u0627\u0629 \u0627\u0644\u0631\u0623\u0633 \u0648\u0627\u0644\u0643\u062A\u0641"],E=u=>{const a=1200-u,s=Math.floor(a/60),l=a-s*60;return[s,l]};function z({wrongAns:u,time:t}){const a=m.exports.useRef(null),[s,l]=m.exports.useState(Math.floor(Date.now()/1e3)),i=g().props.errors,r=!!u,o=async A=>{A.preventDefault();const n=new FormData(a.current);r||F.Inertia.post("/quiz/check-exam",n,{preserveScroll:!0})},f=Object.keys(i).length>0,d=E(s-t);return m.exports.useEffect(()=>{const A=setInterval(()=>{l(n=>n+1)},1e3);return()=>{clearInterval(A)}},[]),m.exports.useEffect(()=>{d[0]<=0&&d[1]===0&&F.Inertia.get("/"),console.log(d)},[d]),c(b,{children:[c("div",{className:"fixed z-50 rounded-r-full p-4 bg-red-400 text-white -left-2 mt-4 font-bold text-3xl",children:[d[0],":",d[1]]}),c("form",{ref:a,className:"container relative rtl",onSubmit:o,children:[e("h2",{className:"page-title",children:"Quiz 1"}),c("div",{className:"content grid grid-cols-1 lg:grid-cols-2 items-start gap-8",children:[v.map(({q:A,a:n},p)=>e(y,{id:`q-${p}`,question:A,choices:n,correction:u==null?void 0:u[`q-${p}`]},p)),D.map((A,n)=>e($,{id:`q-${n+v.length}`,question:A,correction:u==null?void 0:u[`q-${n+v.length}`]},n)),c("div",{children:[e("p",{className:"question",children:"\u062A\u0643\u0644\u0645 \u0641\u064A \u0646\u0642\u0627\u0637 \u0639\u0646 \u062A\u0637\u0648\u0631 \u0627\u0644\u0647 \u0627\u0644\u0628\u064A\u0627\u0646\u0648 \u061F"}),e("textarea",{className:"bg-slate-50 p-4 text-xl",placeholder:"\u0627\u0643\u062A\u0628 \u0627\u062C\u0627\u0628\u062A\u0643 \u0647\u0646\u0627...",name:"assay-q-1",id:"assay-q-1"})]}),c("div",{children:[e("p",{className:"question",children:"\u0627\u0630\u0643\u0631 \u0627\u0646\u0648\u0627\u0639 \u0627\u0644\u0628\u064A\u0627\u0646\u0648 \u061F"}),e("textarea",{className:"bg-slate-50 p-4 text-xl",placeholder:"\u0627\u0643\u062A\u0628 \u0627\u062C\u0627\u0628\u062A\u0643 \u0647\u0646\u0627...",name:"assay-q-2",id:"assay-q-2"})]})]}),u&&e("div",{className:"rounded shadow p-4 bg-second  my-8 w-fit mx-auto",children:c("h4",{className:"text-xl text-white",children:["\u062F\u0631\u062C\u062A\u0643 : ",20-Object.keys(u).length,"/20 "]})}),f&&e("p",{className:"text-center text-red-600",children:"*\u0628\u0631\u062C\u0627\u0621 \u0627\u062F\u062E\u0627\u0644 \u0627\u0644\u0627\u0633\u0645 \u0648\u0627\u0644\u0627\u062C\u0627\u0628\u0629 \u0639\u0646 \u0643\u0644 \u0627\u0644\u0627\u0633\u0626\u0644\u0629"}),e("button",{className:"block mx-auto my-8 btn",children:"Submit"})]})]})}const y=({question:u,id:t,choices:a,correction:s=void 0})=>c("div",{children:[e("p",{className:`${s?"!border-red-600 border":""} question`,children:u}),e(N,{id:t,choices:a,correction:s})]}),$=({question:u,id:t,correction:a=void 0})=>c("div",{children:[e("p",{className:`${a?"!border-red-600 border":""} question`,children:u}),e(q,{id:t,correction:a})]});export{z as default};
