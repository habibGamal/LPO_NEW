import{r as a}from"./app.baf894a1.js";import{c as s}from"./index.5520348b.js";import{t as f}from"./type.a797c4d3.js";var u=s()?a.exports.useLayoutEffect:a.exports.useEffect,v=function(t,e){var o=a.exports.useRef(!0);u(function(){if(!o.current)return t()},e),u(function(){return o.current=!1,function(){o.current=!0}},[])},n=function(){return{height:0,opacity:0}},c=function(t){var e=t.scrollHeight;return{height:e,opacity:1}},p=function(t){return{height:t?t.offsetHeight:0}},i=function(t,e){return(e==null?void 0:e.deadline)===!0||e.propertyName==="height"},g={motionName:"ant-motion-collapse",onAppearStart:n,onEnterStart:n,onAppearActive:c,onEnterActive:c,onLeaveStart:p,onLeaveActive:n,onAppearEnd:i,onEnterEnd:i,onLeaveEnd:i,motionDeadline:500};f("bottomLeft","bottomRight","topLeft","topRight");var m=function(t){return t!==void 0&&(t==="topLeft"||t==="topRight")?"slide-down":"slide-up"},E=function(t,e,o){return o!==void 0?o:"".concat(t,"-").concat(e)};const L=g;export{m as a,v as b,L as c,E as g,u};
