import { useEffect as a, useRef as h } from "react";
function E(e) {
  return typeof e != "object" ? document.querySelector(e) : Object.hasOwn(e, "nodeName") ? e : Object.hasOwn(e, "current") ? e.current : null;
}
function C(e, t) {
  a(() => {
    const o = E(e);
    if (!o)
      throw TypeError("Not found target", { cause: e });
    return document.addEventListener("click", n), () => {
      document.removeEventListener("click", n);
    };
    function n(i) {
      const r = i.target;
      o != null && o.contains(r) || t();
    }
  }, []);
}
const L = {
  boundary: 40
};
function R(e, t = L) {
  const o = h({
    isActive: !1
  });
  a(() => {
    const n = E(e);
    if (!n)
      return;
    return n.addEventListener("mousedown", i), n.addEventListener("touchstart", i), n.addEventListener("mouseup", r), n.addEventListener("touchend", r), n.addEventListener("mousemove", u), n.addEventListener("touchmove", l), () => {
      n == null || n.removeEventListener("mousedown", i), n == null || n.removeEventListener("touchstart", i), n == null || n.removeEventListener("mouseup", r), n == null || n.removeEventListener("touchend", r), n == null || n.removeEventListener("mousemove", u), n == null || n.removeEventListener("touchmove", l);
    };
    function i() {
      o.current.isActive = !0;
    }
    function r() {
      o.current.isActive = !1;
    }
    function u(s) {
      if (!o.current.isActive)
        return;
      const f = s.currentTarget;
      m(
        f,
        T(f, t.boundary, d(s))
      );
    }
    function l(s) {
      if (!o.current.isActive)
        return;
      const f = s.currentTarget, v = T(
        f,
        t.boundary,
        d(s)
      );
      s.cancelable && v !== c.CENTER && s.preventDefault(), m(f, v);
    }
  }, [t]);
}
function d(e) {
  const { left: t, top: o } = O(e.currentTarget);
  return "clientX" in e ? [e.clientX - t, e.clientY - o] : [
    e.changedTouches[0].clientX - t,
    e.changedTouches[0].clientY - o
  ];
}
function O(e) {
  return e === document.body ? {
    left: 0,
    top: 0
  } : e.getBoundingClientRect();
}
const c = {
  LEFT: 0,
  RIGHT: 1,
  TOP: 2,
  BOTTOM: 3,
  CENTER: 4
};
function T(e, t, o) {
  const { width: n, height: i } = e.getBoundingClientRect(), [r, u] = o;
  return r >= 0 && r <= t ? c.LEFT : r >= n - t && r <= n ? c.RIGHT : u >= 0 && u <= t ? c.TOP : u >= i - t && u <= i ? c.BOTTOM : c.CENTER;
}
function m(e, t) {
  switch (t) {
    case c.TOP:
      e.scrollTo({
        top: e.scrollTop - 5
      });
      break;
    case c.BOTTOM:
      e.scrollTo({
        top: e.scrollTop + 5
      });
      break;
    case c.LEFT:
      e.scrollTo({
        left: e.scrollLeft - 5
      });
      break;
    case c.RIGHT:
      e.scrollTo({
        left: e.scrollLeft + 5
      });
      break;
  }
}
export {
  C as useClickOutOfArea,
  R as useMoveToScroll
};
//# sourceMappingURL=react-hooks.js.map
