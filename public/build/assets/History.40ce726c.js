import{u,a as o}from"./app.15762410.js";import p from"./Layout.ce99a64b.js";import{E as n}from"./index.45483b13.js";import{T as s}from"./Table.33a1d6bc.js";import{T as d}from"./index.90d51f9d.js";import"./Up.1face89a.js";import"./motion.a72156fc.js";import"./index.9bb0e73d.js";import"./index.dac9b996.js";import"./button.1032f528.js";import"./pickAttrs.09ca4fbc.js";import"./index.92e459fd.js";import"./getScrollBarSize.001053fa.js";import"./index.7922e57e.js";import"./KeyCode.bb3c3291.js";import"./Overflow.cc4972fd.js";import"./index.32da8735.js";import"./CheckOutlined.98f0d653.js";import"./useForceUpdate.ed2da0cf.js";import"./debounce.0ba686cd.js";import"./index.5023cb8d.js";import"./Dropdown.fc534db7.js";const l=[{title:"Name",dataIndex:"name"},{title:"State",dataIndex:"state",render:t=>o(d,{children:t})},{title:"Date",dataIndex:"date"}];function w({meetingsDB:t}){const r=u();return o(p,{title:r("\u0633\u062C\u0644 \u0627\u0644\u062C\u0644\u0633\u0627\u062A","Meetings history"),children:t.length===0?o(n,{description:r("\u0644\u0627 \u062A\u0648\u062C\u062F \u062C\u0644\u0633\u0627\u062A","No Meetings yet")}):o(s,{pagination:!1,columns:l,dataSource:t.map(({id:i,name:a,state:e,date:m})=>({key:i,name:a,state:e,date:m}))})})}export{w as default};
