(function(n,t){typeof exports=="object"&&typeof module<"u"?t(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],t):(n=typeof globalThis<"u"?globalThis:n||self,t(n["react-hooks"]={},n.react))})(this,function(n,t){"use strict";function u(e){return typeof e!="object"?document.querySelector(e):Object.hasOwn(e,"nodeName")?e:Object.hasOwn(e,"current")?e.current:null}function i(e,r){t.useEffect(()=>{const c=u(e);if(!c)throw TypeError("Not found target",{cause:e});return document.addEventListener("click",o),()=>{document.removeEventListener("click",o)};function o(f){const d=f.target;c!=null&&c.contains(d)||r()}},[])}n.useClickOutOfArea=i,Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})});
//# sourceMappingURL=react-hooks.umd.cjs.map