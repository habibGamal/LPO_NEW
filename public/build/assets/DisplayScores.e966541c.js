import{a}from"./app.6986d148.js";import{T as i}from"./Table.3d8917dc.js";import"./index.b0cb96ef.js";import"./index.f41cd87f.js";import"./type.e90c8c55.js";import"./button.1dcbe5d5.js";import"./pickAttrs.2cfe8f19.js";import"./index.92e459fd.js";import"./getScrollBarSize.001053fa.js";import"./index.3c1aa9d5.js";import"./KeyCode.bb3c3291.js";import"./Overflow.6f53f523.js";import"./index.e5d69ab1.js";import"./index.c7a4db5d.js";import"./CheckOutlined.c317aad6.js";import"./useForceUpdate.5d47d245.js";import"./debounce.219e57c5.js";import"./index.f0eb7c82.js";import"./Dropdown.cf804d50.js";const o=[{title:"Name",dataIndex:"name",key:"name"},{title:"Score From(15)",dataIndex:"score",key:"score"},{title:"Exam Type",dataIndex:"examType",key:"examType"},{title:"Date",dataIndex:"at",key:"at"}];function b({scores:e}){const m=e.map(t=>({key:t.id.toString(),name:t.name,score:t.score,examType:t.exam_type,at:t.created_at.split("T")[0]}));return a("div",{className:"container",children:a(i,{className:"mt-4",columns:o,dataSource:m,pagination:!1})})}export{b as default};
