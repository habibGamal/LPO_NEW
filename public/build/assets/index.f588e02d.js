import{g as w,e as M,h as o,l as x}from"./index.5520348b.js";import{r as D,a as u}from"./app.baf894a1.js";var S=globalThis&&globalThis.__rest||function(n,a){var t={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&a.indexOf(e)<0&&(t[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,e=Object.getOwnPropertySymbols(n);i<e.length;i++)a.indexOf(e[i])<0&&Object.prototype.propertyIsEnumerable.call(n,e[i])&&(t[e[i]]=n[e[i]]);return t},$=function(a){var t,e=D.exports.useContext(w),i=e.getPrefixCls,y=e.direction,p=a.prefixCls,d=a.type,f=d===void 0?"horizontal":d,h=a.orientation,l=h===void 0?"center":h,c=a.orientationMargin,C=a.className,s=a.children,_=a.dashed,b=a.plain,O=S(a,["prefixCls","type","orientation","orientationMargin","className","children","dashed","plain"]),r=i("divider",p),P=l.length>0?"-".concat(l):l,g=!!s,v=l==="left"&&c!=null,m=l==="right"&&c!=null,N=M(r,"".concat(r,"-").concat(f),(t={},o(t,"".concat(r,"-with-text"),g),o(t,"".concat(r,"-with-text").concat(P),g),o(t,"".concat(r,"-dashed"),!!_),o(t,"".concat(r,"-plain"),!!b),o(t,"".concat(r,"-rtl"),y==="rtl"),o(t,"".concat(r,"-no-default-orientation-margin-left"),v),o(t,"".concat(r,"-no-default-orientation-margin-right"),m),t),C),j=x(x({},v&&{marginLeft:c}),m&&{marginRight:c});return u("div",{className:N,...O,role:"separator",children:s&&f!=="vertical"&&u("span",{className:"".concat(r,"-inner-text"),style:j,children:s})})};const L=$;export{L as D};
