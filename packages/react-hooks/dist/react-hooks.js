import { useEffect as u } from "react";
function i(e) {
  return typeof e != "object" ? document.querySelector(e) : Object.hasOwn(e, "nodeName") ? e : Object.hasOwn(e, "current") ? e.current : null;
}
function s(e, c) {
  u(() => {
    const n = i(e);
    if (!n)
      throw TypeError("Not found target", { cause: e });
    return document.addEventListener("click", t), () => {
      document.removeEventListener("click", t);
    };
    function t(r) {
      const o = r.target;
      n != null && n.contains(o) || c();
    }
  }, []);
}
export {
  s as useClickOutOfArea
};
//# sourceMappingURL=react-hooks.js.map
