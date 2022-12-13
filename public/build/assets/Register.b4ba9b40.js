import{b as g,r as p,u as b,j as n,a as e,a2 as S,ag as y,d as m}from"./app.d8cc611c.js";import{M as v}from"./MessagePage.a65316c2.js";import{F as i}from"./index.1662872e.js";import{I as o}from"./index.79df4a78.js";import{D as f}from"./index.994818d6.js";import{R as u}from"./index.dabb5411.js";import{S as l}from"./index.a2a90c4f.js";import{B as d}from"./button.bc87f11d.js";import"./motion.2aca1651.js";import"./index.a55363c5.js";import"./index.478b0428.js";import"./type.361211a9.js";import"./index.5c54e60a.js";import"./KeyCode.bb3c3291.js";import"./index.92e459fd.js";import"./pickAttrs.2f1a5108.js";import"./Overflow.0a8ee6c1.js";import"./index.08b37d05.js";import"./CheckOutlined.fc8fa269.js";const A=["Afghanistan","Albania","Algeria","Andorra","Angola","Antigua and Barbuda","Argentina","Armenia","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan","Bolivia","Bosnia and Herzegovina","Botswana","Brazil","Brunei","Bulgaria","Burkina Faso","Burundi","Cabo Verde","Cambodia","Cameroon","Canada","Central African Republic (CAR)","Chad","Chile","China","Colombia","Comoros","Congo, Democratic Republic of the","Congo, Republic of the","Costa Rica","Cote d'Ivoire","Croatia","Cuba","Cyprus","Czechia","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Eswatini","Ethiopia","Fiji","Finland","France","Gabon","Gambia","Georgia","Germany","Ghana","Greece","Grenada","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Honduras","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","New Zealand","Nicaragua","Niger","Nigeria","North Korea","North Macedonia","Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Qatar","Romania","Russia","Rwanda","Saint Kitts and Nevis","Saint Lucia","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","Sudan","Suriname","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor-Leste","Togo","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Tuvalu","Uganda","Ukraine","United Arab Emirates (UAE)","United Kingdom (UK)","United States of America (USA)","Uruguay","Uzbekistan","Vanuatu","Vatican City (Holy See)","Venezuela","Vietnam","Yemen","Zambia","Zimbabwe"];function V(){const{errors:a}=g().props,[s,c]=p.exports.useState(!1),h=async t=>{m.Inertia.post("/register",{...t,birthday:t!=null&&t.birthday?t.birthday.format("YYYY-MM-DD"):null},{onSuccess:()=>{c(!0)}})},r=b();return s?n(v,{imgSrc:"/images/reg_success.png",children:[n("h2",{className:"text-2xl text-center md:text-3xl lg:text-4xl xl:text-5xl mb-4 lg:mb-8  font-bold uppercase",children:[r("\u062A\u0645 \u0627\u0644\u062A\u0633\u062C\u064A\u0644 ","Registeration Done ")," ",n("span",{className:"highlight-header",children:[" ",r("\u0628\u0646\u062C\u0627\u062D","Successfully ")]})]}),e(S,{size:"6x",className:"text-green-400 mt-8",icon:y}),e("span",{className:"block my-8 underline text-xl",children:r("\u0628\u0631\u062C\u0627\u0621 \u0627\u0644\u0630\u0647\u0627\u0628 \u0627\u0644\u0649 \u0628\u0631\u064A\u062F\u0643 \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0644\u062A\u0623\u0643\u064A\u062F \u062D\u0633\u0627\u0628\u0643","Go to your email and verfiy your account")})]}):e("div",{className:"container",children:n("div",{className:"rounded bg-slate-100 shadow-sm p-4 max-w-[600px] mx-auto my-16",children:[e("h2",{className:"text-center text-xl mb-8",children:"Register"}),n(i,{labelCol:{span:6},wrapperCol:{span:18},labelWrap:!0,name:"normal_login",className:"login-form",initialValues:{remember:!0},onFinish:h,labelAlign:"left",children:[e(i.Item,{name:"email",validateStatus:(a==null?void 0:a.email)&&"error",help:a==null?void 0:a.email,label:"Email",children:e(o,{})}),e(i.Item,{name:"password",validateStatus:(a==null?void 0:a.password)&&"error",help:a==null?void 0:a.password,label:"Password",children:e(o,{type:"password"})}),e(i.Item,{name:"firstName",validateStatus:(a==null?void 0:a.firstName)&&"error",help:a==null?void 0:a.firstName,label:"First Name",children:e(o,{})}),e(i.Item,{name:"secondName",validateStatus:(a==null?void 0:a.secondName)&&"error",help:a==null?void 0:a.secondName,label:"Second Name",children:e(o,{})}),e(i.Item,{name:"phone",validateStatus:(a==null?void 0:a.phone)&&"error",help:a==null?void 0:a.phone,label:"Phone",children:e(o,{type:"tel"})}),e(i.Item,{name:"birthday",validateStatus:(a==null?void 0:a.birthday)&&"error",help:a==null?void 0:a.birthday,label:"Birthday",children:e(f,{})}),e(i.Item,{name:"gender",validateStatus:(a==null?void 0:a.gender)&&"error",help:a==null?void 0:a.gender,label:"Gender",children:n(u.Group,{children:[e(u,{value:"male",children:"Male"}),e(u,{value:"female",children:"Female"})]})}),e(i.Item,{name:"country",validateStatus:(a==null?void 0:a.country)&&"error",help:a==null?void 0:a.country,label:"Country",initialValue:"Egypt",children:e(l,{placeholder:"Select Country",children:A.map(t=>e(l.Option,{value:t,children:t}))})}),e(i.Item,{name:"firstLanguage",validateStatus:(a==null?void 0:a.firstLanguage)&&"error",help:a==null?void 0:a.firstLanguage,label:"First Language",initialValue:"arabic",children:n(l,{children:[e(l.Option,{value:"arabic",children:"Arabic"}),e(l.Option,{value:"english",children:"English"})]})}),e(i.Item,{name:"secondLanguage",validateStatus:(a==null?void 0:a.secondLanguage)&&"error",help:a==null?void 0:a.secondLanguage,label:"Second Language",initialValue:"english",children:n(l,{children:[e(l.Option,{value:"arabic",children:"Arabic"}),e(l.Option,{value:"english",children:"English"})]})}),e(i.Item,{name:"level",validateStatus:(a==null?void 0:a.level)&&"error",help:a==null?void 0:a.level,label:"Do you have musical background ?",children:n(u.Group,{className:"mx-4",children:[e(u,{value:"beginner",children:"Beginner"}),e(u,{value:"moderate",children:"Moderate"}),e(u,{value:"advanced",children:"Advanced"})]})}),n(i.Item,{className:"text-center mb-0",wrapperCol:{offset:2},children:[e(d,{type:"primary",htmlType:"submit",className:"login-form-button mx-auto",children:"Register"}),e(d,{type:"link",onClick:()=>m.Inertia.get("/login"),className:"login-form-button mx-auto",children:"Already have account ? Login"})]})]})]})})}export{V as default};
