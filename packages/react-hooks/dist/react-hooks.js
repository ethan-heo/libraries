import { useEffect as E, useRef as L } from "react";
function h(e) {
  return typeof e != "object" ? document.querySelector(e) : Object.hasOwn(e, "nodeName") ? e : Object.hasOwn(e, "current") ? e.current : null;
}
function C(e, t) {
  E(() => {
    const o = h(e);
    if (!o)
      throw TypeError("Not found target", { cause: e });
    return document.addEventListener("click", n), () => {
      document.removeEventListener("click", n);
    };
    function n(i) {
      const c = i.target;
      o != null && o.contains(c) || t();
    }
  }, []);
}
const O = {
  boundary: 40
};
function R(e, t = O) {
  const o = L({
    isActive: !1
  });
  E(() => {
    const n = h(e);
    if (!n)
      return;
    let i;
    return n.addEventListener("mousedown", c), n.addEventListener("touchstart", c), n.addEventListener("mouseup", u), n.addEventListener("touchend", u), n.addEventListener("mousemove", v), n.addEventListener("touchmove", d), () => {
      n == null || n.removeEventListener("mousedown", c), n == null || n.removeEventListener("touchstart", c), n == null || n.removeEventListener("mouseup", u), n == null || n.removeEventListener("touchend", u), n == null || n.removeEventListener("mousemove", v), n == null || n.removeEventListener("touchmove", d);
    };
    function c() {
      o.current.isActive = !0;
    }
    function u() {
      o.current.isActive = !1, window.clearInterval(i);
    }
    function v(s) {
      if (!o.current.isActive)
        return;
      window.clearInterval(i);
      const f = s.currentTarget, l = T(
        f,
        t.boundary,
        a(s)
      );
      l !== r.CENTER && (i = window.setInterval(() => {
        m(f, l);
      }, 10));
    }
    function d(s) {
      if (!o.current.isActive)
        return;
      window.clearInterval(i);
      const f = s.currentTarget, l = T(
        f,
        t.boundary,
        a(s)
      );
      s.cancelable && l !== r.CENTER && s.preventDefault(), l !== r.CENTER && (i = window.setInterval(() => {
        m(f, l);
      }, 10));
    }
  }, [t]);
}
function a(e) {
  const { left: t, top: o } = w(e.currentTarget);
  return "clientX" in e ? [e.clientX - t, e.clientY - o] : [
    e.changedTouches[0].clientX - t,
    e.changedTouches[0].clientY - o
  ];
}
function w(e) {
  return e === document.body ? {
    left: 0,
    top: 0
  } : e.getBoundingClientRect();
}
const r = {
  LEFT: 0,
  RIGHT: 1,
  TOP: 2,
  BOTTOM: 3,
  CENTER: 4
};
function T(e, t, o) {
  const { width: n, height: i } = e.getBoundingClientRect(), [c, u] = o;
  return c >= 0 && c <= t ? r.LEFT : c >= n - t && c <= n ? r.RIGHT : u >= 0 && u <= t ? r.TOP : u >= i - t && u <= i ? r.BOTTOM : r.CENTER;
}
function m(e, t) {
  switch (t) {
    case r.TOP:
      e.scrollTo({
        top: e.scrollTop - 5
      });
      break;
    case r.BOTTOM:
      e.scrollTo({
        top: e.scrollTop + 5
      });
      break;
    case r.LEFT:
      e.scrollTo({
        left: e.scrollLeft - 5
      });
      break;
    case r.RIGHT:
      e.scrollTo({
        left: e.scrollLeft + 5
      });
      break;
  }
}
export {
  C as useClickOutOfArea,
  R as useDragScroll
};
//# sourceMappingURL=react-hooks.js.map
