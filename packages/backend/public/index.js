!(function(n) {
  var e = window.webpackHotUpdate
  window.webpackHotUpdate = function(n, t) {
    !(function(n, e) {
      if (!z[n] || !x[n]) return
      for (var t in ((x[n] = !1), e)) Object.prototype.hasOwnProperty.call(e, t) && (m[t] = e[t])
      0 == --f && 0 === g && M()
    })(n, t),
      e && e(n, t)
  }
  var t,
    r = !0,
    o = '84137e3e4ad5d76473cb',
    a = 1e4,
    i = {},
    c = [],
    p = []
  function b(n) {
    var e = H[n]
    if (!e) return E
    var r = function(r) {
        return (
          e.hot.active
            ? (H[r] ? -1 === H[r].parents.indexOf(n) && H[r].parents.push(n) : ((c = [n]), (t = r)),
              -1 === e.children.indexOf(r) && e.children.push(r))
            : (console.warn('[HMR] unexpected require(' + r + ') from disposed module ' + n),
              (c = [])),
          E(r)
        )
      },
      o = function(n) {
        return {
          configurable: !0,
          enumerable: !0,
          get: function() {
            return E[n]
          },
          set: function(e) {
            E[n] = e
          },
        }
      }
    for (var a in E)
      Object.prototype.hasOwnProperty.call(E, a) &&
        'e' !== a &&
        't' !== a &&
        Object.defineProperty(r, a, o(a))
    return (
      (r.e = function(n) {
        return (
          'ready' === s && d('prepare'),
          g++,
          E.e(n).then(e, function(n) {
            throw (e(), n)
          })
        )
        function e() {
          g--, 'prepare' === s && (v[n] || y(n), 0 === g && 0 === f && M())
        }
      }),
      (r.t = function(n, e) {
        return 1 & e && (n = r(n)), E.t(n, -2 & e)
      }),
      r
    )
  }
  var l = [],
    s = 'idle'
  function d(n) {
    s = n
    for (var e = 0; e < l.length; e++) l[e].call(null, n)
  }
  var u,
    m,
    h,
    f = 0,
    g = 0,
    v = {},
    x = {},
    z = {}
  function k(n) {
    return +n + '' === n ? +n : n
  }
  function w(n) {
    if ('idle' !== s) throw new Error('check() is only allowed in idle status')
    return (
      (r = n),
      d('check'),
      (function(n) {
        return (
          (n = n || 1e4),
          new Promise(function(e, t) {
            if ('undefined' == typeof XMLHttpRequest) return t(new Error('No browser support'))
            try {
              var r = new XMLHttpRequest(),
                a = E.p + '' + o + '.hot-update.json'
              r.open('GET', a, !0), (r.timeout = n), r.send(null)
            } catch (n) {
              return t(n)
            }
            r.onreadystatechange = function() {
              if (4 === r.readyState)
                if (0 === r.status) t(new Error('Manifest request to ' + a + ' timed out.'))
                else if (404 === r.status) e()
                else if (200 !== r.status && 304 !== r.status)
                  t(new Error('Manifest request to ' + a + ' failed.'))
                else {
                  try {
                    var n = JSON.parse(r.responseText)
                  } catch (n) {
                    return void t(n)
                  }
                  e(n)
                }
            }
          })
        )
      })(a).then(function(n) {
        if (!n) return d('idle'), null
        ;(x = {}), (v = {}), (z = n.c), (h = n.h), d('prepare')
        var e = new Promise(function(n, e) {
          u = { resolve: n, reject: e }
        })
        m = {}
        return y(0), 'prepare' === s && 0 === g && 0 === f && M(), e
      })
    )
  }
  function y(n) {
    z[n]
      ? ((x[n] = !0),
        f++,
        (function(n) {
          var e = document.getElementsByTagName('head')[0],
            t = document.createElement('script')
          ;(t.charset = 'utf-8'),
            (t.src = E.p + '' + n + '.' + o + '.hot-update.js'),
            e.appendChild(t)
        })(n))
      : (v[n] = !0)
  }
  function M() {
    d('ready')
    var n = u
    if (((u = null), n))
      if (r)
        Promise.resolve()
          .then(function() {
            return _(r)
          })
          .then(
            function(e) {
              n.resolve(e)
            },
            function(e) {
              n.reject(e)
            },
          )
      else {
        var e = []
        for (var t in m) Object.prototype.hasOwnProperty.call(m, t) && e.push(k(t))
        n.resolve(e)
      }
  }
  function _(e) {
    if ('ready' !== s) throw new Error('apply() is only allowed in ready status')
    var t, r, a, p, b
    function l(n) {
      for (
        var e = [n],
          t = {},
          r = e.slice().map(function(n) {
            return { chain: [n], id: n }
          });
        r.length > 0;

      ) {
        var o = r.pop(),
          a = o.id,
          i = o.chain
        if ((p = H[a]) && !p.hot._selfAccepted) {
          if (p.hot._selfDeclined) return { type: 'self-declined', chain: i, moduleId: a }
          if (p.hot._main) return { type: 'unaccepted', chain: i, moduleId: a }
          for (var c = 0; c < p.parents.length; c++) {
            var b = p.parents[c],
              l = H[b]
            if (l) {
              if (l.hot._declinedDependencies[a])
                return { type: 'declined', chain: i.concat([b]), moduleId: a, parentId: b }
              ;-1 === e.indexOf(b) &&
                (l.hot._acceptedDependencies[a]
                  ? (t[b] || (t[b] = []), u(t[b], [a]))
                  : (delete t[b], e.push(b), r.push({ chain: i.concat([b]), id: b })))
            }
          }
        }
      }
      return { type: 'accepted', moduleId: n, outdatedModules: e, outdatedDependencies: t }
    }
    function u(n, e) {
      for (var t = 0; t < e.length; t++) {
        var r = e[t]
        ;-1 === n.indexOf(r) && n.push(r)
      }
    }
    e = e || {}
    var f = {},
      g = [],
      v = {},
      x = function() {
        console.warn('[HMR] unexpected require(' + y.moduleId + ') to disposed module')
      }
    for (var w in m)
      if (Object.prototype.hasOwnProperty.call(m, w)) {
        var y
        b = k(w)
        var M = !1,
          _ = !1,
          V = !1,
          C = ''
        switch (
          ((y = m[w] ? l(b) : { type: 'disposed', moduleId: w }).chain &&
            (C = '\nUpdate propagation: ' + y.chain.join(' -> ')),
          y.type)
        ) {
          case 'self-declined':
            e.onDeclined && e.onDeclined(y),
              e.ignoreDeclined ||
                (M = new Error('Aborted because of self decline: ' + y.moduleId + C))
            break
          case 'declined':
            e.onDeclined && e.onDeclined(y),
              e.ignoreDeclined ||
                (M = new Error(
                  'Aborted because of declined dependency: ' + y.moduleId + ' in ' + y.parentId + C,
                ))
            break
          case 'unaccepted':
            e.onUnaccepted && e.onUnaccepted(y),
              e.ignoreUnaccepted || (M = new Error('Aborted because ' + b + ' is not accepted' + C))
            break
          case 'accepted':
            e.onAccepted && e.onAccepted(y), (_ = !0)
            break
          case 'disposed':
            e.onDisposed && e.onDisposed(y), (V = !0)
            break
          default:
            throw new Error('Unexception type ' + y.type)
        }
        if (M) return d('abort'), Promise.reject(M)
        if (_)
          for (b in ((v[b] = m[b]), u(g, y.outdatedModules), y.outdatedDependencies))
            Object.prototype.hasOwnProperty.call(y.outdatedDependencies, b) &&
              (f[b] || (f[b] = []), u(f[b], y.outdatedDependencies[b]))
        V && (u(g, [y.moduleId]), (v[b] = x))
      }
    var L,
      A = []
    for (r = 0; r < g.length; r++)
      (b = g[r]),
        H[b] &&
          H[b].hot._selfAccepted &&
          A.push({ module: b, errorHandler: H[b].hot._selfAccepted })
    d('dispose'),
      Object.keys(z).forEach(function(n) {
        !1 === z[n] &&
          (function(n) {
            delete installedChunks[n]
          })(n)
      })
    for (var T, S, O = g.slice(); O.length > 0; )
      if (((b = O.pop()), (p = H[b]))) {
        var P = {},
          I = p.hot._disposeHandlers
        for (a = 0; a < I.length; a++) (t = I[a])(P)
        for (
          i[b] = P, p.hot.active = !1, delete H[b], delete f[b], a = 0;
          a < p.children.length;
          a++
        ) {
          var D = H[p.children[a]]
          D && ((L = D.parents.indexOf(b)) >= 0 && D.parents.splice(L, 1))
        }
      }
    for (b in f)
      if (Object.prototype.hasOwnProperty.call(f, b) && (p = H[b]))
        for (S = f[b], a = 0; a < S.length; a++)
          (T = S[a]), (L = p.children.indexOf(T)) >= 0 && p.children.splice(L, 1)
    for (b in (d('apply'), (o = h), v)) Object.prototype.hasOwnProperty.call(v, b) && (n[b] = v[b])
    var R = null
    for (b in f)
      if (Object.prototype.hasOwnProperty.call(f, b) && (p = H[b])) {
        S = f[b]
        var N = []
        for (r = 0; r < S.length; r++)
          if (((T = S[r]), (t = p.hot._acceptedDependencies[T]))) {
            if (-1 !== N.indexOf(t)) continue
            N.push(t)
          }
        for (r = 0; r < N.length; r++) {
          t = N[r]
          try {
            t(S)
          } catch (n) {
            e.onErrored &&
              e.onErrored({ type: 'accept-errored', moduleId: b, dependencyId: S[r], error: n }),
              e.ignoreErrored || R || (R = n)
          }
        }
      }
    for (r = 0; r < A.length; r++) {
      var U = A[r]
      ;(b = U.module), (c = [b])
      try {
        E(b)
      } catch (n) {
        if ('function' == typeof U.errorHandler)
          try {
            U.errorHandler(n)
          } catch (t) {
            e.onErrored &&
              e.onErrored({
                type: 'self-accept-error-handler-errored',
                moduleId: b,
                error: t,
                originalError: n,
              }),
              e.ignoreErrored || R || (R = t),
              R || (R = n)
          }
        else
          e.onErrored && e.onErrored({ type: 'self-accept-errored', moduleId: b, error: n }),
            e.ignoreErrored || R || (R = n)
      }
    }
    return R
      ? (d('fail'), Promise.reject(R))
      : (d('idle'),
        new Promise(function(n) {
          n(g)
        }))
  }
  var H = {}
  function E(e) {
    if (H[e]) return H[e].exports
    var r = (H[e] = {
      i: e,
      l: !1,
      exports: {},
      hot: (function(n) {
        var e = {
          _acceptedDependencies: {},
          _declinedDependencies: {},
          _selfAccepted: !1,
          _selfDeclined: !1,
          _disposeHandlers: [],
          _main: t !== n,
          active: !0,
          accept: function(n, t) {
            if (void 0 === n) e._selfAccepted = !0
            else if ('function' == typeof n) e._selfAccepted = n
            else if ('object' == typeof n)
              for (var r = 0; r < n.length; r++) e._acceptedDependencies[n[r]] = t || function() {}
            else e._acceptedDependencies[n] = t || function() {}
          },
          decline: function(n) {
            if (void 0 === n) e._selfDeclined = !0
            else if ('object' == typeof n)
              for (var t = 0; t < n.length; t++) e._declinedDependencies[n[t]] = !0
            else e._declinedDependencies[n] = !0
          },
          dispose: function(n) {
            e._disposeHandlers.push(n)
          },
          addDisposeHandler: function(n) {
            e._disposeHandlers.push(n)
          },
          removeDisposeHandler: function(n) {
            var t = e._disposeHandlers.indexOf(n)
            t >= 0 && e._disposeHandlers.splice(t, 1)
          },
          check: w,
          apply: _,
          status: function(n) {
            if (!n) return s
            l.push(n)
          },
          addStatusHandler: function(n) {
            l.push(n)
          },
          removeStatusHandler: function(n) {
            var e = l.indexOf(n)
            e >= 0 && l.splice(e, 1)
          },
          data: i[n],
        }
        return (t = void 0), e
      })(e),
      parents: ((p = c), (c = []), p),
      children: [],
    })
    return n[e].call(r.exports, r, r.exports, b(e)), (r.l = !0), r.exports
  }
  ;(E.m = n),
    (E.c = H),
    (E.d = function(n, e, t) {
      E.o(n, e) || Object.defineProperty(n, e, { enumerable: !0, get: t })
    }),
    (E.r = function(n) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(n, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(n, '__esModule', { value: !0 })
    }),
    (E.t = function(n, e) {
      if ((1 & e && (n = E(n)), 8 & e)) return n
      if (4 & e && 'object' == typeof n && n && n.__esModule) return n
      var t = Object.create(null)
      if (
        (E.r(t),
        Object.defineProperty(t, 'default', { enumerable: !0, value: n }),
        2 & e && 'string' != typeof n)
      )
        for (var r in n)
          E.d(
            t,
            r,
            function(e) {
              return n[e]
            }.bind(null, r),
          )
      return t
    }),
    (E.n = function(n) {
      var e =
        n && n.__esModule
          ? function() {
              return n.default
            }
          : function() {
              return n
            }
      return E.d(e, 'a', e), e
    }),
    (E.o = function(n, e) {
      return Object.prototype.hasOwnProperty.call(n, e)
    }),
    (E.p = ''),
    (E.h = function() {
      return o
    }),
    b(43)((E.s = 43))
})([
  function(n, e, t) {
    'use strict'
    n.exports = t(47)
  },
  function(n, e, t) {
    'use strict'
    t.d(e, 'a', function() {
      return o
    }),
      t.d(e, 'b', function() {
        return i
      })
    var r = t(4),
      o = 'Blueprint3',
      a = [
        'active',
        'alignText',
        'containerRef',
        'elementRef',
        'fill',
        'icon',
        'inputRef',
        'intent',
        'inline',
        'large',
        'loading',
        'leftIcon',
        'minimal',
        'onChildrenMount',
        'onRemove',
        'popoverProps',
        'rightElement',
        'rightIcon',
        'round',
        'small',
        'text',
      ]
    function i(n, e, t) {
      return (
        void 0 === e && (e = a),
        void 0 === t && (t = !1),
        t && (e = e.concat(a)),
        e.reduce(function(n, e) {
          return n.hasOwnProperty(e) && delete n[e], n
        }, r.a({}, n))
      )
    }
  },
  function(n, e, t) {
    'use strict'
    t.r(e),
      function(n) {
        t.d(e, 'ACTIVE', function() {
          return c
        }),
          t.d(e, 'ALIGN_LEFT', function() {
            return p
          }),
          t.d(e, 'ALIGN_RIGHT', function() {
            return b
          }),
          t.d(e, 'DARK', function() {
            return l
          }),
          t.d(e, 'DISABLED', function() {
            return s
          }),
          t.d(e, 'FILL', function() {
            return d
          }),
          t.d(e, 'FIXED', function() {
            return u
          }),
          t.d(e, 'FIXED_TOP', function() {
            return m
          }),
          t.d(e, 'INLINE', function() {
            return h
          }),
          t.d(e, 'INTERACTIVE', function() {
            return f
          }),
          t.d(e, 'LARGE', function() {
            return g
          }),
          t.d(e, 'LOADING', function() {
            return v
          }),
          t.d(e, 'MINIMAL', function() {
            return x
          }),
          t.d(e, 'MULTILINE', function() {
            return z
          }),
          t.d(e, 'ROUND', function() {
            return k
          }),
          t.d(e, 'SMALL', function() {
            return w
          }),
          t.d(e, 'VERTICAL', function() {
            return y
          }),
          t.d(e, 'ELEVATION_0', function() {
            return M
          }),
          t.d(e, 'ELEVATION_1', function() {
            return _
          }),
          t.d(e, 'ELEVATION_2', function() {
            return H
          }),
          t.d(e, 'ELEVATION_3', function() {
            return E
          }),
          t.d(e, 'ELEVATION_4', function() {
            return V
          }),
          t.d(e, 'INTENT_PRIMARY', function() {
            return C
          }),
          t.d(e, 'INTENT_SUCCESS', function() {
            return L
          }),
          t.d(e, 'INTENT_WARNING', function() {
            return A
          }),
          t.d(e, 'INTENT_DANGER', function() {
            return T
          }),
          t.d(e, 'FOCUS_DISABLED', function() {
            return S
          }),
          t.d(e, 'UI_TEXT', function() {
            return O
          }),
          t.d(e, 'RUNNING_TEXT', function() {
            return P
          }),
          t.d(e, 'MONOSPACE_TEXT', function() {
            return I
          }),
          t.d(e, 'TEXT_LARGE', function() {
            return D
          }),
          t.d(e, 'TEXT_SMALL', function() {
            return R
          }),
          t.d(e, 'TEXT_MUTED', function() {
            return N
          }),
          t.d(e, 'TEXT_DISABLED', function() {
            return U
          }),
          t.d(e, 'TEXT_OVERFLOW_ELLIPSIS', function() {
            return B
          }),
          t.d(e, 'BLOCKQUOTE', function() {
            return j
          }),
          t.d(e, 'CODE', function() {
            return F
          }),
          t.d(e, 'CODE_BLOCK', function() {
            return W
          }),
          t.d(e, 'HEADING', function() {
            return K
          }),
          t.d(e, 'LIST', function() {
            return q
          }),
          t.d(e, 'LIST_UNSTYLED', function() {
            return G
          }),
          t.d(e, 'RTL', function() {
            return Y
          }),
          t.d(e, 'ALERT', function() {
            return X
          }),
          t.d(e, 'ALERT_BODY', function() {
            return $
          }),
          t.d(e, 'ALERT_CONTENTS', function() {
            return Q
          }),
          t.d(e, 'ALERT_FOOTER', function() {
            return Z
          }),
          t.d(e, 'BREADCRUMB', function() {
            return J
          }),
          t.d(e, 'BREADCRUMB_CURRENT', function() {
            return nn
          }),
          t.d(e, 'BREADCRUMBS', function() {
            return en
          }),
          t.d(e, 'BREADCRUMBS_COLLAPSED', function() {
            return tn
          }),
          t.d(e, 'BUTTON', function() {
            return rn
          }),
          t.d(e, 'BUTTON_GROUP', function() {
            return on
          }),
          t.d(e, 'BUTTON_SPINNER', function() {
            return an
          }),
          t.d(e, 'BUTTON_TEXT', function() {
            return cn
          }),
          t.d(e, 'CALLOUT', function() {
            return pn
          }),
          t.d(e, 'CALLOUT_ICON', function() {
            return bn
          }),
          t.d(e, 'CARD', function() {
            return ln
          }),
          t.d(e, 'COLLAPSE', function() {
            return sn
          }),
          t.d(e, 'COLLAPSE_BODY', function() {
            return dn
          }),
          t.d(e, 'COLLAPSIBLE_LIST', function() {
            return un
          }),
          t.d(e, 'CONTEXT_MENU', function() {
            return mn
          }),
          t.d(e, 'CONTEXT_MENU_POPOVER_TARGET', function() {
            return hn
          }),
          t.d(e, 'CONTROL_GROUP', function() {
            return fn
          }),
          t.d(e, 'DIALOG', function() {
            return gn
          }),
          t.d(e, 'DIALOG_CONTAINER', function() {
            return vn
          }),
          t.d(e, 'DIALOG_BODY', function() {
            return xn
          }),
          t.d(e, 'DIALOG_CLOSE_BUTTON', function() {
            return zn
          }),
          t.d(e, 'DIALOG_FOOTER', function() {
            return kn
          }),
          t.d(e, 'DIALOG_FOOTER_ACTIONS', function() {
            return wn
          }),
          t.d(e, 'DIALOG_HEADER', function() {
            return yn
          }),
          t.d(e, 'EDITABLE_TEXT', function() {
            return Mn
          }),
          t.d(e, 'EDITABLE_TEXT_CONTENT', function() {
            return _n
          }),
          t.d(e, 'EDITABLE_TEXT_EDITING', function() {
            return Hn
          }),
          t.d(e, 'EDITABLE_TEXT_INPUT', function() {
            return En
          }),
          t.d(e, 'EDITABLE_TEXT_PLACEHOLDER', function() {
            return Vn
          }),
          t.d(e, 'FLEX_EXPANDER', function() {
            return Cn
          }),
          t.d(e, 'HTML_SELECT', function() {
            return Ln
          }),
          t.d(e, 'SELECT', function() {
            return An
          }),
          t.d(e, 'HTML_TABLE', function() {
            return Tn
          }),
          t.d(e, 'HTML_TABLE_STRIPED', function() {
            return Sn
          }),
          t.d(e, 'HTML_TABLE_BORDERED', function() {
            return On
          }),
          t.d(e, 'INPUT', function() {
            return Pn
          }),
          t.d(e, 'INPUT_GHOST', function() {
            return In
          }),
          t.d(e, 'INPUT_GROUP', function() {
            return Dn
          }),
          t.d(e, 'INPUT_ACTION', function() {
            return Rn
          }),
          t.d(e, 'CONTROL', function() {
            return Nn
          }),
          t.d(e, 'CONTROL_INDICATOR', function() {
            return Un
          }),
          t.d(e, 'CHECKBOX', function() {
            return Bn
          }),
          t.d(e, 'RADIO', function() {
            return jn
          }),
          t.d(e, 'SWITCH', function() {
            return Fn
          }),
          t.d(e, 'FILE_INPUT', function() {
            return Wn
          }),
          t.d(e, 'FILE_UPLOAD_INPUT', function() {
            return Kn
          }),
          t.d(e, 'KEY', function() {
            return qn
          }),
          t.d(e, 'KEY_COMBO', function() {
            return Gn
          }),
          t.d(e, 'MODIFIER_KEY', function() {
            return Yn
          }),
          t.d(e, 'HOTKEY', function() {
            return Xn
          }),
          t.d(e, 'HOTKEY_LABEL', function() {
            return $n
          }),
          t.d(e, 'HOTKEY_COLUMN', function() {
            return Qn
          }),
          t.d(e, 'HOTKEY_DIALOG', function() {
            return Zn
          }),
          t.d(e, 'LABEL', function() {
            return Jn
          }),
          t.d(e, 'FORM_GROUP', function() {
            return ne
          }),
          t.d(e, 'FORM_CONTENT', function() {
            return ee
          }),
          t.d(e, 'FORM_HELPER_TEXT', function() {
            return te
          }),
          t.d(e, 'MENU', function() {
            return re
          }),
          t.d(e, 'MENU_ITEM', function() {
            return oe
          }),
          t.d(e, 'MENU_ITEM_LABEL', function() {
            return ae
          }),
          t.d(e, 'MENU_SUBMENU', function() {
            return ie
          }),
          t.d(e, 'MENU_DIVIDER', function() {
            return ce
          }),
          t.d(e, 'MENU_HEADER', function() {
            return pe
          }),
          t.d(e, 'NAVBAR', function() {
            return be
          }),
          t.d(e, 'NAVBAR_GROUP', function() {
            return le
          }),
          t.d(e, 'NAVBAR_HEADING', function() {
            return se
          }),
          t.d(e, 'NAVBAR_DIVIDER', function() {
            return de
          }),
          t.d(e, 'NON_IDEAL_STATE', function() {
            return ue
          }),
          t.d(e, 'NON_IDEAL_STATE_VISUAL', function() {
            return me
          }),
          t.d(e, 'NUMERIC_INPUT', function() {
            return he
          }),
          t.d(e, 'OVERFLOW_LIST', function() {
            return fe
          }),
          t.d(e, 'OVERFLOW_LIST_SPACER', function() {
            return ge
          }),
          t.d(e, 'OVERLAY', function() {
            return ve
          }),
          t.d(e, 'OVERLAY_BACKDROP', function() {
            return xe
          }),
          t.d(e, 'OVERLAY_CONTENT', function() {
            return ze
          }),
          t.d(e, 'OVERLAY_INLINE', function() {
            return ke
          }),
          t.d(e, 'OVERLAY_OPEN', function() {
            return we
          }),
          t.d(e, 'OVERLAY_SCROLL_CONTAINER', function() {
            return ye
          }),
          t.d(e, 'PANEL_STACK', function() {
            return Me
          }),
          t.d(e, 'PANEL_STACK_HEADER', function() {
            return _e
          }),
          t.d(e, 'PANEL_STACK_HEADER_BACK', function() {
            return He
          }),
          t.d(e, 'PANEL_STACK_VIEW', function() {
            return Ee
          }),
          t.d(e, 'POPOVER', function() {
            return Ve
          }),
          t.d(e, 'POPOVER_ARROW', function() {
            return Ce
          }),
          t.d(e, 'POPOVER_BACKDROP', function() {
            return Le
          }),
          t.d(e, 'POPOVER_CONTENT', function() {
            return Ae
          }),
          t.d(e, 'POPOVER_CONTENT_SIZING', function() {
            return Te
          }),
          t.d(e, 'POPOVER_DISMISS', function() {
            return Se
          }),
          t.d(e, 'POPOVER_DISMISS_OVERRIDE', function() {
            return Oe
          }),
          t.d(e, 'POPOVER_OPEN', function() {
            return Pe
          }),
          t.d(e, 'POPOVER_TARGET', function() {
            return Ie
          }),
          t.d(e, 'POPOVER_WRAPPER', function() {
            return De
          }),
          t.d(e, 'TRANSITION_CONTAINER', function() {
            return Re
          }),
          t.d(e, 'PROGRESS_BAR', function() {
            return Ne
          }),
          t.d(e, 'PROGRESS_METER', function() {
            return Ue
          }),
          t.d(e, 'PROGRESS_NO_STRIPES', function() {
            return Be
          }),
          t.d(e, 'PROGRESS_NO_ANIMATION', function() {
            return je
          }),
          t.d(e, 'PORTAL', function() {
            return Fe
          }),
          t.d(e, 'SKELETON', function() {
            return We
          }),
          t.d(e, 'SLIDER', function() {
            return Ke
          }),
          t.d(e, 'SLIDER_AXIS', function() {
            return qe
          }),
          t.d(e, 'SLIDER_HANDLE', function() {
            return Ge
          }),
          t.d(e, 'SLIDER_LABEL', function() {
            return Ye
          }),
          t.d(e, 'SLIDER_TRACK', function() {
            return Xe
          }),
          t.d(e, 'SLIDER_PROGRESS', function() {
            return $e
          }),
          t.d(e, 'START', function() {
            return Qe
          }),
          t.d(e, 'END', function() {
            return Ze
          }),
          t.d(e, 'SPINNER', function() {
            return Je
          }),
          t.d(e, 'SPINNER_HEAD', function() {
            return nt
          }),
          t.d(e, 'SPINNER_NO_SPIN', function() {
            return et
          }),
          t.d(e, 'SPINNER_TRACK', function() {
            return tt
          }),
          t.d(e, 'TAB', function() {
            return rt
          }),
          t.d(e, 'TAB_INDICATOR', function() {
            return ot
          }),
          t.d(e, 'TAB_INDICATOR_WRAPPER', function() {
            return at
          }),
          t.d(e, 'TAB_LIST', function() {
            return it
          }),
          t.d(e, 'TAB_PANEL', function() {
            return ct
          }),
          t.d(e, 'TABS', function() {
            return pt
          }),
          t.d(e, 'TAG', function() {
            return bt
          }),
          t.d(e, 'TAG_REMOVE', function() {
            return lt
          }),
          t.d(e, 'TAG_INPUT', function() {
            return st
          }),
          t.d(e, 'TAG_INPUT_ICON', function() {
            return dt
          }),
          t.d(e, 'TAG_INPUT_VALUES', function() {
            return ut
          }),
          t.d(e, 'TOAST', function() {
            return mt
          }),
          t.d(e, 'TOAST_CONTAINER', function() {
            return ht
          }),
          t.d(e, 'TOAST_MESSAGE', function() {
            return ft
          }),
          t.d(e, 'TOOLTIP', function() {
            return gt
          }),
          t.d(e, 'TOOLTIP_INDICATOR', function() {
            return vt
          }),
          t.d(e, 'TREE', function() {
            return xt
          }),
          t.d(e, 'TREE_NODE', function() {
            return zt
          }),
          t.d(e, 'TREE_NODE_CARET', function() {
            return kt
          }),
          t.d(e, 'TREE_NODE_CARET_CLOSED', function() {
            return wt
          }),
          t.d(e, 'TREE_NODE_CARET_NONE', function() {
            return yt
          }),
          t.d(e, 'TREE_NODE_CARET_OPEN', function() {
            return Mt
          }),
          t.d(e, 'TREE_NODE_CONTENT', function() {
            return _t
          }),
          t.d(e, 'TREE_NODE_EXPANDED', function() {
            return Ht
          }),
          t.d(e, 'TREE_NODE_ICON', function() {
            return Et
          }),
          t.d(e, 'TREE_NODE_LABEL', function() {
            return Vt
          }),
          t.d(e, 'TREE_NODE_LIST', function() {
            return Ct
          }),
          t.d(e, 'TREE_NODE_SECONDARY_LABEL', function() {
            return Lt
          }),
          t.d(e, 'TREE_NODE_SELECTED', function() {
            return At
          }),
          t.d(e, 'TREE_ROOT', function() {
            return Tt
          }),
          t.d(e, 'ICON', function() {
            return St
          }),
          t.d(e, 'ICON_STANDARD', function() {
            return Ot
          }),
          t.d(e, 'ICON_LARGE', function() {
            return Pt
          }),
          t.d(e, 'getClassNamespace', function() {
            return It
          }),
          t.d(e, 'alignmentClass', function() {
            return Dt
          }),
          t.d(e, 'elevationClass', function() {
            return Rt
          }),
          t.d(e, 'iconClass', function() {
            return Nt
          }),
          t.d(e, 'intentClass', function() {
            return Ut
          })
        var r = t(10),
          o = t(8),
          a = t(9),
          i = n.env.BLUEPRINT_NAMESPACE || 'bp3',
          c = i + '-active',
          p = i + '-align-left',
          b = i + '-align-right',
          l = i + '-dark',
          s = i + '-disabled',
          d = i + '-fill',
          u = i + '-fixed',
          m = i + '-fixed-top',
          h = i + '-inline',
          f = i + '-interactive',
          g = i + '-large',
          v = i + '-loading',
          x = i + '-minimal',
          z = i + '-multiline',
          k = i + '-round',
          w = i + '-small',
          y = i + '-vertical',
          M = Rt(o.a.ZERO),
          _ = Rt(o.a.ONE),
          H = Rt(o.a.TWO),
          E = Rt(o.a.THREE),
          V = Rt(o.a.FOUR),
          C = Ut(a.a.PRIMARY),
          L = Ut(a.a.SUCCESS),
          A = Ut(a.a.WARNING),
          T = Ut(a.a.DANGER),
          S = i + '-focus-disabled',
          O = i + '-ui-text',
          P = i + '-running-text',
          I = i + '-monospace-text',
          D = i + '-text-large',
          R = i + '-text-small',
          N = i + '-text-muted',
          U = i + '-text-disabled',
          B = i + '-text-overflow-ellipsis',
          j = i + '-blockquote',
          F = i + '-code',
          W = i + '-code-block',
          K = i + '-heading',
          q = i + '-list',
          G = i + '-list-unstyled',
          Y = i + '-rtl',
          X = i + '-alert',
          $ = X + '-body',
          Q = X + '-contents',
          Z = X + '-footer',
          J = i + '-breadcrumb',
          nn = J + '-current',
          en = J + 's',
          tn = J + 's-collapsed',
          rn = i + '-button',
          on = rn + '-group',
          an = rn + '-spinner',
          cn = rn + '-text',
          pn = i + '-callout',
          bn = pn + '-icon',
          ln = i + '-card',
          sn = i + '-collapse',
          dn = sn + '-body',
          un = i + '-collapse-list',
          mn = i + '-context-menu',
          hn = mn + '-popover-target',
          fn = i + '-control-group',
          gn = i + '-dialog',
          vn = gn + '-container',
          xn = gn + '-body',
          zn = gn + '-close-button',
          kn = gn + '-footer',
          wn = gn + '-footer-actions',
          yn = gn + '-header',
          Mn = i + '-editable-text',
          _n = Mn + '-content',
          Hn = Mn + '-editing',
          En = Mn + '-input',
          Vn = Mn + '-placeholder',
          Cn = i + '-flex-expander',
          Ln = i + '-html-select',
          An = i + '-select',
          Tn = i + '-html-table',
          Sn = Tn + '-striped',
          On = Tn + '-bordered',
          Pn = i + '-input',
          In = Pn + '-ghost',
          Dn = Pn + '-group',
          Rn = Pn + '-action',
          Nn = i + '-control',
          Un = Nn + '-indicator',
          Bn = i + '-checkbox',
          jn = i + '-radio',
          Fn = i + '-switch',
          Wn = i + '-file-input',
          Kn = i + '-file-upload-input',
          qn = i + '-key',
          Gn = qn + '-combo',
          Yn = i + '-modifier-key',
          Xn = i + '-hotkey',
          $n = Xn + '-label',
          Qn = Xn + '-column',
          Zn = Xn + '-dialog',
          Jn = i + '-label',
          ne = i + '-form-group',
          ee = i + '-form-content',
          te = i + '-form-helper-text',
          re = i + '-menu',
          oe = re + '-item',
          ae = oe + '-label',
          ie = i + '-submenu',
          ce = re + '-divider',
          pe = re + '-header',
          be = i + '-navbar',
          le = be + '-group',
          se = be + '-heading',
          de = be + '-divider',
          ue = i + '-non-ideal-state',
          me = ue + '-visual',
          he = i + '-numeric-input',
          fe = i + '-overflow-list',
          ge = fe + '-spacer',
          ve = i + '-overlay',
          xe = ve + '-backdrop',
          ze = ve + '-content',
          ke = ve + '-inline',
          we = ve + '-open',
          ye = ve + '-scroll-container',
          Me = i + '-panel-stack',
          _e = Me + '-header',
          He = Me + '-header-back',
          Ee = Me + '-view',
          Ve = i + '-popover',
          Ce = Ve + '-arrow',
          Le = Ve + '-backdrop',
          Ae = Ve + '-content',
          Te = Ae + '-sizing',
          Se = Ve + '-dismiss',
          Oe = Se + '-override',
          Pe = Ve + '-open',
          Ie = Ve + '-target',
          De = Ve + '-wrapper',
          Re = i + '-transition-container',
          Ne = i + '-progress-bar',
          Ue = i + '-progress-meter',
          Be = i + '-no-stripes',
          je = i + '-no-animation',
          Fe = i + '-portal',
          We = i + '-skeleton',
          Ke = i + '-slider',
          qe = Ke + '-axis',
          Ge = Ke + '-handle',
          Ye = Ke + '-label',
          Xe = Ke + '-track',
          $e = Ke + '-progress',
          Qe = i + '-start',
          Ze = i + '-end',
          Je = i + '-spinner',
          nt = Je + '-head',
          et = i + '-no-spin',
          tt = Je + '-track',
          rt = i + '-tab',
          ot = rt + '-indicator',
          at = ot + '-wrapper',
          it = rt + '-list',
          ct = rt + '-panel',
          pt = rt + 's',
          bt = i + '-tag',
          lt = bt + '-remove',
          st = i + '-tag-input',
          dt = st + '-icon',
          ut = st + '-values',
          mt = i + '-toast',
          ht = mt + '-container',
          ft = mt + '-message',
          gt = i + '-tooltip',
          vt = gt + '-indicator',
          xt = i + '-tree',
          zt = i + '-tree-node',
          kt = zt + '-caret',
          wt = kt + '-closed',
          yt = kt + '-none',
          Mt = kt + '-open',
          _t = zt + '-content',
          Ht = zt + '-expanded',
          Et = zt + '-icon',
          Vt = zt + '-label',
          Ct = zt + '-list',
          Lt = zt + '-secondary-label',
          At = zt + '-selected',
          Tt = i + '-tree-root',
          St = i + '-icon',
          Ot = St + '-standard',
          Pt = St + '-large'
        function It() {
          return i
        }
        function Dt(n) {
          switch (n) {
            case r.a.LEFT:
              return p
            case r.a.RIGHT:
              return b
            default:
              return
          }
        }
        function Rt(n) {
          if (null != n) return i + '-elevation-' + n
        }
        function Nt(n) {
          if (null != n) return 0 === n.indexOf(i + '-icon-') ? n : i + '-icon-' + n
        }
        function Ut(n) {
          if (null != n && n !== a.a.NONE) return i + '-intent-' + n.toLowerCase()
        }
      }.call(this, t(23))
  },
  function(n, e, t) {
    'use strict'
    n.exports = t(55)
  },
  function(n, e, t) {
    'use strict'
    t.d(e, 'b', function() {
      return o
    }),
      t.d(e, 'a', function() {
        return a
      }),
      t.d(e, 'c', function() {
        return i
      })
    /*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
    var r = function(n, e) {
      return (r =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function(n, e) {
            n.__proto__ = e
          }) ||
        function(n, e) {
          for (var t in e) e.hasOwnProperty(t) && (n[t] = e[t])
        })(n, e)
    }
    function o(n, e) {
      function t() {
        this.constructor = n
      }
      r(n, e),
        (n.prototype = null === e ? Object.create(e) : ((t.prototype = e.prototype), new t()))
    }
    var a = function() {
      return (a =
        Object.assign ||
        function(n) {
          for (var e, t = 1, r = arguments.length; t < r; t++)
            for (var o in (e = arguments[t]))
              Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o])
          return n
        }).apply(this, arguments)
    }
    function i(n, e) {
      var t = {}
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && e.indexOf(r) < 0 && (t[r] = n[r])
      if (null != n && 'function' == typeof Object.getOwnPropertySymbols) {
        var o = 0
        for (r = Object.getOwnPropertySymbols(n); o < r.length; o++)
          e.indexOf(r[o]) < 0 && (t[r[o]] = n[r[o]])
      }
      return t
    }
  },
  function(n, e, t) {
    'use strict'
    ;(function(n) {
      t.d(e, 'b', function() {
        return o
      }),
        t.d(e, 'c', function() {
          return i
        }),
        t.d(e, 'd', function() {
          return c
        }),
        t.d(e, 'a', function() {
          return p
        })
      t(0)
      var r = t(17)
      function o(e) {
        return void 0 !== n && n.env && 'production' === e
      }
      function a(n) {
        return 'function' == typeof n
      }
      function i(n, e) {
        return (
          void 0 === e && (e = !1),
          null == n ||
            '' === n ||
            !1 === n ||
            (!e &&
              Array.isArray(n) &&
              (0 === n.length ||
                n.every(function(n) {
                  return i(n, !0)
                })))
        )
      }
      function c(n) {
        for (var e = [], t = 1; t < arguments.length; t++) e[t - 1] = arguments[t]
        if (a(n)) return n.apply(void 0, e)
      }
      function p(n, e, t) {
        if (null == n) return n
        if (t < e) throw new Error(r.a)
        return Math.min(Math.max(n, e), t)
      }
    }.call(this, t(23)))
  },
  function(n, e) {
    n.exports = function(n) {
      if (!n.webpackPolyfill) {
        var e = Object.create(n)
        e.children || (e.children = []),
          Object.defineProperty(e, 'loaded', {
            enumerable: !0,
            get: function() {
              return e.l
            },
          }),
          Object.defineProperty(e, 'id', {
            enumerable: !0,
            get: function() {
              return e.i
            },
          }),
          Object.defineProperty(e, 'exports', { enumerable: !0 }),
          (e.webpackPolyfill = 1)
      }
      return e
    }
  },
  function(n, e, t) {
    var r
    /*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
    /*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
    !(function() {
      'use strict'
      var t = {}.hasOwnProperty
      function o() {
        for (var n = [], e = 0; e < arguments.length; e++) {
          var r = arguments[e]
          if (r) {
            var a = typeof r
            if ('string' === a || 'number' === a) n.push(r)
            else if (Array.isArray(r) && r.length) {
              var i = o.apply(null, r)
              i && n.push(i)
            } else if ('object' === a) for (var c in r) t.call(r, c) && r[c] && n.push(c)
          }
        }
        return n.join(' ')
      }
      void 0 !== n && n.exports
        ? ((o.default = o), (n.exports = o))
        : void 0 ===
            (r = function() {
              return o
            }.apply(e, [])) || (n.exports = r)
    })()
  },
  function(n, e, t) {
    'use strict'
    t.d(e, 'a', function() {
      return r
    })
    var r = { ZERO: 0, ONE: 1, TWO: 2, THREE: 3, FOUR: 4 }
  },
  function(n, e, t) {
    'use strict'
    t.d(e, 'a', function() {
      return r
    })
    var r = {
      NONE: 'none',
      PRIMARY: 'primary',
      SUCCESS: 'success',
      WARNING: 'warning',
      DANGER: 'danger',
    }
  },
  function(n, e, t) {
    'use strict'
    t.d(e, 'a', function() {
      return r
    })
    var r = { CENTER: 'center', LEFT: 'left', RIGHT: 'right' }
  },
  function(n, e, t) {
    'use strict'
    t.d(e, 'a', function() {
      return r
    }),
      t.d(e, 'b', function() {
        return o
      })
    var r = 13,
      o = 32
  },
  function(n, e, t) {
    'use strict'
    ;(function(n) {
      function t(n, e, t, r, o, a) {
        t &&
          (Array.isArray(o)
            ? (function(n, e, t, r, o, a) {
                for (var i = Math.min(o.length, a.length), c = 0; c < i; c++)
                  if (n.assigned[c] && o[c] !== a[c]) {
                    var p = e.concat(c)
                    t.push({ op: 'replace', path: p, value: a[c] }),
                      r.push({ op: 'replace', path: p, value: o[c] })
                  }
                if (i < a.length) {
                  for (var b = i; b < a.length; b++) {
                    var l = e.concat(b)
                    t.push({ op: 'add', path: l, value: a[b] })
                  }
                  r.push({ op: 'replace', path: e.concat('length'), value: o.length })
                } else if (i < o.length) {
                  t.push({ op: 'replace', path: e.concat('length'), value: a.length })
                  for (var s = i; s < o.length; s++) {
                    var d = e.concat(s)
                    r.push({ op: 'add', path: d, value: o[s] })
                  }
                }
              })(n, e, t, r, o, a)
            : (function(n, e, t, r, o, a) {
                u(n.assigned, function(n, i) {
                  var c = o[n],
                    p = a[n],
                    b = i ? (n in o ? 'replace' : 'add') : 'remove'
                  if (c !== o || 'replace' !== b) {
                    var l = e.concat(n)
                    t.push('remove' === b ? { op: b, path: l } : { op: b, path: l, value: p }),
                      r.push(
                        'add' === b
                          ? { op: 'remove', path: l }
                          : 'remove' === b
                            ? { op: 'add', path: l, value: c }
                            : { op: 'replace', path: l, value: c },
                      )
                  }
                })
              })(n, e, t, r, o, a))
      }
      var r =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(n) {
                return typeof n
              }
            : function(n) {
                return n &&
                  'function' == typeof Symbol &&
                  n.constructor === Symbol &&
                  n !== Symbol.prototype
                  ? 'symbol'
                  : typeof n
              },
        o = 'undefined' != typeof Symbol ? Symbol('immer-proxy-state') : '__$immer_state',
        a =
          'An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.'
      var i = !(void 0 !== n || 'verifyMinified' !== function() {}.name),
        c = 'undefined' != typeof Proxy
      function p(n) {
        return !!n && !!n[o]
      }
      function b(n) {
        if (!n) return !1
        if ('object' !== (void 0 === n ? 'undefined' : r(n))) return !1
        if (Array.isArray(n)) return !0
        var e = Object.getPrototypeOf(n)
        return null === e || e === Object.prototype
      }
      function l(n) {
        return i && Object.freeze(n), n
      }
      var s =
        Object.assign ||
        function(n, e) {
          for (var t in e) m(e, t) && (n[t] = e[t])
          return n
        }
      function d(n) {
        if (Array.isArray(n)) return n.slice()
        var e = void 0 === n.__proto__ ? Object.create(null) : {}
        return s(e, n)
      }
      function u(n, e) {
        if (Array.isArray(n)) for (var t = 0; t < n.length; t++) e(t, n[t])
        else for (var r in n) e(r, n[r])
      }
      function m(n, e) {
        return Object.prototype.hasOwnProperty.call(n, e)
      }
      function h(n, e, r, a) {
        if (p(n)) {
          var i = n[o]
          if (!0 === i.modified) {
            if (!0 === i.finalized) return i.copy
            i.finalized = !0
            var s = (function(n, e, t, r, o) {
              var a = e.base
              return (
                u(n, function(i, c) {
                  if (c !== a[i]) {
                    var p = r && !m(e.assigned, i)
                    n[i] = h(c, p && t.concat(i), p && r, o)
                  }
                }),
                l(n)
              )
            })(c ? i.copy : (i.copy = d(n)), i, e, r, a)
            return t(i, e, r, a, i.base, s), s
          }
          return i.base
        }
        return (
          (function n(e) {
            if (!b(e)) return
            if (Object.isFrozen(e)) return
            u(e, function(t, r) {
              p(r) ? (e[t] = h(r)) : n(r)
            })
            l(e)
          })(n),
          n
        )
      }
      function f(n, e) {
        return n === e ? 0 !== n || 1 / n == 1 / e : n != n && e != e
      }
      var g = null,
        v = {
          get: function(n, e) {
            if (e === o) return n
            if (n.modified) {
              var t = n.copy[e]
              return t === n.base[e] && b(t) ? (n.copy[e] = w(n, t)) : t
            }
            if (m(n.proxies, e)) return n.proxies[e]
            var r = n.base[e]
            return !p(r) && b(r) ? (n.proxies[e] = w(n, r)) : r
          },
          has: function(n, e) {
            return e in z(n)
          },
          ownKeys: function(n) {
            return Reflect.ownKeys(z(n))
          },
          set: function(n, e, t) {
            if (((n.assigned[e] = !0), !n.modified)) {
              if ((e in n.base && f(n.base[e], t)) || (m(n.proxies, e) && n.proxies[e] === t))
                return !0
              k(n)
            }
            return (n.copy[e] = t), !0
          },
          deleteProperty: function(n, e) {
            return (n.assigned[e] = !1), k(n), delete n.copy[e], !0
          },
          getOwnPropertyDescriptor: function(n, e) {
            var t = n.modified ? n.copy : m(n.proxies, e) ? n.proxies : n.base,
              r = Reflect.getOwnPropertyDescriptor(t, e)
            !r || (Array.isArray(t) && 'length' === e) || (r.configurable = !0)
            return r
          },
          defineProperty: function() {
            throw new Error('Immer does not support defining properties on draft objects.')
          },
          setPrototypeOf: function() {
            throw new Error('Immer does not support `setPrototypeOf()`.')
          },
        },
        x = {}
      function z(n) {
        return !0 === n.modified ? n.copy : n.base
      }
      function k(n) {
        n.modified ||
          ((n.modified = !0),
          (n.copy = d(n.base)),
          Object.assign(n.copy, n.proxies),
          n.parent && k(n.parent))
      }
      function w(n, e, t) {
        if (p(e)) throw new Error('Immer bug. Plz report.')
        var r = (function(n, e) {
            return {
              modified: !1,
              assigned: {},
              finalized: !1,
              parent: n,
              base: e,
              copy: void 0,
              proxies: {},
            }
          })(n, e),
          o = Array.isArray(e) ? Proxy.revocable([r], x) : Proxy.revocable(r, v)
        return g.push(o), o.proxy
      }
      u(v, function(n, e) {
        x[n] = function() {
          return (arguments[0] = arguments[0][0]), e.apply(this, arguments)
        }
      })
      var y = {},
        M = null
      function _(n) {
        return n.hasCopy ? n.copy : n.base
      }
      function H(n) {
        n.modified || ((n.modified = !0), n.parent && H(n.parent))
      }
      function E(n) {
        n.hasCopy || ((n.hasCopy = !0), (n.copy = d(n.base)))
      }
      function V(n, e) {
        var t = d(e)
        u(e, function(n) {
          Object.defineProperty(
            t,
            '' + n,
            (function(n) {
              return (
                y[n] ||
                (y[n] = {
                  configurable: !0,
                  enumerable: !0,
                  get: function() {
                    return (function(n, e) {
                      C(n)
                      var t = _(n)[e]
                      return !n.finalizing && t === n.base[e] && b(t)
                        ? (E(n), (n.copy[e] = V(n, t)))
                        : t
                    })(this[o], n)
                  },
                  set: function(e) {
                    !(function(n, e, t) {
                      if ((C(n), (n.assigned[e] = !0), !n.modified)) {
                        if (f(_(n)[e], t)) return
                        H(n), E(n)
                      }
                      n.copy[e] = t
                    })(this[o], n, e)
                  },
                })
              )
            })('' + n),
          )
        })
        var r = (function(n, e, t) {
          return {
            modified: !1,
            assigned: {},
            hasCopy: !1,
            parent: n,
            base: t,
            proxy: e,
            copy: void 0,
            finished: !1,
            finalizing: !1,
            finalized: !1,
          }
        })(n, t, e)
        return (
          (function(n, e, t) {
            Object.defineProperty(n, e, { value: t, enumerable: !1, writable: !0 })
          })(t, o, r),
          M.push(r),
          t
        )
      }
      function C(n) {
        if (!0 === n.finished)
          throw new Error(
            'Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? ' +
              JSON.stringify(n.copy || n.base),
          )
      }
      function L(n) {
        if (n && 'object' === (void 0 === n ? 'undefined' : r(n))) {
          var e = n[o]
          if (e) {
            var t = e.proxy,
              a = e.base
            if (Array.isArray(n)) {
              if (T(e)) {
                if ((H(e), (e.assigned.length = !0), t.length < a.length))
                  for (var i = t.length; i < a.length; i++) e.assigned[i] = !1
                else for (var c = a.length; c < t.length; c++) e.assigned[c] = !0
                u(t, function(n, t) {
                  e.assigned[n] || L(t)
                })
              }
            } else {
              var p = (function(n, e) {
                  var t = Object.keys(n),
                    r = Object.keys(e)
                  return {
                    added: r.filter(function(n) {
                      return -1 === t.indexOf(n)
                    }),
                    removed: t.filter(function(n) {
                      return -1 === r.indexOf(n)
                    }),
                  }
                })(a, t),
                b = p.added,
                l = p.removed
              ;(b.length > 0 || l.length > 0) && H(e),
                u(b, function(n, t) {
                  e.assigned[t] = !0
                }),
                u(l, function(n, t) {
                  e.assigned[t] = !1
                }),
                u(t, function(n, t) {
                  e.assigned[n] || L(t)
                })
            }
          }
        }
      }
      function A(n) {
        return !(function(n, e) {
          if (f(n, e)) return !0
          if (
            'object' !== (void 0 === n ? 'undefined' : r(n)) ||
            null === n ||
            'object' !== (void 0 === e ? 'undefined' : r(e)) ||
            null === e
          )
            return !1
          var t = Object.keys(n),
            o = Object.keys(e)
          if (t.length !== o.length) return !1
          for (var a = 0; a < t.length; a++)
            if (!hasOwnProperty.call(e, t[a]) || !f(n[t[a]], e[t[a]])) return !1
          return !0
        })(Object.keys(n.base), Object.keys(n.proxy))
      }
      function T(n) {
        var e = n.proxy
        if (e.length !== n.base.length) return !0
        var t = Object.getOwnPropertyDescriptor(e, e.length - 1)
        return !(!t || t.get)
      }
      function S(n, e, t) {
        if (p(n)) {
          var r = e.call(n, n)
          return void 0 === r ? n : r
        }
        var i = M
        M = []
        var c = t && [],
          b = t && []
        try {
          var l = V(void 0, n),
            s = e.call(l, l)
          u(M, function(n, e) {
            e.finalizing = !0
          })
          var d = void 0
          if (void 0 !== s && s !== l) {
            if (l[o].modified) throw new Error(a)
            ;(d = h(s)),
              c &&
                (c.push({ op: 'replace', path: [], value: d }),
                b.push({ op: 'replace', path: [], value: n }))
          } else
            t && L(l),
              (function() {
                for (var n = M.length - 1; n >= 0; n--) {
                  var e = M[n]
                  !1 === e.modified && (Array.isArray(e.base) ? T(e) && H(e) : A(e) && H(e))
                }
              })(),
              (d = h(l, [], c, b))
          return (
            u(M, function(n, e) {
              e.finished = !0
            }),
            t && t(c, b),
            d
          )
        } finally {
          M = i
        }
      }
      function O(n, e, t) {
        if (arguments.length < 1 || arguments.length > 3)
          throw new Error('produce expects 1 to 3 arguments, got ' + arguments.length)
        if ('function' == typeof n) {
          if ('function' == typeof e)
            throw new Error(
              'if first argument is a function (curried invocation), the second argument to produce cannot be a function',
            )
          var i = e,
            l = n
          return function() {
            var n = arguments
            return O(void 0 === n[0] && void 0 !== i ? i : n[0], function(e) {
              return (n[0] = e), l.apply(e, n)
            })
          }
        }
        if ('function' != typeof e)
          throw new Error(
            'if first argument is not a function, the second argument to produce should be a function',
          )
        if (void 0 !== t && 'function' != typeof t)
          throw new Error('the third argument of a producer should not be set or a function')
        if ('object' !== (void 0 === n ? 'undefined' : r(n)) || null === n) {
          var s = e(n)
          return void 0 === s ? n : s
        }
        if (!b(n))
          throw new Error(
            'the first argument to an immer producer should be a primitive, plain object or array, got ' +
              (void 0 === n ? 'undefined' : r(n)) +
              ': "' +
              n +
              '"',
          )
        return c
          ? (function(n, e, t) {
              if (p(n)) {
                var r = e.call(n, n)
                return void 0 === r ? n : r
              }
              var i = g
              g = []
              var c = t && [],
                b = t && []
              try {
                var l = w(void 0, n),
                  s = e.call(l, l),
                  d = void 0
                if (void 0 !== s && s !== l) {
                  if (l[o].modified) throw new Error(a)
                  ;(d = h(s)),
                    c &&
                      (c.push({ op: 'replace', path: [], value: d }),
                      b.push({ op: 'replace', path: [], value: n }))
                } else d = h(l, [], c, b)
                return (
                  u(g, function(n, e) {
                    return e.revoke()
                  }),
                  t && t(c, b),
                  d
                )
              } finally {
                g = i
              }
            })(n, e, t)
          : S(n, e, t)
      }
      O(function(n, e) {
        for (
          var t = function(t) {
              var r = e[t]
              if (0 === r.path.length && 'replace' === r.op) n = r.value
              else {
                var o = r.path.slice(),
                  a = o.pop(),
                  i = o.reduce(function(n, e) {
                    if (!n)
                      throw new Error(
                        "Cannot apply patch, path doesn't resolve: " + r.path.join('/'),
                      )
                    return n[e]
                  }, n)
                if (!i)
                  throw new Error("Cannot apply patch, path doesn't resolve: " + r.path.join('/'))
                switch (r.op) {
                  case 'replace':
                  case 'add':
                    i[a] = r.value
                    break
                  case 'remove':
                    if (Array.isArray(i)) {
                      if (a !== i.length - 1)
                        throw new Error(
                          'Remove can only remove the last key of an array, index: ' +
                            a +
                            ', length: ' +
                            i.length,
                        )
                      i.length -= 1
                    } else delete i[a]
                    break
                  default:
                    throw new Error('Unsupported patch operation: ' + r.op)
                }
              }
            },
            r = 0;
          r < e.length;
          r++
        )
          t(r)
        return n
      })
      e.a = O
    }.call(this, t(23)))
  },
  function(n, e) {
    n.exports = function(n) {
      var e = []
      return (
        (e.toString = function() {
          return this.map(function(e) {
            var t = (function(n, e) {
              var t = n[1] || '',
                r = n[3]
              if (!r) return t
              if (e && 'function' == typeof btoa) {
                var o = (function(n) {
                    return (
                      '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,' +
                      btoa(unescape(encodeURIComponent(JSON.stringify(n)))) +
                      ' */'
                    )
                  })(r),
                  a = r.sources.map(function(n) {
                    return '/*# sourceURL=' + r.sourceRoot + n + ' */'
                  })
                return [t]
                  .concat(a)
                  .concat([o])
                  .join('\n')
              }
              return [t].join('\n')
            })(e, n)
            return e[2] ? '@media ' + e[2] + '{' + t + '}' : t
          }).join('')
        }),
        (e.i = function(n, t) {
          'string' == typeof n && (n = [[null, n, '']])
          for (var r = {}, o = 0; o < this.length; o++) {
            var a = this[o][0]
            'number' == typeof a && (r[a] = !0)
          }
          for (o = 0; o < n.length; o++) {
            var i = n[o]
            ;('number' == typeof i[0] && r[i[0]]) ||
              (t && !i[2] ? (i[2] = t) : t && (i[2] = '(' + i[2] + ') and (' + t + ')'), e.push(i))
          }
        }),
        e
      )
    }
  },
  function(n, e, t) {
    var r = {},
      o = (function(n) {
        var e
        return function() {
          return void 0 === e && (e = n.apply(this, arguments)), e
        }
      })(function() {
        return window && document && document.all && !window.atob
      }),
      a = (function(n) {
        var e = {}
        return function(n) {
          if ('function' == typeof n) return n()
          if (void 0 === e[n]) {
            var t = function(n) {
              return document.querySelector(n)
            }.call(this, n)
            if (window.HTMLIFrameElement && t instanceof window.HTMLIFrameElement)
              try {
                t = t.contentDocument.head
              } catch (n) {
                t = null
              }
            e[n] = t
          }
          return e[n]
        }
      })(),
      i = null,
      c = 0,
      p = [],
      b = t(45)
    function l(n, e) {
      for (var t = 0; t < n.length; t++) {
        var o = n[t],
          a = r[o.id]
        if (a) {
          a.refs++
          for (var i = 0; i < a.parts.length; i++) a.parts[i](o.parts[i])
          for (; i < o.parts.length; i++) a.parts.push(f(o.parts[i], e))
        } else {
          var c = []
          for (i = 0; i < o.parts.length; i++) c.push(f(o.parts[i], e))
          r[o.id] = { id: o.id, refs: 1, parts: c }
        }
      }
    }
    function s(n, e) {
      for (var t = [], r = {}, o = 0; o < n.length; o++) {
        var a = n[o],
          i = e.base ? a[0] + e.base : a[0],
          c = { css: a[1], media: a[2], sourceMap: a[3] }
        r[i] ? r[i].parts.push(c) : t.push((r[i] = { id: i, parts: [c] }))
      }
      return t
    }
    function d(n, e) {
      var t = a(n.insertInto)
      if (!t)
        throw new Error(
          "Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.",
        )
      var r = p[p.length - 1]
      if ('top' === n.insertAt)
        r
          ? r.nextSibling
            ? t.insertBefore(e, r.nextSibling)
            : t.appendChild(e)
          : t.insertBefore(e, t.firstChild),
          p.push(e)
      else if ('bottom' === n.insertAt) t.appendChild(e)
      else {
        if ('object' != typeof n.insertAt || !n.insertAt.before)
          throw new Error(
            "[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n",
          )
        var o = a(n.insertInto + ' ' + n.insertAt.before)
        t.insertBefore(e, o)
      }
    }
    function u(n) {
      if (null === n.parentNode) return !1
      n.parentNode.removeChild(n)
      var e = p.indexOf(n)
      e >= 0 && p.splice(e, 1)
    }
    function m(n) {
      var e = document.createElement('style')
      return void 0 === n.attrs.type && (n.attrs.type = 'text/css'), h(e, n.attrs), d(n, e), e
    }
    function h(n, e) {
      Object.keys(e).forEach(function(t) {
        n.setAttribute(t, e[t])
      })
    }
    function f(n, e) {
      var t, r, o, a
      if (e.transform && n.css) {
        if (!(a = e.transform(n.css))) return function() {}
        n.css = a
      }
      if (e.singleton) {
        var p = c++
        ;(t = i || (i = m(e))), (r = v.bind(null, t, p, !1)), (o = v.bind(null, t, p, !0))
      } else
        n.sourceMap &&
        'function' == typeof URL &&
        'function' == typeof URL.createObjectURL &&
        'function' == typeof URL.revokeObjectURL &&
        'function' == typeof Blob &&
        'function' == typeof btoa
          ? ((t = (function(n) {
              var e = document.createElement('link')
              return (
                void 0 === n.attrs.type && (n.attrs.type = 'text/css'),
                (n.attrs.rel = 'stylesheet'),
                h(e, n.attrs),
                d(n, e),
                e
              )
            })(e)),
            (r = function(n, e, t) {
              var r = t.css,
                o = t.sourceMap,
                a = void 0 === e.convertToAbsoluteUrls && o
              ;(e.convertToAbsoluteUrls || a) && (r = b(r))
              o &&
                (r +=
                  '\n/*# sourceMappingURL=data:application/json;base64,' +
                  btoa(unescape(encodeURIComponent(JSON.stringify(o)))) +
                  ' */')
              var i = new Blob([r], { type: 'text/css' }),
                c = n.href
              ;(n.href = URL.createObjectURL(i)), c && URL.revokeObjectURL(c)
            }.bind(null, t, e)),
            (o = function() {
              u(t), t.href && URL.revokeObjectURL(t.href)
            }))
          : ((t = m(e)),
            (r = function(n, e) {
              var t = e.css,
                r = e.media
              r && n.setAttribute('media', r)
              if (n.styleSheet) n.styleSheet.cssText = t
              else {
                for (; n.firstChild; ) n.removeChild(n.firstChild)
                n.appendChild(document.createTextNode(t))
              }
            }.bind(null, t)),
            (o = function() {
              u(t)
            }))
      return (
        r(n),
        function(e) {
          if (e) {
            if (e.css === n.css && e.media === n.media && e.sourceMap === n.sourceMap) return
            r((n = e))
          } else o()
        }
      )
    }
    n.exports = function(n, e) {
      if ('undefined' != typeof DEBUG && DEBUG && 'object' != typeof document)
        throw new Error('The style-loader cannot be used in a non-browser environment')
      ;((e = e || {}).attrs = 'object' == typeof e.attrs ? e.attrs : {}),
        e.singleton || 'boolean' == typeof e.singleton || (e.singleton = o()),
        e.insertInto || (e.insertInto = 'head'),
        e.insertAt || (e.insertAt = 'bottom')
      var t = s(n, e)
      return (
        l(t, e),
        function(n) {
          for (var o = [], a = 0; a < t.length; a++) {
            var i = t[a]
            ;(c = r[i.id]).refs--, o.push(c)
          }
          n && l(s(n, e), e)
          for (a = 0; a < o.length; a++) {
            var c
            if (0 === (c = o[a]).refs) {
              for (var p = 0; p < c.parts.length; p++) c.parts[p]()
              delete r[c.id]
            }
          }
        }
      )
    }
    var g = (function() {
      var n = []
      return function(e, t) {
        return (n[e] = t), n.filter(Boolean).join('\n')
      }
    })()
    function v(n, e, t, r) {
      var o = t ? '' : r.css
      if (n.styleSheet) n.styleSheet.cssText = g(e, o)
      else {
        var a = document.createTextNode(o),
          i = n.childNodes
        i[e] && n.removeChild(i[e]), i.length ? n.insertBefore(a, i[e]) : n.appendChild(a)
      }
    }
  },
  function(n, e, t) {
    'use strict'
    t.d(e, 'a', function() {
      return i
    })
    var r = t(4),
      o = t(0),
      a = t(5),
      i = (function(n) {
        function e(e, t) {
          var r = n.call(this, e, t) || this
          return (
            (r.timeoutIds = []),
            (r.clearTimeouts = function() {
              if (r.timeoutIds.length > 0) {
                for (var n = 0, e = r.timeoutIds; n < e.length; n++) {
                  var t = e[n]
                  window.clearTimeout(t)
                }
                r.timeoutIds = []
              }
            }),
            Object(a.b)('production') || r.validateProps(r.props),
            r
          )
        }
        return (
          r.b(e, n),
          (e.prototype.componentWillReceiveProps = function(n) {
            Object(a.b)('production') || this.validateProps(n)
          }),
          (e.prototype.componentWillUnmount = function() {
            this.clearTimeouts()
          }),
          (e.prototype.setTimeout = function(n, e) {
            var t = window.setTimeout(n, e)
            return (
              this.timeoutIds.push(t),
              function() {
                return window.clearTimeout(t)
              }
            )
          }),
          (e.prototype.validateProps = function(n) {}),
          e
        )
      })(o.PureComponent)
  },
  function(n, e, t) {
    'use strict'
    ;(function(n) {
      function r(n, e) {
        const t = []
        for (let r = n; r < e; r++) t.push(r)
        return t
      }
      function o(n, e, t) {
        return e < n && (e = n), e > t && (e = t), e
      }
      t.d(e, 'b', function() {
        return r
      }),
        t.d(e, 'a', function() {
          return o
        }),
        (function() {
          var e = t(3).enterModule
          e && e(n)
        })(),
        (function() {
          var e = t(3).default,
            a = t(3).leaveModule
          e &&
            (e.register(
              r,
              'range',
              'C:/Users/95371/Desktop/relation-label-tool/packages/frontend/src/utils.js',
            ),
            e.register(
              o,
              'clamp',
              'C:/Users/95371/Desktop/relation-label-tool/packages/frontend/src/utils.js',
            ),
            a(n))
        })()
    }.call(this, t(6)(n)))
  },
  function(n, e, t) {
    'use strict'
    t.d(e, 'a', function() {
      return o
    }),
      t.d(e, 'b', function() {
        return a
      })
    var r = '[Blueprint]',
      o = r + ' clamp: max cannot be less than min',
      a = r + ' <Spinner> Classes.SMALL/LARGE are ignored if size prop is set.'
  },
  function(n, e, t) {
    'use strict'
    ;(function(n) {
      t.d(e, 'a', function() {
        return r
      }),
        t.d(e, 'b', function() {
          return o
        }),
        (function() {
          var e = t(3).enterModule
          e && e(n)
        })()
      const r = { s1: 0, e1: 0, s2: 0, e2: 0, relations: [] },
        o = ['合作', '从属', '买卖', '合并', '竞争']
      !(function() {
        var e = t(3).default,
          a = t(3).leaveModule
        e &&
          (e.register(
            r,
            'EMPTY_PAIR',
            'C:/Users/95371/Desktop/relation-label-tool/packages/frontend/src/constants.js',
          ),
          e.register(
            o,
            'RELATION_TYPES',
            'C:/Users/95371/Desktop/relation-label-tool/packages/frontend/src/constants.js',
          ),
          a(n))
      })()
    }.call(this, t(6)(n)))
  },
  function(n, e, t) {
    'use strict'
    var r = t(2)
    t.d(e, 'a', function() {
      return r
    })
  },
  function(n, e, t) {
    'use strict'
    var r = t(4),
      o = t(0),
      a = t(1),
      i = t(7),
      c = t.n(i),
      p = t(2),
      b = t(11),
      l = t(5),
      s = {
        add: [
          'M10.99 6.99h-2v-2c0-.55-.45-1-1-1s-1 .45-1 1v2h-2c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1v-2h2c.55 0 1-.45 1-1s-.45-1-1-1zm-3-7c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.68 6-6 6z',
        ],
        'add-column-left': [
          'M15 0H1C.45 0 0 .45 0 1v14c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-5 14H2V2h8v12zm4 0h-3V2h3v12zM4 9h1v1c0 .55.45 1 1 1s1-.45 1-1V9h1c.55 0 1-.45 1-1s-.45-1-1-1H7V6c0-.55-.45-1-1-1s-1 .45-1 1v1H4c-.55 0-1 .45-1 1s.45 1 1 1z',
        ],
        'add-column-right': [
          'M8 9h1v1c0 .55.45 1 1 1s1-.45 1-1V9h1c.55 0 1-.45 1-1s-.45-1-1-1h-1V6c0-.55-.45-1-1-1s-1 .45-1 1v1H8c-.55 0-1 .45-1 1s.45 1 1 1zm7-9H1C.45 0 0 .45 0 1v14c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zM5 14H2V2h3v12zm9 0H6V2h8v12z',
        ],
        'add-row-bottom': [
          'M6 11h1v1c0 .55.45 1 1 1s1-.45 1-1v-1h1c.55 0 1-.45 1-1s-.45-1-1-1H9V8c0-.55-.45-1-1-1s-1 .45-1 1v1H6c-.55 0-1 .45-1 1s.45 1 1 1zm9-11H1C.45 0 0 .45 0 1v14c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-1 14H2V6h12v8zm0-9H2V2h12v3z',
        ],
        'add-row-top': [
          'M15 0H1C.45 0 0 .45 0 1v14c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-1 14H2v-3h12v3zm0-4H2V2h12v8zM6 7h1v1c0 .55.45 1 1 1s1-.45 1-1V7h1c.55 0 1-.45 1-1s-.45-1-1-1H9V4c0-.55-.45-1-1-1s-1 .45-1 1v1H6c-.55 0-1 .45-1 1s.45 1 1 1z',
        ],
        'add-to-artifact': [
          'M14 4.01h-1v-1c0-.55-.45-1-1-1s-1 .45-1 1v1h-1c-.55 0-1 .45-1 1s.45 1 1 1h1v1c0 .55.45 1 1 1s1-.45 1-1v-1h1c.55 0 1-.45 1-1 0-.56-.45-1-1-1zm-13 2h6c.55 0 1-.45 1-1s-.45-1-1-1H1c-.55 0-1 .45-1 1s.45 1 1 1zm8 6H1c-.55 0-1 .45-1 1s.45 1 1 1h8c.55 0 1-.45 1-1 0-.56-.45-1-1-1zm0-4H1c-.55 0-1 .45-1 1s.45 1 1 1h8c.55 0 1-.45 1-1 0-.56-.45-1-1-1z',
        ],
        'add-to-folder': [
          'M.01 7V5H16v7c0 .55-.45 1-1 1H9.005v-2.99C8.974 8.332 7.644 7 5.996 7H.01zM15 2H7.416L5.706.29a.996.996 0 0 0-.71-.29H1C.45 0 0 .45 0 1v3h15.99V3c.01-.55-.44-1-.99-1zM5.997 9H2c-.55 0-1 .45-1 1s.45 1 1 1h1.589L.3 14.29a1.003 1.003 0 0 0 1.42 1.42l3.287-3.29v1.59c0 .55.45 1 1 1 .549 0 .999-.45.999-1v-4A1.02 1.02 0 0 0 5.996 9z',
        ],
        airplane: [
          'M16 1.5A1.498 1.498 0 0 0 13.44.44L9.91 3.97 2 1 1 3l5.93 3.95L3.88 10H1l-1 1 3 2 2 3 1-1v-2.88l3.05-3.05L13 15l2-1-2.97-7.91 3.53-3.53c.27-.27.44-.65.44-1.06z',
        ],
        'align-center': [
          'M4 4c-.55 0-1 .45-1 1s.45 1 1 1h8c.55 0 1-.45 1-1s-.45-1-1-1H4zM1 3h14c.55 0 1-.45 1-1s-.45-1-1-1H1c-.55 0-1 .45-1 1s.45 1 1 1zm13 10H2c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1zm1-6H1c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1zm-5 5c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1s.45 1 1 1h4z',
        ],
        'align-justify': [
          'M15 12.98H1c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1zm-14-10h14c.55 0 1-.45 1-1s-.45-1-1-1H1c-.55 0-1 .45-1 1 0 .56.45 1 1 1zm14 4H1c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1zm0-3H1c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1zm0 6H1c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1z',
        ],
        'align-left': [
          'M13 13H1c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1zM1 3h14c.55 0 1-.45 1-1s-.45-1-1-1H1c-.55 0-1 .45-1 1s.45 1 1 1zm0 3h8c.55 0 1-.45 1-1s-.45-1-1-1H1c-.55 0-1 .45-1 1s.45 1 1 1zm14 1H1c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1zM1 12h4c.55 0 1-.45 1-1s-.45-1-1-1H1c-.55 0-1 .45-1 1s.45 1 1 1z',
        ],
        'align-right': [
          'M15 12.98H3c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1zm-14-10h14c.55 0 1-.45 1-1s-.45-1-1-1H1c-.55 0-1 .45-1 1 0 .56.45 1 1 1zm14 1H7c-.55 0-1 .45-1 1s.45 1 1 1h8c.55 0 1-.45 1-1s-.45-1-1-1zm0 6h-4c-.55 0-1 .45-1 1s.45 1 1 1h4c.55 0 1-.45 1-1s-.45-1-1-1zm0-3H1c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1z',
        ],
        'alignment-bottom': [
          'M10 12h3c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm5 2H1c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1zM3 12h3c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1z',
        ],
        'alignment-horizontal-center': [
          'M15 7h-1V6c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1v1H7V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v4H1c-.55 0-1 .45-1 1s.45 1 1 1h1v4c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V9h2v1c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V9h1c.55 0 1-.45 1-1s-.45-1-1-1z',
        ],
        'alignment-left': [
          'M9 9H5c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1zM1 0C.45 0 0 .45 0 1v14c0 .55.45 1 1 1s1-.45 1-1V1c0-.55-.45-1-1-1zm13 2H5c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h9c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1z',
        ],
        'alignment-right': [
          'M11 9H7c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1zm4-9c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1s1-.45 1-1V1c0-.55-.45-1-1-1zm-4 2H2c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h9c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1z',
        ],
        'alignment-top': [
          'M15 0H1C.45 0 0 .45 0 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1zM6 4H3c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zm7 0h-3c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1z',
        ],
        'alignment-vertical-center': [
          'M13 2H9V1c0-.55-.45-1-1-1S7 .45 7 1v1H3c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h4v2H6c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h1v1c0 .55.45 1 1 1s1-.45 1-1v-1h1c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1H9V7h4c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1z',
        ],
        annotation: [
          'M15.52 2.77c.3-.29.48-.7.48-1.15C16 .73 15.27 0 14.38 0c-.45 0-.85.18-1.15.48l-1.34 1.34 2.3 2.3 1.33-1.35zM7.4 10.9l6.21-6.21-2.3-2.3L5.1 8.6l2.3 2.3zM14 14H2V2h6.34l2-2H1C.45 0 0 .45 0 1v14c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V5.66l-2 2V14zM3 13l3.58-1.29-2.29-2.27L3 13z',
        ],
        application: [
          'M3.5 7h7c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-7c-.28 0-.5.22-.5.5s.22.5.5.5zM15 1H1c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zm-1 12H2V5h12v8zM3.5 9h4c.28 0 .5-.22.5-.5S7.78 8 7.5 8h-4c-.28 0-.5.22-.5.5s.22.5.5.5zm0 2h5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-5c-.28 0-.5.22-.5.5s.22.5.5.5z',
        ],
        applications: [
          'M3.5 11h2c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-2c-.28 0-.5.22-.5.5s.22.5.5.5zm0-2h5c.28 0 .5-.22.5-.5S8.78 8 8.5 8h-5c-.28 0-.5.22-.5.5s.22.5.5.5zM11 4H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zm-1 10H2V7h8v7zm5-14H5c-.55 0-1 .45-1 1v2h2V2h8v7h-1v2h2c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zM3.5 13h3c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-3c-.28 0-.5.22-.5.5s.22.5.5.5z',
        ],
        'arrow-bottom-left': [
          'M14 3a1.003 1.003 0 0 0-1.71-.71L4 10.59V6c0-.55-.45-1-1-1s-1 .45-1 1v7c0 .55.45 1 1 1h7c.55 0 1-.45 1-1s-.45-1-1-1H5.41l8.29-8.29c.19-.18.3-.43.3-.71z',
        ],
        'arrow-bottom-right': [
          'M13 5c-.55 0-1 .45-1 1v4.59l-8.29-8.3a1.003 1.003 0 0 0-1.42 1.42l8.3 8.29H6c-.55 0-1 .45-1 1s.45 1 1 1h7c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1z',
        ],
        'arrow-down': [
          'M13 8c-.3 0-.5.1-.7.3L9 11.6V2c0-.5-.4-1-1-1s-1 .5-1 1v9.6L3.7 8.3C3.5 8.1 3.3 8 3 8c-.5 0-1 .5-1 1 0 .3.1.5.3.7l5 5c.2.2.4.3.7.3s.5-.1.7-.3l5-5c.2-.2.3-.4.3-.7 0-.6-.4-1-1-1z',
        ],
        'arrow-left': [
          'M13.99 6.99H4.41L7.7 3.7a1.003 1.003 0 0 0-1.42-1.42l-5 5a1.014 1.014 0 0 0 0 1.42l5 5a1.003 1.003 0 0 0 1.42-1.42L4.41 8.99H14c.55 0 1-.45 1-1s-.46-1-1.01-1z',
        ],
        'arrow-right': [
          'M14.7 7.29l-5-5a.965.965 0 0 0-.71-.3 1.003 1.003 0 0 0-.71 1.71l3.29 3.29H1.99c-.55 0-1 .45-1 1s.45 1 1 1h9.59l-3.29 3.29a1.003 1.003 0 0 0 1.42 1.42l5-5c.18-.18.29-.43.29-.71s-.12-.52-.3-.7z',
        ],
        'arrow-top-left': [
          'M13.71 12.29L5.41 4H10c.55 0 1-.45 1-1s-.45-1-1-1H3c-.55 0-1 .45-1 1v7c0 .55.45 1 1 1s1-.45 1-1V5.41l8.29 8.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71z',
        ],
        'arrow-top-right': [
          'M13 2H6c-.55 0-1 .45-1 1s.45 1 1 1h4.59L2.3 12.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71L12 5.41V10c0 .55.45 1 1 1s1-.45 1-1V3c0-.55-.45-1-1-1z',
        ],
        'arrow-up': [
          'M13.7 6.3l-5-5C8.5 1.1 8.3 1 8 1s-.5.1-.7.3l-5 5c-.2.2-.3.4-.3.7 0 .6.5 1 1 1 .3 0 .5-.1.7-.3L7 4.4V14c0 .6.4 1 1 1s1-.4 1-1V4.4l3.3 3.3c.2.2.4.3.7.3.6 0 1-.4 1-1 0-.3-.1-.5-.3-.7z',
        ],
        'arrows-horizontal': [
          'M15.7 7.3l-4-4c-.2-.2-.4-.3-.7-.3-.6 0-1 .5-1 1 0 .3.1.5.3.7L12.6 7H3.4l2.3-2.3c.2-.2.3-.4.3-.7 0-.5-.4-1-1-1-.3 0-.5.1-.7.3l-4 4c-.2.2-.3.4-.3.7s.1.5.3.7l4 4c.2.2.4.3.7.3.6 0 1-.4 1-1 0-.3-.1-.5-.3-.7L3.4 9h9.2l-2.3 2.3c-.2.2-.3.4-.3.7 0 .6.4 1 1 1 .3 0 .5-.1.7-.3l4-4c.2-.2.3-.4.3-.7s-.1-.5-.3-.7z',
        ],
        'arrows-vertical': [
          'M12 10c-.3 0-.5.1-.7.3L9 12.6V3.4l2.3 2.3c.2.2.4.3.7.3.6 0 1-.4 1-1 0-.3-.1-.5-.3-.7l-4-4C8.5.1 8.3 0 8 0s-.5.1-.7.3l-4 4c-.2.2-.3.4-.3.7 0 .6.5 1 1 1 .3 0 .5-.1.7-.3L7 3.4v9.2l-2.3-2.3c-.2-.2-.4-.3-.7-.3-.5 0-1 .4-1 1 0 .3.1.5.3.7l4 4c.2.2.4.3.7.3s.5-.1.7-.3l4-4c.2-.2.3-.4.3-.7 0-.6-.4-1-1-1z',
        ],
        asterisk: [
          'M14.54 11.18l.01-.02L9.8 8l4.75-3.17-.01-.02c.27-.17.46-.46.46-.81 0-.55-.45-1-1-1-.21 0-.39.08-.54.18l-.01-.02L9 6.13V1c0-.55-.45-1-1-1S7 .45 7 1v5.13L2.55 3.17l-.01.01A.969.969 0 0 0 2 3c-.55 0-1 .45-1 1 0 .35.19.64.46.82l-.01.01L6.2 8l-4.75 3.17.01.02c-.27.17-.46.46-.46.81 0 .55.45 1 1 1 .21 0 .39-.08.54-.18l.01.02L7 9.87V15c0 .55.45 1 1 1s1-.45 1-1V9.87l4.45 2.96.01-.02c.15.11.33.19.54.19.55 0 1-.45 1-1 0-.35-.19-.64-.46-.82z',
        ],
        'automatic-updates': [
          'M8 14c-3.31 0-6-2.69-6-6 0-1.77.78-3.36 2-4.46V5c0 .55.45 1 1 1s1-.45 1-1V1c0-.55-.45-1-1-1H1C.45 0 0 .45 0 1s.45 1 1 1h1.74A7.95 7.95 0 0 0 0 8c0 4.42 3.58 8 8 8 .55 0 1-.45 1-1s-.45-1-1-1zM8 2a5.9 5.9 0 0 1 2.95.81l1.47-1.47A7.893 7.893 0 0 0 8 0c-.55 0-1 .45-1 1s.45 1 1 1zm2.71 6.71l5-5a1.003 1.003 0 0 0-1.42-1.42L10 6.59l-1.29-1.3a1.003 1.003 0 0 0-1.42 1.42l2 2c.18.18.43.29.71.29s.53-.11.71-.29zM16 8c0-.55-.06-1.08-.16-1.6l-1.87 1.87A5.966 5.966 0 0 1 12 12.45V11c0-.55-.45-1-1-1s-1 .45-1 1v4c0 .55.45 1 1 1h4c.55 0 1-.45 1-1s-.45-1-1-1h-1.74A7.95 7.95 0 0 0 16 8z',
        ],
        badge: [
          'M13.36 4.59c-.15-1.13.5-2.01 1.1-2.87L13.43.53c-1.72.88-4.12.65-5.63-.53-1.51 1.18-3.91 1.41-5.63.52l-1.03 1.2c.61.86 1.25 1.74 1.1 2.87-.3 2.29-2.45 4.17-1.32 6.68.45 1.14 1.44 1.9 2.72 2.2 1.56.36 3.52.72 4.16 2.53.64-1.81 2.6-2.16 4.16-2.54 1.28-.3 2.27-1.06 2.72-2.2 1.12-2.5-1.03-4.38-1.32-6.67z',
        ],
        'ban-circle': [
          'M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm3 9H5c-.55 0-1-.45-1-1s.45-1 1-1h6c.55 0 1 .45 1 1s-.45 1-1 1z',
        ],
        'bank-account': [
          'M15.36 6.46l-.62-.14c-.31-1.12-.98-2.15-1.87-2.99l.4-1.77a.438.438 0 0 0-.49-.56c-.85.09-1.6.42-2.14.98-.84-.32-1.87-.51-2.85-.51-2.49 0-4.63 1.17-5.92 2.89-.18-.04-.36-.09-.53-.09-.76 0-1.34.61-1.34 1.4 0 .56.31 1.03.76 1.26-.05.33-.09.7-.09 1.07 0 1.68.71 3.17 1.83 4.34l-.27 1.59c-.09.56.35 1.07.89 1.07h.58c.45 0 .8-.33.89-.79l.04-.37c.94.42 2 .7 3.16.7 1.11 0 2.23-.23 3.16-.7l.05.37c.09.47.45.79.89.79h.58c.53 0 .98-.51.89-1.07l-.27-1.54c.62-.61 1.07-1.35 1.38-2.15l.8-.19c.4-.09.71-.47.71-.93V7.4c.09-.47-.22-.84-.62-.94zM12 8c-.6 0-1-.7-1-1.5S11.4 5 12 5s1 .7 1 1.5S12.6 8 12 8zM6.21 4.92c-.41.2-.91.04-1.12-.36-.21-.4-.04-.88.37-1.07 1.35-.65 2.73-.65 4.08 0 .41.2.58.68.37 1.07-.21.4-.71.56-1.12.36-.87-.43-1.71-.43-2.58 0z',
        ],
        barcode: [
          'M0 14h2V2H0v12zm6 0h1V2H6v12zm2 0h1V2H8v12zm-5 0h2V2H3v12zM15 2v12h1V2h-1zm-5 12h1V2h-1v12zm2 0h2V2h-2v12z',
        ],
        blank: [],
        'blocked-person': [
          'M9.39 12.69c-1.2-.53-1.04-.85-1.08-1.29-.01-.07-.01-.13-.02-.2.41-.37.75-.87.97-1.44 0 0 .01-.03.01-.04.05-.13.09-.26.13-.39.27-.06.43-.36.5-.63.01-.03.03-.08.05-.12C8.18 7.8 6.94 6.04 6.94 4c0-.32.04-.62.09-.92-.17-.03-.35-.08-.51-.08-.65 0-1.37.2-1.88.59-.5.38-.87.92-1.05 1.51-.04.14-.07.27-.09.41-.09.48-.14 1.23-.14 1.74v.06c-.19.08-.36.27-.4.68-.03.31.1.59.16.7.06.28.23.59.51.64.04.14.08.27.13.39 0 .01.01.02.01.02v.01c.22.59.57 1.1.99 1.46 0 .06-.01.12-.01.17-.04.44.08.76-1.12 1.29-1.2.53-3.01 1.1-3.38 1.95C-.12 15.5.03 16 .03 16h12.96s.15-.5-.22-1.36c-.37-.85-2.18-1.42-3.38-1.95zM11.97 0C9.75 0 7.94 1.79 7.94 4s1.8 4 4.03 4S16 6.21 16 4s-1.8-4-4.03-4zM9.96 4c0-1.1.9-2 2.01-2 .37 0 .72.11 1.02.28l-2.75 2.73c-.17-.3-.28-.64-.28-1.01zm2.01 2c-.37 0-.72-.11-1.02-.28l2.75-2.73c.18.3.28.64.28 1.01.01 1.1-.9 2-2.01 2z',
        ],
        bold: [
          'M11.7 7c.2-.4.3-1 .3-1.5v-.4V5c0-.1 0-.2-.1-.3v-.1C11.4 3.1 10.1 2 8.5 2H4c-.5 0-1 .4-1 1v10c0 .5.4 1 1 1h5c2.2 0 4-1.8 4-4 0-1.2-.5-2.3-1.3-3zM6 5h2c.6 0 1 .4 1 1s-.4 1-1 1H6V5zm3 6H6V9h3c.6 0 1 .4 1 1s-.4 1-1 1z',
        ],
        book: [
          'M2 1v14c0 .55.45 1 1 1h1V0H3c-.55 0-1 .45-1 1zm11-1h-1v7l-2-2-2 2V0H5v16h8c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1z',
        ],
        bookmark: [
          'M11.2.01h-.15C11.03.01 11.02 0 11 0H5c-.02 0-.03.01-.05.01H4.8c-.44 0-.8.37-.8.82v14.75c0 .45.25.56.57.24l2.87-2.94c.31-.32.82-.32 1.13 0l2.87 2.94c.31.32.57.21.57-.24V.83C12 .38 11.64.01 11.2.01z',
        ],
        box: [
          'M6 10h4c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1s.45 1 1 1zm9.93-4.37v-.02L13.94.63C13.78.26 13.42 0 13 0H3c-.42 0-.78.26-.93.63L.08 5.61l-.01.02C.03 5.74 0 5.87 0 6v9c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V6c0-.13-.03-.26-.07-.37zM9 2h3.32l1.2 3H9V2zM3.68 2H7v3H2.48l1.2-3zM14 14H2V7h12v7z',
        ],
        briefcase: [
          'M15 3.98h-3v-2c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v2H1c-.55 0-1 .45-1 1v4h3v-1h2v1h6v-1h2v1h3v-4c0-.55-.45-1-1-1zm-5 0H6v-1h4v1zm3 7h-2v-1H5v1H3v-1H0v4c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-4h-3v1z',
        ],
        build: [
          'M15.39 12.41L7.7 6l1.07-1.1c.34-.34-.12-.63.12-1.26.88-2.17 3.41-2.35 3.41-2.35s.36-.37.71-.72C9.74-.81 7.53.53 6.54 1.4L3.12 4.9l-.71.72c-.39.4-.39 1.05 0 1.45l-.7.72c-.39-.4-1.02-.4-1.41 0s-.39 1.05 0 1.45l1.41 1.45c.39.4 1.02.4 1.41 0s.39-1.05 0-1.45l.71-.72c.39.4 1.02.4 1.41 0l.8-.82 6.39 7.67c.82.82 2.14.82 2.96 0 .81-.82.81-2.15 0-2.96z',
        ],
        calculator: [
          'M13 0H3c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zM6 14H4v-2h2v2zm0-3H4V9h2v2zm0-3H4V6h2v2zm3 6H7v-2h2v2zm0-3H7V9h2v2zm0-3H7V6h2v2zm3 6h-2V9h2v5zm0-6h-2V6h2v2zm0-3H4V2h8v3z',
        ],
        calendar: [
          'M11 3c.6 0 1-.5 1-1V1c0-.6-.4-1-1-1s-1 .4-1 1v1c0 .5.4 1 1 1zm3-2h-1v1c0 1.1-.9 2-2 2s-2-.9-2-2V1H6v1c0 1.1-.9 2-2 2s-2-.9-2-2V1H1c-.6 0-1 .5-1 1v12c0 .6.4 1 1 1h13c.6 0 1-.4 1-1V2c0-.6-.5-1-1-1zM5 13H2v-3h3v3zm0-4H2V6h3v3zm4 4H6v-3h3v3zm0-4H6V6h3v3zm4 4h-3v-3h3v3zm0-4h-3V6h3v3zM4 3c.6 0 1-.5 1-1V1c0-.6-.4-1-1-1S3 .4 3 1v1c0 .5.4 1 1 1z',
        ],
        camera: [
          'M15 3h-2.59L10.7 1.29A.956.956 0 0 0 10 1H6c-.28 0-.53.11-.71.29L3.59 3H1c-.55 0-1 .45-1 1v7c0 .55.45 1 1 1h2.56c1.1 1.22 2.67 2 4.44 2s3.34-.78 4.44-2H15c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zM3 6H1V5h2v1zm5 6c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z',
        ],
        'caret-down': [
          'M12 6.5c0-.28-.22-.5-.5-.5h-7a.495.495 0 0 0-.37.83l3.5 4c.09.1.22.17.37.17s.28-.07.37-.17l3.5-4c.08-.09.13-.2.13-.33z',
        ],
        'caret-left': [
          'M9.5 4c-.13 0-.24.05-.33.13l-4 3.5c-.1.09-.17.22-.17.37s.07.28.17.37l4 3.5a.495.495 0 0 0 .83-.37v-7c0-.28-.22-.5-.5-.5z',
        ],
        'caret-right': [
          'M11 8c0-.15-.07-.28-.17-.37l-4-3.5A.495.495 0 0 0 6 4.5v7a.495.495 0 0 0 .83.37l4-3.5c.1-.09.17-.22.17-.37z',
        ],
        'caret-up': [
          'M11.87 9.17s.01 0 0 0l-3.5-4C8.28 5.07 8.15 5 8 5s-.28.07-.37.17l-3.5 4a.495.495 0 0 0 .37.83h7a.495.495 0 0 0 .37-.83z',
        ],
        'cell-tower': [
          'M8.97 6.76c-.01-.05-.04-.08-.06-.13-.02-.05-.03-.1-.05-.15.08-.14.14-.3.14-.48 0-.55-.45-1-1-1s-1 .45-1 1c0 .18.06.34.14.48-.03.05-.03.1-.05.15-.02.05-.05.08-.06.13l-2 8c-.13.54.19 1.08.73 1.21a.995.995 0 0 0 1.21-.73L7.53 13h.94l.56 2.24a1 1 0 0 0 1.94-.48l-2-8zM3.72 1.7C4.1 1.3 4.09.67 3.7.28S2.67-.09 2.28.3c-3.05 3.12-3.05 8.28 0 11.4a.996.996 0 1 0 1.43-1.39c-2.28-2.35-2.28-6.27.01-8.61zM11.6 3.2c-.44-.33-1.07-.24-1.4.2-.33.44-.24 1.07.2 1.4.43.32.53 1.96-.04 2.43-.42.35-.48.98-.13 1.41.35.42.98.48 1.41.13 1.59-1.33 1.39-4.5-.04-5.57z',
          'M13.72.3c-.39-.4-1.02-.4-1.41-.02s-.41 1.02-.03 1.42c2.29 2.34 2.29 6.26 0 8.6-.39.39-.38 1.03.02 1.41s1.03.38 1.41-.02c3.05-3.11 3.05-8.27.01-11.39zM5.4 7.23c-.57-.47-.47-2.11-.04-2.43.44-.33.53-.96.2-1.4s-.96-.53-1.4-.2c-1.44 1.07-1.63 4.24-.04 5.57.42.35 1.05.3 1.41-.13.35-.42.29-1.06-.13-1.41z',
        ],
        changes: [
          'M8.29 7.71l3 3c.18.18.43.29.71.29s.53-.11.71-.29l3-3a1.003 1.003 0 0 0-1.42-1.42L13 7.59V1c0-.55-.45-1-1-1s-1 .45-1 1v6.59l-1.29-1.3a1.003 1.003 0 0 0-1.42 1.42zM14.5 13h-13c-.83 0-1.5.67-1.5 1.5S.67 16 1.5 16h13c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5zM1 5c.28 0 .53-.11.71-.29L3 3.41V10c0 .55.45 1 1 1s1-.45 1-1V3.41L6.29 4.7c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71l-3-3C4.53.11 4.28 0 4 0s-.53.11-.71.29l-3 3A1.003 1.003 0 0 0 1 5z',
        ],
        chart: [
          'M0 15c0 .55.45 1 1 1h2c.55 0 1-.45 1-1V9.4L0 11v4zm6-5.5V15c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-5l-1 1-3-1.5zM13 7l-1 1v7c0 .55.45 1 1 1h2c.55 0 1-.45 1-1V7.88c-.26.07-.58.12-1 .12-1.96 0-2-1-2-1zm2-6h-3c-.55 0-1 .45-1 1s.45 1 1 1h.59L8.8 6.78 5.45 5.11v.01C5.31 5.05 5.16 5 5 5s-.31.05-.44.11V5.1l-4 2v.01C.23 7.28 0 7.61 0 8c0 .55.45 1 1 1 .16 0 .31-.05.44-.11v.01L5 7.12 8.55 8.9v-.01c.14.06.29.11.45.11.28 0 .53-.11.71-.29L14 4.41V5c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1z',
        ],
        chat: [
          'M6 10c-1.1 0-2-.9-2-2V3H1c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1v2a1.003 1.003 0 0 0 1.71.71L5.41 13H10c.55 0 1-.45 1-1v-1.17l-.83-.83H6zm9-10H6c-.55 0-1 .45-1 1v7c0 .55.45 1 1 1h4.59l2.71 2.71c.17.18.42.29.7.29.55 0 1-.45 1-1V9c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1z',
        ],
        'chevron-backward': [
          'M7.41 8l3.29-3.29c.19-.18.3-.43.3-.71a1.003 1.003 0 0 0-1.71-.71L6 6.59V4c0-.55-.45-1-1-1s-1 .45-1 1v8c0 .55.45 1 1 1s1-.45 1-1V9.41l3.29 3.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71L7.41 8z',
        ],
        'chevron-down': [
          'M12 5c-.28 0-.53.11-.71.29L8 8.59l-3.29-3.3a1.003 1.003 0 0 0-1.42 1.42l4 4c.18.18.43.29.71.29s.53-.11.71-.29l4-4A1.003 1.003 0 0 0 12 5z',
        ],
        'chevron-forward': [
          'M10 3c-.55 0-1 .45-1 1v2.59l-3.29-3.3a1.003 1.003 0 0 0-1.42 1.42L7.59 8 4.3 11.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71L9 9.41V12c0 .55.45 1 1 1s1-.45 1-1V4c0-.55-.45-1-1-1z',
        ],
        'chevron-left': [
          'M7.41 8l3.29-3.29c.19-.18.3-.43.3-.71a1.003 1.003 0 0 0-1.71-.71l-4 4C5.11 7.47 5 7.72 5 8c0 .28.11.53.29.71l4 4a1.003 1.003 0 0 0 1.42-1.42L7.41 8z',
        ],
        'chevron-right': [
          'M10.71 7.29l-4-4a1.003 1.003 0 0 0-1.42 1.42L8.59 8 5.3 11.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71l4-4c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71z',
        ],
        'chevron-up': [
          'M12.71 9.29l-4-4C8.53 5.11 8.28 5 8 5s-.53.11-.71.29l-4 4a1.003 1.003 0 0 0 1.42 1.42L8 7.41l3.29 3.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71z',
        ],
        circle: [
          'M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z',
        ],
        'circle-arrow-down': [
          'M11 7c-.28 0-.53.11-.71.29L9 8.59V5c0-.55-.45-1-1-1s-1 .45-1 1v3.59l-1.29-1.3a1.003 1.003 0 0 0-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l3-3A1.003 1.003 0 0 0 11 7zM8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z',
        ],
        'circle-arrow-left': [
          'M11 7H7.41L8.7 5.71c.19-.18.3-.43.3-.71a1.003 1.003 0 0 0-1.71-.71l-3 3C4.11 7.47 4 7.72 4 8c0 .28.11.53.29.71l3 3a1.003 1.003 0 0 0 1.42-1.42L7.41 9H11c.55 0 1-.45 1-1s-.45-1-1-1zM8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z',
        ],
        'circle-arrow-right': [
          'M8.71 4.29a1.003 1.003 0 0 0-1.42 1.42L8.59 7H5c-.55 0-1 .45-1 1s.45 1 1 1h3.59L7.3 10.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71l3-3c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71l-3-3zM8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z',
        ],
        'circle-arrow-up': [
          'M8.71 4.29C8.53 4.11 8.28 4 8 4s-.53.11-.71.29l-3 3a1.003 1.003 0 0 0 1.42 1.42L7 7.41V11c0 .55.45 1 1 1s1-.45 1-1V7.41l1.29 1.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71l-3-3zM8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z',
        ],
        citation: [
          'M15.02 5c0-1.66-1.34-3-3-3s-3 1.34-3 3a2.996 2.996 0 0 0 3.6 2.94C12.1 9.76 11.14 11 10.02 11c-.55 0-1 .45-1 1s.45 1 1 1c2.76 0 5-3.13 5-7 0-.2-.02-.39-.04-.58.01-.14.04-.28.04-.42zm-11-3c-1.66 0-3 1.34-3 3a2.996 2.996 0 0 0 3.6 2.94C4.1 9.76 3.14 11 2.02 11c-.55 0-1 .45-1 1s.45 1 1 1c2.76 0 5-3.13 5-7 0-.2-.02-.39-.04-.58.01-.14.04-.28.04-.42 0-1.66-1.35-3-3-3z',
        ],
        clipboard: [
          'M11 2c0-.55-.45-1-1-1h.22C9.88.4 9.24 0 8.5 0S7.12.4 6.78 1H7c-.55 0-1 .45-1 1v1h5V2zm2 0h-1v2H5V2H4c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h9c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1z',
        ],
        cloud: [
          'M12 6c-.03 0-.07 0-.1.01A5 5 0 0 0 2 7c0 .11.01.22.02.33A3.51 3.51 0 0 0 0 10.5C0 12.43 1.57 14 3.5 14H12c2.21 0 4-1.79 4-4s-1.79-4-4-4z',
        ],
        'cloud-download': [
          'M11 11c-.28 0-.53.11-.71.29L9 12.59V8c0-.55-.45-1-1-1s-1 .45-1 1v4.59L5.71 11.3A.965.965 0 0 0 5 11a1.003 1.003 0 0 0-.71 1.71l3 3c.18.18.43.29.71.29s.53-.11.71-.29l3-3A1.003 1.003 0 0 0 11 11zm1-7c-.03 0-.07 0-.1.01A5 5 0 0 0 2 5c0 .11.01.22.02.33A3.51 3.51 0 0 0 0 8.5c0 1.41.84 2.61 2.03 3.17C2.2 10.17 3.46 9 5 9c.06 0 .13.02.19.02C5.07 8.7 5 8.36 5 8c0-1.66 1.34-3 3-3s3 1.34 3 3c0 .36-.07.7-.19 1.02.06 0 .13-.02.19-.02 1.48 0 2.7 1.07 2.95 2.47A3.964 3.964 0 0 0 16 8c0-2.21-1.79-4-4-4z',
        ],
        'cloud-upload': [
          'M8.71 7.29C8.53 7.11 8.28 7 8 7s-.53.11-.71.29l-3 3a1.003 1.003 0 0 0 1.42 1.42L7 10.41V15c0 .55.45 1 1 1s1-.45 1-1v-4.59l1.29 1.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71l-3-3zM12 4c-.03 0-.07 0-.1.01A5 5 0 0 0 2 5c0 .11.01.22.02.33a3.495 3.495 0 0 0 .07 6.37c-.05-.23-.09-.46-.09-.7 0-.83.34-1.58.88-2.12l3-3a2.993 2.993 0 0 1 4.24 0l3 3c.54.54.88 1.29.88 2.12 0 .16-.02.32-.05.47C15.17 10.78 16 9.5 16 8c0-2.21-1.79-4-4-4z',
        ],
        code: [
          'M15.71 7.29l-3-3a1.003 1.003 0 0 0-1.42 1.42L13.59 8l-2.29 2.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71l3-3c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71zM5 5a1.003 1.003 0 0 0-1.71-.71l-3 3C.11 7.47 0 7.72 0 8c0 .28.11.53.29.71l3 3a1.003 1.003 0 0 0 1.42-1.42L2.41 8 4.7 5.71c.19-.18.3-.43.3-.71zm4-3c-.48 0-.87.35-.96.81l-2 10c-.01.06-.04.12-.04.19 0 .55.45 1 1 1 .48 0 .87-.35.96-.81l2-10c.01-.06.04-.12.04-.19 0-.55-.45-1-1-1z',
        ],
        'code-block': [
          'M15 3h-2V2c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1v1H7V2c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v1H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-8.29 8.29a1.003 1.003 0 0 1-1.42 1.42l-3-3C2.11 9.53 2 9.28 2 9s.11-.53.29-.71l3-3a1.003 1.003 0 0 1 1.42 1.42L4.41 9l2.3 2.29zm7-1.58l-3 3a1.003 1.003 0 0 1-1.42-1.42L11.59 9l-2.3-2.29a1.003 1.003 0 0 1 1.42-1.42l3 3c.18.18.29.43.29.71s-.11.53-.29.71z',
        ],
        cog: [
          'M15.19 6.39h-1.85c-.11-.37-.27-.71-.45-1.04l1.36-1.36c.31-.31.31-.82 0-1.13l-1.13-1.13a.803.803 0 0 0-1.13 0l-1.36 1.36c-.33-.17-.67-.33-1.04-.44V.79c0-.44-.36-.8-.8-.8h-1.6c-.44 0-.8.36-.8.8v1.86c-.39.12-.75.28-1.1.47l-1.3-1.3c-.3-.3-.79-.3-1.09 0L1.82 2.91c-.3.3-.3.79 0 1.09l1.3 1.3c-.2.34-.36.7-.48 1.09H.79c-.44 0-.8.36-.8.8v1.6c0 .44.36.8.8.8h1.85c.11.37.27.71.45 1.04l-1.36 1.36c-.31.31-.31.82 0 1.13l1.13 1.13c.31.31.82.31 1.13 0l1.36-1.36c.33.18.67.33 1.04.44v1.86c0 .44.36.8.8.8h1.6c.44 0 .8-.36.8-.8v-1.86c.39-.12.75-.28 1.1-.47l1.3 1.3c.3.3.79.3 1.09 0l1.09-1.09c.3-.3.3-.79 0-1.09l-1.3-1.3c.19-.35.36-.71.48-1.1h1.85c.44 0 .8-.36.8-.8v-1.6a.816.816 0 0 0-.81-.79zm-7.2 4.6c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z',
        ],
        'collapse-all': [
          'M7.29 6.71c.18.18.43.29.71.29s.53-.11.71-.29l4-4a1.003 1.003 0 0 0-1.42-1.42L8 4.59l-3.29-3.3a1.003 1.003 0 0 0-1.42 1.42l4 4zm1.42 2.58C8.53 9.11 8.28 9 8 9s-.53.11-.71.29l-4 4a1.003 1.003 0 0 0 1.42 1.42L8 11.41l3.29 3.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71l-4-4z',
        ],
        'column-layout': [
          'M15 1H1c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zM4 13H2V3h2v10zm3 0H5V3h2v10zm7 0H8V3h6v10z',
        ],
        comment: [
          'M14 1H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h2v3a1.003 1.003 0 0 0 1.71.71L8.41 12H14c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zM3.5 8C2.67 8 2 7.33 2 6.5S2.67 5 3.5 5 5 5.67 5 6.5 4.33 8 3.5 8zm4 0C6.67 8 6 7.33 6 6.5S6.67 5 7.5 5 9 5.67 9 6.5 8.33 8 7.5 8zm4 0c-.83 0-1.5-.67-1.5-1.5S10.67 5 11.5 5s1.5.67 1.5 1.5S12.33 8 11.5 8z',
        ],
        comparison: [
          'M7.99-.01c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1s1-.45 1-1v-14c0-.55-.45-1-1-1zm-3 3h-4c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1zm10 0h-4c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1zm0 3h-4v-2h4v2zm0 3h-4c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1zm0 3h-4v-2h4v2zm-10-3h-4c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1z',
        ],
        compass: [
          'M12 8c0 .14-.03.27-.08.39l-3 6.99c-.15.37-.51.62-.92.62s-.77-.25-.92-.61l-3-6.99a1.006 1.006 0 0 1 0-.79l3-6.99C7.23.25 7.59 0 8 0s.77.25.92.61l3 6.99c.05.13.08.26.08.4zM8 3.54L6.09 8h3.82L8 3.54z',
        ],
        compressed: [
          'M15.93 5.63v-.02L13.94.63C13.78.26 13.42 0 13 0H3c-.42 0-.78.26-.93.63L.08 5.61l-.01.02C.03 5.74 0 5.87 0 6v9c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V6c0-.13-.03-.26-.07-.37zM9 2h3.32l1.2 3H9V2zM3.68 2H7v3H2.48l1.2-3zM14 14H2V7h5v2.59l-1.29-1.3a1.003 1.003 0 0 0-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l3-3a1.003 1.003 0 0 0-1.42-1.42L9 9.59V7h5v7z',
        ],
        confirm: [
          'M8.7 4.29a.965.965 0 0 0-.71-.3 1.003 1.003 0 0 0-.71 1.71l2 2c.18.18.43.29.71.29s.53-.11.71-.29l5-5a1.003 1.003 0 0 0-1.42-1.42l-4.29 4.3L8.7 4.29zm5.22 3.01c.03.23.07.45.07.69 0 3.31-2.69 6-6 6s-6-2.69-6-6 2.69-6 6-6c.81 0 1.59.17 2.3.46l1.5-1.5A7.998 7.998 0 0 0-.01 7.99c0 4.42 3.58 8 8 8s8-3.58 8-8c0-.83-.13-1.64-.36-2.39l-1.71 1.7z',
        ],
        console: [
          'M15 15H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1zM14 5H2v8h12V5zM4 6c.28 0 .53.11.71.29l2 2c.18.18.29.43.29.71s-.11.53-.29.71l-2 2a1.003 1.003 0 0 1-1.42-1.42L4.59 9l-1.3-1.29A1.003 1.003 0 0 1 4 6zm5 4h3c.55 0 1 .45 1 1s-.45 1-1 1H9c-.55 0-1-.45-1-1s.45-1 1-1z',
        ],
        contrast: [
          'M15.2 6.4h-1.44c-.13-.47-.32-.92-.56-1.34L14.26 4c.31-.31.31-.82 0-1.13l-1.13-1.13a.803.803 0 0 0-1.13 0L10.94 2.8c-.42-.24-.86-.42-1.34-.56V.8c0-.44-.36-.8-.8-.8H7.2c-.44 0-.8.36-.8.8v1.44c-.5.14-.96.34-1.4.59l-1-1c-.3-.3-.79-.3-1.09 0L1.83 2.91c-.3.3-.3.79 0 1.09l1 1c-.25.44-.45.9-.59 1.4H.8c-.44 0-.8.36-.8.8v1.6c0 .44.36.8.8.8h1.44c.13.47.32.92.56 1.34L1.74 12c-.31.31-.31.82 0 1.13l1.13 1.13c.31.31.82.31 1.13 0l1.06-1.06c.42.24.86.42 1.34.56v1.44c0 .44.36.8.8.8h1.6c.44 0 .8-.36.8-.8v-1.44c.5-.14.96-.33 1.4-.59l1 1c.3.3.79.3 1.09 0l1.09-1.09c.3-.3.3-.79 0-1.09l-1-1c.25-.43.45-.9.59-1.4h1.44c.44 0 .8-.36.8-.8V7.2a.818.818 0 0 0-.81-.8zM8 12c-2.21 0-4-1.79-4-4s1.79-4 4-4v8z',
        ],
        control: [
          'M13 8H8v5h5V8zm0-5H8v4h5V3zm2-3H1C.45 0 0 .45 0 1v14c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-1 14H2V2h12v12zM7 3H3v10h4V3z',
        ],
        'credit-card': [
          'M14.99 2.95h-14c-.55 0-1 .45-1 1v1h16v-1c0-.55-.45-1-1-1zm-15 10c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-6h-16v6zm5.5-2h5c.28 0 .5.22.5.5s-.22.5-.5.5h-5c-.28 0-.5-.22-.5-.5s.23-.5.5-.5zm-3 0h1c.28 0 .5.22.5.5s-.22.5-.5.5h-1c-.28 0-.5-.22-.5-.5s.23-.5.5-.5z',
        ],
        cross: [
          'M9.41 8l3.29-3.29c.19-.18.3-.43.3-.71a1.003 1.003 0 0 0-1.71-.71L8 6.59l-3.29-3.3a1.003 1.003 0 0 0-1.42 1.42L6.59 8 3.3 11.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71L8 9.41l3.29 3.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71L9.41 8z',
        ],
        crown: [
          'M2 6l3 2 3-4 3 4 3-2-1 6H3L2 6zm6-5a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM1 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm14 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM3 13h10v2H3v-2z',
        ],
        'curved-range-chart': [
          'M15 12H3.12l1.81-1.39c1.73 1.01 5.53-.03 9.08-2.61l-1.22-1.5C10.3 8.3 7.86 9.37 6.65 9.29L14.3 3.4l-.6-.8-7.83 6.03c-.01-1.07 1.8-3.19 4.47-5.13L9.12 2C5.38 4.7 3.34 8.1 4.25 9.87L2 11.6V3c0-.55-.45-1-1-1s-1 .45-1 1v10c0 .55.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1z',
        ],
        cut: [
          'M13 2s.71-1.29 0-2L8.66 5.07l1.05 1.32L13 2zm.07 8c-.42 0-.82.09-1.18.26L3.31 0c-.69.71 0 2 0 2l3.68 5.02-2.77 3.24A2.996 2.996 0 0 0 0 13c0 1.66 1.34 3 3 3s3-1.34 3-3c0-.46-.11-.89-.29-1.27L8.1 8.54l2.33 3.19c-.18.39-.29.82-.29 1.27 0 1.66 1.31 3 2.93 3S16 14.66 16 13s-1.31-3-2.93-3zM3 14c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm10.07 0c-.54 0-.98-.45-.98-1s.44-1 .98-1 .98.45.98 1-.44 1-.98 1z',
        ],
        dashboard: [
          'M5 4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zM4 7c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm4-2c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm-2 6c0 1.1.9 2 2 2s2-.9 2-2c0-.53-2-5-2-5s-2 4.47-2 5zM8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm4-9c0-.55-.45-1-1-1s-1 .45-1 1 .45 1 1 1 1-.45 1-1zm0 2c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z',
        ],
        database: [
          'M8 4c3.31 0 6-.9 6-2s-2.69-2-6-2C4.68 0 2 .9 2 2s2.68 2 6 2zm-6-.48V8c0 1.1 2.69 2 6 2s6-.9 6-2V3.52C12.78 4.4 10.56 5 8 5s-4.78-.6-6-1.48zm0 6V14c0 1.1 2.69 2 6 2s6-.9 6-2V9.52C12.78 10.4 10.56 11 8 11s-4.78-.6-6-1.48z',
        ],
        delete: [
          'M11.99 4.99a1.003 1.003 0 0 0-1.71-.71l-2.29 2.3L5.7 4.29a.965.965 0 0 0-.71-.3 1.003 1.003 0 0 0-.71 1.71l2.29 2.29-2.29 2.29A1.003 1.003 0 0 0 5.7 11.7l2.29-2.29 2.29 2.29a1.003 1.003 0 0 0 1.42-1.42L9.41 7.99 11.7 5.7c.18-.18.29-.43.29-.71zm-4-5c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.68 6-6 6z',
        ],
        delta: ['M8 0L0 16h16L8 0zM7 5l5 10H2L7 5z'],
        'derive-column': [
          'M6.08 6.67h-.84c.24-.92.56-1.6.96-2.03.24-.27.48-.4.71-.4.05 0 .08.01.11.04s.04.06.04.1c0 .04-.03.11-.1.21-.06.1-.1.2-.1.29 0 .13.05.24.15.33.1.09.23.14.39.14.17 0 .31-.06.42-.17A.58.58 0 0 0 8 4.73c0-.22-.09-.39-.26-.53-.17-.13-.44-.2-.81-.2-.59 0-1.12.16-1.59.48-.48.32-.93.85-1.36 1.59-.15.26-.29.42-.42.49s-.35.11-.64.1l-.19.65h.81l-1.19 4.37c-.2.72-.33 1.16-.4 1.33-.1.24-.26.45-.46.62-.08.07-.18.1-.3.1-.03 0-.06-.01-.08-.03l-.03-.04c0-.02.03-.06.09-.11.06-.06.09-.14.09-.26 0-.13-.05-.23-.14-.32a.6.6 0 0 0-.4-.13c-.21 0-.38.05-.51.16s-.21.25-.21.4c0 .16.08.3.23.42.16.12.4.18.74.18.53 0 .99-.13 1.4-.39.41-.26.76-.65 1.07-1.19.3-.54.62-1.4.94-2.59l.68-2.53h.82l.2-.63zM15 0H8c-.55 0-1 .45-1 1v2h2V2h5v12H9v-1H7v2c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zM8.3 9.94c.18.52.33.89.46 1.13.13.24.28.4.44.51.17.1.37.16.62.16.24 0 .49-.08.74-.25.33-.21.66-.58 1.01-1.09l-.21-.11c-.23.31-.41.5-.52.57a.44.44 0 0 1-.26.07c-.12 0-.24-.07-.36-.21-.2-.24-.46-.91-.8-2 .3-.49.55-.81.75-.96.15-.11.3-.16.47-.16.06 0 .17.02.34.06.16.04.31.06.43.06.17 0 .31-.06.43-.17.1-.11.16-.25.16-.43 0-.19-.06-.33-.17-.44-.12-.11-.28-.16-.49-.16-.19 0-.37.04-.54.13-.17.09-.39.27-.65.56-.2.21-.48.58-.87 1.11-.15-.66-.41-1.26-.78-1.81l-2.05.33-.04.21c.15-.03.28-.04.39-.04.2 0 .37.08.5.25.21.26.5 1.03.88 2.33-.29.37-.49.61-.6.72-.18.18-.33.3-.44.36-.09.04-.19.07-.3.07-.09 0-.23-.04-.42-.13a.866.866 0 0 0-.36-.09c-.2 0-.36.06-.49.18a.59.59 0 0 0-.19.46c0 .17.06.32.18.43.12.11.28.16.48.16.2 0 .38-.04.55-.11.17-.08.39-.24.65-.49.24-.27.6-.66 1.06-1.21z',
        ],
        desktop: [
          'M15 0H1C.45 0 0 .45 0 1v10c0 .55.45 1 1 1h4.75l-.5 2H4c-.55 0-1 .45-1 1s.45 1 1 1h8c.55 0 1-.45 1-1s-.45-1-1-1h-1.25l-.5-2H15c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-1 10H2V2h12v8z',
        ],
        'diagram-tree': [
          'M15 8v3h-2V9H9v2H7V9H3v2H1V8a1 1 0 0 1 1-1h5V5h2v2h5a1 1 0 0 1 1 1zM1 12h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zm12 0h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zm-6 0h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zM7 0h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1z',
        ],
        'direction-left': ['M16 1.99l-16 6 16 6-4-6z'],
        'direction-right': ['M16 7.99l-16-6 4 6-4 6z'],
        disable: [
          'M7.99-.01c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm-6 8c0-3.31 2.69-6 6-6 1.3 0 2.49.42 3.47 1.12l-8.35 8.35c-.7-.98-1.12-2.17-1.12-3.47zm6 6c-1.3 0-2.49-.42-3.47-1.12l8.35-8.35c.7.98 1.12 2.17 1.12 3.47 0 3.32-2.68 6-6 6z',
        ],
        document: [
          'M9 0H3c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V5L9 0zm3 14H4V2h4v4h4v8z',
        ],
        'document-open': [
          'M6 12c0 .55.45 1 1 1s1-.45 1-1V8c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1s.45 1 1 1h1.59L1.3 12.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71L6 10.41V12zm4-12H4c-.55 0-1 .45-1 1v4h2V2h4v4h4v8H5.24l-1.8 1.8c.16.12.35.2.56.2h10c.55 0 1-.45 1-1V5l-5-5z',
        ],
        'document-share': [
          'M10 14H2V2h4v4h1c0-.83.36-1.55.91-2.09l-.03-.03.9-.9C8.3 2.45 8 1.77 8 1L7 0H1C.45 0 0 .45 0 1v14c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V8.22c-.53.48-1.23.78-2 .78v5zm5-14h-4c-.55 0-1 .45-1 1s.45 1 1 1h1.59l-3.3 3.29a1.003 1.003 0 0 0 1.42 1.42L14 3.41V5c0 .55.45 1 1 1s1-.45 1-1V1c0-.55-.45-1-1-1z',
        ],
        dollar: [
          'M12.83 9.51c-.1-.3-.25-.58-.45-.84s-.45-.49-.75-.7c-.3-.2-.65-.36-1.05-.48-.16-.04-.43-.11-.8-.2-.35-.09-.73-.18-1.12-.28-.39-.1-.74-.19-1.06-.27-.31-.08-.49-.12-.54-.13-.43-.12-.78-.29-1.05-.52-.27-.23-.4-.55-.4-.95 0-.29.07-.53.21-.72.14-.19.32-.34.54-.46.22-.11.46-.19.72-.24.26-.05.52-.08.77-.08.74 0 1.35.15 1.83.46.48.3.75.83.81 1.56h2.14c0-.6-.13-1.13-.38-1.58-.25-.45-.59-.84-1.02-1.15-.43-.31-.93-.54-1.49-.7-.24-.06-.49-.1-.75-.14V1c0-.55-.45-1-1-1s-1 .45-1 1v1.08c-.23.03-.46.07-.68.13-.54.13-1.02.34-1.44.61-.42.28-.76.63-1.02 1.05-.26.43-.39.93-.39 1.5 0 .3.04.59.13.88.09.29.23.56.44.82.21.26.48.49.83.7.35.21.79.38 1.31.51.85.21 1.56.38 2.14.52.58.13 1.08.28 1.52.42.25.09.48.23.69.44.21.21.32.53.32.97 0 .21-.05.42-.14.63-.09.21-.24.39-.45.55-.21.16-.47.29-.81.39-.33.1-.73.15-1.2.15-.43 0-.84-.05-1.21-.14-.37-.09-.7-.24-.99-.43-.29-.2-.51-.45-.67-.76-.16-.31-.24-.68-.24-1.12H3c.01.71.15 1.32.43 1.84.27.52.64.94 1.1 1.27.46.33.99.58 1.61.74.27.07.56.12.85.16V15c0 .55.45 1 1 1s1-.45 1-1v-1.05c.3-.03.61-.08.9-.15.58-.13 1.1-.34 1.56-.63.46-.29.83-.66 1.11-1.11.28-.45.42-1 .42-1.64 0-.31-.05-.61-.15-.91z',
        ],
        dot: ['M8 5a3 3 0 1 0 0 6 3 3 0 1 0 0-6z'],
        'double-caret-horizontal': [
          'M13.71 7.29l-3-3A1.003 1.003 0 0 0 9 5v6a1.003 1.003 0 0 0 1.71.71l3-3c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71zM6 4c-.28 0-.53.11-.71.29l-3 3C2.11 7.47 2 7.72 2 8c0 .28.11.53.29.71l3 3A1.003 1.003 0 0 0 7 11V5c0-.55-.45-1-1-1z',
        ],
        'double-caret-vertical': [
          'M5 7h6a1.003 1.003 0 0 0 .71-1.71l-3-3C8.53 2.11 8.28 2 8 2s-.53.11-.71.29l-3 3A1.003 1.003 0 0 0 5 7zm6 2H5a1.003 1.003 0 0 0-.71 1.71l3 3c.18.18.43.29.71.29s.53-.11.71-.29l3-3A1.003 1.003 0 0 0 11 9z',
        ],
        'double-chevron-down': [
          'M7.29 8.71c.18.18.43.29.71.29s.53-.11.71-.29l4-4a1.003 1.003 0 0 0-1.42-1.42L8 6.59l-3.29-3.3a1.003 1.003 0 0 0-1.42 1.42l4 4zM12 8c-.28 0-.53.11-.71.29L8 11.59l-3.29-3.3a1.003 1.003 0 0 0-1.42 1.42l4 4c.18.18.43.29.71.29s.53-.11.71-.29l4-4A1.003 1.003 0 0 0 12 8z',
        ],
        'double-chevron-left': [
          'M4.41 8L7.7 4.71c.19-.18.3-.43.3-.71a1.003 1.003 0 0 0-1.71-.71l-4 4C2.11 7.47 2 7.72 2 8c0 .28.11.53.29.71l4 4a1.003 1.003 0 0 0 1.42-1.42L4.41 8zm5 0l3.29-3.29c.19-.18.3-.43.3-.71a1.003 1.003 0 0 0-1.71-.71l-4 4C7.11 7.47 7 7.72 7 8c0 .28.11.53.29.71l4 4a1.003 1.003 0 0 0 1.42-1.42L9.41 8z',
        ],
        'double-chevron-right': [
          'M9 8c0-.28-.11-.53-.29-.71l-4-4a1.003 1.003 0 0 0-1.42 1.42L6.59 8 3.3 11.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71l4-4C8.89 8.53 9 8.28 9 8zm4.71-.71l-4-4a1.003 1.003 0 0 0-1.42 1.42L11.59 8 8.3 11.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71l4-4c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71z',
        ],
        'double-chevron-up': [
          'M4 8c.28 0 .53-.11.71-.29L8 4.41l3.29 3.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71l-4-4C8.53 2.11 8.28 2 8 2s-.53.11-.71.29l-4 4A1.003 1.003 0 0 0 4 8zm4.71-.71C8.53 7.11 8.28 7 8 7s-.53.11-.71.29l-4 4a1.003 1.003 0 0 0 1.42 1.42L8 9.41l3.29 3.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71l-4-4z',
        ],
        'doughnut-chart': [
          'M11.86 7h4.05C15.45 3.39 12.61.52 9 .07v4.07A4 4 0 0 1 11.86 7zM12 8c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4V0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8h-4z',
        ],
        download: [
          'M7.99-.01c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zM11.7 9.7l-3 3c-.18.18-.43.29-.71.29s-.53-.11-.71-.29l-3-3A1.003 1.003 0 0 1 5.7 8.28l1.29 1.29V3.99c0-.55.45-1 1-1s1 .45 1 1v5.59l1.29-1.29a1.003 1.003 0 0 1 1.71.71c0 .27-.11.52-.29.7z',
        ],
        'drag-handle-horizontal': [
          'M2 9c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0-4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm4 4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm8-2c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0 2c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm-4-4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0 4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zM6 5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z',
        ],
        'drag-handle-vertical': [
          'M6 9c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm4-6c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zM6 13c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0-8c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0-4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm4 8c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0-4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0 8c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z',
        ],
        draw: [
          'M14.9 11c-.3 0-.5.1-.7.3l-3 3c-.2.2-.3.4-.3.7 0 .6.5 1 1 1 .3 0 .5-.1.7-.3l3-3c.2-.2.3-.4.3-.7 0-.5-.4-1-1-1zm-1-1v-.2l-1-5c-.1-.3-.3-.6-.6-.7l-11-4-.3.3 5.8 5.8c.2-.1.4-.2.6-.2.8 0 1.5.7 1.5 1.5S8.3 9 7.4 9s-1.5-.7-1.5-1.5c0-.2.1-.4.2-.6L.3 1.1l-.3.3 4 11c.1.3.4.6.7.6l5 1h.2c.3 0 .5-.1.7-.3l3-3c.2-.2.3-.4.3-.7z',
        ],
        'drive-time': [
          'M15.12 4.76h-1.05l-.76-2.12c-.19-.53-.76-1.08-1.27-1.24 0 0-1.32-.4-4.04-.4-2.72 0-4.04.4-4.04.4-.5.16-1.07.71-1.26 1.24l-.77 2.12H.88c-.48 0-.88.42-.88.94s.4.94.88.94h.38L1 7c-.03.69 0 1.44 0 2v5c0 .66.38 1 1 1s1-.34 1-1v-1h10v1c0 .66.38 1 1 1s1-.34 1-1V9c0-.56-.01-1.37 0-2l-.26-.37h.38c.48 0 .88-.42.88-.93 0-.52-.4-.94-.88-.94zM5 10H3V8h2v2zm8 0h-2V8h2v2zm0-4H3c-.18 0-.06-.82 0-1l.73-1.63C3.79 3.19 3.82 3 4 3h8c.18 0 .21.19.27.37L13 5c.06.18.18 1 0 1z',
        ],
        duplicate: [
          'M15 0H5c-.55 0-1 .45-1 1v2h2V2h8v7h-1v2h2c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-4 4H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zm-1 10H2V6h8v8z',
        ],
        edit: [
          'M3.25 10.26l2.47 2.47 6.69-6.69-2.46-2.48-6.7 6.7zM.99 14.99l3.86-1.39-2.46-2.44-1.4 3.83zm12.25-14c-.48 0-.92.2-1.24.51l-1.44 1.44 2.47 2.47 1.44-1.44c.32-.32.51-.75.51-1.24.01-.95-.77-1.74-1.74-1.74z',
        ],
        eject: [
          'M4 9h8a1.003 1.003 0 0 0 .71-1.71l-4-4C8.53 3.11 8.28 3 8 3s-.53.11-.71.29l-4 4A1.003 1.003 0 0 0 4 9zm8 1H4c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1z',
        ],
        endorsed: [
          'M15.86 7.5l-.81-1.42V4.5c0-.36-.19-.68-.49-.87l-1.37-.8-.81-1.41c-.19-.31-.51-.49-.86-.49H9.89L8.5.14a.948.948 0 0 0-1 0l-1.39.8H4.52a1 1 0 0 0-.86.49l-.8 1.37-1.44.83c-.3.19-.49.51-.49.87v1.65l-.8 1.37c-.08.15-.13.32-.13.49s.05.34.14.49l.8 1.37v1.65c0 .36.19.68.49.87l1.42.81.8 1.37c.19.31.51.49.86.49H6.1l1.39.8c.15.09.32.14.48.14s.34-.05.49-.14l1.39-.8h1.63a1 1 0 0 0 .86-.49l.81-1.41 1.37-.8c.3-.19.49-.51.49-.87V9.93l.81-1.42a.89.89 0 0 0 .04-1.01zm-4.12-.82l-4.01 4.01c-.18.18-.43.29-.71.29s-.53-.11-.71-.29l-2-2c-.18-.19-.3-.44-.3-.71a1.003 1.003 0 0 1 1.71-.71l1.3 1.3 3.3-3.3a1.003 1.003 0 0 1 1.71.71.95.95 0 0 1-.29.7z',
        ],
        envelope: [
          'M0 3.06v9.88L4.94 8 0 3.06zM14.94 2H1.06L8 8.94 14.94 2zm-6.41 8.53c-.14.14-.32.22-.53.22s-.39-.08-.53-.22L6 9.06 1.06 14h13.88L10 9.06l-1.47 1.47zM11.06 8L16 12.94V3.06L11.06 8z',
        ],
        eraser: [
          'M8.06 13.91l7.63-7.44c.41-.4.41-1.05 0-1.45L10.86.3c-.41-.4-1.08-.4-1.49 0L.31 9.13c-.41.4-.41 1.05 0 1.45l5.58 5.44h8.12v-.01c.55 0 1-.45 1-1s-.45-1-1-1H7.96l.1-.1zm-2.17.06L1.67 9.85l4.22-4.11 4.22 4.11-4.22 4.12z',
        ],
        error: [
          'M7.99-.01c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm1 13h-2v-2h2v2zm0-3h-2v-7h2v7z',
        ],
        euro: [
          'M6.52 3.18c.51-.27 1.12-.4 1.83-.4.48 0 .91.06 1.27.18.37.12.68.29.96.51.18.14.3.33.44.51l1.53-1.53c-.12-.11-.23-.22-.36-.32a5.61 5.61 0 0 0-1.74-.83c-.66-.2-1.36-.3-2.1-.3-.99 0-1.88.18-2.66.53-.79.35-1.45.82-2 1.41-.55.58-.96 1.27-1.26 2.06H2c-.55 0-1 .45-1 1s.45 1 1 1h.04c-.01.17-.04.33-.04.5 0 .17.03.33.04.5H2c-.55 0-1 .45-1 1s.45 1 1 1h.43c0 .01 0 .02.01.02a6.2 6.2 0 0 0 1.25 2.07 5.77 5.77 0 0 0 2 1.4c.78.34 1.67.51 2.66.51.81 0 1.54-.12 2.21-.36.67-.24 1.25-.59 1.75-1.03l.03-.03-1.55-1.33c-.01.01-.02.03-.03.04-.29.3-.63.53-1.02.69-.4.17-.85.25-1.37.25-.71 0-1.32-.13-1.83-.4s-.93-.62-1.25-1.07c-.19-.24-.34-.49-.46-.76H9c.55 0 1-.45 1-1s-.45-1-1-1H4.35c-.01-.17-.03-.33-.03-.5 0-.17.02-.34.03-.5H10c.55 0 1-.45 1-1s-.45-1-1-1H4.83c.13-.27.27-.52.44-.76.32-.44.74-.8 1.25-1.06zM14 8.98v0z',
        ],
        exchange: [
          'M1.99 5.99c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.89-2-2-2zm4.15 1.86a.495.495 0 1 0 .7-.7L5.7 5.99h5.79c.28 0 .5-.22.5-.5s-.22-.5-.5-.5H5.7l1.15-1.15a.495.495 0 1 0-.7-.7l-2 2c-.1.09-.16.21-.16.35s.06.26.15.35l2 2.01zm7.85-1.86c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.89-2-2-2zM9.85 8.14a.533.533 0 0 0-.36-.15.495.495 0 0 0-.35.85l1.15 1.15h-5.8c-.28 0-.5.22-.5.5s.22.5.5.5h5.79l-1.15 1.15a.495.495 0 1 0 .7.7l2-2c.09-.09.15-.22.15-.35s-.06-.26-.15-.35l-1.98-2z',
        ],
        'exclude-row': [
          'M0 10a1.003 1.003 0 0 0 1.71.71L3 9.41l1.29 1.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71L4.41 8 5.7 6.71c.19-.18.3-.43.3-.71a1.003 1.003 0 0 0-1.71-.71L3 6.59l-1.29-1.3A1.003 1.003 0 0 0 .29 6.71L1.59 8 .29 9.29C.11 9.47 0 9.72 0 10zm1-7h14c.55 0 1-.45 1-1s-.45-1-1-1H1c-.55 0-1 .45-1 1s.45 1 1 1zm14 10H1c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1zm-1-7H9c-1.1 0-2 .9-2 2s.9 2 2 2h5c1.1 0 2-.9 2-2s-.9-2-2-2z',
        ],
        'expand-all': [
          'M4 7c.28 0 .53-.11.71-.29L8 3.41l3.29 3.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71l-4-4C8.53 1.11 8.28 1 8 1s-.53.11-.71.29l-4 4A1.003 1.003 0 0 0 4 7zm8 2c-.28 0-.53.11-.71.29L8 12.59l-3.29-3.3a1.003 1.003 0 0 0-1.42 1.42l4 4c.18.18.43.29.71.29s.53-.11.71-.29l4-4A1.003 1.003 0 0 0 12 9z',
        ],
        export: [
          'M4 6c.28 0 .53-.11.71-.29L7 3.41V11c0 .55.45 1 1 1s1-.45 1-1V3.41l2.29 2.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71l-4-4C8.53.11 8.28 0 8 0s-.53.11-.71.29l-4 4A1.003 1.003 0 0 0 4 6zm11 5c-.55 0-1 .45-1 1v2H2v-2c0-.55-.45-1-1-1s-1 .45-1 1v3c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1z',
        ],
        'eye-off': [
          'M16 7.97v-.02-.01-.02-.02a.672.672 0 0 0-.17-.36c-.49-.63-1.07-1.2-1.65-1.72l-3.16 2.26a2.978 2.978 0 0 1-2.98 2.9c-.31 0-.6-.06-.88-.15L5.09 12.3c.44.19.9.36 1.37.47.97.23 1.94.24 2.92.05.88-.17 1.74-.54 2.53-.98 1.25-.7 2.39-1.67 3.38-2.75.18-.2.37-.41.53-.62.09-.1.15-.22.17-.36v-.02-.02-.01-.02-.03c.01-.02.01-.03.01-.04zm-.43-4.17c.25-.18.43-.46.43-.8 0-.55-.45-1-1-1-.22 0-.41.08-.57.2l-.01-.01-2.67 1.91c-.69-.38-1.41-.69-2.17-.87a6.8 6.8 0 0 0-2.91-.05c-.88.18-1.74.54-2.53.99-1.25.7-2.39 1.67-3.38 2.75-.18.2-.37.41-.53.62-.23.29-.23.63-.01.92.51.66 1.11 1.25 1.73 1.79.18.16.38.29.56.44l-2.09 1.5.01.01c-.25.18-.43.46-.43.8 0 .55.45 1 1 1 .22 0 .41-.08.57-.2l.01.01 14-10-.01-.01zm-10.41 5a3.03 3.03 0 0 1-.11-.8 2.99 2.99 0 0 1 2.99-2.98c.62 0 1.19.21 1.66.53L5.16 8.8z',
        ],
        'eye-on': [
          'M10.29 6.7c.18.18.43.29.71.29s.53-.11.71-.29l4-4c.17-.18.29-.43.29-.7a1.003 1.003 0 0 0-1.71-.71L11 4.58 9.71 3.29A.997.997 0 0 0 9 3c-.55 0-1 .44-1 1a1 1 0 0 0 .3.7l1.99 2zM16 7.96v-.02-.01-.02-.02a.64.64 0 0 0-.17-.36c-.3-.4-.65-.76-1-1.12l-1.7 1.7c-.55.55-1.3.88-2.13.88-.06 0-.11-.01-.17-.02C10.42 10.15 9.32 11 8.01 11A3.005 3.005 0 0 1 6.4 5.46c-.24-.43-.39-.93-.39-1.46 0-.26.04-.5.1-.74-.7.2-1.37.5-2.01.86-1.26.7-2.4 1.68-3.4 2.77-.18.21-.36.41-.53.63-.22.29-.22.64 0 .93.51.67 1.12 1.27 1.73 1.81 1.33 1.17 2.85 2.15 4.53 2.55.97.23 1.95.24 2.92.05.89-.18 1.74-.54 2.54-.99 1.25-.71 2.4-1.69 3.39-2.78.18-.2.37-.41.54-.63.09-.1.15-.23.17-.37v-.02-.02-.01-.02-.03c.01-.01.01-.02.01-.03zM8.01 9c.48 0 .87-.35.96-.81a.55.55 0 0 1-.07-.09l-.02.01L7.8 7.03c-.45.1-.79.48-.79.96 0 .56.45 1.01 1 1.01z',
        ],
        'eye-open': [
          'M8.002 7.003a1.003 1.003 0 0 0 0 2.005 1.003 1.003 0 0 0 0-2.005zm7.988.972v-.02-.01-.02-.02a.675.675 0 0 0-.17-.36c-.509-.673-1.118-1.264-1.737-1.806-1.328-1.173-2.846-2.155-4.523-2.546a6.702 6.702 0 0 0-2.925-.06c-.889.18-1.738.541-2.546.992C2.84 4.837 1.692 5.81.694 6.902c-.18.211-.36.411-.53.632a.742.742 0 0 0 0 .932c.51.672 1.119 1.264 1.738 1.805 1.328 1.173 2.846 2.156 4.523 2.547.968.23 1.947.24 2.925.04.889-.18 1.738-.542 2.546-.993 1.248-.712 2.397-1.684 3.395-2.777.18-.2.37-.411.54-.632.09-.1.149-.23.169-.36v-.02-.02-.01-.02-.03c0-.01-.01-.01-.01-.02zm-7.988 3.038a2.998 2.998 0 0 1-2.995-3.008 2.998 2.998 0 0 1 2.995-3.008 2.998 2.998 0 0 1 2.996 3.008 2.998 2.998 0 0 1-2.996 3.008z',
        ],
        'fast-backward': [
          'M14 3c-.24 0-.44.09-.62.23l-.01-.01L9 6.72V4c0-.55-.45-1-1-1-.24 0-.44.09-.62.23v-.01l-5 4 .01.01C2.16 7.41 2 7.68 2 8s.16.59.38.77v.01l5 4 .01-.01c.17.14.37.23.61.23.55 0 1-.45 1-1V9.28l4.38 3.5.01-.01c.17.14.37.23.61.23.55 0 1-.45 1-1V4c0-.55-.45-1-1-1z',
        ],
        'fast-forward': [
          'M15 8c0-.32-.16-.59-.38-.77l.01-.01-5-4-.01.01A.987.987 0 0 0 9 3c-.55 0-1 .45-1 1v2.72l-4.38-3.5v.01A.987.987 0 0 0 3 3c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1 .24 0 .44-.09.62-.23l.01.01L8 9.28V12c0 .55.45 1 1 1 .24 0 .44-.09.62-.23l.01.01 5-4-.01-.01c.22-.18.38-.45.38-.77z',
        ],
        feed: [
          'M1.99 11.99c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.89-2-2-2zm1-4c-.55 0-1 .45-1 1s.45 1 1 1c1.66 0 3 1.34 3 3 0 .55.45 1 1 1s1-.45 1-1c0-2.76-2.24-5-5-5zm0-4c-.55 0-1 .45-1 1s.45 1 1 1c3.87 0 7 3.13 7 7 0 .55.45 1 1 1s1-.45 1-1a9 9 0 0 0-9-9zm0-4c-.55 0-1 .45-1 1s.45 1 1 1c6.08 0 11 4.92 11 11 0 .55.45 1 1 1s1-.45 1-1c0-7.18-5.82-13-13-13z',
        ],
        'feed-subscribed': [
          'M3 2c1.06 0 2.08.16 3.06.45.13-.71.52-1.32 1.05-1.76C5.82.25 4.44 0 3 0c-.55 0-1 .45-1 1s.45 1 1 1zM2 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm8.32-6.33a.99.99 0 0 0 1.4 0l3.98-3.98c.19-.18.3-.42.3-.7 0-.55-.45-.99-1-.99-.28 0-.52.11-.7.29l-3.28 3.28-1.29-1.29a.99.99 0 0 0-.7-.29 1 1 0 0 0-1 .99c0 .27.11.52.29.7l2 1.99zm3.73.53l-.93.93-.02-.02c-.17.17-.35.33-.56.45C13.47 9.16 14 11.02 14 13c0 .55.45 1 1 1s1-.45 1-1c0-2.5-.73-4.82-1.95-6.8zM3 8c-.55 0-1 .45-1 1s.45 1 1 1c1.66 0 3 1.34 3 3 0 .55.45 1 1 1s1-.45 1-1c0-2.76-2.24-5-5-5zm5.91-.91l-.03.03-2-2 .03-.03c-.11-.11-.23-.2-.33-.33A8.9 8.9 0 0 0 3 4c-.55 0-1 .45-1 1s.45 1 1 1c3.87 0 7 3.13 7 7 0 .55.45 1 1 1s1-.45 1-1c0-1.87-.57-3.61-1.55-5.06-.61-.11-1.13-.42-1.54-.85z',
        ],
        film: [
          'M15 1h-5v2H6V1H1c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1h5v-2h4v2h5c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zM4 13H2v-2h2v2zm0-3H2V8h2v2zm0-3H2V5h2v2zm0-3H2V2h2v2zm6 6H6V5h4v5zm4 3h-2v-2h2v2zm0-3h-2V8h2v2zm0-3h-2V5h2v2zm0-3h-2V2h2v2z',
        ],
        filter: [
          'M13.99.99h-12a1.003 1.003 0 0 0-.71 1.71l4.71 4.71V14a1.003 1.003 0 0 0 1.71.71l2-2c.18-.18.29-.43.29-.71V7.41L14.7 2.7a1.003 1.003 0 0 0-.71-1.71z',
        ],
        'filter-keep': [
          'M15 10c-.28 0-.53.11-.71.29L12 12.59l-1.29-1.29A.965.965 0 0 0 10 11a1.003 1.003 0 0 0-.71 1.71l2 2c.18.18.43.29.71.29s.53-.11.71-.29l3-3A1.003 1.003 0 0 0 15 10zm-3-8c0-.55-.45-1-1-1H1a1.003 1.003 0 0 0-.71 1.71L4 6.41V12a1.003 1.003 0 0 0 1.71.71l2-2c.18-.18.29-.43.29-.71V6.41l3.71-3.71c.18-.17.29-.42.29-.7z',
        ],
        'filter-list': [
          'M9 8c0 .55.45 1 1 1h5c.55 0 1-.45 1-1s-.45-1-1-1h-5c-.55 0-1 .45-1 1zm3-6c0-.55-.45-1-1-1H1a1.003 1.003 0 0 0-.71 1.71L4 6.41V12a1.003 1.003 0 0 0 1.71.71l2-2c.18-.18.29-.43.29-.71V6.41l3.71-3.71c.18-.17.29-.42.29-.7zm3 8h-5c-.55 0-1 .45-1 1s.45 1 1 1h5c.55 0 1-.45 1-1s-.45-1-1-1zm0 3h-5c-.55 0-1 .45-1 1s.45 1 1 1h5c.55 0 1-.45 1-1s-.45-1-1-1z',
        ],
        'filter-remove': [
          'M12 2c0-.55-.45-1-1-1H1a1.003 1.003 0 0 0-.71 1.71L4 6.41V12a1.003 1.003 0 0 0 1.71.71l2-2c.18-.18.29-.43.29-.71V6.41l3.71-3.71c.18-.17.29-.42.29-.7zm2.41 10l1.29-1.29c.19-.18.3-.43.3-.71a1.003 1.003 0 0 0-1.71-.71L13 10.59 11.71 9.3A.965.965 0 0 0 11 9a1.003 1.003 0 0 0-.71 1.71l1.3 1.29-1.29 1.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71l1.29-1.3 1.29 1.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71L14.41 12z',
        ],
        flag: [
          'M2.99 2.99c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1s1-.45 1-1v-11c0-.55-.45-1-1-1zm0-3c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm2 3.03v7.23c2.07-2.11 5.92 1.75 9 0V3.02c-3 2.07-6.94-2.03-9 0z',
        ],
        flame: [
          'M9.217 0c0 1.368.368 2.462 1.104 3.282C12.774 5.197 14 7.385 14 9.846c0 2.735-1.472 4.786-4.415 6.154 2.165-2.4 1.84-3.385-.368-6.4-2.342 1.2-1.967 2-1.592 3.6-.786 0-1.5 0-1.875-.4 0 .547.898 2 1.464 3.2-2.943-.82-6.092-5.744-4.988-6.154.736-.273 1.594-.137 2.575.41C3.575 5.333 5.047 1.915 9.217 0z',
        ],
        flash: [
          'M4 8c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1s.45 1 1 1h2c.55 0 1-.45 1-1zm4-4c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1S7 .45 7 1v2c0 .55.45 1 1 1zM3.79 5.21a1.003 1.003 0 0 0 1.42-1.42l-1.5-1.5a1.003 1.003 0 0 0-1.42 1.42l1.5 1.5zm.71 5.29c-.28 0-.53.11-.71.29l-1.5 1.5a1.003 1.003 0 0 0 1.42 1.42l1.5-1.5a1.003 1.003 0 0 0-.71-1.71zm7-5c.28 0 .53-.11.71-.29l1.5-1.5a1.003 1.003 0 0 0-1.42-1.42l-1.5 1.5a1.003 1.003 0 0 0 .71 1.71zm.71 5.29a1.003 1.003 0 0 0-1.42 1.42l1.5 1.5a1.003 1.003 0 0 0 1.42-1.42l-1.5-1.5zM15 7h-2c-.55 0-1 .45-1 1s.45 1 1 1h2c.55 0 1-.45 1-1s-.45-1-1-1zM8 5C6.34 5 5 6.34 5 8s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm0 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm0 3c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1z',
        ],
        'floppy-disk': [
          'M15.71 2.29l-2-2A.997.997 0 0 0 13 0h-1v6H4V0H1C.45 0 0 .45 0 1v14c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V3c0-.28-.11-.53-.29-.71zM14 15H2V9c0-.55.45-1 1-1h10c.55 0 1 .45 1 1v6zM11 1H9v4h2V1z',
        ],
        flows: [
          'M13.5 6a2.5 2.5 0 0 0-2.45 2h-1.3L5.74 4l-.75.75L8.25 8h-3.3a2.5 2.5 0 1 0 0 1h3.3l-3.26 3.25.75.75 4.01-4h1.3a2.5 2.5 0 1 0 2.45-3z',
        ],
        'folder-close': [
          'M-.01 14c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V7h-16v7zm15-10H7.41L5.7 2.3a.965.965 0 0 0-.71-.3h-4c-.55 0-1 .45-1 1v3h16V5c0-.55-.45-1-1-1z',
        ],
        'folder-new': [
          'M10.165 7a3.003 3.003 0 0 0 2.827 2 3.003 3.003 0 0 0 2.827-2H16v7c0 .55-.45 1-1 1H1.01c-.55 0-1-.45-1-1V7h10.155zM8.76 6H0V3c0-.55.45-1 1-1h1.998c.28 0 .53.11.71.29L5.417 4h2.578c0 .768.29 1.469.765 2zm6.23-3c.55 0 1 .45 1 1s-.45 1-1 1h-.999v1c0 .55-.45 1-1 1-.549 0-.998-.45-.998-1V5h-1c-.55 0-1-.45-1-1s.45-1 1-1h1V2c0-.55.45-1 .999-1 .55 0 1 .45 1 1v1h.999z',
        ],
        'folder-open': [
          'M2.06 6.69c.14-.4.5-.69.94-.69h11V5c0-.55-.45-1-1-1H6.41l-1.7-1.71A.997.997 0 0 0 4 2H1c-.55 0-1 .45-1 1v9.84l2.05-6.15h.01zM16 8c0-.55-.45-1-1-1H4a.99.99 0 0 0-.94.69l-2 6c-.04.09-.06.2-.06.31 0 .55.45 1 1 1h11c.44 0 .81-.29.94-.69l2-6c.04-.09.06-.2.06-.31z',
        ],
        'folder-shared': [
          'M8.76 5.98c-.47-.53-.77-1.22-.77-1.99h-.58L5.7 2.29a.965.965 0 0 0-.71-.3h-4c-.55 0-1 .45-1 1v3h8.76l.01-.01zm6.23-2.99h-4c-.55 0-1 .45-1 1s.45 1 1 1h1.59l-3.3 3.3a.99.99 0 0 0-.29.7 1.003 1.003 0 0 0 1.71.71l3.29-3.29V8c0 .55.45 1 1 1s1-.45 1-1V4c0-.56-.45-1.01-1-1.01zm-1.98 7.23l-.9.9-.01-.01c-.54.55-1.28.89-2.11.89-1.66 0-3-1.34-3-3 0-.77.3-1.47.78-2H-.01v7c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-3.18c-.31.11-.65.18-1 .18-.76-.01-1.45-.31-1.98-.78z',
        ],
        'folder-shared-open': [
          'M13.02 10.22l-.9.9-.01-.01c-.54.55-1.28.89-2.11.89-1.66 0-3-1.34-3-3 0-.77.3-1.47.78-2H4a.99.99 0 0 0-.94.69l-2 6c-.04.09-.06.2-.06.31 0 .55.45 1 1 1h11c.44 0 .81-.29.94-.69l1.11-3.32c-.01 0-.03.01-.05.01-.77 0-1.45-.3-1.98-.78zM2.06 6.69c.14-.4.5-.69.94-.69h5.76l.01-.01C8.3 5.46 8 4.77 8 4H6.41l-1.7-1.71A.997.997 0 0 0 4 2H1c-.55 0-1 .45-1 1v9.84l2.05-6.15h.01zM15 3h-4c-.55 0-1 .45-1 1s.45 1 1 1h1.59l-3.3 3.29a1.003 1.003 0 0 0 1.42 1.42L14 6.41V8c0 .55.45 1 1 1s1-.45 1-1V4c0-.55-.45-1-1-1z',
        ],
        follower: [
          'M9.37 12.69c-1.2-.53-1.04-.85-1.08-1.29-.01-.06-.01-.12-.01-.19.41-.37.75-.87.97-1.44 0 0 .01-.03.01-.04.05-.13.09-.26.12-.39.28-.06.44-.36.5-.63.06-.11.19-.39.16-.7-.04-.4-.2-.59-.38-.67v-.07c0-.52-.05-1.26-.14-1.74a2.72 2.72 0 0 0-.09-.43 3.02 3.02 0 0 0-1.04-1.51C7.87 3.2 7.15 3 6.5 3c-.64 0-1.36.2-1.87.59-.5.38-.87.92-1.05 1.51-.04.13-.07.27-.09.4-.09.49-.14 1.24-.14 1.75v.06c-.19.07-.36.26-.4.68-.03.31.1.59.16.7.06.28.23.59.51.64.04.14.08.27.13.39 0 .01.01.02.01.02v.01c.22.59.57 1.1.99 1.46 0 .06-.01.12-.01.17-.04.44.08.76-1.12 1.29-1.2.53-3.01 1.1-3.38 1.95C-.13 15.5.02 16 .02 16h12.96s.15-.5-.22-1.36c-.38-.85-2.19-1.42-3.39-1.95zm6.33-10.4l-2-2a1.003 1.003 0 0 0-1.42 1.42l.3.29H9.99c-.55 0-1 .45-1 1s.45 1 1 1h2.58l-.29.29a1.003 1.003 0 0 0 1.42 1.42l2-2c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71z',
        ],
        following: [
          'M9.37 12.69c-1.2-.53-1.04-.85-1.08-1.29-.01-.06-.01-.12-.01-.19.41-.37.75-.87.97-1.44 0 0 .01-.03.01-.04.05-.13.09-.26.12-.39.28-.06.44-.36.5-.63.06-.11.19-.39.16-.7-.04-.4-.2-.59-.38-.67v-.07c0-.52-.05-1.26-.14-1.74a2.72 2.72 0 0 0-.09-.43 3.02 3.02 0 0 0-1.04-1.51C7.87 3.2 7.15 3 6.5 3c-.64 0-1.36.2-1.87.59-.5.38-.87.92-1.05 1.51-.04.13-.07.27-.09.4-.09.49-.14 1.24-.14 1.75v.06c-.19.07-.36.26-.4.68-.03.31.1.59.16.7.06.28.23.59.51.64.04.14.08.27.13.39 0 .01.01.02.01.02v.01c.22.59.57 1.1.99 1.46 0 .06-.01.12-.01.17-.04.44.08.76-1.12 1.29-1.2.53-3.01 1.1-3.38 1.95C-.13 15.5.02 16 .02 16h12.96s.15-.5-.22-1.36c-.38-.85-2.19-1.42-3.39-1.95zM14.99 2h-2.58l.29-.29A1.003 1.003 0 0 0 11.28.29l-2 2c-.17.18-.29.43-.29.71 0 .28.11.53.29.71l2 2a1.003 1.003 0 0 0 1.42-1.42L12.41 4h2.58c.55 0 1-.45 1-1s-.45-1-1-1z',
        ],
        font: [
          'M13.93 14.67L8.94.67h-.01C8.79.28 8.43 0 8 0s-.79.28-.93.67h-.01l-5 14h.01c-.04.1-.07.21-.07.33 0 .55.45 1 1 1 .43 0 .79-.28.93-.67h.01L5.49 11h5.02l1.55 4.34h.01c.14.38.5.66.93.66.55 0 1-.45 1-1 0-.12-.03-.23-.07-.33zM6.2 9L8 3.97 9.8 9H6.2z',
        ],
        fork: [
          'M13.7 9.29a1.003 1.003 0 0 0-1.42 1.42l.29.29H11.4l-5-5h6.17l-.29.29a1.003 1.003 0 0 0 1.42 1.42l2-2c.18-.18.29-.43.29-.71s-.11-.53-.29-.71l-2-2a1.003 1.003 0 0 0-1.42 1.42l.29.29H.99c-.55 0-1 .45-1 1s.45 1 1 1h2.59l6.71 6.71c.18.18.43.29.71.29h1.59l-.29.29a1.003 1.003 0 0 0 1.42 1.42l2-2c.18-.18.29-.43.29-.71s-.11-.53-.29-.71l-2.02-2z',
        ],
        form: [
          'M2 11v2h2v-2H2zM1 9h4c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1zm9-6h5c.55 0 1 .45 1 1s-.45 1-1 1h-5c-.55 0-1-.45-1-1s.45-1 1-1zM6 1a1.003 1.003 0 0 1 .71 1.71l-3 4C3.53 6.89 3.28 7 3 7s-.53-.11-.71-.29l-2-2a1.003 1.003 0 0 1 1.42-1.42L3 4.59l2.29-3.3C5.47 1.11 5.72 1 6 1zm4 10h5c.55 0 1 .45 1 1s-.45 1-1 1h-5c-.55 0-1-.45-1-1s.45-1 1-1z',
        ],
        'full-circle': ['M8 0a8 8 0 1 0 0 16A8 8 0 1 0 8 0z'],
        'full-stacked-chart': [
          'M13 12h1c.55 0 1-.45 1-1V8h-3v3c0 .55.45 1 1 1zM10 2c0-.55-.45-1-1-1H8c-.55 0-1 .45-1 1v3h3V2zm0 4H7v3h3V6zm5-4c0-.55-.45-1-1-1h-1c-.55 0-1 .45-1 1v2h3V2zm0 3h-3v2h3V5zM5 5H2v3h3V5zm-2 7h1c.55 0 1-.45 1-1V9H2v2c0 .55.45 1 1 1zm12 1H2c-.55 0-1 .45-1 1s.45 1 1 1h13c.55 0 1-.45 1-1s-.45-1-1-1zM5 2c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v2h3V2zm3 10h1c.55 0 1-.45 1-1v-1H7v1c0 .55.45 1 1 1z',
        ],
        fullscreen: [
          'M3.41 2H5c.55 0 1-.45 1-1s-.45-1-1-1H1C.45 0 0 .45 0 1v4c0 .55.45 1 1 1s1-.45 1-1V3.41L5.29 6.7c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71L3.41 2zM6 9c-.28 0-.53.11-.71.29L2 12.59V11c0-.55-.45-1-1-1s-1 .45-1 1v4c0 .55.45 1 1 1h4c.55 0 1-.45 1-1s-.45-1-1-1H3.41l3.29-3.29c.19-.18.3-.43.3-.71 0-.55-.45-1-1-1zm9 1c-.55 0-1 .45-1 1v1.59L10.71 9.3A.965.965 0 0 0 10 9a1.003 1.003 0 0 0-.71 1.71l3.3 3.29H11c-.55 0-1 .45-1 1s.45 1 1 1h4c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1zm0-10h-4c-.55 0-1 .45-1 1s.45 1 1 1h1.59l-3.3 3.29a1.003 1.003 0 0 0 1.42 1.42L14 3.41V5c0 .55.45 1 1 1s1-.45 1-1V1c0-.55-.45-1-1-1z',
        ],
        function: [
          'M8.12 4.74H6.98c.33-1.29.75-2.24 1.28-2.84.33-.37.64-.56.95-.56.06 0 .11.02.15.05.04.04.06.09.06.15 0 .05-.04.15-.13.29-.09.14-.13.28-.13.4 0 .18.07.33.2.46.14.13.31.19.52.19.22 0 .41-.08.56-.23.15-.16.23-.37.23-.63 0-.3-.11-.55-.34-.74C10.1 1.09 9.74 1 9.24 1c-.78 0-1.49.22-2.12.67-.64.45-1.24 1.2-1.81 2.23-.2.36-.38.59-.56.69-.18.1-.46.15-.85.15l-.26.9h1.08l-1.59 6.12c-.27 1.01-.44 1.63-.54 1.86-.14.34-.34.63-.62.87-.11.1-.24.15-.4.15a.15.15 0 0 1-.11-.04l-.04-.05c0-.03.04-.08.12-.16.08-.08.12-.2.12-.36 0-.18-.06-.33-.19-.44-.12-.12-.3-.18-.54-.18-.28 0-.51.08-.68.23-.16.14-.25.32-.25.53 0 .22.1.42.31.59.21.17.53.25.97.25.7 0 1.32-.18 1.87-.54.54-.36 1.02-.92 1.42-1.67.41-.75.82-1.96 1.25-3.63l.91-3.54h1.1l.29-.89zm5.43 1.52c.2-.15.41-.23.62-.23.08 0 .23.03.45.09s.41.09.57.09c.23 0 .42-.08.57-.23.16-.16.24-.36.24-.61 0-.26-.08-.47-.23-.62-.15-.15-.37-.23-.66-.23-.25 0-.5.06-.72.18-.23.12-.51.38-.86.78-.26.3-.64.81-1.15 1.55-.2-.91-.55-1.75-1.05-2.51l-2.72.46-.06.29c.2-.04.37-.06.51-.06.27 0 .49.11.67.34.28.36.67 1.45 1.17 3.26-.39.52-.66.85-.8 1.01-.24.26-.44.42-.59.5-.12.06-.25.09-.41.09-.11 0-.3-.06-.56-.18-.18-.08-.34-.12-.48-.12-.27 0-.48.08-.66.25-.17.17-.26.38-.26.64 0 .25.08.44.24.6.16.15.37.23.64.23.26 0 .5-.05.73-.16.23-.11.52-.34.86-.69.35-.35.82-.9 1.43-1.67.23.73.44 1.25.61 1.58s.37.57.59.71c.22.15.5.22.83.22.32 0 .65-.11.98-.34.44-.3.88-.81 1.34-1.53l-.26-.15c-.31.43-.54.7-.69.8-.1.07-.22.1-.35.1-.16 0-.32-.1-.48-.3-.27-.34-.62-1.27-1.06-2.8.4-.68.73-1.13 1-1.34z',
        ],
        'gantt-chart': [
          'M10 10c0 .55.45 1 1 1h4c.55 0 1-.45 1-1s-.45-1-1-1h-4c-.55 0-1 .45-1 1zM6 7c0 .55.45 1 1 1h4c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1zm9 5H2V3c0-.55-.45-1-1-1s-1 .45-1 1v10c0 .55.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1zM4 5h3c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1z',
        ],
        geolocation: ['M-.01 6.66l7.34 2 2 7.33 6.66-16z'],
        geosearch: [
          'M8.82 12.4h.66c.23 0 .36-.17.36-.4v-1.48l.19-.18c-.27.03-.55.06-.83.06-.28 0-.56-.03-.84-.07.02.04.05.08.07.13V12c0 .23.15.4.39.4zM6.4 15.1A5.51 5.51 0 0 1 .9 9.6c0-.49.06-.98.18-1.43.03 0 .05-.01.08-.01h.08v.44c0 .19.17.34.36.34.03 0 .07-.01.1-.01l.71.7c.07.07.19.07.26 0s.07-.19 0-.26l-.7-.72c0-.02.03-.03.03-.05v-.11c0-.15.08-.2.23-.33h.42c.08 0 .15-.01.22-.04h.02c.02-.02.03-.02.04-.04.01-.01.01-.01.02-.01l.02-.01.9-.9c-.13-.26-.24-.52-.34-.8h-.5v-.43c0-.01.05.05.04-.08h.31c-.03-.13-.06-.26-.08-.39h-.57c.16-.12.34-.24.51-.36-.02-.23-.04-.46-.04-.7 0-.12.01-.23.02-.34A6.385 6.385 0 0 0 0 9.6C0 13.13 2.87 16 6.4 16c3.1 0 5.67-2.22 6.26-5.15l-.78-.88c-.21 2.85-2.58 5.13-5.48 5.13zm-1.7-2.93v-.28h.12c.23 0 .39-.19.39-.42v-.54s.01-.01 0-.01L3.77 9.45h-.62c-.23 0-.38.19-.38.42v1.6c0 .23.14.42.38.42h.26v1.61c0 .23.22.41.45.41s.45-.18.45-.41v-.97H4.3c.24 0 .4-.13.4-.36zm11.07-2.34l-2.94-2.94c.11-.17.21-.34.3-.52.01-.03.03-.06.04-.09.08-.18.16-.36.22-.55v-.01c.06-.19.1-.38.14-.58.01-.05.01-.09.02-.14.03-.2.05-.4.05-.61a4.4 4.4 0 0 0-4.4-4.4C6.77 0 4.8 1.97 4.8 4.4s1.97 4.4 4.4 4.4c.21 0 .41-.02.61-.05.04 0 .09-.01.14-.02.2-.03.39-.08.58-.14h.01c.19-.06.37-.14.55-.22.03-.01.06-.03.09-.04.18-.09.35-.19.52-.3l2.94 2.94a.8.8 0 0 0 .57.23c.44 0 .8-.36.8-.8a.895.895 0 0 0-.24-.57zM9.2 7.6C7.43 7.6 6 6.17 6 4.4c0-1.77 1.43-3.2 3.2-3.2s3.2 1.43 3.2 3.2c0 1.77-1.43 3.2-3.2 3.2zm1.54 4.26v-.52c0-.09-.1-.17-.19-.17s-.19.07-.19.17v.52c0 .09.1.17.19.17s.19-.07.19-.17z',
        ],
        'git-branch': [
          'M12 1c-1.66 0-3 1.34-3 3 0 1.25.76 2.32 1.85 2.77A2.02 2.02 0 0 1 9 8H7c-.73 0-1.41.2-2 .55V5.82C6.16 5.4 7 4.3 7 3c0-1.66-1.34-3-3-3S1 1.34 1 3c0 1.3.84 2.4 2 2.82v4.37c-1.16.4-2 1.51-2 2.81 0 1.66 1.34 3 3 3s3-1.34 3-3c0-1.04-.53-1.95-1.32-2.49.35-.31.81-.51 1.32-.51h2c1.92 0 3.52-1.35 3.91-3.15A2.996 2.996 0 0 0 12 1zM4 2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 12c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm8-9c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z',
        ],
        'git-commit': [
          'M15 7h-3.14c-.45-1.72-2-3-3.86-3S4.59 5.28 4.14 7H1c-.55 0-1 .45-1 1s.45 1 1 1h3.14c.45 1.72 2 3 3.86 3s3.41-1.28 3.86-3H15c.55 0 1-.45 1-1s-.45-1-1-1zm-7 3c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z',
        ],
        'git-merge': [
          'M12 6c-1.3 0-2.4.84-2.82 2H9c-1.62 0-3-.96-3.63-2.34C6.33 5.16 7 4.16 7 3c0-1.66-1.34-3-3-3S1 1.34 1 3c0 1.3.84 2.4 2 2.81v4.37C1.84 10.6 1 11.7 1 13c0 1.66 1.34 3 3 3s3-1.34 3-3c0-1.3-.84-2.4-2-2.82V8.43A5.89 5.89 0 0 0 9 10h.18A2.996 2.996 0 0 0 15 9c0-1.66-1.34-3-3-3zm-8 8c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zM4 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm8 6c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z',
        ],
        'git-new-branch': [
          'M14 2h-1V1c0-.55-.45-1-1-1s-1 .45-1 1v1h-1c-.55 0-1 .45-1 1s.45 1 1 1h1v1c0 .55.45 1 1 1s1-.45 1-1V4h1c.55 0 1-.45 1-1s-.45-1-1-1zm-3.18 4.8C10.51 7.51 9.82 8 9 8H7c-.73 0-1.41.2-2 .55V5.82C6.16 5.4 7 4.3 7 3c0-1.66-1.34-3-3-3S1 1.34 1 3c0 1.3.84 2.4 2 2.82v4.37c-1.16.4-2 1.51-2 2.81 0 1.66 1.34 3 3 3s3-1.34 3-3c0-1.04-.53-1.95-1.32-2.49.35-.31.81-.51 1.32-.51h2c1.9 0 3.49-1.33 3.89-3.11-.29.07-.58.11-.89.11-.41 0-.8-.08-1.18-.2zM4 2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 12c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z',
        ],
        'git-pull': [
          'M3 1C1.34 1 0 2.34 0 4c0 1.3.84 2.4 2 2.82v3.37C.84 10.6 0 11.7 0 13c0 1.66 1.34 3 3 3s3-1.34 3-3c0-1.3-.84-2.4-2-2.82V6.82C5.16 6.4 6 5.3 6 4c0-1.66-1.34-3-3-3zm0 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm0-9c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm11 5.18V6c0-1.66-1.34-3-3-3H9.41l1.29-1.29c.19-.18.3-.43.3-.71A1.003 1.003 0 0 0 9.29.29l-3 3C6.11 3.47 6 3.72 6 4c0 .28.11.53.29.71l3 3a1.003 1.003 0 0 0 1.42-1.42L9.41 5H11c.55 0 1 .45 1 1v4.18A2.996 2.996 0 0 0 13 16c1.66 0 3-1.34 3-3 0-1.3-.84-2.4-2-2.82zM13 14c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z',
        ],
        'git-push': [
          'M4 6h1V5H4v1zm9 3c0-.28-.11-.53-.29-.71l-3-3C9.53 5.11 9.28 5 9 5s-.53.11-.71.29l-3 3a1.003 1.003 0 0 0 1.42 1.42L8 8.41V15c0 .55.45 1 1 1s1-.45 1-1V8.41l1.29 1.29c.18.19.43.3.71.3.55 0 1-.45 1-1zM5 3H4v1h1V3zm10-3H1C.45 0 0 .45 0 1v13c0 .55.45 1 1 1h5v-2H2v-1h4v-1H3V2h11v9h-2v1h2v1h-2v2h3c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1z',
        ],
        'git-repo': [
          'M5 9H4v1h1V9zm10-9H1C.45 0 0 .45 0 1v13c0 .55.45 1 1 1h3v1l2-1 2 1v-1h7c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zM4 13H2v-1h2v1zm10 0H8v-1h6v1zm0-2H3V2h11v9zM5 3H4v1h1V3zm0 4H4v1h1V7zm0-2H4v1h1V5z',
        ],
        glass: [
          'M2 0v4c0 2.97 2.16 5.43 5 5.91V14H5c-.55 0-1 .45-1 1s.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1H9V9.91c2.84-.48 5-2.94 5-5.91V0H2z',
        ],
        globe: [
          'M4.45 7.83c-.26 0-.41.21-.41.46v1.75c0 .26.16.46.41.46h.29v1.77c0 .25.24.45.49.45s.49-.2.49-.45V11.2h-.01c.26 0 .44-.14.44-.4v-.3h.14c.26 0 .43-.2.43-.46v-.59s.01-.01 0-.01l-1.58-1.6h-.69zM8.51 3.9h.22c.06 0 .12-.01.12-.07 0-.06-.05-.07-.12-.07h-.22c-.06 0-.12.01-.12.07.01.06.06.07.12.07zm-2.33-.05c.07-.07.07-.19 0-.26l-.5-.5a.187.187 0 0 0-.26 0c-.07.07-.07.19 0 .26l.5.5c.07.07.19.07.26 0zm3.06.89c.07 0 .14-.06.14-.12v-.31c0-.07-.07-.12-.14-.12s-.14.06-.14.12v.31c0 .07.07.12.14.12zM8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-.55.1-1.07.23-1.57h.11v.47c0 .2.18.37.39.37.03 0 .08-.01.11-.02l.78.77c.08.08.2.08.28 0 .08-.08.08-.2 0-.28l-.75-.78c0-.02.04-.04.04-.06v-.12c0-.16.09-.22.25-.36h.46c.09 0 .17-.01.24-.05h.02c.02-.01.03-.02.05-.03.01-.01.01-.01.02-.01l.02-.02 1.59-1.58c.18-.18.18-.46 0-.64s-.47-.15-.65.03l-.3.34h-.57v-.48c0-.01.05.05.05-.09h.64c.12 0 .22-.09.22-.21s-.1-.21-.22-.21H4.1c.18-.15.34-.31.54-.44l.01-.01c.21-.14.45-.25.68-.37.15-.07.29-.15.44-.21.17-.07.35-.11.53-.17.18-.05.35-.12.53-.16a6.05 6.05 0 0 1 3.47.35c.05.02.1.05.16.08.25.11.48.24.71.39.25.16.49.34.71.55H10.6s0-.03-.01-.03c-.04 0-.09 0-.13.03l-.51.51a.17.17 0 0 0 0 .23c.06.06.17.06.23 0l.42-.44.01-.02h.25c0 .14-.07.09-.07.12v.07c0 .22-.15.37-.36.37h-.38c-.19 0-.38.21-.38.4v.17h-.1c-.12 0-.2.06-.2.18v.25h-.23c-.17 0-.3.11-.3.28 0 .17.13.26.3.26.07 0 .14.03.19-.11l.04.01.49-.46h.17l.39.37c.03.03.08.02.12-.01.03-.03.03-.12 0-.15l-.32-.35h.23l.09.12c.18.18.48.17.66-.01l.09-.1h.4c.02 0 .08.05.08.05v.24l-.05-.01h-.36c-.11 0-.21.1-.21.21 0 .11.09.21.21.21h.41v.15c-.14.21-.24.42-.45.42h-.94v-.01l-.44-.44a.47.47 0 0 0-.66 0l-.42.43v.01H8.6c-.26 0-.49.21-.49.46v.92c0 .26.23.45.49.45h.9c.34.14.57.35.72.69v1.68c0 .26.17.44.42.44h.72c.26 0 .4-.18.4-.44V9l.89-.86.03-.02.02-.01h.03c.07-.08.15-.19.15-.31v-.91c0-.18-.16-.32-.31-.46H13c.01.28.21.42.46.42h.42c.08.37.12.76.12 1.15 0 3.31-2.69 6-6 6zm4.54-4.27c-.1 0-.21.08-.21.18v.57c0 .1.11.18.21.18.1 0 .21-.08.21-.18v-.57c0-.1-.11-.18-.21-.18zM8.37 3.19c0-.25-.2-.42-.46-.42h-.54c-.25 0-.42.18-.42.43 0 .03-.1.04.05.08v.47c0 .15.06.27.21.27s.21-.12.21-.27v-.14h.5c.24 0 .45-.16.45-.42z',
        ],
        'globe-network': [
          'M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm5.17 5h-2.44c-.21-1.11-.51-2.03-.91-2.69 1.43.46 2.61 1.43 3.35 2.69zM10 8c0 .73-.05 1.39-.12 2H6.12C6.05 9.39 6 8.73 6 8s.05-1.39.12-2h3.76c.07.61.12 1.27.12 2zM8 2c.67 0 1.36 1.1 1.73 3H6.27C6.64 3.1 7.33 2 8 2zm-1.82.31c-.4.66-.71 1.58-.91 2.69H2.83a6.025 6.025 0 0 1 3.35-2.69zM2 8c0-.7.13-1.37.35-2h2.76C5.04 6.62 5 7.28 5 8s.04 1.38.11 2H2.35C2.13 9.37 2 8.7 2 8zm.83 3h2.44c.21 1.11.51 2.03.91 2.69A6.025 6.025 0 0 1 2.83 11zM8 14c-.67 0-1.36-1.1-1.73-3h3.46c-.37 1.9-1.06 3-1.73 3zm1.82-.31c.4-.66.7-1.58.91-2.69h2.44a6.025 6.025 0 0 1-3.35 2.69zM13.65 10h-2.76c.07-.62.11-1.28.11-2s-.04-1.38-.11-2h2.76c.22.63.35 1.3.35 2s-.13 1.37-.35 2z',
        ],
        graph: [
          'M14 3c-1.06 0-1.92.83-1.99 1.88l-1.93.97A2.95 2.95 0 0 0 8 5c-.56 0-1.08.16-1.52.43L3.97 3.34C3.98 3.23 4 3.12 4 3c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2c.24 0 .47-.05.68-.13l2.51 2.09C5.08 7.29 5 7.63 5 8c0 .96.46 1.81 1.16 2.35l-.56 1.69c-.91.19-1.6.99-1.6 1.96 0 1.1.9 2 2 2s2-.9 2-2c0-.51-.2-.97-.51-1.32l.56-1.69A2.99 2.99 0 0 0 11 8c0-.12-.02-.24-.04-.36l1.94-.97c.32.21.69.33 1.1.33 1.1 0 2-.9 2-2s-.9-2-2-2z',
        ],
        'graph-remove': [
          'M12.89 8.11l-.01.01-.38-.38-.38.38-.02-.02c-.54.55-1.27.9-2.1.9-1.66 0-3-1.34-3-3 0-.83.35-1.56.9-2.1l-.02-.02.38-.38-.38-.38.01-.01C7.35 2.57 7 1.83 7 1c0-.34.07-.65.17-.96A8.004 8.004 0 0 0 0 8c0 4.42 3.58 8 8 8 4.14 0 7.54-3.14 7.96-7.17-.31.1-.62.17-.96.17-.83 0-1.57-.35-2.11-.89zm1.02-4.61l1.79-1.79c.19-.18.3-.43.3-.71a1.003 1.003 0 0 0-1.71-.71l-1.79 1.8L10.71.3A.965.965 0 0 0 10 0a1.003 1.003 0 0 0-.71 1.71l1.79 1.79-1.79 1.79a1.003 1.003 0 0 0 1.42 1.42l1.79-1.79 1.79 1.79a1.003 1.003 0 0 0 1.42-1.42l-1.8-1.79z',
        ],
        grid: [
          'M15 9c.55 0 1-.45 1-1s-.45-1-1-1h-1V4h1c.55 0 1-.45 1-1s-.45-1-1-1h-1V1c0-.55-.45-1-1-1s-1 .45-1 1v1H9V1c0-.55-.45-1-1-1S7 .45 7 1v1H4V1c0-.55-.45-1-1-1S2 .45 2 1v1H1c-.55 0-1 .45-1 1s.45 1 1 1h1v3H1c-.55 0-1 .45-1 1s.45 1 1 1h1v3H1c-.55 0-1 .45-1 1s.45 1 1 1h1v1c0 .55.45 1 1 1s1-.45 1-1v-1h3v1c0 .55.45 1 1 1s1-.45 1-1v-1h3v1c0 .55.45 1 1 1s1-.45 1-1v-1h1c.55 0 1-.45 1-1s-.45-1-1-1h-1V9h1zm-8 3H4V9h3v3zm0-5H4V4h3v3zm5 5H9V9h3v3zm0-5H9V4h3v3z',
        ],
        'grid-view': [
          'M0 1v6h7V0H1C.45 0 0 .45 0 1zm0 14c0 .55.45 1 1 1h6V9H0v6zM15 0H9v7h7V1c0-.55-.45-1-1-1zM9 16h6c.55 0 1-.45 1-1V9H9v7z',
        ],
        'group-objects': [
          'M5 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6-3H5C2.24 3 0 5.24 0 8s2.24 5 5 5h6c2.76 0 5-2.24 5-5s-2.24-5-5-5zm0 9H5c-2.21 0-4-1.79-4-4s1.79-4 4-4h6c2.21 0 4 1.79 4 4s-1.79 4-4 4zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z',
        ],
        'grouped-bar-chart': [
          'M10 12c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1s-1 .45-1 1v8c0 .55.45 1 1 1zm3 0c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1s-1 .45-1 1v5c0 .55.45 1 1 1zm2 1H1c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1zm-9-1c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1s-1 .45-1 1v3c0 .55.45 1 1 1zm-3 0c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1v9c0 .55.45 1 1 1z',
        ],
        hand: [
          'M15 5c0-.55-.45-1-1-1-.41 0-.76.24-.91.59v.01s0 .01-.01.01L11.57 8h-.36l.78-4.84C12 3.11 12 3.05 12 3a1 1 0 1 0-1.99-.16v.01L9.18 8H9V1c0-.55-.45-1-1-1S7 .45 7 1v7h-.09l-.93-5.18A1 1 0 0 0 5 2c-.55 0-1 .45-1 1 0 .05 0 .11.01.16L5.26 11h-.04L2.83 7.44C2.65 7.18 2.35 7 2 7c-.55 0-1 .45-1 1 0 .17.04.33.12.47l3 5.69h.01v.01A5.002 5.002 0 0 0 13 11v-.59l1.93-5.05c.05-.11.07-.23.07-.36z',
        ],
        'hand-down': [
          'M14.72 7.87c-1.54-.67-2.99-2.68-3.7-3.95C10.11 1.95 9.93 0 6.14 0 4.05 0 2.71.61 1.92 2.12 1.27 3.36 1 5.21 1 7.83v.79c0 .65.6 1.18 1.35 1.18.34 0 .64-.11.88-.29.17.48.68.84 1.29.84.41 0 .78-.16 1.03-.42.23.37.67.63 1.19.63.57 0 1.05-.31 1.25-.74l.01.63v4.05c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V7.9c.58.41 1.55 1.21 2.47 1.29 1.57.14 1.82-1.07 1.25-1.32z',
        ],
        'hand-left': [
          'M12.08 4.97c-1.26-.71-3.27-2.15-3.95-3.7C7.88.7 6.67.96 6.81 2.52c.09.93.89 1.9 1.3 2.48H1.5C.67 5 0 5.67 0 6.5S.67 8 1.5 8h4.05l.63.01c-.44.2-.75.69-.75 1.25 0 .52.26.96.63 1.19-.26.25-.42.61-.42 1.03 0 .61.35 1.12.84 1.29-.18.24-.29.54-.29.88 0 .75.54 1.35 1.19 1.35h.79c2.62 0 4.47-.28 5.71-.92 1.51-.79 2.12-2.14 2.12-4.22 0-3.79-1.95-3.97-3.92-4.89z',
        ],
        'hand-right': [
          'M14.5 5H7.89c.41-.58 1.21-1.55 1.3-2.47C9.34.97 8.12.71 7.87 1.28c-.67 1.54-2.68 2.99-3.95 3.7C1.95 5.89 0 6.07 0 9.86c0 2.09.61 3.43 2.12 4.22 1.24.65 3.09.92 5.71.92h.79c.65 0 1.18-.6 1.18-1.35 0-.34-.11-.64-.29-.88.48-.17.84-.68.84-1.29 0-.41-.16-.78-.42-1.03.37-.23.63-.67.63-1.19 0-.57-.31-1.05-.74-1.25l.63-.01h4.05c.83 0 1.5-.67 1.5-1.5S15.33 5 14.5 5z',
        ],
        'hand-up': [
          'M13.65 6.19c-.34 0-.64.11-.88.29-.17-.48-.68-.84-1.29-.84-.41 0-.78.16-1.03.42-.23-.37-.67-.63-1.19-.63-.57 0-1.05.31-1.25.74L8 5.55V1.5C8 .67 7.33 0 6.5 0S5 .67 5 1.5v6.61c-.58-.41-1.55-1.21-2.48-1.3C.96 6.67.7 7.88 1.28 8.13c1.54.67 2.99 2.68 3.7 3.95C5.89 14.05 6.07 16 9.86 16c2.09 0 3.43-.61 4.22-2.12.64-1.24.92-3.09.92-5.71v-.79c0-.65-.6-1.19-1.35-1.19z',
        ],
        header: [
          'M13 1c-.55 0-1 .45-1 1v5H4V2c0-.55-.45-1-1-1s-1 .45-1 1v12c0 .55.45 1 1 1s1-.45 1-1V9h8v5c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1z',
        ],
        'header-one': [
          'M14.06 8c-.04.23-.12.44-.25.61-.13.17-.29.3-.48.41-.18.11-.39.18-.62.23-.23.04-.46.07-.71.07v1.03h1.74V16H15V8h-.94zM7 0c-.56 0-1 .45-1 1v4H2V1c0-.55-.45-1-1-1-.56 0-1 .45-1 1v10c0 .55.45 1 1 1 .56 0 1-.45 1-1V7h4v4c0 .55.45 1 1 1 .56 0 1-.45 1-1V1c0-.54-.45-1-1-1z',
        ],
        'header-two': [
          'M13.17 13.93c-.17.15-.33.29-.46.44-.13.16-.22.32-.27.49h3.55V16H11c.01-.65.16-1.22.44-1.71s.67-.91 1.17-1.27c.24-.18.49-.36.75-.54.25-.18.49-.36.71-.57.21-.2.39-.42.53-.65.14-.24.21-.51.22-.82 0-.14-.02-.29-.05-.45-.03-.16-.09-.31-.18-.45a1.13 1.13 0 0 0-.37-.35c-.16-.09-.37-.14-.63-.14-.24 0-.43.05-.59.15-.16.1-.29.24-.38.42-.1.17-.17.38-.21.62-.05.24-.07.5-.08.77h-1.19c0-.43.05-.83.16-1.2s.27-.69.49-.96c.21-.25.48-.46.79-.62.31-.15.67-.23 1.07-.23.45 0 .82.08 1.11.23.3.16.55.36.73.6.19.24.32.5.39.79.08.28.12.54.12.79 0 .31-.04.6-.13.85s-.22.49-.37.7c-.15.21-.32.41-.52.59s-.4.35-.61.51l-.63.45c-.21.14-.39.28-.57.42zM0 1c0-.55.44-1 1-1 .55 0 1 .46 1 1v10c0 .55-.44 1-1 1-.55 0-1-.46-1-1V1zm6 0c0-.55.44-1 1-1 .55 0 1 .46 1 1v10c0 .55-.44 1-1 1-.55 0-1-.46-1-1V1zM2 5h4v2H2V5z',
        ],
        headset: [
          'M14.85 6.34C14.18 2.72 11.37 0 8 0S1.82 2.72 1.15 6.34C.47 6.9 0 8.1 0 9.5 0 11.43.9 13 2 13c0 1.1.9 2 2 2h2c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1H4c-.55 0-1-.45-1-1 .55 0 1-.45 1-1V7c0-.45-.3-.81-.71-.94C3.97 3.7 5.81 2 8 2s4.03 1.7 4.71 4.06c-.41.13-.71.49-.71.94v5c0 .55.45 1 1 1h1c1.1 0 2-1.57 2-3.5 0-1.4-.47-2.6-1.15-3.16z',
        ],
        heart: [
          'M16 5.095c0-2.255-1.88-4.083-4.2-4.083-1.682 0-3.13.964-3.8 2.352a4.206 4.206 0 0 0-3.8-2.352C1.88 1.012 0 2.84 0 5.095c0 .066.007.13.01.194H.004c.001.047.01.096.014.143l.013.142c.07.8.321 1.663.824 2.573C2.073 10.354 4.232 12.018 8 15c3.767-2.982 5.926-4.647 7.144-6.854.501-.905.752-1.766.823-2.562.007-.055.012-.11.016-.164.003-.043.012-.088.013-.13h-.006c.003-.066.01-.13.01-.195z',
        ],
        'heart-broken': [
          'M7.71 8.87L6.17 6.55l.02-.01A.906.906 0 0 1 6 6c0-.07.03-.13.04-.19h-.02l.78-3.92C6.09 1.34 5.19 1 4.2 1 1.88 1 0 2.83 0 5.09c0 .07.01.13.01.19H0c0 .05.01.1.01.14 0 .05.01.1.01.14.07.8.32 1.66.82 2.57 1.07 1.94 2.88 3.47 5.86 5.84l-.68-2.74h.02C6.03 11.16 6 11.08 6 11c0-.28.11-.53.29-.71l1.42-1.42zM16 5.09C16 2.83 14.12 1 11.8 1c-1.2 0-2.27.5-3.04 1.28l-.7 3.51 1.77 2.66-.01.01c.1.15.18.33.18.54 0 .28-.11.53-.29.71l-1.6 1.6.75 3.01c3.23-2.56 5.16-4.15 6.28-6.18.5-.91.75-1.77.82-2.56.01-.05.01-.11.02-.16 0-.04.01-.09.01-.13h-.01c.01-.07.02-.14.02-.2z',
        ],
        'heat-grid': [
          'M0 10h5V7H0v3zm1-2h3v1H1V8zm14-5h-4v3h5V4c0-.55-.45-1-1-1zm0 2h-3V4h3v1zM0 4v2h5V3H1c-.55 0-1 .45-1 1zm0 9c0 .55.45 1 1 1h4v-3H0v2zm6-7h4V3H6v3zm0 8h4v-3H6v3zm1-2h2v1H7v-1zm4 2h4c.55 0 1-.45 1-1v-2h-5v3zm0-4h5V7h-5v3zm-5 0h4V7H6v3z',
        ],
        heatmap: [
          'M2 11c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm11-7c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm3 4.5A2.5 2.5 0 0 0 13.5 6c-.98 0-1.82.57-2.23 1.39-.6-.78-1.51-1.3-2.56-1.36.18-.49.29-.99.29-1.53C9 2.01 6.99 0 4.5 0S0 2.01 0 4.5 2.01 9 4.5 9c.19 0 .37-.03.56-.06-.03.19-.06.37-.06.56C5 11.43 6.57 13 8.5 13c1.63 0 2.98-1.11 3.37-2.62.44.38 1 .62 1.63.62A2.5 2.5 0 0 0 16 8.5zM14.5 13c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z',
        ],
        help: [
          'M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm1 13H7v-2h2v2zm1.93-6.52c-.14.32-.35.64-.62.97L9.25 8.83c-.12.15-.24.29-.28.42-.04.13-.09.3-.09.52V10H7.12V8.88s.05-.51.21-.71L8.4 6.73c.22-.26.35-.49.44-.68.09-.19.12-.38.12-.58 0-.3-.1-.55-.28-.75-.18-.19-.44-.28-.76-.28-.33 0-.59.1-.78.29-.19.19-.33.46-.4.81-.03.11-.1.15-.2.14l-1.7-.25c-.12-.01-.16-.08-.14-.19.12-.82.46-1.47 1.03-1.94.57-.48 1.32-.72 2.25-.72.47 0 .9.07 1.29.22s.72.34 1 .59c.28.25.49.55.65.89.15.35.22.72.22 1.12s-.07.75-.21 1.08z',
        ],
        'helper-management': [
          'M13 5h-2v2h2V5zm0 6h-2v2h2v-2zm0-3h-2v2h2V8zm2-8H1C.4 0 0 .4 0 1v14c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1zm-1 14H2V2h12v12zm-7-3H5v2h2v-2zm3 0H8v2h2v-2z',
        ],
        highlight: [
          'M9.12 11.07l2-2.02.71.71 4-4.04L10.17 0l-4 4.04.71.71-2 2.02 4.24 4.3zM2 12.97h4c.28 0 .53-.11.71-.3l1-1.01-3.42-3.45-3 3.03c-.18.18-.29.44-.29.72 0 .55.45 1.01 1 1.01zm13 1.01H1c-.55 0-1 .45-1 1.01S.45 16 1 16h14c.55 0 1-.45 1-1.01s-.45-1.01-1-1.01z',
        ],
        history: [
          'M8 3c-.55 0-1 .45-1 1v4c0 .28.11.53.29.71l2 2a1.003 1.003 0 0 0 1.42-1.42L9 7.59V4c0-.55-.45-1-1-1zm0-3a7.95 7.95 0 0 0-6 2.74V1c0-.55-.45-1-1-1S0 .45 0 1v4c0 .55.45 1 1 1h4c.55 0 1-.45 1-1s-.45-1-1-1H3.54C4.64 2.78 6.23 2 8 2c3.31 0 6 2.69 6 6 0 2.61-1.67 4.81-4 5.63v-.01c-.63.23-1.29.38-2 .38-3.31 0-6-2.69-6-6 0-.55-.45-1-1-1s-1 .45-1 1c0 4.42 3.58 8 8 8 .34 0 .67-.03 1-.07.02 0 .04-.01.06-.01C12.98 15.4 16 12.06 16 8c0-4.42-3.58-8-8-8z',
        ],
        home: [
          'M2 10v5c0 .55.45 1 1 1h3v-5h4v5h3c.55 0 1-.45 1-1v-5L8 4l-6 6zm13.71-2.71L14 5.59V2c0-.55-.45-1-1-1s-1 .45-1 1v1.59L8.71.29C8.53.11 8.28 0 8 0s-.53.11-.71.29l-7 7a1.003 1.003 0 0 0 1.42 1.42L8 2.41l6.29 6.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71z',
        ],
        'horizontal-bar-chart': [
          'M4 5h7c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1zM1 1c-.55 0-1 .45-1 1v13c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1zm14 6H4c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h11c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1zm-6 5H4c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1z',
        ],
        'horizontal-bar-chart-asc': [
          'M1 3h5c.55 0 1-.45 1-1s-.45-1-1-1H1c-.55 0-1 .45-1 1s.45 1 1 1zm0 4h7c.55 0 1-.45 1-1s-.45-1-1-1H1c-.55 0-1 .45-1 1s.45 1 1 1zm14 6H1c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1zM1 11h10c.55 0 1-.45 1-1s-.45-1-1-1H1c-.55 0-1 .45-1 1s.45 1 1 1z',
        ],
        'horizontal-bar-chart-desc': [
          'M15 1H1c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1zM8 9H1c-.55 0-1 .45-1 1s.45 1 1 1h7c.55 0 1-.45 1-1s-.45-1-1-1zm-2 4H1c-.55 0-1 .45-1 1s.45 1 1 1h5c.55 0 1-.45 1-1s-.45-1-1-1zm5-8H1c-.55 0-1 .45-1 1s.45 1 1 1h10c.55 0 1-.45 1-1s-.45-1-1-1z',
        ],
        'horizontal-distribution': [
          'M2 0c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1s1-.45 1-1V1c0-.55-.45-1-1-1zm13 0c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1s1-.45 1-1V1c0-.55-.45-1-1-1zm-5 2H7c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1z',
        ],
        'id-number': [
          'M2 5v7h12V5H2zm0-2h12c1.1 0 2 .9 2 2v7c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2z',
          'M7.9 10.48c-.14-.33-.84-.55-1.3-.75-.46-.2-.4-.33-.42-.5v-.07c.16-.14.29-.33.37-.56 0 0 0-.01.01-.02.02-.05.03-.1.05-.15.1-.01.16-.13.19-.23.03-.04.07-.15.06-.27-.02-.16-.08-.24-.15-.26v-.03c0-.2-.02-.48-.05-.67-.01-.05-.02-.1-.03-.16-.07-.23-.21-.44-.4-.58-.2-.15-.48-.23-.73-.23s-.53.08-.72.23c-.19.14-.33.35-.4.58-.02.05-.03.1-.03.16-.05.18-.06.47-.06.67v.03c-.07.03-.14.1-.15.26-.02.12.03.22.06.27.02.1.09.22.2.24.01.05.03.1.05.15v.01c.08.23.22.42.38.56v.07c-.02.17.03.29-.43.5-.46.2-1.16.42-1.3.75s-.09.52-.09.52H8c-.01 0 .05-.19-.1-.52zM10 6h2c.55 0 1 .45 1 1s-.45 1-1 1h-2c-.55 0-1-.45-1-1s.45-1 1-1zM10 9h2c.55 0 1 .45 1 1s-.45 1-1 1h-2c-.55 0-1-.45-1-1s.45-1 1-1z',
        ],
        'image-rotate-left': [
          'M13 2h-1.59l.29-.29c.19-.18.3-.43.3-.71a1.003 1.003 0 0 0-1.71-.71l-2 2C8.11 2.47 8 2.72 8 3c0 .28.11.53.29.71l2 2a1.003 1.003 0 0 0 1.42-1.42l-.3-.29H13c.55 0 1 .45 1 1v3c0 .55.45 1 1 1s1-.45 1-1V5c0-1.66-1.34-3-3-3zm-5.5 9c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zM10 7H1c-.55 0-1 .45-1 1v7c0 .55.45 1 1 1h9c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1zm-1 6.33L7 12l-1 1-2-3-2 2.67V9h7v4.33z',
        ],
        'image-rotate-right': [
          'M5.71 5.71l2-2C7.89 3.53 8 3.28 8 3c0-.28-.11-.53-.29-.71l-2-2a1.003 1.003 0 0 0-1.42 1.42l.3.29H3C1.34 2 0 3.34 0 5v3c0 .55.45 1 1 1s1-.45 1-1V5c0-.55.45-1 1-1h1.59l-.3.29a1.003 1.003 0 0 0 1.42 1.42zM12.5 11c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zM15 7H6c-.55 0-1 .45-1 1v7c0 .55.45 1 1 1h9c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1zm-1 6.33L12 12l-1 1-2-3-2 2.67V9h7v4.33z',
        ],
        import: [
          'M7.29 11.71c.18.18.43.29.71.29s.53-.11.71-.29l4-4a1.003 1.003 0 0 0-1.42-1.42L9 8.59V1c0-.55-.45-1-1-1S7 .45 7 1v7.59l-2.29-2.3a1.003 1.003 0 0 0-1.42 1.42l4 4zM15 11c-.55 0-1 .45-1 1v2H2v-2c0-.55-.45-1-1-1s-1 .45-1 1v3c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1z',
        ],
        inbox: [
          'M13.91 2.6c-.16-.36-.51-.61-.92-.61h-10c-.41 0-.77.25-.92.61L-.01 7.45v5.54c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V7.45L13.91 2.6zm-1.92 5.39c-.55 0-1 .45-1 1v1h-6v-1c0-.55-.45-1-1-1H1.94l1.71-4h8.68l1.71 4h-2.05z',
        ],
        'info-sign': [
          'M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zM7 3h2v2H7V3zm3 10H6v-1h1V7H6V6h3v6h1v1z',
        ],
        'inner-join': [
          'M6.6 3.3C5.3 4.4 4.5 6.1 4.5 8s.8 3.6 2.1 4.7c-.5.2-1 .3-1.6.3-2.8 0-5-2.2-5-5s2.2-5 5-5c.6 0 1.1.1 1.6.3zm-1.96 8.68C3.92 10.83 3.5 9.46 3.5 8s.42-2.83 1.14-3.98C2.6 4.2 1 5.91 1 8s1.6 3.8 3.64 3.98zM8 4c-1.2.9-2 2.4-2 4s.8 3.1 2 4c1.2-.9 2-2.3 2-4s-.8-3.1-2-4zm3-1c2.8 0 5 2.2 5 5s-2.2 5-5 5c-.6 0-1.1-.1-1.6-.3 1.3-1.1 2.1-2.9 2.1-4.7s-.8-3.5-2.1-4.7c.5-.2 1-.3 1.6-.3zm.35 1.02c.73 1.15 1.14 2.52 1.14 3.98s-.42 2.83-1.14 3.98c2.04-.18 3.64-1.9 3.64-3.98s-1.6-3.8-3.64-3.98z',
        ],
        insert: [
          'M5 9h2v2c0 .6.4 1 1 1s1-.4 1-1V9h2c.6 0 1-.4 1-1s-.4-1-1-1H9V5c0-.6-.4-1-1-1s-1 .4-1 1v2H5c-.6 0-1 .4-1 1s.4 1 1 1zm10-9H1C.4 0 0 .4 0 1v14c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1zm-1 14H2V2h12v12z',
        ],
        intersection: [
          'M10 3c-.92 0-1.76.26-2.5.69C6.76 3.26 5.92 3 5 3 2.24 3 0 5.24 0 8s2.24 5 5 5c.92 0 1.76-.26 2.5-.69.74.43 1.58.69 2.5.69 2.76 0 5-2.24 5-5s-2.24-5-5-5zm-4.1 7.85c-.29.09-.59.15-.9.15-1.66 0-3-1.34-3-3s1.34-3 3-3c.31 0 .61.06.9.15C5.33 5.96 5 6.94 5 8s.33 2.04.9 2.85zM10 11c-.31 0-.61-.06-.9-.15.57-.81.9-1.79.9-2.85s-.33-2.04-.9-2.85c.29-.09.59-.15.9-.15 1.66 0 3 1.34 3 3s-1.34 3-3 3z',
        ],
        'ip-address': [
          'M5 2.66C5 4.14 8 8 8 8s3-3.86 3-5.34C10.99 1.2 9.66 0 8 0S5 1.2 5 2.66zM7 3c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1zM10.5 10H8v5h1v-4h1v1H9v1h2v-3h-.5zM2 9h12c.55 0 1 .45 1 1v5c0 .55-.45 1-1 1H2c-.55 0-1-.45-1-1v-5c0-.55.45-1 1-1zm4 1v5h1v-5H6z',
        ],
        issue: [
          'M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm0-2A6 6 0 1 0 8 2a6 6 0 0 0 0 12zm1-2H7v-2h2v2zm0-3H7V4h2v5z',
        ],
        'issue-closed': [
          'M9.296.104a2.99 2.99 0 0 0-1.003.664 2.987 2.987 0 0 0-.75 1.25 6 6 0 1 0 6.28 4.527c.043-.039.085-.079.127-.12l1.456-1.456A8 8 0 1 1 9.296.105zm2.532 5.2a.997.997 0 0 1-.707-.294L9.707 3.596a1 1 0 0 1 1.414-1.414l.707.707 1.768-1.768a1 1 0 1 1 1.414 1.415L12.536 5.01a.997.997 0 0 1-.708.293zM9 12H7v-2h2v2zm0-3H7V4h2v5z',
        ],
        'issue-new': [
          'M10.568.421c-.01.04-.018.08-.026.121-.837.156-1.53.73-1.85 1.497a6 6 0 1 0 5.27 5.273 2.51 2.51 0 0 0 1.496-1.854c.04-.008.081-.016.121-.026A8 8 0 1 1 10.568.421zM9 12H7v-2h2v2zm0-3H7V4h2v5zm1-6c0-.55.45-1 1-1h1V1c0-.55.45-1 1-1s1 .45 1 1v1h1c.55 0 1 .45 1 1s-.45 1-1 1h-1v1.005c0 .55-.45 1-1 1s-1-.45-1-1V4h-1c-.55 0-1-.45-1-1z',
        ],
        italic: [
          'M9.8 4H11c.5 0 1-.4 1-1s-.4-1-1-1H7c-.5 0-1 .4-1 1s.4 1 1 1h.8l-1.6 8H5c-.5 0-1 .4-1 1s.4 1 1 1h4c.5 0 1-.4 1-1s-.4-1-1-1h-.8l1.6-8z',
        ],
        'join-table': [
          'M15 5h-3V2c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h3v3c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm-5-1v2H6V4h4zm0 6H6V7h4v3zM2 4h3v2H2V4zm0 5V7h3v2H2zm4 4v-2h4v2H6zm8 0h-3v-2h3v2zm0-3h-3V8h3v2z',
        ],
        key: [
          'M11 0C8.24 0 6 2.24 6 5c0 1.02.31 1.96.83 2.75L.29 14.29a1.003 1.003 0 0 0 1.42 1.42L3 14.41l1.29 1.29c.18.19.43.3.71.3s.53-.11.71-.29l2-2c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71L6.41 11l1.83-1.83c.8.52 1.74.83 2.76.83 2.76 0 5-2.24 5-5s-2.24-5-5-5zm0 8c-.23 0-.45-.03-.66-.08-.01 0-.02-.01-.03-.01-.21-.05-.41-.12-.6-.21a3.014 3.014 0 0 1-1.62-2c0-.01-.01-.02-.01-.03C8.03 5.45 8 5.23 8 5c0-1.66 1.34-3 3-3s3 1.34 3 3-1.34 3-3 3z',
        ],
        'key-backspace': [
          'M15 2H6c-.28 0-.53.11-.71.29l-5 5C.11 7.47 0 7.72 0 8c0 .28.11.53.29.71l5 5c.18.18.43.29.71.29h9c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-2.29 7.29a1.003 1.003 0 0 1-1.42 1.42L10 9.41 8.71 10.7c-.18.19-.43.3-.71.3a1.003 1.003 0 0 1-.71-1.71L8.59 8l-1.3-1.29a1.003 1.003 0 0 1 1.42-1.42L10 6.59l1.29-1.29c.18-.19.43-.3.71-.3a1.003 1.003 0 0 1 .71 1.71L11.41 8l1.3 1.29z',
        ],
        'key-command': [
          'M12 9h-1V7h1c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3v1H7V4c0-1.66-1.34-3-3-3S1 2.34 1 4s1.34 3 3 3h1v2H4c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3v-1h2v1c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3zm0-6c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM4 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm0-8c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm5 4H7V7h2v2zm3 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z',
        ],
        'key-control': [
          'M12.71 5.29l-4-4C8.53 1.11 8.28 1 8 1s-.53.11-.71.29l-4 4a1.003 1.003 0 0 0 1.42 1.42L8 3.41l3.29 3.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71z',
        ],
        'key-delete': [
          'M15.71 7.29l-5-5A.997.997 0 0 0 10 2H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h9c.28 0 .53-.11.71-.29l5-5c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71zm-7 2a1.003 1.003 0 0 1-1.42 1.42L6 9.41 4.71 10.7c-.18.19-.43.3-.71.3a1.003 1.003 0 0 1-.71-1.71L4.59 8l-1.3-1.29a1.003 1.003 0 0 1 1.42-1.42L6 6.59 7.29 5.3c.18-.19.43-.3.71-.3a1.003 1.003 0 0 1 .71 1.71L7.41 8l1.3 1.29z',
        ],
        'key-enter': [
          'M14 2c-.55 0-1 .45-1 1v3c0 1.66-1.34 3-3 3H4.41L5.7 7.71c.19-.18.3-.43.3-.71a1.003 1.003 0 0 0-1.71-.71l-3 3c-.18.18-.29.43-.29.71 0 .28.11.53.29.71l3 3a1.003 1.003 0 0 0 1.42-1.42L4.41 11H10c2.76 0 5-2.24 5-5V3c0-.55-.45-1-1-1z',
        ],
        'key-escape': [
          'M2 7c.55 0 1-.45 1-1V4.41L7.29 8.7c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71L4.41 3H6c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm7-5.9v2A5 5 0 1 1 3.1 9h-2c.49 3.39 3.38 6 6.9 6 3.87 0 7-3.13 7-7 0-3.52-2.61-6.41-6-6.9z',
        ],
        'key-option': [
          'M11 4h4c.55 0 1-.45 1-1s-.45-1-1-1h-4c-.55 0-1 .45-1 1s.45 1 1 1zm4 8h-3.43L5.86 2.49h-.02A.975.975 0 0 0 5 2H1c-.55 0-1 .45-1 1s.45 1 1 1h3.43l5.71 9.51.01-.01c.18.3.49.5.85.5h4c.55 0 1-.45 1-1s-.45-1-1-1z',
        ],
        'key-shift': [
          'M13.71 7.29l-5-5C8.53 2.11 8.28 2 8 2s-.53.11-.71.29l-5 5A1.003 1.003 0 0 0 3 9h2v4c0 .55.45 1 1 1h4c.55 0 1-.45 1-1V9h2a1.003 1.003 0 0 0 .71-1.71z',
        ],
        'key-tab': [
          'M15 10H4.41L5.7 8.71c.19-.18.3-.43.3-.71a1.003 1.003 0 0 0-1.71-.71L2 9.59V8c0-.55-.45-1-1-1s-1 .45-1 1v6c0 .55.45 1 1 1s1-.45 1-1v-1.59l2.29 2.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71L4.41 12H15c.55 0 1-.45 1-1s-.45-1-1-1zm0-9c-.55 0-1 .45-1 1v1.59L11.71 1.3A.965.965 0 0 0 11 1a1.003 1.003 0 0 0-.71 1.71L11.59 4H1c-.55 0-1 .45-1 1s.45 1 1 1h10.59L10.3 7.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71L14 6.41V8c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1z',
        ],
        'known-vehicle': [
          'M15 3a.997.997 0 0 0-.707.293L12 5.586l-1.293-1.293a1 1 0 1 0-1.414 1.414l2 2a.997.997 0 0 0 1.414 0l3-3A1 1 0 0 0 15 3zm-.879 6.121l-.007-.007c-.313.309-.69.552-1.114.702V10h-.998H12h-1v-.184c-.424-.15-.8-.395-1.112-.704l-.01.01-2-2 .012-.012A2.978 2.978 0 0 1 7.184 6H3c-.176 0-.06-.824 0-1l.73-1.63C3.79 3.192 3.823 3 4 3H7.78C8.328 2.39 9.115 2 10 2c.768 0 1.461.293 1.987.77l.844-.844c-.238-.244-.524-.442-.794-.524C12.037 1.402 10.72 1 8 1c-2.72 0-4.037.402-4.037.402-.508.155-1.078.711-1.268 1.237l-.763 2.117H.88c-.484 0-.88.423-.88.939s.396.939.88.939h.375L1 7c-.034.685 0 1.436 0 2v5c0 .657.384 1 1 1s1-.343 1-1v-1h10v1c0 .657.384 1 1 1s1-.343 1-1V9l-.003-.754-.876.875zM5.001 10H3V8h2v2z',
        ],
        label: [
          'M11 2H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V7l-5-5zm3 10H2V4h8v2H3v1h7v1h4v4zm-3-5V4l3 3h-3zm-8 3h10V9H3v1z',
        ],
        layer: [
          'M16 8c0-.37-.21-.68-.51-.85l.01-.01-7-4-.01.01C8.34 3.06 8.18 3 8 3s-.34.06-.49.15l-.01-.02-7 4 .01.01C.21 7.32 0 7.63 0 8s.21.68.51.85l-.01.01 7 4 .01-.01c.15.09.31.15.49.15s.34-.06.49-.15l.01.01 7-4-.01-.01c.3-.17.51-.48.51-.85z',
        ],
        layers: [
          'M.55 4.89l7 3.5c.14.07.29.11.45.11s.31-.04.45-.11l7-3.5a.998.998 0 0 0-.06-1.81L8.4.08a1.006 1.006 0 0 0-.79 0l-6.99 3a.992.992 0 0 0-.07 1.81zM15 10c-.16 0-.31.04-.45.11L8 13.38 1.45 10.1c-.14-.06-.29-.1-.45-.1-.55 0-1 .45-1 1 0 .39.23.73.55.89l7 3.5c.14.07.29.11.45.11s.31-.04.45-.11l7-3.5c.32-.16.55-.5.55-.89 0-.55-.45-1-1-1zm0-3.5c-.16 0-.31.04-.45.11L8 9.88 1.45 6.61A.997.997 0 0 0 1 6.5c-.55 0-1 .45-1 1 0 .39.23.73.55.89l7 3.5c.14.07.29.11.45.11s.31-.04.45-.11l7-3.5c.32-.16.55-.5.55-.89 0-.55-.45-1-1-1z',
        ],
        layout: [
          'M14 4c-1.1 0-2 .9-2 2 0 .47.17.9.44 1.24l-.68.91A1.996 1.996 0 0 0 9.07 9.5H7.93C7.71 8.64 6.93 8 6 8c-.47 0-.9.17-1.24.44l-.91-.68c.1-.23.15-.49.15-.76 0-.37-.11-.71-.28-1.01l2.27-2.27c.3.17.64.28 1.01.28 1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2c0 .37.11.71.28 1.01L3.01 5.28C2.71 5.11 2.37 5 2 5 .9 5 0 5.9 0 7s.9 2 2 2c.47 0 .9-.17 1.24-.44l.91.68c-.1.23-.15.49-.15.76 0 .37.11.71.28 1.01l-1.27 1.27C2.71 12.11 2.37 12 2 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2c0-.37-.11-.71-.28-1.01l1.27-1.27c.3.17.64.28 1.01.28.93 0 1.71-.64 1.93-1.5h1.14c.22.86 1 1.5 1.93 1.5 1.1 0 2-.9 2-2 0-.47-.17-.9-.44-1.24l.68-.91c.23.1.49.15.76.15 1.1 0 2-.9 2-2s-.9-2-2-2z',
        ],
        'layout-auto': [
          'M14 9.5c-.56 0-1.06.23-1.42.59L8.99 8l3.59-2.09A2.002 2.002 0 0 0 16 4.5c0-1.1-.9-2-2-2s-2 .9-2 2c0 .19.03.37.08.54L8.5 7.13v-3.2c.86-.22 1.5-1 1.5-1.93 0-1.1-.9-2-2-2S6 .9 6 2c0 .93.64 1.71 1.5 1.93v3.2L3.92 5.04c.05-.17.08-.35.08-.54 0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2c.56 0 1.06-.23 1.42-.59L7.01 8l-3.59 2.09A2.002 2.002 0 0 0 0 11.5c0 1.1.9 2 2 2s2-.9 2-2c0-.19-.03-.37-.08-.54L7.5 8.87v3.2c-.86.22-1.5 1-1.5 1.93 0 1.1.9 2 2 2s2-.9 2-2c0-.93-.64-1.71-1.5-1.93v-3.2l3.58 2.09c-.05.17-.08.35-.08.54 0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2z',
        ],
        'layout-balloon': [
          'M14 11c-.2 0-.38.04-.56.09L12.42 9.4c.36-.36.58-.85.58-1.4 0-.55-.22-1.04-.58-1.4l1.01-1.69c.19.05.37.09.57.09 1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2c0 .55.22 1.04.58 1.4l-1.01 1.69C11.38 6.04 11.2 6 11 6c-.93 0-1.71.64-1.93 1.5H6.93C6.71 6.64 5.93 6 5 6c-.2 0-.38.04-.56.09L3.42 4.4C3.78 4.04 4 3.55 4 3c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2c.2 0 .38-.04.56-.09L3.58 6.6C3.22 6.96 3 7.45 3 8c0 .55.22 1.04.58 1.4l-1.01 1.69C2.38 11.04 2.2 11 2 11c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2c0-.55-.22-1.04-.58-1.4l1.01-1.69c.19.05.37.09.57.09.93 0 1.71-.64 1.93-1.5h2.14c.22.86 1 1.5 1.93 1.5.2 0 .38-.04.56-.09l1.01 1.69c-.35.36-.57.85-.57 1.4 0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2z',
        ],
        'layout-circle': [
          'M14.16 6.02c-.12-.36-.26-.7-.43-1.03.17-.29.27-.63.27-.99 0-1.1-.9-2-2-2-.36 0-.7.1-.99.27-.33-.17-.67-.31-1.03-.43A1.987 1.987 0 0 0 8 0C6.95 0 6.1.81 6.02 1.84c-.36.12-.7.26-1.03.43C4.7 2.1 4.36 2 4 2c-1.1 0-2 .9-2 2 0 .36.1.7.27.99-.17.33-.31.67-.43 1.03C.81 6.1 0 6.95 0 8c0 1.05.81 1.9 1.84 1.98.12.36.26.7.43 1.03-.17.29-.27.63-.27.99 0 1.1.9 2 2 2 .36 0 .7-.1.99-.27.33.17.67.32 1.03.43C6.1 15.19 6.95 16 8 16c1.05 0 1.9-.81 1.98-1.84.36-.12.7-.26 1.03-.43.29.17.63.27.99.27 1.1 0 2-.9 2-2 0-.36-.1-.7-.27-.99.17-.33.31-.67.43-1.03C15.19 9.9 16 9.05 16 8c0-1.05-.81-1.9-1.84-1.98zm-.99 3.79c-.05.16-.11.31-.17.46-.3-.17-.64-.27-1-.27-1.1 0-2 .9-2 2 0 .36.1.7.27 1-.15.07-.3.12-.46.17C9.5 12.48 8.81 12 8 12s-1.5.48-1.81 1.17c-.16-.06-.32-.11-.46-.17.17-.3.27-.64.27-1 0-1.1-.9-2-2-2-.36 0-.7.1-1 .27-.07-.15-.12-.3-.17-.46C3.52 9.5 4 8.81 4 8s-.48-1.5-1.17-1.81c.06-.16.11-.32.17-.46.3.17.64.27 1 .27 1.1 0 2-.9 2-2 0-.36-.1-.7-.27-1 .15-.07.3-.12.46-.17C6.5 3.52 7.19 4 8 4s1.5-.48 1.81-1.17c.16.06.32.11.46.17-.17.3-.27.64-.27 1 0 1.1.9 2 2 2 .36 0 .7-.1 1-.27.07.15.12.3.17.46C12.48 6.5 12 7.19 12 8s.48 1.5 1.17 1.81z',
        ],
        'layout-grid': [
          'M2 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6C.9 6 0 6.9 0 8s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6C.9 0 0 .9 0 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM8 0C6.9 0 6 .9 6 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM8 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z',
        ],
        'layout-group-by': [
          'M2 6C.9 6 0 6.9 0 8s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 5c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12-7c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM2 1C.9 1 0 1.9 0 3s.9 2 2 2 2-.9 2-2-.9-2-2-2zm7 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm5 3c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z',
        ],
        'layout-hierarchy': [
          'M14.5 12.07V9.93c.86-.22 1.5-1 1.5-1.93 0-1.1-.9-2-2-2-.93 0-1.71.64-1.93 1.5H9.93c-.18-.7-.73-1.25-1.43-1.43V3.93c.86-.22 1.5-1 1.5-1.93 0-1.1-.9-2-2-2S6 .9 6 2c0 .93.64 1.71 1.5 1.93v2.14c-.7.18-1.25.73-1.43 1.43H3.93C3.71 6.64 2.93 6 2 6 .9 6 0 6.9 0 8c0 .93.64 1.71 1.5 1.93v2.14c-.86.22-1.5 1-1.5 1.93 0 1.1.9 2 2 2s2-.9 2-2c0-.93-.64-1.71-1.5-1.93V9.93c.7-.18 1.25-.73 1.43-1.43h2.14c.18.7.73 1.25 1.43 1.43v2.14c-.86.22-1.5 1-1.5 1.93 0 1.1.9 2 2 2s2-.9 2-2c0-.93-.64-1.71-1.5-1.93V9.93c.7-.18 1.25-.73 1.43-1.43h2.14c.18.7.73 1.25 1.43 1.43v2.14c-.86.22-1.5 1-1.5 1.93 0 1.1.9 2 2 2s2-.9 2-2c0-.93-.64-1.71-1.5-1.93z',
        ],
        'layout-linear': [
          'M14 6c-.93 0-1.71.64-1.93 1.5H9.93C9.71 6.64 8.93 6 8 6s-1.71.64-1.93 1.5H3.93C3.71 6.64 2.93 6 2 6 .9 6 0 6.9 0 8s.9 2 2 2c.93 0 1.71-.64 1.93-1.5h2.13C6.29 9.36 7.07 10 8 10s1.71-.64 1.93-1.5h2.13c.22.86 1 1.5 1.93 1.5 1.1 0 2-.9 2-2C16 6.9 15.1 6 14 6z',
        ],
        'layout-skew-grid': [
          'M2 6C.9 6 0 6.9 0 8s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12-2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM2 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM2 0C.9 0 0 .9 0 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 9c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6-3c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM8 3c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 9c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z',
        ],
        'layout-sorted-clusters': [
          'M2 6C.9 6 0 6.9 0 8s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM2 0C.9 0 0 .9 0 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM8 9c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z',
        ],
        'left-join': [
          'M6.6 3.3C6.1 3.1 5.6 3 5 3 2.2 3 0 5.2 0 8s2.2 5 5 5c.6 0 1.1-.1 1.6-.3C5.3 11.6 4.5 9.9 4.5 8s.8-3.6 2.1-4.7zM8 4c-1.2.9-2 2.4-2 4s.8 3.1 2 4c1.2-.9 2-2.3 2-4s-.8-3.1-2-4zm3-1c2.8 0 5 2.2 5 5s-2.2 5-5 5c-.6 0-1.1-.1-1.6-.3 1.3-1.1 2.1-2.9 2.1-4.7s-.8-3.5-2.1-4.7c.5-.2 1-.3 1.6-.3zm.35 1.02c.73 1.15 1.14 2.52 1.14 3.98s-.42 2.83-1.14 3.98c2.04-.18 3.64-1.9 3.64-3.98s-1.6-3.8-3.64-3.98z',
        ],
        lightbulb: [
          'M9.01 14h-2c-.55 0-1 .45-1 1s.45 1 1 1h2c.55 0 1-.45 1-1s-.44-1-1-1zm1-3h-4c-.55 0-1 .45-1 1s.45 1 1 1h4c.55 0 1-.45 1-1s-.44-1-1-1zm-2-11C5.26 0 3.03 1.95 3.03 4.35c0 2.37 1.63 2.64 1.94 5.22 0 .24.22.44.5.44h5.09c.28 0 .5-.19.5-.44C11.37 6.99 13 6.72 13 4.35 13 1.95 10.77 0 8.01 0z',
        ],
        link: [
          'M4.99 11.99c.28 0 .53-.11.71-.29l6-6a1.003 1.003 0 0 0-1.42-1.42l-6 6a1.003 1.003 0 0 0 .71 1.71zm3.85-2.02L6.4 12.41l-1 1-.01-.01c-.36.36-.85.6-1.4.6-1.1 0-2-.9-2-2 0-.55.24-1.04.6-1.4l-.01-.01 1-1 2.44-2.44c-.33-.1-.67-.16-1.03-.16-1.1 0-2.09.46-2.81 1.19l-.02-.02-1 1 .02.02c-.73.72-1.19 1.71-1.19 2.81 0 2.21 1.79 4 4 4 1.1 0 2.09-.46 2.81-1.19l.02.02 1-1-.02-.02c.73-.72 1.19-1.71 1.19-2.81 0-.35-.06-.69-.15-1.02zm7.15-5.98c0-2.21-1.79-4-4-4-1.1 0-2.09.46-2.81 1.19l-.02-.02-1 1 .02.02c-.72.72-1.19 1.71-1.19 2.81 0 .36.06.69.15 1.02l2.44-2.44 1-1 .01.01c.36-.36.85-.6 1.4-.6 1.1 0 2 .9 2 2 0 .55-.24 1.04-.6 1.4l.01.01-1 1-2.43 2.45c.33.09.67.15 1.02.15 1.1 0 2.09-.46 2.81-1.19l.02.02 1-1-.02-.02a3.92 3.92 0 0 0 1.19-2.81z',
        ],
        list: [
          'M1 3h14c.55 0 1-.45 1-1s-.45-1-1-1H1c-.55 0-1 .45-1 1s.45 1 1 1zm14 10H1c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1zm0-4H1c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1zm0-4H1c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1z',
        ],
        'list-detail-view': [
          'M6 9H1c-.55 0-1 .45-1 1s.45 1 1 1h5c.55 0 1-.45 1-1s-.45-1-1-1zm0 4H1c-.55 0-1 .45-1 1s.45 1 1 1h5c.55 0 1-.45 1-1s-.45-1-1-1zm9-12h-5c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h5c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zM6 5H1c-.55 0-1 .45-1 1s.45 1 1 1h5c.55 0 1-.45 1-1s-.45-1-1-1zm0-4H1c-.55 0-1 .45-1 1s.45 1 1 1h5c.55 0 1-.45 1-1s-.45-1-1-1z',
        ],
        locate: [
          'M15 7h-.09A6.98 6.98 0 0 0 9 1.1V1c0-.55-.45-1-1-1S7 .45 7 1v.09A6.98 6.98 0 0 0 1.1 7H1c-.55 0-1 .45-1 1s.45 1 1 1h.1A6.969 6.969 0 0 0 7 14.91V15c0 .55.45 1 1 1s1-.45 1-1v-.09A6.98 6.98 0 0 0 14.9 9h.1c.55 0 1-.45 1-1s-.45-1-1-1zm-6.02 5.9c-.05-.5-.46-.9-.98-.9s-.93.4-.98.9A5.017 5.017 0 0 1 3.1 8.98c.5-.05.9-.46.9-.98s-.4-.93-.9-.98A5.017 5.017 0 0 1 7.02 3.1c.05.5.46.9.98.9s.93-.4.98-.9c1.97.39 3.52 1.95 3.92 3.92-.5.05-.9.46-.9.98s.4.93.9.98a5.017 5.017 0 0 1-3.92 3.92zM8 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z',
        ],
        lock: [
          'M13.96 7H12V3.95C12 1.77 10.21 0 8 0S4 1.77 4 3.95V7H1.96c-.55 0-.96.35-.96.9v6.91c0 .54.41 1.19.96 1.19h12c.55 0 1.04-.65 1.04-1.19V7.9c0-.55-.49-.9-1.04-.9zM6 7V3.95c0-1.09.9-1.97 2-1.97s2 .88 2 1.97V7H6z',
        ],
        'log-in': [
          'M11 8c0-.28-.11-.53-.29-.71l-3-3a1.003 1.003 0 0 0-1.42 1.42L7.59 7H1c-.55 0-1 .45-1 1s.45 1 1 1h6.59L6.3 10.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71l3-3c.18-.18.29-.43.29-.71zm4-8H9c-.55 0-1 .45-1 1s.45 1 1 1h5v12H9c-.55 0-1 .45-1 1s.45 1 1 1h6c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1z',
        ],
        'log-out': [
          'M7 14H2V2h5c.55 0 1-.45 1-1s-.45-1-1-1H1C.45 0 0 .45 0 1v14c0 .55.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1zm8.71-6.71l-3-3a1.003 1.003 0 0 0-1.42 1.42L12.59 7H6c-.55 0-1 .45-1 1s.45 1 1 1h6.59l-1.29 1.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71l3-3c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71z',
        ],
        manual: [
          'M15.99 1.13c-.02-.41-.33-.77-.78-.87C12.26-.36 9.84.13 8 1.7 6.16.13 3.74-.36.78.26.33.35.03.72.01 1.13H0v12c0 .08 0 .17.02.26.12.51.65.82 1.19.71 2.63-.55 4.59-.04 6.01 1.57.02.03.06.04.08.06.02.02.03.04.05.06.04.03.09.04.13.07.05.03.09.05.14.07.11.04.23.07.35.07h.04c.12 0 .24-.03.35-.07.05-.02.09-.05.14-.07.04-.02.09-.04.13-.07.02-.02.03-.04.05-.06.03-.02.06-.03.08-.06 1.42-1.6 3.39-2.12 6.01-1.57.54.11 1.07-.21 1.19-.71.04-.09.04-.18.04-.26l-.01-12zM7 12.99c-1.4-.83-3.07-1.14-5-.93V1.96c2.11-.28 3.75.2 5 1.46v9.57zm7-.92c-1.93-.21-3.6.1-5 .93V3.42c1.25-1.26 2.89-1.74 5-1.46v10.11z',
        ],
        'manually-entered-data': [
          'M1 8h3.76l2-2H1c-.55 0-1 .45-1 1s.45 1 1 1zm14.49-4.01c.31-.32.51-.76.51-1.24C16 1.78 15.22 1 14.25 1c-.48 0-.92.2-1.24.51l-1.44 1.44 2.47 2.47 1.45-1.43zM1 4h7.76l2-2H1c-.55 0-1 .45-1 1s.45 1 1 1zm0 6c-.55 0-1 .45-1 1 0 .48.35.86.8.96L2.76 10H1zm9.95-6.43l-6.69 6.69 2.47 2.47 6.69-6.69-2.47-2.47zm4.25 2.47L13.24 8H15c.55 0 1-.45 1-1 0-.48-.35-.86-.8-.96zM2 15l3.86-1.39-2.46-2.44L2 15zm13-5h-3.76l-2 2H15c.55 0 1-.45 1-1s-.45-1-1-1z',
        ],
        map: [
          'M15.55 3.17l-4.49-3A.975.975 0 0 0 9.99.15L5.53 2.82 1.56.17A1.003 1.003 0 0 0 0 1v11c0 .35.18.65.45.83l4.49 3a.975.975 0 0 0 1.07.02l4.46-2.67 3.97 2.65A1.003 1.003 0 0 0 16 15V4c0-.35-.18-.65-.45-.83zM5 13.46l-3-2v-8.6l2.94 1.96c.02.02.04.03.06.04v8.6zm5-2.32s-.01 0-.01.01L6 13.53V4.86s.01 0 .01-.01L10 2.47v8.67zm4 1.99l-2.94-1.96c-.02-.01-.04-.02-.05-.03v-8.6l3 2v8.59z',
        ],
        'map-create': [
          'M14 6.82v6.32l-2.94-1.96c-.02-.01-.04-.02-.05-.03V6.22c-.08-.07-.15-.16-.22-.24-.28-.02-.54-.08-.79-.16v5.32s-.01 0-.01.01L6 13.53V4.86s.01 0 .01-.01l2.05-1.23C8.02 3.42 8 3.21 8 3c0-.98.47-1.84 1.2-2.39l-3.67 2.2L1.56.17A1.003 1.003 0 0 0 0 1v11c0 .35.18.65.45.83l4.49 3a.975.975 0 0 0 1.07.02l4.46-2.67 3.97 2.65A1.003 1.003 0 0 0 16 15V5.82c-.25.09-.52.14-.8.16-.33.36-.73.67-1.2.84zm-9 6.64l-3-2v-8.6l2.94 1.96c.02.02.04.03.06.04v8.6zM11 4h1v1c0 .55.45 1 1 1s1-.45 1-1V4h1c.55 0 1-.45 1-1s-.45-1-1-1h-1V1c0-.55-.45-1-1-1s-1 .45-1 1v1h-1c-.55 0-1 .45-1 1s.45 1 1 1z',
        ],
        'map-marker': [
          'M8.46 0C5.42 0 2.95 2.39 2.95 5.33 2.95 8.28 8.46 16 8.46 16s5.51-7.72 5.51-10.67C13.96 2.39 11.5 0 8.46 0zm0 8a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z',
        ],
        maximize: [
          'M5.99 8.99c-.28 0-.53.11-.71.29l-3.29 3.29v-1.59c0-.55-.45-1-1-1s-1 .45-1 1v4c0 .55.45 1 1 1h4c.55 0 1-.45 1-1s-.45-1-1-1H3.41L6.7 10.7a1.003 1.003 0 0 0-.71-1.71zm9-9h-4c-.55 0-1 .45-1 1s.45 1 1 1h1.59l-3.3 3.3a.99.99 0 0 0-.29.7 1.003 1.003 0 0 0 1.71.71l3.29-3.29V5c0 .55.45 1 1 1s1-.45 1-1V1c0-.56-.45-1.01-1-1.01z',
        ],
        media: [
          'M11.99 6.99c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm3-5h-14c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-10c0-.55-.45-1-1-1zm-1 9l-5-3-1 2-3-4-3 5v-7h12v7z',
        ],
        menu: [
          'M1 4h14c.55 0 1-.45 1-1s-.45-1-1-1H1c-.55 0-1 .45-1 1s.45 1 1 1zm14 8H1c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1zm0-5H1c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1z',
        ],
        'menu-closed': [
          'M14.99 6.99h-9c-.55 0-1 .45-1 1s.45 1 1 1h9c.55 0 1-.45 1-1s-.45-1-1-1zm-12-2c-.28 0-.53.11-.71.29l-2 2a1.014 1.014 0 0 0 0 1.42l2 2a1.003 1.003 0 0 0 1.71-.71v-4c0-.55-.45-1-1-1zm3-1h9c.55 0 1-.45 1-1s-.45-1-1-1h-9c-.55 0-1 .45-1 1s.45 1 1 1zm9 8h-9c-.55 0-1 .45-1 1s.45 1 1 1h9c.55 0 1-.45 1-1s-.45-1-1-1z',
        ],
        'menu-open': [
          'M9.99 11.99h-9c-.55 0-1 .45-1 1s.45 1 1 1h9c.55 0 1-.45 1-1s-.45-1-1-1zm0-5h-9c-.55 0-1 .45-1 1s.45 1 1 1h9c.55 0 1-.45 1-1s-.45-1-1-1zm0-5h-9c-.55 0-1 .45-1 1s.45 1 1 1h9c.55 0 1-.45 1-1s-.45-1-1-1zm5.71 5.3l-2-2a1.003 1.003 0 0 0-1.71.71v4a1.003 1.003 0 0 0 1.71.71l2-2c.18-.18.29-.43.29-.71s-.11-.53-.29-.71z',
        ],
        'merge-columns': [
          'M5.71 5.29a1.003 1.003 0 0 0-1.42 1.42l.3.29H2V2h3v1.51c.52.06.99.29 1.34.65l.66.66V1c0-.55-.45-1-1-1H1C.45 0 0 .45 0 1v14c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-3.82l-.66.66c-.35.35-.82.59-1.34.65V14H2V9h2.59l-.3.29a1.003 1.003 0 0 0 1.42 1.42l2-2C7.89 8.53 8 8.28 8 8c0-.28-.11-.53-.29-.71l-2-2zM15 0h-5c-.55 0-1 .45-1 1v3.82l.66-.66c.35-.35.82-.59 1.34-.65V2h3v5h-2.59l.29-.29c.19-.18.3-.43.3-.71a1.003 1.003 0 0 0-1.71-.71l-2 2C8.11 7.47 8 7.72 8 8c0 .28.11.53.29.71l2 2a1.003 1.003 0 0 0 1.42-1.42l-.3-.29H14v5h-3v-1.51c-.52-.06-.99-.29-1.34-.65L9 11.18V15c0 .55.45 1 1 1h5c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1z',
        ],
        'merge-links': [
          'M8 7c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0 4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0-8c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm6 3c-.93 0-1.71.64-1.93 1.5H11V3c0-1.66-1.34-3-3-3S5 1.34 5 3v4.5H3.93C3.71 6.64 2.93 6 2 6 .9 6 0 6.9 0 8s.9 2 2 2c.93 0 1.71-.64 1.93-1.5H5V13c0 1.66 1.34 3 3 3s3-1.34 3-3V8.5h1.07c.22.86 1 1.5 1.93 1.5 1.1 0 2-.9 2-2s-.9-2-2-2zm-4 7c0 1.1-.9 2-2 2s-2-.9-2-2V3c0-1.1.9-2 2-2s2 .9 2 2v10z',
        ],
        minimize: [
          'M15.99.99a1.003 1.003 0 0 0-1.71-.71l-3.29 3.29V1.99c0-.55-.45-1-1-1s-1 .45-1 1v4c0 .55.45 1 1 1h4c.55 0 1-.45 1-1s-.45-1-1-1H12.4l3.3-3.29c.18-.18.29-.43.29-.71zm-10 8h-4c-.55 0-1 .45-1 1s.45 1 1 1h1.59L.29 14.28a1.003 1.003 0 0 0 1.42 1.42L5 12.41V14c0 .55.45 1 1 1s1-.45 1-1v-4a1.02 1.02 0 0 0-1.01-1.01z',
        ],
        minus: ['M13 7H3c-.55 0-1 .45-1 1s.45 1 1 1h10c.55 0 1-.45 1-1s-.45-1-1-1z'],
        'mobile-phone': [
          'M12 0H4c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h8c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zM8 15c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm3-3H5V3h6v9z',
        ],
        'mobile-video': [
          'M15 4c-.28 0-.53.11-.71.29L12 6.59V4c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V9.41l2.29 2.29c.18.19.43.3.71.3.55 0 1-.45 1-1V5c0-.55-.45-1-1-1z',
        ],
        moon: [
          'M15 11.38A7.835 7.835 0 0 1 7.85 16C3.51 16 0 12.49 0 8.15 0 4.97 1.89 2.23 4.62 1c-.45.99-.7 2.08-.7 3.23a7.85 7.85 0 0 0 7.85 7.85c1.15 0 2.24-.25 3.23-.7z',
        ],
        more: [
          'M2 6.03a2 2 0 1 0 0 4 2 2 0 1 0 0-4zM14 6.03a2 2 0 1 0 0 4 2 2 0 1 0 0-4zM8 6.03a2 2 0 1 0 0 4 2 2 0 1 0 0-4z',
        ],
        mountain: [
          'M16 13H3l6-9h1l2 2h1l3 7zm-2.5-3.5l-1-2.5h-1l-2-2-3 4.5L9 8l1 1 1-1 2.5 1.5zM5.94 7l-4.122 6H0l5-6h.94z',
        ],
        move: [
          'M15.71 7.29l-2-2a1.003 1.003 0 0 0-1.42 1.42l.3.29H9V3.41l.29.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71l-2-2C8.53.11 8.28 0 8 0s-.53.11-.71.29l-2 2a1.003 1.003 0 0 0 1.42 1.42l.29-.3V7H3.41l.29-.29c.19-.18.3-.43.3-.71a1.003 1.003 0 0 0-1.71-.71l-2 2C.11 7.47 0 7.72 0 8c0 .28.11.53.29.71l2 2a1.003 1.003 0 0 0 1.42-1.42L3.41 9H7v3.59l-.29-.29A.965.965 0 0 0 6 12a1.003 1.003 0 0 0-.71 1.71l2 2c.18.18.43.29.71.29s.53-.11.71-.29l2-2a1.003 1.003 0 0 0-1.42-1.42l-.29.3V9h3.59l-.29.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71l2-2c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71z',
        ],
        mugshot: [
          'M15 0H1C.45 0 0 .45 0 1v14c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-1 14h-.15c-.03-.09-.04-.16-.08-.25-.34-.79-2.01-1.31-3.12-1.8-1.11-.49-.96-.79-1-1.2-.01-.06-.01-.12-.01-.18.38-.34.69-.8.89-1.33 0 0 .01-.03.01-.04.04-.12.08-.24.11-.36.25-.05.4-.33.46-.59.06-.1.18-.36.15-.65-.04-.37-.19-.55-.35-.62v-.06c0-.48-.04-1.16-.13-1.61-.02-.12-.05-.25-.08-.37-.16-.55-.51-1.05-.96-1.39C9.26 3.19 8.6 3 8 3c-.59 0-1.26.19-1.73.55-.45.35-.8.84-.96 1.39-.04.13-.06.25-.08.38-.09.45-.13 1.13-.13 1.61v.06c-.18.06-.33.24-.37.62-.03.29.09.54.15.65.06.26.21.54.47.59.03.12.07.25.11.36 0 .01.01.02.01.02v.01c.21.54.53 1.01.92 1.35 0 .05-.01.11-.01.16-.04.41.08.7-1.03 1.2-1.11.49-2.77 1.01-3.12 1.8-.04.09-.05.16-.08.25H2V2h12v12z',
        ],
        'multi-select': [
          'M12 3.98H4c-.55 0-1 .45-1 1v1h8v5h1c.55 0 1-.45 1-1v-5c0-.55-.45-1-1-1zm3-3H7c-.55 0-1 .45-1 1v1h8v5h1c.55 0 1-.45 1-1v-5c0-.55-.45-1-1-1zm-6 6H1c-.55 0-1 .45-1 1v5c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-5c0-.55-.45-1-1-1zm-1 5H2v-3h6v3z',
        ],
        music: [
          'M15 0c-.07 0-.13.03-.19.04V.02l-10 2v.02C4.35 2.13 4 2.52 4 3v9.12c-.31-.07-.65-.12-1-.12-1.66 0-3 .9-3 2s1.34 2 3 2 3-.9 3-2V6.32l8-1.6v5.4c-.31-.07-.65-.12-1-.12-1.66 0-3 .9-3 2s1.34 2 3 2 3-.9 3-2V1c0-.55-.45-1-1-1z',
        ],
        'new-grid-item': [
          'M6 0H1C.45 0 0 .45 0 1v5c0 .55.45 1 1 1h5c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm5 14c0-.55-.45-1-1-1s-1 .45-1 1v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1s-.45-1-1-1zM6 9H1c-.55 0-1 .45-1 1v5c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-5c0-.55-.45-1-1-1zm9 4c-.55 0-1 .45-1 1-.55 0-1 .45-1 1s.45 1 1 1h1c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1zm-4-4h-1c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1s1-.45 1-1c.55 0 1-.45 1-1s-.45-1-1-1zm4-9h-5c-.55 0-1 .45-1 1v5c0 .55.45 1 1 1h5c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm0 9h-1c-.55 0-1 .45-1 1s.45 1 1 1c0 .55.45 1 1 1s1-.45 1-1v-1c0-.55-.45-1-1-1z',
        ],
        'new-link': [
          'M15 3h-1V2c0-.55-.45-1-1-1s-1 .45-1 1v1h-1c-.55 0-1 .45-1 1s.45 1 1 1h1v1c0 .55.45 1 1 1s1-.45 1-1V5h1c.55 0 1-.45 1-1s-.45-1-1-1zm-3.5 6a2.5 2.5 0 0 0-2.45 2h-4.1a2.5 2.5 0 1 0 0 1h4.1a2.5 2.5 0 1 0 2.45-3z',
        ],
        'new-object': [
          'M8 4c0 .6.4 1 1 1h2v2c0 .6.4 1 1 1s1-.4 1-1V5h2c.6 0 1-.4 1-1s-.4-1-1-1h-2V1c0-.6-.4-1-1-1s-1 .4-1 1v2H9c-.6 0-1 .5-1 1zm6.5 2.5V7c0 1.4-1.1 2.5-2.5 2.5S9.5 8.4 9.5 7v-.5H9C7.6 6.5 6.5 5.4 6.5 4S7.6 1.5 9 1.5h.5V1c0-.3.1-.6.1-.8C9.1.1 8.6 0 8 0 3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8c0-.6-.1-1.3-.2-1.9-.4.3-.8.4-1.3.4z',
        ],
        'new-person': [
          'M9.12 12.69c-1.17-.53-1.01-.85-1.05-1.29-.01-.06-.01-.12-.01-.19.4-.37.73-.87.94-1.44 0 0 .01-.03.01-.04.05-.14.09-.27.12-.4.27-.06.43-.36.49-.63.06-.11.19-.39.16-.7-.04-.41-.2-.6-.38-.68v-.07c0-.51-.05-1.25-.14-1.74-.02-.13-.05-.27-.09-.4-.17-.6-.53-1.14-1.01-1.52C7.66 3.2 6.96 3 6.33 3c-.62 0-1.33.2-1.82.59-.49.38-.85.92-1.02 1.52-.04.13-.07.26-.09.4-.09.49-.13 1.23-.13 1.74v.06c-.19.08-.35.27-.39.68-.03.31.1.59.16.7.06.28.22.59.5.64.03.14.07.27.11.4 0 .01.01.02.01.02v.01c.22.59.55 1.1.96 1.46 0 .06-.01.12-.01.17-.04.44.08.76-1.09 1.29-1.17.53-2.93 1.1-3.29 1.95-.35.87-.2 1.37-.2 1.37h12.6s.15-.5-.22-1.36c-.36-.85-2.12-1.42-3.29-1.95zM14.89 2h-1V1c0-.55-.45-1-1-1s-1 .45-1 1v1h-1c-.55 0-1 .45-1 1s.45 1 1 1h1v1c0 .55.45 1 1 1s1-.45 1-1V4h1c.55 0 1-.45 1-1s-.45-1-1-1z',
        ],
        'new-prescription': [
          'M9.82 11.66l2.48-2.87c.12-.2.13-.37.04-.53-.11-.19-.3-.26-.52-.26h-1.29c-.27 0-.49.13-.63.34L8.44 9.9 6.95 8a.482.482 0 0 0-.08-.1L5.82 6.55c.57-.24 1.04-.57 1.42-1.01.49-.57.74-1.27.74-2.08 0-.51-.1-.99-.32-1.42-.21-.43-.51-.8-.89-1.11A4.1 4.1 0 0 0 5.42.24C4.91.08 4.34 0 3.72 0H.61C.26 0 0 .23 0 .56v9.89c0 .33.26.55.61.55h.8c.36 0 .61-.23.61-.56V6.99H3.3l3.73 4.74-2.71 3.48c-.12.2-.13.37-.04.53.11.19.3.26.52.26h1.27c.27 0 .51-.12.64-.34l1.69-2.15 1.66 2.14c.12.21.34.35.62.35h1.43c.2 0 .39-.08.5-.25.12-.18.09-.38-.02-.55l-2.77-3.54zM4.18 5H1.99V2.02h2.19c.62 0 1.08.13 1.38.37.29.22.44.62.44 1.08 0 .45-.15.94-.44 1.17-.31.23-.76.36-1.38.36zM15 2h-1V1c0-.55-.45-1-1-1s-1 .45-1 1v1h-1c-.55 0-1 .45-1 1s.45 1 1 1h1v1c0 .55.45 1 1 1s1-.45 1-1V4h1c.55 0 1-.45 1-1s-.45-1-1-1zM9.99 3.01c0 .02.01.04.01.06V2.95c0 .02-.01.04-.01.06z',
        ],
        'new-text-box': [
          'M5 6.5c0 .28.22.5.5.5H7v3.5c0 .28.22.5.5.5s.5-.22.5-.5V7h1.5c.28 0 .5-.22.5-.5S9.78 6 9.5 6h-4c-.28 0-.5.22-.5.5zM15 2h-1V1c0-.55-.45-1-1-1s-1 .45-1 1v1h-1c-.55 0-1 .45-1 1s.45 1 1 1h1v1c0 .55.45 1 1 1s1-.45 1-1V4h1c.55 0 1-.45 1-1s-.45-1-1-1zm-2 5c-.55 0-1 .45-1 1v5H3V4h5c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1h11c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1z',
        ],
        ninja: [
          'M16 5s-2.52 2.11-4.96 1.99C11.03 4.89 10.39.23 5 0c0 0 2.11 2.54 1.96 4.99C4.86 5.01.23 5.65 0 11c0 0 2.56-2.12 5.02-1.95.02 2.11.67 6.72 5.98 6.95 0 0-2.09-2.54-1.94-4.99 2.11-.02 6.71-.68 6.94-6.01zM8 9.5c-.83 0-1.5-.67-1.5-1.5S7.17 6.5 8 6.5s1.5.67 1.5 1.5S8.83 9.5 8 9.5z',
        ],
        notifications: [
          'M8 16c1.1 0 2-.9 2-2H6c0 1.1.9 2 2 2zm6-5c-.55 0-1-.45-1-1V6c0-2.43-1.73-4.45-4.02-4.9 0-.04.02-.06.02-.1 0-.55-.45-1-1-1S7 .45 7 1c0 .04.02.06.02.1A4.992 4.992 0 0 0 3 6v4c0 .55-.45 1-1 1s-1 .45-1 1 .45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1z',
        ],
        'notifications-updated': [
          'M8 16c1.1 0 2-.9 2-2H6c0 1.1.9 2 2 2zm3.399-13.667l-.413.412A2.99 2.99 0 0 0 9 1.99a3 3 0 0 0-3 2.99c0 .8.32 1.558.876 2.114l2.002 1.992A2.99 2.99 0 0 0 13 9.184V10c0 .55.45 1 1 1s1 .45 1 1-.45 1-1 1H2c-.55 0-1-.45-1-1s.45-1 1-1 1-.45 1-1V6c0-2.43 1.73-4.45 4.02-4.9 0-.04-.02-.06-.02-.1 0-.55.45-1 1-1s1 .45 1 1c0 .04-.02.06-.02.1a4.97 4.97 0 0 1 2.419 1.233zM10.29 7.67l-2-1.99a.99.99 0 0 1-.29-.7 1 1 0 0 1 1-.99c.27 0 .52.11.7.29l1.29 1.29 3.28-3.28c.18-.18.42-.29.7-.29.55 0 1 .44 1 .99 0 .28-.11.52-.3.7l-3.98 3.98a.99.99 0 0 1-1.4 0z',
        ],
        'numbered-list': [
          'M2.76 7h1.26V0h-.94c-.04.21-.12.39-.25.54-.13.15-.29.27-.48.36-.18.09-.39.16-.62.2-.23.04-.46.06-.71.06v.9h1.74V7zm-.59 7.17c.18-.12.37-.25.58-.37a10.763 10.763 0 0 0 1.24-.83c.2-.16.37-.33.52-.51.15-.19.28-.39.37-.61.09-.22.14-.47.14-.74 0-.22-.04-.45-.12-.7-.08-.26-.21-.49-.4-.69-.18-.21-.43-.39-.72-.52-.3-.14-.68-.21-1.12-.21-.41 0-.77.07-1.08.2-.32.14-.58.32-.8.56-.22.23-.38.51-.49.84-.11.32-.16.67-.16 1.05h1.19c.01-.24.03-.47.08-.67.05-.21.11-.39.21-.54.09-.15.22-.27.38-.36.16-.09.35-.13.59-.13.26 0 .47.04.63.12.16.08.29.18.38.3.09.12.15.25.18.39s.05.27.05.4c-.01.27-.08.5-.22.71-.14.21-.32.4-.53.57-.22.18-.45.34-.71.49-.26.15-.51.31-.74.47-.5.31-.89.68-1.17 1.11-.3.41-.44.91-.45 1.48h5v-1H1.43c.05-.15.14-.29.27-.43.14-.13.29-.26.47-.38zM15.01 1.99h-7c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h7c.55 0 1-.45 1-1v-1c0-.55-.44-1-1-1zm0 9h-7c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h7c.55 0 1-.45 1-1v-1c0-.55-.44-1-1-1z',
        ],
        numerical: [
          'M2.79 4.61c-.13.17-.29.3-.48.41-.18.11-.39.18-.62.23-.23.04-.46.07-.71.07v1.03h1.74V12h1.26V4h-.94c-.04.23-.12.44-.25.61zm4.37 5.31c.18-.14.37-.28.58-.42l.63-.45c.21-.16.41-.33.61-.51s.37-.38.52-.59c.15-.21.28-.45.37-.7.09-.25.13-.54.13-.85 0-.25-.04-.52-.12-.8-.07-.29-.2-.55-.39-.79a2.18 2.18 0 0 0-.73-.6c-.29-.15-.66-.23-1.11-.23-.41 0-.77.08-1.08.23-.31.16-.58.37-.79.64-.22.27-.38.59-.49.96-.11.37-.16.77-.16 1.2h1.19c.01-.27.03-.53.08-.77.04-.24.11-.45.21-.62.09-.18.22-.32.38-.42.16-.1.35-.15.59-.15.26 0 .47.05.63.14.15.09.28.21.37.35.09.14.15.29.18.45.03.16.05.31.05.45-.01.31-.08.58-.22.82-.14.23-.32.45-.53.65-.22.21-.46.39-.71.57-.26.18-.51.36-.75.54-.5.36-.89.78-1.17 1.27-.28.49-.43 1.06-.44 1.71h5v-1.15H6.43c.05-.17.14-.33.27-.49.13-.15.29-.29.46-.44zm8.5-1.56c-.23-.35-.54-.57-.95-.65v-.02c.34-.13.6-.34.76-.63.16-.29.24-.63.24-1.02 0-.34-.06-.64-.19-.9s-.3-.47-.51-.64c-.21-.17-.45-.3-.72-.38-.27-.09-.54-.13-.82-.13-.36 0-.68.07-.96.2-.28.13-.53.32-.72.55-.2.23-.36.51-.47.83-.11.32-.18.66-.19 1.04h1.15c-.01-.2.01-.39.06-.58.05-.19.12-.36.22-.51.1-.15.22-.27.37-.36.15-.09.32-.13.53-.13.32 0 .59.1.79.3.21.2.31.46.31.79 0 .23-.05.43-.14.59-.09.16-.21.29-.35.38-.15.09-.32.16-.51.19-.19.04-.38.05-.57.04v.93c.23-.01.45 0 .67.02.22.02.42.08.59.17.18.09.32.23.43.4.11.18.16.41.16.71 0 .44-.13.78-.39 1.02s-.58.36-.97.36c-.45 0-.79-.16-1.02-.47-.23-.31-.33-.7-.32-1.17H11c.01.4.06.77.17 1.1.11.33.26.61.47.85.21.23.46.42.77.54.31.13.67.19 1.08.19.34 0 .66-.05.96-.16.3-.11.57-.27.8-.47.23-.2.41-.45.55-.74.13-.27.2-.6.2-.97 0-.5-.11-.92-.34-1.27z',
        ],
        office: [
          'M15 5h-3V1c0-.55-.45-1-1-1H1C.45 0 0 .45 0 1v14c0 .55.45 1 1 1h3v-4h4v4h7c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zM5 10H2V7h3v3zm0-5H2V2h3v3zm5 5H7V7h3v3zm0-5H7V2h3v3zm4 9h-2v-2h2v2zm0-4h-2V7h2v3z',
        ],
        offline: [
          'M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zM6 14l1-5H4l6-7-1 5h3l-6 7z',
        ],
        'oil-field': [
          'M15 14h-1.35l-3.34-7.51 2.46-.95 1.45 3.21c.09.2.36.3.6.23.1-.03.18-.08.24-.15.05-.08 1.23-1.56.87-4.2-.11-.79-.52-4.62-3.26-4.62-.93 0-1.68.62-1.67 1.37 0 .14.03.28.09.42l.87 1.92L.64 8.07v.01A.98.98 0 0 0 0 9c0 .55.45 1 1 1 .13 0 .25-.03.36-.07v.01l1.04-.4L3.67 14H2c-.55 0-1 .45-1 1s.45 1 1 1h13c.55 0 1-.45 1-1s-.45-1-1-1zM4.27 8.81L7.14 7.7 5.2 12.08l-.93-3.27zM6.54 14L9 8.46 11.46 14H6.54z',
        ],
        'one-column': [
          'M11.99-.01h-3c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-14c0-.55-.45-1-1-1zm-6 5c-.28 0-.53.11-.71.29l-2 2a1.014 1.014 0 0 0 0 1.42l2 2a1.003 1.003 0 0 0 1.71-.71v-4c0-.55-.45-1-1-1z',
        ],
        outdated: [
          'M8 0c4.42 0 8 3.58 8 8 0 4.06-3.02 7.4-6.94 7.92-.02 0-.04.01-.06.01-.33.04-.66.07-1 .07-4.42 0-8-3.58-8-8 0-.55.45-1 1-1s1 .45 1 1c0 3.31 2.69 6 6 6 .71 0 1.37-.15 2-.38v.01c2.33-.82 4-3.02 4-5.63 0-3.31-2.69-6-6-6-1.78 0-3.36.78-4.46 2H5c.55 0 1 .45 1 1s-.45 1-1 1H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1s1 .45 1 1v1.74A7.95 7.95 0 0 1 8 0zm1 12H7v-2h2v2zm0-3H7V4h2v5z',
        ],
        'page-layout': [
          'M15 .95H1c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-12c0-.55-.45-1-1-1zm-9 12H2v-6h4v6zm8 0H7v-6h7v6zm0-7H2v-3h12v3z',
        ],
        'panel-stats': [
          'M10 4h3v1h-3zM10 6h3v1h-3zM10 8h3v1h-3zM10 10h3v1h-3z',
          'M15 1H1c-.6 0-1 .4-1 1v11c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V2c0-.6-.4-1-1-1zM8 12H2V3h6v9zm6 0H9V3h5v9z',
        ],
        'panel-table': [
          'M15 1H1c-.6 0-1 .4-1 1v11c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V2c0-.6-.4-1-1-1zM8 9H6V7h2v2zm0-3H6V4h2v2zm-6 6V3h3v9H2zm4 0v-2h2v2H6zm8 0H9v-2h5v2zm0-3H9V7h5v2zm0-3H9V4h5v2z',
        ],
        paperclip: [
          'M14.68 2.31A4.54 4.54 0 0 0 11.46.99c-1.15 0-2.31.44-3.19 1.32L.95 9.63c-.63.63-.95 1.46-.95 2.28a3.21 3.21 0 0 0 3.23 3.22c.83 0 1.66-.31 2.3-.95l7.31-7.32c.76-.77.76-1.98.01-2.73s-1.99-.76-2.75 0l-6.07 6.08c-.24.25-.24.65.01.9s.65.25.91.01l6.07-6.08c.25-.25.67-.25.91-.01.25.25.25.67 0 .92l-7.31 7.32c-.75.75-2.04.74-2.76.01-.75-.75-.73-2.02.01-2.76L9.2 3.21c1.24-1.24 3.35-1.26 4.58-.03 1.24 1.24 1.24 3.36 0 4.6l-7.12 7.13c-.24.25-.24.64.01.88.24.24.63.24.88.01v.01l7.13-7.13A4.41 4.41 0 0 0 16 5.51c0-1.16-.44-2.32-1.32-3.2z',
        ],
        paragraph: [
          'M13 1H6C3.8 1 2 2.8 2 5s1.8 4 4 4v5c0 .6.4 1 1 1s1-.5 1-1V3h2v11c0 .6.4 1 1 1s1-.5 1-1V3h1c.5 0 1-.4 1-1s-.4-1-1-1z',
        ],
        path: [
          'M14.5 0h-13C.67 0 0 .67 0 1.5S.67 3 1.5 3H7v3H3.5C2.67 6 2 6.67 2 7.5S2.67 9 3.5 9H7v3H5.5c-.83 0-1.5.67-1.5 1.5S4.67 15 5.5 15h5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5H9V9h3.5c.83 0 1.5-.67 1.5-1.5S13.33 6 12.5 6H9V3h5.5c.83 0 1.5-.67 1.5-1.5S15.33 0 14.5 0z',
        ],
        'path-search': [
          'M15 14.62l-4-2.4V9.77c-.32.09-.66.15-1 .18v2.27l-4 2.4V8.71c-.38-.31-.72-.66-1-1.06v6.97l-4-2.4V8c.55 0 1-.45 1-1s-.45-1-1-1V1.38l3.15 1.89c.08-.34.18-.66.32-.97L.76.07v.01A.496.496 0 0 0 .5 0C.22 0 0 .22 0 .5v12c0 .18.1.33.25.42v.01l5 3v-.01c.07.05.16.08.25.08s.18-.03.25-.08v.01l4.74-2.85 4.74 2.85v-.01c.09.05.18.08.27.08.28 0 .5-.22.5-.5v-3.78c-.3.17-.63.28-1 .28v2.62zM2 5c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1zm6-1c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm7.75-.92l-1.19-.72c.18.43.29.9.36 1.38l.08.04v3.39l1 1V3.5c0-.18-.1-.33-.25-.42zM10 2c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm3.3 4.89c.44-.7.7-1.51.7-2.39C14 2.01 11.99 0 9.5 0S5 2.01 5 4.5 7.01 9 9.5 9c.88 0 1.69-.26 2.39-.7l2.41 2.41c.17.18.42.29.7.29a1.003 1.003 0 0 0 .71-1.71l-2.41-2.4zM9.5 8C7.57 8 6 6.43 6 4.5S7.57 1 9.5 1 13 2.57 13 4.5 11.43 8 9.5 8z',
        ],
        pause: [
          'M6 3H4c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h2c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm6 0h-2c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h2c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1z',
        ],
        people: [
          'M13.69 13.98c-.05-.24-.14-.5-.25-.76-.36-.86-1.12-1.33-2.69-2-.14-.06-.59-.25-.6-.25-.21-.09-.36-.15-.5-.22.02-.1.02-.2.03-.31 0-.04.01-.08.01-.13-.07-.06-.13-.12-.19-.19.22-.32.4-.67.54-1.05.02-.06.02-.06.03-.1.29-.23.48-.57.59-.96.16-.33.25-.73.21-1.16-.03-.4-.16-.76-.37-1.03-.02-.53-.07-1.13-.15-1.54-.01-.06-.02-.12-.03-.19.23-.06.48-.09.72-.09.49 0 1.05.16 1.44.46.38.29.67.7.8 1.17.03.1.05.21.07.31.07.37.11.94.11 1.33v.05c.14.06.27.21.29.51.02.25-.07.45-.13.54-.05.21-.16.44-.38.48-.02.1-.05.2-.09.3 0 .01-.01.03-.01.03-.17.44-.43.83-.75 1.11v.14c.03.35-.09.59.83 1 .93.41 2.32.84 2.6 1.5.29.66.17 1.04.17 1.04h-2.3zm-1.17-.38c.37.86.22 1.36.22 1.36H.06s-.14-.5.22-1.36 2.13-1.43 3.31-1.96c1.17-.54 1.05-.86 1.09-1.3 0-.05.01-.11.01-.17-.41-.35-.75-.86-.97-1.45v-.01s-.01-.01-.01-.02c-.04-.12-.09-.26-.12-.39-.28-.05-.44-.36-.5-.64-.06-.12-.19-.39-.16-.71.04-.41.21-.6.39-.68v-.06c0-.51.05-1.26.14-1.74.02-.13.05-.27.09-.4.17-.6.54-1.13 1.02-1.51.5-.39 1.21-.6 1.84-.6s1.34.21 1.84.6c.48.38.85.91 1.02 1.52.04.13.07.27.09.4.09.48.14 1.22.14 1.73v.07c.18.08.34.27.37.67.03.32-.09.59-.16.71-.06.28-.21.58-.48.63-.03.13-.07.26-.12.39 0 .01-.01.04-.01.04-.22.58-.55 1.08-.95 1.45v.18c.04.45-.12.77 1.06 1.3 1.18.53 2.95 1.09 3.31 1.95z',
        ],
        percentage: [
          'M6 6V4c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h1c1.1 0 2-.9 2-2zM3.5 6c-.28 0-.5-.22-.5-.5v-1c0-.28.22-.5.5-.5s.5.22.5.5v1c0 .28-.22.5-.5.5zM13 8h-1c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h1c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2zm0 3.5c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-1c0-.28.22-.5.5-.5s.5.22.5.5v1zM12 3a1.003 1.003 0 0 0-1.87-.5l-5.99 9.98c-.09.15-.14.33-.14.52a1.003 1.003 0 0 0 1.87.5l5.99-9.98c.09-.15.14-.33.14-.52z',
        ],
        person: [
          'M15.68 14.32c-.46-1.05-2.68-1.75-4.16-2.4-1.48-.65-1.28-1.05-1.33-1.59-.01-.07-.01-.15-.01-.23.51-.45.92-1.07 1.19-1.78 0 0 .01-.04.02-.05.06-.15.11-.32.15-.48.34-.07.54-.44.61-.78.08-.14.23-.48.2-.87-.05-.5-.25-.73-.47-.82v-.09c0-.63-.06-1.55-.17-2.15A3.671 3.671 0 0 0 10.32.72C9.68.25 8.79-.01 8-.01c-.79 0-1.68.25-2.31.73-.61.47-1.06 1.13-1.28 1.86-.05.17-.09.33-.11.5-.12.6-.17 1.51-.17 2.15v.08c-.24.09-.45.32-.5.83-.03.38.13.72.2.86.08.35.28.72.63.78.04.17.09.33.15.49 0 .01.01.02.01.03l.01.01c.27.72.7 1.35 1.22 1.8 0 .07-.01.14-.01.21-.05.54.1.94-1.37 1.59-1.48.65-3.7 1.35-4.16 2.4-.46 1.05-.27 1.67-.27 1.67h15.92c-.01.01.18-.61-.28-1.66z',
        ],
        phone: [
          'M15.9 12.41c-.06-.06-3.37-2-3.48-2.05a.794.794 0 0 0-.32-.08c-.15 0-.34.11-.57.32-.23.22-.94 1.19-1.15 1.4-.21.22-.38.32-.52.32-.07 0-.15-.02-.25-.06-.1-.04-1.16-.58-3.36-2.52-2.2-1.93-2.49-3.2-2.5-3.55 0-.14.11-.31.32-.52.22-.21.45-.41.7-.6.25-.19.49-.4.7-.62.22-.23.32-.42.32-.57 0-.11-.03-.21-.08-.32C5.66 3.46 3.66.15 3.59.08 3.44-.07 2.85 0 2.55.16.16 1.46-.03 3.2 0 3.89c.04.71.49 4.46 4.16 7.95C8.72 16.17 11.89 16 12.1 16c.69 0 2.82-.38 3.72-2.55.13-.32.25-.87.08-1.04z',
        ],
        'pie-chart': [
          'M7 1.08c-3.37.5-5.97 3.4-5.97 6.92 0 3.87 3.13 7 6.98 7 3.52 0 6.42-2.61 6.91-6H7V1.08z',
          'M8 0v8h8c0-4.42-3.58-8-8-8z',
        ],
        pin: [
          'M9.41.92c-.51.51-.41 1.5.15 2.56L4.34 7.54C2.8 6.48 1.45 6.05.92 6.58l3.54 3.54-3.54 4.95 4.95-3.54 3.54 3.54c.53-.53.1-1.88-.96-3.42l4.06-5.22c1.06.56 2.04.66 2.55.15L9.41.92z',
        ],
        pivot: [
          'M4.57 7.02L.3 11.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71l4.27-4.27c-.58-.35-1.07-.84-1.41-1.42zM15 8c-.55 0-1 .45-1 1v.59l-2.57-2.57c-.34.58-.83 1.07-1.41 1.41L12.59 11H12c-.55 0-1 .45-1 1s.45 1 1 1h3c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-4-3c0-1.66-1.34-3-3-3S5 3.34 5 5s1.34 3 3 3 3-1.34 3-3zM8 6c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z',
        ],
        'pivot-table': [
          'M2 4H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h1c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zm0-4H1C.45 0 0 .45 0 1v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm11.71 4.29C13.53 4.11 13.28 4 13 4s-.53.11-.71.29l-2 2a1.003 1.003 0 0 0 1.42 1.42l.29-.3V9c0 1.66-1.34 3-3 3H7.41l.29-.29c.19-.18.3-.43.3-.71a1.003 1.003 0 0 0-1.71-.71l-2 2c-.18.18-.29.43-.29.71 0 .28.11.53.29.71l2 2a1.003 1.003 0 0 0 1.42-1.42l-.3-.29H9c2.76 0 5-2.24 5-5V7.41l.29.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71l-2-2zM15 0H5c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1z',
        ],
        play: [
          'M12 8c0-.35-.19-.64-.46-.82l.01-.02-6-4-.01.02A.969.969 0 0 0 5 3c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1 .21 0 .39-.08.54-.18l.01.02 6-4-.01-.02c.27-.18.46-.47.46-.82z',
        ],
        plus: [
          'M13 7H9V3c0-.55-.45-1-1-1s-1 .45-1 1v4H3c-.55 0-1 .45-1 1s.45 1 1 1h4v4c0 .55.45 1 1 1s1-.45 1-1V9h4c.55 0 1-.45 1-1s-.45-1-1-1z',
        ],
        'polygon-filter': [
          'M14 5c-.24 0-.47.05-.68.13L9.97 2.34c.01-.11.03-.22.03-.34 0-1.1-.9-2-2-2S6 .9 6 2c0 .04.01.08.01.12L2.88 4.21C2.61 4.08 2.32 4 2 4 .9 4 0 4.9 0 6c0 .74.4 1.38 1 1.72v4.55c-.6.35-1 .99-1 1.73 0 1.1.9 2 2 2 .74 0 1.38-.4 1.72-1h4.55c.35.6.98 1 1.72 1 1.1 0 2-.9 2-2 0-.37-.11-.7-.28-1L14 9c1.11-.01 2-.9 2-2s-.9-2-2-2zm-4.01 7c-.73 0-1.37.41-1.71 1H3.73c-.18-.3-.43-.55-.73-.72V7.72c.6-.34 1-.98 1-1.72 0-.04-.01-.08-.01-.12l3.13-2.09c.27.13.56.21.88.21.24 0 .47-.05.68-.13l3.35 2.79c-.01.11-.03.22-.03.34 0 .37.11.7.28 1l-2.29 4z',
        ],
        power: [
          'M8 8c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1S7 .45 7 1v6c0 .55.45 1 1 1zm3-5.32v2.34c1.21.91 2 2.35 2 3.98 0 2.76-2.24 5-5 5s-5-2.24-5-5c0-1.63.79-3.06 2-3.98V2.68C2.64 3.81 1 6.21 1 9c0 3.87 3.13 7 7 7s7-3.13 7-7c0-2.79-1.64-5.19-4-6.32z',
        ],
        'predictive-analysis': [
          'M16 6.41c0-1.01-.49-1.94-1.29-2.49-.43-1.92-2.07-3.28-4-3.28-.46 0-.92.08-1.35.24C8.83.31 8.11 0 7.34 0c-.9 0-1.74.44-2.28 1.16-.12-.01-.24-.02-.36-.02-1.31 0-2.42.89-2.77 2.17C.78 3.72 0 4.84 0 6.13c0 .38.07.76.21 1.12C.07 7.6 0 7.98 0 8.36c0 1.11.58 2.11 1.51 2.63.54.56 1.27.87 2.03.87.49 0 .95-.12 1.37-.36a2.85 2.85 0 0 0 2.18 1.04c.52 0 1.03-.14 1.47-.42.49.39 1.07.65 1.69.73 1.04 1.15 1.84 2.63 1.84 2.64 0 0 .28.49.26.49.77 0 1.41-.16 1.32-1.04 0 .02-.73-2.31-.73-2.31.41-.21.75-.55.97-.98.9-.52 1.47-1.53 1.47-2.61 0-.24-.03-.48-.08-.71.45-.52.7-1.21.7-1.92zm-1.23 1.02l-.15-.16-.61-.67c-.27-.29-.54-.94-.58-1.39l-.1-1.01c-.05-.59-.94-.58-.91.11 0 .02.1 1.01.1 1.01.03.29.12.62.24.93-.06-.01-.12-.02-.18-.02 0 0-2.06-.1-2.05-.11-.58-.02-.71.97-.04 1l2.05.11c.42.02 1.04.3 1.29.58l.49.54.02.05c.08.21.12.44.12.66 0 .74-.41 1.41-1.07 1.75l-.16.08-.07.18c-.15.38-.48.66-.88.74l-.54.11.7 2.2c-.38-.61-.95-1.43-1.62-2.14l-.12-.13-.17-.01c-.41-.03-.8-.17-1.14-.38l1.36-1.18c.35-.31.83-.44.99-.39 0 0 .63.17.62.18.63.16.83-.74.23-.97l-.62-.18c-.55-.16-1.33.18-1.79.58l-1.53 1.33-.31.26c-.35.29-.75.44-1.2.44-.64 0-1.23-.33-1.58-.86V9.15c0-.4.17-.79.27-.85 0 0 .52-.34.51-.35.71-.53.18-1.23-.49-.89 0-.01-.52.35-.52.35-.26.15-.45.44-.58.77-.11-.11-.22-.2-.34-.28 0 0-1.53-1.01-1.53-1.02-.65-.45-1.2.51-.49.89 0-.01 1.51 1.02 1.51 1.02.37.24.62.78.62 1.09v.67c-.34.19-.63.29-.99.29-.54 0-1.05-.23-1.41-.63l-.05-.06-.07-.04c-.65-.34-1.05-1-1.05-1.73 0-.3.07-.6.2-.87l.12-.25L1.15 7c-.13-.27-.2-.56-.2-.87 0-.9.61-1.68 1.48-1.89l.31-.08.05-.34a1.926 1.926 0 0 1 2.38-1.58l.32.08.18-.31c.35-.6.99-.97 1.67-.97.44 0 .86.15 1.2.42l-.36.36v-.01l-.25.26c-.33.27-.74.42-.89.4 0 0-.67-.1-.67-.11-.67-.13-.87.86-.14 1.02.01 0 .67.11.67.11.02 0 .05 0 .07.01-.11.37-.15.77-.1 1.12 0 0 .17.99.15.99.11.52 1.06.36.93-.18 0-.01-.15-.99-.15-.99-.05-.37.12-.94.36-1.19l.39-.4c.05-.05.1-.09.15-.14l.74-.76c.4-.18.83-.27 1.27-.27 1.55 0 2.86 1.12 3.11 2.67l.04.25.21.12c.61.35.98 1 .98 1.7 0 .36-.1.7-.28 1.01z',
        ],
        prescription: [
          'M10.91 8.34c.14-.21.36-.34.63-.34h1.29c.22 0 .41.07.52.26.09.16.08.33-.04.53l-2.49 2.87 2.77 3.54c.12.17.14.37.02.55-.11.17-.3.25-.5.25h-1.44a.69.69 0 0 1-.61-.35L9.4 13.51l-1.69 2.15c-.13.21-.36.34-.63.34H5.8c-.22 0-.41-.07-.52-.26-.09-.16-.08-.33.04-.53l2.71-3.48L4.3 6.99H3.03v3.47c0 .33-.26.56-.62.56h-.8c-.35-.01-.61-.23-.61-.56V.56c0-.33.26-.56.62-.56h3.11c.62 0 1.19.08 1.7.24.51.16.96.39 1.34.69a3.194 3.194 0 0 1 1.21 2.53c0 .81-.25 1.5-.74 2.08-.37.44-.84.77-1.42 1.01L7.88 7.9c.04.04.07.08.08.1l1.49 1.9 1.46-1.56zM5.18 5c.62 0 1.08-.13 1.39-.37.29-.23.44-.71.44-1.16s-.15-.87-.44-1.1C6.26 2.12 5.8 2 5.18 2H2.99v3h2.19z',
        ],
        presentation: [
          'M15 1H9c0-.55-.45-1-1-1S7 .45 7 1H1c-.55 0-1 .45-1 1s.45 1 1 1v8c0 .55.45 1 1 1h3.59L3.3 14.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71L7 13.41V15c0 .55.45 1 1 1s1-.45 1-1v-1.59l2.29 2.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71L10.41 12H14c.55 0 1-.45 1-1V3c.55 0 1-.45 1-1s-.45-1-1-1zm-2 9H3V3h10v7z',
        ],
        print: [
          'M12 2.02c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v1h8v-1zm3 2H1c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h1v-3h12v3h1c.55 0 1-.45 1-1v-6c0-.56-.45-1-1-1zm-1 3h-2v-1h2v1zm-3 6H5v-3H3v4c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-4h-2v3z',
        ],
        projects: [
          'M14 3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v1h12V3zm-2-3H4c-.55 0-1 .45-1 1h10c0-.55-.45-1-1-1zm3 5H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm-3 6c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1V9h1v2h6V9h1v2z',
        ],
        properties: [
          'M2 6C.9 6 0 6.9 0 8s.9 2 2 2 2-.9 2-2-.9-2-2-2zm4-3h9c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1s.45 1 1 1zm-4 9c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm13-5H6c-.55 0-1 .45-1 1s.45 1 1 1h9c.55 0 1-.45 1-1s-.45-1-1-1zm0 6H6c-.55 0-1 .45-1 1s.45 1 1 1h9c.55 0 1-.45 1-1s-.45-1-1-1zM2 0C.9 0 0 .9 0 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z',
        ],
        property: [
          'M3 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-.5-6.5a2.5 2.5 0 0 0 0 5 2.5 2.5 0 0 0 0-5zM7 3h8c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1zm8 10H7c-.55 0-1 .45-1 1s.45 1 1 1h8c.55 0 1-.45 1-1s-.45-1-1-1zM3 0C1.9 0 1 .9 1 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 6H7c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h8c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1z',
        ],
        'publish-function': [
          'M12.16 3.76c.15-.11.3-.16.47-.16.06 0 .17.02.34.06.16.04.31.06.43.06a.58.58 0 0 0 .6-.6c0-.19-.06-.33-.17-.44-.11-.11-.28-.16-.49-.16-.19 0-.37.04-.54.13-.17.09-.39.27-.65.55-.2.21-.48.58-.87 1.11a5.22 5.22 0 0 0-.78-1.79l-2.05.32-.04.21c.15-.03.28-.04.39-.04.2 0 .37.08.5.25.21.26.5 1.03.88 2.33-.29.36-.49.6-.6.71-.18.19-.33.31-.45.36-.09.04-.19.07-.3.07-.09 0-.23-.04-.42-.13a.904.904 0 0 0-.36-.09c-.2 0-.36.06-.49.18a.59.59 0 0 0-.19.46c0 .18.06.32.18.43.12.11.28.16.48.16.2 0 .38-.04.55-.12.17-.08.39-.24.65-.49s.62-.65 1.07-1.19c.18.52.33.89.46 1.13.13.24.28.4.44.51.17.1.37.16.62.16.24 0 .49-.08.74-.25.33-.21.66-.58 1.01-1.09l-.21-.11c-.23.31-.41.5-.52.57a.44.44 0 0 1-.26.07c-.12 0-.24-.07-.36-.21-.2-.24-.46-.91-.8-2 .29-.49.54-.81.74-.96zM6.37 5.83l.68-2.53h.83l.2-.64h-.84c.24-.91.56-1.59.96-2.01.24-.27.48-.4.71-.4.05 0 .08.01.11.04s.04.06.04.1c0 .04-.03.11-.1.21-.06.1-.1.2-.1.29 0 .13.05.24.15.33.1.09.23.14.39.14.17 0 .31-.06.42-.17.12-.12.18-.27.18-.46 0-.21-.08-.39-.25-.52C9.57.07 9.3 0 8.93 0c-.59 0-1.12.16-1.59.48-.48.32-.93.85-1.36 1.59-.15.26-.29.42-.42.49s-.35.11-.64.1l-.19.65h.81L4.35 7.68c-.2.72-.33 1.16-.4 1.33-.1.24-.26.45-.46.62a.48.48 0 0 1-.31.1c-.03 0-.06-.01-.08-.03l-.03-.03c0-.02.03-.06.09-.11.06-.06.09-.15.09-.26 0-.13-.05-.23-.14-.32-.1-.09-.23-.13-.41-.13-.21 0-.38.05-.51.16A.52.52 0 0 0 2 9.4c0 .16.08.3.23.42.16.12.4.18.74.18.53 0 .99-.13 1.4-.39.41-.26.76-.65 1.07-1.19.3-.53.61-1.39.93-2.59zm2.34 3.46A.997.997 0 0 0 8 9c-.28 0-.53.11-.71.29l-2 2a1.003 1.003 0 0 0 1.42 1.42l.29-.3V15c0 .55.45 1 1 1s1-.45 1-1v-2.59l.29.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71l-2-2z',
        ],
        pulse: [
          'M15 8h-1.46l-1.7-2.55-.02.01A.984.984 0 0 0 11 5c-.43 0-.79.27-.93.65h-.01l-1.69 4.51-1.38-8.32h-.02A.989.989 0 0 0 6 1c-.41 0-.77.25-.92.61L2.34 8H1c-.55 0-1 .45-1 1s.45 1 1 1h2c.41 0 .77-.25.92-.61l1.65-3.86 1.44 8.63h.02c.08.47.47.84.97.84.43 0 .79-.27.93-.65h.01l2.31-6.17.92 1.38.02-.01c.17.26.46.45.81.45h2c.55 0 1-.45 1-1s-.45-1-1-1z',
        ],
        random: [
          'M11.48 4h1.11l-.29.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71l2-2c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71l-2-2a1.003 1.003 0 0 0-1.42 1.42l.3.29H11c-.32 0-.59.16-.77.38l-.01-.01L8.28 4.8l1.28 1.6L11.48 4zm2.23 6.29a1.003 1.003 0 0 0-1.42 1.42l.3.29h-1.11l-7.7-9.62h-.01A.996.996 0 0 0 3 2H1c-.55 0-1 .45-1 1s.45 1 1 1h1.52l7.7 9.62.01-.01c.18.23.45.39.77.39h1.59l-.29.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71l2-2c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71l-2-2zM2.52 12H1c-.55 0-1 .45-1 1s.45 1 1 1h2c.32 0 .59-.16.77-.38l.01.01 1.94-2.42L4.44 9.6 2.52 12z',
        ],
        record: ['M8 3a5 5 0 1 0 0 10A5 5 0 1 0 8 3z'],
        redo: [
          'M12 11c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm3.71-6.71l-3-3a1.003 1.003 0 0 0-1.42 1.42L12.59 4H5C2.24 4 0 6.24 0 9s2.24 5 5 5h4v-2H5c-1.66 0-3-1.34-3-3s1.34-3 3-3h7.59L11.3 7.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71l3-3c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71z',
        ],
        refresh: [
          'M14.99 6.99c-.55 0-1 .45-1 1 0 3.31-2.69 6-6 6-1.77 0-3.36-.78-4.46-2h1.46c.55 0 1-.45 1-1s-.45-1-1-1h-4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1s1-.45 1-1v-1.74a7.95 7.95 0 0 0 6 2.74c4.42 0 8-3.58 8-8 0-.55-.45-1-1-1zm0-7c-.55 0-1 .45-1 1v1.74a7.95 7.95 0 0 0-6-2.74c-4.42 0-8 3.58-8 8 0 .55.45 1 1 1s1-.45 1-1c0-3.31 2.69-6 6-6 1.77 0 3.36.78 4.46 2h-1.46c-.55 0-1 .45-1 1s.45 1 1 1h4c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1z',
        ],
        'regression-chart': [
          'M13 6.5c0 .83.67 1.5 1.5 1.5S16 7.33 16 6.5 15.33 5 14.5 5 13 5.67 13 6.5zM8.5 5c.83 0 1.5-.67 1.5-1.5S9.33 2 8.5 2 7 2.67 7 3.5 7.67 5 8.5 5zM9 9.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5S11.33 8 10.5 8 9 8.67 9 9.5zM4.5 8C5.33 8 6 7.33 6 6.5S5.33 5 4.5 5 3 5.67 3 6.5 3.67 8 4.5 8zM15 12H3.26l12.03-8.59-.58-.81L2 11.67V3c0-.55-.45-1-1-1s-1 .45-1 1v10c0 .55.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1z',
        ],
        remove: [
          'M10.99 6.99h-6c-.55 0-1 .45-1 1s.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1zm-3-7c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.68 6-6 6z',
        ],
        'remove-column': [
          'M14 0H4c-.55 0-1 .45-1 1v3h2V2h3v12H5v-2H3v3c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-1 14h-3V2h3v12zm-8.71-3.29a1.003 1.003 0 0 0 1.42-1.42L4.41 8 5.7 6.71c.19-.18.3-.43.3-.71a1.003 1.003 0 0 0-1.71-.71L3 6.59l-1.29-1.3A1.003 1.003 0 0 0 .29 6.71L1.59 8 .29 9.29a1.003 1.003 0 0 0 1.42 1.42L3 9.41l1.29 1.3z',
        ],
        'remove-column-left': [
          'M4 9h4c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm11-9H1C.45 0 0 .45 0 1v14c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-5 14H2V2h8v12zm4 0h-3V2h3v12z',
        ],
        'remove-column-right': [
          'M15 0H1C.45 0 0 .45 0 1v14c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zM5 14H2V2h3v12zm9 0H6V2h8v12zM8 9h4c.55 0 1-.45 1-1s-.45-1-1-1H8c-.55 0-1 .45-1 1s.45 1 1 1z',
        ],
        'remove-row-bottom': [
          'M15 0H1C.45 0 0 .45 0 1v14c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-1 14H2V6h12v8zm0-9H2V2h12v3zm-8 6h4c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1s.45 1 1 1z',
        ],
        'remove-row-top': [
          'M15 0H1C.45 0 0 .45 0 1v14c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-1 14H2v-3h12v3zm0-4H2V2h12v8zM6 7h4c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1s.45 1 1 1z',
        ],
        repeat: [
          'M10 5c0 .55.45 1 1 1h4c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1s-1 .45-1 1v1.74A7.95 7.95 0 0 0 8 0C3.58 0 0 3.58 0 8c0 4.06 3.02 7.4 6.94 7.92.02 0 .04.01.06.01.33.04.66.07 1 .07 4.42 0 8-3.58 8-8 0-.55-.45-1-1-1s-1 .45-1 1c0 3.31-2.69 6-6 6-.71 0-1.37-.15-2-.38v.01C3.67 12.81 2 10.61 2 8c0-3.31 2.69-6 6-6 1.77 0 3.36.78 4.46 2H11c-.55 0-1 .45-1 1z',
        ],
        resolve: [
          'M6.6 3.3C6.1 3.1 5.6 3 5 3 2.2 3 0 5.2 0 8s2.2 5 5 5c.6 0 1.1-.1 1.6-.3C5.3 11.6 4.5 9.9 4.5 8s.8-3.6 2.1-4.7zM8 4c-1.2.9-2 2.4-2 4s.8 3.1 2 4c1.2-.9 2-2.3 2-4s-.8-3.1-2-4zm3-1c-.6 0-1.1.1-1.6.3 1.3 1.2 2.1 2.9 2.1 4.7s-.8 3.6-2.1 4.7c.5.2 1 .3 1.6.3 2.8 0 5-2.2 5-5s-2.2-5-5-5z',
        ],
        rig: [
          'M5.71 3c0 1.1.96 2 2.14 2C9.04 5 10 3.96 10 3c0-1.96-1.47-3-2.14-3H5c0 1.96 2.68 1.4.71 3zm2.5 3l.01.01s0-.01-.01-.01zm6.5 8.29L10 9.59V7c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v2.58l-4.71 4.7c-.18.19-.29.44-.29.72a1.003 1.003 0 0 0 1.71.71L6 12.42V15c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-2.58l3.29 3.29a1.003 1.003 0 0 0 1.42-1.42z',
        ],
        'right-join': [
          'M6.6 3.3C5.3 4.4 4.5 6.1 4.5 8s.8 3.6 2.1 4.7c-.5.2-1 .3-1.6.3-2.8 0-5-2.2-5-5s2.2-5 5-5c.6 0 1.1.1 1.6.3zm-1.96 8.68C3.92 10.83 3.5 9.46 3.5 8s.42-2.83 1.14-3.98C2.6 4.2 1 5.91 1 8s1.6 3.8 3.64 3.98zM8 4c-1.2.9-2 2.4-2 4s.8 3.1 2 4c1.2-.9 2-2.3 2-4s-.8-3.1-2-4zm3-1c2.8 0 5 2.2 5 5s-2.2 5-5 5c-.6 0-1.1-.1-1.6-.3 1.3-1.1 2.1-2.9 2.1-4.7s-.8-3.5-2.1-4.7c.5-.2 1-.3 1.6-.3z',
        ],
        ring: [
          'M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z',
        ],
        'rotate-document': [
          'M12 2h-1.59l.29-.29c.19-.18.3-.43.3-.71A1.003 1.003 0 0 0 9.29.29l-2 2C7.11 2.47 7 2.72 7 3c0 .28.11.53.29.71l2 2a1.003 1.003 0 0 0 1.42-1.42l-.3-.29H12c.55 0 1 .45 1 1v3c0 .55.45 1 1 1s1-.45 1-1V5c0-1.66-1.34-3-3-3zM5.71 5.29A.997.997 0 0 0 5 5H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V9c0-.28-.11-.53-.29-.71l-3-3zM7 14H2V7h2v2c0 .55.45 1 1 1h2v4z',
        ],
        'rotate-page': [
          'M8 6H2c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1zm-1 8H3V8h4v6zm5-12h-1.59l.29-.29c.19-.18.3-.43.3-.71A1.003 1.003 0 0 0 9.29.29l-2 2C7.11 2.47 7 2.72 7 3c0 .28.11.53.29.71l2 2a1.003 1.003 0 0 0 1.42-1.42l-.3-.29H12c.55 0 1 .45 1 1v3c0 .55.45 1 1 1s1-.45 1-1V5c0-1.66-1.34-3-3-3z',
        ],
        satellite: [
          'M3 9c0-.6.4-1 1-1s1 .4 1 1c0 1.1.9 2 2 2 .6 0 1 .4 1 1s-.4 1-1 1c-2.2 0-4-1.8-4-4zM0 9c0-.6.4-1 1-1s1 .4 1 1c0 2.8 2.2 5 5 5 .6 0 1 .4 1 1s-.4 1-1 1c-3.9 0-7-3.1-7-7zm7 1c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1.3-2.8c-.4-.4-.4-1 0-1.4l4.5-4.5c.4-.4 1-.4 1.4 0l.5.5c.4.4.4 1 0 1.4l-4.5 4.5c-.4.4-1 .4-1.4 0l-.5-.5zM5.2.3c.4-.4 1-.4 1.4 0l2.1 2.1c.4.4.4 1 0 1.4l-.9.9c-.4.4-1 .4-1.4 0L4.3 2.6c-.4-.4-.4-1 0-1.4l.9-.9zm7 7c.4-.4 1-.4 1.4 0l2.1 2.1c.4.4.4 1 0 1.4l-.9.9c-.4.4-1 .4-1.4 0l-2.1-2.1c-.4-.4-.4-1 0-1.4l.9-.9z',
        ],
        saved: [
          'M6.71 9.29a1.003 1.003 0 0 0-1.42 1.42l2 2a.997.997 0 0 0 1.6-.27h.01l2-4h-.01c.06-.13.11-.28.11-.44 0-.55-.45-1-1-1-.39 0-.72.23-.89.56H9.1l-1.38 2.76-1.01-1.03zM9 0H3c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V5L9 0zm3 14H4V2h4v4h4v8z',
        ],
        'scatter-plot': [
          'M15 12H2V3c0-.55-.45-1-1-1s-1 .45-1 1v10c0 .55.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1zm-.5-7c.83 0 1.5-.67 1.5-1.5S15.33 2 14.5 2 13 2.67 13 3.5 13.67 5 14.5 5zm-3 4c.83 0 1.5-.67 1.5-1.5S12.33 6 11.5 6 10 6.67 10 7.5 10.67 9 11.5 9zm-4-2C8.33 7 9 6.33 9 5.5S8.33 4 7.5 4 6 4.67 6 5.5 6.67 7 7.5 7zm-3 4c.83 0 1.5-.67 1.5-1.5S5.33 8 4.5 8 3 8.67 3 9.5 3.67 11 4.5 11z',
        ],
        search: [
          'M15.55 13.43l-2.67-2.68a6.94 6.94 0 0 0 1.11-3.76c0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7c1.39 0 2.68-.42 3.76-1.11l2.68 2.67a1.498 1.498 0 1 0 2.12-2.12zm-8.56-1.44c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z',
        ],
        'search-around': [
          'M13.5 11c-.51 0-.98.15-1.38.42l-2.4-2.41c.17-.3.28-.64.28-1.01s-.11-.71-.28-1.01l2.41-2.41c.39.27.86.42 1.37.42a2.5 2.5 0 0 0 0-5A2.5 2.5 0 0 0 11 2.5c0 .51.15.98.42 1.38l-2.41 2.4C8.71 6.11 8.37 6 8 6s-.71.11-1.01.28l-2.41-2.4c.27-.4.42-.87.42-1.38a2.5 2.5 0 0 0-5 0A2.5 2.5 0 0 0 2.5 5c.51 0 .98-.15 1.38-.42l2.41 2.41C6.11 7.29 6 7.63 6 8s.11.71.28 1.01l-2.41 2.41c-.39-.27-.86-.42-1.37-.42a2.5 2.5 0 0 0 0 5A2.5 2.5 0 0 0 5 13.5c0-.51-.15-.98-.42-1.38l2.41-2.41c.3.18.64.29 1.01.29s.71-.11 1.01-.28l2.41 2.41c-.27.39-.42.86-.42 1.37a2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0-2.5-2.5zm0-10c.83 0 1.5.67 1.5 1.5S14.33 4 13.5 4 12 3.33 12 2.5 12.67 1 13.5 1zm-11 3C1.67 4 1 3.33 1 2.5S1.67 1 2.5 1 4 1.67 4 2.5 3.33 4 2.5 4zm0 11c-.83 0-1.5-.67-1.5-1.5S1.67 12 2.5 12s1.5.67 1.5 1.5S3.33 15 2.5 15zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z',
        ],
        'search-template': [
          'M15.55 13.43l-2.67-2.67c.7-1.09 1.11-2.38 1.11-3.77 0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7c1.39 0 2.68-.41 3.77-1.11l2.67 2.67a1.498 1.498 0 1 0 2.12-2.12zm-8.56-1.44c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm2.5-6h-5c-.28 0-.5.22-.5.5s.22.5.5.5h5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5zm0-2h-5c-.28 0-.5.22-.5.5s.22.5.5.5h5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5zm0 4h-5c-.28 0-.5.22-.5.5s.22.5.5.5h5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5z',
        ],
        'search-text': [
          'M9 4H5c-.55 0-1 .45-1 1s.45 1 1 1h1v3c0 .55.45 1 1 1s1-.45 1-1V6h1c.55 0 1-.45 1-1s-.45-1-1-1zm6.56 9.44l-2.67-2.67C13.59 9.68 14 8.39 14 7c0-3.87-3.13-7-7-7S0 3.13 0 7s3.13 7 7 7c1.39 0 2.68-.41 3.77-1.11l2.67 2.67a1.498 1.498 0 1 0 2.12-2.12zM7 12c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z',
        ],
        'segmented-control': [
          'M15 4H1c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zm-1 6H8V6h6v4z',
        ],
        select: [
          'M16 15c0-.28-.12-.52-.31-.69l.02-.02-3.12-3.12 3.41-.84-8.05-2.86c.03-.09.05-.17.05-.27V2c0-.55-.45-1-1-1H3c0-.55-.45-1-1-1S1 .45 1 1c-.55 0-1 .45-1 1s.45 1 1 1v4c0 .55.45 1 1 1h5.2c.1 0 .18-.02.27-.05L10.33 16l.85-3.41 3.12 3.12.02-.02c.16.19.4.31.68.31.04 0 .07-.02.1-.02s.06.02.1.02c.44 0 .8-.36.8-.8 0-.04-.02-.07-.02-.1s.02-.06.02-.1zM6 6H3V3h3v3z',
        ],
        selection: [
          'M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-9C6.34 5 5 6.34 5 8s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z',
        ],
        'send-to': [
          'M15 7.5c-.8 0-1.5-.4-2-1l-1.2 1.2c-.4.5-1.1.7-1.8.7-1.4.1-2.5-1-2.5-2.4 0-.7.3-1.3.7-1.8L9.5 3c-.6-.5-1-1.2-1-2 0-.3.1-.7.2-1H8C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8v-.7c-.3.1-.6.2-1 .2zM15 0h-4c-.6 0-1 .5-1 1s.4 1 1 1h1.6L9.3 5.3c-.2.2-.3.4-.3.7 0 .5.4 1 1 1 .3 0 .5-.1.7-.3L14 3.4V5c0 .6.4 1 1 1 .5 0 1-.4 1-1V1c0-.5-.4-1-1-1z',
        ],
        'send-to-graph': [
          'M6 9H2c-.55 0-1 .45-1 1s.45 1 1 1h1.59L.3 14.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71L5 12.41V14c0 .55.45 1 1 1s1-.45 1-1v-4c0-.55-.45-1-1-1zm8 .5c-.56 0-1.06.23-1.42.59l-2.13-1.24L8.99 8l3.59-2.09A2.002 2.002 0 0 0 16 4.5c0-1.1-.9-2-2-2s-2 .9-2 2c0 .19.03.37.08.54L8.5 7.13v-3.2c.86-.22 1.5-1 1.5-1.93 0-1.1-.9-2-2-2S6 .9 6 2c0 .93.64 1.71 1.5 1.93v3.2l-.88-.52-2.7-1.57c.05-.17.08-.35.08-.54 0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2c.56 0 1.06-.23 1.42-.59l2.13 1.24 3.84 2.24 2.7 1.57c-.06.17-.09.35-.09.54 0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2z',
        ],
        'send-to-map': [
          'M6 9H2c-.55 0-1 .45-1 1s.45 1 1 1h1.59L.3 14.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71L5 12.41V14c0 .55.45 1 1 1s1-.45 1-1v-4c0-.55-.45-1-1-1zm9.55-5.83l-4.49-3A.975.975 0 0 0 9.99.15L5.53 2.82 1.56.17A1.003 1.003 0 0 0 0 1v6h2V2.87l2.94 1.96.06.03V7h1V4.86s.01 0 .01-.01L10 2.47v8.67s-.01 0-.01.01l-.99.58v2.33l1.47-.88 3.97 2.65A1.003 1.003 0 0 0 16 15V4c0-.35-.18-.65-.45-.83zM14 13.13l-2.94-1.96c-.02-.01-.04-.02-.05-.03v-8.6l3 2v8.59z',
        ],
        'series-add': [
          'M10.68 7.9c.44.54 1.07.92 1.79 1.05l-2.76 2.76c-.18.18-.43.29-.71.29s-.53-.11-.71-.3L5 8.41l-3 3V13h13c.55 0 1 .45 1 1s-.45 1-1 1H1c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1s1 .45 1 1v4.59l2.29-2.3C4.47 6.11 4.72 6 5 6s.53.11.71.29L9 9.59l1.68-1.69zM15 3c.55 0 1 .45 1 1s-.45 1-1 1h-1v1c0 .55-.45 1-1 1s-1-.45-1-1V5h-1c-.55 0-1-.45-1-1s.45-1 1-1h1V2c0-.55.45-1 1-1s1 .45 1 1v1h1z',
        ],
        'series-configuration': [
          'M9.94 9.64c.65.23 1.34.36 2.06.36.14 0 .29-.01.43-.01L9.7 12.71c-.18.18-.43.29-.71.29-.28 0-.53-.11-.71-.3L5 9.41l-3 3V14h12.99c.55 0 1 .45 1 1s-.45 1-1 1H1c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1s1 .45 1 1v4.59l2.29-2.3C4.47 7.11 4.72 7 5 7c.28 0 .53.11.71.29L9 10.59l.94-.95zm4.73-6.44h.92c.22 0 .4.18.4.4v.8c0 .22-.18.4-.4.4h-.93c-.06.2-.14.38-.24.55l.66.65c.15.15.15.4 0 .55l-.54.55c-.15.15-.4.15-.55 0l-.65-.65c-.17.1-.36.18-.55.24v.91c0 .22-.18.4-.4.4h-.8c-.22 0-.4-.18-.4-.4v-.93c-.18-.06-.36-.13-.52-.22l-.68.68c-.15.16-.41.16-.57 0l-.56-.56a.417.417 0 0 1 0-.57l.68-.68c-.08-.16-.16-.33-.22-.52h-.93c-.22 0-.4-.18-.4-.4v-.8c0-.22.18-.4.4-.4h.93c.06-.2.14-.38.24-.55l-.65-.64a.392.392 0 0 1 0-.55l.54-.55a.38.38 0 0 1 .54 0l.65.65c.18-.1.36-.18.55-.24V.4c0-.22.18-.4.4-.4h.8c.22 0 .4.18.4.4v.93c.18.06.35.14.52.22l.68-.68c.15-.16.41-.16.57 0l.57.57c.15.16.15.41 0 .57l-.68.68c.09.16.16.33.22.51zm-4.18.8c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5c-.82 0-1.5.67-1.5 1.5z',
        ],
        'series-derived': [
          'M10.66 7.92c.44.54 1.07.91 1.8 1.03L9.71 11.7c-.18.19-.43.3-.71.3s-.53-.11-.71-.3L5 8.41l-3 3V13h13c.55 0 1 .45 1 1s-.45 1-1 1H1c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1s1 .45 1 1v4.59l2.29-2.3C4.47 6.11 4.72 6 5 6s.53.11.71.29L9 9.59l1.66-1.67zM12.3 5.3l.3-.3H8c-.6 0-1-.4-1-1s.4-1 1-1h4.6l-.3-.3c-.2-.2-.3-.4-.3-.7 0-.6.5-1 1-1 .3 0 .5.1.7.3l2 2c.2.2.3.4.3.7s-.1.5-.3.7l-2 2c-.2.2-.4.3-.7.3-.6 0-1-.4-1-1 0-.3.1-.5.3-.7z',
        ],
        'series-filtered': [
          'M9.29 9.3c.3.62.8 1.12 1.42 1.41l-1 1c-.18.18-.43.29-.71.29s-.53-.11-.71-.3L5 8.41l-3 3V13h13c.55 0 1 .45 1 1s-.45 1-1 1H1c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1s1 .45 1 1v4.59l2.29-2.3C4.47 6.11 4.72 6 5 6s.53.11.71.29L9 9.59l.29-.29zM15.48 1c.31 0 .52.26.52.57 0 .16-.06.3-.17.41l-2.86 2.73v2.63c0 .16-.06.3-.17.41l-.82 1.1c-.1.1-.25.17-.41.17-.31 0-.57-.26-.57-.57V4.71L8.17 1.98A.566.566 0 0 1 8 1.57c0-.31.26-.57.57-.57h6.91z',
        ],
        'series-search': [
          'M9.6 8.94a4.937 4.937 0 0 0 1.82.01c.1-.01.22-.04.39-.08l.23-.07c.04-.01.08-.02.11-.04l.22.22-2.7 2.72c-.18.19-.43.3-.71.3s-.53-.11-.71-.3L4.98 8.41l-2.99 3V13h12.94c.55 0 1 .45 1 1s-.45 1-1 1H1c-.55 0-1-.45-1-1V3.99c0-.55.45-1 1-1s1 .45 1 1v4.59l2.28-2.3c.17-.18.42-.29.7-.29s.53.11.7.29l3.28 3.3.64-.64zm6.22-.41c.1.12.17.27.18.44 0 .34-.27.61-.61.61a.57.57 0 0 1-.43-.18l-2.24-2.25c-.13.08-.26.16-.4.23-.02.01-.05.02-.07.03-.14.06-.27.12-.42.17h-.01c-.14.05-.29.08-.44.11-.04.01-.08.02-.11.02-.15.02-.3.04-.46.04-1.85 0-3.35-1.51-3.35-3.37S8.96 1.01 10.81 1c1.85 0 3.35 1.51 3.35 3.37 0 .16-.02.31-.04.47-.01.04-.01.07-.02.11-.02.15-.05.29-.1.44v.01c-.05.15-.11.28-.17.42-.01.02-.02.05-.03.07-.07.14-.14.27-.23.4l2.25 2.24zm-5.01-1.94c1.22 0 2.21-.99 2.21-2.22 0-1.23-.99-2.22-2.21-2.22S8.6 3.14 8.6 4.37c0 1.22.99 2.22 2.21 2.22z',
        ],
        settings: [
          'M3 1c0-.55-.45-1-1-1S1 .45 1 1v3h2V1zm0 4H1c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h2c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm12-4c0-.55-.45-1-1-1s-1 .45-1 1v2h2V1zM9 1c0-.55-.45-1-1-1S7 .45 7 1v6h2V1zM1 15c0 .55.45 1 1 1s1-.45 1-1v-5H1v5zM15 4h-2c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h2c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zm-2 11c0 .55.45 1 1 1s1-.45 1-1V9h-2v6zM9 8H7c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h2c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-2 7c0 .55.45 1 1 1s1-.45 1-1v-2H7v2z',
        ],
        share: [
          'M10.99 13.99h-9v-9h4.76l2-2H.99c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1h11c.55 0 1-.45 1-1V7.24l-2 2v4.75zm4-14h-5c-.55 0-1 .45-1 1s.45 1 1 1h2.59L7.29 7.28a1 1 0 0 0-.3.71 1.003 1.003 0 0 0 1.71.71l5.29-5.29V6c0 .55.45 1 1 1s1-.45 1-1V1c0-.56-.45-1.01-1-1.01z',
        ],
        shield: [
          'M8 16c4.667-3.048 7-7.238 7-12.571-1.556 0-3.889-1.143-7-3.429-3.111 2.286-5.444 3.429-7 3.429C1 8.762 3.333 12.952 8 16zM8 2.121c2.005 1.388 3.715 2.304 5.186 2.735-.342 3.702-2.05 6.683-5.186 9.038V2.121z',
        ],
        shop: [
          'M3 2h10c.55 0 1-.45 1-1s-.45-1-1-1H3c-.55 0-1 .45-1 1s.45 1 1 1zm9 11H4v-3H2v5c0 .55.45 1 1 1h10c.55 0 1-.45 1-1v-5h-2v3zm4-6l-1.01-3.17C14.9 3.36 14.49 3 14 3H2c-.49 0-.9.36-.98.83L.01 7H0c0 1.1.9 2 2 2s2-.9 2-2c0 1.1.9 2 2 2s2-.9 2-2c0 1.1.9 2 2 2s2-.9 2-2c0 1.1.9 2 2 2s2-.9 2-2z',
        ],
        'shopping-cart': [
          'M14 10H7.72l-.33-1H13c.39 0 .72-.23.89-.56h.01l2-4h-.01c.06-.13.11-.28.11-.44 0-.55-.45-1-1-1H5.39l-.44-1.32h-.01C4.8 1.29 4.44 1 4 1H1c-.55 0-1 .45-1 1s.45 1 1 1h2.28l2.33 7H4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2h6c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2zM6.05 5h7.33l-1 2H6.72l-.67-2z',
        ],
        'sim-card': [
          'M13.71 4.29l-4-4A.997.997 0 0 0 9 0H3c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V5c0-.28-.11-.53-.29-.71zM7 6h2v2H7V6zM4 6h2v2H4V6zm2 8H4v-2h2v2zm3 0H7v-2h2v2zm3 0h-2v-2h2v2zm0-3H4V9h8v2zm0-3h-2V6h2v2z',
        ],
        slash: [
          'M10 2a.99.99 0 0 0-.96.73l-2.99 9.96A1.003 1.003 0 0 0 7 14c.46 0 .85-.31.96-.73l2.99-9.96A1.003 1.003 0 0 0 10 2z',
        ],
        'small-cross': [
          'M9.41 8l2.29-2.29c.19-.18.3-.43.3-.71a1.003 1.003 0 0 0-1.71-.71L8 6.59l-2.29-2.3a1.003 1.003 0 0 0-1.42 1.42L6.59 8 4.3 10.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71L8 9.41l2.29 2.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71L9.41 8z',
        ],
        'small-minus': ['M11 7H5c-.55 0-1 .45-1 1s.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1z'],
        'small-plus': [
          'M11 7H9V5c0-.55-.45-1-1-1s-1 .45-1 1v2H5c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1V9h2c.55 0 1-.45 1-1s-.45-1-1-1z',
        ],
        'small-tick': [
          'M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 1.003 0 0 0-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0 0 12 5z',
        ],
        snowflake: [
          'M13.364 9l.879.879a1 1 0 1 1-1.415 1.414l-2.12-2.121A1.003 1.003 0 0 1 10.568 9H9v1.604c.042.03.083.065.121.103l2.122 2.121a1 1 0 0 1-1.415 1.415L9 13.414V15a1 1 0 0 1-2 0v-1.636l-.879.879a1 1 0 1 1-1.414-1.415l2.121-2.12c.054-.054.111-.1.172-.139V9H5.38c-.038.06-.084.118-.137.172l-2.122 2.12A1 1 0 1 1 1.707 9.88L2.586 9H1a1 1 0 1 1 0-2h1.536l-.829-.828a1 1 0 0 1 1.414-1.415L5.243 6.88c.038.038.072.079.103.121H7V5.38a1.003 1.003 0 0 1-.172-.137L4.708 3.12A1 1 0 0 1 6.12 1.707L7 2.586V1a1 1 0 1 1 2 0v1.536l.828-.829a1 1 0 0 1 1.415 1.414L9.12 5.243A1.007 1.007 0 0 1 9 5.346V7h1.604c.03-.042.065-.083.103-.121l2.121-2.122a1 1 0 0 1 1.415 1.415L13.414 7H15a1 1 0 0 1 0 2h-1.636z',
        ],
        'social-media': [
          'M9.5 4c.4 0 .8-.1 1.1-.3C12 4.5 12.9 6 13 7.6c0 .5.5.9 1 .9.6 0 1-.4 1-1v-.2c-.2-2.4-1.5-4.4-3.5-5.5-.1-1-.9-1.8-2-1.8s-2 .9-2 2 .9 2 2 2zM4 8.5c0-.7-.4-1.3-.9-1.7.3-1.4 1.2-2.6 2.5-3.3.3-.1.6-.4.6-.9s-.4-1-1-1c-.2 0-.3 0-.5.1-1.9 1-3.2 2.8-3.6 5C.4 7.1 0 7.8 0 8.5c0 1.1.9 2 2 2s2-.9 2-2zm8.8 1.2c-1.1 0-2 .9-2 2v.3c-.8.6-1.8.9-2.8.9-1.2 0-2.3-.4-3.2-1.1-.2-.2-.4-.3-.7-.3-.6 0-1 .4-1 1 0 .3.1.6.3.8C4.6 14.4 6.2 15 8 15c1.5 0 3-.5 4.1-1.3.2.1.5.1.7.1 1.1 0 2-.9 2-2s-.9-2.1-2-2.1z',
        ],
        sort: [
          'M5 12c-.28 0-.53.11-.71.29l-.29.3V9c0-.55-.45-1-1-1s-1 .45-1 1v3.59l-.29-.29A.965.965 0 0 0 1 12a1.003 1.003 0 0 0-.71 1.71l2 2c.18.18.43.29.71.29s.53-.11.71-.29l2-2A1.003 1.003 0 0 0 5 12zm3-9h7c.55 0 1-.45 1-1s-.45-1-1-1H8c-.55 0-1 .45-1 1s.45 1 1 1zm7 2H8c-.55 0-1 .45-1 1s.45 1 1 1h7c.55 0 1-.45 1-1s-.45-1-1-1zm0 8H8c-.55 0-1 .45-1 1s.45 1 1 1h7c.55 0 1-.45 1-1s-.45-1-1-1zm0-4H8c-.55 0-1 .45-1 1s.45 1 1 1h7c.55 0 1-.45 1-1s-.45-1-1-1z',
        ],
        'sort-alphabetical': [
          'M6 12c-.28 0-.53.11-.71.29l-.29.3V9c0-.55-.45-1-1-1s-1 .45-1 1v3.59l-.29-.29A.965.965 0 0 0 2 12a1.003 1.003 0 0 0-.71 1.71l2 2c.19.18.44.29.71.29.28 0 .53-.11.71-.29l2-2c.18-.18.29-.43.29-.71a.99.99 0 0 0-1-1zm7.93-.95v-1.04H9.25v1.11h2.94L9 14.96V16h5.02v-1.11h-3.27l3.18-3.84zm-1.42-4.84l.62 1.78H15L11.94.01H10.1L7 7.99h1.81l.64-1.78h3.06zm-1.52-4.24h.02l1.03 2.93H9.92l1.07-2.93z',
        ],
        'sort-alphabetical-desc': [
          'M5.99 11.99c-.28 0-.53.11-.71.29l-.29.29V8.99c0-.55-.45-1-1-1s-1 .45-1 1v3.59l-.29-.29a1.003 1.003 0 0 0-1.42 1.42l2 2c.18.18.43.29.71.29.28 0 .53-.11.71-.29l2-2c.18-.18.29-.43.29-.71 0-.56-.45-1.01-1-1.01zM12.7 10h-1.38L9 15.99h1.36l.48-1.33h2.3l.46 1.33H15L12.7 10zm-1.51 3.67l.8-2.2h.02l.77 2.2h-1.59zm3.8-7.17h-4.57l4.45-5.12V0H8.34v1.48h4.1L7.99 6.59v1.39h7V6.5z',
        ],
        'sort-asc': [
          'M8 7h3c.55 0 1-.45 1-1s-.45-1-1-1H8c-.55 0-1 .45-1 1s.45 1 1 1zm0-4h1c.55 0 1-.45 1-1s-.45-1-1-1H8c-.55 0-1 .45-1 1s.45 1 1 1zm0 8h5c.55 0 1-.45 1-1s-.45-1-1-1H8c-.55 0-1 .45-1 1s.45 1 1 1zm-3 1c-.28 0-.53.11-.71.29l-.29.3V9c0-.55-.45-1-1-1s-1 .45-1 1v3.59l-.29-.29A.965.965 0 0 0 1 12a1.003 1.003 0 0 0-.71 1.71l2 2c.18.18.43.29.71.29s.53-.11.71-.29l2-2A1.003 1.003 0 0 0 5 12zm10 1H8c-.55 0-1 .45-1 1s.45 1 1 1h7c.55 0 1-.45 1-1s-.45-1-1-1z',
        ],
        'sort-desc': [
          'M5 12c-.28 0-.53.11-.71.29l-.29.3V9c0-.55-.45-1-1-1s-1 .45-1 1v3.59l-.29-.29A.965.965 0 0 0 1 12a1.003 1.003 0 0 0-.71 1.71l2 2c.18.18.43.29.71.29s.53-.11.71-.29l2-2A1.003 1.003 0 0 0 5 12zm4 1H8c-.55 0-1 .45-1 1s.45 1 1 1h1c.55 0 1-.45 1-1s-.45-1-1-1zm4-8H8c-.55 0-1 .45-1 1s.45 1 1 1h5c.55 0 1-.45 1-1s-.45-1-1-1zm-2 4H8c-.55 0-1 .45-1 1s.45 1 1 1h3c.55 0 1-.45 1-1s-.45-1-1-1zm4-8H8c-.55 0-1 .45-1 1s.45 1 1 1h7c.55 0 1-.45 1-1s-.45-1-1-1z',
        ],
        'sort-numerical': [
          'M6 11.99c-.28 0-.53.11-.71.29l-.29.3V8.99c0-.55-.45-1-1-1s-1 .45-1 1v3.59l-.29-.29c-.18-.18-.43-.3-.71-.3a1.003 1.003 0 0 0-.71 1.71l2 2c.18.18.43.29.71.29.28 0 .53-.11.71-.29l2-2A1.003 1.003 0 0 0 6 11.99zm7.91-.08c-.06-.36-.17-.68-.33-.96-.16-.28-.37-.51-.64-.69-.27-.17-.61-.26-1.03-.26-.28 0-.54.06-.78.17-.23.11-.43.26-.6.45-.17.19-.3.41-.39.67a2.492 2.492 0 0 0-.04 1.52 1.623 1.623 0 0 0 .89 1.03c.22.11.45.16.68.16.26 0 .5-.05.7-.15s.38-.26.53-.5l.02.02c-.01.16-.03.34-.07.54-.03.2-.09.4-.17.57-.08.18-.18.33-.31.45s-.29.19-.5.19a.63.63 0 0 1-.48-.21c-.13-.14-.21-.31-.25-.5H10.1c.03.25.1.48.19.68.1.2.22.37.38.5.16.14.33.24.54.31s.42.1.65.1c.39 0 .72-.09.99-.27.27-.18.49-.41.66-.7.17-.29.29-.61.37-.97.08-.36.12-.72.12-1.07 0-.36-.03-.72-.09-1.08zm-1.14.54c-.04.13-.09.24-.16.34a.78.78 0 0 1-.27.24c-.11.06-.24.09-.39.09a.75.75 0 0 1-.37-.09.777.777 0 0 1-.26-.25c-.07-.1-.12-.22-.15-.35-.03-.13-.05-.26-.05-.4 0-.13.02-.26.05-.39.04-.13.09-.24.16-.34.07-.1.16-.18.26-.24s.22-.09.35-.09c.14 0 .26.03.37.09.11.06.2.14.28.24a1.32 1.32 0 0 1 .23.74c0 .15-.02.28-.05.41zm-1.56-4.47H13V0h-1.42c-.05.3-.16.56-.31.76-.16.21-.35.37-.58.5-.23.13-.49.21-.78.26-.3.05-.6.07-.91.06V2.8h2.21v5.18z',
        ],
        'sort-numerical-desc': [
          'M6 11.99c-.28 0-.53.11-.71.29l-.29.3V8.99c0-.55-.45-1-1-1s-1 .45-1 1v3.59l-.29-.29a.982.982 0 0 0-.71-.3 1.003 1.003 0 0 0-.71 1.71l2 2c.18.18.43.29.71.29s.53-.11.71-.29l2-2A1.003 1.003 0 0 0 6 11.99zm7.86-9.45c-.09-.48-.26-.9-.5-1.28S12.8.58 12.4.35C12 .12 11.49 0 10.86 0c-.43 0-.82.07-1.17.22s-.65.35-.9.6-.44.55-.58.89c-.14.34-.2.71-.2 1.11 0 .31.05.61.15.91.1.3.26.57.48.8.23.24.52.43.85.58.33.14.68.21 1.03.21.4 0 .75-.07 1.05-.2.3-.13.57-.35.79-.66l.02.02c-.02.21-.05.45-.1.73-.05.27-.13.53-.25.76-.12.24-.27.44-.47.6-.19.16-.44.25-.75.25a.98.98 0 0 1-.72-.29c-.19-.18-.31-.4-.37-.66H8.15c.05.34.14.64.29.9.15.26.34.49.57.67.23.18.5.32.8.41.31.1.63.15.98.15.58 0 1.08-.12 1.48-.36.4-.24.73-.55.99-.93.26-.39.44-.82.56-1.29.12-.48.18-.96.18-1.44s-.05-.96-.14-1.44zm-1.71.72c-.05.17-.14.32-.24.46-.11.13-.24.24-.41.31-.16.08-.36.12-.58.12-.21 0-.39-.04-.55-.13-.16-.08-.29-.19-.39-.33-.12-.14-.19-.29-.24-.46-.05-.17-.08-.35-.08-.54 0-.18.03-.35.08-.52.06-.16.14-.31.25-.44.11-.13.24-.24.4-.32.16-.08.33-.12.52-.12.21 0 .4.04.56.12.16.08.3.19.41.32.11.14.2.29.26.46.06.17.09.35.09.52 0 .2-.03.38-.08.55zm-.46 7.31c-.12.15-.26.28-.44.37-.17.09-.37.16-.58.2-.22.04-.44.05-.67.05v.92h1.65v3.88h1.33V10h-1.06c-.03.23-.11.42-.23.57z',
        ],
        'split-columns': [
          'M12 10a1.003 1.003 0 0 0 1.71.71l2-2c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71l-2-2a1.003 1.003 0 0 0-1.42 1.42l.3.29H9V2h3v1.71c.31-.13.64-.21 1-.21s.69.08 1 .21V1c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v2.71c.31-.13.64-.21 1-.21s.69.08 1 .21V2h3v5H3.41l.29-.29c.19-.18.3-.43.3-.71a1.003 1.003 0 0 0-1.71-.71l-2 2C.11 7.47 0 7.72 0 8c0 .28.11.53.29.71l2 2a1.003 1.003 0 0 0 1.42-1.42L3.41 9H7v5H4v-1.71c-.31.13-.64.21-1 .21s-.69-.08-1-.21V15c0 .55.45 1 1 1h10c.55 0 1-.45 1-1v-2.71c-.31.13-.64.21-1 .21s-.69-.08-1-.21V14H9V9h3.59l-.29.29c-.19.18-.3.43-.3.71z',
        ],
        square: [
          'M15 0H1C.45 0 0 .45 0 1v14c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-1 14H2V2h12v12z',
        ],
        'stacked-chart': [
          'M10 2c0-.55-.45-1-1-1H8c-.55 0-1 .45-1 1v3h3V2zm3 10h1c.55 0 1-.45 1-1V8h-3v3c0 .55.45 1 1 1zm2-7c0-.55-.45-1-1-1h-1c-.55 0-1 .45-1 1v2h3V5zm-5 1H7v3h3V6zM5 7c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v1h3V7zm3 5h1c.55 0 1-.45 1-1v-1H7v1c0 .55.45 1 1 1zm7 1H2c-.55 0-1 .45-1 1s.45 1 1 1h13c.55 0 1-.45 1-1s-.45-1-1-1zM3 12h1c.55 0 1-.45 1-1V9H2v2c0 .55.45 1 1 1z',
        ],
        star: ['M8 0l2.5 5.3 5.5.8-4 4.1.9 5.8L8 13.3 3.1 16l.9-5.8-4-4.1 5.5-.8z'],
        'star-empty': [
          'M16 6.11l-5.53-.84L8 0 5.53 5.27 0 6.11l4 4.1L3.06 16 8 13.27 12.94 16 12 10.21l4-4.1zM4.91 13.2l.59-3.62L3 7.02l3.45-.53L8 3.2l1.55 3.29 3.45.53-2.5 2.56.59 3.62L8 11.49 4.91 13.2z',
        ],
        'step-backward': [
          'M12 3c-.24 0-.44.09-.62.23l-.01-.01L7 6.72V4c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1V9.28l4.38 3.5.01-.01c.17.14.37.23.61.23.55 0 1-.45 1-1V4c0-.55-.45-1-1-1z',
        ],
        'step-chart': [
          'M15 12H2v-2h3c.55 0 1-.45 1-1V7h2v1c0 .55.45 1 1 1h4c.55 0 1-.45 1-1V5h1c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1v3h-2V6c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v2H2V3c0-.55-.45-1-1-1s-1 .45-1 1v10c0 .55.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1z',
        ],
        'step-forward': [
          'M12 3h-1c-.55 0-1 .45-1 1v2.72l-4.38-3.5v.01A.987.987 0 0 0 5 3c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1 .24 0 .44-.09.62-.23l.01.01L10 9.28V12c0 .55.45 1 1 1h1c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1z',
        ],
        stop: ['M12 3H4c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h8c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1z'],
        strikethrough: [
          'M14 7H8.65c-.38-.09-.73-.18-1.04-.26-.31-.08-.49-.13-.54-.14-.43-.11-.79-.29-1.05-.52-.27-.23-.4-.55-.4-.95 0-.29.07-.53.21-.72s.32-.34.54-.46c.22-.11.46-.19.72-.24.26-.05.52-.07.77-.07.74 0 1.36.15 1.84.46.32.2.55.5.68.9h2.22c-.06-.33-.17-.64-.32-.92-.25-.45-.59-.84-1.02-1.15-.43-.31-.93-.54-1.49-.7S8.59 2 7.95 2c-.55 0-1.1.07-1.63.2-.54.13-1.02.34-1.45.62-.42.28-.76.63-1.02 1.05-.26.42-.39.92-.39 1.5 0 .3.04.59.13.88.08.26.21.51.39.75H2c-.55 0-1 .45-1 1s.45 1 1 1h7.13c.25.07.49.14.71.22.25.09.48.23.7.44.21.21.32.53.32.97 0 .21-.05.43-.14.63-.09.21-.24.39-.45.55-.21.16-.48.29-.81.39-.33.1-.73.15-1.2.15-.44 0-.84-.05-1.21-.14-.37-.09-.7-.24-.99-.43-.29-.2-.51-.45-.67-.76-.01 0-.01-.01-.02-.02H3.14a3.68 3.68 0 0 0 1.39 2.03c.46.34 1 .58 1.62.74.61.15 1.27.23 1.97.23.61 0 1.2-.07 1.79-.2.58-.13 1.11-.34 1.56-.63.46-.29.83-.66 1.11-1.11.28-.45.42-1 .42-1.64 0-.3-.05-.6-.15-.9-.05-.19-.13-.36-.22-.52H14c.55 0 1-.45 1-1s-.45-1-1-1z',
        ],
        style: [
          'M14 14H2V2h8.76l2-2H1C.45 0 0 .45 0 1v14c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V6.24l-2 2V14zm1.4-14L9.7 5.7l2.1 2.1L16 3.6V0h-.6zM4 11.92c2.33.15 4.42.15 6.15-1.5.82-.83.82-2.25 0-3.08-.45-.38-.98-.6-1.5-.6-.53 0-1.05.22-1.43.6-.82.91-1.27 3.38-3.22 4.58z',
        ],
        'swap-horizontal': [
          'M0 7.02L.05 7H0v.02zm2-2.03h9.57l-1.29 1.29A1.003 1.003 0 0 0 11.7 7.7l2.99-3c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71l-2.99-3a1.07 1.07 0 0 0-.71-.28 1.003 1.003 0 0 0-.71 1.71L11.57 3H2c-.55 0-1 .45-1 1a1 1 0 0 0 1 .99zM15.96 9H16v-.02l-.04.02zM14 11.01H4.43l1.29-1.29A1.003 1.003 0 0 0 4.3 8.3l-2.99 3a.99.99 0 0 0-.29.7c0 .28.11.53.29.71l2.99 3a1.003 1.003 0 0 0 1.42-1.42L4.43 13H14c.55 0 1-.45 1-1s-.45-.99-1-.99z',
        ],
        'swap-vertical': [
          'M9 0h-.02L9 .04V0zM7 16h.02L7 15.95V16zM4.7 1.31c-.18-.18-.43-.29-.7-.29s-.53.11-.71.29l-3 2.99a1.003 1.003 0 0 0 1.42 1.42L3 4.43V14c0 .55.45 1 1 1s1-.45 1-1V4.43l1.29 1.29c.18.18.43.29.7.29A1.003 1.003 0 0 0 7.7 4.3l-3-2.99zM15 9.99c-.28 0-.53.11-.71.29L13 11.57V2c0-.55-.45-1-1-1s-1 .45-1 1v9.57l-1.29-1.29a.99.99 0 0 0-.7-.29 1.003 1.003 0 0 0-.71 1.71l3 2.99c.18.18.43.29.71.29.28 0 .53-.11.71-.29l3-2.99c.18-.18.29-.43.29-.71-.01-.55-.46-1-1.01-1z',
        ],
        'symbol-circle': ['M8 3.01a5 5 0 1 0 0 10 5 5 0 1 0 0-10z'],
        'symbol-cross': [
          'M12 6.01h-2v-2c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v2H4c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h2v2c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-2h2c.55 0 1-.45 1-1v-2c0-.56-.45-1-1-1z',
        ],
        'symbol-diamond': [
          'M12 8.01c0-.19-.07-.36-.16-.51l.01-.01-3-5-.01.01c-.17-.29-.48-.49-.84-.49s-.67.2-.84.49l-.02-.01-3 5 .02.01c-.09.15-.16.32-.16.51s.07.36.16.51h-.02l3 5 .01-.01c.18.29.49.5.85.5s.67-.2.84-.49l.01.01 3-5-.01-.01c.09-.16.16-.32.16-.51z',
        ],
        'symbol-square': [
          'M12 3.01H4c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-8c0-.56-.45-1-1-1z',
        ],
        'symbol-triangle-down': [
          'M13 4.01c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 .16.05.31.11.44H3.1l4 8h.01c.16.33.49.56.89.56s.72-.23.89-.56h.01l4-8h-.01c.06-.14.11-.28.11-.44z',
        ],
        'symbol-triangle-up': [
          'M12.89 11.56l-3.99-8h-.01c-.17-.32-.5-.55-.89-.55s-.72.23-.89.55H7.1l-4 8h.01c-.06.14-.11.29-.11.45 0 .55.45 1 1 1h8c.55 0 1-.45 1-1 0-.16-.05-.31-.11-.45z',
        ],
        tag: [
          'M1 3a2 2 0 0 1 2-2h4.584a2 2 0 0 1 1.414.586l5.413 5.412a2 2 0 0 1 0 2.829L9.827 14.41a2 2 0 0 1-2.829 0L1.586 8.998A2 2 0 0 1 1 7.584V3zm3.487-.007a1.494 1.494 0 1 0 0 2.988 1.494 1.494 0 0 0 0-2.988z',
        ],
        'take-action': [
          'M9 11a1.003 1.003 0 0 0 1.71.71l4-4a1.003 1.003 0 0 0-1.42-1.42l-4 4c-.18.18-.29.43-.29.71zM4 6c.28 0 .53-.11.71-.29l4-4A1.003 1.003 0 0 0 7.29.29l-4 4A1.003 1.003 0 0 0 4 6zm4 4l5-5-.79-.79.5-.5a1.003 1.003 0 0 0-1.42-1.42l-.5.5L10 2 5 7l.79.79-5.5 5.5a1.003 1.003 0 0 0 1.42 1.42l5.5-5.5L8 10zm7 4H7c-.55 0-1 .45-1 1s.45 1 1 1h8c.55 0 1-.45 1-1s-.45-1-1-1z',
        ],
        taxi: [
          'M15.12 6.63h-.38L15 7c-.01.3-.01.64 0 .98V8c0 .07-.03.13-.04.19h.02L14 13.1v.9c0 .55-.45 1-1 1s-1-.45-1-1v-1H4v1c0 .55-.45 1-1 1s-1-.45-1-1v-.9l-.98-4.9h.02C1.03 8.13 1 8.07 1 8H.99c0-.33 0-.67.01-1l.26-.37H.88C.4 6.63 0 6.21 0 5.69s.4-.94.88-.94h1.05l.77-2.11c.19-.53.76-1.08 1.26-1.24 0 0 .68-.2 2.05-.32C6.01 1.05 6 1.03 6 1c0-.55.45-1 1-1h2c.55 0 1 .45 1 1 0 .03-.01.05-.02.08 1.37.12 2.05.32 2.05.32.51.15 1.08.71 1.27 1.24l.76 2.12h1.05c.49 0 .89.42.89.93 0 .52-.4.94-.88.94zM11 10h2V8h-2v2zm-8 0h2V8H3v2zm10-5l-.73-1.63C12.21 3.19 12.18 3 12 3H4c-.18 0-.21.19-.27.37L3 5c-.06.18-.18 1 0 1h10c.18 0 .06-.82 0-1z',
        ],
        'text-highlight': [
          'M9 10H2V6h7V4H1c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h8v-2zm4 3h-1V3h1c.55 0 1-.45 1-1s-.45-1-1-1h-1c-.37 0-.7.11-1 .28-.3-.17-.63-.28-1-.28H9c-.55 0-1 .45-1 1s.45 1 1 1h1v10H9c-.55 0-1 .45-1 1s.45 1 1 1h1c.37 0 .7-.11 1-.28.3.17.63.28 1 .28h1c.55 0 1-.45 1-1s-.45-1-1-1zm2-9h-2v2h1v4h-1v2h2c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1z',
        ],
        th: [
          'M15 1H1c-.6 0-1 .5-1 1v12c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V2c0-.5-.4-1-1-1zM6 13H2v-2h4v2zm0-3H2V8h4v2zm0-3H2V5h4v2zm8 6H7v-2h7v2zm0-3H7V8h7v2zm0-3H7V5h7v2z',
        ],
        'th-derived': [
          'M5.6 10l-.3.3c-.2.2-.3.4-.3.7 0 .6.4 1 1 1 .3 0 .5-.1.7-.3l2-2c.2-.2.3-.4.3-.7s-.1-.5-.3-.7l-2-2C6.5 6.1 6.3 6 6 6c-.5 0-1 .4-1 1 0 .3.1.5.3.7l.3.3H1c-.6 0-1 .4-1 1s.4 1 1 1h4.6zM15 1H2c-.5 0-1 .5-1 1v5h2V5h11v2H8.8l.6.6c.1.1.2.3.3.4H14v2H9.7c-.1.1-.2.3-.3.4l-.6.6H14v2H3v-2H1v3c0 .5.5 1 1 1h13c.6 0 1-.5 1-1V2c0-.5-.4-1-1-1z',
        ],
        'th-list': [
          'M15 1H1c-.6 0-1 .5-1 1v12c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V2c0-.5-.4-1-1-1zm-1 12H2v-2h12v2zm0-3H2V8h12v2zm0-3H2V5h12v2z',
        ],
        'thumbs-down': [
          'M2 2H0v7h2c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm13.99 4.38c.08-.58-.44-1.02-1.15-1.05-.25-.01-.52-.03-.81-.05.02 0 .05-.01.07-.01.7-.1 1.34-.49 1.41-1.07.06-.58-.46-.97-1.17-1.04-.25-.02-.52-.04-.79-.06.47-.15.84-.42.87-.93.04-.58-.79-1.03-1.5-1.09-.27-.02-.51-.04-.73-.05h-.09c-.23-.02-.43-.02-.62-.03C8.35.95 5.66 1.47 4 2.51v6c2.14 1.29 4.76 3.59 4.21 5.51-.18.59.31 1.05.98.98.81-.09 1.37-.91 1.4-1.78.04-1-.15-2.01-.5-2.91-.04-.25.01-.5.37-.53.49-.03 1.11-.06 1.59-.08.26 0 .51-.01.75-.02h.01c.41-.02.8-.05 1.13-.09.7-.09 1.35-.47 1.43-1.05.08-.58-.44-.97-1.15-1.05-.05-.01-.11-.01-.16-.02.17-.01.33-.03.49-.05.72-.08 1.37-.46 1.44-1.04z',
        ],
        'thumbs-up': [
          'M15.99 9.62c-.08-.58-.73-.96-1.43-1.05-.15-.02-.32-.04-.49-.05.06-.01.11-.01.16-.02.71-.08 1.23-.47 1.15-1.05-.08-.58-.73-.96-1.43-1.05-.34-.04-.72-.07-1.13-.09h-.01c-.24-.01-.49-.02-.75-.02-.48-.02-1.11-.04-1.59-.08-.36-.03-.41-.28-.37-.53.35-.9.54-1.91.5-2.91-.04-.85-.6-1.68-1.41-1.77-.67-.07-1.16.39-.99.98C8.76 3.91 6.13 6.2 4 7.49v6c1.66 1.03 4.35 1.56 7.48 1.5.19 0 .39-.01.62-.02h.09c.22-.01.46-.03.73-.05.71-.06 1.54-.51 1.5-1.09-.03-.51-.4-.79-.87-.93.27-.02.54-.04.79-.06.71-.06 1.24-.45 1.17-1.04-.06-.58-.7-.97-1.41-1.07-.02 0-.05-.01-.07-.01.29-.02.57-.03.81-.05.71-.03 1.23-.47 1.15-1.05zM2 7H0v7h2c.55 0 1-.45 1-1V8c0-.56-.45-1-1-1z',
        ],
        tick: [
          'M14 3c-.28 0-.53.11-.71.29L6 10.59l-3.29-3.3a1.003 1.003 0 0 0-1.42 1.42l4 4c.18.18.43.29.71.29s.53-.11.71-.29l8-8A1.003 1.003 0 0 0 14 3z',
        ],
        'tick-circle': [
          'M8 16c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm4-11c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 1.003 0 0 0-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0 0 12 5z',
        ],
        time: [
          'M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm1-6.41V4c0-.55-.45-1-1-1s-1 .45-1 1v4c0 .28.11.53.29.71l2 2a1.003 1.003 0 0 0 1.42-1.42L9 7.59z',
        ],
        'timeline-area-chart': [
          'M15 2.59L9.91 7.68 6.6 5.2l-.01.01C6.42 5.09 6.23 5 6 5c-.24 0-.44.09-.62.23v-.01L3 7.12V11h12V2.59zM15 12H2V3c0-.55-.45-1-1-1s-1 .45-1 1v10c0 .55.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1z',
        ],
        'timeline-bar-chart': [
          'M8 12h1c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1H8c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1zm5 0h1c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1h-1c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1zm2 1H2c-.55 0-1 .45-1 1s.45 1 1 1h13c.55 0 1-.45 1-1s-.45-1-1-1zM3 12h1c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1z',
        ],
        'timeline-events': [
          'M8 11H7v1h1v-1zm-4 0H3v1h1v-1zm7-8c.6 0 1-.5 1-1V1c0-.5-.4-1-1-1s-1 .5-1 1v1c0 .5.5 1 1 1zM4 3c.5 0 1-.5 1-1V1c0-.5-.5-1-1-1S3 .5 3 1v1c0 .5.5 1 1 1zm10-2h-1v1c0 1.1-.9 2-2 2s-2-.9-2-2V1H6v1c0 1.1-.9 2-2 2s-2-.9-2-2V1H1c-.5 0-1 .5-1 1v12c0 .5.5 1 1 1h13c.6 0 1-.5 1-1V2c0-.5-.4-1-1-1zM5 13H2v-3h3v3zm0-4H2V6h3v3zm4 4H6v-3h3v3zm0-4H6V6h3v3zm4 4h-3v-3h3v3zm0-4h-3V6h3v3zm-1-2h-1v1h1V7z',
        ],
        'timeline-line-chart': [
          'M15 12H2V9.41l3-3L8.29 9.7c.18.19.43.3.71.3s.53-.11.71-.29l6-6a1.003 1.003 0 0 0-1.42-1.42L9 7.59l-3.29-3.3C5.53 4.11 5.28 4 5 4s-.53.11-.71.29L2 6.59V3c0-.55-.45-1-1-1s-1 .45-1 1v10c0 .55.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1z',
        ],
        tint: [
          'M7.88 1s-4.9 6.28-4.9 8.9c.01 2.82 2.34 5.1 4.99 5.1 2.65-.01 5.03-2.3 5.03-5.13C12.99 7.17 7.88 1 7.88 1z',
        ],
        torch: [
          'M5 15c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H5v1zm7-15H4c-.55 0-1 .45-1 1v1h10V1c0-.55-.45-1-1-1zM5 7v6h6V7l2-4H3l2 4zm2 0c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1s-1-.45-1-1V7z',
        ],
        train: [
          'M13 14h-1l1 2H3l1-2H3c-1.1 0-2-.9-2-2V2C1 .9 4.13 0 8 0s7 .9 7 2v10c0 1.1-.9 2-2 2zm-2-2h2v-2h-2v2zM9 7h4V3H9v4zm-6 5h2v-2H3v2zm0-5h4V3H3v4z',
        ],
        translate: [
          'M15.89 14.56l-3.99-8h-.01c-.17-.33-.5-.56-.89-.56s-.72.23-.89.56h-.01L9 8.76 7.17 7.38l.23-.18C8.37 6.47 9 5.31 9 4V3h1c.55 0 1-.45 1-1s-.45-1-1-1H7c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H1c-.55 0-1 .45-1 1s.45 1 1 1h6v1c0 .66-.32 1.25-.82 1.61l-.68.51-.68-.5C4.32 5.25 4 4.66 4 4H2c0 1.31.63 2.47 1.6 3.2l.23.17L1.4 9.2l.01.01C1.17 9.4 1 9.67 1 10c0 .55.45 1 1 1 .23 0 .42-.09.59-.21l.01.01 2.9-2.17 2.6 1.95-1.99 3.98h.01c-.07.13-.12.28-.12.44 0 .55.45 1 1 1 .39 0 .72-.23.89-.56h.01L8.62 14h4.76l.72 1.45h.01c.17.32.5.55.89.55.55 0 1-.45 1-1 0-.16-.05-.31-.11-.44zM9.62 12L11 9.24 12.38 12H9.62z',
        ],
        trash: [
          'M14.49 3.99h-13c-.28 0-.5.22-.5.5s.22.5.5.5h.5v10c0 .55.45 1 1 1h10c.55 0 1-.45 1-1v-10h.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5zm-8.5 9c0 .55-.45 1-1 1s-1-.45-1-1v-6c0-.55.45-1 1-1s1 .45 1 1v6zm3 0c0 .55-.45 1-1 1s-1-.45-1-1v-6c0-.55.45-1 1-1s1 .45 1 1v6zm3 0c0 .55-.45 1-1 1s-1-.45-1-1v-6c0-.55.45-1 1-1s1 .45 1 1v6zm2-12h-4c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1h-4c-.55 0-1 .45-1 1v1h14v-1c0-.55-.45-1-1-1z',
        ],
        tree: [
          'M9 11.857V16H7v-4.143L1 13l3.885-4.44L3 9l3.07-4.297L5 5l3-5 3 5-1.07-.297L13 9l-1.885-.44L15 13l-6-1.143z',
        ],
        'trending-down': [
          'M15 7c-.55 0-1 .45-1 1v.59l-4.29-4.3A.997.997 0 0 0 9 4c-.16 0-.31.05-.44.11V4.1L5 5.88 1.45 4.11v.01C1.31 4.05 1.16 4 1 4c-.55 0-1 .45-1 1 0 .39.23.72.56.89v.01l4 2v-.01c.13.06.28.11.44.11s.31-.05.44-.11v.01L8.8 6.22 12.59 10H12c-.55 0-1 .45-1 1s.45 1 1 1h3c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1z',
        ],
        'trending-up': [
          'M15 4h-3c-.55 0-1 .45-1 1s.45 1 1 1h.59L8.8 9.78 5.45 8.11v.01C5.31 8.05 5.16 8 5 8s-.31.05-.44.11V8.1l-4 2v.01c-.33.17-.56.5-.56.89 0 .55.45 1 1 1 .16 0 .31-.05.44-.11v.01L5 10.12l3.55 1.78v-.01c.14.06.29.11.45.11.28 0 .53-.11.71-.29L14 7.41V8c0 .55.45 1 1 1s1-.45 1-1V5c0-.55-.45-1-1-1z',
        ],
        'two-columns': [
          'M3.99-.01h-3c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-14c0-.55-.45-1-1-1zm11.71 7.3l-2-2a1.003 1.003 0 0 0-1.71.71v4a1.003 1.003 0 0 0 1.71.71l2-2c.18-.18.29-.43.29-.71s-.11-.53-.29-.71zM9.99-.01h-3c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-14c0-.55-.45-1-1-1z',
        ],
        underline: [
          'M8 14c2.8 0 5-2.2 5-5V3c0-.6-.4-1-1-1s-1 .4-1 1v6c0 1.7-1.3 3-3 3s-3-1.3-3-3V3c0-.6-.4-1-1-1s-1 .4-1 1v6c0 2.8 2.2 5 5 5zM13.5 15h-11c-.3 0-.5.2-.5.5s.2.5.5.5h11c.3 0 .5-.2.5-.5s-.2-.5-.5-.5z',
        ],
        undo: [
          'M4 11c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm7-7H3.41L4.7 2.71c.19-.18.3-.43.3-.71a1.003 1.003 0 0 0-1.71-.71l-3 3C.11 4.47 0 4.72 0 5c0 .28.11.53.29.71l3 3a1.003 1.003 0 0 0 1.42-1.42L3.41 6H11c1.66 0 3 1.34 3 3s-1.34 3-3 3H7v2h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z',
        ],
        'ungroup-objects': [
          'M3.5 5C1.57 5 0 6.57 0 8.5S1.57 12 3.5 12 7 10.43 7 8.5 5.43 5 3.5 5zm9 0C10.57 5 9 6.57 9 8.5s1.57 3.5 3.5 3.5S16 10.43 16 8.5 14.43 5 12.5 5z',
        ],
        'unknown-vehicle': [
          'M10.507 9.75v-3.5c0-.089.023-.171.051-.25h-7.55c-.176 0-.061-.824 0-1l.729-1.63c.06-.177.095-.37.27-.37h4.5V1.01c-.166-.003-.32-.01-.5-.01-2.72 0-4.036.402-4.036.402-.508.155-1.079.711-1.268 1.237L1.94 4.756H.887c-.483 0-.88.423-.88.939s.397.939.88.939h.376L1.008 7c-.034.685 0 1.436 0 2v5c0 .657.384 1 1 1s1-.343 1-1v-1h10v1c0 .657.383 1 1 1s1-.343 1-1v-3.5h-3.75a.75.75 0 0 1-.75-.75zm-5.5.25h-2V8h2v2zm11-4.305zM15.34.826a2.807 2.807 0 0 0-.932-.598c-.386-.16-.868-.241-1.445-.241-.447 0-.851.076-1.213.228-.362.153-.67.364-.926.636s-.456.592-.598.963a3.535 3.535 0 0 0-.218 1.144V3h1.789c.003-.208.023-.405.069-.588.049-.193.124-.362.225-.506.102-.144.232-.259.39-.345.159-.087.348-.13.567-.13.325 0 .58.09.762.272.183.18.275.46.275.839.008.222-.031.407-.116.555a1.654 1.654 0 0 1-.335.408 7.4 7.4 0 0 1-.452.37c-.162.123-.316.27-.463.438a2.556 2.556 0 0 0-.384.611c-.11.239-.177.535-.2.889V6h1.645v-.1c.032-.248.111-.453.237-.618.126-.164.27-.31.433-.438.163-.128.335-.255.518-.383a2.413 2.413 0 0 0 .878-1.117c.102-.255.152-.58.152-.975A2.241 2.241 0 0 0 15.34.826zM12.007 7v2h2V7h-2z',
        ],
        unlock: [
          'M11.99-.01c-2.21 0-4 1.79-4 4v3h-7c-.55 0-1 .45-1 1v7c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-7c0-.55-.45-1-1-1h-3v-3c0-1.1.9-2 2-2s2 .9 2 2v1c0 .55.45 1 1 1s1-.45 1-1v-1c0-2.21-1.79-4-4-4z',
        ],
        unpin: [
          'M9.39 1c-.5.5-.4 1.48.15 2.53L4.38 7.54C2.85 6.5 1.52 6.07 1 6.59l3.5 3.5c-.02.02-1.4 2.8-1.4 2.8l2.8-1.4 3.5 3.5c.53-.53.1-1.86-.95-3.38l4.02-5.16c1.04.55 2.01.65 2.51.14L9.39 1z',
        ],
        unresolve: [
          'M11 3c-.55 0-1.07.09-1.57.26a6.46 6.46 0 0 1 0 9.48c.5.17 1.02.26 1.57.26 2.76 0 5-2.24 5-5s-2.24-5-5-5zM9.78 9.38l.09-.27c.08-.36.13-.73.13-1.11s-.05-.75-.13-1.11l-.09-.27a5.32 5.32 0 0 0-.29-.79l-.12-.21c-.14-.27-.31-.52-.51-.76a.7.7 0 0 0-.08-.1c-.24-.27-.49-.52-.78-.74-.43-.32-.92-.58-1.45-.75l.01-.01c-.1-.03-.2-.05-.3-.08-.12-.03-.23-.07-.36-.09A5.28 5.28 0 0 0 5 3C2.24 3 0 5.24 0 8s2.24 5 5 5c.31 0 .61-.04.9-.09.12-.02.24-.06.36-.09.1-.03.21-.04.3-.08l-.01-.01c.88-.29 1.64-.8 2.22-1.49.03-.03.06-.07.09-.1.19-.24.36-.49.51-.76.04-.07.08-.14.11-.21.13-.25.23-.52.3-.79z',
        ],
        updated: [
          'M8 0a7.95 7.95 0 0 0-6 2.74V1c0-.55-.45-1-1-1S0 .45 0 1v4c0 .55.45 1 1 1h4c.55 0 1-.45 1-1s-.45-1-1-1H3.54C4.64 2.78 6.22 2 8 2c3.31 0 6 2.69 6 6 0 2.61-1.67 4.81-4 5.63-.63.22-1.29.37-2 .37-3.31 0-6-2.69-6-6 0-.55-.45-1-1-1s-1 .45-1 1c0 4.42 3.58 8 8 8 .34 0 .67-.03 1-.07.02 0 .04-.01.06-.01C12.98 15.4 16 12.06 16 8c0-4.42-3.58-8-8-8zm3 5c-.28 0-.53.11-.71.29L7 8.58 5.71 7.29a1.003 1.003 0 0 0-1.42 1.42l2 2c.18.18.43.29.71.29.28 0 .53-.11.71-.29l4-4A1.003 1.003 0 0 0 11 5z',
        ],
        upload: [
          'M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm3 8c-.28 0-.53-.11-.71-.29L9 6.41V12c0 .55-.45 1-1 1s-1-.45-1-1V6.41l-1.29 1.3a1.003 1.003 0 0 1-1.42-1.42l3-3C7.47 3.11 7.72 3 8 3s.53.11.71.29l3 3A1.003 1.003 0 0 1 11 8z',
        ],
        user: [
          'M7.99-.01A7.998 7.998 0 0 0 .03 8.77c.01.09.03.18.04.28.02.15.04.31.07.47.02.11.05.22.08.34.03.13.06.26.1.38.04.12.08.25.12.37.04.11.08.21.12.32a6.583 6.583 0 0 0 .3.65c.07.14.14.27.22.4.04.07.08.13.12.2l.27.42.1.13a7.973 7.973 0 0 0 3.83 2.82c.03.01.05.02.07.03.37.12.75.22 1.14.29l.2.03c.39.06.79.1 1.2.1s.81-.04 1.2-.1l.2-.03c.39-.07.77-.16 1.14-.29.03-.01.05-.02.07-.03a8.037 8.037 0 0 0 3.83-2.82c.03-.04.06-.08.09-.13.1-.14.19-.28.28-.42.04-.07.08-.13.12-.2.08-.13.15-.27.22-.41.04-.08.08-.17.12-.26.06-.13.11-.26.17-.39.04-.1.08-.21.12-.32.04-.12.08-.24.12-.37.04-.13.07-.25.1-.38.03-.11.06-.22.08-.34.03-.16.05-.31.07-.47.01-.09.03-.18.04-.28.02-.26.04-.51.04-.78-.03-4.41-3.61-7.99-8.03-7.99zm0 14.4c-1.98 0-3.75-.9-4.92-2.31.67-.36 1.49-.66 2.14-.95 1.16-.52 1.04-.84 1.08-1.27.01-.06.01-.11.01-.17-.41-.36-.74-.86-.96-1.44v-.01c0-.01-.01-.02-.01-.02-.05-.13-.09-.26-.12-.39-.28-.05-.44-.35-.5-.63-.06-.11-.18-.38-.15-.69.04-.41.2-.59.38-.67v-.06c0-.51.05-1.24.14-1.72.02-.13.05-.26.09-.39.17-.59.53-1.12 1.01-1.49.49-.38 1.19-.59 1.82-.59.62 0 1.32.2 1.82.59.48.37.84.9 1.01 1.49.04.13.07.26.09.4.09.48.14 1.21.14 1.72v.07c.18.08.33.26.37.66.03.31-.1.58-.16.69-.06.27-.21.57-.48.62-.03.13-.07.26-.12.38 0 .01-.01.04-.01.04-.21.57-.54 1.06-.94 1.42 0 .06.01.13.01.19.04.43-.12.75 1.05 1.27.65.29 1.47.6 2.14.95a6.415 6.415 0 0 1-4.93 2.31z',
        ],
        variable: [
          'M3.94 3.15c.47-.66 1.05-1.24 1.76-1.73l.13-.4c-1.11.45-2.05 1.01-2.84 1.7-1.02.88-1.8 1.9-2.32 3.05C.22 6.76 0 7.75 0 8.75c0 1.75.66 3.5 1.99 5.25l.13-.42c-.39-.94-.59-1.82-.59-2.63 0-1.28.22-2.64.67-4.1.45-1.45 1.03-2.69 1.74-3.7zm7.51 6.41l-.27-.15c-.3.41-.52.66-.66.77-.09.06-.21.1-.33.1-.15 0-.3-.1-.45-.28-.25-.33-.59-1.22-1.01-2.69.38-.65.69-1.08.95-1.28.19-.15.39-.22.59-.22.08 0 .22.03.43.08.2.06.39.08.54.08.22 0 .4-.07.54-.22.15-.15.22-.34.22-.57 0-.25-.07-.45-.22-.59-.15-.15-.35-.22-.63-.22-.24 0-.47.06-.69.17-.21.11-.49.36-.82.74-.25.28-.61.78-1.1 1.48a6.72 6.72 0 0 0-.97-2.38l-2.59.44-.05.27c.19-.04.36-.06.49-.06.26 0 .47.11.64.33.26.34.63 1.38 1.11 3.12-.37.49-.63.81-.77.96-.23.24-.41.4-.56.47-.11.06-.24.09-.39.09-.11 0-.29-.06-.53-.18-.17-.07-.32-.11-.45-.11-.25 0-.46.08-.62.24-.16.16-.24.37-.24.61 0 .23.08.42.23.57.15.15.35.22.61.22.25 0 .48-.05.7-.15.22-.1.49-.32.82-.65.33-.33.78-.86 1.36-1.59.22.69.42 1.19.58 1.51.16.31.35.54.56.68.21.14.47.21.79.21.31 0 .62-.11.93-.33.4-.29.82-.77 1.26-1.47zm2.56-8.54l-.12.42c.39.95.59 1.82.59 2.64 0 1.09-.17 2.26-.5 3.51-.26.96-.6 1.87-1.02 2.71-.42.85-.82 1.51-1.21 1.98-.39.48-.87.92-1.44 1.32l-.14.4c1.11-.45 2.05-1.02 2.84-1.7 1.03-.89 1.81-1.91 2.33-3.05.44-.99.66-1.99.66-3 0-1.73-.66-3.48-1.99-5.23z',
        ],
        'vertical-bar-chart-asc': [
          'M6 7c-.55 0-1 .45-1 1v7c0 .55.45 1 1 1s1-.45 1-1V8c0-.55-.45-1-1-1zM2 9c-.55 0-1 .45-1 1v5c0 .55.45 1 1 1s1-.45 1-1v-5c0-.55-.45-1-1-1zm8-5c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1s1-.45 1-1V5c0-.55-.45-1-1-1zm4-4c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1s1-.45 1-1V1c0-.55-.45-1-1-1z',
        ],
        'vertical-bar-chart-desc': [
          'M6 4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1s1-.45 1-1V5c0-.55-.45-1-1-1zM2 0c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1s1-.45 1-1V1c0-.55-.45-1-1-1zm8 7c-.55 0-1 .45-1 1v7c0 .55.45 1 1 1s1-.45 1-1V8c0-.55-.45-1-1-1zm4 2c-.55 0-1 .45-1 1v5c0 .55.45 1 1 1s1-.45 1-1v-5c0-.55-.45-1-1-1z',
        ],
        'vertical-distribution': [
          'M1 2h14c.55 0 1-.45 1-1s-.45-1-1-1H1C.45 0 0 .45 0 1s.45 1 1 1zm14 11H1c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1zM3 5c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h9c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1H3z',
        ],
        video: [
          'M15 2H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zM5 11V5l6 3-6 3z',
        ],
        'volume-down': [
          'M9 2c-.28 0-.53.11-.71.29L5.59 5H3c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h2.59l2.71 2.71c.17.18.42.29.7.29.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm3.57 1.44l-1.59 1.22C11.62 5.61 12 6.76 12 8s-.38 2.39-1.02 3.34l1.59 1.22C13.47 11.27 14 9.7 14 8c0-1.7-.53-3.27-1.43-4.56z',
        ],
        'volume-off': [
          'M11 2c-.28 0-.53.11-.71.29L7.59 5H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h2.59l2.71 2.71c.17.18.42.29.7.29.55 0 1-.45 1-1V3c0-.55-.45-1-1-1z',
        ],
        'volume-up': [
          'M7 1.86c-.28 0-.53.11-.71.29l-2.7 2.71H1c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h2.59l2.71 2.71a1.003 1.003 0 0 0 1.71-.71v-10c-.01-.55-.46-1-1.01-1zm6.74-.99l-1.58 1.22A9.985 9.985 0 0 1 14 7.86c0 2.16-.69 4.15-1.85 5.78l1.58 1.22c1.42-1.97 2.26-4.38 2.26-7 .01-2.61-.84-5.02-2.25-6.99zM8.98 4.52C9.62 5.48 10 6.63 10 7.86s-.38 2.39-1.02 3.34l1.59 1.22c.9-1.29 1.43-2.86 1.43-4.56 0-1.7-.53-3.27-1.43-4.56L8.98 4.52z',
        ],
        walk: [
          'M13 8h-2c-.16 0-.31-.05-.44-.11v.01l-1.02-.51-.37 1.86 1.38.92-.01.02c.27.17.46.46.46.81v4c0 .55-.45 1-1 1s-1-.45-1-1v-3.46l-1.27-.85-1.8 4.67h-.01A.98.98 0 0 1 5 16c-.55 0-1-.45-1-1 0-.13.03-.25.07-.36h-.01L7.39 6H5.62l-.73 1.45h-.01C4.72 7.77 4.39 8 4 8c-.55 0-1-.45-1-1 0-.16.05-.31.11-.44H3.1l1-2h.01c.17-.33.5-.56.89-.56h3.16l.29-.75C8.17 2.9 8 2.47 8 2c0-1.1.9-2 2-2s2 .9 2 2c0 1-.73 1.82-1.69 1.97l-.5 1.32 1.43.71H13c.55 0 1 .45 1 1s-.45 1-1 1z',
        ],
        'warning-sign': [
          'M15.84 13.5l.01-.01-7-12-.01.01c-.17-.3-.48-.5-.85-.5s-.67.2-.85.5l-.01-.01-7 12 .01.01c-.09.15-.15.31-.15.5 0 .55.45 1 1 1h14c.55 0 1-.45 1-1 0-.19-.06-.35-.15-.5zm-6.85-.51h-2v-2h2v2zm0-3h-2v-5h2v5z',
        ],
        'waterfall-chart': [
          'M8 7c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm-4 4h1c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1zm7-6c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1s-1 .45-1 1v1c0 .55.45 1 1 1zm4-3h-1c-.55 0-1 .45-1 1v7c0 .55.45 1 1 1h1c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 10H2V3c0-.55-.45-1-1-1s-1 .45-1 1v10c0 .55.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1z',
        ],
        widget: [
          'M13 11h2V5h-2v6zM3 5H1v6h2V5zm11-1c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM2 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM5 3h6V1H5v2zM2 0C.9 0 0 .9 0 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm3 15h6v-2H5v2z',
        ],
        'widget-button': [
          'M1 3h14c.55 0 1 .45 1 1v8c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1zm1 2v6h12V5H2zm3 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm3 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm3 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z',
        ],
        'widget-footer': [
          'M14 0H2c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-1 14H3v-3h10v3zm0-4H3V2h10v8z',
        ],
        'widget-header': [
          'M14 0H2c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-1 14H3V6h10v8zm0-9H3V2h10v3z',
        ],
        wrench: [
          'M15.83 3.7l-3.06 3.05-2.84-.7-.7-2.83L12.29.17a5.004 5.004 0 0 0-4.83 1.29 4.967 4.967 0 0 0-1.12 5.36L.58 12.58c-.36.36-.58.86-.58 1.41 0 1.1.9 2 2 2 .55 0 1.05-.22 1.41-.59l5.77-5.77c1.79.69 3.91.33 5.35-1.12 1.32-1.3 1.74-3.15 1.3-4.81z',
        ],
        'zoom-in': [
          'M7.99 5.99v-2c0-.55-.45-1-1-1s-1 .45-1 1v2h-2c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1v-2h2c.55 0 1-.45 1-1s-.45-1-1-1h-2zm7.56 7.44l-2.67-2.68a6.94 6.94 0 0 0 1.11-3.76c0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7c1.39 0 2.68-.42 3.76-1.11l2.68 2.67a1.498 1.498 0 1 0 2.12-2.12zm-8.56-1.44c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z',
        ],
        'zoom-out': [
          'M3.99 5.99c-.55 0-1 .45-1 1s.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1h-6zm11.56 7.44l-2.67-2.68a6.94 6.94 0 0 0 1.11-3.76c0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7c1.39 0 2.68-.42 3.76-1.11l2.68 2.67a1.498 1.498 0 1 0 2.12-2.12zm-8.56-1.44c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z',
        ],
        'zoom-to-fit': [
          'M11 10a1.003 1.003 0 0 0 1.71.71l2-2c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71l-2-2a1.003 1.003 0 0 0-1.42 1.42L12.59 8 11.3 9.29c-.19.18-.3.43-.3.71zM1 5c.55 0 1-.45 1-1V2h2c.55 0 1-.45 1-1s-.45-1-1-1H1C.45 0 0 .45 0 1v3c0 .55.45 1 1 1zm4 1a1.003 1.003 0 0 0-1.71-.71l-2 2C1.11 7.47 1 7.72 1 8c0 .28.11.53.29.71l2 2a1.003 1.003 0 0 0 1.42-1.42L3.41 8 4.7 6.71c.19-.18.3-.43.3-.71zm1-1c.28 0 .53-.11.71-.29L8 3.41 9.29 4.7c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71l-2-2C8.53 1.11 8.28 1 8 1s-.53.11-.71.29l-2 2A1.003 1.003 0 0 0 6 5zm9 6c-.55 0-1 .45-1 1v2h-2c-.55 0-1 .45-1 1s.45 1 1 1h3c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1zm0-11h-3c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1V1c0-.55-.45-1-1-1zM4 14H2v-2c0-.55-.45-1-1-1s-1 .45-1 1v3c0 .55.45 1 1 1h3c.55 0 1-.45 1-1s-.45-1-1-1zm6-3c-.28 0-.53.11-.71.29L8 12.59 6.71 11.3A.965.965 0 0 0 6 11a1.003 1.003 0 0 0-.71 1.71l2 2c.18.18.43.29.71.29s.53-.11.71-.29l2-2A1.003 1.003 0 0 0 10 11z',
        ],
      },
      d = {
        add: [
          'M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm5-9h-4V5c0-.55-.45-1-1-1s-1 .45-1 1v4H5c-.55 0-1 .45-1 1s.45 1 1 1h4v4c0 .55.45 1 1 1s1-.45 1-1v-4h4c.55 0 1-.45 1-1s-.45-1-1-1z',
        ],
        'add-column-left': [
          'M4 11h2v2c0 .55.45 1 1 1s1-.45 1-1v-2h2c.55 0 1-.45 1-1s-.45-1-1-1H8V7c0-.55-.45-1-1-1s-1 .45-1 1v2H4c-.55 0-1 .45-1 1s.45 1 1 1zM19 0H1C.45 0 0 .45 0 1v18c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-7 18H2V2h10v16zm6 0h-5V2h5v16z',
        ],
        'add-column-right': [
          'M10 11h2v2c0 .55.45 1 1 1s1-.45 1-1v-2h2c.55 0 1-.45 1-1s-.45-1-1-1h-2V7c0-.55-.45-1-1-1s-1 .45-1 1v2h-2c-.55 0-1 .45-1 1s.45 1 1 1zm9-11H1C.45 0 0 .45 0 1v18c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zM7 18H2V2h5v16zm11 0H8V2h10v16z',
        ],
        'add-row-bottom': [
          'M19 0H1C.45 0 0 .45 0 1v18c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-1 18H2V8h16v10zm0-11H2V2h16v5zM7 14h2v2c0 .55.45 1 1 1s1-.45 1-1v-2h2c.55 0 1-.45 1-1s-.45-1-1-1h-2v-2c0-.55-.45-1-1-1s-1 .45-1 1v2H7c-.55 0-1 .45-1 1s.45 1 1 1z',
        ],
        'add-row-top': [
          'M7 8h2v2c0 .55.45 1 1 1s1-.45 1-1V8h2c.55 0 1-.45 1-1s-.45-1-1-1h-2V4c0-.55-.45-1-1-1s-1 .45-1 1v2H7c-.55 0-1 .45-1 1s.45 1 1 1zm12-8H1C.45 0 0 .45 0 1v18c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-1 18H2v-5h16v5zm0-6H2V2h16v10z',
        ],
        'add-to-artifact': [
          'M13 12H1c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1zm0 4H1c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1zM1 6h9c.55 0 1-.45 1-1s-.45-1-1-1H1c-.55 0-1 .45-1 1s.45 1 1 1zm12 2H1c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1zm6-4h-2V2c0-.55-.45-1-1-1s-1 .45-1 1v2h-2c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1V6h2c.55 0 1-.45 1-1s-.45-1-1-1z',
        ],
        'add-to-folder': [
          'M.01 10V6H20v10c0 .55-.45 1-1 1H9.995v-3.99C9.965 11.332 8.635 10 6.987 10H.01zM19 3c.55 0 1 .45.99 1v1H0V2c0-.55.45-1 1-1h5.997c.28 0 .53.11.71.29L9.414 3H19zM6.987 12c.55 0 .999.45 1.009 1.01v5c0 .55-.45 1-1 1s-.999-.45-.999-1v-2.59l-4.288 4.29a1.003 1.003 0 0 1-1.42-1.42L4.579 14H1.989c-.55 0-1-.45-1-1s.45-1 1-1h4.998z',
        ],
        airplane: [
          'M20 2c0-1.1-.9-2-2-2-.55 0-1.05.22-1.41.59l-4.84 4.84L2 1 1 3l7.53 5.64L4.17 13H1l-1 1 4 2 2 4 1-1v-3.17l4.36-4.36L17 19l2-1-4.43-9.74 4.84-4.84c.37-.37.59-.87.59-1.42z',
        ],
        'align-center': [
          'M5 5c-.55 0-1 .45-1 1s.45 1 1 1h10c.55 0 1-.45 1-1s-.45-1-1-1H5zM1 3h18c.55 0 1-.45 1-1s-.45-1-1-1H1c-.55 0-1 .45-1 1s.45 1 1 1zm12 12c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1h6zm4 2H3c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1zm2-8H1c-.55 0-1 .45-1 1s.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1z',
        ],
        'align-justify': [
          'M1 3h18c.55 0 1-.45 1-1s-.45-1-1-1H1c-.55 0-1 .45-1 1s.45 1 1 1zm18 14H1c-.55 0-1 .45-1 1s.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1zm0-12H1c-.55 0-1 .45-1 1s.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1zm0 4H1c-.55 0-1 .45-1 1s.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1zm0 4H1c-.55 0-1 .45-1 1s.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1z',
        ],
        'align-left': [
          'M1 7h10c.55 0 1-.45 1-1s-.45-1-1-1H1c-.55 0-1 .45-1 1s.45 1 1 1zm0-4h18c.55 0 1-.45 1-1s-.45-1-1-1H1c-.55 0-1 .45-1 1s.45 1 1 1zm14 14H1c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1zm4-8H1c-.55 0-1 .45-1 1s.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1zM1 15h6c.55 0 1-.45 1-1s-.45-1-1-1H1c-.55 0-1 .45-1 1s.45 1 1 1z',
        ],
        'align-right': [
          'M19 17H5c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1zM1 3h18c.55 0 1-.45 1-1s-.45-1-1-1H1c-.55 0-1 .45-1 1s.45 1 1 1zm18 10h-6c-.55 0-1 .45-1 1s.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1zm0-4H1c-.55 0-1 .45-1 1s.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1zm0-4H9c-.55 0-1 .45-1 1s.45 1 1 1h10c.55 0 1-.45 1-1s-.45-1-1-1z',
        ],
        'alignment-bottom': [
          'M12 16h4c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v7c0 .55.45 1 1 1zm7 2H1c-.55 0-1 .45-1 1s.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1zM4 16h4c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1z',
        ],
        'alignment-horizontal-center': [
          'M19 9h-2V7c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v2H9V3c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v6H1c-.55 0-1 .45-1 1s.45 1 1 1h2v6c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-6h2v2c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-2h2c.55 0 1-.45 1-1s-.45-1-1-1z',
        ],
        'alignment-left': [
          'M1 0C.45 0 0 .45 0 1v18c0 .55.45 1 1 1s1-.45 1-1V1c0-.55-.45-1-1-1zm11 11H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h7c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1zm7-8H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1z',
        ],
        'alignment-right': [
          'M19 0c-.55 0-1 .45-1 1v18c0 .55.45 1 1 1s1-.45 1-1V1c0-.55-.45-1-1-1zm-4 11H8c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h7c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1zm0-8H1c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1z',
        ],
        'alignment-top': [
          'M8 4H4c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h4c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zm11-4H1C.45 0 0 .45 0 1s.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1zm-3 4h-4c-.55 0-1 .45-1 1v7c0 .55.45 1 1 1h4c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1z',
        ],
        'alignment-vertical-center': [
          'M17 3h-6V1c0-.55-.45-1-1-1S9 .45 9 1v2H3c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h6v2H7c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1v-2h2c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1h-2V9h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1z',
        ],
        annotation: [
          'M9.41 13.41l7.65-7.65-2.83-2.83-7.65 7.65 2.83 2.83zm10-10c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2-.55 0-1.05.22-1.41.59l-1.65 1.65 2.83 2.83 1.64-1.66zM18 18H2V2h8.93l2-2H1C.45 0 0 .45 0 1v18c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V7.07l-2 2V18zM4 16l4.41-1.59-2.81-2.79L4 16z',
        ],
        application: [
          'M3.5 9h9c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-9c-.28 0-.5.22-.5.5s.22.5.5.5zm0 2h5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-5c-.28 0-.5.22-.5.5s.22.5.5.5zM19 1H1c-.55 0-1 .45-1 1v16c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zm-1 16H2V6h16v11zM3.5 13h7c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-7c-.28 0-.5.22-.5.5s.22.5.5.5z',
        ],
        applications: [
          'M15 5H1c-.55 0-1 .45-1 1v13c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm-1 13H2V8h12v10zM3.5 10h7c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-7c-.28 0-.5.22-.5.5s.22.5.5.5zm0 2h3c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-3c-.28 0-.5.22-.5.5s.22.5.5.5zm0 2h5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-5c-.28 0-.5.22-.5.5s.22.5.5.5zM19 0H5c-.55 0-1 .45-1 1v3h2V3h12v10h-1v2h2c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1z',
        ],
        'arrow-bottom-left': [
          'M18 3a1.003 1.003 0 0 0-1.71-.71L4 14.59V7c0-.55-.45-1-1-1s-1 .45-1 1v10c0 .55.45 1 1 1h10c.55 0 1-.45 1-1s-.45-1-1-1H5.41l12.3-12.29c.18-.18.29-.43.29-.71z',
        ],
        'arrow-bottom-right': [
          'M17 6c-.55 0-1 .45-1 1v7.59L3.71 2.29a1.003 1.003 0 0 0-1.42 1.42L14.59 16H7c-.55 0-1 .45-1 1s.45 1 1 1h10c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1z',
        ],
        'arrow-down': [
          'M16 11c-.3 0-.5.1-.7.3L11 15.6V2c0-.5-.4-1-1-1s-1 .5-1 1v13.6l-4.3-4.3c-.2-.2-.4-.3-.7-.3-.5 0-1 .4-1 1 0 .3.1.5.3.7l6 6c.2.2.4.3.7.3s.5-.1.7-.3l6-6c.2-.2.3-.4.3-.7 0-.6-.5-1-1-1z',
        ],
        'arrow-left': [
          'M18 9H4.41L8.7 4.71c.19-.18.3-.43.3-.71a1.003 1.003 0 0 0-1.71-.71l-6 6c-.18.18-.29.43-.29.71 0 .28.11.53.29.71l6 6a1.003 1.003 0 0 0 1.42-1.42L4.41 11H18c.55 0 1-.45 1-1s-.45-1-1-1z',
        ],
        'arrow-right': [
          'M18.71 9.29l-6-6a1.003 1.003 0 0 0-1.42 1.42L15.59 9H2c-.55 0-1 .45-1 1s.45 1 1 1h13.59l-4.29 4.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71l6-6c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71z',
        ],
        'arrow-top-left': [
          'M17.71 16.29L5.41 4H13c.55 0 1-.45 1-1s-.45-1-1-1H3c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1s1-.45 1-1V5.41L16.29 17.7c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71z',
        ],
        'arrow-top-right': [
          'M17 2H7c-.55 0-1 .45-1 1s.45 1 1 1h7.59L2.29 16.29a1.003 1.003 0 0 0 1.42 1.42L16 5.41V13c0 .55.45 1 1 1s1-.45 1-1V3c0-.55-.45-1-1-1z',
        ],
        'arrow-up': [
          'M16.7 7.3l-6-6c-.2-.2-.4-.3-.7-.3s-.5.1-.7.3l-6 6c-.2.2-.3.4-.3.7 0 .6.5 1 1 1 .3 0 .5-.1.7-.3L9 4.4V18c0 .5.4 1 1 1s1-.5 1-1V4.4l4.3 4.3c.2.2.4.3.7.3.5 0 1-.4 1-1 0-.3-.1-.5-.3-.7z',
        ],
        'arrows-horizontal': [
          'M19.7 9.3l-5-5c-.2-.2-.4-.3-.7-.3-.6 0-1 .4-1 1 0 .3.1.5.3.7L16.6 9H3.4l3.3-3.3c.2-.2.3-.4.3-.7 0-.6-.4-1-1-1-.3 0-.5.1-.7.3l-5 5c-.2.2-.3.4-.3.7s.1.5.3.7l5 5c.2.2.4.3.7.3.6 0 1-.4 1-1 0-.3-.1-.5-.3-.7L3.4 11h13.2l-3.3 3.3c-.2.2-.3.4-.3.7 0 .6.4 1 1 1 .3 0 .5-.1.7-.3l5-5c.2-.2.3-.4.3-.7s-.1-.5-.3-.7z',
        ],
        'arrows-vertical': [
          'M15 13c-.3 0-.5.1-.7.3L11 16.6V3.4l3.3 3.3c.2.2.4.3.7.3.6 0 1-.4 1-1 0-.3-.1-.5-.3-.7l-5-5c-.2-.2-.4-.3-.7-.3s-.5.1-.7.3l-5 5c-.2.2-.3.4-.3.7 0 .6.4 1 1 1 .3 0 .5-.1.7-.3L9 3.4v13.2l-3.3-3.3c-.2-.2-.4-.3-.7-.3-.6 0-1 .4-1 1 0 .3.1.5.3.7l5 5c.2.2.4.3.7.3s.5-.1.7-.3l5-5c.2-.2.3-.4.3-.7 0-.5-.4-1-1-1z',
        ],
        asterisk: [
          'M18.52 14.17l.01-.02L11.89 10l6.64-4.15-.01-.02A.97.97 0 0 0 19 5c0-.55-.45-1-1-1-.2 0-.37.07-.52.17l-.01-.02L11 8.2V1c0-.55-.45-1-1-1S9 .45 9 1v7.2L2.53 4.15l-.01.02A.922.922 0 0 0 2 4c-.55 0-1 .45-1 1 0 .36.2.66.48.83l-.01.02L8.11 10l-6.64 4.15.01.02A.97.97 0 0 0 1 15c0 .55.45 1 1 1 .2 0 .37-.07.52-.17l.01.02L9 11.8V19c0 .55.45 1 1 1s1-.45 1-1v-7.2l6.47 4.04.01-.02c.15.11.32.18.52.18.55 0 1-.45 1-1 0-.36-.2-.66-.48-.83z',
        ],
        'automatic-updates': [
          'M10 18c-4.42 0-8-3.58-8-8 0-2.52 1.18-4.76 3-6.22V5c0 .55.45 1 1 1s1-.45 1-1V1c0-.55-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1h2.06C1.61 3.82 0 6.71 0 10c0 5.52 4.48 10 10 10 .55 0 1-.45 1-1s-.45-1-1-1zm0-16c1.64 0 3.15.49 4.42 1.34l1.43-1.43A9.869 9.869 0 0 0 10 0c-.55 0-1 .45-1 1s.45 1 1 1zm10 8c0-1.13-.2-2.21-.54-3.22L17.84 8.4A7.962 7.962 0 0 1 15 16.22V15c0-.55-.45-1-1-1s-1 .45-1 1v4c0 .55.45 1 1 1h4c.55 0 1-.45 1-1s-.45-1-1-1h-2.06c2.45-1.82 4.06-4.71 4.06-8zm0-7a1.003 1.003 0 0 0-1.71-.71L12 8.59l-2.29-2.3a1.003 1.003 0 0 0-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l7-7c.18-.18.29-.43.29-.71z',
        ],
        badge: [
          'M16.94 5.73c-.19-1.41.62-2.52 1.38-3.59L17.03.65C14.89 1.76 11.88 1.48 10 0 8.12 1.48 5.11 1.76 2.97.65L1.68 2.14c.76 1.07 1.57 2.18 1.38 3.59C2.68 8.59 0 10.94 1.4 14.08c.56 1.43 1.81 2.37 3.4 2.75 1.95.46 4.4.91 5.2 3.17.8-2.26 3.25-2.71 5.2-3.17 1.6-.38 2.84-1.32 3.4-2.75 1.4-3.14-1.28-5.49-1.66-8.35z',
        ],
        'ban-circle': [
          'M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm5 11H5c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1z',
        ],
        'bank-account': [
          'M19.2 8.02l-.78-.18C18.03 6.4 17.2 5.08 16.08 4l.5-2.28c.11-.42-.22-.78-.61-.72-1.06.12-2 .54-2.67 1.26-1.06-.42-2.34-.66-3.56-.66-3.12 0-5.79 1.5-7.4 3.72-.23-.05-.45-.11-.67-.11C.72 5.21 0 5.98 0 7c0 .72.39 1.32.95 1.62-.06.42-.12.9-.12 1.38 0 2.16.89 4.08 2.28 5.58l-.33 2.04c-.11.72.45 1.38 1.12 1.38h.72c.56 0 1-.42 1.11-1.02l.06-.48c1.17.54 2.5.9 3.95.9 1.39 0 2.78-.3 3.95-.9l.06.48c.11.6.56 1.02 1.11 1.02h.72c.67 0 1.22-.66 1.11-1.38l-.33-1.98c.78-.78 1.34-1.74 1.73-2.76l1-.24c.5-.12.89-.6.89-1.2V9.22c.11-.6-.28-1.08-.78-1.2zM15 10c-.6 0-1-.7-1-1.5S14.4 7 15 7s1 .7 1 1.5-.4 1.5-1 1.5zM7.55 5.83a.99.99 0 0 1-1.38-.28.99.99 0 0 1 .28-1.38c2.34-1.56 4.77-1.56 7.11 0 .46.31.58.93.28 1.39-.31.46-.93.58-1.39.28-1.67-1.12-3.23-1.12-4.9-.01z',
        ],
        barcode: [
          'M6 16.98h2v-14H6v14zm3 0h1v-14H9v14zm-6 0h2v-14H3v14zm-3 0h2v-14H0v14zm16 0h2v-14h-2v14zm-4 0h1v-14h-1v14zm7-14v14h1v-14h-1zm-5 14h1v-14h-1v14z',
        ],
        blank: [],
        'blocked-person': [
          'M11.55 15.92c-1.48-.65-1.28-1.05-1.33-1.59-.01-.07-.01-.15-.01-.23.51-.45.92-1.07 1.19-1.78 0 0 .01-.04.02-.05.06-.15.11-.32.15-.48.34-.07.54-.44.61-.78.06-.11.14-.35.17-.62C10.33 9.42 8.92 7.38 8.92 5c0-.3.05-.58.09-.87-.33-.08-.67-.13-.99-.13-.79 0-1.68.25-2.31.73-.61.47-1.07 1.13-1.29 1.86-.05.16-.09.33-.11.5-.12.6-.17 1.51-.17 2.14v.08c-.24.09-.45.32-.49.83-.04.39.12.73.2.87.08.35.28.72.63.78.04.17.09.33.15.48 0 .01.01.02.01.03l.01.01c.27.72.7 1.35 1.22 1.8 0 .07-.01.14-.01.21-.05.54.1.94-1.38 1.59C3 16.56.77 17.26.32 18.31-.15 19.38.04 20 .04 20h15.95s.18-.62-.27-1.67c-.46-1.06-2.69-1.75-4.17-2.41zM14.97 0c-2.78 0-5.03 2.24-5.03 5s2.25 5 5.03 5S20 7.76 20 5s-2.25-5-5.03-5zm-3.03 5c0-1.66 1.35-3 3.02-3 .47 0 .9.11 1.29.3l-4.01 3.99c-.18-.4-.3-.83-.3-1.29zm3.03 3c-.47 0-.9-.11-1.29-.3l4.01-3.99c.19.39.3.82.3 1.29 0 1.66-1.36 3-3.02 3z',
        ],
        bold: [
          'M14.3 9c.4-.8.7-1.6.7-2.5C15 4 13 2 10.5 2H5c-.6 0-1 .4-1 1v13c0 .6.4 1 1 1h6.5c2.5 0 4.5-2 4.5-4.5 0-1.4-.7-2.7-1.7-3.5zM7 5h3.5c.8 0 1.5.7 1.5 1.5S11.3 8 10.5 8H7V5zm4.5 9H7v-3h4.5c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5z',
        ],
        book: [
          'M3 1v18c0 .55.45 1 1 1h2V0H4c-.55 0-1 .45-1 1zm14-1h-2v8l-2-2-2 2V0H7v20h10c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1z',
        ],
        bookmark: [
          'M6 0c-.55 0-1 .45-1 1v18c0 .55.32.68.71.29L9.3 15.7a.996.996 0 0 1 1.41 0l3.59 3.59c.38.39.7.26.7-.29v-8-4.5V1c0-.55-.45-1-1-1H6z',
        ],
        box: [
          'M19.89 6.56l-2.99-6h-.01C16.72.23 16.39 0 16 0H4c-.39 0-.72.23-.89.56H3.1l-3 6h.01C.05 6.69 0 6.84 0 7v12c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V7c0-.16-.05-.31-.11-.44zM11 2h4.38l2 4H11V2zM4.62 2H9v4H2.62l2-4zM18 18H2V8h16v10zM8 12h4c.55 0 1-.45 1-1s-.45-1-1-1H8c-.55 0-1 .45-1 1s.45 1 1 1z',
        ],
        briefcase: [
          'M19 5h-4V2c0-.55-.45-1-1-1H6c-.55 0-1 .45-1 1v3H1c-.55 0-1 .45-1 1v5h4v-1h2v1h8v-1h2v1h4V6c0-.55-.45-1-1-1zm-6 0H7V3h6v2zm3 8h-2v-1H6v1H4v-1H0v6c0 .55.45 1 1 1h18c.55 0 1-.45 1-1v-6h-4v1z',
        ],
        build: [
          'M19.43 16.67L9.31 7.81l1.47-1.56c.41-.44-.15-.8.15-1.6 1.08-2.76 4.19-2.99 4.19-2.99s.45-.47.87-.92C11.98-1 9.26.7 8.04 1.8L3.83 6.25l-.86.92c-.48.51-.48 1.33 0 1.84l-.87.92c-.48-.51-1.26-.51-1.74 0s-.48 1.33 0 1.84l1.74 1.84c.48.51 1.26.51 1.74 0s.48-1.33 0-1.84l.87-.92c.48.51 1.26.51 1.74 0l1.41-1.49 8.81 10.07c.76.76 2 .76 2.76 0 .76-.76.76-2 0-2.76z',
        ],
        calculator: [
          'M16 0H4c-.55 0-1 .45-1 1v18c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zM7 18H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5V8h2v2zm4 8H9v-2h2v2zm0-4H9v-2h2v2zm0-4H9V8h2v2zm4 8h-2v-6h2v6zm0-8h-2V8h2v2zm0-4H5V2h10v4z',
        ],
        calendar: [
          'M15 5c.6 0 1-.4 1-1V2c0-.5-.4-1-1-1s-1 .5-1 1v2c0 .6.4 1 1 1zM5 5c.6 0 1-.4 1-1V2c0-.5-.4-1-1-1s-1 .5-1 1v2c0 .6.4 1 1 1zm13-2h-1v1c0 1.1-.9 2-2 2s-2-.9-2-2V3H7v1c0 1.1-.9 2-2 2s-2-.9-2-2V3H2c-.5 0-1 .5-1 1v14c0 .5.5 1 1 1h16c.5 0 1-.5 1-1V4c0-.5-.5-1-1-1zM7 17H3v-4h4v4zm0-5H3V8h4v4zm5 5H8v-4h4v4zm0-5H8V8h4v4zm5 5h-4v-4h4v4zm0-5h-4V8h4v4z',
        ],
        camera: [
          'M10 8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm9-4h-3.59L13.7 2.29A.956.956 0 0 0 13 2H7c-.28 0-.53.11-.71.29L4.59 4H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h4.11c1.26 1.24 2.99 2 4.89 2s3.63-.76 4.89-2H19c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zM4 8H2V6h2v2zm6 8c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z',
        ],
        'caret-down': [
          'M16 7c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1 0 .24.1.46.24.63l-.01.01 5 6 .01-.01c.19.22.45.37.76.37s.57-.15.76-.37l.01.01 5-6-.01-.01c.14-.17.24-.39.24-.63z',
        ],
        'caret-left': [
          'M13 4c-.24 0-.46.1-.63.24l-.01-.01-6 5 .01.01c-.22.19-.37.45-.37.76s.15.57.37.76l-.01.01 6 5 .01-.01c.17.14.39.24.63.24.55 0 1-.45 1-1V5c0-.55-.45-1-1-1z',
        ],
        'caret-right': [
          'M14 10c0-.31-.15-.57-.37-.76l.01-.01-6-5-.01.01C7.46 4.1 7.24 4 7 4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1 .24 0 .46-.1.63-.24l.01.01 6-5-.01-.01c.22-.19.37-.45.37-.76z',
        ],
        'caret-up': [
          'M15.76 12.37l.01-.01-5-6-.01.01C10.57 6.15 10.31 6 10 6s-.57.15-.76.37l-.01-.01-5 6 .01.01c-.14.17-.24.39-.24.63 0 .55.45 1 1 1h10c.55 0 1-.45 1-1 0-.24-.1-.46-.24-.63z',
        ],
        'cell-tower': [
          'M11.5 8.32c.31-.35.51-.81.51-1.32 0-1.1-.9-2-2-2s-2 .9-2 2c0 .51.2.97.51 1.32L5.06 18.69c-.17.52.11 1.09.63 1.26s1.09-.11 1.26-.63L8.39 15h3.23l1.44 4.32c.17.52.74.81 1.26.63s.81-.74.63-1.26L11.5 8.32zM10.95 13H9.06l.95-2.84.94 2.84zM5.31 10.73a.996.996 0 1 0 1.37-1.45c-1.4-1.33-1.28-3.35-.01-4.54.4-.38.43-1.01.05-1.41-.36-.41-1-.43-1.4-.06-2.09 1.95-2.28 5.3-.01 7.46z',
          'M4.6 12.2C3 11.1 2 9 2 7c0-2.1.9-3.9 2.6-5.2.5-.3.5-1 .2-1.4-.3-.5-1-.5-1.4-.2C1.2 1.9-.1 4.2 0 7c.1 2.7 1.4 5.3 3.4 6.8.2.1.4.2.6.2.3 0 .6-.1.8-.4.4-.5.3-1.1-.2-1.4zM13.27 10.69c.38.4 1.01.42 1.41.04 2.27-2.16 2.08-5.51-.01-7.46a.996.996 0 1 0-1.36 1.46c1.28 1.19 1.39 3.21-.01 4.54-.39.39-.41 1.02-.03 1.42z',
          'M16.6.2c-.4-.3-1.1-.3-1.4.2-.3.4-.3 1.1.2 1.4C17.1 3.1 18 4.9 18 7c0 2-1 4.1-2.6 5.2-.5.3-.6.9-.2 1.4.2.3.5.4.8.4.2 0 .4-.1.6-.2C18.7 12.3 20 9.7 20 7c.09-2.8-1.2-5.1-3.4-6.8z',
        ],
        changes: [
          'M18 16H2c-1.1 0-2 .9-2 2s.9 2 2 2h16c1.1 0 2-.9 2-2s-.9-2-2-2zM3 5c.28 0 .53-.11.71-.29L5 3.41V13c0 .55.45 1 1 1s1-.45 1-1V3.41L8.29 4.7c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71l-3-3C6.53.11 6.28 0 6 0s-.53.11-.71.29l-3 3A1.003 1.003 0 0 0 3 5zm7.29 5.71l3 3c.18.18.43.29.71.29s.53-.11.71-.29l3-3a1.003 1.003 0 0 0-1.42-1.42L15 10.59V1c0-.55-.45-1-1-1s-1 .45-1 1v9.59L11.71 9.3A.965.965 0 0 0 11 9a1.003 1.003 0 0 0-.71 1.71z',
        ],
        chart: [
          'M7 11v8c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-8l-2 2-4-2zm-7 8c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-8l-6 3v5zM17 7l-3 3v9c0 .55.45 1 1 1h4c.55 0 1-.45 1-1V8.74c-.26.15-.58.26-1 .26-1.92 0-2-2-2-2zm2-6h-4c-.55 0-1 .45-1 1s.45 1 1 1h1.59L10.8 8.78 7.45 7.11v.01C7.31 7.05 7.16 7 7 7s-.31.05-.44.11V7.1l-6 3v.01c-.33.17-.56.5-.56.89 0 .55.45 1 1 1 .16 0 .31-.05.44-.11v.01L7 9.12l3.55 1.78v-.01c.14.06.29.11.45.11.28 0 .53-.11.71-.29L18 4.41V6c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1z',
        ],
        chat: [
          'M19 0H7c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h5.59l3.71 3.71c.17.18.42.29.7.29.55 0 1-.45 1-1v-3h1c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zM7 13c-1.1 0-2-.9-2-2V4H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h1v3a1.003 1.003 0 0 0 1.71.71L7.41 16H13c.55 0 1-.45 1-1v-.17L12.17 13H7z',
        ],
        'chevron-backward': [
          'M8.41 10l5.29-5.29c.19-.18.3-.43.3-.71a1.003 1.003 0 0 0-1.71-.71L7 8.59V4c0-.55-.45-1-1-1s-1 .45-1 1v12c0 .55.45 1 1 1s1-.45 1-1v-4.59l5.29 5.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71L8.41 10z',
        ],
        'chevron-down': [
          'M16 6c-.28 0-.53.11-.71.29L10 11.59l-5.29-5.3a1.003 1.003 0 0 0-1.42 1.42l6 6c.18.18.43.29.71.29s.53-.11.71-.29l6-6A1.003 1.003 0 0 0 16 6z',
        ],
        'chevron-forward': [
          'M13 3c-.55 0-1 .45-1 1v4.59l-5.29-5.3a1.003 1.003 0 0 0-1.42 1.42l5.3 5.29-5.29 5.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71l5.29-5.3V16c0 .55.45 1 1 1s1-.45 1-1V4c0-.55-.45-1-1-1z',
        ],
        'chevron-left': [
          'M8.41 10l5.29-5.29c.19-.18.3-.43.3-.71a1.003 1.003 0 0 0-1.71-.71l-6 6c-.18.18-.29.43-.29.71 0 .28.11.53.29.71l6 6a1.003 1.003 0 0 0 1.42-1.42L8.41 10z',
        ],
        'chevron-right': [
          'M13.71 9.29l-6-6a1.003 1.003 0 0 0-1.42 1.42l5.3 5.29-5.29 5.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71l6-6c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71z',
        ],
        'chevron-up': [
          'M16.71 12.29l-6-6C10.53 6.11 10.28 6 10 6s-.53.11-.71.29l-6 6a1.003 1.003 0 0 0 1.42 1.42L10 8.41l5.29 5.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71z',
        ],
        circle: [
          'M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z',
        ],
        'circle-arrow-down': [
          'M14 10c-.28 0-.53.11-.71.29L11 12.59V5c0-.55-.45-1-1-1s-1 .45-1 1v7.59L6.71 10.3A.965.965 0 0 0 6 10a1.003 1.003 0 0 0-.71 1.71l4 4c.18.18.43.29.71.29s.53-.11.71-.29l4-4A1.003 1.003 0 0 0 14 10zM10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z',
        ],
        'circle-arrow-left': [
          'M15 9H7.41L9.7 6.71c.19-.18.3-.43.3-.71a1.003 1.003 0 0 0-1.71-.71l-4 4c-.18.18-.29.43-.29.71 0 .28.11.53.29.71l4 4a1.003 1.003 0 0 0 1.42-1.42L7.41 11H15c.55 0 1-.45 1-1s-.45-1-1-1zm-5-9C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z',
        ],
        'circle-arrow-right': [
          'M15.71 9.29l-4-4a1.003 1.003 0 0 0-1.42 1.42L12.59 9H5c-.55 0-1 .45-1 1s.45 1 1 1h7.59l-2.29 2.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71l4-4c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71zM10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z',
        ],
        'circle-arrow-up': [
          'M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.71-13.71C10.53 4.11 10.28 4 10 4s-.53.11-.71.29l-4 4a1.003 1.003 0 0 0 1.42 1.42L9 7.41V15c0 .55.45 1 1 1s1-.45 1-1V7.41l2.29 2.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71l-4-4z',
        ],
        citation: [
          'M4 1C1.79 1 0 2.79 0 5s1.79 4 4 4c.1 0 .2-.01.3-.02C3.82 11.32 2.53 13 1 13c-.55 0-1 .45-1 1s.45 1 1 1c3.87 0 7-4.48 7-10 0-2.21-1.79-4-4-4zM16 1c-2.21 0-4 1.79-4 4s1.79 4 4 4c.1 0 .2-.01.3-.02C15.82 11.32 14.53 13 13 13c-.55 0-1 .45-1 1s.45 1 1 1c3.87 0 7-4.48 7-10 0-2.21-1.79-4-4-4z',
        ],
        clipboard: [
          'M13 2c0-.55-.45-1-1-1h-.78a1.98 1.98 0 0 0-3.44 0H7c-.55 0-1 .45-1 1v2h7V2z',
          'M16 2h-2v3H5V2H3c-.55 0-1 .45-1 1v16c0 .55.45 1 1 1h13c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1z',
        ],
        cloud: [
          'M15 7c-.12 0-.24.03-.36.04C13.83 4.69 11.62 3 9 3 5.69 3 3 5.69 3 9c0 .05.01.09.01.14A3.98 3.98 0 0 0 0 13c0 2.21 1.79 4 4 4h11c2.76 0 5-2.24 5-5s-2.24-5-5-5z',
        ],
        'cloud-download': [
          'M15 4c-.12 0-.24.03-.36.04C13.83 1.69 11.62 0 9 0 5.69 0 3 2.69 3 6c0 .05.01.09.01.14A3.98 3.98 0 0 0 0 10c0 2.21 1.79 4 4 4h.78c.55-.61 1.34-1 2.22-1v-2c0-1.66 1.34-3 3-3s3 1.34 3 3v2c.88 0 1.66.38 2.2.98C17.87 13.87 20 11.69 20 9c0-2.76-2.24-5-5-5zm-2 11c-.28 0-.53.11-.71.29L11 16.59V11c0-.55-.45-1-1-1s-1 .45-1 1v5.59L7.71 15.3A.965.965 0 0 0 7 15a1.003 1.003 0 0 0-.71 1.71l3 3c.18.18.43.29.71.29s.53-.11.71-.29l3-3A1.003 1.003 0 0 0 13 15z',
        ],
        'cloud-upload': [
          'M10.71 10.29c-.18-.18-.43-.29-.71-.29s-.53.11-.71.29l-3 3a1.003 1.003 0 0 0 1.42 1.42L9 13.41V19c0 .55.45 1 1 1s1-.45 1-1v-5.59l1.29 1.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71l-3-3zM15 4c-.12 0-.24.03-.36.04C13.83 1.69 11.62 0 9 0 5.69 0 3 2.69 3 6c0 .05.01.09.01.14A3.98 3.98 0 0 0 0 10c0 2.21 1.79 4 4 4 0-.83.34-1.58.88-2.12l3-3a2.993 2.993 0 0 1 4.24 0l3 3-.01.01c.52.52.85 1.23.87 2.02C18.28 13.44 20 11.42 20 9c0-2.76-2.24-5-5-5z',
        ],
        code: [
          'M6 6a1.003 1.003 0 0 0-1.71-.71l-4 4C.11 9.47 0 9.72 0 10c0 .28.11.53.29.71l4 4a1.003 1.003 0 0 0 1.42-1.42L2.41 10 5.7 6.71c.19-.18.3-.43.3-.71zm6-4c-.46 0-.83.31-.95.73l-4 14c-.02.09-.05.17-.05.27 0 .55.45 1 1 1 .46 0 .83-.31.95-.73l4-14c.02-.09.05-.17.05-.27 0-.55-.45-1-1-1zm7.71 7.29l-4-4a1.003 1.003 0 0 0-1.42 1.42l3.3 3.29-3.29 3.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71l4-4c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71z',
        ],
        'code-block': [
          'M19 5h-2V3c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v2H9V3c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v2H1c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zM8.71 15.29a1.003 1.003 0 0 1-1.42 1.42l-4-4C3.11 12.53 3 12.28 3 12s.11-.53.29-.71l4-4a1.003 1.003 0 0 1 1.42 1.42L5.41 12l3.3 3.29zm8-2.58l-4 4a1.003 1.003 0 0 1-1.42-1.42l3.3-3.29-3.29-3.29A.965.965 0 0 1 11 8a1.003 1.003 0 0 1 1.71-.71l4 4c.18.18.29.43.29.71s-.11.53-.29.71z',
        ],
        cog: [
          'M19 8h-2.31c-.14-.46-.33-.89-.56-1.3l1.7-1.7a.996.996 0 0 0 0-1.41l-1.41-1.41a.996.996 0 0 0-1.41 0l-1.7 1.7c-.41-.22-.84-.41-1.3-.55V1c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1v2.33c-.48.14-.94.34-1.37.58L5 2.28a.972.972 0 0 0-1.36 0L2.28 3.64c-.37.38-.37.99 0 1.36L3.9 6.62c-.24.44-.44.89-.59 1.38H1c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h2.31c.14.46.33.89.56 1.3L2.17 15a.996.996 0 0 0 0 1.41l1.41 1.41c.39.39 1.02.39 1.41 0l1.7-1.7c.41.22.84.41 1.3.55V19c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-2.33c.48-.14.94-.35 1.37-.59L15 17.72c.37.37.98.37 1.36 0l1.36-1.36c.37-.37.37-.98 0-1.36l-1.62-1.62c.24-.43.45-.89.6-1.38H19c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-9 6c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z',
        ],
        'collapse-all': [
          'M9.29 8.71c.18.18.43.29.71.29s.53-.11.71-.29l6-6a1.003 1.003 0 0 0-1.42-1.42L10 6.59l-5.29-5.3a1.003 1.003 0 0 0-1.42 1.42l6 6zm1.42 2.58c-.18-.18-.43-.29-.71-.29s-.53.11-.71.29l-6 6a1.003 1.003 0 0 0 1.42 1.42l5.29-5.3 5.29 5.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71l-6-6z',
        ],
        'column-layout': [
          'M19 1H1c-.55 0-1 .45-1 1v16c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zM5 17H2V3h3v14zm4 0H6V3h3v14zm9 0h-8V3h8v14z',
        ],
        comment: [
          'M19 1H1c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3v4a1.003 1.003 0 0 0 1.71.71l4.7-4.71H19c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zM4 10c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm6 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm6 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z',
        ],
        comparison: [
          'M6 8H1c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h5c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm13-6h-5c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 3h-5V3h5v2zM6 14H1c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1zM6 2H1c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm4-2c-.55 0-1 .45-1 1v18c0 .55.45 1 1 1s1-.45 1-1V1c0-.55-.45-1-1-1zm9 14h-5c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1zm0 3h-5v-2h5v2zm0-9h-5c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h5c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm0 3h-5V9h5v2z',
        ],
        compass: [
          'M15 10c0 .14-.03.28-.09.4l-3.99 8.98-.01.02a.991.991 0 0 1-1.82 0l-.01-.02-3.99-8.98c-.06-.12-.09-.26-.09-.4s.03-.28.09-.4L9.08.62 9.09.6a.991.991 0 0 1 1.82 0l.01.02 3.99 8.98c.06.12.09.26.09.4zm-5-6.54L7.09 10h5.81L10 3.46z',
        ],
        compressed: [
          'M19.89 6.56l-2.99-6h-.01C16.72.23 16.39 0 16 0H4c-.39 0-.72.23-.89.56H3.1l-3 6h.01C.05 6.69 0 6.84 0 7v12c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V7c0-.16-.05-.31-.11-.44zM11 2h4.38l2 4H11V2zM4.62 2H9v4H2.62l2-4zM18 18H2V8h7v4.59L6.71 10.3A.965.965 0 0 0 6 10a1.003 1.003 0 0 0-.71 1.71l4 4c.18.18.43.29.71.29s.53-.11.71-.29l4-4a1.003 1.003 0 0 0-1.42-1.42L11 12.59V8h7v10z',
        ],
        confirm: [
          'M9.71 5.29a1.003 1.003 0 0 0-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l7-7a1.003 1.003 0 0 0-1.42-1.42L12 7.59l-2.29-2.3zm7.93 2.32c.23.75.36 1.56.36 2.39 0 4.42-3.58 8-8 8s-8-3.58-8-8a7.998 7.998 0 0 1 11.8-7.04l1.46-1.46C13.73.56 11.93 0 10 0 4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10c0-1.4-.29-2.73-.81-3.95l-1.55 1.56z',
        ],
        console: [
          'M19 19H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h18c.55 0 1 .45 1 1v16c0 .55-.45 1-1 1zM18 6H2v11h16V6zM4 8c.28 0 .53.11.71.29l2 2c.18.18.29.43.29.71s-.11.53-.29.71l-2 2a1.003 1.003 0 0 1-1.42-1.42L4.59 11l-1.3-1.29A1.003 1.003 0 0 1 4 8zm5 4h3c.55 0 1 .45 1 1s-.45 1-1 1H9c-.55 0-1-.45-1-1s.45-1 1-1z',
        ],
        contrast: [
          'M19 8h-1.26c-.19-.73-.48-1.42-.85-2.06l.94-.94a.996.996 0 0 0 0-1.41l-1.41-1.41a.996.996 0 0 0-1.41 0l-.94.94c-.65-.38-1.34-.67-2.07-.86V1c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1v1.26c-.76.2-1.47.5-2.13.89L5 2.28a.972.972 0 0 0-1.36 0L2.28 3.64c-.37.38-.37.98 0 1.36l.87.87c-.39.66-.69 1.37-.89 2.13H1c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h1.26c.19.73.48 1.42.85 2.06l-.94.94a.996.996 0 0 0 0 1.41l1.41 1.41c.39.39 1.02.39 1.41 0l.94-.94c.64.38 1.33.66 2.06.85V19c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-1.26c.76-.2 1.47-.5 2.13-.89l.88.87c.37.37.98.37 1.36 0l1.36-1.36c.37-.38.37-.98 0-1.36l-.87-.87c.4-.65.7-1.37.89-2.13H19c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-9 7c-2.76 0-5-2.24-5-5s2.24-5 5-5v10z',
        ],
        control: [
          'M17 10h-7v7h7v-7zm0-7h-7v6h7V3zM9 3H3v14h6V3zm10-3H1C.45 0 0 .45 0 1v18c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-1 18H2V2h16v16z',
        ],
        'credit-card': [
          'M19 3H1c-.55 0-1 .45-1 1v2h20V4c0-.55-.45-1-1-1zM0 16c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V8H0v8zm6.5-2h7c.28 0 .5.22.5.5s-.22.5-.5.5h-7c-.28 0-.5-.22-.5-.5s.22-.5.5-.5zm-4 0h2c.28 0 .5.22.5.5s-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5z',
        ],
        cross: [
          'M11.41 10l4.29-4.29c.19-.18.3-.43.3-.71a1.003 1.003 0 0 0-1.71-.71L10 8.59l-4.29-4.3a1.003 1.003 0 0 0-1.42 1.42L8.59 10 4.3 14.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71l4.29-4.3 4.29 4.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71L11.41 10z',
        ],
        crown: [
          'M2 8l4 2 4-5 4 5 4-2-1 7H3L2 8zm8-6a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM1 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm18 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM3 16h14v2H3v-2z',
        ],
        'curved-range-chart': [
          'M19 16H3.02l2.14-1.74c2.25 1.7 7.33.46 11.83-2.99l-1.29-1.5c-3.56 2.74-7.31 4.03-8.93 3.19l10.55-8.57-.63-.78-10.59 8.6c-.64-1.64 1.46-4.91 5.09-7.7L9.9 3.01c-4.6 3.54-6.91 8.12-5.41 10.51L2 15.54V3c0-.55-.45-1-1-1s-1 .45-1 1v14a.998.998 0 0 0 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1z',
        ],
        cut: [
          'M16 2s.72-1.28 0-2l-5.29 6.25 1.28 1.54L16 2zm.08 10c-.55 0-1.07.12-1.54.32L4.31 0c-.7.72 0 2 0 2l4.45 6.56-3.19 3.77C5.09 12.12 4.56 12 4 12c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.65-.17-1.26-.45-1.8l2.54-3.67 2.49 3.67c-.27.54-.44 1.15-.44 1.8 0 2.21 1.76 4 3.92 4 2.17 0 3.92-1.79 3.92-4 .02-2.21-1.74-4-3.9-4zM4 18c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm12.08 0c-1.08 0-1.96-.9-1.96-2s.88-2 1.96-2 1.96.9 1.96 2-.88 2-1.96 2z',
        ],
        dashboard: [
          'M6 5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zM4 9c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm6-4c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0-5C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm6-9c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm-8 5c0 1.1.9 2 2 2s2-.9 2-2c0-.33-2-8-2-8s-2 7.67-2 8zm6-9c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z',
        ],
        database: [
          'M2.01 5.1v5.4c0 1.38 3.58 2.5 8 2.5s8-1.12 8-2.5V5.1c-1.49 1.13-4.51 1.9-8 1.9-3.48 0-6.5-.77-8-1.9zm8 .9c4.42 0 8-1.12 8-2.5s-3.58-2.5-8-2.5-8 1.12-8 2.5S5.6 6 10.01 6zm-8 6.1v5.4c0 1.38 3.58 2.5 8 2.5s8-1.12 8-2.5v-5.4c-1.49 1.13-4.51 1.9-8 1.9-3.48 0-6.5-.77-8-1.9z',
        ],
        delete: [
          'M15 6a1.003 1.003 0 0 0-1.71-.71L10 8.59l-3.29-3.3a1.003 1.003 0 0 0-1.42 1.42L8.59 10 5.3 13.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71l3.29-3.3 3.29 3.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71L11.41 10l3.29-3.29c.19-.18.3-.43.3-.71zm-5-6C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z',
        ],
        delta: ['M10 0L0 20h20L10 0zM9 6l6 12H3L9 6z'],
        'derive-column': [
          'M7.1 8.2h-.99c.28-1.11.66-1.92 1.12-2.43.28-.32.56-.48.83-.48.05 0 .1.02.13.05.03.03.05.07.05.12 0 .04-.04.13-.11.25a.64.64 0 0 0-.12.35c0 .15.06.28.18.39.12.11.27.16.45.16.2 0 .36-.07.49-.2s.2-.31.2-.54c0-.26-.1-.47-.3-.63-.19-.16-.51-.24-.95-.24-.68 0-1.3.19-1.85.58-.56.38-1.09 1.02-1.59 1.91-.17.3-.34.5-.49.59-.15.08-.4.13-.74.12l-.23.77h.95l-1.39 5.24c-.23.86-.39 1.39-.47 1.59-.12.29-.3.54-.54.75-.1.08-.21.12-.35.12-.04 0-.07-.01-.1-.03l-.03-.04c0-.02.03-.07.1-.13.07-.07.1-.17.1-.31 0-.15-.05-.28-.16-.38-.11-.1-.27-.15-.47-.15-.25 0-.44.07-.59.2-.15.12-.23.28-.23.46 0 .19.09.36.27.5.19.14.47.21.86.21.61 0 1.16-.15 1.63-.46.48-.31.89-.78 1.25-1.43.35-.64.72-1.68 1.09-3.11l.8-3.03h.96l.24-.77zM19 0h-9c-.55 0-1 .45-1 1v3h2V2h7v16h-7v-2H9v3c0 .55.45 1 1 1h9c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-8.79 13.49c.15.28.32.49.52.61.19.12.44.19.73.19.28 0 .57-.1.86-.3.38-.25.77-.69 1.17-1.31l-.25-.14c-.27.37-.48.6-.61.69-.09.06-.19.09-.31.09-.14 0-.28-.09-.42-.26-.23-.29-.54-1.09-.93-2.4.35-.59.64-.97.87-1.15.17-.13.35-.2.55-.2.07 0 .2.03.39.08s.36.08.5.08c.2 0 .37-.07.5-.2.15-.14.22-.31.22-.52 0-.22-.07-.4-.2-.53s-.33-.2-.58-.2c-.22 0-.43.05-.63.15-.2.1-.45.32-.75.67-.23.25-.56.7-1.01 1.33a6.52 6.52 0 0 0-.91-2.15l-2.39.39-.05.25c.18-.03.33-.05.45-.05.24 0 .43.1.59.3.25.31.59 1.24 1.02 2.8-.34.44-.58.73-.7.87-.21.22-.38.36-.52.43-.1.05-.22.08-.35.08-.1 0-.26-.05-.49-.16a1.01 1.01 0 0 0-.42-.11c-.23 0-.42.07-.57.22-.15.14-.23.33-.23.55 0 .21.07.38.21.51.14.13.33.2.56.2.23 0 .44-.05.64-.14.2-.09.45-.29.75-.59s.72-.78 1.25-1.43c.21.61.39 1.06.54 1.35z',
        ],
        desktop: [
          'M19 0H1C.45 0 0 .45 0 1v13c0 .55.45 1 1 1h5.67l-.5 3H5c-.55 0-1 .45-1 1s.45 1 1 1h10c.55 0 1-.45 1-1s-.45-1-1-1h-1.17l-.5-3H19c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-1 13H2V2h16v11z',
        ],
        'diagram-tree': [
          'M19 10v5h-2v-4h-6v4H9v-4H3v4H1v-5a1 1 0 0 1 1-1h7V5h2v4h7a1 1 0 0 1 1 1zM1 16h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zm16 0h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zm-8 0h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zM9 0h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1z',
        ],
        'direction-left': ['M20 3.02l-20 7 20 7-5-7z'],
        'direction-right': ['M20 10.02l-20-7 5 7-5 7z'],
        disable: [
          'M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zM2 10c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L3.69 14.9A7.902 7.902 0 0 1 2 10zm8 8c-1.85 0-3.55-.63-4.9-1.69L16.31 5.1A7.902 7.902 0 0 1 18 10c0 4.42-3.58 8-8 8z',
        ],
        document: [
          'M11.98 0h-8c-.55 0-1 .45-1 1v18c0 .55.45 1 1 1h13c.55 0 1-.45 1-1V6l-6-6zm4 18h-11V2h6v5h5v11z',
        ],
        'document-open': [
          'M8 15c0 .55.45 1 1 1s1-.45 1-1v-5c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1h2.59L1.3 16.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71L8 12.41V15zm5-15H5c-.55 0-1 .45-1 1v6h2V2h6v5h5v11H6v-.76L4.04 19.2c.1.45.48.8.96.8h13c.55 0 1-.45 1-1V6l-6-6z',
        ],
        'document-share': [
          'M14.09 10.09c-.31.31-.67.57-1.09.72V18H2V2h6v5h1.18c.15-.42.39-.8.7-1.11v-.01l2.45-2.45c-.42-.29-.78-.65-1.01-1.11L9 0H1C.45 0 0 .45 0 1v18c0 .55.45 1 1 1h13c.55 0 1-.45 1-1V9.24l-.88.88-.03-.03zM19 0h-5c-.55 0-1 .45-1 1s.45 1 1 1h2.59L11.3 7.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71L18 3.41V6c0 .55.45 1 1 1s1-.45 1-1V1c0-.55-.45-1-1-1z',
        ],
        dollar: [
          'M15.57 11.19c-.27-.51-.63-.93-1.07-1.26-.44-.33-.95-.6-1.51-.79-.56-.2-1.14-.36-1.72-.5-.6-.14-1.19-.26-1.75-.38-.57-.13-1.07-.27-1.51-.44-.44-.17-.8-.38-1.07-.63s-.41-.59-.41-1c0-.33.09-.6.28-.81.19-.21.42-.36.69-.47.27-.11.57-.18.88-.22.31-.04.58-.06.8-.06.71 0 1.35.14 1.9.41.55.27.91.81 1.06 1.62h3.36c-.09-.84-.32-1.56-.69-2.16-.37-.6-.83-1.08-1.38-1.45-.56-.37-1.18-.64-1.86-.81-.19-.05-.38-.07-.57-.1V1c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1v1.1c-.22.03-.43.05-.66.1-.73.13-1.39.37-1.98.71-.6.34-1.09.8-1.47 1.35-.39.56-.58 1.25-.58 2.08 0 .76.13 1.41.4 1.93.26.52.62.95 1.06 1.28.44.33.94.6 1.5.79.55.2 1.13.36 1.74.5.58.14 1.16.26 1.72.38s1.07.26 1.51.43c.44.17.8.39 1.09.66.28.27.43.63.45 1.06.02.43-.08.78-.3 1.04-.22.26-.49.47-.83.6-.34.14-.7.23-1.09.28-.39.05-.73.07-1.03.07-.87 0-1.61-.2-2.23-.59-.62-.39-.98-1.08-1.07-2.06H3c.02.9.19 1.68.52 2.34.33.66.78 1.21 1.35 1.65.57.44 1.25.77 2.03.98.35.1.71.16 1.08.21V19c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.13c.25-.04.5-.07.76-.13.77-.18 1.47-.46 2.1-.85.63-.39 1.14-.9 1.54-1.53.4-.63.59-1.39.59-2.29.01-.75-.13-1.37-.4-1.88z',
        ],
        dot: ['M10 6a4 4 0 1 0 0 8 4 4 0 1 0 0-8z'],
        'double-caret-horizontal': [
          'M8 4c-.24 0-.46.1-.63.24l-.01-.01-6 5 .01.01c-.22.19-.37.45-.37.76s.15.57.37.76l-.01.01 6 5 .01-.01c.17.14.39.24.63.24.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zm11 6c0-.31-.15-.57-.37-.76l.01-.01-6-5-.01.01C12.46 4.1 12.24 4 12 4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1 .24 0 .46-.1.63-.24l.01.01 6-5-.01-.01c.22-.19.37-.45.37-.76z',
        ],
        'double-caret-vertical': [
          'M5 9h10c.55 0 1-.45 1-1 0-.24-.1-.46-.24-.63l.01-.01-5-6-.01.01C10.57 1.15 10.31 1 10 1s-.57.15-.76.37l-.01-.01-5 6 .01.01C4.1 7.54 4 7.76 4 8c0 .55.45 1 1 1zm10 2H5c-.55 0-1 .45-1 1 0 .24.1.46.24.63l-.01.01 5 6 .01-.01c.19.22.45.37.76.37s.57-.15.76-.37l.01.01 5-6-.01-.01c.14-.17.24-.39.24-.63 0-.55-.45-1-1-1z',
        ],
        'double-chevron-down': [
          'M9.29 10.71c.18.18.43.29.71.29s.53-.11.71-.29l6-6a1.003 1.003 0 0 0-1.42-1.42L10 8.59l-5.29-5.3a1.003 1.003 0 0 0-1.42 1.42l6 6zM16 9c-.28 0-.53.11-.71.29L10 14.59l-5.29-5.3a1.003 1.003 0 0 0-1.42 1.42l6 6c.18.18.43.29.71.29s.53-.11.71-.29l6-6A1.003 1.003 0 0 0 16 9z',
        ],
        'double-chevron-left': [
          'M5.41 10l5.29-5.29c.19-.18.3-.43.3-.71a1.003 1.003 0 0 0-1.71-.71l-6 6c-.18.18-.29.43-.29.71 0 .28.11.53.29.71l6 6a1.003 1.003 0 0 0 1.42-1.42L5.41 10zm6 0l5.29-5.29c.19-.18.3-.43.3-.71a1.003 1.003 0 0 0-1.71-.71l-6 6c-.18.18-.29.43-.29.71 0 .28.11.53.29.71l6 6a1.003 1.003 0 0 0 1.42-1.42L11.41 10z',
        ],
        'double-chevron-right': [
          'M11 10c0-.28-.11-.53-.29-.71l-6-6a1.003 1.003 0 0 0-1.42 1.42L8.59 10 3.3 15.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71l6-6c.18-.18.29-.43.29-.71zm5.71-.71l-6-6a1.003 1.003 0 0 0-1.42 1.42l5.3 5.29-5.29 5.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71l6-6c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71z',
        ],
        'double-chevron-up': [
          'M4 11c.28 0 .53-.11.71-.29L10 5.41l5.29 5.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71l-6-6A.997.997 0 0 0 10 3c-.28 0-.53.11-.71.29l-6 6A1.003 1.003 0 0 0 4 11zm6.71-1.71A.997.997 0 0 0 10 9c-.28 0-.53.11-.71.29l-6 6a1.003 1.003 0 0 0 1.42 1.42l5.29-5.3 5.29 5.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71l-6-6z',
        ],
        'doughnut-chart': [
          'M16 10c0 3.31-2.69 6-6 6s-6-2.69-6-6 2.69-6 6-6V0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10h-4zm-.09-1h4.04C19.48 4.28 15.72.52 11 .05V4.1A5.98 5.98 0 0 1 15.91 9z',
        ],
        download: [
          'M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm4.71 11.71l-4 4c-.18.18-.43.29-.71.29s-.53-.11-.71-.29l-4-4a1.003 1.003 0 0 1 1.42-1.42L9 12.59V5c0-.55.45-1 1-1s1 .45 1 1v7.59l2.29-2.29c.18-.19.43-.3.71-.3a1.003 1.003 0 0 1 .71 1.71z',
        ],
        'drag-handle-horizontal': [
          'M7.5 11c-.83 0-1.5.67-1.5 1.5S6.67 14 7.5 14 9 13.33 9 12.5 8.33 11 7.5 11zm-5-5C1.67 6 1 6.67 1 7.5S1.67 9 2.5 9 4 8.33 4 7.5 3.33 6 2.5 6zm0 5c-.83 0-1.5.67-1.5 1.5S1.67 14 2.5 14 4 13.33 4 12.5 3.33 11 2.5 11zm15-2c.83 0 1.5-.67 1.5-1.5S18.33 6 17.5 6 16 6.67 16 7.5 16.67 9 17.5 9zm-5 2c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm5 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm-10-5C6.67 6 6 6.67 6 7.5S6.67 9 7.5 9 9 8.33 9 7.5 8.33 6 7.5 6zm5 0c-.83 0-1.5.67-1.5 1.5S11.67 9 12.5 9 14 8.33 14 7.5 13.33 6 12.5 6z',
        ],
        'drag-handle-vertical': [
          'M7.5 6C6.67 6 6 6.67 6 7.5S6.67 9 7.5 9 9 8.33 9 7.5 8.33 6 7.5 6zm0 5c-.83 0-1.5.67-1.5 1.5S6.67 14 7.5 14 9 13.33 9 12.5 8.33 11 7.5 11zm0 5c-.83 0-1.5.67-1.5 1.5S6.67 19 7.5 19 9 18.33 9 17.5 8.33 16 7.5 16zm5-12c.83 0 1.5-.67 1.5-1.5S13.33 1 12.5 1 11 1.67 11 2.5 11.67 4 12.5 4zm-5-3C6.67 1 6 1.67 6 2.5S6.67 4 7.5 4 9 3.33 9 2.5 8.33 1 7.5 1zm5 10c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0 5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-10c-.83 0-1.5.67-1.5 1.5S11.67 9 12.5 9 14 8.33 14 7.5 13.33 6 12.5 6z',
        ],
        draw: [
          'M17.7 12.7c0-.1 0-.2-.1-.3l-2-7c-.1-.3-.3-.6-.6-.7L1.8 0l-.6.5L7.7 7c.3-.2.6-.3 1-.3 1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2c0-.4.1-.7.3-1L.5 1.2l-.5.6L4.7 15c.1.3.4.5.7.6l7 2c.1 0 .2.1.3.1.3 0 .5-.1.7-.3l4-4c.2-.2.3-.5.3-.7zm1 1c-.3 0-.5.1-.7.3l-4 4c-.2.2-.3.4-.3.7 0 .5.4 1 1 1 .3 0 .5-.1.7-.3l4-4c.2-.2.3-.4.3-.7 0-.6-.5-1-1-1z',
        ],
        'drive-time': [
          'M20.01 7.7c0-.63-.5-1.14-1.1-1.14h-1.32l-.95-2.57c-.24-.64-.95-1.31-1.59-1.5 0 0-1.65-.49-5.05-.49s-5.04.49-5.04.49c-.63.19-1.35.86-1.59 1.5l-.95 2.57H1.1C.5 6.56 0 7.07 0 7.7c0 .63.5 1.14 1.1 1.14h.47l-.34.91c-.24.64-.43 1.72-.43 2.4v5.39c0 .8.63 1.45 1.4 1.45.77 0 1.4-.65 1.4-1.45v-.83h12.8v.83c0 .8.63 1.45 1.4 1.45s1.4-.65 1.4-1.45v-5.39c0-.68-.19-1.77-.43-2.4l-.34-.91h.47c.61 0 1.11-.51 1.11-1.14zm-16.47.34l1.12-3.16c.08-.22.32-.39.54-.39h9.6c.22 0 .46.17.54.39l1.12 3.16c.08.21-.04.39-.26.39H3.8c-.22-.01-.34-.18-.26-.39zm.96 4.94c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.68 1.5 1.5c0 .83-.67 1.5-1.5 1.5zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z',
        ],
        duplicate: [
          'M15 4H1c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zm-1 14H2V6h12v12zm5-18H5c-.55 0-1 .45-1 1v2h2V2h12v12h-1v2h2c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1z',
        ],
        edit: [
          'M4.59 12.59l2.83 2.83 7.65-7.65-2.83-2.83-7.65 7.65zM2 18l4.41-1.59-2.81-2.79L2 18zM16 2c-.55 0-1.05.22-1.41.59l-1.65 1.65 2.83 2.83 1.65-1.65A2.006 2.006 0 0 0 16 2z',
        ],
        eject: [
          'M4 12h12c.55 0 1-.45 1-1 0-.25-.1-.47-.25-.64l.01-.01-6-7-.01.01C10.57 3.14 10.3 3 10 3s-.57.14-.75.36l-.01-.01-6 7 .01.01c-.15.17-.25.39-.25.64 0 .55.45 1 1 1zm12 1H4c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1z',
        ],
        endorsed: [
          'M19.83 9.38L18.81 7.6V5.62c0-.45-.23-.85-.61-1.08l-1.71-1-1.02-1.76a1.25 1.25 0 0 0-1.08-.61h-2.03l-1.74-1c-.38-.23-.87-.23-1.25 0l-1.74 1H5.65c-.44 0-.85.23-1.08.61L3.58 3.5l-1.8 1.04c-.38.24-.62.64-.62 1.08v2.06L.17 9.4c-.11.19-.17.4-.17.61s.06.42.17.61l.99 1.72v2.06c0 .45.23.85.61 1.08l1.78 1.02.99 1.72c.23.38.63.61 1.08.61h1.99l1.74 1c.19.11.41.17.62.17.21 0 .42-.06.61-.17l1.74-1h2.03c.44 0 .85-.23 1.08-.61l1.02-1.76 1.71-1c.38-.23.61-.64.61-1.08v-1.97l1.02-1.78c.27-.38.27-.85.04-1.25zm-5.08-.71l-5.01 5.01c-.18.18-.43.29-.71.29-.28 0-.53-.11-.71-.29l-3.01-3.01a1.003 1.003 0 0 1 1.42-1.42l2.3 2.3 4.31-4.3a1.003 1.003 0 0 1 1.71.71c0 .28-.12.53-.3.71z',
        ],
        envelope: [
          'M0 4.01v11.91l6.27-6.27L0 4.01zm18.91-1.03H1.09L10 10.97l8.91-7.99zm-5.18 6.66L20 15.92V4.01l-6.27 5.63zm-3.23 2.9c-.13.12-.31.19-.5.19s-.37-.07-.5-.19l-2.11-1.89-6.33 6.33h17.88l-6.33-6.33-2.11 1.89z',
        ],
        eraser: [
          'M18.71 8.43c.39-.4.39-1.05 0-1.45l-5.53-5.72a.967.967 0 0 0-1.4 0L1.29 12.1c-.39.4-.39 1.05 0 1.45l4.25 4.39 2.13 2.05h9.27c.02 0 .03.01.05.01.55 0 1-.45 1-1s-.45-1-1-1H9.46l.05-.05h.01l.81-.84 8.38-8.68zM7.52 17.94l-4.95-5.12 4.46-4.61 4.95 5.12-4.46 4.61z',
        ],
        error: [
          'M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm1 16H9v-2h2v2zm0-3H9V4h2v9z',
        ],
        euro: [
          'M8.89 4.47c.56-.31 1.23-.47 2.03-.47.44 0 .85.07 1.25.22.4.14.76.35 1.07.6.17.14.33.3.47.47l2.32-2.32c-.16-.15-.3-.32-.47-.46-.62-.49-1.33-.87-2.12-1.13-.8-.25-1.64-.38-2.52-.38-1.24 0-2.35.22-3.33.66-.99.44-1.82 1.05-2.49 1.82-.68.78-1.2 1.68-1.56 2.72-.09.26-.13.54-.2.8H2c-.55 0-1 .45-1 1s.45 1 1 1h1.04c-.01.2-.04.38-.04.58 0 .15.03.28.03.42H2c-.55 0-1 .45-1 1s.45 1 1 1h1.31c.07.3.13.6.23.89.36 1.02.88 1.92 1.56 2.67.68.76 1.51 1.35 2.49 1.79.98.43 2.09.65 3.33.65.99 0 1.9-.15 2.73-.46.83-.3 1.55-.74 2.17-1.32.03-.03.05-.06.08-.09l-2.41-2.15c-.01.01-.02.02-.02.03-.61.67-1.46 1-2.54 1-.8 0-1.47-.16-2.03-.47-.56-.31-1.01-.72-1.35-1.24-.28-.38-.47-.83-.63-1.3H12c.55 0 1-.45 1-1s-.45-1-1-1H6.56c0-.14-.02-.28-.02-.42 0-.2.02-.39.03-.58H13c.55 0 1-.45 1-1s-.45-1-1-1H6.94c.15-.46.34-.9.59-1.28.35-.52.8-.94 1.36-1.25zM18 11.38v0z',
        ],
        exchange: [
          'M2.5 8a2.5 2.5 0 0 0 0 5 2.5 2.5 0 0 0 0-5zm10.35 3.15a.495.495 0 1 0-.7.7L13.3 13H5.5c-.28 0-.5.22-.5.5s.22.5.5.5h7.79l-1.15 1.15c-.08.09-.14.21-.14.35a.495.495 0 0 0 .85.35l2-2c.09-.09.15-.21.15-.35s-.06-.26-.15-.35l-2-2zM17.5 8a2.5 2.5 0 0 0 0 5 2.5 2.5 0 0 0 0-5zM7.15 9.85a.495.495 0 1 0 .7-.7L6.71 8h7.79c.28 0 .5-.22.5-.5s-.22-.5-.5-.5H6.71l1.15-1.15c.08-.09.14-.21.14-.35a.495.495 0 0 0-.85-.35l-2 2c-.09.09-.15.21-.15.35s.06.26.15.35l2 2z',
        ],
        'exclude-row': [
          'M1 3h18c.55 0 1-.45 1-1s-.45-1-1-1H1c-.55 0-1 .45-1 1s.45 1 1 1zM0 13a1.003 1.003 0 0 0 1.71.71L4 11.41l2.29 2.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71L5.41 10 7.7 7.71c.19-.18.3-.43.3-.71a1.003 1.003 0 0 0-1.71-.71L4 8.59l-2.29-2.3A1.003 1.003 0 0 0 .29 7.71L2.59 10 .3 12.29c-.19.18-.3.43-.3.71zm18-5h-7c-1.1 0-2 .9-2 2s.9 2 2 2h7c1.1 0 2-.9 2-2s-.9-2-2-2zm1 9H1c-.55 0-1 .45-1 1s.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1z',
        ],
        'expand-all': [
          'M4 9c.28 0 .53-.11.71-.29L10 3.41l5.29 5.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71l-6-6C10.53 1.11 10.28 1 10 1s-.53.11-.71.29l-6 6A1.003 1.003 0 0 0 4 9zm12 2c-.28 0-.53.11-.71.29L10 16.59 4.71 11.3A.965.965 0 0 0 4 11a1.003 1.003 0 0 0-.71 1.71l6 6c.18.18.43.29.71.29s.53-.11.71-.29l6-6A1.003 1.003 0 0 0 16 11z',
        ],
        export: [
          'M5 7c.28 0 .53-.11.71-.29L9 3.41V15c0 .55.45 1 1 1s1-.45 1-1V3.41l3.29 3.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71l-5-5C10.53.11 10.28 0 10 0s-.53.11-.71.29l-5 5A1.003 1.003 0 0 0 5 7zm14 7c-.55 0-1 .45-1 1v3H2v-3c0-.55-.45-1-1-1s-1 .45-1 1v4c0 .55.45 1 1 1h18c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1z',
        ],
        'eye-off': [
          'M20 9.96v-.03-.01-.02-.02a.794.794 0 0 0-.21-.43c-.55-.69-1.19-1.3-1.85-1.87l-3.93 2.62a3.966 3.966 0 0 1-3.96 3.77c-.47 0-.91-.1-1.33-.24l-2.24 1.49c.52.21 1.05.39 1.6.51 1.21.27 2.43.28 3.64.05 1.11-.21 2.17-.64 3.17-1.18 1.56-.84 2.99-2 4.23-3.3.23-.24.46-.49.67-.75a.87.87 0 0 0 .21-.43v-.02-.02-.01-.03V10v-.04zm-.46-5.14c.27-.18.46-.47.46-.82 0-.55-.45-1-1-1-.21 0-.39.08-.54.18l-.01-.02L15 5.46c-.95-.53-1.95-.96-3.01-1.2a9.158 9.158 0 0 0-3.65-.04c-1.11.21-2.17.64-3.17 1.18-1.56.84-2.99 2-4.23 3.3-.23.24-.46.48-.67.75-.27.34-.27.76 0 1.1.64.79 1.39 1.5 2.16 2.15.26.21.52.41.79.61L.44 15.16l.01.02A1 1 0 0 0 0 16c0 .55.45 1 1 1 .21 0 .39-.08.54-.18l.01.02 18-12-.01-.02zm-8.67 3.4c-.25-.12-.53-.2-.83-.2-1.1 0-1.99.89-1.99 1.99 0 .03.02.06.02.09l-1.78 1.19c-.14-.4-.22-.83-.22-1.28 0-2.19 1.78-3.97 3.98-3.97 1.01 0 1.91.38 2.61 1l-1.79 1.18z',
        ],
        'eye-on': [
          'M13.3 8.71c.18.18.43.29.71.29s.53-.11.71-.29l4.99-5a1.003 1.003 0 0 0-1.42-1.42L14 6.58l-2.29-2.29a.956.956 0 0 0-.7-.29 1.003 1.003 0 0 0-.71 1.71l3 3zM20 9.96v-.03-.01-.02-.02a.823.823 0 0 0-.21-.44c-.44-.55-.94-1.05-1.46-1.52l-2.2 2.2c-.55.54-1.3.88-2.12.88-.05 0-.09-.01-.14-.01a3.978 3.978 0 0 1-3.86 3.02 4.007 4.007 0 0 1-1.66-7.65A2.97 2.97 0 0 1 8.02 5c0-.28.05-.54.12-.8-1.05.22-2.07.64-3.02 1.15-1.57.85-3 2.02-4.24 3.33-.23.25-.46.5-.67.76-.28.35-.28.77 0 1.12.64.8 1.4 1.52 2.17 2.17 1.66 1.41 3.56 2.58 5.66 3.06 1.21.27 2.43.29 3.65.05 1.11-.21 2.18-.65 3.18-1.19 1.57-.85 3-2.02 4.24-3.33.23-.24.46-.49.67-.76.11-.12.18-.27.21-.44v-.02-.02-.01-.03V10c.01-.01.01-.03.01-.04zm-9.99 2.05c1.03 0 1.87-.79 1.98-1.8l-.09-.09-.01.01-2.1-2.11c-1 .11-1.77.95-1.77 1.98-.01 1.11.89 2.01 1.99 2.01z',
        ],
        'eye-open': [
          'M10.01 7.984A2.008 2.008 0 0 0 8.012 9.99c0 1.103.9 2.006 1.998 2.006a2.008 2.008 0 0 0 1.998-2.006c0-1.103-.9-2.006-1.998-2.006zM20 9.96v-.03-.01-.02-.02a.827.827 0 0 0-.21-.442c-.64-.802-1.398-1.514-2.168-2.166-1.658-1.404-3.566-2.587-5.664-3.058a8.982 8.982 0 0 0-3.656-.05c-1.11.2-2.178.641-3.177 1.183-1.569.852-2.997 2.016-4.246 3.33-.23.25-.46.49-.67.761-.279.351-.279.773 0 1.124.64.802 1.4 1.514 2.169 2.166 1.658 1.404 3.566 2.577 5.664 3.058 1.209.271 2.438.281 3.656.05 1.11-.21 2.178-.651 3.177-1.193 1.569-.852 2.997-2.016 4.246-3.33.23-.24.46-.49.67-.751.11-.12.179-.271.209-.442v-.02-.02-.01-.03V10v-.04zM10.01 14A4.003 4.003 0 0 1 6.014 9.99a4.003 4.003 0 0 1 3.996-4.011 4.003 4.003 0 0 1 3.996 4.011 4.003 4.003 0 0 1-3.996 4.011z',
        ],
        'fast-backward': [
          'M18 3c-.23 0-.42.09-.59.21l-.01-.01L11 8V4c0-.55-.45-1-1-1-.23 0-.42.09-.59.21L9.4 3.2l-8 6 .01.01C1.17 9.4 1 9.67 1 10s.17.6.41.79l-.01.01 8 6 .01-.01c.17.12.36.21.59.21.55 0 1-.45 1-1v-4l6.4 4.8.01-.01c.17.12.36.21.59.21.55 0 1-.45 1-1V4c0-.55-.45-1-1-1z',
        ],
        'fast-forward': [
          'M19 10c0-.33-.17-.6-.41-.79l.01-.01-8-6-.01.01C10.42 3.09 10.23 3 10 3c-.55 0-1 .45-1 1v4L2.6 3.2l-.01.01C2.42 3.09 2.23 3 2 3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1 .23 0 .42-.09.59-.21l.01.01L9 12v4c0 .55.45 1 1 1 .23 0 .42-.09.59-.21l.01.01 8-6-.01-.01c.24-.19.41-.46.41-.79z',
        ],
        feed: [
          'M2.5 15a2.5 2.5 0 0 0 0 5 2.5 2.5 0 0 0 0-5zm.5-5c-.55 0-1 .45-1 1s.45 1 1 1c2.76 0 5 2.24 5 5 0 .55.45 1 1 1s1-.45 1-1c0-3.87-3.13-7-7-7zM3 0c-.55 0-1 .45-1 1s.45 1 1 1c8.28 0 15 6.72 15 15 0 .55.45 1 1 1s1-.45 1-1C20 7.61 12.39 0 3 0zm0 5c-.55 0-1 .45-1 1s.45 1 1 1c5.52 0 10 4.48 10 10 0 .55.45 1 1 1s1-.45 1-1C15 10.37 9.63 5 3 5z',
        ],
        'feed-subscribed': [
          'M2.5 15a2.5 2.5 0 0 0 0 5 2.5 2.5 0 0 0 0-5zM3 2c1.76 0 3.44.31 5.01.87.03-.71.31-1.35.75-1.85C6.96.37 5.03 0 3 0c-.55 0-1 .45-1 1s.45 1 1 1zm10.32 4.67a.99.99 0 0 0 1.4 0l4.98-4.98c.19-.17.3-.42.3-.7 0-.55-.45-1-1-1a.99.99 0 0 0-.7.29l-4.27 4.27-2.28-2.28a.99.99 0 0 0-.7-.29c-.55 0-.99.45-.99 1 0 .28.11.52.29.7l2.97 2.99zM3 10c-.55 0-1 .45-1 1s.45 1 1 1c2.76 0 5 2.24 5 5 0 .55.45 1 1 1s1-.45 1-1c0-3.87-3.13-7-7-7zm13.94-2.69l-.82.82-.02-.02c-.2.2-.42.37-.67.51A14.8 14.8 0 0 1 18 17c0 .55.45 1 1 1s1-.45 1-1c0-3.61-1.14-6.94-3.06-9.69zM3 5c-.55 0-1 .45-1 1s.45 1 1 1c5.52 0 10 4.48 10 10 0 .55.45 1 1 1s1-.45 1-1C15 10.37 9.63 5 3 5z',
        ],
        film: [
          'M19 2h-5v3H6V2H1c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h5v-3h8v3h5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zM4 17H2v-2h2v2zm0-3H2v-2h2v2zm0-3H2V9h2v2zm0-3H2V6h2v2zm0-3H2V3h2v2zm10 8H6V7h8v6zm4 4h-2v-2h2v2zm0-3h-2v-2h2v2zm0-3h-2V9h2v2zm0-3h-2V6h2v2zm0-3h-2V3h2v2z',
        ],
        filter: [
          'M18 1H2a1.003 1.003 0 0 0-.71 1.71L7 8.41V18a1.003 1.003 0 0 0 1.71.71l4-4c.18-.18.29-.43.29-.71V8.41l5.71-5.71c.18-.17.29-.42.29-.7 0-.55-.45-1-1-1z',
        ],
        'filter-keep': [
          'M15 2c0-.55-.45-1-1-1H1a1.003 1.003 0 0 0-.71 1.71L5 7.41V16a1.003 1.003 0 0 0 1.71.71l3-3c.18-.18.29-.43.29-.71V7.41l4.71-4.71c.18-.17.29-.42.29-.7zm4 11c-.28 0-.53.11-.71.29L15 16.59l-1.29-1.29A.965.965 0 0 0 13 15a1.003 1.003 0 0 0-.71 1.71l2 2c.18.18.43.29.71.29s.53-.11.71-.29l4-4A1.003 1.003 0 0 0 19 13z',
        ],
        'filter-list': [
          'M15 2c0-.55-.45-1-1-1H1a1.003 1.003 0 0 0-.71 1.71L5 7.41V16a1.003 1.003 0 0 0 1.71.71l3-3c.18-.18.29-.43.29-.71V7.41l4.71-4.71c.18-.17.29-.42.29-.7zm-4 8c0 .55.45 1 1 1h7c.55 0 1-.45 1-1s-.45-1-1-1h-7c-.55 0-1 .45-1 1zm8 7h-7c-.55 0-1 .45-1 1s.45 1 1 1h7c.55 0 1-.45 1-1s-.45-1-1-1zm0-4h-7c-.55 0-1 .45-1 1s.45 1 1 1h7c.55 0 1-.45 1-1s-.45-1-1-1z',
        ],
        'filter-remove': [
          'M15 2c0-.55-.45-1-1-1H1a1.003 1.003 0 0 0-.71 1.71L5 7.41V16a1.003 1.003 0 0 0 1.71.71l3-3c.18-.18.29-.43.29-.71V7.41l4.71-4.71c.18-.17.29-.42.29-.7zm2.91 13.5l1.79-1.79c.19-.18.3-.43.3-.71a1.003 1.003 0 0 0-1.71-.71l-1.79 1.79-1.79-1.79a1.003 1.003 0 0 0-1.42 1.42l1.79 1.79-1.79 1.79a1.003 1.003 0 0 0 1.42 1.42l1.79-1.79 1.79 1.79a1.003 1.003 0 0 0 1.42-1.42l-1.8-1.79z',
        ],
        flag: [
          'M3 3c-.55 0-1 .45-1 1v15c0 .55.45 1 1 1s1-.45 1-1V4c0-.55-.45-1-1-1zm0-3c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm2 4.08v8.28c3.01-2.41 8.67 2.64 13 0V4.08C13.61 7.14 8.01 1 5 4.08z',
        ],
        flame: [
          'M11.622 0c0 1.71.49 3.077 1.472 4.103C16.364 6.496 18 9.23 18 12.308c0 3.418-1.962 5.983-5.887 7.692 2.887-3 2.453-4.23-.49-8C8.5 13.5 9 14.5 9.5 16.5c-1.048 0-2 0-2.5-.5 0 .684 1.197 2.5 1.952 4-3.924-1.026-8.123-7.18-6.651-7.692.981-.342 2.126-.171 3.434.513C4.1 6.667 6.062 2.393 11.622 0z',
        ],
        flash: [
          'M4.96 6.37a1.003 1.003 0 0 0 1.42-1.42l-2-2a1.07 1.07 0 0 0-.71-.28 1.003 1.003 0 0 0-.71 1.71l2 1.99zm9.37.3c.28 0 .53-.11.71-.29l2-2a1.003 1.003 0 0 0-1.42-1.42l-2 2a1.003 1.003 0 0 0 .71 1.71zM10 5c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1S9 .45 9 1v3c0 .55.45 1 1 1zm-5 5c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1s.45 1 1 1h3c.55 0 1-.45 1-1zm14-1h-3c-.55 0-1 .45-1 1s.45 1 1 1h3c.55 0 1-.45 1-1s-.45-1-1-1zm-9-3c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm5.04 1.63a1.003 1.003 0 0 0-1.42 1.42l2 2a1.003 1.003 0 0 0 1.42-1.42l-2-2zM10 15c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1s1-.45 1-1v-3c0-.55-.45-1-1-1zm-4.33-1.67c-.28 0-.53.11-.71.29l-2 2a1.003 1.003 0 0 0 1.42 1.42l2-2a1.003 1.003 0 0 0-.71-1.71z',
        ],
        'floppy-disk': [
          'M14 1h-3v5h3V1zm5.71 2.29l-3-3A.997.997 0 0 0 16 0h-1v7H5V0H1C.45 0 0 .45 0 1v18c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V4c0-.28-.11-.53-.29-.71zM17 19H3v-8c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v8z',
        ],
        flows: [
          'M17.5 7.93a2.5 2.5 0 0 0-2.45 2h-2.3l-4.01-4-.75.75 3.26 3.25h-6.3a2.5 2.5 0 1 0 0 1h6.3l-3.26 3.25.75.75 4.01-4h2.3a2.5 2.5 0 1 0 2.45-3z',
        ],
        'folder-close': [
          'M0 17c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V7H0v10zM19 4H9.41l-1.7-1.71A.997.997 0 0 0 7 2H1c-.55 0-1 .45-1 1v3h20V5c0-.55-.45-1-1-1z',
        ],
        'folder-new': [
          'M12.994 7c0 1.655 1.344 3 2.998 3a3.002 3.002 0 0 0 2.999-3H20v10c0 .55-.45 1-1 1H1.01c-.55 0-1-.45-1-1V7h12.984zM10.76 6H0V3c0-.55.45-1 1-1h3.998c.28 0 .53.11.71.29L7.415 4h2.579c0 .768.29 1.469.765 2zm8.23-3c.55 0 1 .45 1 1s-.45 1-1 1h-1.998v2c0 .55-.45 1-1 1s-1-.45-1-1V5h-1.998c-.55 0-1-.45-1-1s.45-1 1-1h1.999V1c0-.55.45-1 .999-1 .55 0 1 .45 1 1v2h1.999z',
        ],
        'folder-open': [
          'M20 9c0-.55-.45-1-1-1H5c-.43 0-.79.27-.93.65h-.01l-3 8h.01c-.04.11-.07.23-.07.35 0 .55.45 1 1 1h14c.43 0 .79-.27.93-.65h.01l3-8h-.01c.04-.11.07-.23.07-.35zM3.07 7.63C3.22 7.26 3.58 7 4 7h14V5c0-.55-.45-1-1-1H8.41l-1.7-1.71A.997.997 0 0 0 6 2H1c-.55 0-1 .45-1 1v12.31l3.07-7.68z',
        ],
        'folder-shared': [
          'M11 4H9.41l-1.7-1.71A.997.997 0 0 0 7 2H1c-.55 0-1 .45-1 1v3h11.78C11.3 5.47 11 4.77 11 4zm8-1h-5c-.55 0-1 .45-1 1s.45 1 1 1h2.59L12.3 9.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71L18 6.41V9c0 .55.45 1 1 1s1-.45 1-1V4c0-.55-.45-1-1-1zm-2.46 7.7l-1.42 1.42a2.996 2.996 0 1 1-4.24-4.24l.88-.88H0v10c0 .55.45 1 1 1h18c.55 0 1-.45 1-1v-5.18c-.31.11-.65.18-1 .18-1.02 0-1.92-.52-2.46-1.3z',
        ],
        'folder-shared-open': [
          'M3.07 7.63C3.22 7.26 3.58 7 4 7h7.76l.54-.54A2.97 2.97 0 0 1 11 4H8.41l-1.7-1.71A.997.997 0 0 0 6 2H1c-.55 0-1 .45-1 1v12.31l3.07-7.68zm13.47 3.07l-1.42 1.42A2.996 2.996 0 0 1 10 10c0-.77.3-1.47.78-2H5c-.43 0-.79.27-.93.65h-.01l-3 8h.01c-.04.11-.07.23-.07.35 0 .55.45 1 1 1h14c.43 0 .79-.27.93-.65h.01l2.01-5.36c-1-.01-1.88-.52-2.41-1.29zM19 3h-5c-.55 0-1 .45-1 1s.45 1 1 1h2.59L12.3 9.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71L18 6.41V9c0 .55.45 1 1 1s1-.45 1-1V4c0-.55-.45-1-1-1z',
        ],
        follower: [
          'M11.54 15.92c-1.48-.65-1.28-1.05-1.33-1.59-.01-.07-.01-.15-.01-.23.51-.45.92-1.07 1.19-1.78 0 0 .01-.04.02-.05.06-.15.11-.32.15-.48.34-.07.54-.44.61-.78.08-.14.23-.48.2-.87-.05-.5-.25-.73-.47-.82v-.09c0-.63-.06-1.55-.17-2.15-.02-.17-.06-.33-.11-.5a3.69 3.69 0 0 0-1.29-1.86C9.69 4.25 8.8 4 8.01 4c-.8 0-1.69.25-2.32.73-.61.47-1.06 1.13-1.28 1.86-.05.17-.09.33-.11.5-.12.6-.18 1.51-.18 2.14v.08c-.23.09-.44.32-.49.83-.04.39.12.73.2.87.08.35.28.72.63.78.04.17.09.33.15.48 0 .01.01.02.01.03l.01.01c.27.72.7 1.35 1.22 1.8 0 .07-.01.14-.01.21-.05.54.1.94-1.38 1.59-1.48.65-3.71 1.35-4.16 2.4C-.16 19.38.02 20 .02 20h15.95s.18-.62-.27-1.67c-.46-1.06-2.68-1.75-4.16-2.41zm8.15-12.63l-3-3a.956.956 0 0 0-.7-.29 1.003 1.003 0 0 0-.71 1.71L16.58 3H13c-.55 0-1 .45-1 1s.45 1 1 1h3.58l-1.29 1.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71l3-3c.18-.18.29-.43.29-.71 0-.28-.11-.53-.3-.71z',
        ],
        following: [
          'M11.55 15.92c-1.48-.65-1.28-1.05-1.33-1.59-.01-.07-.01-.15-.01-.23.51-.45.92-1.07 1.19-1.78 0 0 .01-.04.02-.05.06-.15.11-.32.15-.48.34-.07.54-.44.61-.78.08-.14.23-.48.2-.87-.05-.5-.25-.73-.47-.82v-.09c0-.63-.06-1.55-.17-2.15-.02-.17-.06-.33-.11-.5a3.69 3.69 0 0 0-1.29-1.86C9.7 4.25 8.81 4 8.02 4c-.79 0-1.68.25-2.31.73-.61.47-1.07 1.13-1.29 1.86-.05.16-.09.33-.11.5-.12.6-.18 1.51-.18 2.14v.08c-.23.09-.44.32-.48.83-.04.39.12.73.2.87.08.35.28.72.63.78.04.17.09.33.15.48 0 .01.01.02.01.03l.01.01c.27.72.7 1.35 1.22 1.8 0 .07-.01.14-.01.21-.05.54.1.94-1.38 1.59C3 16.56.77 17.26.32 18.31-.15 19.38.04 20 .04 20h15.95s.18-.62-.27-1.67c-.46-1.06-2.69-1.75-4.17-2.41zM19 3h-3.58l1.29-1.29A1.003 1.003 0 0 0 15.29.29l-3 3c-.17.18-.28.43-.28.71 0 .28.11.53.29.71l3 3c.18.18.43.29.7.29a1.003 1.003 0 0 0 .71-1.71L15.42 5H19c.55 0 1-.45 1-1s-.45-1-1-1z',
        ],
        font: [
          'M17.93 18.64l-7-18C10.78.27 10.42 0 10 0s-.78.27-.93.64l-7 18c-.04.11-.07.23-.07.36 0 .55.45 1 1 1 .42 0 .78-.27.93-.64L6.41 13h7.19l2.47 6.36c.15.37.51.64.93.64.55 0 1-.45 1-1 0-.13-.03-.25-.07-.36zM7.18 11L10 3.76 12.82 11H7.18z',
        ],
        fork: [
          'M16.71 11.29a1.003 1.003 0 0 0-1.42 1.42l1.3 1.29h-2.17l-8-8h10.17L15.3 7.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71l3-3c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71l-3-3a1.003 1.003 0 0 0-1.42 1.42L16.59 4H1c-.55 0-1 .45-1 1s.45 1 1 1h2.59l9.71 9.71c.17.18.42.29.7.29h2.59l-1.29 1.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71l3-3c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71l-3-3z',
        ],
        form: [
          'M2 13v4h4v-4H2zm-1-2h6c.55 0 1 .45 1 1v6c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1v-6c0-.55.45-1 1-1zm11-7h7c.55 0 1 .45 1 1s-.45 1-1 1h-7c-.55 0-1-.45-1-1s.45-1 1-1zM8 1a1.003 1.003 0 0 1 .71 1.71l-5 6C3.53 8.89 3.28 9 3 9s-.53-.11-.71-.29l-2-2a1.003 1.003 0 0 1 1.42-1.42L3 6.59l4.29-5.3C7.47 1.11 7.72 1 8 1zm4 13h7c.55 0 1 .45 1 1s-.45 1-1 1h-7c-.55 0-1-.45-1-1s.45-1 1-1z',
        ],
        'full-circle': ['M9.96 0a10 10 0 1 0 0 20 10 10 0 1 0 0-20z'],
        'full-stacked-chart': [
          'M15 16h2c.55 0 1-.45 1-1v-5h-4v5c0 .55.45 1 1 1zM12 2c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1v4h4V2zm6 4h-4v3h4V6zm0-4c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1v3h4V2zm-6 5H8v5h4V7zm-9 9h2c.55 0 1-.45 1-1v-3H2v3c0 .55.45 1 1 1zm6 0h2c.55 0 1-.45 1-1v-2H8v2c0 .55.45 1 1 1zm10 1H1c-.55 0-1 .45-1 1s.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1zM6 2c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v3h4V2zm0 4H2v5h4V6z',
        ],
        fullscreen: [
          'M3.41 2H6c.55 0 1-.45 1-1s-.45-1-1-1H1C.45 0 0 .45 0 1v5c0 .55.45 1 1 1s1-.45 1-1V3.41L7.29 8.7c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71L3.41 2zM8 11c-.28 0-.53.11-.71.29L2 16.59V14c0-.55-.45-1-1-1s-1 .45-1 1v5c0 .55.45 1 1 1h5c.55 0 1-.45 1-1s-.45-1-1-1H3.41l5.29-5.29c.19-.18.3-.43.3-.71 0-.55-.45-1-1-1zM19 0h-5c-.55 0-1 .45-1 1s.45 1 1 1h2.59L11.3 7.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71L18 3.41V6c0 .55.45 1 1 1s1-.45 1-1V1c0-.55-.45-1-1-1zm0 13c-.55 0-1 .45-1 1v2.59l-5.29-5.29A.965.965 0 0 0 12 11a1.003 1.003 0 0 0-.71 1.71l5.3 5.29H14c-.55 0-1 .45-1 1s.45 1 1 1h5c.55 0 1-.45 1-1v-5c0-.55-.45-1-1-1z',
        ],
        function: [
          'M10.14 5.82H8.73c.4-1.66.94-2.87 1.6-3.64.4-.48.8-.72 1.18-.72.08 0 .14.02.19.07.05.05.07.1.07.18 0 .07-.05.19-.16.37s-.16.36-.16.52c0 .23.08.43.25.59a.9.9 0 0 0 .64.25c.28 0 .51-.1.7-.3.19-.2.28-.47.28-.81 0-.39-.14-.7-.42-.94-.28-.24-.74-.36-1.36-.36-.97 0-1.86.29-2.65.87-.79.56-1.54 1.52-2.26 2.85-.24.46-.48.75-.7.88-.22.13-.57.19-1.06.19l-.32 1.15H5.9l-1.99 7.85c-.33 1.29-.56 2.09-.67 2.39-.17.44-.43.81-.77 1.12a.74.74 0 0 1-.5.19c-.05 0-.1-.02-.14-.05l-.04-.07c0-.03.05-.1.15-.2.1-.1.15-.26.15-.47 0-.23-.08-.42-.23-.57-.16-.15-.38-.23-.67-.23-.35 0-.63.1-.85.29-.21.2-.32.43-.32.7 0 .29.13.54.39.75.25.22.65.33 1.2.33.88 0 1.66-.23 2.33-.69.68-.46 1.27-1.17 1.78-2.14.51-.96 1.03-2.52 1.56-4.66l1.14-4.54H9.8l.34-1.15zm6.8 1.95c.25-.2.51-.29.78-.29.1 0 .29.04.56.11.27.08.51.11.72.11.29 0 .52-.1.72-.3.18-.19.28-.45.28-.77 0-.33-.1-.6-.29-.8-.19-.2-.47-.29-.82-.29-.32 0-.62.08-.9.23-.28.15-.64.49-1.08 1-.33.38-.81 1.05-1.44 2a9.712 9.712 0 0 0-1.31-3.22l-3.4.59-.07.37c.25-.05.47-.08.64-.08.34 0 .62.15.84.44.35.46.84 1.85 1.46 4.19-.49.66-.82 1.09-1 1.3-.3.33-.55.54-.74.64-.15.08-.32.12-.51.12-.14 0-.38-.08-.7-.24-.22-.1-.42-.16-.59-.16-.33 0-.6.11-.82.32-.21.22-.32.49-.32.83 0 .31.1.57.3.77.2.2.47.29.8.29.32 0 .63-.07.92-.21.29-.14.64-.43 1.08-.88.43-.45 1.03-1.16 1.79-2.14.29.93.55 1.61.76 2.03.21.42.46.73.74.91.28.19.62.28 1.04.28.4 0 .81-.15 1.23-.44.55-.38 1.1-1.04 1.68-1.97l-.35-.21c-.39.55-.68.89-.87 1.03-.12.09-.27.13-.44.13-.2 0-.4-.13-.59-.38-.33-.43-.77-1.63-1.33-3.6.47-.86.89-1.44 1.23-1.71z',
        ],
        'gantt-chart': [
          'M4 7h5c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1zm3 2v1c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1H8c-.55 0-1 .45-1 1zm12 3h-6c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1zm0 4H2V3c0-.55-.45-1-1-1s-1 .45-1 1v14c0 .55.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1z',
        ],
        geolocation: ['M0 8.33l9.17 2.5 2.5 9.17L20 0z'],
        geosearch: [
          'M8 18.88c-3.79 0-6.88-3.09-6.88-6.88 0-.61.08-1.22.23-1.79.03.01.06-.01.1-.01h.09v.55c0 .23.21.42.44.42.04 0 .09-.01.12-.02l.9.88c.09.09.23.09.32 0s.09-.23 0-.32l-.86-.9c0-.02.05-.04.05-.07v-.13c0-.18.1-.25.29-.41h.53c.1 0 .19-.01.27-.05.01-.01.02 0 .03-.01.02-.01.03-.02.05-.04.01-.01.02-.01.02-.02l.02-.02 1.13-1.13c-.16-.32-.3-.65-.42-.99h-.64v-.53c0-.01.06.06.06-.1h.38c-.04-.16-.08-.32-.1-.48h-.71c.2-.16.42-.31.64-.45C4.02 6.09 4 5.8 4 5.5c0-.14.01-.28.02-.43C1.62 6.46 0 9.04 0 12c0 4.41 3.59 8 8 8 3.87 0 7.09-2.77 7.82-6.44l-.97-1.1c-.26 3.57-3.23 6.42-6.85 6.42zm-2.12-3.67v-.35h.15c.29 0 .49-.23.49-.53v-.68c0-.01.01-.01 0-.02L4.71 11.8h-.77c-.29 0-.47.24-.47.53v2c0 .29.18.53.47.53h.33v2.02c0 .28.28.51.56.51s.56-.23.56-.51v-1.22h-.01c.29 0 .5-.16.5-.45zm13.83-2.92l-3.68-3.68c.14-.21.27-.42.38-.65.02-.04.04-.07.05-.11.11-.22.2-.45.28-.69v-.01c.07-.24.13-.48.17-.73l.03-.17c.04-.24.06-.49.06-.75C17 2.46 14.54 0 11.5 0S6 2.46 6 5.5 8.46 11 11.5 11c.26 0 .51-.02.76-.06l.17-.03c.25-.04.49-.1.73-.17h.01c.24-.08.47-.17.69-.28.04-.02.07-.04.11-.05.23-.11.44-.24.65-.38l3.68 3.68c.17.18.42.29.7.29a1.003 1.003 0 0 0 .71-1.71zM11.5 9.5c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm1.93 5.33v-.65c0-.11-.13-.21-.24-.21-.11 0-.24.09-.24.21v.65c0 .11.13.21.24.21.11 0 .24-.1.24-.21zm-2.41.67h.83c.29 0 .46-.21.46-.5v-1.86l.23-.22c-.34.05-.69.08-1.04.08-.36 0-.7-.03-1.05-.08.03.05.06.1.08.16V15c.01.29.2.5.49.5z',
        ],
        'git-branch': [
          'M15 2c-1.66 0-3 1.34-3 3 0 1.3.84 2.4 2 2.82V9c0 1.1-.9 2-2 2H8c-.73 0-1.41.21-2 .55V5.82C7.16 5.4 8 4.3 8 3c0-1.66-1.34-3-3-3S2 1.34 2 3c0 1.3.84 2.4 2 2.82v8.37C2.84 14.6 2 15.7 2 17c0 1.66 1.34 3 3 3s3-1.34 3-3c0-1.25-.77-2.3-1.85-2.75C6.45 13.52 7.16 13 8 13h4c2.21 0 4-1.79 4-4V7.82C17.16 7.4 18 6.3 18 5c0-1.66-1.34-3-3-3zM5 2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 16c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zM15 6c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z',
        ],
        'git-commit': [
          'M19 9h-4.1a5 5 0 0 0-9.8 0H1c-.55 0-1 .45-1 1s.45 1 1 1h4.1a5 5 0 0 0 9.8 0H19c.55 0 1-.45 1-1s-.45-1-1-1zm-9 4c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z',
        ],
        'git-merge': [
          'M15 8c-1.3 0-2.4.84-2.82 2H11c-2.49 0-4.54-1.83-4.92-4.21A2.995 2.995 0 0 0 5 0C3.34 0 2 1.34 2 3c0 1.3.84 2.4 2 2.81v8.37C2.84 14.6 2 15.7 2 17c0 1.66 1.34 3 3 3s3-1.34 3-3c0-1.3-.84-2.4-2-2.82V9.86C7.27 11.17 9.03 12 11 12h1.18A2.996 2.996 0 0 0 18 11c0-1.66-1.34-3-3-3zM5 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zM5 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm10 8c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z',
        ],
        'git-new-branch': [
          'M17 3h-1V2c0-.55-.45-1-1-1s-1 .45-1 1v1h-1c-.55 0-1 .45-1 1s.45 1 1 1h1v1c0 .55.45 1 1 1s1-.45 1-1V5h1c.55 0 1-.45 1-1s-.45-1-1-1zm-3 4.86V9c0 1.1-.9 2-2 2H8c-.73 0-1.41.21-2 .55V5.82C7.16 5.4 8 4.3 8 3c0-1.66-1.34-3-3-3S2 1.34 2 3c0 1.3.84 2.4 2 2.82v8.37C2.84 14.6 2 15.7 2 17c0 1.66 1.34 3 3 3s3-1.34 3-3c0-1.25-.77-2.3-1.85-2.75C6.45 13.52 7.16 13 8 13h4c2.21 0 4-1.79 4-4V7.86c-.32.08-.65.14-1 .14s-.68-.06-1-.14zM5 2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 16c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z',
        ],
        'git-pull': [
          'M17 14.18V7c0-2.21-1.79-4-4-4h-2.59l1.29-1.29c.19-.18.3-.43.3-.71a1.003 1.003 0 0 0-1.71-.71l-3 3C7.11 3.47 7 3.72 7 4c0 .28.11.53.29.71l3 3a1.003 1.003 0 0 0 1.42-1.42L10.41 5H13c1.1 0 2 .9 2 2v7.18A2.996 2.996 0 0 0 16 20c1.66 0 3-1.34 3-3 0-1.3-.84-2.4-2-2.82zM16 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zM4 1C2.34 1 1 2.34 1 4c0 1.3.84 2.4 2 2.82v7.37C1.84 14.6 1 15.7 1 17c0 1.66 1.34 3 3 3s3-1.34 3-3c0-1.3-.84-2.4-2-2.82V6.82C6.16 6.4 7 5.3 7 4c0-1.66-1.34-3-3-3zm0 17c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zM4 5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z',
        ],
        'git-push': [
          'M15 11c0-.28-.11-.53-.29-.71l-3-3C11.53 7.11 11.28 7 11 7s-.53.11-.71.29l-3 3a1.003 1.003 0 0 0 1.42 1.42l1.29-1.3V19c0 .55.45 1 1 1s1-.45 1-1v-8.59l1.29 1.29c.18.19.43.3.71.3.55 0 1-.45 1-1zm4-11H1C.45 0 0 .45 0 1v16c0 .55.45 1 1 1h7v-2H2v-2h6v-1H4V2h14v11h-4v1h4v2h-4v2h5c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zM5 8h2V6H5v2zm2-5H5v2h2V3z',
        ],
        'git-repo': [
          'M7 3H5v2h2V3zm0 6H5v2h2V9zm0-3H5v2h2V6zm12-6H1C.45 0 0 .45 0 1v16c0 .55.45 1 1 1h4v2l2-1 2 1v-2h10c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-1 16H9v-1H5v1H2v-2h16v2zm0-3H4V2h14v11z',
        ],
        glass: [
          'M17 6V0H3v6c0 3.53 2.61 6.43 6 6.92V18H6c-.55 0-1 .45-1 1s.45 1 1 1h8c.55 0 1-.45 1-1s-.45-1-1-1h-3v-5.08c3.39-.49 6-3.39 6-6.92z',
        ],
        globe: [
          'M7.53 4.37c.1-.1.1-.26 0-.35l-.68-.68c-.1-.1-.25-.1-.35 0-.1.1-.1.26 0 .35l.68.68c.1.1.25.1.35 0zm3.17.06h.3c.09 0 .16-.01.16-.1 0-.09-.07-.1-.16-.1h-.3c-.09 0-.16.01-.16.1s.07.1.16.1zm.98 1.15c.09 0 .19-.08.19-.17v-.42c0-.09-.1-.17-.19-.17s-.19.08-.19.17v.42c0 .09.1.17.19.17zm-6.5 4.19c-.35 0-.56.28-.56.63v2.37c0 .35.21.62.56.62h.39v2.4c0 .34.33.61.67.61s.67-.27.67-.61v-1.44h-.02c.35 0 .6-.19.6-.54v-.41h.18c.35 0 .58-.28.58-.62v-.81c0-.01.01-.01 0-.02L6.1 9.77h-.92zM10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm0 18c-4.42 0-8-3.58-8-8 0-.74.11-1.46.3-2.14h.03v.65c0 .28.25.5.53.5.05 0 .1-.01.15-.02l1.05 1.05c.1.11.28.11.38 0 .1-.1.11-.27 0-.38L3.42 8.59c0-.03.05-.05.05-.08v-.16c0-.22.12-.3.34-.49h.63c.12 0 .23-.01.32-.07.01-.01.02 0 .03-.01.02-.02.04-.03.06-.04.01-.01.02-.01.03-.02l.02-.02 2.15-2.15c.24-.24.24-.63 0-.86-.23-.24-.62-.19-.86.04l-.41.46H5v-.64c0-.01.07.07.07-.12h.87c.17 0 .3-.12.3-.29 0-.17-.13-.29-.3-.29H4.88C6.27 2.7 8.05 2 10 2s3.73.7 5.12 1.86h-1.58l-.01-.04c-.06 0-.12 0-.17.04l-.71.7c-.09.09-.09.23 0 .31.09.09.23.09.32 0l.56-.6.01-.03h.34c0 .19-.1.13-.1.16v.1c0 .29-.2.5-.49.5h-.51c-.25 0-.52.28-.52.54v.23h-.12c-.16 0-.27.08-.27.24v.33h-.32c-.23 0-.41.15-.41.38 0 .22.18.35.41.35.1 0 .19.04.26-.16l.06.01.66-.59h.23l.53.5c.04.04.11.03.16-.01.04-.04.04-.16 0-.2L13 6.15h.32l.12.16c.25.25.65.23.89-.02l.12-.14H15c.02 0 .11.07.11.07v.33s-.06-.01-.07-.01h-.49c-.16 0-.28.13-.28.29 0 .16.13.29.28.29h.49c.01 0 .07-.01.07-.01v.2c-.19.28-.33.57-.62.57h-1.28s0-.01-.01-.01l-.58-.58a.622.622 0 0 0-.89 0l-.58.58s0 .01-.01.01h-.34c-.35 0-.67.28-.67.63v1.25c0 .35.32.61.67.61h1.22c.46.19.78.48.97.94v2.28c0 .35.23.6.58.6h.98c.35 0 .54-.25.54-.6v-2.2l1.21-1.17.04-.02.02-.01h.04c.1-.11.2-.26.2-.42V8.49c0-.25-.22-.44-.42-.63h.58c.02.38.29.57.63.57h.43c.13.51.18 1.03.18 1.57 0 4.42-3.58 8-8 8zm6.16-5.65c-.14 0-.29.11-.29.25v.77c0 .14.15.25.29.25.14 0 .29-.11.29-.25v-.77c0-.14-.15-.25-.29-.25zM10.5 3.48c0-.34-.28-.57-.62-.57h-.74c-.34 0-.57.25-.57.59 0 .05-.13.06.06.1v.64c0 .2.09.36.29.36.2 0 .29-.16.29-.36v-.19h.68c.33 0 .61-.23.61-.57z',
        ],
        'globe-network': [
          'M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm7.39 7h-3.63c-.31-1.99-.92-3.66-1.72-4.73 2.45.65 4.41 2.42 5.35 4.73zM13 10c0 .69-.04 1.36-.11 2H7.11a18.419 18.419 0 0 1 0-4h5.77c.08.64.12 1.31.12 2zm-3-8c1.07 0 2.25 2.05 2.75 5h-5.5c.5-2.95 1.68-5 2.75-5zm-2.04.27C7.16 3.34 6.55 5.01 6.24 7H2.61c.94-2.31 2.9-4.08 5.35-4.73zM2 10c0-.69.11-1.36.28-2h3.83a18.419 18.419 0 0 0 0 4H2.28c-.17-.64-.28-1.31-.28-2zm.61 3h3.63c.31 1.99.92 3.66 1.72 4.73A7.996 7.996 0 0 1 2.61 13zM10 18c-1.07 0-2.25-2.05-2.75-5h5.5c-.5 2.95-1.68 5-2.75 5zm2.04-.27c.79-1.07 1.4-2.74 1.72-4.73h3.63a7.996 7.996 0 0 1-5.35 4.73zM13.89 12a18.419 18.419 0 0 0 0-4h3.83c.17.64.28 1.31.28 2s-.11 1.36-.28 2h-3.83z',
        ],
        graph: [
          'M17.5 4A2.5 2.5 0 0 0 15 6.5c0 .06.01.12.02.18l-1.9.84C12.38 6.6 11.27 6 10 6c-.83 0-1.59.25-2.23.68L4.91 4.14c.05-.21.09-.42.09-.64a2.5 2.5 0 0 0-5 0A2.5 2.5 0 0 0 2.5 6c.42 0 .81-.11 1.16-.3l2.79 2.48C6.17 8.73 6 9.34 6 10c0 1.41.73 2.64 1.83 3.35l-.56 1.67A2.498 2.498 0 0 0 5 17.5a2.5 2.5 0 0 0 5 0c0-.74-.32-1.39-.83-1.85l.56-1.68c.09.01.18.03.27.03 2.21 0 4-1.79 4-4 0-.22-.03-.44-.07-.65l2.02-.9c.43.34.96.55 1.55.55a2.5 2.5 0 0 0 0-5z',
        ],
        'graph-remove': [
          'M17.41 4l2.29-2.29c.19-.18.3-.43.3-.71a1.003 1.003 0 0 0-1.71-.71L16 2.59 13.71.3A.965.965 0 0 0 13 0a1.003 1.003 0 0 0-.71 1.71L14.59 4 12.3 6.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71L16 5.41l2.29 2.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71L17.41 4zM19 10c-.83 0-1.55-.36-2.09-.91l-.03.03-.88-.88-.88.88a2.996 2.996 0 1 1-4.24-4.24l.88-.88-.88-.88.03-.03C10.36 2.55 10 1.83 10 1c0-.35.07-.68.18-.99-.06 0-.12-.01-.18-.01C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10c0-.06-.01-.12-.01-.18-.31.11-.64.18-.99.18z',
        ],
        grid: [
          'M19 11c.55 0 1-.45 1-1s-.45-1-1-1h-2V5h2c.55 0 1-.45 1-1s-.45-1-1-1h-2V1c0-.55-.45-1-1-1s-1 .45-1 1v2h-4V1c0-.55-.45-1-1-1S9 .45 9 1v2H5V1c0-.55-.45-1-1-1S3 .45 3 1v2H1c-.55 0-1 .45-1 1s.45 1 1 1h2v4H1c-.55 0-1 .45-1 1s.45 1 1 1h2v4H1c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1v-2h4v2c0 .55.45 1 1 1s1-.45 1-1v-2h4v2c0 .55.45 1 1 1s1-.45 1-1v-2h2c.55 0 1-.45 1-1s-.45-1-1-1h-2v-4h2zM9 15H5v-4h4v4zm0-6H5V5h4v4zm6 6h-4v-4h4v4zm0-6h-4V5h4v4z',
        ],
        'grid-view': [
          'M0 19c0 .55.45 1 1 1h8v-9H0v8zM0 1v8h9V0H1C.45 0 0 .45 0 1zm19-1h-8v9h9V1c0-.55-.45-1-1-1zm-8 20h8c.55 0 1-.45 1-1v-8h-9v9z',
        ],
        'group-objects': [
          'M6 7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm8-3H6c-3.31 0-6 2.69-6 6s2.69 6 6 6h8c3.31 0 6-2.69 6-6s-2.69-6-6-6zm0 11H6c-2.76 0-5-2.24-5-5s2.24-5 5-5h8c2.76 0 5 2.24 5 5s-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z',
        ],
        'grouped-bar-chart': [
          'M12 16h1c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1h-1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1zm7 1H1c-.55 0-1 .45-1 1s.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1zm-3-1h1c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1h-1c-.55 0-1 .45-1 1v7c0 .55.45 1 1 1zm-9 0h1c.55 0 1-.45 1-1v-5c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v5c0 .55.45 1 1 1zm-4 0h1c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v13c0 .55.45 1 1 1z',
        ],
        hand: [
          'M17 5c-.42 0-.79.27-.93.64L14.38 10h-.77l1.34-6.67c.03-.1.05-.21.05-.33a.998.998 0 1 0-1.98-.19h-.01L11.57 10H11V1c0-.55-.45-1-1-1S9 .45 9 1v9h-.2L6.97 2.76a.997.997 0 0 0-1.73-.41l-.03.03c-.01.02-.02.03-.03.04-.01.02-.01.03-.02.04v.01c-.01.01-.02.02-.02.03v.01c-.02.01-.02.02-.03.03 0 0 0 .01-.01.01 0 .01 0 .02-.01.03 0 0 0 .01-.01.01 0 .01-.01.02-.01.03 0 0 0 .01-.01.01 0 .01-.01.02-.01.03 0 .01 0 .01-.01.02 0 .01-.01.02-.01.03 0 .01 0 .01-.01.02 0 .01-.01.02-.01.03v.02c0 .01 0 .02-.01.03V3c0 .05 0 .09.01.14l1.45 10.25L6 12.7v.01L3.84 9.45h-.01A.98.98 0 0 0 3 9c-.55 0-1 .45-1 1 0 .2.06.39.17.55L6 18.44C7.06 19.4 8.46 20 10 20c3.31 0 6-2.69 6-6v-1.84l.01-.03v-.06l1.94-5.75A1.003 1.003 0 0 0 17 5z',
        ],
        'hand-down': [
          'M17.68 9.84C15.91 9 14.27 6.49 13.45 4.9 12.41 2.43 12.21 0 7.87 0 5.49 0 3.95.76 3.05 2.65 2.31 4.2 2 5.48 2 9.79v.99c0 .82.69 1.48 1.54 1.48.38 0 .73-.14 1-.36.19.6.78 1.05 1.47 1.05.47 0 .89-.2 1.17-.52.26.47.77.79 1.36.79.65 0 1.2-.39 1.43-.93l.03.77v5.44c0 .48.23.91.59 1.18.21.19.5.32.85.32h.06c.83 0 1.5-.67 1.5-1.5v-8.24l.01-.67c.85.98 1.92 1.76 3.24 1.89 1.79.19 2.09-1.33 1.43-1.64z',
        ],
        'hand-left': [
          'M15.1 6.54c-1.58-.81-4.09-2.46-4.94-4.23-.31-.65-1.82-.35-1.64 1.43.13 1.33.91 2.4 1.89 3.24L9.74 7H1.5C.67 7 0 7.67 0 8.5v.06c0 .36.13.64.32.85.27.36.7.59 1.18.59h5.44l.78.01c-.54.23-.93.78-.93 1.43 0 .59.32 1.1.79 1.36-.32.28-.52.7-.52 1.17 0 .69.44 1.28 1.05 1.47-.22.27-.36.62-.36 1 0 .85.66 1.54 1.48 1.54h.99c4.31 0 5.59-.31 7.14-1.05 1.89-.9 2.65-2.44 2.65-4.82-.01-4.32-2.44-4.52-4.91-5.57z',
        ],
        'hand-right': [
          'M20 8.5c0-.83-.67-1.5-1.5-1.5h-8.24l-.67-.01c.98-.85 1.76-1.92 1.89-3.24.18-1.79-1.33-2.08-1.65-1.43-.84 1.76-3.35 3.41-4.93 4.23C2.43 7.59 0 7.79 0 12.13c0 2.38.76 3.92 2.65 4.82C4.2 17.69 5.48 18 9.79 18h.99c.82 0 1.48-.69 1.48-1.54 0-.38-.14-.73-.36-1 .6-.19 1.05-.78 1.05-1.47 0-.47-.2-.89-.52-1.17.47-.26.79-.77.79-1.36 0-.65-.39-1.2-.93-1.43l.77-.03h5.44c.48 0 .91-.23 1.18-.59.19-.21.32-.49.32-.85v-.03-.03z',
        ],
        'hand-up': [
          'M16.46 7.74c-.38 0-.73.14-1 .36-.19-.6-.78-1.05-1.47-1.05-.47 0-.89.2-1.17.52-.26-.47-.77-.79-1.36-.79-.65 0-1.2.39-1.43.93L10 6.94V1.5c0-.48-.23-.91-.59-1.18C9.2.13 8.92 0 8.56 0H8.5C7.67 0 7 .67 7 1.5v8.24l-.01.67c-.84-.98-1.92-1.76-3.24-1.89-1.79-.18-2.08 1.33-1.43 1.65 1.77.84 3.41 3.35 4.23 4.94 1.05 2.47 1.25 4.9 5.58 4.9 2.38 0 3.92-.76 4.82-2.65.74-1.56 1.05-2.84 1.05-7.15v-.99c0-.81-.69-1.48-1.54-1.48z',
        ],
        header: [
          'M16 1c-.55 0-1 .45-1 1v7H5V2c0-.55-.45-1-1-1s-1 .45-1 1v16c0 .55.45 1 1 1s1-.45 1-1v-7h10v7c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1z',
        ],
        'header-one': [
          'M10 0c.55 0 1 .45 1 1v14c0 .55-.45 1-1 1s-1-.45-1-1V9H2v6c0 .55-.45 1-1 1s-1-.45-1-1V1c0-.55.45-1 1-1s1 .45 1 1v6h7V1c0-.55.45-1 1-1zm7.4 10.77c.17-.2.29-.46.34-.77H19v10h-1.5v-7.11H15v-1.24c.32 0 .63-.03.93-.08.31-.06.58-.16.83-.29.26-.12.47-.3.64-.51z',
        ],
        'header-two': [
          'M16.6 17.41c-.22.17-.4.36-.56.55-.16.19-.27.4-.33.61h4.28V20H14c.01-.81.18-1.52.53-2.13.35-.6.81-1.13 1.41-1.58.28-.23.58-.46.89-.68.31-.22.59-.46.85-.71.26-.26.48-.53.63-.83.16-.3.25-.64.26-1.02 0-.18-.02-.37-.06-.57-.04-.2-.11-.39-.22-.56s-.26-.31-.45-.43-.44-.18-.75-.18c-.28 0-.52.06-.71.19s-.34.3-.45.52c-.11.22-.2.48-.25.78-.05.3-.08.62-.09.97h-1.43c0-.54.07-1.04.2-1.5.13-.47.32-.87.58-1.2.26-.34.58-.6.95-.78.37-.19.81-.29 1.3-.29.54 0 .99.09 1.35.29.36.19.65.44.87.74.22.29.38.62.47.97.09.35.14.68.14 1 0 .4-.05.75-.16 1.07-.11.32-.26.61-.44.88-.19.27-.4.52-.63.74-.24.22-.48.43-.73.63s-.5.38-.75.56c-.26.17-.5.35-.71.53zM10 0c.55 0 1 .45 1 1v14c0 .55-.45 1-1 1s-1-.45-1-1V9H2v6c0 .55-.45 1-1 1s-1-.45-1-1V1c0-.55.45-1 1-1s1 .45 1 1v6h7V1c0-.55.45-1 1-1z',
        ],
        headset: [
          'M18.97 9H19A9 9 0 0 0 1 9h.03C.41 9.73 0 10.8 0 12c0 1.74.84 3.2 2 3.76V16c0 1.66 1.34 3 3 3h3c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1H5c-.55 0-1-.45-1-1 .55 0 1-.45 1-1V9c0-.55-.45-1-1-1h-.92C3.57 4.61 6.47 2 10 2s6.43 2.61 6.92 6H16c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h1c1.66 0 3-1.79 3-4 0-1.2-.41-2.27-1.03-3z',
        ],
        heart: [
          'M20 6.25C20 3.35 17.65 1 14.75 1c-1.02 0-1.95.31-2.75.82v-.04c-.09.06-.17.12-.26.19-.04.03-.09.06-.14.1-.68.51-1.24 1.18-1.6 1.96-.4-.86-1.04-1.57-1.8-2.1-.04-.02-.07-.05-.1-.08a7 7 0 0 0-.6-.33c-.13-.04-.23-.1-.35-.15-.05-.02-.1-.05-.15-.07v.02C6.45 1.13 5.87 1 5.25 1A5.25 5.25 0 0 0 0 6.25c0 .09.01.17.01.25H0c0 .06.01.12.02.18s.01.12.02.18C.13 7.89.44 9 1.07 10.17 2.23 12.33 4.1 14.11 7 16.53v.01c.9.75 1.89 1.55 3 2.46.71-.58 1.38-1.12 2-1.63 3.48-2.86 5.64-4.78 6.93-7.18.63-1.17.94-2.27 1.03-3.3.01-.07.01-.14.02-.21 0-.06.01-.11.02-.17h-.01c0-.09.01-.17.01-.26z',
        ],
        'heart-broken': [
          'M8.11 7.45C8.05 7.31 8 7.16 8 7c0-.07.03-.13.04-.19h-.02l.86-4.32A5.159 5.159 0 0 0 5.25 1 5.25 5.25 0 0 0 0 6.25c0 .09.01.17.01.25H0c0 .06.01.12.02.18s.01.12.02.18C.13 7.89.44 9 1.07 10.17c1.38 2.58 3.76 4.6 7.71 7.83l-.76-3.8h.02c-.01-.07-.04-.13-.04-.2 0-.21.08-.39.18-.54l-.02-.01 1.68-2.52-1.73-3.48zM20 6.25C20 3.35 17.65 1 14.75 1c-1.54 0-2.92.67-3.88 1.73l-.83 4.13 1.85 3.69h-.01c.07.14.12.29.12.45 0 .21-.08.39-.18.54l.02.01-1.77 2.66.81 4.07c4.16-3.39 6.63-5.45 8.05-8.1.63-1.17.94-2.27 1.03-3.3.01-.07.01-.14.02-.21 0-.06.01-.11.02-.17h-.01c0-.08.01-.16.01-.25z',
        ],
        'heat-grid': [
          'M14 12h6V8h-6v4zM0 12h6V8H0v4zm1-3h4v2H1V9zm-1 7c0 .55.45 1 1 1h5v-4H0v3zM19 3h-5v4h6V4c0-.55-.45-1-1-1zm0 3h-4V4h4v2zM0 4v3h6V3H1c-.55 0-1 .45-1 1zm7 3h6V3H7v4zm7 10h5c.55 0 1-.45 1-1v-3h-6v4zm-7 0h6v-4H7v4zm1-3h4v2H8v-2zm-1-2h6V8H7v4z',
        ],
        heatmap: [
          'M6 0a6 6 0 1 0 0 12A6 6 0 1 0 6 0z',
          'M10.5 8a4.5 4.5 0 1 0 0 9 4.5 4.5 0 1 0 0-9z',
          'M16.5 7a3.5 3.5 0 1 0 0 7 3.5 3.5 0 1 0 0-7zM18 16a2 2 0 1 0 0 4 2 2 0 1 0 0-4zM2.5 14a2.5 2.5 0 1 0 0 5 2.5 2.5 0 1 0 0-5zM16.5 0a2.5 2.5 0 1 0 0 5 2.5 2.5 0 1 0 0-5z',
        ],
        help: [
          'M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zM7.41 4.62c.65-.54 1.51-.82 2.56-.82.54 0 1.03.08 1.48.25.44.17.83.39 1.14.68.32.29.56.63.74 1.02.17.39.26.82.26 1.27s-.08.87-.24 1.23c-.16.37-.4.73-.71 1.11l-1.21 1.58c-.14.17-.28.33-.32.48-.05.15-.11.35-.11.6v.97H9v-2s.06-.58.24-.81l1.21-1.64c.25-.3.41-.56.51-.77s.14-.44.14-.67c0-.35-.11-.63-.32-.85s-.5-.33-.88-.33c-.37 0-.67.11-.89.33-.22.23-.37.54-.46.94-.03.12-.11.17-.23.16l-1.95-.29c-.12-.01-.16-.08-.14-.22.13-.93.52-1.67 1.18-2.22zM9 14h2.02L11 16H9v-2z',
        ],
        'helper-management': [
          'M17 10h-3v3h3v-3zm0 4h-3v3h3v-3zm0-8h-3v3h3V6zm2-6H1C.4 0 0 .4 0 1v18c0 .5.4 1 1 1h18c.5 0 1-.5 1-1V1c0-.6-.5-1-1-1zm-1 18H2V2h16v16zm-9-4H6v3h3v-3zm4 0h-3v3h3v-3z',
        ],
        highlight: [
          'M11.22 14.09l3.03-3.03.71.71L20 6.73l-5.71-5.71-5.04 5.04.71.71-3.02 3.04 4.28 4.28zm6.8 3.91h-16c-.55 0-1 .45-1 1s.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1zm-15-1h4.04c.28 0 .53-.11.71-.3l2.02-2.02-3.44-3.45-4.04 4.04c-.18.18-.3.44-.3.71.01.57.46 1.02 1.01 1.02z',
        ],
        history: [
          'M10 0C6.71 0 3.82 1.6 2 4.05V2c0-.55-.45-1-1-1s-1 .45-1 1v4c0 .55.45 1 1 1h4c.55 0 1-.45 1-1s-.45-1-1-1H3.76C5.23 3.17 7.47 2 10 2c4.42 0 8 3.58 8 8s-3.58 8-8 8-8-3.58-8-8c0-.55-.45-1-1-1s-1 .45-1 1c0 5.52 4.48 10 10 10s10-4.48 10-10S15.52 0 10 0zm0 3c-.55 0-1 .45-1 1v6c0 .28.11.53.29.71l3 3a1.003 1.003 0 0 0 1.42-1.42L11 9.59V4c0-.55-.45-1-1-1z',
        ],
        home: [
          'M2 12v7c0 .55.45 1 1 1h5v-7h4v7h5c.55 0 1-.45 1-1v-7l-8-8-8 8zm17.71-2.71L17 6.59V3c0-.55-.45-1-1-1s-1 .45-1 1v1.59L10.71.3C10.53.11 10.28 0 10 0s-.53.11-.71.29l-9 9a1.003 1.003 0 0 0 1.42 1.42L10 2.41l8.29 8.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71z',
        ],
        'horizontal-bar-chart': [
          'M1 1c-.55 0-1 .45-1 1v16c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1zm3 5h11c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1zm8 8H4c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1zm7-6H4c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h15c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1z',
        ],
        'horizontal-bar-chart-asc': [
          'M1 9h11c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1zm0-5h9c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1zm18 12H1c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h18c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1zM1 14h14c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1z',
        ],
        'horizontal-bar-chart-desc': [
          'M10 16H1c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h9c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1zm2-5H1c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h11c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1zm3-5H1c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1zm4-5H1c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1z',
        ],
        'horizontal-distribution': [
          'M12 2H8c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h4c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zM1 0C.45 0 0 .45 0 1v18c0 .55.45 1 1 1s1-.45 1-1V1c0-.55-.45-1-1-1zm18 0c-.55 0-1 .45-1 1v18c0 .55.45 1 1 1s1-.45 1-1V1c0-.55-.45-1-1-1z',
        ],
        'id-number': [
          'M2 5v10h16V5H2zm0-2h16c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2z',
          'M8.88 12.38c-.17-.39-1.01-.66-1.56-.9-.56-.24-.48-.39-.5-.6v-.09c.19-.17.35-.4.45-.67 0 0 0-.02.01-.02l.06-.18c.13-.03.2-.17.23-.29.03-.05.09-.18.08-.33-.04-.18-.11-.27-.2-.3v-.03c0-.24-.02-.58-.06-.81-.01-.06-.02-.12-.04-.19-.08-.27-.25-.52-.48-.7C6.63 7.09 6.3 7 6 7s-.63.09-.87.27c-.23.17-.4.42-.48.7-.02.06-.03.13-.04.19-.04.22-.06.57-.06.81V9c-.09.03-.17.12-.19.31-.01.14.05.27.08.32.03.14.1.27.23.3.02.06.03.12.06.18v.01c.11.27.27.51.47.68v.08c-.02.2.04.35-.51.6-.56.24-1.39.51-1.56.9-.19.39-.12.62-.12.62h5.98c-.01 0 .06-.23-.11-.62zM12 7h4c.55 0 1 .45 1 1s-.45 1-1 1h-4c-.55 0-1-.45-1-1s.45-1 1-1zM12 11h4c.55 0 1 .45 1 1s-.45 1-1 1h-4c-.55 0-1-.45-1-1s.45-1 1-1z',
        ],
        'image-rotate-left': [
          'M10.5 13c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zM14 7H1c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1h13c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1zm-1 10l-5-3-1 2-2-4-3 4.5V9h11v8zm3-15h-1.59l.29-.29c.19-.18.3-.43.3-.71a1.003 1.003 0 0 0-1.71-.71l-2 2c-.18.18-.29.43-.29.71 0 .28.11.53.29.71l2 2a1.003 1.003 0 0 0 1.42-1.42l-.3-.29H16c1.1 0 2 .9 2 2v3c0 .55.45 1 1 1s1-.45 1-1V6c0-2.21-1.79-4-4-4z',
        ],
        'image-rotate-right': [
          'M5.29 4.29a1.003 1.003 0 0 0 1.42 1.42l2-2C8.89 3.53 9 3.28 9 3c0-.28-.11-.53-.29-.71l-2-2a1.003 1.003 0 0 0-1.42 1.42l.3.29H4C1.79 2 0 3.79 0 6v3c0 .55.45 1 1 1s1-.45 1-1V6c0-1.1.9-2 2-2h1.59l-.3.29zM15.5 13c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zM19 7H6c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1h13c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1zm-1 10l-5-3-1 2-2-4-3 4.5V9h11v8z',
        ],
        import: [
          'M9.29 15.71c.18.18.43.29.71.29s.53-.11.71-.29l5-5a1.003 1.003 0 0 0-1.42-1.42L11 12.59V1c0-.55-.45-1-1-1S9 .45 9 1v11.59l-3.29-3.3a1.003 1.003 0 0 0-1.42 1.42l5 5zM19 14c-.55 0-1 .45-1 1v3H2v-3c0-.55-.45-1-1-1s-1 .45-1 1v4c0 .55.45 1 1 1h18c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1z',
        ],
        inbox: [
          'M16.92 3.56l-.01-.02c-.16-.35-.5-.6-.91-.6H4c-.41 0-.76.25-.91.6l-.01.02L0 10.49v6.46c0 .55.45 1 1 1h18c.55 0 1-.45 1-1v-6.46l-3.08-6.93zM15 10.95c-.55 0-1 .45-1 1v1H6v-1c0-.55-.45-1-1-1H1.98l2.67-6h10.7l2.67 6H15z',
        ],
        'info-sign': [
          'M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zM9 4h2v2H9V4zm4 12H7v-1h2V8H8V7h3v8h2v1z',
        ],
        'inner-join': [
          'M8.7 4.7C7.4 6 6.5 7.9 6.5 10s.8 4 2.2 5.3c-.8.5-1.7.7-2.7.7-3.3 0-6-2.7-6-6s2.7-6 6-6c1 0 1.9.2 2.7.7zm-3.34 9.25c-.55-1.2-.86-2.54-.86-3.95s.31-2.75.86-3.95a4.001 4.001 0 0 0 0 7.9zM14 4c3.3 0 6 2.7 6 6s-2.7 6-6 6c-1 0-1.9-.2-2.7-.7 1.3-1.3 2.2-3.2 2.2-5.3s-.8-3.9-2.2-5.3C12.1 4.2 13 4 14 4zm.6 2.05c.55 1.2.86 2.54.86 3.95s-.31 2.75-.86 3.95c1.9-.31 3.36-1.96 3.36-3.95S16.5 6.36 14.6 6.05zM10 5.5C8.8 6.7 8 8.2 8 10s.8 3.3 2 4.4c1.2-1.1 2-2.7 2-4.5s-.8-3.3-2-4.4z',
        ],
        insert: [
          'M19 0H1C.4 0 0 .4 0 1v18c0 .5.4 1 1 1h18c.5 0 1-.5 1-1V1c0-.6-.5-1-1-1zm-1 18H2V2h16v16zM5 11h4v4c0 .6.4 1 1 1s1-.4 1-1v-4h4c.6 0 1-.4 1-1s-.4-1-1-1h-4V5c0-.6-.4-1-1-1s-1 .4-1 1v4H5c-.6 0-1 .4-1 1s.4 1 1 1z',
        ],
        intersection: [
          'M13 4c-1.31 0-2.51.43-3.5 1.14A5.977 5.977 0 0 0 6 4c-3.31 0-6 2.69-6 6s2.69 6 6 6c1.31 0 2.51-.43 3.5-1.14.99.71 2.19 1.14 3.5 1.14 3.31 0 6-2.69 6-6s-2.69-6-6-6zm-4.93 9.41c-.61.37-1.31.59-2.07.59-2.21 0-4-1.79-4-4s1.79-4 4-4c.76 0 1.46.22 2.07.59C7.4 7.56 7 8.73 7 10s.4 2.44 1.07 3.41zM13 14c-.76 0-1.46-.22-2.07-.59C11.6 12.44 12 11.27 12 10s-.4-2.44-1.07-3.41C11.54 6.22 12.24 6 13 6c2.21 0 4 1.79 4 4s-1.79 4-4 4z',
        ],
        'ip-address': [
          'M6 3.66C6 5.69 10 11 10 11s4-5.31 4-7.34C13.99 1.64 12.21 0 10 0S6 1.64 6 3.66zM8 4c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zM14 13.5V13h-4v1h3v2h-2v1h3v-3.5zM3 12h14c.55 0 1 .45 1 1v6c0 .55-.45 1-1 1H3c-.55 0-1-.45-1-1v-6c0-.55.45-1 1-1zm4 1v6h1v-6H7zm3 1v5h1v-5h-1z',
        ],
        issue: [
          'M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-2H9v-2h2v2zm0-3H9V4h2v9z',
        ],
        'issue-closed': [
          'M15.364 5.9a.997.997 0 0 1-.707-.293l-2.121-2.122a1 1 0 1 1 1.414-1.414l1.414 1.414L18.192.657a1 1 0 0 1 1.414 1.414l-3.535 3.536a.997.997 0 0 1-.707.292zM11.78.157a3.002 3.002 0 0 0-1.437 1.85 8 8 0 1 0 7.1 5.055l.042-.042 1.472-1.472A9.959 9.959 0 0 1 20 10c0 5.523-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0c.608 0 1.202.054 1.78.158zM11 16H9v-2h2v2zm0-3H9V4h2v9z',
        ],
        'issue-new': [
          'M13.167.512a2.98 2.98 0 0 0-.131.524c-.74.115-1.39.5-1.848 1.052a8 8 0 1 0 6.724 6.724 2.997 2.997 0 0 0 1.052-1.848 2.98 2.98 0 0 0 .524-.13A9.99 9.99 0 0 1 20 10c0 5.523-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0a9.99 9.99 0 0 1 3.167.512zM11 16H9v-2h2v2zm0-3H9V4h2v9zm6-10h1.5a1 1 0 0 1 0 2H17v1.5a1 1 0 0 1-2 0V5h-1.5a1 1 0 0 1 0-2H15V1.5a1 1 0 0 1 2 0V3z',
        ],
        italic: [
          'M11.7 4H14c.6 0 1-.4 1-1s-.4-1-1-1H7c-.6 0-1 .4-1 1s.4 1 1 1h2.2L7.3 15H5c-.6 0-1 .4-1 1s.4 1 1 1h7c.6 0 1-.4 1-1s-.4-1-1-1H9.8l1.9-11z',
        ],
        'join-table': [
          'M19 6h-4V2c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1h4v4c0 .55.45 1 1 1h13c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1zM6 12H2V9h4v3zm0-4H2V5h4v3zm7 9H7v-3h6v3zm0-4H7V9h6v4zm0-5H7V5h6v3zm5 9h-4v-3h4v3zm0-4h-4v-3h4v3z',
        ],
        key: [
          'M14 0c-3.31 0-6 2.69-6 6 0 1.11.32 2.14.85 3.03L.44 17.44a1.498 1.498 0 1 0 2.12 2.12l.79-.79.94.94c.18.18.43.29.71.29s.53-.11.71-.29l3-3c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71l-.94-.94 3.2-3.2A5.9 5.9 0 0 0 14 12c3.31 0 6-2.69 6-6s-2.69-6-6-6zm0 9c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z',
        ],
        'key-backspace': [
          'M19 3H7c-.28 0-.53.11-.71.29l-6 6C.11 9.47 0 9.72 0 10c0 .28.11.53.29.71l6 6c.18.18.43.29.71.29h12c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-2.29 9.29a1.003 1.003 0 0 1-1.42 1.42L13 11.41l-2.29 2.29c-.18.19-.43.3-.71.3a1.003 1.003 0 0 1-.71-1.71l2.3-2.29-2.3-2.29a1.003 1.003 0 0 1 1.42-1.42L13 8.59l2.29-2.29c.18-.19.43-.3.71-.3a1.003 1.003 0 0 1 .71 1.71L14.41 10l2.3 2.29z',
        ],
        'key-command': [
          'M15.5 12H14V8h1.5C17.43 8 19 6.43 19 4.5S17.43 1 15.5 1 12 2.57 12 4.5V6H8V4.5C8 2.57 6.43 1 4.5 1S1 2.57 1 4.5 2.57 8 4.5 8H6v4H4.5C2.57 12 1 13.57 1 15.5S2.57 19 4.5 19 8 17.43 8 15.5V14h4v1.5c0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5zm0-9c.83 0 1.5.67 1.5 1.5S16.33 6 15.5 6 14 5.33 14 4.5 14.67 3 15.5 3zm-11 14c-.83 0-1.5-.67-1.5-1.5S3.67 14 4.5 14s1.5.67 1.5 1.5S5.33 17 4.5 17zm0-11C3.67 6 3 5.33 3 4.5S3.67 3 4.5 3 6 3.67 6 4.5 5.33 6 4.5 6zm7.5 6H8V8h4v4zm3.5 5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z',
        ],
        'key-control': [
          'M16.71 7.29l-6-6C10.53 1.11 10.28 1 10 1s-.53.11-.71.29l-6 6a1.003 1.003 0 0 0 1.42 1.42L10 3.41l5.29 5.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71z',
        ],
        'key-delete': [
          'M19.71 9.29l-6-6A.997.997 0 0 0 13 3H1c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h12c.28 0 .53-.11.71-.29l6-6c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71zm-9 3a1.003 1.003 0 0 1-1.42 1.42L7 11.41 4.71 13.7c-.18.19-.43.3-.71.3a1.003 1.003 0 0 1-.71-1.71L5.59 10l-2.3-2.29a1.003 1.003 0 0 1 1.42-1.42L7 8.59 9.29 6.3c.18-.19.43-.3.71-.3a1.003 1.003 0 0 1 .71 1.71L8.41 10l2.3 2.29z',
        ],
        'key-enter': [
          'M18 2c-.55 0-1 .45-1 1v5c0 2.21-1.79 4-4 4H4.41L6.7 9.71c.19-.18.3-.43.3-.71a1.003 1.003 0 0 0-1.71-.71l-4 4c-.18.18-.29.43-.29.71 0 .28.11.53.29.71l4 4a1.003 1.003 0 0 0 1.42-1.42L4.41 14H13c3.31 0 6-2.69 6-6V3c0-.55-.45-1-1-1z',
        ],
        'key-escape': [
          'M2 8c.55 0 1-.45 1-1V4.41l6.29 6.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71L4.41 3H7c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1v5c0 .55.45 1 1 1zm9-6.94V3.1c3.39.49 6 3.38 6 6.9 0 3.87-3.13 7-7 7-3.52 0-6.41-2.61-6.9-6H1.06c.5 4.5 4.31 8 8.94 8a9 9 0 0 0 9-9c0-4.63-3.5-8.44-8-8.94z',
        ],
        'key-option': [
          'M13 4h6c.55 0 1-.45 1-1s-.45-1-1-1h-6c-.55 0-1 .45-1 1s.45 1 1 1zm6 12h-4.42L6.87 2.5l-.02.01A.977.977 0 0 0 6 2H1c-.55 0-1 .45-1 1s.45 1 1 1h4.42l7.71 13.5.01-.01c.18.3.49.51.86.51h5c.55 0 1-.45 1-1s-.45-1-1-1z',
        ],
        'key-shift': [
          'M17.74 10.35l-6.99-8.01-.01.01C10.56 2.14 10.3 2 10 2s-.56.14-.74.35l-.01-.01-7 8 .01.01A.95.95 0 0 0 2 11c0 .55.45 1 1 1h3v5c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-5h3c.55 0 1-.45 1-1 0-.25-.1-.48-.26-.65z',
        ],
        'key-tab': [
          'M19 13H4.41l2.29-2.29c.19-.18.3-.43.3-.71a1.003 1.003 0 0 0-1.71-.71L2 12.59V10c0-.55-.45-1-1-1s-1 .45-1 1v8c0 .55.45 1 1 1s1-.45 1-1v-2.59l3.29 3.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71L4.41 15H19c.55 0 1-.45 1-1s-.45-1-1-1zm0-12c-.55 0-1 .45-1 1v2.59L14.71 1.3A.965.965 0 0 0 14 1a1.003 1.003 0 0 0-.71 1.71L15.59 5H1c-.55 0-1 .45-1 1s.45 1 1 1h14.59L13.3 9.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71L18 7.41V10c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1z',
        ],
        'known-vehicle': [
          'M19 4a.997.997 0 0 0-.707.293L14 8.586l-2.293-2.293a1 1 0 0 0-1.414 1.414l3 3a.997.997 0 0 0 1.414 0l5-5A1 1 0 0 0 19 4zm-2.048 7.291c.011.072.048.134.048.209a1.5 1.5 0 0 1-1.5 1.5c-.225 0-.433-.057-.624-.145-.279.085-.57.145-.876.145a2.99 2.99 0 0 1-2.121-.879l-3-3 .007-.007A3.027 3.027 0 0 1 8.184 8H4V7l1-3h10l.19.568 1.307-1.308c-.336-.356-.758-.658-1.165-.772 0 0-1.74-.488-5.332-.488s-5.332.488-5.332.488c-.67.188-1.424.864-1.674 1.502L2.99 4H3L2 7H1a1 1 0 0 0 0 2h.333l-.28.84L1 10v7.5a1.5 1.5 0 1 0 3 0V17h12v.5a1.5 1.5 0 0 0 3 0V10l-.19-.568-1.858 1.86zM4.5 13a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z',
        ],
        label: [
          'M3 12h14v-1H3v1zm11-9H1c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V9l-6-6zm4 12H2V5h11v3H3v1h10v1h5v5zm-4-6V5l4 4h-4z',
        ],
        layer: [
          'M19.5 9.1l-9-5c-.2-.1-.3-.1-.5-.1s-.3 0-.5.1l-9 5c-.3.2-.5.5-.5.9s.2.7.5.9l9 5c.2.1.3.1.5.1s.3 0 .5-.1l9-5c.3-.2.5-.5.5-.9s-.2-.7-.5-.9z',
        ],
        layers: [
          'M.5 6.9l9 5c.2.1.3.1.5.1s.3 0 .5-.1l9-5c.3-.2.5-.5.5-.9s-.2-.7-.5-.9l-9-5c-.2-.1-.3-.1-.5-.1s-.3 0-.5.1l-9 5c-.3.2-.5.5-.5.9s.2.7.5.9z',
          'M19 9c-.2 0-.3 0-.5.1L10 13.9 1.5 9.1C1.3 9 1.2 9 1 9c-.6 0-1 .4-1 1 0 .4.2.7.5.9l9 5c.2.1.3.1.5.1s.3 0 .5-.1l9-5c.3-.2.5-.5.5-.9 0-.6-.4-1-1-1z',
          'M19 13c-.2 0-.3 0-.5.1L10 17.9l-8.5-4.7c-.2-.2-.3-.2-.5-.2-.6 0-1 .4-1 1 0 .4.2.7.5.9l9 5c.2.1.3.1.5.1s.3 0 .5-.1l9-5c.3-.2.5-.5.5-.9 0-.6-.4-1-1-1z',
        ],
        layout: [
          'M18 6c-1.1 0-2 .9-2 2 0 .37.11.71.28 1.01l-2.27 2.27c-.3-.17-.64-.28-1.01-.28-.93 0-1.71.64-1.93 1.5H8.93c-.22-.86-1-1.5-1.93-1.5-.37 0-.71.11-1.01.28L3.72 9.01C3.89 8.71 4 8.37 4 8c0-.34-.09-.66-.24-.94l3.66-3.38c.31.2.68.32 1.08.32 1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2c0 .34.09.66.24.94L3.08 6.32C2.77 6.12 2.4 6 2 6 .9 6 0 6.9 0 8s.9 2 2 2c.37 0 .71-.11 1.01-.28l2.27 2.27c-.17.3-.28.64-.28 1.01s.11.71.28 1.01l-2.27 2.27C2.71 16.11 2.37 16 2 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2c0-.37-.11-.71-.28-1.01l2.27-2.27c.3.17.64.28 1.01.28.93 0 1.71-.64 1.93-1.5h2.14c.22.86 1 1.5 1.93 1.5 1.1 0 2-.9 2-2 0-.37-.11-.71-.28-1.01l2.27-2.27c.3.17.64.28 1.01.28 1.1 0 2-.9 2-2s-.9-2-2-2z',
        ],
        'layout-auto': [
          'M18 13c-.53 0-1.01.21-1.37.55L11.9 10.6c.06-.19.1-.39.1-.6s-.04-.41-.1-.6l4.72-2.95c.37.34.85.55 1.38.55 1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2c0 .21.04.41.1.6l-4.73 2.96c-.24-.23-.54-.4-.87-.48V3.93c.86-.22 1.5-1 1.5-1.93 0-1.1-.9-2-2-2S8 .9 8 2c0 .93.64 1.71 1.5 1.93v4.14c-.33.09-.63.26-.87.48L3.9 5.6c.06-.19.1-.39.1-.6 0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2c.53 0 1.01-.21 1.37-.55L8.1 9.4c-.06.19-.1.39-.1.6s.04.41.1.6l-4.72 2.95C3.01 13.21 2.53 13 2 13c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2c0-.21-.04-.41-.1-.6l4.73-2.96c.24.23.54.4.87.48v4.14C8.64 16.29 8 17.07 8 18c0 1.1.9 2 2 2s2-.9 2-2c0-.93-.64-1.71-1.5-1.93v-4.14c.33-.09.63-.26.87-.48l4.73 2.96c-.06.18-.1.38-.1.59 0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2z',
        ],
        'layout-balloon': [
          'M18 16c-.14 0-.28.02-.42.05l-1.73-3.45c.69-.45 1.14-1.22 1.14-2.1s-.46-1.65-1.14-2.1l1.73-3.45c.14.03.28.05.42.05 1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2c0 .6.27 1.13.69 1.5l-1.77 3.54c-.14-.02-.28-.04-.42-.04a2.5 2.5 0 0 0-2.45 2h-4.1A2.5 2.5 0 0 0 5.5 8c-.14 0-.28.02-.42.04L3.31 4.5C3.73 4.13 4 3.6 4 3c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2c.14 0 .28-.02.42-.05L4.14 8.4C3.46 8.85 3 9.62 3 10.5s.46 1.65 1.14 2.1l-1.73 3.45A1.84 1.84 0 0 0 2 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2c0-.6-.27-1.13-.69-1.5l1.77-3.54c.14.02.28.04.42.04a2.5 2.5 0 0 0 2.45-2h4.1a2.5 2.5 0 0 0 2.45 2c.14 0 .28-.02.42-.04l1.77 3.54c-.42.37-.69.9-.69 1.5 0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2z',
        ],
        'layout-circle': [
          'M18.3 8c-.2-.9-.6-1.7-1.1-2.5.2-.3.3-.7.3-1 0-1.1-.9-2-2-2-.4 0-.7.1-1 .3-.8-.5-1.6-.8-2.5-1.1-.1-1-1-1.7-2-1.7S8.2.8 8 1.7c-.9.3-1.7.6-2.5 1.1-.3-.2-.7-.3-1-.3-1.1 0-2 .9-2 2 0 .4.1.7.3 1-.5.8-.8 1.6-1.1 2.5C.8 8.2 0 9 0 10s.8 1.8 1.7 2c.2.9.6 1.7 1.1 2.5-.2.3-.3.7-.3 1 0 1.1.9 2 2 2 .4 0 .7-.1 1-.3.8.5 1.6.8 2.5 1.1.1 1 1 1.7 2 1.7s1.8-.8 2-1.7c.9-.2 1.7-.6 2.5-1.1.3.2.7.3 1 .3 1.1 0 2-.9 2-2 0-.4-.1-.7-.3-1 .5-.8.8-1.6 1.1-2.5 1-.1 1.7-1 1.7-2s-.8-1.8-1.7-2zm-1.8 5.8c-.3-.2-.6-.3-1-.3-1.1 0-2 .9-2 2 0 .4.1.7.3 1-.6.3-1.2.6-1.9.8-.3-.7-1-1.3-1.9-1.3-.8 0-1.6.5-1.9 1.3-.7-.2-1.3-.4-1.9-.8.2-.3.3-.6.3-1 0-1.1-.9-2-2-2-.4 0-.7.1-1 .3-.3-.6-.6-1.2-.8-1.9.8-.3 1.3-1.1 1.3-1.9s-.5-1.6-1.2-1.8c.2-.7.4-1.3.8-1.9.3.2.6.3 1 .3 1.1 0 2-.9 2-2 0-.4-.1-.7-.3-1 .6-.3 1.2-.6 1.9-.8.2.7 1 1.2 1.8 1.2s1.6-.5 1.9-1.3c.7.2 1.3.4 1.9.8-.2.3-.3.6-.3 1 0 1.1.9 2 2 2 .4 0 .7-.1 1-.3.3.6.6 1.2.8 1.9-.8.3-1.3 1.1-1.3 1.9s.5 1.6 1.2 1.8c-.1.7-.4 1.4-.7 2z',
        ],
        'layout-grid': [
          'M2 0a2 2 0 1 0 0 4 2 2 0 1 0 0-4zM10 0a2 2 0 1 0 0 4 2 2 0 1 0 0-4zM18 0a2 2 0 1 0 0 4 2 2 0 1 0 0-4zM18 8a2 2 0 1 0 0 4 2 2 0 1 0 0-4zM18 16a2 2 0 1 0 0 4 2 2 0 1 0 0-4zM10 16a2 2 0 1 0 0 4 2 2 0 1 0 0-4zM2 16a2 2 0 1 0 0 4 2 2 0 1 0 0-4zM2 8a2 2 0 1 0 0 4 2 2 0 1 0 0-4zM10 8a2 2 0 1 0 0 4 2 2 0 1 0 0-4z',
        ],
        'layout-group-by': [
          'M2 2a2 2 0 1 0 0 4 2 2 0 1 0 0-4zM18 0a2 2 0 1 0 0 4 2 2 0 1 0 0-4zM18 8a2 2 0 1 0 0 4 2 2 0 1 0 0-4zM18 16a2 2 0 1 0 0 4 2 2 0 1 0 0-4zM2 14a2 2 0 1 0 0 4 2 2 0 1 0 0-4zM2 8a2 2 0 1 0 0 4 2 2 0 1 0 0-4zM13 12a2 2 0 1 0 0 4 2 2 0 1 0 0-4zM13 4a2 2 0 1 0 0 4 2 2 0 1 0 0-4z',
        ],
        'layout-hierarchy': [
          'M18.5 16.07v-4.14c.86-.22 1.5-1 1.5-1.93 0-1.1-.9-2-2-2-.93 0-1.71.64-1.93 1.5h-4.14c-.18-.7-.73-1.25-1.43-1.43V3.93c.86-.22 1.5-1 1.5-1.93 0-1.1-.9-2-2-2S8 .9 8 2c0 .93.64 1.71 1.5 1.93v4.14c-.7.18-1.25.73-1.43 1.43H3.93C3.71 8.64 2.93 8 2 8c-1.1 0-2 .9-2 2 0 .93.64 1.71 1.5 1.93v4.14c-.86.22-1.5 1-1.5 1.93 0 1.1.9 2 2 2s2-.9 2-2c0-.93-.64-1.71-1.5-1.93v-4.14c.7-.18 1.25-.73 1.43-1.43h4.14c.18.7.73 1.25 1.43 1.43v4.14c-.86.22-1.5 1-1.5 1.93 0 1.1.9 2 2 2s2-.9 2-2c0-.93-.64-1.71-1.5-1.93v-4.14c.7-.18 1.25-.73 1.43-1.43h4.14c.18.7.73 1.25 1.43 1.43v4.14c-.86.22-1.5 1-1.5 1.93 0 1.1.9 2 2 2s2-.9 2-2c0-.93-.64-1.71-1.5-1.93z',
        ],
        'layout-linear': [
          'M16.5 7a2.5 2.5 0 0 0-2.45 2h-2.1a2.5 2.5 0 0 0-4.9 0h-2.1a2.5 2.5 0 1 0 0 1h2.1a2.5 2.5 0 0 0 4.9 0h2.1a2.5 2.5 0 1 0 2.45-3z',
        ],
        'layout-skew-grid': [
          'M2 0a2 2 0 1 0 0 4 2 2 0 1 0 0-4zM18 0a2 2 0 1 0 0 4 2 2 0 1 0 0-4zM18 8a2 2 0 1 0 0 4 2 2 0 1 0 0-4zM18 16a2 2 0 1 0 0 4 2 2 0 1 0 0-4zM2 16a2 2 0 1 0 0 4 2 2 0 1 0 0-4zM2 8a2 2 0 1 0 0 4 2 2 0 1 0 0-4zM10 12a2 2 0 1 0 0 4 2 2 0 1 0 0-4zM10 4a2 2 0 1 0 0 4 2 2 0 1 0 0-4z',
        ],
        'layout-sorted-clusters': [
          'M2 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM2 0C.9 0 0 .9 0 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm16 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-8 4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z',
        ],
        'left-join': [
          'M8.7 4.7C7.4 6 6.5 7.9 6.5 10s.8 4 2.2 5.3c-.8.5-1.7.7-2.7.7-3.3 0-6-2.7-6-6s2.7-6 6-6c1 0 1.9.2 2.7.7zM14 4c3.3 0 6 2.7 6 6s-2.7 6-6 6c-1 0-1.9-.2-2.7-.7 1.3-1.3 2.2-3.2 2.2-5.3s-.8-3.9-2.2-5.3C12.1 4.2 13 4 14 4zm.6 2.05c.55 1.2.86 2.54.86 3.95s-.31 2.75-.86 3.95c1.9-.31 3.36-1.96 3.36-3.95S16.5 6.36 14.6 6.05zM10 5.5C8.8 6.7 8 8.2 8 10s.8 3.3 2 4.4c1.2-1.1 2-2.7 2-4.5s-.8-3.3-2-4.4z',
        ],
        lightbulb: [
          'M6.33 13.39c0 .34.27.61.6.61h6.13c.33 0 .6-.27.6-.61C14.03 9.78 16 9.4 16 6.09 16 2.72 13.31 0 10 0S4 2.72 4 6.09c0 3.31 1.97 3.69 2.33 7.3zM13 15H7c-.55 0-1 .45-1 1s.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1zm-1 3H8c-.55 0-1 .45-1 1s.45 1 1 1h4c.55 0 1-.45 1-1s-.45-1-1-1z',
        ],
        link: [
          'M10.85 11.98l-4.44 4.44-1 1c-.36.36-.86.58-1.41.58-1.1 0-2-.9-2-2 0-.55.22-1.05.59-1.41l5.44-5.44C7.69 9.06 7.36 9 7 9c-1.11 0-2.09.46-2.82 1.18l-.01-.01-3 3 .01.01C.46 13.91 0 14.89 0 16c0 2.21 1.79 4 4 4 1.11 0 2.09-.46 2.82-1.18l.01.01 3-3-.01-.01C10.54 15.09 11 14.11 11 13c0-.36-.06-.69-.15-1.02zM20 4c0-2.21-1.79-4-4-4-1.11 0-2.09.46-2.82 1.18l-.01-.01-3 3 .01.01C9.46 4.91 9 5.89 9 7c0 .36.06.69.15 1.02l4.44-4.44 1-1c.36-.36.86-.58 1.41-.58 1.1 0 2 .9 2 2 0 .55-.22 1.05-.59 1.41l-5.44 5.44c.34.09.67.15 1.03.15 1.11 0 2.09-.46 2.82-1.18l.01.01 3-3-.01-.01C19.54 6.09 20 5.11 20 4zM5 14a1.003 1.003 0 0 0 1.71.71l8-8a1.003 1.003 0 0 0-1.42-1.42l-2 2-2 2-2 2-2 2c-.18.18-.29.43-.29.71z',
        ],
        list: [
          'M1.03 1C.46 1 0 1.46 0 2.03v.95C0 3.54.46 4 1.03 4h17.95C19.54 4 20 3.54 20 2.97v-.94C20 1.46 19.54 1 18.97 1H1.03zM0 17.97C0 18.54.46 19 1.03 19h17.95c.56 0 1.03-.46 1.03-1.03v-.95c0-.56-.46-1.03-1.03-1.03H1.03C.46 16 0 16.46 0 17.03v.94zM0 12.97C0 13.54.46 14 1.03 14h17.95c.56 0 1.03-.46 1.03-1.03v-.95c0-.56-.46-1.03-1.03-1.03H1.03C.46 11 0 11.46 0 12.03v.94zM0 7.97C0 8.54.46 9 1.03 9h17.95C19.54 9 20 8.54 20 7.97v-.94C20 6.46 19.54 6 18.97 6H1.03C.46 6 0 6.46 0 7.03v.94z',
        ],
        'list-detail-view': [
          'M8 6H1c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1zm0 5H1c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h7c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1zm0 5H1c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h7c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1zM8 1H1c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zm11 0h-7c-.55 0-1 .45-1 1v16c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1z',
        ],
        locate: [
          'M10 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm9 1h-1.07c-.45-3.61-3.32-6.45-6.93-6.91V1c0-.55-.45-1-1-1S9 .45 9 1v1.09C5.39 2.55 2.52 5.39 2.07 9H1c-.55 0-1 .45-1 1s.45 1 1 1h1.07c.45 3.61 3.32 6.45 6.93 6.91V19c0 .55.45 1 1 1s1-.45 1-1v-1.09c3.61-.46 6.48-3.29 6.93-6.91H19c.55 0 1-.45 1-1s-.45-1-1-1zm-4 2h.9a5.98 5.98 0 0 1-4.9 4.91V15c0-.55-.45-1-1-1s-1 .45-1 1v.91A5.98 5.98 0 0 1 4.1 11H5c.55 0 1-.45 1-1s-.45-1-1-1h-.9A5.98 5.98 0 0 1 9 4.09V5c0 .55.45 1 1 1s1-.45 1-1v-.91A5.98 5.98 0 0 1 15.9 9H15c-.55 0-1 .45-1 1s.45 1 1 1z',
        ],
        lock: [
          'M15.93 9H14V4.99c0-2.21-1.79-4-4-4s-4 1.79-4 4V9H3.93c-.55 0-.93.44-.93.99v8c0 .55.38 1.01.93 1.01h12c.55 0 1.07-.46 1.07-1.01v-8c0-.55-.52-.99-1.07-.99zM8 9V4.99c0-1.1.9-2 2-2s2 .9 2 2V9H8z',
        ],
        'log-in': [
          'M19 0h-8c-.55 0-1 .45-1 1s.45 1 1 1h7v16h-7c-.55 0-1 .45-1 1s.45 1 1 1h8c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-4 10c0-.28-.11-.53-.29-.71l-5-5a1.003 1.003 0 0 0-1.42 1.42L11.59 9H1c-.55 0-1 .45-1 1s.45 1 1 1h10.59L8.3 14.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71l5-5c.18-.18.29-.43.29-.71z',
        ],
        'log-out': [
          'M19.71 9.29l-5-5a1.003 1.003 0 0 0-1.42 1.42L16.59 9H6c-.55 0-1 .45-1 1s.45 1 1 1h10.59l-3.29 3.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71l5-5c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71zM9 18H2V2h7c.55 0 1-.45 1-1s-.45-1-1-1H1C.45 0 0 .45 0 1v18c0 .55.45 1 1 1h8c.55 0 1-.45 1-1s-.45-1-1-1z',
        ],
        manual: [
          'M20 1.1a.976.976 0 0 0-.83-.88C15.15-.43 12.07.34 10 2.5 7.93.34 4.85-.43.84.22.37.3.03.67 0 1.1v15.01c0 .07 0 .14.01.21.09.52.61.88 1.15.79 3.85-.62 6.4.16 8 2.46.02.02.03.04.05.07.02.02.04.04.06.07l.01.01a1.07 1.07 0 0 0 .28.19c.01 0 .01.01.02.01.03.01.07.03.1.04.01 0 .02.01.04.01.03.01.07.02.1.02.01 0 .02 0 .04.01H10c.04 0 .09 0 .13-.01.01 0 .03 0 .04-.01.03-.01.06-.01.1-.02.01 0 .03-.01.04-.01.03-.01.07-.02.1-.04.01 0 .02-.01.03-.01.07-.03.13-.07.19-.11.01 0 .01-.01.02-.01.02-.02.04-.03.06-.05.01-.01.02-.02.03-.02l.05-.05c.01-.01.02-.02.02-.03.01-.02.02-.03.04-.05 1.61-2.3 4.15-3.09 8-2.46.54.09 1.06-.26 1.15-.79-.01-.05 0-.09 0-.13V1.1zM9 16.63c-1.78-1.31-4.12-1.83-7-1.55V2c3.26-.37 5.51.39 7 2.35v12.28zm9-1.56c-2.88-.28-5.22.24-7 1.55V4.34c1.49-1.96 3.74-2.71 7-2.35v13.08z',
        ],
        'manually-entered-data': [
          'M1 12h4.34l2-2H1c-.55 0-1 .45-1 1s.45 1 1 1zm16.77-3.94l1.65-1.65c.36-.36.58-.86.58-1.41 0-1.1-.9-2-2-2-.55 0-1.05.22-1.41.59l-1.65 1.65 2.83 2.82zM1 4h12.34l2-2H1c-.55 0-1 .45-1 1s.45 1 1 1zM0 15c0 .55.45 1 1 1h.34l2-2H1c-.55 0-1 .45-1 1zm1-7h8.34l2-2H1c-.55 0-1 .45-1 1s.45 1 1 1zm18 2h-.34l-2 2H19c.55 0 1-.45 1-1s-.45-1-1-1zm0 4h-4.34l-2 2H19c.55 0 1-.45 1-1s-.45-1-1-1zM4 19l4.41-1.59-2.81-2.79L4 19zM14.23 5.94l-7.65 7.65 2.83 2.83 7.65-7.65-2.83-2.83z',
        ],
        map: [
          'M19.54 4.18l.01-.02-6-4-.01.02C13.39.08 13.21 0 13 0s-.39.08-.54.18l-.01-.02L7 3.8 1.55.17l-.01.01A.969.969 0 0 0 1 0C.45 0 0 .45 0 1v14c0 .35.19.64.46.82l-.01.02 6 4 .01-.02c.15.1.33.18.54.18s.39-.08.54-.18l.01.02L13 16.2l5.45 3.63.01-.02c.15.11.33.19.54.19.55 0 1-.45 1-1V5c0-.35-.19-.64-.46-.82zM6 17.13l-4-2.67V2.87l4 2.67v11.59zm6-2.67l-4 2.67V5.54l4-2.67v11.59zm6 2.67l-4-2.67V2.87l4 2.67v11.59z',
        ],
        'map-create': [
          'M18 9.22v7.91l-4-2.67V9.22c-.61-.55-1-1.33-1-2.22-.35 0-.69-.07-1-.18v7.65l-4 2.67V5.54l2.02-1.35c0-.06-.02-.13-.02-.19 0-1.66 1.34-3 3-3 0-.34.07-.66.17-.97C13.12.02 13.06 0 13 0c-.21 0-.39.08-.54.18l-.01-.02L7 3.8 1.55.17l-.01.01A.969.969 0 0 0 1 0C.45 0 0 .45 0 1v14c0 .35.19.64.46.82l-.01.02 6 4 .01-.02c.15.1.33.18.54.18s.39-.08.54-.18l.01.02L13 16.2l5.45 3.63.01-.02c.15.11.33.19.54.19.55 0 1-.45 1-1V6.82c-.31.11-.65.18-1 .18 0 .89-.39 1.67-1 2.22zM6 17.13l-4-2.67V2.87l4 2.67v11.59zM12 4c0 .55.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1V5h2c.55 0 1-.45 1-1s-.45-1-1-1h-2V1c0-.55-.45-1-1-1s-1 .45-1 1v2h-2c-.55 0-1 .45-1 1z',
        ],
        'map-marker': [
          'M9.98 0c-3.87 0-7 2.98-7 6.67 0 3.68 7 13.33 7 13.33s7-9.65 7-13.33c0-3.68-3.14-6.67-7-6.67zm0 10c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z',
        ],
        maximize: [
          'M19 0h-5c-.55 0-1 .45-1 1s.45 1 1 1h2.59L11.3 7.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71L18 3.41V6c0 .55.45 1 1 1s1-.45 1-1V1c0-.55-.45-1-1-1zM8 11c-.28 0-.53.11-.71.29L2 16.59V14c0-.55-.45-1-1-1s-1 .45-1 1v5c0 .55.45 1 1 1h5c.55 0 1-.45 1-1s-.45-1-1-1H3.41l5.29-5.29c.19-.18.3-.43.3-.71 0-.55-.45-1-1-1z',
        ],
        media: [
          'M15 9c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm4-7H1c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 13l-6-5-2 2-4-5-4 8V4h16v11z',
        ],
        menu: [
          'M1 6h18c.55 0 1-.45 1-1s-.45-1-1-1H1c-.55 0-1 .45-1 1s.45 1 1 1zm18 3H1c-.55 0-1 .45-1 1s.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1zm0 5H1c-.55 0-1 .45-1 1s.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1z',
        ],
        'menu-closed': [
          'M8 6h11c.55 0 1-.45 1-1s-.45-1-1-1H8c-.55 0-1 .45-1 1s.45 1 1 1zM4 6c-.28 0-.53.11-.71.29l-3 3C.11 9.47 0 9.72 0 10c0 .28.11.53.29.71l3 3A1.003 1.003 0 0 0 5 13V7c0-.55-.45-1-1-1zm15 8H8c-.55 0-1 .45-1 1s.45 1 1 1h11c.55 0 1-.45 1-1s-.45-1-1-1zm0-5H8c-.55 0-1 .45-1 1s.45 1 1 1h11c.55 0 1-.45 1-1s-.45-1-1-1z',
        ],
        'menu-open': [
          'M12 9H1c-.55 0-1 .45-1 1s.45 1 1 1h11c.55 0 1-.45 1-1s-.45-1-1-1zm0 5H1c-.55 0-1 .45-1 1s.45 1 1 1h11c.55 0 1-.45 1-1s-.45-1-1-1zm0-10H1c-.55 0-1 .45-1 1s.45 1 1 1h11c.55 0 1-.45 1-1s-.45-1-1-1zm7.71 5.29l-3-3A1.003 1.003 0 0 0 15 7v6a1.003 1.003 0 0 0 1.71.71l3-3c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71z',
        ],
        'merge-columns': [
          'M6.71 6.29a1.003 1.003 0 0 0-1.42 1.42L6.59 9H2V2h5v2.18c.42.15.8.39 1.11.7l.01-.01.88.89V1c0-.55-.45-1-1-1H1C.45 0 0 .45 0 1v18c0 .55.45 1 1 1h7c.55 0 1-.45 1-1v-4.76l-.88.88-.01-.01c-.31.31-.69.56-1.11.71V18H2v-7h4.59L5.3 12.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71l3-3c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71l-3-3zM19 0h-7c-.55 0-1 .45-1 1v4.76l.88-.88.01.01c.31-.31.69-.55 1.11-.7V2h5v7h-4.59l1.29-1.29c.19-.18.3-.43.3-.71a1.003 1.003 0 0 0-1.71-.71l-3 3c-.18.18-.29.43-.29.71 0 .28.11.53.29.71l3 3a1.003 1.003 0 0 0 1.42-1.42L13.41 11H18v7h-5v-2.18c-.42-.15-.8-.39-1.11-.7l-.01.01-.88-.89V19c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1z',
        ],
        'merge-links': [
          'M10 13c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm8-5c-.93 0-1.71.64-1.93 1.5H14V4c0-2.21-1.79-4-4-4S6 1.79 6 4v5.5H3.93C3.71 8.64 2.93 8 2 8c-1.1 0-2 .9-2 2s.9 2 2 2c.93 0 1.71-.64 1.93-1.5H6V16c0 2.21 1.79 4 4 4s4-1.79 4-4v-5.5h2.07c.22.86 1 1.5 1.93 1.5 1.1 0 2-.9 2-2s-.9-2-2-2zm-5 8c0 1.66-1.34 3-3 3s-3-1.34-3-3V4c0-1.66 1.34-3 3-3s3 1.34 3 3v12zM10 3c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z',
        ],
        minimize: [
          'M8 11H3c-.55 0-1 .45-1 1s.45 1 1 1h2.59L.3 18.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71L7 14.41V17c0 .55.45 1 1 1s1-.45 1-1v-5c0-.55-.45-1-1-1zM20 1a1.003 1.003 0 0 0-1.71-.71L13 5.59V3c0-.55-.45-1-1-1s-1 .45-1 1v5c0 .55.45 1 1 1h5c.55 0 1-.45 1-1s-.45-1-1-1h-2.59l5.29-5.29c.19-.18.3-.43.3-.71z',
        ],
        minus: ['M16 9H4c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1z'],
        'mobile-phone': [
          'M15 0H5c-.55 0-1 .45-1 1v18c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-5 19c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm4-3H6V3h8v13z',
        ],
        'mobile-video': [
          'M19 5c-.28 0-.53.11-.71.29L15 8.59V5c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h13c.55 0 1-.45 1-1v-3.59l3.29 3.29c.18.19.43.3.71.3.55 0 1-.45 1-1V6c0-.55-.45-1-1-1z',
        ],
        moon: [
          'M19 14.15A9.94 9.94 0 0 1 9.94 20C4.45 20 0 15.55 0 10.06 0 6.03 2.4 2.56 5.85 1a9.811 9.811 0 0 0-.88 4.09c0 5.49 4.45 9.94 9.94 9.94 1.46 0 2.84-.31 4.09-.88z',
        ],
        more: [
          'M3.5 8a2.5 2.5 0 1 0 0 5 2.5 2.5 0 1 0 0-5zM17.5 8a2.5 2.5 0 1 0 0 5 2.5 2.5 0 1 0 0-5zM10.5 8a2.5 2.5 0 1 0 0 5 2.5 2.5 0 1 0 0-5z',
        ],
        mountain: [
          'M20 16H4l7-11h1l2 2h1l5 9zm-4-5l-1.5-3h-1l-1-1-1-1L8 11.5l3-1.5 1 1 1-1 3 1zM8.055 8L2.79 16H0l7-8h1.055z',
        ],
        move: [
          'M19.71 9.29l-3-3a1.003 1.003 0 0 0-1.42 1.42L16.59 9H11V3.41l1.29 1.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71l-3-3C10.53.11 10.28 0 10 0s-.53.11-.71.29l-3 3a1.003 1.003 0 0 0 1.42 1.42L9 3.41V9H3.41L4.7 7.71c.19-.18.3-.43.3-.71a1.003 1.003 0 0 0-1.71-.71l-3 3C.11 9.47 0 9.72 0 10c0 .28.11.53.29.71l3 3a1.003 1.003 0 0 0 1.42-1.42L3.41 11H9v5.59L7.71 15.3A.965.965 0 0 0 7 15a1.003 1.003 0 0 0-.71 1.71l3 3c.18.18.43.29.71.29s.53-.11.71-.29l3-3a1.003 1.003 0 0 0-1.42-1.42L11 16.59V11h5.59l-1.29 1.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71l3-3c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71z',
        ],
        mugshot: [
          'M19 0H1C.45 0 0 .45 0 1v18c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-1 18h-.07c-.05-.2-.12-.42-.22-.67-.46-1.05-2.68-1.75-4.16-2.4-1.48-.65-1.28-1.05-1.33-1.59-.01-.07-.01-.15-.01-.23.51-.45.92-1.07 1.19-1.78 0 0 .01-.04.02-.05.06-.15.11-.32.15-.48.34-.07.54-.44.61-.78.08-.14.23-.48.2-.87-.05-.5-.25-.73-.47-.82v-.09c0-.63-.06-1.55-.17-2.15-.02-.17-.06-.33-.11-.5a3.67 3.67 0 0 0-1.29-1.86C11.7 3.25 10.81 3 10.02 3s-1.68.25-2.31.73c-.61.47-1.07 1.13-1.29 1.86-.05.16-.09.33-.11.5-.12.6-.17 1.51-.17 2.14v.08c-.24.09-.44.32-.49.83-.04.39.12.73.2.87.08.35.28.72.63.78.04.17.09.33.15.48 0 .01.01.02.01.03l.01.01c.27.72.7 1.35 1.22 1.8 0 .07-.01.14-.01.21-.05.54.1.94-1.38 1.59-1.48.65-3.7 1.35-4.16 2.4-.12.27-.18.49-.23.69H2V2h16v16z',
        ],
        'multi-select': [
          'M19 3H7c-.55 0-1 .45-1 1v1h12v6h1c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-6 6H1c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zm-1 6H2v-4h10v4zm4-9H4c-.55 0-1 .45-1 1v1h12v6h1c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1z',
        ],
        music: [
          'M19 0c-.08 0-.16.03-.24.05V.03l-12 3v.02C6.33 3.16 6 3.53 6 4v11.35c-.59-.22-1.27-.35-2-.35-2.21 0-4 1.12-4 2.5S1.79 20 4 20c1.94 0 3.55-.86 3.92-2H8V7.78l10-2.5v7.07c-.59-.22-1.27-.35-2-.35-2.21 0-4 1.12-4 2.5s1.79 2.5 4 2.5c1.94 0 3.55-.86 3.92-2H20V1c0-.55-.45-1-1-1z',
        ],
        'new-grid-item': [
          'M8 0H1C.45 0 0 .45 0 1v7c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm0 11H1c-.55 0-1 .45-1 1v7c0 .55.45 1 1 1h7c.55 0 1-.45 1-1v-7c0-.55-.45-1-1-1zm6 7h-1v-1c0-.55-.45-1-1-1s-1 .45-1 1v2c0 .55.45 1 1 1h2c.55 0 1-.45 1-1s-.45-1-1-1zm5-7h-2c-.55 0-1 .45-1 1s.45 1 1 1h1v1c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1zm0-11h-7c-.55 0-1 .45-1 1v7c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-5 11h-2c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1s1-.45 1-1v-1h1c.55 0 1-.45 1-1s-.45-1-1-1zm5 5c-.55 0-1 .45-1 1v1h-1c-.55 0-1 .45-1 1s.45 1 1 1h2c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1z',
        ],
        'new-link': [
          'M14.5 12a2.5 2.5 0 0 0-2.45 2h-7.1a2.5 2.5 0 1 0 0 1h7.1a2.5 2.5 0 1 0 2.45-3zM19 5h-2V3c0-.55-.45-1-1-1s-1 .45-1 1v2h-2c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1V7h2c.55 0 1-.45 1-1s-.45-1-1-1z',
        ],
        'new-object': [
          'M12 4c0 .6.4 1 1 1h2v2c0 .6.4 1 1 1 .5 0 1-.4 1-1V5h2c.5 0 1-.4 1-1s-.5-1-1-1h-2V1c0-.6-.5-1-1-1-.6 0-1 .4-1 1v2h-2c-.6 0-1 .5-1 1zm7 3c0 1.7-1.3 3-3 3s-3-1.3-3-3c-1.7 0-3-1.3-3-3s1.3-3 3-3c0-.2 0-.4.1-.5-1-.3-2-.5-3.1-.5C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10c0-1.1-.2-2.1-.5-3H19z',
        ],
        'new-person': [
          'M11.41 15.92c-1.46-.65-1.26-1.05-1.31-1.59-.01-.07-.01-.15-.01-.23.5-.45.91-1.07 1.18-1.78 0 0 .01-.04.02-.05.06-.15.11-.32.15-.48.33-.07.53-.44.6-.78.08-.14.23-.48.2-.87-.05-.5-.24-.73-.47-.82v-.09c0-.63-.06-1.55-.17-2.15-.02-.17-.06-.33-.11-.5-.22-.73-.67-1.4-1.27-1.86C9.58 4.25 8.7 4 7.92 4c-.78 0-1.66.25-2.28.73-.61.47-1.06 1.13-1.27 1.86-.05.16-.08.33-.11.5-.12.6-.18 1.51-.18 2.14v.08c-.23.09-.43.32-.48.83-.04.39.12.73.2.87.08.35.28.72.62.78.04.17.09.33.15.48 0 .01.01.02.01.03l.01.01c.27.72.69 1.35 1.21 1.8 0 .07-.01.14-.01.21-.05.54.1.94-1.36 1.59-1.46.65-3.66 1.35-4.11 2.4C-.14 19.38.04 20 .04 20h15.75s.18-.62-.27-1.67c-.45-1.06-2.65-1.75-4.11-2.41zM18.87 3h-2V1c0-.55-.45-1-1-1s-1 .45-1 1v2h-2c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1V5h2c.55 0 1-.45 1-1s-.45-1-1-1z',
        ],
        'new-prescription': [
          'M11.95 10.23c.16-.18.22-.22.46-.22h1.48c.25 0 .47.08.59.33.1.2.09.41-.05.66l-2.71 3.58L14.88 19c.13.21.16.46.03.69-.12.21-.34.31-.57.31H12.7c-.31 0-.56-.17-.7-.44l-1.9-2.67-1.93 2.68c-.15.27-.42.43-.73.43H5.98c-.25 0-.47-.08-.59-.33-.1-.2-.09-.41.05-.66l3.09-4.35L4.26 9H3v4.32c0 .41-.3.69-.7.69H.7c-.41 0-.7-.28-.7-.69V.69C0 .28.3 0 .7 0h4.42c.71 0 1.36.1 1.94.3.59.2 1.11.49 1.54.87.44.38.78.84 1.02 1.39.25.54.37 1.13.37 1.77 0 1.01-.28 1.88-.84 2.6-.43.54-1.35 1.29-2 1.59l3.09 3.94 1.71-2.23zM4.71 6.04c.71 0 1.45-.16 1.81-.46.33-.28.5-.69.5-1.25s-.17-.97-.5-1.25c-.35-.3-1.1-.46-1.81-.46h-1.7v3.42h1.7zM19 3c.55 0 1 .45 1 1s-.45 1-1 1h-2v2c0 .55-.45 1-1 1s-1-.45-1-1V5h-2c-.55 0-1-.45-1-1s.45-1 1-1h2V1c0-.55.45-1 1-1s1 .45 1 1v2h2z',
        ],
        'new-text-box': [
          'M19 3h-2V1c0-.55-.45-1-1-1s-1 .45-1 1v2h-2c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1V5h2c.55 0 1-.45 1-1s-.45-1-1-1zM5 7.5v1c0 .28.22.5.5.5s.5-.22.5-.5V8h2v7h-.5c-.28 0-.5.22-.5.5s.22.5.5.5h2c.28 0 .5-.22.5-.5s-.22-.5-.5-.5H9V8h2v.5c0 .28.22.5.5.5s.5-.22.5-.5v-1c0-.28-.22-.5-.5-.5h-6c-.28 0-.5.22-.5.5zM16 9c-.55 0-1 .45-1 1v8H2V5h8c.55 0 1-.45 1-1s-.45-1-1-1H1c-.55 0-1 .45-1 1v15c0 .55.45 1 1 1h15c.55 0 1-.45 1-1v-9c0-.55-.45-1-1-1z',
        ],
        ninja: [
          'M20 6s-2.98 2.43-6.12 2.19C13.52 5.31 12.05 0 6 0c0 0 2.41 2.99 2.16 6.12C5.27 6.49 0 7.97 0 14c0 0 2.98-2.43 6.11-2.19C6.47 14.69 7.94 20 14 20c0 0-2.42-2.99-2.16-6.13C14.73 13.51 20 12.02 20 6zm-10 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z',
        ],
        notifications: [
          'M10 20c1.1 0 2-.9 2-2H8c0 1.1.9 2 2 2zm7-5c-.55 0-1-.45-1-1V8c0-2.61-1.67-4.81-4-5.63V2c0-1.1-.9-2-2-2S8 .9 8 2v.37C5.67 3.19 4 5.39 4 8v6c0 .55-.45 1-1 1s-1 .45-1 1 .45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1z',
        ],
        'notifications-updated': [
          'M10 20c1.1 0 2-.9 2-2H8c0 1.1.9 2 2 2zm2-17.834A2.994 2.994 0 0 0 8 4.99c0 .808.319 1.557.876 2.114l2.97 2.99a2.99 2.99 0 0 0 4.154.072V14c0 .55.45 1 1 1s1 .45 1 1-.45 1-1 1H3c-.55 0-1-.45-1-1s.45-1 1-1 1-.45 1-1V8c0-2.61 1.67-4.81 4-5.63V2c0-1.1.9-2 2-2s2 .9 2 2v.166zm1.26 6.514l-2.97-2.99a.973.973 0 0 1-.29-.7c0-.55.44-1 .99-1 .27 0 .52.11.7.29l2.28 2.28 4.27-4.27a.99.99 0 0 1 .7-.29c.55 0 1 .45 1 1 0 .28-.11.53-.3.7l-4.98 4.98a.99.99 0 0 1-1.4 0z',
        ],
        'numbered-list': [
          'M1.74 9.01h1.27V1h-.95c-.04.24-.12.45-.26.62-.13.17-.29.3-.47.41-.19.11-.4.18-.63.23-.23.04-.46.07-.71.07v1.03h1.75v5.65zm.43 7.93c.18-.14.37-.28.58-.43.21-.14.42-.29.63-.45.21-.16.41-.33.61-.5.2-.18.37-.38.52-.59.15-.21.28-.45.37-.7.09-.25.14-.54.14-.85 0-.25-.04-.52-.12-.8-.08-.28-.21-.54-.39-.78-.19-.24-.43-.44-.73-.59-.3-.17-.68-.25-1.12-.25-.41 0-.77.08-1.08.23-.32.16-.58.37-.8.64-.22.27-.38.59-.49.96-.11.37-.16.77-.16 1.21h1.19c.01-.28.03-.53.08-.77s.12-.45.21-.62c.09-.18.22-.31.38-.42.16-.1.35-.15.59-.15.26 0 .47.05.63.14.16.09.29.21.38.35.09.14.15.29.18.45.03.16.05.31.05.45-.01.31-.08.58-.22.81-.14.24-.32.45-.53.66-.22.2-.45.39-.71.57-.26.18-.51.36-.74.54-.5.36-.89.78-1.17 1.27-.3.47-.45 1.04-.46 1.69H5v-1.14H1.43c.05-.17.14-.33.27-.49.13-.15.29-.3.47-.44zM18 4.02H8c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h10c.55 0 1-.45 1-1v-1c0-.56-.45-1-1-1zm0 9H8c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h10c.55 0 1-.45 1-1v-1c0-.56-.45-1-1-1z',
        ],
        numerical: [
          'M2.39 5.75c-.17.21-.38.39-.63.52s-.52.23-.83.29c-.3.05-.61.08-.93.08v1.24h2.49V15h1.49V4.98H2.73c-.05.31-.17.57-.34.77zm17.2 4.71c-.27-.44-.65-.71-1.14-.82v-.02c.42-.16.72-.43.92-.79.2-.36.29-.79.29-1.27 0-.42-.08-.8-.23-1.12-.15-.33-.36-.59-.62-.8-.26-.21-.55-.37-.87-.48-.32-.11-.65-.16-.98-.16-.43 0-.82.08-1.16.25-.34.16-.63.39-.87.69-.24.29-.43.64-.57 1.04-.14.4-.22.83-.23 1.3h1.39c-.01-.25.02-.49.07-.72.06-.23.14-.44.26-.63s.27-.34.45-.45c.18-.11.39-.17.63-.17.39 0 .71.12.96.37s.37.58.37.99c0 .29-.05.54-.16.74-.11.2-.25.36-.43.47-.18.11-.38.19-.61.24-.23.05-.46.06-.68.05v1.17c.28-.01.55 0 .81.03s.5.1.71.21c.21.11.38.28.51.5.13.22.2.52.2.89 0 .55-.16.97-.47 1.27-.31.3-.7.45-1.17.45-.55 0-.95-.19-1.23-.58-.27-.39-.4-.88-.38-1.46h-1.39c.01.5.08.96.21 1.38.13.41.32.77.57 1.06.25.29.56.52.93.68.37.16.8.24 1.3.24.41 0 .79-.07 1.16-.21.37-.14.69-.33.96-.58.28-.25.5-.56.66-.92a3 3 0 0 0 .24-1.23c0-.64-.14-1.17-.41-1.61zM8.58 12.41c.21-.18.45-.36.7-.53.25-.18.5-.36.75-.56.25-.2.49-.41.73-.63.23-.22.44-.47.63-.74.18-.27.33-.56.44-.88.11-.32.16-.67.16-1.07 0-.32-.05-.65-.14-1-.09-.35-.25-.68-.47-.97-.22-.3-.51-.55-.87-.74-.36-.2-.81-.29-1.35-.29-.49 0-.93.1-1.3.29-.37.18-.69.44-.95.78-.26.33-.45.73-.58 1.2-.13.46-.2.96-.2 1.5h1.43c.01-.35.04-.67.09-.97.05-.3.14-.56.25-.78.11-.22.26-.39.45-.52s.43-.19.71-.19c.31 0 .56.06.75.18.19.12.34.26.45.43.11.17.18.36.22.56.04.2.06.39.06.57-.01.38-.1.72-.26 1.02-.15.3-.37.57-.63.83-.26.25-.54.49-.85.71-.31.22-.61.45-.89.68-.6.45-1.06.98-1.41 1.58-.35.61-.52 1.32-.53 2.13h6.01v-1.43H7.69c.06-.21.17-.42.33-.61s.34-.38.56-.55z',
        ],
        office: [
          'M19 6h-5V1c0-.55-.45-1-1-1H1C.45 0 0 .45 0 1v18c0 .55.45 1 1 1h4v-6h4v6h10c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1zM6 12H2V8h4v4zm0-6H2V2h4v4zm6 6H8V8h4v4zm0-6H8V2h4v4zm6 11h-4v-3h4v3zm0-5h-4V8h4v4z',
        ],
        offline: [
          'M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zM7 18l2-7H5l8-9-2 7h4l-8 9z',
        ],
        'oil-field': [
          'M19 17.99h-1.36l-4.35-9.57 2.91-.86 1.66 4.1c.11.27.43.4.72.31.12-.04.22-.11.28-.2.06-.11 1.47-2.08 1.05-5.6C19.79 5.12 19.3 0 16.01 0 14.89.01 13.99.83 14 1.84c0 .19.04.38.1.56l1.34 3.31L.72 10.03v.02c-.41.12-.72.49-.72.94 0 .55.45 1 1 1 .1 0 .19-.03.28-.06v.02l2-.59 1.47 6.63H3c-.55 0-1 .45-1 1s.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1zM5.2 10.8l3.95-1.16-2.83 6.22L5.2 10.8zm2.35 7.19l3.95-8.68 3.95 8.68h-7.9z',
        ],
        'one-column': [
          'M14.94 0h-4c-.55 0-1 .45-1 1v18c0 .55.45 1 1 1h4c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-8 6c-.28 0-.53.11-.71.29l-3 3c-.18.18-.29.43-.29.71s.11.53.29.71l3 3A1.003 1.003 0 0 0 7.94 13V7c0-.55-.45-1-1-1z',
        ],
        outdated: [
          'M10 0c5.52 0 10 4.48 10 10s-4.48 10-10 10S0 15.52 0 10c0-.55.45-1 1-1s1 .45 1 1c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8C7.47 2 5.22 3.17 3.76 5H5c.55 0 1 .45 1 1s-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1s1 .45 1 1v2.05C3.82 1.6 6.71 0 10 0zm1 16H9v-2h2v2zm0-3H9V4h2v9z',
        ],
        'page-layout': [
          'M19 1H1c-.55 0-1 .45-1 1v16c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zM7 17H2V8h5v9zm11 0H8V8h10v9zm0-10H2V3h16v4z',
        ],
        'panel-stats': [
          'M1 1h18a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zm1 2v13h16V3H2zm9 0h1v13h-1V3zm2 7h3.952v1H13v-1zm0 2h3.952v1H13v-1zm0 2h3.952v1H13v-1zm0-6h3.952v1H13V8zm0-2h3.952v1H13V6zm0-2h3.952v1H13V4z',
        ],
        'panel-table': [
          'M19 1H1c-.6 0-1 .4-1 1v15c0 .6.4 1 1 1h18c.6 0 1-.4 1-1V2c0-.6-.4-1-1-1zm-9 11H7V9h3v3zm0-4H7V5h3v3zm-8 8V3h4v13H2zm5 0v-3h3v3H7zm11 0h-7v-3h7v3zm0-4h-7V9h7v3zm0-4h-7V5h7v3z',
        ],
        paperclip: [
          'M18.35 2.67A5.664 5.664 0 0 0 14.33 1c-1.44 0-2.89.56-3.99 1.67l-9.16 9.27C.4 12.73 0 13.78 0 14.83s.39 2.1 1.18 2.9c.78.79 1.82 1.18 2.85 1.18 1.04 0 2.07-.39 2.87-1.2l9.14-9.27c.96-.96.96-2.5.02-3.45-.94-.95-2.49-.96-3.44 0l-7.59 7.69c-.31.32-.3.83.01 1.14.31.31.81.31 1.13.02l7.59-7.69c.31-.31.84-.31 1.13-.02.31.31.31.85 0 1.16l-9.14 9.27c-.93.95-2.54.93-3.45.02-.94-.95-.92-2.55.02-3.49l9.16-9.25c1.55-1.56 4.18-1.59 5.72-.03 1.56 1.57 1.55 4.26 0 5.82l-8.89 9.02c-.3.31-.3.81.01 1.11.3.3.79.31 1.1.01v.01l8.91-9.02A5.645 5.645 0 0 0 20 6.73c0-1.48-.55-2.94-1.65-4.06z',
        ],
        paragraph: [
          'M16.5 1H7C4.2 1 2 3.2 2 6s2.2 5 5 5v6.5c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V4h2v13.5c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V4h1.5c.8 0 1.5-.7 1.5-1.5S17.3 1 16.5 1z',
        ],
        path: [
          'M18 0H2C.9 0 0 .9 0 2s.9 2 2 2h7v4H4c-1.1 0-2 .9-2 2s.9 2 2 2h5v4H6c-1.1 0-2 .9-2 2s.9 2 2 2h8c1.1 0 2-.9 2-2s-.9-2-2-2h-3v-4h5c1.1 0 2-.9 2-2s-.9-2-2-2h-5V4h7c1.1 0 2-.9 2-2s-.9-2-2-2z',
        ],
        'path-search': [
          'M4 7c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm15 11.69l-5-2.5v-3.63c-.32.11-.66.22-1 .29v3.32l-6 2.57v-7.25c-.36-.27-.69-.57-1-.9v8.1l-5-2.5V10c.55 0 1-.45 1-1s-.45-1-1-1V1.31l3.43 1.71c.11-.31.24-.62.39-.92L.72.05A.545.545 0 0 0 .5 0C.22 0 0 .22 0 .5v16c0 .2.12.36.28.44l6 3c.07.04.14.06.22.06.07 0 .14-.01.2-.04l6.79-2.91 5.79 2.9c.07.03.14.05.22.05.28 0 .5-.22.5-.5v-4.21c-.31.13-.64.21-1 .21v3.19zM10 5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm3-1c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm6.72-.94l-1.43-.72c.2.43.36.89.48 1.36l.23.11V5.5c-.55 0-1 .45-1 1s.45 1 1 1v1.96l1 1V3.5c0-.2-.12-.36-.28-.44zm-3.69 5.56c.14-.21.27-.42.38-.65.02-.04.04-.07.05-.11.11-.22.2-.45.28-.69v-.01c.07-.24.13-.48.17-.73l.03-.17c.04-.25.06-.5.06-.76C17 2.46 14.54 0 11.5 0S6 2.46 6 5.5 8.46 11 11.5 11c.26 0 .51-.02.76-.06l.17-.03c.25-.04.49-.1.73-.17h.01c.24-.08.47-.17.69-.28.04-.02.07-.03.11-.05.23-.11.44-.24.65-.38l.18.18 3.5 3.5c.17.18.42.29.7.29a1.003 1.003 0 0 0 .71-1.71l-3.68-3.67zm-4.53.88c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z',
        ],
        pause: [
          'M7 3H4c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm9 0h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1z',
        ],
        people: [
          'M16.94 17a4.92 4.92 0 0 0-.33-1.06c-.45-.97-1.37-1.52-3.24-2.3-.17-.07-.76-.31-.77-.32-.1-.04-.2-.08-.28-.12.05-.14.04-.29.06-.45 0-.05.01-.11.01-.16-.25-.21-.47-.48-.65-.79.22-.34.41-.71.56-1.12l.04-.11c-.01.02-.01.02-.02.08l.06-.15c.36-.26.6-.67.72-1.13.18-.37.29-.82.25-1.3-.05-.5-.21-.92-.47-1.22-.02-.53-.06-1.11-.12-1.59.38-.17.83-.26 1.24-.26.59 0 1.26.19 1.73.55.46.35.8.85.97 1.4.04.13.07.25.08.38.08.45.13 1.14.13 1.61v.07c.16.07.31.24.35.62.02.29-.09.55-.15.65-.05.26-.2.53-.46.59-.03.12-.07.25-.11.36-.01.01-.01.04-.01.04-.2.53-.51 1-.89 1.34 0 .06 0 .12.01.17.04.41-.11.71 1 1.19 1.1.5 2.77 1.01 3.13 1.79.34.79.2 1.25.2 1.25h-3.04zm-5.42-3.06c1.47.66 3.7 1.35 4.18 2.39.45 1.05.27 1.67.27 1.67H.04s-.19-.62.27-1.67c.46-1.05 2.68-1.75 4.16-2.4 1.48-.65 1.33-1.05 1.38-1.59 0-.07.01-.14.01-.21-.52-.45-.95-1.08-1.22-1.8l-.01-.01c0-.01-.01-.02-.01-.03-.07-.15-.12-.32-.16-.49-.34-.06-.54-.43-.62-.78-.08-.14-.24-.48-.2-.87.05-.51.26-.74.49-.83v-.08c0-.64.05-1.55.17-2.15a3.648 3.648 0 0 1 1.4-2.36C6.32 2.25 7.21 2 8 2s1.68.25 2.31.73a3.63 3.63 0 0 1 1.4 2.36c.11.6.17 1.52.17 2.15v.09c.22.09.42.32.47.82.03.39-.12.73-.2.87-.07.34-.27.71-.61.78-.04.16-.09.33-.15.48-.01.01-.02.05-.02.05-.27.71-.68 1.33-1.19 1.78 0 .08 0 .16.01.23.05.55-.15.95 1.33 1.6z',
        ],
        percentage: [
          'M15 10c-1.66 0-3 1.34-3 3v2c0 1.66 1.34 3 3 3s3-1.34 3-3v-2c0-1.66-1.34-3-3-3zm1 5c0 .55-.45 1-1 1s-1-.45-1-1v-2c0-.55.45-1 1-1s1 .45 1 1v2zM8 7V5c0-1.66-1.34-3-3-3S2 3.34 2 5v2c0 1.66 1.34 3 3 3s3-1.34 3-3zM4 7V5c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1s-1-.45-1-1zm11-4a1.003 1.003 0 0 0-1.88-.48L5.14 16.49a1.003 1.003 0 0 0 1.74.99l7.99-13.97c.08-.15.13-.32.13-.51z',
        ],
        person: [
          'M19.61 17.91c-.57-1.32-3.35-2.19-5.19-3.01-1.85-.82-1.59-1.31-1.66-1.99-.01-.09-.01-.19-.02-.29.63-.56 1.15-1.33 1.49-2.22 0 0 .02-.05.02-.06.07-.19.13-.39.19-.6.42-.09.67-.55.76-.98.1-.17.29-.6.25-1.08-.06-.62-.31-.91-.59-1.03v-.11c0-.79-.07-1.93-.22-2.68A4.55 4.55 0 0 0 12.9.92C12.11.32 11 0 10.01 0s-2.1.32-2.89.92a4.55 4.55 0 0 0-1.74 2.94c-.14.75-.22 1.89-.22 2.68v.1c-.29.11-.55.4-.61 1.04-.04.48.15.91.25 1.08.1.44.35.91.79.98.05.21.12.41.19.6 0 .01.01.03.01.04l.01.02c.34.91.87 1.69 1.52 2.25 0 .09-.01.18-.02.26-.07.68.13 1.17-1.72 1.99S.96 16.59.39 17.91C-.18 19.23.05 20 .05 20h19.9s.23-.77-.34-2.09z',
        ],
        phone: [
          'M19.91 15.51c-.08-.08-4.21-2.5-4.35-2.57a.876.876 0 0 0-.4-.1c-.19 0-.42.13-.71.4-.28.27-1.17 1.49-1.43 1.76s-.48.4-.65.4c-.08 0-.19-.02-.32-.07s-1.45-.73-4.2-3.15-3.11-4-3.13-4.44c0-.17.13-.39.4-.65.28-.25.57-.51.89-.74.32-.24.61-.5.88-.78s.4-.52.4-.71c0-.13-.03-.27-.1-.4C7.12 4.32 4.62.19 4.53.1c-.19-.18-.92-.1-1.29.1C.25 1.82 0 4 .05 4.86c.05.89.61 5.58 5.2 9.93 5.7 5.41 9.66 5.2 9.92 5.2.87 0 3.52-.48 4.65-3.19.16-.38.31-1.07.09-1.29z',
        ],
        'pie-chart': [
          'M9 .98c-4.5.5-8 4.31-8 8.94 0 4.97 4.03 9.04 9 9.04 4.63 0 8.44-3.96 8.94-7.96H9V.98z',
          'M10-.08V10h10C20 4 15.52-.08 10-.08z',
        ],
        pin: [
          'M11.77 1.16c-.81.81-.74 2.28.02 3.76L6.1 8.71c-2.17-1.46-4.12-2-4.94-1.18l4.95 4.95-4.95 6.36 6.36-4.95 4.95 4.95c.82-.82.27-2.77-1.19-4.94l3.8-5.69c1.47.76 2.94.84 3.76.02l-7.07-7.07z',
        ],
        pivot: [
          'M5.83 9.75L.29 15.29a1.003 1.003 0 0 0 1.42 1.42l5.54-5.54c-.57-.37-1.05-.85-1.42-1.42zM19 11c-.55 0-1 .45-1 1v1.59l-3.83-3.83c-.37.56-.85 1.04-1.41 1.41L16.59 15H15c-.55 0-1 .45-1 1s.45 1 1 1h4c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1zm-5-4c0-2.21-1.79-4-4-4S6 4.79 6 7s1.79 4 4 4 4-1.79 4-4zm-4 2c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z',
        ],
        'pivot-table': [
          'M3 5H1c-.55 0-1 .45-1 1v13c0 .55.45 1 1 1h2c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm0-5H1C.45 0 0 .45 0 1v2c0 .55.45 1 1 1h2c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm13.71 5.29C16.53 5.11 16.28 5 16 5s-.53.11-.71.29l-3 3a1.003 1.003 0 0 0 1.42 1.42L15 8.41V11c0 2.21-1.79 4-4 4H8.41l1.29-1.29c.19-.18.3-.43.3-.71a1.003 1.003 0 0 0-1.71-.71l-3 3c-.18.18-.29.43-.29.71 0 .28.11.53.29.71l3 3a1.003 1.003 0 0 0 1.42-1.42L8.41 17H11c3.31 0 6-2.69 6-6V8.41l1.29 1.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71l-3-3zM19 0H6c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h13c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1z',
        ],
        play: [
          'M16 10c0-.36-.2-.67-.49-.84l.01-.01-10-6-.01.01A.991.991 0 0 0 5 3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1 .19 0 .36-.07.51-.16l.01.01 10-6-.01-.01c.29-.17.49-.48.49-.84z',
        ],
        plus: [
          'M16 9h-5V4c0-.55-.45-1-1-1s-1 .45-1 1v5H4c-.55 0-1 .45-1 1s.45 1 1 1h5v5c0 .55.45 1 1 1s1-.45 1-1v-5h5c.55 0 1-.45 1-1s-.45-1-1-1z',
        ],
        'polygon-filter': [
          'M18 7c-.27 0-.52.05-.75.15l-6.28-4.88c.01-.09.03-.18.03-.27 0-1.1-.9-2-2-2S7 .9 7 2c0 .06.01.12.02.19l-4.19 3C2.57 5.07 2.29 5 2 5 .9 5 0 5.9 0 7c0 .74.4 1.38 1 1.72v7.55c-.6.35-1 .99-1 1.73 0 1.1.9 2 2 2 .74 0 1.38-.4 1.72-1h7.55c.35.6.98 1 1.72 1 1.1 0 2-.9 2-2 0-.37-.11-.72-.29-1.02L18.03 11A2 2 0 0 0 18 7zm-5.03 9c-.72.01-1.35.41-1.69 1H3.72c-.17-.3-.42-.55-.72-.72V8.72c.6-.34 1-.98 1-1.72 0-.06-.01-.12-.02-.19l4.19-3c.26.12.54.19.83.19.27 0 .52-.05.75-.15l6.28 4.88c-.01.09-.03.18-.03.27 0 .37.11.72.29 1.02L12.97 16z',
        ],
        power: [
          'M10 10c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1S9 .45 9 1v8c0 .55.45 1 1 1zm3-7.45v2.16c2.36 1.12 4 3.5 4 6.29 0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.79 1.64-5.17 4-6.29V2.55C3.51 3.79 1 7.09 1 11a9 9 0 0 0 18 0c0-3.91-2.51-7.21-6-8.45z',
        ],
        'predictive-analysis': [
          'M20 8.01c0-1.26-.61-2.43-1.61-3.12C17.86 2.5 15.8.79 13.4.79c-.58 0-1.14.1-1.69.29A3.533 3.533 0 0 0 9.17 0C8.05 0 7 .55 6.32 1.45c-.15-.02-.3-.03-.45-.03-1.63 0-3.03 1.12-3.46 2.71C.97 4.65 0 6.05 0 7.66c0 .48.09.95.26 1.4-.17.44-.26.91-.26 1.39 0 1.38.72 2.64 1.89 3.29.67.7 1.59 1.09 2.54 1.09.61 0 1.19-.15 1.71-.45.68.82 1.68 1.3 2.73 1.3.66 0 1.28-.18 1.83-.52.61.49 1.34.81 2.11.91 1.3 1.43 2.3 3.28 2.31 3.3 0 0 .35.61.33.61.96-.01 1.77-.2 1.64-1.3.01.02-.92-2.89-.92-2.89.52-.26.94-.69 1.21-1.23 1.12-.66 1.84-1.91 1.84-3.26 0-.3-.03-.6-.1-.89.57-.64.88-1.51.88-2.4zm-1.54 1.28l-.18-.2-.77-.84c-.33-.37-.67-1.17-.73-1.73 0 0-.13-1.25-.13-1.26-.06-.74-1.17-.73-1.13.14 0 .02.13 1.26.13 1.26.04.36.15.77.3 1.17-.08-.01-.15-.02-.22-.02 0 0-2.57-.12-2.57-.13-.73-.03-.89 1.22-.05 1.25l2.57.13c.53.03 1.29.37 1.61.72l.61.67.02.06c.1.27.14.55.14.83 0 .93-.51 1.77-1.34 2.18l-.2.1-.09.23c-.19.48-.6.82-1.1.93l-.67.14.87 2.75c-.48-.76-1.19-1.79-2.02-2.67l-.15-.16-.21-.02c-.51-.04-.99-.21-1.42-.48l1.7-1.48c.44-.39 1.04-.55 1.24-.49 0 0 .78.22.78.23.78.2 1.03-.92.29-1.21l-.78-.23c-.69-.2-1.67.22-2.24.72l-1.91 1.66-.39.32c-.44.36-.93.55-1.5.55-.8 0-1.54-.41-1.97-1.07v-1.88c0-.5.21-.98.34-1.07 0 0 .65-.43.64-.43.87-.69.21-1.57-.64-1.14 0-.01-.65.43-.65.43-.31.2-.54.56-.7.97-.13-.13-.28-.25-.43-.35 0 0-1.91-1.26-1.91-1.28-.81-.56-1.5.63-.61 1.11 0-.02 1.89 1.28 1.89 1.28.46.31.77.97.77 1.36v.84c-.43.24-.78.36-1.24.36-.67 0-1.31-.29-1.77-.79l-.07-.08-.09-.05a2.425 2.425 0 0 1-1.31-2.16c0-.38.09-.74.25-1.08l.15-.31-.14-.33c-.17-.34-.25-.7-.25-1.08 0-1.13.76-2.1 1.85-2.37l.39-.09.07-.43a2.41 2.41 0 0 1 2.39-2.05c.19 0 .39.02.58.07l.4.1.22-.38A2.41 2.41 0 0 1 9.17 1.3c.55 0 1.08.19 1.5.53l-.44.45-.01-.01-.31.31c-.41.35-.92.53-1.11.5 0 0-.84-.13-.84-.14-.83-.15-1.09 1.08-.18 1.29.01 0 .84.14.84.14.03 0 .06 0 .09.01-.14.46-.18.96-.12 1.4 0 0 .21 1.24.19 1.23.13.65 1.32.44 1.16-.22 0-.01-.19-1.23-.19-1.23-.07-.48.15-1.19.45-1.5l.48-.5c.07-.06.13-.12.19-.18l.93-.95c.5-.23 1.04-.34 1.59-.34 1.93 0 3.57 1.4 3.89 3.34l.05.31.26.15a2.445 2.445 0 0 1 .87 3.4z',
        ],
        prescription: [
          'M13.95 10.23c.16-.18.22-.22.46-.22h1.48c.25 0 .47.08.59.33.1.2.09.41-.05.66l-2.71 3.58L16.88 19c.13.21.16.46.03.69-.12.21-.34.31-.57.31H14.7c-.31 0-.56-.17-.7-.44l-1.9-2.67-1.93 2.68c-.15.27-.42.43-.73.43H7.98c-.25 0-.47-.08-.59-.33-.1-.2-.09-.41.05-.66l3.09-4.35L6.26 9H5v4.32c0 .41-.3.69-.7.69H2.7c-.41 0-.7-.28-.7-.69V.69c0-.41.3-.69.7-.69h4.42c.71 0 1.36.1 1.94.3.59.2 1.11.49 1.54.87.44.38.78.84 1.02 1.39.24.54.36 1.14.36 1.78 0 1.01-.28 1.88-.84 2.6-.43.54-1.35 1.29-2 1.59l3.09 3.94 1.72-2.24zM6.71 6.04c.71 0 1.45-.16 1.81-.46.33-.28.5-.69.5-1.25s-.17-.97-.5-1.25c-.35-.3-1.1-.46-1.81-.46h-1.7v3.42h1.7z',
        ],
        presentation: [
          'M19 1h-8c0-.55-.45-1-1-1S9 .45 9 1H1c-.55 0-1 .45-1 1s.45 1 1 1h1v11c0 .55.45 1 1 1h4.59L4.3 18.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71L9 16.41V19c0 .55.45 1 1 1s1-.45 1-1v-2.59l3.29 3.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71L12.41 15H17c.55 0 1-.45 1-1V3h1c.55 0 1-.45 1-1s-.45-1-1-1zm-3 12H4V3h12v10z',
        ],
        print: [
          'M14 16H6v-4H4v5c0 .55.45 1 1 1h10c.55 0 1-.45 1-1v-5h-2v4zm2-13c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v1h12V3zm3 2H1c-.55 0-1 .45-1 1v7c0 .55.45 1 1 1h2v-3h14v3h2c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm-1 4h-2V7h2v2z',
        ],
        projects: [
          'M18 4c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v2h16V4zm-2-3c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v1h12V1zm3 6H1c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1zm-5 7c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1v-2h1v2h6v-2h1v2z',
        ],
        properties: [
          'M2 15c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-7c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm5-4h12c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1zM2 1C.9 1 0 1.9 0 3s.9 2 2 2 2-.9 2-2-.9-2-2-2zm17 8H7c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1zm0 7H7c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1z',
        ],
        property: [
          'M3 5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm5-1h11c.55 0 1-.45 1-1s-.45-1-1-1H8c-.55 0-1 .45-1 1s.45 1 1 1zM3 15c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm16 1H8c-.55 0-1 .45-1 1s.45 1 1 1h11c.55 0 1-.45 1-1s-.45-1-1-1zm-1-8H9c-1.1 0-2 .9-2 2s.9 2 2 2h9c1.1 0 2-.9 2-2s-.9-2-2-2zM3 7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z',
        ],
        'publish-function': [
          'M7.01 10.11c.35-.64.72-1.68 1.09-3.11l.8-3.03h.96l.24-.77h-.99c.28-1.11.66-1.92 1.12-2.43.28-.32.56-.48.83-.48.05 0 .1.02.13.05.03.03.05.07.05.12 0 .04-.04.13-.11.25-.08.12-.11.24-.11.35 0 .15.06.28.18.39.12.11.27.16.45.16.2 0 .36-.07.49-.2s.2-.31.2-.54c0-.26-.1-.47-.3-.63-.2-.16-.52-.24-.96-.24-.68 0-1.3.19-1.86.58-.55.38-1.08 1.02-1.58 1.91-.17.3-.34.5-.49.59-.15.08-.4.13-.74.12l-.23.77h.95L5.74 9.21c-.23.86-.39 1.39-.47 1.59-.12.29-.3.54-.54.75-.1.08-.21.12-.35.12-.04 0-.07-.01-.1-.03l-.03-.04c0-.02.03-.07.1-.13.07-.07.1-.17.1-.31 0-.15-.05-.28-.16-.38-.11-.1-.27-.15-.47-.15-.25 0-.44.07-.59.2-.15.12-.23.28-.23.46 0 .19.09.36.27.5.19.14.47.21.86.21.61 0 1.16-.15 1.63-.46.48-.31.89-.79 1.25-1.43zm3.7 1.18c-.18-.18-.43-.29-.71-.29s-.53.11-.71.29l-3 3a1.003 1.003 0 0 0 1.42 1.42L9 14.41V19c0 .55.45 1 1 1s1-.45 1-1v-4.59l1.29 1.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71l-3-3zm4.15-6.78c.17-.13.36-.2.55-.2.07 0 .2.03.39.08s.36.08.5.08c.2 0 .37-.07.5-.2.13-.14.2-.31.2-.52 0-.22-.07-.4-.2-.53s-.33-.2-.58-.2c-.22 0-.43.05-.63.15-.2.1-.45.32-.75.67-.23.25-.56.7-1.01 1.33a6.52 6.52 0 0 0-.91-2.15l-2.38.39-.05.25c.18-.03.33-.05.45-.05.24 0 .43.1.59.3.25.31.59 1.24 1.02 2.79-.34.44-.58.73-.7.87-.21.22-.38.36-.52.43-.1.05-.22.08-.35.08-.1 0-.26-.05-.49-.16a1.01 1.01 0 0 0-.42-.11c-.23 0-.42.07-.57.22-.17.14-.24.32-.24.55 0 .21.07.38.21.51.14.13.33.2.56.2.23 0 .44-.05.64-.14.2-.09.45-.29.75-.59s.72-.78 1.25-1.43c.2.62.38 1.07.53 1.35.15.28.32.49.52.61.19.12.44.19.73.19.28 0 .57-.1.86-.3.38-.25.77-.69 1.17-1.31l-.25-.14c-.27.37-.48.6-.61.69-.09.06-.19.09-.31.09-.14 0-.28-.09-.42-.26-.23-.29-.54-1.09-.93-2.4.37-.58.66-.96.9-1.14z',
        ],
        pulse: [
          'M19 10h-2.38L14.9 6.55h-.01c-.17-.32-.5-.55-.89-.55-.43 0-.79.28-.93.66h-.01l-2.75 7.57L7.98 1.82h-.02A.978.978 0 0 0 7 1c-.44 0-.8.29-.94.69h-.01L3.28 10H1c-.55 0-1 .45-1 1s.45 1 1 1h3c.44 0 .8-.29.94-.69h.01l1.78-5.34 2.29 12.21h.02c.08.46.47.82.96.82.43 0 .79-.28.93-.66h.01l3.21-8.82.96 1.92h.01c.16.33.49.56.88.56h3c.55 0 1-.45 1-1s-.45-1-1-1z',
        ],
        random: [
          'M14.47 5h2.12L15.3 6.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71l3-3c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71l-3-3a1.003 1.003 0 0 0-1.42 1.42L16.59 3H14c-.31 0-.57.15-.76.37l-.01-.01-2.93 3.52 1.3 1.56L14.47 5zm2.24 7.29a1.003 1.003 0 0 0-1.42 1.42l1.3 1.29h-2.12L4.77 3.36l-.01.01A.998.998 0 0 0 4 3H1c-.55 0-1 .45-1 1s.45 1 1 1h2.53l9.7 11.64.01-.01c.19.22.45.37.76.37h2.59l-1.29 1.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71l3-3c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71l-3-3zM3.53 15H1c-.55 0-1 .45-1 1s.45 1 1 1h3c.31 0 .57-.15.76-.37l.01.01 2.93-3.52-1.3-1.56L3.53 15z',
        ],
        record: ['M10 3a7 7 0 1 0 0 14 7 7 0 1 0 0-14z'],
        redo: [
          'M19.71 5.29l-4-4a1.003 1.003 0 0 0-1.42 1.42L16.59 5H6c-3.31 0-6 2.69-6 6s2.69 6 6 6h5v-2H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h10.59L14.3 9.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71l4-4c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71zM15 14c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z',
        ],
        refresh: [
          'M19 1c-.55 0-1 .45-1 1v2.06C16.18 1.61 13.29 0 10 0 4.48 0 0 4.48 0 10c0 .55.45 1 1 1s1-.45 1-1c0-4.42 3.58-8 8-8 2.52 0 4.76 1.18 6.22 3H15c-.55 0-1 .45-1 1s.45 1 1 1h4c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zm0 8c-.55 0-1 .45-1 1 0 4.42-3.58 8-8 8-2.52 0-4.76-1.18-6.22-3H5c.55 0 1-.45 1-1s-.45-1-1-1H1c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1s1-.45 1-1v-2.06C3.82 18.39 6.71 20 10 20c5.52 0 10-4.48 10-10 0-.55-.45-1-1-1z',
        ],
        'regression-chart': [
          'M19 16H3.1L19.31 3.39l-.61-.79L2 15.59V3c0-.55-.45-1-1-1s-1 .45-1 1v14c0 .55.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1zm-9-9c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-5 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm10-2c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2zm-5 4c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2z',
        ],
        remove: [
          'M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm5-9H5c-.55 0-1 .45-1 1s.45 1 1 1h10c.55 0 1-.45 1-1s-.45-1-1-1z',
        ],
        'remove-column': [
          'M19 0H5c-.55 0-1 .45-1 1v4h2V2h5v16H6v-3H4v4c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-1 18h-5V2h5v16zM6.29 13.71a1.003 1.003 0 0 0 1.42-1.42L5.41 10 7.7 7.71c.19-.18.3-.43.3-.71a1.003 1.003 0 0 0-1.71-.71L4 8.59l-2.29-2.3A1.003 1.003 0 0 0 .29 7.71L2.59 10 .3 12.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71L4 11.41l2.29 2.3z',
        ],
        'remove-column-left': [
          'M4 11h6c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM19 0H1C.45 0 0 .45 0 1v18c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-7 18H2V2h10v16zm6 0h-5V2h5v16z',
        ],
        'remove-column-right': [
          'M19 0H1C.45 0 0 .45 0 1v18c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zM7 18H2V2h5v16zm11 0H8V2h10v16zm-8-7h6c.55 0 1-.45 1-1s-.45-1-1-1h-6c-.55 0-1 .45-1 1s.45 1 1 1z',
        ],
        'remove-row-bottom': [
          'M7 14h6c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1zM19 0H1C.45 0 0 .45 0 1v18c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-1 18H2V8h16v10zm0-11H2V2h16v5z',
        ],
        'remove-row-top': [
          'M7 8h6c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1zm12-8H1C.45 0 0 .45 0 1v18c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-1 18H2v-5h16v5zm0-6H2V2h16v10z',
        ],
        repeat: [
          'M14 6c0 .55.45 1 1 1h4c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1v2.05C16.18 1.6 13.29 0 10 0 4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10c0-.55-.45-1-1-1s-1 .45-1 1c0 4.42-3.58 8-8 8s-8-3.58-8-8 3.58-8 8-8c2.53 0 4.77 1.17 6.24 3H15c-.55 0-1 .45-1 1z',
        ],
        resolve: [
          'M8.7 4.7C7.9 4.2 7 4 6 4c-3.3 0-6 2.7-6 6s2.7 6 6 6c1 0 1.9-.2 2.7-.7C7.3 14 6.5 12.1 6.5 10s.9-4 2.2-5.3zM14 4c-1 0-1.9.2-2.7.7 1.4 1.4 2.2 3.2 2.2 5.3s-.9 4-2.2 5.3c.8.5 1.7.7 2.7.7 3.3 0 6-2.7 6-6s-2.7-6-6-6zm-4 1.5C8.8 6.7 8 8.2 8 10s.8 3.3 2 4.4c1.2-1.1 2-2.7 2-4.5s-.8-3.3-2-4.4z',
        ],
        rig: [
          'M7 4.2C7 5.75 8.34 7 10 7s3-1.46 3-2.8C13 1.45 10.94 0 10 0H6c0 2.74 3.76 1.96 1 4.2zm11.71 14.09L13 12.59V9.01c0-.55-.45-1-1-1H8c-.55 0-1 .45-1 1v3.58l-5.71 5.7a1.003 1.003 0 0 0 1.42 1.42L7 15.42V19c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-3.58l4.29 4.29a1.003 1.003 0 0 0 1.42-1.42zM10.21 8c.01 0 .01.01 0 0 .01.01.01 0 0 0z',
        ],
        'right-join': [
          'M8.7 4.7C7.4 6 6.5 7.9 6.5 10s.8 4 2.2 5.3c-.8.5-1.7.7-2.7.7-3.3 0-6-2.7-6-6s2.7-6 6-6c1 0 1.9.2 2.7.7zm-3.34 9.25c-.55-1.2-.86-2.54-.86-3.95s.31-2.75.86-3.95a4.001 4.001 0 0 0 0 7.9zM14 4c3.3 0 6 2.7 6 6s-2.7 6-6 6c-1 0-1.9-.2-2.7-.7 1.3-1.3 2.2-3.2 2.2-5.3s-.8-3.9-2.2-5.3C12.1 4.2 13 4 14 4zm-4 1.5C8.8 6.7 8 8.2 8 10s.8 3.3 2 4.4c1.2-1.1 2-2.7 2-4.5s-.8-3.3-2-4.4z',
        ],
        ring: [
          'M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm0 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z',
        ],
        'rotate-document': [
          'M8.71 6.29A.997.997 0 0 0 8 6H3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h9c.55 0 1-.45 1-1v-8c0-.28-.11-.53-.29-.71l-4-4zM11 18H4V8h3v3c0 .55.45 1 1 1h3v6zm3-16h-1.59l.29-.29c.19-.18.3-.43.3-.71a1.003 1.003 0 0 0-1.71-.71l-2 2C9.11 2.47 9 2.72 9 3c0 .28.11.53.29.71l2 2a1.003 1.003 0 0 0 1.42-1.42l-.3-.29H14c1.1 0 2 .9 2 2v3c0 .55.45 1 1 1s1-.45 1-1V6c0-2.21-1.79-4-4-4z',
        ],
        'rotate-page': [
          'M14 2h-1.59l.29-.29c.19-.18.3-.43.3-.71a1.003 1.003 0 0 0-1.71-.71l-2 2C9.11 2.47 9 2.72 9 3c0 .28.11.53.29.71l2 2a1.003 1.003 0 0 0 1.42-1.42l-.3-.29H14c1.1 0 2 .9 2 2v3c0 .55.45 1 1 1s1-.45 1-1V6c0-2.21-1.79-4-4-4zm-2 5H3c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1h9c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1zm-1 11H4V9h7v9z',
        ],
        satellite: [
          'M9 18c.6 0 1 .4 1 1s-.4 1-1 1c-5 0-9-4-9-9 0-.6.4-1 1-1s1 .4 1 1c0 3.9 3.1 7 7 7zm0-4c.6 0 1 .4 1 1s-.4 1-1 1c-2.8 0-5-2.2-5-5 0-.6.4-1 1-1s1 .4 1 1c0 1.7 1.3 3 3 3zm5.7-3.7c.4-.4 1-.4 1.4 0l3.6 3.6c.4.4.4 1 0 1.4l-1.4 1.4c-.4.4-1 .4-1.4 0l-3.6-3.6c-.4-.4-.4-1 0-1.4l1.4-1.4zM4.7.3c.4-.4 1-.4 1.4 0l3.6 3.6c.4.4.4 1 0 1.4L8.3 6.7c-.4.4-1 .4-1.4 0L3.3 3.1c-.4-.4-.4-1 0-1.4L4.7.3zm11.1 1c.4-.4 1-.4 1.4 0l1.6 1.6c.4.4.4 1 0 1.4l-6.5 6.5c-.4.4-1 .4-1.4 0L9.3 9.2c-.4-.4-.4-1 0-1.4l6.5-6.5zM9 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z',
        ],
        saved: [
          'M12 0H4c-.55 0-1 .45-1 1v18c0 .55.45 1 1 1h13c.55 0 1-.45 1-1V6l-6-6zm4 18H5V2h6v5h5v11zm-8.29-6.71a1.003 1.003 0 0 0-1.42 1.42l3 3c.18.18.43.29.71.29.32 0 .59-.16.77-.38l.01.01 4-5-.01-.01c.14-.18.23-.38.23-.62 0-.55-.45-1-1-1-.32 0-.59.16-.77.38l-.01-.01-3.3 4.13-2.21-2.21z',
        ],
        'scatter-plot': [
          'M9 9c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm5 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm4-5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm1 10H2V3c0-.55-.45-1-1-1s-1 .45-1 1v14c0 .55.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1zM5 15c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z',
        ],
        search: [
          'M19.56 17.44l-4.94-4.94A8.004 8.004 0 0 0 16 8c0-4.42-3.58-8-8-8S0 3.58 0 8s3.58 8 8 8c1.67 0 3.21-.51 4.5-1.38l4.94 4.94a1.498 1.498 0 1 0 2.12-2.12zM8 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z',
        ],
        'search-around': [
          'M9.9 6.9a3 3 0 1 0 0 6 3 3 0 1 0 0-6zM3 14c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3zm0 5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM3 0C1.3 0 0 1.3 0 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3zm0 5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM17 14c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3zm0 5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM17 0c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3zm0 5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM10 10L5 5',
          'M5.379 4.671l5.02 5.02-.707.708-5.02-5.02zM10 10l5-5',
          'M14.621 4.671l.707.708-5.02 5.02-.707-.707z',
          'M10 10l5 5M10.379 9.671l5.02 5.02-.707.708-5.02-5.02z',
          'M10 10l-5 5M9.621 9.671l.707.708-5.02 5.02-.707-.707z',
        ],
        'search-template': [
          'M13 8H5c-.55 0-1 .45-1 1s.45 1 1 1h8c.55 0 1-.45 1-1s-.45-1-1-1zm0 3H5c-.55 0-1 .45-1 1s.45 1 1 1h8c.55 0 1-.45 1-1s-.45-1-1-1zm0-6H5c-.55 0-1 .45-1 1s.45 1 1 1h8c.55 0 1-.45 1-1s-.45-1-1-1zm6.56 12.44l-3.23-3.23A8.939 8.939 0 0 0 18 9a9 9 0 1 0-9 9c1.94 0 3.74-.62 5.21-1.67l3.23 3.23a1.498 1.498 0 1 0 2.12-2.12zM9 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z',
        ],
        'search-text': [
          'M19.56 17.44l-3.23-3.23A8.939 8.939 0 0 0 18 9a9 9 0 1 0-9 9c1.94 0 3.74-.62 5.21-1.67l3.23 3.23a1.498 1.498 0 1 0 2.12-2.12zM9 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm3.5-11h-7c-.28 0-.5.22-.5.5v2c0 .28.22.5.5.5s.5-.22.5-.5V7h2v6h-.5c-.28 0-.5.22-.5.5s.22.5.5.5h3c.28 0 .5-.22.5-.5s-.22-.5-.5-.5H10V7h2v.5c0 .28.22.5.5.5s.5-.22.5-.5v-2c0-.28-.22-.5-.5-.5z',
        ],
        'segmented-control': [
          'M19 5H1c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm-1 8h-8V7h8v6z',
        ],
        select: [
          'M19.71 18.29l-4.25-4.25L20 12.91 9.93 9.33c.04-.1.07-.21.07-.33V3c0-.55-.45-1-1-1H4V1c0-.55-.45-1-1-1S2 .45 2 1v1H1c-.55 0-1 .45-1 1s.45 1 1 1h1v5c0 .55.45 1 1 1h6c.12 0 .23-.03.34-.07L12.91 20l1.14-4.54 4.25 4.25c.17.18.42.29.7.29a1.003 1.003 0 0 0 .71-1.71zM8 8H4V4h4v4z',
        ],
        selection: [
          'M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z',
          'M10 6a4 4 0 1 0 0 8 4 4 0 1 0 0-8z',
        ],
        'send-to': [
          'M19 0h-5c-.6 0-1 .4-1 1s.4 1 1 1h2.6l-4.3 4.3c-.2.2-.3.4-.3.7 0 .6.4 1 1 1 .3 0 .5-.1.7-.3L18 3.4V6c0 .5.5 1 1 1s1-.5 1-1V1c0-.6-.5-1-1-1zm0 9c-1 0-1.9-.5-2.5-1.3l-1.4 1.4c-.5.6-1.3.9-2.1.9-1.7 0-3-1.3-3-3 0-.8.3-1.6.9-2.1l1.4-1.4C11.5 2.9 11 2 11 1c0-.3.1-.6.2-.9-.4-.1-.8-.1-1.2-.1C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10c0-.4 0-.8-.1-1.2-.3.1-.6.2-.9.2z',
        ],
        'send-to-graph': [
          'M8 11H3c-.55 0-1 .45-1 1s.45 1 1 1h2.59L.3 18.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71L7 14.41V17c0 .55.45 1 1 1s1-.45 1-1v-5c0-.55-.45-1-1-1zm10 2c-.53 0-1.01.21-1.37.55L11.9 10.6c.06-.19.1-.39.1-.6 0-.21-.04-.41-.1-.6l4.72-2.95c.37.34.85.55 1.38.55 1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2c0 .21.04.41.1.6l-4.73 2.96c-.24-.23-.54-.4-.87-.48V3.93c.86-.22 1.5-1 1.5-1.93 0-1.1-.9-2-2-2S8 .9 8 2c0 .93.64 1.71 1.5 1.93v4.14c-.33.09-.63.26-.87.48L7.6 7.91 5.42 6.55 3.9 5.6c.06-.19.1-.39.1-.6 0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2c.53 0 1.01-.21 1.37-.55L9 9.96V10h.06L12 11.84l.4.25 1.51.94 2.19 1.37c-.06.19-.1.39-.1.6 0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2zm-7-2.96l-.06-.04H11v.04z',
        ],
        'send-to-map': [
          'M8 11H3c-.55 0-1 .45-1 1s.45 1 1 1h2.59L.3 18.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71L7 14.41V17c0 .55.45 1 1 1s1-.45 1-1v-5c0-.55-.45-1-1-1zm11.54-6.82l.01-.02-6-4-.01.02C13.39.08 13.21 0 13 0s-.39.08-.54.18l-.01-.02L7 3.8 1.55.17l-.01.01A.969.969 0 0 0 1 0C.45 0 0 .45 0 1v9c0-.55.45-1 1-1h1V2.87l4 2.67V9h2V5.54l4-2.67v11.6l-1 .67v2.4l2-1.33 5.45 3.63.01-.02c.15.1.33.18.54.18.55 0 1-.45 1-1V5c0-.35-.19-.64-.46-.82zM18 17.13l-4-2.67V2.87l4 2.67v11.59z',
        ],
        'series-add': [
          'M13.29 9.29c.3.62.8 1.12 1.42 1.42l-3 3c-.18.18-.43.29-.71.29s-.53-.11-.71-.3L7 10.41l-5 5V17h17c.55 0 1 .45 1 1s-.45 1-1 1H1a.998.998 0 0 1-1-1V4c0-.55.45-1 1-1s1 .45 1 1v8.59l4.29-4.3C6.47 8.11 6.72 8 7 8s.53.11.71.29l3.29 3.3 2.29-2.3zM12 5c0-.5.4-1 1-1h2V2c0-.6.4-1 1-1 .5 0 1 .4 1 1v2h2c.5 0 1 .4 1 1s-.5 1-1 1h-2v2c0 .6-.5 1-1 1-.6 0-1-.4-1-1V6h-2c-.6 0-1-.4-1-1z',
        ],
        'series-configuration': [
          'M11.91 10.67c.52.45 1.13.8 1.8 1.03l-2.01 2.01c-.18.18-.43.29-.71.29-.28 0-.53-.11-.71-.3L7 10.41l-5 5V17h16.99c.55 0 1 .45 1 1s-.45 1-1 1H1a.998.998 0 0 1-1-1V4c0-.55.45-1 1-1s1 .45 1 1v8.59l4.29-4.3C6.47 8.11 6.72 8 7 8c.28 0 .53.11.71.29l3.29 3.3.91-.92zM18.5 4.6h1.04c.25 0 .45.2.46.44v.9c0 .25-.2.45-.45.45h-1.04c-.07.22-.16.42-.27.62l.73.73c.17.17.17.44 0 .61l-.61.61c-.17.17-.44.17-.61 0l-.73-.73c-.2.11-.4.2-.62.26v1.05c0 .25-.2.45-.45.45h-.9c-.25 0-.45-.2-.45-.45V8.51c-.21-.06-.4-.15-.58-.25l-.76.77c-.17.17-.46.17-.64 0l-.64-.64a.465.465 0 0 1 0-.64l.76-.77c-.1-.19-.19-.38-.25-.59h-1.04c-.25 0-.45-.2-.45-.45v-.9c0-.25.2-.45.45-.45h1.04c.07-.22.16-.42.27-.61l-.73-.73a.429.429 0 0 1 0-.61l.61-.61c.17-.17.44-.17.61 0l.73.73c.2-.11.4-.2.62-.26V1.45a.44.44 0 0 1 .44-.45h.9c.25 0 .45.2.45.45V2.5c.21.06.4.15.58.25l.76-.77c.17-.17.46-.17.64 0l.64.64c.17.17.17.46 0 .64l-.76.77c.1.17.19.36.25.57zm-4.69.9c0 .93.75 1.69 1.69 1.69.93 0 1.69-.75 1.69-1.69s-.75-1.69-1.69-1.69-1.69.76-1.69 1.69z',
        ],
        'series-derived': [
          'M18.82 6.58c-.03.05-.07.09-.11.13 0 0 0-.01-.01-.01l-2 2c-.2.2-.4.3-.7.3-.6 0-1-.4-1-1 0-.3.1-.5.3-.7L16.6 6H11c-.6 0-1-.4-1-1s.4-1 1-1h5.6l-1.3-1.3c-.2-.2-.3-.4-.3-.7 0-.6.4-1 1-1 .3 0 .5.1.7.3l3 3c.2.2.3.4.3.7s-.1.5-.3.7l-.88.88zm-5.53 2.71c.3.62.8 1.12 1.42 1.42l-3 3c-.18.18-.43.29-.71.29s-.53-.11-.71-.3L7 10.41l-5 5V17h17c.55 0 1 .45 1 1s-.45 1-1 1H1a.998.998 0 0 1-1-1V4c0-.55.45-1 1-1s1 .45 1 1v8.59l4.29-4.3C6.47 8.11 6.72 8 7 8s.53.11.71.29l3.29 3.3 2.29-2.3z',
        ],
        'series-filtered': [
          'M12.14 10.45c.21.67.65 1.23 1.22 1.61l-1.65 1.65c-.18.18-.43.29-.71.29s-.53-.11-.71-.3L7 10.41l-5 5V17h17c.55 0 1 .45 1 1s-.45 1-1 1H1a.998.998 0 0 1-1-1V4c0-.55.45-1 1-1s1 .45 1 1v8.59l4.29-4.3C6.47 8.11 6.72 8 7 8s.53.11.71.29l3.29 3.3 1.14-1.14zM19.35 1a.642.642 0 1 1 .46 1.1l-3.03 3.03v2.95c0 .18-.07.34-.19.46l-1.28 1.29c-.11.1-.27.17-.45.17-.35 0-.64-.29-.64-.64V5.13L11.19 2.1a.642.642 0 0 1 .45-1.1h7.71z',
        ],
        'series-search': [
          'M11.28 11.31l-.28.28-3.29-3.3C7.53 8.11 7.28 8 7 8s-.53.11-.71.29L2 12.59V4c0-.55-.45-1-1-1s-1 .45-1 1v14a.998.998 0 0 0 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1H2v-1.59l5-5 3.29 3.29c.18.19.43.3.71.3s.53-.11.71-.29l2.09-2.09c-.17.02-.34.02-.51.02-.7 0-1.38-.12-2.01-.33zm-.93-6c0-1.62 1.31-2.93 2.93-2.93s2.93 1.31 2.93 2.93-1.31 2.93-2.93 2.93-2.93-1.31-2.93-2.93zm6.47 2.43c.11-.17.21-.33.29-.51.01-.03.03-.06.04-.09.08-.18.16-.35.21-.54.06-.2.1-.38.14-.58.01-.05.01-.09.02-.14.03-.2.05-.39.05-.6 0-2.37-1.93-4.3-4.3-4.3-2.37.01-4.3 1.93-4.3 4.31s1.93 4.3 4.3 4.3c.21 0 .4-.02.6-.05.04 0 .09-.01.14-.02.2-.03.38-.08.57-.14.2-.06.37-.14.55-.21.03-.01.06-.03.09-.04.18-.09.34-.19.51-.29l2.87 2.87c.14.14.33.22.56.22.43 0 .78-.35.78-.78a.938.938 0 0 0-.23-.56l-2.89-2.85z',
        ],
        settings: [
          'M4 1c0-.55-.45-1-1-1S2 .45 2 1v5h2V1zM2 19c0 .55.45 1 1 1s1-.45 1-1v-6H2v6zm9-18c0-.55-.45-1-1-1S9 .45 9 1v8h2V1zm7 0c0-.55-.45-1-1-1s-1 .45-1 1v3h2V1zM9 19c0 .55.45 1 1 1s1-.45 1-1v-3H9v3zm9-14h-2c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h2c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm-2 14c0 .55.45 1 1 1s1-.45 1-1v-8h-2v8zM4 7H2c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h2c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1zm7 3H9c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1z',
        ],
        share: [
          'M15 18H2V5h8.76l2-2H1c-.55 0-1 .45-1 1v15c0 .55.45 1 1 1h15c.55 0 1-.45 1-1V7.24l-2 2V18zm4-18h-7c-.55 0-1 .45-1 1s.45 1 1 1h4.59l-7.3 7.29a1.003 1.003 0 0 0 1.42 1.42L18 3.41V8c0 .55.45 1 1 1s1-.45 1-1V1c0-.55-.45-1-1-1z',
        ],
        shield: [
          'M10 20c6-3.81 9-9.048 9-15.714-2 0-5-1.429-9-4.286-4 2.857-7 4.286-9 4.286C1 10.952 4 16.19 10 20zm0-17.348c2.577 1.734 4.776 2.88 6.667 3.419-.44 4.627-2.636 8.353-6.667 11.297V2.652z',
        ],
        shop: [
          'M17.94 3.63c-.01-.02-.01-.03-.02-.04l-.03-.09h-.01c-.18-.3-.49-.5-.86-.5h-14c-.42 0-.77.25-.92.61L0 8.5h.02a2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0l-2.08-4.87zM3.02 2h14c.55 0 1-.45 1-1s-.45-1-1-1h-14c-.55 0-1 .45-1 1s.44 1 1 1zm13 14h-12v-4h-2v7c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-7h-2v4z',
        ],
        'shopping-cart': [
          'M18 14H8.72l-.67-2H17c.44 0 .8-.29.94-.69h.01l2-6h-.01c.03-.1.06-.2.06-.31 0-.55-.45-1-1-1H5.39l-.44-1.32h-.01C4.8 2.29 4.44 2 4 2H1c-.55 0-1 .45-1 1s.45 1 1 1h2.28l3.33 10H5c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2h9c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2zM6.05 6h11.56l-1.33 4H7.39L6.05 6z',
        ],
        'sim-card': [
          'M16.71 5.29l-5-5A.997.997 0 0 0 11 0H4c-.55 0-1 .45-1 1v18c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6c0-.28-.11-.53-.29-.71zM9 7h2v3H9V7zM6 7h2v3H6V7zm2 11H6v-3h2v3zm3 0H9v-3h2v3zm3 0h-2v-3h2v3zm0-4H6v-3h8v3zm0-4h-2V7h2v3z',
        ],
        slash: [
          'M12 2c-.46 0-.85.32-.97.74L7.04 16.7c-.02.1-.04.2-.04.3 0 .55.45 1 1 1 .46 0 .85-.32.97-.74L12.96 3.3c.02-.1.04-.2.04-.3 0-.55-.45-1-1-1z',
        ],
        'small-cross': [
          'M11.41 10l3.29-3.29c.19-.18.3-.43.3-.71a1.003 1.003 0 0 0-1.71-.71L10 8.59l-3.29-3.3a1.003 1.003 0 0 0-1.42 1.42L8.59 10 5.3 13.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71l3.29-3.3 3.29 3.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71L11.41 10z',
        ],
        'small-minus': ['M14 9H6c-.55 0-1 .45-1 1s.45 1 1 1h8c.55 0 1-.45 1-1s-.45-1-1-1z'],
        'small-plus': [
          'M14 9h-3V6c0-.55-.45-1-1-1s-1 .45-1 1v3H6c-.55 0-1 .45-1 1s.45 1 1 1h3v3c0 .55.45 1 1 1s1-.45 1-1v-3h3c.55 0 1-.45 1-1s-.45-1-1-1z',
        ],
        'small-tick': [
          'M15 5c-.28 0-.53.11-.71.29L8 11.59l-2.29-2.3a1.003 1.003 0 0 0-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l7-7A1.003 1.003 0 0 0 15 5z',
        ],
        snowflake: [
          'M11 11.776v2.81l2.31 2.242a.987.987 0 0 1 0 1.415c-.399.39-1.044.39-1.442 0L11 17.414V19a.99.99 0 0 1-.996 1A.996.996 0 0 1 9 19v-1.636l-.912.879c-.398.39-1.043.39-1.441 0a.987.987 0 0 1 0-1.415L9 14.536v-2.79l-2.548 1.435-.837 3.063c-.146.534-.705.85-1.248.707a.998.998 0 0 1-.721-1.224l.309-1.132-1.4.793a1.03 1.03 0 0 1-1.393-.366.99.99 0 0 1 .373-1.366l1.445-.818-1.224-.322a.998.998 0 0 1-.72-1.225c.145-.533.704-.85 1.248-.707l3.193.84 2.462-1.395-2.532-1.434-3.123.82a1.022 1.022 0 0 1-1.249-.706.998.998 0 0 1 .721-1.225L2.91 7.18l-1.4-.793a.99.99 0 0 1-.373-1.366 1.03 1.03 0 0 1 1.392-.366l1.445.818-.328-1.2a.998.998 0 0 1 .72-1.225 1.022 1.022 0 0 1 1.25.707l.855 3.132L9 8.311V5.414L6.647 3.121a.987.987 0 0 1 0-1.414 1.033 1.033 0 0 1 1.441 0L9 2.586V1c0-.552.44-1 1.004-1A.99.99 0 0 1 11 1l-.007 1.536.875-.829a1.033 1.033 0 0 1 1.441 0 .987.987 0 0 1 0 1.414L11 5.364v2.918l2.53-1.42.855-3.131c.146-.534.705-.85 1.249-.707a.998.998 0 0 1 .72 1.224l-.327 1.2 1.4-.792a1.03 1.03 0 0 1 1.392.366.99.99 0 0 1-.373 1.366l-1.355.768 1.153.303a.998.998 0 0 1 .721 1.225c-.146.533-.705.85-1.249.707l-3.123-.821-2.576 1.459 2.506 1.42 3.193-.84a1.022 1.022 0 0 1 1.249.707.998.998 0 0 1-.72 1.225l-1.224.322 1.4.793a.99.99 0 0 1 .373 1.366 1.03 1.03 0 0 1-1.393.366l-1.356-.768.31 1.132a.998.998 0 0 1-.721 1.224 1.022 1.022 0 0 1-1.249-.707l-.837-3.063L11 11.776z',
        ],
        'social-media': [
          'M11.5 5c.8 0 1.6-.4 2-1 2 1.2 3.3 3.3 3.5 5.7 0 .5.5.9 1 .9.6 0 1-.5 1-1v-.1c-.2-3.3-2.2-6.2-5.1-7.6C13.7.8 12.7 0 11.5 0 10.1 0 9 1.1 9 2.5S10.1 5 11.5 5zm5 7c-1.4 0-2.5 1.1-2.5 2.5 0 .4.1.7.2 1.1-1.1.9-2.6 1.4-4.2 1.4-1.9 0-3.6-.8-4.9-2-.2-.2-.5-.4-.8-.4-.5 0-1 .5-1 1 0 .3.1.5.3.7C5.3 18 7.5 19 10 19c2.2 0 4.2-.8 5.8-2.1.2.1.5.1.7.1 1.4 0 2.5-1.1 2.5-2.5S17.9 12 16.5 12zM5 10.5c0-1.1-.7-2.1-1.7-2.4.5-1.9 1.9-3.5 3.6-4.4.3-.2.6-.5.6-.9 0-.5-.4-1-1-1-.2 0-.4.1-.6.2-2.4 1.2-4.2 3.6-4.7 6.4C.5 8.9 0 9.6 0 10.5 0 11.9 1.1 13 2.5 13S5 11.9 5 10.5z',
        ],
        sort: [
          'M19 16h-9c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h9c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1zm0-5h-9c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h9c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1zM7 15c-.28 0-.53.11-.71.29L5 16.59V11c0-.55-.45-1-1-1s-1 .45-1 1v5.59L1.71 15.3A.965.965 0 0 0 1 15a1.003 1.003 0 0 0-.71 1.71l3 3c.18.18.43.29.71.29s.53-.11.71-.29l3-3A1.003 1.003 0 0 0 7 15zM19 1h-9c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h9c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zm0 5h-9c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h9c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1z',
        ],
        'sort-alphabetical': [
          'M8 15c-.28 0-.53.11-.71.29L6 16.59v-5.58c0-.55-.45-1-1-1s-1 .45-1 1v5.58L2.71 15.3c-.18-.18-.43-.3-.71-.3a1.003 1.003 0 0 0-.71 1.71l3 3c.18.18.43.29.71.29s.53-.11.71-.29l3-3A1.003 1.003 0 0 0 8 15zm8.89-.79v-1.22H11.3v1.3h3.51L11 18.78V20h5.99v-1.3h-3.91l3.81-4.49zM14.97 0h-1.95L9.01 11.01h1.89l.98-2.92h4.17l.98 2.92h1.96L14.97 0zm-2.59 6.63l1.58-4.74H14l1.57 4.74h-3.19z',
        ],
        'sort-alphabetical-desc': [
          'M8.01 15c-.28 0-.53.11-.71.29L6 16.59v-5.58c0-.55-.45-1-1-1s-1 .45-1 1v5.58L2.71 15.3c-.18-.18-.43-.3-.71-.3a1.003 1.003 0 0 0-.71 1.71l3 3a1.014 1.014 0 0 0 1.42 0l3-3c.18-.18.29-.43.29-.71.01-.55-.44-1-.99-1zm4.44-5.65l6.4-7.88V0H10.5v1.67h5.91L10 9.44v1.57h9V9.35h-6.55zm1.27 3.64L11 20h1.59l.56-1.56h2.68l.55 1.56h1.64l-2.68-7.01h-1.62zm-.16 4.3l.93-2.57h.02l.9 2.57h-1.85z',
        ],
        'sort-asc': [
          'M10 8h5c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1h-5c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1zm0 5h7c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1h-7c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1zm0-10h3c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1zm9 12h-9c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h9c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1zM7 14c-.28 0-.53.11-.71.29L5 15.59V10c0-.55-.45-1-1-1s-1 .45-1 1v5.59L1.71 14.3A.965.965 0 0 0 1 14a1.003 1.003 0 0 0-.71 1.71l3 3c.18.18.43.29.71.29s.53-.11.71-.29l3-3A1.003 1.003 0 0 0 7 14z',
        ],
        'sort-desc': [
          'M13 15h-3c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1zm-6-1c-.28 0-.53.11-.71.29L5 15.59V10c0-.55-.45-1-1-1s-1 .45-1 1v5.59L1.71 14.3A.965.965 0 0 0 1 14a1.003 1.003 0 0 0-.71 1.71l3 3c.18.18.43.29.71.29s.53-.11.71-.29l3-3A1.003 1.003 0 0 0 7 14zM19 0h-9c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h9c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-4 10h-5c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1zm2-5h-7c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1z',
        ],
        'sort-numerical': [
          'M9 14.99c-.28 0-.53.11-.71.29L7 16.58v-5.59c0-.55-.45-1-1-1s-1 .45-1 1v5.59l-1.29-1.29a.965.965 0 0 0-.71-.3 1.003 1.003 0 0 0-.71 1.71l3 3c.18.18.43.29.71.29.28 0 .53-.11.71-.29l3-3c.18-.18.29-.43.29-.71a.99.99 0 0 0-1-1zm8.88.23c-.08-.42-.22-.79-.42-1.12-.2-.33-.47-.6-.8-.8-.33-.2-.76-.3-1.28-.3a2.333 2.333 0 0 0-1.72.71c-.21.22-.37.48-.49.78-.11.3-.17.62-.17.97 0 .27.04.54.13.8.08.26.22.5.4.7.19.21.43.38.71.5a2.142 2.142 0 0 0 1.72.02c.25-.12.47-.31.66-.58l.02.02c-.01.19-.04.4-.08.63-.04.24-.11.46-.21.67-.1.21-.23.38-.39.53a.92.92 0 0 1-.62.22c-.24 0-.44-.08-.6-.25-.16-.17-.27-.36-.31-.59h-1.31c.04.29.12.56.24.79.12.23.28.43.48.59.19.16.42.28.67.36.25.08.52.12.82.12.49 0 .9-.1 1.23-.31.34-.21.61-.48.82-.82.21-.34.37-.71.47-1.13.1-.42.15-.83.15-1.25 0-.43-.04-.85-.12-1.26zm-1.42.63c-.05.15-.11.28-.2.4-.09.12-.2.21-.34.27s-.3.1-.49.1c-.17 0-.33-.04-.46-.11s-.24-.17-.33-.29c-.08-.12-.15-.25-.19-.4-.04-.15-.06-.31-.06-.47 0-.15.02-.3.07-.45.05-.15.11-.28.2-.39.09-.12.2-.21.33-.28.13-.07.27-.11.44-.11.17 0 .33.04.47.11.14.07.25.17.34.28a1.387 1.387 0 0 1 .28.86c.01.17-.02.33-.06.48zM15.32 11H17V0h-1.25c-.05.34-.17.62-.34.85-.17.23-.39.42-.63.57-.25.15-.52.25-.83.31-.3.06-.62.09-.94.09v1.41h2.31V11z',
        ],
        'sort-numerical-desc': [
          'M9 15c-.28 0-.53.11-.71.29L7 16.59v-5.58c0-.55-.45-1-1-1s-1 .45-1 1v5.58L3.71 15.3c-.18-.18-.43-.3-.71-.3a1.003 1.003 0 0 0-.71 1.71l3 3c.18.18.43.29.71.29.28 0 .53-.11.71-.29l3-3A1.003 1.003 0 0 0 9 15zm6.7-1.33a1.5 1.5 0 0 1-.44.43c-.17.11-.37.19-.58.23-.22.04-.44.06-.67.05v1.07h1.66V20H17v-6.99h-1.06c-.04.26-.12.48-.24.66zm3.15-10.3c-.11-.68-.29-1.26-.55-1.76-.26-.5-.62-.89-1.08-1.18C16.75.14 16.17 0 15.46 0c-.54 0-1.03.09-1.46.27-.43.18-.79.44-1.09.76-.3.33-.52.71-.67 1.15-.16.44-.24.92-.24 1.43 0 .54.08 1.04.23 1.47.15.44.37.81.65 1.12.28.31.61.55 1 .72.39.17.82.26 1.3.26.46 0 .88-.11 1.26-.33.38-.22.68-.53.9-.94l.03.03c-.03.35-.07.74-.12 1.16-.05.42-.15.81-.29 1.18-.14.37-.35.68-.61.92-.26.25-.62.37-1.06.37-.43 0-.77-.13-1.03-.4-.25-.27-.4-.62-.44-1.05h-1.64c.02.43.11.83.29 1.18.17.35.39.66.67.91a3.027 3.027 0 0 0 2.07.8c.71 0 1.3-.17 1.79-.5.48-.33.87-.76 1.17-1.29.3-.53.51-1.12.64-1.76.13-.64.19-1.28.19-1.92.01-.77-.05-1.49-.15-2.17zM17.1 4.44c-.08.27-.19.5-.34.71-.15.21-.34.37-.57.49-.23.12-.5.18-.8.18-.3 0-.56-.06-.78-.19-.22-.13-.4-.29-.55-.49-.14-.2-.25-.44-.32-.7-.07-.27-.11-.55-.11-.84 0-.28.04-.55.11-.82.07-.26.18-.49.32-.7.14-.2.33-.36.55-.48.22-.12.48-.17.78-.17.31 0 .57.06.8.18.23.12.42.28.57.48.15.2.26.43.34.69.08.26.11.53.11.82 0 .29-.04.57-.11.84z',
        ],
        'split-columns': [
          'M15 13a1.003 1.003 0 0 0 1.71.71l3-3c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71l-3-3a1.003 1.003 0 0 0-1.42 1.42L16.59 9H11V2h5v2c.77 0 1.47.3 2 .78V1c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v3.78C2.53 4.3 3.23 4 4 4V2h5v7H3.41L4.7 7.71c.19-.18.3-.43.3-.71a1.003 1.003 0 0 0-1.71-.71l-3 3C.11 9.47 0 9.72 0 10c0 .28.11.53.29.71l3 3a1.003 1.003 0 0 0 1.42-1.42L3.41 11H9v7H4v-2c-.77 0-1.47-.3-2-.78V19c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-3.78c-.53.48-1.23.78-2 .78v2h-5v-7h5.59l-1.29 1.29c-.19.18-.3.43-.3.71z',
        ],
        square: [
          'M19 0H1C.45 0 0 .45 0 1v18c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-1 18H2V2h16v16z',
        ],
        'stacked-chart': [
          'M12 2c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1v4h4V2zm3 14h2c.55 0 1-.45 1-1v-5h-4v5c0 .55.45 1 1 1zm3-10c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1v3h4V6zm-6 1H8v5h4V7zm-9 9h2c.55 0 1-.45 1-1v-3H2v3c0 .55.45 1 1 1zm16 1H1c-.55 0-1 .45-1 1s.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1zM6 9c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v2h4V9zm3 7h2c.55 0 1-.45 1-1v-2H8v2c0 .55.45 1 1 1z',
        ],
        star: ['M10 0l3.1 6.6 6.9 1-5 5.1 1.2 7.3-6.2-3.4L3.8 20 5 12.7 0 7.6l6.9-1z'],
        'star-empty': [
          'M20 7.6l-6.9-1.1L10 0 6.9 6.6 0 7.6l5 5.1L3.8 20l6.2-3.4 6.2 3.4-1.2-7.2 5-5.2zM10 15l-4.5 2.4.9-5.2-3.6-3.6 5-.8L10 3.1l2.2 4.7 5 .8-3.6 3.7.9 5.2L10 15z',
        ],
        'step-backward': [
          'M15 3c-.23 0-.42.09-.59.21l-.01-.01L8 8V4c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-4l6.4 4.8.01-.01c.17.12.36.21.59.21.55 0 1-.45 1-1V4c0-.55-.45-1-1-1z',
        ],
        'step-chart': [
          'M19 16H2v-3h4c.55 0 1-.45 1-1V8h3v2c0 .55.45 1 1 1h5c.55 0 1-.45 1-1V6h2c.55 0 1-.45 1-1s-.45-1-1-1h-3c-.55 0-1 .45-1 1v4h-3V7c0-.55-.45-1-1-1H6c-.55 0-1 .45-1 1v4H2V3c0-.55-.45-1-1-1s-1 .45-1 1v14c0 .55.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1z',
        ],
        'step-forward': [
          'M15 3h-2c-.55 0-1 .45-1 1v4L5.6 3.2l-.01.01C5.42 3.09 5.23 3 5 3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1 .23 0 .42-.09.59-.21l.01.01L12 12v4c0 .55.45 1 1 1h2c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1z',
        ],
        stop: ['M16 3H4c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1z'],
        strikethrough: [
          'M18 9h-4.46a4.7 4.7 0 0 0-.4-.14c-.19-.05-.51-.14-.96-.25-.45-.11-.9-.23-1.37-.35-.47-.12-.89-.23-1.27-.33s-.6-.16-.65-.17c-.53-.15-.95-.37-1.27-.66-.32-.28-.49-.68-.49-1.19 0-.36.09-.66.26-.9s.39-.43.65-.57c.26-.14.55-.24.87-.3s.63-.09.93-.09c.89 0 1.63.19 2.21.57.45.3.75.76.89 1.38h2.63c-.06-.52-.2-.98-.42-1.4-.3-.57-.71-1.05-1.23-1.43a5.33 5.33 0 0 0-1.79-.87c-.7-.2-1.42-.3-2.19-.3-.66 0-1.31.08-1.96.25s-1.22.43-1.73.77-.92.79-1.23 1.32c-.31.52-.46 1.15-.46 1.87 0 .37.05.74.15 1.1.1.36.28.7.53 1.02.18.24.41.47.69.67H2c-.55 0-1 .45-1 1s.45 1 1 1h10.14c.02.01.05.02.07.02.3.11.58.29.84.55.25.26.38.67.38 1.21 0 .27-.06.53-.17.79-.11.26-.29.49-.54.69-.25.2-.57.36-.97.49s-.88.19-1.44.19c-.52 0-1.01-.06-1.45-.17-.45-.11-.84-.29-1.19-.54s-.61-.56-.8-.95c-.05-.08-.09-.18-.12-.28H4.11c.09.43.22.82.4 1.18.33.65.77 1.18 1.32 1.59.55.41 1.2.72 1.94.92.74.2 1.53.3 2.37.3.73 0 1.44-.08 2.14-.25.7-.17 1.33-.43 1.88-.79.55-.36.99-.83 1.33-1.39.34-.56.51-1.25.51-2.05 0-.37-.06-.75-.18-1.12a3.12 3.12 0 0 0-.15-.39H18c.55 0 1-.45 1-1s-.45-1-1-1z',
        ],
        style: [
          'M18 18H2V2h12.3l2-2H1C.4 0 0 .4 0 1v18c0 .6.4 1 1 1h18c.6 0 1-.4 1-1V7.7l-2 2V18zm1.2-18l-7.6 7.6 2.8 2.8L20 4.8V0h-.8zM4 15.9c3.1.2 5.9.2 8.2-2 1.1-1.1 1.1-3 0-4.1-.6-.5-1.3-.8-2-.8s-1.4.3-1.9.8C7.2 11 6.6 14.3 4 15.9z',
        ],
        'swap-horizontal': [
          'M16.02 10c-.01 0-.01 0 0 0H16h.02zM2 6h13.58l-2.29 2.29a1 1 0 0 0-.3.71 1.003 1.003 0 0 0 1.71.71l4-4c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71l-4-4a1.003 1.003 0 0 0-1.42 1.42L15.58 4H2c-.55 0-1 .45-1 1s.45 1 1 1zm2 4h-.02H4zm14 4H4.42l2.29-2.29a1 1 0 0 0 .3-.71 1.003 1.003 0 0 0-1.71-.71l-4 4c-.18.18-.29.43-.29.71 0 .28.11.53.29.71l4 4a1.003 1.003 0 0 0 1.42-1.42L4.42 16H18c.55 0 1-.45 1-1s-.45-1-1-1z',
        ],
        'swap-vertical': [
          'M9.71 5.3l-4-4A.997.997 0 0 0 5 1.01c-.28 0-.53.11-.71.29l-4 4a1.003 1.003 0 0 0 1.42 1.42L4 4.42V18c0 .55.45 1 1 1s1-.45 1-1V4.42l2.29 2.29a1 1 0 0 0 .71.3 1.003 1.003 0 0 0 .71-1.71zM10 3.98c0 .01 0 .01 0 0V4v-.02zm0 12.04c0-.01 0-.01 0 0V16v.02zm9-3.03c-.28 0-.53.11-.71.29L16 15.58V2c0-.55-.45-1-1-1s-1 .45-1 1v13.58l-2.29-2.29a1.003 1.003 0 0 0-1.42 1.42l4 4c.18.18.43.29.71.29.28 0 .53-.11.71-.29l4-4c.18-.18.29-.43.29-.71 0-.56-.45-1.01-1-1.01z',
        ],
        'symbol-circle': ['M10 4.01a6 6 0 1 0 0 12 6 6 0 1 0 0-12z'],
        'symbol-cross': [
          'M15 8.01h-3v-3c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1v3H5c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h3v3c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-3h3c.55 0 1-.45 1-1v-2c0-.56-.45-1-1-1z',
        ],
        'symbol-diamond': [
          'M15 10.01c0-.21-.08-.39-.18-.54l.02-.01-4-6-.02.01c-.18-.28-.47-.46-.82-.46s-.64.18-.82.45l-.01-.01-4 6 .02.01c-.11.16-.19.34-.19.55s.08.39.18.54l-.02.01 4 6 .02-.01c.18.27.47.46.82.46s.64-.19.82-.46l.02.01 4-6-.02-.01c.1-.16.18-.34.18-.54z',
        ],
        'symbol-square': [
          'M15 4.01H5c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h10c.55 0 1-.45 1-1v-10c0-.56-.45-1-1-1z',
        ],
        'symbol-triangle-down': [
          'M16 5c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1 0 .16.05.31.11.44H4.1l5 10h.01c.17.33.5.56.89.56s.72-.23.89-.56h.01l5-10h-.01c.06-.13.11-.28.11-.44z',
        ],
        'symbol-triangle-up': [
          'M15.89 14.56l-4.99-10h-.01c-.17-.33-.5-.56-.89-.56s-.72.23-.89.56H9.1l-5 10h.01c-.06.13-.11.28-.11.44 0 .55.45 1 1 1h10c.55 0 1-.45 1-1 0-.16-.05-.31-.11-.44z',
        ],
        tag: [
          'M2 4a2 2 0 0 1 2-2h4.588a2 2 0 0 1 1.414.586l7.41 7.41a2 2 0 0 1 0 2.828l-4.588 4.588a2 2 0 0 1-2.829 0l-7.41-7.41A2 2 0 0 1 2 8.588V4zm3.489-.006a1.495 1.495 0 1 0 0 2.99 1.495 1.495 0 0 0 0-2.99z',
        ],
        'take-action': [
          'M5 7c.28 0 .53-.11.71-.29l5-5A1.003 1.003 0 0 0 9.29.29l-5 5A1.003 1.003 0 0 0 5 7zm6 6a1.003 1.003 0 0 0 1.71.71l5-5a1.003 1.003 0 0 0-1.42-1.42l-5 5c-.18.18-.29.43-.29.71zm8 5h-1c0-.55-.45-1-1-1h-7c-.55 0-1 .45-1 1H8c-.55 0-1 .45-1 1s.45 1 1 1h11c.55 0 1-.45 1-1s-.45-1-1-1zm-9-6l6-6-1.29-1.29a1.003 1.003 0 0 0-1.42-1.42L12 2 6 8l1.29 1.29-7 7a1.003 1.003 0 0 0 1.42 1.42l7-7L10 12z',
        ],
        taxi: [
          'M19 9h-.33l.33 1v.5c0 .15-.03.3-.07.44h.01L17 17.23v.27c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5V17H6v.5c0 .83-.67 1.5-1.5 1.5S3 18.33 3 17.5v-.27l-1.93-6.28h.01c-.05-.15-.08-.3-.08-.45V10s.02-.06.05-.16c.06-.17.16-.47.28-.84H1c-.55 0-1-.45-1-1s.45-1 1-1h1l1-3h-.01v-.01c.25-.64 1-1.31 1.67-1.5 0 0 .78-.21 2.33-.36V1c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v1.13c1.55.14 2.33.36 2.33.36.67.19 1.42.86 1.67 1.5V4H17l1 3h1c.55 0 1 .45 1 1s-.45 1-1 1zM3 11.5c0 .83.67 1.5 1.5 1.5S6 12.33 6 11.5 5.33 10 4.5 10 3 10.67 3 11.5zM16 7l-1-3H5L4 7v1h12V7zm-.5 3c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z',
        ],
        'text-highlight': [
          'M16 17c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1s1-.45 1-1-.45-1-1-1c-.77 0-1.47.3-2 .78-.53-.48-1.23-.78-2-.78-.55 0-1 .45-1 1s.45 1 1 1 1 .45 1 1v12c0 .55-.45 1-1 1s-1 .45-1 1 .45 1 1 1c.77 0 1.47-.3 2-.78.53.48 1.23.78 2 .78.55 0 1-.45 1-1s-.45-1-1-1zm-4-4H2V7h10V5H1c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h11v-2zm7-8h-3v2h2v6h-2v2h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1z',
        ],
        th: [
          'M19 1H1c-.6 0-1 .5-1 1v16c0 .5.4 1 1 1h18c.5 0 1-.5 1-1V2c0-.5-.5-1-1-1zM7 17H2v-3h5v3zm0-4H2v-3h5v3zm0-4H2V6h5v3zm11 8H8v-3h10v3zm0-4H8v-3h10v3zm0-4H8V6h10v3z',
        ],
        'th-derived': [
          'M5.3 13.3c-.2.2-.3.4-.3.7 0 .6.4 1 1 1 .3 0 .5-.1.7-.3l3-3c.2-.2.3-.4.3-.7s-.1-.5-.3-.7l-3-3C6.5 7.1 6.3 7 6 7c-.6 0-1 .4-1 1 0 .3.1.5.3.7L6.6 10H1c-.6 0-1 .4-1 1s.4 1 1 1h5.6l-1.3 1.3zM19 1H3c-.5 0-1 .5-1 1v6h1c0-1.7 1.3-3 3-3 .8 0 1.6.3 2.1.9l.1.1H9v.8l1 1V6h8v3h-6.8c.3.3.5.6.6 1H18v3h-6.8l-.1.1-.9.9H18v3h-8v-2.8l-1 1V17H4v-.8c-.6-.5-1-1.3-1-2.2H2v4c0 .5.5 1 1 1h16c.6 0 1-.5 1-1V2c0-.5-.5-1-1-1z',
        ],
        'th-list': [
          'M19 1H1c-.6 0-1 .5-1 1v16c0 .5.4 1 1 1h18c.5 0 1-.5 1-1V2c0-.5-.5-1-1-1zm-1 16H2v-3h16v3zm0-4H2v-3h16v3zm0-4H2V6h16v3z',
        ],
        'thumbs-down': [
          'M18.55 6.56c-.31-.01-.65-.03-1.02-.06.03 0 .06-.01.09-.01.88-.12 1.68-.63 1.76-1.37.08-.75-.58-1.25-1.46-1.33-.32-.03-.65-.05-.99-.08.59-.19 1.05-.54 1.09-1.2.05-.75-.99-1.32-1.87-1.41-.34-.03-.64-.05-.91-.07h-.11c-.28-.02-.54-.02-.77-.02-3.92-.08-7.29.6-9.36 1.93v7.72c2.67 1.66 5.95 4.61 5.26 7.08-.21.76.39 1.35 1.23 1.26 1.01-.11 1.71-1.18 1.75-2.28.05-1.29-.19-2.59-.62-3.74-.05-.32.01-.65.47-.68.61-.04 1.39-.08 1.99-.1.32 0 .64-.01.94-.03h.01c.52-.03 1-.07 1.42-.12.88-.11 1.69-.6 1.79-1.35.1-.75-.55-1.25-1.44-1.35-.07-.01-.13-.02-.2-.02.21-.02.42-.04.61-.06.88-.11 1.69-.6 1.79-1.35.09-.75-.56-1.31-1.45-1.36zM3 3H0v8h3c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1z',
        ],
        'thumbs-up': [
          'M3 9H0v8h3c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zm16.99 3.09c-.1-.75-.91-1.24-1.79-1.35-.19-.02-.4-.05-.61-.06.07-.01.14-.01.2-.02.88-.1 1.53-.61 1.44-1.35-.1-.74-.91-1.24-1.79-1.35-.42-.05-.9-.09-1.42-.12h-.01l-.94-.03c-.6-.02-1.39-.05-1.99-.1-.45-.03-.51-.36-.47-.68.43-1.15.67-2.45.62-3.74-.04-1.11-.74-2.17-1.75-2.28-.84-.09-1.45.5-1.23 1.26.7 2.47-2.58 5.43-5.25 7.08v7.72c2.08 1.33 5.44 2.01 9.35 1.93.24 0 .49-.01.77-.02h.11c.27-.02.57-.04.91-.07.88-.08 1.92-.66 1.87-1.41-.04-.65-.5-1.01-1.09-1.2.34-.03.67-.05.99-.08.89-.08 1.55-.58 1.46-1.33-.08-.75-.88-1.25-1.76-1.37-.03 0-.06-.01-.09-.01.37-.02.71-.04 1.02-.06.91-.05 1.55-.61 1.45-1.36z',
        ],
        tick: [
          'M17 4c-.28 0-.53.11-.71.29L7 13.59 3.71 10.3A.965.965 0 0 0 3 10a1.003 1.003 0 0 0-.71 1.71l4 4c.18.18.43.29.71.29s.53-.11.71-.29l10-10A1.003 1.003 0 0 0 17 4z',
        ],
        'tick-circle': [
          'M10 20C4.48 20 0 15.52 0 10S4.48 0 10 0s10 4.48 10 10-4.48 10-10 10zm5-14c-.28 0-.53.11-.71.29L8 12.59l-2.29-2.3a1.003 1.003 0 0 0-1.42 1.42l3 3c.18.18.43.29.71.29.28 0 .53-.11.71-.29l7-7A1.003 1.003 0 0 0 15 6z',
        ],
        time: [
          'M11 9.59V4c0-.55-.45-1-1-1s-1 .45-1 1v6c0 .28.11.53.29.71l3 3a1.003 1.003 0 0 0 1.42-1.42L11 9.59zM10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z',
        ],
        'timeline-area-chart': [
          'M19 16H2V3c0-.55-.45-1-1-1s-1 .45-1 1v14c0 .55.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1zm0-13.41l-7.07 7.07-4.3-3.44-.01.01A.987.987 0 0 0 7 6c-.24 0-.46.1-.63.24l-.01-.01L3 9.03V15h16V2.59z',
        ],
        'timeline-bar-chart': [
          'M19 17H1c-.55 0-1 .45-1 1s.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1zM9 16h2c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1v13c0 .55.45 1 1 1zm6 0h2c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1zM3 16h2c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1z',
        ],
        'timeline-events': [
          'M5 5c.6 0 1-.4 1-1V2c0-.5-.4-1-1-1s-1 .5-1 1v2c0 .6.4 1 1 1zm10 0c.6 0 1-.4 1-1V2c0-.5-.4-1-1-1s-1 .5-1 1v2c0 .6.4 1 1 1zm-9 9H4v2h2v-2zM17 3v1c0 1.1-.9 2-2 2s-2-.9-2-2V3H7v1c0 1.1-.9 2-2 2s-2-.9-2-2V3H2c-.5 0-1 .5-1 1v14c0 .5.5 1 1 1h16c.5 0 1-.5 1-1V4c0-.5-.5-1-1-1h-1zM7 17H3v-4h4v4zm0-5H3V8h4v4zm5 5H8v-4h4v4zm0-5H8V8h4v4zm5 5h-4v-4h4v4zm0-5h-4V8h4v4zm-6 2H9v2h2v-2zm5-5h-2v2h2V9z',
        ],
        'timeline-line-chart': [
          'M19 16H2v-1.59l5-5 3.29 3.29c.18.19.43.3.71.3s.53-.11.71-.29l7-7a1.003 1.003 0 0 0-1.42-1.42L11 10.59l-3.29-3.3C7.53 7.11 7.28 7 7 7s-.53.11-.71.29L2 11.59V3c0-.55-.45-1-1-1s-1 .45-1 1v14a.998.998 0 0 0 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1z',
        ],
        tint: [
          'M9.86 2S3.98 9.18 3.98 12.17C3.99 15.4 6.78 18 9.96 18c3.18-.01 6.04-2.63 6.03-5.86C15.99 9.05 9.86 2 9.86 2z',
        ],
        torch: [
          'M6.97 19c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-2h-6v2zm-3-15l3 4v8h6V8l3-4h-12zm5 5c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1s-1-.45-1-1V9zm6-9h-10c-.55 0-1 .45-1 1v2h12V1c0-.55-.45-1-1-1z',
        ],
        train: [
          'M16 18h-2l2 2H4l.12-.12L6 18H4c-1.1 0-2-.9-2-2V2c0-1.1 3.58-2 8-2s8 .9 8 2v14c0 1.1-.9 2-2 2zM5.5 15c.83 0 1.5-.67 1.5-1.5S6.33 12 5.5 12 4 12.67 4 13.5 4.67 15 5.5 15zM9 3H4v6h5V3zm7 0h-5v6h5V3zm-1.5 9c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z',
        ],
        translate: [
          'M19.89 18.56l-4.99-10h-.01c-.17-.33-.5-.56-.89-.56s-.72.23-.89.56h-.01l-1.73 3.46-2.8-2.3 1.99-1.64C11.44 7.34 12 6.23 12 5V4h1c.55 0 1-.45 1-1s-.45-1-1-1H8V1c0-.55-.45-1-1-1S6 .45 6 1v1H1c-.55 0-1 .45-1 1s.45 1 1 1h9v1c0 .62-.28 1.18-.73 1.54L7 8.42 4.73 6.54C4.28 6.18 4 5.62 4 5H2c0 1.23.56 2.34 1.44 3.07l1.99 1.64-3.06 2.52.01.01c-.23.18-.38.45-.38.76 0 .55.45 1 1 1 .24 0 .45-.1.63-.24l.01.01L7 11l3.36 2.77.01-.01c.02.02.05.03.08.05.01 0 .01.01.02.02l-2.36 4.73h.01c-.07.13-.12.28-.12.44 0 .55.45 1 1 1 .39 0 .72-.23.89-.56h.01L11.12 17h5.76l1.22 2.45h.01c.17.32.5.55.89.55.55 0 1-.45 1-1 0-.16-.05-.31-.11-.44zM12.12 15L14 11.24 15.88 15h-3.76z',
        ],
        trash: [
          'M17 1h-5c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1H3c-.55 0-1 .45-1 1v1h16V2c0-.55-.45-1-1-1zm.5 3h-15c-.28 0-.5.22-.5.5s.22.5.5.5H3v14c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V5h.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5zM7 16c0 .55-.45 1-1 1s-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v8zm4 0c0 .55-.45 1-1 1s-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v8zm4 0c0 .55-.45 1-1 1s-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v8z',
        ],
        tree: [
          'M11 15.542V20H9v-4.458L2 17l4.5-5.625L4 12l3.655-5.483L6 7l4-7 4 7-1.655-.483L16 12l-2.5-.625L18 17l-7-1.458z',
        ],
        'trending-down': [
          'M19 10c-.55 0-1 .45-1 1v1.37l-6.25-7.03-.01.01A.971.971 0 0 0 11 5c-.23 0-.42.09-.59.21l-.01-.01-3.43 2.58-5.42-3.61-.01.01A.969.969 0 0 0 1 4c-.55 0-1 .45-1 1 0 .35.19.64.46.82l-.01.01 6 4 .01-.02c.15.11.33.19.54.19.23 0 .42-.09.59-.21l.01.01 3.26-2.45L16.77 14H15c-.55 0-1 .45-1 1s.45 1 1 1h4c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1z',
        ],
        'trending-up': [
          'M19 4h-4c-.55 0-1 .45-1 1s.45 1 1 1h1.77l-5.91 6.65L7.6 10.2l-.01.01C7.42 10.09 7.23 10 7 10c-.21 0-.39.08-.54.18l-.01-.02-6 4 .01.02c-.27.18-.46.47-.46.82 0 .55.45 1 1 1 .21 0 .39-.08.54-.18l.01.02 5.41-3.61 3.43 2.58.01-.01c.18.11.37.2.6.2.3 0 .56-.14.74-.34l.01.01L18 7.63V9c0 .55.45 1 1 1s1-.45 1-1V5c0-.55-.45-1-1-1z',
        ],
        'two-columns': [
          'M5 0H1C.45 0 0 .45 0 1v18c0 .55.45 1 1 1h4c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm14.71 9.29l-3-3A1.003 1.003 0 0 0 15 7v6a1.003 1.003 0 0 0 1.71.71l3-3c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71zM12 0H8c-.55 0-1 .45-1 1v18c0 .55.45 1 1 1h4c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1z',
        ],
        underline: [
          'M10 17c3.3 0 6-2.7 6-6V3.5c0-.8-.7-1.5-1.5-1.5S13 2.7 13 3.5V11c0 1.7-1.3 3-3 3s-3-1.3-3-3V3.5C7 2.7 6.3 2 5.5 2S4 2.7 4 3.5V11c0 3.3 2.7 6 6 6zM16.5 19h-13c-.3 0-.5.2-.5.5s.2.5.5.5h13c.3 0 .5-.2.5-.5s-.2-.5-.5-.5z',
        ],
        undo: [
          'M5 14c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm9-9H3.41L5.7 2.71c.19-.18.3-.43.3-.71a1.003 1.003 0 0 0-1.71-.71l-4 4C.11 5.47 0 5.72 0 6c0 .28.11.53.29.71l4 4a1.003 1.003 0 0 0 1.42-1.42L3.41 7H14c2.21 0 4 1.79 4 4s-1.79 4-4 4H9v2h5c3.31 0 6-2.69 6-6s-2.69-6-6-6z',
        ],
        'ungroup-objects': [
          'M4.5 6C2.01 6 0 8.01 0 10.5S2.01 15 4.5 15 9 12.99 9 10.5 6.99 6 4.5 6zm11 0C13.01 6 11 8.01 11 10.5s2.01 4.5 4.5 4.5 4.5-2.01 4.5-4.5S17.99 6 15.5 6z',
        ],
        'unknown-vehicle': [
          'M13 11.988v-4H4v-1l1-3h6V2.003a35.867 35.867 0 0 0-1-.015c-3.593 0-5.332.488-5.332.488-.67.188-1.424.864-1.674 1.503l-.004.009H3l-1 3H1a1 1 0 1 0 0 2h.333l-.28.84-.053.16v7.5a1.5 1.5 0 1 0 3 0v-.5h12v.5a1.5 1.5 0 1 0 3 0v-4.5h-5a1 1 0 0 1-1-1zm-8.5 1a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM19.83 2.782a2.392 2.392 0 0 0-.592-.853c-.276-.264-.64-.485-1.09-.663C17.695 1.09 17.132 1 16.457 1c-.523 0-.996.084-1.418.253a3.157 3.157 0 0 0-1.084.703c-.299.3-.532.656-.698 1.065-.166.41-.254.861-.264 1.353h2.096c0-.246.028-.476.085-.69.057-.214.145-.4.264-.56.119-.16.27-.287.456-.383.185-.095.406-.143.663-.143.38 0 .677.1.89.3.215.2.321.51.321.93.01.245-.035.45-.135.614-.1.164-.23.314-.392.45a8.598 8.598 0 0 1-.527.41 3.53 3.53 0 0 0-.542.485c-.171.187-.32.412-.45.676-.127.265-.206.592-.234.984v.614h1.924v-.519c.038-.273.13-.5.278-.683.147-.182.316-.343.506-.484a13.5 13.5 0 0 1 .606-.424c.214-.14.408-.312.584-.512s.323-.442.442-.724.178-.642.178-1.079c0-.264-.059-.548-.178-.854zm-4.54 6.099v2.103h2.237V8.881H15.29z',
        ],
        unlock: [
          'M14 1c-2.21 0-4 1.79-4 4v4H2c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-8c0-.55-.45-1-1-1h-2V5c0-1.1.9-2 2-2s2 .9 2 2v2c0 .55.45 1 1 1s1-.45 1-1V5c0-2.21-1.79-4-4-4z',
        ],
        unpin: [
          'M11.77 1.16c-.81.81-.74 2.28.02 3.76L6.1 8.71c-2.17-1.46-4.12-2-4.94-1.18l4.95 4.95-2.12 3.54 3.54-2.12 4.95 4.95c.82-.82.27-2.77-1.19-4.94l3.8-5.69c1.47.76 2.94.84 3.76.02l-7.08-7.08z',
        ],
        unresolve: [
          'M11.47 12.46c.16-.36.29-.74.38-1.14 0-.02.01-.04.01-.06.09-.4.14-.82.14-1.26 0-.44-.05-.86-.14-1.27 0-.02-.01-.04-.01-.06-.09-.4-.22-.78-.38-1.14-.01-.02-.02-.03-.02-.05a5.94 5.94 0 0 0-.61-1.03c0-.01-.01-.01-.01-.02a6.308 6.308 0 0 0-2.1-1.77c-.19-.1-.39-.18-.59-.26-.03-.01-.06-.02-.1-.03-.17-.07-.34-.12-.52-.17-.05-.01-.1-.03-.15-.04a4.34 4.34 0 0 0-.52-.09c-.05-.01-.11-.02-.17-.03C6.46 4.02 6.23 4 6 4c-3.31 0-6 2.69-6 6s2.69 6 6 6c.23 0 .46-.02.68-.04l.17-.03c.17-.02.34-.06.51-.09.05-.01.1-.03.15-.04.18-.05.36-.1.53-.17l.09-.03a5.973 5.973 0 0 0 2.68-2.04c0-.01.01-.01.01-.02.24-.32.44-.66.61-1.03.02-.01.03-.03.04-.05zM14 4c-.99 0-1.91.24-2.73.66a7.51 7.51 0 0 1 0 10.68c.82.42 1.74.66 2.73.66 3.31 0 6-2.69 6-6s-2.69-6-6-6z',
        ],
        updated: [
          'M10 0C6.71 0 3.82 1.6 2 4.05V2c0-.55-.45-1-1-1s-1 .45-1 1v4c0 .55.45 1 1 1h4c.55 0 1-.45 1-1s-.45-1-1-1H3.76C5.22 3.17 7.47 2 10 2c4.42 0 8 3.58 8 8s-3.58 8-8 8-8-3.58-8-8c0-.55-.45-1-1-1s-1 .45-1 1c0 5.52 4.48 10 10 10s10-4.48 10-10S15.52 0 10 0zm4 7c-.28 0-.53.11-.71.29L9 11.58 6.71 9.29a1.003 1.003 0 0 0-1.42 1.42l3 3c.18.18.43.29.71.29.28 0 .53-.11.71-.29l5-5A1.003 1.003 0 0 0 14 7z',
        ],
        upload: [
          'M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm4 10c-.28 0-.53-.11-.71-.29L11 7.41V15c0 .55-.45 1-1 1s-1-.45-1-1V7.41l-2.29 2.3a1.003 1.003 0 0 1-1.42-1.42l4-4c.18-.18.43-.29.71-.29s.53.11.71.29l4 4A1.003 1.003 0 0 1 14 10z',
        ],
        user: [
          'M10 0C4.48 0 0 4.48 0 10c0 .33.02.65.05.97.01.12.03.23.05.35.03.2.05.4.09.59.03.14.06.28.1.42l.12.48c.05.16.1.31.15.46.05.13.09.27.15.4.06.16.13.32.21.48.05.11.1.22.16.33.09.17.17.34.27.5.05.09.1.17.15.25.11.18.22.35.34.52.04.06.08.11.12.17 1.19 1.62 2.85 2.86 4.78 3.53l.09.03c.46.15.93.27 1.42.36.08.01.17.03.25.04.49.07.99.12 1.5.12s1.01-.05 1.5-.12c.08-.01.17-.02.25-.04.49-.09.96-.21 1.42-.36l.09-.03c1.93-.67 3.59-1.91 4.78-3.53.04-.05.08-.1.12-.16.12-.17.23-.35.34-.53.05-.08.1-.16.15-.25.1-.17.19-.34.27-.51.05-.11.1-.21.15-.32.07-.16.14-.32.21-.49.05-.13.1-.26.14-.39.05-.15.11-.31.15-.46.05-.16.08-.32.12-.48.03-.14.07-.28.1-.42.04-.19.06-.39.09-.59.02-.12.04-.23.05-.35.05-.32.07-.64.07-.97 0-5.52-4.48-10-10-10zm0 18a7.94 7.94 0 0 1-6.15-2.89c.84-.44 1.86-.82 2.67-1.19 1.45-.65 1.3-1.05 1.35-1.59.01-.07.01-.14.01-.21-.51-.45-.93-1.08-1.2-1.8l-.01-.01c0-.01-.01-.02-.01-.03a4.42 4.42 0 0 1-.15-.48c-.33-.07-.53-.44-.61-.79-.08-.14-.23-.48-.2-.87.05-.51.26-.74.49-.83v-.08c0-.63.06-1.55.17-2.15.02-.17.06-.33.11-.5.21-.73.66-1.4 1.26-1.86.62-.47 1.5-.72 2.28-.72.78 0 1.65.25 2.27.73.6.46 1.05 1.12 1.26 1.86.05.16.08.33.11.5.11.6.17 1.51.17 2.15v.09c.22.1.42.33.46.82.04.39-.12.73-.2.87-.07.34-.27.71-.6.78-.04.16-.09.33-.15.48 0 .01-.02.05-.02.05-.26.71-.67 1.33-1.17 1.78 0 .08.01.16.01.23.05.54-.15.94 1.31 1.59.81.36 1.84.74 2.68 1.19A7.958 7.958 0 0 1 10 18z',
        ],
        variable: [
          'M4.93 3.79a9.1 9.1 0 0 1 2.2-2.27L7.29 1c-1.38.59-2.57 1.33-3.55 2.22C2.46 4.39 1.49 5.72.83 7.23.28 8.51 0 9.81 0 11.12c0 2.28.83 4.57 2.49 6.86l.16-.55c-.49-1.23-.73-2.38-.73-3.44 0-1.67.28-3.46.84-5.36.55-1.9 1.28-3.51 2.17-4.84zm9.38 8.39l-.33-.2c-.37.54-.65.87-.82 1a.74.74 0 0 1-.42.12c-.19 0-.38-.12-.57-.37-.31-.42-.73-1.59-1.26-3.5.47-.85.86-1.41 1.19-1.67.23-.19.48-.29.74-.29.1 0 .28.04.53.11.26.07.48.11.68.11.27 0 .5-.1.68-.29.18-.19.27-.44.27-.75 0-.33-.09-.58-.27-.77-.18-.19-.44-.29-.78-.29-.3 0-.59.07-.86.22s-.61.47-1.02.97c-.31.37-.77 1.02-1.37 1.94a9.683 9.683 0 0 0-1.24-3.14l-3.24.59-.06.36c.24-.05.44-.07.61-.07.32 0 .59.14.8.43.33.45.8 1.8 1.39 4.07-.47.64-.78 1.06-.96 1.26-.28.32-.52.53-.7.62-.14.08-.3.11-.48.11-.14 0-.36-.08-.67-.23-.21-.1-.4-.15-.57-.15-.31 0-.57.11-.78.32s-.31.48-.31.8c0 .31.09.55.28.75.19.19.44.29.76.29.31 0 .6-.07.87-.2s.61-.42 1.02-.86c.41-.44.98-1.13 1.7-2.08.28.9.52 1.56.72 1.97.2.41.44.71.7.89.26.18.59.27.99.27.38 0 .77-.14 1.17-.43.54-.36 1.07-1 1.61-1.91zM17.51 1l-.15.54c.49 1.24.73 2.39.73 3.45 0 1.43-.21 2.96-.63 4.6-.33 1.26-.75 2.45-1.27 3.55-.52 1.11-1.02 1.97-1.51 2.6-.49.62-1.09 1.2-1.8 1.72l-.17.53c1.38-.59 2.57-1.34 3.55-2.23 1.29-1.17 2.26-2.5 2.91-4 .55-1.28.83-2.59.83-3.91 0-2.27-.83-4.56-2.49-6.85z',
        ],
        'vertical-bar-chart-asc': [
          'M8 7H7c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1h1c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1zM3 9H2c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-9c0-.55-.45-1-1-1zm10-5h-1c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h1c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zm5-4h-1c-.55 0-1 .45-1 1v18c0 .55.45 1 1 1h1c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1z',
        ],
        'vertical-bar-chart-desc': [
          'M3 0H2c-.55 0-1 .45-1 1v18c0 .55.45 1 1 1h1c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm5 4H7c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h1c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zm5 3h-1c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1h1c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1zm5 2h-1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-9c0-.55-.45-1-1-1z',
        ],
        'vertical-distribution': [
          'M1 2h18c.55 0 1-.45 1-1s-.45-1-1-1H1C.45 0 0 .45 0 1s.45 1 1 1zm2 5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1H3zm16 11H1c-.55 0-1 .45-1 1s.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1z',
        ],
        video: [
          'M19 2H1c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zM7 14V6l6 4-6 4z',
        ],
        'volume-down': [
          'M15.92 3.93l-1.6 1.18A7.948 7.948 0 0 1 16 10c0 1.84-.63 3.54-1.68 4.89l1.6 1.18A9.878 9.878 0 0 0 18 10c0-2.29-.78-4.39-2.08-6.07zM11 3c-.28 0-.53.11-.71.29L7.59 6H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h4.59l2.71 2.71c.17.18.42.29.7.29.55 0 1-.45 1-1V4c0-.55-.45-1-1-1z',
        ],
        'volume-off': [
          'M14 3c-.28 0-.53.11-.71.29L10.59 6H6c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h4.59l2.71 2.71c.17.18.42.29.7.29.55 0 1-.45 1-1V4c0-.55-.45-1-1-1z',
        ],
        'volume-up': [
          'M9 3.43c-.28 0-.53.11-.71.29l-2.7 2.71H1c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h4.59l2.71 2.71a1.003 1.003 0 0 0 1.71-.71v-12c-.01-.55-.46-1-1.01-1zm8.31-1.56l-1.62 1.2C17.14 5.16 18 7.69 18 10.43s-.86 5.27-2.31 7.37l1.62 1.2C19 16.57 20 13.62 20 10.43c0-3.18-1-6.13-2.69-8.56zm-3.39 2.49l-1.6 1.18A7.948 7.948 0 0 1 14 10.43c0 1.84-.63 3.54-1.68 4.89l1.6 1.18A9.94 9.94 0 0 0 16 10.43c0-2.28-.78-4.38-2.08-6.07z',
        ],
        walk: [
          'M16 10h-2c-.23 0-.42-.09-.59-.21l-.01.01-1.69-1.27-.63 3.14 2.62 2.62c.19.18.3.43.3.71v4c0 .55-.45 1-1 1s-1-.45-1-1v-3.59L9.39 12.8l-2.45 6.55h-.01c-.14.38-.5.65-.93.65-.55 0-1-.45-1-1 0-.12.03-.24.07-.35h-.01L9.43 7h-2.9l-1.7 2.55-.01-.01c-.18.27-.47.46-.82.46-.55 0-1-.45-1-1 0-.21.08-.39.18-.54l-.01-.01 2-3 .02.01C5.36 5.19 5.65 5 6 5h4.18l.36-.96c-.33-.43-.54-.96-.54-1.54a2.5 2.5 0 0 1 5 0A2.5 2.5 0 0 1 12.5 5c-.06 0-.12-.01-.18-.02l-.44 1.18L14.33 8H16c.55 0 1 .45 1 1s-.45 1-1 1z',
        ],
        'warning-sign': [
          'M19.86 17.52l.01-.01-9-16-.01.01C10.69 1.21 10.37 1 10 1s-.69.21-.86.52l-.01-.01-9 16 .01.01c-.08.14-.14.3-.14.48 0 .55.45 1 1 1h18c.55 0 1-.45 1-1 0-.18-.06-.34-.14-.48zM11 17H9v-2h2v2zm0-3H9V6h2v8z',
        ],
        'waterfall-chart': [
          'M13 7h2c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1zm-9 8h1c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm4-6h2c.55 0 1-.45 1-1s-.45-1-1-1H8c-.55 0-1 .45-1 1s.45 1 1 1zm11-5h-1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h1c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zm0 12H2V3c0-.55-.45-1-1-1s-1 .45-1 1v14a.998.998 0 0 0 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1z',
        ],
        widget: [
          'M18 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM2 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm15-1h2V5h-2v10zM3 5H1v10h2V5zM2 0C.9 0 0 .9 0 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm3 3h10V1H5v2zm13 13c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM5 19h10v-2H5v2z',
        ],
        'widget-button': [
          'M1 4h18c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zm1 2v8h16V6H2zm4 5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm4 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm4 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z',
        ],
        'widget-footer': [
          'M17 0H3c-.55 0-1 .45-1 1v18c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-1 18H4v-4h12v4zm0-5H4V2h12v11z',
        ],
        'widget-header': [
          'M17 0H3c-.55 0-1 .45-1 1v18c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-1 18H4V7h12v11zm0-12H4V2h12v4z',
        ],
        wrench: [
          'M19.8 4.44L16.13 8.1l-3.55-.71-.71-3.53L15.54.21c-2.01-.53-4.23-.03-5.8 1.53-1.86 1.85-2.23 4.6-1.14 6.83L.59 16.59C.22 16.95 0 17.45 0 18a2 2 0 0 0 2 2c.55 0 1.05-.22 1.41-.59l8.03-8.04c2.23 1.05 4.97.67 6.82-1.16 1.57-1.56 2.07-3.77 1.54-5.77z',
        ],
        'zoom-in': [
          'M19.56 17.44l-4.94-4.94A8.004 8.004 0 0 0 16 8c0-4.42-3.58-8-8-8S0 3.58 0 8s3.58 8 8 8c1.67 0 3.21-.51 4.5-1.38l4.94 4.94a1.498 1.498 0 1 0 2.12-2.12zM8 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm3-7H9V5c0-.55-.45-1-1-1s-1 .45-1 1v2H5c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1V9h2c.55 0 1-.45 1-1s-.45-1-1-1z',
        ],
        'zoom-out': [
          'M11 7H5c-.55 0-1 .45-1 1s.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1zm8.56 10.44l-4.94-4.94A8.004 8.004 0 0 0 16 8c0-4.42-3.58-8-8-8S0 3.58 0 8s3.58 8 8 8c1.67 0 3.21-.51 4.5-1.38l4.94 4.94a1.498 1.498 0 1 0 2.12-2.12zM8 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z',
        ],
        'zoom-to-fit': [
          'M1 7c.55 0 1-.45 1-1V2h4c.55 0 1-.45 1-1s-.45-1-1-1H1C.45 0 0 .45 0 1v5c0 .55.45 1 1 1zm5 1a1.003 1.003 0 0 0-1.71-.71l-2 2c-.18.18-.29.43-.29.71 0 .28.11.53.29.71l2 2a1.003 1.003 0 0 0 1.42-1.42L4.41 10 5.7 8.71c.19-.18.3-.43.3-.71zm2-2c.28 0 .53-.11.71-.29L10 4.41l1.29 1.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71l-2-2C10.53 2.11 10.28 2 10 2s-.53.11-.71.29l-2 2A1.003 1.003 0 0 0 8 6zM6 18H2v-4c0-.55-.45-1-1-1s-1 .45-1 1v5c0 .55.45 1 1 1h5c.55 0 1-.45 1-1s-.45-1-1-1zm8-6a1.003 1.003 0 0 0 1.71.71l2-2c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71l-2-2a1.003 1.003 0 0 0-1.42 1.42l1.3 1.29-1.29 1.29c-.19.18-.3.43-.3.71zm5-12h-5c-.55 0-1 .45-1 1s.45 1 1 1h4v4c0 .55.45 1 1 1s1-.45 1-1V1c0-.55-.45-1-1-1zm-7 14c-.28 0-.53.11-.71.29L10 15.59 8.71 14.3A.965.965 0 0 0 8 14a1.003 1.003 0 0 0-.71 1.71l2 2c.18.18.43.29.71.29s.53-.11.71-.29l2-2A1.003 1.003 0 0 0 12 14zm7-1c-.55 0-1 .45-1 1v4h-4c-.55 0-1 .45-1 1s.45 1 1 1h5c.55 0 1-.45 1-1v-5c0-.55-.45-1-1-1z',
        ],
      },
      u = t(19),
      m = (function(n) {
        function e() {
          return (null !== n && n.apply(this, arguments)) || this
        }
        return (
          r.b(e, n),
          (e.prototype.render = function() {
            var n = this.props,
              t = n.className,
              a = n.color,
              i = n.icon,
              p = n.iconSize,
              b = void 0 === p ? e.SIZE_STANDARD : p,
              l = n.intent,
              s = n.title,
              d = void 0 === s ? i : s,
              m = r.c(n, ['className', 'color', 'icon', 'iconSize', 'intent', 'title'])
            if (null == i) return null
            if ('string' != typeof i) return i
            var h = b >= e.SIZE_LARGE ? e.SIZE_LARGE : e.SIZE_STANDARD,
              f = this.renderSvgPaths(h, i)
            if (null == f) return null
            var g = c()(u.a.ICON, u.a.intentClass(l), t),
              v = '0 0 ' + h + ' ' + h,
              x = this.props.style,
              z = void 0 === x ? {} : x
            return (
              null != a && (z = r.a({}, z, { fill: a })),
              o.createElement(
                'svg',
                r.a({}, m, {
                  className: g,
                  style: z,
                  'data-icon': i,
                  width: b,
                  height: b,
                  viewBox: v,
                }),
                d && o.createElement('desc', null, d),
                f,
              )
            )
          }),
          (e.prototype.renderSvgPaths = function(n, t) {
            var r = (n === e.SIZE_STANDARD ? s : d)[t]
            return null == r
              ? null
              : r.map(function(n, e) {
                  return o.createElement('path', { key: e, d: n, fillRule: 'evenodd' })
                })
          }),
          (e.displayName = a.a + '.Icon'),
          (e.SIZE_STANDARD = 16),
          (e.SIZE_LARGE = 20),
          e
        )
      })(o.PureComponent),
      h = t(15),
      f = t(17),
      g = 'M 50,50 m 0,-44.5 a 44.5,44.5 0 1 1 0,89 a 44.5,44.5 0 1 1 0,-89',
      v = (function(n) {
        function e() {
          return (null !== n && n.apply(this, arguments)) || this
        }
        return (
          r.b(e, n),
          (e.prototype.render = function() {
            var n,
              t = this.props,
              r = t.className,
              a = t.intent,
              i = t.value,
              b = this.getSize(),
              s = c()(
                p.SPINNER,
                p.intentClass(a),
                (((n = {})[p.SPINNER_NO_SPIN] = null != i), n),
                r,
              ),
              d = Math.min(16, (4 * e.SIZE_LARGE) / b),
              u = 280 - 280 * (null == i ? 0.25 : Object(l.a)(i, 0, 1))
            return o.createElement(
              'svg',
              { className: s, height: b, width: b, viewBox: '0 0 100 100', strokeWidth: d },
              o.createElement('path', { className: p.SPINNER_TRACK, d: g }),
              o.createElement('path', {
                className: p.SPINNER_HEAD,
                d: g,
                pathLength: 280,
                strokeDasharray: '280 280',
                strokeDashoffset: u,
              }),
            )
          }),
          (e.prototype.validateProps = function(n) {
            var e = n.className,
              t = void 0 === e ? '' : e
            null != n.size &&
              (t.indexOf(p.SMALL) >= 0 || t.indexOf(p.LARGE) >= 0) &&
              console.warn(f.b)
          }),
          (e.prototype.getSize = function() {
            var n = this.props,
              t = n.className,
              r = void 0 === t ? '' : t,
              o = n.size
            return null == o
              ? r.indexOf(p.SMALL) >= 0
                ? e.SIZE_SMALL
                : r.indexOf(p.LARGE) >= 0
                  ? e.SIZE_LARGE
                  : e.SIZE_STANDARD
              : Math.max(10, o)
          }),
          (e.displayName = a.a + '.Spinner'),
          (e.SIZE_SMALL = 24),
          (e.SIZE_STANDARD = 50),
          (e.SIZE_LARGE = 100),
          e
        )
      })(h.a),
      x = (function(n) {
        function e() {
          var e = (null !== n && n.apply(this, arguments)) || this
          return (
            (e.state = { isActive: !1 }),
            (e.refHandlers = {
              button: function(n) {
                ;(e.buttonRef = n), Object(l.d)(e.props.elementRef, n)
              },
            }),
            (e.currentKeyDown = null),
            (e.handleKeyDown = function(n) {
              z(n.which) &&
                (n.preventDefault(), n.which !== e.currentKeyDown && e.setState({ isActive: !0 })),
                (e.currentKeyDown = n.which),
                Object(l.d)(e.props.onKeyDown, n)
            }),
            (e.handleKeyUp = function(n) {
              z(n.which) && (e.setState({ isActive: !1 }), e.buttonRef.click()),
                (e.currentKeyDown = null),
                Object(l.d)(e.props.onKeyUp, n)
            }),
            e
          )
        }
        return (
          r.b(e, n),
          (e.prototype.getCommonButtonProps = function() {
            var n,
              e = this.props,
              t = e.alignText,
              r = e.fill,
              o = e.large,
              a = e.loading,
              i = e.minimal,
              b = e.small,
              l = e.tabIndex,
              s = this.props.disabled || a
            return {
              className: c()(
                p.BUTTON,
                (((n = {})[p.ACTIVE] = this.state.isActive || this.props.active),
                (n[p.DISABLED] = s),
                (n[p.FILL] = r),
                (n[p.LARGE] = o),
                (n[p.LOADING] = a),
                (n[p.MINIMAL] = i),
                (n[p.SMALL] = b),
                n),
                p.alignmentClass(t),
                p.intentClass(this.props.intent),
                this.props.className,
              ),
              disabled: s,
              onClick: s ? void 0 : this.props.onClick,
              onKeyDown: this.handleKeyDown,
              onKeyUp: this.handleKeyUp,
              ref: this.refHandlers.button,
              tabIndex: s ? -1 : l,
            }
          }),
          (e.prototype.renderChildren = function() {
            var n = this.props,
              e = n.children,
              t = n.icon,
              r = n.loading,
              a = n.rightIcon,
              i = n.text
            return [
              r &&
                o.createElement(v, {
                  key: 'loading',
                  className: p.BUTTON_SPINNER,
                  size: m.SIZE_LARGE,
                }),
              o.createElement(m, { key: 'leftIcon', icon: t }),
              (!Object(l.c)(i) || !Object(l.c)(e)) &&
                o.createElement('span', { key: 'text', className: p.BUTTON_TEXT }, i, e),
              o.createElement(m, { key: 'rightIcon', icon: a }),
            ]
          }),
          e
        )
      })(o.PureComponent)
    function z(n) {
      return n === b.a || n === b.b
    }
    t.d(e, 'a', function() {
      return k
    })
    var k = (function(n) {
      function e() {
        return (null !== n && n.apply(this, arguments)) || this
      }
      return (
        r.b(e, n),
        (e.prototype.render = function() {
          return o.createElement(
            'button',
            r.a({ type: 'button' }, Object(a.b)(this.props), this.getCommonButtonProps()),
            this.renderChildren(),
          )
        }),
        (e.displayName = a.a + '.Button'),
        e
      )
    })(x)
    !(function(n) {
      function e() {
        return (null !== n && n.apply(this, arguments)) || this
      }
      r.b(e, n),
        (e.prototype.render = function() {
          var n = this.props,
            e = n.href,
            t = n.tabIndex,
            i = void 0 === t ? 0 : t,
            c = this.getCommonButtonProps()
          return o.createElement(
            'a',
            r.a({ role: 'button' }, Object(a.b)(this.props), c, {
              href: c.disabled ? void 0 : e,
              tabIndex: c.disabled ? -1 : i,
            }),
            this.renderChildren(),
          )
        }),
        (e.displayName = a.a + '.AnchorButton')
    })(x)
  },
  function(n, e, t) {
    ;(n.exports = t(13)(!1)).push([
      n.i,
      '@charset "UTF-8";\n/*\n\nCopyright 2015-present Palantir Technologies, Inc. All rights reserved.\nLicensed under the terms of the LICENSE file distributed with this project.\n\n*/\nhtml {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n*,\n*::before,\n*::after {\n  -webkit-box-sizing: inherit;\n  box-sizing: inherit;\n}\nbody {\n  text-transform: none;\n  line-height: 1.28581;\n  letter-spacing: 0;\n  font-family: -apple-system, "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Open Sans", "Helvetica Neue", "Icons16", sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  color: #182026;\n}\np {\n  margin-top: 0;\n  margin-bottom: 10px;\n}\nsmall {\n  font-size: 12px;\n}\nstrong {\n  font-weight: 600;\n}\n::-moz-selection {\n  background: rgba(125,188,255,0.6);\n}\n::selection {\n  background: rgba(125,188,255,0.6);\n}\n.bp3-heading {\n  color: #182026;\n  font-weight: 600;\n  margin: 0 0 10px;\n  padding: 0;\n}\n.bp3-dark .bp3-heading {\n  color: #f5f8fa;\n}\nh1.bp3-heading,\n.bp3-running-text h1 {\n  line-height: 40px;\n  font-size: 36px;\n}\nh2.bp3-heading,\n.bp3-running-text h2 {\n  line-height: 32px;\n  font-size: 28px;\n}\nh3.bp3-heading,\n.bp3-running-text h3 {\n  line-height: 25px;\n  font-size: 22px;\n}\nh4.bp3-heading,\n.bp3-running-text h4 {\n  line-height: 21px;\n  font-size: 18px;\n}\nh5.bp3-heading,\n.bp3-running-text h5 {\n  line-height: 19px;\n  font-size: 16px;\n}\nh6.bp3-heading,\n.bp3-running-text h6 {\n  line-height: 16px;\n  font-size: 14px;\n}\n.bp3-ui-text {\n  text-transform: none;\n  line-height: 1.28581;\n  letter-spacing: 0;\n  font-family: -apple-system, "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Open Sans", "Helvetica Neue", "Icons16", sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n}\n.bp3-monospace-text {\n  text-transform: none;\n  font-family: monospace;\n}\n.bp3-text-muted {\n  color: #5c7080;\n}\n.bp3-dark .bp3-text-muted {\n  color: #bfccd6;\n}\n.bp3-text-disabled {\n  color: rgba(92,112,128,0.5);\n}\n.bp3-dark .bp3-text-disabled {\n  color: rgba(191,204,214,0.5);\n}\n.bp3-text-overflow-ellipsis {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  word-wrap: normal;\n}\n.bp3-running-text {\n  line-height: 1.5;\n  font-size: 14px;\n}\n.bp3-running-text h1 {\n  color: #182026;\n  font-weight: 600;\n  margin-top: 40px;\n  margin-bottom: 20px;\n}\n.bp3-dark .bp3-running-text h1 {\n  color: #f5f8fa;\n}\n.bp3-running-text h2 {\n  color: #182026;\n  font-weight: 600;\n  margin-top: 40px;\n  margin-bottom: 20px;\n}\n.bp3-dark .bp3-running-text h2 {\n  color: #f5f8fa;\n}\n.bp3-running-text h3 {\n  color: #182026;\n  font-weight: 600;\n  margin-top: 40px;\n  margin-bottom: 20px;\n}\n.bp3-dark .bp3-running-text h3 {\n  color: #f5f8fa;\n}\n.bp3-running-text h4 {\n  color: #182026;\n  font-weight: 600;\n  margin-top: 40px;\n  margin-bottom: 20px;\n}\n.bp3-dark .bp3-running-text h4 {\n  color: #f5f8fa;\n}\n.bp3-running-text h5 {\n  color: #182026;\n  font-weight: 600;\n  margin-top: 40px;\n  margin-bottom: 20px;\n}\n.bp3-dark .bp3-running-text h5 {\n  color: #f5f8fa;\n}\n.bp3-running-text h6 {\n  color: #182026;\n  font-weight: 600;\n  margin-top: 40px;\n  margin-bottom: 20px;\n}\n.bp3-dark .bp3-running-text h6 {\n  color: #f5f8fa;\n}\n.bp3-running-text hr {\n  margin: 20px 0;\n  border: none;\n  border-bottom: 1px solid rgba(16,22,26,0.15);\n}\n.bp3-dark .bp3-running-text hr {\n  border-color: rgba(255,255,255,0.15);\n}\n.bp3-running-text p {\n  margin: 0 0 10px;\n  padding: 0;\n}\n.bp3-text-large {\n  font-size: 16px;\n}\n.bp3-text-small {\n  font-size: 12px;\n}\na {\n  text-decoration: none;\n  color: #106ba3;\n}\na:hover {\n  cursor: pointer;\n  text-decoration: underline;\n  color: #106ba3;\n}\na .bp3-icon,\na .bp3-icon-standard,\na .bp3-icon-large {\n  color: inherit;\n}\na code,\n.bp3-dark a code {\n  color: inherit;\n}\n.bp3-dark a,\n.bp3-dark a:hover {\n  color: #48aff0;\n}\n.bp3-dark a .bp3-icon,\n.bp3-dark a .bp3-icon-standard,\n.bp3-dark a .bp3-icon-large,\n.bp3-dark a:hover .bp3-icon,\n.bp3-dark a:hover .bp3-icon-standard,\n.bp3-dark a:hover .bp3-icon-large {\n  color: inherit;\n}\n.bp3-running-text code,\n.bp3-code {\n  text-transform: none;\n  font-family: monospace;\n  border-radius: 3px;\n  -webkit-box-shadow: inset 0 0 0 1px rgba(16,22,26,0.2);\n  box-shadow: inset 0 0 0 1px rgba(16,22,26,0.2);\n  background: rgba(255,255,255,0.7);\n  padding: 2px 5px;\n  color: #5c7080;\n  font-size: smaller;\n}\n.bp3-dark .bp3-running-text code,\n.bp3-running-text .bp3-dark code,\n.bp3-dark .bp3-code {\n  -webkit-box-shadow: inset 0 0 0 1px rgba(16,22,26,0.4);\n  box-shadow: inset 0 0 0 1px rgba(16,22,26,0.4);\n  background: rgba(16,22,26,0.3);\n  color: #bfccd6;\n}\n.bp3-running-text a > code,\na > .bp3-code {\n  color: #137cbd;\n}\n.bp3-dark .bp3-running-text a > code,\n.bp3-running-text .bp3-dark a > code,\n.bp3-dark a > .bp3-code {\n  color: inherit;\n}\n.bp3-running-text pre,\n.bp3-code-block {\n  text-transform: none;\n  font-family: monospace;\n  display: block;\n  margin: 10px 0;\n  border-radius: 3px;\n  -webkit-box-shadow: inset 0 0 0 1px rgba(16,22,26,0.15);\n  box-shadow: inset 0 0 0 1px rgba(16,22,26,0.15);\n  background: rgba(255,255,255,0.7);\n  padding: 13px 15px 12px;\n  line-height: 1.4;\n  color: #182026;\n  font-size: 13px;\n  word-break: break-all;\n  word-wrap: break-word;\n}\n.bp3-dark .bp3-running-text pre,\n.bp3-running-text .bp3-dark pre,\n.bp3-dark .bp3-code-block {\n  -webkit-box-shadow: inset 0 0 0 1px rgba(16,22,26,0.4);\n  box-shadow: inset 0 0 0 1px rgba(16,22,26,0.4);\n  background: rgba(16,22,26,0.3);\n  color: #f5f8fa;\n}\n.bp3-running-text pre > code,\n.bp3-code-block > code {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  background: none;\n  padding: 0;\n  color: inherit;\n  font-size: inherit;\n}\n.bp3-running-text kbd,\n.bp3-key {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  border-radius: 3px;\n  -webkit-box-shadow: 0 0 0 1px rgba(16,22,26,0.1), 0 0 0 rgba(16,22,26,0), 0 1px 1px rgba(16,22,26,0.2);\n  box-shadow: 0 0 0 1px rgba(16,22,26,0.1), 0 0 0 rgba(16,22,26,0), 0 1px 1px rgba(16,22,26,0.2);\n  background: #fff;\n  min-width: 24px;\n  height: 24px;\n  padding: 3px 6px;\n  vertical-align: middle;\n  line-height: 24px;\n  color: #5c7080;\n  font-family: inherit;\n  font-size: 12px;\n}\n.bp3-running-text kbd .bp3-icon,\n.bp3-key .bp3-icon,\n.bp3-running-text kbd .bp3-icon-standard,\n.bp3-key .bp3-icon-standard,\n.bp3-running-text kbd .bp3-icon-large,\n.bp3-key .bp3-icon-large {\n  margin-right: 5px;\n}\n.bp3-dark .bp3-running-text kbd,\n.bp3-running-text .bp3-dark kbd,\n.bp3-dark .bp3-key {\n  -webkit-box-shadow: 0 0 0 1px rgba(16,22,26,0.2), 0 0 0 rgba(16,22,26,0), 0 1px 1px rgba(16,22,26,0.4);\n  box-shadow: 0 0 0 1px rgba(16,22,26,0.2), 0 0 0 rgba(16,22,26,0), 0 1px 1px rgba(16,22,26,0.4);\n  background: #394b59;\n  color: #bfccd6;\n}\n.bp3-running-text blockquote,\n.bp3-blockquote {\n  margin: 0 0 10px;\n  border-left: solid 4px rgba(167,182,194,0.5);\n  padding: 0 20px;\n}\n.bp3-dark .bp3-running-text blockquote,\n.bp3-running-text .bp3-dark blockquote,\n.bp3-dark .bp3-blockquote {\n  border-color: rgba(115,134,148,0.5);\n}\n.bp3-running-text ul,\n.bp3-running-text ol,\n.bp3-list {\n  margin: 10px 0;\n  padding-left: 30px;\n}\n.bp3-running-text ul li:not(:last-child),\n.bp3-running-text ol li:not(:last-child),\n.bp3-list li:not(:last-child) {\n  margin-bottom: 5px;\n}\n.bp3-running-text ul ol,\n.bp3-running-text ol ol,\n.bp3-list ol,\n.bp3-running-text ul ul,\n.bp3-running-text ol ul,\n.bp3-list ul {\n  margin-top: 5px;\n}\n.bp3-list-unstyled {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.bp3-list-unstyled li {\n  padding: 0;\n}\n.bp3-rtl {\n  text-align: right;\n}\n.bp3-dark {\n  color: #f5f8fa;\n}\n:focus {\n  outline: rgba(19,124,189,0.6) auto 2px;\n  outline-offset: 2px;\n  -moz-outline-radius: 6px;\n}\n.bp3-focus-disabled :focus {\n  outline: none !important;\n}\n.bp3-focus-disabled :focus ~ .bp3-control-indicator {\n  outline: none !important;\n}\n.bp3-alert {\n  max-width: 400px;\n  padding: 20px;\n}\n.bp3-alert-body {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.bp3-alert-body .bp3-icon {\n  margin-top: 0;\n  margin-right: 20px;\n  font-size: 40px;\n}\n.bp3-alert-footer {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n  -ms-flex-direction: row-reverse;\n  flex-direction: row-reverse;\n  margin-top: 10px;\n}\n.bp3-alert-footer .bp3-button {\n  margin-left: 10px;\n}\n.bp3-breadcrumbs {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  margin: 0;\n  cursor: default;\n  height: 30px;\n  padding: 0;\n  list-style: none;\n}\n.bp3-breadcrumbs > li {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n}\n.bp3-breadcrumbs > li::after {\n  display: block;\n  margin: 0 5px;\n  background: url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\'%3e%3cpath fill-rule=\'evenodd\' clip-rule=\'evenodd\' d=\'M10.71 7.29l-4-4a1.003 1.003 0 0 0-1.42 1.42L8.59 8 5.3 11.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71l4-4c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71z\' fill=\'rgba(92%2c112%2c128%2c1)\'/%3e%3c/svg%3e");\n  width: 16px;\n  height: 16px;\n  content: "";\n}\n.bp3-breadcrumbs > li:last-of-type::after {\n  display: none;\n}\n.bp3-breadcrumb,\n.bp3-breadcrumb-current,\n.bp3-breadcrumbs-collapsed {\n  display: inline-block;\n  font-size: 16px;\n}\n.bp3-breadcrumb,\n.bp3-breadcrumbs-collapsed {\n  color: #5c7080;\n}\n.bp3-breadcrumb:hover {\n  text-decoration: none;\n}\n.bp3-breadcrumb.bp3-disabled {\n  cursor: not-allowed;\n  color: rgba(92,112,128,0.5);\n}\n.bp3-breadcrumb-current {\n  color: inherit;\n  font-weight: 600;\n}\n.bp3-breadcrumb-current .bp3-input {\n  vertical-align: baseline;\n  font-size: inherit;\n  font-weight: inherit;\n}\n.bp3-breadcrumbs-collapsed {\n  margin-right: 2px;\n  border: none;\n  border-radius: 3px;\n  background: #ced9e0;\n  cursor: pointer;\n  padding: 1px 5px;\n}\n.bp3-breadcrumbs-collapsed::before {\n  display: block;\n  background: url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\'%3e%3cg fill=\'rgba(92%2c112%2c128%2c1)\'%3e%3ccircle cx=\'2\' cy=\'8.03\' r=\'2\'/%3e%3ccircle cx=\'14\' cy=\'8.03\' r=\'2\'/%3e%3ccircle cx=\'8\' cy=\'8.03\' r=\'2\'/%3e%3c/g%3e%3c/svg%3e") center no-repeat;\n  width: 16px;\n  height: 16px;\n  content: "";\n}\n.bp3-breadcrumbs-collapsed:hover {\n  background: #bfccd6;\n  text-decoration: none;\n  color: #182026;\n}\n.bp3-dark .bp3-breadcrumb,\n.bp3-dark .bp3-breadcrumbs-collapsed {\n  color: #bfccd6;\n}\n.bp3-dark .bp3-breadcrumbs > li::after {\n  color: #bfccd6;\n}\n.bp3-dark .bp3-breadcrumb.bp3-disabled {\n  color: rgba(191,204,214,0.5);\n}\n.bp3-dark .bp3-breadcrumb-current {\n  color: #f5f8fa;\n}\n.bp3-dark .bp3-breadcrumbs-collapsed {\n  background: rgba(16,22,26,0.4);\n}\n.bp3-dark .bp3-breadcrumbs-collapsed:hover {\n  background: rgba(16,22,26,0.6);\n  color: #f5f8fa;\n}\n.bp3-button {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  border: none;\n  border-radius: 3px;\n  cursor: pointer;\n  padding: 5px 10px;\n  vertical-align: middle;\n  text-align: left;\n  font-size: 14px;\n  min-width: 30px;\n  min-height: 30px;\n}\n.bp3-button > * {\n  -webkit-box-flex: 0;\n  -ms-flex-positive: 0;\n  flex-grow: 0;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n}\n.bp3-button > .bp3-fill {\n  -webkit-box-flex: 1;\n  -ms-flex-positive: 1;\n  flex-grow: 1;\n  -ms-flex-negative: 1;\n  flex-shrink: 1;\n}\n.bp3-button::before,\n.bp3-button > * {\n  margin-right: 7px;\n}\n.bp3-button:empty::before,\n.bp3-button > :last-child {\n  margin-right: 0;\n}\n.bp3-button:empty {\n  padding: 0 !important;\n}\n.bp3-button:disabled,\n.bp3-button.bp3-disabled {\n  cursor: not-allowed;\n}\n.bp3-button.bp3-fill {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n}\n.bp3-button.bp3-align-right,\n.bp3-align-right .bp3-button {\n  text-align: right;\n}\n.bp3-button:not([class*="bp3-intent-"]) {\n  -webkit-box-shadow: inset 0 0 0 1px rgba(16,22,26,0.2), inset 0 -1px 0 rgba(16,22,26,0.1);\n  box-shadow: inset 0 0 0 1px rgba(16,22,26,0.2), inset 0 -1px 0 rgba(16,22,26,0.1);\n  background-color: #f5f8fa;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(255,255,255,0.8)), to(rgba(255,255,255,0)));\n  background-image: linear-gradient(to bottom, rgba(255,255,255,0.8), rgba(255,255,255,0));\n  color: #182026;\n}\n.bp3-button:not([class*="bp3-intent-"]):hover {\n  -webkit-box-shadow: inset 0 0 0 1px rgba(16,22,26,0.2), inset 0 -1px 0 rgba(16,22,26,0.1);\n  box-shadow: inset 0 0 0 1px rgba(16,22,26,0.2), inset 0 -1px 0 rgba(16,22,26,0.1);\n  background-clip: padding-box;\n  background-color: #ebf1f5;\n}\n.bp3-button:not([class*="bp3-intent-"]):active,\n.bp3-button:not([class*="bp3-intent-"]).bp3-active {\n  -webkit-box-shadow: inset 0 0 0 1px rgba(16,22,26,0.2), inset 0 1px 2px rgba(16,22,26,0.2);\n  box-shadow: inset 0 0 0 1px rgba(16,22,26,0.2), inset 0 1px 2px rgba(16,22,26,0.2);\n  background-color: #d8e1e8;\n  background-image: none;\n}\n.bp3-button:not([class*="bp3-intent-"]):disabled,\n.bp3-button:not([class*="bp3-intent-"]).bp3-disabled {\n  outline: none;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  background-color: rgba(206,217,224,0.5);\n  background-image: none;\n  cursor: not-allowed;\n  color: rgba(92,112,128,0.5);\n}\n.bp3-button:not([class*="bp3-intent-"]):disabled.bp3-active,\n.bp3-button:not([class*="bp3-intent-"]):disabled.bp3-active:hover,\n.bp3-button:not([class*="bp3-intent-"]).bp3-disabled.bp3-active,\n.bp3-button:not([class*="bp3-intent-"]).bp3-disabled.bp3-active:hover {\n  background: rgba(206,217,224,0.7);\n}\n.bp3-button.bp3-intent-primary {\n  -webkit-box-shadow: inset 0 0 0 1px rgba(16,22,26,0.4), inset 0 -1px 0 rgba(16,22,26,0.2);\n  box-shadow: inset 0 0 0 1px rgba(16,22,26,0.4), inset 0 -1px 0 rgba(16,22,26,0.2);\n  background-color: #137cbd;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(255,255,255,0.1)), to(rgba(255,255,255,0)));\n  background-image: linear-gradient(to bottom, rgba(255,255,255,0.1), rgba(255,255,255,0));\n  color: #fff;\n}\n.bp3-button.bp3-intent-primary:hover,\n.bp3-button.bp3-intent-primary:active,\n.bp3-button.bp3-intent-primary.bp3-active {\n  color: #fff;\n}\n.bp3-button.bp3-intent-primary:hover {\n  -webkit-box-shadow: inset 0 0 0 1px rgba(16,22,26,0.4), inset 0 -1px 0 rgba(16,22,26,0.2);\n  box-shadow: inset 0 0 0 1px rgba(16,22,26,0.4), inset 0 -1px 0 rgba(16,22,26,0.2);\n  background-color: #106ba3;\n}\n.bp3-button.bp3-intent-primary:active,\n.bp3-button.bp3-intent-primary.bp3-active {\n  -webkit-box-shadow: inset 0 0 0 1px rgba(16,22,26,0.4), inset 0 1px 2px rgba(16,22,26,0.2);\n  box-shadow: inset 0 0 0 1px rgba(16,22,26,0.4), inset 0 1px 2px rgba(16,22,26,0.2);\n  background-color: #0e5a8a;\n  background-image: none;\n}\n.bp3-button.bp3-intent-primary:disabled,\n.bp3-button.bp3-intent-primary.bp3-disabled {\n  border-color: transparent;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  background-color: rgba(19,124,189,0.5);\n  background-image: none;\n  color: rgba(255,255,255,0.6);\n}\n.bp3-button.bp3-intent-success {\n  -webkit-box-shadow: inset 0 0 0 1px rgba(16,22,26,0.4), inset 0 -1px 0 rgba(16,22,26,0.2);\n  box-shadow: inset 0 0 0 1px rgba(16,22,26,0.4), inset 0 -1px 0 rgba(16,22,26,0.2);\n  background-color: #0f9960;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(255,255,255,0.1)), to(rgba(255,255,255,0)));\n  background-image: linear-gradient(to bottom, rgba(255,255,255,0.1), rgba(255,255,255,0));\n  color: #fff;\n}\n.bp3-button.bp3-intent-success:hover,\n.bp3-button.bp3-intent-success:active,\n.bp3-button.bp3-intent-success.bp3-active {\n  color: #fff;\n}\n.bp3-button.bp3-intent-success:hover {\n  -webkit-box-shadow: inset 0 0 0 1px rgba(16,22,26,0.4), inset 0 -1px 0 rgba(16,22,26,0.2);\n  box-shadow: inset 0 0 0 1px rgba(16,22,26,0.4), inset 0 -1px 0 rgba(16,22,26,0.2);\n  background-color: #0d8050;\n}\n.bp3-button.bp3-intent-success:active,\n.bp3-button.bp3-intent-success.bp3-active {\n  -webkit-box-shadow: inset 0 0 0 1px rgba(16,22,26,0.4), inset 0 1px 2px rgba(16,22,26,0.2);\n  box-shadow: inset 0 0 0 1px rgba(16,22,26,0.4), inset 0 1px 2px rgba(16,22,26,0.2);\n  background-color: #0a6640;\n  background-image: none;\n}\n.bp3-button.bp3-intent-success:disabled,\n.bp3-button.bp3-intent-success.bp3-disabled {\n  border-color: transparent;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  background-color: rgba(15,153,96,0.5);\n  background-image: none;\n  color: rgba(255,255,255,0.6);\n}\n.bp3-button.bp3-intent-warning {\n  -webkit-box-shadow: inset 0 0 0 1px rgba(16,22,26,0.4), inset 0 -1px 0 rgba(16,22,26,0.2);\n  box-shadow: inset 0 0 0 1px rgba(16,22,26,0.4), inset 0 -1px 0 rgba(16,22,26,0.2);\n  background-color: #d9822b;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(255,255,255,0.1)), to(rgba(255,255,255,0)));\n  background-image: linear-gradient(to bottom, rgba(255,255,255,0.1), rgba(255,255,255,0));\n  color: #fff;\n}\n.bp3-button.bp3-intent-warning:hover,\n.bp3-button.bp3-intent-warning:active,\n.bp3-button.bp3-intent-warning.bp3-active {\n  color: #fff;\n}\n.bp3-button.bp3-intent-warning:hover {\n  -webkit-box-shadow: inset 0 0 0 1px rgba(16,22,26,0.4), inset 0 -1px 0 rgba(16,22,26,0.2);\n  box-shadow: inset 0 0 0 1px rgba(16,22,26,0.4), inset 0 -1px 0 rgba(16,22,26,0.2);\n  background-color: #bf7326;\n}\n.bp3-button.bp3-intent-warning:active,\n.bp3-button.bp3-intent-warning.bp3-active {\n  -webkit-box-shadow: inset 0 0 0 1px rgba(16,22,26,0.4), inset 0 1px 2px rgba(16,22,26,0.2);\n  box-shadow: inset 0 0 0 1px rgba(16,22,26,0.4), inset 0 1px 2px rgba(16,22,26,0.2);\n  background-color: #a66321;\n  background-image: none;\n}\n.bp3-button.bp3-intent-warning:disabled,\n.bp3-button.bp3-intent-warning.bp3-disabled {\n  border-color: transparent;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  background-color: rgba(217,130,43,0.5);\n  background-image: none;\n  color: rgba(255,255,255,0.6);\n}\n.bp3-button.bp3-intent-danger {\n  -webkit-box-shadow: inset 0 0 0 1px rgba(16,22,26,0.4), inset 0 -1px 0 rgba(16,22,26,0.2);\n  box-shadow: inset 0 0 0 1px rgba(16,22,26,0.4), inset 0 -1px 0 rgba(16,22,26,0.2);\n  background-color: #db3737;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(255,255,255,0.1)), to(rgba(255,255,255,0)));\n  background-image: linear-gradient(to bottom, rgba(255,255,255,0.1), rgba(255,255,255,0));\n  color: #fff;\n}\n.bp3-button.bp3-intent-danger:hover,\n.bp3-button.bp3-intent-danger:active,\n.bp3-button.bp3-intent-danger.bp3-active {\n  color: #fff;\n}\n.bp3-button.bp3-intent-danger:hover {\n  -webkit-box-shadow: inset 0 0 0 1px rgba(16,22,26,0.4), inset 0 -1px 0 rgba(16,22,26,0.2);\n  box-shadow: inset 0 0 0 1px rgba(16,22,26,0.4), inset 0 -1px 0 rgba(16,22,26,0.2);\n  background-color: #c23030;\n}\n.bp3-button.bp3-intent-danger:active,\n.bp3-button.bp3-intent-danger.bp3-active {\n  -webkit-box-shadow: inset 0 0 0 1px rgba(16,22,26,0.4), inset 0 1px 2px rgba(16,22,26,0.2);\n  box-shadow: inset 0 0 0 1px rgba(16,22,26,0.4), inset 0 1px 2px rgba(16,22,26,0.2);\n  background-color: #a82a2a;\n  background-image: none;\n}\n.bp3-button.bp3-intent-danger:disabled,\n.bp3-button.bp3-intent-danger.bp3-disabled {\n  border-color: transparent;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  background-color: rgba(219,55,55,0.5);\n  background-image: none;\n  color: rgba(255,255,255,0.6);\n}\n.bp3-button[class*="bp3-intent-"] .bp3-button-spinner .bp3-spinner-head {\n  stroke: #fff;\n}\n.bp3-button.bp3-large,\n.bp3-large .bp3-button {\n  min-width: 40px;\n  min-height: 40px;\n  padding: 5px 15px;\n  font-size: 16px;\n}\n.bp3-button.bp3-large::before,\n.bp3-button.bp3-large > *,\n.bp3-large .bp3-button::before,\n.bp3-large .bp3-button > * {\n  margin-right: 10px;\n}\n.bp3-button.bp3-large:empty::before,\n.bp3-button.bp3-large > :last-child,\n.bp3-large .bp3-button:empty::before,\n.bp3-large .bp3-button > :last-child {\n  margin-right: 0;\n}\n.bp3-button.bp3-small,\n.bp3-small .bp3-button {\n  min-width: 24px;\n  min-height: 24px;\n  padding: 0 7px;\n}\n.bp3-button.bp3-loading {\n  position: relative;\n}\n.bp3-button.bp3-loading[class*="bp3-icon-"]::before {\n  visibility: hidden;\n}\n.bp3-button.bp3-loading .bp3-button-spinner {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n}\n.bp3-button.bp3-loading > :not(.bp3-button-spinner) {\n  visibility: hidden;\n}\n.bp3-button[class*="bp3-icon-"]::before {\n  line-height: 1;\n  font-family: "Icons16", sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  font-style: normal;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  color: #5c7080;\n}\n.bp3-button .bp3-icon,\n.bp3-button .bp3-icon-standard,\n.bp3-button .bp3-icon-large {\n  color: #5c7080;\n}\n.bp3-button .bp3-icon.bp3-align-right,\n.bp3-button .bp3-icon-standard.bp3-align-right,\n.bp3-button .bp3-icon-large.bp3-align-right {\n  margin-left: 7px;\n}\n.bp3-button .bp3-icon:first-child:last-child,\n.bp3-button .bp3-spinner + .bp3-icon:last-child {\n  margin: 0 -7px;\n}\n.bp3-dark .bp3-button:not([class*="bp3-intent-"]) {\n  -webkit-box-shadow: 0 0 0 1px rgba(16,22,26,0.4);\n  box-shadow: 0 0 0 1px rgba(16,22,26,0.4);\n  background-color: #394b59;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(255,255,255,0.05)), to(rgba(255,255,255,0)));\n  background-image: linear-gradient(to bottom, rgba(255,255,255,0.05), rgba(255,255,255,0));\n  color: #f5f8fa;\n}\n.bp3-dark .bp3-button:not([class*="bp3-intent-"]):hover,\n.bp3-dark .bp3-button:not([class*="bp3-intent-"]):active,\n.bp3-dark .bp3-button:not([class*="bp3-intent-"]).bp3-active {\n  color: #f5f8fa;\n}\n.bp3-dark .bp3-button:not([class*="bp3-intent-"]):hover {\n  -webkit-box-shadow: 0 0 0 1px rgba(16,22,26,0.4);\n  box-shadow: 0 0 0 1px rgba(16,22,26,0.4);\n  background-color: #30404d;\n}\n.bp3-dark .bp3-button:not([class*="bp3-intent-"]):active,\n.bp3-dark .bp3-button:not([class*="bp3-intent-"]).bp3-active {\n  -webkit-box-shadow: 0 0 0 1px rgba(16,22,26,0.6), inset 0 1px 2px rgba(16,22,26,0.2);\n  box-shadow: 0 0 0 1px rgba(16,22,26,0.6), inset 0 1px 2px rgba(16,22,26,0.2);\n  background-color: #202b33;\n  background-image: none;\n}\n.bp3-dark .bp3-button:not([class*="bp3-intent-"]):disabled,\n.bp3-dark .bp3-button:not([class*="bp3-intent-"]).bp3-disabled {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  background-color: rgba(57,75,89,0.5);\n  background-image: none;\n  color: rgba(191,204,214,0.5);\n}\n.bp3-dark .bp3-button:not([class*="bp3-intent-"]):disabled.bp3-active,\n.bp3-dark .bp3-button:not([class*="bp3-intent-"]).bp3-disabled.bp3-active {\n  background: rgba(57,75,89,0.7);\n}\n.bp3-dark .bp3-button:not([class*="bp3-intent-"]) .bp3-button-spinner .bp3-spinner-head {\n  background: rgba(16,22,26,0.5);\n  stroke: #8a9ba8;\n}\n.bp3-dark .bp3-button:not([class*="bp3-intent-"])[class*="bp3-icon-"]::before {\n  color: #bfccd6;\n}\n.bp3-dark .bp3-button:not([class*="bp3-intent-"]) .bp3-icon,\n.bp3-dark .bp3-button:not([class*="bp3-intent-"]) .bp3-icon-standard,\n.bp3-dark .bp3-button:not([class*="bp3-intent-"]) .bp3-icon-large {\n  color: #bfccd6;\n}\n.bp3-dark .bp3-button[class*="bp3-intent-"] {\n  -webkit-box-shadow: 0 0 0 1px rgba(16,22,26,0.4);\n  box-shadow: 0 0 0 1px rgba(16,22,26,0.4);\n}\n.bp3-dark .bp3-button[class*="bp3-intent-"]:hover {\n  -webkit-box-shadow: 0 0 0 1px rgba(16,22,26,0.4);\n  box-shadow: 0 0 0 1px rgba(16,22,26,0.4);\n}\n.bp3-dark .bp3-button[class*="bp3-intent-"]:active,\n.bp3-dark .bp3-button[class*="bp3-intent-"].bp3-active {\n  -webkit-box-shadow: 0 0 0 1px rgba(16,22,26,0.4), inset 0 1px 2px rgba(16,22,26,0.2);\n  box-shadow: 0 0 0 1px rgba(16,22,26,0.4), inset 0 1px 2px rgba(16,22,26,0.2);\n}\n.bp3-dark .bp3-button[class*="bp3-intent-"]:disabled,\n.bp3-dark .bp3-button[class*="bp3-intent-"].bp3-disabled {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  background-image: none;\n  color: rgba(255,255,255,0.3);\n}\n.bp3-dark .bp3-button[class*="bp3-intent-"] .bp3-button-spinner .bp3-spinner-head {\n  stroke: #8a9ba8;\n}\n.bp3-button:disabled::before,\n.bp3-button:disabled .bp3-icon,\n.bp3-button:disabled .bp3-icon-standard,\n.bp3-button:disabled .bp3-icon-large,\n.bp3-button.bp3-disabled::before,\n.bp3-button.bp3-disabled .bp3-icon,\n.bp3-button.bp3-disabled .bp3-icon-standard,\n.bp3-button.bp3-disabled .bp3-icon-large,\n.bp3-button[class*="bp3-intent-"]::before,\n.bp3-button[class*="bp3-intent-"] .bp3-icon,\n.bp3-button[class*="bp3-intent-"] .bp3-icon-standard,\n.bp3-button[class*="bp3-intent-"] .bp3-icon-large {\n  color: inherit !important;\n}\n.bp3-button.bp3-minimal {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  background: none;\n}\n.bp3-button.bp3-minimal:hover {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  background: rgba(167,182,194,0.3);\n  text-decoration: none;\n  color: #182026;\n}\n.bp3-button.bp3-minimal:active,\n.bp3-button.bp3-minimal.bp3-active {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  background: rgba(115,134,148,0.3);\n  color: #182026;\n}\n.bp3-button.bp3-minimal:disabled,\n.bp3-button.bp3-minimal:disabled:hover,\n.bp3-button.bp3-minimal.bp3-disabled,\n.bp3-button.bp3-minimal.bp3-disabled:hover {\n  background: none;\n  cursor: not-allowed;\n  color: rgba(92,112,128,0.5);\n}\n.bp3-button.bp3-minimal:disabled.bp3-active,\n.bp3-button.bp3-minimal:disabled:hover.bp3-active,\n.bp3-button.bp3-minimal.bp3-disabled.bp3-active,\n.bp3-button.bp3-minimal.bp3-disabled:hover.bp3-active {\n  background: rgba(115,134,148,0.3);\n}\n.bp3-dark .bp3-button.bp3-minimal {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  background: none;\n  color: inherit;\n}\n.bp3-dark .bp3-button.bp3-minimal:hover,\n.bp3-dark .bp3-button.bp3-minimal:active,\n.bp3-dark .bp3-button.bp3-minimal.bp3-active {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  background: none;\n}\n.bp3-dark .bp3-button.bp3-minimal:hover {\n  background: rgba(138,155,168,0.15);\n}\n.bp3-dark .bp3-button.bp3-minimal:active,\n.bp3-dark .bp3-button.bp3-minimal.bp3-active {\n  background: rgba(138,155,168,0.3);\n  color: #f5f8fa;\n}\n.bp3-dark .bp3-button.bp3-minimal:disabled,\n.bp3-dark .bp3-button.bp3-minimal:disabled:hover,\n.bp3-dark .bp3-button.bp3-minimal.bp3-disabled,\n.bp3-dark .bp3-button.bp3-minimal.bp3-disabled:hover {\n  background: none;\n  cursor: not-allowed;\n  color: rgba(191,204,214,0.5);\n}\n.bp3-dark .bp3-button.bp3-minimal:disabled.bp3-active,\n.bp3-dark .bp3-button.bp3-minimal:disabled:hover.bp3-active,\n.bp3-dark .bp3-button.bp3-minimal.bp3-disabled.bp3-active,\n.bp3-dark .bp3-button.bp3-minimal.bp3-disabled:hover.bp3-active {\n  background: rgba(138,155,168,0.3);\n}\n.bp3-button.bp3-minimal.bp3-intent-primary {\n  color: #106ba3;\n}\n.bp3-button.bp3-minimal.bp3-intent-primary:hover,\n.bp3-button.bp3-minimal.bp3-intent-primary:active,\n.bp3-button.bp3-minimal.bp3-intent-primary.bp3-active {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  background: none;\n  color: #106ba3;\n}\n.bp3-button.bp3-minimal.bp3-intent-primary:hover {\n  background: rgba(19,124,189,0.15);\n  color: #106ba3;\n}\n.bp3-button.bp3-minimal.bp3-intent-primary:active,\n.bp3-button.bp3-minimal.bp3-intent-primary.bp3-active {\n  background: rgba(19,124,189,0.3);\n  color: #106ba3;\n}\n.bp3-button.bp3-minimal.bp3-intent-primary:disabled,\n.bp3-button.bp3-minimal.bp3-intent-primary.bp3-disabled {\n  background: none;\n  color: rgba(16,107,163,0.5);\n}\n.bp3-button.bp3-minimal.bp3-intent-primary:disabled.bp3-active,\n.bp3-button.bp3-minimal.bp3-intent-primary.bp3-disabled.bp3-active {\n  background: rgba(19,124,189,0.3);\n}\n.bp3-button.bp3-minimal.bp3-intent-primary .bp3-button-spinner .bp3-spinner-head {\n  stroke: #106ba3;\n}\n.bp3-dark .bp3-button.bp3-minimal.bp3-intent-primary {\n  color: #48aff0;\n}\n.bp3-dark .bp3-button.bp3-minimal.bp3-intent-primary:hover {\n  background: rgba(19,124,189,0.2);\n  color: #48aff0;\n}\n.bp3-dark .bp3-button.bp3-minimal.bp3-intent-primary:active,\n.bp3-dark .bp3-button.bp3-minimal.bp3-intent-primary.bp3-active {\n  background: rgba(19,124,189,0.3);\n  color: #48aff0;\n}\n.bp3-dark .bp3-button.bp3-minimal.bp3-intent-primary:disabled,\n.bp3-dark .bp3-button.bp3-minimal.bp3-intent-primary.bp3-disabled {\n  background: none;\n  color: rgba(72,175,240,0.5);\n}\n.bp3-dark .bp3-button.bp3-minimal.bp3-intent-primary:disabled.bp3-active,\n.bp3-dark .bp3-button.bp3-minimal.bp3-intent-primary.bp3-disabled.bp3-active {\n  background: rgba(19,124,189,0.3);\n}\n.bp3-button.bp3-minimal.bp3-intent-success {\n  color: #0d8050;\n}\n.bp3-button.bp3-minimal.bp3-intent-success:hover,\n.bp3-button.bp3-minimal.bp3-intent-success:active,\n.bp3-button.bp3-minimal.bp3-intent-success.bp3-active {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  background: none;\n  color: #0d8050;\n}\n.bp3-button.bp3-minimal.bp3-intent-success:hover {\n  background: rgba(15,153,96,0.15);\n  color: #0d8050;\n}\n.bp3-button.bp3-minimal.bp3-intent-success:active,\n.bp3-button.bp3-minimal.bp3-intent-success.bp3-active {\n  background: rgba(15,153,96,0.3);\n  color: #0d8050;\n}\n.bp3-button.bp3-minimal.bp3-intent-success:disabled,\n.bp3-button.bp3-minimal.bp3-intent-success.bp3-disabled {\n  background: none;\n  color: rgba(13,128,80,0.5);\n}\n.bp3-button.bp3-minimal.bp3-intent-success:disabled.bp3-active,\n.bp3-button.bp3-minimal.bp3-intent-success.bp3-disabled.bp3-active {\n  background: rgba(15,153,96,0.3);\n}\n.bp3-button.bp3-minimal.bp3-intent-success .bp3-button-spinner .bp3-spinner-head {\n  stroke: #0d8050;\n}\n.bp3-dark .bp3-button.bp3-minimal.bp3-intent-success {\n  color: #3dcc91;\n}\n.bp3-dark .bp3-button.bp3-minimal.bp3-intent-success:hover {\n  background: rgba(15,153,96,0.2);\n  color: #3dcc91;\n}\n.bp3-dark .bp3-button.bp3-minimal.bp3-intent-success:active,\n.bp3-dark .bp3-button.bp3-minimal.bp3-intent-success.bp3-active {\n  background: rgba(15,153,96,0.3);\n  color: #3dcc91;\n}\n.bp3-dark .bp3-button.bp3-minimal.bp3-intent-success:disabled,\n.bp3-dark .bp3-button.bp3-minimal.bp3-intent-success.bp3-disabled {\n  background: none;\n  color: rgba(61,204,145,0.5);\n}\n.bp3-dark .bp3-button.bp3-minimal.bp3-intent-success:disabled.bp3-active,\n.bp3-dark .bp3-button.bp3-minimal.bp3-intent-success.bp3-disabled.bp3-active {\n  background: rgba(15,153,96,0.3);\n}\n.bp3-button.bp3-minimal.bp3-intent-warning {\n  color: #bf7326;\n}\n.bp3-button.bp3-minimal.bp3-intent-warning:hover,\n.bp3-button.bp3-minimal.bp3-intent-warning:active,\n.bp3-button.bp3-minimal.bp3-intent-warning.bp3-active {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  background: none;\n  color: #bf7326;\n}\n.bp3-button.bp3-minimal.bp3-intent-warning:hover {\n  background: rgba(217,130,43,0.15);\n  color: #bf7326;\n}\n.bp3-button.bp3-minimal.bp3-intent-warning:active,\n.bp3-button.bp3-minimal.bp3-intent-warning.bp3-active {\n  background: rgba(217,130,43,0.3);\n  color: #bf7326;\n}\n.bp3-button.bp3-minimal.bp3-intent-warning:disabled,\n.bp3-button.bp3-minimal.bp3-intent-warning.bp3-disabled {\n  background: none;\n  color: rgba(191,115,38,0.5);\n}\n.bp3-button.bp3-minimal.bp3-intent-warning:disabled.bp3-active,\n.bp3-button.bp3-minimal.bp3-intent-warning.bp3-disabled.bp3-active {\n  background: rgba(217,130,43,0.3);\n}\n.bp3-button.bp3-minimal.bp3-intent-warning .bp3-button-spinner .bp3-spinner-head {\n  stroke: #bf7326;\n}\n.bp3-dark .bp3-button.bp3-minimal.bp3-intent-warning {\n  color: #ffb366;\n}\n.bp3-dark .bp3-button.bp3-minimal.bp3-intent-warning:hover {\n  background: rgba(217,130,43,0.2);\n  color: #ffb366;\n}\n.bp3-dark .bp3-button.bp3-minimal.bp3-intent-warning:active,\n.bp3-dark .bp3-button.bp3-minimal.bp3-intent-warning.bp3-active {\n  background: rgba(217,130,43,0.3);\n  color: #ffb366;\n}\n.bp3-dark .bp3-button.bp3-minimal.bp3-intent-warning:disabled,\n.bp3-dark .bp3-button.bp3-minimal.bp3-intent-warning.bp3-disabled {\n  background: none;\n  color: rgba(255,179,102,0.5);\n}\n.bp3-dark .bp3-button.bp3-minimal.bp3-intent-warning:disabled.bp3-active,\n.bp3-dark .bp3-button.bp3-minimal.bp3-intent-warning.bp3-disabled.bp3-active {\n  background: rgba(217,130,43,0.3);\n}\n.bp3-button.bp3-minimal.bp3-intent-danger {\n  color: #c23030;\n}\n.bp3-button.bp3-minimal.bp3-intent-danger:hover,\n.bp3-button.bp3-minimal.bp3-intent-danger:active,\n.bp3-button.bp3-minimal.bp3-intent-danger.bp3-active {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  background: none;\n  color: #c23030;\n}\n.bp3-button.bp3-minimal.bp3-intent-danger:hover {\n  background: rgba(219,55,55,0.15);\n  color: #c23030;\n}\n.bp3-button.bp3-minimal.bp3-intent-danger:active,\n.bp3-button.bp3-minimal.bp3-intent-danger.bp3-active {\n  background: rgba(219,55,55,0.3);\n  color: #c23030;\n}\n.bp3-button.bp3-minimal.bp3-intent-danger:disabled,\n.bp3-button.bp3-minimal.bp3-intent-danger.bp3-disabled {\n  background: none;\n  color: rgba(194,48,48,0.5);\n}\n.bp3-button.bp3-minimal.bp3-intent-danger:disabled.bp3-active,\n.bp3-button.bp3-minimal.bp3-intent-danger.bp3-disabled.bp3-active {\n  background: rgba(219,55,55,0.3);\n}\n.bp3-button.bp3-minimal.bp3-intent-danger .bp3-button-spinner .bp3-spinner-head {\n  stroke: #c23030;\n}\n.bp3-dark .bp3-button.bp3-minimal.bp3-intent-danger {\n  color: #ff7373;\n}\n.bp3-dark .bp3-button.bp3-minimal.bp3-intent-danger:hover {\n  background: rgba(219,55,55,0.2);\n  color: #ff7373;\n}\n.bp3-dark .bp3-button.bp3-minimal.bp3-intent-danger:active,\n.bp3-dark .bp3-button.bp3-minimal.bp3-intent-danger.bp3-active {\n  background: rgba(219,55,55,0.3);\n  color: #ff7373;\n}\n.bp3-dark .bp3-button.bp3-minimal.bp3-intent-danger:disabled,\n.bp3-dark .bp3-button.bp3-minimal.bp3-intent-danger.bp3-disabled {\n  background: none;\n  color: rgba(255,115,115,0.5);\n}\n.bp3-dark .bp3-button.bp3-minimal.bp3-intent-danger:disabled.bp3-active,\n.bp3-dark .bp3-button.bp3-minimal.bp3-intent-danger.bp3-disabled.bp3-active {\n  background: rgba(219,55,55,0.3);\n}\na.bp3-button {\n  text-align: center;\n  text-decoration: none;\n  -webkit-transition: none;\n  transition: none;\n}\na.bp3-button,\na.bp3-button:hover,\na.bp3-button:active {\n  color: #182026;\n}\na.bp3-button.bp3-disabled {\n  color: rgba(92,112,128,0.5);\n}\n.bp3-button-text {\n  -webkit-box-flex: 0;\n  -ms-flex: 0 1 auto;\n  flex: 0 1 auto;\n}\n.bp3-button.bp3-align-left .bp3-button-text,\n.bp3-button.bp3-align-right .bp3-button-text,\n.bp3-button-group.bp3-align-left .bp3-button-text,\n.bp3-button-group.bp3-align-right .bp3-button-text {\n  -webkit-box-flex: 1;\n  -ms-flex: 1 1 auto;\n  flex: 1 1 auto;\n}\n.bp3-button-group {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n}\n.bp3-button-group .bp3-button {\n  -webkit-box-flex: 0;\n  -ms-flex: 0 0 auto;\n  flex: 0 0 auto;\n  position: relative;\n  z-index: 4;\n}\n.bp3-button-group .bp3-button:focus {\n  z-index: 5;\n}\n.bp3-button-group .bp3-button:hover {\n  z-index: 6;\n}\n.bp3-button-group .bp3-button:active,\n.bp3-button-group .bp3-button.bp3-active {\n  z-index: 7;\n}\n.bp3-button-group .bp3-button:disabled,\n.bp3-button-group .bp3-button.bp3-disabled {\n  z-index: 3;\n}\n.bp3-button-group .bp3-button[class*="bp3-intent-"] {\n  z-index: 9;\n}\n.bp3-button-group .bp3-button[class*="bp3-intent-"]:focus {\n  z-index: 10;\n}\n.bp3-button-group .bp3-button[class*="bp3-intent-"]:hover {\n  z-index: 11;\n}\n.bp3-button-group .bp3-button[class*="bp3-intent-"]:active,\n.bp3-button-group .bp3-button[class*="bp3-intent-"].bp3-active {\n  z-index: 12;\n}\n.bp3-button-group .bp3-button[class*="bp3-intent-"]:disabled,\n.bp3-button-group .bp3-button[class*="bp3-intent-"].bp3-disabled {\n  z-index: 8;\n}\n.bp3-button-group:not(.bp3-minimal) > .bp3-popover-wrapper:not(:first-child) .bp3-button,\n.bp3-button-group:not(.bp3-minimal) > .bp3-button:not(:first-child) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.bp3-button-group:not(.bp3-minimal) > .bp3-popover-wrapper:not(:last-child) .bp3-button,\n.bp3-button-group:not(.bp3-minimal) > .bp3-button:not(:last-child) {\n  margin-right: -1px;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.bp3-button-group.bp3-minimal .bp3-button {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  background: none;\n}\n.bp3-button-group.bp3-minimal .bp3-button:hover {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  background: rgba(167,182,194,0.3);\n  text-decoration: none;\n  color: #182026;\n}\n.bp3-button-group.bp3-minimal .bp3-button:active,\n.bp3-button-group.bp3-minimal .bp3-button.bp3-active {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  background: rgba(115,134,148,0.3);\n  color: #182026;\n}\n.bp3-button-group.bp3-minimal .bp3-button:disabled,\n.bp3-button-group.bp3-minimal .bp3-button:disabled:hover,\n.bp3-button-group.bp3-minimal .bp3-button.bp3-disabled,\n.bp3-button-group.bp3-minimal .bp3-button.bp3-disabled:hover {\n  background: none;\n  cursor: not-allowed;\n  color: rgba(92,112,128,0.5);\n}\n.bp3-button-group.bp3-minimal .bp3-button:disabled.bp3-active,\n.bp3-button-group.bp3-minimal .bp3-button:disabled:hover.bp3-active,\n.bp3-button-group.bp3-minimal .bp3-button.bp3-disabled.bp3-active,\n.bp3-button-group.bp3-minimal .bp3-button.bp3-disabled:hover.bp3-active {\n  background: rgba(115,134,148,0.3);\n}\n.bp3-dark .bp3-button-group.bp3-minimal .bp3-button {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  background: none;\n  color: inherit;\n}\n.bp3-dark .bp3-button-group.bp3-minimal .bp3-button:hover,\n.bp3-dark .bp3-button-group.bp3-minimal .bp3-button:active,\n.bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-active {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  background: none;\n}\n.bp3-dark .bp3-button-group.bp3-minimal .bp3-button:hover {\n  background: rgba(138,155,168,0.15);\n}\n.bp3-dark .bp3-button-group.bp3-minimal .bp3-button:active,\n.bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-active {\n  background: rgba(138,155,168,0.3);\n  color: #f5f8fa;\n}\n.bp3-dark .bp3-button-group.bp3-minimal .bp3-button:disabled,\n.bp3-dark .bp3-button-group.bp3-minimal .bp3-button:disabled:hover,\n.bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-disabled,\n.bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-disabled:hover {\n  background: none;\n  cursor: not-allowed;\n  color: rgba(191,204,214,0.5);\n}\n.bp3-dark .bp3-button-group.bp3-minimal .bp3-button:disabled.bp3-active,\n.bp3-dark .bp3-button-group.bp3-minimal .bp3-button:disabled:hover.bp3-active,\n.bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-disabled.bp3-active,\n.bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-disabled:hover.bp3-active {\n  background: rgba(138,155,168,0.3);\n}\n.bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary {\n  color: #106ba3;\n}\n.bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary:hover,\n.bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary:active,\n.bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary.bp3-active {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  background: none;\n  color: #106ba3;\n}\n.bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary:hover {\n  background: rgba(19,124,189,0.15);\n  color: #106ba3;\n}\n.bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary:active,\n.bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary.bp3-active {\n  background: rgba(19,124,189,0.3);\n  color: #106ba3;\n}\n.bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary:disabled,\n.bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary.bp3-disabled {\n  background: none;\n  color: rgba(16,107,163,0.5);\n}\n.bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary:disabled.bp3-active,\n.bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary.bp3-disabled.bp3-active {\n  background: rgba(19,124,189,0.3);\n}\n.bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary .bp3-button-spinner .bp3-spinner-head {\n  stroke: #106ba3;\n}\n.bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary {\n  color: #48aff0;\n}\n.bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary:hover {\n  background: rgba(19,124,189,0.2);\n  color: #48aff0;\n}\n.bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary:active,\n.bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary.bp3-active {\n  background: rgba(19,124,189,0.3);\n  color: #48aff0;\n}\n.bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary:disabled,\n.bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary.bp3-disabled {\n  background: none;\n  color: rgba(72,175,240,0.5);\n}\n.bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary:disabled.bp3-active,\n.bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary.bp3-disabled.bp3-active {\n  background: rgba(19,124,189,0.3);\n}\n.bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success {\n  color: #0d8050;\n}\n.bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success:hover,\n.bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success:active,\n.bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success.bp3-active {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  background: none;\n  color: #0d8050;\n}\n.bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success:hover {\n  background: rgba(15,153,96,0.15);\n  color: #0d8050;\n}\n.bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success:active,\n.bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success.bp3-active {\n  background: rgba(15,153,96,0.3);\n  color: #0d8050;\n}\n.bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success:disabled,\n.bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success.bp3-disabled {\n  background: none;\n  color: rgba(13,128,80,0.5);\n}\n.bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success:disabled.bp3-active,\n.bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success.bp3-disabled.bp3-active {\n  background: rgba(15,153,96,0.3);\n}\n.bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success .bp3-button-spinner .bp3-spinner-head {\n  stroke: #0d8050;\n}\n.bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success {\n  color: #3dcc91;\n}\n.bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success:hover {\n  background: rgba(15,153,96,0.2);\n  color: #3dcc91;\n}\n.bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success:active,\n.bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success.bp3-active {\n  background: rgba(15,153,96,0.3);\n  color: #3dcc91;\n}\n.bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success:disabled,\n.bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success.bp3-disabled {\n  background: none;\n  color: rgba(61,204,145,0.5);\n}\n.bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success:disabled.bp3-active,\n.bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success.bp3-disabled.bp3-active {\n  background: rgba(15,153,96,0.3);\n}\n.bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning {\n  color: #bf7326;\n}\n.bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning:hover,\n.bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning:active,\n.bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning.bp3-active {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  background: none;\n  color: #bf7326;\n}\n.bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning:hover {\n  background: rgba(217,130,43,0.15);\n  color: #bf7326;\n}\n.bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning:active,\n.bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning.bp3-active {\n  background: rgba(217,130,43,0.3);\n  color: #bf7326;\n}\n.bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning:disabled,\n.bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning.bp3-disabled {\n  background: none;\n  color: rgba(191,115,38,0.5);\n}\n.bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning:disabled.bp3-active,\n.bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning.bp3-disabled.bp3-active {\n  background: rgba(217,130,43,0.3);\n}\n.bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning .bp3-button-spinner .bp3-spinner-head {\n  stroke: #bf7326;\n}\n.bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning {\n  color: #ffb366;\n}\n.bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning:hover {\n  background: rgba(217,130,43,0.2);\n  color: #ffb366;\n}\n.bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning:active,\n.bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning.bp3-active {\n  background: rgba(217,130,43,0.3);\n  color: #ffb366;\n}\n.bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning:disabled,\n.bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning.bp3-disabled {\n  background: none;\n  color: rgba(255,179,102,0.5);\n}\n.bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning:disabled.bp3-active,\n.bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning.bp3-disabled.bp3-active {\n  background: rgba(217,130,43,0.3);\n}\n.bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger {\n  color: #c23030;\n}\n.bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger:hover,\n.bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger:active,\n.bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger.bp3-active {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  background: none;\n  color: #c23030;\n}\n.bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger:hover {\n  background: rgba(219,55,55,0.15);\n  color: #c23030;\n}\n.bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger:active,\n.bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger.bp3-active {\n  background: rgba(219,55,55,0.3);\n  color: #c23030;\n}\n.bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger:disabled,\n.bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger.bp3-disabled {\n  background: none;\n  color: rgba(194,48,48,0.5);\n}\n.bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger:disabled.bp3-active,\n.bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger.bp3-disabled.bp3-active {\n  background: rgba(219,55,55,0.3);\n}\n.bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger .bp3-button-spinner .bp3-spinner-head {\n  stroke: #c23030;\n}\n.bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger {\n  color: #ff7373;\n}\n.bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger:hover {\n  background: rgba(219,55,55,0.2);\n  color: #ff7373;\n}\n.bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger:active,\n.bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger.bp3-active {\n  background: rgba(219,55,55,0.3);\n  color: #ff7373;\n}\n.bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger:disabled,\n.bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger.bp3-disabled {\n  background: none;\n  color: rgba(255,115,115,0.5);\n}\n.bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger:disabled.bp3-active,\n.bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger.bp3-disabled.bp3-active {\n  background: rgba(219,55,55,0.3);\n}\n.bp3-button-group.bp3-fill {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n}\n.bp3-button-group .bp3-button.bp3-fill,\n.bp3-button-group.bp3-fill .bp3-button:not(.bp3-fixed) {\n  -webkit-box-flex: 1;\n  -ms-flex: 1 1 auto;\n  flex: 1 1 auto;\n}\n.bp3-button-group.bp3-vertical {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -webkit-box-align: stretch;\n  -ms-flex-align: stretch;\n  align-items: stretch;\n  vertical-align: top;\n}\n.bp3-button-group.bp3-vertical.bp3-fill {\n  width: unset;\n  height: 100%;\n}\n.bp3-button-group.bp3-vertical .bp3-button {\n  margin-right: 0 !important;\n  width: 100%;\n}\n.bp3-button-group.bp3-vertical .bp3-popover-target {\n  display: block;\n}\n.bp3-button-group.bp3-vertical:not(.bp3-minimal) > .bp3-popover-wrapper:first-child .bp3-button,\n.bp3-button-group.bp3-vertical:not(.bp3-minimal) > .bp3-button:first-child {\n  border-radius: 3px 3px 0 0;\n}\n.bp3-button-group.bp3-vertical:not(.bp3-minimal) > .bp3-popover-wrapper:last-child .bp3-button,\n.bp3-button-group.bp3-vertical:not(.bp3-minimal) > .bp3-button:last-child {\n  border-radius: 0 0 3px 3px;\n}\n.bp3-button-group.bp3-vertical:not(.bp3-minimal) > .bp3-popover-wrapper:not(:last-child) .bp3-button,\n.bp3-button-group.bp3-vertical:not(.bp3-minimal) > .bp3-button:not(:last-child) {\n  margin-bottom: -1px;\n}\n.bp3-button-group.bp3-align-left .bp3-button {\n  text-align: left;\n}\n.bp3-dark .bp3-button-group:not(.bp3-minimal) > .bp3-popover-wrapper:not(:last-child) .bp3-button,\n.bp3-dark .bp3-button-group:not(.bp3-minimal) > .bp3-button:not(:last-child) {\n  margin-right: 1px;\n}\n.bp3-dark .bp3-button-group.bp3-vertical > .bp3-popover-wrapper:not(:last-child) .bp3-button,\n.bp3-dark .bp3-button-group.bp3-vertical > .bp3-button:not(:last-child) {\n  margin-bottom: 1px;\n}\n.bp3-callout {\n  line-height: 1.5;\n  font-size: 14px;\n  position: relative;\n  border-radius: 3px;\n  background-color: rgba(138,155,168,0.15);\n  width: 100%;\n  padding: 10px 12px 9px;\n}\n.bp3-callout[class*="bp3-icon-"] {\n  padding-left: 40px;\n}\n.bp3-callout[class*="bp3-icon-"]::before {\n  line-height: 1;\n  font-family: "Icons20", sans-serif;\n  font-size: 20px;\n  font-weight: 400;\n  font-style: normal;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  color: #5c7080;\n}\n.bp3-callout.bp3-callout-icon {\n  padding-left: 40px;\n}\n.bp3-callout.bp3-callout-icon > .bp3-icon:first-child {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  color: #5c7080;\n}\n.bp3-callout .bp3-heading {\n  margin-top: 0;\n  margin-bottom: 5px;\n  line-height: 20px;\n}\n.bp3-dark .bp3-callout {\n  background-color: rgba(138,155,168,0.2);\n}\n.bp3-dark .bp3-callout[class*="bp3-icon-"]::before {\n  color: #bfccd6;\n}\n.bp3-callout.bp3-intent-primary {\n  background-color: rgba(19,124,189,0.15);\n}\n.bp3-callout.bp3-intent-primary[class*="bp3-icon-"]::before,\n.bp3-callout.bp3-intent-primary > .bp3-icon:first-child,\n.bp3-callout.bp3-intent-primary .bp3-heading {\n  color: #106ba3;\n}\n.bp3-dark .bp3-callout.bp3-intent-primary {\n  background-color: rgba(19,124,189,0.25);\n}\n.bp3-dark .bp3-callout.bp3-intent-primary[class*="bp3-icon-"]::before,\n.bp3-dark .bp3-callout.bp3-intent-primary > .bp3-icon:first-child,\n.bp3-dark .bp3-callout.bp3-intent-primary .bp3-heading {\n  color: #48aff0;\n}\n.bp3-callout.bp3-intent-success {\n  background-color: rgba(15,153,96,0.15);\n}\n.bp3-callout.bp3-intent-success[class*="bp3-icon-"]::before,\n.bp3-callout.bp3-intent-success > .bp3-icon:first-child,\n.bp3-callout.bp3-intent-success .bp3-heading {\n  color: #0d8050;\n}\n.bp3-dark .bp3-callout.bp3-intent-success {\n  background-color: rgba(15,153,96,0.25);\n}\n.bp3-dark .bp3-callout.bp3-intent-success[class*="bp3-icon-"]::before,\n.bp3-dark .bp3-callout.bp3-intent-success > .bp3-icon:first-child,\n.bp3-dark .bp3-callout.bp3-intent-success .bp3-heading {\n  color: #3dcc91;\n}\n.bp3-callout.bp3-intent-warning {\n  background-color: rgba(217,130,43,0.15);\n}\n.bp3-callout.bp3-intent-warning[class*="bp3-icon-"]::before,\n.bp3-callout.bp3-intent-warning > .bp3-icon:first-child,\n.bp3-callout.bp3-intent-warning .bp3-heading {\n  color: #bf7326;\n}\n.bp3-dark .bp3-callout.bp3-intent-warning {\n  background-color: rgba(217,130,43,0.25);\n}\n.bp3-dark .bp3-callout.bp3-intent-warning[class*="bp3-icon-"]::before,\n.bp3-dark .bp3-callout.bp3-intent-warning > .bp3-icon:first-child,\n.bp3-dark .bp3-callout.bp3-intent-warning .bp3-heading {\n  color: #ffb366;\n}\n.bp3-callout.bp3-intent-danger {\n  background-color: rgba(219,55,55,0.15);\n}\n.bp3-callout.bp3-intent-danger[class*="bp3-icon-"]::before,\n.bp3-callout.bp3-intent-danger > .bp3-icon:first-child,\n.bp3-callout.bp3-intent-danger .bp3-heading {\n  color: #c23030;\n}\n.bp3-dark .bp3-callout.bp3-intent-danger {\n  background-color: rgba(219,55,55,0.25);\n}\n.bp3-dark .bp3-callout.bp3-intent-danger[class*="bp3-icon-"]::before,\n.bp3-dark .bp3-callout.bp3-intent-danger > .bp3-icon:first-child,\n.bp3-dark .bp3-callout.bp3-intent-danger .bp3-heading {\n  color: #ff7373;\n}\n.bp3-running-text .bp3-callout {\n  margin: 20px 0;\n}\n.bp3-card {\n  border-radius: 3px;\n  -webkit-box-shadow: 0 0 0 1px rgba(16,22,26,0.15), 0 0 0 rgba(16,22,26,0), 0 0 0 rgba(16,22,26,0);\n  box-shadow: 0 0 0 1px rgba(16,22,26,0.15), 0 0 0 rgba(16,22,26,0), 0 0 0 rgba(16,22,26,0);\n  background-color: #fff;\n  padding: 20px;\n  -webkit-transition: -webkit-transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9), -webkit-box-shadow 200ms cubic-bezier(0.4, 1, 0.75, 0.9);\n  transition: -webkit-transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9), -webkit-box-shadow 200ms cubic-bezier(0.4, 1, 0.75, 0.9);\n  transition: transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9), box-shadow 200ms cubic-bezier(0.4, 1, 0.75, 0.9);\n  transition: transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9), box-shadow 200ms cubic-bezier(0.4, 1, 0.75, 0.9), -webkit-transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9), -webkit-box-shadow 200ms cubic-bezier(0.4, 1, 0.75, 0.9);\n}\n.bp3-card.bp3-dark,\n.bp3-dark .bp3-card {\n  -webkit-box-shadow: 0 0 0 1px rgba(16,22,26,0.4), 0 0 0 rgba(16,22,26,0), 0 0 0 rgba(16,22,26,0);\n  box-shadow: 0 0 0 1px rgba(16,22,26,0.4), 0 0 0 rgba(16,22,26,0), 0 0 0 rgba(16,22,26,0);\n  background-color: #30404d;\n}\n.bp3-elevation-0 {\n  -webkit-box-shadow: 0 0 0 1px rgba(16,22,26,0.15), 0 0 0 rgba(16,22,26,0), 0 0 0 rgba(16,22,26,0);\n  box-shadow: 0 0 0 1px rgba(16,22,26,0.15), 0 0 0 rgba(16,22,26,0), 0 0 0 rgba(16,22,26,0);\n}\n.bp3-elevation-0.bp3-dark,\n.bp3-dark .bp3-elevation-0 {\n  -webkit-box-shadow: 0 0 0 1px rgba(16,22,26,0.4), 0 0 0 rgba(16,22,26,0), 0 0 0 rgba(16,22,26,0);\n  box-shadow: 0 0 0 1px rgba(16,22,26,0.4), 0 0 0 rgba(16,22,26,0), 0 0 0 rgba(16,22,26,0);\n}\n.bp3-elevation-1 {\n  -webkit-box-shadow: 0 0 0 1px rgba(16,22,26,0.1), 0 0 0 rgba(16,22,26,0), 0 1px 1px rgba(16,22,26,0.2);\n  box-shadow: 0 0 0 1px rgba(16,22,26,0.1), 0 0 0 rgba(16,22,26,0), 0 1px 1px rgba(16,22,26,0.2);\n}\n.bp3-elevation-1.bp3-dark,\n.bp3-dark .bp3-elevation-1 {\n  -webkit-box-shadow: 0 0 0 1px rgba(16,22,26,0.2), 0 0 0 rgba(16,22,26,0), 0 1px 1px rgba(16,22,26,0.4);\n  box-shadow: 0 0 0 1px rgba(16,22,26,0.2), 0 0 0 rgba(16,22,26,0), 0 1px 1px rgba(16,22,26,0.4);\n}\n.bp3-elevation-2 {\n  -webkit-box-shadow: 0 0 0 1px rgba(16,22,26,0.1), 0 1px 1px rgba(16,22,26,0.2), 0 2px 6px rgba(16,22,26,0.2);\n  box-shadow: 0 0 0 1px rgba(16,22,26,0.1), 0 1px 1px rgba(16,22,26,0.2), 0 2px 6px rgba(16,22,26,0.2);\n}\n.bp3-elevation-2.bp3-dark,\n.bp3-dark .bp3-elevation-2 {\n  -webkit-box-shadow: 0 0 0 1px rgba(16,22,26,0.2), 0 1px 1px rgba(16,22,26,0.4), 0 2px 6px rgba(16,22,26,0.4);\n  box-shadow: 0 0 0 1px rgba(16,22,26,0.2), 0 1px 1px rgba(16,22,26,0.4), 0 2px 6px rgba(16,22,26,0.4);\n}\n.bp3-elevation-3 {\n  -webkit-box-shadow: 0 0 0 1px rgba(16,22,26,0.1), 0 2px 4px rgba(16,22,26,0.2), 0 8px 24px rgba(16,22,26,0.2);\n  box-shadow: 0 0 0 1px rgba(16,22,26,0.1), 0 2px 4px rgba(16,22,26,0.2), 0 8px 24px rgba(16,22,26,0.2);\n}\n.bp3-elevation-3.bp3-dark,\n.bp3-dark .bp3-elevation-3 {\n  -webkit-box-shadow: 0 0 0 1px rgba(16,22,26,0.2), 0 2px 4px rgba(16,22,26,0.4), 0 8px 24px rgba(16,22,26,0.4);\n  box-shadow: 0 0 0 1px rgba(16,22,26,0.2), 0 2px 4px rgba(16,22,26,0.4), 0 8px 24px rgba(16,22,26,0.4);\n}\n.bp3-elevation-4 {\n  -webkit-box-shadow: 0 0 0 1px rgba(16,22,26,0.1), 0 4px 8px rgba(16,22,26,0.2), 0 18px 46px 6px rgba(16,22,26,0.2);\n  box-shadow: 0 0 0 1px rgba(16,22,26,0.1), 0 4px 8px rgba(16,22,26,0.2), 0 18px 46px 6px rgba(16,22,26,0.2);\n}\n.bp3-elevation-4.bp3-dark,\n.bp3-dark .bp3-elevation-4 {\n  -webkit-box-shadow: 0 0 0 1px rgba(16,22,26,0.2), 0 4px 8px rgba(16,22,26,0.4), 0 18px 46px 6px rgba(16,22,26,0.4);\n  box-shadow: 0 0 0 1px rgba(16,22,26,0.2), 0 4px 8px rgba(16,22,26,0.4), 0 18px 46px 6px rgba(16,22,26,0.4);\n}\n.bp3-card.bp3-interactive:hover {\n  -webkit-box-shadow: 0 0 0 1px rgba(16,22,26,0.1), 0 2px 4px rgba(16,22,26,0.2), 0 8px 24px rgba(16,22,26,0.2);\n  box-shadow: 0 0 0 1px rgba(16,22,26,0.1), 0 2px 4px rgba(16,22,26,0.2), 0 8px 24px rgba(16,22,26,0.2);\n  cursor: pointer;\n}\n.bp3-card.bp3-interactive:hover.bp3-dark,\n.bp3-dark .bp3-card.bp3-interactive:hover {\n  -webkit-box-shadow: 0 0 0 1px rgba(16,22,26,0.2), 0 2px 4px rgba(16,22,26,0.4), 0 8px 24px rgba(16,22,26,0.4);\n  box-shadow: 0 0 0 1px rgba(16,22,26,0.2), 0 2px 4px rgba(16,22,26,0.4), 0 8px 24px rgba(16,22,26,0.4);\n}\n.bp3-card.bp3-interactive:active {\n  opacity: 0.9;\n  -webkit-box-shadow: 0 0 0 1px rgba(16,22,26,0.1), 0 0 0 rgba(16,22,26,0), 0 1px 1px rgba(16,22,26,0.2);\n  box-shadow: 0 0 0 1px rgba(16,22,26,0.1), 0 0 0 rgba(16,22,26,0), 0 1px 1px rgba(16,22,26,0.2);\n  -webkit-transition-duration: 0;\n  transition-duration: 0;\n}\n.bp3-card.bp3-interactive:active.bp3-dark,\n.bp3-dark .bp3-card.bp3-interactive:active {\n  -webkit-box-shadow: 0 0 0 1px rgba(16,22,26,0.2), 0 0 0 rgba(16,22,26,0), 0 1px 1px rgba(16,22,26,0.4);\n  box-shadow: 0 0 0 1px rgba(16,22,26,0.2), 0 0 0 rgba(16,22,26,0), 0 1px 1px rgba(16,22,26,0.4);\n}\n.bp3-collapse {\n  height: 0;\n  overflow-y: hidden;\n  -webkit-transition: height 200ms cubic-bezier(0.4, 1, 0.75, 0.9);\n  transition: height 200ms cubic-bezier(0.4, 1, 0.75, 0.9);\n}\n.bp3-collapse .bp3-collapse-body {\n  -webkit-transition: -webkit-transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9);\n  transition: -webkit-transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9);\n  transition: transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9);\n  transition: transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9), -webkit-transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9);\n}\n.bp3-collapse .bp3-collapse-body[aria-hidden="true"] {\n  display: none;\n}\n.bp3-context-menu .bp3-popover-target {\n  display: block;\n}\n.bp3-context-menu-popover-target {\n  position: fixed;\n}\n.bp3-dialog-container {\n  opacity: 1;\n  -webkit-transform: scale(1);\n  transform: scale(1);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  width: 100%;\n  min-height: 100%;\n  pointer-events: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.bp3-dialog-container.bp3-overlay-enter > .bp3-dialog,\n.bp3-dialog-container.bp3-overlay-appear > .bp3-dialog {\n  opacity: 0;\n  -webkit-transform: scale(0.5);\n  transform: scale(0.5);\n}\n.bp3-dialog-container.bp3-overlay-enter-active > .bp3-dialog,\n.bp3-dialog-container.bp3-overlay-appear-active > .bp3-dialog {\n  opacity: 1;\n  -webkit-transform: scale(1);\n  transform: scale(1);\n  -webkit-transition-property: opacity, -webkit-transform;\n  transition-property: opacity, -webkit-transform;\n  transition-property: opacity, transform;\n  transition-property: opacity, transform, -webkit-transform;\n  -webkit-transition-duration: 300ms;\n  transition-duration: 300ms;\n  -webkit-transition-timing-function: cubic-bezier(0.54, 1.12, 0.38, 1.11);\n  transition-timing-function: cubic-bezier(0.54, 1.12, 0.38, 1.11);\n  -webkit-transition-delay: 0;\n  transition-delay: 0;\n}\n.bp3-dialog-container.bp3-overlay-exit > .bp3-dialog {\n  opacity: 1;\n  -webkit-transform: scale(1);\n  transform: scale(1);\n}\n.bp3-dialog-container.bp3-overlay-exit-active > .bp3-dialog {\n  opacity: 0;\n  -webkit-transform: scale(0.5);\n  transform: scale(0.5);\n  -webkit-transition-property: opacity, -webkit-transform;\n  transition-property: opacity, -webkit-transform;\n  transition-property: opacity, transform;\n  transition-property: opacity, transform, -webkit-transform;\n  -webkit-transition-duration: 300ms;\n  transition-duration: 300ms;\n  -webkit-transition-timing-function: cubic-bezier(0.54, 1.12, 0.38, 1.11);\n  transition-timing-function: cubic-bezier(0.54, 1.12, 0.38, 1.11);\n  -webkit-transition-delay: 0;\n  transition-delay: 0;\n}\n.bp3-dialog {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  margin: 30px 0;\n  border-radius: 6px;\n  -webkit-box-shadow: 0 0 0 1px rgba(16,22,26,0.1), 0 4px 8px rgba(16,22,26,0.2), 0 18px 46px 6px rgba(16,22,26,0.2);\n  box-shadow: 0 0 0 1px rgba(16,22,26,0.1), 0 4px 8px rgba(16,22,26,0.2), 0 18px 46px 6px rgba(16,22,26,0.2);\n  background: #ebf1f5;\n  width: 500px;\n  padding-bottom: 20px;\n  pointer-events: all;\n  -webkit-user-select: text;\n  -moz-user-select: text;\n  -ms-user-select: text;\n  user-select: text;\n}\n.bp3-dialog:focus {\n  outline: 0;\n}\n.bp3-dialog.bp3-dark,\n.bp3-dark .bp3-dialog {\n  -webkit-box-shadow: 0 0 0 1px rgba(16,22,26,0.2), 0 4px 8px rgba(16,22,26,0.4), 0 18px 46px 6px rgba(16,22,26,0.4);\n  box-shadow: 0 0 0 1px rgba(16,22,26,0.2), 0 4px 8px rgba(16,22,26,0.4), 0 18px 46px 6px rgba(16,22,26,0.4);\n  background: #293742;\n  color: #f5f8fa;\n}\n.bp3-dialog-header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 0;\n  -ms-flex: 0 0 auto;\n  flex: 0 0 auto;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  border-radius: 6px 6px 0 0;\n  -webkit-box-shadow: 0 1px 0 rgba(16,22,26,0.15);\n  box-shadow: 0 1px 0 rgba(16,22,26,0.15);\n  background: #fff;\n  min-height: 40px;\n  padding-left: 20px;\n}\n.bp3-dialog-header .bp3-icon-large,\n.bp3-dialog-header .bp3-icon {\n  -webkit-box-flex: 0;\n  -ms-flex: 0 0 auto;\n  flex: 0 0 auto;\n  margin-right: 10px;\n  color: #5c7080;\n}\n.bp3-dialog-header .bp3-heading {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  word-wrap: normal;\n  -webkit-box-flex: 1;\n  -ms-flex: 1 1 auto;\n  flex: 1 1 auto;\n  margin: 0;\n  line-height: inherit;\n}\n.bp3-dialog-header .bp3-heading:last-child {\n  margin-right: 20px;\n}\n.bp3-dark .bp3-dialog-header {\n  -webkit-box-shadow: 0 1px 0 rgba(16,22,26,0.4);\n  box-shadow: 0 1px 0 rgba(16,22,26,0.4);\n  background: #30404d;\n}\n.bp3-dark .bp3-dialog-header .bp3-icon-large,\n.bp3-dark .bp3-dialog-header .bp3-icon {\n  color: #bfccd6;\n}\n.bp3-dialog-close-button {\n  line-height: 1;\n  font-family: "Icons20", sans-serif;\n  font-size: 20px;\n  font-weight: 400;\n  font-style: normal;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  color: #5c7080;\n  -webkit-box-flex: 0;\n  -ms-flex: 0 0 auto;\n  flex: 0 0 auto;\n  border: none;\n  background: none;\n  cursor: pointer;\n  padding: 10px;\n}\n.bp3-dialog-close-button:hover {\n  color: #182026;\n}\n.bp3-dark .bp3-dialog-close-button {\n  color: #bfccd6;\n}\n.bp3-dark .bp3-dialog-close-button:hover {\n  color: #f5f8fa;\n}\n.bp3-dialog-close-button .bp3-icon-large,\n.bp3-dialog-close-button .bp3-icon {\n  margin: 0;\n}\n.bp3-dialog-body {\n  -webkit-box-flex: 1;\n  -ms-flex: 1 1 auto;\n  flex: 1 1 auto;\n  margin: 20px;\n  line-height: 18px;\n}\n.bp3-dialog-footer {\n  -webkit-box-flex: 0;\n  -ms-flex: 0 0 auto;\n  flex: 0 0 auto;\n  margin: 0 20px;\n}\n.bp3-dialog-footer-actions {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: end;\n  -ms-flex-pack: end;\n  justify-content: flex-end;\n}\n.bp3-dialog-footer-actions .bp3-button {\n  margin-left: 10px;\n}\n.bp3-editable-text {\n  display: inline-block;\n  position: relative;\n  cursor: text;\n  max-width: 100%;\n  vertical-align: top;\n  white-space: nowrap;\n}\n.bp3-editable-text::before {\n  position: absolute;\n  top: -3px;\n  right: -3px;\n  bottom: -3px;\n  left: -3px;\n  border-radius: 3px;\n  content: "";\n  -webkit-transition: background-color 100ms cubic-bezier(0.4, 1, 0.75, 0.9), -webkit-box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9);\n  transition: background-color 100ms cubic-bezier(0.4, 1, 0.75, 0.9), -webkit-box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9);\n  transition: background-color 100ms cubic-bezier(0.4, 1, 0.75, 0.9), box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9);\n  transition: background-color 100ms cubic-bezier(0.4, 1, 0.75, 0.9), box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9), -webkit-box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9);\n}\n.bp3-editable-text:hover::before {\n  -webkit-box-shadow: 0 0 0 0 rgba(19,124,189,0), 0 0 0 0 rgba(19,124,189,0), inset 0 0 0 1px rgba(16,22,26,0.15);\n  box-shadow: 0 0 0 0 rgba(19,124,189,0), 0 0 0 0 rgba(19,124,189,0), inset 0 0 0 1px rgba(16,22,26,0.15);\n}\n.bp3-editable-text.bp3-editable-text-editing::before {\n  -webkit-box-shadow: 0 0 0 1px #137cbd, 0 0 0 3px rgba(19,124,189,0.3), inset 0 1px 1px rgba(16,22,26,0.2);\n  box-shadow: 0 0 0 1px #137cbd, 0 0 0 3px rgba(19,124,189,0.3), inset 0 1px 1px rgba(16,22,26,0.2);\n  background-color: #fff;\n}\n.bp3-editable-text.bp3-disabled::before {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n}\n.bp3-editable-text.bp3-intent-primary .bp3-editable-text-input,\n.bp3-editable-text.bp3-intent-primary .bp3-editable-text-content {\n  color: #137cbd;\n}\n.bp3-editable-text.bp3-intent-primary:hover::before {\n  -webkit-box-shadow: 0 0 0 0 rgba(19,124,189,0), 0 0 0 0 rgba(19,124,189,0), inset 0 0 0 1px rgba(19,124,189,0.4);\n  box-shadow: 0 0 0 0 rgba(19,124,189,0), 0 0 0 0 rgba(19,124,189,0), inset 0 0 0 1px rgba(19,124,189,0.4);\n}\n.bp3-editable-text.bp3-intent-primary.bp3-editable-text-editing::before {\n  -webkit-box-shadow: 0 0 0 1px #137cbd, 0 0 0 3px rgba(19,124,189,0.3), inset 0 1px 1px rgba(16,22,26,0.2);\n  box-shadow: 0 0 0 1px #137cbd, 0 0 0 3px rgba(19,124,189,0.3), inset 0 1px 1px rgba(16,22,26,0.2);\n}\n.bp3-editable-text.bp3-intent-success .bp3-editable-text-input,\n.bp3-editable-text.bp3-intent-success .bp3-editable-text-content {\n  color: #0f9960;\n}\n.bp3-editable-text.bp3-intent-success:hover::before {\n  -webkit-box-shadow: 0 0 0 0 rgba(15,153,96,0), 0 0 0 0 rgba(15,153,96,0), inset 0 0 0 1px rgba(15,153,96,0.4);\n  box-shadow: 0 0 0 0 rgba(15,153,96,0), 0 0 0 0 rgba(15,153,96,0), inset 0 0 0 1px rgba(15,153,96,0.4);\n}\n.bp3-editable-text.bp3-intent-success.bp3-editable-text-editing::before {\n  -webkit-box-shadow: 0 0 0 1px #0f9960, 0 0 0 3px rgba(15,153,96,0.3), inset 0 1px 1px rgba(16,22,26,0.2);\n  box-shadow: 0 0 0 1px #0f9960, 0 0 0 3px rgba(15,153,96,0.3), inset 0 1px 1px rgba(16,22,26,0.2);\n}\n.bp3-editable-text.bp3-intent-warning .bp3-editable-text-input,\n.bp3-editable-text.bp3-intent-warning .bp3-editable-text-content {\n  color: #d9822b;\n}\n.bp3-editable-text.bp3-intent-warning:hover::before {\n  -webkit-box-shadow: 0 0 0 0 rgba(217,130,43,0), 0 0 0 0 rgba(217,130,43,0), inset 0 0 0 1px rgba(217,130,43,0.4);\n  box-shadow: 0 0 0 0 rgba(217,130,43,0), 0 0 0 0 rgba(217,130,43,0), inset 0 0 0 1px rgba(217,130,43,0.4);\n}\n.bp3-editable-text.bp3-intent-warning.bp3-editable-text-editing::before {\n  -webkit-box-shadow: 0 0 0 1px #d9822b, 0 0 0 3px rgba(217,130,43,0.3), inset 0 1px 1px rgba(16,22,26,0.2);\n  box-shadow: 0 0 0 1px #d9822b, 0 0 0 3px rgba(217,130,43,0.3), inset 0 1px 1px rgba(16,22,26,0.2);\n}\n.bp3-editable-text.bp3-intent-danger .bp3-editable-text-input,\n.bp3-editable-text.bp3-intent-danger .bp3-editable-text-content {\n  color: #db3737;\n}\n.bp3-editable-text.bp3-intent-danger:hover::before {\n  -webkit-box-shadow: 0 0 0 0 rgba(219,55,55,0), 0 0 0 0 rgba(219,55,55,0), inset 0 0 0 1px rgba(219,55,55,0.4);\n  box-shadow: 0 0 0 0 rgba(219,55,55,0), 0 0 0 0 rgba(219,55,55,0), inset 0 0 0 1px rgba(219,55,55,0.4);\n}\n.bp3-editable-text.bp3-intent-danger.bp3-editable-text-editing::before {\n  -webkit-box-shadow: 0 0 0 1px #db3737, 0 0 0 3px rgba(219,55,55,0.3), inset 0 1px 1px rgba(16,22,26,0.2);\n  box-shadow: 0 0 0 1px #db3737, 0 0 0 3px rgba(219,55,55,0.3), inset 0 1px 1px rgba(16,22,26,0.2);\n}\n.bp3-dark .bp3-editable-text:hover::before {\n  -webkit-box-shadow: 0 0 0 0 rgba(19,124,189,0), 0 0 0 0 rgba(19,124,189,0), inset 0 0 0 1px rgba(255,255,255,0.15);\n  box-shadow: 0 0 0 0 rgba(19,124,189,0), 0 0 0 0 rgba(19,124,189,0), inset 0 0 0 1px rgba(255,255,255,0.15);\n}\n.bp3-dark .bp3-editable-text.bp3-editable-text-editing::before {\n  -webkit-box-shadow: 0 0 0 1px #137cbd, 0 0 0 3px rgba(19,124,189,0.3), inset 0 0 0 1px rgba(16,22,26,0.3), inset 0 1px 1px rgba(16,22,26,0.4);\n  box-shadow: 0 0 0 1px #137cbd, 0 0 0 3px rgba(19,124,189,0.3), inset 0 0 0 1px rgba(16,22,26,0.3), inset 0 1px 1px rgba(16,22,26,0.4);\n  background-color: rgba(16,22,26,0.3);\n}\n.bp3-dark .bp3-editable-text.bp3-disabled::before {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n}\n.bp3-dark .bp3-editable-text.bp3-intent-primary .bp3-editable-text-content {\n  color: #48aff0;\n}\n.bp3-dark .bp3-editable-text.bp3-intent-primary:hover::before {\n  -webkit-box-shadow: 0 0 0 0 rgba(72,175,240,0), 0 0 0 0 rgba(72,175,240,0), inset 0 0 0 1px rgba(72,175,240,0.4);\n  box-shadow: 0 0 0 0 rgba(72,175,240,0), 0 0 0 0 rgba(72,175,240,0), inset 0 0 0 1px rgba(72,175,240,0.4);\n}\n.bp3-dark .bp3-editable-text.bp3-intent-primary.bp3-editable-text-editing::before {\n  -webkit-box-shadow: 0 0 0 1px #48aff0, 0 0 0 3px rgba(72,175,240,0.3), inset 0 0 0 1px rgba(16,22,26,0.3), inset 0 1px 1px rgba(16,22,26,0.4);\n  box-shadow: 0 0 0 1px #48aff0, 0 0 0 3px rgba(72,175,240,0.3), inset 0 0 0 1px rgba(16,22,26,0.3), inset 0 1px 1px rgba(16,22,26,0.4);\n}\n.bp3-dark .bp3-editable-text.bp3-intent-success .bp3-editable-text-content {\n  color: #3dcc91;\n}\n.bp3-dark .bp3-editable-text.bp3-intent-success:hover::before {\n  -webkit-box-shadow: 0 0 0 0 rgba(61,204,145,0), 0 0 0 0 rgba(61,204,145,0), inset 0 0 0 1px rgba(61,204,145,0.4);\n  box-shadow: 0 0 0 0 rgba(61,204,145,0), 0 0 0 0 rgba(61,204,145,0), inset 0 0 0 1px rgba(61,204,145,0.4);\n}\n.bp3-dark .bp3-editable-text.bp3-intent-success.bp3-editable-text-editing::before {\n  -webkit-box-shadow: 0 0 0 1px #3dcc91, 0 0 0 3px rgba(61,204,145,0.3), inset 0 0 0 1px rgba(16,22,26,0.3), inset 0 1px 1px rgba(16,22,26,0.4);\n  box-shadow: 0 0 0 1px #3dcc91, 0 0 0 3px rgba(61,204,145,0.3), inset 0 0 0 1px rgba(16,22,26,0.3), inset 0 1px 1px rgba(16,22,26,0.4);\n}\n.bp3-dark .bp3-editable-text.bp3-intent-warning .bp3-editable-text-content {\n  color: #ffb366;\n}\n.bp3-dark .bp3-editable-text.bp3-intent-warning:hover::before {\n  -webkit-box-shadow: 0 0 0 0 rgba(255,179,102,0), 0 0 0 0 rgba(255,179,102,0), inset 0 0 0 1px rgba(255,179,102,0.4);\n  box-shadow: 0 0 0 0 rgba(255,179,102,0), 0 0 0 0 rgba(255,179,102,0), inset 0 0 0 1px rgba(255,179,102,0.4);\n}\n.bp3-dark .bp3-editable-text.bp3-intent-warning.bp3-editable-text-editing::before {\n  -webkit-box-shadow: 0 0 0 1px #ffb366, 0 0 0 3px rgba(255,179,102,0.3), inset 0 0 0 1px rgba(16,22,26,0.3), inset 0 1px 1px rgba(16,22,26,0.4);\n  box-shadow: 0 0 0 1px #ffb366, 0 0 0 3px rgba(255,179,102,0.3), inset 0 0 0 1px rgba(16,22,26,0.3), inset 0 1px 1px rgba(16,22,26,0.4);\n}\n.bp3-dark .bp3-editable-text.bp3-intent-danger .bp3-editable-text-content {\n  color: #ff7373;\n}\n.bp3-dark .bp3-editable-text.bp3-intent-danger:hover::before {\n  -webkit-box-shadow: 0 0 0 0 rgba(255,115,115,0), 0 0 0 0 rgba(255,115,115,0), inset 0 0 0 1px rgba(255,115,115,0.4);\n  box-shadow: 0 0 0 0 rgba(255,115,115,0), 0 0 0 0 rgba(255,115,115,0), inset 0 0 0 1px rgba(255,115,115,0.4);\n}\n.bp3-dark .bp3-editable-text.bp3-intent-danger.bp3-editable-text-editing::before {\n  -webkit-box-shadow: 0 0 0 1px #ff7373, 0 0 0 3px rgba(255,115,115,0.3), inset 0 0 0 1px rgba(16,22,26,0.3), inset 0 1px 1px rgba(16,22,26,0.4);\n  box-shadow: 0 0 0 1px #ff7373, 0 0 0 3px rgba(255,115,115,0.3), inset 0 0 0 1px rgba(16,22,26,0.3), inset 0 1px 1px rgba(16,22,26,0.4);\n}\n.bp3-editable-text-input,\n.bp3-editable-text-content {\n  display: inherit;\n  position: relative;\n  min-width: inherit;\n  max-width: inherit;\n  vertical-align: top;\n  text-transform: inherit;\n  letter-spacing: inherit;\n  color: inherit;\n  font: inherit;\n  resize: none;\n}\n.bp3-editable-text-input {\n  border: none;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  background: none;\n  width: 100%;\n  padding: 0;\n  white-space: pre-wrap;\n}\n.bp3-editable-text-input::-webkit-input-placeholder {\n  opacity: 1;\n  color: rgba(92,112,128,0.5);\n}\n.bp3-editable-text-input:-ms-input-placeholder {\n  opacity: 1;\n  color: rgba(92,112,128,0.5);\n}\n.bp3-editable-text-input::-ms-input-placeholder {\n  opacity: 1;\n  color: rgba(92,112,128,0.5);\n}\n.bp3-editable-text-input::placeholder {\n  opacity: 1;\n  color: rgba(92,112,128,0.5);\n}\n.bp3-editable-text-input:focus {\n  outline: none;\n}\n.bp3-editable-text-input::-ms-clear {\n  display: none;\n}\n.bp3-editable-text-content {\n  overflow: hidden;\n  padding-right: 2px;\n  text-overflow: ellipsis;\n  white-space: pre;\n}\n.bp3-editable-text-editing > .bp3-editable-text-content {\n  position: absolute;\n  left: 0;\n  visibility: hidden;\n}\n.bp3-editable-text-placeholder > .bp3-editable-text-content {\n  color: rgba(92,112,128,0.5);\n}\n.bp3-dark .bp3-editable-text-placeholder > .bp3-editable-text-content {\n  color: rgba(191,204,214,0.5);\n}\n.bp3-editable-text.bp3-multiline {\n  display: block;\n}\n.bp3-editable-text.bp3-multiline .bp3-editable-text-content {\n  overflow: auto;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n}\n.bp3-control-group {\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -webkit-box-align: stretch;\n  -ms-flex-align: stretch;\n  align-items: stretch;\n}\n.bp3-control-group > * {\n  -webkit-box-flex: 0;\n  -ms-flex-positive: 0;\n  flex-grow: 0;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n}\n.bp3-control-group > .bp3-fill {\n  -webkit-box-flex: 1;\n  -ms-flex-positive: 1;\n  flex-grow: 1;\n  -ms-flex-negative: 1;\n  flex-shrink: 1;\n}\n.bp3-control-group .bp3-button,\n.bp3-control-group .bp3-html-select,\n.bp3-control-group .bp3-input,\n.bp3-control-group .bp3-select {\n  position: relative;\n}\n.bp3-control-group .bp3-input {\n  z-index: 2;\n  border-radius: inherit;\n}\n.bp3-control-group .bp3-input:focus {\n  z-index: 14;\n  border-radius: 3px;\n}\n.bp3-control-group .bp3-input[class*="bp3-intent"] {\n  z-index: 13;\n}\n.bp3-control-group .bp3-input[class*="bp3-intent"]:focus {\n  z-index: 15;\n}\n.bp3-control-group .bp3-input[readonly],\n.bp3-control-group .bp3-input:disabled,\n.bp3-control-group .bp3-input.bp3-disabled {\n  z-index: 1;\n}\n.bp3-control-group .bp3-input-group[class*="bp3-intent"] .bp3-input {\n  z-index: 13;\n}\n.bp3-control-group .bp3-input-group[class*="bp3-intent"] .bp3-input:focus {\n  z-index: 15;\n}\n.bp3-control-group .bp3-button,\n.bp3-control-group .bp3-html-select select,\n.bp3-control-group .bp3-select select {\n  z-index: 4;\n  border-radius: inherit;\n}\n.bp3-control-group .bp3-button:focus,\n.bp3-control-group .bp3-html-select select:focus,\n.bp3-control-group .bp3-select select:focus {\n  position: relative;\n  z-index: 5;\n}\n.bp3-control-group .bp3-button:hover,\n.bp3-control-group .bp3-html-select select:hover,\n.bp3-control-group .bp3-select select:hover {\n  z-index: 6;\n}\n.bp3-control-group .bp3-button:active,\n.bp3-control-group .bp3-html-select select:active,\n.bp3-control-group .bp3-select select:active {\n  z-index: 7;\n}\n.bp3-control-group .bp3-button[readonly],\n.bp3-control-group .bp3-button:disabled,\n.bp3-control-group .bp3-button.bp3-disabled,\n.bp3-control-group .bp3-html-select select[readonly],\n.bp3-control-group .bp3-html-select select:disabled,\n.bp3-control-group .bp3-html-select select.bp3-disabled,\n.bp3-control-group .bp3-select select[readonly],\n.bp3-control-group .bp3-select select:disabled,\n.bp3-control-group .bp3-select select.bp3-disabled {\n  z-index: 3;\n}\n.bp3-control-group .bp3-button[class*="bp3-intent"],\n.bp3-control-group .bp3-html-select select[class*="bp3-intent"],\n.bp3-control-group .bp3-select select[class*="bp3-intent"] {\n  z-index: 9;\n}\n.bp3-control-group .bp3-button[class*="bp3-intent"]:focus,\n.bp3-control-group .bp3-html-select select[class*="bp3-intent"]:focus,\n.bp3-control-group .bp3-select select[class*="bp3-intent"]:focus {\n  z-index: 10;\n}\n.bp3-control-group .bp3-button[class*="bp3-intent"]:hover,\n.bp3-control-group .bp3-html-select select[class*="bp3-intent"]:hover,\n.bp3-control-group .bp3-select select[class*="bp3-intent"]:hover {\n  z-index: 11;\n}\n.bp3-control-group .bp3-button[class*="bp3-intent"]:active,\n.bp3-control-group .bp3-html-select select[class*="bp3-intent"]:active,\n.bp3-control-group .bp3-select select[class*="bp3-intent"]:active {\n  z-index: 12;\n}\n.bp3-control-group .bp3-button[class*="bp3-intent"][readonly],\n.bp3-control-group .bp3-button[class*="bp3-intent"]:disabled,\n.bp3-control-group .bp3-button[class*="bp3-intent"].bp3-disabled,\n.bp3-control-group .bp3-html-select select[class*="bp3-intent"][readonly],\n.bp3-control-group .bp3-html-select select[class*="bp3-intent"]:disabled,\n.bp3-control-group .bp3-html-select select[class*="bp3-intent"].bp3-disabled,\n.bp3-control-group .bp3-select select[class*="bp3-intent"][readonly],\n.bp3-control-group .bp3-select select[class*="bp3-intent"]:disabled,\n.bp3-control-group .bp3-select select[class*="bp3-intent"].bp3-disabled {\n  z-index: 8;\n}\n.bp3-control-group .bp3-input-group > .bp3-icon,\n.bp3-control-group .bp3-input-group > .bp3-button,\n.bp3-control-group .bp3-input-group > .bp3-input-action {\n  z-index: 16;\n}\n.bp3-control-group .bp3-select::after {\n  z-index: 17;\n}\n.bp3-control-group:not(.bp3-vertical) > * {\n  margin-right: -1px;\n}\n.bp3-dark .bp3-control-group:not(.bp3-vertical) > * {\n  margin-right: 0;\n}\n.bp3-dark .bp3-control-group:not(.bp3-vertical) > .bp3-button + .bp3-button {\n  margin-left: 1px;\n}\n.bp3-control-group .bp3-popover-wrapper,\n.bp3-control-group .bp3-popover-target {\n  border-radius: inherit;\n}\n.bp3-control-group > :first-child {\n  border-radius: 3px 0 0 3px;\n}\n.bp3-control-group > :last-child {\n  margin-right: 0;\n  border-radius: 0 3px 3px 0;\n}\n.bp3-control-group > :only-child {\n  margin-right: 0;\n  border-radius: 3px;\n}\n.bp3-control-group .bp3-input-group .bp3-button {\n  border-radius: 3px;\n}\n.bp3-control-group > .bp3-fill {\n  -webkit-box-flex: 1;\n  -ms-flex: 1 1 auto;\n  flex: 1 1 auto;\n}\n.bp3-control-group.bp3-fill > *:not(.bp3-fixed) {\n  -webkit-box-flex: 1;\n  -ms-flex: 1 1 auto;\n  flex: 1 1 auto;\n}\n.bp3-control-group.bp3-vertical {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column;\n}\n.bp3-control-group.bp3-vertical > * {\n  margin-top: -1px;\n}\n.bp3-control-group.bp3-vertical > :first-child {\n  margin-top: 0;\n  border-radius: 3px 3px 0 0;\n}\n.bp3-control-group.bp3-vertical > :last-child {\n  border-radius: 0 0 3px 3px;\n}\n.bp3-control {\n  display: block;\n  position: relative;\n  margin-bottom: 10px;\n  cursor: pointer;\n  text-transform: none;\n}\n.bp3-control input:checked ~ .bp3-control-indicator {\n  -webkit-box-shadow: inset 0 0 0 1px rgba(16,22,26,0.4), inset 0 -1px 0 rgba(16,22,26,0.2);\n  box-shadow: inset 0 0 0 1px rgba(16,22,26,0.4), inset 0 -1px 0 rgba(16,22,26,0.2);\n  background-color: #137cbd;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(255,255,255,0.1)), to(rgba(255,255,255,0)));\n  background-image: linear-gradient(to bottom, rgba(255,255,255,0.1), rgba(255,255,255,0));\n  color: #fff;\n}\n.bp3-control:hover input:checked ~ .bp3-control-indicator {\n  -webkit-box-shadow: inset 0 0 0 1px rgba(16,22,26,0.4), inset 0 -1px 0 rgba(16,22,26,0.2);\n  box-shadow: inset 0 0 0 1px rgba(16,22,26,0.4), inset 0 -1px 0 rgba(16,22,26,0.2);\n  background-color: #106ba3;\n}\n.bp3-control input:not(:disabled):active:checked ~ .bp3-control-indicator {\n  -webkit-box-shadow: inset 0 0 0 1px rgba(16,22,26,0.4), inset 0 1px 2px rgba(16,22,26,0.2);\n  box-shadow: inset 0 0 0 1px rgba(16,22,26,0.4), inset 0 1px 2px rgba(16,22,26,0.2);\n  background: #0e5a8a;\n}\n.bp3-control input:disabled:checked ~ .bp3-control-indicator {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  background: rgba(19,124,189,0.5);\n}\n.bp3-dark .bp3-control input:checked ~ .bp3-control-indicator {\n  -webkit-box-shadow: 0 0 0 1px rgba(16,22,26,0.4);\n  box-shadow: 0 0 0 1px rgba(16,22,26,0.4);\n}\n.bp3-dark .bp3-control:hover input:checked ~ .bp3-control-indicator {\n  -webkit-box-shadow: 0 0 0 1px rgba(16,22,26,0.4);\n  box-shadow: 0 0 0 1px rgba(16,22,26,0.4);\n  background-color: #106ba3;\n}\n.bp3-dark .bp3-control input:not(:disabled):active:checked ~ .bp3-control-indicator {\n  -webkit-box-shadow: 0 0 0 1px rgba(16,22,26,0.4), inset 0 1px 2px rgba(16,22,26,0.2);\n  box-shadow: 0 0 0 1px rgba(16,22,26,0.4), inset 0 1px 2px rgba(16,22,26,0.2);\n  background-color: #0e5a8a;\n}\n.bp3-dark .bp3-control input:disabled:checked ~ .bp3-control-indicator {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  background: rgba(14,90,138,0.5);\n}\n.bp3-control:not(.bp3-align-right) {\n  padding-left: 26px;\n}\n.bp3-control:not(.bp3-align-right) .bp3-control-indicator {\n  margin-left: -26px;\n}\n.bp3-control.bp3-align-right {\n  padding-right: 26px;\n}\n.bp3-control.bp3-align-right .bp3-control-indicator {\n  margin-right: -26px;\n}\n.bp3-control.bp3-disabled {\n  cursor: not-allowed;\n  color: rgba(92,112,128,0.5);\n}\n.bp3-control.bp3-inline {\n  display: inline-block;\n  margin-right: 20px;\n}\n.bp3-control input {\n  position: absolute;\n  top: 0;\n  left: 0;\n  opacity: 0;\n  z-index: -1;\n}\n.bp3-control .bp3-control-indicator {\n  display: inline-block;\n  position: relative;\n  margin-top: -3px;\n  margin-right: 10px;\n  border: none;\n  -webkit-box-shadow: inset 0 0 0 1px rgba(16,22,26,0.2), inset 0 -1px 0 rgba(16,22,26,0.1);\n  box-shadow: inset 0 0 0 1px rgba(16,22,26,0.2), inset 0 -1px 0 rgba(16,22,26,0.1);\n  background-clip: padding-box;\n  background-color: #f5f8fa;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(255,255,255,0.8)), to(rgba(255,255,255,0)));\n  background-image: linear-gradient(to bottom, rgba(255,255,255,0.8), rgba(255,255,255,0));\n  cursor: pointer;\n  width: 1em;\n  height: 1em;\n  vertical-align: middle;\n  font-size: 16px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.bp3-control .bp3-control-indicator::before {\n  display: inline-block;\n  width: 1em;\n  height: 1em;\n  content: "";\n}\n.bp3-control:hover .bp3-control-indicator {\n  background-color: #ebf1f5;\n}\n.bp3-control input:not(:disabled):active ~ .bp3-control-indicator {\n  -webkit-box-shadow: inset 0 0 0 1px rgba(16,22,26,0.2), inset 0 1px 2px rgba(16,22,26,0.2);\n  box-shadow: inset 0 0 0 1px rgba(16,22,26,0.2), inset 0 1px 2px rgba(16,22,26,0.2);\n  background: #d8e1e8;\n}\n.bp3-control input:disabled ~ .bp3-control-indicator {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  background: rgba(206,217,224,0.5);\n  cursor: not-allowed;\n}\n.bp3-control input:focus ~ .bp3-control-indicator {\n  outline: rgba(19,124,189,0.6) auto 2px;\n  outline-offset: 2px;\n  -moz-outline-radius: 6px;\n}\n.bp3-control.bp3-align-right .bp3-control-indicator {\n  float: right;\n  margin-top: 1px;\n  margin-left: 10px;\n}\n.bp3-control.bp3-large {\n  font-size: 16px;\n}\n.bp3-control.bp3-large:not(.bp3-align-right) {\n  padding-left: 30px;\n}\n.bp3-control.bp3-large:not(.bp3-align-right) .bp3-control-indicator {\n  margin-left: -30px;\n}\n.bp3-control.bp3-large.bp3-align-right {\n  padding-right: 30px;\n}\n.bp3-control.bp3-large.bp3-align-right .bp3-control-indicator {\n  margin-right: -30px;\n}\n.bp3-control.bp3-large .bp3-control-indicator {\n  font-size: 20px;\n}\n.bp3-control.bp3-large.bp3-align-right .bp3-control-indicator {\n  margin-top: 0;\n}\n.bp3-control.bp3-checkbox input:indeterminate ~ .bp3-control-indicator {\n  -webkit-box-shadow: inset 0 0 0 1px rgba(16,22,26,0.4), inset 0 -1px 0 rgba(16,22,26,0.2);\n  box-shadow: inset 0 0 0 1px rgba(16,22,26,0.4), inset 0 -1px 0 rgba(16,22,26,0.2);\n  background-color: #137cbd;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(255,255,255,0.1)), to(rgba(255,255,255,0)));\n  background-image: linear-gradient(to bottom, rgba(255,255,255,0.1), rgba(255,255,255,0));\n  color: #fff;\n}\n.bp3-control.bp3-checkbox:hover input:indeterminate ~ .bp3-control-indicator {\n  -webkit-box-shadow: inset 0 0 0 1px rgba(16,22,26,0.4), inset 0 -1px 0 rgba(16,22,26,0.2);\n  box-shadow: inset 0 0 0 1px rgba(16,22,26,0.4), inset 0 -1px 0 rgba(16,22,26,0.2);\n  background-color: #106ba3;\n}\n.bp3-control.bp3-checkbox input:not(:disabled):active:indeterminate ~ .bp3-control-indicator {\n  -webkit-box-shadow: inset 0 0 0 1px rgba(16,22,26,0.4), inset 0 1px 2px rgba(16,22,26,0.2);\n  box-shadow: inset 0 0 0 1px rgba(16,22,26,0.4), inset 0 1px 2px rgba(16,22,26,0.2);\n  background: #0e5a8a;\n}\n.bp3-control.bp3-checkbox input:disabled:indeterminate ~ .bp3-control-indicator {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  background: rgba(19,124,189,0.5);\n}\n.bp3-dark .bp3-control.bp3-checkbox input:indeterminate ~ .bp3-control-indicator {\n  -webkit-box-shadow: 0 0 0 1px rgba(16,22,26,0.4);\n  box-shadow: 0 0 0 1px rgba(16,22,26,0.4);\n}\n.bp3-dark .bp3-control.bp3-checkbox:hover input:indeterminate ~ .bp3-control-indicator {\n  -webkit-box-shadow: 0 0 0 1px rgba(16,22,26,0.4);\n  box-shadow: 0 0 0 1px rgba(16,22,26,0.4);\n  background-color: #106ba3;\n}\n.bp3-dark .bp3-control.bp3-checkbox input:not(:disabled):active:indeterminate ~ .bp3-control-indicator {\n  -webkit-box-shadow: 0 0 0 1px rgba(16,22,26,0.4), inset 0 1px 2px rgba(16,22,26,0.2);\n  box-shadow: 0 0 0 1px rgba(16,22,26,0.4), inset 0 1px 2px rgba(16,22,26,0.2);\n  background-color: #0e5a8a;\n}\n.bp3-dark .bp3-control.bp3-checkbox input:disabled:indeterminate ~ .bp3-control-indicator {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  background: rgba(14,90,138,0.5);\n}\n.bp3-control.bp3-checkbox .bp3-control-indicator {\n  border-radius: 3px;\n}\n.bp3-control.bp3-checkbox input:checked ~ .bp3-control-indicator::before {\n  background-image: url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\'%3e%3cpath fill-rule=\'evenodd\' clip-rule=\'evenodd\' d=\'M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 1.003 0 0 0-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0 0 12 5z\' fill=\'rgba(255%2c255%2c255%2c1)\'/%3e%3c/svg%3e");\n}\n.bp3-control.bp3-checkbox input:indeterminate ~ .bp3-control-indicator::before {\n  background-image: url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\'%3e%3cpath fill-rule=\'evenodd\' clip-rule=\'evenodd\' d=\'M11 7H5c-.55 0-1 .45-1 1s.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1z\' fill=\'rgba(255%2c255%2c255%2c1)\'/%3e%3c/svg%3e");\n}\n.bp3-control.bp3-radio .bp3-control-indicator {\n  border-radius: 50%;\n}\n.bp3-control.bp3-radio input:checked ~ .bp3-control-indicator::before {\n  background-image: radial-gradient(#fff, #fff 28%, transparent 32%);\n}\n.bp3-control.bp3-radio input:checked:disabled ~ .bp3-control-indicator::before {\n  opacity: 0.5;\n}\n.bp3-control.bp3-radio input:focus ~ .bp3-control-indicator {\n  -moz-outline-radius: 16px;\n}\n.bp3-control.bp3-switch input ~ .bp3-control-indicator {\n  background: rgba(167,182,194,0.5);\n}\n.bp3-control.bp3-switch:hover input ~ .bp3-control-indicator {\n  background: rgba(115,134,148,0.5);\n}\n.bp3-control.bp3-switch input:not(:disabled):active ~ .bp3-control-indicator {\n  background: rgba(92,112,128,0.5);\n}\n.bp3-control.bp3-switch input:disabled ~ .bp3-control-indicator {\n  background: rgba(206,217,224,0.5);\n}\n.bp3-control.bp3-switch input:checked ~ .bp3-control-indicator {\n  background: #137cbd;\n}\n.bp3-control.bp3-switch:hover input:checked ~ .bp3-control-indicator {\n  background: #106ba3;\n}\n.bp3-control.bp3-switch input:checked:not(:disabled):active ~ .bp3-control-indicator {\n  background: #0e5a8a;\n}\n.bp3-control.bp3-switch input:checked:disabled ~ .bp3-control-indicator {\n  background: rgba(19,124,189,0.5);\n}\n.bp3-control.bp3-switch:not(.bp3-align-right) {\n  padding-left: 38px;\n}\n.bp3-control.bp3-switch:not(.bp3-align-right) .bp3-control-indicator {\n  margin-left: -38px;\n}\n.bp3-control.bp3-switch.bp3-align-right {\n  padding-right: 38px;\n}\n.bp3-control.bp3-switch.bp3-align-right .bp3-control-indicator {\n  margin-right: -38px;\n}\n.bp3-control.bp3-switch .bp3-control-indicator {\n  border: none;\n  border-radius: 1.75em;\n  -webkit-box-shadow: none !important;\n  box-shadow: none !important;\n  width: 1.75em;\n  -webkit-transition: background-color 100ms cubic-bezier(0.4, 1, 0.75, 0.9);\n  transition: background-color 100ms cubic-bezier(0.4, 1, 0.75, 0.9);\n}\n.bp3-control.bp3-switch .bp3-control-indicator::before {\n  position: relative;\n  left: 0;\n  margin: 2px;\n  border-radius: 50%;\n  -webkit-box-shadow: 0 0 0 1px rgba(16,22,26,0.2), 0 1px 1px rgba(16,22,26,0.2);\n  box-shadow: 0 0 0 1px rgba(16,22,26,0.2), 0 1px 1px rgba(16,22,26,0.2);\n  background: #fff;\n  width: calc(1em - 4px);\n  height: calc(1em - 4px);\n  -webkit-transition: left 100ms cubic-bezier(0.4, 1, 0.75, 0.9);\n  transition: left 100ms cubic-bezier(0.4, 1, 0.75, 0.9);\n}\n.bp3-control.bp3-switch input:checked ~ .bp3-control-indicator::before {\n  left: 0.75em;\n}\n.bp3-control.bp3-switch.bp3-large:not(.bp3-align-right) {\n  padding-left: 45px;\n}\n.bp3-control.bp3-switch.bp3-large:not(.bp3-align-right) .bp3-control-indicator {\n  margin-left: -45px;\n}\n.bp3-control.bp3-switch.bp3-large.bp3-align-right {\n  padding-right: 45px;\n}\n.bp3-control.bp3-switch.bp3-large.bp3-align-right .bp3-control-indicator {\n  margin-right: -45px;\n}\n.bp3-dark .bp3-control.bp3-switch input ~ .bp3-control-indicator {\n  background: rgba(167,182,194,0.5);\n}\n.bp3-dark .bp3-control.bp3-switch:hover input ~ .bp3-control-indicator {\n  background: rgba(115,134,148,0.5);\n}\n.bp3-dark .bp3-control.bp3-switch input:not(:disabled):active ~ .bp3-control-indicator {\n  background: rgba(92,112,128,0.5);\n}\n.bp3-dark .bp3-control.bp3-switch input:disabled ~ .bp3-control-indicator {\n  background: rgba(206,217,224,0.5);\n}\n.bp3-dark .bp3-control.bp3-switch input:checked ~ .bp3-control-indicator {\n  background: #137cbd;\n}\n.bp3-dark .bp3-control.bp3-switch:hover input:checked ~ .bp3-control-indicator {\n  background: #106ba3;\n}\n.bp3-dark .bp3-control.bp3-switch input:checked:not(:disabled):active ~ .bp3-control-indicator {\n  background: #0e5a8a;\n}\n.bp3-dark .bp3-control.bp3-switch input:checked:disabled ~ .bp3-control-indicator {\n  background: rgba(19,124,189,0.5);\n}\n.bp3-dark .bp3-control.bp3-switch .bp3-control-indicator::before {\n  -webkit-box-shadow: 0 0 0 1px rgba(16,22,26,0.4);\n  box-shadow: 0 0 0 1px rgba(16,22,26,0.4);\n  background: #394b59;\n}\n.bp3-dark .bp3-control.bp3-switch input:checked ~ .bp3-control-indicator::before {\n  -webkit-box-shadow: inset 0 0 0 1px rgba(16,22,26,0.4);\n  box-shadow: inset 0 0 0 1px rgba(16,22,26,0.4);\n}\n.bp3-dark .bp3-control {\n  color: #f5f8fa;\n}\n.bp3-dark .bp3-control.bp3-disabled {\n  color: rgba(191,204,214,0.5);\n}\n.bp3-dark .bp3-control .bp3-control-indicator {\n  -webkit-box-shadow: 0 0 0 1px rgba(16,22,26,0.4);\n  box-shadow: 0 0 0 1px rgba(16,22,26,0.4);\n  background-color: #394b59;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(255,255,255,0.05)), to(rgba(255,255,255,0)));\n  background-image: linear-gradient(to bottom, rgba(255,255,255,0.05), rgba(255,255,255,0));\n}\n.bp3-dark .bp3-control:hover .bp3-control-indicator {\n  background-color: #30404d;\n}\n.bp3-dark .bp3-control input:not(:disabled):active ~ .bp3-control-indicator {\n  -webkit-box-shadow: 0 0 0 1px rgba(16,22,26,0.6), inset 0 1px 2px rgba(16,22,26,0.2);\n  box-shadow: 0 0 0 1px rgba(16,22,26,0.6), inset 0 1px 2px rgba(16,22,26,0.2);\n  background: #202b33;\n}\n.bp3-dark .bp3-control input:disabled ~ .bp3-control-indicator {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  background: rgba(57,75,89,0.5);\n  cursor: not-allowed;\n}\n.bp3-dark .bp3-control.bp3-checkbox input:disabled:checked ~ .bp3-control-indicator,\n.bp3-dark .bp3-control.bp3-checkbox input:disabled:indeterminate ~ .bp3-control-indicator {\n  color: rgba(191,204,214,0.5);\n}\n.bp3-file-input {\n  display: inline-block;\n  position: relative;\n  cursor: pointer;\n  height: 30px;\n}\n.bp3-file-input input {\n  opacity: 0;\n  margin: 0;\n  min-width: 200px;\n}\n.bp3-file-input input:disabled + .bp3-file-upload-input,\n.bp3-file-input input.bp3-disabled + .bp3-file-upload-input {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  background: rgba(206,217,224,0.5);\n  cursor: not-allowed;\n  color: rgba(92,112,128,0.5);\n  resize: none;\n}\n.bp3-file-input input:disabled + .bp3-file-upload-input::after,\n.bp3-file-input input.bp3-disabled + .bp3-file-upload-input::after {\n  outline: none;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  background-color: rgba(206,217,224,0.5);\n  background-image: none;\n  cursor: not-allowed;\n  color: rgba(92,112,128,0.5);\n}\n.bp3-file-input input:disabled + .bp3-file-upload-input::after.bp3-active,\n.bp3-file-input input:disabled + .bp3-file-upload-input::after.bp3-active:hover,\n.bp3-file-input input.bp3-disabled + .bp3-file-upload-input::after.bp3-active,\n.bp3-file-input input.bp3-disabled + .bp3-file-upload-input::after.bp3-active:hover {\n  background: rgba(206,217,224,0.7);\n}\n.bp3-dark .bp3-file-input input:disabled + .bp3-file-upload-input,\n.bp3-dark,\n.bp3-file-input input.bp3-disabled + .bp3-file-upload-input {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  background: rgba(57,75,89,0.5);\n  color: rgba(191,204,214,0.5);\n}\n.bp3-dark .bp3-file-input input:disabled + .bp3-file-upload-input::after,\n.bp3-dark,\n.bp3-file-input input.bp3-disabled + .bp3-file-upload-input::after {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  background-color: rgba(57,75,89,0.5);\n  background-image: none;\n  color: rgba(191,204,214,0.5);\n}\n.bp3-dark .bp3-file-input input:disabled + .bp3-file-upload-input::after.bp3-active,\n.bp3-dark,\n.bp3-file-input input.bp3-disabled + .bp3-file-upload-input::after.bp3-active {\n  background: rgba(57,75,89,0.7);\n}\n.bp3-file-input.bp3-fill {\n  width: 100%;\n}\n.bp3-file-input.bp3-large,\n.bp3-large .bp3-file-input {\n  height: 40px;\n}\n.bp3-file-upload-input {\n  outline: none;\n  border: none;\n  border-radius: 3px;\n  -webkit-box-shadow: 0 0 0 0 rgba(19,124,189,0), 0 0 0 0 rgba(19,124,189,0), inset 0 0 0 1px rgba(16,22,26,0.15), inset 0 1px 1px rgba(16,22,26,0.2);\n  box-shadow: 0 0 0 0 rgba(19,124,189,0), 0 0 0 0 rgba(19,124,189,0), inset 0 0 0 1px rgba(16,22,26,0.15), inset 0 1px 1px rgba(16,22,26,0.2);\n  background: #fff;\n  height: 30px;\n  padding: 0 10px;\n  vertical-align: middle;\n  line-height: 30px;\n  color: #182026;\n  font-size: 14px;\n  font-weight: 400;\n  -webkit-transition: -webkit-box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9);\n  transition: -webkit-box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9);\n  transition: box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9);\n  transition: box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9), -webkit-box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9);\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  word-wrap: normal;\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  padding-right: 80px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.bp3-file-upload-input::-webkit-input-placeholder {\n  opacity: 1;\n  color: rgba(92,112,128,0.5);\n}\n.bp3-file-upload-input:-ms-input-placeholder {\n  opacity: 1;\n  color: rgba(92,112,128,0.5);\n}\n.bp3-file-upload-input::-ms-input-placeholder {\n  opacity: 1;\n  color: rgba(92,112,128,0.5);\n}\n.bp3-file-upload-input::placeholder {\n  opacity: 1;\n  color: rgba(92,112,128,0.5);\n}\n.bp3-file-upload-input:focus,\n.bp3-file-upload-input.bp3-active {\n  -webkit-box-shadow: 0 0 0 1px #137cbd, 0 0 0 3px rgba(19,124,189,0.3), inset 0 1px 1px rgba(16,22,26,0.2);\n  box-shadow: 0 0 0 1px #137cbd, 0 0 0 3px rgba(19,124,189,0.3), inset 0 1px 1px rgba(16,22,26,0.2);\n}\n.bp3-file-upload-input[type="search"],\n.bp3-file-upload-input.bp3-round {\n  border-radius: 30px;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  padding-left: 10px;\n}\n.bp3-file-upload-input[readonly] {\n  -webkit-box-shadow: inset 0 0 0 1px rgba(16,22,26,0.15);\n  box-shadow: inset 0 0 0 1px rgba(16,22,26,0.15);\n}\n.bp3-file-upload-input:disabled,\n.bp3-file-upload-input.bp3-disabled {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  background: rgba(206,217,224,0.5);\n  cursor: not-allowed;\n  color: rgba(92,112,128,0.5);\n  resize: none;\n}\n.bp3-file-upload-input::after {\n  -webkit-box-shadow: inset 0 0 0 1px rgba(16,22,26,0.2), inset 0 -1px 0 rgba(16,22,26,0.1);\n  box-shadow: inset 0 0 0 1px rgba(16,22,26,0.2), inset 0 -1px 0 rgba(16,22,26,0.1);\n  background-color: #f5f8fa;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(255,255,255,0.8)), to(rgba(255,255,255,0)));\n  background-image: linear-gradient(to bottom, rgba(255,255,255,0.8), rgba(255,255,255,0));\n  color: #182026;\n  min-width: 24px;\n  min-height: 24px;\n  position: absolute;\n  top: 0;\n  right: 0;\n  margin: 3px;\n  border-radius: 3px;\n  width: 70px;\n  text-align: center;\n  line-height: 24px;\n  content: "Browse";\n}\n.bp3-file-upload-input::after:hover {\n  -webkit-box-shadow: inset 0 0 0 1px rgba(16,22,26,0.2), inset 0 -1px 0 rgba(16,22,26,0.1);\n  box-shadow: inset 0 0 0 1px rgba(16,22,26,0.2), inset 0 -1px 0 rgba(16,22,26,0.1);\n  background-clip: padding-box;\n  background-color: #ebf1f5;\n}\n.bp3-file-upload-input::after:active,\n.bp3-file-upload-input::after.bp3-active {\n  -webkit-box-shadow: inset 0 0 0 1px rgba(16,22,26,0.2), inset 0 1px 2px rgba(16,22,26,0.2);\n  box-shadow: inset 0 0 0 1px rgba(16,22,26,0.2), inset 0 1px 2px rgba(16,22,26,0.2);\n  background-color: #d8e1e8;\n  background-image: none;\n}\n.bp3-file-upload-input::after:disabled,\n.bp3-file-upload-input::after.bp3-disabled {\n  outline: none;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  background-color: rgba(206,217,224,0.5);\n  background-image: none;\n  cursor: not-allowed;\n  color: rgba(92,112,128,0.5);\n}\n.bp3-file-upload-input::after:disabled.bp3-active,\n.bp3-file-upload-input::after:disabled.bp3-active:hover,\n.bp3-file-upload-input::after.bp3-disabled.bp3-active,\n.bp3-file-upload-input::after.bp3-disabled.bp3-active:hover {\n  background: rgba(206,217,224,0.7);\n}\n.bp3-file-upload-input:hover::after {\n  -webkit-box-shadow: inset 0 0 0 1px rgba(16,22,26,0.2), inset 0 -1px 0 rgba(16,22,26,0.1);\n  box-shadow: inset 0 0 0 1px rgba(16,22,26,0.2), inset 0 -1px 0 rgba(16,22,26,0.1);\n  background-clip: padding-box;\n  background-color: #ebf1f5;\n}\n.bp3-file-upload-input:active::after {\n  -webkit-box-shadow: inset 0 0 0 1px rgba(16,22,26,0.2), inset 0 1px 2px rgba(16,22,26,0.2);\n  box-shadow: inset 0 0 0 1px rgba(16,22,26,0.2), inset 0 1px 2px rgba(16,22,26,0.2);\n  background-color: #d8e1e8;\n  background-image: none;\n}\n.bp3-large .bp3-file-upload-input {\n  height: 40px;\n  line-height: 40px;\n  font-size: 16px;\n  padding-right: 95px;\n}\n.bp3-large .bp3-file-upload-input[type="search"],\n.bp3-large .bp3-file-upload-input.bp3-round {\n  padding: 0 15px;\n}\n.bp3-large .bp3-file-upload-input::after {\n  min-width: 30px;\n  min-height: 30px;\n  margin: 5px;\n  width: 85px;\n  line-height: 30px;\n}\n.bp3-dark .bp3-file-upload-input {\n  -webkit-box-shadow: 0 0 0 0 rgba(19,124,189,0), 0 0 0 0 rgba(19,124,189,0), 0 0 0 0 rgba(19,124,189,0), inset 0 0 0 1px rgba(16,22,26,0.3), inset 0 1px 1px rgba(16,22,26,0.4);\n  box-shadow: 0 0 0 0 rgba(19,124,189,0), 0 0 0 0 rgba(19,124,189,0), 0 0 0 0 rgba(19,124,189,0), inset 0 0 0 1px rgba(16,22,26,0.3), inset 0 1px 1px rgba(16,22,26,0.4);\n  background: rgba(16,22,26,0.3);\n  color: #f5f8fa;\n  color: #bfccd6;\n}\n.bp3-dark .bp3-file-upload-input::-webkit-input-placeholder {\n  color: rgba(191,204,214,0.5);\n}\n.bp3-dark .bp3-file-upload-input:-ms-input-placeholder {\n  color: rgba(191,204,214,0.5);\n}\n.bp3-dark .bp3-file-upload-input::-ms-input-placeholder {\n  color: rgba(191,204,214,0.5);\n}\n.bp3-dark .bp3-file-upload-input::placeholder {\n  color: rgba(191,204,214,0.5);\n}\n.bp3-dark .bp3-file-upload-input:focus {\n  -webkit-box-shadow: 0 0 0 1px #137cbd, 0 0 0 1px #137cbd, 0 0 0 3px rgba(19,124,189,0.3), inset 0 0 0 1px rgba(16,22,26,0.3), inset 0 1px 1px rgba(16,22,26,0.4);\n  box-shadow: 0 0 0 1px #137cbd, 0 0 0 1px #137cbd, 0 0 0 3px rgba(19,124,189,0.3), inset 0 0 0 1px rgba(16,22,26,0.3), inset 0 1px 1px rgba(16,22,26,0.4);\n}\n.bp3-dark .bp3-file-upload-input[readonly] {\n  -webkit-box-shadow: inset 0 0 0 1px rgba(16,22,26,0.4);\n  box-shadow: inset 0 0 0 1px rgba(16,22,26,0.4);\n}\n.bp3-dark .bp3-file-upload-input:disabled,\n.bp3-dark .bp3-file-upload-input.bp3-disabled {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  background: rgba(57,75,89,0.5);\n  color: rgba(191,204,214,0.5);\n}\n.bp3-dark .bp3-file-upload-input::after {\n  -webkit-box-shadow: 0 0 0 1px rgba(16,22,26,0.4);\n  box-shadow: 0 0 0 1px rgba(16,22,26,0.4);\n  background-color: #394b59;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(255,255,255,0.05)), to(rgba(255,255,255,0)));\n  background-image: linear-gradient(to bottom, rgba(255,255,255,0.05), rgba(255,255,255,0));\n  color: #f5f8fa;\n}\n.bp3-dark .bp3-file-upload-input::after:hover,\n.bp3-dark .bp3-file-upload-input::after:active,\n.bp3-dark .bp3-file-upload-input::after.bp3-active {\n  color: #f5f8fa;\n}\n.bp3-dark .bp3-file-upload-input::after:hover {\n  -webkit-box-shadow: 0 0 0 1px rgba(16,22,26,0.4);\n  box-shadow: 0 0 0 1px rgba(16,22,26,0.4);\n  background-color: #30404d;\n}\n.bp3-dark .bp3-file-upload-input::after:active,\n.bp3-dark .bp3-file-upload-input::after.bp3-active {\n  -webkit-box-shadow: 0 0 0 1px rgba(16,22,26,0.6), inset 0 1px 2px rgba(16,22,26,0.2);\n  box-shadow: 0 0 0 1px rgba(16,22,26,0.6), inset 0 1px 2px rgba(16,22,26,0.2);\n  background-color: #202b33;\n  background-image: none;\n}\n.bp3-dark .bp3-file-upload-input::after:disabled,\n.bp3-dark .bp3-file-upload-input::after.bp3-disabled {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  background-color: rgba(57,75,89,0.5);\n  background-image: none;\n  color: rgba(191,204,214,0.5);\n}\n.bp3-dark .bp3-file-upload-input::after:disabled.bp3-active,\n.bp3-dark .bp3-file-upload-input::after.bp3-disabled.bp3-active {\n  background: rgba(57,75,89,0.7);\n}\n.bp3-dark .bp3-file-upload-input::after .bp3-button-spinner .bp3-spinner-head {\n  background: rgba(16,22,26,0.5);\n  stroke: #8a9ba8;\n}\n.bp3-dark .bp3-file-upload-input:hover::after {\n  -webkit-box-shadow: 0 0 0 1px rgba(16,22,26,0.4);\n  box-shadow: 0 0 0 1px rgba(16,22,26,0.4);\n  background-color: #30404d;\n}\n.bp3-dark .bp3-file-upload-input:active::after {\n  -webkit-box-shadow: 0 0 0 1px rgba(16,22,26,0.6), inset 0 1px 2px rgba(16,22,26,0.2);\n  box-shadow: 0 0 0 1px rgba(16,22,26,0.6), inset 0 1px 2px rgba(16,22,26,0.2);\n  background-color: #202b33;\n  background-image: none;\n}\n.bp3-file-upload-input::after {\n  -webkit-box-shadow: inset 0 0 0 1px rgba(16,22,26,0.2), inset 0 -1px 0 rgba(16,22,26,0.1);\n  box-shadow: inset 0 0 0 1px rgba(16,22,26,0.2), inset 0 -1px 0 rgba(16,22,26,0.1);\n}\n.bp3-form-group {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  margin: 0 0 15px;\n}\n.bp3-form-group label.bp3-label {\n  margin-bottom: 5px;\n}\n.bp3-form-group .bp3-control {\n  margin-top: 7px;\n}\n.bp3-form-group .bp3-form-helper-text {\n  margin-top: 5px;\n  color: #5c7080;\n  font-size: 12px;\n}\n.bp3-form-group.bp3-intent-primary .bp3-form-helper-text {\n  color: #106ba3;\n}\n.bp3-form-group.bp3-intent-success .bp3-form-helper-text {\n  color: #0d8050;\n}\n.bp3-form-group.bp3-intent-warning .bp3-form-helper-text {\n  color: #bf7326;\n}\n.bp3-form-group.bp3-intent-danger .bp3-form-helper-text {\n  color: #c23030;\n}\n.bp3-form-group.bp3-inline {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -webkit-box-align: start;\n  -ms-flex-align: start;\n  align-items: flex-start;\n}\n.bp3-form-group.bp3-inline.bp3-large label.bp3-label {\n  margin: 0 10px 0 0;\n  line-height: 40px;\n}\n.bp3-form-group.bp3-inline label.bp3-label {\n  margin: 0 10px 0 0;\n  line-height: 30px;\n}\n.bp3-form-group.bp3-disabled .bp3-label,\n.bp3-form-group.bp3-disabled .bp3-text-muted,\n.bp3-form-group.bp3-disabled .bp3-form-helper-text {\n  color: rgba(92,112,128,0.5) !important;\n}\n.bp3-dark .bp3-form-group.bp3-intent-primary .bp3-form-helper-text {\n  color: #48aff0;\n}\n.bp3-dark .bp3-form-group.bp3-intent-success .bp3-form-helper-text {\n  color: #3dcc91;\n}\n.bp3-dark .bp3-form-group.bp3-intent-warning .bp3-form-helper-text {\n  color: #ffb366;\n}\n.bp3-dark .bp3-form-group.bp3-intent-danger .bp3-form-helper-text {\n  color: #ff7373;\n}\n.bp3-dark .bp3-form-group .bp3-form-helper-text {\n  color: #bfccd6;\n}\n.bp3-dark .bp3-form-group.bp3-disabled .bp3-label,\n.bp3-dark .bp3-form-group.bp3-disabled .bp3-text-muted,\n.bp3-dark .bp3-form-group.bp3-disabled .bp3-form-helper-text {\n  color: rgba(191,204,214,0.5) !important;\n}\n.bp3-input-group {\n  display: block;\n  position: relative;\n}\n.bp3-input-group .bp3-input {\n  position: relative;\n  width: 100%;\n}\n.bp3-input-group .bp3-input:not(:first-child) {\n  padding-left: 30px;\n}\n.bp3-input-group .bp3-input:not(:last-child) {\n  padding-right: 30px;\n}\n.bp3-input-group .bp3-input-action,\n.bp3-input-group > .bp3-button,\n.bp3-input-group > .bp3-icon {\n  position: absolute;\n  top: 0;\n}\n.bp3-input-group .bp3-input-action:first-child,\n.bp3-input-group > .bp3-button:first-child,\n.bp3-input-group > .bp3-icon:first-child {\n  left: 0;\n}\n.bp3-input-group .bp3-input-action:last-child,\n.bp3-input-group > .bp3-button:last-child,\n.bp3-input-group > .bp3-icon:last-child {\n  right: 0;\n}\n.bp3-input-group .bp3-button {\n  min-width: 24px;\n  min-height: 24px;\n  margin: 3px;\n  padding: 0 7px;\n}\n.bp3-input-group .bp3-button:empty {\n  padding: 0;\n}\n.bp3-input-group > .bp3-icon {\n  line-height: 1;\n  font-family: "Icons16", sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  font-style: normal;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  z-index: 1;\n  color: #5c7080;\n}\n.bp3-input-group > .bp3-icon,\n.bp3-input-group .bp3-input-action > .bp3-spinner {\n  margin: 7px;\n}\n.bp3-input-group .bp3-tag {\n  margin: 5px;\n}\n.bp3-input-group .bp3-input:not(:focus) + .bp3-button.bp3-minimal:not(:hover):not(:focus),\n.bp3-input-group .bp3-input:not(:focus) + .bp3-input-action .bp3-button.bp3-minimal:not(:hover):not(:focus) {\n  color: #5c7080;\n}\n.bp3-dark .bp3-input-group .bp3-input:not(:focus) + .bp3-button.bp3-minimal:not(:hover):not(:focus),\n.bp3-dark,\n.bp3-input-group .bp3-input:not(:focus) + .bp3-input-action .bp3-button.bp3-minimal:not(:hover):not(:focus) {\n  color: #bfccd6;\n}\n.bp3-input-group .bp3-input:not(:focus) + .bp3-button.bp3-minimal:not(:hover):not(:focus) .bp3-icon,\n.bp3-input-group .bp3-input:not(:focus) + .bp3-button.bp3-minimal:not(:hover):not(:focus) .bp3-icon-standard,\n.bp3-input-group .bp3-input:not(:focus) + .bp3-button.bp3-minimal:not(:hover):not(:focus) .bp3-icon-large,\n.bp3-input-group .bp3-input:not(:focus) + .bp3-input-action .bp3-button.bp3-minimal:not(:hover):not(:focus) .bp3-icon,\n.bp3-input-group .bp3-input:not(:focus) + .bp3-input-action .bp3-button.bp3-minimal:not(:hover):not(:focus) .bp3-icon-standard,\n.bp3-input-group .bp3-input:not(:focus) + .bp3-input-action .bp3-button.bp3-minimal:not(:hover):not(:focus) .bp3-icon-large {\n  color: #5c7080;\n}\n.bp3-input-group .bp3-input:not(:focus) + .bp3-button.bp3-minimal:disabled,\n.bp3-input-group .bp3-input:not(:focus) + .bp3-input-action .bp3-button.bp3-minimal:disabled {\n  color: rgba(92,112,128,0.5) !important;\n}\n.bp3-input-group .bp3-input:not(:focus) + .bp3-button.bp3-minimal:disabled .bp3-icon,\n.bp3-input-group .bp3-input:not(:focus) + .bp3-button.bp3-minimal:disabled .bp3-icon-standard,\n.bp3-input-group .bp3-input:not(:focus) + .bp3-button.bp3-minimal:disabled .bp3-icon-large,\n.bp3-input-group .bp3-input:not(:focus) + .bp3-input-action .bp3-button.bp3-minimal:disabled .bp3-icon,\n.bp3-input-group .bp3-input:not(:focus) + .bp3-input-action .bp3-button.bp3-minimal:disabled .bp3-icon-standard,\n.bp3-input-group .bp3-input:not(:focus) + .bp3-input-action .bp3-button.bp3-minimal:disabled .bp3-icon-large {\n  color: rgba(92,112,128,0.5) !important;\n}\n.bp3-input-group.bp3-disabled {\n  cursor: not-allowed;\n}\n.bp3-input-group.bp3-disabled .bp3-icon {\n  color: rgba(92,112,128,0.5);\n}\n.bp3-input-group.bp3-large .bp3-button {\n  min-width: 30px;\n  min-height: 30px;\n  margin: 5px;\n}\n.bp3-input-group.bp3-large > .bp3-icon,\n.bp3-input-group.bp3-large .bp3-input-action > .bp3-spinner {\n  margin: 12px;\n}\n.bp3-input-group.bp3-large .bp3-input {\n  height: 40px;\n  line-height: 40px;\n  font-size: 16px;\n}\n.bp3-input-group.bp3-large .bp3-input[type="search"],\n.bp3-input-group.bp3-large .bp3-input.bp3-round {\n  padding: 0 15px;\n}\n.bp3-input-group.bp3-large .bp3-input:not(:first-child) {\n  padding-left: 40px;\n}\n.bp3-input-group.bp3-large .bp3-input:not(:last-child) {\n  padding-right: 40px;\n}\n.bp3-input-group.bp3-fill {\n  -webkit-box-flex: 1;\n  -ms-flex: 1 1 auto;\n  flex: 1 1 auto;\n  width: 100%;\n}\n.bp3-input-group.bp3-round .bp3-button,\n.bp3-input-group.bp3-round .bp3-input,\n.bp3-input-group.bp3-round .bp3-tag {\n  border-radius: 30px;\n}\n.bp3-dark .bp3-input-group .bp3-icon {\n  color: #bfccd6;\n}\n.bp3-dark .bp3-input-group.bp3-disabled .bp3-icon {\n  color: rgba(191,204,214,0.5);\n}\n.bp3-input-group.bp3-intent-primary .bp3-input {\n  -webkit-box-shadow: 0 0 0 0 rgba(19,124,189,0), 0 0 0 0 rgba(19,124,189,0), inset 0 0 0 1px #137cbd, inset 0 0 0 1px rgba(16,22,26,0.15), inset 0 1px 1px rgba(16,22,26,0.2);\n  box-shadow: 0 0 0 0 rgba(19,124,189,0), 0 0 0 0 rgba(19,124,189,0), inset 0 0 0 1px #137cbd, inset 0 0 0 1px rgba(16,22,26,0.15), inset 0 1px 1px rgba(16,22,26,0.2);\n}\n.bp3-input-group.bp3-intent-primary .bp3-input:focus {\n  -webkit-box-shadow: 0 0 0 1px #137cbd, 0 0 0 3px rgba(19,124,189,0.3), inset 0 1px 1px rgba(16,22,26,0.2);\n  box-shadow: 0 0 0 1px #137cbd, 0 0 0 3px rgba(19,124,189,0.3), inset 0 1px 1px rgba(16,22,26,0.2);\n}\n.bp3-input-group.bp3-intent-primary .bp3-input[readonly] {\n  -webkit-box-shadow: inset 0 0 0 1px #137cbd;\n  box-shadow: inset 0 0 0 1px #137cbd;\n}\n.bp3-input-group.bp3-intent-primary .bp3-input:disabled,\n.bp3-input-group.bp3-intent-primary .bp3-input.bp3-disabled {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n}\n.bp3-input-group.bp3-intent-primary > .bp3-icon {\n  color: #106ba3;\n}\n.bp3-dark .bp3-input-group.bp3-intent-primary > .bp3-icon {\n  color: #48aff0;\n}\n.bp3-input-group.bp3-intent-success .bp3-input {\n  -webkit-box-shadow: 0 0 0 0 rgba(15,153,96,0), 0 0 0 0 rgba(15,153,96,0), inset 0 0 0 1px #0f9960, inset 0 0 0 1px rgba(16,22,26,0.15), inset 0 1px 1px rgba(16,22,26,0.2);\n  box-shadow: 0 0 0 0 rgba(15,153,96,0), 0 0 0 0 rgba(15,153,96,0), inset 0 0 0 1px #0f9960, inset 0 0 0 1px rgba(16,22,26,0.15), inset 0 1px 1px rgba(16,22,26,0.2);\n}\n.bp3-input-group.bp3-intent-success .bp3-input:focus {\n  -webkit-box-shadow: 0 0 0 1px #0f9960, 0 0 0 3px rgba(15,153,96,0.3), inset 0 1px 1px rgba(16,22,26,0.2);\n  box-shadow: 0 0 0 1px #0f9960, 0 0 0 3px rgba(15,153,96,0.3), inset 0 1px 1px rgba(16,22,26,0.2);\n}\n.bp3-input-group.bp3-intent-success .bp3-input[readonly] {\n  -webkit-box-shadow: inset 0 0 0 1px #0f9960;\n  box-shadow: inset 0 0 0 1px #0f9960;\n}\n.bp3-input-group.bp3-intent-success .bp3-input:disabled,\n.bp3-input-group.bp3-intent-success .bp3-input.bp3-disabled {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n}\n.bp3-input-group.bp3-intent-success > .bp3-icon {\n  color: #0d8050;\n}\n.bp3-dark .bp3-input-group.bp3-intent-success > .bp3-icon {\n  color: #3dcc91;\n}\n.bp3-input-group.bp3-intent-warning .bp3-input {\n  -webkit-box-shadow: 0 0 0 0 rgba(217,130,43,0), 0 0 0 0 rgba(217,130,43,0), inset 0 0 0 1px #d9822b, inset 0 0 0 1px rgba(16,22,26,0.15), inset 0 1px 1px rgba(16,22,26,0.2);\n  box-shadow: 0 0 0 0 rgba(217,130,43,0), 0 0 0 0 rgba(217,130,43,0), inset 0 0 0 1px #d9822b, inset 0 0 0 1px rgba(16,22,26,0.15), inset 0 1px 1px rgba(16,22,26,0.2);\n}\n.bp3-input-group.bp3-intent-warning .bp3-input:focus {\n  -webkit-box-shadow: 0 0 0 1px #d9822b, 0 0 0 3px rgba(217,130,43,0.3), inset 0 1px 1px rgba(16,22,26,0.2);\n  box-shadow: 0 0 0 1px #d9822b, 0 0 0 3px rgba(217,130,43,0.3), inset 0 1px 1px rgba(16,22,26,0.2);\n}\n.bp3-input-group.bp3-intent-warning .bp3-input[readonly] {\n  -webkit-box-shadow: inset 0 0 0 1px #d9822b;\n  box-shadow: inset 0 0 0 1px #d9822b;\n}\n.bp3-input-group.bp3-intent-warning .bp3-input:disabled,\n.bp3-input-group.bp3-intent-warning .bp3-input.bp3-disabled {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n}\n.bp3-input-group.bp3-intent-warning > .bp3-icon {\n  color: #bf7326;\n}\n.bp3-dark .bp3-input-group.bp3-intent-warning > .bp3-icon {\n  color: #ffb366;\n}\n.bp3-input-group.bp3-intent-danger .bp3-input {\n  -webkit-box-shadow: 0 0 0 0 rgba(219,55,55,0), 0 0 0 0 rgba(219,55,55,0), inset 0 0 0 1px #db3737, inset 0 0 0 1px rgba(16,22,26,0.15), inset 0 1px 1px rgba(16,22,26,0.2);\n  box-shadow: 0 0 0 0 rgba(219,55,55,0), 0 0 0 0 rgba(219,55,55,0), inset 0 0 0 1px #db3737, inset 0 0 0 1px rgba(16,22,26,0.15), inset 0 1px 1px rgba(16,22,26,0.2);\n}\n.bp3-input-group.bp3-intent-danger .bp3-input:focus {\n  -webkit-box-shadow: 0 0 0 1px #db3737, 0 0 0 3px rgba(219,55,55,0.3), inset 0 1px 1px rgba(16,22,26,0.2);\n  box-shadow: 0 0 0 1px #db3737, 0 0 0 3px rgba(219,55,55,0.3), inset 0 1px 1px rgba(16,22,26,0.2);\n}\n.bp3-input-group.bp3-intent-danger .bp3-input[readonly] {\n  -webkit-box-shadow: inset 0 0 0 1px #db3737;\n  box-shadow: inset 0 0 0 1px #db3737;\n}\n.bp3-input-group.bp3-intent-danger .bp3-input:disabled,\n.bp3-input-group.bp3-intent-danger .bp3-input.bp3-disabled {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n}\n.bp3-input-group.bp3-intent-danger > .bp3-icon {\n  color: #c23030;\n}\n.bp3-dark .bp3-input-group.bp3-intent-danger > .bp3-icon {\n  color: #ff7373;\n}\n.bp3-input {\n  outline: none;\n  border: none;\n  border-radius: 3px;\n  -webkit-box-shadow: 0 0 0 0 rgba(19,124,189,0), 0 0 0 0 rgba(19,124,189,0), inset 0 0 0 1px rgba(16,22,26,0.15), inset 0 1px 1px rgba(16,22,26,0.2);\n  box-shadow: 0 0 0 0 rgba(19,124,189,0), 0 0 0 0 rgba(19,124,189,0), inset 0 0 0 1px rgba(16,22,26,0.15), inset 0 1px 1px rgba(16,22,26,0.2);\n  background: #fff;\n  height: 30px;\n  padding: 0 10px;\n  vertical-align: middle;\n  line-height: 30px;\n  color: #182026;\n  font-size: 14px;\n  font-weight: 400;\n  -webkit-transition: -webkit-box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9);\n  transition: -webkit-box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9);\n  transition: box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9);\n  transition: box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9), -webkit-box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9);\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n.bp3-input::-webkit-input-placeholder {\n  opacity: 1;\n  color: rgba(92,112,128,0.5);\n}\n.bp3-input:-ms-input-placeholder {\n  opacity: 1;\n  color: rgba(92,112,128,0.5);\n}\n.bp3-input::-ms-input-placeholder {\n  opacity: 1;\n  color: rgba(92,112,128,0.5);\n}\n.bp3-input::placeholder {\n  opacity: 1;\n  color: rgba(92,112,128,0.5);\n}\n.bp3-input:focus,\n.bp3-input.bp3-active {\n  -webkit-box-shadow: 0 0 0 1px #137cbd, 0 0 0 3px rgba(19,124,189,0.3), inset 0 1px 1px rgba(16,22,26,0.2);\n  box-shadow: 0 0 0 1px #137cbd, 0 0 0 3px rgba(19,124,189,0.3), inset 0 1px 1px rgba(16,22,26,0.2);\n}\n.bp3-input[type="search"],\n.bp3-input.bp3-round {\n  border-radius: 30px;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  padding-left: 10px;\n}\n.bp3-input[readonly] {\n  -webkit-box-shadow: inset 0 0 0 1px rgba(16,22,26,0.15);\n  box-shadow: inset 0 0 0 1px rgba(16,22,26,0.15);\n}\n.bp3-input:disabled,\n.bp3-input.bp3-disabled {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  background: rgba(206,217,224,0.5);\n  cursor: not-allowed;\n  color: rgba(92,112,128,0.5);\n  resize: none;\n}\n.bp3-input.bp3-large {\n  height: 40px;\n  line-height: 40px;\n  font-size: 16px;\n}\n.bp3-input.bp3-large[type="search"],\n.bp3-input.bp3-large.bp3-round {\n  padding: 0 15px;\n}\n.bp3-input.bp3-fill {\n  -webkit-box-flex: 1;\n  -ms-flex: 1 1 auto;\n  flex: 1 1 auto;\n  width: 100%;\n}\n.bp3-dark .bp3-input {\n  -webkit-box-shadow: 0 0 0 0 rgba(19,124,189,0), 0 0 0 0 rgba(19,124,189,0), 0 0 0 0 rgba(19,124,189,0), inset 0 0 0 1px rgba(16,22,26,0.3), inset 0 1px 1px rgba(16,22,26,0.4);\n  box-shadow: 0 0 0 0 rgba(19,124,189,0), 0 0 0 0 rgba(19,124,189,0), 0 0 0 0 rgba(19,124,189,0), inset 0 0 0 1px rgba(16,22,26,0.3), inset 0 1px 1px rgba(16,22,26,0.4);\n  background: rgba(16,22,26,0.3);\n  color: #f5f8fa;\n}\n.bp3-dark .bp3-input::-webkit-input-placeholder {\n  color: rgba(191,204,214,0.5);\n}\n.bp3-dark .bp3-input:-ms-input-placeholder {\n  color: rgba(191,204,214,0.5);\n}\n.bp3-dark .bp3-input::-ms-input-placeholder {\n  color: rgba(191,204,214,0.5);\n}\n.bp3-dark .bp3-input::placeholder {\n  color: rgba(191,204,214,0.5);\n}\n.bp3-dark .bp3-input:focus {\n  -webkit-box-shadow: 0 0 0 1px #137cbd, 0 0 0 1px #137cbd, 0 0 0 3px rgba(19,124,189,0.3), inset 0 0 0 1px rgba(16,22,26,0.3), inset 0 1px 1px rgba(16,22,26,0.4);\n  box-shadow: 0 0 0 1px #137cbd, 0 0 0 1px #137cbd, 0 0 0 3px rgba(19,124,189,0.3), inset 0 0 0 1px rgba(16,22,26,0.3), inset 0 1px 1px rgba(16,22,26,0.4);\n}\n.bp3-dark .bp3-input[readonly] {\n  -webkit-box-shadow: inset 0 0 0 1px rgba(16,22,26,0.4);\n  box-shadow: inset 0 0 0 1px rgba(16,22,26,0.4);\n}\n.bp3-dark .bp3-input:disabled,\n.bp3-dark .bp3-input.bp3-disabled {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  background: rgba(57,75,89,0.5);\n  color: rgba(191,204,214,0.5);\n}\n.bp3-input.bp3-intent-primary {\n  -webkit-box-shadow: 0 0 0 0 rgba(19,124,189,0), 0 0 0 0 rgba(19,124,189,0), inset 0 0 0 1px #137cbd, inset 0 0 0 1px rgba(16,22,26,0.15), inset 0 1px 1px rgba(16,22,26,0.2);\n  box-shadow: 0 0 0 0 rgba(19,124,189,0), 0 0 0 0 rgba(19,124,189,0), inset 0 0 0 1px #137cbd, inset 0 0 0 1px rgba(16,22,26,0.15), inset 0 1px 1px rgba(16,22,26,0.2);\n}\n.bp3-input.bp3-intent-primary:focus {\n  -webkit-box-shadow: 0 0 0 1px #137cbd, 0 0 0 3px rgba(19,124,189,0.3), inset 0 1px 1px rgba(16,22,26,0.2);\n  box-shadow: 0 0 0 1px #137cbd, 0 0 0 3px rgba(19,124,189,0.3), inset 0 1px 1px rgba(16,22,26,0.2);\n}\n.bp3-input.bp3-intent-primary[readonly] {\n  -webkit-box-shadow: inset 0 0 0 1px #137cbd;\n  box-shadow: inset 0 0 0 1px #137cbd;\n}\n.bp3-input.bp3-intent-primary:disabled,\n.bp3-input.bp3-intent-primary.bp3-disabled {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n}\n.bp3-dark .bp3-input.bp3-intent-primary {\n  -webkit-box-shadow: 0 0 0 0 rgba(19,124,189,0), 0 0 0 0 rgba(19,124,189,0), 0 0 0 0 rgba(19,124,189,0), inset 0 0 0 1px #137cbd, inset 0 0 0 1px rgba(16,22,26,0.3), inset 0 1px 1px rgba(16,22,26,0.4);\n  box-shadow: 0 0 0 0 rgba(19,124,189,0), 0 0 0 0 rgba(19,124,189,0), 0 0 0 0 rgba(19,124,189,0), inset 0 0 0 1px #137cbd, inset 0 0 0 1px rgba(16,22,26,0.3), inset 0 1px 1px rgba(16,22,26,0.4);\n}\n.bp3-dark .bp3-input.bp3-intent-primary:focus {\n  -webkit-box-shadow: 0 0 0 1px #137cbd, 0 0 0 1px #137cbd, 0 0 0 3px rgba(19,124,189,0.3), inset 0 0 0 1px rgba(16,22,26,0.3), inset 0 1px 1px rgba(16,22,26,0.4);\n  box-shadow: 0 0 0 1px #137cbd, 0 0 0 1px #137cbd, 0 0 0 3px rgba(19,124,189,0.3), inset 0 0 0 1px rgba(16,22,26,0.3), inset 0 1px 1px rgba(16,22,26,0.4);\n}\n.bp3-dark .bp3-input.bp3-intent-primary[readonly] {\n  -webkit-box-shadow: inset 0 0 0 1px #137cbd;\n  box-shadow: inset 0 0 0 1px #137cbd;\n}\n.bp3-dark .bp3-input.bp3-intent-primary:disabled,\n.bp3-dark .bp3-input.bp3-intent-primary.bp3-disabled {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n}\n.bp3-input.bp3-intent-success {\n  -webkit-box-shadow: 0 0 0 0 rgba(15,153,96,0), 0 0 0 0 rgba(15,153,96,0), inset 0 0 0 1px #0f9960, inset 0 0 0 1px rgba(16,22,26,0.15), inset 0 1px 1px rgba(16,22,26,0.2);\n  box-shadow: 0 0 0 0 rgba(15,153,96,0), 0 0 0 0 rgba(15,153,96,0), inset 0 0 0 1px #0f9960, inset 0 0 0 1px rgba(16,22,26,0.15), inset 0 1px 1px rgba(16,22,26,0.2);\n}\n.bp3-input.bp3-intent-success:focus {\n  -webkit-box-shadow: 0 0 0 1px #0f9960, 0 0 0 3px rgba(15,153,96,0.3), inset 0 1px 1px rgba(16,22,26,0.2);\n  box-shadow: 0 0 0 1px #0f9960, 0 0 0 3px rgba(15,153,96,0.3), inset 0 1px 1px rgba(16,22,26,0.2);\n}\n.bp3-input.bp3-intent-success[readonly] {\n  -webkit-box-shadow: inset 0 0 0 1px #0f9960;\n  box-shadow: inset 0 0 0 1px #0f9960;\n}\n.bp3-input.bp3-intent-success:disabled,\n.bp3-input.bp3-intent-success.bp3-disabled {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n}\n.bp3-dark .bp3-input.bp3-intent-success {\n  -webkit-box-shadow: 0 0 0 0 rgba(15,153,96,0), 0 0 0 0 rgba(15,153,96,0), 0 0 0 0 rgba(15,153,96,0), inset 0 0 0 1px #0f9960, inset 0 0 0 1px rgba(16,22,26,0.3), inset 0 1px 1px rgba(16,22,26,0.4);\n  box-shadow: 0 0 0 0 rgba(15,153,96,0), 0 0 0 0 rgba(15,153,96,0), 0 0 0 0 rgba(15,153,96,0), inset 0 0 0 1px #0f9960, inset 0 0 0 1px rgba(16,22,26,0.3), inset 0 1px 1px rgba(16,22,26,0.4);\n}\n.bp3-dark .bp3-input.bp3-intent-success:focus {\n  -webkit-box-shadow: 0 0 0 1px #0f9960, 0 0 0 1px #0f9960, 0 0 0 3px rgba(15,153,96,0.3), inset 0 0 0 1px rgba(16,22,26,0.3), inset 0 1px 1px rgba(16,22,26,0.4);\n  box-shadow: 0 0 0 1px #0f9960, 0 0 0 1px #0f9960, 0 0 0 3px rgba(15,153,96,0.3), inset 0 0 0 1px rgba(16,22,26,0.3), inset 0 1px 1px rgba(16,22,26,0.4);\n}\n.bp3-dark .bp3-input.bp3-intent-success[readonly] {\n  -webkit-box-shadow: inset 0 0 0 1px #0f9960;\n  box-shadow: inset 0 0 0 1px #0f9960;\n}\n.bp3-dark .bp3-input.bp3-intent-success:disabled,\n.bp3-dark .bp3-input.bp3-intent-success.bp3-disabled {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n}\n.bp3-input.bp3-intent-warning {\n  -webkit-box-shadow: 0 0 0 0 rgba(217,130,43,0), 0 0 0 0 rgba(217,130,43,0), inset 0 0 0 1px #d9822b, inset 0 0 0 1px rgba(16,22,26,0.15), inset 0 1px 1px rgba(16,22,26,0.2);\n  box-shadow: 0 0 0 0 rgba(217,130,43,0), 0 0 0 0 rgba(217,130,43,0), inset 0 0 0 1px #d9822b, inset 0 0 0 1px rgba(16,22,26,0.15), inset 0 1px 1px rgba(16,22,26,0.2);\n}\n.bp3-input.bp3-intent-warning:focus {\n  -webkit-box-shadow: 0 0 0 1px #d9822b, 0 0 0 3px rgba(217,130,43,0.3), inset 0 1px 1px rgba(16,22,26,0.2);\n  box-shadow: 0 0 0 1px #d9822b, 0 0 0 3px rgba(217,130,43,0.3), inset 0 1px 1px rgba(16,22,26,0.2);\n}\n.bp3-input.bp3-intent-warning[readonly] {\n  -webkit-box-shadow: inset 0 0 0 1px #d9822b;\n  box-shadow: inset 0 0 0 1px #d9822b;\n}\n.bp3-input.bp3-intent-warning:disabled,\n.bp3-input.bp3-intent-warning.bp3-disabled {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n}\n.bp3-dark .bp3-input.bp3-intent-warning {\n  -webkit-box-shadow: 0 0 0 0 rgba(217,130,43,0), 0 0 0 0 rgba(217,130,43,0), 0 0 0 0 rgba(217,130,43,0), inset 0 0 0 1px #d9822b, inset 0 0 0 1px rgba(16,22,26,0.3), inset 0 1px 1px rgba(16,22,26,0.4);\n  box-shadow: 0 0 0 0 rgba(217,130,43,0), 0 0 0 0 rgba(217,130,43,0), 0 0 0 0 rgba(217,130,43,0), inset 0 0 0 1px #d9822b, inset 0 0 0 1px rgba(16,22,26,0.3), inset 0 1px 1px rgba(16,22,26,0.4);\n}\n.bp3-dark .bp3-input.bp3-intent-warning:focus {\n  -webkit-box-shadow: 0 0 0 1px #d9822b, 0 0 0 1px #d9822b, 0 0 0 3px rgba(217,130,43,0.3), inset 0 0 0 1px rgba(16,22,26,0.3), inset 0 1px 1px rgba(16,22,26,0.4);\n  box-shadow: 0 0 0 1px #d9822b, 0 0 0 1px #d9822b, 0 0 0 3px rgba(217,130,43,0.3), inset 0 0 0 1px rgba(16,22,26,0.3), inset 0 1px 1px rgba(16,22,26,0.4);\n}\n.bp3-dark .bp3-input.bp3-intent-warning[readonly] {\n  -webkit-box-shadow: inset 0 0 0 1px #d9822b;\n  box-shadow: inset 0 0 0 1px #d9822b;\n}\n.bp3-dark .bp3-input.bp3-intent-warning:disabled,\n.bp3-dark .bp3-input.bp3-intent-warning.bp3-disabled {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n}\n.bp3-input.bp3-intent-danger {\n  -webkit-box-shadow: 0 0 0 0 rgba(219,55,55,0), 0 0 0 0 rgba(219,55,55,0), inset 0 0 0 1px #db3737, inset 0 0 0 1px rgba(16,22,26,0.15), inset 0 1px 1px rgba(16,22,26,0.2);\n  box-shadow: 0 0 0 0 rgba(219,55,55,0), 0 0 0 0 rgba(219,55,55,0), inset 0 0 0 1px #db3737, inset 0 0 0 1px rgba(16,22,26,0.15), inset 0 1px 1px rgba(16,22,26,0.2);\n}\n.bp3-input.bp3-intent-danger:focus {\n  -webkit-box-shadow: 0 0 0 1px #db3737, 0 0 0 3px rgba(219,55,55,0.3), inset 0 1px 1px rgba(16,22,26,0.2);\n  box-shadow: 0 0 0 1px #db3737, 0 0 0 3px rgba(219,55,55,0.3), inset 0 1px 1px rgba(16,22,26,0.2);\n}\n.bp3-input.bp3-intent-danger[readonly] {\n  -webkit-box-shadow: inset 0 0 0 1px #db3737;\n  box-shadow: inset 0 0 0 1px #db3737;\n}\n.bp3-input.bp3-intent-danger:disabled,\n.bp3-input.bp3-intent-danger.bp3-disabled {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n}\n.bp3-dark .bp3-input.bp3-intent-danger {\n  -webkit-box-shadow: 0 0 0 0 rgba(219,55,55,0), 0 0 0 0 rgba(219,55,55,0), 0 0 0 0 rgba(219,55,55,0), inset 0 0 0 1px #db3737, inset 0 0 0 1px rgba(16,22,26,0.3), inset 0 1px 1px rgba(16,22,26,0.4);\n  box-shadow: 0 0 0 0 rgba(219,55,55,0), 0 0 0 0 rgba(219,55,55,0), 0 0 0 0 rgba(219,55,55,0), inset 0 0 0 1px #db3737, inset 0 0 0 1px rgba(16,22,26,0.3), inset 0 1px 1px rgba(16,22,26,0.4);\n}\n.bp3-dark .bp3-input.bp3-intent-danger:focus {\n  -webkit-box-shadow: 0 0 0 1px #db3737, 0 0 0 1px #db3737, 0 0 0 3px rgba(219,55,55,0.3), inset 0 0 0 1px rgba(16,22,26,0.3), inset 0 1px 1px rgba(16,22,26,0.4);\n  box-shadow: 0 0 0 1px #db3737, 0 0 0 1px #db3737, 0 0 0 3px rgba(219,55,55,0.3), inset 0 0 0 1px rgba(16,22,26,0.3), inset 0 1px 1px rgba(16,22,26,0.4);\n}\n.bp3-dark .bp3-input.bp3-intent-danger[readonly] {\n  -webkit-box-shadow: inset 0 0 0 1px #db3737;\n  box-shadow: inset 0 0 0 1px #db3737;\n}\n.bp3-dark .bp3-input.bp3-intent-danger:disabled,\n.bp3-dark .bp3-input.bp3-intent-danger.bp3-disabled {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n}\n.bp3-input::-ms-clear {\n  display: none;\n}\ntextarea.bp3-input {\n  max-width: 100%;\n  height: auto;\n  padding: 10px;\n  line-height: 1.28581;\n}\ntextarea.bp3-input.bp3-large {\n  line-height: 1.28581;\n  font-size: 16px;\n}\n.bp3-dark textarea.bp3-input {\n  -webkit-box-shadow: 0 0 0 0 rgba(19,124,189,0), 0 0 0 0 rgba(19,124,189,0), 0 0 0 0 rgba(19,124,189,0), inset 0 0 0 1px rgba(16,22,26,0.3), inset 0 1px 1px rgba(16,22,26,0.4);\n  box-shadow: 0 0 0 0 rgba(19,124,189,0), 0 0 0 0 rgba(19,124,189,0), 0 0 0 0 rgba(19,124,189,0), inset 0 0 0 1px rgba(16,22,26,0.3), inset 0 1px 1px rgba(16,22,26,0.4);\n  background: rgba(16,22,26,0.3);\n  color: #f5f8fa;\n}\n.bp3-dark textarea.bp3-input::-webkit-input-placeholder {\n  color: rgba(191,204,214,0.5);\n}\n.bp3-dark textarea.bp3-input:-ms-input-placeholder {\n  color: rgba(191,204,214,0.5);\n}\n.bp3-dark textarea.bp3-input::-ms-input-placeholder {\n  color: rgba(191,204,214,0.5);\n}\n.bp3-dark textarea.bp3-input::placeholder {\n  color: rgba(191,204,214,0.5);\n}\n.bp3-dark textarea.bp3-input:focus {\n  -webkit-box-shadow: 0 0 0 1px #137cbd, 0 0 0 1px #137cbd, 0 0 0 3px rgba(19,124,189,0.3), inset 0 0 0 1px rgba(16,22,26,0.3), inset 0 1px 1px rgba(16,22,26,0.4);\n  box-shadow: 0 0 0 1px #137cbd, 0 0 0 1px #137cbd, 0 0 0 3px rgba(19,124,189,0.3), inset 0 0 0 1px rgba(16,22,26,0.3), inset 0 1px 1px rgba(16,22,26,0.4);\n}\n.bp3-dark textarea.bp3-input[readonly] {\n  -webkit-box-shadow: inset 0 0 0 1px rgba(16,22,26,0.4);\n  box-shadow: inset 0 0 0 1px rgba(16,22,26,0.4);\n}\n.bp3-dark textarea.bp3-input:disabled,\n.bp3-dark textarea.bp3-input.bp3-disabled {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  background: rgba(57,75,89,0.5);\n  color: rgba(191,204,214,0.5);\n}\nlabel.bp3-label {\n  display: block;\n  margin-top: 0;\n  margin-bottom: 15px;\n}\nlabel.bp3-label .bp3-html-select,\nlabel.bp3-label .bp3-input,\nlabel.bp3-label .bp3-select,\nlabel.bp3-label .bp3-slider,\nlabel.bp3-label .bp3-popover-wrapper {\n  display: block;\n  margin-top: 5px;\n  text-transform: none;\n}\nlabel.bp3-label .bp3-select select,\nlabel.bp3-label .bp3-html-select select {\n  width: 100%;\n  vertical-align: top;\n  font-weight: 400;\n}\nlabel.bp3-label.bp3-disabled,\nlabel.bp3-label.bp3-disabled .bp3-text-muted {\n  color: rgba(92,112,128,0.5);\n}\nlabel.bp3-label.bp3-inline {\n  line-height: 30px;\n}\nlabel.bp3-label.bp3-inline .bp3-html-select,\nlabel.bp3-label.bp3-inline .bp3-input,\nlabel.bp3-label.bp3-inline .bp3-input-group,\nlabel.bp3-label.bp3-inline .bp3-select,\nlabel.bp3-label.bp3-inline .bp3-popover-wrapper {\n  display: inline-block;\n  margin: 0 0 0 5px;\n  vertical-align: top;\n}\nlabel.bp3-label.bp3-inline .bp3-input-group .bp3-input {\n  margin-left: 0;\n}\nlabel.bp3-label.bp3-inline.bp3-large {\n  line-height: 40px;\n}\nlabel.bp3-label:not(.bp3-inline) .bp3-popover-target {\n  display: block;\n}\n.bp3-dark label.bp3-label {\n  color: #f5f8fa;\n}\n.bp3-dark label.bp3-label.bp3-disabled,\n.bp3-dark label.bp3-label.bp3-disabled .bp3-text-muted {\n  color: rgba(191,204,214,0.5);\n}\n.bp3-numeric-input .bp3-button-group.bp3-vertical > .bp3-button {\n  -webkit-box-flex: 1;\n  -ms-flex: 1 1 14px;\n  flex: 1 1 14px;\n  width: 30px;\n  min-height: 0;\n  padding: 0;\n}\n.bp3-numeric-input .bp3-button-group.bp3-vertical > .bp3-button:first-child {\n  border-radius: 0 3px 0 0;\n}\n.bp3-numeric-input .bp3-button-group.bp3-vertical > .bp3-button:last-child {\n  border-radius: 0 0 3px 0;\n}\n.bp3-numeric-input .bp3-button-group.bp3-vertical:first-child > .bp3-button:first-child {\n  border-radius: 3px 0 0 0;\n}\n.bp3-numeric-input .bp3-button-group.bp3-vertical:first-child > .bp3-button:last-child {\n  border-radius: 0 0 0 3px;\n}\n.bp3-numeric-input.bp3-large .bp3-button-group.bp3-vertical > .bp3-button {\n  width: 40px;\n}\nform {\n  display: block;\n}\n.bp3-html-select select,\n.bp3-select select {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  border: none;\n  border-radius: 3px;\n  cursor: pointer;\n  padding: 5px 10px;\n  vertical-align: middle;\n  text-align: left;\n  font-size: 14px;\n  -webkit-box-shadow: inset 0 0 0 1px rgba(16,22,26,0.2), inset 0 -1px 0 rgba(16,22,26,0.1);\n  box-shadow: inset 0 0 0 1px rgba(16,22,26,0.2), inset 0 -1px 0 rgba(16,22,26,0.1);\n  background-color: #f5f8fa;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(255,255,255,0.8)), to(rgba(255,255,255,0)));\n  background-image: linear-gradient(to bottom, rgba(255,255,255,0.8), rgba(255,255,255,0));\n  color: #182026;\n  border-radius: 3px;\n  width: 100%;\n  height: 30px;\n  padding: 0 25px 0 10px;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n}\n.bp3-html-select select > *,\n.bp3-select select > * {\n  -webkit-box-flex: 0;\n  -ms-flex-positive: 0;\n  flex-grow: 0;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n}\n.bp3-html-select select > .bp3-fill,\n.bp3-select select > .bp3-fill {\n  -webkit-box-flex: 1;\n  -ms-flex-positive: 1;\n  flex-grow: 1;\n  -ms-flex-negative: 1;\n  flex-shrink: 1;\n}\n.bp3-html-select select::before,\n.bp3-select select::before,\n.bp3-html-select select > *,\n.bp3-select select > * {\n  margin-right: 7px;\n}\n.bp3-html-select select:empty::before,\n.bp3-select select:empty::before,\n.bp3-html-select select > :last-child,\n.bp3-select select > :last-child {\n  margin-right: 0;\n}\n.bp3-html-select select:hover,\n.bp3-select select:hover {\n  -webkit-box-shadow: inset 0 0 0 1px rgba(16,22,26,0.2), inset 0 -1px 0 rgba(16,22,26,0.1);\n  box-shadow: inset 0 0 0 1px rgba(16,22,26,0.2), inset 0 -1px 0 rgba(16,22,26,0.1);\n  background-clip: padding-box;\n  background-color: #ebf1f5;\n}\n.bp3-html-select select:active,\n.bp3-select select:active,\n.bp3-html-select select.bp3-active,\n.bp3-select select.bp3-active {\n  -webkit-box-shadow: inset 0 0 0 1px rgba(16,22,26,0.2), inset 0 1px 2px rgba(16,22,26,0.2);\n  box-shadow: inset 0 0 0 1px rgba(16,22,26,0.2), inset 0 1px 2px rgba(16,22,26,0.2);\n  background-color: #d8e1e8;\n  background-image: none;\n}\n.bp3-html-select select:disabled,\n.bp3-select select:disabled,\n.bp3-html-select select.bp3-disabled,\n.bp3-select select.bp3-disabled {\n  outline: none;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  background-color: rgba(206,217,224,0.5);\n  background-image: none;\n  cursor: not-allowed;\n  color: rgba(92,112,128,0.5);\n}\n.bp3-html-select select:disabled.bp3-active,\n.bp3-select select:disabled.bp3-active,\n.bp3-html-select select:disabled.bp3-active:hover,\n.bp3-select select:disabled.bp3-active:hover,\n.bp3-html-select select.bp3-disabled.bp3-active,\n.bp3-select select.bp3-disabled.bp3-active,\n.bp3-html-select select.bp3-disabled.bp3-active:hover,\n.bp3-select select.bp3-disabled.bp3-active:hover {\n  background: rgba(206,217,224,0.7);\n}\n.bp3-html-select.bp3-minimal select,\n.bp3-select.bp3-minimal select {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  background: none;\n}\n.bp3-html-select.bp3-minimal select:hover,\n.bp3-select.bp3-minimal select:hover {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  background: rgba(167,182,194,0.3);\n  text-decoration: none;\n  color: #182026;\n}\n.bp3-html-select.bp3-minimal select:active,\n.bp3-select.bp3-minimal select:active,\n.bp3-html-select.bp3-minimal select.bp3-active,\n.bp3-select.bp3-minimal select.bp3-active {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  background: rgba(115,134,148,0.3);\n  color: #182026;\n}\n.bp3-html-select.bp3-minimal select:disabled,\n.bp3-select.bp3-minimal select:disabled,\n.bp3-html-select.bp3-minimal select:disabled:hover,\n.bp3-select.bp3-minimal select:disabled:hover,\n.bp3-html-select.bp3-minimal select.bp3-disabled,\n.bp3-select.bp3-minimal select.bp3-disabled,\n.bp3-html-select.bp3-minimal select.bp3-disabled:hover,\n.bp3-select.bp3-minimal select.bp3-disabled:hover {\n  background: none;\n  cursor: not-allowed;\n  color: rgba(92,112,128,0.5);\n}\n.bp3-html-select.bp3-minimal select:disabled.bp3-active,\n.bp3-select.bp3-minimal select:disabled.bp3-active,\n.bp3-html-select.bp3-minimal select:disabled:hover.bp3-active,\n.bp3-select.bp3-minimal select:disabled:hover.bp3-active,\n.bp3-html-select.bp3-minimal select.bp3-disabled.bp3-active,\n.bp3-select.bp3-minimal select.bp3-disabled.bp3-active,\n.bp3-html-select.bp3-minimal select.bp3-disabled:hover.bp3-active,\n.bp3-select.bp3-minimal select.bp3-disabled:hover.bp3-active {\n  background: rgba(115,134,148,0.3);\n}\n.bp3-dark .bp3-html-select.bp3-minimal select,\n.bp3-html-select.bp3-minimal .bp3-dark select,\n.bp3-dark,\n.bp3-select.bp3-minimal select,\n.bp3-select.bp3-minimal .bp3-dark select {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  background: none;\n  color: inherit;\n}\n.bp3-dark .bp3-html-select.bp3-minimal select:hover,\n.bp3-html-select.bp3-minimal .bp3-dark select:hover,\n.bp3-dark,\n.bp3-select.bp3-minimal select:hover,\n.bp3-select.bp3-minimal .bp3-dark select:hover,\n.bp3-dark .bp3-html-select.bp3-minimal select:active,\n.bp3-html-select.bp3-minimal .bp3-dark select:active,\n.bp3-select.bp3-minimal select:active,\n.bp3-select.bp3-minimal .bp3-dark select:active,\n.bp3-dark .bp3-html-select.bp3-minimal select.bp3-active,\n.bp3-html-select.bp3-minimal .bp3-dark select.bp3-active,\n.bp3-select.bp3-minimal select.bp3-active,\n.bp3-select.bp3-minimal .bp3-dark select.bp3-active {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  background: none;\n}\n.bp3-dark .bp3-html-select.bp3-minimal select:hover,\n.bp3-html-select.bp3-minimal .bp3-dark select:hover,\n.bp3-dark,\n.bp3-select.bp3-minimal select:hover,\n.bp3-select.bp3-minimal .bp3-dark select:hover {\n  background: rgba(138,155,168,0.15);\n}\n.bp3-dark .bp3-html-select.bp3-minimal select:active,\n.bp3-html-select.bp3-minimal .bp3-dark select:active,\n.bp3-dark,\n.bp3-select.bp3-minimal select:active,\n.bp3-select.bp3-minimal .bp3-dark select:active,\n.bp3-dark .bp3-html-select.bp3-minimal select.bp3-active,\n.bp3-html-select.bp3-minimal .bp3-dark select.bp3-active,\n.bp3-select.bp3-minimal select.bp3-active,\n.bp3-select.bp3-minimal .bp3-dark select.bp3-active {\n  background: rgba(138,155,168,0.3);\n  color: #f5f8fa;\n}\n.bp3-dark .bp3-html-select.bp3-minimal select:disabled,\n.bp3-html-select.bp3-minimal .bp3-dark select:disabled,\n.bp3-dark,\n.bp3-select.bp3-minimal select:disabled,\n.bp3-select.bp3-minimal .bp3-dark select:disabled,\n.bp3-dark .bp3-html-select.bp3-minimal select:disabled:hover,\n.bp3-html-select.bp3-minimal .bp3-dark select:disabled:hover,\n.bp3-select.bp3-minimal select:disabled:hover,\n.bp3-select.bp3-minimal .bp3-dark select:disabled:hover,\n.bp3-dark .bp3-html-select.bp3-minimal select.bp3-disabled,\n.bp3-html-select.bp3-minimal .bp3-dark select.bp3-disabled,\n.bp3-select.bp3-minimal select.bp3-disabled,\n.bp3-select.bp3-minimal .bp3-dark select.bp3-disabled,\n.bp3-dark .bp3-html-select.bp3-minimal select.bp3-disabled:hover,\n.bp3-html-select.bp3-minimal .bp3-dark select.bp3-disabled:hover,\n.bp3-select.bp3-minimal select.bp3-disabled:hover,\n.bp3-select.bp3-minimal .bp3-dark select.bp3-disabled:hover {\n  background: none;\n  cursor: not-allowed;\n  color: rgba(191,204,214,0.5);\n}\n.bp3-dark .bp3-html-select.bp3-minimal select:disabled.bp3-active,\n.bp3-html-select.bp3-minimal .bp3-dark select:disabled.bp3-active,\n.bp3-dark,\n.bp3-select.bp3-minimal select:disabled.bp3-active,\n.bp3-select.bp3-minimal .bp3-dark select:disabled.bp3-active,\n.bp3-dark .bp3-html-select.bp3-minimal select:disabled:hover.bp3-active,\n.bp3-html-select.bp3-minimal .bp3-dark select:disabled:hover.bp3-active,\n.bp3-select.bp3-minimal select:disabled:hover.bp3-active,\n.bp3-select.bp3-minimal .bp3-dark select:disabled:hover.bp3-active,\n.bp3-dark .bp3-html-select.bp3-minimal select.bp3-disabled.bp3-active,\n.bp3-html-select.bp3-minimal .bp3-dark select.bp3-disabled.bp3-active,\n.bp3-select.bp3-minimal select.bp3-disabled.bp3-active,\n.bp3-select.bp3-minimal .bp3-dark select.bp3-disabled.bp3-active,\n.bp3-dark .bp3-html-select.bp3-minimal select.bp3-disabled:hover.bp3-active,\n.bp3-html-select.bp3-minimal .bp3-dark select.bp3-disabled:hover.bp3-active,\n.bp3-select.bp3-minimal select.bp3-disabled:hover.bp3-active,\n.bp3-select.bp3-minimal .bp3-dark select.bp3-disabled:hover.bp3-active {\n  background: rgba(138,155,168,0.3);\n}\n.bp3-html-select.bp3-minimal select.bp3-intent-primary,\n.bp3-select.bp3-minimal select.bp3-intent-primary {\n  color: #106ba3;\n}\n.bp3-html-select.bp3-minimal select.bp3-intent-primary:hover,\n.bp3-select.bp3-minimal select.bp3-intent-primary:hover,\n.bp3-html-select.bp3-minimal select.bp3-intent-primary:active,\n.bp3-select.bp3-minimal select.bp3-intent-primary:active,\n.bp3-html-select.bp3-minimal select.bp3-intent-primary.bp3-active,\n.bp3-select.bp3-minimal select.bp3-intent-primary.bp3-active {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  background: none;\n  color: #106ba3;\n}\n.bp3-html-select.bp3-minimal select.bp3-intent-primary:hover,\n.bp3-select.bp3-minimal select.bp3-intent-primary:hover {\n  background: rgba(19,124,189,0.15);\n  color: #106ba3;\n}\n.bp3-html-select.bp3-minimal select.bp3-intent-primary:active,\n.bp3-select.bp3-minimal select.bp3-intent-primary:active,\n.bp3-html-select.bp3-minimal select.bp3-intent-primary.bp3-active,\n.bp3-select.bp3-minimal select.bp3-intent-primary.bp3-active {\n  background: rgba(19,124,189,0.3);\n  color: #106ba3;\n}\n.bp3-html-select.bp3-minimal select.bp3-intent-primary:disabled,\n.bp3-select.bp3-minimal select.bp3-intent-primary:disabled,\n.bp3-html-select.bp3-minimal select.bp3-intent-primary.bp3-disabled,\n.bp3-select.bp3-minimal select.bp3-intent-primary.bp3-disabled {\n  background: none;\n  color: rgba(16,107,163,0.5);\n}\n.bp3-html-select.bp3-minimal select.bp3-intent-primary:disabled.bp3-active,\n.bp3-select.bp3-minimal select.bp3-intent-primary:disabled.bp3-active,\n.bp3-html-select.bp3-minimal select.bp3-intent-primary.bp3-disabled.bp3-active,\n.bp3-select.bp3-minimal select.bp3-intent-primary.bp3-disabled.bp3-active {\n  background: rgba(19,124,189,0.3);\n}\n.bp3-html-select.bp3-minimal select.bp3-intent-primary .bp3-button-spinner .bp3-spinner-head,\n.bp3-select.bp3-minimal select.bp3-intent-primary .bp3-button-spinner .bp3-spinner-head {\n  stroke: #106ba3;\n}\n.bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-primary,\n.bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-primary,\n.bp3-dark,\n.bp3-select.bp3-minimal select.bp3-intent-primary,\n.bp3-select.bp3-minimal .bp3-dark select.bp3-intent-primary {\n  color: #48aff0;\n}\n.bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-primary:hover,\n.bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-primary:hover,\n.bp3-dark,\n.bp3-select.bp3-minimal select.bp3-intent-primary:hover,\n.bp3-select.bp3-minimal .bp3-dark select.bp3-intent-primary:hover {\n  background: rgba(19,124,189,0.2);\n  color: #48aff0;\n}\n.bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-primary:active,\n.bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-primary:active,\n.bp3-dark,\n.bp3-select.bp3-minimal select.bp3-intent-primary:active,\n.bp3-select.bp3-minimal .bp3-dark select.bp3-intent-primary:active,\n.bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-primary.bp3-active,\n.bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-primary.bp3-active,\n.bp3-select.bp3-minimal select.bp3-intent-primary.bp3-active,\n.bp3-select.bp3-minimal .bp3-dark select.bp3-intent-primary.bp3-active {\n  background: rgba(19,124,189,0.3);\n  color: #48aff0;\n}\n.bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-primary:disabled,\n.bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-primary:disabled,\n.bp3-dark,\n.bp3-select.bp3-minimal select.bp3-intent-primary:disabled,\n.bp3-select.bp3-minimal .bp3-dark select.bp3-intent-primary:disabled,\n.bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-primary.bp3-disabled,\n.bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-primary.bp3-disabled,\n.bp3-select.bp3-minimal select.bp3-intent-primary.bp3-disabled,\n.bp3-select.bp3-minimal .bp3-dark select.bp3-intent-primary.bp3-disabled {\n  background: none;\n  color: rgba(72,175,240,0.5);\n}\n.bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-primary:disabled.bp3-active,\n.bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-primary:disabled.bp3-active,\n.bp3-dark,\n.bp3-select.bp3-minimal select.bp3-intent-primary:disabled.bp3-active,\n.bp3-select.bp3-minimal .bp3-dark select.bp3-intent-primary:disabled.bp3-active,\n.bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-primary.bp3-disabled.bp3-active,\n.bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-primary.bp3-disabled.bp3-active,\n.bp3-select.bp3-minimal select.bp3-intent-primary.bp3-disabled.bp3-active,\n.bp3-select.bp3-minimal .bp3-dark select.bp3-intent-primary.bp3-disabled.bp3-active {\n  background: rgba(19,124,189,0.3);\n}\n.bp3-html-select.bp3-minimal select.bp3-intent-success,\n.bp3-select.bp3-minimal select.bp3-intent-success {\n  color: #0d8050;\n}\n.bp3-html-select.bp3-minimal select.bp3-intent-success:hover,\n.bp3-select.bp3-minimal select.bp3-intent-success:hover,\n.bp3-html-select.bp3-minimal select.bp3-intent-success:active,\n.bp3-select.bp3-minimal select.bp3-intent-success:active,\n.bp3-html-select.bp3-minimal select.bp3-intent-success.bp3-active,\n.bp3-select.bp3-minimal select.bp3-intent-success.bp3-active {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  background: none;\n  color: #0d8050;\n}\n.bp3-html-select.bp3-minimal select.bp3-intent-success:hover,\n.bp3-select.bp3-minimal select.bp3-intent-success:hover {\n  background: rgba(15,153,96,0.15);\n  color: #0d8050;\n}\n.bp3-html-select.bp3-minimal select.bp3-intent-success:active,\n.bp3-select.bp3-minimal select.bp3-intent-success:active,\n.bp3-html-select.bp3-minimal select.bp3-intent-success.bp3-active,\n.bp3-select.bp3-minimal select.bp3-intent-success.bp3-active {\n  background: rgba(15,153,96,0.3);\n  color: #0d8050;\n}\n.bp3-html-select.bp3-minimal select.bp3-intent-success:disabled,\n.bp3-select.bp3-minimal select.bp3-intent-success:disabled,\n.bp3-html-select.bp3-minimal select.bp3-intent-success.bp3-disabled,\n.bp3-select.bp3-minimal select.bp3-intent-success.bp3-disabled {\n  background: none;\n  color: rgba(13,128,80,0.5);\n}\n.bp3-html-select.bp3-minimal select.bp3-intent-success:disabled.bp3-active,\n.bp3-select.bp3-minimal select.bp3-intent-success:disabled.bp3-active,\n.bp3-html-select.bp3-minimal select.bp3-intent-success.bp3-disabled.bp3-active,\n.bp3-select.bp3-minimal select.bp3-intent-success.bp3-disabled.bp3-active {\n  background: rgba(15,153,96,0.3);\n}\n.bp3-html-select.bp3-minimal select.bp3-intent-success .bp3-button-spinner .bp3-spinner-head,\n.bp3-select.bp3-minimal select.bp3-intent-success .bp3-button-spinner .bp3-spinner-head {\n  stroke: #0d8050;\n}\n.bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-success,\n.bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-success,\n.bp3-dark,\n.bp3-select.bp3-minimal select.bp3-intent-success,\n.bp3-select.bp3-minimal .bp3-dark select.bp3-intent-success {\n  color: #3dcc91;\n}\n.bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-success:hover,\n.bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-success:hover,\n.bp3-dark,\n.bp3-select.bp3-minimal select.bp3-intent-success:hover,\n.bp3-select.bp3-minimal .bp3-dark select.bp3-intent-success:hover {\n  background: rgba(15,153,96,0.2);\n  color: #3dcc91;\n}\n.bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-success:active,\n.bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-success:active,\n.bp3-dark,\n.bp3-select.bp3-minimal select.bp3-intent-success:active,\n.bp3-select.bp3-minimal .bp3-dark select.bp3-intent-success:active,\n.bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-success.bp3-active,\n.bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-success.bp3-active,\n.bp3-select.bp3-minimal select.bp3-intent-success.bp3-active,\n.bp3-select.bp3-minimal .bp3-dark select.bp3-intent-success.bp3-active {\n  background: rgba(15,153,96,0.3);\n  color: #3dcc91;\n}\n.bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-success:disabled,\n.bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-success:disabled,\n.bp3-dark,\n.bp3-select.bp3-minimal select.bp3-intent-success:disabled,\n.bp3-select.bp3-minimal .bp3-dark select.bp3-intent-success:disabled,\n.bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-success.bp3-disabled,\n.bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-success.bp3-disabled,\n.bp3-select.bp3-minimal select.bp3-intent-success.bp3-disabled,\n.bp3-select.bp3-minimal .bp3-dark select.bp3-intent-success.bp3-disabled {\n  background: none;\n  color: rgba(61,204,145,0.5);\n}\n.bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-success:disabled.bp3-active,\n.bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-success:disabled.bp3-active,\n.bp3-dark,\n.bp3-select.bp3-minimal select.bp3-intent-success:disabled.bp3-active,\n.bp3-select.bp3-minimal .bp3-dark select.bp3-intent-success:disabled.bp3-active,\n.bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-success.bp3-disabled.bp3-active,\n.bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-success.bp3-disabled.bp3-active,\n.bp3-select.bp3-minimal select.bp3-intent-success.bp3-disabled.bp3-active,\n.bp3-select.bp3-minimal .bp3-dark select.bp3-intent-success.bp3-disabled.bp3-active {\n  background: rgba(15,153,96,0.3);\n}\n.bp3-html-select.bp3-minimal select.bp3-intent-warning,\n.bp3-select.bp3-minimal select.bp3-intent-warning {\n  color: #bf7326;\n}\n.bp3-html-select.bp3-minimal select.bp3-intent-warning:hover,\n.bp3-select.bp3-minimal select.bp3-intent-warning:hover,\n.bp3-html-select.bp3-minimal select.bp3-intent-warning:active,\n.bp3-select.bp3-minimal select.bp3-intent-warning:active,\n.bp3-html-select.bp3-minimal select.bp3-intent-warning.bp3-active,\n.bp3-select.bp3-minimal select.bp3-intent-warning.bp3-active {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  background: none;\n  color: #bf7326;\n}\n.bp3-html-select.bp3-minimal select.bp3-intent-warning:hover,\n.bp3-select.bp3-minimal select.bp3-intent-warning:hover {\n  background: rgba(217,130,43,0.15);\n  color: #bf7326;\n}\n.bp3-html-select.bp3-minimal select.bp3-intent-warning:active,\n.bp3-select.bp3-minimal select.bp3-intent-warning:active,\n.bp3-html-select.bp3-minimal select.bp3-intent-warning.bp3-active,\n.bp3-select.bp3-minimal select.bp3-intent-warning.bp3-active {\n  background: rgba(217,130,43,0.3);\n  color: #bf7326;\n}\n.bp3-html-select.bp3-minimal select.bp3-intent-warning:disabled,\n.bp3-select.bp3-minimal select.bp3-intent-warning:disabled,\n.bp3-html-select.bp3-minimal select.bp3-intent-warning.bp3-disabled,\n.bp3-select.bp3-minimal select.bp3-intent-warning.bp3-disabled {\n  background: none;\n  color: rgba(191,115,38,0.5);\n}\n.bp3-html-select.bp3-minimal select.bp3-intent-warning:disabled.bp3-active,\n.bp3-select.bp3-minimal select.bp3-intent-warning:disabled.bp3-active,\n.bp3-html-select.bp3-minimal select.bp3-intent-warning.bp3-disabled.bp3-active,\n.bp3-select.bp3-minimal select.bp3-intent-warning.bp3-disabled.bp3-active {\n  background: rgba(217,130,43,0.3);\n}\n.bp3-html-select.bp3-minimal select.bp3-intent-warning .bp3-button-spinner .bp3-spinner-head,\n.bp3-select.bp3-minimal select.bp3-intent-warning .bp3-button-spinner .bp3-spinner-head {\n  stroke: #bf7326;\n}\n.bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-warning,\n.bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-warning,\n.bp3-dark,\n.bp3-select.bp3-minimal select.bp3-intent-warning,\n.bp3-select.bp3-minimal .bp3-dark select.bp3-intent-warning {\n  color: #ffb366;\n}\n.bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-warning:hover,\n.bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-warning:hover,\n.bp3-dark,\n.bp3-select.bp3-minimal select.bp3-intent-warning:hover,\n.bp3-select.bp3-minimal .bp3-dark select.bp3-intent-warning:hover {\n  background: rgba(217,130,43,0.2);\n  color: #ffb366;\n}\n.bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-warning:active,\n.bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-warning:active,\n.bp3-dark,\n.bp3-select.bp3-minimal select.bp3-intent-warning:active,\n.bp3-select.bp3-minimal .bp3-dark select.bp3-intent-warning:active,\n.bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-warning.bp3-active,\n.bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-warning.bp3-active,\n.bp3-select.bp3-minimal select.bp3-intent-warning.bp3-active,\n.bp3-select.bp3-minimal .bp3-dark select.bp3-intent-warning.bp3-active {\n  background: rgba(217,130,43,0.3);\n  color: #ffb366;\n}\n.bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-warning:disabled,\n.bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-warning:disabled,\n.bp3-dark,\n.bp3-select.bp3-minimal select.bp3-intent-warning:disabled,\n.bp3-select.bp3-minimal .bp3-dark select.bp3-intent-warning:disabled,\n.bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-warning.bp3-disabled,\n.bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-warning.bp3-disabled,\n.bp3-select.bp3-minimal select.bp3-intent-warning.bp3-disabled,\n.bp3-select.bp3-minimal .bp3-dark select.bp3-intent-warning.bp3-disabled {\n  background: none;\n  color: rgba(255,179,102,0.5);\n}\n.bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-warning:disabled.bp3-active,\n.bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-warning:disabled.bp3-active,\n.bp3-dark,\n.bp3-select.bp3-minimal select.bp3-intent-warning:disabled.bp3-active,\n.bp3-select.bp3-minimal .bp3-dark select.bp3-intent-warning:disabled.bp3-active,\n.bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-warning.bp3-disabled.bp3-active,\n.bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-warning.bp3-disabled.bp3-active,\n.bp3-select.bp3-minimal select.bp3-intent-warning.bp3-disabled.bp3-active,\n.bp3-select.bp3-minimal .bp3-dark select.bp3-intent-warning.bp3-disabled.bp3-active {\n  background: rgba(217,130,43,0.3);\n}\n.bp3-html-select.bp3-minimal select.bp3-intent-danger,\n.bp3-select.bp3-minimal select.bp3-intent-danger {\n  color: #c23030;\n}\n.bp3-html-select.bp3-minimal select.bp3-intent-danger:hover,\n.bp3-select.bp3-minimal select.bp3-intent-danger:hover,\n.bp3-html-select.bp3-minimal select.bp3-intent-danger:active,\n.bp3-select.bp3-minimal select.bp3-intent-danger:active,\n.bp3-html-select.bp3-minimal select.bp3-intent-danger.bp3-active,\n.bp3-select.bp3-minimal select.bp3-intent-danger.bp3-active {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  background: none;\n  color: #c23030;\n}\n.bp3-html-select.bp3-minimal select.bp3-intent-danger:hover,\n.bp3-select.bp3-minimal select.bp3-intent-danger:hover {\n  background: rgba(219,55,55,0.15);\n  color: #c23030;\n}\n.bp3-html-select.bp3-minimal select.bp3-intent-danger:active,\n.bp3-select.bp3-minimal select.bp3-intent-danger:active,\n.bp3-html-select.bp3-minimal select.bp3-intent-danger.bp3-active,\n.bp3-select.bp3-minimal select.bp3-intent-danger.bp3-active {\n  background: rgba(219,55,55,0.3);\n  color: #c23030;\n}\n.bp3-html-select.bp3-minimal select.bp3-intent-danger:disabled,\n.bp3-select.bp3-minimal select.bp3-intent-danger:disabled,\n.bp3-html-select.bp3-minimal select.bp3-intent-danger.bp3-disabled,\n.bp3-select.bp3-minimal select.bp3-intent-danger.bp3-disabled {\n  background: none;\n  color: rgba(194,48,48,0.5);\n}\n.bp3-html-select.bp3-minimal select.bp3-intent-danger:disabled.bp3-active,\n.bp3-select.bp3-minimal select.bp3-intent-danger:disabled.bp3-active,\n.bp3-html-select.bp3-minimal select.bp3-intent-danger.bp3-disabled.bp3-active,\n.bp3-select.bp3-minimal select.bp3-intent-danger.bp3-disabled.bp3-active {\n  background: rgba(219,55,55,0.3);\n}\n.bp3-html-select.bp3-minimal select.bp3-intent-danger .bp3-button-spinner .bp3-spinner-head,\n.bp3-select.bp3-minimal select.bp3-intent-danger .bp3-button-spinner .bp3-spinner-head {\n  stroke: #c23030;\n}\n.bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-danger,\n.bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-danger,\n.bp3-dark,\n.bp3-select.bp3-minimal select.bp3-intent-danger,\n.bp3-select.bp3-minimal .bp3-dark select.bp3-intent-danger {\n  color: #ff7373;\n}\n.bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-danger:hover,\n.bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-danger:hover,\n.bp3-dark,\n.bp3-select.bp3-minimal select.bp3-intent-danger:hover,\n.bp3-select.bp3-minimal .bp3-dark select.bp3-intent-danger:hover {\n  background: rgba(219,55,55,0.2);\n  color: #ff7373;\n}\n.bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-danger:active,\n.bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-danger:active,\n.bp3-dark,\n.bp3-select.bp3-minimal select.bp3-intent-danger:active,\n.bp3-select.bp3-minimal .bp3-dark select.bp3-intent-danger:active,\n.bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-danger.bp3-active,\n.bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-danger.bp3-active,\n.bp3-select.bp3-minimal select.bp3-intent-danger.bp3-active,\n.bp3-select.bp3-minimal .bp3-dark select.bp3-intent-danger.bp3-active {\n  background: rgba(219,55,55,0.3);\n  color: #ff7373;\n}\n.bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-danger:disabled,\n.bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-danger:disabled,\n.bp3-dark,\n.bp3-select.bp3-minimal select.bp3-intent-danger:disabled,\n.bp3-select.bp3-minimal .bp3-dark select.bp3-intent-danger:disabled,\n.bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-danger.bp3-disabled,\n.bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-danger.bp3-disabled,\n.bp3-select.bp3-minimal select.bp3-intent-danger.bp3-disabled,\n.bp3-select.bp3-minimal .bp3-dark select.bp3-intent-danger.bp3-disabled {\n  background: none;\n  color: rgba(255,115,115,0.5);\n}\n.bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-danger:disabled.bp3-active,\n.bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-danger:disabled.bp3-active,\n.bp3-dark,\n.bp3-select.bp3-minimal select.bp3-intent-danger:disabled.bp3-active,\n.bp3-select.bp3-minimal .bp3-dark select.bp3-intent-danger:disabled.bp3-active,\n.bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-danger.bp3-disabled.bp3-active,\n.bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-danger.bp3-disabled.bp3-active,\n.bp3-select.bp3-minimal select.bp3-intent-danger.bp3-disabled.bp3-active,\n.bp3-select.bp3-minimal .bp3-dark select.bp3-intent-danger.bp3-disabled.bp3-active {\n  background: rgba(219,55,55,0.3);\n}\n.bp3-html-select.bp3-large select,\n.bp3-select.bp3-large select {\n  height: 40px;\n  padding-right: 35px;\n  font-size: 16px;\n}\n.bp3-dark .bp3-html-select select,\n.bp3-dark,\n.bp3-select select {\n  -webkit-box-shadow: 0 0 0 1px rgba(16,22,26,0.4);\n  box-shadow: 0 0 0 1px rgba(16,22,26,0.4);\n  background-color: #394b59;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(255,255,255,0.05)), to(rgba(255,255,255,0)));\n  background-image: linear-gradient(to bottom, rgba(255,255,255,0.05), rgba(255,255,255,0));\n  color: #f5f8fa;\n}\n.bp3-dark .bp3-html-select select:hover,\n.bp3-dark,\n.bp3-select select:hover,\n.bp3-dark .bp3-html-select select:active,\n.bp3-select select:active,\n.bp3-dark .bp3-html-select select.bp3-active,\n.bp3-select select.bp3-active {\n  color: #f5f8fa;\n}\n.bp3-dark .bp3-html-select select:hover,\n.bp3-dark,\n.bp3-select select:hover {\n  -webkit-box-shadow: 0 0 0 1px rgba(16,22,26,0.4);\n  box-shadow: 0 0 0 1px rgba(16,22,26,0.4);\n  background-color: #30404d;\n}\n.bp3-dark .bp3-html-select select:active,\n.bp3-dark,\n.bp3-select select:active,\n.bp3-dark .bp3-html-select select.bp3-active,\n.bp3-select select.bp3-active {\n  -webkit-box-shadow: 0 0 0 1px rgba(16,22,26,0.6), inset 0 1px 2px rgba(16,22,26,0.2);\n  box-shadow: 0 0 0 1px rgba(16,22,26,0.6), inset 0 1px 2px rgba(16,22,26,0.2);\n  background-color: #202b33;\n  background-image: none;\n}\n.bp3-dark .bp3-html-select select:disabled,\n.bp3-dark,\n.bp3-select select:disabled,\n.bp3-dark .bp3-html-select select.bp3-disabled,\n.bp3-select select.bp3-disabled {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  background-color: rgba(57,75,89,0.5);\n  background-image: none;\n  color: rgba(191,204,214,0.5);\n}\n.bp3-dark .bp3-html-select select:disabled.bp3-active,\n.bp3-dark,\n.bp3-select select:disabled.bp3-active,\n.bp3-dark .bp3-html-select select.bp3-disabled.bp3-active,\n.bp3-select select.bp3-disabled.bp3-active {\n  background: rgba(57,75,89,0.7);\n}\n.bp3-dark .bp3-html-select select .bp3-button-spinner .bp3-spinner-head,\n.bp3-dark,\n.bp3-select select .bp3-button-spinner .bp3-spinner-head {\n  background: rgba(16,22,26,0.5);\n  stroke: #8a9ba8;\n}\n.bp3-html-select select:disabled,\n.bp3-select select:disabled {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  background-color: rgba(206,217,224,0.5);\n  cursor: not-allowed;\n  color: rgba(92,112,128,0.5);\n}\n.bp3-html-select .bp3-icon,\n.bp3-select .bp3-icon,\n.bp3-select::after {\n  position: absolute;\n  top: 7px;\n  right: 7px;\n  color: #5c7080;\n  pointer-events: none;\n}\n.bp3-html-select .bp3-disabled.bp3-icon,\n.bp3-select .bp3-disabled.bp3-icon,\n.bp3-disabled.bp3-select::after {\n  color: rgba(92,112,128,0.5);\n}\n.bp3-html-select,\n.bp3-select {\n  display: inline-block;\n  position: relative;\n  vertical-align: middle;\n  letter-spacing: normal;\n}\n.bp3-html-select select::-ms-expand,\n.bp3-select select::-ms-expand {\n  display: none;\n}\n.bp3-html-select.bp3-large::after,\n.bp3-html-select.bp3-large .bp3-icon,\n.bp3-select.bp3-large::after,\n.bp3-select.bp3-large .bp3-icon {\n  top: 12px;\n  right: 12px;\n}\n.bp3-html-select.bp3-fill,\n.bp3-html-select.bp3-fill select,\n.bp3-select.bp3-fill,\n.bp3-select.bp3-fill select {\n  width: 100%;\n}\n.bp3-dark .bp3-html-select option,\n.bp3-dark,\n.bp3-select option {\n  background-color: #30404d;\n  color: #f5f8fa;\n}\n.bp3-dark .bp3-html-select::after,\n.bp3-dark,\n.bp3-select::after {\n  color: #bfccd6;\n}\n.bp3-select::after {\n  line-height: 1;\n  font-family: "Icons16", sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  font-style: normal;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  content: "\\E6C6";\n}\n.bp3-running-text table,\ntable.bp3-html-table {\n  border-spacing: 0;\n  font-size: 14px;\n}\n.bp3-running-text table th,\ntable.bp3-html-table th,\n.bp3-running-text table td,\ntable.bp3-html-table td {\n  padding: 11px;\n  vertical-align: top;\n  text-align: left;\n}\n.bp3-running-text table th,\ntable.bp3-html-table th {\n  color: #182026;\n  font-weight: 600;\n}\n.bp3-running-text table td,\ntable.bp3-html-table td {\n  color: #182026;\n}\n.bp3-running-text table tbody tr:first-child th,\ntable.bp3-html-table tbody tr:first-child th,\n.bp3-running-text table tbody tr:first-child td,\ntable.bp3-html-table tbody tr:first-child td {\n  -webkit-box-shadow: inset 0 1px 0 0 rgba(16,22,26,0.15);\n  box-shadow: inset 0 1px 0 0 rgba(16,22,26,0.15);\n}\n.bp3-dark .bp3-running-text table th,\n.bp3-running-text .bp3-dark table th,\n.bp3-dark table.bp3-html-table th {\n  color: #f5f8fa;\n}\n.bp3-dark .bp3-running-text table td,\n.bp3-running-text .bp3-dark table td,\n.bp3-dark table.bp3-html-table td {\n  color: #f5f8fa;\n}\n.bp3-dark .bp3-running-text table tbody tr:first-child th,\n.bp3-running-text .bp3-dark table tbody tr:first-child th,\n.bp3-dark table.bp3-html-table tbody tr:first-child th,\n.bp3-dark .bp3-running-text table tbody tr:first-child td,\n.bp3-running-text,\n.bp3-dark table tbody tr:first-child td,\n.bp3-dark table.bp3-html-table tbody tr:first-child td {\n  -webkit-box-shadow: inset 0 1px 0 0 rgba(255,255,255,0.15);\n  box-shadow: inset 0 1px 0 0 rgba(255,255,255,0.15);\n}\ntable.bp3-html-table.bp3-small th,\ntable.bp3-html-table.bp3-small td {\n  padding-top: 6px;\n  padding-bottom: 6px;\n}\ntable.bp3-html-table.bp3-html-table-striped tbody tr:nth-child(odd) td {\n  background: rgba(191,204,214,0.15);\n}\ntable.bp3-html-table.bp3-html-table-bordered th:not(:first-child) {\n  -webkit-box-shadow: inset 1px 0 0 0 rgba(16,22,26,0.15);\n  box-shadow: inset 1px 0 0 0 rgba(16,22,26,0.15);\n}\ntable.bp3-html-table.bp3-html-table-bordered tbody tr td {\n  -webkit-box-shadow: inset 0 1px 0 0 rgba(16,22,26,0.15);\n  box-shadow: inset 0 1px 0 0 rgba(16,22,26,0.15);\n}\ntable.bp3-html-table.bp3-html-table-bordered tbody tr td:not(:first-child) {\n  -webkit-box-shadow: inset 1px 1px 0 0 rgba(16,22,26,0.15);\n  box-shadow: inset 1px 1px 0 0 rgba(16,22,26,0.15);\n}\ntable.bp3-html-table.bp3-html-table-bordered.bp3-html-table-striped tbody tr:not(:first-child) td {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n}\ntable.bp3-html-table.bp3-html-table-bordered.bp3-html-table-striped tbody tr:not(:first-child) td:not(:first-child) {\n  -webkit-box-shadow: inset 1px 0 0 0 rgba(16,22,26,0.15);\n  box-shadow: inset 1px 0 0 0 rgba(16,22,26,0.15);\n}\ntable.bp3-html-table.bp3-interactive tbody tr:hover td {\n  background-color: rgba(191,204,214,0.3);\n  cursor: pointer;\n}\ntable.bp3-html-table.bp3-interactive tbody tr:active td {\n  background-color: rgba(191,204,214,0.4);\n}\n.bp3-dark table.bp3-html-table.bp3-html-table-striped tbody tr:nth-child(odd) td {\n  background: rgba(92,112,128,0.15);\n}\n.bp3-dark table.bp3-html-table.bp3-html-table-bordered th:not(:first-child) {\n  -webkit-box-shadow: inset 1px 0 0 0 rgba(255,255,255,0.15);\n  box-shadow: inset 1px 0 0 0 rgba(255,255,255,0.15);\n}\n.bp3-dark table.bp3-html-table.bp3-html-table-bordered tbody tr td {\n  -webkit-box-shadow: inset 0 1px 0 0 rgba(255,255,255,0.15);\n  box-shadow: inset 0 1px 0 0 rgba(255,255,255,0.15);\n}\n.bp3-dark table.bp3-html-table.bp3-html-table-bordered tbody tr td:not(:first-child) {\n  -webkit-box-shadow: inset 1px 1px 0 0 rgba(255,255,255,0.15);\n  box-shadow: inset 1px 1px 0 0 rgba(255,255,255,0.15);\n}\n.bp3-dark table.bp3-html-table.bp3-html-table-bordered.bp3-html-table-striped tbody tr:not(:first-child) td {\n  -webkit-box-shadow: inset 1px 0 0 0 rgba(255,255,255,0.15);\n  box-shadow: inset 1px 0 0 0 rgba(255,255,255,0.15);\n}\n.bp3-dark table.bp3-html-table.bp3-html-table-bordered.bp3-html-table-striped tbody tr:not(:first-child) td:first-child {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n}\n.bp3-dark table.bp3-html-table.bp3-interactive tbody tr:hover td {\n  background-color: rgba(92,112,128,0.3);\n  cursor: pointer;\n}\n.bp3-dark table.bp3-html-table.bp3-interactive tbody tr:active td {\n  background-color: rgba(92,112,128,0.4);\n}\n.bp3-key-combo .bp3-key:not(:last-child) {\n  margin-right: 5px;\n}\n.bp3-hotkey-dialog {\n  top: 40px;\n  padding-bottom: 0;\n}\n.bp3-hotkey-dialog .bp3-dialog-body {\n  margin: 0;\n  padding: 0;\n}\n.bp3-hotkey-dialog .bp3-hotkey-label {\n  -webkit-box-flex: 1;\n  -ms-flex-positive: 1;\n  flex-grow: 1;\n}\n.bp3-hotkey-column {\n  margin: auto;\n  max-height: 80vh;\n  overflow-y: auto;\n  padding: 30px;\n}\n.bp3-hotkey-column .bp3-heading {\n  margin-bottom: 20px;\n}\n.bp3-hotkey-column .bp3-heading:not(:first-child) {\n  margin-top: 40px;\n}\n.bp3-hotkey {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: justify;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  margin-right: 0;\n  margin-left: 0;\n}\n.bp3-hotkey:not(:last-child) {\n  margin-bottom: 10px;\n}\n.bp3-icon,\n.bp3-icon-standard,\n.bp3-icon-large {\n  display: inline-block;\n}\n.bp3-icon.bp3-intent-primary,\n.bp3-icon-standard.bp3-intent-primary,\n.bp3-icon-large.bp3-intent-primary {\n  color: #106ba3;\n}\n.bp3-dark .bp3-icon.bp3-intent-primary,\n.bp3-dark .bp3-icon-standard.bp3-intent-primary,\n.bp3-dark .bp3-icon-large.bp3-intent-primary {\n  color: #48aff0;\n}\n.bp3-icon.bp3-intent-success,\n.bp3-icon-standard.bp3-intent-success,\n.bp3-icon-large.bp3-intent-success {\n  color: #0d8050;\n}\n.bp3-dark .bp3-icon.bp3-intent-success,\n.bp3-dark .bp3-icon-standard.bp3-intent-success,\n.bp3-dark .bp3-icon-large.bp3-intent-success {\n  color: #3dcc91;\n}\n.bp3-icon.bp3-intent-warning,\n.bp3-icon-standard.bp3-intent-warning,\n.bp3-icon-large.bp3-intent-warning {\n  color: #bf7326;\n}\n.bp3-dark .bp3-icon.bp3-intent-warning,\n.bp3-dark .bp3-icon-standard.bp3-intent-warning,\n.bp3-dark .bp3-icon-large.bp3-intent-warning {\n  color: #ffb366;\n}\n.bp3-icon.bp3-intent-danger,\n.bp3-icon-standard.bp3-intent-danger,\n.bp3-icon-large.bp3-intent-danger {\n  color: #c23030;\n}\n.bp3-dark .bp3-icon.bp3-intent-danger,\n.bp3-dark .bp3-icon-standard.bp3-intent-danger,\n.bp3-dark .bp3-icon-large.bp3-intent-danger {\n  color: #ff7373;\n}\nspan.bp3-icon-standard {\n  line-height: 1;\n  font-family: "Icons16", sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  font-style: normal;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n}\nspan.bp3-icon-large {\n  line-height: 1;\n  font-family: "Icons20", sans-serif;\n  font-size: 20px;\n  font-weight: 400;\n  font-style: normal;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n}\nspan.bp3-icon {\n  line-height: 1;\n  font-family: "Icons20";\n  font-size: inherit;\n  font-weight: 400;\n  font-style: normal;\n}\nspan.bp3-icon::before {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n}\n.bp3-icon-add::before {\n  content: "\\E63E";\n}\n.bp3-icon-add-column-left::before {\n  content: "\\E6F9";\n}\n.bp3-icon-add-column-right::before {\n  content: "\\E6FA";\n}\n.bp3-icon-add-row-bottom::before {\n  content: "\\E6F8";\n}\n.bp3-icon-add-row-top::before {\n  content: "\\E6F7";\n}\n.bp3-icon-add-to-artifact::before {\n  content: "\\E67C";\n}\n.bp3-icon-add-to-folder::before {\n  content: "\\E6D2";\n}\n.bp3-icon-airplane::before {\n  content: "\\E74B";\n}\n.bp3-icon-align-center::before {\n  content: "\\E603";\n}\n.bp3-icon-align-justify::before {\n  content: "\\E605";\n}\n.bp3-icon-align-left::before {\n  content: "\\E602";\n}\n.bp3-icon-align-right::before {\n  content: "\\E604";\n}\n.bp3-icon-alignment-bottom::before {\n  content: "\\E727";\n}\n.bp3-icon-alignment-horizontal-center::before {\n  content: "\\E726";\n}\n.bp3-icon-alignment-left::before {\n  content: "\\E722";\n}\n.bp3-icon-alignment-right::before {\n  content: "\\E724";\n}\n.bp3-icon-alignment-top::before {\n  content: "\\E725";\n}\n.bp3-icon-alignment-vertical-center::before {\n  content: "\\E723";\n}\n.bp3-icon-annotation::before {\n  content: "\\E6F0";\n}\n.bp3-icon-application::before {\n  content: "\\E735";\n}\n.bp3-icon-applications::before {\n  content: "\\E621";\n}\n.bp3-icon-arrow-bottom-left::before {\n  content: "\\2199";\n}\n.bp3-icon-arrow-bottom-right::before {\n  content: "\\2198";\n}\n.bp3-icon-arrow-down::before {\n  content: "\\2193";\n}\n.bp3-icon-arrow-left::before {\n  content: "\\2190";\n}\n.bp3-icon-arrow-right::before {\n  content: "\\2192";\n}\n.bp3-icon-arrow-top-left::before {\n  content: "\\2196";\n}\n.bp3-icon-arrow-top-right::before {\n  content: "\\2197";\n}\n.bp3-icon-arrow-up::before {\n  content: "\\2191";\n}\n.bp3-icon-arrows-horizontal::before {\n  content: "\\2194";\n}\n.bp3-icon-arrows-vertical::before {\n  content: "\\2195";\n}\n.bp3-icon-asterisk::before {\n  content: "*";\n}\n.bp3-icon-automatic-updates::before {\n  content: "\\E65F";\n}\n.bp3-icon-badge::before {\n  content: "\\E6E3";\n}\n.bp3-icon-ban-circle::before {\n  content: "\\E69D";\n}\n.bp3-icon-bank-account::before {\n  content: "\\E76F";\n}\n.bp3-icon-barcode::before {\n  content: "\\E676";\n}\n.bp3-icon-blank::before {\n  content: "\\E900";\n}\n.bp3-icon-blocked-person::before {\n  content: "\\E768";\n}\n.bp3-icon-bold::before {\n  content: "\\E606";\n}\n.bp3-icon-book::before {\n  content: "\\E6B8";\n}\n.bp3-icon-bookmark::before {\n  content: "\\E61A";\n}\n.bp3-icon-box::before {\n  content: "\\E6BF";\n}\n.bp3-icon-briefcase::before {\n  content: "\\E674";\n}\n.bp3-icon-build::before {\n  content: "\\E72D";\n}\n.bp3-icon-calculator::before {\n  content: "\\E70B";\n}\n.bp3-icon-calendar::before {\n  content: "\\E62B";\n}\n.bp3-icon-camera::before {\n  content: "\\E69E";\n}\n.bp3-icon-caret-down::before {\n  content: "\\2304";\n}\n.bp3-icon-caret-left::before {\n  content: "\\2329";\n}\n.bp3-icon-caret-right::before {\n  content: "\\232A";\n}\n.bp3-icon-caret-up::before {\n  content: "\\2303";\n}\n.bp3-icon-cell-tower::before {\n  content: "\\E770";\n}\n.bp3-icon-changes::before {\n  content: "\\E623";\n}\n.bp3-icon-chart::before {\n  content: "\\E67E";\n}\n.bp3-icon-chat::before {\n  content: "\\E689";\n}\n.bp3-icon-chevron-backward::before {\n  content: "\\E6DF";\n}\n.bp3-icon-chevron-down::before {\n  content: "\\E697";\n}\n.bp3-icon-chevron-forward::before {\n  content: "\\E6E0";\n}\n.bp3-icon-chevron-left::before {\n  content: "\\E694";\n}\n.bp3-icon-chevron-right::before {\n  content: "\\E695";\n}\n.bp3-icon-chevron-up::before {\n  content: "\\E696";\n}\n.bp3-icon-circle::before {\n  content: "\\E66A";\n}\n.bp3-icon-circle-arrow-down::before {\n  content: "\\E68E";\n}\n.bp3-icon-circle-arrow-left::before {\n  content: "\\E68C";\n}\n.bp3-icon-circle-arrow-right::before {\n  content: "\\E68B";\n}\n.bp3-icon-circle-arrow-up::before {\n  content: "\\E68D";\n}\n.bp3-icon-citation::before {\n  content: "\\E61B";\n}\n.bp3-icon-clipboard::before {\n  content: "\\E61D";\n}\n.bp3-icon-cloud::before {\n  content: "\\2601";\n}\n.bp3-icon-cloud-download::before {\n  content: "\\E690";\n}\n.bp3-icon-cloud-upload::before {\n  content: "\\E691";\n}\n.bp3-icon-code::before {\n  content: "\\E661";\n}\n.bp3-icon-code-block::before {\n  content: "\\E6C5";\n}\n.bp3-icon-cog::before {\n  content: "\\E645";\n}\n.bp3-icon-collapse-all::before {\n  content: "\\E763";\n}\n.bp3-icon-column-layout::before {\n  content: "\\E6DA";\n}\n.bp3-icon-comment::before {\n  content: "\\E68A";\n}\n.bp3-icon-comparison::before {\n  content: "\\E637";\n}\n.bp3-icon-compass::before {\n  content: "\\E79C";\n}\n.bp3-icon-compressed::before {\n  content: "\\E6C0";\n}\n.bp3-icon-confirm::before {\n  content: "\\E639";\n}\n.bp3-icon-console::before {\n  content: "\\E79B";\n}\n.bp3-icon-contrast::before {\n  content: "\\E6CB";\n}\n.bp3-icon-control::before {\n  content: "\\E67F";\n}\n.bp3-icon-credit-card::before {\n  content: "\\E649";\n}\n.bp3-icon-cross::before {\n  content: "\\2717";\n}\n.bp3-icon-crown::before {\n  content: "\\E7B4";\n}\n.bp3-icon-curved-range-chart::before {\n  content: "\\E71B";\n}\n.bp3-icon-cut::before {\n  content: "\\E6EF";\n}\n.bp3-icon-dashboard::before {\n  content: "\\E751";\n}\n.bp3-icon-database::before {\n  content: "\\E683";\n}\n.bp3-icon-delete::before {\n  content: "\\E644";\n}\n.bp3-icon-delta::before {\n  content: "\\394";\n}\n.bp3-icon-derive-column::before {\n  content: "\\E739";\n}\n.bp3-icon-desktop::before {\n  content: "\\E6AF";\n}\n.bp3-icon-diagram-tree::before {\n  content: "\\E7B3";\n}\n.bp3-icon-direction-left::before {\n  content: "\\E681";\n}\n.bp3-icon-direction-right::before {\n  content: "\\E682";\n}\n.bp3-icon-disable::before {\n  content: "\\E600";\n}\n.bp3-icon-document::before {\n  content: "\\E630";\n}\n.bp3-icon-document-open::before {\n  content: "\\E71E";\n}\n.bp3-icon-document-share::before {\n  content: "\\E71F";\n}\n.bp3-icon-dollar::before {\n  content: "$";\n}\n.bp3-icon-dot::before {\n  content: "\\2022";\n}\n.bp3-icon-double-caret-horizontal::before {\n  content: "\\E6C7";\n}\n.bp3-icon-double-caret-vertical::before {\n  content: "\\E6C6";\n}\n.bp3-icon-double-chevron-down::before {\n  content: "\\E703";\n}\n.bp3-icon-double-chevron-left::before {\n  content: "\\E6FF";\n}\n.bp3-icon-double-chevron-right::before {\n  content: "\\E701";\n}\n.bp3-icon-double-chevron-up::before {\n  content: "\\E702";\n}\n.bp3-icon-doughnut-chart::before {\n  content: "\\E6CE";\n}\n.bp3-icon-download::before {\n  content: "\\E62F";\n}\n.bp3-icon-drag-handle-horizontal::before {\n  content: "\\E716";\n}\n.bp3-icon-drag-handle-vertical::before {\n  content: "\\E715";\n}\n.bp3-icon-draw::before {\n  content: "\\E66B";\n}\n.bp3-icon-drive-time::before {\n  content: "\\E615";\n}\n.bp3-icon-duplicate::before {\n  content: "\\E69C";\n}\n.bp3-icon-edit::before {\n  content: "\\270E";\n}\n.bp3-icon-eject::before {\n  content: "\\23CF";\n}\n.bp3-icon-endorsed::before {\n  content: "\\E75F";\n}\n.bp3-icon-envelope::before {\n  content: "\\2709";\n}\n.bp3-icon-eraser::before {\n  content: "\\E773";\n}\n.bp3-icon-error::before {\n  content: "\\E648";\n}\n.bp3-icon-euro::before {\n  content: "\\20AC";\n}\n.bp3-icon-exchange::before {\n  content: "\\E636";\n}\n.bp3-icon-exclude-row::before {\n  content: "\\E6EA";\n}\n.bp3-icon-expand-all::before {\n  content: "\\E764";\n}\n.bp3-icon-export::before {\n  content: "\\E633";\n}\n.bp3-icon-eye-off::before {\n  content: "\\E6CC";\n}\n.bp3-icon-eye-on::before {\n  content: "\\E75A";\n}\n.bp3-icon-eye-open::before {\n  content: "\\E66F";\n}\n.bp3-icon-fast-backward::before {\n  content: "\\E6A8";\n}\n.bp3-icon-fast-forward::before {\n  content: "\\E6AC";\n}\n.bp3-icon-feed::before {\n  content: "\\E656";\n}\n.bp3-icon-feed-subscribed::before {\n  content: "\\E78F";\n}\n.bp3-icon-film::before {\n  content: "\\E6A1";\n}\n.bp3-icon-filter::before {\n  content: "\\E638";\n}\n.bp3-icon-filter-keep::before {\n  content: "\\E78C";\n}\n.bp3-icon-filter-list::before {\n  content: "\\E6EE";\n}\n.bp3-icon-filter-remove::before {\n  content: "\\E78D";\n}\n.bp3-icon-flag::before {\n  content: "\\2691";\n}\n.bp3-icon-flame::before {\n  content: "\\E7A9";\n}\n.bp3-icon-flash::before {\n  content: "\\E6B3";\n}\n.bp3-icon-floppy-disk::before {\n  content: "\\E6B7";\n}\n.bp3-icon-flows::before {\n  content: "\\E659";\n}\n.bp3-icon-folder-close::before {\n  content: "\\E652";\n}\n.bp3-icon-folder-new::before {\n  content: "\\E7B0";\n}\n.bp3-icon-folder-open::before {\n  content: "\\E651";\n}\n.bp3-icon-folder-shared::before {\n  content: "\\E653";\n}\n.bp3-icon-folder-shared-open::before {\n  content: "\\E670";\n}\n.bp3-icon-follower::before {\n  content: "\\E760";\n}\n.bp3-icon-following::before {\n  content: "\\E761";\n}\n.bp3-icon-font::before {\n  content: "\\E6B4";\n}\n.bp3-icon-fork::before {\n  content: "\\E63A";\n}\n.bp3-icon-form::before {\n  content: "\\E795";\n}\n.bp3-icon-full-circle::before {\n  content: "\\E685";\n}\n.bp3-icon-full-stacked-chart::before {\n  content: "\\E75E";\n}\n.bp3-icon-fullscreen::before {\n  content: "\\E699";\n}\n.bp3-icon-function::before {\n  content: "\\E6E5";\n}\n.bp3-icon-gantt-chart::before {\n  content: "\\E6F4";\n}\n.bp3-icon-geolocation::before {\n  content: "\\E640";\n}\n.bp3-icon-geosearch::before {\n  content: "\\E613";\n}\n.bp3-icon-git-branch::before {\n  content: "\\E72A";\n}\n.bp3-icon-git-commit::before {\n  content: "\\E72B";\n}\n.bp3-icon-git-merge::before {\n  content: "\\E729";\n}\n.bp3-icon-git-new-branch::before {\n  content: "\\E749";\n}\n.bp3-icon-git-pull::before {\n  content: "\\E728";\n}\n.bp3-icon-git-push::before {\n  content: "\\E72C";\n}\n.bp3-icon-git-repo::before {\n  content: "\\E748";\n}\n.bp3-icon-glass::before {\n  content: "\\E6B1";\n}\n.bp3-icon-globe::before {\n  content: "\\E666";\n}\n.bp3-icon-globe-network::before {\n  content: "\\E7B5";\n}\n.bp3-icon-graph::before {\n  content: "\\E673";\n}\n.bp3-icon-graph-remove::before {\n  content: "\\E609";\n}\n.bp3-icon-grid::before {\n  content: "\\E6D0";\n}\n.bp3-icon-grid-view::before {\n  content: "\\E6E4";\n}\n.bp3-icon-group-objects::before {\n  content: "\\E60A";\n}\n.bp3-icon-grouped-bar-chart::before {\n  content: "\\E75D";\n}\n.bp3-icon-hand::before {\n  content: "\\E6DE";\n}\n.bp3-icon-hand-down::before {\n  content: "\\E6BB";\n}\n.bp3-icon-hand-left::before {\n  content: "\\E6BC";\n}\n.bp3-icon-hand-right::before {\n  content: "\\E6B9";\n}\n.bp3-icon-hand-up::before {\n  content: "\\E6BA";\n}\n.bp3-icon-header::before {\n  content: "\\E6B5";\n}\n.bp3-icon-header-one::before {\n  content: "\\E793";\n}\n.bp3-icon-header-two::before {\n  content: "\\E794";\n}\n.bp3-icon-headset::before {\n  content: "\\E6DC";\n}\n.bp3-icon-heart::before {\n  content: "\\2665";\n}\n.bp3-icon-heart-broken::before {\n  content: "\\E7A2";\n}\n.bp3-icon-heat-grid::before {\n  content: "\\E6F3";\n}\n.bp3-icon-heatmap::before {\n  content: "\\E614";\n}\n.bp3-icon-help::before {\n  content: "?";\n}\n.bp3-icon-helper-management::before {\n  content: "\\E66D";\n}\n.bp3-icon-highlight::before {\n  content: "\\E6ED";\n}\n.bp3-icon-history::before {\n  content: "\\E64A";\n}\n.bp3-icon-home::before {\n  content: "\\2302";\n}\n.bp3-icon-horizontal-bar-chart::before {\n  content: "\\E70C";\n}\n.bp3-icon-horizontal-bar-chart-asc::before {\n  content: "\\E75C";\n}\n.bp3-icon-horizontal-bar-chart-desc::before {\n  content: "\\E71D";\n}\n.bp3-icon-horizontal-distribution::before {\n  content: "\\E720";\n}\n.bp3-icon-id-number::before {\n  content: "\\E771";\n}\n.bp3-icon-image-rotate-left::before {\n  content: "\\E73A";\n}\n.bp3-icon-image-rotate-right::before {\n  content: "\\E73B";\n}\n.bp3-icon-import::before {\n  content: "\\E632";\n}\n.bp3-icon-inbox::before {\n  content: "\\E629";\n}\n.bp3-icon-info-sign::before {\n  content: "\\2139";\n}\n.bp3-icon-inner-join::before {\n  content: "\\E7A3";\n}\n.bp3-icon-insert::before {\n  content: "\\E66C";\n}\n.bp3-icon-intersection::before {\n  content: "\\E765";\n}\n.bp3-icon-ip-address::before {\n  content: "\\E772";\n}\n.bp3-icon-issue::before {\n  content: "\\E774";\n}\n.bp3-icon-issue-closed::before {\n  content: "\\E776";\n}\n.bp3-icon-issue-new::before {\n  content: "\\E775";\n}\n.bp3-icon-italic::before {\n  content: "\\E607";\n}\n.bp3-icon-join-table::before {\n  content: "\\E738";\n}\n.bp3-icon-key::before {\n  content: "\\E78E";\n}\n.bp3-icon-key-backspace::before {\n  content: "\\E707";\n}\n.bp3-icon-key-command::before {\n  content: "\\E705";\n}\n.bp3-icon-key-control::before {\n  content: "\\E704";\n}\n.bp3-icon-key-delete::before {\n  content: "\\E708";\n}\n.bp3-icon-key-enter::before {\n  content: "\\E70A";\n}\n.bp3-icon-key-escape::before {\n  content: "\\E709";\n}\n.bp3-icon-key-option::before {\n  content: "\\E742";\n}\n.bp3-icon-key-shift::before {\n  content: "\\E706";\n}\n.bp3-icon-key-tab::before {\n  content: "\\E757";\n}\n.bp3-icon-known-vehicle::before {\n  content: "\\E73C";\n}\n.bp3-icon-label::before {\n  content: "\\E665";\n}\n.bp3-icon-layer::before {\n  content: "\\E6CF";\n}\n.bp3-icon-layers::before {\n  content: "\\E618";\n}\n.bp3-icon-layout::before {\n  content: "\\E60C";\n}\n.bp3-icon-layout-auto::before {\n  content: "\\E60D";\n}\n.bp3-icon-layout-balloon::before {\n  content: "\\E6D3";\n}\n.bp3-icon-layout-circle::before {\n  content: "\\E60E";\n}\n.bp3-icon-layout-grid::before {\n  content: "\\E610";\n}\n.bp3-icon-layout-group-by::before {\n  content: "\\E611";\n}\n.bp3-icon-layout-hierarchy::before {\n  content: "\\E60F";\n}\n.bp3-icon-layout-linear::before {\n  content: "\\E6C3";\n}\n.bp3-icon-layout-skew-grid::before {\n  content: "\\E612";\n}\n.bp3-icon-layout-sorted-clusters::before {\n  content: "\\E6D4";\n}\n.bp3-icon-left-join::before {\n  content: "\\E7A4";\n}\n.bp3-icon-lightbulb::before {\n  content: "\\E6B0";\n}\n.bp3-icon-link::before {\n  content: "\\E62D";\n}\n.bp3-icon-list::before {\n  content: "\\2630";\n}\n.bp3-icon-list-detail-view::before {\n  content: "\\E743";\n}\n.bp3-icon-locate::before {\n  content: "\\E619";\n}\n.bp3-icon-lock::before {\n  content: "\\E625";\n}\n.bp3-icon-log-in::before {\n  content: "\\E69A";\n}\n.bp3-icon-log-out::before {\n  content: "\\E64C";\n}\n.bp3-icon-manual::before {\n  content: "\\E6F6";\n}\n.bp3-icon-manually-entered-data::before {\n  content: "\\E74A";\n}\n.bp3-icon-map::before {\n  content: "\\E662";\n}\n.bp3-icon-map-create::before {\n  content: "\\E741";\n}\n.bp3-icon-map-marker::before {\n  content: "\\E67D";\n}\n.bp3-icon-maximize::before {\n  content: "\\E635";\n}\n.bp3-icon-media::before {\n  content: "\\E62C";\n}\n.bp3-icon-menu::before {\n  content: "\\E762";\n}\n.bp3-icon-menu-closed::before {\n  content: "\\E655";\n}\n.bp3-icon-menu-open::before {\n  content: "\\E654";\n}\n.bp3-icon-merge-columns::before {\n  content: "\\E74F";\n}\n.bp3-icon-merge-links::before {\n  content: "\\E60B";\n}\n.bp3-icon-minimize::before {\n  content: "\\E634";\n}\n.bp3-icon-minus::before {\n  content: "\\2212";\n}\n.bp3-icon-mobile-phone::before {\n  content: "\\E717";\n}\n.bp3-icon-mobile-video::before {\n  content: "\\E69F";\n}\n.bp3-icon-moon::before {\n  content: "\\E754";\n}\n.bp3-icon-more::before {\n  content: "\\E62A";\n}\n.bp3-icon-mountain::before {\n  content: "\\E7B1";\n}\n.bp3-icon-move::before {\n  content: "\\E693";\n}\n.bp3-icon-mugshot::before {\n  content: "\\E6DB";\n}\n.bp3-icon-multi-select::before {\n  content: "\\E680";\n}\n.bp3-icon-music::before {\n  content: "\\E6A6";\n}\n.bp3-icon-new-grid-item::before {\n  content: "\\E747";\n}\n.bp3-icon-new-link::before {\n  content: "\\E65C";\n}\n.bp3-icon-new-object::before {\n  content: "\\E65D";\n}\n.bp3-icon-new-person::before {\n  content: "\\E6E9";\n}\n.bp3-icon-new-prescription::before {\n  content: "\\E78B";\n}\n.bp3-icon-new-text-box::before {\n  content: "\\E65B";\n}\n.bp3-icon-ninja::before {\n  content: "\\E675";\n}\n.bp3-icon-notifications::before {\n  content: "\\E624";\n}\n.bp3-icon-notifications-updated::before {\n  content: "\\E7B8";\n}\n.bp3-icon-numbered-list::before {\n  content: "\\E746";\n}\n.bp3-icon-numerical::before {\n  content: "\\E756";\n}\n.bp3-icon-office::before {\n  content: "\\E69B";\n}\n.bp3-icon-offline::before {\n  content: "\\E67A";\n}\n.bp3-icon-oil-field::before {\n  content: "\\E73F";\n}\n.bp3-icon-one-column::before {\n  content: "\\E658";\n}\n.bp3-icon-outdated::before {\n  content: "\\E7A8";\n}\n.bp3-icon-page-layout::before {\n  content: "\\E660";\n}\n.bp3-icon-panel-stats::before {\n  content: "\\E777";\n}\n.bp3-icon-panel-table::before {\n  content: "\\E778";\n}\n.bp3-icon-paperclip::before {\n  content: "\\E664";\n}\n.bp3-icon-paragraph::before {\n  content: "\\E76C";\n}\n.bp3-icon-path::before {\n  content: "\\E753";\n}\n.bp3-icon-path-search::before {\n  content: "\\E65E";\n}\n.bp3-icon-pause::before {\n  content: "\\E6A9";\n}\n.bp3-icon-people::before {\n  content: "\\E63D";\n}\n.bp3-icon-percentage::before {\n  content: "\\E76A";\n}\n.bp3-icon-person::before {\n  content: "\\E63C";\n}\n.bp3-icon-phone::before {\n  content: "\\260E";\n}\n.bp3-icon-pie-chart::before {\n  content: "\\E684";\n}\n.bp3-icon-pin::before {\n  content: "\\E646";\n}\n.bp3-icon-pivot::before {\n  content: "\\E6F1";\n}\n.bp3-icon-pivot-table::before {\n  content: "\\E6EB";\n}\n.bp3-icon-play::before {\n  content: "\\E6AB";\n}\n.bp3-icon-plus::before {\n  content: "+";\n}\n.bp3-icon-polygon-filter::before {\n  content: "\\E6D1";\n}\n.bp3-icon-power::before {\n  content: "\\E6D9";\n}\n.bp3-icon-predictive-analysis::before {\n  content: "\\E617";\n}\n.bp3-icon-prescription::before {\n  content: "\\E78A";\n}\n.bp3-icon-presentation::before {\n  content: "\\E687";\n}\n.bp3-icon-print::before {\n  content: "\\2399";\n}\n.bp3-icon-projects::before {\n  content: "\\E622";\n}\n.bp3-icon-properties::before {\n  content: "\\E631";\n}\n.bp3-icon-property::before {\n  content: "\\E65A";\n}\n.bp3-icon-publish-function::before {\n  content: "\\E752";\n}\n.bp3-icon-pulse::before {\n  content: "\\E6E8";\n}\n.bp3-icon-random::before {\n  content: "\\E698";\n}\n.bp3-icon-record::before {\n  content: "\\E6AE";\n}\n.bp3-icon-redo::before {\n  content: "\\E6C4";\n}\n.bp3-icon-refresh::before {\n  content: "\\E643";\n}\n.bp3-icon-regression-chart::before {\n  content: "\\E758";\n}\n.bp3-icon-remove::before {\n  content: "\\E63F";\n}\n.bp3-icon-remove-column::before {\n  content: "\\E755";\n}\n.bp3-icon-remove-column-left::before {\n  content: "\\E6FD";\n}\n.bp3-icon-remove-column-right::before {\n  content: "\\E6FE";\n}\n.bp3-icon-remove-row-bottom::before {\n  content: "\\E6FC";\n}\n.bp3-icon-remove-row-top::before {\n  content: "\\E6FB";\n}\n.bp3-icon-repeat::before {\n  content: "\\E692";\n}\n.bp3-icon-resolve::before {\n  content: "\\E672";\n}\n.bp3-icon-rig::before {\n  content: "\\E740";\n}\n.bp3-icon-right-join::before {\n  content: "\\E7A5";\n}\n.bp3-icon-ring::before {\n  content: "\\E6F2";\n}\n.bp3-icon-rotate-document::before {\n  content: "\\E6E1";\n}\n.bp3-icon-rotate-page::before {\n  content: "\\E6E2";\n}\n.bp3-icon-satellite::before {\n  content: "\\E76B";\n}\n.bp3-icon-saved::before {\n  content: "\\E6B6";\n}\n.bp3-icon-scatter-plot::before {\n  content: "\\E73E";\n}\n.bp3-icon-search::before {\n  content: "\\E64B";\n}\n.bp3-icon-search-around::before {\n  content: "\\E608";\n}\n.bp3-icon-search-template::before {\n  content: "\\E628";\n}\n.bp3-icon-search-text::before {\n  content: "\\E663";\n}\n.bp3-icon-segmented-control::before {\n  content: "\\E6EC";\n}\n.bp3-icon-select::before {\n  content: "\\E616";\n}\n.bp3-icon-selection::before {\n  content: "\\29BF";\n}\n.bp3-icon-send-to::before {\n  content: "\\E66E";\n}\n.bp3-icon-send-to-graph::before {\n  content: "\\E736";\n}\n.bp3-icon-send-to-map::before {\n  content: "\\E737";\n}\n.bp3-icon-series-add::before {\n  content: "\\E796";\n}\n.bp3-icon-series-configuration::before {\n  content: "\\E79A";\n}\n.bp3-icon-series-derived::before {\n  content: "\\E799";\n}\n.bp3-icon-series-filtered::before {\n  content: "\\E798";\n}\n.bp3-icon-series-search::before {\n  content: "\\E797";\n}\n.bp3-icon-settings::before {\n  content: "\\E6A2";\n}\n.bp3-icon-share::before {\n  content: "\\E62E";\n}\n.bp3-icon-shield::before {\n  content: "\\E7B2";\n}\n.bp3-icon-shop::before {\n  content: "\\E6C2";\n}\n.bp3-icon-shopping-cart::before {\n  content: "\\E6C1";\n}\n.bp3-icon-sim-card::before {\n  content: "\\E718";\n}\n.bp3-icon-slash::before {\n  content: "\\E769";\n}\n.bp3-icon-small-cross::before {\n  content: "\\E6D7";\n}\n.bp3-icon-small-minus::before {\n  content: "\\E70E";\n}\n.bp3-icon-small-plus::before {\n  content: "\\E70D";\n}\n.bp3-icon-small-tick::before {\n  content: "\\E6D8";\n}\n.bp3-icon-snowflake::before {\n  content: "\\E7B6";\n}\n.bp3-icon-social-media::before {\n  content: "\\E671";\n}\n.bp3-icon-sort::before {\n  content: "\\E64F";\n}\n.bp3-icon-sort-alphabetical::before {\n  content: "\\E64D";\n}\n.bp3-icon-sort-alphabetical-desc::before {\n  content: "\\E6C8";\n}\n.bp3-icon-sort-asc::before {\n  content: "\\E6D5";\n}\n.bp3-icon-sort-desc::before {\n  content: "\\E6D6";\n}\n.bp3-icon-sort-numerical::before {\n  content: "\\E64E";\n}\n.bp3-icon-sort-numerical-desc::before {\n  content: "\\E6C9";\n}\n.bp3-icon-split-columns::before {\n  content: "\\E750";\n}\n.bp3-icon-square::before {\n  content: "\\E686";\n}\n.bp3-icon-stacked-chart::before {\n  content: "\\E6E7";\n}\n.bp3-icon-star::before {\n  content: "\\2605";\n}\n.bp3-icon-star-empty::before {\n  content: "\\2606";\n}\n.bp3-icon-step-backward::before {\n  content: "\\E6A7";\n}\n.bp3-icon-step-chart::before {\n  content: "\\E70F";\n}\n.bp3-icon-step-forward::before {\n  content: "\\E6AD";\n}\n.bp3-icon-stop::before {\n  content: "\\E6AA";\n}\n.bp3-icon-strikethrough::before {\n  content: "\\E7A6";\n}\n.bp3-icon-style::before {\n  content: "\\E601";\n}\n.bp3-icon-swap-horizontal::before {\n  content: "\\E745";\n}\n.bp3-icon-swap-vertical::before {\n  content: "\\E744";\n}\n.bp3-icon-symbol-circle::before {\n  content: "\\E72E";\n}\n.bp3-icon-symbol-cross::before {\n  content: "\\E731";\n}\n.bp3-icon-symbol-diamond::before {\n  content: "\\E730";\n}\n.bp3-icon-symbol-square::before {\n  content: "\\E72F";\n}\n.bp3-icon-symbol-triangle-down::before {\n  content: "\\E733";\n}\n.bp3-icon-symbol-triangle-up::before {\n  content: "\\E732";\n}\n.bp3-icon-tag::before {\n  content: "\\E61C";\n}\n.bp3-icon-take-action::before {\n  content: "\\E6CA";\n}\n.bp3-icon-taxi::before {\n  content: "\\E79E";\n}\n.bp3-icon-text-highlight::before {\n  content: "\\E6DD";\n}\n.bp3-icon-th::before {\n  content: "\\E667";\n}\n.bp3-icon-th-derived::before {\n  content: "\\E669";\n}\n.bp3-icon-th-list::before {\n  content: "\\E668";\n}\n.bp3-icon-thumbs-down::before {\n  content: "\\E6BE";\n}\n.bp3-icon-thumbs-up::before {\n  content: "\\E6BD";\n}\n.bp3-icon-tick::before {\n  content: "\\2713";\n}\n.bp3-icon-tick-circle::before {\n  content: "\\E779";\n}\n.bp3-icon-time::before {\n  content: "\\23F2";\n}\n.bp3-icon-timeline-area-chart::before {\n  content: "\\E6CD";\n}\n.bp3-icon-timeline-bar-chart::before {\n  content: "\\E620";\n}\n.bp3-icon-timeline-events::before {\n  content: "\\E61E";\n}\n.bp3-icon-timeline-line-chart::before {\n  content: "\\E61F";\n}\n.bp3-icon-tint::before {\n  content: "\\E6B2";\n}\n.bp3-icon-torch::before {\n  content: "\\E677";\n}\n.bp3-icon-train::before {\n  content: "\\E79F";\n}\n.bp3-icon-translate::before {\n  content: "\\E759";\n}\n.bp3-icon-trash::before {\n  content: "\\E63B";\n}\n.bp3-icon-tree::before {\n  content: "\\E7B7";\n}\n.bp3-icon-trending-down::before {\n  content: "\\E71A";\n}\n.bp3-icon-trending-up::before {\n  content: "\\E719";\n}\n.bp3-icon-two-columns::before {\n  content: "\\E657";\n}\n.bp3-icon-underline::before {\n  content: "\\2381";\n}\n.bp3-icon-undo::before {\n  content: "\\238C";\n}\n.bp3-icon-ungroup-objects::before {\n  content: "\\E688";\n}\n.bp3-icon-unknown-vehicle::before {\n  content: "\\E73D";\n}\n.bp3-icon-unlock::before {\n  content: "\\E626";\n}\n.bp3-icon-unpin::before {\n  content: "\\E650";\n}\n.bp3-icon-unresolve::before {\n  content: "\\E679";\n}\n.bp3-icon-updated::before {\n  content: "\\E7A7";\n}\n.bp3-icon-upload::before {\n  content: "\\E68F";\n}\n.bp3-icon-user::before {\n  content: "\\E627";\n}\n.bp3-icon-variable::before {\n  content: "\\E6F5";\n}\n.bp3-icon-vertical-bar-chart-asc::before {\n  content: "\\E75B";\n}\n.bp3-icon-vertical-bar-chart-desc::before {\n  content: "\\E71C";\n}\n.bp3-icon-vertical-distribution::before {\n  content: "\\E721";\n}\n.bp3-icon-video::before {\n  content: "\\E6A0";\n}\n.bp3-icon-volume-down::before {\n  content: "\\E6A4";\n}\n.bp3-icon-volume-off::before {\n  content: "\\E6A3";\n}\n.bp3-icon-volume-up::before {\n  content: "\\E6A5";\n}\n.bp3-icon-walk::before {\n  content: "\\E79D";\n}\n.bp3-icon-warning-sign::before {\n  content: "\\E647";\n}\n.bp3-icon-waterfall-chart::before {\n  content: "\\E6E6";\n}\n.bp3-icon-widget::before {\n  content: "\\E678";\n}\n.bp3-icon-widget-button::before {\n  content: "\\E790";\n}\n.bp3-icon-widget-footer::before {\n  content: "\\E792";\n}\n.bp3-icon-widget-header::before {\n  content: "\\E791";\n}\n.bp3-icon-wrench::before {\n  content: "\\E734";\n}\n.bp3-icon-zoom-in::before {\n  content: "\\E641";\n}\n.bp3-icon-zoom-out::before {\n  content: "\\E642";\n}\n.bp3-icon-zoom-to-fit::before {\n  content: "\\E67B";\n}\nsvg.bp3-icon {\n  -webkit-box-flex: 0;\n  -ms-flex: 0 0 auto;\n  flex: 0 0 auto;\n  vertical-align: top;\n  fill: currentColor;\n}\n.bp3-submenu > .bp3-popover-wrapper {\n  display: block;\n}\n.bp3-submenu .bp3-popover-target {\n  display: block;\n}\n.bp3-submenu.bp3-popover {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  padding: 0 5px;\n}\n.bp3-submenu.bp3-popover > .bp3-popover-content {\n  -webkit-box-shadow: 0 0 0 1px rgba(16,22,26,0.1), 0 2px 4px rgba(16,22,26,0.2), 0 8px 24px rgba(16,22,26,0.2);\n  box-shadow: 0 0 0 1px rgba(16,22,26,0.1), 0 2px 4px rgba(16,22,26,0.2), 0 8px 24px rgba(16,22,26,0.2);\n}\n.bp3-dark .bp3-submenu.bp3-popover,\n.bp3-submenu.bp3-popover.bp3-dark {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n}\n.bp3-dark .bp3-submenu.bp3-popover > .bp3-popover-content,\n.bp3-submenu.bp3-popover.bp3-dark > .bp3-popover-content {\n  -webkit-box-shadow: 0 0 0 1px rgba(16,22,26,0.2), 0 2px 4px rgba(16,22,26,0.4), 0 8px 24px rgba(16,22,26,0.4);\n  box-shadow: 0 0 0 1px rgba(16,22,26,0.2), 0 2px 4px rgba(16,22,26,0.4), 0 8px 24px rgba(16,22,26,0.4);\n}\n.bp3-menu {\n  margin: 0;\n  border-radius: 3px;\n  background: #fff;\n  min-width: 180px;\n  padding: 5px;\n  list-style: none;\n  text-align: left;\n  color: #182026;\n}\n.bp3-menu-divider {\n  display: block;\n  margin: 5px;\n  border-top: 1px solid rgba(16,22,26,0.15);\n}\n.bp3-dark .bp3-menu-divider {\n  border-top-color: rgba(255,255,255,0.15);\n}\n.bp3-menu-item {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -webkit-box-align: start;\n  -ms-flex-align: start;\n  align-items: flex-start;\n  border-radius: 2px;\n  padding: 5px 7px;\n  text-decoration: none;\n  line-height: 20px;\n  color: inherit;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.bp3-menu-item > * {\n  -webkit-box-flex: 0;\n  -ms-flex-positive: 0;\n  flex-grow: 0;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n}\n.bp3-menu-item > .bp3-fill {\n  -webkit-box-flex: 1;\n  -ms-flex-positive: 1;\n  flex-grow: 1;\n  -ms-flex-negative: 1;\n  flex-shrink: 1;\n}\n.bp3-menu-item::before,\n.bp3-menu-item > * {\n  margin-right: 7px;\n}\n.bp3-menu-item:empty::before,\n.bp3-menu-item > :last-child {\n  margin-right: 0;\n}\n.bp3-menu-item > .bp3-fill {\n  word-break: break-word;\n}\n.bp3-menu-item:hover,\n.bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-menu-item {\n  background-color: rgba(167,182,194,0.3);\n  cursor: pointer;\n  text-decoration: none;\n}\n.bp3-menu-item.bp3-disabled {\n  background-color: inherit;\n  cursor: not-allowed;\n  color: rgba(92,112,128,0.5);\n}\n.bp3-dark .bp3-menu-item {\n  color: inherit;\n}\n.bp3-dark .bp3-menu-item:hover,\n.bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-menu-item,\n.bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-menu-item {\n  background-color: rgba(138,155,168,0.15);\n  color: inherit;\n}\n.bp3-dark .bp3-menu-item.bp3-disabled {\n  background-color: inherit;\n  color: rgba(191,204,214,0.5);\n}\n.bp3-menu-item.bp3-intent-primary {\n  color: #106ba3;\n}\n.bp3-menu-item.bp3-intent-primary .bp3-icon {\n  color: inherit;\n}\n.bp3-menu-item.bp3-intent-primary::before,\n.bp3-menu-item.bp3-intent-primary::after,\n.bp3-menu-item.bp3-intent-primary .bp3-menu-item-label {\n  color: #106ba3;\n}\n.bp3-menu-item.bp3-intent-primary:hover,\n.bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-primary.bp3-menu-item,\n.bp3-menu-item.bp3-intent-primary.bp3-active {\n  background-color: #137cbd;\n}\n.bp3-menu-item.bp3-intent-primary:active {\n  background-color: #106ba3;\n}\n.bp3-menu-item.bp3-intent-primary:hover,\n.bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-primary.bp3-menu-item,\n.bp3-menu-item.bp3-intent-primary:hover::before,\n.bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-primary.bp3-menu-item::before,\n.bp3-menu-item.bp3-intent-primary:hover::after,\n.bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-primary.bp3-menu-item::after,\n.bp3-menu-item.bp3-intent-primary:hover .bp3-menu-item-label,\n.bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-primary.bp3-menu-item .bp3-menu-item-label,\n.bp3-menu-item.bp3-intent-primary:active,\n.bp3-menu-item.bp3-intent-primary:active::before,\n.bp3-menu-item.bp3-intent-primary:active::after,\n.bp3-menu-item.bp3-intent-primary:active .bp3-menu-item-label,\n.bp3-menu-item.bp3-intent-primary.bp3-active,\n.bp3-menu-item.bp3-intent-primary.bp3-active::before,\n.bp3-menu-item.bp3-intent-primary.bp3-active::after,\n.bp3-menu-item.bp3-intent-primary.bp3-active .bp3-menu-item-label {\n  color: #fff;\n}\n.bp3-menu-item.bp3-intent-success {\n  color: #0d8050;\n}\n.bp3-menu-item.bp3-intent-success .bp3-icon {\n  color: inherit;\n}\n.bp3-menu-item.bp3-intent-success::before,\n.bp3-menu-item.bp3-intent-success::after,\n.bp3-menu-item.bp3-intent-success .bp3-menu-item-label {\n  color: #0d8050;\n}\n.bp3-menu-item.bp3-intent-success:hover,\n.bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-success.bp3-menu-item,\n.bp3-menu-item.bp3-intent-success.bp3-active {\n  background-color: #0f9960;\n}\n.bp3-menu-item.bp3-intent-success:active {\n  background-color: #0d8050;\n}\n.bp3-menu-item.bp3-intent-success:hover,\n.bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-success.bp3-menu-item,\n.bp3-menu-item.bp3-intent-success:hover::before,\n.bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-success.bp3-menu-item::before,\n.bp3-menu-item.bp3-intent-success:hover::after,\n.bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-success.bp3-menu-item::after,\n.bp3-menu-item.bp3-intent-success:hover .bp3-menu-item-label,\n.bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-success.bp3-menu-item .bp3-menu-item-label,\n.bp3-menu-item.bp3-intent-success:active,\n.bp3-menu-item.bp3-intent-success:active::before,\n.bp3-menu-item.bp3-intent-success:active::after,\n.bp3-menu-item.bp3-intent-success:active .bp3-menu-item-label,\n.bp3-menu-item.bp3-intent-success.bp3-active,\n.bp3-menu-item.bp3-intent-success.bp3-active::before,\n.bp3-menu-item.bp3-intent-success.bp3-active::after,\n.bp3-menu-item.bp3-intent-success.bp3-active .bp3-menu-item-label {\n  color: #fff;\n}\n.bp3-menu-item.bp3-intent-warning {\n  color: #bf7326;\n}\n.bp3-menu-item.bp3-intent-warning .bp3-icon {\n  color: inherit;\n}\n.bp3-menu-item.bp3-intent-warning::before,\n.bp3-menu-item.bp3-intent-warning::after,\n.bp3-menu-item.bp3-intent-warning .bp3-menu-item-label {\n  color: #bf7326;\n}\n.bp3-menu-item.bp3-intent-warning:hover,\n.bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-warning.bp3-menu-item,\n.bp3-menu-item.bp3-intent-warning.bp3-active {\n  background-color: #d9822b;\n}\n.bp3-menu-item.bp3-intent-warning:active {\n  background-color: #bf7326;\n}\n.bp3-menu-item.bp3-intent-warning:hover,\n.bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-warning.bp3-menu-item,\n.bp3-menu-item.bp3-intent-warning:hover::before,\n.bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-warning.bp3-menu-item::before,\n.bp3-menu-item.bp3-intent-warning:hover::after,\n.bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-warning.bp3-menu-item::after,\n.bp3-menu-item.bp3-intent-warning:hover .bp3-menu-item-label,\n.bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-warning.bp3-menu-item .bp3-menu-item-label,\n.bp3-menu-item.bp3-intent-warning:active,\n.bp3-menu-item.bp3-intent-warning:active::before,\n.bp3-menu-item.bp3-intent-warning:active::after,\n.bp3-menu-item.bp3-intent-warning:active .bp3-menu-item-label,\n.bp3-menu-item.bp3-intent-warning.bp3-active,\n.bp3-menu-item.bp3-intent-warning.bp3-active::before,\n.bp3-menu-item.bp3-intent-warning.bp3-active::after,\n.bp3-menu-item.bp3-intent-warning.bp3-active .bp3-menu-item-label {\n  color: #fff;\n}\n.bp3-menu-item.bp3-intent-danger {\n  color: #c23030;\n}\n.bp3-menu-item.bp3-intent-danger .bp3-icon {\n  color: inherit;\n}\n.bp3-menu-item.bp3-intent-danger::before,\n.bp3-menu-item.bp3-intent-danger::after,\n.bp3-menu-item.bp3-intent-danger .bp3-menu-item-label {\n  color: #c23030;\n}\n.bp3-menu-item.bp3-intent-danger:hover,\n.bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-danger.bp3-menu-item,\n.bp3-menu-item.bp3-intent-danger.bp3-active {\n  background-color: #db3737;\n}\n.bp3-menu-item.bp3-intent-danger:active {\n  background-color: #c23030;\n}\n.bp3-menu-item.bp3-intent-danger:hover,\n.bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-danger.bp3-menu-item,\n.bp3-menu-item.bp3-intent-danger:hover::before,\n.bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-danger.bp3-menu-item::before,\n.bp3-menu-item.bp3-intent-danger:hover::after,\n.bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-danger.bp3-menu-item::after,\n.bp3-menu-item.bp3-intent-danger:hover .bp3-menu-item-label,\n.bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-danger.bp3-menu-item .bp3-menu-item-label,\n.bp3-menu-item.bp3-intent-danger:active,\n.bp3-menu-item.bp3-intent-danger:active::before,\n.bp3-menu-item.bp3-intent-danger:active::after,\n.bp3-menu-item.bp3-intent-danger:active .bp3-menu-item-label,\n.bp3-menu-item.bp3-intent-danger.bp3-active,\n.bp3-menu-item.bp3-intent-danger.bp3-active::before,\n.bp3-menu-item.bp3-intent-danger.bp3-active::after,\n.bp3-menu-item.bp3-intent-danger.bp3-active .bp3-menu-item-label {\n  color: #fff;\n}\n.bp3-menu-item::before {\n  line-height: 1;\n  font-family: "Icons16", sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  font-style: normal;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  margin-right: 7px;\n}\n.bp3-menu-item::before,\n.bp3-menu-item > .bp3-icon {\n  margin-top: 2px;\n  color: #5c7080;\n}\n.bp3-menu-item .bp3-menu-item-label {\n  color: #5c7080;\n}\n.bp3-menu-item:hover,\n.bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-menu-item {\n  color: inherit;\n}\n.bp3-menu-item.bp3-active,\n.bp3-menu-item:active {\n  background-color: rgba(115,134,148,0.3);\n}\n.bp3-menu-item.bp3-disabled {\n  outline: none !important;\n  background-color: inherit !important;\n  cursor: not-allowed !important;\n  color: rgba(92,112,128,0.5) !important;\n}\n.bp3-menu-item.bp3-disabled::before,\n.bp3-menu-item.bp3-disabled > .bp3-icon,\n.bp3-menu-item.bp3-disabled .bp3-menu-item-label {\n  color: rgba(92,112,128,0.5) !important;\n}\n.bp3-large .bp3-menu-item {\n  padding: 9px 7px;\n  line-height: 22px;\n  font-size: 16px;\n}\n.bp3-large .bp3-menu-item .bp3-icon {\n  margin-top: 3px;\n}\n.bp3-large .bp3-menu-item::before {\n  line-height: 1;\n  font-family: "Icons20", sans-serif;\n  font-size: 20px;\n  font-weight: 400;\n  font-style: normal;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  margin-top: 1px;\n  margin-right: 10px;\n}\nbutton.bp3-menu-item {\n  border: none;\n  background: none;\n  width: 100%;\n  text-align: left;\n}\n.bp3-menu-header {\n  display: block;\n  margin: 5px;\n  border-top: 1px solid rgba(16,22,26,0.15);\n  cursor: default;\n  padding-left: 2px;\n}\n.bp3-dark .bp3-menu-header {\n  border-top-color: rgba(255,255,255,0.15);\n}\n.bp3-menu-header:first-of-type {\n  border-top: none;\n}\n.bp3-menu-header > h6 {\n  color: #182026;\n  font-weight: 600;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  word-wrap: normal;\n  margin: 0;\n  padding: 10px 7px 0 1px;\n  line-height: 17px;\n}\n.bp3-dark .bp3-menu-header > h6 {\n  color: #f5f8fa;\n}\n.bp3-menu-header:first-of-type > h6 {\n  padding-top: 0;\n}\n.bp3-large .bp3-menu-header > h6 {\n  padding-top: 15px;\n  padding-bottom: 5px;\n  font-size: 18px;\n}\n.bp3-large .bp3-menu-header:first-of-type > h6 {\n  padding-top: 0;\n}\n.bp3-dark .bp3-menu {\n  background: #30404d;\n  color: #f5f8fa;\n}\n.bp3-dark .bp3-menu-item.bp3-intent-primary {\n  color: #48aff0;\n}\n.bp3-dark .bp3-menu-item.bp3-intent-primary .bp3-icon {\n  color: inherit;\n}\n.bp3-dark .bp3-menu-item.bp3-intent-primary::before,\n.bp3-dark .bp3-menu-item.bp3-intent-primary::after,\n.bp3-dark .bp3-menu-item.bp3-intent-primary .bp3-menu-item-label {\n  color: #48aff0;\n}\n.bp3-dark .bp3-menu-item.bp3-intent-primary:hover,\n.bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-primary.bp3-menu-item,\n.bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-primary.bp3-menu-item,\n.bp3-dark .bp3-menu-item.bp3-intent-primary.bp3-active {\n  background-color: #137cbd;\n}\n.bp3-dark .bp3-menu-item.bp3-intent-primary:active {\n  background-color: #106ba3;\n}\n.bp3-dark .bp3-menu-item.bp3-intent-primary:hover,\n.bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-primary.bp3-menu-item,\n.bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-primary.bp3-menu-item,\n.bp3-dark .bp3-menu-item.bp3-intent-primary:hover::before,\n.bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-primary.bp3-menu-item::before,\n.bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-primary.bp3-menu-item::before,\n.bp3-dark .bp3-menu-item.bp3-intent-primary:hover::after,\n.bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-primary.bp3-menu-item::after,\n.bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-primary.bp3-menu-item::after,\n.bp3-dark .bp3-menu-item.bp3-intent-primary:hover .bp3-menu-item-label,\n.bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-primary.bp3-menu-item .bp3-menu-item-label,\n.bp3-submenu,\n.bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-primary.bp3-menu-item .bp3-menu-item-label,\n.bp3-dark .bp3-menu-item.bp3-intent-primary:active,\n.bp3-dark .bp3-menu-item.bp3-intent-primary:active::before,\n.bp3-dark .bp3-menu-item.bp3-intent-primary:active::after,\n.bp3-dark .bp3-menu-item.bp3-intent-primary:active .bp3-menu-item-label,\n.bp3-dark .bp3-menu-item.bp3-intent-primary.bp3-active,\n.bp3-dark .bp3-menu-item.bp3-intent-primary.bp3-active::before,\n.bp3-dark .bp3-menu-item.bp3-intent-primary.bp3-active::after,\n.bp3-dark .bp3-menu-item.bp3-intent-primary.bp3-active .bp3-menu-item-label {\n  color: #fff;\n}\n.bp3-dark .bp3-menu-item.bp3-intent-success {\n  color: #3dcc91;\n}\n.bp3-dark .bp3-menu-item.bp3-intent-success .bp3-icon {\n  color: inherit;\n}\n.bp3-dark .bp3-menu-item.bp3-intent-success::before,\n.bp3-dark .bp3-menu-item.bp3-intent-success::after,\n.bp3-dark .bp3-menu-item.bp3-intent-success .bp3-menu-item-label {\n  color: #3dcc91;\n}\n.bp3-dark .bp3-menu-item.bp3-intent-success:hover,\n.bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-success.bp3-menu-item,\n.bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-success.bp3-menu-item,\n.bp3-dark .bp3-menu-item.bp3-intent-success.bp3-active {\n  background-color: #0f9960;\n}\n.bp3-dark .bp3-menu-item.bp3-intent-success:active {\n  background-color: #0d8050;\n}\n.bp3-dark .bp3-menu-item.bp3-intent-success:hover,\n.bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-success.bp3-menu-item,\n.bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-success.bp3-menu-item,\n.bp3-dark .bp3-menu-item.bp3-intent-success:hover::before,\n.bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-success.bp3-menu-item::before,\n.bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-success.bp3-menu-item::before,\n.bp3-dark .bp3-menu-item.bp3-intent-success:hover::after,\n.bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-success.bp3-menu-item::after,\n.bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-success.bp3-menu-item::after,\n.bp3-dark .bp3-menu-item.bp3-intent-success:hover .bp3-menu-item-label,\n.bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-success.bp3-menu-item .bp3-menu-item-label,\n.bp3-submenu,\n.bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-success.bp3-menu-item .bp3-menu-item-label,\n.bp3-dark .bp3-menu-item.bp3-intent-success:active,\n.bp3-dark .bp3-menu-item.bp3-intent-success:active::before,\n.bp3-dark .bp3-menu-item.bp3-intent-success:active::after,\n.bp3-dark .bp3-menu-item.bp3-intent-success:active .bp3-menu-item-label,\n.bp3-dark .bp3-menu-item.bp3-intent-success.bp3-active,\n.bp3-dark .bp3-menu-item.bp3-intent-success.bp3-active::before,\n.bp3-dark .bp3-menu-item.bp3-intent-success.bp3-active::after,\n.bp3-dark .bp3-menu-item.bp3-intent-success.bp3-active .bp3-menu-item-label {\n  color: #fff;\n}\n.bp3-dark .bp3-menu-item.bp3-intent-warning {\n  color: #ffb366;\n}\n.bp3-dark .bp3-menu-item.bp3-intent-warning .bp3-icon {\n  color: inherit;\n}\n.bp3-dark .bp3-menu-item.bp3-intent-warning::before,\n.bp3-dark .bp3-menu-item.bp3-intent-warning::after,\n.bp3-dark .bp3-menu-item.bp3-intent-warning .bp3-menu-item-label {\n  color: #ffb366;\n}\n.bp3-dark .bp3-menu-item.bp3-intent-warning:hover,\n.bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-warning.bp3-menu-item,\n.bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-warning.bp3-menu-item,\n.bp3-dark .bp3-menu-item.bp3-intent-warning.bp3-active {\n  background-color: #d9822b;\n}\n.bp3-dark .bp3-menu-item.bp3-intent-warning:active {\n  background-color: #bf7326;\n}\n.bp3-dark .bp3-menu-item.bp3-intent-warning:hover,\n.bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-warning.bp3-menu-item,\n.bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-warning.bp3-menu-item,\n.bp3-dark .bp3-menu-item.bp3-intent-warning:hover::before,\n.bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-warning.bp3-menu-item::before,\n.bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-warning.bp3-menu-item::before,\n.bp3-dark .bp3-menu-item.bp3-intent-warning:hover::after,\n.bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-warning.bp3-menu-item::after,\n.bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-warning.bp3-menu-item::after,\n.bp3-dark .bp3-menu-item.bp3-intent-warning:hover .bp3-menu-item-label,\n.bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-warning.bp3-menu-item .bp3-menu-item-label,\n.bp3-submenu,\n.bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-warning.bp3-menu-item .bp3-menu-item-label,\n.bp3-dark .bp3-menu-item.bp3-intent-warning:active,\n.bp3-dark .bp3-menu-item.bp3-intent-warning:active::before,\n.bp3-dark .bp3-menu-item.bp3-intent-warning:active::after,\n.bp3-dark .bp3-menu-item.bp3-intent-warning:active .bp3-menu-item-label,\n.bp3-dark .bp3-menu-item.bp3-intent-warning.bp3-active,\n.bp3-dark .bp3-menu-item.bp3-intent-warning.bp3-active::before,\n.bp3-dark .bp3-menu-item.bp3-intent-warning.bp3-active::after,\n.bp3-dark .bp3-menu-item.bp3-intent-warning.bp3-active .bp3-menu-item-label {\n  color: #fff;\n}\n.bp3-dark .bp3-menu-item.bp3-intent-danger {\n  color: #ff7373;\n}\n.bp3-dark .bp3-menu-item.bp3-intent-danger .bp3-icon {\n  color: inherit;\n}\n.bp3-dark .bp3-menu-item.bp3-intent-danger::before,\n.bp3-dark .bp3-menu-item.bp3-intent-danger::after,\n.bp3-dark .bp3-menu-item.bp3-intent-danger .bp3-menu-item-label {\n  color: #ff7373;\n}\n.bp3-dark .bp3-menu-item.bp3-intent-danger:hover,\n.bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-danger.bp3-menu-item,\n.bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-danger.bp3-menu-item,\n.bp3-dark .bp3-menu-item.bp3-intent-danger.bp3-active {\n  background-color: #db3737;\n}\n.bp3-dark .bp3-menu-item.bp3-intent-danger:active {\n  background-color: #c23030;\n}\n.bp3-dark .bp3-menu-item.bp3-intent-danger:hover,\n.bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-danger.bp3-menu-item,\n.bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-danger.bp3-menu-item,\n.bp3-dark .bp3-menu-item.bp3-intent-danger:hover::before,\n.bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-danger.bp3-menu-item::before,\n.bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-danger.bp3-menu-item::before,\n.bp3-dark .bp3-menu-item.bp3-intent-danger:hover::after,\n.bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-danger.bp3-menu-item::after,\n.bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-danger.bp3-menu-item::after,\n.bp3-dark .bp3-menu-item.bp3-intent-danger:hover .bp3-menu-item-label,\n.bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-danger.bp3-menu-item .bp3-menu-item-label,\n.bp3-submenu,\n.bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-danger.bp3-menu-item .bp3-menu-item-label,\n.bp3-dark .bp3-menu-item.bp3-intent-danger:active,\n.bp3-dark .bp3-menu-item.bp3-intent-danger:active::before,\n.bp3-dark .bp3-menu-item.bp3-intent-danger:active::after,\n.bp3-dark .bp3-menu-item.bp3-intent-danger:active .bp3-menu-item-label,\n.bp3-dark .bp3-menu-item.bp3-intent-danger.bp3-active,\n.bp3-dark .bp3-menu-item.bp3-intent-danger.bp3-active::before,\n.bp3-dark .bp3-menu-item.bp3-intent-danger.bp3-active::after,\n.bp3-dark .bp3-menu-item.bp3-intent-danger.bp3-active .bp3-menu-item-label {\n  color: #fff;\n}\n.bp3-dark .bp3-menu-item::before,\n.bp3-dark .bp3-menu-item > .bp3-icon {\n  color: #bfccd6;\n}\n.bp3-dark .bp3-menu-item .bp3-menu-item-label {\n  color: #bfccd6;\n}\n.bp3-dark .bp3-menu-item.bp3-active,\n.bp3-dark .bp3-menu-item:active {\n  background-color: rgba(138,155,168,0.3);\n}\n.bp3-dark .bp3-menu-item.bp3-disabled {\n  color: rgba(191,204,214,0.5) !important;\n}\n.bp3-dark .bp3-menu-item.bp3-disabled::before,\n.bp3-dark .bp3-menu-item.bp3-disabled > .bp3-icon,\n.bp3-dark .bp3-menu-item.bp3-disabled .bp3-menu-item-label {\n  color: rgba(191,204,214,0.5) !important;\n}\n.bp3-dark .bp3-menu-divider,\n.bp3-dark .bp3-menu-header {\n  border-color: rgba(255,255,255,0.15);\n}\n.bp3-dark .bp3-menu-header > h6 {\n  color: #f5f8fa;\n}\n.bp3-label .bp3-menu {\n  margin-top: 5px;\n}\n.bp3-navbar {\n  position: relative;\n  z-index: 10;\n  -webkit-box-shadow: 0 0 0 1px rgba(16,22,26,0.1), 0 0 0 rgba(16,22,26,0), 0 1px 1px rgba(16,22,26,0.2);\n  box-shadow: 0 0 0 1px rgba(16,22,26,0.1), 0 0 0 rgba(16,22,26,0), 0 1px 1px rgba(16,22,26,0.2);\n  background-color: #fff;\n  width: 100%;\n  height: 50px;\n  padding: 0 15px;\n}\n.bp3-navbar.bp3-dark,\n.bp3-dark .bp3-navbar {\n  background-color: #394b59;\n}\n.bp3-navbar.bp3-dark {\n  -webkit-box-shadow: inset 0 0 0 1px rgba(16,22,26,0.2), 0 0 0 rgba(16,22,26,0), 0 1px 1px rgba(16,22,26,0.4);\n  box-shadow: inset 0 0 0 1px rgba(16,22,26,0.2), 0 0 0 rgba(16,22,26,0), 0 1px 1px rgba(16,22,26,0.4);\n}\n.bp3-dark .bp3-navbar {\n  -webkit-box-shadow: 0 0 0 1px rgba(16,22,26,0.2), 0 0 0 rgba(16,22,26,0), 0 1px 1px rgba(16,22,26,0.4);\n  box-shadow: 0 0 0 1px rgba(16,22,26,0.2), 0 0 0 rgba(16,22,26,0), 0 1px 1px rgba(16,22,26,0.4);\n}\n.bp3-navbar.bp3-fixed-top {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n}\n.bp3-navbar .bp3-logo {\n  margin-right: 15px;\n  width: 20px;\n}\n.bp3-navbar-heading {\n  margin-right: 15px;\n  font-size: 16px;\n}\n.bp3-navbar-group {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  height: 50px;\n}\n.bp3-navbar-group.bp3-align-left {\n  float: left;\n}\n.bp3-navbar-group.bp3-align-right {\n  float: right;\n}\n.bp3-navbar-divider {\n  margin: 0 10px;\n  border-left: 1px solid rgba(16,22,26,0.15);\n  height: 20px;\n}\n.bp3-dark .bp3-navbar-divider {\n  border-left-color: rgba(255,255,255,0.15);\n}\n.bp3-non-ideal-state {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n}\n.bp3-non-ideal-state > * {\n  -webkit-box-flex: 0;\n  -ms-flex-positive: 0;\n  flex-grow: 0;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n}\n.bp3-non-ideal-state > .bp3-fill {\n  -webkit-box-flex: 1;\n  -ms-flex-positive: 1;\n  flex-grow: 1;\n  -ms-flex-negative: 1;\n  flex-shrink: 1;\n}\n.bp3-non-ideal-state::before,\n.bp3-non-ideal-state > * {\n  margin-bottom: 20px;\n}\n.bp3-non-ideal-state:empty::before,\n.bp3-non-ideal-state > :last-child {\n  margin-bottom: 0;\n}\n.bp3-non-ideal-state > * {\n  max-width: 400px;\n}\n.bp3-non-ideal-state-visual {\n  color: rgba(92,112,128,0.5);\n  font-size: 60px;\n}\n.bp3-dark .bp3-non-ideal-state-visual {\n  color: rgba(191,204,214,0.5);\n}\n.bp3-overflow-list {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: nowrap;\n  flex-wrap: nowrap;\n  min-width: 0;\n}\n.bp3-overflow-list-spacer {\n  -ms-flex-negative: 1;\n  flex-shrink: 1;\n  width: 1px;\n}\nbody.bp3-overlay-open {\n  overflow: hidden;\n}\n.bp3-overlay {\n  position: static;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 20;\n}\n.bp3-overlay:not(.bp3-overlay-open) {\n  pointer-events: none;\n}\n.bp3-overlay.bp3-overlay-scroll-container {\n  position: fixed;\n  overflow: auto;\n}\n.bp3-overlay.bp3-overlay-scroll-container.bp3-overlay-inline {\n  position: absolute;\n}\n.bp3-overlay.bp3-overlay-inline {\n  display: inline;\n  overflow: visible;\n}\n.bp3-overlay-content {\n  position: fixed;\n  z-index: 20;\n}\n.bp3-overlay-inline .bp3-overlay-content,\n.bp3-overlay-scroll-container .bp3-overlay-content {\n  position: absolute;\n}\n.bp3-overlay-backdrop {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  opacity: 1;\n  z-index: 20;\n  background-color: rgba(16,22,26,0.7);\n  overflow: auto;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.bp3-overlay-backdrop.bp3-overlay-enter,\n.bp3-overlay-backdrop.bp3-overlay-appear {\n  opacity: 0;\n}\n.bp3-overlay-backdrop.bp3-overlay-enter-active,\n.bp3-overlay-backdrop.bp3-overlay-appear-active {\n  opacity: 1;\n  -webkit-transition-property: opacity;\n  transition-property: opacity;\n  -webkit-transition-duration: 200ms;\n  transition-duration: 200ms;\n  -webkit-transition-timing-function: cubic-bezier(0.4, 1, 0.75, 0.9);\n  transition-timing-function: cubic-bezier(0.4, 1, 0.75, 0.9);\n  -webkit-transition-delay: 0;\n  transition-delay: 0;\n}\n.bp3-overlay-backdrop.bp3-overlay-exit {\n  opacity: 1;\n}\n.bp3-overlay-backdrop.bp3-overlay-exit-active {\n  opacity: 0;\n  -webkit-transition-property: opacity;\n  transition-property: opacity;\n  -webkit-transition-duration: 200ms;\n  transition-duration: 200ms;\n  -webkit-transition-timing-function: cubic-bezier(0.4, 1, 0.75, 0.9);\n  transition-timing-function: cubic-bezier(0.4, 1, 0.75, 0.9);\n  -webkit-transition-delay: 0;\n  transition-delay: 0;\n}\n.bp3-overlay-backdrop:focus {\n  outline: none;\n}\n.bp3-overlay-inline .bp3-overlay-backdrop {\n  position: absolute;\n}\n.bp3-panel-stack {\n  position: relative;\n  overflow: hidden;\n}\n.bp3-panel-stack-header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-shadow: 0 1px rgba(16,22,26,0.15);\n  box-shadow: 0 1px rgba(16,22,26,0.15);\n  height: 30px;\n}\n.bp3-dark .bp3-panel-stack-header {\n  -webkit-box-shadow: 0 1px rgba(255,255,255,0.15);\n  box-shadow: 0 1px rgba(255,255,255,0.15);\n}\n.bp3-panel-stack-header > span {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  -webkit-box-align: stretch;\n  -ms-flex-align: stretch;\n  align-items: stretch;\n}\n.bp3-panel-stack-header .bp3-heading {\n  margin: 0 5px;\n}\n.bp3-button.bp3-panel-stack-header-back {\n  margin-left: 5px;\n  padding-left: 0;\n  white-space: nowrap;\n}\n.bp3-button.bp3-panel-stack-header-back .bp3-icon {\n  margin: 0 2px;\n}\n.bp3-panel-stack-view {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  margin-right: -1px;\n  border-right: 1px solid rgba(16,22,26,0.15);\n  background-color: #fff;\n  overflow-y: auto;\n}\n.bp3-dark .bp3-panel-stack-view {\n  background-color: #30404d;\n}\n.bp3-panel-stack-push .bp3-panel-stack-enter,\n.bp3-panel-stack-push .bp3-panel-stack-appear {\n  -webkit-transform: translateX(100%);\n  transform: translateX(100%);\n  opacity: 0;\n}\n.bp3-panel-stack-push .bp3-panel-stack-enter-active,\n.bp3-panel-stack-push .bp3-panel-stack-appear-active {\n  -webkit-transform: translate(0%);\n  transform: translate(0%);\n  opacity: 1;\n  -webkit-transition-property: opacity, -webkit-transform;\n  transition-property: opacity, -webkit-transform;\n  transition-property: transform, opacity;\n  transition-property: transform, opacity, -webkit-transform;\n  -webkit-transition-duration: 400ms;\n  transition-duration: 400ms;\n  -webkit-transition-timing-function: ease;\n  transition-timing-function: ease;\n  -webkit-transition-delay: 0;\n  transition-delay: 0;\n}\n.bp3-panel-stack-push .bp3-panel-stack-exit {\n  -webkit-transform: translate(0%);\n  transform: translate(0%);\n  opacity: 1;\n}\n.bp3-panel-stack-push .bp3-panel-stack-exit-active {\n  -webkit-transform: translateX(-50%);\n  transform: translateX(-50%);\n  opacity: 0;\n  -webkit-transition-property: opacity, -webkit-transform;\n  transition-property: opacity, -webkit-transform;\n  transition-property: transform, opacity;\n  transition-property: transform, opacity, -webkit-transform;\n  -webkit-transition-duration: 400ms;\n  transition-duration: 400ms;\n  -webkit-transition-timing-function: ease;\n  transition-timing-function: ease;\n  -webkit-transition-delay: 0;\n  transition-delay: 0;\n}\n.bp3-panel-stack-pop .bp3-panel-stack-enter,\n.bp3-panel-stack-pop .bp3-panel-stack-appear {\n  -webkit-transform: translateX(-50%);\n  transform: translateX(-50%);\n  opacity: 0;\n}\n.bp3-panel-stack-pop .bp3-panel-stack-enter-active,\n.bp3-panel-stack-pop .bp3-panel-stack-appear-active {\n  -webkit-transform: translate(0%);\n  transform: translate(0%);\n  opacity: 1;\n  -webkit-transition-property: opacity, -webkit-transform;\n  transition-property: opacity, -webkit-transform;\n  transition-property: transform, opacity;\n  transition-property: transform, opacity, -webkit-transform;\n  -webkit-transition-duration: 400ms;\n  transition-duration: 400ms;\n  -webkit-transition-timing-function: ease;\n  transition-timing-function: ease;\n  -webkit-transition-delay: 0;\n  transition-delay: 0;\n}\n.bp3-panel-stack-pop .bp3-panel-stack-exit {\n  -webkit-transform: translate(0%);\n  transform: translate(0%);\n  opacity: 1;\n}\n.bp3-panel-stack-pop .bp3-panel-stack-exit-active {\n  -webkit-transform: translateX(100%);\n  transform: translateX(100%);\n  opacity: 0;\n  -webkit-transition-property: opacity, -webkit-transform;\n  transition-property: opacity, -webkit-transform;\n  transition-property: transform, opacity;\n  transition-property: transform, opacity, -webkit-transform;\n  -webkit-transition-duration: 400ms;\n  transition-duration: 400ms;\n  -webkit-transition-timing-function: ease;\n  transition-timing-function: ease;\n  -webkit-transition-delay: 0;\n  transition-delay: 0;\n}\n.bp3-popover {\n  -webkit-box-shadow: 0 0 0 1px rgba(16,22,26,0.1), 0 2px 4px rgba(16,22,26,0.2), 0 8px 24px rgba(16,22,26,0.2);\n  box-shadow: 0 0 0 1px rgba(16,22,26,0.1), 0 2px 4px rgba(16,22,26,0.2), 0 8px 24px rgba(16,22,26,0.2);\n  -webkit-transform: scale(1);\n  transform: scale(1);\n  display: inline-block;\n  z-index: 20;\n  border-radius: 3px;\n}\n.bp3-popover .bp3-popover-arrow {\n  position: absolute;\n  width: 30px;\n  height: 30px;\n}\n.bp3-popover .bp3-popover-arrow::before {\n  margin: 5px;\n  width: 20px;\n  height: 20px;\n}\n.bp3-tether-element-attached-bottom.bp3-tether-target-attached-top > .bp3-popover {\n  margin-top: -17px;\n  margin-bottom: 17px;\n}\n.bp3-tether-element-attached-bottom.bp3-tether-target-attached-top > .bp3-popover > .bp3-popover-arrow {\n  bottom: -11px;\n}\n.bp3-tether-element-attached-bottom.bp3-tether-target-attached-top > .bp3-popover > .bp3-popover-arrow svg {\n  -webkit-transform: rotate(-90deg);\n  transform: rotate(-90deg);\n}\n.bp3-tether-element-attached-left.bp3-tether-target-attached-right > .bp3-popover {\n  margin-left: 17px;\n}\n.bp3-tether-element-attached-left.bp3-tether-target-attached-right > .bp3-popover > .bp3-popover-arrow {\n  left: -11px;\n}\n.bp3-tether-element-attached-left.bp3-tether-target-attached-right > .bp3-popover > .bp3-popover-arrow svg {\n  -webkit-transform: rotate(0);\n  transform: rotate(0);\n}\n.bp3-tether-element-attached-top.bp3-tether-target-attached-bottom > .bp3-popover {\n  margin-top: 17px;\n}\n.bp3-tether-element-attached-top.bp3-tether-target-attached-bottom > .bp3-popover > .bp3-popover-arrow {\n  top: -11px;\n}\n.bp3-tether-element-attached-top.bp3-tether-target-attached-bottom > .bp3-popover > .bp3-popover-arrow svg {\n  -webkit-transform: rotate(90deg);\n  transform: rotate(90deg);\n}\n.bp3-tether-element-attached-right.bp3-tether-target-attached-left > .bp3-popover {\n  margin-right: 17px;\n  margin-left: -17px;\n}\n.bp3-tether-element-attached-right.bp3-tether-target-attached-left > .bp3-popover > .bp3-popover-arrow {\n  right: -11px;\n}\n.bp3-tether-element-attached-right.bp3-tether-target-attached-left > .bp3-popover > .bp3-popover-arrow svg {\n  -webkit-transform: rotate(180deg);\n  transform: rotate(180deg);\n}\n.bp3-tether-element-attached-middle > .bp3-popover > .bp3-popover-arrow {\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%);\n}\n.bp3-tether-element-attached-center > .bp3-popover > .bp3-popover-arrow {\n  right: 50%;\n  -webkit-transform: translateX(50%);\n  transform: translateX(50%);\n}\n.bp3-tether-element-attached-top.bp3-tether-target-attached-top > .bp3-popover > .bp3-popover-arrow {\n  top: -0.3934px;\n}\n.bp3-tether-element-attached-right.bp3-tether-target-attached-right > .bp3-popover > .bp3-popover-arrow {\n  right: -0.3934px;\n}\n.bp3-tether-element-attached-left.bp3-tether-target-attached-left > .bp3-popover > .bp3-popover-arrow {\n  left: -0.3934px;\n}\n.bp3-tether-element-attached-bottom.bp3-tether-target-attached-bottom > .bp3-popover > .bp3-popover-arrow {\n  bottom: -0.3934px;\n}\n.bp3-tether-element-attached-top.bp3-tether-element-attached-left > .bp3-popover {\n  -webkit-transform-origin: top left;\n  transform-origin: top left;\n}\n.bp3-tether-element-attached-top.bp3-tether-element-attached-center > .bp3-popover {\n  -webkit-transform-origin: top center;\n  transform-origin: top center;\n}\n.bp3-tether-element-attached-top.bp3-tether-element-attached-right > .bp3-popover {\n  -webkit-transform-origin: top right;\n  transform-origin: top right;\n}\n.bp3-tether-element-attached-middle.bp3-tether-element-attached-left > .bp3-popover {\n  -webkit-transform-origin: center left;\n  transform-origin: center left;\n}\n.bp3-tether-element-attached-middle.bp3-tether-element-attached-center > .bp3-popover {\n  -webkit-transform-origin: center center;\n  transform-origin: center center;\n}\n.bp3-tether-element-attached-middle.bp3-tether-element-attached-right > .bp3-popover {\n  -webkit-transform-origin: center right;\n  transform-origin: center right;\n}\n.bp3-tether-element-attached-bottom.bp3-tether-element-attached-left > .bp3-popover {\n  -webkit-transform-origin: bottom left;\n  transform-origin: bottom left;\n}\n.bp3-tether-element-attached-bottom.bp3-tether-element-attached-center > .bp3-popover {\n  -webkit-transform-origin: bottom center;\n  transform-origin: bottom center;\n}\n.bp3-tether-element-attached-bottom.bp3-tether-element-attached-right > .bp3-popover {\n  -webkit-transform-origin: bottom right;\n  transform-origin: bottom right;\n}\n.bp3-popover .bp3-popover-content {\n  background: #fff;\n  color: inherit;\n}\n.bp3-popover .bp3-popover-arrow::before {\n  -webkit-box-shadow: 1px 1px 6px rgba(16,22,26,0.2);\n  box-shadow: 1px 1px 6px rgba(16,22,26,0.2);\n}\n.bp3-popover .bp3-popover-arrow-border {\n  fill: #10161a;\n  fill-opacity: 0.1;\n}\n.bp3-popover .bp3-popover-arrow-fill {\n  fill: #fff;\n}\n.bp3-popover-enter > .bp3-popover,\n.bp3-popover-appear > .bp3-popover {\n  -webkit-transform: scale(0.3);\n  transform: scale(0.3);\n}\n.bp3-popover-enter-active > .bp3-popover,\n.bp3-popover-appear-active > .bp3-popover {\n  -webkit-transform: scale(1);\n  transform: scale(1);\n  -webkit-transition-property: -webkit-transform;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n  -webkit-transition-duration: 300ms;\n  transition-duration: 300ms;\n  -webkit-transition-timing-function: cubic-bezier(0.54, 1.12, 0.38, 1.11);\n  transition-timing-function: cubic-bezier(0.54, 1.12, 0.38, 1.11);\n  -webkit-transition-delay: 0;\n  transition-delay: 0;\n}\n.bp3-popover-exit > .bp3-popover {\n  -webkit-transform: scale(1);\n  transform: scale(1);\n}\n.bp3-popover-exit-active > .bp3-popover {\n  -webkit-transform: scale(0.3);\n  transform: scale(0.3);\n  -webkit-transition-property: -webkit-transform;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n  -webkit-transition-duration: 300ms;\n  transition-duration: 300ms;\n  -webkit-transition-timing-function: cubic-bezier(0.54, 1.12, 0.38, 1.11);\n  transition-timing-function: cubic-bezier(0.54, 1.12, 0.38, 1.11);\n  -webkit-transition-delay: 0;\n  transition-delay: 0;\n}\n.bp3-popover .bp3-popover-content {\n  position: relative;\n  border-radius: 3px;\n}\n.bp3-popover.bp3-popover-content-sizing .bp3-popover-content {\n  max-width: 350px;\n  padding: 20px;\n}\n.bp3-popover-target + .bp3-overlay .bp3-popover.bp3-popover-content-sizing {\n  width: 350px;\n}\n.bp3-popover.bp3-minimal {\n  margin: 0 !important;\n}\n.bp3-popover.bp3-minimal .bp3-popover-arrow {\n  display: none;\n}\n.bp3-popover.bp3-minimal.bp3-popover {\n  -webkit-transform: scale(1);\n  transform: scale(1);\n}\n.bp3-popover-enter > .bp3-popover.bp3-minimal.bp3-popover,\n.bp3-popover-appear > .bp3-popover.bp3-minimal.bp3-popover {\n  -webkit-transform: scale(1);\n  transform: scale(1);\n}\n.bp3-popover-enter-active > .bp3-popover.bp3-minimal.bp3-popover,\n.bp3-popover-appear-active > .bp3-popover.bp3-minimal.bp3-popover {\n  -webkit-transform: scale(1);\n  transform: scale(1);\n  -webkit-transition-property: -webkit-transform;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n  -webkit-transition-duration: 100ms;\n  transition-duration: 100ms;\n  -webkit-transition-timing-function: cubic-bezier(0.4, 1, 0.75, 0.9);\n  transition-timing-function: cubic-bezier(0.4, 1, 0.75, 0.9);\n  -webkit-transition-delay: 0;\n  transition-delay: 0;\n}\n.bp3-popover-exit > .bp3-popover.bp3-minimal.bp3-popover {\n  -webkit-transform: scale(1);\n  transform: scale(1);\n}\n.bp3-popover-exit-active > .bp3-popover.bp3-minimal.bp3-popover {\n  -webkit-transform: scale(1);\n  transform: scale(1);\n  -webkit-transition-property: -webkit-transform;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n  -webkit-transition-duration: 100ms;\n  transition-duration: 100ms;\n  -webkit-transition-timing-function: cubic-bezier(0.4, 1, 0.75, 0.9);\n  transition-timing-function: cubic-bezier(0.4, 1, 0.75, 0.9);\n  -webkit-transition-delay: 0;\n  transition-delay: 0;\n}\n.bp3-popover.bp3-dark,\n.bp3-dark .bp3-popover {\n  -webkit-box-shadow: 0 0 0 1px rgba(16,22,26,0.2), 0 2px 4px rgba(16,22,26,0.4), 0 8px 24px rgba(16,22,26,0.4);\n  box-shadow: 0 0 0 1px rgba(16,22,26,0.2), 0 2px 4px rgba(16,22,26,0.4), 0 8px 24px rgba(16,22,26,0.4);\n}\n.bp3-popover.bp3-dark .bp3-popover-content,\n.bp3-dark .bp3-popover .bp3-popover-content {\n  background: #30404d;\n  color: inherit;\n}\n.bp3-popover.bp3-dark .bp3-popover-arrow::before,\n.bp3-dark .bp3-popover .bp3-popover-arrow::before {\n  -webkit-box-shadow: 1px 1px 6px rgba(16,22,26,0.4);\n  box-shadow: 1px 1px 6px rgba(16,22,26,0.4);\n}\n.bp3-popover.bp3-dark .bp3-popover-arrow-border,\n.bp3-dark .bp3-popover .bp3-popover-arrow-border {\n  fill: #10161a;\n  fill-opacity: 0.2;\n}\n.bp3-popover.bp3-dark .bp3-popover-arrow-fill,\n.bp3-dark .bp3-popover .bp3-popover-arrow-fill {\n  fill: #30404d;\n}\n.bp3-popover-arrow::before {\n  display: block;\n  position: absolute;\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg);\n  border-radius: 2px;\n  content: "";\n}\n.bp3-tether-pinned .bp3-popover-arrow {\n  display: none;\n}\n.bp3-popover-backdrop {\n  background: rgba(255,255,255,0);\n}\n.bp3-transition-container {\n  opacity: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  z-index: 20;\n}\n.bp3-transition-container.bp3-popover-enter,\n.bp3-transition-container.bp3-popover-appear {\n  opacity: 0;\n}\n.bp3-transition-container.bp3-popover-enter-active,\n.bp3-transition-container.bp3-popover-appear-active {\n  opacity: 1;\n  -webkit-transition-property: opacity;\n  transition-property: opacity;\n  -webkit-transition-duration: 100ms;\n  transition-duration: 100ms;\n  -webkit-transition-timing-function: cubic-bezier(0.4, 1, 0.75, 0.9);\n  transition-timing-function: cubic-bezier(0.4, 1, 0.75, 0.9);\n  -webkit-transition-delay: 0;\n  transition-delay: 0;\n}\n.bp3-transition-container.bp3-popover-exit {\n  opacity: 1;\n}\n.bp3-transition-container.bp3-popover-exit-active {\n  opacity: 0;\n  -webkit-transition-property: opacity;\n  transition-property: opacity;\n  -webkit-transition-duration: 100ms;\n  transition-duration: 100ms;\n  -webkit-transition-timing-function: cubic-bezier(0.4, 1, 0.75, 0.9);\n  transition-timing-function: cubic-bezier(0.4, 1, 0.75, 0.9);\n  -webkit-transition-delay: 0;\n  transition-delay: 0;\n}\n.bp3-transition-container:focus {\n  outline: none;\n}\n.bp3-transition-container.bp3-popover-leave .bp3-popover-content {\n  pointer-events: none;\n}\n.bp3-transition-container[data-x-out-of-boundaries] {\n  display: none;\n}\nspan.bp3-popover-target {\n  display: inline-block;\n}\n.bp3-portal {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n}\n@-webkit-keyframes linear-progress-bar-stripes {\n  from {\n    background-position: 0 0;\n  }\n  to {\n    background-position: 30px 0;\n  }\n}\n.bp3-progress-bar {\n  display: block;\n  position: relative;\n  border-radius: 40px;\n  background: rgba(92,112,128,0.2);\n  width: 100%;\n  height: 8px;\n  overflow: hidden;\n}\n.bp3-progress-bar .bp3-progress-meter {\n  position: absolute;\n  border-radius: 40px;\n  background: linear-gradient(-45deg, rgba(255,255,255,0.2) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.2) 75%, transparent 75%);\n  background-color: rgba(92,112,128,0.8);\n  background-size: 30px 30px;\n  width: 100%;\n  height: 100%;\n  -webkit-transition: width 200ms cubic-bezier(0.4, 1, 0.75, 0.9);\n  transition: width 200ms cubic-bezier(0.4, 1, 0.75, 0.9);\n}\n.bp3-progress-bar:not(.bp3-no-animation):not(.bp3-no-stripes) .bp3-progress-meter {\n  animation: linear-progress-bar-stripes 300ms linear infinite reverse;\n}\n.bp3-progress-bar.bp3-no-stripes .bp3-progress-meter {\n  background-image: none;\n}\n.bp3-dark .bp3-progress-bar {\n  background: rgba(16,22,26,0.5);\n}\n.bp3-dark .bp3-progress-bar .bp3-progress-meter {\n  background-color: #8a9ba8;\n}\n.bp3-progress-bar.bp3-intent-primary .bp3-progress-meter {\n  background-color: #137cbd;\n}\n.bp3-progress-bar.bp3-intent-success .bp3-progress-meter {\n  background-color: #0f9960;\n}\n.bp3-progress-bar.bp3-intent-warning .bp3-progress-meter {\n  background-color: #d9822b;\n}\n.bp3-progress-bar.bp3-intent-danger .bp3-progress-meter {\n  background-color: #db3737;\n}\n@-webkit-keyframes glow {\n  0%, 100% {\n    border-color: rgba(167,182,194,0.2);\n    background-color: rgba(167,182,194,0.2);\n  }\n  50% {\n    border-color: rgba(92,112,128,0.2);\n    background-color: rgba(92,112,128,0.2);\n  }\n}\n.bp3-skeleton {\n  border-color: rgba(167,182,194,0.2) !important;\n  border-radius: 2px;\n  -webkit-box-shadow: none !important;\n  box-shadow: none !important;\n  background: rgba(167,182,194,0.2) !important;\n  background-clip: padding-box !important;\n  cursor: default;\n  color: transparent !important;\n  -webkit-animation: 2000ms linear infinite glow;\n  animation: 2000ms linear infinite glow;\n  pointer-events: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.bp3-skeleton::before,\n.bp3-skeleton::after,\n.bp3-skeleton * {\n  visibility: hidden !important;\n}\n.bp3-slider {\n  width: 100%;\n  min-width: 150px;\n  height: 40px;\n  position: relative;\n  outline: none;\n  cursor: default;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.bp3-slider:hover {\n  cursor: pointer;\n}\n.bp3-slider:active {\n  cursor: -webkit-grabbing;\n  cursor: grabbing;\n}\n.bp3-slider.bp3-disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.bp3-slider.bp3-slider-unlabeled {\n  height: 16px;\n}\n.bp3-slider-track,\n.bp3-slider-progress {\n  top: 5px;\n  right: 0;\n  left: 0;\n  height: 6px;\n  position: absolute;\n}\n.bp3-slider-track {\n  border-radius: 3px;\n  overflow: hidden;\n}\n.bp3-slider-progress {\n  background: rgba(92,112,128,0.2);\n}\n.bp3-dark .bp3-slider-progress {\n  background: rgba(16,22,26,0.5);\n}\n.bp3-slider-progress.bp3-intent-primary {\n  background-color: #137cbd;\n}\n.bp3-slider-progress.bp3-intent-success {\n  background-color: #0f9960;\n}\n.bp3-slider-progress.bp3-intent-warning {\n  background-color: #d9822b;\n}\n.bp3-slider-progress.bp3-intent-danger {\n  background-color: #db3737;\n}\n.bp3-slider-handle {\n  -webkit-box-shadow: inset 0 0 0 1px rgba(16,22,26,0.2), inset 0 -1px 0 rgba(16,22,26,0.1);\n  box-shadow: inset 0 0 0 1px rgba(16,22,26,0.2), inset 0 -1px 0 rgba(16,22,26,0.1);\n  background-color: #f5f8fa;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(255,255,255,0.8)), to(rgba(255,255,255,0)));\n  background-image: linear-gradient(to bottom, rgba(255,255,255,0.8), rgba(255,255,255,0));\n  color: #182026;\n  position: absolute;\n  top: 0;\n  left: 0;\n  border-radius: 3px;\n  -webkit-box-shadow: 0 0 0 1px rgba(16,22,26,0.2), 0 1px 1px rgba(16,22,26,0.2);\n  box-shadow: 0 0 0 1px rgba(16,22,26,0.2), 0 1px 1px rgba(16,22,26,0.2);\n  cursor: pointer;\n  width: 16px;\n  height: 16px;\n}\n.bp3-slider-handle:hover {\n  -webkit-box-shadow: inset 0 0 0 1px rgba(16,22,26,0.2), inset 0 -1px 0 rgba(16,22,26,0.1);\n  box-shadow: inset 0 0 0 1px rgba(16,22,26,0.2), inset 0 -1px 0 rgba(16,22,26,0.1);\n  background-clip: padding-box;\n  background-color: #ebf1f5;\n}\n.bp3-slider-handle:active,\n.bp3-slider-handle.bp3-active {\n  -webkit-box-shadow: inset 0 0 0 1px rgba(16,22,26,0.2), inset 0 1px 2px rgba(16,22,26,0.2);\n  box-shadow: inset 0 0 0 1px rgba(16,22,26,0.2), inset 0 1px 2px rgba(16,22,26,0.2);\n  background-color: #d8e1e8;\n  background-image: none;\n}\n.bp3-slider-handle:disabled,\n.bp3-slider-handle.bp3-disabled {\n  outline: none;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  background-color: rgba(206,217,224,0.5);\n  background-image: none;\n  cursor: not-allowed;\n  color: rgba(92,112,128,0.5);\n}\n.bp3-slider-handle:disabled.bp3-active,\n.bp3-slider-handle:disabled.bp3-active:hover,\n.bp3-slider-handle.bp3-disabled.bp3-active,\n.bp3-slider-handle.bp3-disabled.bp3-active:hover {\n  background: rgba(206,217,224,0.7);\n}\n.bp3-slider-handle:focus {\n  z-index: 1;\n}\n.bp3-slider-handle:hover {\n  -webkit-box-shadow: inset 0 0 0 1px rgba(16,22,26,0.2), inset 0 -1px 0 rgba(16,22,26,0.1);\n  box-shadow: inset 0 0 0 1px rgba(16,22,26,0.2), inset 0 -1px 0 rgba(16,22,26,0.1);\n  background-clip: padding-box;\n  background-color: #ebf1f5;\n  z-index: 2;\n  -webkit-box-shadow: 0 0 0 1px rgba(16,22,26,0.2), 0 1px 1px rgba(16,22,26,0.2);\n  box-shadow: 0 0 0 1px rgba(16,22,26,0.2), 0 1px 1px rgba(16,22,26,0.2);\n  cursor: -webkit-grab;\n  cursor: grab;\n}\n.bp3-slider-handle.bp3-active {\n  -webkit-box-shadow: inset 0 0 0 1px rgba(16,22,26,0.2), inset 0 1px 2px rgba(16,22,26,0.2);\n  box-shadow: inset 0 0 0 1px rgba(16,22,26,0.2), inset 0 1px 2px rgba(16,22,26,0.2);\n  background-color: #d8e1e8;\n  background-image: none;\n  -webkit-box-shadow: 0 0 0 1px rgba(16,22,26,0.2), inset 0 1px 1px rgba(16,22,26,0.1);\n  box-shadow: 0 0 0 1px rgba(16,22,26,0.2), inset 0 1px 1px rgba(16,22,26,0.1);\n  cursor: -webkit-grabbing;\n  cursor: grabbing;\n}\n.bp3-disabled .bp3-slider-handle {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  background: #bfccd6;\n  pointer-events: none;\n}\n.bp3-dark .bp3-slider-handle {\n  -webkit-box-shadow: 0 0 0 1px rgba(16,22,26,0.4);\n  box-shadow: 0 0 0 1px rgba(16,22,26,0.4);\n  background-color: #394b59;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(255,255,255,0.05)), to(rgba(255,255,255,0)));\n  background-image: linear-gradient(to bottom, rgba(255,255,255,0.05), rgba(255,255,255,0));\n  color: #f5f8fa;\n}\n.bp3-dark .bp3-slider-handle:hover,\n.bp3-dark .bp3-slider-handle:active,\n.bp3-dark .bp3-slider-handle.bp3-active {\n  color: #f5f8fa;\n}\n.bp3-dark .bp3-slider-handle:hover {\n  -webkit-box-shadow: 0 0 0 1px rgba(16,22,26,0.4);\n  box-shadow: 0 0 0 1px rgba(16,22,26,0.4);\n  background-color: #30404d;\n}\n.bp3-dark .bp3-slider-handle:active,\n.bp3-dark .bp3-slider-handle.bp3-active {\n  -webkit-box-shadow: 0 0 0 1px rgba(16,22,26,0.6), inset 0 1px 2px rgba(16,22,26,0.2);\n  box-shadow: 0 0 0 1px rgba(16,22,26,0.6), inset 0 1px 2px rgba(16,22,26,0.2);\n  background-color: #202b33;\n  background-image: none;\n}\n.bp3-dark .bp3-slider-handle:disabled,\n.bp3-dark .bp3-slider-handle.bp3-disabled {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  background-color: rgba(57,75,89,0.5);\n  background-image: none;\n  color: rgba(191,204,214,0.5);\n}\n.bp3-dark .bp3-slider-handle:disabled.bp3-active,\n.bp3-dark .bp3-slider-handle.bp3-disabled.bp3-active {\n  background: rgba(57,75,89,0.7);\n}\n.bp3-dark .bp3-slider-handle .bp3-button-spinner .bp3-spinner-head {\n  background: rgba(16,22,26,0.5);\n  stroke: #8a9ba8;\n}\n.bp3-dark .bp3-slider-handle,\n.bp3-dark .bp3-slider-handle:hover {\n  background-color: #394b59;\n}\n.bp3-dark .bp3-slider-handle.bp3-active {\n  background-color: #293742;\n}\n.bp3-dark .bp3-disabled .bp3-slider-handle {\n  border-color: #5c7080;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  background: #5c7080;\n}\n.bp3-slider-handle .bp3-slider-label {\n  margin-left: 8px;\n  border-radius: 3px;\n  -webkit-box-shadow: 0 0 0 1px rgba(16,22,26,0.1), 0 2px 4px rgba(16,22,26,0.2), 0 8px 24px rgba(16,22,26,0.2);\n  box-shadow: 0 0 0 1px rgba(16,22,26,0.1), 0 2px 4px rgba(16,22,26,0.2), 0 8px 24px rgba(16,22,26,0.2);\n  background: #394b59;\n  color: #f5f8fa;\n}\n.bp3-dark .bp3-slider-handle .bp3-slider-label {\n  -webkit-box-shadow: 0 0 0 1px rgba(16,22,26,0.2), 0 2px 4px rgba(16,22,26,0.4), 0 8px 24px rgba(16,22,26,0.4);\n  box-shadow: 0 0 0 1px rgba(16,22,26,0.2), 0 2px 4px rgba(16,22,26,0.4), 0 8px 24px rgba(16,22,26,0.4);\n  background: #e1e8ed;\n  color: #394b59;\n}\n.bp3-disabled .bp3-slider-handle .bp3-slider-label {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n}\n.bp3-slider-handle.bp3-start,\n.bp3-slider-handle.bp3-end {\n  width: 8px;\n}\n.bp3-slider-handle.bp3-start {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.bp3-slider-handle.bp3-end {\n  margin-left: 8px;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.bp3-slider-handle.bp3-end .bp3-slider-label {\n  margin-left: 0;\n}\n.bp3-slider-label {\n  -webkit-transform: translate(-50%, 20px);\n  transform: translate(-50%, 20px);\n  display: inline-block;\n  position: absolute;\n  padding: 2px 5px;\n  vertical-align: top;\n  line-height: 1;\n  font-size: 12px;\n}\n.bp3-slider.bp3-vertical {\n  width: 40px;\n  min-width: 40px;\n  height: 150px;\n}\n.bp3-slider.bp3-vertical .bp3-slider-track,\n.bp3-slider.bp3-vertical .bp3-slider-progress {\n  top: 0;\n  bottom: 0;\n  left: 5px;\n  width: 6px;\n  height: auto;\n}\n.bp3-slider.bp3-vertical .bp3-slider-progress {\n  top: auto;\n}\n.bp3-slider.bp3-vertical .bp3-slider-label {\n  -webkit-transform: translate(20px, 50%);\n  transform: translate(20px, 50%);\n}\n.bp3-slider.bp3-vertical .bp3-slider-handle {\n  top: auto;\n}\n.bp3-slider.bp3-vertical .bp3-slider-handle .bp3-slider-label {\n  margin-top: -8px;\n  margin-left: 0;\n}\n.bp3-slider.bp3-vertical .bp3-slider-handle.bp3-end,\n.bp3-slider.bp3-vertical .bp3-slider-handle.bp3-start {\n  margin-left: 0;\n  width: 16px;\n  height: 8px;\n}\n.bp3-slider.bp3-vertical .bp3-slider-handle.bp3-start {\n  border-top-left-radius: 0;\n  border-bottom-right-radius: 3px;\n}\n.bp3-slider.bp3-vertical .bp3-slider-handle.bp3-start .bp3-slider-label {\n  -webkit-transform: translate(20px);\n  transform: translate(20px);\n}\n.bp3-slider.bp3-vertical .bp3-slider-handle.bp3-end {\n  margin-bottom: 8px;\n  border-top-left-radius: 3px;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n@-webkit-keyframes pt-spinner-animation {\n  from {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  to {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n.bp3-spinner {\n  overflow: visible;\n  vertical-align: middle;\n}\n.bp3-spinner path {\n  fill-opacity: 0;\n}\n.bp3-spinner .bp3-spinner-head {\n  -webkit-transform-origin: center;\n  transform-origin: center;\n  -webkit-transition: stroke-dashoffset 200ms cubic-bezier(0.4, 1, 0.75, 0.9);\n  transition: stroke-dashoffset 200ms cubic-bezier(0.4, 1, 0.75, 0.9);\n  -webkit-animation: pt-spinner-animation 500ms linear infinite;\n  animation: pt-spinner-animation 500ms linear infinite;\n  stroke: rgba(92,112,128,0.8);\n  stroke-linecap: round;\n}\n.bp3-spinner .bp3-spinner-track {\n  stroke: rgba(92,112,128,0.2);\n}\n.bp3-spinner.bp3-no-spin .bp3-spinner-head {\n  -webkit-animation: none;\n  animation: none;\n}\n.bp3-dark .bp3-spinner .bp3-spinner-head {\n  stroke: #8a9ba8;\n}\n.bp3-dark .bp3-spinner .bp3-spinner-track {\n  stroke: rgba(16,22,26,0.5);\n}\n.bp3-spinner.bp3-intent-primary .bp3-spinner-head {\n  stroke: #137cbd;\n}\n.bp3-spinner.bp3-intent-success .bp3-spinner-head {\n  stroke: #0f9960;\n}\n.bp3-spinner.bp3-intent-warning .bp3-spinner-head {\n  stroke: #d9822b;\n}\n.bp3-spinner.bp3-intent-danger .bp3-spinner-head {\n  stroke: #db3737;\n}\n.bp3-tabs.bp3-vertical {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.bp3-tabs.bp3-vertical > .bp3-tab-list {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -webkit-box-align: start;\n  -ms-flex-align: start;\n  align-items: flex-start;\n}\n.bp3-tabs.bp3-vertical > .bp3-tab-list .bp3-tab {\n  border-radius: 3px;\n  width: 100%;\n  padding: 0 10px;\n}\n.bp3-tabs.bp3-vertical > .bp3-tab-list .bp3-tab[aria-selected="true"] {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  background-color: rgba(19,124,189,0.2);\n}\n.bp3-tabs.bp3-vertical > .bp3-tab-list .bp3-tab-indicator-wrapper .bp3-tab-indicator {\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  border-radius: 3px;\n  background-color: rgba(19,124,189,0.2);\n  height: auto;\n}\n.bp3-tabs.bp3-vertical > .bp3-tab-panel {\n  margin-top: 0;\n  padding-left: 20px;\n}\n.bp3-tab-list {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 0;\n  -ms-flex: 0 0 auto;\n  flex: 0 0 auto;\n  -webkit-box-align: end;\n  -ms-flex-align: end;\n  align-items: flex-end;\n  position: relative;\n  margin: 0;\n  border: none;\n  padding: 0;\n  list-style: none;\n}\n.bp3-tab-list > *:not(:last-child) {\n  margin-right: 20px;\n}\n.bp3-tab {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  word-wrap: normal;\n  -webkit-box-flex: 0;\n  -ms-flex: 0 0 auto;\n  flex: 0 0 auto;\n  position: relative;\n  cursor: pointer;\n  max-width: 100%;\n  vertical-align: top;\n  line-height: 30px;\n  color: #182026;\n  font-size: 14px;\n}\n.bp3-tab a {\n  display: block;\n  text-decoration: none;\n  color: inherit;\n}\n.bp3-tab-indicator-wrapper ~ .bp3-tab {\n  -webkit-box-shadow: none !important;\n  box-shadow: none !important;\n  background-color: transparent !important;\n}\n.bp3-tab[aria-disabled="true"] {\n  cursor: not-allowed;\n  color: rgba(92,112,128,0.5);\n}\n.bp3-tab[aria-selected="true"] {\n  border-radius: 0;\n  -webkit-box-shadow: inset 0 -3px 0 #106ba3;\n  box-shadow: inset 0 -3px 0 #106ba3;\n}\n.bp3-tab[aria-selected="true"],\n.bp3-tab:not([aria-disabled="true"]):hover {\n  color: #106ba3;\n}\n.bp3-tab:focus {\n  -moz-outline-radius: 0;\n}\n.bp3-large > .bp3-tab {\n  line-height: 40px;\n  font-size: 16px;\n}\n.bp3-tab-panel {\n  margin-top: 20px;\n}\n.bp3-tab-panel[aria-hidden="true"] {\n  display: none;\n}\n.bp3-tab-indicator-wrapper {\n  position: absolute;\n  top: 0;\n  left: 0;\n  -webkit-transform: translateX(0), translateY(0);\n  transform: translateX(0), translateY(0);\n  -webkit-transition: height, width, -webkit-transform;\n  transition: height, width, -webkit-transform;\n  transition: height, transform, width;\n  transition: height, transform, width, -webkit-transform;\n  -webkit-transition-duration: 200ms;\n  transition-duration: 200ms;\n  -webkit-transition-timing-function: cubic-bezier(0.4, 1, 0.75, 0.9);\n  transition-timing-function: cubic-bezier(0.4, 1, 0.75, 0.9);\n  pointer-events: none;\n}\n.bp3-tab-indicator-wrapper .bp3-tab-indicator {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: #106ba3;\n  height: 3px;\n}\n.bp3-tab-indicator-wrapper.bp3-no-animation {\n  -webkit-transition: none;\n  transition: none;\n}\n.bp3-dark .bp3-tab {\n  color: #f5f8fa;\n}\n.bp3-dark .bp3-tab[aria-disabled="true"] {\n  color: rgba(191,204,214,0.5);\n}\n.bp3-dark .bp3-tab[aria-selected="true"] {\n  -webkit-box-shadow: inset 0 -3px 0 #48aff0;\n  box-shadow: inset 0 -3px 0 #48aff0;\n}\n.bp3-dark .bp3-tab[aria-selected="true"],\n.bp3-dark .bp3-tab:not([aria-disabled="true"]):hover {\n  color: #48aff0;\n}\n.bp3-dark .bp3-tab-indicator {\n  background-color: #48aff0;\n}\n.bp3-flex-expander {\n  -webkit-box-flex: 1;\n  -ms-flex: 1 1;\n  flex: 1 1;\n}\n.bp3-tag {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  position: relative;\n  border: none;\n  border-radius: 3px;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  background-color: #5c7080;\n  min-width: 20px;\n  max-width: 100%;\n  min-height: 20px;\n  padding: 2px 6px;\n  color: #f5f8fa;\n  font-size: 12px;\n}\n.bp3-tag.bp3-interactive {\n  cursor: pointer;\n}\n.bp3-tag.bp3-interactive:hover {\n  background-color: rgba(92,112,128,0.85);\n}\n.bp3-tag.bp3-interactive.bp3-active,\n.bp3-tag.bp3-interactive:active {\n  background-color: rgba(92,112,128,0.7);\n}\n.bp3-tag > * {\n  -webkit-box-flex: 0;\n  -ms-flex-positive: 0;\n  flex-grow: 0;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n}\n.bp3-tag > .bp3-fill {\n  -webkit-box-flex: 1;\n  -ms-flex-positive: 1;\n  flex-grow: 1;\n  -ms-flex-negative: 1;\n  flex-shrink: 1;\n}\n.bp3-tag::before,\n.bp3-tag > * {\n  margin-right: 4px;\n}\n.bp3-tag:empty::before,\n.bp3-tag > :last-child {\n  margin-right: 0;\n}\n.bp3-tag:focus {\n  outline: rgba(19,124,189,0.6) auto 2px;\n  outline-offset: 0;\n  -moz-outline-radius: 6px;\n}\n.bp3-tag.bp3-round {\n  border-radius: 30px;\n  padding-right: 8px;\n  padding-left: 8px;\n}\n.bp3-dark .bp3-tag {\n  background-color: #bfccd6;\n  color: #182026;\n}\n.bp3-dark .bp3-tag.bp3-interactive {\n  cursor: pointer;\n}\n.bp3-dark .bp3-tag.bp3-interactive:hover {\n  background-color: rgba(191,204,214,0.85);\n}\n.bp3-dark .bp3-tag.bp3-interactive.bp3-active,\n.bp3-dark .bp3-tag.bp3-interactive:active {\n  background-color: rgba(191,204,214,0.7);\n}\n.bp3-dark .bp3-tag > .bp3-icon,\n.bp3-dark .bp3-tag .bp3-icon-standard,\n.bp3-dark .bp3-tag .bp3-icon-large {\n  fill: currentColor;\n}\n.bp3-tag > .bp3-icon,\n.bp3-tag .bp3-icon-standard,\n.bp3-tag .bp3-icon-large {\n  -webkit-box-flex: 0;\n  -ms-flex: 0 0 auto;\n  flex: 0 0 auto;\n  fill: #fff;\n}\n.bp3-tag.bp3-large,\n.bp3-large .bp3-tag {\n  min-width: 30px;\n  min-height: 30px;\n  padding: 0 10px;\n  font-size: 14px;\n}\n.bp3-tag.bp3-large::before,\n.bp3-tag.bp3-large > *,\n.bp3-large .bp3-tag::before,\n.bp3-large .bp3-tag > * {\n  margin-right: 7px;\n}\n.bp3-tag.bp3-large:empty::before,\n.bp3-tag.bp3-large > :last-child,\n.bp3-large .bp3-tag:empty::before,\n.bp3-large .bp3-tag > :last-child {\n  margin-right: 0;\n}\n.bp3-tag.bp3-large.bp3-round,\n.bp3-large .bp3-tag.bp3-round {\n  padding-right: 12px;\n  padding-left: 12px;\n}\n.bp3-tag.bp3-intent-primary {\n  background: #137cbd;\n  color: #fff;\n}\n.bp3-tag.bp3-intent-primary.bp3-interactive {\n  cursor: pointer;\n}\n.bp3-tag.bp3-intent-primary.bp3-interactive:hover {\n  background-color: rgba(19,124,189,0.85);\n}\n.bp3-tag.bp3-intent-primary.bp3-interactive.bp3-active,\n.bp3-tag.bp3-intent-primary.bp3-interactive:active {\n  background-color: rgba(19,124,189,0.7);\n}\n.bp3-tag.bp3-intent-success {\n  background: #0f9960;\n  color: #fff;\n}\n.bp3-tag.bp3-intent-success.bp3-interactive {\n  cursor: pointer;\n}\n.bp3-tag.bp3-intent-success.bp3-interactive:hover {\n  background-color: rgba(15,153,96,0.85);\n}\n.bp3-tag.bp3-intent-success.bp3-interactive.bp3-active,\n.bp3-tag.bp3-intent-success.bp3-interactive:active {\n  background-color: rgba(15,153,96,0.7);\n}\n.bp3-tag.bp3-intent-warning {\n  background: #d9822b;\n  color: #fff;\n}\n.bp3-tag.bp3-intent-warning.bp3-interactive {\n  cursor: pointer;\n}\n.bp3-tag.bp3-intent-warning.bp3-interactive:hover {\n  background-color: rgba(217,130,43,0.85);\n}\n.bp3-tag.bp3-intent-warning.bp3-interactive.bp3-active,\n.bp3-tag.bp3-intent-warning.bp3-interactive:active {\n  background-color: rgba(217,130,43,0.7);\n}\n.bp3-tag.bp3-intent-danger {\n  background: #db3737;\n  color: #fff;\n}\n.bp3-tag.bp3-intent-danger.bp3-interactive {\n  cursor: pointer;\n}\n.bp3-tag.bp3-intent-danger.bp3-interactive:hover {\n  background-color: rgba(219,55,55,0.85);\n}\n.bp3-tag.bp3-intent-danger.bp3-interactive.bp3-active,\n.bp3-tag.bp3-intent-danger.bp3-interactive:active {\n  background-color: rgba(219,55,55,0.7);\n}\n.bp3-tag.bp3-minimal > .bp3-icon,\n.bp3-tag.bp3-minimal .bp3-icon-standard,\n.bp3-tag.bp3-minimal .bp3-icon-large {\n  fill: #5c7080;\n}\n.bp3-tag.bp3-minimal:not([class*="bp3-intent-"]) {\n  background-color: rgba(138,155,168,0.2);\n  color: #182026;\n}\n.bp3-tag.bp3-minimal:not([class*="bp3-intent-"]).bp3-interactive {\n  cursor: pointer;\n}\n.bp3-tag.bp3-minimal:not([class*="bp3-intent-"]).bp3-interactive:hover {\n  background-color: rgba(92,112,128,0.3);\n}\n.bp3-tag.bp3-minimal:not([class*="bp3-intent-"]).bp3-interactive.bp3-active,\n.bp3-tag.bp3-minimal:not([class*="bp3-intent-"]).bp3-interactive:active {\n  background-color: rgba(92,112,128,0.4);\n}\n.bp3-dark .bp3-tag.bp3-minimal:not([class*="bp3-intent-"]) {\n  color: #f5f8fa;\n}\n.bp3-dark .bp3-tag.bp3-minimal:not([class*="bp3-intent-"]).bp3-interactive {\n  cursor: pointer;\n}\n.bp3-dark .bp3-tag.bp3-minimal:not([class*="bp3-intent-"]).bp3-interactive:hover {\n  background-color: rgba(191,204,214,0.3);\n}\n.bp3-dark .bp3-tag.bp3-minimal:not([class*="bp3-intent-"]).bp3-interactive.bp3-active,\n.bp3-dark .bp3-tag.bp3-minimal:not([class*="bp3-intent-"]).bp3-interactive:active {\n  background-color: rgba(191,204,214,0.4);\n}\n.bp3-dark .bp3-tag.bp3-minimal:not([class*="bp3-intent-"]) > .bp3-icon,\n.bp3-dark .bp3-tag.bp3-minimal:not([class*="bp3-intent-"]) .bp3-icon-standard,\n.bp3-dark .bp3-tag.bp3-minimal:not([class*="bp3-intent-"]) .bp3-icon-large {\n  fill: #bfccd6;\n}\n.bp3-tag.bp3-minimal.bp3-intent-primary {\n  background-color: rgba(19,124,189,0.15);\n  color: #106ba3;\n}\n.bp3-tag.bp3-minimal.bp3-intent-primary.bp3-interactive {\n  cursor: pointer;\n}\n.bp3-tag.bp3-minimal.bp3-intent-primary.bp3-interactive:hover {\n  background-color: rgba(19,124,189,0.25);\n}\n.bp3-tag.bp3-minimal.bp3-intent-primary.bp3-interactive.bp3-active,\n.bp3-tag.bp3-minimal.bp3-intent-primary.bp3-interactive:active {\n  background-color: rgba(19,124,189,0.35);\n}\n.bp3-tag.bp3-minimal.bp3-intent-primary > .bp3-icon,\n.bp3-tag.bp3-minimal.bp3-intent-primary .bp3-icon-standard,\n.bp3-tag.bp3-minimal.bp3-intent-primary .bp3-icon-large {\n  fill: #137cbd;\n}\n.bp3-dark .bp3-tag.bp3-minimal.bp3-intent-primary {\n  background-color: rgba(19,124,189,0.25);\n  color: #48aff0;\n}\n.bp3-dark .bp3-tag.bp3-minimal.bp3-intent-primary.bp3-interactive {\n  cursor: pointer;\n}\n.bp3-dark .bp3-tag.bp3-minimal.bp3-intent-primary.bp3-interactive:hover {\n  background-color: rgba(19,124,189,0.35);\n}\n.bp3-dark .bp3-tag.bp3-minimal.bp3-intent-primary.bp3-interactive.bp3-active,\n.bp3-dark .bp3-tag.bp3-minimal.bp3-intent-primary.bp3-interactive:active {\n  background-color: rgba(19,124,189,0.45);\n}\n.bp3-tag.bp3-minimal.bp3-intent-success {\n  background-color: rgba(15,153,96,0.15);\n  color: #0d8050;\n}\n.bp3-tag.bp3-minimal.bp3-intent-success.bp3-interactive {\n  cursor: pointer;\n}\n.bp3-tag.bp3-minimal.bp3-intent-success.bp3-interactive:hover {\n  background-color: rgba(15,153,96,0.25);\n}\n.bp3-tag.bp3-minimal.bp3-intent-success.bp3-interactive.bp3-active,\n.bp3-tag.bp3-minimal.bp3-intent-success.bp3-interactive:active {\n  background-color: rgba(15,153,96,0.35);\n}\n.bp3-tag.bp3-minimal.bp3-intent-success > .bp3-icon,\n.bp3-tag.bp3-minimal.bp3-intent-success .bp3-icon-standard,\n.bp3-tag.bp3-minimal.bp3-intent-success .bp3-icon-large {\n  fill: #0f9960;\n}\n.bp3-dark .bp3-tag.bp3-minimal.bp3-intent-success {\n  background-color: rgba(15,153,96,0.25);\n  color: #3dcc91;\n}\n.bp3-dark .bp3-tag.bp3-minimal.bp3-intent-success.bp3-interactive {\n  cursor: pointer;\n}\n.bp3-dark .bp3-tag.bp3-minimal.bp3-intent-success.bp3-interactive:hover {\n  background-color: rgba(15,153,96,0.35);\n}\n.bp3-dark .bp3-tag.bp3-minimal.bp3-intent-success.bp3-interactive.bp3-active,\n.bp3-dark .bp3-tag.bp3-minimal.bp3-intent-success.bp3-interactive:active {\n  background-color: rgba(15,153,96,0.45);\n}\n.bp3-tag.bp3-minimal.bp3-intent-warning {\n  background-color: rgba(217,130,43,0.15);\n  color: #bf7326;\n}\n.bp3-tag.bp3-minimal.bp3-intent-warning.bp3-interactive {\n  cursor: pointer;\n}\n.bp3-tag.bp3-minimal.bp3-intent-warning.bp3-interactive:hover {\n  background-color: rgba(217,130,43,0.25);\n}\n.bp3-tag.bp3-minimal.bp3-intent-warning.bp3-interactive.bp3-active,\n.bp3-tag.bp3-minimal.bp3-intent-warning.bp3-interactive:active {\n  background-color: rgba(217,130,43,0.35);\n}\n.bp3-tag.bp3-minimal.bp3-intent-warning > .bp3-icon,\n.bp3-tag.bp3-minimal.bp3-intent-warning .bp3-icon-standard,\n.bp3-tag.bp3-minimal.bp3-intent-warning .bp3-icon-large {\n  fill: #d9822b;\n}\n.bp3-dark .bp3-tag.bp3-minimal.bp3-intent-warning {\n  background-color: rgba(217,130,43,0.25);\n  color: #ffb366;\n}\n.bp3-dark .bp3-tag.bp3-minimal.bp3-intent-warning.bp3-interactive {\n  cursor: pointer;\n}\n.bp3-dark .bp3-tag.bp3-minimal.bp3-intent-warning.bp3-interactive:hover {\n  background-color: rgba(217,130,43,0.35);\n}\n.bp3-dark .bp3-tag.bp3-minimal.bp3-intent-warning.bp3-interactive.bp3-active,\n.bp3-dark .bp3-tag.bp3-minimal.bp3-intent-warning.bp3-interactive:active {\n  background-color: rgba(217,130,43,0.45);\n}\n.bp3-tag.bp3-minimal.bp3-intent-danger {\n  background-color: rgba(219,55,55,0.15);\n  color: #c23030;\n}\n.bp3-tag.bp3-minimal.bp3-intent-danger.bp3-interactive {\n  cursor: pointer;\n}\n.bp3-tag.bp3-minimal.bp3-intent-danger.bp3-interactive:hover {\n  background-color: rgba(219,55,55,0.25);\n}\n.bp3-tag.bp3-minimal.bp3-intent-danger.bp3-interactive.bp3-active,\n.bp3-tag.bp3-minimal.bp3-intent-danger.bp3-interactive:active {\n  background-color: rgba(219,55,55,0.35);\n}\n.bp3-tag.bp3-minimal.bp3-intent-danger > .bp3-icon,\n.bp3-tag.bp3-minimal.bp3-intent-danger .bp3-icon-standard,\n.bp3-tag.bp3-minimal.bp3-intent-danger .bp3-icon-large {\n  fill: #db3737;\n}\n.bp3-dark .bp3-tag.bp3-minimal.bp3-intent-danger {\n  background-color: rgba(219,55,55,0.25);\n  color: #ff7373;\n}\n.bp3-dark .bp3-tag.bp3-minimal.bp3-intent-danger.bp3-interactive {\n  cursor: pointer;\n}\n.bp3-dark .bp3-tag.bp3-minimal.bp3-intent-danger.bp3-interactive:hover {\n  background-color: rgba(219,55,55,0.35);\n}\n.bp3-dark .bp3-tag.bp3-minimal.bp3-intent-danger.bp3-interactive.bp3-active,\n.bp3-dark .bp3-tag.bp3-minimal.bp3-intent-danger.bp3-interactive:active {\n  background-color: rgba(219,55,55,0.45);\n}\n.bp3-tag-remove {\n  opacity: 0.5;\n  margin-top: -2px;\n  margin-right: -6px !important;\n  margin-bottom: -2px;\n  border: none;\n  background: none;\n  cursor: pointer;\n  padding: 2px;\n  padding-left: 0;\n  color: inherit;\n}\n.bp3-tag-remove:hover {\n  opacity: 0.8;\n  background: none;\n  text-decoration: none;\n}\n.bp3-tag-remove:active {\n  opacity: 1;\n}\n.bp3-tag-remove:empty::before {\n  line-height: 1;\n  font-family: "Icons16", sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  font-style: normal;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  content: "\\E6D7";\n}\n.bp3-large .bp3-tag-remove {\n  margin-right: -10px !important;\n  padding: 5px;\n  padding-left: 0;\n}\n.bp3-large .bp3-tag-remove:empty::before {\n  line-height: 1;\n  font-family: "Icons20", sans-serif;\n  font-size: 20px;\n  font-weight: 400;\n  font-style: normal;\n}\n.bp3-tag-input {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -webkit-box-align: start;\n  -ms-flex-align: start;\n  align-items: flex-start;\n  cursor: text;\n  height: auto;\n  min-height: 30px;\n  padding-right: 0;\n  padding-left: 5px;\n  line-height: inherit;\n}\n.bp3-tag-input > * {\n  -webkit-box-flex: 0;\n  -ms-flex-positive: 0;\n  flex-grow: 0;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n}\n.bp3-tag-input > .bp3-tag-input-values {\n  -webkit-box-flex: 1;\n  -ms-flex-positive: 1;\n  flex-grow: 1;\n  -ms-flex-negative: 1;\n  flex-shrink: 1;\n}\n.bp3-tag-input .bp3-tag-input-icon {\n  margin-top: 7px;\n  margin-right: 7px;\n  margin-left: 2px;\n  color: #5c7080;\n}\n.bp3-tag-input .bp3-tag-input-values {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-item-align: stretch;\n  align-self: stretch;\n  margin-top: 5px;\n  margin-right: 7px;\n}\n.bp3-tag-input .bp3-tag-input-values > * {\n  -webkit-box-flex: 0;\n  -ms-flex-positive: 0;\n  flex-grow: 0;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n}\n.bp3-tag-input .bp3-tag-input-values > .bp3-fill {\n  -webkit-box-flex: 1;\n  -ms-flex-positive: 1;\n  flex-grow: 1;\n  -ms-flex-negative: 1;\n  flex-shrink: 1;\n}\n.bp3-tag-input .bp3-tag-input-values::before,\n.bp3-tag-input .bp3-tag-input-values > * {\n  margin-right: 5px;\n}\n.bp3-tag-input .bp3-tag-input-values:empty::before,\n.bp3-tag-input .bp3-tag-input-values > :last-child {\n  margin-right: 0;\n}\n.bp3-tag-input .bp3-tag-input-values > * {\n  margin-bottom: 5px;\n}\n.bp3-tag-input .bp3-tag {\n  overflow-wrap: break-word;\n}\n.bp3-tag-input .bp3-tag.bp3-active {\n  outline: rgba(19,124,189,0.6) auto 2px;\n  outline-offset: 0;\n  -moz-outline-radius: 6px;\n}\n.bp3-tag-input .bp3-input-ghost {\n  -webkit-box-flex: 1;\n  -ms-flex: 1 1 auto;\n  flex: 1 1 auto;\n  width: 80px;\n  line-height: 20px;\n}\n.bp3-tag-input .bp3-input-ghost:disabled,\n.bp3-tag-input .bp3-input-ghost.bp3-disabled {\n  cursor: not-allowed;\n}\n.bp3-tag-input .bp3-button,\n.bp3-tag-input .bp3-spinner {\n  margin: 3px;\n  margin-left: 0;\n}\n.bp3-tag-input .bp3-button {\n  min-width: 24px;\n  min-height: 24px;\n  padding: 0 7px;\n}\n.bp3-tag-input.bp3-large {\n  height: auto;\n  min-height: 40px;\n}\n.bp3-tag-input.bp3-large::before,\n.bp3-tag-input.bp3-large > * {\n  margin-right: 10px;\n}\n.bp3-tag-input.bp3-large:empty::before,\n.bp3-tag-input.bp3-large > :last-child {\n  margin-right: 0;\n}\n.bp3-tag-input.bp3-large .bp3-tag-input-icon {\n  margin-top: 10px;\n  margin-left: 5px;\n}\n.bp3-tag-input.bp3-large .bp3-input-ghost {\n  line-height: 30px;\n}\n.bp3-tag-input.bp3-large .bp3-button {\n  min-width: 30px;\n  min-height: 30px;\n  padding: 5px 10px;\n  margin: 5px;\n  margin-left: 0;\n}\n.bp3-tag-input.bp3-large .bp3-spinner {\n  margin: 8px;\n  margin-left: 0;\n}\n.bp3-tag-input.bp3-active {\n  -webkit-box-shadow: 0 0 0 1px #137cbd, 0 0 0 3px rgba(19,124,189,0.3), inset 0 1px 1px rgba(16,22,26,0.2);\n  box-shadow: 0 0 0 1px #137cbd, 0 0 0 3px rgba(19,124,189,0.3), inset 0 1px 1px rgba(16,22,26,0.2);\n  background-color: #fff;\n}\n.bp3-dark .bp3-tag-input .bp3-tag-input-icon,\n.bp3-tag-input.bp3-dark .bp3-tag-input-icon {\n  color: #bfccd6;\n}\n.bp3-dark .bp3-tag-input .bp3-input-ghost,\n.bp3-tag-input.bp3-dark .bp3-input-ghost {\n  color: #f5f8fa;\n}\n.bp3-dark .bp3-tag-input .bp3-input-ghost::-webkit-input-placeholder,\n.bp3-tag-input.bp3-dark .bp3-input-ghost::-webkit-input-placeholder {\n  color: rgba(191,204,214,0.5);\n}\n.bp3-dark .bp3-tag-input .bp3-input-ghost:-ms-input-placeholder,\n.bp3-tag-input.bp3-dark .bp3-input-ghost:-ms-input-placeholder {\n  color: rgba(191,204,214,0.5);\n}\n.bp3-dark .bp3-tag-input .bp3-input-ghost::-ms-input-placeholder,\n.bp3-tag-input.bp3-dark .bp3-input-ghost::-ms-input-placeholder {\n  color: rgba(191,204,214,0.5);\n}\n.bp3-dark .bp3-tag-input .bp3-input-ghost::placeholder,\n.bp3-tag-input.bp3-dark .bp3-input-ghost::placeholder {\n  color: rgba(191,204,214,0.5);\n}\n.bp3-dark .bp3-tag-input.bp3-active,\n.bp3-tag-input.bp3-dark.bp3-active {\n  -webkit-box-shadow: 0 0 0 1px #137cbd, 0 0 0 1px #137cbd, 0 0 0 3px rgba(19,124,189,0.3), inset 0 0 0 1px rgba(16,22,26,0.3), inset 0 1px 1px rgba(16,22,26,0.4);\n  box-shadow: 0 0 0 1px #137cbd, 0 0 0 1px #137cbd, 0 0 0 3px rgba(19,124,189,0.3), inset 0 0 0 1px rgba(16,22,26,0.3), inset 0 1px 1px rgba(16,22,26,0.4);\n  background-color: rgba(16,22,26,0.3);\n}\n.bp3-input-ghost {\n  border: none;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  background: none;\n  padding: 0;\n}\n.bp3-input-ghost::-webkit-input-placeholder {\n  opacity: 1;\n  color: rgba(92,112,128,0.5);\n}\n.bp3-input-ghost:-ms-input-placeholder {\n  opacity: 1;\n  color: rgba(92,112,128,0.5);\n}\n.bp3-input-ghost::-ms-input-placeholder {\n  opacity: 1;\n  color: rgba(92,112,128,0.5);\n}\n.bp3-input-ghost::placeholder {\n  opacity: 1;\n  color: rgba(92,112,128,0.5);\n}\n.bp3-input-ghost:focus {\n  outline: none !important;\n}\n.bp3-toast {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: start;\n  -ms-flex-align: start;\n  align-items: flex-start;\n  position: relative !important;\n  margin: 20px 0 0;\n  border-radius: 3px;\n  -webkit-box-shadow: 0 0 0 1px rgba(16,22,26,0.1), 0 2px 4px rgba(16,22,26,0.2), 0 8px 24px rgba(16,22,26,0.2);\n  box-shadow: 0 0 0 1px rgba(16,22,26,0.1), 0 2px 4px rgba(16,22,26,0.2), 0 8px 24px rgba(16,22,26,0.2);\n  background-color: #fff;\n  min-width: 300px;\n  max-width: 500px;\n  pointer-events: all;\n}\n.bp3-toast.bp3-toast-enter,\n.bp3-toast.bp3-toast-appear {\n  -webkit-transform: translateY(-40px);\n  transform: translateY(-40px);\n}\n.bp3-toast.bp3-toast-enter-active,\n.bp3-toast.bp3-toast-appear-active {\n  -webkit-transform: translateY(0);\n  transform: translateY(0);\n  -webkit-transition-property: -webkit-transform;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n  -webkit-transition-duration: 300ms;\n  transition-duration: 300ms;\n  -webkit-transition-timing-function: cubic-bezier(0.54, 1.12, 0.38, 1.11);\n  transition-timing-function: cubic-bezier(0.54, 1.12, 0.38, 1.11);\n  -webkit-transition-delay: 0;\n  transition-delay: 0;\n}\n.bp3-toast.bp3-toast-enter ~ .bp3-toast,\n.bp3-toast.bp3-toast-appear ~ .bp3-toast {\n  -webkit-transform: translateY(-40px);\n  transform: translateY(-40px);\n}\n.bp3-toast.bp3-toast-enter-active ~ .bp3-toast,\n.bp3-toast.bp3-toast-appear-active ~ .bp3-toast {\n  -webkit-transform: translateY(0);\n  transform: translateY(0);\n  -webkit-transition-property: -webkit-transform;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n  -webkit-transition-duration: 300ms;\n  transition-duration: 300ms;\n  -webkit-transition-timing-function: cubic-bezier(0.54, 1.12, 0.38, 1.11);\n  transition-timing-function: cubic-bezier(0.54, 1.12, 0.38, 1.11);\n  -webkit-transition-delay: 0;\n  transition-delay: 0;\n}\n.bp3-toast.bp3-toast-exit {\n  opacity: 1;\n  -webkit-filter: blur(0);\n  filter: blur(0);\n}\n.bp3-toast.bp3-toast-exit-active {\n  opacity: 0;\n  -webkit-filter: blur(10px);\n  filter: blur(10px);\n  -webkit-transition-property: opacity, -webkit-filter;\n  transition-property: opacity, -webkit-filter;\n  transition-property: opacity, filter;\n  transition-property: opacity, filter, -webkit-filter;\n  -webkit-transition-duration: 300ms;\n  transition-duration: 300ms;\n  -webkit-transition-timing-function: cubic-bezier(0.4, 1, 0.75, 0.9);\n  transition-timing-function: cubic-bezier(0.4, 1, 0.75, 0.9);\n  -webkit-transition-delay: 0;\n  transition-delay: 0;\n}\n.bp3-toast.bp3-toast-exit ~ .bp3-toast {\n  -webkit-transform: translateY(0);\n  transform: translateY(0);\n}\n.bp3-toast.bp3-toast-exit-active ~ .bp3-toast {\n  -webkit-transform: translateY(-40px);\n  transform: translateY(-40px);\n  -webkit-transition-property: -webkit-transform;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n  -webkit-transition-duration: 100ms;\n  transition-duration: 100ms;\n  -webkit-transition-timing-function: cubic-bezier(0.4, 1, 0.75, 0.9);\n  transition-timing-function: cubic-bezier(0.4, 1, 0.75, 0.9);\n  -webkit-transition-delay: 50ms;\n  transition-delay: 50ms;\n}\n.bp3-toast .bp3-button-group {\n  -webkit-box-flex: 0;\n  -ms-flex: 0 0 auto;\n  flex: 0 0 auto;\n  padding: 5px;\n  padding-left: 0;\n}\n.bp3-toast > .bp3-icon {\n  margin: 12px;\n  margin-right: 0;\n  color: #5c7080;\n}\n.bp3-toast.bp3-dark,\n.bp3-dark .bp3-toast {\n  -webkit-box-shadow: 0 0 0 1px rgba(16,22,26,0.2), 0 2px 4px rgba(16,22,26,0.4), 0 8px 24px rgba(16,22,26,0.4);\n  box-shadow: 0 0 0 1px rgba(16,22,26,0.2), 0 2px 4px rgba(16,22,26,0.4), 0 8px 24px rgba(16,22,26,0.4);\n  background-color: #394b59;\n}\n.bp3-toast.bp3-dark > .bp3-icon,\n.bp3-dark .bp3-toast > .bp3-icon {\n  color: #bfccd6;\n}\n.bp3-toast[class*="bp3-intent-"] a {\n  color: rgba(255,255,255,0.7);\n}\n.bp3-toast[class*="bp3-intent-"] a:hover {\n  color: #fff;\n}\n.bp3-toast[class*="bp3-intent-"] > .bp3-icon {\n  color: #fff;\n}\n.bp3-toast[class*="bp3-intent-"] .bp3-button,\n.bp3-toast[class*="bp3-intent-"] .bp3-button::before,\n.bp3-toast[class*="bp3-intent-"] .bp3-button .bp3-icon,\n.bp3-toast[class*="bp3-intent-"] .bp3-button:active {\n  color: rgba(255,255,255,0.7) !important;\n}\n.bp3-toast[class*="bp3-intent-"] .bp3-button:focus {\n  outline-color: rgba(255,255,255,0.5);\n}\n.bp3-toast[class*="bp3-intent-"] .bp3-button:hover {\n  background-color: rgba(255,255,255,0.15) !important;\n  color: #fff !important;\n}\n.bp3-toast[class*="bp3-intent-"] .bp3-button:active {\n  background-color: rgba(255,255,255,0.3) !important;\n  color: #fff !important;\n}\n.bp3-toast[class*="bp3-intent-"] .bp3-button::after {\n  background: rgba(255,255,255,0.3) !important;\n}\n.bp3-toast.bp3-intent-primary {\n  background-color: #137cbd;\n  color: #fff;\n}\n.bp3-toast.bp3-intent-success {\n  background-color: #0f9960;\n  color: #fff;\n}\n.bp3-toast.bp3-intent-warning {\n  background-color: #d9822b;\n  color: #fff;\n}\n.bp3-toast.bp3-intent-danger {\n  background-color: #db3737;\n  color: #fff;\n}\n.bp3-toast-message {\n  -webkit-box-flex: 1;\n  -ms-flex: 1 1 auto;\n  flex: 1 1 auto;\n  padding: 11px;\n}\n.bp3-toast-container {\n  display: -webkit-box !important;\n  display: -ms-flexbox !important;\n  display: flex !important;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  position: fixed;\n  right: 0;\n  left: 0;\n  z-index: 40;\n  overflow: hidden;\n  padding: 0 20px 20px;\n  pointer-events: none;\n}\n.bp3-toast-container.bp3-toast-container-top {\n  top: 0;\n  bottom: auto;\n}\n.bp3-toast-container.bp3-toast-container-bottom {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: reverse;\n  -ms-flex-direction: column-reverse;\n  flex-direction: column-reverse;\n  top: auto;\n  bottom: 0;\n}\n.bp3-toast-container.bp3-toast-container-left {\n  -webkit-box-align: start;\n  -ms-flex-align: start;\n  align-items: flex-start;\n}\n.bp3-toast-container.bp3-toast-container-right {\n  -webkit-box-align: end;\n  -ms-flex-align: end;\n  align-items: flex-end;\n}\n.bp3-toast-container-bottom .bp3-toast.bp3-toast-enter:not(.bp3-toast-enter-active),\n.bp3-toast-container-bottom .bp3-toast.bp3-toast-enter:not(.bp3-toast-enter-active) ~ .bp3-toast,\n.bp3-toast-container-bottom .bp3-toast.bp3-toast-leave-active ~ .bp3-toast {\n  -webkit-transform: translateY(60px);\n  transform: translateY(60px);\n}\n.bp3-tooltip {\n  -webkit-box-shadow: 0 0 0 1px rgba(16,22,26,0.1), 0 2px 4px rgba(16,22,26,0.2), 0 8px 24px rgba(16,22,26,0.2);\n  box-shadow: 0 0 0 1px rgba(16,22,26,0.1), 0 2px 4px rgba(16,22,26,0.2), 0 8px 24px rgba(16,22,26,0.2);\n  -webkit-transform: scale(1);\n  transform: scale(1);\n}\n.bp3-tooltip .bp3-popover-arrow {\n  position: absolute;\n  width: 22px;\n  height: 22px;\n}\n.bp3-tooltip .bp3-popover-arrow::before {\n  margin: 4px;\n  width: 14px;\n  height: 14px;\n}\n.bp3-tether-element-attached-bottom.bp3-tether-target-attached-top > .bp3-tooltip {\n  margin-top: -11px;\n  margin-bottom: 11px;\n}\n.bp3-tether-element-attached-bottom.bp3-tether-target-attached-top > .bp3-tooltip > .bp3-popover-arrow {\n  bottom: -8px;\n}\n.bp3-tether-element-attached-bottom.bp3-tether-target-attached-top > .bp3-tooltip > .bp3-popover-arrow svg {\n  -webkit-transform: rotate(-90deg);\n  transform: rotate(-90deg);\n}\n.bp3-tether-element-attached-left.bp3-tether-target-attached-right > .bp3-tooltip {\n  margin-left: 11px;\n}\n.bp3-tether-element-attached-left.bp3-tether-target-attached-right > .bp3-tooltip > .bp3-popover-arrow {\n  left: -8px;\n}\n.bp3-tether-element-attached-left.bp3-tether-target-attached-right > .bp3-tooltip > .bp3-popover-arrow svg {\n  -webkit-transform: rotate(0);\n  transform: rotate(0);\n}\n.bp3-tether-element-attached-top.bp3-tether-target-attached-bottom > .bp3-tooltip {\n  margin-top: 11px;\n}\n.bp3-tether-element-attached-top.bp3-tether-target-attached-bottom > .bp3-tooltip > .bp3-popover-arrow {\n  top: -8px;\n}\n.bp3-tether-element-attached-top.bp3-tether-target-attached-bottom > .bp3-tooltip > .bp3-popover-arrow svg {\n  -webkit-transform: rotate(90deg);\n  transform: rotate(90deg);\n}\n.bp3-tether-element-attached-right.bp3-tether-target-attached-left > .bp3-tooltip {\n  margin-right: 11px;\n  margin-left: -11px;\n}\n.bp3-tether-element-attached-right.bp3-tether-target-attached-left > .bp3-tooltip > .bp3-popover-arrow {\n  right: -8px;\n}\n.bp3-tether-element-attached-right.bp3-tether-target-attached-left > .bp3-tooltip > .bp3-popover-arrow svg {\n  -webkit-transform: rotate(180deg);\n  transform: rotate(180deg);\n}\n.bp3-tether-element-attached-middle > .bp3-tooltip > .bp3-popover-arrow {\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%);\n}\n.bp3-tether-element-attached-center > .bp3-tooltip > .bp3-popover-arrow {\n  right: 50%;\n  -webkit-transform: translateX(50%);\n  transform: translateX(50%);\n}\n.bp3-tether-element-attached-top.bp3-tether-target-attached-top > .bp3-tooltip > .bp3-popover-arrow {\n  top: -0.22183px;\n}\n.bp3-tether-element-attached-right.bp3-tether-target-attached-right > .bp3-tooltip > .bp3-popover-arrow {\n  right: -0.22183px;\n}\n.bp3-tether-element-attached-left.bp3-tether-target-attached-left > .bp3-tooltip > .bp3-popover-arrow {\n  left: -0.22183px;\n}\n.bp3-tether-element-attached-bottom.bp3-tether-target-attached-bottom > .bp3-tooltip > .bp3-popover-arrow {\n  bottom: -0.22183px;\n}\n.bp3-tether-element-attached-top.bp3-tether-element-attached-left > .bp3-tooltip {\n  -webkit-transform-origin: top left;\n  transform-origin: top left;\n}\n.bp3-tether-element-attached-top.bp3-tether-element-attached-center > .bp3-tooltip {\n  -webkit-transform-origin: top center;\n  transform-origin: top center;\n}\n.bp3-tether-element-attached-top.bp3-tether-element-attached-right > .bp3-tooltip {\n  -webkit-transform-origin: top right;\n  transform-origin: top right;\n}\n.bp3-tether-element-attached-middle.bp3-tether-element-attached-left > .bp3-tooltip {\n  -webkit-transform-origin: center left;\n  transform-origin: center left;\n}\n.bp3-tether-element-attached-middle.bp3-tether-element-attached-center > .bp3-tooltip {\n  -webkit-transform-origin: center center;\n  transform-origin: center center;\n}\n.bp3-tether-element-attached-middle.bp3-tether-element-attached-right > .bp3-tooltip {\n  -webkit-transform-origin: center right;\n  transform-origin: center right;\n}\n.bp3-tether-element-attached-bottom.bp3-tether-element-attached-left > .bp3-tooltip {\n  -webkit-transform-origin: bottom left;\n  transform-origin: bottom left;\n}\n.bp3-tether-element-attached-bottom.bp3-tether-element-attached-center > .bp3-tooltip {\n  -webkit-transform-origin: bottom center;\n  transform-origin: bottom center;\n}\n.bp3-tether-element-attached-bottom.bp3-tether-element-attached-right > .bp3-tooltip {\n  -webkit-transform-origin: bottom right;\n  transform-origin: bottom right;\n}\n.bp3-tooltip .bp3-popover-content {\n  background: #394b59;\n  color: #f5f8fa;\n}\n.bp3-tooltip .bp3-popover-arrow::before {\n  -webkit-box-shadow: 1px 1px 6px rgba(16,22,26,0.2);\n  box-shadow: 1px 1px 6px rgba(16,22,26,0.2);\n}\n.bp3-tooltip .bp3-popover-arrow-border {\n  fill: #10161a;\n  fill-opacity: 0.1;\n}\n.bp3-tooltip .bp3-popover-arrow-fill {\n  fill: #394b59;\n}\n.bp3-popover-enter > .bp3-tooltip,\n.bp3-popover-appear > .bp3-tooltip {\n  -webkit-transform: scale(0.8);\n  transform: scale(0.8);\n}\n.bp3-popover-enter-active > .bp3-tooltip,\n.bp3-popover-appear-active > .bp3-tooltip {\n  -webkit-transform: scale(1);\n  transform: scale(1);\n  -webkit-transition-property: -webkit-transform;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n  -webkit-transition-duration: 100ms;\n  transition-duration: 100ms;\n  -webkit-transition-timing-function: cubic-bezier(0.4, 1, 0.75, 0.9);\n  transition-timing-function: cubic-bezier(0.4, 1, 0.75, 0.9);\n  -webkit-transition-delay: 0;\n  transition-delay: 0;\n}\n.bp3-popover-exit > .bp3-tooltip {\n  -webkit-transform: scale(1);\n  transform: scale(1);\n}\n.bp3-popover-exit-active > .bp3-tooltip {\n  -webkit-transform: scale(0.8);\n  transform: scale(0.8);\n  -webkit-transition-property: -webkit-transform;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n  -webkit-transition-duration: 100ms;\n  transition-duration: 100ms;\n  -webkit-transition-timing-function: cubic-bezier(0.4, 1, 0.75, 0.9);\n  transition-timing-function: cubic-bezier(0.4, 1, 0.75, 0.9);\n  -webkit-transition-delay: 0;\n  transition-delay: 0;\n}\n.bp3-tooltip .bp3-popover-content {\n  padding: 10px 12px;\n}\n.bp3-tooltip.bp3-dark,\n.bp3-dark .bp3-tooltip {\n  -webkit-box-shadow: 0 0 0 1px rgba(16,22,26,0.2), 0 2px 4px rgba(16,22,26,0.4), 0 8px 24px rgba(16,22,26,0.4);\n  box-shadow: 0 0 0 1px rgba(16,22,26,0.2), 0 2px 4px rgba(16,22,26,0.4), 0 8px 24px rgba(16,22,26,0.4);\n}\n.bp3-tooltip.bp3-dark .bp3-popover-content,\n.bp3-dark .bp3-tooltip .bp3-popover-content {\n  background: #e1e8ed;\n  color: #394b59;\n}\n.bp3-tooltip.bp3-dark .bp3-popover-arrow::before,\n.bp3-dark .bp3-tooltip .bp3-popover-arrow::before {\n  -webkit-box-shadow: 1px 1px 6px rgba(16,22,26,0.4);\n  box-shadow: 1px 1px 6px rgba(16,22,26,0.4);\n}\n.bp3-tooltip.bp3-dark .bp3-popover-arrow-border,\n.bp3-dark .bp3-tooltip .bp3-popover-arrow-border {\n  fill: #10161a;\n  fill-opacity: 0.2;\n}\n.bp3-tooltip.bp3-dark .bp3-popover-arrow-fill,\n.bp3-dark .bp3-tooltip .bp3-popover-arrow-fill {\n  fill: #e1e8ed;\n}\n.bp3-tooltip.bp3-intent-primary .bp3-popover-content {\n  background: #137cbd;\n  color: #fff;\n}\n.bp3-tooltip.bp3-intent-primary .bp3-popover-arrow-fill {\n  fill: #137cbd;\n}\n.bp3-tooltip.bp3-intent-success .bp3-popover-content {\n  background: #0f9960;\n  color: #fff;\n}\n.bp3-tooltip.bp3-intent-success .bp3-popover-arrow-fill {\n  fill: #0f9960;\n}\n.bp3-tooltip.bp3-intent-warning .bp3-popover-content {\n  background: #d9822b;\n  color: #fff;\n}\n.bp3-tooltip.bp3-intent-warning .bp3-popover-arrow-fill {\n  fill: #d9822b;\n}\n.bp3-tooltip.bp3-intent-danger .bp3-popover-content {\n  background: #db3737;\n  color: #fff;\n}\n.bp3-tooltip.bp3-intent-danger .bp3-popover-arrow-fill {\n  fill: #db3737;\n}\n.bp3-tooltip-indicator {\n  border-bottom: dotted 1px;\n  cursor: help;\n}\n.bp3-tree-node-list {\n  margin: 0;\n  padding-left: 0;\n  list-style: none;\n}\n.bp3-tree-root {\n  position: relative;\n  background-color: transparent;\n  cursor: default;\n  padding-left: 0;\n}\n.bp3-tree-node-content-0 {\n  padding-left: 0px;\n}\n.bp3-tree-node-content-1 {\n  padding-left: 23px;\n}\n.bp3-tree-node-content-2 {\n  padding-left: 46px;\n}\n.bp3-tree-node-content-3 {\n  padding-left: 69px;\n}\n.bp3-tree-node-content-4 {\n  padding-left: 92px;\n}\n.bp3-tree-node-content-5 {\n  padding-left: 115px;\n}\n.bp3-tree-node-content-6 {\n  padding-left: 138px;\n}\n.bp3-tree-node-content-7 {\n  padding-left: 161px;\n}\n.bp3-tree-node-content-8 {\n  padding-left: 184px;\n}\n.bp3-tree-node-content-9 {\n  padding-left: 207px;\n}\n.bp3-tree-node-content-10 {\n  padding-left: 230px;\n}\n.bp3-tree-node-content-11 {\n  padding-left: 253px;\n}\n.bp3-tree-node-content-12 {\n  padding-left: 276px;\n}\n.bp3-tree-node-content-13 {\n  padding-left: 299px;\n}\n.bp3-tree-node-content-14 {\n  padding-left: 322px;\n}\n.bp3-tree-node-content-15 {\n  padding-left: 345px;\n}\n.bp3-tree-node-content-16 {\n  padding-left: 368px;\n}\n.bp3-tree-node-content-17 {\n  padding-left: 391px;\n}\n.bp3-tree-node-content-18 {\n  padding-left: 414px;\n}\n.bp3-tree-node-content-19 {\n  padding-left: 437px;\n}\n.bp3-tree-node-content-20 {\n  padding-left: 460px;\n}\n.bp3-tree-node-content {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  width: 100%;\n  height: 30px;\n  padding-right: 5px;\n}\n.bp3-tree-node-content:hover {\n  background-color: rgba(191,204,214,0.4);\n}\n.bp3-tree-node-caret,\n.bp3-tree-node-caret-none {\n  position: relative;\n  min-width: 30px;\n  line-height: 30px !important;\n}\n.bp3-tree-node-caret {\n  color: #5c7080;\n  -webkit-transform: rotate(0deg);\n  transform: rotate(0deg);\n  cursor: pointer;\n  text-align: center;\n  -webkit-transition: -webkit-transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9);\n  transition: -webkit-transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9);\n  transition: transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9);\n  transition: transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9), -webkit-transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9);\n}\n.bp3-tree-node-caret:hover {\n  color: #182026;\n}\n.bp3-dark .bp3-tree-node-caret {\n  color: #bfccd6;\n}\n.bp3-dark .bp3-tree-node-caret:hover {\n  color: #f5f8fa;\n}\n.bp3-tree-node-caret.bp3-tree-node-caret-open {\n  -webkit-transform: rotate(90deg);\n  transform: rotate(90deg);\n}\n.bp3-tree-node-caret.bp3-icon-standard::before {\n  content: "\\E695";\n}\n.bp3-tree-node-caret .bp3-icon {\n  margin: 7px;\n}\n.bp3-tree-node-icon {\n  position: relative;\n  margin-right: 7px;\n  color: #5c7080;\n}\n.bp3-tree-node-label {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  word-wrap: normal;\n  -webkit-box-flex: 1;\n  -ms-flex: 1 1 auto;\n  flex: 1 1 auto;\n  position: relative;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.bp3-tree-node-label span {\n  display: inline;\n}\n.bp3-tree-node-secondary-label {\n  padding: 0 5px;\n  line-height: 30px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.bp3-tree-node.bp3-tree-node-selected > .bp3-tree-node-content {\n  background-color: #137cbd;\n}\n.bp3-tree-node.bp3-tree-node-selected > .bp3-tree-node-content,\n.bp3-tree-node.bp3-tree-node-selected > .bp3-tree-node-content .bp3-icon,\n.bp3-tree-node.bp3-tree-node-selected > .bp3-tree-node-content .bp3-icon-standard,\n.bp3-tree-node.bp3-tree-node-selected > .bp3-tree-node-content .bp3-icon-large {\n  color: #fff;\n}\n.bp3-tree-node.bp3-tree-node-selected > .bp3-tree-node-content .bp3-tree-node-caret::before {\n  color: rgba(255,255,255,0.7);\n}\n.bp3-tree-node.bp3-tree-node-selected > .bp3-tree-node-content .bp3-tree-node-caret:hover::before {\n  color: #fff;\n}\n.bp3-dark .bp3-tree-node-content:hover {\n  background-color: rgba(92,112,128,0.3);\n}\n.bp3-dark .bp3-tree-node-icon {\n  color: #bfccd6;\n}\n.bp3-dark .bp3-tree-node.bp3-tree-node-selected > .bp3-tree-node-content {\n  background-color: #137cbd;\n}\n@-moz-keyframes linear-progress-bar-stripes {\n  from {\n    background-position: 0 0;\n  }\n  to {\n    background-position: 30px 0;\n  }\n}\n@-webkit-keyframes linear-progress-bar-stripes {\n  from {\n    background-position: 0 0;\n  }\n  to {\n    background-position: 30px 0;\n  }\n}\n@-o-keyframes linear-progress-bar-stripes {\n  from {\n    background-position: 0 0;\n  }\n  to {\n    background-position: 30px 0;\n  }\n}\n@keyframes linear-progress-bar-stripes {\n  from {\n    background-position: 0 0;\n  }\n  to {\n    background-position: 30px 0;\n  }\n}\n@-moz-keyframes glow {\n  0%, 100% {\n    border-color: rgba(167,182,194,0.2);\n    background-color: rgba(167,182,194,0.2);\n  }\n  50% {\n    border-color: rgba(92,112,128,0.2);\n    background-color: rgba(92,112,128,0.2);\n  }\n}\n@-webkit-keyframes glow {\n  0%, 100% {\n    border-color: rgba(167,182,194,0.2);\n    background-color: rgba(167,182,194,0.2);\n  }\n  50% {\n    border-color: rgba(92,112,128,0.2);\n    background-color: rgba(92,112,128,0.2);\n  }\n}\n@-o-keyframes glow {\n  0%, 100% {\n    border-color: rgba(167,182,194,0.2);\n    background-color: rgba(167,182,194,0.2);\n  }\n  50% {\n    border-color: rgba(92,112,128,0.2);\n    background-color: rgba(92,112,128,0.2);\n  }\n}\n@keyframes glow {\n  0%, 100% {\n    border-color: rgba(167,182,194,0.2);\n    background-color: rgba(167,182,194,0.2);\n  }\n  50% {\n    border-color: rgba(92,112,128,0.2);\n    background-color: rgba(92,112,128,0.2);\n  }\n}\n@-moz-keyframes pt-spinner-animation {\n  from {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  to {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n@-webkit-keyframes pt-spinner-animation {\n  from {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  to {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n@-o-keyframes pt-spinner-animation {\n  from {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  to {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n@keyframes pt-spinner-animation {\n  from {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  to {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n',
      '',
    ])
  },
  function(n, e, t) {
    ;(n.exports = t(13)(!1)).push([
      n.i,
      '/* normalize.css v8.0.0 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers.\n */\nbody {\n  margin: 0;\n}\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n/* Grouping content\n   ========================================================================== */\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Remove the gray background on active links in IE 10.\n */\na {\n  background-color: transparent;\n}\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder;\n}\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%;\n}\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\nsub {\n  bottom: -0.25em;\n}\nsup {\n  top: -0.5em;\n}\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove the border on images inside links in IE 10.\n */\nimg {\n  border-style: none;\n}\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput {\n/* 1 */\n  overflow: visible;\n}\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect {\n/* 1 */\n  text-transform: none;\n}\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  vertical-align: baseline;\n}\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\ntextarea {\n  overflow: auto;\n}\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\ndetails {\n  display: block;\n}\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item;\n}\n/* Misc\n   ========================================================================== */\n/**\n * Add the correct display in IE 10+.\n */\ntemplate {\n  display: none;\n}\n/**\n * Add the correct display in IE 10.\n */\n[hidden] {\n  display: none;\n}\n',
      '',
    ])
  },
  function(n, e) {
    var t,
      r,
      o = (n.exports = {})
    function a() {
      throw new Error('setTimeout has not been defined')
    }
    function i() {
      throw new Error('clearTimeout has not been defined')
    }
    function c(n) {
      if (t === setTimeout) return setTimeout(n, 0)
      if ((t === a || !t) && setTimeout) return (t = setTimeout), setTimeout(n, 0)
      try {
        return t(n, 0)
      } catch (e) {
        try {
          return t.call(null, n, 0)
        } catch (e) {
          return t.call(this, n, 0)
        }
      }
    }
    !(function() {
      try {
        t = 'function' == typeof setTimeout ? setTimeout : a
      } catch (n) {
        t = a
      }
      try {
        r = 'function' == typeof clearTimeout ? clearTimeout : i
      } catch (n) {
        r = i
      }
    })()
    var p,
      b = [],
      l = !1,
      s = -1
    function d() {
      l && p && ((l = !1), p.length ? (b = p.concat(b)) : (s = -1), b.length && u())
    }
    function u() {
      if (!l) {
        var n = c(d)
        l = !0
        for (var e = b.length; e; ) {
          for (p = b, b = []; ++s < e; ) p && p[s].run()
          ;(s = -1), (e = b.length)
        }
        ;(p = null),
          (l = !1),
          (function(n) {
            if (r === clearTimeout) return clearTimeout(n)
            if ((r === i || !r) && clearTimeout) return (r = clearTimeout), clearTimeout(n)
            try {
              r(n)
            } catch (e) {
              try {
                return r.call(null, n)
              } catch (e) {
                return r.call(this, n)
              }
            }
          })(n)
      }
    }
    function m(n, e) {
      ;(this.fun = n), (this.array = e)
    }
    function h() {}
    ;(o.nextTick = function(n) {
      var e = new Array(arguments.length - 1)
      if (arguments.length > 1) for (var t = 1; t < arguments.length; t++) e[t - 1] = arguments[t]
      b.push(new m(n, e)), 1 !== b.length || l || c(u)
    }),
      (m.prototype.run = function() {
        this.fun.apply(null, this.array)
      }),
      (o.title = 'browser'),
      (o.browser = !0),
      (o.env = {}),
      (o.argv = []),
      (o.version = ''),
      (o.versions = {}),
      (o.on = h),
      (o.addListener = h),
      (o.once = h),
      (o.off = h),
      (o.removeListener = h),
      (o.removeAllListeners = h),
      (o.emit = h),
      (o.prependListener = h),
      (o.prependOnceListener = h),
      (o.listeners = function(n) {
        return []
      }),
      (o.binding = function(n) {
        throw new Error('process.binding is not supported')
      }),
      (o.cwd = function() {
        return '/'
      }),
      (o.chdir = function(n) {
        throw new Error('process.chdir is not supported')
      }),
      (o.umask = function() {
        return 0
      })
  },
  function(n, e, t) {
    ;(n.exports = t(13)(!1)).push([
      n.i,
      ".item {\n  border: 1px solid #ea4d4d;\n  margin: 10px;\n  padding: 5px;\n}\n.index {\n  margin-left: 20px;\n  font-size: 14pt;\n}\n.sentence {\n  border: 1px solid #3f8ae6;\n  margin-top: 7px;\n  margin-left: 20px;\n  margin-right: 20px;\n  padding-left: 5px;\n  font-size: 15pt;\n}\n.entity-buttons {\n  margin-top: 16px;\n  display: flex;\n}\n.entity-wrapper-one {\n  display: flex;\n/* justify-content: space-between; */\n}\n.entity-wrapper-two {\n  display: flex;\n/* justify-content: space-between; */\n}\n.set-one {\n  margin-left: 20px;\n  margin-right: 10px;\n}\n.set-two {\n  margin-left: 20px;\n  margin-right: 10px;\n}\n.one {\n  font-size: 15pt;\n}\n.two {\n  font-size: 15pt;\n}\n.abandon-btn {\n  margin-left: 20px;\n  font-size: 13pt;\n}\n.relation-type {\n  margin-top: 15px;\n}\n.relation-type > label {\n  margin-left: 20px;\n  font-size: 16pt;\n  text-align: center;\n}\ninput[type='checkbox'] {\n  width: 18px;\n  height: 18px;\n}\n.last {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  background: #fff;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  border-top: 2px solid #ccc;\n}\n.add-abandoned {\n  margin-top: 12px;\n  margin-left: 20px;\n  display: flex;\n  font-size: 14pt;\n}\n.abandonedBtn {\n  margin-left: 10px;\n}\n.save-btn {\n  width: 190px; /* 宽度 */\n  height: 35px; /* 高度 */\n  border-width: 0; /* 边框宽度 */\n  border-radius: 3px; /* 边框半径 */\n  background: #1e90ff; /* 背景颜色 */\n  cursor: pointer; /* 鼠标移入按钮范围时出现手势 */\n  outline: none; /* 不显示轮廓线 */\n  color: #fff; /* 字体颜色 */\n  font-size: 17px; /* 字体大小 */\n}\n.save-btn:hover {\n/* 鼠标移入按钮范围时改变颜色 */\n  background: #59f;\n}\n.pageFrame {\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  font-size: 15px;\n  position: fixed;\n  background: #fff;\n  left: 0;\n  right: 0;\n  top: 0;\n  height: 50px;\n  border-bottom: 2px solid #ccc;\n}\n",
      '',
    ])
  },
  function(n, e, t) {
    ;(n.exports = t(13)(!1)).push([
      n.i,
      '.toast-it {\n  background-color: #555;\n  color: #f4f4f4;\n  padding: 3px 20px;\n  border-radius: 20px;\n  text-align: center;\n  position: fixed;\n/* center horizontally */\n  top: 80%;\n  left: 50%;\n  transform: translate(-50%, -80%);\n  animation-name: TOAST-APPEAR;\n  animation-timing-function: ease-in;\n  animation-duration: 3s;\n}\n@-moz-keyframes TOAST-APPEAR {\n  0% {\n    opacity: 0;\n  }\n  15% {\n    opacity: 1;\n  }\n  80% {\n    opacity: 1;\n    top: 80%;\n  }\n  100% {\n    opacity: 0;\n    top: 75%;\n  }\n}\n@-webkit-keyframes TOAST-APPEAR {\n  0% {\n    opacity: 0;\n  }\n  15% {\n    opacity: 1;\n  }\n  80% {\n    opacity: 1;\n    top: 80%;\n  }\n  100% {\n    opacity: 0;\n    top: 75%;\n  }\n}\n@-o-keyframes TOAST-APPEAR {\n  0% {\n    opacity: 0;\n  }\n  15% {\n    opacity: 1;\n  }\n  80% {\n    opacity: 1;\n    top: 80%;\n  }\n  100% {\n    opacity: 0;\n    top: 75%;\n  }\n}\n@keyframes TOAST-APPEAR {\n  0% {\n    opacity: 0;\n  }\n  15% {\n    opacity: 1;\n  }\n  80% {\n    opacity: 1;\n    top: 80%;\n  }\n  100% {\n    opacity: 0;\n    top: 75%;\n  }\n}\n',
      '',
    ])
  },
  function(n, e, t) {
    'use strict'
    /*
object-assign
(c) Sindre Sorhus
@license MIT
*/ var r = Object.getOwnPropertySymbols,
      o = Object.prototype.hasOwnProperty,
      a = Object.prototype.propertyIsEnumerable
    n.exports = (function() {
      try {
        if (!Object.assign) return !1
        var n = new String('abc')
        if (((n[5] = 'de'), '5' === Object.getOwnPropertyNames(n)[0])) return !1
        for (var e = {}, t = 0; t < 10; t++) e['_' + String.fromCharCode(t)] = t
        if (
          '0123456789' !==
          Object.getOwnPropertyNames(e)
            .map(function(n) {
              return e[n]
            })
            .join('')
        )
          return !1
        var r = {}
        return (
          'abcdefghijklmnopqrst'.split('').forEach(function(n) {
            r[n] = n
          }),
          'abcdefghijklmnopqrst' === Object.keys(Object.assign({}, r)).join('')
        )
      } catch (n) {
        return !1
      }
    })()
      ? Object.assign
      : function(n, e) {
          for (
            var t,
              i,
              c = (function(n) {
                if (null === n || void 0 === n)
                  throw new TypeError('Object.assign cannot be called with null or undefined')
                return Object(n)
              })(n),
              p = 1;
            p < arguments.length;
            p++
          ) {
            for (var b in (t = Object(arguments[p]))) o.call(t, b) && (c[b] = t[b])
            if (r) {
              i = r(t)
              for (var l = 0; l < i.length; l++) a.call(t, i[l]) && (c[i[l]] = t[i[l]])
            }
          }
          return c
        }
  },
  function(n, e, t) {
    'use strict'
    var r = function(n) {}
    n.exports = function(n, e, t, o, a, i, c, p) {
      if ((r(e), !n)) {
        var b
        if (void 0 === e)
          b = new Error(
            'Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.',
          )
        else {
          var l = [t, o, a, i, c, p],
            s = 0
          ;(b = new Error(
            e.replace(/%s/g, function() {
              return l[s++]
            }),
          )).name = 'Invariant Violation'
        }
        throw ((b.framesToPop = 1), b)
      }
    }
  },
  function(n, e, t) {
    'use strict'
    n.exports = {}
  },
  function(n, e, t) {
    'use strict'
    function r(n) {
      return function() {
        return n
      }
    }
    var o = function() {}
    ;(o.thatReturns = r),
      (o.thatReturnsFalse = r(!1)),
      (o.thatReturnsTrue = r(!0)),
      (o.thatReturnsNull = r(null)),
      (o.thatReturnsThis = function() {
        return this
      }),
      (o.thatReturnsArgument = function(n) {
        return n
      }),
      (n.exports = o)
  },
  function(n, e, t) {
    'use strict'
    !(function n() {
      if (
        'undefined' != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
        'function' == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
      )
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)
        } catch (n) {
          console.error(n)
        }
    })(),
      (n.exports = t(48))
  },
  function(module, __webpack_exports__, __webpack_require__) {
    'use strict'
    ;(function(module) {
      __webpack_require__.d(__webpack_exports__, 'a', function() {
        return App
      })
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__,
        ),
        immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12),
        react_hot_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3),
        react_hot_loader__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(
          react_hot_loader__WEBPACK_IMPORTED_MODULE_2__,
        ),
        _old_index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56),
        _old_index_css__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
          _old_index_css__WEBPACK_IMPORTED_MODULE_3__,
        ),
        _Pager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(32),
        _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(18),
        _BasicFrame__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(34),
        _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16),
        _toast__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(37),
        _dec,
        _class
      function shallowCopy(n) {
        return Object.assign({}, n)
      }
      !(function() {
        var n = __webpack_require__(3).enterModule
        n && n(module)
      })()
      let App = ((_dec = Object(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__.hot)(module)),
      _dec(
        (_class = class App extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
          constructor(n) {
            super(n),
              (this.onPageChange = n => {
                const { pageSize: e } = this.state
                this.setState({
                  currentPageId: Object(_utils__WEBPACK_IMPORTED_MODULE_7__.a)(1, n, e),
                })
              }),
              (this.onAddPair = n => {
                const { itemList: e } = this.state,
                  t = e.map(e => {
                    if (e.id === n) {
                      const n = shallowCopy(e)
                      return (
                        (n.pairs = e.pairs.concat([_constants__WEBPACK_IMPORTED_MODULE_5__.a])), n
                      )
                    }
                    return e
                  })
                this.setState({ itemList: t })
              }),
              (this.onDeletePair = (n, e) => {
                const { itemList: t } = this.state,
                  r = t.map(t => {
                    if (t.id === n) {
                      const n = shallowCopy(t)
                      return (n.pairs = t.pairs.slice()), n.pairs.splice(e, 1), n
                    }
                    return t
                  })
                this.setState({ itemList: r })
              }),
              (this.onSetEntityOne = (n, e, t, r) => {
                const { itemList: o } = this.state,
                  a = Object(immer__WEBPACK_IMPORTED_MODULE_1__.a)(o, o => {
                    const a = o.find(e => e.id === n).pairs[e]
                    ;(a.s1 = t), (a.e1 = r)
                  })
                this.setState({ itemList: a })
              }),
              (this.onSetEntityTwo = (n, e, t, r) => {
                const { itemList: o } = this.state,
                  a = Object(immer__WEBPACK_IMPORTED_MODULE_1__.a)(o, o => {
                    const a = o.find(e => e.id === n).pairs[e]
                    ;(a.s2 = t), (a.e2 = r)
                  })
                this.setState({ itemList: a })
              }),
              (this.onSetRelation = (n, e, t) => {
                const { itemList: r } = this.state,
                  o = Object(immer__WEBPACK_IMPORTED_MODULE_1__.a)(r, r => {
                    r.find(e => e.id === n).pairs[e].relations = t
                  })
                this.setState({ itemList: o })
              }),
              (this.onAbandonClick = n => {
                const { itemList: e } = this.state,
                  t = Object(immer__WEBPACK_IMPORTED_MODULE_1__.a)(e, e => {
                    let t = e.find(e => e.id === n)
                    t.abandoned = !t.abandoned
                  })
                this.setState({ itemList: t })
              })
            let e = 'dev',
              t = 1
            'tmx' === (e = prompt('请输入你的用户名')) ? (t = 100) : 'sfc' === e && (t = 200),
              (this.state = { itemList: [], author: e, currentPageId: t, pageSize: 0 })
          }
          async componentDidUpdate(n, e) {
            if (this.state.currentPageId !== e.currentPageId) {
              const n = 10 * (this.state.currentPageId - 1),
                e = await fetch(`/get-data?offset=${n}&limit=10`)
              if (e.ok) {
                const n = await e.json()
                this.setState({ itemList: n })
              }
            }
          }
          async componentDidMount() {
            const n = await fetch('/get-data-count')
            if (n.ok) {
              const e = await n.json(),
                t = Math.ceil(e / 10)
              this.setState({ pageSize: t })
            }
            const e = await fetch('/get-data?offset=0&limit=10')
            if (e.ok) {
              const n = await e.json()
              this.setState({ itemList: n })
            }
            document.addEventListener('keypress', async n => {
              const e = n.key
              'q' === e
                ? this.onPageChange(this.state.currentPageId - 1)
                : 'w' === e
                  ? this.onPageChange(this.state.currentPageId + 1)
                  : 'e' === e && this.handleSaveBtnClick(this.state.itemList)
            })
          }
          async handleSaveBtnClick(n) {
            const { author: e } = this.state
            ;(await fetch('/save-data', {
              method: 'POST',
              body: JSON.stringify(n.map(n => Object.assign({}, n, { author: e }))),
              headers: { 'content-type': 'application/json' },
            })).ok
              ? Object(_toast__WEBPACK_IMPORTED_MODULE_8__.a)('更新成功', 1e3, { fontSize: '18px' })
              : alert('更新失败')
          }
          render() {
            const { itemList: n } = this.state
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'div',
              { style: { paddingTop: 50, paddingBottom: 40 } },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _Pager__WEBPACK_IMPORTED_MODULE_4__.a,
                {
                  pageSize: this.state.pageSize,
                  currentPageId: this.state.currentPageId,
                  onPageChange: this.onPageChange,
                },
              ),
              n.map(n =>
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _BasicFrame__WEBPACK_IMPORTED_MODULE_6__.a,
                  {
                    key: n.id,
                    item: n,
                    onAddPair: this.onAddPair,
                    onDeletePair: this.onDeletePair,
                    onSetEntityOne: this.onSetEntityOne,
                    onSetEntityTwo: this.onSetEntityTwo,
                    onSetRelation: this.onSetRelation,
                    onAbandonClick: this.onAbandonClick,
                  },
                ),
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'div',
                { className: 'last' },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'button',
                  { className: 'save-btn', onClick: () => this.handleSaveBtnClick(n) },
                  '保存',
                ),
              ),
            )
          }
          __reactstandin__regenerateByEval(key, code) {
            this[key] = eval(code)
          }
        }),
      ) || _class)
      !(function() {
        var n = __webpack_require__(3).default,
          e = __webpack_require__(3).leaveModule
        n &&
          (n.register(
            shallowCopy,
            'shallowCopy',
            'C:/Users/95371/Desktop/relation-label-tool/packages/frontend/src/App.js',
          ),
          n.register(
            App,
            'App',
            'C:/Users/95371/Desktop/relation-label-tool/packages/frontend/src/App.js',
          ),
          e(module))
      })()
    }.call(this, __webpack_require__(6)(module)))
  },
  function(module, __webpack_exports__, __webpack_require__) {
    'use strict'
    ;(function(module) {
      __webpack_require__.d(__webpack_exports__, 'a', function() {
        return Pager
      })
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__,
        ),
        _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20),
        _blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58),
        _blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19),
        _page_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(33)
      !(function() {
        var n = __webpack_require__(3).enterModule
        n && n(module)
      })()
      let Pager = class Pager extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
        constructor(...n) {
          var e
          return (
            (e = super(...n)),
            (this.state = { inputValue: 1 }),
            (this.onChangeInputValue = n => {
              this.setState({ inputValue: Number(n.target.value) })
            }),
            e
          )
        }
        render() {
          const { pageSize: n, currentPageId: e, onPageChange: t } = this.props
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'div',
            { className: 'pageFrame' },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__.a,
              { style: { marginRight: 16 }, onClick: () => t(e - 1) },
              '上一页',
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__.a,
              null,
              Object(_page_utils__WEBPACK_IMPORTED_MODULE_4__.a)(n, e).map(n =>
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__.a,
                  {
                    key: n.toString(),
                    className: 'page-number',
                    onClick: () => t(n),
                    intent: n === e ? 'primary' : 'none',
                  },
                  n,
                ),
              ),
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__.a,
              { style: { marginLeft: 16 }, onClick: () => t(e + 1) },
              '下一页',
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('input', {
              className: _blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__.a.INPUT,
              type: 'number',
              style: { marginLeft: 16 },
              min: 1,
              max: n,
              value: this.state.inputValue,
              onChange: this.onChangeInputValue,
            }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__.a,
              { intent: 'primary', onClick: () => t(this.state.inputValue) },
              '跳转',
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'span',
              { style: { marginLeft: 8 } },
              '总页数 ',
              n,
            ),
          )
        }
        __reactstandin__regenerateByEval(key, code) {
          this[key] = eval(code)
        }
      }
      !(function() {
        var n = __webpack_require__(3).default,
          e = __webpack_require__(3).leaveModule
        n &&
          (n.register(
            Pager,
            'Pager',
            'C:/Users/95371/Desktop/relation-label-tool/packages/frontend/src/Pager.js',
          ),
          e(module))
      })()
    }.call(this, __webpack_require__(6)(module)))
  },
  function(n, e, t) {
    'use strict'
    ;(function(n) {
      t.d(e, 'a', function() {
        return i
      })
      var r = t(16)
      !(function() {
        var e = t(3).enterModule
        e && e(n)
      })()
      const o = 15,
        a = (o - 1) / 2
      function i(n, e) {
        let t = e - a,
          i = e + a
        return (
          t < 1 && (i = o),
          i > n && (t = n - o),
          t < 1 && (t = 1),
          i > n && (i = n),
          Object(r.b)(t, i + 1)
        )
      }
      !(function() {
        var e = t(3).default,
          r = t(3).leaveModule
        e &&
          (e.register(
            o,
            'SHOW_COUNT',
            'C:/Users/95371/Desktop/relation-label-tool/packages/frontend/src/page-utils.js',
          ),
          e.register(
            a,
            'HALF',
            'C:/Users/95371/Desktop/relation-label-tool/packages/frontend/src/page-utils.js',
          ),
          e.register(
            i,
            'getShowPages',
            'C:/Users/95371/Desktop/relation-label-tool/packages/frontend/src/page-utils.js',
          ),
          r(n))
      })()
    }.call(this, t(6)(n)))
  },
  function(module, __webpack_exports__, __webpack_require__) {
    'use strict'
    ;(function(module) {
      __webpack_require__.d(__webpack_exports__, 'a', function() {
        return BasicFrame
      })
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__,
        ),
        _Pair__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35)
      !(function() {
        var n = __webpack_require__(3).enterModule
        n && n(module)
      })()
      let BasicFrame = class BasicFrame extends react__WEBPACK_IMPORTED_MODULE_0___default.a
        .Component {
        getSegments() {
          const n = this.props.item.pairs,
            e = this.props.item.sentence.length
          let t = []
          for (let e of n) t.push([e.s1, e.e1]), t.push([e.s2, e.e2])
          if (0 === t.length) return [[0, e, !1, 1]]
          {
            t.sort((n, e) => -n[0] + e[0])
            let n = []
            for (n.push(t.pop()); t.length > 0; ) {
              let e = n.pop(),
                r = t.pop()
              e[1] < r[0] ? (n.push(e), n.push(r)) : e[1] >= r[1] ? n.push(e) : n.push([e[0], r[1]])
            }
            n.sort((n, e) => n[0] - e[0])
            let r = []
            for (let t = 0; t < n.length; t++)
              0 === t
                ? n[0][0] > 0 && r.push([0, n[0][0], !1])
                : r.push([n[t - 1][1], n[t][0], !1]),
                r.push([n[t][0], n[t][1], !0]),
                t === n.length - 1 && n[t][1] < e && r.push([n[t][1], e, !1])
            return r
          }
        }
        render() {
          const {
              item: n,
              onAddPair: e,
              onDeletePair: t,
              onSetEntityOne: r,
              onSetEntityTwo: o,
              onSetRelation: a,
              onAbandonClick: i,
            } = this.props,
            c = this.getSegments()
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'div',
            { className: 'item', 'data-item-id': n.id },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'div',
              { className: 'index' },
              'id ',
              n.id,
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'div',
              {
                className: 'sentence',
                style: { textDecoration: n.abandoned ? 'line-through' : null },
              },
              c.map(([e, t, r], o) =>
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'span',
                  { style: { background: r ? '#66cc99' : 'none' }, key: o, 'data-offset': e },
                  n.sentence.substring(e, t),
                ),
              ),
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'div',
              { className: 'add-abandoned' },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'button',
                { className: 'addBtn', onClick: () => e(n.id) },
                '添加实体对',
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'button',
                { className: 'abandonedBtn', onClick: () => i(n.id) },
                '丢弃',
              ),
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'div',
              { className: 'relationFrame' },
              n.pairs.map((e, i) =>
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _Pair__WEBPACK_IMPORTED_MODULE_1__.a,
                  {
                    key: i,
                    itemId: n.id,
                    sentence: n.sentence,
                    pair: e,
                    pairIndex: i,
                    onSetEntityOne: r,
                    onSetEntityTwo: o,
                    onSetRelation: a,
                    onDeletePair: t,
                  },
                ),
              ),
            ),
          )
        }
        __reactstandin__regenerateByEval(key, code) {
          this[key] = eval(code)
        }
      }
      !(function() {
        var n = __webpack_require__(3).default,
          e = __webpack_require__(3).leaveModule
        n &&
          (n.register(
            BasicFrame,
            'BasicFrame',
            'C:/Users/95371/Desktop/relation-label-tool/packages/frontend/src/BasicFrame.js',
          ),
          e(module))
      })()
    }.call(this, __webpack_require__(6)(module)))
  },
  function(module, __webpack_exports__, __webpack_require__) {
    'use strict'
    ;(function(module) {
      __webpack_require__.d(__webpack_exports__, 'a', function() {
        return Pair
      })
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__,
        ),
        _RelationItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36)
      function findItemId(n) {
        return null == n
          ? -1
          : n.dataset && null != n.dataset.itemId
            ? Number(n.dataset.itemId)
            : findItemId(n.parentElement)
      }
      function findItemOffset(n) {
        return null == n
          ? 0
          : n.dataset && null != n.dataset.offset
            ? Number(n.dataset.offset)
            : findItemOffset(n.parentElement)
      }
      !(function() {
        var n = __webpack_require__(3).enterModule
        n && n(module)
      })()
      let Pair = class Pair extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
        constructor(...n) {
          var e
          return (
            (e = super(...n)),
            (this.onSetEntity = n => {
              const e = document.getSelection()
              if (e.isCollapsed) console.log('selection error')
              else {
                const t = e.getRangeAt(0),
                  r = findItemId(t.startContainer),
                  o = findItemOffset(t.startContainer) + t.startOffset,
                  a = findItemOffset(t.endContainer) + t.endOffset
                if (r !== this.props.itemId) return
                '1' === n
                  ? (this.props.onSetEntityOne(r, this.props.pairIndex, o, a), e.empty())
                  : (this.props.onSetEntityTwo(r, this.props.pairIndex, o, a), e.empty())
              }
            }),
            (this.onToggleRelation = n => {
              let e = this.props.pair.relations.slice()
              if (e.includes(n)) {
                const t = e.indexOf(n)
                e.splice(t, 1)
              } else e.push(n)
              this.props.onSetRelation(this.props.itemId, this.props.pairIndex, e)
            }),
            e
          )
        }
        componentDidMount() {
          document.addEventListener('keypress', async n => {
            const e = n.key
            'a' === e ? this.onSetEntity('1') : 's' === e && this.onSetEntity('2')
          })
        }
        render() {
          const { pair: n, itemId: e, pairIndex: t, sentence: r, onDeletePair: o } = this.props
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'div',
            null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'div',
              { className: 'entity-buttons' },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'div',
                { className: 'entity-wrapper-one' },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'button',
                  { className: 'set-one', onClick: () => this.onSetEntity('1') },
                  'Entity-One',
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'div',
                  {
                    className: 'one',
                    style: { background: n.s1 + n.e1 !== 0 ? '#66cc99' : 'none' },
                  },
                  r.substring(n.s1, n.e1) || '[尚未设置]',
                ),
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'div',
                { className: 'entity-wrapper-two' },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'button',
                  { className: 'set-two', onClick: () => this.onSetEntity('2') },
                  'Entity-Two',
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'div',
                  {
                    className: 'two',
                    style: { background: n.s2 + n.e2 !== 0 ? '#66cc99' : 'none' },
                  },
                  r.substring(n.s2, n.e2) || '[尚未设置]',
                ),
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'button',
                { className: 'abandon-btn', onClick: () => o(e, t) },
                '删除实体对',
              ),
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'div',
              { className: 'relation-type' },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _RelationItem__WEBPACK_IMPORTED_MODULE_1__.a,
                { relations: n.relations, onToggleRelation: this.onToggleRelation },
              ),
            ),
          )
        }
        __reactstandin__regenerateByEval(key, code) {
          this[key] = eval(code)
        }
      }
      !(function() {
        var n = __webpack_require__(3).default,
          e = __webpack_require__(3).leaveModule
        n &&
          (n.register(
            findItemId,
            'findItemId',
            'C:/Users/95371/Desktop/relation-label-tool/packages/frontend/src/Pair.js',
          ),
          n.register(
            findItemOffset,
            'findItemOffset',
            'C:/Users/95371/Desktop/relation-label-tool/packages/frontend/src/Pair.js',
          ),
          n.register(
            Pair,
            'Pair',
            'C:/Users/95371/Desktop/relation-label-tool/packages/frontend/src/Pair.js',
          ),
          e(module))
      })()
    }.call(this, __webpack_require__(6)(module)))
  },
  function(module, __webpack_exports__, __webpack_require__) {
    'use strict'
    ;(function(module) {
      __webpack_require__.d(__webpack_exports__, 'a', function() {
        return RelationItem
      })
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__,
        ),
        _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18)
      !(function() {
        var n = __webpack_require__(3).enterModule
        n && n(module)
      })()
      let RelationItem = class RelationItem extends react__WEBPACK_IMPORTED_MODULE_0___default.a
        .Component {
        render() {
          const { relations: n, onToggleRelation: e } = this.props
          return _constants__WEBPACK_IMPORTED_MODULE_1__.b.map(t =>
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'label',
              { key: t },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('input', {
                type: 'checkbox',
                checked: n.includes(t),
                onChange: () => e(t),
              }),
              t,
            ),
          )
        }
        __reactstandin__regenerateByEval(key, code) {
          this[key] = eval(code)
        }
      }
      !(function() {
        var n = __webpack_require__(3).default,
          e = __webpack_require__(3).leaveModule
        n &&
          (n.register(
            RelationItem,
            'RelationItem',
            'C:/Users/95371/Desktop/relation-label-tool/packages/frontend/src/RelationItem.js',
          ),
          e(module))
      })()
    }.call(this, __webpack_require__(6)(module)))
  },
  function(n, e, t) {
    'use strict'
    ;(function(n) {
      t.d(e, 'a', function() {
        return r
      })
      t(57)
      !(function() {
        var e = t(3).enterModule
        e && e(n)
      })()
      let r = function(n, e, t) {
        try {
          document.body.removeChild(document.querySelector('div.toast-it'))
        } catch (n) {}
        const r = e || 2e3
        let o = document.createElement('DIV')
        o.classList.add('toast-it')
        let a = document.createTextNode(n)
        o.appendChild(a), (o.style.animationDuration = r / 1e3 + 's')
        for (let n in t) o.style[n] = t[n]
        ;(o.style['z-index'] = 9999999),
          document.body.appendChild(o),
          setTimeout(function() {
            try {
              document.body.removeChild(o)
            } catch (n) {}
          }, e)
      }
      !(function() {
        var e = t(3).default,
          o = t(3).leaveModule
        e &&
          (e.register(
            r,
            'toastIt',
            'C:/Users/95371/Desktop/relation-label-tool/packages/frontend/src/toast.js',
          ),
          o(n))
      })()
    }.call(this, t(6)(n)))
  },
  ,
  ,
  ,
  ,
  ,
  function(n, e, t) {
    'use strict'
    t.r(e)
    t(44), t(46)
    var r = t(0),
      o = t.n(r),
      a = t(30),
      i = t.n(a),
      c = t(31)
    i.a.render(o.a.createElement(c.a, null), document.querySelector('#container'))
  },
  function(n, e, t) {
    var r = t(21)
    'string' == typeof r && (r = [[n.i, r, '']])
    var o = { hmr: !0, transform: void 0, insertInto: void 0 },
      a = t(14)(r, o)
    r.locals && (n.exports = r.locals),
      n.hot.accept(21, function() {
        var e = t(21)
        if (
          ('string' == typeof e && (e = [[n.i, e, '']]),
          !(function(n, e) {
            var t,
              r = 0
            for (t in n) {
              if (!e || n[t] !== e[t]) return !1
              r++
            }
            for (t in e) r--
            return 0 === r
          })(r.locals, e.locals))
        )
          throw new Error('Aborting CSS HMR due to changed css-modules locals.')
        a(e)
      }),
      n.hot.dispose(function() {
        a()
      })
  },
  function(n, e) {
    n.exports = function(n) {
      var e = 'undefined' != typeof window && window.location
      if (!e) throw new Error('fixUrls requires window.location')
      if (!n || 'string' != typeof n) return n
      var t = e.protocol + '//' + e.host,
        r = t + e.pathname.replace(/\/[^\/]*$/, '/')
      return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(n, e) {
        var o,
          a = e
            .trim()
            .replace(/^"(.*)"$/, function(n, e) {
              return e
            })
            .replace(/^'(.*)'$/, function(n, e) {
              return e
            })
        return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a)
          ? n
          : ((o =
              0 === a.indexOf('//')
                ? a
                : 0 === a.indexOf('/')
                  ? t + a
                  : r + a.replace(/^\.\//, '')),
            'url(' + JSON.stringify(o) + ')')
      })
    }
  },
  function(n, e, t) {
    var r = t(22)
    'string' == typeof r && (r = [[n.i, r, '']])
    var o = { hmr: !0, transform: void 0, insertInto: void 0 },
      a = t(14)(r, o)
    r.locals && (n.exports = r.locals),
      n.hot.accept(22, function() {
        var e = t(22)
        if (
          ('string' == typeof e && (e = [[n.i, e, '']]),
          !(function(n, e) {
            var t,
              r = 0
            for (t in n) {
              if (!e || n[t] !== e[t]) return !1
              r++
            }
            for (t in e) r--
            return 0 === r
          })(r.locals, e.locals))
        )
          throw new Error('Aborting CSS HMR due to changed css-modules locals.')
        a(e)
      }),
      n.hot.dispose(function() {
        a()
      })
  },
  function(n, e, t) {
    'use strict'
    /** @license React v16.4.2
     * react.production.min.js
     *
     * Copyright (c) 2013-present, Facebook, Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */ var r = t(26),
      o = t(27),
      a = t(28),
      i = t(29),
      c = 'function' == typeof Symbol && Symbol.for,
      p = c ? Symbol.for('react.element') : 60103,
      b = c ? Symbol.for('react.portal') : 60106,
      l = c ? Symbol.for('react.fragment') : 60107,
      s = c ? Symbol.for('react.strict_mode') : 60108,
      d = c ? Symbol.for('react.profiler') : 60114,
      u = c ? Symbol.for('react.provider') : 60109,
      m = c ? Symbol.for('react.context') : 60110,
      h = c ? Symbol.for('react.async_mode') : 60111,
      f = c ? Symbol.for('react.forward_ref') : 60112
    c && Symbol.for('react.timeout')
    var g = 'function' == typeof Symbol && Symbol.iterator
    function v(n) {
      for (
        var e = arguments.length - 1,
          t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + n,
          r = 0;
        r < e;
        r++
      )
        t += '&args[]=' + encodeURIComponent(arguments[r + 1])
      o(
        !1,
        'Minified React error #' +
          n +
          '; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ',
        t,
      )
    }
    var x = {
      isMounted: function() {
        return !1
      },
      enqueueForceUpdate: function() {},
      enqueueReplaceState: function() {},
      enqueueSetState: function() {},
    }
    function z(n, e, t) {
      ;(this.props = n), (this.context = e), (this.refs = a), (this.updater = t || x)
    }
    function k() {}
    function w(n, e, t) {
      ;(this.props = n), (this.context = e), (this.refs = a), (this.updater = t || x)
    }
    ;(z.prototype.isReactComponent = {}),
      (z.prototype.setState = function(n, e) {
        'object' != typeof n && 'function' != typeof n && null != n && v('85'),
          this.updater.enqueueSetState(this, n, e, 'setState')
      }),
      (z.prototype.forceUpdate = function(n) {
        this.updater.enqueueForceUpdate(this, n, 'forceUpdate')
      }),
      (k.prototype = z.prototype)
    var y = (w.prototype = new k())
    ;(y.constructor = w), r(y, z.prototype), (y.isPureReactComponent = !0)
    var M = { current: null },
      _ = Object.prototype.hasOwnProperty,
      H = { key: !0, ref: !0, __self: !0, __source: !0 }
    function E(n, e, t) {
      var r = void 0,
        o = {},
        a = null,
        i = null
      if (null != e)
        for (r in (void 0 !== e.ref && (i = e.ref), void 0 !== e.key && (a = '' + e.key), e))
          _.call(e, r) && !H.hasOwnProperty(r) && (o[r] = e[r])
      var c = arguments.length - 2
      if (1 === c) o.children = t
      else if (1 < c) {
        for (var b = Array(c), l = 0; l < c; l++) b[l] = arguments[l + 2]
        o.children = b
      }
      if (n && n.defaultProps) for (r in (c = n.defaultProps)) void 0 === o[r] && (o[r] = c[r])
      return { $$typeof: p, type: n, key: a, ref: i, props: o, _owner: M.current }
    }
    function V(n) {
      return 'object' == typeof n && null !== n && n.$$typeof === p
    }
    var C = /\/+/g,
      L = []
    function A(n, e, t, r) {
      if (L.length) {
        var o = L.pop()
        return (o.result = n), (o.keyPrefix = e), (o.func = t), (o.context = r), (o.count = 0), o
      }
      return { result: n, keyPrefix: e, func: t, context: r, count: 0 }
    }
    function T(n) {
      ;(n.result = null),
        (n.keyPrefix = null),
        (n.func = null),
        (n.context = null),
        (n.count = 0),
        10 > L.length && L.push(n)
    }
    function S(n, e, t, r) {
      var o = typeof n
      ;('undefined' !== o && 'boolean' !== o) || (n = null)
      var a = !1
      if (null === n) a = !0
      else
        switch (o) {
          case 'string':
          case 'number':
            a = !0
            break
          case 'object':
            switch (n.$$typeof) {
              case p:
              case b:
                a = !0
            }
        }
      if (a) return t(r, n, '' === e ? '.' + O(n, 0) : e), 1
      if (((a = 0), (e = '' === e ? '.' : e + ':'), Array.isArray(n)))
        for (var i = 0; i < n.length; i++) {
          var c = e + O((o = n[i]), i)
          a += S(o, c, t, r)
        }
      else if (
        (null === n || void 0 === n
          ? (c = null)
          : (c = 'function' == typeof (c = (g && n[g]) || n['@@iterator']) ? c : null),
        'function' == typeof c)
      )
        for (n = c.call(n), i = 0; !(o = n.next()).done; )
          a += S((o = o.value), (c = e + O(o, i++)), t, r)
      else
        'object' === o &&
          v(
            '31',
            '[object Object]' === (t = '' + n)
              ? 'object with keys {' + Object.keys(n).join(', ') + '}'
              : t,
            '',
          )
      return a
    }
    function O(n, e) {
      return 'object' == typeof n && null !== n && null != n.key
        ? (function(n) {
            var e = { '=': '=0', ':': '=2' }
            return (
              '$' +
              ('' + n).replace(/[=:]/g, function(n) {
                return e[n]
              })
            )
          })(n.key)
        : e.toString(36)
    }
    function P(n, e) {
      n.func.call(n.context, e, n.count++)
    }
    function I(n, e, t) {
      var r = n.result,
        o = n.keyPrefix
      ;(n = n.func.call(n.context, e, n.count++)),
        Array.isArray(n)
          ? D(n, r, t, i.thatReturnsArgument)
          : null != n &&
            (V(n) &&
              ((e =
                o +
                (!n.key || (e && e.key === n.key) ? '' : ('' + n.key).replace(C, '$&/') + '/') +
                t),
              (n = {
                $$typeof: p,
                type: n.type,
                key: e,
                ref: n.ref,
                props: n.props,
                _owner: n._owner,
              })),
            r.push(n))
    }
    function D(n, e, t, r, o) {
      var a = ''
      null != t && (a = ('' + t).replace(C, '$&/') + '/'),
        (e = A(e, a, r, o)),
        null == n || S(n, '', I, e),
        T(e)
    }
    var R = {
        Children: {
          map: function(n, e, t) {
            if (null == n) return n
            var r = []
            return D(n, r, null, e, t), r
          },
          forEach: function(n, e, t) {
            if (null == n) return n
            ;(e = A(null, null, e, t)), null == n || S(n, '', P, e), T(e)
          },
          count: function(n) {
            return null == n ? 0 : S(n, '', i.thatReturnsNull, null)
          },
          toArray: function(n) {
            var e = []
            return D(n, e, null, i.thatReturnsArgument), e
          },
          only: function(n) {
            return V(n) || v('143'), n
          },
        },
        createRef: function() {
          return { current: null }
        },
        Component: z,
        PureComponent: w,
        createContext: function(n, e) {
          return (
            void 0 === e && (e = null),
            ((n = {
              $$typeof: m,
              _calculateChangedBits: e,
              _defaultValue: n,
              _currentValue: n,
              _currentValue2: n,
              _changedBits: 0,
              _changedBits2: 0,
              Provider: null,
              Consumer: null,
            }).Provider = { $$typeof: u, _context: n }),
            (n.Consumer = n)
          )
        },
        forwardRef: function(n) {
          return { $$typeof: f, render: n }
        },
        Fragment: l,
        StrictMode: s,
        unstable_AsyncMode: h,
        unstable_Profiler: d,
        createElement: E,
        cloneElement: function(n, e, t) {
          ;(null === n || void 0 === n) && v('267', n)
          var o = void 0,
            a = r({}, n.props),
            i = n.key,
            c = n.ref,
            b = n._owner
          if (null != e) {
            void 0 !== e.ref && ((c = e.ref), (b = M.current)), void 0 !== e.key && (i = '' + e.key)
            var l = void 0
            for (o in (n.type && n.type.defaultProps && (l = n.type.defaultProps), e))
              _.call(e, o) &&
                !H.hasOwnProperty(o) &&
                (a[o] = void 0 === e[o] && void 0 !== l ? l[o] : e[o])
          }
          if (1 === (o = arguments.length - 2)) a.children = t
          else if (1 < o) {
            l = Array(o)
            for (var s = 0; s < o; s++) l[s] = arguments[s + 2]
            a.children = l
          }
          return { $$typeof: p, type: n.type, key: i, ref: c, props: a, _owner: b }
        },
        createFactory: function(n) {
          var e = E.bind(null, n)
          return (e.type = n), e
        },
        isValidElement: V,
        version: '16.4.2',
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: { ReactCurrentOwner: M, assign: r },
      },
      N = { default: R },
      U = (N && R) || N
    n.exports = U.default ? U.default : U
  },
  function(n, e, t) {
    'use strict'
    /** @license React v16.4.2
     * react-dom.production.min.js
     *
     * Copyright (c) 2013-present, Facebook, Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */ var r = t(27),
      o = t(0),
      a = t(49),
      i = t(26),
      c = t(29),
      p = t(50),
      b = t(51),
      l = t(52),
      s = t(28)
    function d(n) {
      for (
        var e = arguments.length - 1,
          t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + n,
          o = 0;
        o < e;
        o++
      )
        t += '&args[]=' + encodeURIComponent(arguments[o + 1])
      r(
        !1,
        'Minified React error #' +
          n +
          '; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ',
        t,
      )
    }
    o || d('227')
    var u = {
      _caughtError: null,
      _hasCaughtError: !1,
      _rethrowError: null,
      _hasRethrowError: !1,
      invokeGuardedCallback: function(n, e, t, r, o, a, i, c, p) {
        ;(function(n, e, t, r, o, a, i, c, p) {
          ;(this._hasCaughtError = !1), (this._caughtError = null)
          var b = Array.prototype.slice.call(arguments, 3)
          try {
            e.apply(t, b)
          } catch (n) {
            ;(this._caughtError = n), (this._hasCaughtError = !0)
          }
        }.apply(u, arguments))
      },
      invokeGuardedCallbackAndCatchFirstError: function(n, e, t, r, o, a, i, c, p) {
        if ((u.invokeGuardedCallback.apply(this, arguments), u.hasCaughtError())) {
          var b = u.clearCaughtError()
          u._hasRethrowError || ((u._hasRethrowError = !0), (u._rethrowError = b))
        }
      },
      rethrowCaughtError: function() {
        return function() {
          if (u._hasRethrowError) {
            var n = u._rethrowError
            throw ((u._rethrowError = null), (u._hasRethrowError = !1), n)
          }
        }.apply(u, arguments)
      },
      hasCaughtError: function() {
        return u._hasCaughtError
      },
      clearCaughtError: function() {
        if (u._hasCaughtError) {
          var n = u._caughtError
          return (u._caughtError = null), (u._hasCaughtError = !1), n
        }
        d('198')
      },
    }
    var m = null,
      h = {}
    function f() {
      if (m)
        for (var n in h) {
          var e = h[n],
            t = m.indexOf(n)
          if ((-1 < t || d('96', n), !v[t]))
            for (var r in (e.extractEvents || d('97', n), (v[t] = e), (t = e.eventTypes))) {
              var o = void 0,
                a = t[r],
                i = e,
                c = r
              x.hasOwnProperty(c) && d('99', c), (x[c] = a)
              var p = a.phasedRegistrationNames
              if (p) {
                for (o in p) p.hasOwnProperty(o) && g(p[o], i, c)
                o = !0
              } else a.registrationName ? (g(a.registrationName, i, c), (o = !0)) : (o = !1)
              o || d('98', r, n)
            }
        }
    }
    function g(n, e, t) {
      z[n] && d('100', n), (z[n] = e), (k[n] = e.eventTypes[t].dependencies)
    }
    var v = [],
      x = {},
      z = {},
      k = {}
    function w(n) {
      m && d('101'), (m = Array.prototype.slice.call(n)), f()
    }
    function y(n) {
      var e,
        t = !1
      for (e in n)
        if (n.hasOwnProperty(e)) {
          var r = n[e]
          ;(h.hasOwnProperty(e) && h[e] === r) || (h[e] && d('102', e), (h[e] = r), (t = !0))
        }
      t && f()
    }
    var M = {
        plugins: v,
        eventNameDispatchConfigs: x,
        registrationNameModules: z,
        registrationNameDependencies: k,
        possibleRegistrationNames: null,
        injectEventPluginOrder: w,
        injectEventPluginsByName: y,
      },
      _ = null,
      H = null,
      E = null
    function V(n, e, t, r) {
      ;(e = n.type || 'unknown-event'),
        (n.currentTarget = E(r)),
        u.invokeGuardedCallbackAndCatchFirstError(e, t, void 0, n),
        (n.currentTarget = null)
    }
    function C(n, e) {
      return (
        null == e && d('30'),
        null == n
          ? e
          : Array.isArray(n)
            ? Array.isArray(e)
              ? (n.push.apply(n, e), n)
              : (n.push(e), n)
            : Array.isArray(e)
              ? [n].concat(e)
              : [n, e]
      )
    }
    function L(n, e, t) {
      Array.isArray(n) ? n.forEach(e, t) : n && e.call(t, n)
    }
    var A = null
    function T(n, e) {
      if (n) {
        var t = n._dispatchListeners,
          r = n._dispatchInstances
        if (Array.isArray(t))
          for (var o = 0; o < t.length && !n.isPropagationStopped(); o++) V(n, e, t[o], r[o])
        else t && V(n, e, t, r)
        ;(n._dispatchListeners = null),
          (n._dispatchInstances = null),
          n.isPersistent() || n.constructor.release(n)
      }
    }
    function S(n) {
      return T(n, !0)
    }
    function O(n) {
      return T(n, !1)
    }
    var P = { injectEventPluginOrder: w, injectEventPluginsByName: y }
    function I(n, e) {
      var t = n.stateNode
      if (!t) return null
      var r = _(t)
      if (!r) return null
      t = r[e]
      n: switch (e) {
        case 'onClick':
        case 'onClickCapture':
        case 'onDoubleClick':
        case 'onDoubleClickCapture':
        case 'onMouseDown':
        case 'onMouseDownCapture':
        case 'onMouseMove':
        case 'onMouseMoveCapture':
        case 'onMouseUp':
        case 'onMouseUpCapture':
          ;(r = !r.disabled) ||
            (r = !(
              'button' === (n = n.type) ||
              'input' === n ||
              'select' === n ||
              'textarea' === n
            )),
            (n = !r)
          break n
        default:
          n = !1
      }
      return n ? null : (t && 'function' != typeof t && d('231', e, typeof t), t)
    }
    function D(n, e) {
      null !== n && (A = C(A, n)),
        (n = A),
        (A = null),
        n && (L(n, e ? S : O), A && d('95'), u.rethrowCaughtError())
    }
    function R(n, e, t, r) {
      for (var o = null, a = 0; a < v.length; a++) {
        var i = v[a]
        i && (i = i.extractEvents(n, e, t, r)) && (o = C(o, i))
      }
      D(o, !1)
    }
    var N = { injection: P, getListener: I, runEventsInBatch: D, runExtractedEventsInBatch: R },
      U = Math.random()
        .toString(36)
        .slice(2),
      B = '__reactInternalInstance$' + U,
      j = '__reactEventHandlers$' + U
    function F(n) {
      if (n[B]) return n[B]
      for (; !n[B]; ) {
        if (!n.parentNode) return null
        n = n.parentNode
      }
      return 5 === (n = n[B]).tag || 6 === n.tag ? n : null
    }
    function W(n) {
      if (5 === n.tag || 6 === n.tag) return n.stateNode
      d('33')
    }
    function K(n) {
      return n[j] || null
    }
    var q = {
      precacheFiberNode: function(n, e) {
        e[B] = n
      },
      getClosestInstanceFromNode: F,
      getInstanceFromNode: function(n) {
        return !(n = n[B]) || (5 !== n.tag && 6 !== n.tag) ? null : n
      },
      getNodeFromInstance: W,
      getFiberCurrentPropsFromNode: K,
      updateFiberProps: function(n, e) {
        n[j] = e
      },
    }
    function G(n) {
      do {
        n = n.return
      } while (n && 5 !== n.tag)
      return n || null
    }
    function Y(n, e, t) {
      for (var r = []; n; ) r.push(n), (n = G(n))
      for (n = r.length; 0 < n--; ) e(r[n], 'captured', t)
      for (n = 0; n < r.length; n++) e(r[n], 'bubbled', t)
    }
    function X(n, e, t) {
      ;(e = I(n, t.dispatchConfig.phasedRegistrationNames[e])) &&
        ((t._dispatchListeners = C(t._dispatchListeners, e)),
        (t._dispatchInstances = C(t._dispatchInstances, n)))
    }
    function $(n) {
      n && n.dispatchConfig.phasedRegistrationNames && Y(n._targetInst, X, n)
    }
    function Q(n) {
      if (n && n.dispatchConfig.phasedRegistrationNames) {
        var e = n._targetInst
        Y((e = e ? G(e) : null), X, n)
      }
    }
    function Z(n, e, t) {
      n &&
        t &&
        t.dispatchConfig.registrationName &&
        (e = I(n, t.dispatchConfig.registrationName)) &&
        ((t._dispatchListeners = C(t._dispatchListeners, e)),
        (t._dispatchInstances = C(t._dispatchInstances, n)))
    }
    function J(n) {
      n && n.dispatchConfig.registrationName && Z(n._targetInst, null, n)
    }
    function nn(n) {
      L(n, $)
    }
    function en(n, e, t, r) {
      if (t && r)
        n: {
          for (var o = t, a = r, i = 0, c = o; c; c = G(c)) i++
          c = 0
          for (var p = a; p; p = G(p)) c++
          for (; 0 < i - c; ) (o = G(o)), i--
          for (; 0 < c - i; ) (a = G(a)), c--
          for (; i--; ) {
            if (o === a || o === a.alternate) break n
            ;(o = G(o)), (a = G(a))
          }
          o = null
        }
      else o = null
      for (a = o, o = []; t && t !== a && (null === (i = t.alternate) || i !== a); )
        o.push(t), (t = G(t))
      for (t = []; r && r !== a && (null === (i = r.alternate) || i !== a); ) t.push(r), (r = G(r))
      for (r = 0; r < o.length; r++) Z(o[r], 'bubbled', n)
      for (n = t.length; 0 < n--; ) Z(t[n], 'captured', e)
    }
    var tn = {
      accumulateTwoPhaseDispatches: nn,
      accumulateTwoPhaseDispatchesSkipTarget: function(n) {
        L(n, Q)
      },
      accumulateEnterLeaveDispatches: en,
      accumulateDirectDispatches: function(n) {
        L(n, J)
      },
    }
    function rn(n, e) {
      var t = {}
      return (
        (t[n.toLowerCase()] = e.toLowerCase()),
        (t['Webkit' + n] = 'webkit' + e),
        (t['Moz' + n] = 'moz' + e),
        (t['ms' + n] = 'MS' + e),
        (t['O' + n] = 'o' + e.toLowerCase()),
        t
      )
    }
    var on = {
        animationend: rn('Animation', 'AnimationEnd'),
        animationiteration: rn('Animation', 'AnimationIteration'),
        animationstart: rn('Animation', 'AnimationStart'),
        transitionend: rn('Transition', 'TransitionEnd'),
      },
      an = {},
      cn = {}
    function pn(n) {
      if (an[n]) return an[n]
      if (!on[n]) return n
      var e,
        t = on[n]
      for (e in t) if (t.hasOwnProperty(e) && e in cn) return (an[n] = t[e])
      return n
    }
    a.canUseDOM &&
      ((cn = document.createElement('div').style),
      'AnimationEvent' in window ||
        (delete on.animationend.animation,
        delete on.animationiteration.animation,
        delete on.animationstart.animation),
      'TransitionEvent' in window || delete on.transitionend.transition)
    var bn = pn('animationend'),
      ln = pn('animationiteration'),
      sn = pn('animationstart'),
      dn = pn('transitionend'),
      un = 'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' ',
      ),
      mn = null
    function hn() {
      return (
        !mn &&
          a.canUseDOM &&
          (mn = 'textContent' in document.documentElement ? 'textContent' : 'innerText'),
        mn
      )
    }
    var fn = { _root: null, _startText: null, _fallbackText: null }
    function gn() {
      if (fn._fallbackText) return fn._fallbackText
      var n,
        e,
        t = fn._startText,
        r = t.length,
        o = vn(),
        a = o.length
      for (n = 0; n < r && t[n] === o[n]; n++);
      var i = r - n
      for (e = 1; e <= i && t[r - e] === o[a - e]; e++);
      return (fn._fallbackText = o.slice(n, 1 < e ? 1 - e : void 0)), fn._fallbackText
    }
    function vn() {
      return 'value' in fn._root ? fn._root.value : fn._root[hn()]
    }
    var xn = 'dispatchConfig _targetInst nativeEvent isDefaultPrevented isPropagationStopped _dispatchListeners _dispatchInstances'.split(
        ' ',
      ),
      zn = {
        type: null,
        target: null,
        currentTarget: c.thatReturnsNull,
        eventPhase: null,
        bubbles: null,
        cancelable: null,
        timeStamp: function(n) {
          return n.timeStamp || Date.now()
        },
        defaultPrevented: null,
        isTrusted: null,
      }
    function kn(n, e, t, r) {
      for (var o in ((this.dispatchConfig = n),
      (this._targetInst = e),
      (this.nativeEvent = t),
      (n = this.constructor.Interface)))
        n.hasOwnProperty(o) &&
          ((e = n[o]) ? (this[o] = e(t)) : 'target' === o ? (this.target = r) : (this[o] = t[o]))
      return (
        (this.isDefaultPrevented = (null != t.defaultPrevented
        ? t.defaultPrevented
        : !1 === t.returnValue)
          ? c.thatReturnsTrue
          : c.thatReturnsFalse),
        (this.isPropagationStopped = c.thatReturnsFalse),
        this
      )
    }
    function wn(n, e, t, r) {
      if (this.eventPool.length) {
        var o = this.eventPool.pop()
        return this.call(o, n, e, t, r), o
      }
      return new this(n, e, t, r)
    }
    function yn(n) {
      n instanceof this || d('223'),
        n.destructor(),
        10 > this.eventPool.length && this.eventPool.push(n)
    }
    function Mn(n) {
      ;(n.eventPool = []), (n.getPooled = wn), (n.release = yn)
    }
    i(kn.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0
        var n = this.nativeEvent
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : 'unknown' != typeof n.returnValue && (n.returnValue = !1),
          (this.isDefaultPrevented = c.thatReturnsTrue))
      },
      stopPropagation: function() {
        var n = this.nativeEvent
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : 'unknown' != typeof n.cancelBubble && (n.cancelBubble = !0),
          (this.isPropagationStopped = c.thatReturnsTrue))
      },
      persist: function() {
        this.isPersistent = c.thatReturnsTrue
      },
      isPersistent: c.thatReturnsFalse,
      destructor: function() {
        var n,
          e = this.constructor.Interface
        for (n in e) this[n] = null
        for (e = 0; e < xn.length; e++) this[xn[e]] = null
      },
    }),
      (kn.Interface = zn),
      (kn.extend = function(n) {
        function e() {}
        function t() {
          return r.apply(this, arguments)
        }
        var r = this
        e.prototype = r.prototype
        var o = new e()
        return (
          i(o, t.prototype),
          (t.prototype = o),
          (t.prototype.constructor = t),
          (t.Interface = i({}, r.Interface, n)),
          (t.extend = r.extend),
          Mn(t),
          t
        )
      }),
      Mn(kn)
    var _n = kn.extend({ data: null }),
      Hn = kn.extend({ data: null }),
      En = [9, 13, 27, 32],
      Vn = a.canUseDOM && 'CompositionEvent' in window,
      Cn = null
    a.canUseDOM && 'documentMode' in document && (Cn = document.documentMode)
    var Ln = a.canUseDOM && 'TextEvent' in window && !Cn,
      An = a.canUseDOM && (!Vn || (Cn && 8 < Cn && 11 >= Cn)),
      Tn = String.fromCharCode(32),
      Sn = {
        beforeInput: {
          phasedRegistrationNames: { bubbled: 'onBeforeInput', captured: 'onBeforeInputCapture' },
          dependencies: ['compositionend', 'keypress', 'textInput', 'paste'],
        },
        compositionEnd: {
          phasedRegistrationNames: {
            bubbled: 'onCompositionEnd',
            captured: 'onCompositionEndCapture',
          },
          dependencies: 'blur compositionend keydown keypress keyup mousedown'.split(' '),
        },
        compositionStart: {
          phasedRegistrationNames: {
            bubbled: 'onCompositionStart',
            captured: 'onCompositionStartCapture',
          },
          dependencies: 'blur compositionstart keydown keypress keyup mousedown'.split(' '),
        },
        compositionUpdate: {
          phasedRegistrationNames: {
            bubbled: 'onCompositionUpdate',
            captured: 'onCompositionUpdateCapture',
          },
          dependencies: 'blur compositionupdate keydown keypress keyup mousedown'.split(' '),
        },
      },
      On = !1
    function Pn(n, e) {
      switch (n) {
        case 'keyup':
          return -1 !== En.indexOf(e.keyCode)
        case 'keydown':
          return 229 !== e.keyCode
        case 'keypress':
        case 'mousedown':
        case 'blur':
          return !0
        default:
          return !1
      }
    }
    function In(n) {
      return 'object' == typeof (n = n.detail) && 'data' in n ? n.data : null
    }
    var Dn = !1
    var Rn = {
        eventTypes: Sn,
        extractEvents: function(n, e, t, r) {
          var o = void 0,
            a = void 0
          if (Vn)
            n: {
              switch (n) {
                case 'compositionstart':
                  o = Sn.compositionStart
                  break n
                case 'compositionend':
                  o = Sn.compositionEnd
                  break n
                case 'compositionupdate':
                  o = Sn.compositionUpdate
                  break n
              }
              o = void 0
            }
          else
            Dn
              ? Pn(n, t) && (o = Sn.compositionEnd)
              : 'keydown' === n && 229 === t.keyCode && (o = Sn.compositionStart)
          return (
            o
              ? (An &&
                  (Dn || o !== Sn.compositionStart
                    ? o === Sn.compositionEnd && Dn && (a = gn())
                    : ((fn._root = r), (fn._startText = vn()), (Dn = !0))),
                (o = _n.getPooled(o, e, t, r)),
                a ? (o.data = a) : null !== (a = In(t)) && (o.data = a),
                nn(o),
                (a = o))
              : (a = null),
            (n = Ln
              ? (function(n, e) {
                  switch (n) {
                    case 'compositionend':
                      return In(e)
                    case 'keypress':
                      return 32 !== e.which ? null : ((On = !0), Tn)
                    case 'textInput':
                      return (n = e.data) === Tn && On ? null : n
                    default:
                      return null
                  }
                })(n, t)
              : (function(n, e) {
                  if (Dn)
                    return 'compositionend' === n || (!Vn && Pn(n, e))
                      ? ((n = gn()),
                        (fn._root = null),
                        (fn._startText = null),
                        (fn._fallbackText = null),
                        (Dn = !1),
                        n)
                      : null
                  switch (n) {
                    case 'paste':
                      return null
                    case 'keypress':
                      if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
                        if (e.char && 1 < e.char.length) return e.char
                        if (e.which) return String.fromCharCode(e.which)
                      }
                      return null
                    case 'compositionend':
                      return An ? null : e.data
                    default:
                      return null
                  }
                })(n, t))
              ? (((e = Hn.getPooled(Sn.beforeInput, e, t, r)).data = n), nn(e))
              : (e = null),
            null === a ? e : null === e ? a : [a, e]
          )
        },
      },
      Nn = null,
      Un = {
        injectFiberControlledHostComponent: function(n) {
          Nn = n
        },
      },
      Bn = null,
      jn = null
    function Fn(n) {
      if ((n = H(n))) {
        ;(Nn && 'function' == typeof Nn.restoreControlledState) || d('194')
        var e = _(n.stateNode)
        Nn.restoreControlledState(n.stateNode, n.type, e)
      }
    }
    function Wn(n) {
      Bn ? (jn ? jn.push(n) : (jn = [n])) : (Bn = n)
    }
    function Kn() {
      return null !== Bn || null !== jn
    }
    function qn() {
      if (Bn) {
        var n = Bn,
          e = jn
        if (((jn = Bn = null), Fn(n), e)) for (n = 0; n < e.length; n++) Fn(e[n])
      }
    }
    var Gn = {
      injection: Un,
      enqueueStateRestore: Wn,
      needsStateRestore: Kn,
      restoreStateIfNeeded: qn,
    }
    function Yn(n, e) {
      return n(e)
    }
    function Xn(n, e, t) {
      return n(e, t)
    }
    function $n() {}
    var Qn = !1
    function Zn(n, e) {
      if (Qn) return n(e)
      Qn = !0
      try {
        return Yn(n, e)
      } finally {
        ;(Qn = !1), Kn() && ($n(), qn())
      }
    }
    var Jn = {
      color: !0,
      date: !0,
      datetime: !0,
      'datetime-local': !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0,
    }
    function ne(n) {
      var e = n && n.nodeName && n.nodeName.toLowerCase()
      return 'input' === e ? !!Jn[n.type] : 'textarea' === e
    }
    function ee(n) {
      return (
        (n = n.target || n.srcElement || window).correspondingUseElement &&
          (n = n.correspondingUseElement),
        3 === n.nodeType ? n.parentNode : n
      )
    }
    function te(n, e) {
      return (
        !(!a.canUseDOM || (e && !('addEventListener' in document))) &&
        ((e = (n = 'on' + n) in document) ||
          ((e = document.createElement('div')).setAttribute(n, 'return;'),
          (e = 'function' == typeof e[n])),
        e)
      )
    }
    function re(n) {
      var e = n.type
      return (n = n.nodeName) && 'input' === n.toLowerCase() && ('checkbox' === e || 'radio' === e)
    }
    function oe(n) {
      n._valueTracker ||
        (n._valueTracker = (function(n) {
          var e = re(n) ? 'checked' : 'value',
            t = Object.getOwnPropertyDescriptor(n.constructor.prototype, e),
            r = '' + n[e]
          if (
            !n.hasOwnProperty(e) &&
            void 0 !== t &&
            'function' == typeof t.get &&
            'function' == typeof t.set
          ) {
            var o = t.get,
              a = t.set
            return (
              Object.defineProperty(n, e, {
                configurable: !0,
                get: function() {
                  return o.call(this)
                },
                set: function(n) {
                  ;(r = '' + n), a.call(this, n)
                },
              }),
              Object.defineProperty(n, e, { enumerable: t.enumerable }),
              {
                getValue: function() {
                  return r
                },
                setValue: function(n) {
                  r = '' + n
                },
                stopTracking: function() {
                  ;(n._valueTracker = null), delete n[e]
                },
              }
            )
          }
        })(n))
    }
    function ae(n) {
      if (!n) return !1
      var e = n._valueTracker
      if (!e) return !0
      var t = e.getValue(),
        r = ''
      return (
        n && (r = re(n) ? (n.checked ? 'true' : 'false') : n.value),
        (n = r) !== t && (e.setValue(n), !0)
      )
    }
    var ie = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
      ce = 'function' == typeof Symbol && Symbol.for,
      pe = ce ? Symbol.for('react.element') : 60103,
      be = ce ? Symbol.for('react.portal') : 60106,
      le = ce ? Symbol.for('react.fragment') : 60107,
      se = ce ? Symbol.for('react.strict_mode') : 60108,
      de = ce ? Symbol.for('react.profiler') : 60114,
      ue = ce ? Symbol.for('react.provider') : 60109,
      me = ce ? Symbol.for('react.context') : 60110,
      he = ce ? Symbol.for('react.async_mode') : 60111,
      fe = ce ? Symbol.for('react.forward_ref') : 60112,
      ge = ce ? Symbol.for('react.timeout') : 60113,
      ve = 'function' == typeof Symbol && Symbol.iterator
    function xe(n) {
      return null === n || void 0 === n
        ? null
        : 'function' == typeof (n = (ve && n[ve]) || n['@@iterator'])
          ? n
          : null
    }
    function ze(n) {
      var e = n.type
      if ('function' == typeof e) return e.displayName || e.name
      if ('string' == typeof e) return e
      switch (e) {
        case he:
          return 'AsyncMode'
        case me:
          return 'Context.Consumer'
        case le:
          return 'ReactFragment'
        case be:
          return 'ReactPortal'
        case de:
          return 'Profiler(' + n.pendingProps.id + ')'
        case ue:
          return 'Context.Provider'
        case se:
          return 'StrictMode'
        case ge:
          return 'Timeout'
      }
      if ('object' == typeof e && null !== e)
        switch (e.$$typeof) {
          case fe:
            return '' !== (n = e.render.displayName || e.render.name || '')
              ? 'ForwardRef(' + n + ')'
              : 'ForwardRef'
        }
      return null
    }
    function ke(n) {
      var e = ''
      do {
        n: switch (n.tag) {
          case 0:
          case 1:
          case 2:
          case 5:
            var t = n._debugOwner,
              r = n._debugSource,
              o = ze(n),
              a = null
            t && (a = ze(t)),
              (t = r),
              (o =
                '\n    in ' +
                (o || 'Unknown') +
                (t
                  ? ' (at ' + t.fileName.replace(/^.*[\\\/]/, '') + ':' + t.lineNumber + ')'
                  : a
                    ? ' (created by ' + a + ')'
                    : ''))
            break n
          default:
            o = ''
        }
        ;(e += o), (n = n.return)
      } while (n)
      return e
    }
    var we = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
      ye = Object.prototype.hasOwnProperty,
      Me = {},
      _e = {}
    function He(n, e, t, r, o) {
      ;(this.acceptsBooleans = 2 === e || 3 === e || 4 === e),
        (this.attributeName = r),
        (this.attributeNamespace = o),
        (this.mustUseProperty = t),
        (this.propertyName = n),
        (this.type = e)
    }
    var Ee = {}
    'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
      .split(' ')
      .forEach(function(n) {
        Ee[n] = new He(n, 0, !1, n, null)
      }),
      [
        ['acceptCharset', 'accept-charset'],
        ['className', 'class'],
        ['htmlFor', 'for'],
        ['httpEquiv', 'http-equiv'],
      ].forEach(function(n) {
        var e = n[0]
        Ee[e] = new He(e, 1, !1, n[1], null)
      }),
      ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function(n) {
        Ee[n] = new He(n, 2, !1, n.toLowerCase(), null)
      }),
      ['autoReverse', 'externalResourcesRequired', 'preserveAlpha'].forEach(function(n) {
        Ee[n] = new He(n, 2, !1, n, null)
      }),
      'allowFullScreen async autoFocus autoPlay controls default defer disabled formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
        .split(' ')
        .forEach(function(n) {
          Ee[n] = new He(n, 3, !1, n.toLowerCase(), null)
        }),
      ['checked', 'multiple', 'muted', 'selected'].forEach(function(n) {
        Ee[n] = new He(n, 3, !0, n.toLowerCase(), null)
      }),
      ['capture', 'download'].forEach(function(n) {
        Ee[n] = new He(n, 4, !1, n.toLowerCase(), null)
      }),
      ['cols', 'rows', 'size', 'span'].forEach(function(n) {
        Ee[n] = new He(n, 6, !1, n.toLowerCase(), null)
      }),
      ['rowSpan', 'start'].forEach(function(n) {
        Ee[n] = new He(n, 5, !1, n.toLowerCase(), null)
      })
    var Ve = /[\-:]([a-z])/g
    function Ce(n) {
      return n[1].toUpperCase()
    }
    function Le(n, e, t, r) {
      var o = Ee.hasOwnProperty(e) ? Ee[e] : null
      ;(null !== o
        ? 0 === o.type
        : !r &&
          (2 < e.length && ('o' === e[0] || 'O' === e[0]) && ('n' === e[1] || 'N' === e[1]))) ||
        ((function(n, e, t, r) {
          if (
            null === e ||
            void 0 === e ||
            (function(n, e, t, r) {
              if (null !== t && 0 === t.type) return !1
              switch (typeof e) {
                case 'function':
                case 'symbol':
                  return !0
                case 'boolean':
                  return (
                    !r &&
                    (null !== t
                      ? !t.acceptsBooleans
                      : 'data-' !== (n = n.toLowerCase().slice(0, 5)) && 'aria-' !== n)
                  )
                default:
                  return !1
              }
            })(n, e, t, r)
          )
            return !0
          if (r) return !1
          if (null !== t)
            switch (t.type) {
              case 3:
                return !e
              case 4:
                return !1 === e
              case 5:
                return isNaN(e)
              case 6:
                return isNaN(e) || 1 > e
            }
          return !1
        })(e, t, o, r) && (t = null),
        r || null === o
          ? (function(n) {
              return (
                !!ye.call(_e, n) ||
                (!ye.call(Me, n) && (we.test(n) ? (_e[n] = !0) : ((Me[n] = !0), !1)))
              )
            })(e) && (null === t ? n.removeAttribute(e) : n.setAttribute(e, '' + t))
          : o.mustUseProperty
            ? (n[o.propertyName] = null === t ? 3 !== o.type && '' : t)
            : ((e = o.attributeName),
              (r = o.attributeNamespace),
              null === t
                ? n.removeAttribute(e)
                : ((t = 3 === (o = o.type) || (4 === o && !0 === t) ? '' : '' + t),
                  r ? n.setAttributeNS(r, e, t) : n.setAttribute(e, t))))
    }
    function Ae(n, e) {
      var t = e.checked
      return i({}, e, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: null != t ? t : n._wrapperState.initialChecked,
      })
    }
    function Te(n, e) {
      var t = null == e.defaultValue ? '' : e.defaultValue,
        r = null != e.checked ? e.checked : e.defaultChecked
      ;(t = De(null != e.value ? e.value : t)),
        (n._wrapperState = {
          initialChecked: r,
          initialValue: t,
          controlled:
            'checkbox' === e.type || 'radio' === e.type ? null != e.checked : null != e.value,
        })
    }
    function Se(n, e) {
      null != (e = e.checked) && Le(n, 'checked', e, !1)
    }
    function Oe(n, e) {
      Se(n, e)
      var t = De(e.value)
      null != t &&
        ('number' === e.type
          ? ((0 === t && '' === n.value) || n.value != t) && (n.value = '' + t)
          : n.value !== '' + t && (n.value = '' + t)),
        e.hasOwnProperty('value')
          ? Ie(n, e.type, t)
          : e.hasOwnProperty('defaultValue') && Ie(n, e.type, De(e.defaultValue)),
        null == e.checked && null != e.defaultChecked && (n.defaultChecked = !!e.defaultChecked)
    }
    function Pe(n, e, t) {
      if (e.hasOwnProperty('value') || e.hasOwnProperty('defaultValue')) {
        e = '' + n._wrapperState.initialValue
        var r = n.value
        t || e === r || (n.value = e), (n.defaultValue = e)
      }
      '' !== (t = n.name) && (n.name = ''),
        (n.defaultChecked = !n.defaultChecked),
        (n.defaultChecked = !n.defaultChecked),
        '' !== t && (n.name = t)
    }
    function Ie(n, e, t) {
      ;('number' === e && n.ownerDocument.activeElement === n) ||
        (null == t
          ? (n.defaultValue = '' + n._wrapperState.initialValue)
          : n.defaultValue !== '' + t && (n.defaultValue = '' + t))
    }
    function De(n) {
      switch (typeof n) {
        case 'boolean':
        case 'number':
        case 'object':
        case 'string':
        case 'undefined':
          return n
        default:
          return ''
      }
    }
    'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
      .split(' ')
      .forEach(function(n) {
        var e = n.replace(Ve, Ce)
        Ee[e] = new He(e, 1, !1, n, null)
      }),
      'xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type'
        .split(' ')
        .forEach(function(n) {
          var e = n.replace(Ve, Ce)
          Ee[e] = new He(e, 1, !1, n, 'http://www.w3.org/1999/xlink')
        }),
      ['xml:base', 'xml:lang', 'xml:space'].forEach(function(n) {
        var e = n.replace(Ve, Ce)
        Ee[e] = new He(e, 1, !1, n, 'http://www.w3.org/XML/1998/namespace')
      }),
      (Ee.tabIndex = new He('tabIndex', 1, !1, 'tabindex', null))
    var Re = {
      change: {
        phasedRegistrationNames: { bubbled: 'onChange', captured: 'onChangeCapture' },
        dependencies: 'blur change click focus input keydown keyup selectionchange'.split(' '),
      },
    }
    function Ne(n, e, t) {
      return ((n = kn.getPooled(Re.change, n, e, t)).type = 'change'), Wn(t), nn(n), n
    }
    var Ue = null,
      Be = null
    function je(n) {
      D(n, !1)
    }
    function Fe(n) {
      if (ae(W(n))) return n
    }
    function We(n, e) {
      if ('change' === n) return e
    }
    var Ke = !1
    function qe() {
      Ue && (Ue.detachEvent('onpropertychange', Ge), (Be = Ue = null))
    }
    function Ge(n) {
      'value' === n.propertyName && Fe(Be) && Zn(je, (n = Ne(Be, n, ee(n))))
    }
    function Ye(n, e, t) {
      'focus' === n
        ? (qe(), (Be = t), (Ue = e).attachEvent('onpropertychange', Ge))
        : 'blur' === n && qe()
    }
    function Xe(n) {
      if ('selectionchange' === n || 'keyup' === n || 'keydown' === n) return Fe(Be)
    }
    function $e(n, e) {
      if ('click' === n) return Fe(e)
    }
    function Qe(n, e) {
      if ('input' === n || 'change' === n) return Fe(e)
    }
    a.canUseDOM && (Ke = te('input') && (!document.documentMode || 9 < document.documentMode))
    var Ze = {
        eventTypes: Re,
        _isInputEventSupported: Ke,
        extractEvents: function(n, e, t, r) {
          var o = e ? W(e) : window,
            a = void 0,
            i = void 0,
            c = o.nodeName && o.nodeName.toLowerCase()
          if (
            ('select' === c || ('input' === c && 'file' === o.type)
              ? (a = We)
              : ne(o)
                ? Ke
                  ? (a = Qe)
                  : ((a = Xe), (i = Ye))
                : (c = o.nodeName) &&
                  'input' === c.toLowerCase() &&
                  ('checkbox' === o.type || 'radio' === o.type) &&
                  (a = $e),
            a && (a = a(n, e)))
          )
            return Ne(a, t, r)
          i && i(n, o, e),
            'blur' === n &&
              (n = o._wrapperState) &&
              n.controlled &&
              'number' === o.type &&
              Ie(o, 'number', o.value)
        },
      },
      Je = kn.extend({ view: null, detail: null }),
      nt = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' }
    function et(n) {
      var e = this.nativeEvent
      return e.getModifierState ? e.getModifierState(n) : !!(n = nt[n]) && !!e[n]
    }
    function tt() {
      return et
    }
    var rt = Je.extend({
        screenX: null,
        screenY: null,
        clientX: null,
        clientY: null,
        pageX: null,
        pageY: null,
        ctrlKey: null,
        shiftKey: null,
        altKey: null,
        metaKey: null,
        getModifierState: tt,
        button: null,
        buttons: null,
        relatedTarget: function(n) {
          return n.relatedTarget || (n.fromElement === n.srcElement ? n.toElement : n.fromElement)
        },
      }),
      ot = rt.extend({
        pointerId: null,
        width: null,
        height: null,
        pressure: null,
        tiltX: null,
        tiltY: null,
        pointerType: null,
        isPrimary: null,
      }),
      at = {
        mouseEnter: { registrationName: 'onMouseEnter', dependencies: ['mouseout', 'mouseover'] },
        mouseLeave: { registrationName: 'onMouseLeave', dependencies: ['mouseout', 'mouseover'] },
        pointerEnter: {
          registrationName: 'onPointerEnter',
          dependencies: ['pointerout', 'pointerover'],
        },
        pointerLeave: {
          registrationName: 'onPointerLeave',
          dependencies: ['pointerout', 'pointerover'],
        },
      },
      it = {
        eventTypes: at,
        extractEvents: function(n, e, t, r) {
          var o = 'mouseover' === n || 'pointerover' === n,
            a = 'mouseout' === n || 'pointerout' === n
          if ((o && (t.relatedTarget || t.fromElement)) || (!a && !o)) return null
          if (
            ((o =
              r.window === r
                ? r
                : (o = r.ownerDocument)
                  ? o.defaultView || o.parentWindow
                  : window),
            a ? ((a = e), (e = (e = t.relatedTarget || t.toElement) ? F(e) : null)) : (a = null),
            a === e)
          )
            return null
          var i = void 0,
            c = void 0,
            p = void 0,
            b = void 0
          return (
            'mouseout' === n || 'mouseover' === n
              ? ((i = rt), (c = at.mouseLeave), (p = at.mouseEnter), (b = 'mouse'))
              : ('pointerout' !== n && 'pointerover' !== n) ||
                ((i = ot), (c = at.pointerLeave), (p = at.pointerEnter), (b = 'pointer')),
            (n = null == a ? o : W(a)),
            (o = null == e ? o : W(e)),
            ((c = i.getPooled(c, a, t, r)).type = b + 'leave'),
            (c.target = n),
            (c.relatedTarget = o),
            ((t = i.getPooled(p, e, t, r)).type = b + 'enter'),
            (t.target = o),
            (t.relatedTarget = n),
            en(c, t, a, e),
            [c, t]
          )
        },
      }
    function ct(n) {
      var e = n
      if (n.alternate) for (; e.return; ) e = e.return
      else {
        if (0 != (2 & e.effectTag)) return 1
        for (; e.return; ) if (0 != (2 & (e = e.return).effectTag)) return 1
      }
      return 3 === e.tag ? 2 : 3
    }
    function pt(n) {
      2 !== ct(n) && d('188')
    }
    function bt(n) {
      var e = n.alternate
      if (!e) return 3 === (e = ct(n)) && d('188'), 1 === e ? null : n
      for (var t = n, r = e; ; ) {
        var o = t.return,
          a = o ? o.alternate : null
        if (!o || !a) break
        if (o.child === a.child) {
          for (var i = o.child; i; ) {
            if (i === t) return pt(o), n
            if (i === r) return pt(o), e
            i = i.sibling
          }
          d('188')
        }
        if (t.return !== r.return) (t = o), (r = a)
        else {
          i = !1
          for (var c = o.child; c; ) {
            if (c === t) {
              ;(i = !0), (t = o), (r = a)
              break
            }
            if (c === r) {
              ;(i = !0), (r = o), (t = a)
              break
            }
            c = c.sibling
          }
          if (!i) {
            for (c = a.child; c; ) {
              if (c === t) {
                ;(i = !0), (t = a), (r = o)
                break
              }
              if (c === r) {
                ;(i = !0), (r = a), (t = o)
                break
              }
              c = c.sibling
            }
            i || d('189')
          }
        }
        t.alternate !== r && d('190')
      }
      return 3 !== t.tag && d('188'), t.stateNode.current === t ? n : e
    }
    function lt(n) {
      if (!(n = bt(n))) return null
      for (var e = n; ; ) {
        if (5 === e.tag || 6 === e.tag) return e
        if (e.child) (e.child.return = e), (e = e.child)
        else {
          if (e === n) break
          for (; !e.sibling; ) {
            if (!e.return || e.return === n) return null
            e = e.return
          }
          ;(e.sibling.return = e.return), (e = e.sibling)
        }
      }
      return null
    }
    var st = kn.extend({ animationName: null, elapsedTime: null, pseudoElement: null }),
      dt = kn.extend({
        clipboardData: function(n) {
          return 'clipboardData' in n ? n.clipboardData : window.clipboardData
        },
      }),
      ut = Je.extend({ relatedTarget: null })
    function mt(n) {
      var e = n.keyCode
      return (
        'charCode' in n ? 0 === (n = n.charCode) && 13 === e && (n = 13) : (n = e),
        10 === n && (n = 13),
        32 <= n || 13 === n ? n : 0
      )
    }
    var ht = {
        Esc: 'Escape',
        Spacebar: ' ',
        Left: 'ArrowLeft',
        Up: 'ArrowUp',
        Right: 'ArrowRight',
        Down: 'ArrowDown',
        Del: 'Delete',
        Win: 'OS',
        Menu: 'ContextMenu',
        Apps: 'ContextMenu',
        Scroll: 'ScrollLock',
        MozPrintableKey: 'Unidentified',
      },
      ft = {
        8: 'Backspace',
        9: 'Tab',
        12: 'Clear',
        13: 'Enter',
        16: 'Shift',
        17: 'Control',
        18: 'Alt',
        19: 'Pause',
        20: 'CapsLock',
        27: 'Escape',
        32: ' ',
        33: 'PageUp',
        34: 'PageDown',
        35: 'End',
        36: 'Home',
        37: 'ArrowLeft',
        38: 'ArrowUp',
        39: 'ArrowRight',
        40: 'ArrowDown',
        45: 'Insert',
        46: 'Delete',
        112: 'F1',
        113: 'F2',
        114: 'F3',
        115: 'F4',
        116: 'F5',
        117: 'F6',
        118: 'F7',
        119: 'F8',
        120: 'F9',
        121: 'F10',
        122: 'F11',
        123: 'F12',
        144: 'NumLock',
        145: 'ScrollLock',
        224: 'Meta',
      },
      gt = Je.extend({
        key: function(n) {
          if (n.key) {
            var e = ht[n.key] || n.key
            if ('Unidentified' !== e) return e
          }
          return 'keypress' === n.type
            ? 13 === (n = mt(n))
              ? 'Enter'
              : String.fromCharCode(n)
            : 'keydown' === n.type || 'keyup' === n.type
              ? ft[n.keyCode] || 'Unidentified'
              : ''
        },
        location: null,
        ctrlKey: null,
        shiftKey: null,
        altKey: null,
        metaKey: null,
        repeat: null,
        locale: null,
        getModifierState: tt,
        charCode: function(n) {
          return 'keypress' === n.type ? mt(n) : 0
        },
        keyCode: function(n) {
          return 'keydown' === n.type || 'keyup' === n.type ? n.keyCode : 0
        },
        which: function(n) {
          return 'keypress' === n.type
            ? mt(n)
            : 'keydown' === n.type || 'keyup' === n.type
              ? n.keyCode
              : 0
        },
      }),
      vt = rt.extend({ dataTransfer: null }),
      xt = Je.extend({
        touches: null,
        targetTouches: null,
        changedTouches: null,
        altKey: null,
        metaKey: null,
        ctrlKey: null,
        shiftKey: null,
        getModifierState: tt,
      }),
      zt = kn.extend({ propertyName: null, elapsedTime: null, pseudoElement: null }),
      kt = rt.extend({
        deltaX: function(n) {
          return 'deltaX' in n ? n.deltaX : 'wheelDeltaX' in n ? -n.wheelDeltaX : 0
        },
        deltaY: function(n) {
          return 'deltaY' in n
            ? n.deltaY
            : 'wheelDeltaY' in n
              ? -n.wheelDeltaY
              : 'wheelDelta' in n
                ? -n.wheelDelta
                : 0
        },
        deltaZ: null,
        deltaMode: null,
      }),
      wt = [
        ['abort', 'abort'],
        [bn, 'animationEnd'],
        [ln, 'animationIteration'],
        [sn, 'animationStart'],
        ['canplay', 'canPlay'],
        ['canplaythrough', 'canPlayThrough'],
        ['drag', 'drag'],
        ['dragenter', 'dragEnter'],
        ['dragexit', 'dragExit'],
        ['dragleave', 'dragLeave'],
        ['dragover', 'dragOver'],
        ['durationchange', 'durationChange'],
        ['emptied', 'emptied'],
        ['encrypted', 'encrypted'],
        ['ended', 'ended'],
        ['error', 'error'],
        ['gotpointercapture', 'gotPointerCapture'],
        ['load', 'load'],
        ['loadeddata', 'loadedData'],
        ['loadedmetadata', 'loadedMetadata'],
        ['loadstart', 'loadStart'],
        ['lostpointercapture', 'lostPointerCapture'],
        ['mousemove', 'mouseMove'],
        ['mouseout', 'mouseOut'],
        ['mouseover', 'mouseOver'],
        ['playing', 'playing'],
        ['pointermove', 'pointerMove'],
        ['pointerout', 'pointerOut'],
        ['pointerover', 'pointerOver'],
        ['progress', 'progress'],
        ['scroll', 'scroll'],
        ['seeking', 'seeking'],
        ['stalled', 'stalled'],
        ['suspend', 'suspend'],
        ['timeupdate', 'timeUpdate'],
        ['toggle', 'toggle'],
        ['touchmove', 'touchMove'],
        [dn, 'transitionEnd'],
        ['waiting', 'waiting'],
        ['wheel', 'wheel'],
      ],
      yt = {},
      Mt = {}
    function _t(n, e) {
      var t = n[0],
        r = 'on' + ((n = n[1])[0].toUpperCase() + n.slice(1))
      ;(e = {
        phasedRegistrationNames: { bubbled: r, captured: r + 'Capture' },
        dependencies: [t],
        isInteractive: e,
      }),
        (yt[n] = e),
        (Mt[t] = e)
    }
    ;[
      ['blur', 'blur'],
      ['cancel', 'cancel'],
      ['click', 'click'],
      ['close', 'close'],
      ['contextmenu', 'contextMenu'],
      ['copy', 'copy'],
      ['cut', 'cut'],
      ['dblclick', 'doubleClick'],
      ['dragend', 'dragEnd'],
      ['dragstart', 'dragStart'],
      ['drop', 'drop'],
      ['focus', 'focus'],
      ['input', 'input'],
      ['invalid', 'invalid'],
      ['keydown', 'keyDown'],
      ['keypress', 'keyPress'],
      ['keyup', 'keyUp'],
      ['mousedown', 'mouseDown'],
      ['mouseup', 'mouseUp'],
      ['paste', 'paste'],
      ['pause', 'pause'],
      ['play', 'play'],
      ['pointercancel', 'pointerCancel'],
      ['pointerdown', 'pointerDown'],
      ['pointerup', 'pointerUp'],
      ['ratechange', 'rateChange'],
      ['reset', 'reset'],
      ['seeked', 'seeked'],
      ['submit', 'submit'],
      ['touchcancel', 'touchCancel'],
      ['touchend', 'touchEnd'],
      ['touchstart', 'touchStart'],
      ['volumechange', 'volumeChange'],
    ].forEach(function(n) {
      _t(n, !0)
    }),
      wt.forEach(function(n) {
        _t(n, !1)
      })
    var Ht = {
        eventTypes: yt,
        isInteractiveTopLevelEventType: function(n) {
          return void 0 !== (n = Mt[n]) && !0 === n.isInteractive
        },
        extractEvents: function(n, e, t, r) {
          var o = Mt[n]
          if (!o) return null
          switch (n) {
            case 'keypress':
              if (0 === mt(t)) return null
            case 'keydown':
            case 'keyup':
              n = gt
              break
            case 'blur':
            case 'focus':
              n = ut
              break
            case 'click':
              if (2 === t.button) return null
            case 'dblclick':
            case 'mousedown':
            case 'mousemove':
            case 'mouseup':
            case 'mouseout':
            case 'mouseover':
            case 'contextmenu':
              n = rt
              break
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              n = vt
              break
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              n = xt
              break
            case bn:
            case ln:
            case sn:
              n = st
              break
            case dn:
              n = zt
              break
            case 'scroll':
              n = Je
              break
            case 'wheel':
              n = kt
              break
            case 'copy':
            case 'cut':
            case 'paste':
              n = dt
              break
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              n = ot
              break
            default:
              n = kn
          }
          return nn((e = n.getPooled(o, e, t, r))), e
        },
      },
      Et = Ht.isInteractiveTopLevelEventType,
      Vt = []
    function Ct(n) {
      var e = n.targetInst
      do {
        if (!e) {
          n.ancestors.push(e)
          break
        }
        var t
        for (t = e; t.return; ) t = t.return
        if (!(t = 3 !== t.tag ? null : t.stateNode.containerInfo)) break
        n.ancestors.push(e), (e = F(t))
      } while (e)
      for (t = 0; t < n.ancestors.length; t++)
        (e = n.ancestors[t]), R(n.topLevelType, e, n.nativeEvent, ee(n.nativeEvent))
    }
    var Lt = !0
    function At(n) {
      Lt = !!n
    }
    function Tt(n, e) {
      if (!e) return null
      var t = (Et(n) ? Ot : Pt).bind(null, n)
      e.addEventListener(n, t, !1)
    }
    function St(n, e) {
      if (!e) return null
      var t = (Et(n) ? Ot : Pt).bind(null, n)
      e.addEventListener(n, t, !0)
    }
    function Ot(n, e) {
      Xn(Pt, n, e)
    }
    function Pt(n, e) {
      if (Lt) {
        var t = ee(e)
        if (
          (null === (t = F(t)) || 'number' != typeof t.tag || 2 === ct(t) || (t = null), Vt.length)
        ) {
          var r = Vt.pop()
          ;(r.topLevelType = n), (r.nativeEvent = e), (r.targetInst = t), (n = r)
        } else n = { topLevelType: n, nativeEvent: e, targetInst: t, ancestors: [] }
        try {
          Zn(Ct, n)
        } finally {
          ;(n.topLevelType = null),
            (n.nativeEvent = null),
            (n.targetInst = null),
            (n.ancestors.length = 0),
            10 > Vt.length && Vt.push(n)
        }
      }
    }
    var It = {
        get _enabled() {
          return Lt
        },
        setEnabled: At,
        isEnabled: function() {
          return Lt
        },
        trapBubbledEvent: Tt,
        trapCapturedEvent: St,
        dispatchEvent: Pt,
      },
      Dt = {},
      Rt = 0,
      Nt = '_reactListenersID' + ('' + Math.random()).slice(2)
    function Ut(n) {
      return (
        Object.prototype.hasOwnProperty.call(n, Nt) || ((n[Nt] = Rt++), (Dt[n[Nt]] = {})), Dt[n[Nt]]
      )
    }
    function Bt(n) {
      for (; n && n.firstChild; ) n = n.firstChild
      return n
    }
    function jt(n, e) {
      var t,
        r = Bt(n)
      for (n = 0; r; ) {
        if (3 === r.nodeType) {
          if (((t = n + r.textContent.length), n <= e && t >= e)) return { node: r, offset: e - n }
          n = t
        }
        n: {
          for (; r; ) {
            if (r.nextSibling) {
              r = r.nextSibling
              break n
            }
            r = r.parentNode
          }
          r = void 0
        }
        r = Bt(r)
      }
    }
    function Ft(n) {
      var e = n && n.nodeName && n.nodeName.toLowerCase()
      return (
        e &&
        (('input' === e &&
          ('text' === n.type ||
            'search' === n.type ||
            'tel' === n.type ||
            'url' === n.type ||
            'password' === n.type)) ||
          'textarea' === e ||
          'true' === n.contentEditable)
      )
    }
    var Wt = a.canUseDOM && 'documentMode' in document && 11 >= document.documentMode,
      Kt = {
        select: {
          phasedRegistrationNames: { bubbled: 'onSelect', captured: 'onSelectCapture' },
          dependencies: 'blur contextmenu focus keydown keyup mousedown mouseup selectionchange'.split(
            ' ',
          ),
        },
      },
      qt = null,
      Gt = null,
      Yt = null,
      Xt = !1
    function $t(n, e) {
      if (Xt || null == qt || qt !== p()) return null
      var t = qt
      return (
        'selectionStart' in t && Ft(t)
          ? (t = { start: t.selectionStart, end: t.selectionEnd })
          : window.getSelection
            ? (t = {
                anchorNode: (t = window.getSelection()).anchorNode,
                anchorOffset: t.anchorOffset,
                focusNode: t.focusNode,
                focusOffset: t.focusOffset,
              })
            : (t = void 0),
        Yt && b(Yt, t)
          ? null
          : ((Yt = t),
            ((n = kn.getPooled(Kt.select, Gt, n, e)).type = 'select'),
            (n.target = qt),
            nn(n),
            n)
      )
    }
    var Qt = {
      eventTypes: Kt,
      extractEvents: function(n, e, t, r) {
        var o,
          a = r.window === r ? r.document : 9 === r.nodeType ? r : r.ownerDocument
        if (!(o = !a)) {
          n: {
            ;(a = Ut(a)), (o = k.onSelect)
            for (var i = 0; i < o.length; i++) {
              var c = o[i]
              if (!a.hasOwnProperty(c) || !a[c]) {
                a = !1
                break n
              }
            }
            a = !0
          }
          o = !a
        }
        if (o) return null
        switch (((a = e ? W(e) : window), n)) {
          case 'focus':
            ;(ne(a) || 'true' === a.contentEditable) && ((qt = a), (Gt = e), (Yt = null))
            break
          case 'blur':
            Yt = Gt = qt = null
            break
          case 'mousedown':
            Xt = !0
            break
          case 'contextmenu':
          case 'mouseup':
            return (Xt = !1), $t(t, r)
          case 'selectionchange':
            if (Wt) break
          case 'keydown':
          case 'keyup':
            return $t(t, r)
        }
        return null
      },
    }
    P.injectEventPluginOrder(
      'ResponderEventPlugin SimpleEventPlugin TapEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin'.split(
        ' ',
      ),
    ),
      (_ = q.getFiberCurrentPropsFromNode),
      (H = q.getInstanceFromNode),
      (E = q.getNodeFromInstance),
      P.injectEventPluginsByName({
        SimpleEventPlugin: Ht,
        EnterLeaveEventPlugin: it,
        ChangeEventPlugin: Ze,
        SelectEventPlugin: Qt,
        BeforeInputEventPlugin: Rn,
      })
    var Zt = 'function' == typeof requestAnimationFrame ? requestAnimationFrame : void 0,
      Jt = Date,
      nr = setTimeout,
      er = clearTimeout,
      tr = void 0
    if ('object' == typeof performance && 'function' == typeof performance.now) {
      var rr = performance
      tr = function() {
        return rr.now()
      }
    } else
      tr = function() {
        return Jt.now()
      }
    var or = void 0,
      ar = void 0
    if (a.canUseDOM) {
      var ir =
          'function' == typeof Zt
            ? Zt
            : function() {
                d('276')
              },
        cr = null,
        pr = null,
        br = -1,
        lr = !1,
        sr = !1,
        dr = 0,
        ur = 33,
        mr = 33,
        hr = {
          didTimeout: !1,
          timeRemaining: function() {
            var n = dr - tr()
            return 0 < n ? n : 0
          },
        },
        fr = function(n, e) {
          var t = n.scheduledCallback,
            r = !1
          try {
            t(e), (r = !0)
          } finally {
            ar(n), r || ((lr = !0), window.postMessage(gr, '*'))
          }
        },
        gr =
          '__reactIdleCallback$' +
          Math.random()
            .toString(36)
            .slice(2)
      window.addEventListener(
        'message',
        function(n) {
          if (n.source === window && n.data === gr && ((lr = !1), null !== cr)) {
            if (null !== cr) {
              var e = tr()
              if (!(-1 === br || br > e)) {
                n = -1
                for (var t = [], r = cr; null !== r; ) {
                  var o = r.timeoutTime
                  ;-1 !== o && o <= e ? t.push(r) : -1 !== o && (-1 === n || o < n) && (n = o),
                    (r = r.next)
                }
                if (0 < t.length)
                  for (hr.didTimeout = !0, e = 0, r = t.length; e < r; e++) fr(t[e], hr)
                br = n
              }
            }
            for (n = tr(); 0 < dr - n && null !== cr; )
              (n = cr), (hr.didTimeout = !1), fr(n, hr), (n = tr())
            null === cr || sr || ((sr = !0), ir(vr))
          }
        },
        !1,
      )
      var vr = function(n) {
        sr = !1
        var e = n - dr + mr
        e < mr && ur < mr ? (8 > e && (e = 8), (mr = e < ur ? ur : e)) : (ur = e),
          (dr = n + mr),
          lr || ((lr = !0), window.postMessage(gr, '*'))
      }
      ;(or = function(n, e) {
        var t = -1
        return (
          null != e && 'number' == typeof e.timeout && (t = tr() + e.timeout),
          (-1 === br || (-1 !== t && t < br)) && (br = t),
          (n = { scheduledCallback: n, timeoutTime: t, prev: null, next: null }),
          null === cr ? (cr = n) : null !== (e = n.prev = pr) && (e.next = n),
          (pr = n),
          sr || ((sr = !0), ir(vr)),
          n
        )
      }),
        (ar = function(n) {
          if (null !== n.prev || cr === n) {
            var e = n.next,
              t = n.prev
            ;(n.next = null),
              (n.prev = null),
              null !== e
                ? null !== t
                  ? ((t.next = e), (e.prev = t))
                  : ((e.prev = null), (cr = e))
                : null !== t
                  ? ((t.next = null), (pr = t))
                  : (pr = cr = null)
          }
        })
    } else {
      var xr = new Map()
      ;(or = function(n) {
        var e = { scheduledCallback: n, timeoutTime: 0, next: null, prev: null },
          t = nr(function() {
            n({
              timeRemaining: function() {
                return 1 / 0
              },
              didTimeout: !1,
            })
          })
        return xr.set(n, t), e
      }),
        (ar = function(n) {
          var e = xr.get(n.scheduledCallback)
          xr.delete(n), er(e)
        })
    }
    function zr(n, e) {
      return (
        (n = i({ children: void 0 }, e)),
        (e = (function(n) {
          var e = ''
          return (
            o.Children.forEach(n, function(n) {
              null == n || ('string' != typeof n && 'number' != typeof n) || (e += n)
            }),
            e
          )
        })(e.children)) && (n.children = e),
        n
      )
    }
    function kr(n, e, t, r) {
      if (((n = n.options), e)) {
        e = {}
        for (var o = 0; o < t.length; o++) e['$' + t[o]] = !0
        for (t = 0; t < n.length; t++)
          (o = e.hasOwnProperty('$' + n[t].value)),
            n[t].selected !== o && (n[t].selected = o),
            o && r && (n[t].defaultSelected = !0)
      } else {
        for (t = '' + t, e = null, o = 0; o < n.length; o++) {
          if (n[o].value === t) return (n[o].selected = !0), void (r && (n[o].defaultSelected = !0))
          null !== e || n[o].disabled || (e = n[o])
        }
        null !== e && (e.selected = !0)
      }
    }
    function wr(n, e) {
      var t = e.value
      n._wrapperState = { initialValue: null != t ? t : e.defaultValue, wasMultiple: !!e.multiple }
    }
    function yr(n, e) {
      return (
        null != e.dangerouslySetInnerHTML && d('91'),
        i({}, e, {
          value: void 0,
          defaultValue: void 0,
          children: '' + n._wrapperState.initialValue,
        })
      )
    }
    function Mr(n, e) {
      var t = e.value
      null == t &&
        ((t = e.defaultValue),
        null != (e = e.children) &&
          (null != t && d('92'),
          Array.isArray(e) && (1 >= e.length || d('93'), (e = e[0])),
          (t = '' + e)),
        null == t && (t = '')),
        (n._wrapperState = { initialValue: '' + t })
    }
    function _r(n, e) {
      var t = e.value
      null != t &&
        ((t = '' + t) !== n.value && (n.value = t), null == e.defaultValue && (n.defaultValue = t)),
        null != e.defaultValue && (n.defaultValue = e.defaultValue)
    }
    function Hr(n) {
      var e = n.textContent
      e === n._wrapperState.initialValue && (n.value = e)
    }
    var Er = {
      html: 'http://www.w3.org/1999/xhtml',
      mathml: 'http://www.w3.org/1998/Math/MathML',
      svg: 'http://www.w3.org/2000/svg',
    }
    function Vr(n) {
      switch (n) {
        case 'svg':
          return 'http://www.w3.org/2000/svg'
        case 'math':
          return 'http://www.w3.org/1998/Math/MathML'
        default:
          return 'http://www.w3.org/1999/xhtml'
      }
    }
    function Cr(n, e) {
      return null == n || 'http://www.w3.org/1999/xhtml' === n
        ? Vr(e)
        : 'http://www.w3.org/2000/svg' === n && 'foreignObject' === e
          ? 'http://www.w3.org/1999/xhtml'
          : n
    }
    var Lr = void 0,
      Ar = (function(n) {
        return 'undefined' != typeof MSApp && MSApp.execUnsafeLocalFunction
          ? function(e, t, r, o) {
              MSApp.execUnsafeLocalFunction(function() {
                return n(e, t)
              })
            }
          : n
      })(function(n, e) {
        if (n.namespaceURI !== Er.svg || 'innerHTML' in n) n.innerHTML = e
        else {
          for (
            (Lr = Lr || document.createElement('div')).innerHTML = '<svg>' + e + '</svg>',
              e = Lr.firstChild;
            n.firstChild;

          )
            n.removeChild(n.firstChild)
          for (; e.firstChild; ) n.appendChild(e.firstChild)
        }
      })
    function Tr(n, e) {
      if (e) {
        var t = n.firstChild
        if (t && t === n.lastChild && 3 === t.nodeType) return void (t.nodeValue = e)
      }
      n.textContent = e
    }
    var Sr = {
        animationIterationCount: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0,
      },
      Or = ['Webkit', 'ms', 'Moz', 'O']
    function Pr(n, e) {
      for (var t in ((n = n.style), e))
        if (e.hasOwnProperty(t)) {
          var r = 0 === t.indexOf('--'),
            o = t,
            a = e[t]
          ;(o =
            null == a || 'boolean' == typeof a || '' === a
              ? ''
              : r || 'number' != typeof a || 0 === a || (Sr.hasOwnProperty(o) && Sr[o])
                ? ('' + a).trim()
                : a + 'px'),
            'float' === t && (t = 'cssFloat'),
            r ? n.setProperty(t, o) : (n[t] = o)
        }
    }
    Object.keys(Sr).forEach(function(n) {
      Or.forEach(function(e) {
        ;(e = e + n.charAt(0).toUpperCase() + n.substring(1)), (Sr[e] = Sr[n])
      })
    })
    var Ir = i(
      { menuitem: !0 },
      {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0,
      },
    )
    function Dr(n, e, t) {
      e &&
        (Ir[n] && (null != e.children || null != e.dangerouslySetInnerHTML) && d('137', n, t()),
        null != e.dangerouslySetInnerHTML &&
          (null != e.children && d('60'),
          ('object' == typeof e.dangerouslySetInnerHTML && '__html' in e.dangerouslySetInnerHTML) ||
            d('61')),
        null != e.style && 'object' != typeof e.style && d('62', t()))
    }
    function Rr(n, e) {
      if (-1 === n.indexOf('-')) return 'string' == typeof e.is
      switch (n) {
        case 'annotation-xml':
        case 'color-profile':
        case 'font-face':
        case 'font-face-src':
        case 'font-face-uri':
        case 'font-face-format':
        case 'font-face-name':
        case 'missing-glyph':
          return !1
        default:
          return !0
      }
    }
    var Nr = c.thatReturns('')
    function Ur(n, e) {
      var t = Ut((n = 9 === n.nodeType || 11 === n.nodeType ? n : n.ownerDocument))
      e = k[e]
      for (var r = 0; r < e.length; r++) {
        var o = e[r]
        if (!t.hasOwnProperty(o) || !t[o]) {
          switch (o) {
            case 'scroll':
              St('scroll', n)
              break
            case 'focus':
            case 'blur':
              St('focus', n), St('blur', n), (t.blur = !0), (t.focus = !0)
              break
            case 'cancel':
            case 'close':
              te(o, !0) && St(o, n)
              break
            case 'invalid':
            case 'submit':
            case 'reset':
              break
            default:
              ;-1 === un.indexOf(o) && Tt(o, n)
          }
          t[o] = !0
        }
      }
    }
    function Br(n, e, t, r) {
      return (
        (t = 9 === t.nodeType ? t : t.ownerDocument),
        r === Er.html && (r = Vr(n)),
        r === Er.html
          ? 'script' === n
            ? (((n = t.createElement('div')).innerHTML = '<script></script>'),
              (n = n.removeChild(n.firstChild)))
            : (n = 'string' == typeof e.is ? t.createElement(n, { is: e.is }) : t.createElement(n))
          : (n = t.createElementNS(r, n)),
        n
      )
    }
    function jr(n, e) {
      return (9 === e.nodeType ? e : e.ownerDocument).createTextNode(n)
    }
    function Fr(n, e, t, r) {
      var o = Rr(e, t)
      switch (e) {
        case 'iframe':
        case 'object':
          Tt('load', n)
          var a = t
          break
        case 'video':
        case 'audio':
          for (a = 0; a < un.length; a++) Tt(un[a], n)
          a = t
          break
        case 'source':
          Tt('error', n), (a = t)
          break
        case 'img':
        case 'image':
        case 'link':
          Tt('error', n), Tt('load', n), (a = t)
          break
        case 'form':
          Tt('reset', n), Tt('submit', n), (a = t)
          break
        case 'details':
          Tt('toggle', n), (a = t)
          break
        case 'input':
          Te(n, t), (a = Ae(n, t)), Tt('invalid', n), Ur(r, 'onChange')
          break
        case 'option':
          a = zr(n, t)
          break
        case 'select':
          wr(n, t), (a = i({}, t, { value: void 0 })), Tt('invalid', n), Ur(r, 'onChange')
          break
        case 'textarea':
          Mr(n, t), (a = yr(n, t)), Tt('invalid', n), Ur(r, 'onChange')
          break
        default:
          a = t
      }
      Dr(e, a, Nr)
      var p,
        b = a
      for (p in b)
        if (b.hasOwnProperty(p)) {
          var l = b[p]
          'style' === p
            ? Pr(n, l)
            : 'dangerouslySetInnerHTML' === p
              ? null != (l = l ? l.__html : void 0) && Ar(n, l)
              : 'children' === p
                ? 'string' == typeof l
                  ? ('textarea' !== e || '' !== l) && Tr(n, l)
                  : 'number' == typeof l && Tr(n, '' + l)
                : 'suppressContentEditableWarning' !== p &&
                  'suppressHydrationWarning' !== p &&
                  'autoFocus' !== p &&
                  (z.hasOwnProperty(p) ? null != l && Ur(r, p) : null != l && Le(n, p, l, o))
        }
      switch (e) {
        case 'input':
          oe(n), Pe(n, t, !1)
          break
        case 'textarea':
          oe(n), Hr(n)
          break
        case 'option':
          null != t.value && n.setAttribute('value', t.value)
          break
        case 'select':
          ;(n.multiple = !!t.multiple),
            null != (e = t.value)
              ? kr(n, !!t.multiple, e, !1)
              : null != t.defaultValue && kr(n, !!t.multiple, t.defaultValue, !0)
          break
        default:
          'function' == typeof a.onClick && (n.onclick = c)
      }
    }
    function Wr(n, e, t, r, o) {
      var a = null
      switch (e) {
        case 'input':
          ;(t = Ae(n, t)), (r = Ae(n, r)), (a = [])
          break
        case 'option':
          ;(t = zr(n, t)), (r = zr(n, r)), (a = [])
          break
        case 'select':
          ;(t = i({}, t, { value: void 0 })), (r = i({}, r, { value: void 0 })), (a = [])
          break
        case 'textarea':
          ;(t = yr(n, t)), (r = yr(n, r)), (a = [])
          break
        default:
          'function' != typeof t.onClick && 'function' == typeof r.onClick && (n.onclick = c)
      }
      Dr(e, r, Nr), (e = n = void 0)
      var p = null
      for (n in t)
        if (!r.hasOwnProperty(n) && t.hasOwnProperty(n) && null != t[n])
          if ('style' === n) {
            var b = t[n]
            for (e in b) b.hasOwnProperty(e) && (p || (p = {}), (p[e] = ''))
          } else
            'dangerouslySetInnerHTML' !== n &&
              'children' !== n &&
              'suppressContentEditableWarning' !== n &&
              'suppressHydrationWarning' !== n &&
              'autoFocus' !== n &&
              (z.hasOwnProperty(n) ? a || (a = []) : (a = a || []).push(n, null))
      for (n in r) {
        var l = r[n]
        if (
          ((b = null != t ? t[n] : void 0),
          r.hasOwnProperty(n) && l !== b && (null != l || null != b))
        )
          if ('style' === n)
            if (b) {
              for (e in b)
                !b.hasOwnProperty(e) || (l && l.hasOwnProperty(e)) || (p || (p = {}), (p[e] = ''))
              for (e in l) l.hasOwnProperty(e) && b[e] !== l[e] && (p || (p = {}), (p[e] = l[e]))
            } else p || (a || (a = []), a.push(n, p)), (p = l)
          else
            'dangerouslySetInnerHTML' === n
              ? ((l = l ? l.__html : void 0),
                (b = b ? b.__html : void 0),
                null != l && b !== l && (a = a || []).push(n, '' + l))
              : 'children' === n
                ? b === l ||
                  ('string' != typeof l && 'number' != typeof l) ||
                  (a = a || []).push(n, '' + l)
                : 'suppressContentEditableWarning' !== n &&
                  'suppressHydrationWarning' !== n &&
                  (z.hasOwnProperty(n)
                    ? (null != l && Ur(o, n), a || b === l || (a = []))
                    : (a = a || []).push(n, l))
      }
      return p && (a = a || []).push('style', p), a
    }
    function Kr(n, e, t, r, o) {
      'input' === t && 'radio' === o.type && null != o.name && Se(n, o), Rr(t, r), (r = Rr(t, o))
      for (var a = 0; a < e.length; a += 2) {
        var i = e[a],
          c = e[a + 1]
        'style' === i
          ? Pr(n, c)
          : 'dangerouslySetInnerHTML' === i
            ? Ar(n, c)
            : 'children' === i
              ? Tr(n, c)
              : Le(n, i, c, r)
      }
      switch (t) {
        case 'input':
          Oe(n, o)
          break
        case 'textarea':
          _r(n, o)
          break
        case 'select':
          ;(n._wrapperState.initialValue = void 0),
            (e = n._wrapperState.wasMultiple),
            (n._wrapperState.wasMultiple = !!o.multiple),
            null != (t = o.value)
              ? kr(n, !!o.multiple, t, !1)
              : e !== !!o.multiple &&
                (null != o.defaultValue
                  ? kr(n, !!o.multiple, o.defaultValue, !0)
                  : kr(n, !!o.multiple, o.multiple ? [] : '', !1))
      }
    }
    function qr(n, e, t, r, o) {
      switch (e) {
        case 'iframe':
        case 'object':
          Tt('load', n)
          break
        case 'video':
        case 'audio':
          for (r = 0; r < un.length; r++) Tt(un[r], n)
          break
        case 'source':
          Tt('error', n)
          break
        case 'img':
        case 'image':
        case 'link':
          Tt('error', n), Tt('load', n)
          break
        case 'form':
          Tt('reset', n), Tt('submit', n)
          break
        case 'details':
          Tt('toggle', n)
          break
        case 'input':
          Te(n, t), Tt('invalid', n), Ur(o, 'onChange')
          break
        case 'select':
          wr(n, t), Tt('invalid', n), Ur(o, 'onChange')
          break
        case 'textarea':
          Mr(n, t), Tt('invalid', n), Ur(o, 'onChange')
      }
      for (var a in (Dr(e, t, Nr), (r = null), t))
        if (t.hasOwnProperty(a)) {
          var i = t[a]
          'children' === a
            ? 'string' == typeof i
              ? n.textContent !== i && (r = ['children', i])
              : 'number' == typeof i && n.textContent !== '' + i && (r = ['children', '' + i])
            : z.hasOwnProperty(a) && null != i && Ur(o, a)
        }
      switch (e) {
        case 'input':
          oe(n), Pe(n, t, !0)
          break
        case 'textarea':
          oe(n), Hr(n)
          break
        case 'select':
        case 'option':
          break
        default:
          'function' == typeof t.onClick && (n.onclick = c)
      }
      return r
    }
    function Gr(n, e) {
      return n.nodeValue !== e
    }
    var Yr = {
        createElement: Br,
        createTextNode: jr,
        setInitialProperties: Fr,
        diffProperties: Wr,
        updateProperties: Kr,
        diffHydratedProperties: qr,
        diffHydratedText: Gr,
        warnForUnmatchedText: function() {},
        warnForDeletedHydratableElement: function() {},
        warnForDeletedHydratableText: function() {},
        warnForInsertedHydratedElement: function() {},
        warnForInsertedHydratedText: function() {},
        restoreControlledState: function(n, e, t) {
          switch (e) {
            case 'input':
              if ((Oe(n, t), (e = t.name), 'radio' === t.type && null != e)) {
                for (t = n; t.parentNode; ) t = t.parentNode
                for (
                  t = t.querySelectorAll(
                    'input[name=' + JSON.stringify('' + e) + '][type="radio"]',
                  ),
                    e = 0;
                  e < t.length;
                  e++
                ) {
                  var r = t[e]
                  if (r !== n && r.form === n.form) {
                    var o = K(r)
                    o || d('90'), ae(r), Oe(r, o)
                  }
                }
              }
              break
            case 'textarea':
              _r(n, t)
              break
            case 'select':
              null != (e = t.value) && kr(n, !!t.multiple, e, !1)
          }
        },
      },
      Xr = null,
      $r = null
    function Qr(n, e) {
      switch (n) {
        case 'button':
        case 'input':
        case 'select':
        case 'textarea':
          return !!e.autoFocus
      }
      return !1
    }
    function Zr(n, e) {
      return (
        'textarea' === n ||
        'string' == typeof e.children ||
        'number' == typeof e.children ||
        ('object' == typeof e.dangerouslySetInnerHTML &&
          null !== e.dangerouslySetInnerHTML &&
          'string' == typeof e.dangerouslySetInnerHTML.__html)
      )
    }
    var Jr = tr,
      no = or,
      eo = ar
    function to(n) {
      for (n = n.nextSibling; n && 1 !== n.nodeType && 3 !== n.nodeType; ) n = n.nextSibling
      return n
    }
    function ro(n) {
      for (n = n.firstChild; n && 1 !== n.nodeType && 3 !== n.nodeType; ) n = n.nextSibling
      return n
    }
    new Set()
    var oo = [],
      ao = -1
    function io(n) {
      return { current: n }
    }
    function co(n) {
      0 > ao || ((n.current = oo[ao]), (oo[ao] = null), ao--)
    }
    function po(n, e) {
      ;(oo[++ao] = n.current), (n.current = e)
    }
    var bo = io(s),
      lo = io(!1),
      so = s
    function uo(n) {
      return ho(n) ? so : bo.current
    }
    function mo(n, e) {
      var t = n.type.contextTypes
      if (!t) return s
      var r = n.stateNode
      if (r && r.__reactInternalMemoizedUnmaskedChildContext === e)
        return r.__reactInternalMemoizedMaskedChildContext
      var o,
        a = {}
      for (o in t) a[o] = e[o]
      return (
        r &&
          (((n = n.stateNode).__reactInternalMemoizedUnmaskedChildContext = e),
          (n.__reactInternalMemoizedMaskedChildContext = a)),
        a
      )
    }
    function ho(n) {
      return 2 === n.tag && null != n.type.childContextTypes
    }
    function fo(n) {
      ho(n) && (co(lo), co(bo))
    }
    function go(n) {
      co(lo), co(bo)
    }
    function vo(n, e, t) {
      bo.current !== s && d('168'), po(bo, e), po(lo, t)
    }
    function xo(n, e) {
      var t = n.stateNode,
        r = n.type.childContextTypes
      if ('function' != typeof t.getChildContext) return e
      for (var o in (t = t.getChildContext())) o in r || d('108', ze(n) || 'Unknown', o)
      return i({}, e, t)
    }
    function zo(n) {
      if (!ho(n)) return !1
      var e = n.stateNode
      return (
        (e = (e && e.__reactInternalMemoizedMergedChildContext) || s),
        (so = bo.current),
        po(bo, e),
        po(lo, lo.current),
        !0
      )
    }
    function ko(n, e) {
      var t = n.stateNode
      if ((t || d('169'), e)) {
        var r = xo(n, so)
        ;(t.__reactInternalMemoizedMergedChildContext = r), co(lo), co(bo), po(bo, r)
      } else co(lo)
      po(lo, e)
    }
    function wo(n, e, t, r) {
      ;(this.tag = n),
        (this.key = t),
        (this.sibling = this.child = this.return = this.stateNode = this.type = null),
        (this.index = 0),
        (this.ref = null),
        (this.pendingProps = e),
        (this.memoizedState = this.updateQueue = this.memoizedProps = null),
        (this.mode = r),
        (this.effectTag = 0),
        (this.lastEffect = this.firstEffect = this.nextEffect = null),
        (this.expirationTime = 0),
        (this.alternate = null)
    }
    function yo(n, e, t) {
      var r = n.alternate
      return (
        null === r
          ? (((r = new wo(n.tag, e, n.key, n.mode)).type = n.type),
            (r.stateNode = n.stateNode),
            (r.alternate = n),
            (n.alternate = r))
          : ((r.pendingProps = e),
            (r.effectTag = 0),
            (r.nextEffect = null),
            (r.firstEffect = null),
            (r.lastEffect = null)),
        (r.expirationTime = t),
        (r.child = n.child),
        (r.memoizedProps = n.memoizedProps),
        (r.memoizedState = n.memoizedState),
        (r.updateQueue = n.updateQueue),
        (r.sibling = n.sibling),
        (r.index = n.index),
        (r.ref = n.ref),
        r
      )
    }
    function Mo(n, e, t) {
      var r = n.type,
        o = n.key
      if (((n = n.props), 'function' == typeof r))
        var a = r.prototype && r.prototype.isReactComponent ? 2 : 0
      else if ('string' == typeof r) a = 5
      else
        switch (r) {
          case le:
            return _o(n.children, e, t, o)
          case he:
            ;(a = 11), (e |= 3)
            break
          case se:
            ;(a = 11), (e |= 2)
            break
          case de:
            return ((r = new wo(15, n, o, 4 | e)).type = de), (r.expirationTime = t), r
          case ge:
            ;(a = 16), (e |= 2)
            break
          default:
            n: {
              switch ('object' == typeof r && null !== r ? r.$$typeof : null) {
                case ue:
                  a = 13
                  break n
                case me:
                  a = 12
                  break n
                case fe:
                  a = 14
                  break n
                default:
                  d('130', null == r ? r : typeof r, '')
              }
              a = void 0
            }
        }
      return ((e = new wo(a, n, o, e)).type = r), (e.expirationTime = t), e
    }
    function _o(n, e, t, r) {
      return ((n = new wo(10, n, r, e)).expirationTime = t), n
    }
    function Ho(n, e, t) {
      return ((n = new wo(6, n, null, e)).expirationTime = t), n
    }
    function Eo(n, e, t) {
      return (
        ((e = new wo(4, null !== n.children ? n.children : [], n.key, e)).expirationTime = t),
        (e.stateNode = {
          containerInfo: n.containerInfo,
          pendingChildren: null,
          implementation: n.implementation,
        }),
        e
      )
    }
    function Vo(n, e, t) {
      return (
        (n = {
          current: (e = new wo(3, null, null, e ? 3 : 0)),
          containerInfo: n,
          pendingChildren: null,
          earliestPendingTime: 0,
          latestPendingTime: 0,
          earliestSuspendedTime: 0,
          latestSuspendedTime: 0,
          latestPingedTime: 0,
          pendingCommitExpirationTime: 0,
          finishedWork: null,
          context: null,
          pendingContext: null,
          hydrate: t,
          remainingExpirationTime: 0,
          firstBatch: null,
          nextScheduledRoot: null,
        }),
        (e.stateNode = n)
      )
    }
    var Co = null,
      Lo = null
    function Ao(n) {
      return function(e) {
        try {
          return n(e)
        } catch (n) {}
      }
    }
    function To(n) {
      'function' == typeof Co && Co(n)
    }
    function So(n) {
      'function' == typeof Lo && Lo(n)
    }
    var Oo = !1
    function Po(n) {
      return {
        expirationTime: 0,
        baseState: n,
        firstUpdate: null,
        lastUpdate: null,
        firstCapturedUpdate: null,
        lastCapturedUpdate: null,
        firstEffect: null,
        lastEffect: null,
        firstCapturedEffect: null,
        lastCapturedEffect: null,
      }
    }
    function Io(n) {
      return {
        expirationTime: n.expirationTime,
        baseState: n.baseState,
        firstUpdate: n.firstUpdate,
        lastUpdate: n.lastUpdate,
        firstCapturedUpdate: null,
        lastCapturedUpdate: null,
        firstEffect: null,
        lastEffect: null,
        firstCapturedEffect: null,
        lastCapturedEffect: null,
      }
    }
    function Do(n) {
      return {
        expirationTime: n,
        tag: 0,
        payload: null,
        callback: null,
        next: null,
        nextEffect: null,
      }
    }
    function Ro(n, e, t) {
      null === n.lastUpdate
        ? (n.firstUpdate = n.lastUpdate = e)
        : ((n.lastUpdate.next = e), (n.lastUpdate = e)),
        (0 === n.expirationTime || n.expirationTime > t) && (n.expirationTime = t)
    }
    function No(n, e, t) {
      var r = n.alternate
      if (null === r) {
        var o = n.updateQueue,
          a = null
        null === o && (o = n.updateQueue = Po(n.memoizedState))
      } else
        (o = n.updateQueue),
          (a = r.updateQueue),
          null === o
            ? null === a
              ? ((o = n.updateQueue = Po(n.memoizedState)),
                (a = r.updateQueue = Po(r.memoizedState)))
              : (o = n.updateQueue = Io(a))
            : null === a && (a = r.updateQueue = Io(o))
      null === a || o === a
        ? Ro(o, e, t)
        : null === o.lastUpdate || null === a.lastUpdate
          ? (Ro(o, e, t), Ro(a, e, t))
          : (Ro(o, e, t), (a.lastUpdate = e))
    }
    function Uo(n, e, t) {
      var r = n.updateQueue
      null ===
      (r = null === r ? (n.updateQueue = Po(n.memoizedState)) : Bo(n, r)).lastCapturedUpdate
        ? (r.firstCapturedUpdate = r.lastCapturedUpdate = e)
        : ((r.lastCapturedUpdate.next = e), (r.lastCapturedUpdate = e)),
        (0 === r.expirationTime || r.expirationTime > t) && (r.expirationTime = t)
    }
    function Bo(n, e) {
      var t = n.alternate
      return null !== t && e === t.updateQueue && (e = n.updateQueue = Io(e)), e
    }
    function jo(n, e, t, r, o, a) {
      switch (t.tag) {
        case 1:
          return 'function' == typeof (n = t.payload) ? n.call(a, r, o) : n
        case 3:
          n.effectTag = (-1025 & n.effectTag) | 64
        case 0:
          if (
            null === (o = 'function' == typeof (n = t.payload) ? n.call(a, r, o) : n) ||
            void 0 === o
          )
            break
          return i({}, r, o)
        case 2:
          Oo = !0
      }
      return r
    }
    function Fo(n, e, t, r, o) {
      if (((Oo = !1), !(0 === e.expirationTime || e.expirationTime > o))) {
        for (
          var a = (e = Bo(n, e)).baseState, i = null, c = 0, p = e.firstUpdate, b = a;
          null !== p;

        ) {
          var l = p.expirationTime
          l > o
            ? (null === i && ((i = p), (a = b)), (0 === c || c > l) && (c = l))
            : ((b = jo(n, 0, p, b, t, r)),
              null !== p.callback &&
                ((n.effectTag |= 32),
                (p.nextEffect = null),
                null === e.lastEffect
                  ? (e.firstEffect = e.lastEffect = p)
                  : ((e.lastEffect.nextEffect = p), (e.lastEffect = p)))),
            (p = p.next)
        }
        for (l = null, p = e.firstCapturedUpdate; null !== p; ) {
          var s = p.expirationTime
          s > o
            ? (null === l && ((l = p), null === i && (a = b)), (0 === c || c > s) && (c = s))
            : ((b = jo(n, 0, p, b, t, r)),
              null !== p.callback &&
                ((n.effectTag |= 32),
                (p.nextEffect = null),
                null === e.lastCapturedEffect
                  ? (e.firstCapturedEffect = e.lastCapturedEffect = p)
                  : ((e.lastCapturedEffect.nextEffect = p), (e.lastCapturedEffect = p)))),
            (p = p.next)
        }
        null === i && (e.lastUpdate = null),
          null === l ? (e.lastCapturedUpdate = null) : (n.effectTag |= 32),
          null === i && null === l && (a = b),
          (e.baseState = a),
          (e.firstUpdate = i),
          (e.firstCapturedUpdate = l),
          (e.expirationTime = c),
          (n.memoizedState = b)
      }
    }
    function Wo(n, e) {
      'function' != typeof n && d('191', n), n.call(e)
    }
    function Ko(n, e, t) {
      for (
        null !== e.firstCapturedUpdate &&
          (null !== e.lastUpdate &&
            ((e.lastUpdate.next = e.firstCapturedUpdate), (e.lastUpdate = e.lastCapturedUpdate)),
          (e.firstCapturedUpdate = e.lastCapturedUpdate = null)),
          n = e.firstEffect,
          e.firstEffect = e.lastEffect = null;
        null !== n;

      ) {
        var r = n.callback
        null !== r && ((n.callback = null), Wo(r, t)), (n = n.nextEffect)
      }
      for (
        n = e.firstCapturedEffect, e.firstCapturedEffect = e.lastCapturedEffect = null;
        null !== n;

      )
        null !== (e = n.callback) && ((n.callback = null), Wo(e, t)), (n = n.nextEffect)
    }
    function qo(n, e) {
      return { value: n, source: e, stack: ke(e) }
    }
    var Go = io(null),
      Yo = io(null),
      Xo = io(0)
    function $o(n) {
      var e = n.type._context
      po(Xo, e._changedBits),
        po(Yo, e._currentValue),
        po(Go, n),
        (e._currentValue = n.pendingProps.value),
        (e._changedBits = n.stateNode)
    }
    function Qo(n) {
      var e = Xo.current,
        t = Yo.current
      co(Go), co(Yo), co(Xo), ((n = n.type._context)._currentValue = t), (n._changedBits = e)
    }
    var Zo = {},
      Jo = io(Zo),
      na = io(Zo),
      ea = io(Zo)
    function ta(n) {
      return n === Zo && d('174'), n
    }
    function ra(n, e) {
      po(ea, e), po(na, n), po(Jo, Zo)
      var t = e.nodeType
      switch (t) {
        case 9:
        case 11:
          e = (e = e.documentElement) ? e.namespaceURI : Cr(null, '')
          break
        default:
          e = Cr((e = (t = 8 === t ? e.parentNode : e).namespaceURI || null), (t = t.tagName))
      }
      co(Jo), po(Jo, e)
    }
    function oa(n) {
      co(Jo), co(na), co(ea)
    }
    function aa(n) {
      na.current === n && (co(Jo), co(na))
    }
    function ia(n, e, t) {
      var r = n.memoizedState
      ;(r = null === (e = e(t, r)) || void 0 === e ? r : i({}, r, e)),
        (n.memoizedState = r),
        null !== (n = n.updateQueue) && 0 === n.expirationTime && (n.baseState = r)
    }
    var ca = {
      isMounted: function(n) {
        return !!(n = n._reactInternalFiber) && 2 === ct(n)
      },
      enqueueSetState: function(n, e, t) {
        n = n._reactInternalFiber
        var r = xi(),
          o = Do((r = gi(r, n)))
        ;(o.payload = e), void 0 !== t && null !== t && (o.callback = t), No(n, o, r), vi(n, r)
      },
      enqueueReplaceState: function(n, e, t) {
        n = n._reactInternalFiber
        var r = xi(),
          o = Do((r = gi(r, n)))
        ;(o.tag = 1),
          (o.payload = e),
          void 0 !== t && null !== t && (o.callback = t),
          No(n, o, r),
          vi(n, r)
      },
      enqueueForceUpdate: function(n, e) {
        n = n._reactInternalFiber
        var t = xi(),
          r = Do((t = gi(t, n)))
        ;(r.tag = 2), void 0 !== e && null !== e && (r.callback = e), No(n, r, t), vi(n, t)
      },
    }
    function pa(n, e, t, r, o, a) {
      var i = n.stateNode
      return (
        (n = n.type),
        'function' == typeof i.shouldComponentUpdate
          ? i.shouldComponentUpdate(t, o, a)
          : !n.prototype || !n.prototype.isPureReactComponent || (!b(e, t) || !b(r, o))
      )
    }
    function ba(n, e, t, r) {
      ;(n = e.state),
        'function' == typeof e.componentWillReceiveProps && e.componentWillReceiveProps(t, r),
        'function' == typeof e.UNSAFE_componentWillReceiveProps &&
          e.UNSAFE_componentWillReceiveProps(t, r),
        e.state !== n && ca.enqueueReplaceState(e, e.state, null)
    }
    function la(n, e) {
      var t = n.type,
        r = n.stateNode,
        o = n.pendingProps,
        a = uo(n)
      ;(r.props = o),
        (r.state = n.memoizedState),
        (r.refs = s),
        (r.context = mo(n, a)),
        null !== (a = n.updateQueue) && (Fo(n, a, o, r, e), (r.state = n.memoizedState)),
        'function' == typeof (a = n.type.getDerivedStateFromProps) &&
          (ia(n, a, o), (r.state = n.memoizedState)),
        'function' == typeof t.getDerivedStateFromProps ||
          'function' == typeof r.getSnapshotBeforeUpdate ||
          ('function' != typeof r.UNSAFE_componentWillMount &&
            'function' != typeof r.componentWillMount) ||
          ((t = r.state),
          'function' == typeof r.componentWillMount && r.componentWillMount(),
          'function' == typeof r.UNSAFE_componentWillMount && r.UNSAFE_componentWillMount(),
          t !== r.state && ca.enqueueReplaceState(r, r.state, null),
          null !== (a = n.updateQueue) && (Fo(n, a, o, r, e), (r.state = n.memoizedState))),
        'function' == typeof r.componentDidMount && (n.effectTag |= 4)
    }
    var sa = Array.isArray
    function da(n, e, t) {
      if (null !== (n = t.ref) && 'function' != typeof n && 'object' != typeof n) {
        if (t._owner) {
          var r = void 0
          ;(t = t._owner) && (2 !== t.tag && d('110'), (r = t.stateNode)), r || d('147', n)
          var o = '' + n
          return null !== e &&
            null !== e.ref &&
            'function' == typeof e.ref &&
            e.ref._stringRef === o
            ? e.ref
            : (((e = function(n) {
                var e = r.refs === s ? (r.refs = {}) : r.refs
                null === n ? delete e[o] : (e[o] = n)
              })._stringRef = o),
              e)
        }
        'string' != typeof n && d('148'), t._owner || d('254', n)
      }
      return n
    }
    function ua(n, e) {
      'textarea' !== n.type &&
        d(
          '31',
          '[object Object]' === Object.prototype.toString.call(e)
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : e,
          '',
        )
    }
    function ma(n) {
      function e(e, t) {
        if (n) {
          var r = e.lastEffect
          null !== r
            ? ((r.nextEffect = t), (e.lastEffect = t))
            : (e.firstEffect = e.lastEffect = t),
            (t.nextEffect = null),
            (t.effectTag = 8)
        }
      }
      function t(t, r) {
        if (!n) return null
        for (; null !== r; ) e(t, r), (r = r.sibling)
        return null
      }
      function r(n, e) {
        for (n = new Map(); null !== e; )
          null !== e.key ? n.set(e.key, e) : n.set(e.index, e), (e = e.sibling)
        return n
      }
      function o(n, e, t) {
        return ((n = yo(n, e, t)).index = 0), (n.sibling = null), n
      }
      function a(e, t, r) {
        return (
          (e.index = r),
          n
            ? null !== (r = e.alternate)
              ? (r = r.index) < t
                ? ((e.effectTag = 2), t)
                : r
              : ((e.effectTag = 2), t)
            : t
        )
      }
      function i(e) {
        return n && null === e.alternate && (e.effectTag = 2), e
      }
      function c(n, e, t, r) {
        return null === e || 6 !== e.tag
          ? (((e = Ho(t, n.mode, r)).return = n), e)
          : (((e = o(e, t, r)).return = n), e)
      }
      function p(n, e, t, r) {
        return null !== e && e.type === t.type
          ? (((r = o(e, t.props, r)).ref = da(n, e, t)), (r.return = n), r)
          : (((r = Mo(t, n.mode, r)).ref = da(n, e, t)), (r.return = n), r)
      }
      function b(n, e, t, r) {
        return null === e ||
          4 !== e.tag ||
          e.stateNode.containerInfo !== t.containerInfo ||
          e.stateNode.implementation !== t.implementation
          ? (((e = Eo(t, n.mode, r)).return = n), e)
          : (((e = o(e, t.children || [], r)).return = n), e)
      }
      function l(n, e, t, r, a) {
        return null === e || 10 !== e.tag
          ? (((e = _o(t, n.mode, r, a)).return = n), e)
          : (((e = o(e, t, r)).return = n), e)
      }
      function s(n, e, t) {
        if ('string' == typeof e || 'number' == typeof e)
          return ((e = Ho('' + e, n.mode, t)).return = n), e
        if ('object' == typeof e && null !== e) {
          switch (e.$$typeof) {
            case pe:
              return ((t = Mo(e, n.mode, t)).ref = da(n, null, e)), (t.return = n), t
            case be:
              return ((e = Eo(e, n.mode, t)).return = n), e
          }
          if (sa(e) || xe(e)) return ((e = _o(e, n.mode, t, null)).return = n), e
          ua(n, e)
        }
        return null
      }
      function u(n, e, t, r) {
        var o = null !== e ? e.key : null
        if ('string' == typeof t || 'number' == typeof t)
          return null !== o ? null : c(n, e, '' + t, r)
        if ('object' == typeof t && null !== t) {
          switch (t.$$typeof) {
            case pe:
              return t.key === o
                ? t.type === le
                  ? l(n, e, t.props.children, r, o)
                  : p(n, e, t, r)
                : null
            case be:
              return t.key === o ? b(n, e, t, r) : null
          }
          if (sa(t) || xe(t)) return null !== o ? null : l(n, e, t, r, null)
          ua(n, t)
        }
        return null
      }
      function m(n, e, t, r, o) {
        if ('string' == typeof r || 'number' == typeof r)
          return c(e, (n = n.get(t) || null), '' + r, o)
        if ('object' == typeof r && null !== r) {
          switch (r.$$typeof) {
            case pe:
              return (
                (n = n.get(null === r.key ? t : r.key) || null),
                r.type === le ? l(e, n, r.props.children, o, r.key) : p(e, n, r, o)
              )
            case be:
              return b(e, (n = n.get(null === r.key ? t : r.key) || null), r, o)
          }
          if (sa(r) || xe(r)) return l(e, (n = n.get(t) || null), r, o, null)
          ua(e, r)
        }
        return null
      }
      function h(o, i, c, p) {
        for (
          var b = null, l = null, d = i, h = (i = 0), f = null;
          null !== d && h < c.length;
          h++
        ) {
          d.index > h ? ((f = d), (d = null)) : (f = d.sibling)
          var g = u(o, d, c[h], p)
          if (null === g) {
            null === d && (d = f)
            break
          }
          n && d && null === g.alternate && e(o, d),
            (i = a(g, i, h)),
            null === l ? (b = g) : (l.sibling = g),
            (l = g),
            (d = f)
        }
        if (h === c.length) return t(o, d), b
        if (null === d) {
          for (; h < c.length; h++)
            (d = s(o, c[h], p)) &&
              ((i = a(d, i, h)), null === l ? (b = d) : (l.sibling = d), (l = d))
          return b
        }
        for (d = r(o, d); h < c.length; h++)
          (f = m(d, o, h, c[h], p)) &&
            (n && null !== f.alternate && d.delete(null === f.key ? h : f.key),
            (i = a(f, i, h)),
            null === l ? (b = f) : (l.sibling = f),
            (l = f))
        return (
          n &&
            d.forEach(function(n) {
              return e(o, n)
            }),
          b
        )
      }
      function f(o, i, c, p) {
        var b = xe(c)
        'function' != typeof b && d('150'), null == (c = b.call(c)) && d('151')
        for (
          var l = (b = null), h = i, f = (i = 0), g = null, v = c.next();
          null !== h && !v.done;
          f++, v = c.next()
        ) {
          h.index > f ? ((g = h), (h = null)) : (g = h.sibling)
          var x = u(o, h, v.value, p)
          if (null === x) {
            h || (h = g)
            break
          }
          n && h && null === x.alternate && e(o, h),
            (i = a(x, i, f)),
            null === l ? (b = x) : (l.sibling = x),
            (l = x),
            (h = g)
        }
        if (v.done) return t(o, h), b
        if (null === h) {
          for (; !v.done; f++, v = c.next())
            null !== (v = s(o, v.value, p)) &&
              ((i = a(v, i, f)), null === l ? (b = v) : (l.sibling = v), (l = v))
          return b
        }
        for (h = r(o, h); !v.done; f++, v = c.next())
          null !== (v = m(h, o, f, v.value, p)) &&
            (n && null !== v.alternate && h.delete(null === v.key ? f : v.key),
            (i = a(v, i, f)),
            null === l ? (b = v) : (l.sibling = v),
            (l = v))
        return (
          n &&
            h.forEach(function(n) {
              return e(o, n)
            }),
          b
        )
      }
      return function(n, r, a, c) {
        var p = 'object' == typeof a && null !== a && a.type === le && null === a.key
        p && (a = a.props.children)
        var b = 'object' == typeof a && null !== a
        if (b)
          switch (a.$$typeof) {
            case pe:
              n: {
                for (b = a.key, p = r; null !== p; ) {
                  if (p.key === b) {
                    if (10 === p.tag ? a.type === le : p.type === a.type) {
                      t(n, p.sibling),
                        ((r = o(p, a.type === le ? a.props.children : a.props, c)).ref = da(
                          n,
                          p,
                          a,
                        )),
                        (r.return = n),
                        (n = r)
                      break n
                    }
                    t(n, p)
                    break
                  }
                  e(n, p), (p = p.sibling)
                }
                a.type === le
                  ? (((r = _o(a.props.children, n.mode, c, a.key)).return = n), (n = r))
                  : (((c = Mo(a, n.mode, c)).ref = da(n, r, a)), (c.return = n), (n = c))
              }
              return i(n)
            case be:
              n: {
                for (p = a.key; null !== r; ) {
                  if (r.key === p) {
                    if (
                      4 === r.tag &&
                      r.stateNode.containerInfo === a.containerInfo &&
                      r.stateNode.implementation === a.implementation
                    ) {
                      t(n, r.sibling), ((r = o(r, a.children || [], c)).return = n), (n = r)
                      break n
                    }
                    t(n, r)
                    break
                  }
                  e(n, r), (r = r.sibling)
                }
                ;((r = Eo(a, n.mode, c)).return = n), (n = r)
              }
              return i(n)
          }
        if ('string' == typeof a || 'number' == typeof a)
          return (
            (a = '' + a),
            null !== r && 6 === r.tag
              ? (t(n, r.sibling), ((r = o(r, a, c)).return = n), (n = r))
              : (t(n, r), ((r = Ho(a, n.mode, c)).return = n), (n = r)),
            i(n)
          )
        if (sa(a)) return h(n, r, a, c)
        if (xe(a)) return f(n, r, a, c)
        if ((b && ua(n, a), void 0 === a && !p))
          switch (n.tag) {
            case 2:
            case 1:
              d('152', (c = n.type).displayName || c.name || 'Component')
          }
        return t(n, r)
      }
    }
    var ha = ma(!0),
      fa = ma(!1),
      ga = null,
      va = null,
      xa = !1
    function za(n, e) {
      var t = new wo(5, null, null, 0)
      ;(t.type = 'DELETED'),
        (t.stateNode = e),
        (t.return = n),
        (t.effectTag = 8),
        null !== n.lastEffect
          ? ((n.lastEffect.nextEffect = t), (n.lastEffect = t))
          : (n.firstEffect = n.lastEffect = t)
    }
    function ka(n, e) {
      switch (n.tag) {
        case 5:
          var t = n.type
          return (
            null !==
              (e = 1 !== e.nodeType || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e) &&
            ((n.stateNode = e), !0)
          )
        case 6:
          return (
            null !== (e = '' === n.pendingProps || 3 !== e.nodeType ? null : e) &&
            ((n.stateNode = e), !0)
          )
        default:
          return !1
      }
    }
    function wa(n) {
      if (xa) {
        var e = va
        if (e) {
          var t = e
          if (!ka(n, e)) {
            if (!(e = to(t)) || !ka(n, e)) return (n.effectTag |= 2), (xa = !1), void (ga = n)
            za(ga, t)
          }
          ;(ga = n), (va = ro(e))
        } else (n.effectTag |= 2), (xa = !1), (ga = n)
      }
    }
    function ya(n) {
      for (n = n.return; null !== n && 5 !== n.tag && 3 !== n.tag; ) n = n.return
      ga = n
    }
    function Ma(n) {
      if (n !== ga) return !1
      if (!xa) return ya(n), (xa = !0), !1
      var e = n.type
      if (5 !== n.tag || ('head' !== e && 'body' !== e && !Zr(e, n.memoizedProps)))
        for (e = va; e; ) za(n, e), (e = to(e))
      return ya(n), (va = ga ? to(n.stateNode) : null), !0
    }
    function _a() {
      ;(va = ga = null), (xa = !1)
    }
    function Ha(n, e, t) {
      Ea(n, e, t, e.expirationTime)
    }
    function Ea(n, e, t, r) {
      e.child = null === n ? fa(e, null, t, r) : ha(e, n.child, t, r)
    }
    function Va(n, e) {
      var t = e.ref
      ;((null === n && null !== t) || (null !== n && n.ref !== t)) && (e.effectTag |= 128)
    }
    function Ca(n, e, t, r, o) {
      Va(n, e)
      var a = 0 != (64 & e.effectTag)
      if (!t && !a) return r && ko(e, !1), Ta(n, e)
      ;(t = e.stateNode), (ie.current = e)
      var i = a ? null : t.render()
      return (
        (e.effectTag |= 1),
        a && (Ea(n, e, null, o), (e.child = null)),
        Ea(n, e, i, o),
        (e.memoizedState = t.state),
        (e.memoizedProps = t.props),
        r && ko(e, !0),
        e.child
      )
    }
    function La(n) {
      var e = n.stateNode
      e.pendingContext
        ? vo(0, e.pendingContext, e.pendingContext !== e.context)
        : e.context && vo(0, e.context, !1),
        ra(n, e.containerInfo)
    }
    function Aa(n, e, t, r) {
      var o = n.child
      for (null !== o && (o.return = n); null !== o; ) {
        switch (o.tag) {
          case 12:
            var a = 0 | o.stateNode
            if (o.type === e && 0 != (a & t)) {
              for (a = o; null !== a; ) {
                var i = a.alternate
                if (0 === a.expirationTime || a.expirationTime > r)
                  (a.expirationTime = r),
                    null !== i &&
                      (0 === i.expirationTime || i.expirationTime > r) &&
                      (i.expirationTime = r)
                else {
                  if (null === i || !(0 === i.expirationTime || i.expirationTime > r)) break
                  i.expirationTime = r
                }
                a = a.return
              }
              a = null
            } else a = o.child
            break
          case 13:
            a = o.type === n.type ? null : o.child
            break
          default:
            a = o.child
        }
        if (null !== a) a.return = o
        else
          for (a = o; null !== a; ) {
            if (a === n) {
              a = null
              break
            }
            if (null !== (o = a.sibling)) {
              ;(o.return = a.return), (a = o)
              break
            }
            a = a.return
          }
        o = a
      }
    }
    function Ta(n, e) {
      if ((null !== n && e.child !== n.child && d('153'), null !== e.child)) {
        var t = yo((n = e.child), n.pendingProps, n.expirationTime)
        for (e.child = t, t.return = e; null !== n.sibling; )
          (n = n.sibling), ((t = t.sibling = yo(n, n.pendingProps, n.expirationTime)).return = e)
        t.sibling = null
      }
      return e.child
    }
    function Sa(n, e, t) {
      if (0 === e.expirationTime || e.expirationTime > t) {
        switch (e.tag) {
          case 3:
            La(e)
            break
          case 2:
            zo(e)
            break
          case 4:
            ra(e, e.stateNode.containerInfo)
            break
          case 13:
            $o(e)
        }
        return null
      }
      switch (e.tag) {
        case 0:
          null !== n && d('155')
          var r = e.type,
            o = e.pendingProps,
            a = uo(e)
          return (
            (r = r(o, (a = mo(e, a)))),
            (e.effectTag |= 1),
            'object' == typeof r &&
            null !== r &&
            'function' == typeof r.render &&
            void 0 === r.$$typeof
              ? ((a = e.type),
                (e.tag = 2),
                (e.memoizedState = null !== r.state && void 0 !== r.state ? r.state : null),
                'function' == typeof (a = a.getDerivedStateFromProps) && ia(e, a, o),
                (o = zo(e)),
                (r.updater = ca),
                (e.stateNode = r),
                (r._reactInternalFiber = e),
                la(e, t),
                (n = Ca(n, e, !0, o, t)))
              : ((e.tag = 1), Ha(n, e, r), (e.memoizedProps = o), (n = e.child)),
            n
          )
        case 1:
          return (
            (o = e.type),
            (t = e.pendingProps),
            lo.current || e.memoizedProps !== t
              ? ((o = o(t, (r = mo(e, (r = uo(e)))))),
                (e.effectTag |= 1),
                Ha(n, e, o),
                (e.memoizedProps = t),
                (n = e.child))
              : (n = Ta(n, e)),
            n
          )
        case 2:
          if (((o = zo(e)), null === n))
            if (null === e.stateNode) {
              var i = e.pendingProps,
                c = e.type
              r = uo(e)
              var p = 2 === e.tag && null != e.type.contextTypes
              ;(i = new c(i, (a = p ? mo(e, r) : s))),
                (e.memoizedState = null !== i.state && void 0 !== i.state ? i.state : null),
                (i.updater = ca),
                (e.stateNode = i),
                (i._reactInternalFiber = e),
                p &&
                  (((p = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = r),
                  (p.__reactInternalMemoizedMaskedChildContext = a)),
                la(e, t),
                (r = !0)
            } else {
              ;(c = e.type),
                (r = e.stateNode),
                (p = e.memoizedProps),
                (a = e.pendingProps),
                (r.props = p)
              var b = r.context
              i = mo(e, (i = uo(e)))
              var l = c.getDerivedStateFromProps
              ;(c = 'function' == typeof l || 'function' == typeof r.getSnapshotBeforeUpdate) ||
                ('function' != typeof r.UNSAFE_componentWillReceiveProps &&
                  'function' != typeof r.componentWillReceiveProps) ||
                ((p !== a || b !== i) && ba(e, r, a, i)),
                (Oo = !1)
              var u = e.memoizedState
              b = r.state = u
              var m = e.updateQueue
              null !== m && (Fo(e, m, a, r, t), (b = e.memoizedState)),
                p !== a || u !== b || lo.current || Oo
                  ? ('function' == typeof l && (ia(e, l, a), (b = e.memoizedState)),
                    (p = Oo || pa(e, p, a, u, b, i))
                      ? (c ||
                          ('function' != typeof r.UNSAFE_componentWillMount &&
                            'function' != typeof r.componentWillMount) ||
                          ('function' == typeof r.componentWillMount && r.componentWillMount(),
                          'function' == typeof r.UNSAFE_componentWillMount &&
                            r.UNSAFE_componentWillMount()),
                        'function' == typeof r.componentDidMount && (e.effectTag |= 4))
                      : ('function' == typeof r.componentDidMount && (e.effectTag |= 4),
                        (e.memoizedProps = a),
                        (e.memoizedState = b)),
                    (r.props = a),
                    (r.state = b),
                    (r.context = i),
                    (r = p))
                  : ('function' == typeof r.componentDidMount && (e.effectTag |= 4), (r = !1))
            }
          else
            (c = e.type),
              (r = e.stateNode),
              (a = e.memoizedProps),
              (p = e.pendingProps),
              (r.props = a),
              (b = r.context),
              (i = mo(e, (i = uo(e)))),
              (c =
                'function' == typeof (l = c.getDerivedStateFromProps) ||
                'function' == typeof r.getSnapshotBeforeUpdate) ||
                ('function' != typeof r.UNSAFE_componentWillReceiveProps &&
                  'function' != typeof r.componentWillReceiveProps) ||
                ((a !== p || b !== i) && ba(e, r, p, i)),
              (Oo = !1),
              (b = e.memoizedState),
              (u = r.state = b),
              null !== (m = e.updateQueue) && (Fo(e, m, p, r, t), (u = e.memoizedState)),
              a !== p || b !== u || lo.current || Oo
                ? ('function' == typeof l && (ia(e, l, p), (u = e.memoizedState)),
                  (l = Oo || pa(e, a, p, b, u, i))
                    ? (c ||
                        ('function' != typeof r.UNSAFE_componentWillUpdate &&
                          'function' != typeof r.componentWillUpdate) ||
                        ('function' == typeof r.componentWillUpdate &&
                          r.componentWillUpdate(p, u, i),
                        'function' == typeof r.UNSAFE_componentWillUpdate &&
                          r.UNSAFE_componentWillUpdate(p, u, i)),
                      'function' == typeof r.componentDidUpdate && (e.effectTag |= 4),
                      'function' == typeof r.getSnapshotBeforeUpdate && (e.effectTag |= 256))
                    : ('function' != typeof r.componentDidUpdate ||
                        (a === n.memoizedProps && b === n.memoizedState) ||
                        (e.effectTag |= 4),
                      'function' != typeof r.getSnapshotBeforeUpdate ||
                        (a === n.memoizedProps && b === n.memoizedState) ||
                        (e.effectTag |= 256),
                      (e.memoizedProps = p),
                      (e.memoizedState = u)),
                  (r.props = p),
                  (r.state = u),
                  (r.context = i),
                  (r = l))
                : ('function' != typeof r.componentDidUpdate ||
                    (a === n.memoizedProps && b === n.memoizedState) ||
                    (e.effectTag |= 4),
                  'function' != typeof r.getSnapshotBeforeUpdate ||
                    (a === n.memoizedProps && b === n.memoizedState) ||
                    (e.effectTag |= 256),
                  (r = !1))
          return Ca(n, e, r, o, t)
        case 3:
          return (
            La(e),
            null !== (o = e.updateQueue)
              ? ((r = null !== (r = e.memoizedState) ? r.element : null),
                Fo(e, o, e.pendingProps, null, t),
                (o = e.memoizedState.element) === r
                  ? (_a(), (n = Ta(n, e)))
                  : ((r = e.stateNode),
                    (r = (null === n || null === n.child) && r.hydrate) &&
                      ((va = ro(e.stateNode.containerInfo)), (ga = e), (r = xa = !0)),
                    r ? ((e.effectTag |= 2), (e.child = fa(e, null, o, t))) : (_a(), Ha(n, e, o)),
                    (n = e.child)))
              : (_a(), (n = Ta(n, e))),
            n
          )
        case 5:
          return (
            ta(ea.current),
            (o = ta(Jo.current)) !== (r = Cr(o, e.type)) && (po(na, e), po(Jo, r)),
            null === n && wa(e),
            (o = e.type),
            (p = e.memoizedProps),
            (r = e.pendingProps),
            (a = null !== n ? n.memoizedProps : null),
            lo.current ||
            p !== r ||
            ((p = 1 & e.mode && !!r.hidden) && (e.expirationTime = 1073741823),
            p && 1073741823 === t)
              ? ((p = r.children),
                Zr(o, r) ? (p = null) : a && Zr(o, a) && (e.effectTag |= 16),
                Va(n, e),
                1073741823 !== t && 1 & e.mode && r.hidden
                  ? ((e.expirationTime = 1073741823), (e.memoizedProps = r), (n = null))
                  : (Ha(n, e, p), (e.memoizedProps = r), (n = e.child)))
              : (n = Ta(n, e)),
            n
          )
        case 6:
          return null === n && wa(e), (e.memoizedProps = e.pendingProps), null
        case 16:
          return null
        case 4:
          return (
            ra(e, e.stateNode.containerInfo),
            (o = e.pendingProps),
            lo.current || e.memoizedProps !== o
              ? (null === n ? (e.child = ha(e, null, o, t)) : Ha(n, e, o),
                (e.memoizedProps = o),
                (n = e.child))
              : (n = Ta(n, e)),
            n
          )
        case 14:
          return (
            (o = e.type.render),
            (t = e.pendingProps),
            (r = e.ref),
            lo.current || e.memoizedProps !== t || r !== (null !== n ? n.ref : null)
              ? (Ha(n, e, (o = o(t, r))), (e.memoizedProps = t), (n = e.child))
              : (n = Ta(n, e)),
            n
          )
        case 10:
          return (
            (t = e.pendingProps),
            lo.current || e.memoizedProps !== t
              ? (Ha(n, e, t), (e.memoizedProps = t), (n = e.child))
              : (n = Ta(n, e)),
            n
          )
        case 11:
          return (
            (t = e.pendingProps.children),
            lo.current || (null !== t && e.memoizedProps !== t)
              ? (Ha(n, e, t), (e.memoizedProps = t), (n = e.child))
              : (n = Ta(n, e)),
            n
          )
        case 15:
          return (
            (t = e.pendingProps),
            e.memoizedProps === t
              ? (n = Ta(n, e))
              : (Ha(n, e, t.children), (e.memoizedProps = t), (n = e.child)),
            n
          )
        case 13:
          return (function(n, e, t) {
            var r = e.type._context,
              o = e.pendingProps,
              a = e.memoizedProps,
              i = !0
            if (lo.current) i = !1
            else if (a === o) return (e.stateNode = 0), $o(e), Ta(n, e)
            var c = o.value
            if (((e.memoizedProps = o), null === a)) c = 1073741823
            else if (a.value === o.value) {
              if (a.children === o.children && i) return (e.stateNode = 0), $o(e), Ta(n, e)
              c = 0
            } else {
              var p = a.value
              if ((p === c && (0 !== p || 1 / p == 1 / c)) || (p != p && c != c)) {
                if (a.children === o.children && i) return (e.stateNode = 0), $o(e), Ta(n, e)
                c = 0
              } else if (
                ((c =
                  'function' == typeof r._calculateChangedBits
                    ? r._calculateChangedBits(p, c)
                    : 1073741823),
                0 == (c |= 0))
              ) {
                if (a.children === o.children && i) return (e.stateNode = 0), $o(e), Ta(n, e)
              } else Aa(e, r, c, t)
            }
            return (e.stateNode = c), $o(e), Ha(n, e, o.children), e.child
          })(n, e, t)
        case 12:
          n: if (
            ((r = e.type),
            (a = e.pendingProps),
            (p = e.memoizedProps),
            (o = r._currentValue),
            (i = r._changedBits),
            lo.current || 0 !== i || p !== a)
          ) {
            if (
              ((e.memoizedProps = a),
              (void 0 !== (c = a.unstable_observedBits) && null !== c) || (c = 1073741823),
              (e.stateNode = c),
              0 != (i & c))
            )
              Aa(e, r, i, t)
            else if (p === a) {
              n = Ta(n, e)
              break n
            }
            ;(t = (t = a.children)(o)), (e.effectTag |= 1), Ha(n, e, t), (n = e.child)
          } else n = Ta(n, e)
          return n
        default:
          d('156')
      }
    }
    function Oa(n) {
      n.effectTag |= 4
    }
    var Pa = void 0,
      Ia = void 0,
      Da = void 0
    function Ra(n, e) {
      var t = e.pendingProps
      switch (e.tag) {
        case 1:
          return null
        case 2:
          return fo(e), null
        case 3:
          oa(), go()
          var r = e.stateNode
          return (
            r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
            (null !== n && null !== n.child) || (Ma(e), (e.effectTag &= -3)),
            Pa(e),
            null
          )
        case 5:
          aa(e), (r = ta(ea.current))
          var o = e.type
          if (null !== n && null != e.stateNode) {
            var a = n.memoizedProps,
              i = e.stateNode,
              c = ta(Jo.current)
            ;(i = Wr(i, o, a, t, r)),
              Ia(n, e, i, o, a, t, r, c),
              n.ref !== e.ref && (e.effectTag |= 128)
          } else {
            if (!t) return null === e.stateNode && d('166'), null
            if (((n = ta(Jo.current)), Ma(e)))
              (t = e.stateNode),
                (o = e.type),
                (a = e.memoizedProps),
                (t[B] = e),
                (t[j] = a),
                (r = qr(t, o, a, n, r)),
                (e.updateQueue = r),
                null !== r && Oa(e)
            else {
              ;((n = Br(o, t, r, n))[B] = e), (n[j] = t)
              n: for (a = e.child; null !== a; ) {
                if (5 === a.tag || 6 === a.tag) n.appendChild(a.stateNode)
                else if (4 !== a.tag && null !== a.child) {
                  ;(a.child.return = a), (a = a.child)
                  continue
                }
                if (a === e) break
                for (; null === a.sibling; ) {
                  if (null === a.return || a.return === e) break n
                  a = a.return
                }
                ;(a.sibling.return = a.return), (a = a.sibling)
              }
              Fr(n, o, t, r), Qr(o, t) && Oa(e), (e.stateNode = n)
            }
            null !== e.ref && (e.effectTag |= 128)
          }
          return null
        case 6:
          if (n && null != e.stateNode) Da(n, e, n.memoizedProps, t)
          else {
            if ('string' != typeof t) return null === e.stateNode && d('166'), null
            ;(r = ta(ea.current)),
              ta(Jo.current),
              Ma(e)
                ? ((r = e.stateNode), (t = e.memoizedProps), (r[B] = e), Gr(r, t) && Oa(e))
                : (((r = jr(t, r))[B] = e), (e.stateNode = r))
          }
          return null
        case 14:
        case 16:
        case 10:
        case 11:
        case 15:
          return null
        case 4:
          return oa(), Pa(e), null
        case 13:
          return Qo(e), null
        case 12:
          return null
        case 0:
          d('167')
        default:
          d('156')
      }
    }
    function Na(n, e) {
      var t = e.source
      null === e.stack && null !== t && ke(t),
        null !== t && ze(t),
        (e = e.value),
        null !== n && 2 === n.tag && ze(n)
      try {
        ;(e && e.suppressReactErrorLogging) || console.error(e)
      } catch (n) {
        ;(n && n.suppressReactErrorLogging) || console.error(n)
      }
    }
    function Ua(n) {
      var e = n.ref
      if (null !== e)
        if ('function' == typeof e)
          try {
            e(null)
          } catch (e) {
            hi(n, e)
          }
        else e.current = null
    }
    function Ba(n) {
      switch ((So(n), n.tag)) {
        case 2:
          Ua(n)
          var e = n.stateNode
          if ('function' == typeof e.componentWillUnmount)
            try {
              ;(e.props = n.memoizedProps), (e.state = n.memoizedState), e.componentWillUnmount()
            } catch (e) {
              hi(n, e)
            }
          break
        case 5:
          Ua(n)
          break
        case 4:
          Wa(n)
      }
    }
    function ja(n) {
      return 5 === n.tag || 3 === n.tag || 4 === n.tag
    }
    function Fa(n) {
      n: {
        for (var e = n.return; null !== e; ) {
          if (ja(e)) {
            var t = e
            break n
          }
          e = e.return
        }
        d('160'), (t = void 0)
      }
      var r = (e = void 0)
      switch (t.tag) {
        case 5:
          ;(e = t.stateNode), (r = !1)
          break
        case 3:
        case 4:
          ;(e = t.stateNode.containerInfo), (r = !0)
          break
        default:
          d('161')
      }
      16 & t.effectTag && (Tr(e, ''), (t.effectTag &= -17))
      n: e: for (t = n; ; ) {
        for (; null === t.sibling; ) {
          if (null === t.return || ja(t.return)) {
            t = null
            break n
          }
          t = t.return
        }
        for (t.sibling.return = t.return, t = t.sibling; 5 !== t.tag && 6 !== t.tag; ) {
          if (2 & t.effectTag) continue e
          if (null === t.child || 4 === t.tag) continue e
          ;(t.child.return = t), (t = t.child)
        }
        if (!(2 & t.effectTag)) {
          t = t.stateNode
          break n
        }
      }
      for (var o = n; ; ) {
        if (5 === o.tag || 6 === o.tag)
          if (t)
            if (r) {
              var a = e,
                i = o.stateNode,
                c = t
              8 === a.nodeType ? a.parentNode.insertBefore(i, c) : a.insertBefore(i, c)
            } else e.insertBefore(o.stateNode, t)
          else
            r
              ? ((a = e),
                (i = o.stateNode),
                8 === a.nodeType ? a.parentNode.insertBefore(i, a) : a.appendChild(i))
              : e.appendChild(o.stateNode)
        else if (4 !== o.tag && null !== o.child) {
          ;(o.child.return = o), (o = o.child)
          continue
        }
        if (o === n) break
        for (; null === o.sibling; ) {
          if (null === o.return || o.return === n) return
          o = o.return
        }
        ;(o.sibling.return = o.return), (o = o.sibling)
      }
    }
    function Wa(n) {
      for (var e = n, t = !1, r = void 0, o = void 0; ; ) {
        if (!t) {
          t = e.return
          n: for (;;) {
            switch ((null === t && d('160'), t.tag)) {
              case 5:
                ;(r = t.stateNode), (o = !1)
                break n
              case 3:
              case 4:
                ;(r = t.stateNode.containerInfo), (o = !0)
                break n
            }
            t = t.return
          }
          t = !0
        }
        if (5 === e.tag || 6 === e.tag) {
          n: for (var a = e, i = a; ; )
            if ((Ba(i), null !== i.child && 4 !== i.tag)) (i.child.return = i), (i = i.child)
            else {
              if (i === a) break
              for (; null === i.sibling; ) {
                if (null === i.return || i.return === a) break n
                i = i.return
              }
              ;(i.sibling.return = i.return), (i = i.sibling)
            }
          o
            ? ((a = r),
              (i = e.stateNode),
              8 === a.nodeType ? a.parentNode.removeChild(i) : a.removeChild(i))
            : r.removeChild(e.stateNode)
        } else if ((4 === e.tag ? (r = e.stateNode.containerInfo) : Ba(e), null !== e.child)) {
          ;(e.child.return = e), (e = e.child)
          continue
        }
        if (e === n) break
        for (; null === e.sibling; ) {
          if (null === e.return || e.return === n) return
          4 === (e = e.return).tag && (t = !1)
        }
        ;(e.sibling.return = e.return), (e = e.sibling)
      }
    }
    function Ka(n, e) {
      switch (e.tag) {
        case 2:
          break
        case 5:
          var t = e.stateNode
          if (null != t) {
            var r = e.memoizedProps
            n = null !== n ? n.memoizedProps : r
            var o = e.type,
              a = e.updateQueue
            ;(e.updateQueue = null), null !== a && ((t[j] = r), Kr(t, a, o, n, r))
          }
          break
        case 6:
          null === e.stateNode && d('162'), (e.stateNode.nodeValue = e.memoizedProps)
          break
        case 3:
        case 15:
        case 16:
          break
        default:
          d('163')
      }
    }
    function qa(n, e, t) {
      ;((t = Do(t)).tag = 3), (t.payload = { element: null })
      var r = e.value
      return (
        (t.callback = function() {
          Zi(r), Na(n, e)
        }),
        t
      )
    }
    function Ga(n, e, t) {
      ;(t = Do(t)).tag = 3
      var r = n.stateNode
      return (
        null !== r &&
          'function' == typeof r.componentDidCatch &&
          (t.callback = function() {
            null === li ? (li = new Set([this])) : li.add(this)
            var t = e.value,
              r = e.stack
            Na(n, e), this.componentDidCatch(t, { componentStack: null !== r ? r : '' })
          }),
        t
      )
    }
    function Ya(n, e, t, r, o, a) {
      ;(t.effectTag |= 512), (t.firstEffect = t.lastEffect = null), (r = qo(r, t)), (n = e)
      do {
        switch (n.tag) {
          case 3:
            return (n.effectTag |= 1024), void Uo(n, (r = qa(n, r, a)), a)
          case 2:
            if (
              ((e = r),
              (t = n.stateNode),
              0 == (64 & n.effectTag) &&
                null !== t &&
                'function' == typeof t.componentDidCatch &&
                (null === li || !li.has(t)))
            )
              return (n.effectTag |= 1024), void Uo(n, (r = Ga(n, e, a)), a)
        }
        n = n.return
      } while (null !== n)
    }
    function Xa(n) {
      switch (n.tag) {
        case 2:
          fo(n)
          var e = n.effectTag
          return 1024 & e ? ((n.effectTag = (-1025 & e) | 64), n) : null
        case 3:
          return oa(), go(), 1024 & (e = n.effectTag) ? ((n.effectTag = (-1025 & e) | 64), n) : null
        case 5:
          return aa(n), null
        case 16:
          return 1024 & (e = n.effectTag) ? ((n.effectTag = (-1025 & e) | 64), n) : null
        case 4:
          return oa(), null
        case 13:
          return Qo(n), null
        default:
          return null
      }
    }
    ;(Pa = function() {}),
      (Ia = function(n, e, t) {
        ;(e.updateQueue = t) && Oa(e)
      }),
      (Da = function(n, e, t, r) {
        t !== r && Oa(e)
      })
    var $a = Jr(),
      Qa = 2,
      Za = $a,
      Ja = 0,
      ni = 0,
      ei = !1,
      ti = null,
      ri = null,
      oi = 0,
      ai = -1,
      ii = !1,
      ci = null,
      pi = !1,
      bi = !1,
      li = null
    function si() {
      if (null !== ti)
        for (var n = ti.return; null !== n; ) {
          var e = n
          switch (e.tag) {
            case 2:
              fo(e)
              break
            case 3:
              oa(), go()
              break
            case 5:
              aa(e)
              break
            case 4:
              oa()
              break
            case 13:
              Qo(e)
          }
          n = n.return
        }
      ;(ri = null), (oi = 0), (ai = -1), (ii = !1), (ti = null), (bi = !1)
    }
    function di(n) {
      for (;;) {
        var e = n.alternate,
          t = n.return,
          r = n.sibling
        if (0 == (512 & n.effectTag)) {
          e = Ra(e, n)
          var o = n
          if (1073741823 === oi || 1073741823 !== o.expirationTime) {
            var a = 0
            switch (o.tag) {
              case 3:
              case 2:
                var i = o.updateQueue
                null !== i && (a = i.expirationTime)
            }
            for (i = o.child; null !== i; )
              0 !== i.expirationTime && (0 === a || a > i.expirationTime) && (a = i.expirationTime),
                (i = i.sibling)
            o.expirationTime = a
          }
          if (null !== e) return e
          if (
            (null !== t &&
              0 == (512 & t.effectTag) &&
              (null === t.firstEffect && (t.firstEffect = n.firstEffect),
              null !== n.lastEffect &&
                (null !== t.lastEffect && (t.lastEffect.nextEffect = n.firstEffect),
                (t.lastEffect = n.lastEffect)),
              1 < n.effectTag &&
                (null !== t.lastEffect ? (t.lastEffect.nextEffect = n) : (t.firstEffect = n),
                (t.lastEffect = n))),
            null !== r)
          )
            return r
          if (null === t) {
            bi = !0
            break
          }
          n = t
        } else {
          if (null !== (n = Xa(n))) return (n.effectTag &= 511), n
          if (
            (null !== t && ((t.firstEffect = t.lastEffect = null), (t.effectTag |= 512)),
            null !== r)
          )
            return r
          if (null === t) break
          n = t
        }
      }
      return null
    }
    function ui(n) {
      var e = Sa(n.alternate, n, oi)
      return null === e && (e = di(n)), (ie.current = null), e
    }
    function mi(n, e, t) {
      ei && d('243'),
        (ei = !0),
        (e === oi && n === ri && null !== ti) ||
          (si(),
          (oi = e),
          (ai = -1),
          (ti = yo((ri = n).current, null, oi)),
          (n.pendingCommitExpirationTime = 0))
      var r = !1
      for (ii = !t || oi <= Qa; ; ) {
        try {
          if (t) for (; null !== ti && !Qi(); ) ti = ui(ti)
          else for (; null !== ti; ) ti = ui(ti)
        } catch (e) {
          if (null === ti) (r = !0), Zi(e)
          else {
            null === ti && d('271')
            var o = (t = ti).return
            if (null === o) {
              ;(r = !0), Zi(e)
              break
            }
            Ya(n, o, t, e, 0, oi), (ti = di(t))
          }
        }
        break
      }
      if (((ei = !1), r)) return null
      if (null === ti) {
        if (bi) return (n.pendingCommitExpirationTime = e), n.current.alternate
        ii && d('262'),
          0 <= ai &&
            setTimeout(function() {
              var e = n.current.expirationTime
              0 !== e &&
                (0 === n.remainingExpirationTime || n.remainingExpirationTime < e) &&
                ji(n, e)
            }, ai),
          (function(n) {
            null === Ei && d('246'), (Ei.remainingExpirationTime = n)
          })(n.current.expirationTime)
      }
      return null
    }
    function hi(n, e) {
      var t
      n: {
        for (ei && !pi && d('263'), t = n.return; null !== t; ) {
          switch (t.tag) {
            case 2:
              var r = t.stateNode
              if (
                'function' == typeof t.type.getDerivedStateFromCatch ||
                ('function' == typeof r.componentDidCatch && (null === li || !li.has(r)))
              ) {
                No(t, (n = Ga(t, (n = qo(e, n)), 1)), 1), vi(t, 1), (t = void 0)
                break n
              }
              break
            case 3:
              No(t, (n = qa(t, (n = qo(e, n)), 1)), 1), vi(t, 1), (t = void 0)
              break n
          }
          t = t.return
        }
        3 === n.tag && (No(n, (t = qa(n, (t = qo(e, n)), 1)), 1), vi(n, 1)), (t = void 0)
      }
      return t
    }
    function fi() {
      var n = 2 + 25 * (1 + (((xi() - 2 + 500) / 25) | 0))
      return n <= Ja && (n = Ja + 1), (Ja = n)
    }
    function gi(n, e) {
      return (
        (n =
          0 !== ni
            ? ni
            : ei
              ? pi
                ? 1
                : oi
              : 1 & e.mode
                ? Ii
                  ? 2 + 10 * (1 + (((n - 2 + 15) / 10) | 0))
                  : 2 + 25 * (1 + (((n - 2 + 500) / 25) | 0))
                : 1),
        Ii && (0 === Ci || n > Ci) && (Ci = n),
        n
      )
    }
    function vi(n, e) {
      for (; null !== n; ) {
        if (
          ((0 === n.expirationTime || n.expirationTime > e) && (n.expirationTime = e),
          null !== n.alternate &&
            (0 === n.alternate.expirationTime || n.alternate.expirationTime > e) &&
            (n.alternate.expirationTime = e),
          null === n.return)
        ) {
          if (3 !== n.tag) break
          var t = n.stateNode
          !ei && 0 !== oi && e < oi && si()
          var r = t.current.expirationTime
          ;(ei && !pi && ri === t) || ji(t, r), Ni > Ri && d('185')
        }
        n = n.return
      }
    }
    function xi() {
      return (Za = Jr() - $a), (Qa = 2 + ((Za / 10) | 0))
    }
    function zi(n) {
      var e = ni
      ni = 2 + 25 * (1 + (((xi() - 2 + 500) / 25) | 0))
      try {
        return n()
      } finally {
        ni = e
      }
    }
    function ki(n, e, t, r, o) {
      var a = ni
      ni = 1
      try {
        return n(e, t, r, o)
      } finally {
        ni = a
      }
    }
    var wi = null,
      yi = null,
      Mi = 0,
      _i = void 0,
      Hi = !1,
      Ei = null,
      Vi = 0,
      Ci = 0,
      Li = !1,
      Ai = !1,
      Ti = null,
      Si = null,
      Oi = !1,
      Pi = !1,
      Ii = !1,
      Di = null,
      Ri = 1e3,
      Ni = 0,
      Ui = 1
    function Bi(n) {
      if (0 !== Mi) {
        if (n > Mi) return
        null !== _i && eo(_i)
      }
      var e = Jr() - $a
      ;(Mi = n), (_i = no(Wi, { timeout: 10 * (n - 2) - e }))
    }
    function ji(n, e) {
      if (null === n.nextScheduledRoot)
        (n.remainingExpirationTime = e),
          null === yi
            ? ((wi = yi = n), (n.nextScheduledRoot = n))
            : ((yi = yi.nextScheduledRoot = n).nextScheduledRoot = wi)
      else {
        var t = n.remainingExpirationTime
        ;(0 === t || e < t) && (n.remainingExpirationTime = e)
      }
      Hi || (Oi ? Pi && ((Ei = n), (Vi = 1), Xi(n, 1, !1)) : 1 === e ? Ki() : Bi(e))
    }
    function Fi() {
      var n = 0,
        e = null
      if (null !== yi)
        for (var t = yi, r = wi; null !== r; ) {
          var o = r.remainingExpirationTime
          if (0 === o) {
            if (((null === t || null === yi) && d('244'), r === r.nextScheduledRoot)) {
              wi = yi = r.nextScheduledRoot = null
              break
            }
            if (r === wi)
              (wi = o = r.nextScheduledRoot),
                (yi.nextScheduledRoot = o),
                (r.nextScheduledRoot = null)
            else {
              if (r === yi) {
                ;((yi = t).nextScheduledRoot = wi), (r.nextScheduledRoot = null)
                break
              }
              ;(t.nextScheduledRoot = r.nextScheduledRoot), (r.nextScheduledRoot = null)
            }
            r = t.nextScheduledRoot
          } else {
            if (((0 === n || o < n) && ((n = o), (e = r)), r === yi)) break
            ;(t = r), (r = r.nextScheduledRoot)
          }
        }
      null !== (t = Ei) && t === e && 1 === n ? Ni++ : (Ni = 0), (Ei = e), (Vi = n)
    }
    function Wi(n) {
      qi(0, !0, n)
    }
    function Ki() {
      qi(1, !1, null)
    }
    function qi(n, e, t) {
      if (((Si = t), Fi(), e))
        for (; null !== Ei && 0 !== Vi && (0 === n || n >= Vi) && (!Li || xi() >= Vi); )
          xi(), Xi(Ei, Vi, !Li), Fi()
      else for (; null !== Ei && 0 !== Vi && (0 === n || n >= Vi); ) Xi(Ei, Vi, !1), Fi()
      null !== Si && ((Mi = 0), (_i = null)), 0 !== Vi && Bi(Vi), (Si = null), (Li = !1), Yi()
    }
    function Gi(n, e) {
      Hi && d('253'), (Ei = n), (Vi = e), Xi(n, e, !1), Ki(), Yi()
    }
    function Yi() {
      if (((Ni = 0), null !== Di)) {
        var n = Di
        Di = null
        for (var e = 0; e < n.length; e++) {
          var t = n[e]
          try {
            t._onComplete()
          } catch (n) {
            Ai || ((Ai = !0), (Ti = n))
          }
        }
      }
      if (Ai) throw ((n = Ti), (Ti = null), (Ai = !1), n)
    }
    function Xi(n, e, t) {
      Hi && d('245'),
        (Hi = !0),
        t
          ? null !== (t = n.finishedWork)
            ? $i(n, t, e)
            : null !== (t = mi(n, e, !0)) && (Qi() ? (n.finishedWork = t) : $i(n, t, e))
          : null !== (t = n.finishedWork)
            ? $i(n, t, e)
            : null !== (t = mi(n, e, !1)) && $i(n, t, e),
        (Hi = !1)
    }
    function $i(n, e, t) {
      var r = n.firstBatch
      if (null !== r && r._expirationTime <= t && (null === Di ? (Di = [r]) : Di.push(r), r._defer))
        return (n.finishedWork = e), void (n.remainingExpirationTime = 0)
      if (
        ((n.finishedWork = null),
        (pi = ei = !0),
        (t = e.stateNode).current === e && d('177'),
        0 === (r = t.pendingCommitExpirationTime) && d('261'),
        (t.pendingCommitExpirationTime = 0),
        xi(),
        (ie.current = null),
        1 < e.effectTag)
      )
        if (null !== e.lastEffect) {
          e.lastEffect.nextEffect = e
          var o = e.firstEffect
        } else o = e
      else o = e.firstEffect
      Xr = Lt
      var a = p()
      if (Ft(a)) {
        if ('selectionStart' in a) var i = { start: a.selectionStart, end: a.selectionEnd }
        else
          n: {
            var c = window.getSelection && window.getSelection()
            if (c && 0 !== c.rangeCount) {
              i = c.anchorNode
              var b = c.anchorOffset,
                s = c.focusNode
              c = c.focusOffset
              try {
                i.nodeType, s.nodeType
              } catch (n) {
                i = null
                break n
              }
              var u = 0,
                m = -1,
                h = -1,
                f = 0,
                g = 0,
                v = a,
                x = null
              e: for (;;) {
                for (
                  var z;
                  v !== i || (0 !== b && 3 !== v.nodeType) || (m = u + b),
                    v !== s || (0 !== c && 3 !== v.nodeType) || (h = u + c),
                    3 === v.nodeType && (u += v.nodeValue.length),
                    null !== (z = v.firstChild);

                )
                  (x = v), (v = z)
                for (;;) {
                  if (v === a) break e
                  if (
                    (x === i && ++f === b && (m = u),
                    x === s && ++g === c && (h = u),
                    null !== (z = v.nextSibling))
                  )
                    break
                  x = (v = x).parentNode
                }
                v = z
              }
              i = -1 === m || -1 === h ? null : { start: m, end: h }
            } else i = null
          }
        i = i || { start: 0, end: 0 }
      } else i = null
      for ($r = { focusedElem: a, selectionRange: i }, At(!1), ci = o; null !== ci; ) {
        ;(a = !1), (i = void 0)
        try {
          for (; null !== ci; ) {
            if (256 & ci.effectTag) {
              var k = ci.alternate
              switch ((b = ci).tag) {
                case 2:
                  if (256 & b.effectTag && null !== k) {
                    var w = k.memoizedProps,
                      y = k.memoizedState,
                      M = b.stateNode
                    ;(M.props = b.memoizedProps), (M.state = b.memoizedState)
                    var _ = M.getSnapshotBeforeUpdate(w, y)
                    M.__reactInternalSnapshotBeforeUpdate = _
                  }
                  break
                case 3:
                case 5:
                case 6:
                case 4:
                  break
                default:
                  d('163')
              }
            }
            ci = ci.nextEffect
          }
        } catch (n) {
          ;(a = !0), (i = n)
        }
        a && (null === ci && d('178'), hi(ci, i), null !== ci && (ci = ci.nextEffect))
      }
      for (ci = o; null !== ci; ) {
        ;(k = !1), (w = void 0)
        try {
          for (; null !== ci; ) {
            var H = ci.effectTag
            if ((16 & H && Tr(ci.stateNode, ''), 128 & H)) {
              var E = ci.alternate
              if (null !== E) {
                var V = E.ref
                null !== V && ('function' == typeof V ? V(null) : (V.current = null))
              }
            }
            switch (14 & H) {
              case 2:
                Fa(ci), (ci.effectTag &= -3)
                break
              case 6:
                Fa(ci), (ci.effectTag &= -3), Ka(ci.alternate, ci)
                break
              case 4:
                Ka(ci.alternate, ci)
                break
              case 8:
                Wa((y = ci)),
                  (y.return = null),
                  (y.child = null),
                  y.alternate && ((y.alternate.child = null), (y.alternate.return = null))
            }
            ci = ci.nextEffect
          }
        } catch (n) {
          ;(k = !0), (w = n)
        }
        k && (null === ci && d('178'), hi(ci, w), null !== ci && (ci = ci.nextEffect))
      }
      if (
        ((V = $r),
        (E = p()),
        (H = V.focusedElem),
        (k = V.selectionRange),
        E !== H && l(document.documentElement, H))
      ) {
        null !== k &&
          Ft(H) &&
          ((E = k.start),
          void 0 === (V = k.end) && (V = E),
          'selectionStart' in H
            ? ((H.selectionStart = E), (H.selectionEnd = Math.min(V, H.value.length)))
            : window.getSelection &&
              ((E = window.getSelection()),
              (w = H[hn()].length),
              (V = Math.min(k.start, w)),
              (k = void 0 === k.end ? V : Math.min(k.end, w)),
              !E.extend && V > k && ((w = k), (k = V), (V = w)),
              (w = jt(H, V)),
              (y = jt(H, k)),
              w &&
                y &&
                (1 !== E.rangeCount ||
                  E.anchorNode !== w.node ||
                  E.anchorOffset !== w.offset ||
                  E.focusNode !== y.node ||
                  E.focusOffset !== y.offset) &&
                ((M = document.createRange()).setStart(w.node, w.offset),
                E.removeAllRanges(),
                V > k
                  ? (E.addRange(M), E.extend(y.node, y.offset))
                  : (M.setEnd(y.node, y.offset), E.addRange(M))))),
          (E = [])
        for (V = H; (V = V.parentNode); )
          1 === V.nodeType && E.push({ element: V, left: V.scrollLeft, top: V.scrollTop })
        for ('function' == typeof H.focus && H.focus(), H = 0; H < E.length; H++)
          ((V = E[H]).element.scrollLeft = V.left), (V.element.scrollTop = V.top)
      }
      for ($r = null, At(Xr), Xr = null, t.current = e, ci = o; null !== ci; ) {
        ;(o = !1), (H = void 0)
        try {
          for (E = r; null !== ci; ) {
            var C = ci.effectTag
            if (36 & C) {
              var L = ci.alternate
              switch (((k = E), (V = ci).tag)) {
                case 2:
                  var A = V.stateNode
                  if (4 & V.effectTag)
                    if (null === L)
                      (A.props = V.memoizedProps),
                        (A.state = V.memoizedState),
                        A.componentDidMount()
                    else {
                      var T = L.memoizedProps,
                        S = L.memoizedState
                      ;(A.props = V.memoizedProps),
                        (A.state = V.memoizedState),
                        A.componentDidUpdate(T, S, A.__reactInternalSnapshotBeforeUpdate)
                    }
                  var O = V.updateQueue
                  null !== O &&
                    ((A.props = V.memoizedProps), (A.state = V.memoizedState), Ko(V, O, A))
                  break
                case 3:
                  var P = V.updateQueue
                  if (null !== P) {
                    if (((w = null), null !== V.child))
                      switch (V.child.tag) {
                        case 5:
                          w = V.child.stateNode
                          break
                        case 2:
                          w = V.child.stateNode
                      }
                    Ko(V, P, w)
                  }
                  break
                case 5:
                  var I = V.stateNode
                  null === L && 4 & V.effectTag && Qr(V.type, V.memoizedProps) && I.focus()
                  break
                case 6:
                case 4:
                case 15:
                case 16:
                  break
                default:
                  d('163')
              }
            }
            if (128 & C) {
              V = void 0
              var D = ci.ref
              if (null !== D) {
                var R = ci.stateNode
                switch (ci.tag) {
                  case 5:
                    V = R
                    break
                  default:
                    V = R
                }
                'function' == typeof D ? D(V) : (D.current = V)
              }
            }
            var N = ci.nextEffect
            ;(ci.nextEffect = null), (ci = N)
          }
        } catch (n) {
          ;(o = !0), (H = n)
        }
        o && (null === ci && d('178'), hi(ci, H), null !== ci && (ci = ci.nextEffect))
      }
      ;(ei = pi = !1),
        To(e.stateNode),
        0 === (e = t.current.expirationTime) && (li = null),
        (n.remainingExpirationTime = e)
    }
    function Qi() {
      return !(null === Si || Si.timeRemaining() > Ui) && (Li = !0)
    }
    function Zi(n) {
      null === Ei && d('246'), (Ei.remainingExpirationTime = 0), Ai || ((Ai = !0), (Ti = n))
    }
    function Ji(n, e) {
      var t = Oi
      Oi = !0
      try {
        return n(e)
      } finally {
        ;(Oi = t) || Hi || Ki()
      }
    }
    function nc(n, e) {
      if (Oi && !Pi) {
        Pi = !0
        try {
          return n(e)
        } finally {
          Pi = !1
        }
      }
      return n(e)
    }
    function ec(n, e) {
      Hi && d('187')
      var t = Oi
      Oi = !0
      try {
        return ki(n, e)
      } finally {
        ;(Oi = t), Ki()
      }
    }
    function tc(n, e, t) {
      if (Ii) return n(e, t)
      Oi || Hi || 0 === Ci || (qi(Ci, !1, null), (Ci = 0))
      var r = Ii,
        o = Oi
      Oi = Ii = !0
      try {
        return n(e, t)
      } finally {
        ;(Ii = r), (Oi = o) || Hi || Ki()
      }
    }
    function rc(n) {
      var e = Oi
      Oi = !0
      try {
        ki(n)
      } finally {
        ;(Oi = e) || Hi || qi(1, !1, null)
      }
    }
    function oc(n, e, t, r, o) {
      var a = e.current
      if (t) {
        var i
        t = t._reactInternalFiber
        n: {
          for ((2 === ct(t) && 2 === t.tag) || d('170'), i = t; 3 !== i.tag; ) {
            if (ho(i)) {
              i = i.stateNode.__reactInternalMemoizedMergedChildContext
              break n
            }
            ;(i = i.return) || d('171')
          }
          i = i.stateNode.context
        }
        t = ho(t) ? xo(t, i) : i
      } else t = s
      return (
        null === e.context ? (e.context = t) : (e.pendingContext = t),
        (e = o),
        ((o = Do(r)).payload = { element: n }),
        null !== (e = void 0 === e ? null : e) && (o.callback = e),
        No(a, o, r),
        vi(a, r),
        r
      )
    }
    function ac(n) {
      var e = n._reactInternalFiber
      return (
        void 0 === e && ('function' == typeof n.render ? d('188') : d('268', Object.keys(n))),
        null === (n = lt(e)) ? null : n.stateNode
      )
    }
    function ic(n, e, t, r) {
      var o = e.current
      return oc(n, e, t, (o = gi(xi(), o)), r)
    }
    function cc(n) {
      if (!(n = n.current).child) return null
      switch (n.child.tag) {
        case 5:
        default:
          return n.child.stateNode
      }
    }
    function pc(n) {
      var e = n.findFiberByHostInstance
      return (function(n) {
        if ('undefined' == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) return !1
        var e = __REACT_DEVTOOLS_GLOBAL_HOOK__
        if (e.isDisabled || !e.supportsFiber) return !0
        try {
          var t = e.inject(n)
          ;(Co = Ao(function(n) {
            return e.onCommitFiberRoot(t, n)
          })),
            (Lo = Ao(function(n) {
              return e.onCommitFiberUnmount(t, n)
            }))
        } catch (n) {}
        return !0
      })(
        i({}, n, {
          findHostInstanceByFiber: function(n) {
            return null === (n = lt(n)) ? null : n.stateNode
          },
          findFiberByHostInstance: function(n) {
            return e ? e(n) : null
          },
        }),
      )
    }
    var bc = Ji,
      lc = tc,
      sc = function() {
        Hi || 0 === Ci || (qi(Ci, !1, null), (Ci = 0))
      }
    function dc(n) {
      ;(this._expirationTime = fi()),
        (this._root = n),
        (this._callbacks = this._next = null),
        (this._hasChildren = this._didComplete = !1),
        (this._children = null),
        (this._defer = !0)
    }
    function uc() {
      ;(this._callbacks = null),
        (this._didCommit = !1),
        (this._onCommit = this._onCommit.bind(this))
    }
    function mc(n, e, t) {
      this._internalRoot = Vo(n, e, t)
    }
    function hc(n) {
      return !(
        !n ||
        (1 !== n.nodeType &&
          9 !== n.nodeType &&
          11 !== n.nodeType &&
          (8 !== n.nodeType || ' react-mount-point-unstable ' !== n.nodeValue))
      )
    }
    function fc(n, e, t, r, o) {
      hc(t) || d('200')
      var a = t._reactRootContainer
      if (a) {
        if ('function' == typeof o) {
          var i = o
          o = function() {
            var n = cc(a._internalRoot)
            i.call(n)
          }
        }
        null != n ? a.legacy_renderSubtreeIntoContainer(n, e, o) : a.render(e, o)
      } else {
        if (
          ((a = t._reactRootContainer = (function(n, e) {
            if (
              (e ||
                (e = !(
                  !(e = n ? (9 === n.nodeType ? n.documentElement : n.firstChild) : null) ||
                  1 !== e.nodeType ||
                  !e.hasAttribute('data-reactroot')
                )),
              !e)
            )
              for (var t; (t = n.lastChild); ) n.removeChild(t)
            return new mc(n, !1, e)
          })(t, r)),
          'function' == typeof o)
        ) {
          var c = o
          o = function() {
            var n = cc(a._internalRoot)
            c.call(n)
          }
        }
        nc(function() {
          null != n ? a.legacy_renderSubtreeIntoContainer(n, e, o) : a.render(e, o)
        })
      }
      return cc(a._internalRoot)
    }
    function gc(n, e) {
      var t = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null
      return (
        hc(e) || d('200'),
        (function(n, e, t) {
          var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null
          return {
            $$typeof: be,
            key: null == r ? null : '' + r,
            children: n,
            containerInfo: e,
            implementation: t,
          }
        })(n, e, null, t)
      )
    }
    Un.injectFiberControlledHostComponent(Yr),
      (dc.prototype.render = function(n) {
        this._defer || d('250'), (this._hasChildren = !0), (this._children = n)
        var e = this._root._internalRoot,
          t = this._expirationTime,
          r = new uc()
        return oc(n, e, null, t, r._onCommit), r
      }),
      (dc.prototype.then = function(n) {
        if (this._didComplete) n()
        else {
          var e = this._callbacks
          null === e && (e = this._callbacks = []), e.push(n)
        }
      }),
      (dc.prototype.commit = function() {
        var n = this._root._internalRoot,
          e = n.firstBatch
        if (((this._defer && null !== e) || d('251'), this._hasChildren)) {
          var t = this._expirationTime
          if (e !== this) {
            this._hasChildren &&
              ((t = this._expirationTime = e._expirationTime), this.render(this._children))
            for (var r = null, o = e; o !== this; ) (r = o), (o = o._next)
            null === r && d('251'), (r._next = o._next), (this._next = e), (n.firstBatch = this)
          }
          ;(this._defer = !1),
            Gi(n, t),
            (e = this._next),
            (this._next = null),
            null !== (e = n.firstBatch = e) && e._hasChildren && e.render(e._children)
        } else (this._next = null), (this._defer = !1)
      }),
      (dc.prototype._onComplete = function() {
        if (!this._didComplete) {
          this._didComplete = !0
          var n = this._callbacks
          if (null !== n) for (var e = 0; e < n.length; e++) (0, n[e])()
        }
      }),
      (uc.prototype.then = function(n) {
        if (this._didCommit) n()
        else {
          var e = this._callbacks
          null === e && (e = this._callbacks = []), e.push(n)
        }
      }),
      (uc.prototype._onCommit = function() {
        if (!this._didCommit) {
          this._didCommit = !0
          var n = this._callbacks
          if (null !== n)
            for (var e = 0; e < n.length; e++) {
              var t = n[e]
              'function' != typeof t && d('191', t), t()
            }
        }
      }),
      (mc.prototype.render = function(n, e) {
        var t = this._internalRoot,
          r = new uc()
        return null !== (e = void 0 === e ? null : e) && r.then(e), ic(n, t, null, r._onCommit), r
      }),
      (mc.prototype.unmount = function(n) {
        var e = this._internalRoot,
          t = new uc()
        return (
          null !== (n = void 0 === n ? null : n) && t.then(n), ic(null, e, null, t._onCommit), t
        )
      }),
      (mc.prototype.legacy_renderSubtreeIntoContainer = function(n, e, t) {
        var r = this._internalRoot,
          o = new uc()
        return null !== (t = void 0 === t ? null : t) && o.then(t), ic(e, r, n, o._onCommit), o
      }),
      (mc.prototype.createBatch = function() {
        var n = new dc(this),
          e = n._expirationTime,
          t = this._internalRoot,
          r = t.firstBatch
        if (null === r) (t.firstBatch = n), (n._next = null)
        else {
          for (t = null; null !== r && r._expirationTime <= e; ) (t = r), (r = r._next)
          ;(n._next = r), null !== t && (t._next = n)
        }
        return n
      }),
      (Yn = bc),
      (Xn = lc),
      ($n = sc)
    var vc = {
      createPortal: gc,
      findDOMNode: function(n) {
        return null == n ? null : 1 === n.nodeType ? n : ac(n)
      },
      hydrate: function(n, e, t) {
        return fc(null, n, e, !0, t)
      },
      render: function(n, e, t) {
        return fc(null, n, e, !1, t)
      },
      unstable_renderSubtreeIntoContainer: function(n, e, t, r) {
        return (null == n || void 0 === n._reactInternalFiber) && d('38'), fc(n, e, t, !1, r)
      },
      unmountComponentAtNode: function(n) {
        return (
          hc(n) || d('40'),
          !!n._reactRootContainer &&
            (nc(function() {
              fc(null, null, n, !1, function() {
                n._reactRootContainer = null
              })
            }),
            !0)
        )
      },
      unstable_createPortal: function() {
        return gc.apply(void 0, arguments)
      },
      unstable_batchedUpdates: Ji,
      unstable_deferredUpdates: zi,
      unstable_interactiveUpdates: tc,
      flushSync: ec,
      unstable_flushControlled: rc,
      __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
        EventPluginHub: N,
        EventPluginRegistry: M,
        EventPropagators: tn,
        ReactControlledComponent: Gn,
        ReactDOMComponentTree: q,
        ReactDOMEventListener: It,
      },
      unstable_createRoot: function(n, e) {
        return new mc(n, !0, null != e && !0 === e.hydrate)
      },
    }
    pc({
      findFiberByHostInstance: F,
      bundleType: 0,
      version: '16.4.2',
      rendererPackageName: 'react-dom',
    })
    var xc = { default: vc },
      zc = (xc && vc) || xc
    n.exports = zc.default ? zc.default : zc
  },
  function(n, e, t) {
    'use strict'
    var r = !('undefined' == typeof window || !window.document || !window.document.createElement),
      o = {
        canUseDOM: r,
        canUseWorkers: 'undefined' != typeof Worker,
        canUseEventListeners: r && !(!window.addEventListener && !window.attachEvent),
        canUseViewport: r && !!window.screen,
        isInWorker: !r,
      }
    n.exports = o
  },
  function(n, e, t) {
    'use strict'
    n.exports = function(n) {
      if (void 0 === (n = n || ('undefined' != typeof document ? document : void 0))) return null
      try {
        return n.activeElement || n.body
      } catch (e) {
        return n.body
      }
    }
  },
  function(n, e, t) {
    'use strict'
    var r = Object.prototype.hasOwnProperty
    function o(n, e) {
      return n === e ? 0 !== n || 0 !== e || 1 / n == 1 / e : n != n && e != e
    }
    n.exports = function(n, e) {
      if (o(n, e)) return !0
      if ('object' != typeof n || null === n || 'object' != typeof e || null === e) return !1
      var t = Object.keys(n),
        a = Object.keys(e)
      if (t.length !== a.length) return !1
      for (var i = 0; i < t.length; i++) if (!r.call(e, t[i]) || !o(n[t[i]], e[t[i]])) return !1
      return !0
    }
  },
  function(n, e, t) {
    'use strict'
    var r = t(53)
    n.exports = function n(e, t) {
      return (
        !(!e || !t) &&
        (e === t ||
          (!r(e) &&
            (r(t)
              ? n(e, t.parentNode)
              : 'contains' in e
                ? e.contains(t)
                : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t)))))
      )
    }
  },
  function(n, e, t) {
    'use strict'
    var r = t(54)
    n.exports = function(n) {
      return r(n) && 3 == n.nodeType
    }
  },
  function(n, e, t) {
    'use strict'
    n.exports = function(n) {
      var e = (n ? n.ownerDocument || n : document).defaultView || window
      return !(
        !n ||
        !('function' == typeof e.Node
          ? n instanceof e.Node
          : 'object' == typeof n && 'number' == typeof n.nodeType && 'string' == typeof n.nodeName)
      )
    }
  },
  function(n, e, t) {
    'use strict'
    Object.defineProperty(e, '__esModule', { value: !0 })
    var r = (function(n) {
        return n && 'object' == typeof n && 'default' in n ? n.default : n
      })(t(0)),
      o = function(n, e) {
        if (!(n instanceof e)) throw new TypeError('Cannot call a class as a function')
      },
      a = function(n, e) {
        if (!n)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        return !e || ('object' != typeof e && 'function' != typeof e) ? n : e
      },
      i = (function(n) {
        function e() {
          return o(this, e), a(this, n.apply(this, arguments))
        }
        return (
          (function(n, e) {
            if ('function' != typeof e && null !== e)
              throw new TypeError(
                'Super expression must either be null or a function, not ' + typeof e,
              )
            ;(n.prototype = Object.create(e && e.prototype, {
              constructor: { value: n, enumerable: !1, writable: !0, configurable: !0 },
            })),
              e && (Object.setPrototypeOf ? Object.setPrototypeOf(n, e) : (n.__proto__ = e))
          })(e, n),
          (e.prototype.render = function() {
            return r.Children.only(this.props.children)
          }),
          e
        )
      })(r.Component)
    ;(e.AppContainer = i),
      (e.hot = function() {
        return function(n) {
          return n
        }
      }),
      (e.areComponentsEqual = function(n, e) {
        return n === e
      }),
      (e.setConfig = function() {}),
      (e.cold = function(n) {
        return n
      })
  },
  function(n, e, t) {
    var r = t(24)
    'string' == typeof r && (r = [[n.i, r, '']])
    var o = { hmr: !0, transform: void 0, insertInto: void 0 },
      a = t(14)(r, o)
    r.locals && (n.exports = r.locals),
      n.hot.accept(24, function() {
        var e = t(24)
        if (
          ('string' == typeof e && (e = [[n.i, e, '']]),
          !(function(n, e) {
            var t,
              r = 0
            for (t in n) {
              if (!e || n[t] !== e[t]) return !1
              r++
            }
            for (t in e) r--
            return 0 === r
          })(r.locals, e.locals))
        )
          throw new Error('Aborting CSS HMR due to changed css-modules locals.')
        a(e)
      }),
      n.hot.dispose(function() {
        a()
      })
  },
  function(n, e, t) {
    var r = t(25)
    'string' == typeof r && (r = [[n.i, r, '']])
    var o = { hmr: !0, transform: void 0, insertInto: void 0 },
      a = t(14)(r, o)
    r.locals && (n.exports = r.locals),
      n.hot.accept(25, function() {
        var e = t(25)
        if (
          ('string' == typeof e && (e = [[n.i, e, '']]),
          !(function(n, e) {
            var t,
              r = 0
            for (t in n) {
              if (!e || n[t] !== e[t]) return !1
              r++
            }
            for (t in e) r--
            return 0 === r
          })(r.locals, e.locals))
        )
          throw new Error('Aborting CSS HMR due to changed css-modules locals.')
        a(e)
      }),
      n.hot.dispose(function() {
        a()
      })
  },
  function(n, e, t) {
    'use strict'
    t.d(e, 'a', function() {
      return b
    })
    var r = t(4),
      o = t(7),
      a = t.n(o),
      i = t(0),
      c = t(2),
      p = t(1),
      b = (function(n) {
        function e() {
          return (null !== n && n.apply(this, arguments)) || this
        }
        return (
          r.b(e, n),
          (e.prototype.render = function() {
            var n,
              e = this.props,
              t = e.alignText,
              o = e.className,
              p = e.fill,
              b = e.minimal,
              l = e.large,
              s = e.vertical,
              d = r.c(e, ['alignText', 'className', 'fill', 'minimal', 'large', 'vertical']),
              u = a()(
                c.BUTTON_GROUP,
                (((n = {})[c.FILL] = p),
                (n[c.LARGE] = l),
                (n[c.MINIMAL] = b),
                (n[c.VERTICAL] = s),
                n),
                c.alignmentClass(t),
                o,
              )
            return i.createElement('div', r.a({}, d, { className: u }), this.props.children)
          }),
          (e.displayName = p.a + '.ButtonGroup'),
          e
        )
      })(i.PureComponent)
  },
])
