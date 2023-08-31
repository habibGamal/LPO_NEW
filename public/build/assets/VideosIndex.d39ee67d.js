import{u as A,a as e,j as r,F as f,A as C,l as v,h as V,i as I}from"./app.cff4fddd.js";import{f as F,a as N,V as S,b as k}from"./VideosScreen.a977ba2b.js";import{A as b,b as P}from"./Assets.4426f7a3.js";import{u as E,M as q}from"./index.cbf5d462.js";import D from"./Layout.14419bff.js";import{E as M}from"./index.0ce23759.js";import{T as L}from"./index.b633935f.js";import{B as m}from"./button.8a4de68b.js";import{F as t}from"./index.048b385b.js";import{I as l}from"./index.3488dce0.js";import{D as _}from"./index.46054523.js";import{ab as x}from"./index.a04a5bd5.js";import{M as T}from"./MinusCircleOutlined.190ce225.js";import{P as w}from"./PlusOutlined.205e23b9.js";import"./ImagesHandler.e7d6fa9d.js";import"./ActionButton.442a5681.js";import"./motion.c1ad6898.js";import"./type.698d1e1e.js";import"./getScrollBarSize.001053fa.js";import"./KeyCode.bb3c3291.js";import"./pickAttrs.1aa1a4a4.js";import"./styleChecker.9e93ea6f.js";import"./SectionTitle.e8e4bcc1.js";import"./Dropdown.0b78363a.js";import"./index.92e459fd.js";import"./index.55e9e1ce.js";import"./Overflow.f05e86c0.js";const O=({assets:n})=>{const[d]=t.useForm(),{errors:s}=V().props,p=a=>{I.Inertia.post(b.insertVideos(),{...a,name:n.name,assets_type:n.assetsType},{onSuccess:()=>{d.resetFields(),x.success("Data uploaded Successfuly")}})};return console.log(s),r("div",{className:"rounded bg-slate-50 shadow-sm p-4 my-16",children:[r("span",{className:"mb-4 block",children:[e(v,{icon:k})," Add new group video"]}),r(t,{form:d,name:"add_new_assets",className:"max-w-[500px] mx-auto",initialValues:{remember:!0},onFinish:p,autoComplete:"off",method:"post",encType:"multipart/form-data",children:[e(t.Item,{name:"group_name",rules:[{required:!0,message:"Please insert the name of the group"}],children:e(l,{placeholder:"Group Name"})}),e(t.Item,{name:"playlist_id",validateStatus:(s==null?void 0:s.playlist_id)&&"error",help:s==null?void 0:s.playlist_id,children:e(l,{placeholder:"Playlist id"})}),e(_,{}),e(t.List,{name:"videos",children:(a,{add:y,remove:o},{errors:c})=>r(f,{children:[a.map((i,u)=>r(t.Item,{label:`Video no ${u+1}`,required:!0,children:[e(t.Item,{...i,validateTrigger:["onChange","onBlur"],rules:[{required:!0,whitespace:!0,message:"Please input embed code here"}],noStyle:!0,children:e(l.TextArea,{placeholder:"Embed code",style:{width:"80%"}})}),e(T,{className:"dynamic-delete-button mx-2",onClick:()=>o(i.name)})]},i.key)),r(t.Item,{wrapperCol:{offset:6,span:16},children:[e(m,{type:"dashed",onClick:()=>y(),icon:e(w,{}),children:"Add video"}),e(t.ErrorList,{errors:c})]})]})}),e(t.Item,{children:e(m,{type:"primary",htmlType:"submit",children:"Submit"})})]})]})},B=({group:n,name:d,close:s})=>{const[p]=t.useForm(),{errors:a}=V().props;return r(t,{form:p,name:"edit_videos",className:"max-w-[500px] mx-auto",initialValues:{remember:!0},onFinish:o=>{I.Inertia.post(b.editVideos(),{...o,group_id:n.id,name:d,assets_type:P.videos},{onSuccess:()=>{p.resetFields(),x.success("Data uploaded Successfuly"),s()}})},autoComplete:"off",method:"post",encType:"multipart/form-data",children:[e(t.Item,{name:"group_name",initialValue:n.name,rules:[{required:!0,message:"Please insert the name of the group"}],children:e(l,{placeholder:"Group Name"})}),e(t.Item,{name:"playlist_id",validateStatus:(a==null?void 0:a.playlist_id)&&"error",help:a==null?void 0:a.playlist_id,children:e(l,{placeholder:"Playlist id"})}),e(_,{}),e(t.List,{name:"videos",initialValue:n.videos,children:(o,{add:c,remove:i},{errors:u})=>r(f,{children:[o.map((h,g)=>r(t.Item,{label:`Video no ${g+1}`,required:!0,children:[e(t.Item,{...h,validateTrigger:["onChange","onBlur"],rules:[{required:!0,whitespace:!0,message:"Please input embed code here"}],noStyle:!0,children:e(l.TextArea,{placeholder:"Embed code",style:{width:"80%"}})}),e(T,{className:"dynamic-delete-button mx-2",onClick:()=>i(h.name)})]},h.key)),r(t.Item,{wrapperCol:{offset:6,span:16},children:[e(m,{type:"dashed",onClick:()=>c(),icon:e(w,{}),children:"Add video"}),e(t.ErrorList,{errors:u})]})]})}),e(t.Item,{children:e(m,{type:"primary",htmlType:"submit",children:"Submit Changes"})})]})};function ue({assetsDB:n}){A();const[{isOpen:d,data:s},p,a,y]=E(),o=new b(n),c=i=>I.Inertia.post(b.removeVideos(),{group_id:i.id,name:o.name,assets_type:o.assetsType});return e(D,{children:r(f,{children:[e(C,{children:e(O,{assets:o})}),o.videos.length===0?e(M,{description:"No data yet"}):e(L,{defaultActiveKey:"1",tabPosition:"top",className:"bg-slate-50 rounded p-4",items:o.videos.map((i,u)=>({label:r("div",{className:"flex gap-4",children:[e("p",{children:i.name}),r(C,{children:[e(m,{onClick:()=>y({group:i,name:o.name}),size:"small",type:"dashed",icon:e(v,{icon:F})}),e(m,{onClick:()=>c(i),size:"small",danger:!0,icon:e(v,{icon:N})})]})]}),key:i.id,disabled:u===28,children:e(f,{children:e(S,{videos:i.videos.map((h,g)=>({link:h,name:"video "+(g+1)}))})})}))}),e(q,{title:"Edit Videos",open:d,onCancel:a,footer:null,destroyOnClose:!0,children:s&&e(B,{group:s.group,name:s.name,close:a})})]})})}export{ue as default};