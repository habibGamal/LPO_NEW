import{u,a as o}from"./app.4a38a951.js";import p from"./Layout.a15f177b.js";import{E as n}from"./index.90a3a854.js";import{T as s}from"./Table.dbe2c034.js";import{T as d}from"./index.303a85e3.js";import"./Up.1face89a.js";import"./motion.3f31d76b.js";import"./index.a1ad13d0.js";import"./index.d99f80e9.js";import"./type.3a2a747f.js";import"./button.6858ff87.js";import"./pickAttrs.1ff1b376.js";import"./index.92e459fd.js";import"./getScrollBarSize.001053fa.js";import"./index.fa2e7f15.js";import"./KeyCode.bb3c3291.js";import"./Overflow.9507f42e.js";import"./index.8640a642.js";import"./CheckOutlined.51fa0263.js";import"./useForceUpdate.94ef4cd6.js";import"./debounce.3a1374d7.js";import"./index.7081ef64.js";import"./Dropdown.c6fef5c8.js";const l=[{title:"Name",dataIndex:"name"},{title:"State",dataIndex:"state",render:t=>o(d,{children:t})},{title:"Date",dataIndex:"date"}];function z({meetingsDB:t}){const r=u();return o(p,{title:r("\u0633\u062C\u0644 \u0627\u0644\u062C\u0644\u0633\u0627\u062A","Meetings history"),children:t.length===0?o(n,{description:r("\u0644\u0627 \u062A\u0648\u062C\u062F \u062C\u0644\u0633\u0627\u062A","No Meetings yet")}):o(s,{pagination:!1,columns:l,dataSource:t.map(({id:i,name:m,state:a,date:e})=>({key:i,name:m,state:a,date:e}))})})}export{z as default};
