var cr = Object.defineProperty;
var fr = (f, a, n) => a in f ? cr(f, a, { enumerable: !0, configurable: !0, writable: !0, value: n }) : f[a] = n;
var U = (f, a, n) => (fr(f, typeof a != "symbol" ? a + "" : a, n), n);
import De, { useRef as dr, useState as vr, useEffect as hr } from "react";
var Q = {}, gr = {
  get exports() {
    return Q;
  },
  set exports(f) {
    Q = f;
  }
}, A = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Te;
function pr() {
  if (Te)
    return A;
  Te = 1;
  var f = De, a = Symbol.for("react.element"), n = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, h = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, b = { key: !0, ref: !0, __self: !0, __source: !0 };
  function T(E, g, D) {
    var R, _ = {}, C = null, I = null;
    D !== void 0 && (C = "" + D), g.key !== void 0 && (C = "" + g.key), g.ref !== void 0 && (I = g.ref);
    for (R in g)
      i.call(g, R) && !b.hasOwnProperty(R) && (_[R] = g[R]);
    if (E && E.defaultProps)
      for (R in g = E.defaultProps, g)
        _[R] === void 0 && (_[R] = g[R]);
    return { $$typeof: a, type: E, key: C, ref: I, props: _, _owner: h.current };
  }
  return A.Fragment = n, A.jsx = T, A.jsxs = T, A;
}
var M = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ce;
function mr() {
  return Ce || (Ce = 1, process.env.NODE_ENV !== "production" && function() {
    var f = De, a = Symbol.for("react.element"), n = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), h = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), T = Symbol.for("react.provider"), E = Symbol.for("react.context"), g = Symbol.for("react.forward_ref"), D = Symbol.for("react.suspense"), R = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), C = Symbol.for("react.lazy"), I = Symbol.for("react.offscreen"), ee = Symbol.iterator, Pe = "@@iterator";
    function ke(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = ee && e[ee] || e[Pe];
      return typeof r == "function" ? r : null;
    }
    var P = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function p(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
          t[o - 1] = arguments[o];
        xe("error", e, t);
      }
    }
    function xe(e, r, t) {
      {
        var o = P.ReactDebugCurrentFrame, l = o.getStackAddendum();
        l !== "" && (r += "%s", t = t.concat([l]));
        var c = t.map(function(u) {
          return String(u);
        });
        c.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, c);
      }
    }
    var je = !1, Fe = !1, Ye = !1, Ae = !1, Me = !1, re;
    re = Symbol.for("react.module.reference");
    function Ie(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === i || e === b || Me || e === h || e === D || e === R || Ae || e === I || je || Fe || Ye || typeof e == "object" && e !== null && (e.$$typeof === C || e.$$typeof === _ || e.$$typeof === T || e.$$typeof === E || e.$$typeof === g || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === re || e.getModuleId !== void 0));
    }
    function $e(e, r, t) {
      var o = e.displayName;
      if (o)
        return o;
      var l = r.displayName || r.name || "";
      return l !== "" ? t + "(" + l + ")" : t;
    }
    function te(e) {
      return e.displayName || "Context";
    }
    function w(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && p("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case i:
          return "Fragment";
        case n:
          return "Portal";
        case b:
          return "Profiler";
        case h:
          return "StrictMode";
        case D:
          return "Suspense";
        case R:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case E:
            var r = e;
            return te(r) + ".Consumer";
          case T:
            var t = e;
            return te(t._context) + ".Provider";
          case g:
            return $e(e, e.render, "ForwardRef");
          case _:
            var o = e.displayName || null;
            return o !== null ? o : w(e.type) || "Memo";
          case C: {
            var l = e, c = l._payload, u = l._init;
            try {
              return w(u(c));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var S = Object.assign, F = 0, ae, ne, oe, ie, se, ue, le;
    function ce() {
    }
    ce.__reactDisabledLog = !0;
    function We() {
      {
        if (F === 0) {
          ae = console.log, ne = console.info, oe = console.warn, ie = console.error, se = console.group, ue = console.groupCollapsed, le = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ce,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        F++;
      }
    }
    function Le() {
      {
        if (F--, F === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: S({}, e, {
              value: ae
            }),
            info: S({}, e, {
              value: ne
            }),
            warn: S({}, e, {
              value: oe
            }),
            error: S({}, e, {
              value: ie
            }),
            group: S({}, e, {
              value: se
            }),
            groupCollapsed: S({}, e, {
              value: ue
            }),
            groupEnd: S({}, e, {
              value: le
            })
          });
        }
        F < 0 && p("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var B = P.ReactCurrentDispatcher, q;
    function $(e, r, t) {
      {
        if (q === void 0)
          try {
            throw Error();
          } catch (l) {
            var o = l.stack.trim().match(/\n( *(at )?)/);
            q = o && o[1] || "";
          }
        return `
` + q + e;
      }
    }
    var G = !1, W;
    {
      var Ne = typeof WeakMap == "function" ? WeakMap : Map;
      W = new Ne();
    }
    function fe(e, r) {
      if (!e || G)
        return "";
      {
        var t = W.get(e);
        if (t !== void 0)
          return t;
      }
      var o;
      G = !0;
      var l = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var c;
      c = B.current, B.current = null, We();
      try {
        if (r) {
          var u = function() {
            throw Error();
          };
          if (Object.defineProperty(u.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(u, []);
            } catch (O) {
              o = O;
            }
            Reflect.construct(e, [], u);
          } else {
            try {
              u.call();
            } catch (O) {
              o = O;
            }
            e.call(u.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (O) {
            o = O;
          }
          e();
        }
      } catch (O) {
        if (O && o && typeof O.stack == "string") {
          for (var s = O.stack.split(`
`), m = o.stack.split(`
`), d = s.length - 1, v = m.length - 1; d >= 1 && v >= 0 && s[d] !== m[v]; )
            v--;
          for (; d >= 1 && v >= 0; d--, v--)
            if (s[d] !== m[v]) {
              if (d !== 1 || v !== 1)
                do
                  if (d--, v--, v < 0 || s[d] !== m[v]) {
                    var y = `
` + s[d].replace(" at new ", " at ");
                    return e.displayName && y.includes("<anonymous>") && (y = y.replace("<anonymous>", e.displayName)), typeof e == "function" && W.set(e, y), y;
                  }
                while (d >= 1 && v >= 0);
              break;
            }
        }
      } finally {
        G = !1, B.current = c, Le(), Error.prepareStackTrace = l;
      }
      var x = e ? e.displayName || e.name : "", Oe = x ? $(x) : "";
      return typeof e == "function" && W.set(e, Oe), Oe;
    }
    function Ve(e, r, t) {
      return fe(e, !1);
    }
    function Ue(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function L(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return fe(e, Ue(e));
      if (typeof e == "string")
        return $(e);
      switch (e) {
        case D:
          return $("Suspense");
        case R:
          return $("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case g:
            return Ve(e.render);
          case _:
            return L(e.type, r, t);
          case C: {
            var o = e, l = o._payload, c = o._init;
            try {
              return L(c(l), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var N = Object.prototype.hasOwnProperty, de = {}, ve = P.ReactDebugCurrentFrame;
    function V(e) {
      if (e) {
        var r = e._owner, t = L(e.type, e._source, r ? r.type : null);
        ve.setExtraStackFrame(t);
      } else
        ve.setExtraStackFrame(null);
    }
    function He(e, r, t, o, l) {
      {
        var c = Function.call.bind(N);
        for (var u in e)
          if (c(e, u)) {
            var s = void 0;
            try {
              if (typeof e[u] != "function") {
                var m = Error((o || "React class") + ": " + t + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw m.name = "Invariant Violation", m;
              }
              s = e[u](r, u, o, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (d) {
              s = d;
            }
            s && !(s instanceof Error) && (V(l), p("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", t, u, typeof s), V(null)), s instanceof Error && !(s.message in de) && (de[s.message] = !0, V(l), p("Failed %s type: %s", t, s.message), V(null));
          }
      }
    }
    var Be = Array.isArray;
    function J(e) {
      return Be(e);
    }
    function qe(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Ge(e) {
      try {
        return he(e), !1;
      } catch {
        return !0;
      }
    }
    function he(e) {
      return "" + e;
    }
    function ge(e) {
      if (Ge(e))
        return p("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", qe(e)), he(e);
    }
    var Y = P.ReactCurrentOwner, Je = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, pe, me, z;
    z = {};
    function ze(e) {
      if (N.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ke(e) {
      if (N.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Xe(e, r) {
      if (typeof e.ref == "string" && Y.current && r && Y.current.stateNode !== r) {
        var t = w(Y.current.type);
        z[t] || (p('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', w(Y.current.type), e.ref), z[t] = !0);
      }
    }
    function Ze(e, r) {
      {
        var t = function() {
          pe || (pe = !0, p("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function Qe(e, r) {
      {
        var t = function() {
          me || (me = !0, p("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var er = function(e, r, t, o, l, c, u) {
      var s = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: a,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: u,
        // Record the component responsible for creating this element.
        _owner: c
      };
      return s._store = {}, Object.defineProperty(s._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(s, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: o
      }), Object.defineProperty(s, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: l
      }), Object.freeze && (Object.freeze(s.props), Object.freeze(s)), s;
    };
    function rr(e, r, t, o, l) {
      {
        var c, u = {}, s = null, m = null;
        t !== void 0 && (ge(t), s = "" + t), Ke(r) && (ge(r.key), s = "" + r.key), ze(r) && (m = r.ref, Xe(r, l));
        for (c in r)
          N.call(r, c) && !Je.hasOwnProperty(c) && (u[c] = r[c]);
        if (e && e.defaultProps) {
          var d = e.defaultProps;
          for (c in d)
            u[c] === void 0 && (u[c] = d[c]);
        }
        if (s || m) {
          var v = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          s && Ze(u, v), m && Qe(u, v);
        }
        return er(e, s, m, l, o, Y.current, u);
      }
    }
    var K = P.ReactCurrentOwner, be = P.ReactDebugCurrentFrame;
    function k(e) {
      if (e) {
        var r = e._owner, t = L(e.type, e._source, r ? r.type : null);
        be.setExtraStackFrame(t);
      } else
        be.setExtraStackFrame(null);
    }
    var X;
    X = !1;
    function Z(e) {
      return typeof e == "object" && e !== null && e.$$typeof === a;
    }
    function Re() {
      {
        if (K.current) {
          var e = w(K.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function tr(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var ye = {};
    function ar(e) {
      {
        var r = Re();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Ee(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = ar(r);
        if (ye[t])
          return;
        ye[t] = !0;
        var o = "";
        e && e._owner && e._owner !== K.current && (o = " It was passed a child from " + w(e._owner.type) + "."), k(e), p('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, o), k(null);
      }
    }
    function _e(e, r) {
      {
        if (typeof e != "object")
          return;
        if (J(e))
          for (var t = 0; t < e.length; t++) {
            var o = e[t];
            Z(o) && Ee(o, r);
          }
        else if (Z(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var l = ke(e);
          if (typeof l == "function" && l !== e.entries)
            for (var c = l.call(e), u; !(u = c.next()).done; )
              Z(u.value) && Ee(u.value, r);
        }
      }
    }
    function nr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === g || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === _))
          t = r.propTypes;
        else
          return;
        if (t) {
          var o = w(r);
          He(t, e.props, "prop", o, e);
        } else if (r.PropTypes !== void 0 && !X) {
          X = !0;
          var l = w(r);
          p("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", l || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && p("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function or(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var o = r[t];
          if (o !== "children" && o !== "key") {
            k(e), p("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", o), k(null);
            break;
          }
        }
        e.ref !== null && (k(e), p("Invalid attribute `ref` supplied to `React.Fragment`."), k(null));
      }
    }
    function we(e, r, t, o, l, c) {
      {
        var u = Ie(e);
        if (!u) {
          var s = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (s += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var m = tr(l);
          m ? s += m : s += Re();
          var d;
          e === null ? d = "null" : J(e) ? d = "array" : e !== void 0 && e.$$typeof === a ? (d = "<" + (w(e.type) || "Unknown") + " />", s = " Did you accidentally export a JSX literal instead of a component?") : d = typeof e, p("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", d, s);
        }
        var v = rr(e, r, t, l, c);
        if (v == null)
          return v;
        if (u) {
          var y = r.children;
          if (y !== void 0)
            if (o)
              if (J(y)) {
                for (var x = 0; x < y.length; x++)
                  _e(y[x], e);
                Object.freeze && Object.freeze(y);
              } else
                p("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              _e(y, e);
        }
        return e === i ? or(v) : nr(v), v;
      }
    }
    function ir(e, r, t) {
      return we(e, r, t, !0);
    }
    function sr(e, r, t) {
      return we(e, r, t, !1);
    }
    var ur = sr, lr = ir;
    M.Fragment = i, M.jsx = ur, M.jsxs = lr;
  }()), M;
}
(function(f) {
  process.env.NODE_ENV === "production" ? f.exports = pr() : f.exports = mr();
})(gr);
const Se = Q.jsx;
function j(f) {
  return new H(f);
}
class H {
  constructor(a) {
    U(this, "date");
    a instanceof H ? this.date = new Date(a.valueOf()) : this.date = new Date(a.valueOf());
  }
  set(a, n) {
    const i = this.clone();
    switch (n) {
      case "year":
        i.setFullYear(a);
        break;
      case "month":
        i.setMonth(a - 1);
        break;
      case "date":
        i.setDate(a);
        break;
      case "hour":
        i.setHours(a);
        break;
      case "minute":
        i.setMinutes(a);
        break;
    }
    return new H(i);
  }
  get(a) {
    const n = this.clone();
    switch (a) {
      case "year":
        return n.getFullYear();
      case "month":
        return n.getMonth() + 1;
      case "date":
        return n.getDate();
      case "hour":
        return n.getHours();
      case "minute":
        return n.getMinutes();
      case "day":
        return n.getDay();
    }
  }
  add(a, n) {
    return this.set(this.get(n) + a, n);
  }
  subtract(a, n) {
    return this.set(this.get(n) - a, n);
  }
  format(a) {
    return a.replace(/(YYYY)|(MM)|(DD)|(HH)|(mm)/g, (n) => {
      let i = n;
      switch (n) {
        case "YYYY":
          i = `${this.date.getFullYear()}`;
          break;
        case "MM":
          i = this.formatFullDate(this.date.getMonth() + 1);
          break;
        case "DD":
          i = this.formatFullDate(this.date.getDate());
          break;
        case "HH":
          i = this.formatFullDate(this.date.getHours());
          break;
        case "mm":
          i = this.formatFullDate(this.date.getMinutes());
          break;
      }
      return i;
    });
  }
  toRange(a, n) {
    const i = j(a), h = this.getComparison(a);
    if (h === 0)
      return [j(a)];
    let [b, T] = h > 0 ? [j(this.date), i] : [i, j(this.date)];
    const E = [];
    for (; b.valueOf() < T.valueOf(); )
      E.push(b), b = b.add(1, n);
    return E;
  }
  toData() {
    return {
      year: this.date.getFullYear(),
      month: this.date.getMonth() + 1,
      date: this.date.getDate(),
      day: this.date.getDay(),
      hour: this.date.getHours(),
      minutes: this.date.getMinutes()
    };
  }
  valueOf() {
    return this.date.valueOf();
  }
  clone() {
    return new Date(this.date.toISOString());
  }
  formatFullDate(a) {
    return a < 10 ? `0${a}` : `${a}`;
  }
  getComparison(a) {
    const n = j(a).set(0, "hour").set(0, "minute").valueOf(), i = this.set(0, "hour").set(0, "minute").valueOf();
    return n === i ? 0 : n > i ? 1 : -1;
  }
}
function br(f, a = 6) {
  let n = j(f);
  return n = n.set(1, "date"), n = n.subtract((7 - n.get("day")) % 7, "date"), n.toRange(n.add(7 * a, "date"), "date");
}
class Rr {
  constructor() {
    U(this, "range", []);
    U(this, "events", /* @__PURE__ */ new Map());
  }
  getRange() {
    return this.range;
  }
  setRange(a, n) {
    var i;
    this.range = br(a, n), (i = this.events.get("range")) == null || i.forEach((h) => h(this.range));
  }
  on(a, n) {
    const { events: i } = this, h = i.get(a) || /* @__PURE__ */ new Set();
    i.has(a) || i.set(a, h), h.add(n);
  }
  off(a, n) {
    const { events: i } = this;
    if (!i.has(a))
      return;
    i.get(a).delete(n);
  }
}
const yr = {
  date: new Date()
};
function wr(f = yr) {
  const a = dr(new Rr()).current, [n, i] = vr(a.getRange());
  return hr(() => {
    return a.on("range", h), a.setRange(f.date || new Date(), f.row), () => {
      a.off("range", h);
    };
    function h(b) {
      i(b);
    }
  }, [f.date, f.row]), /* @__PURE__ */ Se("div", { children: n.map((h) => {
    const b = h.format("YYYY-MM-DD");
    return /* @__PURE__ */ Se("li", { children: b }, b);
  }) });
}
export {
  wr as default
};
//# sourceMappingURL=react-calendar.js.map
