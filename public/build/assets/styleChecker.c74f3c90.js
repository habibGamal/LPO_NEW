import{K as p,l as u,c as x}from"./index.da5bd18c.js";import{o as v}from"./type.da1d7ec8.js";import{r as t,a as m}from"./app.d2ec76e5.js";var h=t.exports.createContext({labelAlign:"right",vertical:!1,itemRef:function(){}}),y=t.exports.createContext(null),b=function(e){var a=v(e,["prefixCls"]);return m(p,{...a})},E=t.exports.createContext({prefixCls:""}),s=t.exports.createContext({}),P=function(e){var a=e.children,d=e.status,i=e.override,l=t.exports.useContext(s),c=t.exports.useMemo(function(){var r=u({},l);return i&&delete r.isFormItemInput,d&&(delete r.status,delete r.hasFeedback,delete r.feedbackIcon),r},[d,i,l]);return m(s.Provider,{value:c,children:a})},f=function(){return x()&&window.document.documentElement},n,S=function(){if(!f())return!1;if(n!==void 0)return n;var e=document.createElement("div");return e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e),n=e.scrollHeight===1,document.body.removeChild(e),n};export{E as F,P as N,h as a,s as b,f as c,y as d,b as e,S as f};