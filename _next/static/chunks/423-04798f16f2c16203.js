"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [423],
  {
    7423: function (t, e, n) {
      n.d(e, {
        v: function () {
          return F;
        },
      });
      Object.create;
      Object.create;
      const o = new WeakMap();
      let r;
      function i({ target: t, contentRect: e, borderBoxSize: n }) {
        var r;
        null === (r = o.get(t)) ||
          void 0 === r ||
          r.forEach((o) => {
            o({
              target: t,
              contentSize: e,
              get size() {
                return (function (t, e) {
                  if (e) {
                    const { inlineSize: t, blockSize: n } = e[0];
                    return { width: t, height: n };
                  }
                  return t instanceof SVGElement && "getBBox" in t
                    ? t.getBBox()
                    : { width: t.offsetWidth, height: t.offsetHeight };
                })(t, n);
              },
            });
          });
      }
      function s(t) {
        t.forEach(i);
      }
      function c(t, e) {
        r ||
          ("undefined" !== typeof ResizeObserver &&
            (r = new ResizeObserver(s)));
        const n = (function (t, e) {
          var n;
          return (
            "string" === typeof t
              ? e
                ? ((null !== (n = e[t]) && void 0 !== n) ||
                    (e[t] = document.querySelectorAll(t)),
                  (t = e[t]))
                : (t = document.querySelectorAll(t))
              : t instanceof Element && (t = [t]),
            Array.from(t || [])
          );
        })(t);
        return (
          n.forEach((t) => {
            let n = o.get(t);
            n || ((n = new Set()), o.set(t, n)),
              n.add(e),
              null === r || void 0 === r || r.observe(t);
          }),
          () => {
            n.forEach((t) => {
              const n = o.get(t);
              null === n || void 0 === n || n.delete(e),
                (null === n || void 0 === n ? void 0 : n.size) ||
                  null === r ||
                  void 0 === r ||
                  r.unobserve(t);
            });
          }
        );
      }
      const l = new Set();
      let f;
      function a(t) {
        return (
          l.add(t),
          f ||
            ((f = () => {
              const t = {
                  width: window.innerWidth,
                  height: window.innerHeight,
                },
                e = { target: window, size: t, contentSize: t };
              l.forEach((t) => t(e));
            }),
            window.addEventListener("resize", f)),
          () => {
            l.delete(t), !l.size && f && (f = void 0);
          }
        );
      }
      const u = (t) => "function" === typeof t;
      const g = (t, e, n) => (e - t === 0 ? 1 : (n - t) / (e - t));
      const d = {
        x: { length: "Width", position: "Left" },
        y: { length: "Height", position: "Top" },
      };
      function h(t, e, n, o) {
        const r = n[e],
          { length: i, position: s } = d[e],
          c = r.current,
          l = n.time;
        (r.current = t["scroll" + s]),
          (r.scrollLength = t["scroll" + i] - t["client" + i]),
          (r.offset.length = 0),
          (r.offset[0] = 0),
          (r.offset[1] = r.scrollLength),
          (r.progress = g(0, r.scrollLength, r.current));
        const f = o - l;
        var a, u;
        r.velocity =
          f > 50 ? 0 : ((a = r.current - c), (u = f) ? a * (1e3 / u) : 0);
      }
      const p = (t) => t,
        v = (t, e, n) => -n * t + n * e + t;
      function m(t, e) {
        const n = t[t.length - 1];
        for (let o = 1; o <= e; o++) {
          const r = g(0, e, o);
          t.push(v(n, 1, r));
        }
      }
      function y(t) {
        const e = [0];
        return m(e, t - 1), e;
      }
      const w = (t) => "number" === typeof t;
      function E(t, e) {
        return ((t) => Array.isArray(t) && !w(t[0]))(t)
          ? t[
              ((t, e, n) => {
                const o = e - t;
                return ((((n - t) % o) + o) % o) + t;
              })(0, t.length, e)
            ]
          : t;
      }
      function x(t, e = y(t.length), n = p) {
        const o = t.length,
          r = o - e.length;
        return (
          r > 0 && m(e, r),
          (r) => {
            let i = 0;
            for (; i < o - 2 && !(r < e[i + 1]); i++);
            let s =
              ((c = 0),
              (l = 1),
              (f = g(e[i], e[i + 1], r)),
              Math.min(Math.max(f, c), l));
            var c, l, f;
            return (s = E(n, i)(s)), v(t[i], t[i + 1], s);
          }
        );
      }
      const L = {
          Enter: [
            [0, 1],
            [1, 1],
          ],
          Exit: [
            [0, 0],
            [1, 0],
          ],
          Any: [
            [1, 0],
            [0, 1],
          ],
          All: [
            [0, 0],
            [1, 1],
          ],
        },
        O = (t) => "string" === typeof t,
        b = { start: 0, center: 0.5, end: 1 };
      function W(t, e, n = 0) {
        let o = 0;
        if ((void 0 !== b[t] && (t = b[t]), O(t))) {
          const e = parseFloat(t);
          t.endsWith("px")
            ? (o = e)
            : t.endsWith("%")
            ? (t = e / 100)
            : t.endsWith("vw")
            ? (o = (e / 100) * document.documentElement.clientWidth)
            : t.endsWith("vh")
            ? (o = (e / 100) * document.documentElement.clientHeight)
            : (t = e);
        }
        return w(t) && (o = e * t), n + o;
      }
      const z = [0, 0];
      function S(t, e, n, o) {
        let r = Array.isArray(t) ? t : z,
          i = 0,
          s = 0;
        return (
          w(t)
            ? (r = [t, t])
            : O(t) &&
              (r = (t = t.trim()).includes(" ")
                ? t.split(" ")
                : [t, b[t] ? t : "0"]),
          (i = W(r[0], n, o)),
          (s = W(r[1], e)),
          i - s
        );
      }
      const B = { x: 0, y: 0 };
      function A(t, e, n) {
        let { offset: o = L.All } = n;
        const { target: r = t, axis: i = "y" } = n,
          s = "y" === i ? "height" : "width",
          c =
            r !== t
              ? (function (t, e) {
                  let n = { x: 0, y: 0 },
                    o = t;
                  for (; o && o !== e; )
                    if (o instanceof HTMLElement)
                      (n.x += o.offsetLeft),
                        (n.y += o.offsetTop),
                        (o = o.offsetParent);
                    else if (
                      o instanceof SVGGraphicsElement &&
                      "getBBox" in o
                    ) {
                      const { top: t, left: e } = o.getBBox();
                      for (n.x += e, n.y += t; o && "svg" !== o.tagName; )
                        o = o.parentNode;
                    }
                  return n;
                })(r, t)
              : B,
          l =
            r === t
              ? { width: t.scrollWidth, height: t.scrollHeight }
              : { width: r.clientWidth, height: r.clientHeight },
          f = { width: t.clientWidth, height: t.clientHeight };
        e[i].offset.length = 0;
        let a = !e[i].interpolate;
        const u = o.length;
        for (let g = 0; g < u; g++) {
          const t = S(o[g], f[s], l[s], c[i]);
          a || t === e[i].interpolatorOffsets[g] || (a = !0),
            (e[i].offset[g] = t);
        }
        a &&
          ((e[i].interpolate = x(y(u), e[i].offset)),
          (e[i].interpolatorOffsets = [...e[i].offset])),
          (e[i].progress = e[i].interpolate(e[i].current));
      }
      function H(t, e, n, o = {}) {
        const r = o.axis || "y";
        return {
          measure: () =>
            (function (t, e = t, n) {
              if (((n.x.targetOffset = 0), (n.y.targetOffset = 0), e !== t)) {
                let o = e;
                for (; o && o != t; )
                  (n.x.targetOffset += o.offsetLeft),
                    (n.y.targetOffset += o.offsetTop),
                    (o = o.offsetParent);
              }
              (n.x.targetLength = e === t ? e.scrollWidth : e.clientWidth),
                (n.y.targetLength = e === t ? e.scrollHeight : e.clientHeight),
                (n.x.containerLength = t.clientWidth),
                (n.y.containerLength = t.clientHeight);
            })(t, o.target, n),
          update: (e) => {
            !(function (t, e, n) {
              h(t, "x", e, n), h(t, "y", e, n), (e.time = n);
            })(t, n, e),
              (o.offset || o.target) && A(t, n, o);
          },
          notify: u(e) ? () => e(n) : k(e, n[r]),
        };
      }
      function k(t, e) {
        return (
          t.pause(),
          t.forEachNative((t, { easing: e }) => {
            var n, o;
            if (t.updateDuration) e || (t.easing = p), t.updateDuration(1);
            else {
              const r = { duration: 1e3 };
              e || (r.easing = "linear"),
                null ===
                  (o =
                    null === (n = t.effect) || void 0 === n
                      ? void 0
                      : n.updateTiming) ||
                  void 0 === o ||
                  o.call(n, r);
            }
          }),
          () => {
            t.currentTime = e.progress;
          }
        );
      }
      const P = new WeakMap(),
        M = new WeakMap(),
        j = new WeakMap(),
        T = (t) => (t === document.documentElement ? window : t);
      function N(t, e = {}) {
        var { container: n = document.documentElement } = e,
          o = (function (t, e) {
            var n = {};
            for (var o in t)
              Object.prototype.hasOwnProperty.call(t, o) &&
                e.indexOf(o) < 0 &&
                (n[o] = t[o]);
            if (
              null != t &&
              "function" === typeof Object.getOwnPropertySymbols
            ) {
              var r = 0;
              for (o = Object.getOwnPropertySymbols(t); r < o.length; r++)
                e.indexOf(o[r]) < 0 &&
                  Object.prototype.propertyIsEnumerable.call(t, o[r]) &&
                  (n[o[r]] = t[o[r]]);
            }
            return n;
          })(e, ["container"]);
        let r = j.get(n);
        r || ((r = new Set()), j.set(n, r));
        const i = H(
          n,
          t,
          {
            time: 0,
            x: {
              current: 0,
              offset: [],
              progress: 0,
              scrollLength: 0,
              targetOffset: 0,
              targetLength: 0,
              containerLength: 0,
              velocity: 0,
            },
            y: {
              current: 0,
              offset: [],
              progress: 0,
              scrollLength: 0,
              targetOffset: 0,
              targetLength: 0,
              containerLength: 0,
              velocity: 0,
            },
          },
          o
        );
        if ((r.add(i), !P.has(n))) {
          const t = () => {
            const t = performance.now();
            for (const e of r) e.measure();
            for (const e of r) e.update(t);
            for (const e of r) e.notify();
          };
          P.set(n, t);
          const e = T(n);
          window.addEventListener("resize", t, { passive: !0 }),
            n !== document.documentElement &&
              M.set(n, ((l = t), u((s = n)) ? a(s) : c(s, l))),
            e.addEventListener("scroll", t, { passive: !0 });
        }
        var s, l;
        const f = P.get(n),
          g = requestAnimationFrame(f);
        return () => {
          var e;
          "function" !== typeof t && t.stop(), cancelAnimationFrame(g);
          const o = j.get(n);
          if (!o) return;
          if ((o.delete(i), o.size)) return;
          const r = P.get(n);
          P.delete(n),
            r &&
              (T(n).removeEventListener("scroll", r),
              null === (e = M.get(n)) || void 0 === e || e(),
              window.removeEventListener("resize", r));
        };
      }
      var X = n(3234),
        Y = n(6681),
        _ = n(8868);
      const q = () => ({
        scrollX: (0, X.B)(0),
        scrollY: (0, X.B)(0),
        scrollXProgress: (0, X.B)(0),
        scrollYProgress: (0, X.B)(0),
      });
      function F({ container: t, target: e, ...n } = {}) {
        const o = (0, Y.h)(q);
        return (
          (0, _.L)(
            () =>
              N(
                ({ x: t, y: e }) => {
                  o.scrollX.set(t.current),
                    o.scrollXProgress.set(t.progress),
                    o.scrollY.set(e.current),
                    o.scrollYProgress.set(e.progress);
                },
                {
                  ...n,
                  container:
                    (null === t || void 0 === t ? void 0 : t.current) || void 0,
                  target:
                    (null === e || void 0 === e ? void 0 : e.current) || void 0,
                }
              ),
            []
          ),
          o
        );
      }
    },
  },
]);
