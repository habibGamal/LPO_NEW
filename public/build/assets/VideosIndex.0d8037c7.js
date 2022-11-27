import{u as V,a as e,j as t,F as h,a1 as C,a2 as g,a3 as A,a4 as _,a5 as F,d as v}from"./app.15762410.js";import{A as y,b as k}from"./Assets.4426f7a3.js";import{u as E,M as S,D as x}from"./useModal.b1e60d40.js";import M from"./Layout.df8bd062.js";import{E as P}from"./index.45483b13.js";import{T as q}from"./index.2b6db5ac.js";import{B as c}from"./button.1032f528.js";import{F as s}from"./index.eed0ccc2.js";import{I as f}from"./index.32da8735.js";import{m as T}from"./index.9bb0e73d.js";import{M as w}from"./MinusCircleOutlined.5882a607.js";import{P as N}from"./PlusOutlined.19308971.js";import"./ImagesHandler.e7d6fa9d.js";import"./ActionButton.9f5d8cc0.js";import"./index.dac9b996.js";import"./getScrollBarSize.001053fa.js";import"./KeyCode.bb3c3291.js";import"./pickAttrs.09ca4fbc.js";import"./Up.1face89a.js";import"./motion.a72156fc.js";import"./Dropdown.fc534db7.js";import"./index.92e459fd.js";import"./Overflow.cc4972fd.js";const D=({assets:i})=>{const[d]=s.useForm();return t("div",{className:"rounded bg-slate-50 shadow-sm p-4 my-16",children:[t("span",{className:"mb-4 block",children:[e(g,{icon:F})," Add new group video"]}),t(s,{form:d,name:"add_new_assets",className:"max-w-[500px] mx-auto",initialValues:{remember:!0},onFinish:o=>{v.Inertia.post(y.insertVideos(),{...o,name:i.name,assets_type:i.assetsType},{onSuccess:()=>{d.resetFields(),T.success("Data uploaded Successfuly")}})},autoComplete:"off",method:"post",encType:"multipart/form-data",children:[e(s.Item,{name:"group_name",rules:[{required:!0,message:"Please insert the name of the group"}],children:e(f,{placeholder:"Group Name"})}),e(x,{}),e(s.List,{name:"videos",children:(o,{add:p,remove:n},{errors:r})=>t(h,{children:[o.map((m,a)=>t(s.Item,{label:`Video no ${a+1}`,required:!0,children:[e(s.Item,{...m,validateTrigger:["onChange","onBlur"],rules:[{required:!0,whitespace:!0,message:"Please input embed code here"}],noStyle:!0,children:e(f.TextArea,{placeholder:"Embed code",style:{width:"80%"}})}),e(w,{className:"dynamic-delete-button mx-2",onClick:()=>n(m.name)})]},m.key)),t(s.Item,{wrapperCol:{offset:6,span:16},children:[e(c,{type:"dashed",onClick:()=>p(),icon:e(N,{}),children:"Add video"}),e(s.ErrorList,{errors:r})]})]})}),e(s.Item,{children:e(c,{type:"primary",htmlType:"submit",children:"Submit"})})]})]})},L=({group:i,name:d,close:l})=>{const[o]=s.useForm();return t(s,{form:o,name:"edit_videos",className:"max-w-[500px] mx-auto",initialValues:{remember:!0},onFinish:n=>{v.Inertia.post(y.editVideos(),{...n,group_id:i.id,name:d,assets_type:k.videos},{onSuccess:()=>{o.resetFields(),T.success("Data uploaded Successfuly"),l()}})},autoComplete:"off",method:"post",encType:"multipart/form-data",children:[e(s.Item,{name:"group_name",initialValue:i.name,rules:[{required:!0,message:"Please insert the name of the group"}],children:e(f,{placeholder:"Group Name"})}),e(x,{}),e(s.List,{name:"videos",initialValue:i.videos,children:(n,{add:r,remove:m},{errors:a})=>t(h,{children:[n.map((u,b)=>t(s.Item,{label:`Video no ${b+1}`,required:!0,children:[e(s.Item,{...u,validateTrigger:["onChange","onBlur"],rules:[{required:!0,whitespace:!0,message:"Please input embed code here"}],noStyle:!0,children:e(f.TextArea,{placeholder:"Embed code",style:{width:"80%"}})}),e(w,{className:"dynamic-delete-button mx-2",onClick:()=>m(u.name)})]},u.key)),t(s.Item,{wrapperCol:{offset:6,span:16},children:[e(c,{type:"dashed",onClick:()=>r(),icon:e(N,{}),children:"Add video"}),e(s.ErrorList,{errors:a})]})]})}),e(s.Item,{children:e(c,{type:"primary",htmlType:"submit",children:"Submit Changes"})})]})};function ne({assetsDB:i}){V();const[{isOpen:d,data:l},o,p,n]=E(),r=new y(i),m=a=>v.Inertia.post(y.removeVideos(),{group_id:a.id,name:r.name,assets_type:r.assetsType});return e(M,{children:t(h,{children:[e(C,{children:e(D,{assets:r})}),r.videos.length===0?e(P,{description:"No data yet"}):e(q,{defaultActiveKey:"1",tabPosition:"left",className:"bg-slate-50 rounded p-4",items:r.videos.map((a,u)=>({label:t("div",{className:"flex gap-4",children:[e("p",{children:a.name}),t(C,{children:[e(c,{onClick:()=>n({group:a,name:r.name}),size:"small",type:"dashed",icon:e(g,{className:"text-gray-600",icon:A})}),e(c,{onClick:()=>m(a),size:"small",danger:!0,icon:e(g,{icon:_})})]})]}),key:a.id,disabled:u===28,children:e(h,{children:a.videos.map((b,I)=>e("div",{className:"rounded shadow p-4 bg-gray-100 my-4",children:e("div",{className:"meeting-iframe",dangerouslySetInnerHTML:{__html:b}},I)},I))})}))}),e(S,{title:"Edit Videos",open:d,onCancel:p,footer:null,destroyOnClose:!0,children:l&&e(L,{group:l.group,name:l.name,close:p})})]})})}export{ne as default};