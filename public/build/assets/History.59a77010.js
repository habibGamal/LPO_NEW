import{u,a as o}from"./app.5a00a4bf.js";import p from"./Layout.14d57c9f.js";import{E as n}from"./index.57e263aa.js";import{T as s}from"./Table.dc963743.js";import{T as d}from"./index.37243f23.js";import"./Up.1face89a.js";import"./motion.9a4a1483.js";import"./index.86838a9b.js";import"./index.55b2f5ce.js";import"./type.5c593188.js";import"./button.3e18b4d4.js";import"./pickAttrs.b20623ec.js";import"./index.92e459fd.js";import"./getScrollBarSize.001053fa.js";import"./index.5eab179f.js";import"./KeyCode.bb3c3291.js";import"./Overflow.63c451b7.js";import"./index.2d7c294f.js";import"./CheckOutlined.6feae53d.js";import"./useForceUpdate.7df83543.js";import"./debounce.1c38a52c.js";import"./index.9f3a5d1d.js";import"./Dropdown.03dda7e0.js";const l=[{title:"Name",dataIndex:"name"},{title:"State",dataIndex:"state",render:t=>o(d,{children:t})},{title:"Date",dataIndex:"date"}];function z({meetingsDB:t}){const r=u();return o(p,{title:r("\u0633\u062C\u0644 \u0627\u0644\u062C\u0644\u0633\u0627\u062A","Meetings history"),children:t.length===0?o(n,{description:r("\u0644\u0627 \u062A\u0648\u062C\u062F \u062C\u0644\u0633\u0627\u062A","No Meetings yet")}):o(s,{pagination:!1,columns:l,dataSource:t.map(({id:i,name:m,state:a,date:e})=>({key:i,name:m,state:a,date:e}))})})}export{z as default};
