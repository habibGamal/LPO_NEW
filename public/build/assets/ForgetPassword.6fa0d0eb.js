import{c as m,a as e,j as s,d as i}from"./app.478912c7.js";import{F as a}from"./index.7707db40.js";import{I as o}from"./index.b5b4a8b3.js";import{U as l}from"./UserOutlined.08cf5a26.js";import{B as n}from"./button.2ba20290.js";import"./styleChecker.024732f6.js";import"./type.550a9ab7.js";import"./motion.be4fae73.js";import"./index.e8033870.js";function b(){const{errors:t}=m().props;return e("div",{className:"container",children:s("div",{className:"rounded bg-ov-white shadow-sm p-4 max-w-[400px] mx-auto my-16",children:[e("h2",{className:"text-center text-xl mb-8",children:"Forget Password"}),s(a,{name:"normal_login",className:"login-form",initialValues:{remember:!0},onFinish:async r=>{i.Inertia.post("/forgot-password",r)},children:[e(a.Item,{name:"email",validateStatus:(t==null?void 0:t.email)&&"error",help:t==null?void 0:t.email,rules:[{required:!0,message:"Please input your Email!"}],children:e(o,{prefix:e(l,{className:"site-form-item-icon"}),placeholder:"Email"})}),e(a.Item,{className:"text-center mb-0",children:e(n,{type:"primary",htmlType:"submit",className:"login-form-button mx-auto",children:"Reset Password"})})]})]})})}export{b as default};