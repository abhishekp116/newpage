(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [472],
  {
    3718: function (n, e, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/[pageSlug]",
        
        function () {
          return t(3150);
          console.log("pageSlug", window.__NEXT_P)
        },
      ]);
    },
    2541: function (n, e, t) {
      "use strict";
      var r = t(6042),
        i = t(9396),
        o = t(9534),
        c = t(7297),
        a = t(5893),
        s = t(5697),
        d = t.n(s),
        u = t(5178),
        l = t(3052),
        f = t(8665),
        p = t(4651);
      function h() {
        var n = (0, c.Z)([
          "\n  display: inline-block;\n  position: relative;\n\n  :focus {\n    outline-offset: 0.25em;\n    outline: 1px dashed var(--color-black);\n  }\n\n  &:active {\n    outline: none;\n  }\n",
        ]);
        return (
          (h = function () {
            return n;
          }),
          n
        );
      }
      var v = u.ZP.div.withConfig({ componentId: "sc-933a6b5f-0" })(h()),
        m = function (n) {
          var e = n.containerSpread,
            t = n.label,
            c = n.variant,
            s = n.className,
            d = n.link,
            u = n.dotOverwriteTheme,
            h = (0, o.Z)(n, [
              "containerSpread",
              "label",
              "variant",
              "className",
              "link",
              "dotOverwriteTheme",
            ]);
          return (0, a.jsx)(
            f.Z,
            (0, i.Z)((0, r.Z)({}, d, h), {
              children: (0, a.jsx)(
                v,
                (0, i.Z)((0, r.Z)({}, e), {
                  className: s,
                  children: (0, a.jsx)(l.ZP, {
                    dotOverwriteTheme: u,
                    children: (0, a.jsx)(p.Z, {
                      tag: "div",
                      variant: c,
                      children: t,
                    }),
                  }),
                })
              ),
            })
          );
        };
      (m.defaultProps = {
        containerSpread: {},
        label: "a",
        variant: "l2",
        link: {},
        className: null,
        dotOverwriteTheme: null,
      }),
        (m.propTypes = {
          containerSpread: d().object,
          label: d().string.isRequired,
          link: d().object.isRequired,
          className: d().any,
        }),
        (e.Z = m);
    },
    3150: function (n, e, t) {
      "use strict";
      t.r(e),
        t.d(e, {
          __N_SSG: function () {
            return Br;
          },
          default: function () {
            return Wr;
          },
        });
      var r = t(8039),
        i = t(7297),
        o = t(5893),
        c = t(5178),
        a = t(5556),
        s = t(5137),
        d = t(3114),
        u = t(6042),
        l = t(9396),
        f = t(5697),
        p = t.n(f),
        h = t(8785),
        v = t(8556),
        m = t(7786),
        g = t(4651),
        Z = t(2541);
      function x() {
        var n = (0, i.Z)([
          "\n  display: flex;\n  flex-direction: column;\n  gap: 1.75rem;\n  word-break: break-all;\n\n  ",
          " {\n    gap: 2.5rem;\n  }\n",
        ]);
        return (
          (x = function () {
            return n;
          }),
          n
        );
      }
      function w() {
        var n = (0, i.Z)([
          "\n  display: block;\n  max-width: 20ch;\n\n  p {\n    word-break: normal;\n  }\n\n  span {\n    display: block;\n  }\n",
        ]);
        return (
          (w = function () {
            return n;
          }),
          n
        );
      }
      var y = c.ZP.li.withConfig({ componentId: "sc-a3d69f52-0" })(x(), v.qk.s),
        b = (0, c.ZP)(g.Z).withConfig({ componentId: "sc-a3d69f52-1" })(w()),
        j = function (n) {
          var e = n.containerSpread,
            t = n.count,
            r = n.description;
          return (0, o.jsxs)(
            y,
            (0, l.Z)((0, u.Z)({}, e), {
              children: [
                (0, o.jsx)(g.Z, { tag: "p", variant: "h1", children: t }),
                (0, o.jsx)(b, {
                  tag: "div",
                  variant: "b11",
                  children: (0, m.sY)(r, { blokResolvers: { text_link: Z.Z } }),
                }),
              ],
            })
          );
        };
      j.propTypes = {
        count: f.PropTypes.string.isRequired,
        description: f.PropTypes.object.isRequired,
      };
      var P = j;
      function k() {
        var n = (0, i.Z)([
          "\n  background-color: var(--color-black);\n  color: var(--color-white);\n  padding: 3.75rem ",
          " 9rem;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: auto 1fr;\n  gap: 6.5rem;\n\n  ",
          " {\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: 1fr;\n    gap: 2.8rem;\n    padding: 5.5rem ",
          " 7.5rem;\n  }\n\n  ",
          " {\n    padding: 5.5rem ",
          " 7.5rem;\n  }\n",
        ]);
        return (
          (k = function () {
            return n;
          }),
          n
        );
      }
      function C() {
        var n = (0, i.Z)([
          "\n  width: 100%;\n  text-align: center;\n  grid-column: 1;\n  grid-row: 1;\n\n  ",
          " {\n    grid-column: 1;\n    grid-row: 1;\n    text-align: left;\n  }\n",
        ]);
        return (
          (C = function () {
            return n;
          }),
          n
        );
      }
      function T() {
        var n = (0, i.Z)([
          "\n  ",
          " {\n    position: sticky;\n    top: 5.5rem;\n  }\n",
        ]);
        return (
          (T = function () {
            return n;
          }),
          n
        );
      }
      function I() {
        var n = (0, i.Z)([
          "\n  grid-column: 1;\n  grid-row: 2;\n  display: flex;\n  flex-direction: column;\n  gap: 4rem;\n\n  ",
          " {\n    grid-column: 2 / span 2;\n    grid-row: 1;\n    gap: 6.25rem;\n  }\n",
        ]);
        return (
          (I = function () {
            return n;
          }),
          n
        );
      }
      var q = c.ZP.section.withConfig({ componentId: "sc-e4d1aac3-0" })(
          k(),
          (0, h.EV)(0.5),
          v.qk.s,
          (0, h.BT)(1),
          v.qk.m,
          (0, h.hl)(1)
        ),
        _ = c.ZP.header.withConfig({ componentId: "sc-e4d1aac3-1" })(
          C(),
          v.qk.s
        ),
        R = (0, c.ZP)(g.Z).withConfig({ componentId: "sc-e4d1aac3-2" })(
          T(),
          v.qk.s
        ),
        S = c.ZP.div.withConfig({ componentId: "sc-e4d1aac3-3" })(I(), v.qk.s),
        E = (0, a.e)({ fact_entry: P }),
        O = function (n) {
          var e = n.containerSpread,
            t = n.header,
            r = n.entries;
          return (0, o.jsxs)(
            q,
            (0, l.Z)((0, u.Z)({}, e), {
              children: [
                (0, o.jsx)(_, {
                  children: (0, o.jsx)(R, {
                    tag: "h2",
                    variant: "l2",
                    children: t,
                  }),
                }),
                (0, o.jsx)(S, { children: (0, o.jsx)(E, { items: r }) }),
              ],
            })
          );
        };
      (O.defaultProps = { entries: [] }),
        (O.propTypes = {
          header: f.PropTypes.string.isRequired,
          entries: f.PropTypes.arrayOf(f.PropTypes.object).isRequired,
        });
      var H = O,
        V = t(4342);
      function N() {
        var n = (0, i.Z)([
          "\n  display: block;\n\n  width: 100%;\n  height: 50vh;\n\n  ",
          " {\n    height: 70vh;\n  }\n",
        ]);
        return (
          (N = function () {
            return n;
          }),
          n
        );
      }
      function z() {
        var n = (0, i.Z)([
          "\n  width: 100%;\n  height: 100%;\n\n  column-gap: 0;\n\n  ",
          " {\n    column-count: 2;\n  }\n",
        ]);
        return (
          (z = function () {
            return n;
          }),
          n
        );
      }
      function Y() {
        var n = (0, i.Z)([
          "\n  width: 100%;\n  height: 100%;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n\n  ",
          " {\n    flex-direction: column;\n  }\n\n  position: relative;\n",
        ]);
        return (
          (Y = function () {
            return n;
          }),
          n
        );
      }
      function A() {
        var n = (0, i.Z)([
          "\n  position: relative;\n\n  width: 100%;\n  height: 100%;\n",
        ]);
        return (
          (A = function () {
            return n;
          }),
          n
        );
      }
      function M() {
        var n = (0, i.Z)([
          "\n  ",
          ";\n\n  z-index: 2;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n\n  transform: translate(-50%, -50%);\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n",
        ]);
        return (
          (M = function () {
            return n;
          }),
          n
        );
      }
      function B() {
        var n = (0, i.Z)([
          "\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n",
        ]);
        return (
          (B = function () {
            return n;
          }),
          n
        );
      }
      function W() {
        var n = (0, i.Z)([
          "\n  width: max-content;\n  text-align: center;\n  padding-bottom: ",
          ";\n\n  ",
          " {\n    padding-bottom: ",
          ";\n  }\n",
        ]);
        return (
          (W = function () {
            return n;
          }),
          n
        );
      }
      var $ = c.ZP.section.withConfig({ componentId: "sc-aa97a699-0" })(
          N(),
          v.qk.s
        ),
        X = c.ZP.div.withConfig({ componentId: "sc-aa97a699-1" })(z(), v.qk.s),
        D = c.ZP.div.withConfig({ componentId: "sc-aa97a699-2" })(Y(), v.qk.s),
        F = c.ZP.figure.withConfig({ componentId: "sc-aa97a699-3" })(A()),
        G = c.ZP.figcaption.withConfig({ componentId: "sc-aa97a699-4" })(
          M(),
          function (n) {
            return n.$hasMedia && "color: white;mix-blend-mode: difference;";
          }
        ),
        J = c.ZP.div.withConfig({ componentId: "sc-aa97a699-5" })(B()),
        K = (0, c.ZP)(g.Z).withConfig({ componentId: "sc-aa97a699-6" })(
          W(),
          (0, h.EV)(0.5),
          v.qk.s,
          (0, h.hl)(1)
        ),
        L = (0, a.e)({ footer_cta: Z.Z }),
        Q = function (n) {
          var e = n.blocks,
            t = n.containerSpread;
          return (0, o.jsx)(
            $,
            (0, l.Z)((0, u.Z)({}, t), {
              children: (0, o.jsx)(X, {
                children: e.map(function (n) {
                  var e,
                    t = n.title,
                    r = n.CTA,
                    i = n.background,
                    c = n._uid,
                    a = i.length > 0;
                  return (0,
                  o.jsx)(D, { children: (0, o.jsxs)(F, { children: [a && (0, o.jsx)(J, { children: (0, o.jsx)(V.Z, (0, l.Z)((0, u.Z)({}, null === i || void 0 === i ? void 0 : i[0]), { sizes: { xs: "50%" } }), null === (e = i[0]) || void 0 === e ? void 0 : e.id) }), (0, o.jsxs)(G, { $hasMedia: a, children: [(0, o.jsx)(K, { tag: "h2", variant: "b1", children: t }), (0, o.jsx)(L, { items: r, dotOverwriteTheme: a ? "white" : "var(--color-terracotta)" })] })] }) }, c);
                }),
              }),
            })
          );
        },
        U = t(828),
        nn = t(7294),
        en = t(3460),
        tn = t(7423),
        rn = t(578),
        on = t(1208);
      function cn() {
        var n = (0, i.Z)([
          "\n  position: relative;\n  width: 100%;\n\n  height: ",
          ";\n",
        ]);
        return (
          (cn = function () {
            return n;
          }),
          n
        );
      }
      function an() {
        var n = (0, i.Z)([
          "\n  position: sticky;\n  top: 0;\n  width: 100%;\n  height: 100vh;\n\n  overflow: hidden;\n",
        ]);
        return (
          (an = function () {
            return n;
          }),
          n
        );
      }
      function sn() {
        var n = (0, i.Z)(["\n  display: inline-flex;\n"]);
        return (
          (sn = function () {
            return n;
          }),
          n
        );
      }
      var dn = c.ZP.div.withConfig({ componentId: "sc-af8c0a9c-0" })(
          cn(),
          function (n) {
            return n.$height;
          }
        ),
        un = c.ZP.div.withConfig({ componentId: "sc-af8c0a9c-1" })(an()),
        ln = c.ZP.div.withConfig({ componentId: "sc-af8c0a9c-2" })(sn()),
        fn = function (n) {
          var e = n.children,
            t = (0, tn.v)().scrollY,
            r = (0, nn.useRef)(),
            i = (0, U.Z)((0, en.Z)(), 2),
            c = i[0],
            a = i[1].width,
            s = (0, U.Z)((0, en.Z)(), 2),
            d = s[0],
            u = s[1],
            l = u.height,
            f = u.width,
            p = (0, nn.useCallback)(
              function (n) {
                (r.current = n), d(n);
              },
              [d]
            ),
            h = (0, nn.useMemo)(
              function () {
                return 0 !== l && r.current ? r.current.offsetTop : 0;
              },
              [l]
            ),
            v = a - f,
            m = (0, rn.H)(t, [h, h + v], [0, -v]);
          return (0, o.jsx)(dn, {
            ref: p,
            $height: "calc(100vh + ".concat(v, "px)"),
            children: (0, o.jsx)(un, {
              children: (0, o.jsx)(on.m.div, {
                style: { x: m },
                children: (0, o.jsx)(ln, { ref: c, children: e }),
              }),
            }),
          });
        };
      function pn() {
        var n = (0, i.Z)([
          "\n  position: relative;\n  width: 100%;\n  padding-top: 6.5rem;\n",
        ]);
        return (
          (pn = function () {
            return n;
          }),
          n
        );
      }
      function hn() {
        var n = (0, i.Z)([
          "\n  padding-bottom: 6.25rem;\n  padding-right: 1.375rem;\n\n  padding-left: ",
          ";\n\n  ",
          " {\n    padding-left: ",
          ";\n    max-width: 78vw;\n  }\n\n  ",
          " {\n    padding-left: ",
          ";\n  }\n",
        ]);
        return (
          (hn = function () {
            return n;
          }),
          n
        );
      }
      function vn() {
        var n = (0, i.Z)([
          "\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  height: 100%;\n  width: 100%;\n  gap: 15px;\n  padding-left: ",
          ";\n\n  ",
          " {\n    padding: 30px ",
          " 140px;\n  }\n",
        ]);
        return (
          (vn = function () {
            return n;
          }),
          n
        );
      }
      function mn() {
        var n = (0, i.Z)([
          "\n  display: block;\n  width: 100vw;\n  height: 100vh;\n  background: var(--color-off-white);\n\n  ",
          " {\n    max-width: 41.6vw;\n    height: 87vh;\n  }\n",
        ]);
        return (
          (mn = function () {
            return n;
          }),
          n
        );
      }
      var gn = c.ZP.section.withConfig({ componentId: "sc-10b5d393-0" })(pn()),
        Zn = c.ZP.div.withConfig({ componentId: "sc-10b5d393-1" })(
          hn(),
          (0, h.EV)(1),
          v.qk.s,
          (0, h.BT)(1),
          v.qk.m,
          (0, h.hl)(1)
        ),
        xn = c.ZP.div.withConfig({ componentId: "sc-10b5d393-2" })(
          vn(),
          (0, h.EV)(1),
          v.qk.m,
          (0, h.hl)(1)
        ),
        wn = c.ZP.div.withConfig({ componentId: "sc-10b5d393-3" })(
          mn(),
          v.qk.m
        ),
        yn = function (n) {
          var e = n.media;
          return (0, o.jsx)(xn, {
            children: e.map(function (n) {
              var e = n.id,
                t = n.type,
                r = n.asset;
              return (0,
              o.jsx)(wn, { children: (0, o.jsx)(V.Z, { priority: !0, type: t, asset: r, sizes: { xs: "100vw", m: "33vw" } }, e) }, null === r || void 0 === r ? void 0 : r.id);
            }),
          });
        };
      (fn.defaultProps = { description: "", media: [] }),
        (fn.propTypes = {
          description: p().string.isRequired,
          media: p().arrayOf(p().object).isRequired,
        });
      var bn = function (n) {
        var e = n.description,
          t = n.media,
          r = n.containerSpread;
        return (0, o.jsxs)(
          gn,
          (0, l.Z)((0, u.Z)({}, r), {
            children: [
              (0, o.jsx)(Zn, {
                children: (0, o.jsx)(g.Z, {
                  variant: "b1",
                  tag: "p",
                  children: e,
                }),
              }),
              (0, o.jsx)(fn, { children: (0, o.jsx)(yn, { media: t }) }),
            ],
          })
        );
      };
      function jn() {
        var n = (0, i.Z)([
          "\n  padding: 6.25rem ",
          ";\n  display: flex;\n  flex-direction: column;\n  gap: 1.313rem;\n  background-color: var(--color-black);\n  color: var(--color-white);\n\n  ",
          " {\n    gap: 4.875rem;\n    padding: 8.625rem 8.625rem 9.375rem ",
          ";\n  }\n\n  ",
          " {\n    gap: 4.875rem;\n    padding: 8.625rem 13.125rem 9.375rem ",
          ";\n  }\n",
        ]);
        return (
          (jn = function () {
            return n;
          }),
          n
        );
      }
      function Pn() {
        var n = (0, i.Z)([
          "\n  width: 100%;\n  text-align: center;\n\n  ",
          " {\n    text-align: left;\n  }\n",
        ]);
        return (
          (Pn = function () {
            return n;
          }),
          n
        );
      }
      function kn() {
        var n = (0, i.Z)([
          "\n  display: block;\n\n  p + p {\n    margin-top: 1em;\n  }\n\n  ",
          " {\n    p + p {\n      margin-top: 0.75em;\n    }\n\n    p:first-child {\n      text-indent: 1.5em;\n    }\n  }\n",
        ]);
        return (
          (kn = function () {
            return n;
          }),
          n
        );
      }
      var Cn = c.ZP.section.withConfig({ componentId: "sc-b7b6e51a-0" })(
          jn(),
          (0, h.EV)(1),
          v.qk.s,
          (0, h.BT)(1),
          v.qk.m,
          (0, h.hl)(1)
        ),
        Tn = (0, c.ZP)(g.Z).withConfig({ componentId: "sc-b7b6e51a-1" })(
          Pn(),
          v.qk.s
        ),
        In = (0, c.ZP)(g.Z).withConfig({ componentId: "sc-b7b6e51a-2" })(
          kn(),
          v.qk.s
        ),
        qn = function (n) {
          var e = n.containerSpread,
            t = n.header,
            r = n.text;
          return (0, o.jsxs)(
            Cn,
            (0, l.Z)((0, u.Z)({}, e), {
              children: [
                (0, o.jsx)(Tn, { tag: "h2", variant: "l2", children: t }),
                (0, o.jsx)(In, {
                  tag: "div",
                  variant: "b1",
                  children: (0, m.sY)(r),
                }),
              ],
            })
          );
        };
      (qn.defaultProps = { header: "Header", text: {} }),
        (qn.propTypes = {
          header: f.PropTypes.string.isRequired,
          text: f.PropTypes.object.isRequired,
        });
      var _n = qn;
      function Rn() {
        var n = (0, i.Z)(["\n  display: flex;\n  flex-direction: column;\n"]);
        return (
          (Rn = function () {
            return n;
          }),
          n
        );
      }
      function Sn() {
        var n = (0, i.Z)(["\n  display: flex;\n  flex-direction: column;\n"]);
        return (
          (Sn = function () {
            return n;
          }),
          n
        );
      }
      function En() {
        var n = (0, i.Z)([
          "\n  margin-bottom: 0.75rem;\n\n  ",
          " {\n    margin-bottom: 1.25rem;\n  }\n",
        ]);
        return (
          (En = function () {
            return n;
          }),
          n
        );
      }
      function On() {
        var n = (0, i.Z)([
          "\n  display: flex;\n  flex-direction: column;\n  list-style: none;\n",
        ]);
        return (
          (On = function () {
            return n;
          }),
          n
        );
      }
      var Hn = c.ZP.li.withConfig({ componentId: "sc-ef35e0fd-0" })(Rn()),
        Vn = c.ZP.div.withConfig({ componentId: "sc-ef35e0fd-1" })(Sn()),
        Nn = (0, c.ZP)(g.Z).withConfig({ componentId: "sc-ef35e0fd-2" })(
          En(),
          v.qk.s
        ),
        zn = c.ZP.ul.withConfig({ componentId: "sc-ef35e0fd-3" })(On()),
        Yn = (0, a.e)({
          summary_entry_line: function (n) {
            var e = n.containerSpread,
              t = n.text;
            return (0, o.jsx)(
              "li",
              (0, l.Z)((0, u.Z)({}, e), {
                children: (0, o.jsx)(g.Z, {
                  variant: "b12",
                  tag: "p",
                  children: t,
                }),
              })
            );
          },
        }),
        An = function (n) {
          var e = n.containerSpread,
            t = n.header,
            r = n.entries;
          return (0, o.jsx)(Hn, {
            children: (0, o.jsxs)(
              Vn,
              (0, l.Z)((0, u.Z)({}, e), {
                children: [
                  (0, o.jsx)(Nn, { variant: "l2", tag: "h2", children: t }),
                  (0, o.jsx)(zn, { children: (0, o.jsx)(Yn, { items: r }) }),
                ],
              })
            ),
          });
        };
      An.propTypes = {
        header: f.PropTypes.string.isRequired,
        entries: f.PropTypes.array.isRequired,
      };
      var Mn = An;
      function Bn() {
        var n = (0, i.Z)([
          "\n  padding: 5rem ",
          " 7rem;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: auto 1fr;\n  gap: 6.5rem;\n\n  ",
          " {\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: 1fr;\n    gap: 2.8rem;\n    padding: 5.5rem ",
          " 6.25rem;\n  }\n\n  ",
          " {\n    padding: 5.5rem ",
          " 6.25rem;\n  }\n",
        ]);
        return (
          (Bn = function () {
            return n;
          }),
          n
        );
      }
      function Wn() {
        var n = (0, i.Z)([
          "\n  width: 100%;\n  text-align: center;\n  grid-column: 1;\n  grid-row: 1;\n\n  ",
          " {\n    grid-column: 1;\n    grid-row: 1;\n    text-align: left;\n  }\n",
        ]);
        return (
          (Wn = function () {
            return n;
          }),
          n
        );
      }
      function $n() {
        var n = (0, i.Z)([
          "\n  ",
          " {\n    position: sticky;\n    top: 5.5rem;\n  }\n",
        ]);
        return (
          ($n = function () {
            return n;
          }),
          n
        );
      }
      function Xn() {
        var n = (0, i.Z)([
          "\n  grid-column: 1;\n  grid-row: 2;\n  display: flex;\n  flex-direction: column;\n  gap: 2.5rem;\n\n  ",
          " {\n    grid-column: 2 / span 2;\n    grid-row: 1;\n    gap: 4.5rem;\n  }\n",
        ]);
        return (
          (Xn = function () {
            return n;
          }),
          n
        );
      }
      var Dn = c.ZP.section.withConfig({ componentId: "sc-b56d27c1-0" })(
          Bn(),
          (0, h.EV)(1.5),
          v.qk.s,
          (0, h.BT)(1),
          v.qk.m,
          (0, h.hl)(1)
        ),
        Fn = c.ZP.header.withConfig({ componentId: "sc-b56d27c1-1" })(
          Wn(),
          v.qk.s
        ),
        Gn = (0, c.ZP)(g.Z).withConfig({ componentId: "sc-b56d27c1-2" })(
          $n(),
          v.qk.s
        ),
        Jn = c.ZP.div.withConfig({ componentId: "sc-b56d27c1-3" })(
          Xn(),
          v.qk.s
        ),
        Kn = (0, a.e)({ summary_entry: Mn }),
        Ln = function (n) {
          var e = n.containerSpread,
            t = n.header,
            r = n.sections;
          return (0, o.jsxs)(
            Dn,
            (0, l.Z)((0, u.Z)({}, e), {
              children: [
                (0, o.jsx)(Fn, {
                  children: (0, o.jsx)(Gn, {
                    tag: "h2",
                    variant: "l2",
                    children: t,
                  }),
                }),
                (0, o.jsx)(Jn, { children: (0, o.jsx)(Kn, { items: r }) }),
              ],
            })
          );
        };
      (Ln.defaultProps = { sections: [] }),
        (Ln.propTypes = {
          header: f.PropTypes.string.isRequired,
          sections: f.PropTypes.arrayOf(f.PropTypes.object).isRequired,
        });
      var Qn = Ln,
        Un = t(3775),
        ne = t(1482);
      function ee() {
        var n = (0, i.Z)([
          "\n  min-height: 100vh;\n  padding-top: 5rem;\n\n  display: flex;\n  flex-direction: column;\n  background-color: var(--color-black);\n  color: var(--color-white);\n\n  ",
          " {\n    align-items: center;\n    justify-content: center;\n    padding-top: 0;\n  }\n",
        ]);
        return (
          (ee = function () {
            return n;
          }),
          n
        );
      }
      function te() {
        var n = (0, i.Z)([
          "\n  position: absolute;\n  width: 100%;\n  z-index: 1;\n  padding-left: ",
          ";\n\n  ",
          " {\n    display: flex;\n    flex-direction: column;\n\n    width: 100%;\n    max-width: 41.25rem;\n    padding-left: 0;\n    text-align: center;\n  }\n",
        ]);
        return (
          (te = function () {
            return n;
          }),
          n
        );
      }
      function re() {
        var n = (0, i.Z)([
          "\n  text-align: center;\n  margin-bottom: 1.25rem;\n\n  ",
          " {\n    margin-bottom: 1rem;\n  }\n",
        ]);
        return (
          (re = function () {
            return n;
          }),
          n
        );
      }
      function ie() {
        var n = (0, i.Z)([
          "\n  margin-top: 1.125rem;\n  text-align: center;\n\n  ",
          " {\n    margin-top: 2.125rem;\n  }\n",
        ]);
        return (
          (ie = function () {
            return n;
          }),
          n
        );
      }
      function oe() {
        var n = (0, i.Z)([
          "\n  position: relative;\n  padding: 20% 0 0 ",
          ";\n  flex-grow: 1;\n  display: grid;\n  align-items: end;\n\n  ",
          " {\n    display: block;\n    flex-grow: 0;\n    padding: 0;\n    width: ",
          ";\n  }\n\n  ",
          " {\n    width: ",
          ";\n  }\n",
        ]);
        return (
          (oe = function () {
            return n;
          }),
          n
        );
      }
      function ce() {
        var n = (0, i.Z)(["\n  position: relative;\n  ", ";\n"]);
        return (
          (ce = function () {
            return n;
          }),
          n
        );
      }
      var ae = c.ZP.section.withConfig({ componentId: "sc-48e9c86f-0" })(
          ee(),
          v.qk.s
        ),
        se = (0, c.ZP)(Un.Z).withConfig({ componentId: "sc-48e9c86f-1" })(
          te(),
          (0, h.EV)(1),
          v.qk.s
        ),
        de = (0, c.ZP)(g.Z).withConfig({ componentId: "sc-48e9c86f-2" })(
          re(),
          v.qk.s
        ),
        ue = c.ZP.div.withConfig({ componentId: "sc-48e9c86f-3" })(
          ie(),
          v.qk.s
        ),
        le = c.ZP.div.withConfig({ componentId: "sc-48e9c86f-4" })(
          oe(),
          (0, h.EV)(1.5),
          v.qk.s,
          (0, h.BT)(18),
          v.qk.m,
          (0, h.hl)(14)
        ),
        fe = c.ZP.div.withConfig({ componentId: "sc-48e9c86f-5" })(
          ce(),
          (0, ne.Dm)("2/3")
        ),
        pe = (0, a.e)({ text_link: Z.Z }),
        he = function (n) {
          var e = n.header,
            t = n.partners,
            r = n.media,
            i = n.link,
            c = n.containerSpread;
          return (0, o.jsxs)(
            ae,
            (0, l.Z)((0, u.Z)({}, c), {
              children: [
                (0, o.jsxs)(se, {
                  children: [
                    (0, o.jsx)(de, { tag: "h2", variant: "l2", children: e }),
                    (0, o.jsx)(g.Z, {
                      tag: "div",
                      variant: "b13",
                      children: (0, m.sY)(t),
                    }),
                    (null === i || void 0 === i ? void 0 : i[0]) &&
                      (0, o.jsx)(ue, {
                        children: (0, o.jsx)(pe, { items: i }),
                      }),
                  ],
                }),
                (0, o.jsx)(le, {
                  children: (0, o.jsx)(fe, {
                    children: (0, o.jsx)(V.Z, {
                      media: r,
                      sizes: { s: "95vw", m: "33vw" },
                    }),
                  }),
                }),
              ],
            })
          );
        };
      (he.defaultProps = {
        header: "Header",
        partners: [],
        media: [],
        link: [],
      }),
        (he.propTypes = {
          header: f.PropTypes.string.isRequired,
          partners: f.PropTypes.object.isRequired,
          media: f.PropTypes.array.isRequired,
          link: f.PropTypes.array,
        });
      var ve = he,
        me = t(7650),
        ge = t(5820),
        Ze = t(1083),
        xe = function () {
          for (var n = arguments.length, e = new Array(n), t = 0; t < n; t++)
            e[t] = arguments[t];
          return (0, nn.useCallback)(function (n) {
            e.forEach(function (e) {
              "function" === typeof e
                ? e(n)
                : "object" === typeof e && null !== e && (e.current = n);
            });
          }, e);
        },
        we = t(9054),
        ye = {
          show: function (n) {
            return {
              y: 0,
              transition: { duration: 0.65, delay: (0, U.Z)(n, 2)[1] },
            };
          },
          hide: function (n) {
            var e = (0, U.Z)(n, 2);
            return { y: e[0], transition: { duration: 0.65, delay: e[1] } };
          },
        };
      function be() {
        var n = (0, i.Z)([
          "\n  background-color: var(--color-off-white);\n  position: relative;\n\n  ",
          " {\n    background-color: initial;\n    margin-top: -25vh;\n    z-index: -1;\n  }\n",
        ]);
        return (
          (be = function () {
            return n;
          }),
          n
        );
      }
      function je() {
        var n = (0, i.Z)([
          "\n  display: none;\n\n  ",
          " {\n    background-color: var(--color-off-white);\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: calc(100% + 100vh);\n    transform: translateY(-100vh);\n\n    opacity: 0;\n  }\n",
        ]);
        return (
          (je = function () {
            return n;
          }),
          n
        );
      }
      function Pe() {
        var n = (0, i.Z)(["\n  position: absolute;\n  inset: 0;\n"]);
        return (
          (Pe = function () {
            return n;
          }),
          n
        );
      }
      function ke() {
        var n = (0, i.Z)([
          "\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: sticky;\n  inset: 0;\n  height: 100%;\n  max-height: 100vh;\n",
        ]);
        return (
          (ke = function () {
            return n;
          }),
          n
        );
      }
      function Ce() {
        var n = (0, i.Z)([
          "\n  display: inline-block;\n  text-align: center;\n  text-overflow: ellipsis;\n  position: absolute;\n  overflow: hidden;\n",
        ]);
        return (
          (Ce = function () {
            return n;
          }),
          n
        );
      }
      function Te() {
        var n = (0, i.Z)(["\n  overflow: hidden;\n"]);
        return (
          (Te = function () {
            return n;
          }),
          n
        );
      }
      function Ie() {
        var n = (0, i.Z)(["\n  height: 100vh;\n"]);
        return (
          (Ie = function () {
            return n;
          }),
          n
        );
      }
      function qe() {
        var n = (0, i.Z)([
          "\n  display: none;\n\n  ",
          " {\n    display: block;\n    height: 100vh;\n  }\n",
        ]);
        return (
          (qe = function () {
            return n;
          }),
          n
        );
      }
      function _e() {
        var n = (0, i.Z)([
          "\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: sticky;\n  inset: 0;\n  width: 100%;\n  height: 100vh;\n",
        ]);
        return (
          (_e = function () {
            return n;
          }),
          n
        );
      }
      var Re = c.ZP.section.withConfig({ componentId: "sc-58ac4adb-0" })(
          be(),
          v.qk.s
        ),
        Se = (0, c.ZP)(on.m.div).withConfig({ componentId: "sc-58ac4adb-1" })(
          je(),
          v.qk.s
        ),
        Ee = c.ZP.div.withConfig({ componentId: "sc-58ac4adb-2" })(Pe()),
        Oe = c.ZP.div.withConfig({ componentId: "sc-58ac4adb-3" })(ke()),
        He = c.ZP.div.withConfig({ componentId: "sc-58ac4adb-4" })(Ce()),
        Ve = c.ZP.div.withConfig({ componentId: "sc-58ac4adb-5" })(Te()),
        Ne = c.ZP.div.withConfig({ componentId: "sc-58ac4adb-6" })(Ie()),
        ze = c.ZP.div.withConfig({ componentId: "sc-58ac4adb-7" })(
          qe(),
          v.qk.s
        ),
        Ye = (0, c.ZP)(on.m.div).withConfig({ componentId: "sc-58ac4adb-8" })(
          _e()
        ),
        Ae = "subquote-1",
        Me = "subquote-2",
        Be = function (n) {
          var e = n.containerSpread,
            t = n.text_line_one,
            r = n.text_line_two,
            i = n.text_line_three,
            c = n.text_line_four,
            a = (0, tn.v)().scrollY,
            s = (0, nn.useState)({}),
            d = s[0],
            f = s[1],
            p = (0, nn.useRef)(),
            h = (0, Ze.Z)("s"),
            v = (0, U.Z)((0, me.YD)({ threshold: 0 }), 2),
            m = v[0],
            g = v[1],
            Z = (0, U.Z)((0, me.YD)({ threshold: 0.5 }), 2),
            x = Z[0],
            w = Z[1];
          (0, nn.useEffect)(
            function () {
              f(function (n) {
                return (0, l.Z)((0, u.Z)({}, n), { 1: g });
              });
            },
            [g]
          ),
            (0, nn.useEffect)(
              function () {
                f(function (n) {
                  return (0, l.Z)((0, u.Z)({}, n), { 2: w });
                });
              },
              [w]
            );
          var y = (function (n) {
              var e,
                t,
                r = parseInt(
                  null ===
                    (e = Object.entries(n)
                      .filter(function (n) {
                        return (0, U.Z)(n, 2)[1];
                      })
                      .sort(function (n, e) {
                        return (0, U.Z)(n, 1)[0] >= (0, U.Z)(e, 1)[0] ? -1 : 1;
                      })) ||
                    void 0 === e ||
                    null === (t = e[0]) ||
                    void 0 === t
                    ? void 0
                    : t[0]
                ),
                i = (0, nn.useRef)(isNaN(r) ? 1 : r);
              return (
                (0, nn.useEffect)(
                  function () {
                    isNaN(r) || (i.current = r);
                  },
                  [r]
                ),
                isNaN(r) ? i.current : r
              );
            })(d),
            b = (0, U.Z)((0, en.Z)(), 2),
            j = b[0],
            P = b[1].height,
            k = xe(p, j),
            C = (0, nn.useMemo)(
              function () {
                return 0 === P || null == p.current ? 0 : p.current.offsetTop;
              },
              [P, p]
            ),
            T = 0.5 * (0, we.Z)().height,
            I = function (n) {
              return (0, rn.H)(a, [C, C + T], n);
            },
            q = I(["-15%", "0%"]),
            _ = I([0, 1]),
            R = h && {
              height: "calc(100vh + ".concat(T, "px)"),
              y: q,
              opacity: _,
            };
          return (0, o.jsxs)(
            Re,
            (0, l.Z)((0, u.Z)({ ref: k }, e), {
              children: [
                (0, o.jsx)(Se, { style: { opacity: _ } }),
                (0, o.jsx)(Ee, {
                  children: (0, o.jsx)(Oe, {
                    children: (0, o.jsx)(Ye, {
                      style: R,
                      children: (0, o.jsxs)(ge.M, {
                        children: [
                          1 === y &&
                            (0, o.jsx)(We, { lines: [t, r], y: "-100%" }, Ae),
                          2 === y &&
                            (0, o.jsx)(We, { lines: [i, c], y: "100%" }, Me),
                        ],
                      }),
                    }),
                  }),
                }),
                (0, o.jsx)(Ne, { ref: m }),
                (0, o.jsx)(Ne, { ref: x }),
                (0, o.jsx)(ze, {}),
              ],
            })
          );
        },
        We = function (n) {
          var e = n.lines,
            t = n.y;
          return (0, o.jsxs)(He, {
            children: [
              (0, o.jsx)($e, { text: e[0], y: t, delay: 0 }),
              (0, o.jsx)($e, { text: e[1], y: t, delay: 0.1 }),
            ],
          });
        },
        $e = function (n) {
          var e = n.text,
            t = n.y,
            r = n.delay;
          return (0, o.jsx)(Ve, {
            children: (0, o.jsx)(on.m.div, {
              variants: ye,
              initial: { y: t },
              animate: "show",
              exit: "hide",
              custom: [t, r],
              children: (0, o.jsx)(g.Z, {
                tag: "p",
                variant: "b2",
                children: e,
              }),
            }),
          });
        };
      (Be.defaultProps = {
        text_line_one: "",
        text_line_two: "",
        text_line_three: "",
        text_line_four: "",
      }),
        (Be.propTypes = {
          text_line_one: f.PropTypes.string.isRequired,
          text_line_two: f.PropTypes.string.isRequired,
          text_line_three: f.PropTypes.string.isRequired,
          text_line_four: f.PropTypes.string.isRequired,
        });
      var Xe = Be,
        De = t(2808),
        Fe = t(1915);
      function Ge() {
        var n = (0, i.Z)([
          "\n  position: relative;\n  width: 70vw;\n  min-width: 70vw;\n  height: 50vh;\n\n  transform-origin: 20% 35%;\n\n  &:last-of-type {\n    margin-right: ",
          ";\n  }\n\n  ",
          " {\n    transform-origin: 50% -10%;\n    justify-content: left;\n    width: 100%;\n    min-width: 100%;\n    padding: unset;\n    height: initial;\n\n    &:last-of-type {\n      margin-right: unset;\n    }\n  }\n",
        ]);
        return (
          (Ge = function () {
            return n;
          }),
          n
        );
      }
      function Je() {
        var n = (0, i.Z)([
          "\n  color: var(--color-white);\n  display: inline-block;\n  position: absolute;\n  z-index: 1;\n  left: 1.25rem;\n  bottom: 1.25rem;\n  right: 1.25rem;\n  width: 12.5rem;\n",
        ]);
        return (
          (Je = function () {
            return n;
          }),
          n
        );
      }
      function Ke() {
        var n = (0, i.Z)(["\n  display: inline;\n"]);
        return (
          (Ke = function () {
            return n;
          }),
          n
        );
      }
      function Le() {
        var n = (0, i.Z)(["\n  text-transform: uppercase;\n"]);
        return (
          (Le = function () {
            return n;
          }),
          n
        );
      }
      function Qe() {
        var n = (0, i.Z)([
          "\n  white-space: pre-wrap;\n  text-transform: initial;\n",
        ]);
        return (
          (Qe = function () {
            return n;
          }),
          n
        );
      }
      function Ue() {
        var n = (0, i.Z)([
          "\n  width: 70vw;\n  height: 50vh;\n\n  ",
          " {\n    height: 85vh;\n    width: 29vw;\n  }\n",
        ]);
        return (
          (Ue = function () {
            return n;
          }),
          n
        );
      }
      function nt() {
        var n = (0, i.Z)([
          "\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n\n  overflow: hidden;\n\n  ",
          " {\n    top: 50%;\n    left: 50%;\n    width: ",
          "%;\n    transform: translate(-50%, -50%);\n  }\n",
        ]);
        return (
          (nt = function () {
            return n;
          }),
          n
        );
      }
      function et() {
        var n = (0, i.Z)([
          "\n  position: relative;\n  height: 100%;\n  width: 100%;\n",
        ]);
        return (
          (et = function () {
            return n;
          }),
          n
        );
      }
      var tt = [1, 0.8771929824561404],
        rt = [1, 1.14],
        it = (0, c.ZP)(on.m.li).withConfig({ componentId: "sc-8c1a962d-0" })(
          Ge(),
          (0, h.EV)(1),
          v.qk.s
        ),
        ot = (0, c.ZP)(on.m.div).withConfig({ componentId: "sc-8c1a962d-1" })(
          Je()
        ),
        ct = c.ZP.div.withConfig({ componentId: "sc-8c1a962d-2" })(Ke()),
        at = (0, c.ZP)(g.Z).withConfig({ componentId: "sc-8c1a962d-3" })(Le()),
        st = (0, c.ZP)(g.Z).withConfig({ componentId: "sc-8c1a962d-4" })(Qe()),
        dt = c.ZP.div.withConfig({ componentId: "sc-8c1a962d-5" })(
          Ue(),
          v.qk.s
        ),
        ut = (0, c.ZP)(on.m.div).withConfig({ componentId: "sc-8c1a962d-6" })(
          nt(),
          v.qk.s,
          114
        ),
        lt = (0, c.ZP)(on.m.div).withConfig({ componentId: "sc-8c1a962d-7" })(
          et()
        ),
        ft = function (n) {
          var e = n.containerSpread,
            t = n.title,
            r = n.description,
            i = n.asset,
            c = n.index,
            a = (0, tn.v)().scrollY,
            s = (0, nn.useContext)(Fe.W7),
            d = s.scrollRangeVertical,
            f = s.scrollRangeIntro,
            p = s.scrollRangeHorizontal,
            h = s.introTextVisible,
            v = s.introTextAnimatedIn,
            m = (0, Ze.Z)("s"),
            g = (0, rn.H)(a, d, [m ? 1.6 : 1.5, 1]),
            Z = (0, rn.H)(a, d, ["120%", "0%"]),
            x = (0, rn.H)(a, d, [0, 1]),
            w = (0, rn.H)(a, p, ["".concat(18 * c, "%"), "0%"]),
            y = (0, rn.H)(a, p, tt),
            b = (0, rn.H)(a, p, rt),
            j = (0, rn.H)(a, f, ["20%", "-50%"]),
            P = (0, rn.H)(a, f, ["-70%", "0%"]),
            k = (0, rn.H)(a, d, ["30%", "0%"]),
            C = (0, rn.H)(a, d, ["50%", "0%"]),
            T = {
              x: m ? w : c > 0 ? C : w,
              scale: 0 === c ? g : 1,
              y: c > 0 ? Z : 0,
              opacity: c > 0 ? x : 1,
            },
            I = m && { scaleX: y, x: "-50%", y: 0 === c ? j : "-50%" },
            q = m && { scaleX: b, x: c > 0 ? k : 0, y: 0 === c ? P : 0 },
            _ = m ? (h ? 0 : 1) : v ? 1 : 0;
          return (0, o.jsxs)(
            it,
            (0, l.Z)((0, u.Z)({ style: T }, e), {
              children: [
                (0, o.jsx)(dt, {
                  children: (0, o.jsx)(ut, {
                    style: I,
                    children: (0, o.jsx)(lt, {
                      style: q,
                      children: (0, o.jsx)(V.Z, {
                        media: i,
                        sizes: { xs: "100vw", s: "33vw" },
                      }),
                    }),
                  }),
                }),
                (0, o.jsxs)(ot, {
                  animate: { opacity: _ },
                  children: [
                    (0, o.jsx)(at, { tag: "span", variant: "l2", children: t }),
                    (0, o.jsxs)(ct, {
                      children: [
                        (0, o.jsx)("span", { children: " \xb7 " }),
                        (0, o.jsx)(st, {
                          tag: "span",
                          variant: "l3",
                          children: r,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          );
        };
      ft.propTypes = {
        title: f.PropTypes.string.isRequired,
        description: f.PropTypes.string,
        asset: f.PropTypes.array.isRequired,
      };
      var pt = ft,
        ht = function (n, e, t, r, i, o) {
          var c = (0, tn.v)().scrollY,
            a = (0, Ze.Z)("s"),
            s = (0, nn.useState)(!1),
            d = s[0],
            u = s[1],
            l = (0, nn.useState)(!1),
            f = l[0],
            p = l[1],
            h = (0, nn.useState)(!1),
            v = h[0],
            m = h[1];
          return (
            (0, nn.useEffect)(
              function () {
                var n = o[0],
                  s = o[1] + (a ? 0.85 * e : 0),
                  l = c.onChange(function () {
                    var e = c.get();
                    e < i[0] ||
                      e > r[1] ||
                      ((function (e) {
                        var t = e >= n;
                        t !== d && u(t);
                      })(e),
                      (function (n) {
                        var e = n >= (a ? i[1] + t / 3 : o[1] - 40);
                        e !== f && p(e);
                      })(e),
                      (function (n) {
                        var e = n <= s;
                        e !== v && m(e);
                      })(e));
                  });
                return function () {
                  l();
                };
              },
              [n, v, e, c, t, r, f, i, o, d]
            ),
            {
              introTextVisible: v,
              introTextAnimatedIn: f,
              hasWhiteBackground: d,
            }
          );
        };
      function vt() {
        var n = (0, i.Z)(["\n  position: relative;\n"]);
        return (
          (vt = function () {
            return n;
          }),
          n
        );
      }
      function mt() {
        var n = (0, i.Z)([
          "\n  background-color: var(--color-white);\n  position: absolute;\n  top: 0;\n  left: 0;\n\n  width: 100%;\n  height: calc(100% + 50vh);\n  transform: translateY(-50vh);\n\n  opacity: 0;\n",
        ]);
        return (
          (mt = function () {
            return n;
          }),
          n
        );
      }
      function gt() {
        var n = (0, i.Z)([
          "\n  position: sticky;\n  top: 0;\n  width: 100%;\n  overflow: hidden;\n\n  ",
          " {\n    height: 100vh;\n  }\n",
        ]);
        return (
          (gt = function () {
            return n;
          }),
          n
        );
      }
      function Zt() {
        var n = (0, i.Z)(["\n  ", "\n"]);
        return (
          (Zt = function () {
            return n;
          }),
          n
        );
      }
      function xt() {
        var n = (0, i.Z)([
          "\n  display: inline-flex;\n  flex-direction: row;\n  align-items: center;\n  flex-direction: column-reverse;\n\n  ",
          " {\n    flex-direction: initial;\n  }\n",
        ]);
        return (
          (xt = function () {
            return n;
          }),
          n
        );
      }
      var wt = c.ZP.div.withConfig({ componentId: "sc-e77605e0-0" })(vt()),
        yt = (0, c.ZP)(on.m.div).withConfig({ componentId: "sc-e77605e0-1" })(
          mt()
        ),
        bt = (0, c.ZP)(on.m.div).withConfig({ componentId: "sc-e77605e0-2" })(
          gt(),
          v.qk.s
        ),
        jt = (0, c.ZP)(on.m.div).withConfig({ componentId: "sc-e77605e0-3" })(
          Zt(),
          function (n) {
            return (
              n.$hasWhiteBackground && "background-color: var(--color-white);"
            );
          }
        ),
        Pt = c.ZP.div.withConfig({ componentId: "sc-e77605e0-4" })(
          xt(),
          v.qk.s
        ),
        kt = function (n) {
          var e = n.children,
            t = (0, tn.v)().scrollY,
            r = (0, nn.useRef)(),
            i = (0, Ze.Z)("s"),
            c = (0, we.Z)().height,
            a = (0, U.Z)((0, en.Z)(), 2),
            s = a[0],
            d = a[1],
            u = d.height,
            l = d.width,
            f = (0, nn.useCallback)(
              function (n) {
                (r.current = n), s(n);
              },
              [s]
            ),
            p = (0, U.Z)((0, en.Z)(), 2),
            h = p[0],
            v = p[1].width,
            m = (0, nn.useMemo)(
              function () {
                return 0 !== u && r.current ? r.current.offsetTop : 0;
              },
              [u]
            ),
            g = 0.4 * c,
            Z = (0, nn.useMemo)(
              function () {
                return [m - c / 2, m];
              },
              [m, c]
            ),
            x = (0, nn.useMemo)(
              function () {
                return [Z[1], Z[1] + g];
              },
              [Z, g]
            ),
            w = v - l,
            y = (0, nn.useMemo)(
              function () {
                return [x[1], x[1] + w];
              },
              [w, x]
            ),
            b = (0, rn.H)(t, y, [0, -1 * w]),
            j = ht(m, w, g, y, Z, x),
            P = j.introTextVisible,
            k = j.introTextAnimatedIn,
            C = j.hasWhiteBackground,
            T = (0, rn.H)(t, Z, [0, 1]),
            I = (0, nn.useMemo)(
              function () {
                return {
                  scrollRangeIntro: Z,
                  scrollRangeVertical: x,
                  scrollRangeHorizontal: y,
                  horizontalScrollSpace: w,
                  introTextAnimatedIn: k,
                  introTextVisible: P,
                };
              },
              [Z, x, y, w, k, P]
            );
          return (0, o.jsx)(Fe.W7.Provider, {
            value: I,
            children: (0, o.jsxs)(wt, {
              ref: f,
              style: {
                height: i
                  ? "calc(100vh + ".concat(w, "px + ", 50, "vh)")
                  : "calc(100vh + ".concat(v, "px)"),
              },
              children: [
                i && (0, o.jsx)(yt, { style: { opacity: T } }),
                (0, o.jsx)(bt, {
                  children: (0, o.jsx)(jt, {
                    style: { x: b },
                    $hasWhiteBackground: C,
                    children: (0, o.jsx)(Pt, { ref: h, children: e }),
                  }),
                }),
              ],
            }),
          });
        },
        Ct = t(3052);
      function Tt() {
        var n = (0, i.Z)([
          "\n  display: inline-block;\n  position: relative;\n\n  &:focus {\n    outline-offset: 0.25em;\n    outline: 1px dashed var(--color-black);\n  }\n\n  &:active {\n    outline: none;\n  }\n",
        ]);
        return (
          (Tt = function () {
            return n;
          }),
          n
        );
      }
      function It() {
        var n = (0, i.Z)([
          "\n  position: relative;\n  z-index: 1;\n\n  ",
          " {\n    color: var(--color-white);\n    mix-blend-mode: difference;\n  }\n",
        ]);
        return (
          (It = function () {
            return n;
          }),
          n
        );
      }
      function qt() {
        var n = (0, i.Z)([
          "\n  margin-top: 2rem;\n  padding: 0rem 2.2rem 0rem ",
          ";\n\n  ",
          " {\n    padding-left: ",
          ";\n    width: 100rem;\n    max-width: 80vw;\n  }\n",
        ]);
        return (
          (qt = function () {
            return n;
          }),
          n
        );
      }
      function _t() {
        var n = (0, i.Z)(["\n  ", " {\n    margin-top: 1.5rem;\n  }\n"]);
        return (
          (_t = function () {
            return n;
          }),
          n
        );
      }
      var Rt = c.ZP.div.withConfig({ componentId: "sc-97311f25-0" })(Tt()),
        St = (0, c.ZP)(on.m.div).withConfig({ componentId: "sc-97311f25-1" })(
          It(),
          v.qk.s
        ),
        Et = c.ZP.div.withConfig({ componentId: "sc-97311f25-2" })(
          qt(),
          (0, h.EV)(1),
          v.qk.s,
          (0, h.hl)(1)
        ),
        Ot = c.ZP.button.withConfig({ componentId: "sc-97311f25-3" })(
          _t(),
          v.qk
        ),
        Ht = { duration: 1.3, ease: [0.49, 0.03, 0.13, 0.99] },
        Vt = function (n) {
          var e = n.text,
            t = n.label,
            r = n.containerWidth,
            i = (0, tn.v)().scrollY,
            c = (0, Ze.Z)("s"),
            a = (0, nn.useContext)(Fe.W7),
            s = a.scrollRangeHorizontal,
            d = a.scrollRangeVertical,
            f = a.horizontalScrollSpace,
            p = a.introTextAnimatedIn,
            h = a.introTextVisible,
            v = (0, rn.H)(i, s, [0, f]),
            m = (0, rn.H)(i, d, [0, 1]),
            Z = { y: p ? 0 : 190, opacity: p && h ? 1 : 0 },
            x = {
              y: (0, rn.H)(i, d, ["200%", "0%"]),
              opacity: m,
              x: (0, rn.H)(i, s, [0, 1 * f]),
              top: "100%",
              left: "-70vw",
              width: "90vw",
            },
            w = { y: (0, rn.H)(i, d, ["100%", "0%"]) },
            y = (0, De.Z)().handleOverlayClick;
          return (0, o.jsx)(St, {
            style: c ? { x: v, width: r, maxWidth: r } : x,
            children: (0, o.jsxs)(Et, {
              children: [
                (0, o.jsx)(on.m.div, {
                  animate: c && Z,
                  transition: Ht,
                  children: (0, o.jsx)(g.Z, {
                    variant: "b2",
                    tag: "p",
                    children: e,
                  }),
                }),
                (0, o.jsx)(on.m.div, {
                  animate: c ? Z : w,
                  transition: (0, l.Z)((0, u.Z)({}, Ht), {
                    delay: p ? 0.06 : 0,
                  }),
                  children: (0, o.jsx)(Nt, { label: t, onClick: y }),
                }),
              ],
            }),
          });
        },
        Nt = function (n) {
          var e = n.label,
            t = n.onClick;
          return (0, o.jsx)(Ot, {
            onClick: t,
            children: (0, o.jsx)(Rt, {
              children: (0, o.jsx)(Ct.ZP, {
                dotOverwriteTheme: "#3C7ECC",
                children: (0, o.jsx)(g.Z, {
                  tag: "div",
                  variant: "l2",
                  children: e,
                }),
              }),
            }),
          });
        };
      function zt() {
        var n = (0, i.Z)([
          "\n  padding-bottom: 3rem;\n  z-index: var(--z-content);\n\n  ",
          " {\n    width: 100%;\n    padding: initial;\n    margin-top: -100vh;\n  }\n",
        ]);
        return (
          (zt = function () {
            return n;
          }),
          n
        );
      }
      function Yt() {
        var n = (0, i.Z)([
          "\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 1.25rem;\n  padding: 3.75rem 0rem 0rem ",
          ";\n\n  height: 100%;\n\n  overflow: visible;\n\n  ",
          " {\n    gap: ",
          "rem;\n    width: 100vw;\n    min-width: 100vw;\n    padding: 3.75rem ",
          "rem 4.4rem;\n  }\n",
        ]);
        return (
          (Yt = function () {
            return n;
          }),
          n
        );
      }
      function At() {
        var n = (0, i.Z)([
          "\n  text-align: center;\n  width: 100%;\n  padding-bottom: 3.4rem;\n\n  ",
          " {\n    text-align: left;\n    padding-bottom: 3.75rem;\n  }\n",
        ]);
        return (
          (At = function () {
            return n;
          }),
          n
        );
      }
      function Mt() {
        var n = (0, i.Z)([
          "\n  display: block;\n\n  p + p {\n    margin-top: 1em;\n  }\n\n  ",
          " {\n    p + p {\n      margin-top: 0.75em;\n    }\n\n    p:first-child {\n      text-indent: 1.5em;\n    }\n  }\n",
        ]);
        return (
          (Mt = function () {
            return n;
          }),
          n
        );
      }
      var Bt = c.ZP.section.withConfig({ componentId: "sc-ac368240-0" })(
          zt(),
          v.qk.s
        ),
        Wt = 3.75,
        $t = c.ZP.ul.withConfig({ componentId: "sc-ac368240-1" })(
          Yt(),
          (0, h.EV)(1),
          v.qk.s,
          1.875,
          Wt
        ),
        Xt = (0, c.ZP)(g.Z).withConfig({ componentId: "sc-ac368240-2" })(
          At(),
          v.qk.s
        ),
        Dt = (0, c.ZP)(g.Z).withConfig({ componentId: "sc-ac368240-3" })(
          Mt(),
          v.qk.s
        ),
        Ft = (0, a.e)({ service_entry: pt }),
        Gt = function (n) {
          var e = n.containerSpread,
            t = n.text,
            r = n.service,
            i = n.overlay_text,
            c = n.overlay_title,
            a = n.overlay_label,
            s = (0, De.Z)().setOverlayContent;
          (0, nn.useEffect)(
            function () {
              s(
                (function (n) {
                  var e = n.title,
                    t = n.text;
                  return (0, o.jsxs)(o.Fragment, {
                    children: [
                      (0, o.jsx)(Xt, { variant: "l2", tag: "p", children: e }),
                      (0, o.jsx)(Dt, {
                        variant: "b2",
                        tag: "div",
                        children: (0, m.sY)(t),
                      }),
                    ],
                  });
                })({ title: c, text: i })
              );
            },
            [i, c, s]
          );
          var d = "(100vw - "
              .concat(7.5, "rem - ")
              .concat(3.75, "rem) / ")
              .concat(r.length),
            f = "calc( ((100vw - "
              .concat(d, ") / ")
              .concat(r.length - 1, ") - ")
              .concat(Wt, "rem )");
          return (0, o.jsx)(
            Bt,
            (0, l.Z)((0, u.Z)({}, e), {
              children: (0, o.jsxs)(kt, {
                children: [
                  (0, o.jsx)(Vt, { text: t, label: a, containerWidth: f }),
                  (0, o.jsx)($t, {
                    children: (0, o.jsx)(Ft, { items: r.slice(0, 3) }),
                  }),
                ],
              }),
            })
          );
        };
      (Gt.defaultProps = { text: "", link: [], service: [] }),
        (Gt.propTypes = {
          text: f.PropTypes.string.isRequired,
          service: f.PropTypes.arrayOf(f.PropTypes.object).isRequired,
          link: f.PropTypes.arrayOf(f.PropTypes.object),
        });
      var Jt = Gt,
        Kt = t(5152),
        Lt = t.n(Kt),
        Qt = t(8726);
      function Ut() {
        var n = (0, i.Z)([
          "\n  display: grid;\n  grid-template-columns: repeat(8, 1fr);\n  grid-template-rows: auto;\n  grid-column-gap: 1.25rem;\n  padding-bottom: 5rem;\n\n  ",
          " {\n    grid-template-columns: repeat(12, 1fr);\n    padding-bottom: 5.5rem;\n  }\n",
        ]);
        return (
          (Ut = function () {
            return n;
          }),
          n
        );
      }
      function nr() {
        var n = (0, i.Z)([
          "\n  grid-column: 2 / span 6;\n  margin: 13.75rem 0 9.375rem 0;\n  text-align: center;\n\n  span p,\n  a p {\n    margin-top: 2.5rem;\n  }\n\n  ",
          " {\n    grid-column: 4 / span 6;\n  }\n",
        ]);
        return (
          (nr = function () {
            return n;
          }),
          n
        );
      }
      function er() {
        var n = (0, i.Z)(["\n  margin-top: 2.5rem;\n"]);
        return (
          (er = function () {
            return n;
          }),
          n
        );
      }
      var tr = Lt()(
          function () {
            return t.e(782).then(t.bind(t, 6782));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [6782];
              },
            },
            ssr: !1,
          }
        ),
        rr = c.ZP.section.withConfig({ componentId: "sc-5d55c367-0" })(
          Ut(),
          v.qk.s
        ),
        ir = c.ZP.div.withConfig({ componentId: "sc-5d55c367-1" })(
          nr(),
          v.qk.s
        ),
        or = (0, c.ZP)(Z.Z).withConfig({ componentId: "sc-5d55c367-2" })(er()),
        cr = function (n) {
          var e = n.containerSpread,
            t = n.text,
            r = n.link,
            i = n.employees;
          return (0, o.jsx)(Qt.Z, {
            children: (0, o.jsxs)(
              rr,
              (0, l.Z)((0, u.Z)({}, e), {
                children: [
                  (0, o.jsxs)(ir, {
                    children: [
                      (0, o.jsx)(g.Z, {
                        variant: "b2",
                        children: (0, m.sY)(t),
                      }),
                      (0, o.jsx)(or, { label: "Join the team", href: r.href }),
                    ],
                  }),
                  (0, o.jsx)(tr, { employees: i }),
                ],
              })
            ),
          });
        },
        ar = t(1163);
      function sr() {
        var n = (0, i.Z)([
          "\n  grid-column-start: ",
          ";\n  grid-column-end: ",
          ";\n  grid-row-start: ",
          ";\n  grid-row-end: ",
          ";\n",
        ]);
        return (
          (sr = function () {
            return n;
          }),
          n
        );
      }
      function dr() {
        var n = (0, i.Z)([
          "\n  width: 100%;\n  height: 100%;\n  pointer-events: auto;\n\n  ",
          ";\n\n  ",
          ";\n",
        ]);
        return (
          (dr = function () {
            return n;
          }),
          n
        );
      }
      var ur = c.ZP.div.withConfig({ componentId: "sc-974f94df-0" })(
          dr(),
          function (n) {
            var e = n.$gridPosition;
            return (
              e &&
              (function (n) {
                var e = n.gridColumnStart,
                  t = n.gridColumnEnd,
                  r = n.gridRowStart,
                  i = n.gridRowEnd;
                return (0, c.iv)(sr(), e, t, r, i);
              })(e)
            );
          },
          function (n) {
            return n.$debug && "\n    border: 2px solid red;\n  ";
          }
        ),
        lr = function (n) {
          var e = n.containerSpread,
            t = n.debug,
            r = n.contain,
            i = n.media,
            c = n.column_start,
            a = n.column_end,
            s = n.row_start,
            d = n.row_end;
          return (0, o.jsx)(
            ur,
            (0, l.Z)((0, u.Z)({}, e), {
              $gridPosition: {
                gridColumnStart: c,
                gridColumnEnd: a,
                gridRowStart: s,
                gridRowEnd: d,
              },
              $debug: t,
              children: (0, o.jsx)(V.Z, {
                fit: r ? "contain" : "cover",
                media: i,
              }),
            })
          );
        };
      (lr.defaultProps = {
        column_start: 0,
        column_end: 0,
        row_start: 0,
        row_end: 0,
      }),
        (lr.propTypes = {
          debug: f.PropTypes.bool,
          media: f.PropTypes.arrayOf(f.PropTypes.object).isRequired,
          column_start: f.PropTypes.oneOfType([
            f.PropTypes.number,
            f.PropTypes.string,
          ]),
          column_end: f.PropTypes.oneOfType([
            f.PropTypes.number,
            f.PropTypes.string,
          ]),
          row_start: f.PropTypes.oneOfType([
            f.PropTypes.number,
            f.PropTypes.string,
          ]),
          row_end: f.PropTypes.oneOfType([
            f.PropTypes.number,
            f.PropTypes.string,
          ]),
        });
      var fr = lr;
      function pr() {
        var n = (0, i.Z)([
          "\n  position: absolute;\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n\n  display: grid;\n  grid-template-columns: repeat(20, 1fr);\n  grid-template-rows: repeat(20, 1fr);\n",
        ]);
        return (
          (pr = function () {
            return n;
          }),
          n
        );
      }
      function hr() {
        var n = (0, i.Z)([
          "\n  outline: 0.1px solid red;\n  opacity: 0.35;\n  width: 100%;\n  height: 100%;\n",
        ]);
        return (
          (hr = function () {
            return n;
          }),
          n
        );
      }
      var vr = c.ZP.div.withConfig({ componentId: "sc-90a8f68-0" })(pr()),
        mr = c.ZP.div.withConfig({ componentId: "sc-90a8f68-1" })(hr()),
        gr = function () {
          return (0, o.jsx)(vr, {
            children: Array(Math.pow(20, 2))
              .fill()
              .map(function (n, e) {
                return (0, o.jsx)(mr, {}, "dev-grid-line-".concat(e));
              }),
          });
        };
      function Zr() {
        var n = (0, i.Z)([
          "\n  display: grid;\n  pointer-events: none;\n  height: 100%;\n  width: 100%;\n  grid-template-columns: repeat(20, 1fr);\n  grid-template-rows: repeat(20, 1fr);\n  overflow: hidden;\n",
        ]);
        return (
          (Zr = function () {
            return n;
          }),
          n
        );
      }
      var xr = c.ZP.div.withConfig({ componentId: "sc-19dfa616-0" })(Zr()),
        wr = (0, a.e)({ grid_tile: fr }),
        yr = function (n) {
          var e = n.tiles,
            t = n.debug;
          return (0, o.jsxs)(xr, {
            children: [
              (0, o.jsx)(wr, { items: e, debug: t }),
              t && (0, o.jsx)(gr, {}),
            ],
          });
        };
      (yr.defaultProps = { tiles: [] }),
        (yr.propTypes = {
          tiles: f.PropTypes.arrayOf(f.PropTypes.object).isRequired,
          debug: f.PropTypes.bool,
        });
      var br = yr;
      function jr() {
        var n = (0, i.Z)([
          "\n  position: relative;\n  display: grid;\n  place-items: center;\n\n  height: 100vh;\n  width: 100%;\n\n  background-color: var(--color-white);\n",
        ]);
        return (
          (jr = function () {
            return n;
          }),
          n
        );
      }
      function Pr() {
        var n = (0, i.Z)([
          "\n  position: absolute;\n  display: grid;\n  place-items: center;\n\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  z-index: 1;\n",
        ]);
        return (
          (Pr = function () {
            return n;
          }),
          n
        );
      }
      function kr() {
        var n = (0, i.Z)([
          "\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n\n  width: 100%;\n  height: 100%;\n  padding: 0 1ch;\n  max-width: 85ch;\n\n  ",
          " {\n    padding: unset;\n  }\n",
        ]);
        return (
          (kr = function () {
            return n;
          }),
          n
        );
      }
      function Cr() {
        var n = (0, i.Z)([
          "\n  margin-bottom: 1.2rem;\n\n  ",
          " {\n    margin-bottom: 0.45rem;\n  }\n",
        ]);
        return (
          (Cr = function () {
            return n;
          }),
          n
        );
      }
      function Tr() {
        var n = (0, i.Z)([
          "\n  margin-top: 1.55rem;\n\n  ",
          " {\n    margin-top: 2.8rem;\n  }\n",
        ]);
        return (
          (Tr = function () {
            return n;
          }),
          n
        );
      }
      var Ir = c.ZP.section.withConfig({ componentId: "sc-b55abee5-0" })(jr()),
        qr = (0, c.ZP)(Un.Z).withConfig({ componentId: "sc-b55abee5-1" })(Pr()),
        _r = c.ZP.div.withConfig({ componentId: "sc-b55abee5-2" })(
          kr(),
          v.qk.s
        ),
        Rr = (0, c.ZP)(g.Z).withConfig({ componentId: "sc-b55abee5-3" })(
          Cr(),
          v.qk.s
        ),
        Sr = (0, c.ZP)(Z.Z).withConfig({ componentId: "sc-b55abee5-4" })(
          Tr(),
          v.qk.s
        ),
        Er = function (n) {
          var e = n.header,
            t = n.text,
            r = n.link,
            i = n.positions_landscape,
            c = n.positions_portrait,
            a = n.debug,
            s = n.containerSpread,
            d = (0, ar.useRouter)(),
            f = (0, Ze.Z)("landscape"),
            p = (0, Ze.Z)("m") || f ? i : c;
          return (0, o.jsxs)(
            Ir,
            (0, l.Z)((0, u.Z)({}, s), {
              children: [
                (0, o.jsx)(br, { debug: d.isPreview || a, tiles: p }),
                (0, o.jsx)(qr, {
                  children: (0, o.jsxs)(_r, {
                    children: [
                      e &&
                        (0, o.jsx)(Rr, {
                          tag: "h1",
                          variant: "l2",
                          children: e,
                        }),
                      t &&
                        (0, o.jsx)(g.Z, {
                          tag: "div",
                          variant: "b13",
                          children: (0, m.sY)(t),
                        }),
                      (null === r || void 0 === r ? void 0 : r[0]) &&
                        (0, o.jsx)(
                          Sr,
                          (0, u.Z)(
                            {},
                            null === r || void 0 === r ? void 0 : r[0]
                          )
                        ),
                    ],
                  }),
                }),
              ],
            })
          );
        };
      (Er.defaultProps = { positions_landscape: [], positions_portrait: [] }),
        (Er.propTypes = {
          debug: f.PropTypes.bool,
          header: f.PropTypes.string,
          text: f.PropTypes.object,
          link: f.PropTypes.arrayOf(f.PropTypes.object),
          positions_landscape: f.PropTypes.arrayOf(f.PropTypes.object),
          positions_portrait: f.PropTypes.arrayOf(f.PropTypes.object),
        });
      var Or = Er,
        Hr = t(8632);
      function Vr() {
        var n = (0, i.Z)([
          "\n  from {\n   opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n",
        ]);
        return (
          (Vr = function () {
            return n;
          }),
          n
        );
      }
      function Nr() {
        var n = (0, i.Z)([
          "\n  animation: ",
          " 1s ",
          ";\n\n  @media (prefers-reduced-motion) {\n    animation: none;\n  }\n",
        ]);
        return (
          (Nr = function () {
            return n;
          }),
          n
        );
      }
      var zr = (0, a.e)({
          manifesto: _n,
          facts: H,
          team_block: cr,
          quote_cloud: Or,
          partnerships: ve,
          overview: Qn,
          introduction: bn,
          quote: Xe,
          services: Jt,
          footer: Q,
        }),
        Yr = (0, c.F4)(Vr()),
        Ar = c.ZP.div.withConfig({ componentId: "sc-5a41301c-0" })(
          Nr(),
          Yr,
          s.t.manvydas2
        ),
        Mr = function (n) {
          var e = n.content || {},
            t = e.SEO,
            r = e.body;
          return (0, o.jsxs)(Ar, {
            children: [
              (0, o.jsx)(d.Z, { SEO: t }),
              (0, o.jsx)(Hr.Z, { blend: !0 }),
              (0, o.jsx)(zr, { items: r }),
            ],
          });
        },
        Br = !0,
        Wr = (0, r.s)(Mr);
    },
    7786: function (n, e, t) {
      "use strict";
      t.d(e, {
        sY: function () {
          return l;
        },
      });
      var r = t(4924),
        i = t(6042),
        o = t(9396),
        c = t(9534),
        a = t(5893),
        s = t(7294),
        d = t(8665),
        u = t(4651);
      function l(n) {
        var e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (
          "object" === typeof n &&
          "doc" === n.type &&
          Array.isArray(n.content)
        ) {
          var t = e.blokResolvers,
            r = void 0 === t ? {} : t,
            o = e.defaultBlokResolver,
            a =
              void 0 === o
                ? function () {
                    return null;
                  }
                : o,
            d = e.nodeResolvers,
            u = void 0 === d ? {} : d,
            l = e.markResolvers,
            f = void 0 === l ? {} : l,
            p = e.textResolver,
            h =
              void 0 === p
                ? function (n) {
                    return n;
                  }
                : p,
            v = (0, i.Z)({}, Z, u),
            m = (0, i.Z)({}, x, f),
            g = 0,
            w = function (n) {
              return s.isValidElement(n) ? s.cloneElement(n, { key: g++ }) : n;
            },
            y = function (n) {
              var e = n
                ? n.map(b).filter(function (n) {
                    return null != n;
                  })
                : null;
              return Array.isArray(e) && 0 === e.length ? null : e;
            },
            b = function (n) {
              var e, t;
              if ("blok" === n.type)
                return n.attrs.body.map(function (n) {
                  var e = n.component,
                    t = (0, c.Z)(n, ["component"]),
                    i = r[e],
                    o = i ? i(t) : a(e, t);
                  return w(o);
                });
              if ("text" === n.type) e = h(n.text);
              else {
                var i = v[n.type];
                e = i ? w(i(y(n.content), n.attrs)) : null;
              }
              return (
                null !== (t = n.marks) && void 0 !== t ? t : []
              ).reduceRight(function (n, e) {
                var t = m[e.type];
                return t ? w(t(n, e.attrs)) : n;
              }, e);
            };
          return y(n.content);
        }
        if ("string" === typeof n) {
          var j = e.defaultStringResolver,
            P =
              void 0 === j
                ? function (n) {
                    return n;
                  }
                : j,
            k = e.textResolver,
            C =
              void 0 === k
                ? function (n) {
                    return n;
                  }
                : k;
          return P(C(n));
        }
        return null;
      }
      var f,
        p,
        h = function (n) {
          return function (e) {
            if (null === e) return null;
            var t = n || "span";
            return (0, a.jsx)(t, { children: e });
          };
        },
        v = function (n) {
          return function () {
            var e = n || "span";
            return (0, a.jsx)(e, {});
          };
        },
        m = { 1: "h1", 2: "h2", 3: "b1", 4: "b2", 5: "b3", 6: "b4" },
        g = function (n) {
          return function (e) {
            var t = n || "span";
            return (0, a.jsx)(t, { children: e });
          };
        },
        Z =
          ((f = {}),
          (0, r.Z)(f, "heading", function (n, e) {
            var t = e.level,
              r = "h".concat(t),
              i = m[t];
            if (!i) throw new Error("Invalid heading level: ".concat(t));
            return (0, a.jsx)(u.Z, { tag: r, variant: i, children: n });
          }),
          (0, r.Z)(f, "code_block", function (n, e) {
            var t = e.class;
            return (0,
            a.jsx)("pre", { children: (0, a.jsx)("code", { className: t, children: n }) });
          }),
          (0, r.Z)(f, "image", function (n, e) {
            return (0,
            a.jsx)("img", (0, o.Z)((0, i.Z)({}, e), { children: n }));
          }),
          (0, r.Z)(f, "paragraph", h("p")),
          (0, r.Z)(f, "blockquote", h("blockquote")),
          (0, r.Z)(f, "ordered_list", h("ol")),
          (0, r.Z)(f, "bullet_list", h("ul")),
          (0, r.Z)(f, "list_item", h("li")),
          (0, r.Z)(f, "horizontal_rule", v("hr")),
          (0, r.Z)(f, "hard_break", v("br")),
          f),
        x =
          ((p = {}),
          (0, r.Z)(p, "link", function (n, e) {
            return (0, a.jsx)(d.Z, (0, o.Z)((0, i.Z)({}, e), { children: n }));
          }),
          (0, r.Z)(p, "styled", function (n, e) {
            var t = e.class;
            return (0, a.jsx)("span", { className: t, children: n });
          }),
          (0, r.Z)(p, "bold", g("b")),
          (0, r.Z)(p, "italic", g("i")),
          (0, r.Z)(p, "strike", g("s")),
          (0, r.Z)(p, "underline", g("u")),
          (0, r.Z)(p, "code", g("code")),
          p);
    },
  },
  function (n) {
    n.O(0, [423, 371, 866, 774, 888, 179], function () {
      return (e = 3718), n((n.s = e));
      var e;
    });
    var e = n.O();
    _N_E = e;
  },
]);
