import{a}from"./app.d2ec76e5.js";import{T as i}from"./Table.afb64bd7.js";import"./index.da5bd18c.js";import"./index.cdbafb10.js";import"./motion.2551a78c.js";import"./type.da1d7ec8.js";import"./button.cc35516d.js";import"./pickAttrs.b7b50237.js";import"./index.92e459fd.js";import"./getScrollBarSize.001053fa.js";import"./index.adede8b3.js";import"./KeyCode.bb3c3291.js";import"./Overflow.8ee7d79a.js";import"./index.4b24fe07.js";import"./styleChecker.c74f3c90.js";import"./index.a4ab05bc.js";import"./CheckOutlined.d433f931.js";import"./useForceUpdate.e389aa0a.js";import"./debounce.d0e43aa8.js";import"./index.6c92ee2b.js";import"./Dropdown.718c2b15.js";const o=[{title:"Name",dataIndex:"name",key:"name"},{title:"Score From(15)",dataIndex:"score",key:"score"},{title:"Exam Type",dataIndex:"examType",key:"examType"},{title:"Date",dataIndex:"at",key:"at"}];function j({scores:e}){const m=e.map(t=>({key:t.id.toString(),name:t.name,score:t.score,examType:t.exam_type,at:t.created_at.split("T")[0]}));return a("div",{className:"container",children:a(i,{className:"mt-4",columns:o,dataSource:m,pagination:!1})})}export{j as default};
