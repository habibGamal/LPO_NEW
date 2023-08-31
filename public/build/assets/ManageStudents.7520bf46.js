var Y=Object.defineProperty;var Z=(t,e,n)=>e in t?Y(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var s=(t,e,n)=>(Z(t,typeof e!="symbol"?e+"":e,n),n);import{j as y,h as A,f as N,a as r,r as g,F as _,e as p,C as ee,i as te,_ as K,a3 as ne,A as ae,t as B,d as E}from"./app.478912c7.js";import{c as re,B as k}from"./button.2ba20290.js";import{T as oe}from"./Table.4ed364a6.js";import{R as V,r as U}from"./index.b5b4a8b3.js";import{T as le}from"./index.ca1482f8.js";import"./type.550a9ab7.js";import"./index.e8033870.js";import"./motion.be4fae73.js";import"./pickAttrs.56b6f1a5.js";import"./index.92e459fd.js";import"./getScrollBarSize.001053fa.js";import"./index.024baedd.js";import"./KeyCode.bb3c3291.js";import"./Overflow.5d899496.js";import"./index.dcdb430e.js";import"./styleChecker.024732f6.js";import"./CheckOutlined.98ca12d8.js";import"./useForceUpdate.3b90b5f6.js";import"./RightOutlined.4568a53a.js";import"./debounce.88de08c4.js";import"./index.2df522c3.js";import"./Dropdown.7926c2bd.js";var ce=function(e){var n=e.children;return n};const ie=ce;function z(t){return t!=null}var se=function(e){var n=e.itemPrefixCls,a=e.component,l=e.span,c=e.className,o=e.style,u=e.labelStyle,v=e.contentStyle,f=e.bordered,d=e.label,h=e.content,x=e.colon,b=a;if(f){var i;return y(b,{className:A((i={},N(i,"".concat(n,"-item-label"),z(d)),N(i,"".concat(n,"-item-content"),z(h)),i),c),style:o,colSpan:l,children:[z(d)&&r("span",{style:u,children:d}),z(h)&&r("span",{style:v,children:h})]})}return r(b,{className:A("".concat(n,"-item"),c),style:o,colSpan:l,children:y("div",{className:"".concat(n,"-item-container"),children:[(d||d===0)&&r("span",{className:A("".concat(n,"-item-label"),N({},"".concat(n,"-item-no-colon"),!x)),style:u,children:d}),(h||h===0)&&r("span",{className:A("".concat(n,"-item-content")),style:v,children:h})]})})};const F=se;function H(t,e,n){var a=e.colon,l=e.prefixCls,c=e.bordered,o=n.component,u=n.type,v=n.showLabel,f=n.showContent,d=n.labelStyle,h=n.contentStyle;return t.map(function(x,b){var i=x.props,S=i.label,w=i.children,I=i.prefixCls,L=I===void 0?l:I,$=i.className,m=i.style,D=i.labelStyle,P=i.contentStyle,M=i.span,O=M===void 0?1:M,R=x.key;return typeof o=="string"?r(F,{className:$,style:m,labelStyle:p(p({},d),D),contentStyle:p(p({},h),P),span:O,colon:a,component:o,itemPrefixCls:L,bordered:c,label:v?S:null,content:f?w:null},"".concat(u,"-").concat(R||b)):[r(F,{className:$,style:p(p(p({},d),m),D),span:1,colon:a,component:o[0],itemPrefixCls:L,bordered:c,label:S},"label-".concat(R||b)),r(F,{className:$,style:p(p(p({},h),m),P),span:O*2-1,component:o[1],itemPrefixCls:L,bordered:c,content:w},"content-".concat(R||b))]})}var de=function(e){var n=g.exports.useContext(q),a=e.prefixCls,l=e.vertical,c=e.row,o=e.index,u=e.bordered;return l?y(_,{children:[r("tr",{className:"".concat(a,"-row"),children:H(c,e,p({component:"th",type:"label",showLabel:!0},n))},"label-".concat(o)),r("tr",{className:"".concat(a,"-row"),children:H(c,e,p({component:"td",type:"content",showContent:!0},n))},"content-".concat(o))]}):r("tr",{className:"".concat(a,"-row"),children:H(c,e,p({component:u?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0},n))},o)};const me=de;var q=g.exports.createContext({}),J={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1};function pe(t,e){if(typeof t=="number")return t;if(K(t)==="object")for(var n=0;n<U.length;n++){var a=U[n];if(e[a]&&t[a]!==void 0)return t[a]||J[a]}return 3}function G(t,e,n){var a=t;return(e===void 0||e>n)&&(a=re(t,{span:n})),a}function ue(t,e){var n=ne(t).filter(function(o){return o}),a=[],l=[],c=e;return n.forEach(function(o,u){var v,f=(v=o.props)===null||v===void 0?void 0:v.span,d=f||1;if(u===n.length-1){l.push(G(o,f,c)),a.push(l);return}d<c?(c-=d,l.push(o)):(l.push(G(o,d,c)),a.push(l),c=e,l=[])}),a}function C(t){var e,n=t.prefixCls,a=t.title,l=t.extra,c=t.column,o=c===void 0?J:c,u=t.colon,v=u===void 0?!0:u,f=t.bordered,d=t.layout,h=t.children,x=t.className,b=t.style,i=t.size,S=t.labelStyle,w=t.contentStyle,I=g.exports.useContext(ee),L=I.getPrefixCls,$=I.direction,m=L("descriptions",n),D=g.exports.useState({}),P=te(D,2),M=P[0],O=P[1],R=pe(o,M);g.exports.useEffect(function(){var T=V.subscribe(function(j){K(o)==="object"&&O(j)});return function(){V.unsubscribe(T)}},[]);var W=ue(h,R),X=g.exports.useMemo(function(){return{labelStyle:S,contentStyle:w}},[S,w]);return r(q.Provider,{value:X,children:y("div",{className:A(m,(e={},N(e,"".concat(m,"-").concat(i),i&&i!=="default"),N(e,"".concat(m,"-bordered"),!!f),N(e,"".concat(m,"-rtl"),$==="rtl"),e),x),style:b,children:[(a||l)&&y("div",{className:"".concat(m,"-header"),children:[a&&r("div",{className:"".concat(m,"-title"),children:a}),l&&r("div",{className:"".concat(m,"-extra"),children:l})]}),r("div",{className:"".concat(m,"-view"),children:r("table",{children:r("tbody",{children:W.map(function(T,j){return r(me,{index:j,colon:v,prefixCls:m,vertical:d==="vertical",bordered:f,row:T},j)})})})})]})})}C.Item=ie;var he={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"}}]},name:"copy",theme:"outlined"};const ve=he;var Q=function(e,n){return r(ae,{...B(B({},e),{},{ref:n,icon:ve})})};Q.displayName="CopyOutlined";const ye=g.exports.forwardRef(Q);class fe{constructor(e){s(this,"key");s(this,"id");s(this,"userId");s(this,"email");s(this,"firstName");s(this,"secondName");s(this,"phone");s(this,"birthday");s(this,"gender");s(this,"country");s(this,"firstLanguage");s(this,"secondLanguage");s(this,"level");s(this,"active");s(this,"activationControl");s(this,"score");this.id=this.key=e.id,this.firstName=e.firstName,this.secondName=e.secondName,this.phone=e.phone,this.birthday=e.birthday,this.gender=e.gender,this.country=e.country,this.firstLanguage=e.firstLanguage,this.secondLanguage=e.secondLanguage,this.score=e.score,this.level=e.level,this.userId=e.user.id,this.email=e.user.email,this.active=e.user.active,this.activationControl={active:this.active,activate:this.activate,deactivate:this.deactivate}}activate(){E.Inertia.get(`/activate-user/${this.userId}`,void 0,{preserveScroll:!0})}deactivate(){E.Inertia.get(`/deactivate-user/${this.userId}`,void 0,{preserveScroll:!0})}description(){return`First Language:${this.firstLanguage} , Second Language: ${this.secondLanguage} , Gender: ${this.gender} , Birthday: ${this.birthday}`}}const be=[{title:"Name",dataIndex:"",render:t=>y("span",{children:[t.firstName," ",t.secondName]})},{title:"Email",dataIndex:"email",render:t=>y("div",{className:"flex items-center justify-between",children:[r("span",{children:t}),r(k,{onClick:()=>navigator.clipboard.writeText(t),icon:r(ye,{})})]})},{title:"Phone",dataIndex:"phone"},{title:"Country",dataIndex:"country"},{title:"Level",dataIndex:"level",render:t=>r(le,{color:{beginner:"warning",moderate:"primary",advanced:"success"}[t],children:t})},{title:"Score",dataIndex:"score",render:t=>t!==null?t:"-"},{title:"Activated",dataIndex:"",render:t=>t.active===1?r(k,{onClick:()=>t.deactivate(),danger:!0,children:"Deactive"}):r(k,{type:"primary",onClick:()=>t.activate(),children:"Active"})}];function Ve({studentsDB:t}){const[e,n]=g.exports.useState([]);return console.log(e),r("div",{className:"container",children:y("div",{className:"my-8",children:[r("h2",{className:"text-2xl lg:text-4xl my-8 font-sans",children:"Control Users"}),e.length>0&&y("div",{className:"flex flex-row-reverse gap-4 mb-4",children:[r(k,{onClick:()=>{E.Inertia.post("/deactivate-users",{users:e.filter(a=>a.active===1).map(a=>a.userId)})},danger:!0,children:"Deactive all selected"}),r(k,{type:"primary",onClick:()=>{E.Inertia.post("/activate-users",{users:e.filter(a=>a.active===0).map(a=>a.userId)})},children:"Active all selected"})]}),r(oe,{rowSelection:{type:"checkbox",onChange:(a,l)=>{n(l)},getCheckboxProps:a=>({})},expandable:{expandedRowRender:a=>y(C,{column:2,title:"Student Info",children:[r(C.Item,{label:"First language",className:"font-bold",children:a.firstLanguage}),r(C.Item,{label:"Gender",className:"font-bold",children:a.gender}),r(C.Item,{label:"Second language",className:"font-bold",children:a.secondLanguage}),r(C.Item,{label:"Birthday",className:"font-bold",children:a.birthday})]}),rowExpandable:a=>!0},pagination:!1,columns:be,dataSource:t.map(a=>new fe(a))})]})})}export{Ve as default};
