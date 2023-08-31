var p=Object.defineProperty;var g=(t,e,n)=>e in t?p(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var a=(t,e,n)=>(g(t,typeof e!="symbol"?e+"":e,n),n);import{M as f}from"./Meeting.018e0e1b.js";import{u as N,a as u,j as o}from"./app.478912c7.js";import{T as s}from"./index.ca1482f8.js";import{B as h}from"./button.2ba20290.js";import{T as x}from"./Table.4ed364a6.js";import"./type.550a9ab7.js";import"./index.e8033870.js";import"./motion.be4fae73.js";import"./pickAttrs.56b6f1a5.js";import"./index.92e459fd.js";import"./getScrollBarSize.001053fa.js";import"./index.024baedd.js";import"./KeyCode.bb3c3291.js";import"./Overflow.5d899496.js";import"./index.dcdb430e.js";import"./styleChecker.024732f6.js";import"./index.b5b4a8b3.js";import"./CheckOutlined.98ca12d8.js";import"./useForceUpdate.3b90b5f6.js";import"./RightOutlined.4568a53a.js";import"./debounce.88de08c4.js";import"./index.2df522c3.js";import"./Dropdown.7926c2bd.js";class b{constructor(e){a(this,"id");a(this,"firstName");a(this,"secondName");a(this,"meetings");this.id=e.id,this.firstName=e.firstName,this.secondName=e.secondName,this.meetings=e.meetings}get meetingsArray(){return JSON.parse(this.meetings)}}function H({student:t,meetings:e}){const n=new b(t).meetingsArray,d=e.map(i=>{var m;return{studentVideoNumber:(m=n.find(l=>l.meetingId===i.id))==null?void 0:m.videoNumber,meeting:new f(i)}}),r=N(),c=[{title:r("\u0627\u0644\u0627\u0633\u0645","Name"),dataIndex:["meeting","name"]},{title:r("\u0627\u0644\u062D\u0627\u0644\u0629","State"),dataIndex:["meeting","state"],render:i=>i==="offline"?u(s,{children:"Offline"}):u(s,{color:"green",children:"Online"})},{title:r("\u0627\u0644\u062A\u0627\u0631\u064A\u062E","Date"),dataIndex:["meeting","date"]},{title:r("\u0639\u0631\u0636","Show"),dataIndex:"",render:i=>{const m=i.studentVideoNumber!==void 0&&i.studentVideoNumber!==-1?i.meeting.videos[i.studentVideoNumber]:null;return m?u(h,{children:u("a",{href:`/show-meeting?embededLink=${m}`,target:"_blank",children:r("\u0639\u0631\u0636 \u0627\u0644\u062C\u0644\u0633\u0629","Show Meeting")})}):u("span",{children:r("\u0644\u0627 \u064A\u0648\u062C\u062F","Not found")})}}];return u("div",{className:"container",children:o("div",{className:"my-8",children:[o("h2",{className:"text-2xl lg:text-4xl my-8 font-sans",children:[r("\u062C\u0644\u0633\u0627\u062A","Meetings of")," ",t.firstName," ",t.secondName]}),u(x,{pagination:!1,columns:c,dataSource:d})]})})}export{H as default};