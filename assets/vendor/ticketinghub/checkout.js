(function () {
  !(function (e) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
    else if ("function" == typeof define && define.amd) define([], e);
    else {
      var t;
      (t =
        "undefined" != typeof window
          ? window
          : "undefined" != typeof global
            ? global
            : "undefined" != typeof self
              ? self
              : this),
        (t.Bugsnag = e());
    }
  })(function () {
    function e() {
      return (
        (e =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }),
        e.apply(this, arguments)
      );
    }
    function t(e) {
      switch (Object.prototype.toString.call(e)) {
        case "[object Error]":
          return !0;
        case "[object Exception]":
          return !0;
        case "[object DOMException]":
          return !0;
        default:
          return e instanceof Error;
      }
    }
    function n() {
      return le(((Math.random() * _e) << 0).toString(be), ye);
    }
    function r() {
      return (me = me < _e ? me : 0), me++, me - 1;
    }
    function o() {
      var e = "c",
        t = new Date().getTime().toString(be),
        o = le(r().toString(be), ye),
        a = ve(),
        i = n() + n();
      return e + t + o + a + i;
    }
    function a(e) {
      return e instanceof Error || /^\[object (Error|(Dom)?Exception)\]$/.test(Object.prototype.toString.call(e));
    }
    function i(e) {
      return "[Throws: " + (e ? e.message : "?") + "]";
    }
    function s(e, t) {
      for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return !0;
      return !1;
    }
    function u(e, t) {
      for (var n = 0, r = e.length; n < r; n++) if (0 === t.indexOf(e[n])) return !0;
      return !1;
    }
    function c(e, t) {
      for (var n = 0, r = e.length; n < r; n++) {
        if ("string" == typeof e[n] && e[n].toLowerCase() === t.toLowerCase()) return !0;
        if (e[n] && "function" == typeof e[n].test && e[n].test(t)) return !0;
      }
      return !1;
    }
    function l(e) {
      return "[object Array]" === Object.prototype.toString.call(e);
    }
    function d(e, t) {
      try {
        return e[t];
      } catch (e) {
        return i(e);
      }
    }
    function f(e, t, n) {
      function r(e, h) {
        function g() {
          return h.length > Re && f > Le;
        }
        if ((f++, h.length > Be)) return Me;
        if (g()) return Me;
        if (null === e || "object" != typeof e) return e;
        if (s(o, e)) return "[Circular]";
        if ((o.push(e), "function" == typeof e.toJSON))
          try {
            f--;
            var p = r(e.toJSON(), h);
            return o.pop(), p;
          } catch (e) {
            return i(e);
          }
        var v = a(e);
        if (v) {
          f--;
          var m = r({ name: e.name, message: e.message }, h);
          return o.pop(), m;
        }
        if (l(e)) {
          for (var y = [], b = 0, _ = e.length; b < _; b++) {
            if (g()) {
              y.push(Me);
              break;
            }
            y.push(r(e[b], h.concat("[]")));
          }
          return o.pop(), y;
        }
        var S = {};
        try {
          for (var w in e)
            if (Object.prototype.hasOwnProperty.call(e, w))
              if (u(n, h.join(".")) && c(t, w)) S[w] = "[REDACTED]";
              else {
                if (g()) {
                  S[w] = Me;
                  break;
                }
                S[w] = r(d(e, w), h.concat(w));
              }
        } catch (e) {}
        return o.pop(), S;
      }
      var o = [],
        f = 0;
      return r(e, []);
    }
    function h() {
      return Ue(((Math.random() * et) << 0).toString(Ze), Ye);
    }
    function g() {
      return (Qe = Qe < et ? Qe : 0), Qe++, Qe - 1;
    }
    function p() {
      var e = "c",
        t = new Date().getTime().toString(Ze),
        n = Ue(g().toString(Ze), Ye),
        r = Ge(),
        o = h() + h();
      return e + t + n + r + o;
    }
    function v(e, t, n) {
      var r = e[t];
      if (!r) return r;
      var o = n(r);
      return (e[t] = o), r;
    }
    function m(e) {
      var t = !!e[1] && "function" == typeof e[1].handleEvent;
      return {
        get: function () {
          return t ? e[1].handleEvent : e[1];
        },
        replace: function (n) {
          t ? (e[1].handleEvent = n) : (e[1] = n);
        },
      };
    }
    function y(e, t) {
      var n = [e.tagName];
      if (
        (e.id && n.push("#" + e.id),
        e.className && e.className.length && n.push("." + e.className.split(" ").join(".")),
        !t.document.querySelectorAll || !Array.prototype.indexOf)
      )
        return n.join("");
      try {
        if (1 === t.document.querySelectorAll(n.join("")).length) return n.join("");
      } catch (e) {
        return n.join("");
      }
      if (e.parentNode.childNodes.length > 1) {
        var r = Array.prototype.indexOf.call(e.parentNode.childNodes, e) + 1;
        n.push(":nth-child(" + r + ")");
      }
      return 1 === t.document.querySelectorAll(n.join("")).length
        ? n.join("")
        : e.parentNode
          ? y(e.parentNode, t) + " > " + n.join("")
          : n.join("");
    }
    function b(e, t) {
      var n = "(...)";
      return e && e.length <= t ? e : e.slice(0, t - n.length) + n;
    }
    var _,
      S = ["navigation", "request", "process", "log", "user", "state", "error", "manual"],
      w = function (e, t, n) {
        for (var r = n, o = 0, a = e.length; o < a; o++) r = t(r, e[o], o, e);
        return r;
      },
      E = function (e, t) {
        return w(
          e,
          function (e, n, r, o) {
            return t(n, r, o) ? e.concat(n) : e;
          },
          []
        );
      },
      O = function (e, t) {
        return w(
          e,
          function (e, n, r, o) {
            return e === !0 || n === t;
          },
          !1
        );
      },
      N = function (e) {
        return "[object Array]" === Object.prototype.toString.call(e);
      },
      j = !{ toString: null }.propertyIsEnumerable("toString"),
      k = [
        "toString",
        "toLocaleString",
        "valueOf",
        "hasOwnProperty",
        "isPrototypeOf",
        "propertyIsEnumerable",
        "constructor",
      ],
      x = function (e) {
        var t,
          n = [];
        for (t in e) Object.prototype.hasOwnProperty.call(e, t) && n.push(t);
        if (!j) return n;
        for (var r = 0, o = k.length; r < o; r++) Object.prototype.hasOwnProperty.call(e, k[r]) && n.push(k[r]);
        return n;
      },
      T = function (e, t) {
        return (
          void 0 === e && (e = 1),
          void 0 === t && (t = 1 / 0),
          function (n) {
            return "number" == typeof n && parseInt("" + n, 10) === n && n >= e && n <= t;
          }
        );
      },
      B = function (e) {
        return (
          "function" == typeof e ||
          (N(e) &&
            E(e, function (e) {
              return "function" == typeof e;
            }).length === e.length)
        );
      },
      L = function (e) {
        return "string" == typeof e && !!e.length;
      },
      R = {},
      M = function () {
        return { unhandledExceptions: !0, unhandledRejections: !0 };
      };
    R.schema = {
      apiKey: {
        defaultValue: function () {
          return null;
        },
        message: "is required",
        validate: L,
      },
      appVersion: {
        defaultValue: function () {},
        message: "should be a string",
        validate: function (e) {
          return void 0 === e || L(e);
        },
      },
      appType: {
        defaultValue: function () {},
        message: "should be a string",
        validate: function (e) {
          return void 0 === e || L(e);
        },
      },
      autoDetectErrors: {
        defaultValue: function () {
          return !0;
        },
        message: "should be true|false",
        validate: function (e) {
          return e === !0 || e === !1;
        },
      },
      enabledErrorTypes: {
        defaultValue: function () {
          return M();
        },
        message:
          "should be an object containing the flags { unhandledExceptions:true|false, unhandledRejections:true|false }",
        allowPartialObject: !0,
        validate: function (e) {
          if ("object" != typeof e || !e) return !1;
          var t = x(e),
            n = x(M());
          return (
            !(
              E(t, function (e) {
                return O(n, e);
              }).length < t.length
            ) &&
            !(
              E(x(e), function (t) {
                return "boolean" != typeof e[t];
              }).length > 0
            )
          );
        },
      },
      onError: {
        defaultValue: function () {
          return [];
        },
        message: "should be a function or array of functions",
        validate: B,
      },
      onSession: {
        defaultValue: function () {
          return [];
        },
        message: "should be a function or array of functions",
        validate: B,
      },
      onBreadcrumb: {
        defaultValue: function () {
          return [];
        },
        message: "should be a function or array of functions",
        validate: B,
      },
      endpoints: {
        defaultValue: function () {
          return { notify: "https://notify.bugsnag.com", sessions: "https://sessions.bugsnag.com" };
        },
        message: "should be an object containing endpoint URLs { notify, sessions }",
        validate: function (e) {
          return (
            e &&
            "object" == typeof e &&
            L(e.notify) &&
            L(e.sessions) &&
            0 ===
              E(x(e), function (e) {
                return !O(["notify", "sessions"], e);
              }).length
          );
        },
      },
      autoTrackSessions: {
        defaultValue: function (e) {
          return !0;
        },
        message: "should be true|false",
        validate: function (e) {
          return e === !0 || e === !1;
        },
      },
      enabledReleaseStages: {
        defaultValue: function () {
          return null;
        },
        message: "should be an array of strings",
        validate: function (e) {
          return (
            null === e ||
            (N(e) &&
              E(e, function (e) {
                return "string" == typeof e;
              }).length === e.length)
          );
        },
      },
      releaseStage: {
        defaultValue: function () {
          return "production";
        },
        message: "should be a string",
        validate: function (e) {
          return "string" == typeof e && e.length;
        },
      },
      maxBreadcrumbs: {
        defaultValue: function () {
          return 25;
        },
        message: "should be a number ≤100",
        validate: function (e) {
          return T(0, 100)(e);
        },
      },
      enabledBreadcrumbTypes: {
        defaultValue: function () {
          return S;
        },
        message: "should be null or a list of available breadcrumb types (" + S.join(",") + ")",
        validate: function (e) {
          return (
            null === e ||
            (N(e) &&
              w(
                e,
                function (e, t) {
                  return e === !1 ? e : O(S, t);
                },
                !0
              ))
          );
        },
      },
      context: {
        defaultValue: function () {},
        message: "should be a string",
        validate: function (e) {
          return void 0 === e || "string" == typeof e;
        },
      },
      user: {
        defaultValue: function () {
          return {};
        },
        message: "should be an object with { id, email, name } properties",
        validate: function (e) {
          return (
            null === e ||
            (e &&
              w(
                x(e),
                function (e, t) {
                  return e && O(["id", "email", "name"], t);
                },
                !0
              ))
          );
        },
      },
      metadata: {
        defaultValue: function () {
          return {};
        },
        message: "should be an object",
        validate: function (e) {
          return "object" == typeof e && null !== e;
        },
      },
      logger: {
        defaultValue: function () {},
        message: "should be null or an object with methods { debug, info, warn, error }",
        validate: function (e) {
          return (
            !e ||
            (e &&
              w(
                ["debug", "info", "warn", "error"],
                function (t, n) {
                  return t && "function" == typeof e[n];
                },
                !0
              ))
          );
        },
      },
      redactedKeys: {
        defaultValue: function () {
          return ["password"];
        },
        message: "should be an array of strings|regexes",
        validate: function (e) {
          return (
            N(e) &&
            e.length ===
              E(e, function (e) {
                return "string" == typeof e || (e && "function" == typeof e.test);
              }).length
          );
        },
      },
      plugins: {
        defaultValue: function () {
          return [];
        },
        message: "should be an array of plugin objects",
        validate: function (e) {
          return (
            N(e) &&
            e.length ===
              E(e, function (e) {
                return e && "object" == typeof e && "function" == typeof e.load;
              }).length
          );
        },
      },
    };
    var q = function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      },
      C = function (e, t) {
        return w(
          e,
          function (e, n, r, o) {
            return e.concat(t(n, r, o));
          },
          []
        );
      },
      D = R.schema,
      A = {
        releaseStage: q({}, D.releaseStage, {
          defaultValue: function () {
            return /^localhost(:\d+)?$/.test(window.location.host) ? "development" : "production";
          },
        }),
        appType: e({}, D.appType, {
          defaultValue: function () {
            return "browser";
          },
        }),
        logger: q({}, D.logger, {
          defaultValue: function () {
            return "undefined" != typeof console && "function" == typeof console.debug ? P() : void 0;
          },
        }),
      },
      P = function () {
        var e = {},
          t = console.log;
        return (
          C(["debug", "info", "warn", "error"], function (n) {
            var r = console[n];
            e[n] = "function" == typeof r ? r.bind(console, "[bugsnag]") : t.bind(console, "[bugsnag]");
          }),
          e
        );
      },
      V = (function () {
        function e(e, t, n, r) {
          void 0 === r && (r = new Date()),
            (this.type = n),
            (this.message = e),
            (this.metadata = t),
            (this.timestamp = r);
        }
        var t = e.prototype;
        return (
          (t.toJSON = function () {
            return { type: this.type, name: this.message, timestamp: this.timestamp, metaData: this.metadata };
          }),
          e
        );
      })(),
      I = V,
      H = {};
    !(function (e, t) {
      "use strict";
      "function" == typeof _ && _.amd
        ? _("stackframe", [], t)
        : "object" == typeof H
          ? (H = t())
          : (e.StackFrame = t());
    })(this, function () {
      "use strict";
      function e(e) {
        return !isNaN(parseFloat(e)) && isFinite(e);
      }
      function t(e) {
        return e.charAt(0).toUpperCase() + e.substring(1);
      }
      function n(e) {
        return function () {
          return this[e];
        };
      }
      function r(e) {
        if (e instanceof Object)
          for (var n = 0; n < u.length; n++)
            e.hasOwnProperty(u[n]) && void 0 !== e[u[n]] && this["set" + t(u[n])](e[u[n]]);
      }
      var o = ["isConstructor", "isEval", "isNative", "isToplevel"],
        a = ["columnNumber", "lineNumber"],
        i = ["fileName", "functionName", "source"],
        s = ["args"],
        u = o.concat(a, i, s);
      r.prototype = {
        getArgs: function () {
          return this.args;
        },
        setArgs: function (e) {
          if ("[object Array]" !== Object.prototype.toString.call(e)) throw new TypeError("Args must be an Array");
          this.args = e;
        },
        getEvalOrigin: function () {
          return this.evalOrigin;
        },
        setEvalOrigin: function (e) {
          if (e instanceof r) this.evalOrigin = e;
          else {
            if (!(e instanceof Object)) throw new TypeError("Eval Origin must be an Object or StackFrame");
            this.evalOrigin = new r(e);
          }
        },
        toString: function () {
          var t = this.getFunctionName() || "{anonymous}",
            n = "(" + (this.getArgs() || []).join(",") + ")",
            r = this.getFileName() ? "@" + this.getFileName() : "",
            o = e(this.getLineNumber()) ? ":" + this.getLineNumber() : "",
            a = e(this.getColumnNumber()) ? ":" + this.getColumnNumber() : "";
          return t + n + r + o + a;
        },
      };
      for (var c = 0; c < o.length; c++)
        (r.prototype["get" + t(o[c])] = n(o[c])),
          (r.prototype["set" + t(o[c])] = (function (e) {
            return function (t) {
              this[e] = Boolean(t);
            };
          })(o[c]));
      for (var l = 0; l < a.length; l++)
        (r.prototype["get" + t(a[l])] = n(a[l])),
          (r.prototype["set" + t(a[l])] = (function (t) {
            return function (n) {
              if (!e(n)) throw new TypeError(t + " must be a Number");
              this[t] = Number(n);
            };
          })(a[l]));
      for (var d = 0; d < i.length; d++)
        (r.prototype["get" + t(i[d])] = n(i[d])),
          (r.prototype["set" + t(i[d])] = (function (e) {
            return function (t) {
              this[e] = String(t);
            };
          })(i[d]));
      return r;
    });
    var K = {};
    !(function (e, t) {
      "use strict";
      "function" == typeof _ && _.amd
        ? _("error-stack-parser", ["stackframe"], t)
        : "object" == typeof K
          ? (K = t(H))
          : (e.ErrorStackParser = t(e.StackFrame));
    })(this, function (e) {
      "use strict";
      var t = /(^|@)\S+\:\d+/,
        n = /^\s*at .*(\S+\:\d+|\(native\))/m,
        r = /^(eval@)?(\[native code\])?$/;
      return {
        parse: function (e) {
          if ("undefined" != typeof e.stacktrace || "undefined" != typeof e["opera#sourceloc"])
            return this.parseOpera(e);
          if (e.stack && e.stack.match(n)) return this.parseV8OrIE(e);
          if (e.stack) return this.parseFFOrSafari(e);
          throw new Error("Cannot parse given Error object");
        },
        extractLocation: function (e) {
          if (e.indexOf(":") === -1) return [e];
          var t = /(.+?)(?:\:(\d+))?(?:\:(\d+))?$/,
            n = t.exec(e.replace(/[\(\)]/g, ""));
          return [n[1], n[2] || void 0, n[3] || void 0];
        },
        parseV8OrIE: function (t) {
          var r = t.stack.split("\n").filter(function (e) {
            return !!e.match(n);
          }, this);
          return r.map(function (t) {
            t.indexOf("(eval ") > -1 &&
              (t = t.replace(/eval code/g, "eval").replace(/(\(eval at [^\()]*)|(\)\,.*$)/g, ""));
            var n = t.replace(/^\s+/, "").replace(/\(eval code/g, "("),
              r = n.match(/ (\((.+):(\d+):(\d+)\)$)/);
            n = r ? n.replace(r[0], "") : n;
            var o = n.split(/\s+/).slice(1),
              a = this.extractLocation(r ? r[1] : o.pop()),
              i = o.join(" ") || void 0,
              s = ["eval", "<anonymous>"].indexOf(a[0]) > -1 ? void 0 : a[0];
            return new e({ functionName: i, fileName: s, lineNumber: a[1], columnNumber: a[2], source: t });
          }, this);
        },
        parseFFOrSafari: function (t) {
          var n = t.stack.split("\n").filter(function (e) {
            return !e.match(r);
          }, this);
          return n.map(function (t) {
            if (
              (t.indexOf(" > eval") > -1 &&
                (t = t.replace(/ line (\d+)(?: > eval line \d+)* > eval\:\d+\:\d+/g, ":$1")),
              t.indexOf("@") === -1 && t.indexOf(":") === -1)
            )
              return new e({ functionName: t });
            var n = /((.*".+"[^@]*)?[^@]*)(?:@)/,
              r = t.match(n),
              o = r && r[1] ? r[1] : void 0,
              a = this.extractLocation(t.replace(n, ""));
            return new e({ functionName: o, fileName: a[0], lineNumber: a[1], columnNumber: a[2], source: t });
          }, this);
        },
        parseOpera: function (e) {
          return !e.stacktrace ||
            (e.message.indexOf("\n") > -1 && e.message.split("\n").length > e.stacktrace.split("\n").length)
            ? this.parseOpera9(e)
            : e.stack
              ? this.parseOpera11(e)
              : this.parseOpera10(e);
        },
        parseOpera9: function (t) {
          for (
            var n = /Line (\d+).*script (?:in )?(\S+)/i, r = t.message.split("\n"), o = [], a = 2, i = r.length;
            a < i;
            a += 2
          ) {
            var s = n.exec(r[a]);
            s && o.push(new e({ fileName: s[2], lineNumber: s[1], source: r[a] }));
          }
          return o;
        },
        parseOpera10: function (t) {
          for (
            var n = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i,
              r = t.stacktrace.split("\n"),
              o = [],
              a = 0,
              i = r.length;
            a < i;
            a += 2
          ) {
            var s = n.exec(r[a]);
            s && o.push(new e({ functionName: s[3] || void 0, fileName: s[2], lineNumber: s[1], source: r[a] }));
          }
          return o;
        },
        parseOpera11: function (n) {
          var r = n.stack.split("\n").filter(function (e) {
            return !!e.match(t) && !e.match(/^Error created at/);
          }, this);
          return r.map(function (t) {
            var n,
              r = t.split("@"),
              o = this.extractLocation(r.pop()),
              a = r.shift() || "",
              i = a.replace(/<anonymous function(: (\w+))?>/, "$2").replace(/\([^\)]*\)/g, "") || void 0;
            a.match(/\(([^\)]*)\)/) && (n = a.replace(/^[^\(]+\(([^\)]*)\)$/, "$1"));
            var s = void 0 === n || "[arguments not available]" === n ? void 0 : n.split(",");
            return new e({ functionName: i, args: s, fileName: o[0], lineNumber: o[1], columnNumber: o[2], source: t });
          }, this);
        },
      };
    });
    var $ = K,
      U = function (e) {
        return !(
          !e ||
          (!e.stack && !e.stacktrace && !e["opera#sourceloc"]) ||
          "string" != typeof (e.stack || e.stacktrace || e["opera#sourceloc"]) ||
          e.stack === e.name + ": " + e.message
        );
      },
      X = t,
      F = X,
      J = function (e, t, n, r) {
        var o;
        if (t) {
          var a;
          if (null === n) return z(e, t);
          "object" == typeof n && (a = n),
            "string" == typeof n && ((o = {}), (o[n] = r), (a = o)),
            a && (e[t] || (e[t] = {}), (e[t] = q({}, e[t], a)));
        }
      },
      W = function (e, t, n) {
        if ("string" == typeof t) return n ? (e[t] ? e[t][n] : void 0) : e[t];
      },
      z = function (e, t, n) {
        if ("string" == typeof t) return n ? void (e[t] && delete e[t][n]) : void delete e[t];
      },
      G = { add: J, get: W, clear: z },
      Q = {};
    !(function (e, t) {
      "use strict";
      "function" == typeof _ && _.amd
        ? _("stack-generator", ["stackframe"], t)
        : "object" == typeof Q
          ? (Q = t(H))
          : (e.StackGenerator = t(e.StackFrame));
    })(this, function (e) {
      return {
        backtrace: function (t) {
          var n = [],
            r = 10;
          "object" == typeof t && "number" == typeof t.maxStackSize && (r = t.maxStackSize);
          for (var o = arguments.callee; o && n.length < r && o.arguments; ) {
            for (var a = new Array(o.arguments.length), i = 0; i < a.length; ++i) a[i] = o.arguments[i];
            /function(?:\s+([\w$]+))+\s*\(/.test(o.toString())
              ? n.push(new e({ functionName: RegExp.$1 || void 0, args: a }))
              : n.push(new e({ args: a }));
            try {
              o = o.caller;
            } catch (e) {
              break;
            }
          }
          return n;
        },
      };
    });
    var Y = (function () {
        function e(t, n, r, o, a) {
          void 0 === r && (r = []),
            void 0 === o && (o = te()),
            (this.apiKey = void 0),
            (this.context = void 0),
            (this.groupingHash = void 0),
            (this.originalError = a),
            (this._handledState = o),
            (this.severity = this._handledState.severity),
            (this.unhandled = this._handledState.unhandled),
            (this.app = {}),
            (this.device = {}),
            (this.request = {}),
            (this.breadcrumbs = []),
            (this.threads = []),
            (this._metadata = {}),
            (this._user = {}),
            (this._session = void 0),
            (this.errors = [
              {
                errorClass: ne(t),
                errorMessage: ne(n),
                type: e.__type,
                stacktrace: w(
                  r,
                  function (e, t) {
                    var n = Z(t);
                    try {
                      return "{}" === JSON.stringify(n) ? e : e.concat(n);
                    } catch (t) {
                      return e;
                    }
                  },
                  []
                ),
              },
            ]);
        }
        var t = e.prototype;
        return (
          (t.addMetadata = function (e, t, n) {
            return G.add(this._metadata, e, t, n);
          }),
          (t.getMetadata = function (e, t) {
            return G.get(this._metadata, e, t);
          }),
          (t.clearMetadata = function (e, t) {
            return G.clear(this._metadata, e, t);
          }),
          (t.getUser = function () {
            return this._user;
          }),
          (t.setUser = function (e, t, n) {
            this._user = { id: e, email: t, name: n };
          }),
          (t.toJSON = function () {
            return {
              payloadVersion: "4",
              exceptions: C(this.errors, function (e) {
                return q({}, e, { message: e.errorMessage });
              }),
              severity: this.severity,
              unhandled: this._handledState.unhandled,
              severityReason: this._handledState.severityReason,
              app: this.app,
              device: this.device,
              request: this.request,
              breadcrumbs: this.breadcrumbs,
              context: this.context,
              groupingHash: this.groupingHash,
              metaData: this._metadata,
              user: this._user,
              session: this._session,
            };
          }),
          e
        );
      })(),
      Z = function (e) {
        var t = {
          file: e.fileName,
          method: ee(e.functionName),
          lineNumber: e.lineNumber,
          columnNumber: e.columnNumber,
          code: void 0,
          inProject: void 0,
        };
        return t.lineNumber > -1 && !t.file && !t.method && (t.file = "global code"), t;
      },
      ee = function (e) {
        return /^global code$/i.test(e) ? "global code" : e;
      },
      te = function () {
        return { unhandled: !1, severity: "warning", severityReason: { type: "handledException" } };
      },
      ne = function (e) {
        return "string" == typeof e ? e : "";
      };
    (Y.getStacktrace = function (e, t, n) {
      if (U(e)) return $.parse(e).slice(t);
      try {
        return E(Q.backtrace(), function (e) {
          return (e.functionName || "").indexOf("StackGenerator$$") === -1;
        }).slice(1 + n);
      } catch (e) {
        return [];
      }
    }),
      (Y.create = function (e, t, n, r, o, a) {
        void 0 === o && (o = 0);
        var i,
          s = oe(e, t, r, a),
          u = s[0],
          c = s[1];
        try {
          var l = Y.getStacktrace(u, c > 0 ? 1 + c + o : 0, 1 + o);
          i = new Y(u.name, u.message, l, n, e);
        } catch (t) {
          i = new Y(u.name, u.message, [], n, e);
        }
        return "InvalidError" === u.name && i.addMetadata("" + r, "non-error parameter", re(e)), i;
      });
    var re = function (e) {
        return null === e ? "null" : void 0 === e ? "undefined" : e;
      },
      oe = function (e, t, n, r) {
        var o,
          a = 0,
          i = function (e) {
            r && r.warn(n + ' received a non-error: "' + e + '"');
            var t = new Error(n + ' received a non-error. See "' + n + '" tab for more detail.');
            return (t.name = "InvalidError"), t;
          };
        if (t)
          switch (typeof e) {
            case "string":
            case "number":
            case "boolean":
              (o = new Error(String(e))), (a += 1);
              break;
            case "function":
              (o = i("function")), (a += 2);
              break;
            case "object":
              null !== e && F(e)
                ? (o = e)
                : null !== e && ae(e)
                  ? ((o = new Error(e.message || e.errorMessage)), (o.name = e.name || e.errorClass), (a += 1))
                  : ((o = i(null === e ? "null" : "unsupported object")), (a += 2));
              break;
            default:
              (o = i("nothing")), (a += 2);
          }
        else F(e) ? (o = e) : ((o = i(typeof e)), (a += 2));
        if (!U(o))
          try {
            throw o;
          } catch (e) {
            U(e) && ((o = e), (a = 1));
          }
        return [o, a];
      };
    Y.__type = "browserjs";
    var ae = function (e) {
        return !(
          ("string" != typeof e.name && "string" != typeof e.errorClass) ||
          ("string" != typeof e.message && "string" != typeof e.errorMessage)
        );
      },
      ie = Y,
      se = function (e, t, n) {
        var r = 0,
          o = function () {
            return r >= e.length
              ? n(null, !0)
              : void t(e[r], function (e, t) {
                  return e ? n(e) : t === !1 ? n(null, !1) : (r++, void o());
                });
          };
        o();
      },
      ue = function (e, t, n, r) {
        var o = function (e, r) {
          if ("function" != typeof e) return r(null);
          try {
            if (2 !== e.length) {
              var o = e(t);
              return o && "function" == typeof o.then
                ? o.then(
                    function (e) {
                      return setTimeout(function () {
                        return r(null, e);
                      });
                    },
                    function (e) {
                      setTimeout(function () {
                        return n(e), r(null, !0);
                      });
                    }
                  )
                : r(null, o);
            }
            e(t, function (e, t) {
              return e ? (n(e), r(null)) : void r(null, t);
            });
          } catch (e) {
            n(e), r(null);
          }
        };
        se(e, o, r);
      },
      ce = function (e, t, n, r) {
        for (var o = !1, a = e.slice(); !o && a.length; )
          try {
            o = a.pop()(t) === !1;
          } catch (e) {
            r.error("Error occurred in " + n + " callback, continuing anyway…"), r.error(e);
          }
        return o;
      },
      le = function (e, t) {
        var n = "000000000" + e;
        return n.substr(n.length - t);
      },
      de = "object" == typeof window ? window : self,
      fe = 0;
    for (var he in de) Object.hasOwnProperty.call(de, he) && fe++;
    var ge = navigator.mimeTypes ? navigator.mimeTypes.length : 0,
      pe = le((ge + navigator.userAgent.length).toString(36) + fe.toString(36), 4),
      ve = function () {
        return pe;
      },
      me = 0,
      ye = 4,
      be = 36,
      _e = Math.pow(be, ye);
    o.fingerprint = ve;
    var Se = o,
      we = (function () {
        function e() {
          (this.id = Se()),
            (this.startedAt = new Date()),
            (this._handled = 0),
            (this._unhandled = 0),
            (this._user = {}),
            (this.app = {}),
            (this.device = {});
        }
        var t = e.prototype;
        return (
          (t.getUser = function () {
            return this._user;
          }),
          (t.setUser = function (e, t, n) {
            this._user = { id: e, email: t, name: n };
          }),
          (t.toJSON = function () {
            return {
              id: this.id,
              startedAt: this.startedAt,
              events: { handled: this._handled, unhandled: this._unhandled },
            };
          }),
          (t._track = function (e) {
            this[e._handledState.unhandled ? "_unhandled" : "_handled"] += 1;
          }),
          e
        );
      })(),
      Ee = we,
      Oe = function () {},
      Ne = (function () {
        function e(t, n, r, o) {
          var a = this;
          void 0 === n && (n = R.schema),
            void 0 === r && (r = []),
            (this._notifier = o),
            (this._config = {}),
            (this._schema = n),
            (this._delivery = { sendSession: Oe, sendEvent: Oe }),
            (this._logger = { debug: Oe, info: Oe, warn: Oe, error: Oe }),
            (this._plugins = {}),
            (this._breadcrumbs = []),
            (this._session = null),
            (this._metadata = {}),
            (this._context = void 0),
            (this._user = {}),
            (this._cbs = { e: [], s: [], sp: [], b: [] }),
            (this.Client = e),
            (this.Event = ie),
            (this.Breadcrumb = I),
            (this.Session = Ee),
            (this._config = this._configure(t, r)),
            C(r.concat(this._config.plugins), function (e) {
              e && a._loadPlugin(e);
            }),
            (this._depth = 1);
          var i = this,
            s = this.notify;
          this.notify = function () {
            return s.apply(i, arguments);
          };
        }
        var t = e.prototype;
        return (
          (t.addMetadata = function (e, t, n) {
            return G.add(this._metadata, e, t, n);
          }),
          (t.getMetadata = function (e, t) {
            return G.get(this._metadata, e, t);
          }),
          (t.clearMetadata = function (e, t) {
            return G.clear(this._metadata, e, t);
          }),
          (t.getContext = function () {
            return this._context;
          }),
          (t.setContext = function (e) {
            this._context = e;
          }),
          (t._configure = function (e, t) {
            var n = w(
                t,
                function (e, t) {
                  return t && t.configSchema ? q({}, e, t.configSchema) : e;
                },
                this._schema
              ),
              r = w(
                x(n),
                function (t, r) {
                  var o = n[r].defaultValue(e[r]);
                  if (void 0 !== e[r]) {
                    var a = n[r].validate(e[r]);
                    a
                      ? n[r].allowPartialObject
                        ? (t.config[r] = q(o, e[r]))
                        : (t.config[r] = e[r])
                      : ((t.errors[r] = n[r].message), (t.config[r] = o));
                  } else t.config[r] = o;
                  return t;
                },
                { errors: {}, config: {} }
              ),
              o = r.errors,
              a = r.config;
            if (n.apiKey) {
              if (!a.apiKey) throw new Error("No Bugsnag API Key set");
              /^[0-9a-f]{32}$/i.test(a.apiKey) || (o.apiKey = "should be a string of 32 hexadecimal characters");
            }
            return (
              (this._metadata = q({}, a.metadata)),
              (this._user = q({}, a.user)),
              (this._context = a.context),
              a.logger && (this._logger = a.logger),
              a.onError && (this._cbs.e = this._cbs.e.concat(a.onError)),
              a.onBreadcrumb && (this._cbs.b = this._cbs.b.concat(a.onBreadcrumb)),
              a.onSession && (this._cbs.s = this._cbs.s.concat(a.onSession)),
              x(o).length && this._logger.warn(je(o, e)),
              a
            );
          }),
          (t.getUser = function () {
            return this._user;
          }),
          (t.setUser = function (e, t, n) {
            this._user = { id: e, email: t, name: n };
          }),
          (t._loadPlugin = function (e) {
            var t = e.load(this);
            return e.name && (this._plugins["~" + e.name + "~"] = t), this;
          }),
          (t.getPlugin = function (e) {
            return this._plugins["~" + e + "~"];
          }),
          (t._setDelivery = function (e) {
            this._delivery = e(this);
          }),
          (t.startSession = function () {
            var e = new Ee();
            (e.app.releaseStage = this._config.releaseStage),
              (e.app.version = this._config.appVersion),
              (e.app.type = this._config.appType),
              (e._user = q({}, this._user));
            var t = ce(this._cbs.s, e, "onSession", this._logger);
            return t
              ? (this._logger.debug("Session not started due to onSession callback"), this)
              : this._sessionDelegate.startSession(this, e);
          }),
          (t.addOnError = function (e, t) {
            void 0 === t && (t = !1), this._cbs.e[t ? "unshift" : "push"](e);
          }),
          (t.removeOnError = function (e) {
            this._cbs.e = E(this._cbs.e, function (t) {
              return t !== e;
            });
          }),
          (t._addOnSessionPayload = function (e) {
            this._cbs.sp.push(e);
          }),
          (t.addOnSession = function (e) {
            this._cbs.s.push(e);
          }),
          (t.removeOnSession = function (e) {
            this._cbs.s = E(this._cbs.s, function (t) {
              return t !== e;
            });
          }),
          (t.addOnBreadcrumb = function (e, t) {
            void 0 === t && (t = !1), this._cbs.b[t ? "unshift" : "push"](e);
          }),
          (t.removeOnBreadcrumb = function (e) {
            this._cbs.b = E(this._cbs.b, function (t) {
              return t !== e;
            });
          }),
          (t.pauseSession = function () {
            return this._sessionDelegate.pauseSession(this);
          }),
          (t.resumeSession = function () {
            return this._sessionDelegate.resumeSession(this);
          }),
          (t.leaveBreadcrumb = function (e, t, n) {
            if (
              ((e = "string" == typeof e ? e : ""),
              (n = "string" == typeof n && O(S, n) ? n : "manual"),
              (t = "object" == typeof t && null !== t ? t : {}),
              e)
            ) {
              var r = new I(e, t, n),
                o = ce(this._cbs.b, r, "onBreadcrumb", this._logger);
              if (o) return void this._logger.debug("Breadcrumb not attached due to onBreadcrumb callback");
              this._breadcrumbs.push(r),
                this._breadcrumbs.length > this._config.maxBreadcrumbs &&
                  (this._breadcrumbs = this._breadcrumbs.slice(this._breadcrumbs.length - this._config.maxBreadcrumbs));
            }
          }),
          (t.notify = function (e, t, n) {
            void 0 === n && (n = Oe);
            var r = ie.create(e, !0, void 0, "notify()", this._depth + 1, this._logger);
            this._notify(r, t, n);
          }),
          (t._notify = function (t, n, r) {
            var o = this;
            if (
              (void 0 === r && (r = Oe),
              (t.app = q({}, t.app, {
                releaseStage: this._config.releaseStage,
                version: this._config.appVersion,
                type: this._config.appType,
              })),
              (t.context = t.context || this._context),
              (t._metadata = q({}, t._metadata, this._metadata)),
              (t._user = q({}, t._user, this._user)),
              (t.breadcrumbs = this._breadcrumbs.slice()),
              null !== this._config.enabledReleaseStages &&
                !O(this._config.enabledReleaseStages, this._config.releaseStage))
            )
              return (
                this._logger.warn("Event not sent due to releaseStage/enabledReleaseStages configuration"), r(null, t)
              );
            var a = t.severity,
              i = function (e) {
                o._logger.error("Error occurred in onError callback, continuing anyway…"), o._logger.error(e);
              },
              s = [].concat(this._cbs.e).concat(n);
            ue(s, t, i, function (n, s) {
              return (
                n && i(n),
                s
                  ? (O(o._config.enabledBreadcrumbTypes, "error") &&
                      e.prototype.leaveBreadcrumb.call(
                        o,
                        t.errors[0].errorClass,
                        {
                          errorClass: t.errors[0].errorClass,
                          errorMessage: t.errors[0].errorMessage,
                          severity: t.severity,
                        },
                        "error"
                      ),
                    a !== t.severity && (t._handledState.severityReason = { type: "userCallbackSetSeverity" }),
                    t.unhandled !== t._handledState.unhandled &&
                      ((t._handledState.severityReason.unhandledOverridden = !0),
                      (t._handledState.unhandled = t.unhandled)),
                    o._session && (o._session._track(t), (t._session = o._session)),
                    void o._delivery.sendEvent(
                      { apiKey: t.apiKey || o._config.apiKey, notifier: o._notifier, events: [t] },
                      function (e) {
                        return r(e, t);
                      }
                    ))
                  : (o._logger.debug("Event not sent due to onError callback"), r(null, t))
              );
            });
          }),
          e
        );
      })(),
      je = function (e, t) {
        var n = new Error(
          "Invalid configuration\n" +
            C(x(e), function (n) {
              return "  - " + n + " " + e[n] + ", got " + ke(t[n]);
            }).join("\n\n")
        );
        return n;
      },
      ke = function (e) {
        switch (typeof e) {
          case "string":
          case "number":
          case "object":
            return JSON.stringify(e);
          default:
            return String(e);
        }
      },
      xe = Ne,
      Te = function (e, t, n, r) {
        var o = r && r.redactedKeys ? r.redactedKeys : [],
          a = r && r.redactedPaths ? r.redactedPaths : [];
        return JSON.stringify(f(e, o, a), t, n);
      },
      Be = 20,
      Le = 25e3,
      Re = 8,
      Me = "...",
      qe = {},
      Ce = ["events.[].metaData", "events.[].breadcrumbs.[].metaData", "events.[].request"];
    (qe.event = function (e, t) {
      var n = Te(e, null, null, { redactedPaths: Ce, redactedKeys: t });
      if (
        n.length > 1e6 &&
        ((e.events[0]._metadata = {
          notifier: "WARNING!\nSerialized payload was " + n.length / 1e6 + "MB (limit = 1MB)\nmetadata was removed",
        }),
        (n = Te(e, null, null, { redactedPaths: Ce, redactedKeys: t })),
        n.length > 1e6)
      )
        throw new Error("payload exceeded 1MB limit");
      return n;
    }),
      (qe.session = function (e, t) {
        var n = Te(e, null, null);
        if (n.length > 1e6) throw new Error("payload exceeded 1MB limit");
        return n;
      });
    var De = {};
    De = function (e, t) {
      return (
        void 0 === t && (t = window),
        {
          sendEvent: function (n, r) {
            void 0 === r && (r = function () {});
            var o = Ae(e._config, "notify", "4", t),
              a = new t.XDomainRequest();
            (a.onload = function () {
              r(null);
            }),
              a.open("POST", o),
              setTimeout(function () {
                try {
                  a.send(qe.event(n, e._config.redactedKeys));
                } catch (t) {
                  e._logger.error(t), r(t);
                }
              }, 0);
          },
          sendSession: function (n, r) {
            void 0 === r && (r = function () {});
            var o = Ae(e._config, "sessions", "1", t),
              a = new t.XDomainRequest();
            (a.onload = function () {
              r(null);
            }),
              a.open("POST", o),
              setTimeout(function () {
                try {
                  a.send(qe.session(n, e._config.redactedKeys));
                } catch (t) {
                  e._logger.error(t), r(t);
                }
              }, 0);
          },
        }
      );
    };
    var Ae = function (e, t, n, r) {
        var o = JSON.parse(JSON.stringify(new Date())),
          a = Pe(e.endpoints[t], r.location.protocol);
        return (
          a + "?apiKey=" + encodeURIComponent(e.apiKey) + "&payloadVersion=" + n + "&sentAt=" + encodeURIComponent(o)
        );
      },
      Pe = (De._matchPageProtocol = function (e, t) {
        return "http:" === t ? e.replace(/^https:/, "http:") : e;
      }),
      Ve = function (e, t) {
        return (
          void 0 === t && (t = window),
          {
            sendEvent: function (n, r) {
              void 0 === r && (r = function () {});
              try {
                var o = e._config.endpoints.notify,
                  a = new t.XMLHttpRequest();
                (a.onreadystatechange = function () {
                  a.readyState === t.XMLHttpRequest.DONE && r(null);
                }),
                  a.open("POST", o),
                  a.setRequestHeader("Content-Type", "application/json"),
                  a.setRequestHeader("Bugsnag-Api-Key", n.apiKey || e._config.apiKey),
                  a.setRequestHeader("Bugsnag-Payload-Version", "4"),
                  a.setRequestHeader("Bugsnag-Sent-At", new Date().toISOString()),
                  a.send(qe.event(n, e._config.redactedKeys));
              } catch (t) {
                e._logger.error(t);
              }
            },
            sendSession: function (n, r) {
              void 0 === r && (r = function () {});
              try {
                var o = e._config.endpoints.sessions,
                  a = new t.XMLHttpRequest();
                (a.onreadystatechange = function () {
                  a.readyState === t.XMLHttpRequest.DONE && r(null);
                }),
                  a.open("POST", o),
                  a.setRequestHeader("Content-Type", "application/json"),
                  a.setRequestHeader("Bugsnag-Api-Key", e._config.apiKey),
                  a.setRequestHeader("Bugsnag-Payload-Version", "1"),
                  a.setRequestHeader("Bugsnag-Sent-At", new Date().toISOString()),
                  a.send(qe.session(n, e._config.redactedKeys));
              } catch (t) {
                e._logger.error(t);
              }
            },
          }
        );
      },
      Ie = new Date(),
      He = function () {
        Ie = new Date();
      },
      Ke = {
        name: "appDuration",
        load: function (e) {
          return (
            e.addOnError(function (e) {
              var t = new Date();
              e.app.duration = t - Ie;
            }, !0),
            { reset: He }
          );
        },
      },
      $e = function (e) {
        return (
          void 0 === e && (e = window),
          {
            load: function (t) {
              t.addOnError(function (t) {
                void 0 === t.context && (t.context = e.location.pathname);
              }, !0);
            },
          }
        );
      },
      Ue = function (e, t) {
        var n = "000000000" + e;
        return n.substr(n.length - t);
      },
      Xe = "object" == typeof window ? window : self,
      Fe = 0;
    for (var Je in Xe) Object.hasOwnProperty.call(Xe, Je) && Fe++;
    var We = navigator.mimeTypes ? navigator.mimeTypes.length : 0,
      ze = Ue((We + navigator.userAgent.length).toString(36) + Fe.toString(36), 4),
      Ge = function () {
        return ze;
      },
      Qe = 0,
      Ye = 4,
      Ze = 36,
      et = Math.pow(Ze, Ye);
    p.fingerprint = Ge;
    var tt = p,
      nt = "bugsnag-anonymous-id",
      rt = function () {
        try {
          var e = window.localStorage,
            t = e.getItem(nt);
          return t && /^c[a-z0-9]{20,32}$/.test(t) ? t : ((t = tt()), e.setItem(nt, t), t);
        } catch (e) {}
      },
      ot = function (e, t) {
        return (
          void 0 === e && (e = navigator),
          void 0 === t && (t = window.screen),
          {
            load: function (n) {
              var r = {
                locale: e.browserLanguage || e.systemLanguage || e.userLanguage || e.language,
                userAgent: e.userAgent,
              };
              t && t.orientation && t.orientation.type
                ? (r.orientation = t.orientation.type)
                : (r.orientation =
                    document.documentElement.clientWidth > document.documentElement.clientHeight
                      ? "landscape"
                      : "portrait"),
                n._config.generateAnonymousId && (r.id = rt()),
                n.addOnSession(function (e) {
                  e.device = q({}, e.device, r);
                }),
                n.addOnError(function (e) {
                  e.device = q({}, e.device, r, { time: new Date() });
                }, !0);
            },
            configSchema: {
              generateAnonymousId: {
                validate: function (e) {
                  return e === !0 || e === !1;
                },
                defaultValue: function () {
                  return !0;
                },
                message: "should be true|false",
              },
            },
          }
        );
      },
      at = function (e) {
        return (
          void 0 === e && (e = window),
          {
            load: function (t) {
              t.addOnError(function (t) {
                (t.request && t.request.url) || (t.request = q({}, t.request, { url: e.location.href }));
              }, !0);
            },
          }
        );
      },
      it = {
        load: function (e) {
          e._sessionDelegate = st;
        },
      },
      st = {
        startSession: function (e, t) {
          var n = e;
          return (
            (n._session = t),
            (n._pausedSession = null),
            null === n._config.enabledReleaseStages || O(n._config.enabledReleaseStages, n._config.releaseStage)
              ? (n._delivery.sendSession({
                  notifier: n._notifier,
                  device: t.device,
                  app: t.app,
                  sessions: [{ id: t.id, startedAt: t.startedAt, user: t._user }],
                }),
                n)
              : (n._logger.warn("Session not sent due to releaseStage/enabledReleaseStages configuration"), n)
          );
        },
        resumeSession: function (e) {
          return e._session
            ? e
            : e._pausedSession
              ? ((e._session = e._pausedSession), (e._pausedSession = null), e)
              : e.startSession();
        },
        pauseSession: function (e) {
          (e._pausedSession = e._session), (e._session = null);
        },
      },
      ut = {
        load: function (e) {
          e._config.collectUserIp ||
            e.addOnError(function (e) {
              e._user && "undefined" == typeof e._user.id && delete e._user.id,
                (e._user = q({ id: "[REDACTED]" }, e._user)),
                (e.request = q({ clientIp: "[REDACTED]" }, e.request));
            });
        },
        configSchema: {
          collectUserIp: {
            defaultValue: function () {
              return !0;
            },
            message: "should be true|false",
            validate: function (e) {
              return e === !0 || e === !1;
            },
          },
        },
      },
      ct = {};
    ct.load = function (e) {
      var t = /^dev(elopment)?$/.test(e._config.releaseStage);
      e._config.enabledBreadcrumbTypes &&
        O(e._config.enabledBreadcrumbTypes, "log") &&
        !t &&
        C(lt, function (t) {
          var n = console[t];
          (console[t] = function () {
            for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++) o[a] = arguments[a];
            e.leaveBreadcrumb(
              "Console output",
              w(
                o,
                function (e, t, n) {
                  var r = "[Unknown value]";
                  try {
                    r = String(t);
                  } catch (e) {}
                  if ("[object Object]" === r)
                    try {
                      r = JSON.stringify(t);
                    } catch (e) {}
                  return (e["[" + n + "]"] = r), e;
                },
                { severity: 0 === t.indexOf("group") ? "log" : t }
              ),
              "log"
            ),
              n.apply(console, o);
          }),
            (console[t]._restore = function () {
              console[t] = n;
            });
        });
    };
    var lt = E(["log", "debug", "info", "warn", "error"], function (e) {
        return "undefined" != typeof console && "function" == typeof console[e];
      }),
      dt = 200,
      ft = 5e5,
      ht = function (e, t) {
        return (
          void 0 === e && (e = document),
          void 0 === t && (t = window),
          {
            load: function (n) {
              function r(e, t, n) {
                return (
                  void 0 === n && (n = !1),
                  function () {
                    var r = [].slice.call(arguments);
                    try {
                      var o = t(r),
                        a = o.get();
                      if ((n && e.apply(this, r), "function" != typeof a)) return e.apply(this, r);
                      if (a.__trace__) o.replace(a.__trace__);
                      else {
                        var i = f();
                        (a.__trace__ = function () {
                          d(i),
                            p(function () {
                              d(null);
                            }, 0);
                          var e = a.apply(this, arguments);
                          return d(null), e;
                        }),
                          (a.__trace__.__trace__ = a.__trace__),
                          o.replace(a.__trace__);
                      }
                    } catch (e) {}
                    if (e.apply) return e.apply(this, r);
                    switch (r.length) {
                      case 1:
                        return e(r[0]);
                      case 2:
                        return e(r[0], r[1]);
                      default:
                        return e();
                    }
                  }
                );
              }
              if (n._config.trackInlineScripts) {
                var o = t.location.href,
                  a = "",
                  i = !!e.attachEvent,
                  s = i ? "complete" === e.readyState : "loading" !== e.readyState,
                  u = function () {
                    return e.documentElement.outerHTML;
                  };
                a = u();
                var c = e.onreadystatechange;
                e.onreadystatechange = function () {
                  "interactive" === e.readyState && ((a = u()), (s = !0));
                  try {
                    c.apply(this, arguments);
                  } catch (e) {}
                };
                var l = null,
                  d = function (e) {
                    l = e;
                  },
                  f = function () {
                    var t = e.currentScript || l;
                    if (!t && !s) {
                      var n = e.scripts || e.getElementsByTagName("script");
                      t = n[n.length - 1];
                    }
                    return t;
                  },
                  h = function (e) {
                    (s && a) || (a = u());
                    var t = ["<!-- DOC START -->"].concat(a.split("\n")),
                      n = e - 1,
                      r = Math.max(n - 3, 0),
                      o = Math.min(n + 3, t.length);
                    return w(
                      t.slice(r, o),
                      function (e, t, n) {
                        return (e[r + 1 + n] = t.length <= dt ? t : t.substr(0, dt)), e;
                      },
                      {}
                    );
                  };
                n.addOnError(function (e) {
                  e.errors[0].stacktrace = E(e.errors[0].stacktrace, function (e) {
                    return !/__trace__$/.test(e.method);
                  });
                  var t = e.errors[0].stacktrace[0];
                  if (!t || !t.file || t.file.replace(/#.*$/, "") === o.replace(/#.*$/, "")) {
                    var n = f();
                    if (n) {
                      var r = n.innerHTML;
                      e.addMetadata("script", "content", r.length <= ft ? r : r.substr(0, ft)),
                        t && t.lineNumber && (t.code = h(t.lineNumber));
                    }
                  }
                }, !0);
                var g = C(["setTimeout", "setInterval", "setImmediate", "requestAnimationFrame"], function (e) {
                    return v(t, e, function (e) {
                      return r(e, function (e) {
                        return {
                          get: function () {
                            return e[0];
                          },
                          replace: function (t) {
                            e[0] = t;
                          },
                        };
                      });
                    });
                  }),
                  p = g[0];
                C(
                  [
                    "EventTarget",
                    "Window",
                    "Node",
                    "ApplicationCache",
                    "AudioTrackList",
                    "ChannelMergerNode",
                    "CryptoOperation",
                    "EventSource",
                    "FileReader",
                    "HTMLUnknownElement",
                    "IDBDatabase",
                    "IDBRequest",
                    "IDBTransaction",
                    "KeyOperation",
                    "MediaController",
                    "MessagePort",
                    "ModalWindow",
                    "Notification",
                    "SVGElementInstance",
                    "Screen",
                    "TextTrack",
                    "TextTrackCue",
                    "TextTrackList",
                    "WebSocket",
                    "WebSocketWorker",
                    "Worker",
                    "XMLHttpRequest",
                    "XMLHttpRequestEventTarget",
                    "XMLHttpRequestUpload",
                  ],
                  function (e) {
                    t[e] &&
                      t[e].prototype &&
                      Object.prototype.hasOwnProperty.call(t[e].prototype, "addEventListener") &&
                      (v(t[e].prototype, "addEventListener", function (e) {
                        return r(e, m);
                      }),
                      v(t[e].prototype, "removeEventListener", function (e) {
                        return r(e, m, !0);
                      }));
                  }
                );
              }
            },
            configSchema: {
              trackInlineScripts: {
                validate: function (e) {
                  return e === !0 || e === !1;
                },
                defaultValue: function () {
                  return !0;
                },
                message: "should be true|false",
              },
            },
          }
        );
      },
      gt = function (e) {
        return (
          void 0 === e && (e = window),
          {
            load: function (t) {
              "addEventListener" in e &&
                t._config.enabledBreadcrumbTypes &&
                O(t._config.enabledBreadcrumbTypes, "user") &&
                e.addEventListener(
                  "click",
                  function (n) {
                    var r, o;
                    try {
                      (r = pt(n.target)), (o = y(n.target, e));
                    } catch (e) {
                      (r = "[hidden]"),
                        (o = "[hidden]"),
                        t._logger.error(
                          "Cross domain error when tracking click event. See docs: https://tinyurl.com/yy3rn63z"
                        );
                    }
                    t.leaveBreadcrumb("UI click", { targetText: r, targetSelector: o }, "user");
                  },
                  !0
                );
            },
          }
        );
      },
      pt = function (e) {
        var t = e.textContent || e.innerText || "";
        return (
          t || ("submit" !== e.type && "button" !== e.type) || (t = e.value),
          (t = t.replace(/^\s+|\s+$/g, "")),
          b(t, 140)
        );
      },
      vt = {};
    vt = function (e) {
      void 0 === e && (e = window);
      var t = {
        load: function (t) {
          if (
            "addEventListener" in e &&
            t._config.enabledBreadcrumbTypes &&
            O(t._config.enabledBreadcrumbTypes, "navigation")
          ) {
            var n = function (e) {
              return function () {
                return t.leaveBreadcrumb(e, {}, "navigation");
              };
            };
            e.addEventListener("pagehide", n("Page hidden"), !0),
              e.addEventListener("pageshow", n("Page shown"), !0),
              e.addEventListener("load", n("Page loaded"), !0),
              e.document.addEventListener("DOMContentLoaded", n("DOMContentLoaded"), !0),
              e.addEventListener("load", function () {
                return e.addEventListener("popstate", n("Navigated back"), !0);
              }),
              e.addEventListener(
                "hashchange",
                function (n) {
                  var r = n.oldURL
                    ? { from: mt(n.oldURL, e), to: mt(n.newURL, e), state: _t(e) }
                    : { to: mt(e.location.href, e) };
                  t.leaveBreadcrumb("Hash changed", r, "navigation");
                },
                !0
              ),
              e.history.replaceState && bt(t, e.history, "replaceState", e),
              e.history.pushState && bt(t, e.history, "pushState", e),
              t.leaveBreadcrumb("Bugsnag loaded", {}, "navigation");
          }
        },
      };
      return t;
    };
    var mt = function (e, t) {
        var n = t.document.createElement("A");
        return (n.href = e), "" + n.pathname + n.search + n.hash;
      },
      yt = function (e, t, n, r) {
        var o = mt(e.location.href, e);
        return { title: n, state: t, prevState: _t(e), to: r || o, from: o };
      },
      bt = function (e, t, n, r) {
        var o = t[n];
        t[n] = function (a, i, s) {
          e.leaveBreadcrumb("History " + n, yt(r, a, i, s), "navigation"),
            "function" == typeof e.resetEventCount && e.resetEventCount(),
            e._config.autoTrackSessions && e.startSession(),
            o.apply(t, [a, i].concat(void 0 !== s ? s : []));
        };
      },
      _t = function (e) {
        try {
          return e.history.state;
        } catch (e) {}
      },
      St = "request",
      wt = "BS~~S",
      Et = "BS~~U",
      Ot = "BS~~M",
      Nt = function (e, t) {
        void 0 === e && (e = []), void 0 === t && (t = window);
        var n = {
          load: function (n) {
            function r() {
              if ("addEventListener" in t.XMLHttpRequest.prototype) {
                var e = t.XMLHttpRequest.prototype.open;
                t.XMLHttpRequest.prototype.open = function (t, n) {
                  (this[Et] = n),
                    (this[Ot] = t),
                    this[wt] && (this.removeEventListener("load", o), this.removeEventListener("error", a)),
                    this.addEventListener("load", o),
                    this.addEventListener("error", a),
                    (this[wt] = !0),
                    e.apply(this, arguments);
                };
              }
            }
            function o() {
              if (!O(s, this[Et])) {
                var e = { status: this.status, request: this[Ot] + " " + this[Et] };
                this.status >= 400
                  ? n.leaveBreadcrumb("XMLHttpRequest failed", e, St)
                  : n.leaveBreadcrumb("XMLHttpRequest succeeded", e, St);
              }
            }
            function a() {
              O(s, this[Et]) || n.leaveBreadcrumb("XMLHttpRequest error", { request: this[Ot] + " " + this[Et] }, St);
            }
            function i() {
              if ("fetch" in t && !t.fetch.polyfill) {
                var e = t.fetch;
                t.fetch = function () {
                  var t,
                    n = arguments,
                    r = arguments[0],
                    o = arguments[1],
                    a = null;
                  return (
                    r && "object" == typeof r
                      ? ((a = r.url), o && "method" in o ? (t = o.method) : r && "method" in r && (t = r.method))
                      : ((a = r), o && "method" in o && (t = o.method)),
                    void 0 === t && (t = "GET"),
                    new Promise(function (r, o) {
                      e.apply(void 0, n)
                        .then(function (e) {
                          u(e, t, a), r(e);
                        })
                        .catch(function (e) {
                          c(t, a), o(e);
                        });
                    })
                  );
                };
              }
            }
            if (n._config.enabledBreadcrumbTypes && O(n._config.enabledBreadcrumbTypes, "request")) {
              var s = [n._config.endpoints.notify, n._config.endpoints.sessions].concat(e);
              r(), i();
              var u = function (e, t, r) {
                  var o = { status: e.status, request: t + " " + r };
                  e.status >= 400
                    ? n.leaveBreadcrumb("fetch() failed", o, St)
                    : n.leaveBreadcrumb("fetch() succeeded", o, St);
                },
                c = function (e, t) {
                  n.leaveBreadcrumb("fetch() error", { request: e + " " + t }, St);
                };
            }
          },
        };
        return n;
      },
      jt = {
        load: function (e) {
          var t = 0;
          e.addOnError(function (n) {
            return !(t >= e._config.maxEvents) && void t++;
          }),
            (e.resetEventCount = function () {
              t = 0;
            });
        },
        configSchema: {
          maxEvents: {
            defaultValue: function () {
              return 10;
            },
            message: "should be a positive integer ≤100",
            validate: function (e) {
              return T(1, 100)(e);
            },
          },
        },
      },
      kt = {};
    kt = {
      load: function (e) {
        e.addOnError(function (e) {
          var t = w(
            e.errors,
            function (e, t) {
              return e.concat(t.stacktrace);
            },
            []
          );
          C(t, function (e) {
            e.file = Tt(e.file);
          });
        });
      },
    };
    var xt,
      Tt = (kt._strip = function (e) {
        return "string" == typeof e ? e.replace(/\?.*$/, "").replace(/#.*$/, "") : e;
      }),
      Bt = function (e) {
        return (
          void 0 === e && (e = window),
          {
            load: function (t) {
              function n(e, n, o, a, i) {
                if (0 === o && /Script error\.?/.test(e))
                  t._logger.warn("Ignoring cross-domain or eval script error. See docs: https://tinyurl.com/yy3rn63z");
                else {
                  var s,
                    u = { severity: "error", unhandled: !0, severityReason: { type: "unhandledException" } };
                  if (i) (s = t.Event.create(i, !0, u, "window onerror", 1)), Lt(s.errors[0].stacktrace, n, o, a);
                  else if ("object" != typeof e || null === e || (n && "string" == typeof n) || o || a || i)
                    (s = t.Event.create(e, !0, u, "window onerror", 1)), Lt(s.errors[0].stacktrace, n, o, a);
                  else {
                    var c = e.type ? "Event: " + e.type : "Error",
                      l = e.message || e.detail || "";
                    (s = t.Event.create({ name: c, message: l }, !0, u, "window onerror", 1)),
                      (s.originalError = e),
                      s.addMetadata("window onerror", { event: e, extraParameters: n });
                  }
                  t._notify(s);
                }
                "function" == typeof r && r.apply(this, arguments);
              }
              if (t._config.autoDetectErrors && t._config.enabledErrorTypes.unhandledExceptions) {
                var r = e.onerror;
                e.onerror = n;
              }
            },
          }
        );
      },
      Lt = function (e, t, n, r) {
        e[0] || e.push({});
        var o = e[0];
        o.file || "string" != typeof t || (o.file = t),
          !o.lineNumber && Rt(n) && (o.lineNumber = n),
          o.columnNumber ||
            (Rt(r)
              ? (o.columnNumber = r)
              : window.event && Rt(window.event.errorCharacter) && (o.columnNumber = window.event.errorCharacter));
      },
      Rt = function (e) {
        return "number" == typeof e && "NaN" !== String.call(e);
      },
      Mt = function (e) {
        void 0 === e && (e = window);
        var t = {
          load: function (t) {
            if (t._config.autoDetectErrors && t._config.enabledErrorTypes.unhandledRejections) {
              var n = function (e) {
                var n = e.reason,
                  r = !1;
                try {
                  e.detail && e.detail.reason && ((n = e.detail.reason), (r = !0));
                } catch (e) {}
                var o = t.Event.create(
                  n,
                  !1,
                  { severity: "error", unhandled: !0, severityReason: { type: "unhandledPromiseRejection" } },
                  "unhandledrejection handler",
                  1,
                  t._logger
                );
                r && C(o.errors[0].stacktrace, qt(n)),
                  t._notify(o, function (e) {
                    if (F(e.originalError) && !e.originalError.stack) {
                      var t;
                      e.addMetadata(
                        "unhandledRejection handler",
                        ((t = {}),
                        (t[Object.prototype.toString.call(e.originalError)] = {
                          name: e.originalError.name,
                          message: e.originalError.message,
                          code: e.originalError.code,
                        }),
                        t)
                      );
                    }
                  });
              };
              "addEventListener" in e
                ? e.addEventListener("unhandledrejection", n)
                : (e.onunhandledrejection = function (e, t) {
                    n({ detail: { reason: e, promise: t } });
                  }),
                (xt = n);
            }
          },
        };
        return t;
      },
      qt = function (e) {
        return function (t) {
          t.file !== e.toString() && t.method && (t.method = t.method.replace(/^\s+/, ""));
        };
      },
      Ct = {},
      Dt = "Bugsnag JavaScript",
      At = "7.10.1",
      Pt = "https://github.com/bugsnag/bugsnag-js",
      Vt = q({}, R.schema, A),
      It = {
        _client: null,
        createClient: function (e) {
          "string" == typeof e && (e = { apiKey: e }), e || (e = {});
          var t = [Ke, ot(), $e(), at(), jt, it, ut, kt, Bt(), Mt(), vt(), gt(), Nt(), ct, ht()],
            n = new xe(e, Vt, t, { name: Dt, version: At, url: Pt });
          return (
            n._setDelivery(window.XDomainRequest ? De : Ve),
            n._logger.debug("Loaded!"),
            n._config.autoTrackSessions ? n.startSession() : n
          );
        },
        start: function (e) {
          return It._client
            ? (It._client._logger.warn("Bugsnag.start() was called more than once. Ignoring."), It._client)
            : ((It._client = It.createClient(e)), It._client);
        },
      };
    return (
      C(["resetEventCount"].concat(x(xe.prototype)), function (e) {
        /^_/.test(e) ||
          (It[e] = function () {
            if (!It._client) return console.log("Bugsnag." + e + "() was called before Bugsnag.start()");
            It._client._depth += 1;
            var t = It._client[e].apply(It._client, arguments);
            return (It._client._depth -= 1), t;
          });
      }),
      (Ct = It),
      (Ct.Client = xe),
      (Ct.Event = ie),
      (Ct.Session = Ee),
      (Ct.Breadcrumb = I),
      (Ct.default = It),
      Ct
    );
  });
}).call(this);
(function () {
  var t,
    e,
    i = function (t, e) {
      return function () {
        return t.apply(e, arguments);
      };
    },
    n =
      [].indexOf ||
      function (t) {
        for (var e = 0, i = this.length; e < i; e++) if (e in this && this[e] === t) return e;
        return -1;
      },
    o = [].slice;
  (e = function (t) {
    var e;
    if (((e = {}), t in e)) return "https://assets.ticketinghub.com/checkout/" + e[t];
    throw new Error("asset not found: " + t);
  }),
    (t = window.$th || (window.$th = {})),
    (t.Script = (function () {
      function e(e) {
        var n, o;
        (this.element = e),
          (this.addTicketinghubLink = i(this.addTicketinghubLink, this)),
          (this.getScriptAttributes = i(this.getScriptAttributes, this)),
          (this.setupScript = i(this.setupScript, this)),
          this.element &&
            ((this.options = {
              context: "customer",
              layout: "button",
              landing: "tickets",
              color: "#FFFFFF",
              footer: !0,
              discounts: !0,
              subscribe: !0,
              avs: !1,
              free: !1,
              "referral-code-param-name": "th-reseller-ref",
              "coupon-param-name": "th-coupon",
            }),
            (null != (n = this.element.attributes.getNamedItem("data-widget")) ? n.value : void 0)
              ? ((o = new t.WidgetSettingsImporter(this.element)), o.getSettings(this.setupScript))
              : this.setupScript());
      }
      return (
        (e.prototype.setupScript = function (e) {
          var i, r, s, a, c, p, l, u, h, d, m, f, b, g, w, y;
          b = this.getScriptAttributes();
          for (w in e) (y = e[w]), (this.options[w] = y);
          new RegExp("^" + document.referrer).test(window.location.protocol + "//" + window.location.host) ||
            (this.options.referrer = document.referrer);
          for (i in b) (y = b[i]), (this.options[i] = y);
          d = window.thSharedOptions || {};
          for (i in d) (y = d[i]), (this.options[i] = y);
          this.options.product && ((this.options.products = this.options.product), delete this.options.product),
            (s = this.options).fields ||
              (s.fields = "customer" === this.options.context ? "name,email,telephone" : "name,telephone"),
            "button" !== this.options.layout ||
              (null == window.orientation && window.top === window) ||
              (this.options.layout = "mobile"),
            "pkey" in this.options && (this.options.channel = this.options.pkey),
            (r = t.getUrlParams(window.location.href).avs) && (this.options.avs = r),
            (h = ["group-tickets-above", "show-capacity-below", "event-period", "week-start-day"]),
            (m = this.options);
          for (u in m)
            (y = m[u]),
              n.call(h, u) < 0 &&
                ("1" === y || "yes" === y || "enabled" === y || "visible" === y || "true" === y
                  ? (this.options[u] = !0)
                  : ("0" !== y && "no" !== y && "disabled" !== y && "hidden" !== y && "false" !== y) ||
                    (this.options[u] = !1));
          (this.options["referral-code"] = t.getReferralCode(this.options["referral-code-param-name"])),
            (this.options["coupon-code"] = t.getUrlParams(window.location.href)[this.options["coupon-param-name"]]),
            (this.options["payment-request"] =
              this.options["payment-request"] || t.getUrlParams(window.location.href)["payment-request"]),
            this.options["booking-management-mode"] &&
              (this.options.booking_id = this.options.booking_id || t.getUrlParams(window.location.href).t),
            (p = ["stylesheet", "translations"]),
            (f = this.options);
          for (u in f) (y = f[u]), n.call(p, u) >= 0 && (this.options[u] = t.getAbsoluteUrl(y));
          return (
            (l = (function (e) {
              return function () {
                return (
                  (e.button = new t.Button(e.element, e.options)),
                  e.button.click(function () {
                    var t;
                    return e.frame.open(
                      "function" == typeof (t = e.button.element).getBoundingClientRect
                        ? t.getBoundingClientRect()
                        : void 0
                    );
                  }),
                  e.frame.receive(function () {
                    var t, i, n;
                    switch (((t = arguments[0]), (i = 2 <= arguments.length ? o.call(arguments, 1) : []), t)) {
                      case "ready":
                        return (n = e.button).enable.apply(n, i);
                    }
                  })
                );
              };
            })(this)),
            null == t.scripts && (t.scripts = {}),
            (g = JSON.stringify(this.options, Object.keys(this.options).sort())),
            (c = t.scripts[g]),
            null == (a = t.scripts)[g] && (a[g] = this),
            t.domready(
              (function (e) {
                return function () {
                  var i, n;
                  return (
                    "embed" !== e.options.layout && (null != c ? c.frame : void 0)
                      ? ((e.frame = c.frame), l())
                      : ((e.frame = new t.Frame(e.element, e.options)),
                        (i = new t.CheckoutAnalyticsManager()),
                        e.options["google-ua"] !== !1 && (e.analytics3 = new t.GoogleAnalytics(e.options["google-ua"])),
                        e.options["ga-track-purchases"] !== !1 &&
                          (null != window.gtag
                            ? ((n = new t.GtagListener(e.options)), i.subscribeToAll(n))
                            : e.options["ga-tag-id"] &&
                              ((n = new t.GtagListener(e.options)), n.initializeByGoogleTagID(), i.subscribeToAll(n))),
                        e.frame.receive(function () {
                          var n, r, s, a;
                          switch (((n = arguments[0]), (r = 2 <= arguments.length ? o.call(arguments, 1) : []), n)) {
                            case "ga":
                              return null != (s = e.analytics3) ? s.ga.apply(s, r) : void 0;
                            case "checkout_analytics":
                              return i.notify.apply(i, r);
                            case "fb_pixel":
                              return "function" == typeof window.fbq ? window.fbq.apply(window, r) : void 0;
                            case "order:external-payment":
                              return t.dispatchEvent(e.element, "th:order:external-payment", {
                                detail: r[0],
                                bubbles: !0,
                              });
                            case "order:confirmed":
                              return t.dispatchEvent(e.element, "th:order:confirmed", { detail: r[0], bubbles: !0 });
                            case "ticketinghub:checkout:order:confirmed":
                              return t.dispatchEvent(e.element, "ticketinghub:checkout:order:confirmed", {
                                detail: r[0],
                                bubbles: !0,
                              });
                            case "questions_per_order:answered":
                              return t.dispatchEvent(e.element, "th:questions_per_order:answered", {
                                detail: r[0],
                                bubbles: !0,
                              });
                            case "pageview":
                              return t.dispatchEvent(e.element, "th:pageview", { detail: r[0], bubbles: !0 });
                            case "ready":
                              return t.dispatchEvent(e.element, "th:widget:ready", {
                                detail: { options: e.options },
                                bubbles: !0,
                              });
                            case "getScriptOnTopSameDomainWindow":
                              return (a = t.topSameDomainWindow()), t.getScript.apply(a, r);
                            case "close":
                              return e.frame.close();
                          }
                        }),
                        "embed" === e.options.layout ? e.frame.open() : l()),
                    e.addTicketinghubLink()
                  );
                };
              })(this)
            )
          );
        }),
        (e.prototype.getScriptAttributes = function () {
          var t, e, i, n, o, r;
          for (e = {}, r = this.element.attributes, i = 0, n = r.length; i < n; i++)
            (t = r[i]),
              (o = t.nodeName.match(/^data\-(.+)$/)) &&
                (t.value || t.nodeValue) &&
                (e[o[1]] = (t.value || t.nodeValue).trim());
          return e;
        }),
        (e.prototype.addTicketinghubLink = function () {
          var t, e;
          return (
            (e = document.createElement("a")),
            e.setAttribute("href", "https://www.ticketinghub.com"),
            e.setAttribute("style", "display:none !important;"),
            (t = document.createTextNode("www.ticketinghub.com")),
            e.appendChild(t),
            this.element.parentNode.insertBefore(e, this.element)
          );
        }),
        e
      );
    })());
}).call(this);
(function () {
  !(function (t, e) {
    "object" == typeof module && module.exports
      ? (module.exports = e())
      : "function" == typeof define && define.amd
        ? define(e)
        : (t.Spinner = e());
  })(this, function () {
    "use strict";
    function t(t, e) {
      var i,
        o = document.createElement(t || "div");
      for (i in e) o[i] = e[i];
      return o;
    }
    function e(t) {
      for (var e = 1, i = arguments.length; e < i; e++) t.appendChild(arguments[e]);
      return t;
    }
    function i(t, e, i, o) {
      var n = ["opacity", e, ~~(100 * t), i, o].join("-"),
        r = 0.01 + (i / o) * 100,
        s = Math.max(1 - ((1 - t) / e) * (100 - r), t),
        a = c.substring(0, c.indexOf("Animation")).toLowerCase(),
        l = (a && "-" + a + "-") || "";
      return (
        u[n] ||
          (d.insertRule(
            "@" +
              l +
              "keyframes " +
              n +
              "{0%{opacity:" +
              s +
              "}" +
              r +
              "%{opacity:" +
              t +
              "}" +
              (r + 0.01) +
              "%{opacity:1}" +
              ((r + e) % 100) +
              "%{opacity:" +
              t +
              "}100%{opacity:" +
              s +
              "}}",
            d.cssRules.length
          ),
          (u[n] = 1)),
        n
      );
    }
    function o(t, e) {
      var i,
        o,
        n = t.style;
      if (((e = e.charAt(0).toUpperCase() + e.slice(1)), void 0 !== n[e])) return e;
      for (o = 0; o < p.length; o++) if (((i = p[o] + e), void 0 !== n[i])) return i;
    }
    function n(t, e) {
      for (var i in e) t.style[o(t, i) || i] = e[i];
      return t;
    }
    function r(t) {
      for (var e = 1; e < arguments.length; e++) {
        var i = arguments[e];
        for (var o in i) void 0 === t[o] && (t[o] = i[o]);
      }
      return t;
    }
    function s(t, e) {
      return "string" == typeof t ? t : t[e % t.length];
    }
    function a(t) {
      this.opts = r(t || {}, a.defaults, f);
    }
    function l() {
      function i(e, i) {
        return t("<" + e + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', i);
      }
      d.addRule(".spin-vml", "behavior:url(#default#VML)"),
        (a.prototype.lines = function (t, o) {
          function r() {
            return n(i("group", { coordsize: d + " " + d, coordorigin: -c + " " + -c }), { width: d, height: d });
          }
          function a(t, a, l) {
            e(
              u,
              e(
                n(r(), { rotation: (360 / o.lines) * t + "deg", left: ~~a }),
                e(
                  n(i("roundrect", { arcsize: o.corners }), {
                    width: c,
                    height: o.scale * o.width,
                    left: o.scale * o.radius,
                    top: (-o.scale * o.width) >> 1,
                    filter: l,
                  }),
                  i("fill", { color: s(o.color, t), opacity: o.opacity }),
                  i("stroke", { opacity: 0 })
                )
              )
            );
          }
          var l,
            c = o.scale * (o.length + o.width),
            d = 2 * o.scale * c,
            p = -(o.width + o.length) * o.scale * 2 + "px",
            u = n(r(), { position: "absolute", top: p, left: p });
          if (o.shadow)
            for (l = 1; l <= o.lines; l++)
              a(l, -2, "progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");
          for (l = 1; l <= o.lines; l++) a(l);
          return e(t, u);
        }),
        (a.prototype.opacity = function (t, e, i, o) {
          var n = t.firstChild;
          (o = (o.shadow && o.lines) || 0),
            n &&
              e + o < n.childNodes.length &&
              ((n = n.childNodes[e + o]), (n = n && n.firstChild), (n = n && n.firstChild), n && (n.opacity = i));
        });
    }
    var c,
      d,
      p = ["webkit", "Moz", "ms", "O"],
      u = {},
      f = {
        lines: 12,
        length: 7,
        width: 5,
        radius: 10,
        scale: 1,
        corners: 1,
        color: "#000",
        opacity: 0.25,
        rotate: 0,
        direction: 1,
        speed: 1,
        trail: 100,
        fps: 20,
        zIndex: 2e9,
        className: "spinner",
        top: "50%",
        left: "50%",
        shadow: !1,
        hwaccel: !1,
        position: "absolute",
      };
    if (
      ((a.defaults = {}),
      r(a.prototype, {
        spin: function (e) {
          this.stop();
          var i = this,
            o = i.opts,
            r = (i.el = t(null, { className: o.className }));
          if (
            (n(r, { position: o.position, width: 0, zIndex: o.zIndex, left: o.left, top: o.top }),
            e && e.insertBefore(r, e.firstChild || null),
            r.setAttribute("role", "progressbar"),
            i.lines(r, i.opts),
            !c)
          ) {
            var s,
              a = 0,
              l = ((o.lines - 1) * (1 - o.direction)) / 2,
              d = o.fps,
              p = d / o.speed,
              u = (1 - o.opacity) / ((p * o.trail) / 100),
              f = p / o.lines;
            !(function t() {
              a++;
              for (var e = 0; e < o.lines; e++)
                (s = Math.max(1 - ((a + (o.lines - e) * f) % p) * u, o.opacity)),
                  i.opacity(r, e * o.direction + l, s, o);
              i.timeout = i.el && setTimeout(t, ~~(1e3 / d));
            })();
          }
          return i;
        },
        stop: function () {
          var t = this.el;
          return (
            t && (clearTimeout(this.timeout), t.parentNode && t.parentNode.removeChild(t), (this.el = void 0)), this
          );
        },
        lines: function (o, r) {
          function a(e, i) {
            return n(t(), {
              position: "absolute",
              width: r.scale * (r.length + r.width) + "px",
              height: r.scale * r.width + "px",
              background: e,
              boxShadow: i,
              transformOrigin: "left",
              transform:
                "rotate(" + ~~((360 / r.lines) * d + r.rotate) + "deg) translate(" + r.scale * r.radius + "px,0)",
              borderRadius: ((r.corners * r.scale * r.width) >> 1) + "px",
            });
          }
          for (var l, d = 0, p = ((r.lines - 1) * (1 - r.direction)) / 2; d < r.lines; d++)
            (l = n(t(), {
              position: "absolute",
              top: 1 + ~((r.scale * r.width) / 2) + "px",
              transform: r.hwaccel ? "translate3d(0,0,0)" : "",
              opacity: r.opacity,
              animation:
                c && i(r.opacity, r.trail, p + d * r.direction, r.lines) + " " + 1 / r.speed + "s linear infinite",
            })),
              r.shadow && e(l, n(a("#000", "0 0 4px #000"), { top: "2px" })),
              e(o, e(l, a(s(r.color, d), "0 0 1px rgba(0,0,0,.1)")));
          return o;
        },
        opacity: function (t, e, i) {
          e < t.childNodes.length && (t.childNodes[e].style.opacity = i);
        },
      }),
      "undefined" != typeof document)
    ) {
      d = (function () {
        var i = t("style", { type: "text/css" });
        return e(document.getElementsByTagName("head")[0], i), i.sheet || i.styleSheet;
      })();
      var h = n(t("group"), { behavior: "url(#default#VML)" });
      !o(h, "transform") && h.adj ? l() : (c = o(h, "animation"));
    }
    return a;
  });
}).call(this);
(function () {
  var t;
  (t = function (t) {
    var n;
    if (((n = {}), t in n)) return "https://assets.ticketinghub.com/checkout/" + n[t];
    throw new Error("asset not found: " + t);
  }),
    (window.$th.isElementVisible = function (t) {
      var n;
      return (
        "function" == typeof jQuery && t instanceof jQuery && (t = t[0]),
        (n = t.getBoundingClientRect()),
        n.top >= 0 &&
          n.left >= 0 &&
          n.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          n.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    });
}).call(this);
(function () {
  (window.$th.animateScroll = function t(n, i, e, a, s, o) {
    if (window.requestAnimationFrame) {
      a = a ? a : 0;
      var u = document.documentElement,
        r = u.clientHeight,
        c = "scrollMaxY" in window ? window.scrollMaxY : u.scrollHeight - r,
        h = window.pageYOffset,
        l = h,
        d = isNaN(n) ? n.getBoundingClientRect() : 0;
      "center" === s
        ? ((l += isNaN(n) ? d.top + d.height / 2 : n), (l -= r / 2), (l -= a))
        : "bottom" === s
          ? ((l += d.bottom || n), (l -= r), (l += a))
          : ((l += d.top || n), (l -= a)),
        (l = Math.max(Math.min(c, l), 0));
      var f = l - h,
        w = {
          targetY: l,
          deltaY: f,
          duration: i ? i : 0,
          easing: e in t.Easing ? t.Easing[e] : t.Easing.linear,
          onFinish: o,
          startTime: Date.now(),
          lastY: h,
          step: t.step,
        };
      window.requestAnimationFrame(w.step.bind(w));
    }
  }),
    ($th.animateScroll.Easing = {
      linear: function (t) {
        return t;
      },
      easeInQuad: function (t) {
        return t * t;
      },
      easeOutQuad: function (t) {
        return t * (2 - t);
      },
      easeInOutQuad: function (t) {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      },
      easeInCubic: function (t) {
        return t * t * t;
      },
      easeOutCubic: function (t) {
        return --t * t * t + 1;
      },
      easeInOutCubic: function (t) {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
      },
      easeInQuart: function (t) {
        return t * t * t * t;
      },
      easeOutQuart: function (t) {
        return 1 - --t * t * t * t;
      },
      easeInOutQuart: function (t) {
        return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
      },
      easeInQuint: function (t) {
        return t * t * t * t * t;
      },
      easeOutQuint: function (t) {
        return 1 + --t * t * t * t * t;
      },
      easeInOutQuint: function (t) {
        return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
      },
    }),
    ($th.animateScroll.step = function () {
      if (this.lastY !== window.pageYOffset && this.onFinish) return void this.onFinish();
      var t = Math.min((Date.now() - this.startTime) / this.duration, 1),
        n = this.targetY - (1 - this.easing(t)) * this.deltaY;
      window.scrollTo(window.scrollX, n),
        1 !== t
          ? ((this.lastY = window.pageYOffset), window.requestAnimationFrame(this.step.bind(this)))
          : this.onFinish && this.onFinish();
    });
}).call(this);
(function () {
  var t;
  (t = function (t) {
    var e;
    if (((e = {}), t in e)) return "https://assets.ticketinghub.com/checkout/" + e[t];
    throw new Error("asset not found: " + t);
  }),
    (window.$th.addStyle = function (t, e, s, r) {
      t.style.setProperty ? t.style.setProperty(e, "") : t.style.setAttribute(e, ""),
        t.setAttribute("style", t.style.cssText + e + ":" + s + (r ? " !important" : "") + ";");
    });
}).call(this);
(function () {
  var t;
  (t = function (t) {
    var n;
    if (((n = {}), t in n)) return "https://assets.ticketinghub.com/checkout/" + n[t];
    throw new Error("asset not found: " + t);
  }),
    (window.$th.extend = function (t) {
      var n, r;
      for (t = t || {}, n = 1; n < arguments.length; )
        if (arguments[n]) {
          for (r in arguments[n]) arguments[n].hasOwnProperty(r) && (t[r] = arguments[n][r]);
          n++;
        } else n++;
      return t;
    });
}).call(this);
(function () {
  var t,
    i,
    e,
    n,
    o,
    r,
    s,
    a,
    d,
    h,
    l,
    c,
    u,
    f = function (t, i) {
      return function () {
        return t.apply(i, arguments);
      };
    },
    w = [].slice;
  (e = function (t) {
    var i;
    if (
      ((i = {
        "index.html": "index-fb7bdcb7d9940754b34b94e6695f632050fc0c96.html",
        "index-queueit.html": "index-queueit-8df9765b6997adfc91d458f1b075df2e0c226d8e.html",
        "safari_cookie_fix.html": "safari_cookie_fix-e671b45710ffda22a69796c53b32c3a4ad47acb2.html",
      }),
      t in i)
    )
      return "https://assets.ticketinghub.com/checkout/" + i[t];
    throw new Error("asset not found: " + t);
  }),
    (t = "https://assets.ticketinghub.com"),
    (n = !1),
    ($th.widget_index_html_url = e("index.html")),
    (i = function (t, i, e) {
      return null != t.addEventListener
        ? t.addEventListener(i, e, !1)
        : t.attachEvent("on" + i, function () {
            return e.call(t, window.event);
          });
    }),
    (h = function (t) {
      return t || window.event, "function" == typeof t.preventDefault && t.preventDefault(), (t.retrunValue = !1);
    }),
    (l = function (t) {
      if (keys[t.keyCode]) return h(t), !1;
    }),
    (c = ["wheel", "mousewheel", "DOMMouseScroll", "touchmove", "scroll"]);
  for (r = 0, a = c.length; r < a; r++)
    (o = c[r]),
      i(window, o, function (t) {
        if (n) return h(t);
      });
  for (u = ["keydown", "mousewheel"], s = 0, d = u.length; s < d; s++)
    (o = u[s]),
      i(document, "keydown", function (t) {
        if (n) return h(t);
      });
  window.location.origin ||
    (window.location.origin =
      window.location.protocol +
      "//" +
      window.location.hostname +
      (window.location.port ? ":" + window.location.port : "")),
    (window.$th.Frame = (function () {
      function o(t, i) {
        switch (
          ((this.script = t),
          (this.options = i),
          (this.applyCustomWidgetOrigin = f(this.applyCustomWidgetOrigin, this)),
          (this.notifyIframeAboutParentWindowSize = f(this.notifyIframeAboutParentWindowSize, this)),
          (this.optionsForWidget = f(this.optionsForWidget, this)),
          (this.widgetUrl = f(this.widgetUrl, this)),
          (this.listenOnMessagesFromWidget = f(this.listenOnMessagesFromWidget, this)),
          (this.widgetOrigin = f(this.widgetOrigin, this)),
          (this._events = { receive: [] }),
          this.receive(
            (function (t) {
              return function () {
                var i, n;
                return (
                  (n = arguments[0]),
                  (i = 2 <= arguments.length ? w.call(arguments, 1) : []),
                  "safari_cookie_fix" !== n || document.cookie.match(/th_safari_cookie_fix_redirect/)
                    ? "redirect_to_url_on_success" === n && t.options["url-to-redirect-on-success"]
                      ? window.location.replace(t.options["url-to-redirect-on-success"])
                      : "redirect_to_url" === n
                        ? window.location.replace(i[0])
                        : void 0
                    : ((document.cookie = "th_safari_cookie_fix_redirect=redirected; path=/"),
                      window.location.replace(t.applyCustomWidgetOrigin(e("safari_cookie_fix.html"))))
                );
              };
            })(this)
          ),
          this.options.layout)
        ) {
          case "embed":
          case "button":
            switch (
              ((this.iframe = document.createElement("iframe")),
              (this.iframe.allowtransparency = "true"),
              (this.iframe.id = this.options.widget),
              (this.iframe.allowPaymentRequest = "true"),
              (this.iframe.allow = "payment"),
              (this.iframe.frameBorder = "0"),
              this.options.layout)
            ) {
              case "embed":
                (this.iframe.style.border = "none"),
                  (this.iframe.style.borderCollapse = "collapse"),
                  (this.iframe.style.background = "transparent"),
                  (this.iframe.style.overflow = "hidden"),
                  (this.iframe.style.width = "100%"),
                  (this.iframe.style.height = "200px"),
                  (this.iframe.style.minHeight = "200px"),
                  this.receive(
                    (function (t) {
                      return function () {
                        var i, e;
                        if (
                          ((e = arguments[0]),
                          (i = 2 <= arguments.length ? w.call(arguments, 1) : []),
                          "setFrameHeight" === e && (t.iframe.style.height = i[0]),
                          "scrollTheWindow" === e &&
                            ($th.isElementVisible(t.iframe) || $th.animateScroll(t.iframe, 500, "easeInOutQuint", 10)),
                          "redirectToQueueIt" === e)
                        )
                          return (t.iframe.style.height = "625px");
                      };
                    })(this)
                  );
                break;
              case "button":
                $th.addStyle(this.iframe, "display", "none", !0),
                  (this.iframe.style.zIndex = "16777271"),
                  (this.iframe.style.border = "2px none transparent"),
                  (this.iframe.style.overflowX = "hidden"),
                  (this.iframe.style.overflowY = "auto"),
                  (this.iframe.style.margin = "0px"),
                  (this.iframe.style.padding = "0px"),
                  $th.addStyle(this.iframe, "position", "fixed", !0),
                  (this.iframe.style.top = "0px"),
                  (this.iframe.style.left = "0px"),
                  (this.iframe.style.width = "100%"),
                  (this.iframe.style.height = "100%"),
                  (this.iframe.style.wekbitTapHighlightColor = "transparent"),
                  this.receive(
                    (function (t) {
                      return function (i) {
                        if ("closed" === i) return $th.addStyle(t.iframe, "display", "none", !0), (n = !1);
                      };
                    })(this)
                  );
            }
            "button" === this.options.layout || "HEAD" === this.script.parentNode.nodeName
              ? window.document.body.appendChild(this.iframe)
              : this.script.parentNode.insertBefore(this.iframe, this.script),
              (this.window = this.iframe.contentWindow || this.iframe),
              this.iframe.setAttribute("src", this.widgetUrl());
        }
        this.notifyIframeAboutParentWindowSize(), this.listenOnMessagesFromWidget();
      }
      return (
        (o.prototype.widgetOrigin = function () {
          return null != this._widgetOrigin
            ? this._widgetOrigin
            : (this._widgetOrigin = this.widgetUrl().split("/").slice(0, 3).join("/"));
        }),
        (o.prototype.listenOnMessagesFromWidget = function () {
          var t;
          return (
            (t = (function (t) {
              return function () {
                var i, e, n, o, r, s;
                for (
                  i = 1 <= arguments.length ? w.call(arguments, 0) : [],
                    r = t._events.receive,
                    s = [],
                    n = 0,
                    o = r.length;
                  n < o;
                  n++
                )
                  (e = r[n]),
                    s.push(
                      (function (t) {
                        return setTimeout(function () {
                          return "function" == typeof t ? t.apply(null, i) : void 0;
                        }, 0);
                      })(e)
                    );
                return s;
              };
            })(this)),
            window.addEventListener(
              "message",
              (function (i) {
                return function (e) {
                  var n;
                  if (e.origin === i.widgetOrigin())
                    return e.source === i.window ? ((n = JSON.parse(e.message || e.data)), t.apply(null, n)) : void 0;
                };
              })(this),
              !1
            )
          );
        }),
        (o.prototype.widgetUrl = function () {
          var t;
          return null != this._widgetUrl
            ? this._widgetUrl
            : (this._widgetUrl =
                ((t = e(this.options.queueit ? "index-queueit.html" : "index.html")),
                (t = this.applyCustomWidgetOrigin(t)),
                (t += t.indexOf("#") === -1 ? "#" : "&"),
                t + ("options=" + encodeURIComponent(JSON.stringify(this.optionsForWidget())))));
        }),
        (o.prototype.optionsForWidget = function () {
          var t, i;
          return (
            (t = $th.extend({}, this.options)),
            (t.origin = "null" === window.location.origin ? "*" : window.location.origin),
            (t.parentWidth = null != (i = document.documentElement) ? i.clientWidth : void 0),
            delete t["widget-domain"],
            t
          );
        }),
        (o.prototype.notifyIframeAboutParentWindowSize = function () {
          var t;
          return (
            (t = (function (t) {
              return function () {
                var i;
                return (
                  (i = {
                    client_width: document.documentElement.clientWidth,
                    client_height: document.documentElement.clientHeight,
                    screen_left: window.screenLeft,
                    screen_top: window.screenTop,
                    inner_width: innerWidth,
                    inner_height: window.innerHeight,
                  }),
                  t.send("resize", i)
                );
              };
            })(this)),
            i(window, "resize", t),
            this.receive(
              (function (i) {
                return function (i) {
                  if ("ready" === i) return t();
                };
              })(this)
            )
          );
        }),
        (o.prototype.receive = function (t) {
          return this._events.receive.push(t);
        }),
        (o.prototype.send = function () {
          var t, i;
          return (
            (t = 1 <= arguments.length ? w.call(arguments, 0) : []),
            null != (i = this.window) ? i.postMessage(JSON.stringify(t), this.widgetOrigin()) : void 0
          );
        }),
        (o.prototype.open = function () {
          var t, i, e, o, r, s, a, d, h, l, c;
          switch (((t = 1 <= arguments.length ? w.call(arguments, 0) : []), this.options.layout)) {
            case "button":
              return (
                (this.overflow = document.body.style.overlow),
                $th.addStyle(this.iframe, "display", "block", !0),
                (n = !0),
                this.send.apply(this, ["open"].concat(w.call(t))),
                (this.buttonBoundingClientRect = t[0])
              );
            case "mobile":
              return (
                (this.window =
                  null != window.orientation
                    ? window.open(this.widgetUrl())
                    : ((d = window.innerWidth || (null != (r = document.body) ? r.clientWidth : void 0)),
                      (i = window.innerHeight || (null != (s = document.body) ? s.clientHeight : void 0)),
                      (l = window.screenTop || window.screenX),
                      (c = window.screenLeft || window.screenY),
                      (h = 360),
                      (e = 600),
                      (o = (d - h) / 2 + c),
                      (a = (i - e) / 2 + l),
                      window.open(
                        this.widgetUrl(),
                        "checkoutjs",
                        "top=" +
                          a +
                          ",left=" +
                          o +
                          ",width=" +
                          h +
                          ",height=" +
                          e +
                          ",toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,copyhistory=no"
                      ))),
                this.window.focus()
              );
            case "embed":
              if (this.options.width) return (this.iframe.style.width = this.options.width);
              if ((this.iframe.offsetWidth > 320 && (this.iframe.style.width = "320px"), this.iframe.offsetWidth < 280))
                return (this.iframe.style.width = "280px");
          }
        }),
        (o.prototype.close = function () {
          switch (this.options.layout) {
            case "button":
              this.send("close", this.buttonBoundingClientRect);
              break;
            case "mobile":
              this.window.close();
          }
        }),
        (o.prototype.isiOSSafari = function () {
          var t, i, e, n;
          return (
            (n = (window.navigator.userAgent || window.navigator.vendor || window.opera).toLowerCase()),
            (i = /safari/.test(n)),
            (t = /iphone|ipod|ipad/.test(n)),
            (e = /(chrome|crios|opios|mercury|fxios)/.test(n)),
            i && t && !e
          );
        }),
        (o.prototype.customWidgetOrigin = function () {
          if (this.options["widget-domain"]) return "https://" + this.options["widget-domain"];
        }),
        (o.prototype.applyCustomWidgetOrigin = function (i) {
          return this.customWidgetOrigin() && 0 === i.indexOf(t) && this.customWidgetOrigin() !== t
            ? i.replace(t, this.customWidgetOrigin())
            : i;
        }),
        o
      );
    })());
}).call(this);
(function () {
  var t, e, n;
  (e = function (t) {
    var e;
    if (((e = {}), t in e)) return "https://assets.ticketinghub.com/checkout/" + e[t];
    throw new Error("asset not found: " + t);
  }),
    (t = function (t) {
      var e, n;
      return (
        (n = document.createElement("style")),
        (e = document.getElementsByTagName("head")[0]),
        e.firstChild ? e.insertBefore(n, e.firstChild) : e.appendChild(n),
        n.styleSheet ? (n.styleSheet.cssText = t) : n.appendChild(document.createTextNode(t))
      );
    }),
    (n = window.$th)._button_index || (n._button_index = 0),
    (window.$th.Button = (function () {
      function e(e, n) {
        var o, i, s, c;
        (this.options = n),
          (this._events = { click: [] }),
          (this._index = ++window.$th._button_index),
          (c = e.innerHTML
            .replace("// <![CDATA[", "")
            .replace("//]]>", "")
            .replace(/^\s+|\s+$/gm, ""))
            ? ((this.custom = !0),
              (i = document.createElement("div")),
              (i.innerHTML = c),
              (this.element = i.children[0]))
            : ((this.custom = !1),
              (this.element = document.createElement("span")),
              this.element.setAttribute("class", "th-checkout-button-" + this._index + " th-checkout-button"),
              this.options["button-id"] && this.element.setAttribute("id", this.options["button-id"]),
              "mobile" !== this.options.layout && this.disable(),
              (s = "#000000"),
              (o = "#FFFFFF"),
              (this.element.innerHTML = "🎟️ Get tickets"),
              "none" !== this.options["button-style"] &&
                t(
                  ".th-checkout-button-" +
                    this._index +
                    " {\n  color: " +
                    s +
                    ";\n  font-family: 'Lexend Deca', sans-serif;\n  font-size: 16px;\n  background: " +
                    o +
                    ";\n  padding: 14px 0;\n  border-radius: 5px;\n  cursor: pointer;\n  width: 160px;\n  text-align: center;\n  box-sizing: border-box;\n  border: none;\n  display: inline-block;\n  line-height: 21px;\n}\n\n.th-checkout-button-" +
                    this._index +
                    "-icon {\n  fill: " +
                    s +
                    ";\n  display: inline;\n  vertical-align: text-top;\n}\n\n.th-checkout-button-" +
                    this._index +
                    ":focus {\n  outline: none;\n}\n\n.th-checkout-button-" +
                    this._index +
                    ":active {\n  box-shadow: inset 0 4px 5px rgba(0,0,0,0.2)\n}\n\n.th-checkout-button-" +
                    this._index +
                    "[disabled] {\n  box-shadow: none;\n  padding: 12px 0;\n  border: 2px solid #c6c6c6;\n  background: white;\n  color: #c6c6c6;\n}\n\n.th-checkout-button-" +
                    this._index +
                    "[disabled] .th-checkout-button-" +
                    this._index +
                    "-icon {\n  fill: #c6c6c6;\n}"
                )),
          "HEAD" === e.parentNode.tagName
            ? document.body.appendChild(this.element)
            : e.parentNode.insertBefore(this.element, e),
          (this.element.onclick = (function (t) {
            return function () {
              var e, n, o, i;
              if (!t.disabled) {
                for (i = t._events.click, n = 0, o = i.length; n < o; n++) (e = i[n])();
                return !1;
              }
            };
          })(this));
      }
      return (
        (e.prototype.disable = function () {
          return (
            (this.disabled = !0),
            (this.element.style.cursor = "progress"),
            this.element.setAttribute("disabled", "disabled")
          );
        }),
        (e.prototype.enable = function (t) {
          if (
            ((this.disabled = !1),
            (this.element.style.cursor = "pointer"),
            this.element.removeAttribute("disabled"),
            !this.custom && !this.options["button-background-color"] && t)
          )
            return (this.element.style.background = t);
        }),
        (e.prototype.click = function (t) {
          return this._events.click.push(t);
        }),
        e
      );
    })());
}).call(this);
(function () {
  var t, n, e;
  (n = function (t) {
    var n;
    if (((n = {}), t in n)) return "https://assets.ticketinghub.com/checkout/" + n[t];
    throw new Error("asset not found: " + t);
  }),
    (t = window.$th || (window.$th = {}));
  try {
    if (((e = new window.CustomEvent("test", { detail: { foo: "bar" } })), "test" !== e.type || "bar" !== e.detail.foo))
      throw "invalid event";
    t.dispatchEvent = function (t, n, e) {
      return t.dispatchEvent(new window.CustomEvent(n, e));
    };
  } catch (n) {
    t.dispatchEvent = function (t, n, o) {
      return (
        "function" == typeof document.createEvent &&
        ((e = document.createEvent("CustomEvent")),
        e.initCustomEvent(
          n,
          Boolean(null != o ? o.bubbles : void 0),
          Boolean(null != o ? o.cancelable : void 0),
          null != o ? o.detail : void 0
        ),
        t.dispatchEvent(e))
      );
    };
  }
}).call(this);
(function () {
  window.$th.domready = (function () {
    function t(t) {
      for (s = 1; (t = n.shift()); ) t();
    }
    var e,
      n = [],
      o = !1,
      c = document,
      d = c.documentElement,
      a = d.doScroll,
      r = "DOMContentLoaded",
      u = "addEventListener",
      i = "onreadystatechange",
      f = "readyState",
      l = a ? /^loaded|^c/ : /^loaded|c/,
      s = l.test(c[f]);
    return (
      c[u] &&
        c[u](
          r,
          (e = function () {
            c.removeEventListener(r, e, o), t();
          }),
          o
        ),
      a &&
        c.attachEvent(
          i,
          (e = function () {
            /^c/.test(c[f]) && (c.detachEvent(i, e), t());
          })
        ),
      (ready = a
        ? function (t) {
            self != top
              ? s
                ? t()
                : n.push(t)
              : (function () {
                  try {
                    d.doScroll("left");
                  } catch (e) {
                    return setTimeout(function () {
                      ready(t);
                    }, 50);
                  }
                  t();
                })();
          }
        : function (t) {
            s ? t() : n.push(t);
          })
    );
  })();
}).call(this);
(function () {
  var t,
    n,
    a = function (t, n) {
      return function () {
        return t.apply(n, arguments);
      };
    },
    i = [].slice;
  (n = function (t) {
    var n;
    if (((n = {}), t in n)) return "https://assets.ticketinghub.com/checkout/" + n[t];
    throw new Error("asset not found: " + t);
  }),
    (t = window.$th || (window.$th = {})),
    (t.GoogleAnalytics = (function () {
      function t(t) {
        (this.isGoogleAnalytics3Instantiated = a(this.isGoogleAnalytics3Instantiated, this)),
          (this.instantiateGaByUa = a(this.instantiateGaByUa, this)),
          (this.getAccountIdFromGaq = a(this.getAccountIdFromGaq, this)),
          (this.ga = a(this.ga, this)),
          (this.instantiateGa = a(this.instantiateGa, this)),
          this.instantiateGa(t);
      }
      return (
        (t.prototype.instantiateGa = function (t) {
          if (t) return this.instantiateGaByUa(t);
          if ("ga" in window);
          else if ("_gaq" in window && (t = this.getAccountIdFromGaq())) return this.instantiateGaByUa(t);
        }),
        (t.prototype.ga = function () {
          var t, n, a, e, o, s, c;
          if (
            ((t = arguments[0]),
            (o = 2 <= arguments.length ? i.call(arguments, 1) : []),
            this.isGoogleAnalytics3Instantiated())
          ) {
            if (ga.getByName("th")) return window.ga.apply(window, ["th." + t].concat(i.call(o)));
            for (e = ga.getAll(), s = [], n = 0, a = e.length; n < a; n++)
              (c = e[n]), s.push(window.ga.apply(window, [c.get("name") + "." + t].concat(i.call(o))));
            return s;
          }
        }),
        (t.prototype.getAccountIdFromGaq = function () {
          var t, n, a;
          if (window._gaq._getAsyncTracker) return window._gaq._getAsyncTracker()._getAccount();
          for (t = 0, n = _gaq.length; t < n; t++) if (((a = _gaq[t]), "_setAccount" === a[0])) return a[1];
        }),
        (t.prototype.instantiateGaByUa = function (t) {
          return (
            window.ga ||
              !(function (t, n, a, i, e, o, s) {
                return (
                  (t.GoogleAnalyticsObject = e),
                  (t[e] =
                    t[e] ||
                    function () {
                      (t[e].q = t[e].q || []).push(arguments);
                    }),
                  (t[e].l = 1 * new Date()),
                  (o = n.createElement(a)),
                  (s = n.getElementsByTagName(a)[0]),
                  (o.async = 1),
                  (o.src = i),
                  s.parentNode.insertBefore(o, s)
                );
              })(window, document, "script", "//www.google-analytics.com/analytics.js", "ga"),
            window.ga("create", t, "auto", "th")
          );
        }),
        (t.prototype.isGoogleAnalytics3Instantiated = function () {
          var t;
          return null != (t = window.ga) ? t.getAll : void 0;
        }),
        t
      );
    })());
}).call(this);
(function () {
  var t,
    i,
    e = function (t, i) {
      return function () {
        return t.apply(i, arguments);
      };
    },
    s =
      [].indexOf ||
      function (t) {
        for (var i = 0, e = this.length; i < e; i++) if (i in this && this[i] === t) return i;
        return -1;
      },
    n = [].slice;
  (i = function (t) {
    var i;
    if (((i = {}), t in i)) return "https://assets.ticketinghub.com/checkout/" + i[t];
    throw new Error("asset not found: " + t);
  }),
    (t = window.$th || (window.$th = {})),
    (t.CheckoutAnalyticsManager = (function () {
      function t() {
        (this.notify = e(this.notify, this)),
          (this.subscribeToAll = e(this.subscribeToAll, this)),
          (this.subscribe = e(this.subscribe, this)),
          (this.listenersHash = {});
      }
      return (
        (t.prototype.EVENTS = [
          "page_view",
          "success",
          "view_times",
          "select_time",
          "add_payment_info",
          "purchase",
          "select_date",
          "view_calendar",
          "purchase_as_gift_voucher",
          "add_shipping_info",
          "view_shipping",
          "view_tickets",
          "view_extras",
          "add_tickets_to_cart",
          "add_extras_to_cart",
          "add_voucher_to_cart",
          "view_payment_info",
          "view_cart",
        ]),
        (t.prototype.subscribe = function (t, i) {
          var e;
          if (s.call(this.EVENTS, t) < 0) throw new Error("Event not supported");
          return (e = this.listenersHash)[t] || (e[t] = []), this.listenersHash[t].push(i);
        }),
        (t.prototype.subscribeToAll = function (t) {
          var i, e, s, n, r;
          for (n = this.EVENTS, r = [], e = 0, s = n.length; e < s; e++) (i = n[e]), r.push(this.subscribe(i, t));
          return r;
        }),
        (t.prototype.notify = function () {
          var t, i, e, s, r, o, c;
          for (
            i = arguments[0],
              t = 2 <= arguments.length ? n.call(arguments, 1) : [],
              o = this.listenersHash[i] || [],
              c = [],
              e = 0,
              s = o.length;
            e < s;
            e++
          )
            (r = o[e]),
              c.push(
                setTimeout(
                  (function (e) {
                    return function () {
                      return r.notify.apply(r, [i].concat(n.call(t)));
                    };
                  })(this),
                  0
                )
              );
          return c;
        }),
        t
      );
    })());
}).call(this);
(function () {
  var t, n;
  (n = function (t) {
    var n;
    if (((n = {}), t in n)) return "https://assets.ticketinghub.com/checkout/" + n[t];
    throw new Error("asset not found: " + t);
  }),
    (t = window.$th || (window.$th = {})),
    (window.$th.getOrderForJsEvent = function (t) {
      return t._endpoint.get({ view: "for_js_event" }).then(function (t) {
        return t.body;
      });
    });
}).call(this);
(function () {
  var t,
    e,
    i = function (t, e) {
      return function () {
        return t.apply(e, arguments);
      };
    },
    r = [].slice;
  (e = function (t) {
    var e;
    if (((e = {}), t in e)) return "https://assets.ticketinghub.com/checkout/" + e[t];
    throw new Error("asset not found: " + t);
  }),
    (t = window.$th || (window.$th = {})),
    (t.GtagListener = (function () {
      function e(t) {
        (this.options = t),
          (this.initializeByGoogleTagID = i(this.initializeByGoogleTagID, this)),
          (this.getCouponCodeFromBookings = i(this.getCouponCodeFromBookings, this)),
          (this.itemsTotalPrice = i(this.itemsTotalPrice, this)),
          (this.itemFromPurchase = i(this.itemFromPurchase, this)),
          (this.itemFromTier = i(this.itemFromTier, this)),
          (this.voucherItems = i(this.voucherItems, this)),
          (this.ticketItems = i(this.ticketItems, this)),
          (this.purchaseItems = i(this.purchaseItems, this)),
          (this.cartItemsFromOrder = i(this.cartItemsFromOrder, this)),
          (this.notify = i(this.notify, this)),
          (this.gtag = i(this.gtag, this));
      }
      return (
        (e.prototype.gtag = function () {
          var t, e;
          if (((t = arguments[0]), (e = 2 <= arguments.length ? r.call(arguments, 1) : []), null != window.gtag))
            return (
              (e = Object.assign.apply(
                Object,
                [{}].concat(r.call(e), [
                  {
                    store_name: this.getStoreName(this.options.origin),
                    widget_id: this.options.widget,
                    widget_name: this.options.name,
                  },
                ])
              )),
              window.gtag("event", t, e)
            );
        }),
        (e.prototype.getStoreName = function () {
          var t, e, i;
          return (
            (t = new URL(window.location.origin).hostname),
            (i = null != t && null != (e = t.split(".")) ? e[0] : void 0),
            i || t
          );
        }),
        (e.prototype.notify = function () {
          var t, e, i, n, a, o;
          switch (((e = arguments[0]), (t = 2 <= arguments.length ? r.call(arguments, 1) : []), e)) {
            case "view_cart":
              return this.gtag("view_cart", this.cartItemsFromOrder(t[0]));
            case "add_payment_info":
              return this.gtag(
                "add_payment_info",
                Object.assign({}, this.cartItemsFromOrder(t[0]), {
                  payment_type: null != (n = t[0].payments) && null != (a = n[0]) ? a.label : void 0,
                })
              );
            case "purchase":
              return this.gtag(
                "purchase",
                Object.assign({}, this.cartItemsFromOrder(t[0]), { transaction_id: t[0].id })
              );
            case "add_shipping_info":
              return this.gtag("add_shipping_info", this.cartItemsFromOrder(t[0]));
            case "view_extras":
              return this.gtag("view_item", this.purchaseItems(t[0]));
            case "add_extras_to_cart":
              return this.gtag("add_to_cart", this.purchaseItems(t[0]));
            case "view_tickets":
              return this.gtag("view_item", this.ticketItems(t[0]));
            case "add_tickets_to_cart":
              return this.gtag("add_to_cart", this.ticketItems(t[0]));
            case "add_voucher_to_cart":
              return (o = t[0]), (i = t[1]), this.gtag("add_to_cart", this.voucherItems(o, i));
            case "purchase_as_gift_voucher":
              return this.gtag("select_purchase_gift");
            default:
              return this.gtag.apply(this, [e].concat(r.call(t)));
          }
        }),
        (e.prototype.cartItemsFromOrder = function (t) {
          var e, i, r, n, a, o, s, c, u, h, m, g, p, l, d, _, f, y, v, w, I;
          for (n = [], l = t.bookings, r = 0, c = l.length; r < c; r++) {
            for (e = l[r], d = e.tickets, a = 0, u = d.length; a < u; a++)
              (w = d[a]),
                n.push({
                  item_name: w.tier.name,
                  affiliation: this.getStoreName(),
                  currency: t.currency,
                  item_category: w.tier.tier_type,
                  item_variant: "ticket",
                  item_brand: e.product.name,
                  price: w.total,
                  quantity: 1,
                });
            for (_ = e.purchases, o = 0, h = _.length; o < h; o++)
              (f = _[o]),
                (i = f.extra),
                (p = f.quantity),
                (I = f.total),
                n.push({
                  item_name: i.name,
                  affiliation: this.getStoreName(),
                  currency: t.currency,
                  item_variant: "extra",
                  price: I / p,
                  quantity: p,
                });
          }
          for (y = t.merchandise_purchases, s = 0, m = y.length; s < m; s++)
            (v = y[s]),
              (g = v.merchandise),
              (p = v.quantity),
              (I = v.total),
              n.push({
                item_name: g.name,
                affiliation: this.getStoreName(),
                currency: t.currency,
                item_variant: "merchandise",
                price: I / p,
                quantity: p,
              });
          return { coupon: this.getCouponCodeFromBookings(t.bookings), currency: t.currency, value: t.total, items: n };
        }),
        (e.prototype.purchaseItems = function (t) {
          var e;
          return (
            (e = t.map(
              (function (t) {
                return function (e) {
                  return t.itemFromPurchase(e);
                };
              })(this)
            )),
            { value: this.itemsTotalPrice(e), items: e }
          );
        }),
        (e.prototype.ticketItems = function (t) {
          var e;
          return (
            (e = t.map(
              (function (t) {
                return function (e) {
                  return t.itemFromTier(e);
                };
              })(this)
            )),
            { value: this.itemsTotalPrice(e), items: e }
          );
        }),
        (e.prototype.voucherItems = function (t, e) {
          var i, n, a;
          return (
            (a = t.map(
              (function (t) {
                return function (e) {
                  return t.itemFromTier(e);
                };
              })(this)
            )),
            (n = e.map(function (t) {
              return this.itemFromPurchase(t);
            })),
            (i = r.call(a).concat(r.call(n))),
            { value: this.itemsTotalPrice(i), items: i }
          );
        }),
        (e.prototype.itemFromTier = function (t) {
          var e, i, r;
          return (
            (r = t.price.split(" ")),
            (e = r[0]),
            (i = r[1]),
            {
              item_name: t.tier_name,
              affiliation: this.getStoreName(),
              currency: e.toUpperCase(),
              item_category: t.tier_type,
              item_variant: "ticket",
              price: parseFloat(i),
              quantity: t.quantity,
            }
          );
        }),
        (e.prototype.itemFromPurchase = function (t) {
          var e, i, r;
          return (
            (r = t.extra_price.split(" ")),
            (e = r[0]),
            (i = r[1]),
            {
              item_name: t.extra_name,
              affiliation: this.getStoreName(),
              currency: e.toUpperCase(),
              item_variant: "extra",
              price: parseFloat(i),
              quantity: t.quantity,
            }
          );
        }),
        (e.prototype.itemsTotalPrice = function (t) {
          return t.length
            ? t
                .map(function (t) {
                  return t.price;
                })
                .reduce(function (t, e) {
                  return t + e;
                })
            : 0;
        }),
        (e.prototype.getCouponCodeFromBookings = function (t) {
          var e, i;
          return (
            (i = (function () {
              var i, r, n;
              for (n = [], i = 0, r = t.length; i < r; i++) (e = t[i]), e.coupon_code && n.push(e.coupon_code);
              return n;
            })()),
            i.length > 0 ? i[0] : null
          );
        }),
        (e.prototype.initializeByGoogleTagID = function () {
          var e;
          return (
            (e = t.topSameDomainWindow()),
            t.getScript.apply(e, [
              "https://www.googletagmanager.com/gtag/js?id=" + this.options["ga-tag-id"],
              (function (t) {
                return function () {
                  return (
                    (window.dataLayer = window.dataLayer || []),
                    (window.gtag = function () {
                      return window.dataLayer.push(arguments);
                    }),
                    gtag("js", new Date()),
                    gtag("config", t.options["ga-tag-id"], { debug_mode: t.options["ga-enable-debug-mode"] || !1 })
                  );
                };
              })(this),
            ])
          );
        }),
        e
      );
    })());
}).call(this);
(function () {
  window.$th.getScript = function (e, t) {
    var a = this.document.getElementsByTagName("head")[0],
      n = this.document.createElement("script");
    (n.async = !0),
      (n.src = e),
      (n.onload = n.onreadystatechange =
        function () {
          (n.readyState && !/loaded|complete/.test(n.readyState)) ||
            ((n.onload = n.onreadystatechange = null), a && n.parentNode && a.removeChild(n), (n = void 0), t && t());
        }),
      a.insertBefore(n, a.firstChild);
  };
}).call(this);
(function () {
  var t;
  (t = function (t) {
    var e;
    if (((e = {}), t in e)) return "https://assets.ticketinghub.com/checkout/" + e[t];
    throw new Error("asset not found: " + t);
  }),
    (window.$th.getAbsoluteUrl = function (t) {
      var e;
      return t ? ((e = document.createElement("a")), (e.href = t), e.href) : "";
    });
}).call(this);
(function () {
  window.$th.topSameDomainWindow = function (n) {
    for (n = n || window; n.parent != n; ) {
      try {
        n.parent.document;
      } catch (n) {}
      n = n.parent;
    }
    return n;
  };
}).call(this);
(function () {
  var e, o;
  (o = function (e) {
    var o;
    if (((o = {}), e in o)) return "https://assets.ticketinghub.com/checkout/" + o[e];
    throw new Error("asset not found: " + e);
  }),
    (e = window.$th || (window.$th = {})),
    (window.$th.cookies = {
      getCookie: function (e) {
        var o;
        return (o = document.cookie.match("(^|;) ?" + e + "=([^;]*)(;|$)")), o ? o[2] : null;
      },
      setCookie: function (e, o, t) {
        var i;
        (i = new Date()),
          i.setTime(i.getTime() + 864e5 * t),
          (document.cookie = e + "=" + o + ";SameSite=None;secure;path=/;expires=" + i.toGMTString());
      },
      deleteCookie: function (o) {
        e.cookies.setCookie(o, "", -1);
      },
    });
}).call(this);
(function () {
  window.$th.getUrlParams = function (t) {
    var n = {};
    return (
      (t + "?")
        .split("?")[1]
        .split("&")
        .forEach(function (t) {
          (t = (t + "=").split("=").map(decodeURIComponent)), t[0].length && (n[t[0]] = t[1]);
        }),
      n
    );
  };
}).call(this);
(function () {
  var e;
  (e = function (e) {
    var t;
    if (((t = {}), e in t)) return "https://assets.ticketinghub.com/checkout/" + t[e];
    throw new Error("asset not found: " + e);
  }),
    (window.$th.getReferralCode = function (e) {
      var t;
      if ((null != e ? e.length : void 0) > 0)
        return (
          (t = $th.getUrlParams(window.location.href)[e]),
          (null != t ? t.length : void 0) > 0
            ? ((t = t.replace(/['"“”]/g, "")), $th.cookies.setCookie("th-reseller-ref", t, 14), t)
            : $th.cookies.getCookie("th-reseller-ref")
        );
    });
}).call(this);
(function () {
  var t;
  (t = function (t) {
    var e;
    if (((e = {}), t in e)) return "https://assets.ticketinghub.com/checkout/" + e[t];
    throw new Error("asset not found: " + t);
  }),
    (window.$th.xdr = function (t, e, n, o, r, s) {
      var i;
      (i = void 0),
        XMLHttpRequest
          ? ((i = new XMLHttpRequest()),
            "withCredentials" in i &&
              (i.open(e, t, !0),
              (i.onerror = r),
              s && (i.timeout = s),
              (i.onreadystatechange = function () {
                4 === i.readyState &&
                  (i.status >= 200 && i.status < 300
                    ? o(i.responseText)
                    : r(new Error("Response returned with non-OK status")));
              }),
              i.send(n)))
          : XDomainRequest
            ? ((i = new XDomainRequest()),
              i.open(e, t),
              (i.onerror = r),
              (i.onload = function () {
                o(i.responseText);
              }),
              i.send(n))
            : r(new Error("CORS not supported"));
    });
}).call(this);
(function () {
  var n;
  (n = function (n) {
    var t;
    if (((t = {}), n in t)) return "https://assets.ticketinghub.com/checkout/" + t[n];
    throw new Error("asset not found: " + n);
  }),
    (window.$th.getJSON = function (n, t) {
      var o;
      return (
        null == t && (t = {}),
        (o = function (n) {
          return "function" == typeof t.onSuccess ? t.onSuccess(JSON.parse(n)) : void 0;
        }),
        window.$th.xdr(n, "GET", null, o, t.onError, t.timeout)
      );
    });
}).call(this);
(function () {
  var n;
  (n = function (n) {
    var t;
    if (((t = {}), n in t)) return "https://assets.ticketinghub.com/checkout/" + t[n];
    throw new Error("asset not found: " + n);
  }),
    (window.$th.jsonp = (function () {
      var n;
      return (
        (n = {}),
        (n.send = function (n, t) {
          var e, o, c, i, a, u;
          (e = t.callbackName || "callback"),
            (o = t.onSuccess || function () {}),
            (c = t.onTimeout || function () {}),
            (a = t.timeout || 10),
            (u = window.setTimeout(function () {
              (window[e] = function () {}), c();
            }, a)),
            (window[e] = function (n) {
              window.clearTimeout(u), o(JSON.parse(n));
            }),
            (i = document.createElement("script")),
            (i.type = "application/javascript"),
            (i.async = !0),
            (i.src = n),
            document.getElementsByTagName("head")[0].appendChild(i);
        }),
        n
      );
    })());
}).call(this);
(function () {
  var t;
  (t = function (t) {
    var n;
    if (((n = {}), t in n)) return "https://assets.ticketinghub.com/checkout/" + n[t];
    throw new Error("asset not found: " + t);
  }),
    (window.$th.randomString = function (t) {
      var n, o, r;
      for (
        n = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz".split(""),
          "number" != typeof t && (t = Math.floor(Math.random() * n.length_)),
          r = "",
          o = 0;
        o < t;

      )
        (r += n[Math.floor(Math.random() * n.length)]), o++;
      return r;
    });
}).call(this);
(function () {
  var t, n;
  (n = function (t) {
    var n;
    if (((n = {}), t in n)) return "https://assets.ticketinghub.com/checkout/" + n[t];
    throw new Error("asset not found: " + t);
  }),
    (t = window.$th || (window.$th = {})),
    (t.getWidgetEndpoint = function (t) {
      return t ? t : "https://api.ticketinghub.com";
    });
}).call(this);
(function () {
  var t, n, i, r, e;
  (t = function (t) {
    var n;
    if (((n = {}), t in n)) return "https://assets.ticketinghub.com/checkout/" + n[t];
    throw new Error("asset not found: " + t);
  }),
    null == (n = String.prototype).startsWith &&
      (n.startsWith = function (t) {
        return this.slice(0, t.length) === t;
      }),
    null == (i = String.prototype).endsWith &&
      (i.endsWith = function (t) {
        return "" === t || this.slice(-t.length) === t;
      }),
    null == (r = String.prototype).capitalize &&
      (r.capitalize = function (t) {
        return this.charAt(0).toUpperCase() + this.slice(1);
      }),
    null == (e = String.prototype).trim &&
      (e.trim = function () {
        return this.replace(/^\s+|\s+$/g, "");
      });
}).call(this);
(function () {
  var t,
    e,
    n = function (t, e) {
      return function () {
        return t.apply(e, arguments);
      };
    };
  (e = function (t) {
    var e;
    if (((e = {}), t in e)) return "https://assets.ticketinghub.com/checkout/" + e[t];
    throw new Error("asset not found: " + t);
  }),
    (t = window.$th || (window.$th = {})),
    t.widgetSettingsCache || (t.widgetSettingsCache = {}),
    (t.WidgetSettingsImporter = (function () {
      function e(t) {
        (this.normalizeSettings = n(this.normalizeSettings, this)),
          (this.fetchWidgetSettingsFromAPIStoreInCacheAndRunCallbacks = n(
            this.fetchWidgetSettingsFromAPIStoreInCacheAndRunCallbacks,
            this
          )),
          (this.getSettings = n(this.getSettings, this)),
          (this.element = t);
      }
      return (
        (e.prototype.getSettings = function (e) {
          return t.widgetSettingsCache[this.widgetId()]
            ? e(t.widgetSettingsCache[this.widgetId()])
            : (t.callbacksOnWidgetSettingsReceived || (t.callbacksOnWidgetSettingsReceived = {}),
              t.callbacksOnWidgetSettingsReceived[this.widgetId()] ||
                ((t.callbacksOnWidgetSettingsReceived[this.widgetId()] = []),
                this.fetchWidgetSettingsFromAPIStoreInCacheAndRunCallbacks()),
              t.callbacksOnWidgetSettingsReceived[this.widgetId()].push(e));
        }),
        (e.prototype.fetchWidgetSettingsFromAPIStoreInCacheAndRunCallbacks = function () {
          var e, n;
          return (
            (n = (function (e) {
              return function (n) {
                var i, s, r, d;
                for (
                  t.widgetSettingsCache[e.widgetId()] = e.normalizeSettings(n.settings),
                    d = t.callbacksOnWidgetSettingsReceived[e.widgetId()],
                    s = 0,
                    r = d.length;
                  s < r;
                  s++
                )
                  (i = d[s])(t.widgetSettingsCache[e.widgetId()]);
              };
            })(this)),
            (e = (function (t) {
              return function (e) {
                return console.error("could not load widget " + t.widgetId() + " settings " + e + "!");
              };
            })(this)),
            t.getJSON(t.getWidgetEndpoint(this.dataEndpoint()) + "/channel/widgets/" + this.widgetId() + ".js", {
              onSuccess: n,
              onError: (function (i) {
                return function (s) {
                  var r;
                  return "CORS not supported" === s.message
                    ? ((r = "settingsCallback_" + t.randomString(15)),
                      t.jsonp.send(
                        t.getWidgetEndpoint(i.dataEndpoint()) +
                          "/channel/widgets/" +
                          i.widgetId() +
                          ".js?_callback=" +
                          r,
                        { onSuccess: n, callbackName: r, onError: e, timeout: 1e4 }
                      ))
                    : e(s);
                };
              })(this),
              timeout: 1e4,
            })
          );
        }),
        (e.prototype.normalizeSettings = function (t) {
          var e, n, i, s;
          s = {};
          for (n in t) (i = t[n]), i && (s[n] = i);
          for (e in s)
            (i = s[e]),
              i instanceof Array &&
                ((s[e] = i
                  .filter(function (t) {
                    return 0 !== t.length;
                  })
                  .join(",")),
                s[e] || delete s[e]);
          return s;
        }),
        (e.prototype.dataEndpoint = function () {
          var t, e;
          if ((t = this.element.attributes.getNamedItem("data-endpoint")))
            return null != (e = t.value) ? e.trim() : void 0;
        }),
        (e.prototype.widgetId = function () {
          var t, e;
          if ((t = this.element.attributes.getNamedItem("data-widget")))
            return null != (e = t.value) ? e.trim() : void 0;
        }),
        e
      );
    })());
}).call(this);
(function () {
  var t;
  (t = function (t) {
    var n;
    if (((n = {}), t in n)) return "https://assets.ticketinghub.com/checkout/" + n[t];
    throw new Error("asset not found: " + t);
  }),
    (window.$th.isDevelopmentEnv = function () {
      return !1;
    });
}).call(this);
(function () {
  var e, t, n, r, c;
  (e = function (e) {
    var t;
    if (((t = { "checkout.js": "checkout-1530e61b89e040090be668d96ef9fcc5601768c5.js" }), e in t))
      return "https://assets.ticketinghub.com/checkout/" + t[e];
    throw new Error("asset not found: " + e);
  }),
    window.Bugsnag &&
      (window.bugsnagClient = Bugsnag.start({
        apiKey: "cd159e2bc5a2a795fbd4e649cd5f8467",
        releaseStage: "production",
        enabledReleaseStages: ["staging", "production"],
        autoDetectErrors: !1,
        appVersion: "1.0.4",
      }));
  try {
    (r = document.getElementsByTagName("script")),
      (n = window.opera && "[object Opera]" === window.opera.toString()),
      (c = !n && "readyState" in (r[0] || document.createElement("script"))),
      new $th.Script(
        (function () {
          var e, t, n, i, a, o, u, s, g;
          if ("currentScript" in document) return document.currentScript;
          if (c) for (e = 0, i = r.length; e < i; e++) if (((o = r[e]), "interactive" === o.readyState)) return o;
          for (n = t = 1, a = r.length; 1 <= a ? t <= a : t >= a; n = 1 <= a ? ++t : --t)
            if (
              ((o = r[r.length - n]),
              (u = o.getAttribute("src")),
              u && ((g = "/checkout.js"), (s = u.replace(/\?.+/, "")), s && s.indexOf(g, s.length - g.length) !== -1))
            )
              return o;
        })()
      );
  } catch (e) {
    (t = e), window.bugsnagClient && window.bugsnagClient.notify(t);
  }
}).call(this);
