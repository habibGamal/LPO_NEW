var h;function f(d){if(typeof document>"u")return 0;if(d||h===void 0){var e=document.createElement("div");e.style.width="100%",e.style.height="200px";var i=document.createElement("div"),t=i.style;t.position="absolute",t.top="0",t.left="0",t.pointerEvents="none",t.visibility="hidden",t.width="200px",t.height="150px",t.overflow="hidden",i.appendChild(e),document.body.appendChild(i);var a=e.offsetWidth;i.style.overflow="scroll";var n=e.offsetWidth;a===n&&(n=i.clientWidth),document.body.removeChild(i),h=a-n}return h}function o(d){var e=d.match(/^(.*)px$/),i=Number(e==null?void 0:e[1]);return Number.isNaN(i)?f():i}function c(d){if(typeof document>"u"||!d||!(d instanceof Element))return{width:0,height:0};var e=getComputedStyle(d,"::-webkit-scrollbar"),i=e.width,t=e.height;return{width:o(i),height:o(t)}}export{c as a,f as g};