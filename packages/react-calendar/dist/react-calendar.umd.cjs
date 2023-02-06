(function(g,p){typeof exports=="object"&&typeof module<"u"?module.exports=p(require("react")):typeof define=="function"&&define.amd?define(["react"],p):(g=typeof globalThis<"u"?globalThis:g||self,g["react-calendar"]=p(g.require$$0))})(this,function(g){"use strict";var mr=Object.defineProperty;var br=(g,p,S)=>p in g?mr(g,p,{enumerable:!0,configurable:!0,writable:!0,value:S}):g[p]=S;var J=(g,p,S)=>(br(g,typeof p!="symbol"?p+"":p,S),S);var p={},S={get exports(){return p},set exports(v){p=v}},M={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var te;function ke(){if(te)return M;te=1;var v=g,n=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,h=v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,y={key:!0,ref:!0,__self:!0,__source:!0};function D(w,m,j){var E,T={},P=null,N=null;j!==void 0&&(P=""+j),m.key!==void 0&&(P=""+m.key),m.ref!==void 0&&(N=m.ref);for(E in m)o.call(m,E)&&!y.hasOwnProperty(E)&&(T[E]=m[E]);if(w&&w.defaultProps)for(E in m=w.defaultProps,m)T[E]===void 0&&(T[E]=m[E]);return{$$typeof:n,type:w,key:P,ref:N,props:T,_owner:h.current}}return M.Fragment=i,M.jsx=D,M.jsxs=D,M}var I={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ne;function xe(){return ne||(ne=1,process.env.NODE_ENV!=="production"&&function(){var v=g,n=Symbol.for("react.element"),i=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),h=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),D=Symbol.for("react.provider"),w=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),j=Symbol.for("react.suspense"),E=Symbol.for("react.suspense_list"),T=Symbol.for("react.memo"),P=Symbol.for("react.lazy"),N=Symbol.for("react.offscreen"),ie=Symbol.iterator,Me="@@iterator";function Ie(e){if(e===null||typeof e!="object")return null;var r=ie&&e[ie]||e[Me];return typeof r=="function"?r:null}var F=v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function b(e){{for(var r=arguments.length,t=new Array(r>1?r-1:0),a=1;a<r;a++)t[a-1]=arguments[a];We("error",e,t)}}function We(e,r,t){{var a=F.ReactDebugCurrentFrame,f=a.getStackAddendum();f!==""&&(r+="%s",t=t.concat([f]));var l=t.map(function(u){return String(u)});l.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,l)}}var $e=!1,Le=!1,Ne=!1,Ve=!1,Ue=!1,oe;oe=Symbol.for("react.module.reference");function He(e){return!!(typeof e=="string"||typeof e=="function"||e===o||e===y||Ue||e===h||e===j||e===E||Ve||e===N||$e||Le||Ne||typeof e=="object"&&e!==null&&(e.$$typeof===P||e.$$typeof===T||e.$$typeof===D||e.$$typeof===w||e.$$typeof===m||e.$$typeof===oe||e.getModuleId!==void 0))}function Be(e,r,t){var a=e.displayName;if(a)return a;var f=r.displayName||r.name||"";return f!==""?t+"("+f+")":t}function se(e){return e.displayName||"Context"}function O(e){if(e==null)return null;if(typeof e.tag=="number"&&b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case o:return"Fragment";case i:return"Portal";case y:return"Profiler";case h:return"StrictMode";case j:return"Suspense";case E:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case w:var r=e;return se(r)+".Consumer";case D:var t=e;return se(t._context)+".Provider";case m:return Be(e,e.render,"ForwardRef");case T:var a=e.displayName||null;return a!==null?a:O(e.type)||"Memo";case P:{var f=e,l=f._payload,u=f._init;try{return O(u(l))}catch{return null}}}return null}var k=Object.assign,W=0,ue,fe,le,ce,de,ve,he;function ge(){}ge.__reactDisabledLog=!0;function Ge(){{if(W===0){ue=console.log,fe=console.info,le=console.warn,ce=console.error,de=console.group,ve=console.groupCollapsed,he=console.groupEnd;var e={configurable:!0,enumerable:!0,value:ge,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}W++}}function Je(){{if(W--,W===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:k({},e,{value:ue}),info:k({},e,{value:fe}),warn:k({},e,{value:le}),error:k({},e,{value:ce}),group:k({},e,{value:de}),groupCollapsed:k({},e,{value:ve}),groupEnd:k({},e,{value:he})})}W<0&&b("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var q=F.ReactCurrentDispatcher,z;function V(e,r,t){{if(z===void 0)try{throw Error()}catch(f){var a=f.stack.trim().match(/\n( *(at )?)/);z=a&&a[1]||""}return`
`+z+e}}var K=!1,U;{var qe=typeof WeakMap=="function"?WeakMap:Map;U=new qe}function pe(e,r){if(!e||K)return"";{var t=U.get(e);if(t!==void 0)return t}var a;K=!0;var f=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var l;l=q.current,q.current=null,Ge();try{if(r){var u=function(){throw Error()};if(Object.defineProperty(u.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(u,[])}catch(C){a=C}Reflect.construct(e,[],u)}else{try{u.call()}catch(C){a=C}e.call(u.prototype)}}else{try{throw Error()}catch(C){a=C}e()}}catch(C){if(C&&a&&typeof C.stack=="string"){for(var s=C.stack.split(`
`),R=a.stack.split(`
`),c=s.length-1,d=R.length-1;c>=1&&d>=0&&s[c]!==R[d];)d--;for(;c>=1&&d>=0;c--,d--)if(s[c]!==R[d]){if(c!==1||d!==1)do if(c--,d--,d<0||s[c]!==R[d]){var _=`
`+s[c].replace(" at new "," at ");return e.displayName&&_.includes("<anonymous>")&&(_=_.replace("<anonymous>",e.displayName)),typeof e=="function"&&U.set(e,_),_}while(c>=1&&d>=0);break}}}finally{K=!1,q.current=l,Je(),Error.prepareStackTrace=f}var A=e?e.displayName||e.name:"",Pe=A?V(A):"";return typeof e=="function"&&U.set(e,Pe),Pe}function ze(e,r,t){return pe(e,!1)}function Ke(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function H(e,r,t){if(e==null)return"";if(typeof e=="function")return pe(e,Ke(e));if(typeof e=="string")return V(e);switch(e){case j:return V("Suspense");case E:return V("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case m:return ze(e.render);case T:return H(e.type,r,t);case P:{var a=e,f=a._payload,l=a._init;try{return H(l(f),r,t)}catch{}}}return""}var B=Object.prototype.hasOwnProperty,me={},be=F.ReactDebugCurrentFrame;function G(e){if(e){var r=e._owner,t=H(e.type,e._source,r?r.type:null);be.setExtraStackFrame(t)}else be.setExtraStackFrame(null)}function Xe(e,r,t,a,f){{var l=Function.call.bind(B);for(var u in e)if(l(e,u)){var s=void 0;try{if(typeof e[u]!="function"){var R=Error((a||"React class")+": "+t+" type `"+u+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[u]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw R.name="Invariant Violation",R}s=e[u](r,u,a,t,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(c){s=c}s&&!(s instanceof Error)&&(G(f),b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",a||"React class",t,u,typeof s),G(null)),s instanceof Error&&!(s.message in me)&&(me[s.message]=!0,G(f),b("Failed %s type: %s",t,s.message),G(null))}}}var Ze=Array.isArray;function X(e){return Ze(e)}function Qe(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,t=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return t}}function er(e){try{return Re(e),!1}catch{return!0}}function Re(e){return""+e}function ye(e){if(er(e))return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",Qe(e)),Re(e)}var $=F.ReactCurrentOwner,rr={key:!0,ref:!0,__self:!0,__source:!0},Ee,_e,Z;Z={};function tr(e){if(B.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function nr(e){if(B.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function ar(e,r){if(typeof e.ref=="string"&&$.current&&r&&$.current.stateNode!==r){var t=O($.current.type);Z[t]||(b('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',O($.current.type),e.ref),Z[t]=!0)}}function ir(e,r){{var t=function(){Ee||(Ee=!0,b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}}function or(e,r){{var t=function(){_e||(_e=!0,b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"ref",{get:t,configurable:!0})}}var sr=function(e,r,t,a,f,l,u){var s={$$typeof:n,type:e,key:r,ref:t,props:u,_owner:l};return s._store={},Object.defineProperty(s._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(s,"_self",{configurable:!1,enumerable:!1,writable:!1,value:a}),Object.defineProperty(s,"_source",{configurable:!1,enumerable:!1,writable:!1,value:f}),Object.freeze&&(Object.freeze(s.props),Object.freeze(s)),s};function ur(e,r,t,a,f){{var l,u={},s=null,R=null;t!==void 0&&(ye(t),s=""+t),nr(r)&&(ye(r.key),s=""+r.key),tr(r)&&(R=r.ref,ar(r,f));for(l in r)B.call(r,l)&&!rr.hasOwnProperty(l)&&(u[l]=r[l]);if(e&&e.defaultProps){var c=e.defaultProps;for(l in c)u[l]===void 0&&(u[l]=c[l])}if(s||R){var d=typeof e=="function"?e.displayName||e.name||"Unknown":e;s&&ir(u,d),R&&or(u,d)}return sr(e,s,R,f,a,$.current,u)}}var Q=F.ReactCurrentOwner,we=F.ReactDebugCurrentFrame;function Y(e){if(e){var r=e._owner,t=H(e.type,e._source,r?r.type:null);we.setExtraStackFrame(t)}else we.setExtraStackFrame(null)}var ee;ee=!1;function re(e){return typeof e=="object"&&e!==null&&e.$$typeof===n}function Te(){{if(Q.current){var e=O(Q.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function fr(e){{if(e!==void 0){var r=e.fileName.replace(/^.*[\\\/]/,""),t=e.lineNumber;return`

Check your code at `+r+":"+t+"."}return""}}var Oe={};function lr(e){{var r=Te();if(!r){var t=typeof e=="string"?e:e.displayName||e.name;t&&(r=`

Check the top-level render call using <`+t+">.")}return r}}function Ce(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var t=lr(r);if(Oe[t])return;Oe[t]=!0;var a="";e&&e._owner&&e._owner!==Q.current&&(a=" It was passed a child from "+O(e._owner.type)+"."),Y(e),b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',t,a),Y(null)}}function Se(e,r){{if(typeof e!="object")return;if(X(e))for(var t=0;t<e.length;t++){var a=e[t];re(a)&&Ce(a,r)}else if(re(e))e._store&&(e._store.validated=!0);else if(e){var f=Ie(e);if(typeof f=="function"&&f!==e.entries)for(var l=f.call(e),u;!(u=l.next()).done;)re(u.value)&&Ce(u.value,r)}}}function cr(e){{var r=e.type;if(r==null||typeof r=="string")return;var t;if(typeof r=="function")t=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===m||r.$$typeof===T))t=r.propTypes;else return;if(t){var a=O(r);Xe(t,e.props,"prop",a,e)}else if(r.PropTypes!==void 0&&!ee){ee=!0;var f=O(r);b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",f||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function dr(e){{for(var r=Object.keys(e.props),t=0;t<r.length;t++){var a=r[t];if(a!=="children"&&a!=="key"){Y(e),b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",a),Y(null);break}}e.ref!==null&&(Y(e),b("Invalid attribute `ref` supplied to `React.Fragment`."),Y(null))}}function De(e,r,t,a,f,l){{var u=He(e);if(!u){var s="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(s+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var R=fr(f);R?s+=R:s+=Te();var c;e===null?c="null":X(e)?c="array":e!==void 0&&e.$$typeof===n?(c="<"+(O(e.type)||"Unknown")+" />",s=" Did you accidentally export a JSX literal instead of a component?"):c=typeof e,b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",c,s)}var d=ur(e,r,t,f,l);if(d==null)return d;if(u){var _=r.children;if(_!==void 0)if(a)if(X(_)){for(var A=0;A<_.length;A++)Se(_[A],e);Object.freeze&&Object.freeze(_)}else b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else Se(_,e)}return e===o?dr(d):cr(d),d}}function vr(e,r,t){return De(e,r,t,!0)}function hr(e,r,t){return De(e,r,t,!1)}var gr=hr,pr=vr;I.Fragment=o,I.jsx=gr,I.jsxs=pr}()),I}(function(v){process.env.NODE_ENV==="production"?v.exports=ke():v.exports=xe()})(S);const ae=p.jsx;function x(v){return new L(v)}class L{constructor(n){J(this,"date");n instanceof L?this.date=new Date(n.valueOf()):this.date=new Date(n.valueOf())}set(n,i){const o=this.clone();switch(i){case"year":o.setFullYear(n);break;case"month":o.setMonth(n-1);break;case"date":o.setDate(n);break;case"hour":o.setHours(n);break;case"minute":o.setMinutes(n);break}return new L(o)}get(n){const i=this.clone();switch(n){case"year":return i.getFullYear();case"month":return i.getMonth()+1;case"date":return i.getDate();case"hour":return i.getHours();case"minute":return i.getMinutes();case"day":return i.getDay()}}add(n,i){return this.set(this.get(i)+n,i)}subtract(n,i){return this.set(this.get(i)-n,i)}format(n){return n.replace(/(YYYY)|(MM)|(DD)|(HH)|(mm)/g,i=>{let o=i;switch(i){case"YYYY":o=`${this.date.getFullYear()}`;break;case"MM":o=this.formatFullDate(this.date.getMonth()+1);break;case"DD":o=this.formatFullDate(this.date.getDate());break;case"HH":o=this.formatFullDate(this.date.getHours());break;case"mm":o=this.formatFullDate(this.date.getMinutes());break}return o})}toRange(n,i){const o=x(n),h=this.getComparison(n);if(h===0)return[x(n)];let[y,D]=h>0?[x(this.date),o]:[o,x(this.date)];const w=[];for(;y.valueOf()<D.valueOf();)w.push(y),y=y.add(1,i);return w}toData(){return{year:this.date.getFullYear(),month:this.date.getMonth()+1,date:this.date.getDate(),day:this.date.getDay(),hour:this.date.getHours(),minutes:this.date.getMinutes()}}valueOf(){return this.date.valueOf()}clone(){return new Date(this.date.toISOString())}formatFullDate(n){return n<10?`0${n}`:`${n}`}getComparison(n){const i=x(n).set(0,"hour").set(0,"minute").valueOf(),o=this.set(0,"hour").set(0,"minute").valueOf();return i===o?0:i>o?1:-1}}function je(v,n=6){let i=x(v);return i=i.set(1,"date"),i=i.subtract((7-i.get("day"))%7,"date"),i.toRange(i.add(7*n,"date"),"date")}class Fe{constructor(){J(this,"range",[]);J(this,"events",new Map)}getRange(){return this.range}setRange(n,i){var o;this.range=je(n,i),(o=this.events.get("range"))==null||o.forEach(h=>h(this.range))}on(n,i){const{events:o}=this,h=o.get(n)||new Set;o.has(n)||o.set(n,h),h.add(i)}off(n,i){const{events:o}=this;if(!o.has(n))return;o.get(n).delete(i)}}const Ye={date:new Date};function Ae(v=Ye){const n=g.useRef(new Fe).current,[i,o]=g.useState(n.getRange());return g.useEffect(()=>{return n.on("range",h),n.setRange(v.date||new Date,v.row),()=>{n.off("range",h)};function h(y){o(y)}},[v.date,v.row]),ae("div",{children:i.map(h=>{const y=h.format("YYYY-MM-DD");return ae("li",{children:y},y)})})}return Ae});
//# sourceMappingURL=react-calendar.umd.cjs.map
