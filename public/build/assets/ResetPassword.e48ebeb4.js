import{b as d,a as s,j as o,d as p}from"./app.f827bd24.js";import{F as a}from"./index.e2edf124.js";import{I as i}from"./index.0314e3f8.js";import{B as c}from"./button.76e5a0fb.js";import{L as m}from"./LockOutlined.7f96bc4d.js";import"./index.953a42eb.js";import"./index.abe775bb.js";import"./type.728015f4.js";function b({token:r}){console.log(r);const{errors:e}=d().props,n=new Proxy(new URLSearchParams(window.location.search),{get:(t,l)=>t.get(l)});return s("div",{className:"container",children:o("div",{className:"rounded bg-ov-white shadow-sm p-4 max-w-[400px] mx-auto my-16",children:[s("h2",{className:"text-center text-xl mb-8",children:"Reset Your Password"}),o(a,{name:"normal_login",className:"login-form",initialValues:{remember:!0},onFinish:async t=>{p.Inertia.post("/reset-password",{email:n.email,token:r,...t})},children:[s(a.Item,{name:"password",validateStatus:(e==null?void 0:e.password)&&"error",help:e==null?void 0:e.password,rules:[{required:!0,message:"Please input your Password!"}],children:s(i,{prefix:s(m,{className:"site-form-item-icon"}),type:"password",placeholder:"Enter New Password"})}),s(a.Item,{name:"password_confirmation",validateStatus:(e==null?void 0:e.password)&&"error",help:e==null?void 0:e.password,rules:[{required:!0,message:"Please input your Password!"}],children:s(i,{prefix:s(m,{className:"site-form-item-icon"}),type:"password",placeholder:"Confirm New Password"})}),s(a.Item,{className:"text-center mb-0",children:s(c,{type:"primary",htmlType:"submit",className:"login-form-button mx-auto",children:"Reset Password"})})]})]})})}export{b as default};