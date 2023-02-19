import{M as $}from"./Meeting.018e0e1b.js";import{b as E,r as h,a as t,F as f,j as l,a2 as g,d as b}from"./app.ac8e0b1f.js";import{h as B,D as j}from"./index.a0164f72.js";import{I}from"./ImagesHandler.e7d6fa9d.js";import{F as r}from"./index.21de6913.js";import{I as M}from"./index.3a7bbf09.js";import{S as n}from"./index.eade02e7.js";import{U as R}from"./index.786f10f7.js";import{B as D}from"./button.a985696f.js";import{P as q}from"./index.7cbaa2e7.js";import{m as N}from"./index.b6b42646.js";import{f as H}from"./faCaretRight.94301215.js";import{P as Y}from"./PlusOutlined.60f7fc36.js";import{M as z}from"./MinusCircleOutlined.3b240ac8.js";import"./type.ba458df9.js";import"./index.baa331ca.js";import"./index.37bed72e.js";import"./KeyCode.bb3c3291.js";import"./index.92e459fd.js";import"./pickAttrs.f9dd5738.js";import"./Overflow.a7f23334.js";import"./index.75328b6c.js";import"./CheckOutlined.12e06c39.js";import"./useForceUpdate.8e916ddd.js";import"./DeleteOutlined.54c27872.js";import"./progress.dd486e6d.js";import"./ActionButton.40fbc2c6.js";function A({meeting:e=null}){var y,F,x,k,C,v,w,P;const[d]=r.useForm(),{errors:o}=E().props,[c,m]=h.exports.useState(e?I.getPathsAsUploadFiles(e.assets):[]),[O,S]=h.exports.useState([]);h.exports.useEffect(()=>{e&&(m(I.getPathsAsUploadFiles(e.assets)),S([]))},[e]);const L={beforeUpload:a=>!1,fileList:c,multiple:!0,onChange:({fileList:a})=>{m(a)},onRemove:a=>{S(i=>[...i,a.name])}},T=a=>{b.Inertia.post("/meetings",{...a,date:a!=null&&a.date?a.date.format("YYYY-MM-DD"):null,assets:c.map(i=>i.originFileObj)},{errorBag:"-1",preserveScroll:!0,forceFormData:!0,onSuccess:()=>{N.success("Meeting has been added succesfuly"),d.resetFields(),m([])}})},U=a=>{var p;const i={...a,assets:I.getNewUploadedFiles(c),date:(p=a==null?void 0:a.date)==null?void 0:p.format("YYYY-MM-DD"),removedAssets:O,_method:"put"};console.log(i),b.Inertia.post(`/meetings/${e.id}`,i,{forceFormData:!0,errorBag:`${e.id}`,preserveScroll:!0,onSuccess:()=>{N.success("Meeting updated succesfuly")}})},s=()=>e?o==null?void 0:o[`${e.id}`]:o==null?void 0:o["-1"];return t(f,{children:l("div",{className:"rounded bg-gray-100 shadow-sm p-4",children:[t(g,{icon:H.faCaretRight})," ",e?e.name:"Make a new meeting",l(r,{form:d,name:e?`edit_${e.id}`:"new",className:"max-w-[500px] mx-auto",labelCol:{span:6},wrapperCol:{span:16},initialValues:{remember:!0},onFinish:e?U:T,autoComplete:"off",method:"post",encType:"multipart/form-data",children:[t(r.Item,{label:"Meeting Name",name:"name",initialValue:e==null?void 0:e.name,validateStatus:((y=s())==null?void 0:y.name)&&"error",help:(F=s())==null?void 0:F.name,children:t(M,{})}),t(r.Item,{label:"Meeting Link",name:"meeting_link",initialValue:e==null?void 0:e.link,validateStatus:((x=s())==null?void 0:x.meeting_link)&&"error",help:(k=s())==null?void 0:k.meeting_link,children:t(M,{})}),t(r.Item,{label:"Meeting Date",name:"date",initialValue:e?B(e.date):"",validateStatus:((C=s())==null?void 0:C.date)&&"error",help:(v=s())==null?void 0:v.date,children:t(j,{})}),t(r.Item,{label:"Meeting State",name:"state",initialValue:e==null?void 0:e.state,validateStatus:((w=s())==null?void 0:w.state)&&"error",help:(P=s())==null?void 0:P.state,children:l(n,{placeholder:"Select state",children:[t(n.Option,{value:"not_started",children:"Not Started"}),t(n.Option,{value:"in_meeting",children:"In Meeting"}),t(n.Option,{value:"ended",children:"Ended"}),t(n.Option,{value:"offline",children:"Offline"})]})}),t(r.Item,{label:"Assets",name:"assets[]",valuePropName:"fileList",children:t(f,{children:t(R,{...L,listType:"picture-card",children:l("div",{children:[t(Y,{}),t("div",{style:{marginTop:8},children:"Upload"})]})})})}),t(r.List,{name:"videos",initialValue:e==null?void 0:e.videos,children:(a,{add:i,remove:p},{errors:V})=>l(f,{children:[a.map((u,_)=>l(r.Item,{label:`Video no ${_+1}`,required:!0,children:[t(r.Item,{...u,validateTrigger:["onChange","onBlur"],rules:[{required:!0,whitespace:!0,message:"Please input embed code here"}],noStyle:!0,children:t(M,{placeholder:"Embed code",style:{width:"80%"}})}),t(z,{className:"dynamic-delete-button mx-2",onClick:()=>p(u.name)})]},u.key)),l(r.Item,{wrapperCol:{offset:6,span:16},children:[t(D,{type:"dashed",onClick:()=>i(),icon:t(Y,{}),children:"Add video"}),t(r.ErrorList,{errors:V})]})]})}),t(r.Item,{wrapperCol:{offset:10,span:16},children:t(D,{type:"primary",htmlType:"submit",children:"Save"})})]}),e&&t(q,{title:"Are you sure to delete this meeting?",onConfirm:()=>b.Inertia.delete(`/meetings/${e.id}`),okText:"Yes",cancelText:"No",children:t("span",{className:"ant-btn ant-btn-link ant-btn-dangerous",children:"Delete"})})]})})}function ye({meetingsDB:e}){const d=e.map(o=>new $(o));return l("div",{className:"container my-16 flex flex-col gap-4",children:[t(A,{}),d.map(o=>t(A,{meeting:o},o.id))]})}export{ye as default};