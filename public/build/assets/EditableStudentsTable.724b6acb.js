import{a as i,j as r,af as s,d as n}from"./app.478912c7.js";import{T as m}from"./Table.4ed364a6.js";import{B as t}from"./button.2ba20290.js";import"./index.e8033870.js";import"./motion.be4fae73.js";import"./type.550a9ab7.js";import"./pickAttrs.56b6f1a5.js";import"./index.92e459fd.js";import"./getScrollBarSize.001053fa.js";import"./index.024baedd.js";import"./KeyCode.bb3c3291.js";import"./Overflow.5d899496.js";import"./index.dcdb430e.js";import"./styleChecker.024732f6.js";import"./index.b5b4a8b3.js";import"./CheckOutlined.98ca12d8.js";import"./useForceUpdate.3b90b5f6.js";import"./RightOutlined.4568a53a.js";import"./debounce.88de08c4.js";import"./index.2df522c3.js";import"./Dropdown.7926c2bd.js";const o=e=>{n.Inertia.post("/update-student-show-meetings",{id:e.id,show_meetings:!e.show_meetings})},a=[{title:"Name",dataIndex:"",render:e=>r("span",{children:[e.firstName," ",e.secondName]})},{title:"Show his meetings",dataIndex:"",render:e=>e.show_meetings?i(t,{onClick:()=>o(e),danger:!0,children:"Hide his meetings"}):i(t,{onClick:()=>o(e),type:"primary",children:"Show his meetings"})},{title:"Show his meetings",dataIndex:"",render:e=>i(t,{children:i(s,{href:`/edit-student-meetings/${e.id}`,children:"Assign meetings"})})}];function C({students:e}){return console.log(e),i("div",{className:"container",children:r("div",{className:"my-8",children:[i("h2",{className:"text-2xl lg:text-4xl my-8 font-sans",children:"Editable Students Table"}),i(m,{pagination:!1,columns:a,dataSource:e})]})})}export{C as default};