import{M as $}from"./Meeting.018e0e1b.js";import{b as E,r as h,a as t,F as f,j as l,a2 as B,a5 as g,d as b}from"./app.15762410.js";import{h as j,D as R}from"./index.f0d29fc9.js";import{I}from"./ImagesHandler.e7d6fa9d.js";import{F as r}from"./index.eed0ccc2.js";import{I as M}from"./index.32da8735.js";import{S as n}from"./index.7922e57e.js";import{U as q}from"./index.0f0d72a5.js";import{B as D}from"./button.1032f528.js";import{P as H}from"./index.7b51901a.js";import{m as N}from"./index.9bb0e73d.js";import{P as Y}from"./PlusOutlined.19308971.js";import{M as z}from"./MinusCircleOutlined.5882a607.js";import"./index.90d51f9d.js";import"./index.dac9b996.js";import"./KeyCode.bb3c3291.js";import"./index.92e459fd.js";import"./pickAttrs.09ca4fbc.js";import"./Overflow.cc4972fd.js";import"./index.45483b13.js";import"./CheckOutlined.98f0d653.js";import"./useForceUpdate.ed2da0cf.js";import"./DeleteOutlined.8ccdc378.js";import"./ActionButton.9f5d8cc0.js";function A({meeting:e=null}){var y,F,x,k,v,w,C,P;const[d]=r.useForm(),{errors:s}=E().props,[c,m]=h.exports.useState(e?I.getPathsAsUploadFiles(e.assets):[]),[O,S]=h.exports.useState([]);h.exports.useEffect(()=>{e&&(m(I.getPathsAsUploadFiles(e.assets)),S([]))},[e]);const L={beforeUpload:a=>!1,fileList:c,multiple:!0,onChange:({fileList:a})=>{m(a)},onRemove:a=>{S(i=>[...i,a.name])}},T=a=>{b.Inertia.post("/meetings",{...a,date:a!=null&&a.date?a.date.format("YYYY-MM-DD"):null,assets:c.map(i=>i.originFileObj)},{errorBag:"-1",preserveScroll:!0,forceFormData:!0,onSuccess:()=>{N.success("Meeting has been added succesfuly"),d.resetFields(),m([])}})},U=a=>{var p;const i={...a,assets:I.getNewUploadedFiles(c),date:(p=a==null?void 0:a.date)==null?void 0:p.format("YYYY-MM-DD"),removedAssets:O,_method:"put"};console.log(i),b.Inertia.post(`/meetings/${e.id}`,i,{forceFormData:!0,errorBag:`${e.id}`,preserveScroll:!0,onSuccess:()=>{N.success("Meeting updated succesfuly")}})},o=()=>e?s==null?void 0:s[`${e.id}`]:s==null?void 0:s["-1"];return t(f,{children:l("div",{className:"rounded bg-gray-100 shadow-sm p-4",children:[t(B,{icon:g})," ",e?e.name:"Make a new meeting",l(r,{form:d,name:e?`edit_${e.id}`:"new",className:"max-w-[500px] mx-auto",labelCol:{span:6},wrapperCol:{span:16},initialValues:{remember:!0},onFinish:e?U:T,autoComplete:"off",method:"post",encType:"multipart/form-data",children:[t(r.Item,{label:"Meeting Name",name:"name",initialValue:e==null?void 0:e.name,validateStatus:((y=o())==null?void 0:y.name)&&"error",help:(F=o())==null?void 0:F.name,children:t(M,{})}),t(r.Item,{label:"Meeting Link",name:"meeting_link",initialValue:e==null?void 0:e.link,validateStatus:((x=o())==null?void 0:x.meeting_link)&&"error",help:(k=o())==null?void 0:k.meeting_link,children:t(M,{})}),t(r.Item,{label:"Meeting Date",name:"date",initialValue:e?j(e.date):"",validateStatus:((v=o())==null?void 0:v.date)&&"error",help:(w=o())==null?void 0:w.date,children:t(R,{})}),t(r.Item,{label:"Meeting State",name:"state",initialValue:e==null?void 0:e.state,validateStatus:((C=o())==null?void 0:C.state)&&"error",help:(P=o())==null?void 0:P.state,children:l(n,{placeholder:"Select state",children:[t(n.Option,{value:"not_started",children:"Not Started"}),t(n.Option,{value:"in_meeting",children:"In Meeting"}),t(n.Option,{value:"ended",children:"Ended"}),t(n.Option,{value:"offline",children:"Offline"})]})}),t(r.Item,{label:"Assets",name:"assets[]",valuePropName:"fileList",children:t(f,{children:t(q,{...L,listType:"picture-card",children:l("div",{children:[t(Y,{}),t("div",{style:{marginTop:8},children:"Upload"})]})})})}),t(r.List,{name:"videos",initialValue:e==null?void 0:e.videos,children:(a,{add:i,remove:p},{errors:V})=>l(f,{children:[a.map((u,_)=>l(r.Item,{label:`Video no ${_+1}`,required:!0,children:[t(r.Item,{...u,validateTrigger:["onChange","onBlur"],rules:[{required:!0,whitespace:!0,message:"Please input embed code here"}],noStyle:!0,children:t(M,{placeholder:"Embed code",style:{width:"80%"}})}),t(z,{className:"dynamic-delete-button mx-2",onClick:()=>p(u.name)})]},u.key)),l(r.Item,{wrapperCol:{offset:6,span:16},children:[t(D,{type:"dashed",onClick:()=>i(),icon:t(Y,{}),children:"Add video"}),t(r.ErrorList,{errors:V})]})]})}),t(r.Item,{wrapperCol:{offset:10,span:16},children:t(D,{type:"primary",htmlType:"submit",children:"Save"})})]}),e&&t(H,{title:"Are you sure to delete this meeting?",onConfirm:()=>b.Inertia.delete(`/meetings/${e.id}`),okText:"Yes",cancelText:"No",children:t("span",{className:"ant-btn ant-btn-link ant-btn-dangerous",children:"Delete"})})]})})}function Ie({meetingsDB:e}){const d=e.map(s=>new $(s));return l("div",{className:"container my-16 flex flex-col gap-4",children:[t(A,{}),d.map(s=>t(A,{meeting:s},s.id))]})}export{Ie as default};