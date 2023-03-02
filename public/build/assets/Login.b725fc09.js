import{b as l,a,j as i,d as s}from"./app.4a38a951.js";import{F as t}from"./index.ec1675cd.js";import{I as o}from"./index.8640a642.js";import{L as n}from"./LockOutlined.54ae543a.js";import{B as m}from"./button.6858ff87.js";import{U as p}from"./UserOutlined.67f14ed0.js";import"./index.a1ad13d0.js";import"./index.d99f80e9.js";import"./type.3a2a747f.js";function b(){const{errors:e}=l().props;return a("div",{className:"container",children:i("div",{className:"rounded bg-ov-white shadow-sm p-4 max-w-[400px] mx-auto my-16",children:[a("h2",{className:"text-center text-xl mb-8",children:"Login"}),i(t,{name:"normal_login",className:"login-form",initialValues:{remember:!0},onFinish:async r=>{s.Inertia.post("/login",r)},children:[a(t.Item,{name:"email",validateStatus:(e==null?void 0:e.email)&&"error",help:e==null?void 0:e.email,rules:[{required:!0,message:"Please input your Email!"}],children:a(o,{prefix:a(p,{className:"site-form-item-icon"}),placeholder:"Email"})}),a(t.Item,{name:"password",validateStatus:(e==null?void 0:e.password)&&"error",help:e==null?void 0:e.password,rules:[{required:!0,message:"Please input your Password!"}],children:a(o,{prefix:a(n,{className:"site-form-item-icon"}),type:"password",placeholder:"Password"})}),i(t.Item,{className:"text-center mb-0",children:[a(m,{type:"primary",htmlType:"submit",className:"login-form-button mx-auto",children:"Login"}),a(m,{type:"link",onClick:()=>s.Inertia.get("/forgot-password"),className:"login-form-button mx-auto",children:"Forget password"})]})]})]})})}export{b as default};