import{u,a as o}from"./app.5e05fa34.js";import p from"./Layout.64ec5ad3.js";import{E as n}from"./index.462ceeae.js";import{T as s}from"./Table.b07e02f9.js";import{T as d}from"./index.d376abe8.js";import"./Up.1face89a.js";import"./motion.de4b595d.js";import"./index.0f4494a0.js";import"./index.4a7ac1ff.js";import"./type.79a1e662.js";import"./button.b9266e59.js";import"./pickAttrs.19c4f38f.js";import"./index.92e459fd.js";import"./getScrollBarSize.001053fa.js";import"./index.d7aca97e.js";import"./KeyCode.bb3c3291.js";import"./Overflow.bc7df54b.js";import"./index.afe9db13.js";import"./CheckOutlined.d2a99c90.js";import"./useForceUpdate.7ea7a1fe.js";import"./debounce.3940e506.js";import"./index.2be86ea1.js";import"./Dropdown.725538ac.js";const l=[{title:"Name",dataIndex:"name"},{title:"State",dataIndex:"state",render:t=>o(d,{children:t})},{title:"Date",dataIndex:"date"}];function z({meetingsDB:t}){const r=u();return o(p,{title:r("\u0633\u062C\u0644 \u0627\u0644\u062C\u0644\u0633\u0627\u062A","Meetings history"),children:t.length===0?o(n,{description:r("\u0644\u0627 \u062A\u0648\u062C\u062F \u062C\u0644\u0633\u0627\u062A","No Meetings yet")}):o(s,{pagination:!1,columns:l,dataSource:t.map(({id:i,name:m,state:a,date:e})=>({key:i,name:m,state:a,date:e}))})})}export{z as default};
