import{b as l,a,j as i,d as s}from"./app.d8cc611c.js";import{F as t}from"./index.1662872e.js";import{I as o}from"./index.79df4a78.js";import{L as n}from"./LockOutlined.9479df7c.js";import{B as m}from"./button.bc87f11d.js";import{U as p}from"./UserOutlined.e4ef1ad8.js";import"./index.a55363c5.js";import"./index.478b0428.js";import"./type.361211a9.js";function b(){const{errors:e}=l().props;return a("div",{className:"container",children:i("div",{className:"rounded bg-ov-white shadow-sm p-4 max-w-[400px] mx-auto my-16",children:[a("h2",{className:"text-center text-xl mb-8",children:"Login"}),i(t,{name:"normal_login",className:"login-form",initialValues:{remember:!0},onFinish:async r=>{s.Inertia.post("/login",r)},children:[a(t.Item,{name:"email",validateStatus:(e==null?void 0:e.email)&&"error",help:e==null?void 0:e.email,rules:[{required:!0,message:"Please input your Email!"}],children:a(o,{prefix:a(p,{className:"site-form-item-icon"}),placeholder:"Email"})}),a(t.Item,{name:"password",validateStatus:(e==null?void 0:e.password)&&"error",help:e==null?void 0:e.password,rules:[{required:!0,message:"Please input your Password!"}],children:a(o,{prefix:a(n,{className:"site-form-item-icon"}),type:"password",placeholder:"Password"})}),i(t.Item,{className:"text-center mb-0",children:[a(m,{type:"primary",htmlType:"submit",className:"login-form-button mx-auto",children:"Login"}),a(m,{type:"link",onClick:()=>s.Inertia.get("/forgot-password"),className:"login-form-button mx-auto",children:"Forget password"})]})]})]})})}export{b as default};
