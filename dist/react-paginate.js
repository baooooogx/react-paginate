!(function (e, a) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = a(require('react')))
    : 'function' == typeof define && define.amd
    ? define(['react'], a)
    : 'object' == typeof exports
    ? (exports.ReactPaginate = a(require('react')))
    : (e.ReactPaginate = a(e.React));
})(global, function (e) {
  return (function (e) {
    var a = {};
    function t(r) {
      if (a[r]) return a[r].exports;
      var n = (a[r] = { i: r, l: !1, exports: {} });
      return e[r].call(n.exports, n, n.exports, t), (n.l = !0), n.exports;
    }
    return (
      (t.m = e),
      (t.c = a),
      (t.d = function (e, a, r) {
        t.o(e, a) || Object.defineProperty(e, a, { enumerable: !0, get: r });
      }),
      (t.r = function (e) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 });
      }),
      (t.t = function (e, a) {
        if ((1 & a && (e = t(e)), 8 & a)) return e;
        if (4 & a && 'object' == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (
          (t.r(r),
          Object.defineProperty(r, 'default', { enumerable: !0, value: e }),
          2 & a && 'string' != typeof e)
        )
          for (var n in e)
            t.d(
              r,
              n,
              function (a) {
                return e[a];
              }.bind(null, n)
            );
        return r;
      }),
      (t.n = function (e) {
        var a =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return t.d(a, 'a', a), a;
      }),
      (t.o = function (e, a) {
        return Object.prototype.hasOwnProperty.call(e, a);
      }),
      (t.p = ''),
      t((t.s = 4))
    );
  })([
    function (e, a, t) {
      e.exports = t(2)();
    },
    function (a, t) {
      a.exports = e;
    },
    function (e, a, t) {
      'use strict';
      var r = t(3);
      function n() {}
      function i() {}
      (i.resetWarningCache = n),
        (e.exports = function () {
          function e(e, a, t, n, i, s) {
            if (s !== r) {
              var l = new Error(
                'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
              );
              throw ((l.name = 'Invariant Violation'), l);
            }
          }
          function a() {
            return e;
          }
          e.isRequired = e;
          var t = {
            array: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: a,
            element: e,
            elementType: e,
            instanceOf: a,
            node: e,
            objectOf: a,
            oneOf: a,
            oneOfType: a,
            shape: a,
            exact: a,
            checkPropTypes: i,
            resetWarningCache: n,
          };
          return (t.PropTypes = t), t;
        });
    },
    function (e, a, t) {
      'use strict';
      e.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
    },
    function (e, a, t) {
      'use strict';
      t.r(a);
      var r = t(1),
        n = t.n(r),
        i = t(0),
        s = t.n(i);
      function l() {
        return (l =
          Object.assign ||
          function (e) {
            for (var a = 1; a < arguments.length; a++) {
              var t = arguments[a];
              for (var r in t)
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      var o = function (e) {
        var a = e.pageClassName,
          t = e.pageLinkClassName,
          r = e.page,
          i = e.selected,
          s = e.activeClassName,
          o = e.activeLinkClassName,
          u = e.getEventListener,
          c = e.pageSelectedHandler,
          p = e.href,
          f = e.extraAriaContext,
          g = e.pageLabelBuilder,
          d = e.ariaLabel || 'Page ' + r + (f ? ' ' + f : ''),
          b = null;
        return (
          i &&
            ((b = 'page'),
            (d = e.ariaLabel || 'Page ' + r + ' is your current page'),
            (a = void 0 !== a ? a + ' ' + s : s),
            void 0 !== t ? void 0 !== o && (t = t + ' ' + o) : (t = o)),
          n.a.createElement(
            'li',
            { className: a },
            n.a.createElement(
              'a',
              l(
                {
                  role: 'button',
                  className: t,
                  href: p,
                  tabIndex: '0',
                  'aria-label': d,
                  'aria-current': b,
                  onKeyPress: c,
                },
                u(c)
              ),
              g(r)
            )
          )
        );
      };
      o.propTypes = {
        pageSelectedHandler: s.a.func.isRequired,
        selected: s.a.bool.isRequired,
        pageClassName: s.a.string,
        pageLinkClassName: s.a.string,
        activeClassName: s.a.string,
        activeLinkClassName: s.a.string,
        extraAriaContext: s.a.string,
        href: s.a.string,
        ariaLabel: s.a.string,
        page: s.a.number.isRequired,
        getEventListener: s.a.func.isRequired,
        pageLabelBuilder: s.a.func.isRequired,
      };
      var u = o;
      function c() {
        return (c =
          Object.assign ||
          function (e) {
            for (var a = 1; a < arguments.length; a++) {
              var t = arguments[a];
              for (var r in t)
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      var p = function (e) {
        var a = e.breakLabel,
          t = e.breakClassName,
          r = e.breakLinkClassName,
          i = e.breakHandler,
          s = e.getEventListener,
          l = t || 'break';
        return n.a.createElement(
          'li',
          { className: l },
          n.a.createElement(
            'a',
            c(
              { className: r, role: 'button', tabIndex: '0', onKeyPress: i },
              s(i)
            ),
            a
          )
        );
      };
      p.propTypes = {
        breakLabel: s.a.oneOfType([s.a.string, s.a.node]),
        breakClassName: s.a.string,
        breakLinkClassName: s.a.string,
        breakHandler: s.a.func.isRequired,
        getEventListener: s.a.func.isRequired,
      };
      var f = p;
      function g(e) {
        return (g =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      function d() {
        return (d =
          Object.assign ||
          function (e) {
            for (var a = 1; a < arguments.length; a++) {
              var t = arguments[a];
              for (var r in t)
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function b(e, a) {
        for (var t = 0; t < a.length; t++) {
          var r = a[t];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function v(e, a) {
        return (v =
          Object.setPrototypeOf ||
          function (e, a) {
            return (e.__proto__ = a), e;
          })(e, a);
      }
      function m(e) {
        var a = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var t,
            r = C(e);
          if (a) {
            var n = C(this).constructor;
            t = Reflect.construct(r, arguments, n);
          } else t = r.apply(this, arguments);
          return h(this, t);
        };
      }
      function h(e, a) {
        return !a || ('object' !== g(a) && 'function' != typeof a) ? y(e) : a;
      }
      function y(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function C(e) {
        return (C = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function P(e, a, t) {
        return (
          a in e
            ? Object.defineProperty(e, a, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[a] = t),
          e
        );
      }
      var k = (function (e) {
        !(function (e, a) {
          if ('function' != typeof a && null !== a)
            throw new TypeError(
              'Super expression must either be null or a function'
            );
          (e.prototype = Object.create(a && a.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            a && v(e, a);
        })(s, e);
        var a,
          t,
          r,
          i = m(s);
        function s(e) {
          var a, t;
          return (
            (function (e, a) {
              if (!(e instanceof a))
                throw new TypeError('Cannot call a class as a function');
            })(this, s),
            P(y((a = i.call(this, e))), 'handlePreviousPage', function (e) {
              var t = a.state.selected;
              e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
                t > 0 && a.handlePageSelected(t - 1, e);
            }),
            P(y(a), 'handleNextPage', function (e) {
              var t = a.state.selected,
                r = a.props.pageCount;
              e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
                t < r - 1 && a.handlePageSelected(t + 1, e);
            }),
            P(y(a), 'handlePageSelected', function (e, t) {
              t.preventDefault ? t.preventDefault() : (t.returnValue = !1),
                a.state.selected !== e
                  ? (a.setState({ selected: e }), a.callCallback(e))
                  : a.callActiveCallback(e);
            }),
            P(y(a), 'getEventListener', function (e) {
              return P({}, a.props.eventListener, e);
            }),
            P(y(a), 'handleBreakClick', function (e, t) {
              t.preventDefault ? t.preventDefault() : (t.returnValue = !1);
              var r = a.state.selected;
              a.handlePageSelected(
                r < e ? a.getForwardJump() : a.getBackwardJump(),
                t
              );
            }),
            P(y(a), 'callCallback', function (e) {
              void 0 !== a.props.onPageChange &&
                'function' == typeof a.props.onPageChange &&
                a.props.onPageChange({ selected: e });
            }),
            P(y(a), 'callActiveCallback', function (e) {
              void 0 !== a.props.onPageActive &&
                'function' == typeof a.props.onPageActive &&
                a.props.onPageActive({ selected: e });
            }),
            P(y(a), 'pagination', function () {
              var e = [],
                t = a.props,
                r = t.pageRangeDisplayed,
                i = t.pageCount,
                s = t.marginPagesDisplayed,
                l = t.breakLabel,
                o = t.breakClassName,
                u = t.breakLinkClassName,
                c = a.state.selected;
              if (i <= r)
                for (var p = 0; p < i; p++) e.push(a.getPageElement(p));
              else {
                var g,
                  d,
                  b,
                  v = r / 2,
                  m = r - v;
                c > i - r / 2
                  ? (v = r - (m = i - c))
                  : c < r / 2 && (m = r - (v = c));
                var h = function (e) {
                  return a.getPageElement(e);
                };
                for (g = 0; g < i; g++)
                  (d = g + 1) <= s || d > i - s || (g >= c - v && g <= c + m)
                    ? e.push(h(g))
                    : l &&
                      e[e.length - 1] !== b &&
                      ((b = n.a.createElement(f, {
                        key: g,
                        breakLabel: l,
                        breakClassName: o,
                        breakLinkClassName: u,
                        breakHandler: a.handleBreakClick.bind(null, g),
                        getEventListener: a.getEventListener,
                      })),
                      e.push(b));
              }
              return e;
            }),
            (t = e.initialPage ? e.initialPage : e.forcePage ? e.forcePage : 0),
            (a.state = { selected: t }),
            a
          );
        }
        return (
          (a = s),
          (t = [
            {
              key: 'componentDidMount',
              value: function () {
                var e = this.props,
                  a = e.initialPage,
                  t = e.disableInitialCallback,
                  r = e.extraAriaContext;
                void 0 === a || t || this.callCallback(a),
                  r &&
                    console.warn(
                      'DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead.'
                    );
              },
            },
            {
              key: 'componentDidUpdate',
              value: function (e) {
                void 0 !== this.props.forcePage &&
                  this.props.forcePage !== e.forcePage &&
                  this.setState({ selected: this.props.forcePage });
              },
            },
            {
              key: 'getForwardJump',
              value: function () {
                var e = this.state.selected,
                  a = this.props,
                  t = a.pageCount,
                  r = e + a.pageRangeDisplayed;
                return r >= t ? t - 1 : r;
              },
            },
            {
              key: 'getBackwardJump',
              value: function () {
                var e = this.state.selected - this.props.pageRangeDisplayed;
                return e < 0 ? 0 : e;
              },
            },
            {
              key: 'hrefBuilder',
              value: function (e) {
                var a = this.props,
                  t = a.hrefBuilder,
                  r = a.pageCount;
                if (t && e !== this.state.selected && e >= 0 && e < r)
                  return t(e + 1);
              },
            },
            {
              key: 'ariaLabelBuilder',
              value: function (e) {
                var a = e === this.state.selected;
                if (
                  this.props.ariaLabelBuilder &&
                  e >= 0 &&
                  e < this.props.pageCount
                ) {
                  var t = this.props.ariaLabelBuilder(e + 1, a);
                  return (
                    this.props.extraAriaContext &&
                      !a &&
                      (t = t + ' ' + this.props.extraAriaContext),
                    t
                  );
                }
              },
            },
            {
              key: 'getPageElement',
              value: function (e) {
                var a = this.state.selected,
                  t = this.props,
                  r = t.pageClassName,
                  i = t.pageLinkClassName,
                  s = t.activeClassName,
                  l = t.activeLinkClassName,
                  o = t.extraAriaContext,
                  c = t.pageLabelBuilder;
                return n.a.createElement(u, {
                  key: e,
                  pageSelectedHandler: this.handlePageSelected.bind(null, e),
                  selected: a === e,
                  pageClassName: r,
                  pageLinkClassName: i,
                  activeClassName: s,
                  activeLinkClassName: l,
                  extraAriaContext: o,
                  href: this.hrefBuilder(e),
                  ariaLabel: this.ariaLabelBuilder(e),
                  page: e + 1,
                  pageLabelBuilder: c,
                  getEventListener: this.getEventListener,
                });
              },
            },
            {
              key: 'render',
              value: function () {
                var e = this.props,
                  a = e.disabledClassName,
                  t = e.pageCount,
                  r = e.containerClassName,
                  i = e.previousLabel,
                  s = e.previousClassName,
                  l = e.previousLinkClassName,
                  o = e.previousAriaLabel,
                  u = e.prevRel,
                  c = e.nextLabel,
                  p = e.nextClassName,
                  f = e.nextLinkClassName,
                  g = e.nextAriaLabel,
                  b = e.nextRel,
                  v = this.state.selected,
                  m = s + (0 === v ? ' '.concat(a) : ''),
                  h = p + (v === t - 1 ? ' '.concat(a) : ''),
                  y = 0 === v ? 'true' : 'false',
                  C = v === t - 1 ? 'true' : 'false';
                return n.a.createElement(
                  'ul',
                  { className: r },
                  n.a.createElement(
                    'li',
                    { className: m },
                    n.a.createElement(
                      'a',
                      d(
                        {
                          className: l,
                          href: this.hrefBuilder(v - 1),
                          tabIndex: '0',
                          role: 'button',
                          onKeyPress: this.handlePreviousPage,
                          'aria-disabled': y,
                          'aria-label': o,
                          rel: u,
                        },
                        this.getEventListener(this.handlePreviousPage)
                      ),
                      i
                    )
                  ),
                  this.pagination(),
                  n.a.createElement(
                    'li',
                    { className: h },
                    n.a.createElement(
                      'a',
                      d(
                        {
                          className: f,
                          href: this.hrefBuilder(v + 1),
                          tabIndex: '0',
                          role: 'button',
                          onKeyPress: this.handleNextPage,
                          'aria-disabled': C,
                          'aria-label': g,
                          rel: b,
                        },
                        this.getEventListener(this.handleNextPage)
                      ),
                      c
                    )
                  )
                );
              },
            },
          ]) && b(a.prototype, t),
          r && b(a, r),
          s
        );
      })(r.Component);
      P(k, 'propTypes', {
        pageCount: s.a.number.isRequired,
        pageRangeDisplayed: s.a.number.isRequired,
        marginPagesDisplayed: s.a.number.isRequired,
        previousLabel: s.a.node,
        previousAriaLabel: s.a.string,
        prevRel: s.a.string,
        nextLabel: s.a.node,
        nextAriaLabel: s.a.string,
        nextRel: s.a.string,
        breakLabel: s.a.oneOfType([s.a.string, s.a.node]),
        hrefBuilder: s.a.func,
        onPageChange: s.a.func,
        onPageActive: s.a.func,
        initialPage: s.a.number,
        forcePage: s.a.number,
        disableInitialCallback: s.a.bool,
        containerClassName: s.a.string,
        pageClassName: s.a.string,
        pageLinkClassName: s.a.string,
        pageLabelBuilder: s.a.func,
        activeClassName: s.a.string,
        activeLinkClassName: s.a.string,
        previousClassName: s.a.string,
        nextClassName: s.a.string,
        previousLinkClassName: s.a.string,
        nextLinkClassName: s.a.string,
        disabledClassName: s.a.string,
        breakClassName: s.a.string,
        breakLinkClassName: s.a.string,
        extraAriaContext: s.a.string,
        ariaLabelBuilder: s.a.func,
        eventListener: s.a.string,
      }),
        P(k, 'defaultProps', {
          pageCount: 10,
          pageRangeDisplayed: 2,
          marginPagesDisplayed: 3,
          activeClassName: 'selected',
          previousLabel: 'Previous',
          previousClassName: 'previous',
          previousAriaLabel: 'Previous page',
          prevRel: 'prev',
          nextLabel: 'Next',
          nextClassName: 'next',
          nextAriaLabel: 'Next page',
          nextRel: 'next',
          breakLabel: '...',
          disabledClassName: 'disabled',
          disableInitialCallback: !1,
          pageLabelBuilder: function (e) {
            return e;
          },
          eventListener: 'onClick',
        });
      a.default = k;
    },
  ]);
});
//# sourceMappingURL=react-paginate.js.map
