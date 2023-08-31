import{r as i,M,a as v,h as se,t as z,H as Ye,i as R,w as Ne,j as qe}from"./app.478912c7.js";import{R as Ce}from"./index.e8033870.js";import{u as Je}from"./motion.be4fae73.js";var Qe=["prefixCls","invalidate","item","renderItem","responsive","responsiveDisabled","registerSize","itemKey","className","style","children","display","order","component"],E=void 0;function Ze(e,d){var c=e.prefixCls,s=e.invalidate,l=e.item,a=e.renderItem,u=e.responsive,x=e.responsiveDisabled,o=e.registerSize,_=e.itemKey,p=e.className,N=e.style,B=e.children,Y=e.display,m=e.order,K=e.component,P=K===void 0?"div":K,U=M(e,Qe),S=u&&!Y;function O(w){o(_,w)}i.exports.useEffect(function(){return function(){O(null)}},[]);var q=a&&l!==E?a(l):B,I;s||(I={opacity:S?0:1,height:S?0:E,overflowY:S?"hidden":E,order:u?m:E,pointerEvents:S?"none":E,position:S?"absolute":E});var k={};S&&(k["aria-hidden"]=!0);var y=v(P,{className:se(!s&&c,p),style:z(z({},I),N),...k,...U,ref:d,children:q});return u&&(y=v(Ce,{onResize:function(J){var F=J.offsetWidth;O(F)},disabled:x,children:y})),y}var A=i.exports.forwardRef(Ze);A.displayName="Item";function et(){var e=Ye({}),d=R(e,2),c=d[1],s=i.exports.useRef([]),l=0,a=0;function u(x){var o=l;l+=1,s.current.length<o+1&&(s.current[o]=x);var _=s.current[o];function p(N){s.current[o]=typeof N=="function"?N(s.current[o]):N,Ne.cancel(a),a=Ne(function(){c({},!0)})}return[_,p]}return u}var tt=["component"],rt=["className"],at=["className"],nt=function(d,c){var s=i.exports.useContext(H);if(!s){var l=d.component,a=l===void 0?"div":l,u=M(d,tt);return v(a,{...u,ref:c})}var x=s.className,o=M(s,rt),_=d.className,p=M(d,at);return v(H.Provider,{value:null,children:v(A,{ref:c,className:se(x,_),...o,...p})})},ge=i.exports.forwardRef(nt);ge.displayName="RawItem";var it=["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"],H=i.exports.createContext(null),Ie="responsive",we="invalidate";function st(e){return"+ ".concat(e.length," ...")}function ot(e,d){var c=e.prefixCls,s=c===void 0?"rc-overflow":c,l=e.data,a=l===void 0?[]:l,u=e.renderItem,x=e.renderRawItem,o=e.itemKey,_=e.itemWidth,p=_===void 0?10:_,N=e.ssr,B=e.style,Y=e.className,m=e.maxCount,K=e.renderRest,P=e.renderRawRest,U=e.suffix,S=e.component,O=S===void 0?"div":S,q=e.itemComponent,I=e.onVisibleChange,k=M(e,it),y=et(),w=N==="full",J=y(null),F=R(J,2),$=F[0],be=F[1],C=$||0,Ee=y(new Map),oe=R(Ee,2),le=oe[0],ze=oe[1],Pe=y(0),de=R(Pe,2),Ue=de[0],We=de[1],De=y(0),ue=R(De,2),j=ue[0],Me=ue[1],Ae=y(0),fe=R(Ae,2),T=fe[0],Ke=fe[1],Oe=i.exports.useState(null),ve=R(Oe,2),Q=ve[0],ce=ve[1],ke=i.exports.useState(null),me=R(ke,2),V=me[0],Fe=me[1],b=i.exports.useMemo(function(){return V===null&&w?Number.MAX_SAFE_INTEGER:V||0},[V,$]),$e=i.exports.useState(!1),Se=R($e,2),je=Se[0],Te=Se[1],Z="".concat(s,"-item"),ye=Math.max(Ue,j),ee=m===Ie,h=a.length&&ee,he=m===we,Ve=h||typeof m=="number"&&a.length>m,g=i.exports.useMemo(function(){var t=a;return h?$===null&&w?t=a:t=a.slice(0,Math.min(a.length,C/p)):typeof m=="number"&&(t=a.slice(0,m)),t},[a,p,$,m,h]),te=i.exports.useMemo(function(){return h?a.slice(b+1):a.slice(g.length)},[a,g,h,b]),L=i.exports.useCallback(function(t,r){var n;return typeof o=="function"?o(t):(n=o&&(t==null?void 0:t[o]))!==null&&n!==void 0?n:r},[o]),Le=i.exports.useCallback(u||function(t){return t},[u]);function G(t,r,n){V===t&&(r===void 0||r===Q)||(Fe(t),n||(Te(t<a.length-1),I==null||I(t)),r!==void 0&&ce(r))}function Ge(t,r){be(r.clientWidth)}function Re(t,r){ze(function(n){var f=new Map(n);return r===null?f.delete(t):f.set(t,r),f})}function He(t,r){Me(r),We(j)}function Xe(t,r){Ke(r)}function re(t){return le.get(L(g[t],t))}Je(function(){if(C&&ye&&g){var t=T,r=g.length,n=r-1;if(!r){G(0,null);return}for(var f=0;f<r;f+=1){var D=re(f);if(w&&(D=D||0),D===void 0){G(f-1,void 0,!0);break}if(t+=D,n===0&&t<=C||f===n-1&&t+re(n)<=C){G(n,null);break}else if(t+ye>C){G(f-1,t-D-T+j);break}}U&&re(0)+T>C&&ce(null)}},[C,le,j,T,L,g]);var xe=je&&!!te.length,_e={};Q!==null&&h&&(_e={position:"absolute",left:Q,top:0});var W={prefixCls:Z,responsive:h,component:q,invalidate:he},Be=x?function(t,r){var n=L(t,r);return v(H.Provider,{value:z(z({},W),{},{order:r,item:t,itemKey:n,registerSize:Re,display:r<=b}),children:x(t,r)},n)}:function(t,r){var n=L(t,r);return i.exports.createElement(A,{...W,order:r,key:n,item:t,renderItem:Le,itemKey:n,registerSize:Re,display:r<=b})},ae,pe={order:xe?b:Number.MAX_SAFE_INTEGER,className:"".concat(Z,"-rest"),registerSize:He,display:xe};if(P)P&&(ae=v(H.Provider,{value:z(z({},W),pe),children:P(te)}));else{var ne=K||st;ae=v(A,{...W,...pe,children:typeof ne=="function"?ne(te):ne})}var ie=qe(O,{className:se(!he&&s,Y),style:B,ref:d,...k,children:[g.map(Be),Ve?ae:null,U&&v(A,{...W,responsive:ee,responsiveDisabled:!h,order:b,className:"".concat(Z,"-suffix"),registerSize:Xe,display:!0,style:_e,children:U})]});return ee&&(ie=v(Ce,{onResize:Ge,disabled:!h,children:ie})),ie}var X=i.exports.forwardRef(ot);X.displayName="Overflow";X.Item=ge;X.RESPONSIVE=Ie;X.INVALIDATE=we;export{X as F};
