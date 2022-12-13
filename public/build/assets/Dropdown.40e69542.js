import{r as o,a as h,o as A,z as X,Q as Sn,G as Dt,h as he,j as Pe,e as le,c as N,A as Rn,B as wn,D as Nn,E as Kn,O as En,_ as On,f as q,w as Me,i as An,F as _n}from"./app.d8cc611c.js";import{A as Dn}from"./index.a55363c5.js";import{s as kt}from"./index.92e459fd.js";import{b as Lt,e as kn,a as Ye}from"./index.478b0428.js";import{F as Ve}from"./Overflow.0a8ee6c1.js";import{K as ne}from"./KeyCode.bb3c3291.js";import{o as Tt}from"./type.361211a9.js";var Ln={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"ellipsis",theme:"outlined"};const Tn=Ln;var $t=function(e,r){return h(Dn,{...A(A({},e),{},{ref:r,icon:Tn})})};$t.displayName="EllipsisOutlined";const Ar=o.exports.forwardRef($t);var $n=["children","locked"],te=o.exports.createContext(null);function Vn(t,e){var r=A({},t);return Object.keys(e).forEach(function(a){var n=e[a];n!==void 0&&(r[a]=n)}),r}function Fe(t){var e=t.children,r=t.locked,a=X(t,$n),n=o.exports.useContext(te),l=Sn(function(){return Vn(n,a)},[n,a],function(i,s){return!r&&(i[0]!==s[0]||!kt(i[1],s[1]))});return h(te.Provider,{value:l,children:e})}function Vt(t,e,r,a){var n=o.exports.useContext(te),l=n.activeKey,i=n.onActive,s=n.onInactive,u={active:l===t};return e||(u.onMouseEnter=function(c){r==null||r({key:t,domEvent:c}),i(t)},u.onMouseLeave=function(c){a==null||a({key:t,domEvent:c}),s(t)}),u}var Fn=["item"];function Ze(t){var e=t.item,r=X(t,Fn);return Object.defineProperty(r,"item",{get:function(){return Dt(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),e}}),r}function Ft(t){var e=t.icon,r=t.props,a=t.children,n;return typeof e=="function"?n=o.exports.createElement(e,A({},r)):n=e,n||a||null}function zt(t){var e=o.exports.useContext(te),r=e.mode,a=e.rtl,n=e.inlineIndent;if(r!=="inline")return null;var l=t;return a?{paddingRight:l*n}:{paddingLeft:l*n}}var zn=[],Ut=o.exports.createContext(null);function Qe(){return o.exports.useContext(Ut)}var Wt=o.exports.createContext(zn);function ze(t){var e=o.exports.useContext(Wt);return o.exports.useMemo(function(){return t!==void 0?[].concat(he(e),[t]):e},[e,t])}var jt=o.exports.createContext(null),Ht=o.exports.createContext(null);function ft(t,e){return t===void 0?null:"".concat(t,"-").concat(e)}function Gt(t){var e=o.exports.useContext(Ht);return ft(e,t)}var pt=o.exports.createContext({}),Un=["title","attribute","elementRef"],Wn=["style","className","eventKey","warnKey","disabled","itemIcon","children","role","onMouseEnter","onMouseLeave","onClick","onKeyDown","onFocus"],jn=["active"],Hn=function(t){Rn(r,t);var e=wn(r);function r(){return Nn(this,r),e.apply(this,arguments)}return Kn(r,[{key:"render",value:function(){var n=this.props,l=n.title,i=n.attribute,s=n.elementRef,u=X(n,Un),c=Tt(u,["eventKey"]);return Dt(!i,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),h(Ve.Item,{...i,title:typeof l=="string"?l:void 0,...c,ref:s})}}]),r}(o.exports.Component),Gn=function(e){var r,a=e.style,n=e.className,l=e.eventKey;e.warnKey;var i=e.disabled,s=e.itemIcon,u=e.children,c=e.role,p=e.onMouseEnter,g=e.onMouseLeave,d=e.onClick,C=e.onKeyDown,v=e.onFocus,y=X(e,Wn),M=Gt(l),P=o.exports.useContext(te),O=P.prefixCls,b=P.onItemClick,m=P.disabled,x=P.overflowDisabled,f=P.itemIcon,F=P.selectedKeys,w=P.onActive,z=o.exports.useContext(pt),$=z._internalRenderMenuItem,_="".concat(O,"-item"),L=o.exports.useRef(),J=o.exports.useRef(),U=m||i,T=ze(l),D=function(H){return{key:l,keyPath:he(T).reverse(),item:L.current,domEvent:H}},k=s||f,Z=Vt(l,U,p,g),ce=Z.active,re=X(Z,jn),W=F.includes(l),V=zt(T.length),I=function(H){if(!U){var ie=D(H);d==null||d(Ze(ie)),b(ie)}},R=function(H){if(C==null||C(H),H.which===ne.ENTER){var ie=D(H);d==null||d(Ze(ie)),b(ie)}},j=function(H){w(l),v==null||v(H)},de={};e.role==="option"&&(de["aria-selected"]=W);var ve=Pe(Hn,{ref:L,elementRef:J,role:c===null?"none":c||"menuitem",tabIndex:i?null:-1,"data-menu-id":x&&M?null:M,...y,...re,...de,component:"li","aria-disabled":i,style:A(A({},V),a),className:le(_,(r={},N(r,"".concat(_,"-active"),ce),N(r,"".concat(_,"-selected"),W),N(r,"".concat(_,"-disabled"),U),r),n),onClick:I,onKeyDown:R,onFocus:j,children:[u,h(Ft,{props:A(A({},e),{},{isSelected:W}),icon:k})]});return $&&(ve=$(ve,e,{selected:W})),ve};function mt(t){var e=t.eventKey,r=Qe(),a=ze(e);return o.exports.useEffect(function(){if(r)return r.registerPath(e,a),function(){r.unregisterPath(e,a)}},[a]),r?null:h(Gn,{...t})}var qn=["label","children","key","type"];function ht(t,e){return En(t).map(function(r,a){if(o.exports.isValidElement(r)){var n,l,i=r.key,s=(n=(l=r.props)===null||l===void 0?void 0:l.eventKey)!==null&&n!==void 0?n:i,u=s==null;u&&(s="tmp_key-".concat([].concat(he(e),[a]).join("-")));var c={key:s,eventKey:s};return o.exports.cloneElement(r,c)}return r})}function st(t){return(t||[]).map(function(e,r){if(e&&On(e)==="object"){var a=e,n=a.label,l=a.children,i=a.key,s=a.type,u=X(a,qn),c=i!=null?i:"tmp-".concat(r);return l||s==="group"?s==="group"?h(Jt,{...u,title:n,children:st(l)},c):h(Ct,{...u,title:n,children:st(l)},c):s==="divider"?h(Zt,{...u},c):h(mt,{...u,children:n},c)}return null}).filter(function(e){return e})}function Bn(t,e,r){var a=t;return e&&(a=st(e)),ht(a,r)}function Ie(t){var e=o.exports.useRef(t);e.current=t;var r=o.exports.useCallback(function(){for(var a,n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(a=e.current)===null||a===void 0?void 0:a.call.apply(a,[e].concat(l))},[]);return t?r:void 0}var Yn=["className","children"],Xn=function(e,r){var a=e.className,n=e.children,l=X(e,Yn),i=o.exports.useContext(te),s=i.prefixCls,u=i.mode,c=i.rtl;return h("ul",{className:le(s,c&&"".concat(s,"-rtl"),"".concat(s,"-sub"),"".concat(s,"-").concat(u==="inline"?"inline":"vertical"),a),...l,"data-menu-list":!0,ref:r,children:n})},gt=o.exports.forwardRef(Xn);gt.displayName="SubMenuList";var ue={adjustX:1,adjustY:1},Jn={topLeft:{points:["bl","tl"],overflow:ue,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:ue,offset:[0,7]},leftTop:{points:["tr","tl"],overflow:ue,offset:[-4,0]},rightTop:{points:["tl","tr"],overflow:ue,offset:[4,0]}},Zn={topLeft:{points:["bl","tl"],overflow:ue,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:ue,offset:[0,7]},rightTop:{points:["tr","tl"],overflow:ue,offset:[-4,0]},leftTop:{points:["tl","tr"],overflow:ue,offset:[4,0]}};function qt(t,e,r){if(e)return e;if(r)return r[t]||r.other}var Qn={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function er(t){var e=t.prefixCls,r=t.visible,a=t.children,n=t.popup,l=t.popupClassName,i=t.popupOffset,s=t.disabled,u=t.mode,c=t.onVisibleChange,p=o.exports.useContext(te),g=p.getPopupContainer,d=p.rtl,C=p.subMenuOpenDelay,v=p.subMenuCloseDelay,y=p.builtinPlacements,M=p.triggerSubMenuAction,P=p.forceSubMenuRender,O=p.rootClassName,b=p.motion,m=p.defaultMotions,x=o.exports.useState(!1),f=q(x,2),F=f[0],w=f[1],z=d?A(A({},Zn),y):A(A({},Jn),y),$=Qn[u],_=qt(u,b,m),L=A(A({},_),{},{leavedClassName:"".concat(e,"-hidden"),removeOnLeave:!1,motionAppear:!0}),J=o.exports.useRef();return o.exports.useEffect(function(){return J.current=Me(function(){w(r)}),function(){Me.cancel(J.current)}},[r]),h(Lt,{prefixCls:e,popupClassName:le("".concat(e,"-popup"),N({},"".concat(e,"-rtl"),d),l,O),stretch:u==="horizontal"?"minWidth":null,getPopupContainer:g,builtinPlacements:z,popupPlacement:$,popupVisible:F,popup:n,popupAlign:i&&{offset:i},action:s?[]:[M],mouseEnterDelay:C,mouseLeaveDelay:v,onPopupVisibleChange:c,forceRender:P,popupMotion:L,children:a})}function tr(t){var e=t.id,r=t.open,a=t.keyPath,n=t.children,l="inline",i=o.exports.useContext(te),s=i.prefixCls,u=i.forceSubMenuRender,c=i.motion,p=i.defaultMotions,g=i.mode,d=o.exports.useRef(!1);d.current=g===l;var C=o.exports.useState(!d.current),v=q(C,2),y=v[0],M=v[1],P=d.current?r:!1;o.exports.useEffect(function(){d.current&&M(!1)},[g]);var O=A({},qt(l,c,p));a.length>1&&(O.motionAppear=!1);var b=O.onVisibleChanged;return O.onVisibleChanged=function(m){return!d.current&&!m&&M(!0),b==null?void 0:b(m)},y?null:h(Fe,{mode:l,locked:!d.current,children:h(An,{visible:P,...O,forceRender:u,removeOnLeave:!1,leavedClassName:"".concat(s,"-hidden"),children:function(m){var x=m.className,f=m.style;return h(gt,{id:e,className:x,style:f,children:n})}})})}var nr=["style","className","title","eventKey","warnKey","disabled","internalPopupClose","children","itemIcon","expandIcon","popupClassName","popupOffset","onClick","onMouseEnter","onMouseLeave","onTitleClick","onTitleMouseEnter","onTitleMouseLeave"],rr=["active"],ir=function(e){var r,a=e.style,n=e.className,l=e.title,i=e.eventKey;e.warnKey;var s=e.disabled,u=e.internalPopupClose,c=e.children,p=e.itemIcon,g=e.expandIcon,d=e.popupClassName,C=e.popupOffset,v=e.onClick,y=e.onMouseEnter,M=e.onMouseLeave,P=e.onTitleClick,O=e.onTitleMouseEnter,b=e.onTitleMouseLeave,m=X(e,nr),x=Gt(i),f=o.exports.useContext(te),F=f.prefixCls,w=f.mode,z=f.openKeys,$=f.disabled,_=f.overflowDisabled,L=f.activeKey,J=f.selectedKeys,U=f.itemIcon,T=f.expandIcon,D=f.onItemClick,k=f.onOpenChange,Z=f.onActive,ce=o.exports.useContext(pt),re=ce._internalRenderSubMenuItem,W=o.exports.useContext(jt),V=W.isSubPathKey,I=ze(),R="".concat(F,"-submenu"),j=$||s,de=o.exports.useRef(),ve=o.exports.useRef(),fe=p||U,H=g||T,ie=z.includes(i),oe=!_&&ie,Ue=V(J,i),We=Vt(i,j,O,b),Se=We.active,Re=X(We,rr),we=o.exports.useState(!1),je=q(we,2),Ne=je[0],He=je[1],Ge=function(G){j||He(G)},ae=function(G){Ge(!0),y==null||y({key:i,domEvent:G})},tt=function(G){Ge(!1),M==null||M({key:i,domEvent:G})},Ke=o.exports.useMemo(function(){return Se||(w!=="inline"?Ne||V([L],i):!1)},[w,Se,L,Ne,i,V]),qe=zt(I.length),nt=function(G){j||(P==null||P({key:i,domEvent:G}),w==="inline"&&k(i,!ie))},ge=Ie(function(Q){v==null||v(Ze(Q)),D(Q)}),Ee=function(G){w!=="inline"&&k(i,G)},Oe=function(){Z(i)},Ae=x&&"".concat(x,"-popup"),Ce=Pe("div",{role:"menuitem",style:qe,className:"".concat(R,"-title"),tabIndex:j?null:-1,ref:de,title:typeof l=="string"?l:null,"data-menu-id":_&&x?null:x,"aria-expanded":oe,"aria-haspopup":!0,"aria-controls":Ae,"aria-disabled":j,onClick:nt,onFocus:Oe,...Re,children:[l,h(Ft,{icon:w!=="horizontal"?H:null,props:A(A({},e),{},{isOpen:oe,isSubMenu:!0}),children:h("i",{className:"".concat(R,"-arrow")})})]}),B=o.exports.useRef(w);if(w!=="inline"&&I.length>1?B.current="vertical":B.current=w,!_){var _e=B.current;Ce=h(er,{mode:_e,prefixCls:R,visible:!u&&oe&&w!=="inline",popupClassName:d,popupOffset:C,popup:h(Fe,{mode:_e==="horizontal"?"vertical":_e,children:h(gt,{id:Ae,ref:ve,children:c})}),disabled:j,onVisibleChange:Ee,children:Ce})}var De=Pe(Ve.Item,{role:"none",...m,component:"li",style:a,className:le(R,"".concat(R,"-").concat(w),n,(r={},N(r,"".concat(R,"-open"),oe),N(r,"".concat(R,"-active"),Ke),N(r,"".concat(R,"-selected"),Ue),N(r,"".concat(R,"-disabled"),j),r)),onMouseEnter:ae,onMouseLeave:tt,children:[Ce,!_&&h(tr,{id:Ae,open:oe,keyPath:I,children:c})]});return re&&(De=re(De,e,{selected:Ue,active:Ke,open:oe,disabled:j})),h(Fe,{onItemClick:ge,mode:w==="horizontal"?"vertical":w,itemIcon:fe,expandIcon:H,children:De})};function Ct(t){var e=t.eventKey,r=t.children,a=ze(e),n=ht(r,a),l=Qe();o.exports.useEffect(function(){if(l)return l.registerPath(e,a),function(){l.unregisterPath(e,a)}},[a]);var i;return l?i=n:i=h(ir,{...t,children:n}),h(Wt.Provider,{value:a,children:i})}function Kt(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(kn(t)){var r=t.nodeName.toLowerCase(),a=["input","select","textarea","button"].includes(r)||t.isContentEditable||r==="a"&&!!t.getAttribute("href"),n=t.getAttribute("tabindex"),l=Number(n),i=null;return n&&!Number.isNaN(l)?i=l:a&&i===null&&(i=0),a&&t.disabled&&(i=null),i!==null&&(i>=0||e&&i<0)}return!1}function Bt(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r=he(t.querySelectorAll("*")).filter(function(a){return Kt(a,e)});return Kt(t,e)&&r.unshift(t),r}var ut=ne.LEFT,ct=ne.RIGHT,dt=ne.UP,Xe=ne.DOWN,Je=ne.ENTER,Yt=ne.ESC,Te=ne.HOME,$e=ne.END,Et=[dt,Xe,ut,ct];function ar(t,e,r,a){var n,l,i,s,u="prev",c="next",p="children",g="parent";if(t==="inline"&&a===Je)return{inlineTrigger:!0};var d=(n={},N(n,dt,u),N(n,Xe,c),n),C=(l={},N(l,ut,r?c:u),N(l,ct,r?u:c),N(l,Xe,p),N(l,Je,p),l),v=(i={},N(i,dt,u),N(i,Xe,c),N(i,Je,p),N(i,Yt,g),N(i,ut,r?p:g),N(i,ct,r?g:p),i),y={inline:d,horizontal:C,vertical:v,inlineSub:d,horizontalSub:v,verticalSub:v},M=(s=y["".concat(t).concat(e?"":"Sub")])===null||s===void 0?void 0:s[a];switch(M){case u:return{offset:-1,sibling:!0};case c:return{offset:1,sibling:!0};case g:return{offset:-1,sibling:!1};case p:return{offset:1,sibling:!1};default:return null}}function or(t){for(var e=t;e;){if(e.getAttribute("data-menu-list"))return e;e=e.parentElement}return null}function lr(t,e){for(var r=t||document.activeElement;r;){if(e.has(r))return r;r=r.parentElement}return null}function Xt(t,e){var r=Bt(t,!0);return r.filter(function(a){return e.has(a)})}function Ot(t,e,r){var a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1;if(!t)return null;var n=Xt(t,e),l=n.length,i=n.findIndex(function(s){return r===s});return a<0?i===-1?i=l-1:i-=1:a>0&&(i+=1),i=(i+l)%l,n[i]}function sr(t,e,r,a,n,l,i,s,u,c){var p=o.exports.useRef(),g=o.exports.useRef();g.current=e;var d=function(){Me.cancel(p.current)};return o.exports.useEffect(function(){return function(){d()}},[]),function(C){var v=C.which;if([].concat(Et,[Je,Yt,Te,$e]).includes(v)){var y,M,P,O=function(){y=new Set,M=new Map,P=new Map;var T=l();return T.forEach(function(D){var k=document.querySelector("[data-menu-id='".concat(ft(a,D),"']"));k&&(y.add(k),P.set(k,D),M.set(D,k))}),y};O();var b=M.get(e),m=lr(b,y),x=P.get(m),f=ar(t,i(x,!0).length===1,r,v);if(!f&&v!==Te&&v!==$e)return;(Et.includes(v)||[Te,$e].includes(v))&&C.preventDefault();var F=function(T){if(T){var D=T,k=T.querySelector("a");k!=null&&k.getAttribute("href")&&(D=k);var Z=P.get(T);s(Z),d(),p.current=Me(function(){g.current===Z&&D.focus()})}};if([Te,$e].includes(v)||f.sibling||!m){var w;!m||t==="inline"?w=n.current:w=or(m);var z,$=Xt(w,y);v===Te?z=$[0]:v===$e?z=$[$.length-1]:z=Ot(w,y,m,f.offset),F(z)}else if(f.inlineTrigger)u(x);else if(f.offset>0)u(x,!0),d(),p.current=Me(function(){O();var U=m.getAttribute("aria-controls"),T=document.getElementById(U),D=Ot(T,y);F(D)},5);else if(f.offset<0){var _=i(x,!0),L=_[_.length-2],J=M.get(L);u(L,!1),F(J)}}c==null||c(C)}}var ur=Math.random().toFixed(5).toString().slice(2),At=0;function cr(t){var e=Ye(t,{value:t}),r=q(e,2),a=r[0],n=r[1];return o.exports.useEffect(function(){At+=1;var l="".concat(ur,"-").concat(At);n("rc-menu-uuid-".concat(l))},[]),a}function dr(t){Promise.resolve().then(t)}var bt="__RC_UTIL_PATH_SPLIT__",_t=function(e){return e.join(bt)},vr=function(e){return e.split(bt)},vt="rc-menu-more";function fr(){var t=o.exports.useState({}),e=q(t,2),r=e[1],a=o.exports.useRef(new Map),n=o.exports.useRef(new Map),l=o.exports.useState([]),i=q(l,2),s=i[0],u=i[1],c=o.exports.useRef(0),p=o.exports.useRef(!1),g=function(){p.current||r({})},d=o.exports.useCallback(function(b,m){var x=_t(m);n.current.set(x,b),a.current.set(b,x),c.current+=1;var f=c.current;dr(function(){f===c.current&&g()})},[]),C=o.exports.useCallback(function(b,m){var x=_t(m);n.current.delete(x),a.current.delete(b)},[]),v=o.exports.useCallback(function(b){u(b)},[]),y=o.exports.useCallback(function(b,m){var x=a.current.get(b)||"",f=vr(x);return m&&s.includes(f[0])&&f.unshift(vt),f},[s]),M=o.exports.useCallback(function(b,m){return b.some(function(x){var f=y(x,!0);return f.includes(m)})},[y]),P=function(){var m=he(a.current.keys());return s.length&&m.push(vt),m},O=o.exports.useCallback(function(b){var m="".concat(a.current.get(b)).concat(bt),x=new Set;return he(n.current.keys()).forEach(function(f){f.startsWith(m)&&x.add(n.current.get(f))}),x},[]);return o.exports.useEffect(function(){return function(){p.current=!0}},[]),{registerPath:d,unregisterPath:C,refreshOverflowKeys:v,isSubPathKey:M,getKeyPath:y,getKeys:P,getSubPathKeys:O}}var pr=["prefixCls","rootClassName","style","className","tabIndex","items","children","direction","id","mode","inlineCollapsed","disabled","disabledOverflow","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","defaultOpenKeys","openKeys","activeKey","defaultActiveFirst","selectable","multiple","defaultSelectedKeys","selectedKeys","onSelect","onDeselect","inlineIndent","motion","defaultMotions","triggerSubMenuAction","builtinPlacements","itemIcon","expandIcon","overflowedIndicator","overflowedIndicatorPopupClassName","getPopupContainer","onClick","onOpenChange","onKeyDown","openAnimation","openTransitionName","_internalRenderMenuItem","_internalRenderSubMenuItem"],be=[],mr=o.exports.forwardRef(function(t,e){var r,a,n=t,l=n.prefixCls,i=l===void 0?"rc-menu":l,s=n.rootClassName,u=n.style,c=n.className,p=n.tabIndex,g=p===void 0?0:p,d=n.items,C=n.children,v=n.direction,y=n.id,M=n.mode,P=M===void 0?"vertical":M,O=n.inlineCollapsed,b=n.disabled,m=n.disabledOverflow,x=n.subMenuOpenDelay,f=x===void 0?.1:x,F=n.subMenuCloseDelay,w=F===void 0?.1:F,z=n.forceSubMenuRender,$=n.defaultOpenKeys,_=n.openKeys,L=n.activeKey,J=n.defaultActiveFirst,U=n.selectable,T=U===void 0?!0:U,D=n.multiple,k=D===void 0?!1:D,Z=n.defaultSelectedKeys,ce=n.selectedKeys,re=n.onSelect,W=n.onDeselect,V=n.inlineIndent,I=V===void 0?24:V,R=n.motion,j=n.defaultMotions,de=n.triggerSubMenuAction,ve=de===void 0?"hover":de,fe=n.builtinPlacements,H=n.itemIcon,ie=n.expandIcon,oe=n.overflowedIndicator,Ue=oe===void 0?"...":oe,We=n.overflowedIndicatorPopupClassName,Se=n.getPopupContainer,Re=n.onClick,we=n.onOpenChange,je=n.onKeyDown;n.openAnimation,n.openTransitionName;var Ne=n._internalRenderMenuItem,He=n._internalRenderSubMenuItem,Ge=X(n,pr),ae=o.exports.useMemo(function(){return Bn(C,d,be)},[C,d]),tt=o.exports.useState(!1),Ke=q(tt,2),qe=Ke[0],nt=Ke[1],ge=o.exports.useRef(),Ee=cr(y),Oe=v==="rtl",Ae=o.exports.useMemo(function(){return(P==="inline"||P==="vertical")&&O?["vertical",O]:[P,!1]},[P,O]),Ce=q(Ae,2),B=Ce[0],_e=Ce[1],De=o.exports.useState(0),Q=q(De,2),G=Q[0],Qt=Q[1],rt=G>=ae.length-1||B!=="horizontal"||m,en=Ye($,{value:_,postState:function(S){return S||be}}),xt=q(en,2),se=xt[0],yt=xt[1],it=function(S){yt(S),we==null||we(S)},tn=o.exports.useState(se),It=q(tn,2),nn=It[0],rn=It[1],at=B==="inline",ot=o.exports.useRef(!1);o.exports.useEffect(function(){at&&rn(se)},[se]),o.exports.useEffect(function(){!ot.current||(at?yt(nn):it(be))},[at]),o.exports.useEffect(function(){return ot.current=!0,function(){ot.current=!1}},[]);var pe=fr(),Mt=pe.registerPath,Pt=pe.unregisterPath,an=pe.refreshOverflowKeys,St=pe.isSubPathKey,on=pe.getKeyPath,ln=pe.getKeys,sn=pe.getSubPathKeys,un=o.exports.useMemo(function(){return{registerPath:Mt,unregisterPath:Pt}},[Mt,Pt]),cn=o.exports.useMemo(function(){return{isSubPathKey:St}},[St]);o.exports.useEffect(function(){an(rt?be:ae.slice(G+1).map(function(K){return K.key}))},[G,rt]);var dn=Ye(L||J&&((r=ae[0])===null||r===void 0?void 0:r.key),{value:L}),Rt=q(dn,2),ke=Rt[0],lt=Rt[1],vn=Ie(function(K){lt(K)}),fn=Ie(function(){lt(void 0)});o.exports.useImperativeHandle(e,function(){return{list:ge.current,focus:function(S){var E,ee=ke!=null?ke:(E=ae.find(function(Pn){return!Pn.props.disabled}))===null||E===void 0?void 0:E.key;if(ee){var Y,me,Le;(Y=ge.current)===null||Y===void 0||(me=Y.querySelector("li[data-menu-id='".concat(ft(Ee,ee),"']")))===null||me===void 0||(Le=me.focus)===null||Le===void 0||Le.call(me,S)}}}});var pn=Ye(Z||[],{value:ce,postState:function(S){return Array.isArray(S)?S:S==null?be:[S]}}),wt=q(pn,2),Be=wt[0],mn=wt[1],hn=function(S){if(T){var E=S.key,ee=Be.includes(E),Y;k?ee?Y=Be.filter(function(Le){return Le!==E}):Y=[].concat(he(Be),[E]):Y=[E],mn(Y);var me=A(A({},S),{},{selectedKeys:Y});ee?W==null||W(me):re==null||re(me)}!k&&se.length&&B!=="inline"&&it(be)},gn=Ie(function(K){Re==null||Re(Ze(K)),hn(K)}),Nt=Ie(function(K,S){var E=se.filter(function(Y){return Y!==K});if(S)E.push(K);else if(B!=="inline"){var ee=sn(K);E=E.filter(function(Y){return!ee.has(Y)})}kt(se,E)||it(E)}),Cn=Ie(Se),bn=function(S,E){var ee=E!=null?E:!se.includes(S);Nt(S,ee)},xn=sr(B,ke,Oe,Ee,ge,ln,on,lt,bn,je);o.exports.useEffect(function(){nt(!0)},[]);var yn=o.exports.useMemo(function(){return{_internalRenderMenuItem:Ne,_internalRenderSubMenuItem:He}},[Ne,He]),In=B!=="horizontal"||m?ae:ae.map(function(K,S){return h(Fe,{overflowDisabled:S>G,children:K},K.key)}),Mn=h(Ve,{id:y,ref:ge,prefixCls:"".concat(i,"-overflow"),component:"ul",itemComponent:mt,className:le(i,"".concat(i,"-root"),"".concat(i,"-").concat(B),c,(a={},N(a,"".concat(i,"-inline-collapsed"),_e),N(a,"".concat(i,"-rtl"),Oe),a),s),dir:v,style:u,role:"menu",tabIndex:g,data:In,renderRawItem:function(S){return S},renderRawRest:function(S){var E=S.length,ee=E?ae.slice(-E):null;return h(Ct,{eventKey:vt,title:Ue,disabled:rt,internalPopupClose:E===0,popupClassName:We,children:ee})},maxCount:B!=="horizontal"||m?Ve.INVALIDATE:Ve.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(S){Qt(S)},onKeyDown:xn,...Ge});return h(pt.Provider,{value:yn,children:h(Ht.Provider,{value:Ee,children:Pe(Fe,{prefixCls:i,rootClassName:s,mode:B,openKeys:se,rtl:Oe,disabled:b,motion:qe?R:null,defaultMotions:qe?j:null,activeKey:ke,onActive:vn,onInactive:fn,selectedKeys:Be,inlineIndent:I,subMenuOpenDelay:f,subMenuCloseDelay:w,forceSubMenuRender:z,builtinPlacements:fe,triggerSubMenuAction:ve,getPopupContainer:Cn,itemIcon:H,expandIcon:ie,onItemClick:gn,onOpenChange:Nt,children:[h(jt.Provider,{value:cn,children:Mn}),h("div",{style:{display:"none"},"aria-hidden":!0,children:h(Ut.Provider,{value:un,children:ae})})]})})})}),hr=["className","title","eventKey","children"],gr=["children"],Cr=function(e){var r=e.className,a=e.title;e.eventKey;var n=e.children,l=X(e,hr),i=o.exports.useContext(te),s=i.prefixCls,u="".concat(s,"-item-group");return Pe("li",{...l,onClick:function(p){return p.stopPropagation()},className:le(u,r),children:[h("div",{className:"".concat(u,"-title"),title:typeof a=="string"?a:void 0,children:a}),h("ul",{className:"".concat(u,"-list"),children:n})]})};function Jt(t){var e=t.children,r=X(t,gr),a=ze(r.eventKey),n=ht(e,a),l=Qe();return l?n:h(Cr,{...Tt(r,["warnKey"]),children:n})}function Zt(t){var e=t.className,r=t.style,a=o.exports.useContext(te),n=a.prefixCls,l=Qe();return l?null:h("li",{className:le("".concat(n,"-item-divider"),e),style:r})}var et=mr;et.Item=mt;et.SubMenu=Ct;et.ItemGroup=Jt;et.Divider=Zt;var xe={adjustX:1,adjustY:1},ye=[0,0],br={topLeft:{points:["bl","tl"],overflow:xe,offset:[0,-4],targetOffset:ye},topCenter:{points:["bc","tc"],overflow:xe,offset:[0,-4],targetOffset:ye},topRight:{points:["br","tr"],overflow:xe,offset:[0,-4],targetOffset:ye},bottomLeft:{points:["tl","bl"],overflow:xe,offset:[0,4],targetOffset:ye},bottomCenter:{points:["tc","bc"],overflow:xe,offset:[0,4],targetOffset:ye},bottomRight:{points:["tr","br"],overflow:xe,offset:[0,4],targetOffset:ye}},xr=ne.ESC,yr=ne.TAB;function Ir(t){var e=t.visible,r=t.setTriggerVisible,a=t.triggerRef,n=t.onVisibleChange,l=t.autoFocus,i=o.exports.useRef(!1),s=function(){if(e&&a.current){var g,d,C,v;(g=a.current)===null||g===void 0||(d=g.triggerRef)===null||d===void 0||(C=d.current)===null||C===void 0||(v=C.focus)===null||v===void 0||v.call(C),r(!1),typeof n=="function"&&n(!1)}},u=function(){var g,d,C,v,y=Bt((g=a.current)===null||g===void 0||(d=g.popupRef)===null||d===void 0||(C=d.current)===null||C===void 0||(v=C.getElement)===null||v===void 0?void 0:v.call(C)),M=y[0];return M!=null&&M.focus?(M.focus(),i.current=!0,!0):!1},c=function(g){switch(g.keyCode){case xr:s();break;case yr:{var d=!1;i.current||(d=u()),d?g.preventDefault():s();break}}};o.exports.useEffect(function(){return e?(window.addEventListener("keydown",c),l&&Me(u,3),function(){window.removeEventListener("keydown",c),i.current=!1}):function(){i.current=!1}},[e])}var Mr=["arrow","prefixCls","transitionName","animation","align","placement","placements","getPopupContainer","showAction","hideAction","overlayClassName","overlayStyle","visible","trigger","autoFocus"];function Pr(t,e){var r=t.arrow,a=r===void 0?!1:r,n=t.prefixCls,l=n===void 0?"rc-dropdown":n,i=t.transitionName,s=t.animation,u=t.align,c=t.placement,p=c===void 0?"bottomLeft":c,g=t.placements,d=g===void 0?br:g,C=t.getPopupContainer,v=t.showAction,y=t.hideAction,M=t.overlayClassName,P=t.overlayStyle,O=t.visible,b=t.trigger,m=b===void 0?["hover"]:b,x=t.autoFocus,f=X(t,Mr),F=o.exports.useState(),w=q(F,2),z=w[0],$=w[1],_="visible"in t?O:z,L=o.exports.useRef(null);o.exports.useImperativeHandle(e,function(){return L.current}),Ir({visible:_,setTriggerVisible:$,triggerRef:L,onVisibleChange:t.onVisibleChange,autoFocus:x});var J=function(){var I=t.overlay,R;return typeof I=="function"?R=I():R=I,R},U=function(I){var R=t.onOverlayClick;$(!1),R&&R(I)},T=function(I){var R=t.onVisibleChange;$(I),typeof R=="function"&&R(I)},D=function(){var I=J();return Pe(_n,{children:[a&&h("div",{className:"".concat(l,"-arrow")}),I]})},k=function(){var I=t.overlay;return typeof I=="function"?D:D()},Z=function(){var I=t.minOverlayWidthMatchTrigger,R=t.alignPoint;return"minOverlayWidthMatchTrigger"in t?I:!R},ce=function(){var I=t.openClassName;return I!==void 0?I:"".concat(l,"-open")},re=function(){var I=t.children,R=I.props?I.props:{},j=le(R.className,ce());return _&&I?o.exports.cloneElement(I,{className:j}):I},W=y;return!W&&m.indexOf("contextMenu")!==-1&&(W=["click"]),h(Lt,{...A(A({builtinPlacements:d},f),{},{prefixCls:l,ref:L,popupClassName:le(M,N({},"".concat(l,"-show-arrow"),a)),popupStyle:P,action:m,showAction:v,hideAction:W||[],popupPlacement:p,popupAlign:u,popupTransitionName:i,popupAnimation:s,popupVisible:_,stretch:Z()?"minWidth":"",popup:k(),onPopupVisibleChange:T,onPopupClick:U,getPopupContainer:C}),children:re()})}const _r=o.exports.forwardRef(Pr);export{_r as D,et as E,mt as M,Ct as S,Ar as a,Zt as b,Jt as c,ze as u};
