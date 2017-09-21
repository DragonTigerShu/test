/*! appcan v1.0.0 Beta |  from 3g2win.com */
var Zepto = function() {
    var a,
        b,
        c,
        d,
        e = [],
        f = e.slice,
        g = e.filter,
        h = window.document,
        i = {},
        j = {},
        k = {
        "column-count" : 1,
        columns : 1,
        "font-weight" : 1,
        "line-height" : 1,
        opacity : 1,
        "z-index" : 1,
        zoom : 1
    },
        l = /^\s*<(\w+|!)[^>]*>/,
        m = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        n = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        o = /^(?:body|html)$/i,
        p = /([A-Z])/g,
        q = ["val", "css", "html", "text", "data", "width", "height", "offset"],
        r = ["after", "prepend", "before", "append"],
        s = h.createElement("table"),
        t = h.createElement("tr"),
        u = {
        tr : h.createElement("tbody"),
        tbody : s,
        thead : s,
        tfoot : s,
        td : t,
        th : t,
        "*" : h.createElement("div")
    },
        v = /complete|loaded|interactive/,
        w = /^[\w-]*$/,
        x = {},
        y = x.toString,
        z = {},
        A,
        B,
        C = h.createElement("div"),
        D = {
        tabindex : "tabIndex",
        readonly : "readOnly",
        "for" : "htmlFor",
        "class" : "className",
        maxlength : "maxLength",
        cellspacing : "cellSpacing",
        cellpadding : "cellPadding",
        rowspan : "rowSpan",
        colspan : "colSpan",
        usemap : "useMap",
        frameborder : "frameBorder",
        contenteditable : "contentEditable"
    },
        E = Array.isArray ||
    function(a) {
        return a instanceof Array
    };
    z.matches = function(a, b) {
        if (!b || !a || 1 !== a.nodeType)
            return !1;
        var c = a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.matchesSelector;
        if (c)
            return c.call(a, b);
        var d,
            e = a.parentNode,
            f = !e;
        return f && ( e = C).appendChild(a),
        d = ~z.qsa(e, b).indexOf(a), f && C.removeChild(a), d
    };
    function F(a) {
        return null == a ? String(a) : x[y.call(a)] || "object"
    }

    function G(a) {
        return "function" == F(a)
    }

    function H(a) {
        return null != a && a == a.window
    }

    function I(a) {
        return null != a && a.nodeType == a.DOCUMENT_NODE
    }

    function J(a) {
        return "object" == F(a)
    }

    function K(a) {
        return J(a) && !H(a) && Object.getPrototypeOf(a) == Object.prototype
    }

    function L(a) {
        return "number" == typeof a.length
    }

    function M(a) {
        return g.call(a, function(a) {
            return null != a
        })
    }

    function N(a) {
        return a.length > 0 ? c.fn.concat.apply([], a) : a
    }

    A = function(a) {
        return a.replace(/-+(.)?/g, function(a, b) {
            return b ? b.toUpperCase() : ""
        })
    };
    function O(a) {
        return a.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
    }

    B = function(a) {
        return g.call(a, function(b, c) {
            return a.indexOf(b) == c
        })
    };
    function P(a) {
        return a in j ? j[a] : j[a] = new RegExp("(^|\\s)" + a + "(\\s|$)")
    }

    function Q(a, b) {
        return "number" != typeof b || k[O(a)] ? b : b + "px"
    }

    function R(a) {
        var b,
            c;
        return i[a] || ( b = h.createElement(a), h.body.appendChild(b),
        c = getComputedStyle(b, "").getPropertyValue("display"), b.parentNode.removeChild(b), "none" == c && ( c = "block"), i[a] =
        c), i[a]
    }

    function S(a) {
        return "children" in a ? f.call(a.children) : c.map(a.childNodes, function(a) {
            return 1 == a.nodeType ? a :
            void 0
        })
    }
    z.fragment = function(b, d, e) {
        var g,
            i,
            j;
        return m.test(b) && ( g = c(h.createElement(RegExp.$1))), g || (b.replace && ( b = b.replace(n, "<$1></$2>")), d === a && ( d = l.test(b) && RegExp.$1), d in u || ( d = "*"),
        j = u[d], j.innerHTML = "" + b,
        g = c.each(f.call(j.childNodes), function() {
            j.removeChild(this)
        })), K(e) && ( i = c(g), c.each(e, function(a, b) {
            q.indexOf(a) > -1 ? i[a](b) : i.attr(a, b)
        })), g
    }, z.Z = function(a, b) {
        return a = a || [], a.__proto__ = c.fn, a.selector = b || "", a
    }, z.isZ = function(a) {
        return a instanceof z.Z
    }, z.init = function(b, d) {
        var e;
        if (!b)
            return z.Z();
        if ("string" == typeof b)
            if ( b = b.trim(), "<" == b[0] && l.test(b))
                e = z.fragment(b, RegExp.$1, d),
                b = null;
            else {
                if (d !== a)
                    return c(d).find(b);
                e = z.qsa(h, b)
            }
        else {
            if (G(b))
                return c(h).ready(b);
            if (z.isZ(b))
                return b;
            if (E(b))
                e = M(b);
            else if (J(b))
                e = [b],
                b = null;
            else if (l.test(b))
                e = z.fragment(b.trim(), RegExp.$1, d),
                b = null;
            else {
                if (d !== a)
                    return c(d).find(b);
                e = z.qsa(h, b)
            }
        }
        return z.Z(e, b)
    },
    c = function(a, b) {
        return z.init(a, b)
    };
    function T(c, d, e) {
        for (b in d)e && (K(d[b]) || E(d[b])) ? (K(d[b]) && !K(c[b]) && (c[b] = {}), E(d[b]) && !E(c[b]) && (c[b] = []), T(c[b], d[b], e)) : d[b] !== a && (c[b] = d[b])
    }
    c.extend = function(a) {
        var b,
            c = f.call(arguments, 1);
        return "boolean" == typeof a && ( b = a,
        a = c.shift()), c.forEach(function(c) {
            T(a, c, b)
        }), a
    }, z.qsa = function(a, b) {
        var c,
            d = "#" == b[0],
            e = !d && "." == b[0],
            g = d || e ? b.slice(1) : b,
            h = w.test(g);
        return I(a) && h && d ? ( c = a.getElementById(g)) ? [c] : [] : 1 !== a.nodeType && 9 !== a.nodeType ? [] : f.call(h && !d ? e ? a.getElementsByClassName(g) : a.getElementsByTagName(b) : a.querySelectorAll(b))
    };
    function U(a, b) {
        return null == b ? c(a) : c(a).filter(b)
    }
    c.contains = h.documentElement.contains ? function(a, b) {
        return a !== b && a.contains(b)
    } : function(a, b) {
        while (b && ( b = b.parentNode))
        if (b === a)
            return !0;
        return !1
    };
    function V(a, b, c, d) {
        return G(b) ? b.call(a, c, d) : b
    }

    function W(a, b, c) {
        null == c ? a.removeAttribute(b) : a.setAttribute(b, c)
    }

    function X(b, c) {
        var d = b.className,
            e = d && d.baseVal !== a;
        return c === a ? e ? d.baseVal : d :
        void ( e ? d.baseVal = c : b.className = c)
    }

    function Y(a) {
        var b;
        try {
            return a ? "true" == a || ("false" == a ? !1 : "null" == a ? null : /^0/.test(a) || isNaN( b = Number(a)) ? /^[\[\{]/.test(a) ? c.parseJSON(a) : a : b) : a
        } catch(d) {
            return a
        }
    }
    c.type = F, c.isFunction =
    G, c.isWindow =
    H, c.isArray =
    E, c.isPlainObject =
    K, c.isEmptyObject = function(a) {
        var b;
        for (b in a)
        return !1;
        return !0
    }, c.inArray = function(a, b, c) {
        return e.indexOf.call(b, a, c)
    }, c.camelCase =
    A, c.trim = function(a) {
        return null == a ? "" : String.prototype.trim.call(a)
    }, c.uuid = 0, c.support = {}, c.expr = {}, c.map = function(a, b) {
        var c,
            d = [],
            e,
            f;
        if (L(a))
            for ( e = 0; e < a.length; e++)
                c = b(a[e], e), null != c && d.push(c);
        else
            for (f in a) c = b(a[f], f), null != c && d.push(c);
        return N(d)
    }, c.each = function(a, b) {
        var c,
            d;
        if (L(a)) {
            for ( c = 0; c < a.length; c++)
                if (b.call(a[c], c, a[c]) === !1)
                    return a
        } else
            for (d in a)
            if (b.call(a[d], d, a[d]) === !1)
                return a;
        return a
    }, c.grep = function(a, b) {
        return g.call(a, b)
    }, window.JSON && (c.parseJSON = JSON.parse), c.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
        x["[object " + b + "]"] = b.toLowerCase()
    }), c.fn = {
        jquery : "1.11.2",
        forEach : e.forEach,
        reduce : e.reduce,
        push : e.push,
        sort : e.sort,
        indexOf : e.indexOf,
        concat : e.concat,
        map : function(a) {
            return c(c.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice : function() {
            return c(f.apply(this, arguments))
        },
        ready : function(a) {
            return v.test(h.readyState) && h.body ? a(c) : h.addEventListener("DOMContentLoaded", function() {
                a(c)
            }, !1), this
        },
        get : function(b) {
            return b === a ? f.call(this) : this[b >= 0 ? b : b + this.length]
        },
        toArray : function() {
            return this.get()
        },
        size : function() {
            return this.length
        },
        remove : function() {
            return this.each(function() {
                null != this.parentNode && this.parentNode.removeChild(this)
            })
        },
        each : function(a) {
            return e.every.call(this, function(b, c) {
                return a.call(b, c, b) !== !1
            }), this
        },
        filter : function(a) {
            return G(a) ? this.not(this.not(a)) : c(g.call(this, function(b) {
                return z.matches(b, a)
            }))
        },
        add : function(a, b) {
            return c(B(this.concat(c(a, b))))
        },
        is : function(a) {
            return this.length > 0 && z.matches(this[0], a)
        },
        not : function(b) {
            var d = [];
            if (G(b) && b.call !== a)
                this.each(function(a) {
                    b.call(this, a) || d.push(this)
                });
            else {
                var e = "string" == typeof b ? this.filter(b) : L(b) && G(b.item) ? f.call(b) : c(b);
                this.forEach(function(a) {
                    e.indexOf(a) < 0 && d.push(a)
                })
            }
            return c(d)
        },
        has : function(a) {
            return this.filter(function() {
                return J(a) ? c.contains(this, a) : c(this).find(a).size()
            })
        },
        eq : function(a) {
            return -1 === a ? this.slice(a) : this.slice(a, +a + 1)
        },
        first : function() {
            var a = this[0];
            return a && !J(a) ? a : c(a)
        },
        last : function() {
            var a = this[this.length - 1];
            return a && !J(a) ? a : c(a)
        },
        find : function(a) {
            var b,
                d = this;
            return b = a ? "object" == typeof a ? c(a).filter(function() {
                var a = this;
                return e.some.call(d, function(b) {
                    return c.contains(b, a)
                })
            }) : 1 == this.length ? c(z.qsa(this[0], a)) : this.map(function() {
                return z.qsa(this, a)
            }) : []
        },
        closest : function(a, b) {
            var d = this[0],
                e = !1;
            "object" == typeof a && ( e = c(a));
            while (d && !( e ? e.indexOf(d) >= 0 : z.matches(d, a)))
            d = d !== b && !I(d) && d.parentNode;
            return c(d)
        },
        parents : function(a) {
            var b = [],
                d = this;
            while (d.length > 0)
            d = c.map(d, function(a) {
                return ( a = a.parentNode) && !I(a) && b.indexOf(a) < 0 ? (b.push(a), a) :
                void 0
            });
            return U(b, a)
        },
        parent : function(a) {
            return U(B(this.pluck("parentNode")), a)
        },
        children : function(a) {
            return U(this.map(function() {
                return S(this)
            }), a)
        },
        contents : function() {
            return this.map(function() {
                return f.call(this.childNodes)
            })
        },
        siblings : function(a) {
            return U(this.map(function(a, b) {
                return g.call(S(b.parentNode), function(a) {
                    return a !== b
                })
            }), a)
        },
        empty : function() {
            return this.each(function() {
                this.innerHTML = ""
            })
        },
        pluck : function(a) {
            return c.map(this, function(b) {
                return b[a]
            })
        },
        show : function() {
            return this.each(function() {
                "none" == this.style.display && (this.style.display = ""), "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = R(this.nodeName))
            })
        },
        replaceWith : function(a) {
            return this.before(a).remove()
        },
        wrap : function(a) {
            var b = G(a);
            if (this[0] && !b)
                var d = c(a).get(0),
                    e = d.parentNode || this.length > 1;
            return this.each(function(f) {
                c(this).wrapAll( b ? a.call(this, f) : e ? d.cloneNode(!0) : d)
            })
        },
        wrapAll : function(a) {
            if (this[0]) {
                c(this[0]).before( a = c(a));
                var b;
                while (( b = a.children()).length)
                a = b.first();
                c(a).append(this)
            }
            return this
        },
        wrapInner : function(a) {
            var b = G(a);
            return this.each(function(d) {
                var e = c(this),
                    f = e.contents(),
                    g = b ? a.call(this, d) : a;
                f.length ? f.wrapAll(g) : e.append(g)
            })
        },
        unwrap : function() {
            return this.parent().each(function() {
                c(this).replaceWith(c(this).children())
            }), this
        },
        clone : function() {
            return this.map(function() {
                return this.cloneNode(!0)
            })
        },
        hide : function() {
            return this.css("display", "none")
        },
        toggle : function(b) {
            return this.each(function() {
                var d = c(this);
                (b === a ? "none" == d.css("display") : b) ? d.show() : d.hide()
            })
        },
        prev : function(a) {
            return c(this.pluck("previousElementSibling")).filter(a || "*")
        },
        next : function(a) {
            return c(this.pluck("nextElementSibling")).filter(a || "*")
        },
        html : function(a) {
            return 0 in arguments ? this.each(function(b) {
                var d = this.innerHTML;
                c(this).empty().append(V(this, a, b, d))
            }) : 0 in this ? this[0].innerHTML : null
        },
        text : function(a) {
            return 0 in arguments ? this.each(function(b) {
                var c = V(this, a, b, this.textContent);
                this.textContent = null == c ? "" : "" + c
            }) : 0 in this ? this[0].textContent : null
        },
        attr : function(c, d) {
            var e;
            return "string" != typeof c || 1 in arguments ? this.each(function(a) {
                if (1 === this.nodeType)
                    if (J(c))
                        for (b in c)W(this, b, c[b]);
                    else
                        W(this, c, V(this, d, a, this.getAttribute(c)))
            }) : this.length && 1 === this[0].nodeType ? !( e = this[0].getAttribute(c)) && c in this[0] ? this[0][c] : e : a
        },
        removeAttr : function(a) {
            return this.each(function() {
                1 === this.nodeType && W(this, a)
            })
        },
        prop : function(a, b) {
            return a = D[a] || a, 1 in arguments ? this.each(function(c) {
                this[a] = V(this, b, c, this[a])
            }) : this[0] && this[0][a]
        },
        data : function(b, c) {
            var d = "data-" + b.replace(p, "-$1").toLowerCase(),
                e = 1 in arguments ? this.attr(d, c) : this.attr(d);
            return null !== e ? Y(e) : a
        },
        val : function(a) {
            return 0 in arguments ? this.each(function(b) {
                this.value = V(this, a, b, this.value)
            }) : this[0] && (this[0].multiple ? c(this[0]).find("option").filter(function() {
                return this.selected
            }).pluck("value") : this[0].value)
        },
        offset : function(a) {
            if (a)
                return this.each(function(b) {
                    var d = c(this),
                        e = V(this, a, b, d.offset()),
                        f = d.offsetParent().offset(),
                        g = {
                        top : e.top - f.top,
                        left : e.left - f.left
                    };
                    "static" == d.css("position") && (g.position = "relative"), d.css(g)
                });
            if (!this.length)
                return null;
            var b = this[0].getBoundingClientRect();
            return {
                left : b.left + window.pageXOffset,
                top : b.top + window.pageYOffset,
                width : Math.round(b.width),
                height : Math.round(b.height)
            }
        },
        css : function(a, d) {
            if (arguments.length < 2) {
                var e = this[0],
                    f = getComputedStyle(e, "");
                if (!e)
                    return;
                if ("string" == typeof a)
                    return e.style[A(a)] || f.getPropertyValue(a);
                if (E(a)) {
                    var g = {};
                    return c.each(E(a) ? a : [a], function(a, b) {
                        g[b] = e.style[A(b)] || f.getPropertyValue(b)
                    }), g
                }
            }
            var h = "";
            if ("string" == F(a))
                d || 0 === d ? h = O(a) + ":" + Q(a, d) : this.each(function() {
                    this.style.removeProperty(O(a))
                });
            else
                for (b in a)a[b] || 0 === a[b] ? h += O(b) + ":" + Q(b, a[b]) + ";" : this.each(function() {
                    this.style.removeProperty(O(b))
                });
            return this.each(function() {
                this.style.cssText += ";" + h
            })
        },
        index : function(a) {
            return a ? this.indexOf(c(a)[0]) : this.parent().children().indexOf(this[0])
        },
        hasClass : function(a) {
            return a ? e.some.call(this, function(a) {
                return this.test(X(a))
            }, P(a)) : !1
        },
        addClass : function(a) {
            return a ? this.each(function(b) {
                d = [];
                var e = X(this),
                    f = V(this, a, b, e);
                f.split(/\s+/g).forEach(function(a) {
                    c(this).hasClass(a) || d.push(a)
                }, this), d.length && X(this, e + ( e ? " " : "") + d.join(" "))
            }) : this
        },
        removeClass : function(b) {
            return this.each(function(c) {
                return b === a ? X(this, "") : ( d = X(this), V(this, b, c, d).split(/\s+/g).forEach(function(a) {
                    d = d.replace(P(a), " ")
                }),
                void  X(this, d.trim()))
            })
        },
        toggleClass : function(b, d) {
            return b ? this.each(function(e) {
                var f = c(this),
                    g = V(this, b, e, X(this));
                g.split(/\s+/g).forEach(function(b) {
                    (d === a ? !f.hasClass(b) : d) ? f.addClass(b) : f.removeClass(b)
                })
            }) : this
        },
        scrollTop : function(b) {
            if (this.length) {
                var c = "scrollTop" in this[0];
                return b === a ? c ? this[0].scrollTop : this[0].pageYOffset : this.each( c ? function() {
                    this.scrollTop = b
                } : function() {
                    this.scrollTo(this.scrollX, b)
                })
            }
        },
        scrollLeft : function(b) {
            if (this.length) {
                var c = "scrollLeft" in this[0];
                return b === a ? c ? this[0].scrollLeft : this[0].pageXOffset : this.each( c ? function() {
                    this.scrollLeft = b
                } : function() {
                    this.scrollTo(b, this.scrollY)
                })
            }
        },
        position : function() {
            if (this.length) {
                var a = this[0],
                    b = this.offsetParent(),
                    d = this.offset(),
                    e = o.test(b[0].nodeName) ? {
                    top : 0,
                    left : 0
                } : b.offset();
                return d.top -= parseFloat(c(a).css("margin-top")) || 0, d.left -= parseFloat(c(a).css("margin-left")) || 0, e.top += parseFloat(c(b[0]).css("border-top-width")) || 0, e.left += parseFloat(c(b[0]).css("border-left-width")) || 0, {
                    top : d.top - e.top,
                    left : d.left - e.left
                }
            }
        },
        offsetParent : function() {
            return this.map(function() {
                var a = this.offsetParent || h.body;
                while (a && !o.test(a.nodeName) && "static" == c(a).css("position"))
                a = a.offsetParent;
                return a
            })
        }
    }, c.fn.detach = c.fn.remove, ["width", "height"].forEach(function(b) {
        var d = b.replace(/./, function(a) {
            return a[0].toUpperCase()
        });
        c.fn[b] = function(e) {
            var f,
                g = this[0];
            return e === a ? H(g) ? g["inner" + d] : I(g) ? g.documentElement["scroll" + d] : ( f = this.offset()) && f[b] : this.each(function(a) {
                g = c(this), g.css(b, V(this, e, a, g[b]()))
            })
        }
    });
    function Z(a, b) {
        b(a);
        for (var c = 0,
            d = a.childNodes.length; d > c; c++)
            Z(a.childNodes[c], b)
    }
    return r.forEach(function(a, b) {
        var d = b % 2;
        c.fn[a] = function() {
            var a,
                e = c.map(arguments, function(b) {
                return a = F(b), "object" == a || "array" == a || null == b ? b : z.fragment(b)
            }),
                f,
                g = this.length > 1;
            return e.length < 1 ? this : this.each(function(a, i) {
                f = d ? i : i.parentNode,
                i = 0 == b ? i.nextSibling : 1 == b ? i.firstChild : 2 == b ? i : null;
                var j = c.contains(h.documentElement, f);
                e.forEach(function(a) {
                    if (g)
                        a = a.cloneNode(!0);
                    else if (!f)
                        return c(a).remove();
                    f.insertBefore(a, i), j && Z(a, function(a) {
                        null == a.nodeName || "SCRIPT" !== a.nodeName.toUpperCase() || a.type && "text/javascript" !== a.type || a.src || window.eval.call(window, a.innerHTML)
                    })
                })
            })
        }, c.fn[ d ? a + "To" : "insert" + ( b ? "Before" : "After")] = function(b) {
            return c(b)[a](this), this
        }
    }), z.Z.prototype = c.fn, z.uniq =
    B, z.deserializeValue =
    Y, c.zepto =
    z, c
}();
window.Zepto = Zepto,
void 0 === window.$ && (window.$ = Zepto) && (window.jQuery = window.$), function(a) {
    var b = 1,
        c,
        d = Array.prototype.slice,
        e = a.isFunction,
        f = function(a) {
        return "string" == typeof a
    },
        g = {},
        h = {},
        i = "onfocusin" in window,
        j = {
        focus : "focusin",
        blur : "focusout"
    },
        k = {
        mouseenter : "mouseover",
        mouseleave : "mouseout"
    };
    h.click = h.mousedown = h.mouseup = h.mousemove = "MouseEvents";
    function l(a) {
        return a._zid || (a._zid = b++)
    }

    function m(a, b, c, d) {
        if ( b = n(b), b.ns)
            var e = o(b.ns);
        return (g[l(a)] || []).filter(function(a) {
            return !(!a || b.e && a.e != b.e || b.ns && !e.test(a.ns) || c && l(a.fn) !== l(c) || d && a.sel != d)
        })
    }

    function n(a) {
        var b = ("" + a).split(".");
        return {
            e : b[0],
            ns : b.slice(1).sort().join(" ")
        }
    }

    function o(a) {
        return new RegExp("(?:^| )" + a.replace(" ", " .* ?") + "(?: |$)")
    }

    function p(a, b) {
        return a.del && !i && a.e in j || !!b
    }

    function q(a) {
        return k[a] || i && j[a] || a
    }

    function r(b, d, e, f, h, i, j) {
        var m = l(b),
            o = g[m] || (g[m] = []);
        d.split(/\s/).forEach(function(d) {
            if ("ready" == d)
                return a(document).ready(e);
            var g = n(d);
            g.fn = e, g.sel =
            h, g.e in k && ( e = function(b) {
                var c = b.relatedTarget;
                return !c || c !== this && !a.contains(this, c) ? g.fn.apply(this, arguments) :
                void 0
            }), g.del =
            i;
            var l = i || e;
            g.proxy = function(a) {
                if ( a = x(a), !a.isImmediatePropagationStopped()) {
                    a.data = f;
                    var d = l.apply(b, a._args == c ? [a] : [a].concat(a._args));
                    return d === !1 && (a.preventDefault(), a.stopPropagation()), d
                }
            }, g.i = o.length, o.push(g), "addEventListener" in b && b.addEventListener(q(g.e), g.proxy, p(g, j))
        })
    }

    function s(a, b, c, d, e) {
        var f = l(a);
        (b || "").split(/\s/).forEach(function(b) {
            m(a, b, c, d).forEach(function(b) {
                delete g[f][b.i], "removeEventListener" in a && a.removeEventListener(q(b.e), b.proxy, p(b, e))
            })
        })
    }
    a.event = {
        add : r,
        remove : s,
        special : {}
    }, a.proxy = function(b, c) {
        var g = 2 in arguments && d.call(arguments, 2);
        if (e(b)) {
            var h = function() {
                return b.apply(c, g ? g.concat(d.call(arguments)) : arguments)
            };
            return h._zid = l(b), h
        }
        if (f(c))
            return g ? (g.unshift(b[c], b), a.proxy.apply(null, g)) : a.proxy(b[c], b);
        throw new TypeError("expected function")
    }, a.fn.bind = function(a, b, c) {
        return this.on(a, b, c)
    }, a.fn.unbind = function(a, b) {
        return this.off(a, b)
    }, a.fn.one = function(a, b, c, d) {
        return this.on(a, b, c, d, 1)
    };
    var t = function() {
        return !0
    },
        u = function() {
        return !1
    },
        v = /^([A-Z]|returnValue$|layer[XY]$)/,
        w = {
        preventDefault : "isDefaultPrevented",
        stopImmediatePropagation : "isImmediatePropagationStopped",
        stopPropagation : "isPropagationStopped"
    };
    function x(b, d) {
        return (d || !b.isDefaultPrevented) && (d || ( d = b), a.each(w, function(a, c) {
            var e = d[a];
            b[a] = function() {
                return this[c] = t, e && e.apply(d, arguments)
            }, b[c] =
            u
        }), (d.defaultPrevented !== c ? d.defaultPrevented : "returnValue" in d ? d.returnValue === !1 : d.getPreventDefault && d.getPreventDefault()) && (b.isDefaultPrevented = t)), b
    }

    function y(a) {
        var b,
            d = {
            originalEvent : a
        };
        for (b in a)v.test(b) || a[b] === c || (d[b] = a[b]);
        return x(d, a)
    }
    a.fn.delegate = function(a, b, c) {
        return this.on(b, a, c)
    }, a.fn.undelegate = function(a, b, c) {
        return this.off(b, a, c)
    }, a.fn.live = function(b, c) {
        return a(document.body).delegate(this.selector, b, c), this
    }, a.fn.die = function(b, c) {
        return a(document.body).undelegate(this.selector, b, c), this
    }, a.fn.on = function(b, g, h, i, j) {
        var k,
            l,
            m = this;
        return b && !f(b) ? (a.each(b, function(a, b) {
            m.on(a, g, h, b, j)
        }), m) : (f(g) || e(i) || i === !1 || ( i = h,
        h =
        g,
        g =
        c), (e(h) || h === !1) && ( i = h,
        h =
        c), i === !1 && ( i = u), m.each(function(c, e) {
            j && ( k = function(a) {
                return s(e, a.type, i), i.apply(this, arguments)
            }), g && ( l = function(b) {
                var c,
                    f = a(b.target).closest(g, e).get(0);
                return f && f !== e ? ( c = a.extend(y(b), {
                    currentTarget : f,
                    liveFired : e
                }), (k || i).apply(f, [c].concat(d.call(arguments, 1)))) :
                void 0
            }), r(e, b, i, h, g, l || k)
        }))
    }, a.fn.off = function(b, d, g) {
        var h = this;
        return b && !f(b) ? (a.each(b, function(a, b) {
            h.off(a, d, b)
        }), h) : (f(d) || e(g) || g === !1 || ( g = d,
        d =
        c), g === !1 && ( g = u), h.each(function() {
            s(this, b, g, d)
        }))
    }, a.fn.trigger = function(b, c) {
        return b = f(b) || a.isPlainObject(b) ? a.Event(b) : x(b), b._args =
        c, this.each(function() {
            "dispatchEvent" in this ? this.dispatchEvent(b) : a(this).triggerHandler(b, c)
        })
    }, a.fn.triggerHandler = function(b, c) {
        var d,
            e;
        return this.each(function(g, h) {
            d = y(f(b) ? a.Event(b) : b), d._args =
            c, d.target =
            h, a.each(m(h, b.type || b), function(a, b) {
                return e = b.proxy(d), d.isImmediatePropagationStopped() ? !1 :
                void 0
            })
        }), e
    }, "focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(b) {
        a.fn[b] = function(a) {
            return a ? this.bind(b, a) : this.trigger(b)
        }
    }), ["focus", "blur"].forEach(function(b) {
        a.fn[b] = function(a) {
            return a ? this.bind(b, a) : this.each(function() {
                try {
                    this[b]()
                } catch(a) {
                }
            }), this
        }
    }), a.Event = function(a, b) {
        f(a) || ( b = a,
        a = b.type);
        var c = document.createEvent(h[a] || "Events"),
            d = !0;
        if (b)
            for (var e in b)"bubbles" == e ? d = !!b[e] : c[e] = b[e];
        return c.initEvent(a, d, !0), x(c)
    }
}(Zepto), function(a) {
    var b = 0,
        c = window.document,
        d,
        e,
        f = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        g = /^(?:text|application)\/javascript/i,
        h = /^(?:text|application)\/xml/i,
        i = "application/json",
        j = "text/html",
        k = /^\s*$/;
    function l(b, c, d) {
        var e = a.Event(c);
        return a(b).trigger(e, d), !e.isDefaultPrevented()
    }

    function m(a, b, d, e) {
        return a.global ? l(b || c, d, e) :
        void 0
    }
    a.active = 0;
    function n(b) {
        b.global && 0 === a.active++ && m(b, null, "ajaxStart")
    }

    function o(b) {
        b.global && !--a.active && m(b, null, "ajaxStop")
    }

    function p(a, b) {
        var c = b.context;
        return b.beforeSend.call(c, a, b) === !1 || m(b, c, "ajaxBeforeSend", [a, b]) === !1 ? !1 :
        void  m(b, c, "ajaxSend", [a, b])
    }

    function q(a, b, c, d) {
        var e = c.context,
            f = "success";
        c.success.call(e, a, f, b), d && d.resolveWith(e, [a, f, b]), m(c, e, "ajaxSuccess", [b, c, a]), s(f, b, c)
    }

    function r(a, b, c, d, e) {
        var f = d.context;
        d.error.call(f, c, b, a), e && e.rejectWith(f, [c, b, a]), m(d, f, "ajaxError", [c, d, a || b]), s(b, c, d)
    }

    function s(a, b, c) {
        var d = c.context;
        c.complete.call(d, b, a), m(c, d, "ajaxComplete", [b, c]), o(c)
    }

    function t() {
    }
    a.ajaxJSONP = function(d, e) {
        if (!("type" in d))
            return a.ajax(d);
        var f = d.jsonpCallback,
            g = (a.isFunction(f) ? f() : f) || "jsonp" + ++b,
            h = c.createElement("script"),
            i = window[g],
            j,
            k = function(b) {
            a(h).triggerHandler("error", b || "abort")
        },
            l = {
            abort : k
        },
            m;
        return e && e.promise(l), a(h).on("load error", function(b, c) {
            clearTimeout(m), a(h).off().remove(), "error" != b.type && j ? q(j[0], l, d, e) : r(null, c || "error", l, d, e), window[g] =
            i, j && a.isFunction(i) && i(j[0]),
            i = j =
            void 0
        }), p(l, d) === !1 ? (k("abort"), l) : (window[g] = function() {
            j = arguments
        }, h.src = d.url.replace(/\?(.+)=\?/, "?$1=" + g), c.head.appendChild(h), d.timeout > 0 && ( m = setTimeout(function() {
            k("timeout")
        }, d.timeout)), l)
    }, a.ajaxSettings = {
        type : "GET",
        beforeSend : t,
        success : t,
        error : t,
        complete : t,
        context : null,
        global : !0,
        xhr : function() {
            return new window.XMLHttpRequest
        },
        accepts : {
            script : "text/javascript, application/javascript, application/x-javascript",
            json : i,
            xml : "application/xml, text/xml",
            html : j,
            text : "text/plain"
        },
        crossDomain : !1,
        timeout : 0,
        processData : !0,
        cache : !0
    };
    function u(a) {
        return a && ( a = a.split(";",2)[0]), a && (a == j ? "html" : a == i ? "json" : g.test(a) ? "script" : h.test(a) && "xml") || "text"
    }

    function v(a, b) {
        return "" == b ? a : (a + "&" + b).replace(/[&?]{1,2}/, "?")
    }

    function w(b) {
        b.processData && b.data && "string" != a.type(b.data) && (b.data = a.param(b.data, b.traditional)), !b.data || b.type && "GET" != b.type.toUpperCase() || (b.url = v(b.url, b.data), b.data =
        void 0)
    }
    a.ajax = function(b) {
        var c = a.extend({}, b || {}),
            f = a.Deferred && a.Deferred();
        for (d in a.ajaxSettings)
        void 0 === c[d] && (c[d] = a.ajaxSettings[d]);
        n(c), c.crossDomain || (c.crossDomain = /^([\w-]+:)?\/\/([^\/]+)/.test(c.url) && RegExp.$2 != window.location.host), c.url || (c.url = window.location.toString()), w(c);
        var g = c.dataType,
            h = /\?.+=\?/.test(c.url);
        if (h && ( g = "jsonp"), c.cache !== !1 && (b && b.cache === !0 || "script" != g && "jsonp" != g) || (c.url = v(c.url, "_=" + Date.now())), "jsonp" == g)
            return h || (c.url = v(c.url, c.jsonp ? c.jsonp + "=?" : c.jsonp === !1 ? "" : "callback=?")), a.ajaxJSONP(c, f);
        var i = c.accepts[g],
            j = {},
            l = function(a, b) {
            j[a.toLowerCase()] = [a, b]
        },
            m = /^([\w-]+:)\/\//.test(c.url) ? RegExp.$1 : window.location.protocol,
            o = c.xhr(),
            s = o.setRequestHeader,
            x;
        if (f && f.promise(o), c.crossDomain || l("X-Requested-With", "XMLHttpRequest"), l("Accept", i || "*/*"), ( i = c.mimeType || i) && (i.indexOf(",") > -1 && ( i = i.split(",",2)[0]), o.overrideMimeType && o.overrideMimeType(i)), (c.contentType || c.contentType !== !1 && c.data && "GET" != c.type.toUpperCase()) && l("Content-Type", c.contentType || "application/x-www-form-urlencoded"), c.headers)
            for (e in c.headers)l(e, c.headers[e]);
        if (o.setRequestHeader = l, o.onreadystatechange = function() {
                if (4 == o.readyState) {
                    o.onreadystatechange = t, clearTimeout(x);
                    var b,
                        d = !1;
                    if (o.status >= 200 && o.status < 300 || 304 == o.status || 0 == o.status && "file:" == m) {
                        g = g || u(c.mimeType || o.getResponseHeader("content-type")),
                        b = o.responseText;
                        try {
                            "script" == g ? (1, eval)(b) : "xml" == g ? b = o.responseXML : "json" == g && ( b = k.test(b) ? null : a.parseJSON(b))
                        } catch(e) {
                            d = e
                        }
                        d ? r(d, "parsererror", o, c, f) : q(b, o, c, f)
                    } else
                        r(o.statusText || null, o.status ? "error" : "abort", o, c, f)
                }
            }, p(o, c) === !1)
            return o.abort(), r(null, "abort", o, c, f), o;
        if (c.xhrFields)
            for (e in c.xhrFields)
            o[e] = c.xhrFields[e];
        var y = "async" in c ? c.async : !0;
        o.open(c.type, c.url, y, c.username, c.password);
        for (e in j)
        s.apply(o, j[e]);
        return c.timeout > 0 && ( x = setTimeout(function() {
            o.onreadystatechange = t, o.abort(), r(null, "timeout", o, c, f)
        }, c.timeout)), o.send(c.data ? c.data : null), o
    };
    function x(b, c, d, e) {
        return a.isFunction(c) && ( e = d,
        d =
        c,
        c =
        void 0), a.isFunction(d) || ( e = d,
        d =
        void 0), {
            url : b,
            data : c,
            success : d,
            dataType : e
        }
    }
    a.get = function() {
        return a.ajax(x.apply(null, arguments))
    }, a.post = function() {
        var b = x.apply(null, arguments);
        return b.type = "POST", a.ajax(b)
    }, a.getJSON = function() {
        var b = x.apply(null, arguments);
        return b.dataType = "json", a.ajax(b)
    }, a.fn.load = function(b, c, d) {
        if (!this.length)
            return this;
        var e = this,
            g = b.split(/\s/),
            h,
            i = x(b, c, d),
            j = i.success;
        return g.length > 1 && (i.url = g[0],
        h = g[1]), i.success = function(b) {
            e.html( h ? a("<div>").html(b.replace(f, "")).find(h) : b), j && j.apply(e, arguments)
        }, a.ajax(i), this
    };
    var y = encodeURIComponent;
    function z(b, c, d, e) {
        var f,
            g = a.isArray(c),
            h = a.isPlainObject(c);
        a.each(c, function(c, i) {
            f = a.type(i), e && ( c = d ? e : e + "[" + (h || "object" == f || "array" == f ? c : "") + "]"), !e && g ? b.add(i.name, i.value) : "array" == f || !d && "object" == f ? z(b, i, d, c) : b.add(c, i)
        })
    }
    a.param = function(a, b) {
        var c = [];
        return c.add = function(a, b) {
            this.push(y(a) + "=" + y(b))
        }, z(c, a, b), c.join("&").replace(/%20/g, "+")
    }
}(Zepto), function(a) {
    a.fn.serializeArray = function() {
        var b = [],
            c;
        return a([].slice.call(this.get(0).elements)).each(function() {
            c = a(this);
            var d = c.attr("type");
            "fieldset" != this.nodeName.toLowerCase() && !this.disabled && "submit" != d && "reset" != d && "button" != d && ("radio" != d && "checkbox" != d || this.checked) && b.push({
                name : c.attr("name"),
                value : c.val()
            })
        }), b
    }, a.fn.serialize = function() {
        var a = [];
        return this.serializeArray().forEach(function(b) {
            a.push(encodeURIComponent(b.name) + "=" + encodeURIComponent(b.value))
        }), a.join("&")
    }, a.fn.submit = function(b) {
        if (b)
            this.bind("submit", b);
        else if (this.length) {
            var c = a.Event("submit");
            this.eq(0).trigger(c), c.isDefaultPrevented() || this.get(0).submit()
        }
        return this
    }
}(Zepto), function(a) {
    "__proto__" in {} || a.extend(a.zepto, {
        Z : function(b, c) {
            return b = b || [], a.extend(b, a.fn), b.selector = c || "", b.__Z = !0, b
        },
        isZ : function(b) {
            return "array" === a.type(b) && "__Z" in b
        }
    });
    try {
        getComputedStyle(
        void 0)
    } catch(b) {
        var c = getComputedStyle;
        window.getComputedStyle = function(a) {
            try {
                return c(a)
            } catch(b) {
                return null
            }
        }
    }
}(Zepto), function(a) {
    var b = {},
        c,
        d,
        e,
        f,
        g = 750,
        h;
    function i(a, b, c, d) {
        return Math.abs(a - b) >= Math.abs(c - d) ? a - b > 0 ? "Left" : "Right" : c - d > 0 ? "Up" : "Down"
    }

    function j() {
        f = null, b.last && (b.el.trigger("longTap"),
        b = {})
    }

    function k() {
        f && clearTimeout(f),
        f = null
    }

    function l() {
        c && clearTimeout(c), d && clearTimeout(d), e && clearTimeout(e), f && clearTimeout(f),
        c = d = e = f = null,
        b = {}
    }

    function m(a) {
        return "ontouchstart" in window ? ("touch" == a.pointerType || a.pointerType == a.MSPOINTER_TYPE_TOUCH) && a.isPrimary : !0
    }

    function n() {
        return "ontouchstart" in window ?
        void 0 : !0
    }

    function o(a, b) {
        return "ontouchstart" in window ? a.type == "pointer" + b || a.type.toLowerCase() == "mspointer" + b : !0
    }
    a(document).ready(function() {
        var p,
            q,
            r = 0,
            s = 0,
            t,
            u,
            v = n() ? "MSPointerDown pointerdown mousedown" : "touchstart MSPointerDown pointerdown",
            w = n() ? "MSPointerMove pointermove mousemove" : "touchmove MSPointerMove pointermove",
            x = n() ? "MSPointerUp pointerup mouseup" : "touchend MSPointerUp pointerup";
        "MSGesture" in window && ( h = new MSGesture, h.target = document.body), a(document).bind("MSGestureEnd", function(a) {
            var c = a.velocityX > 1 ? "Right" : a.velocityX < -1 ? "Left" : a.velocityY > 1 ? "Down" : a.velocityY < -1 ? "Up" : null;
            c && (b.el.trigger("swipe"), b.el.trigger("swipe" + c))
        }).on(v, function(d) {
            (!( u = o(d, "down")) || m(d)) && ( t = u ? d : d.touches[0], d.touches && 1 === d.touches.length && b.x2 && (b.x2 =
            void 0, b.y2 =
            void 0),
            r = 0,
            s = 0,
            p = Date.now(),
            q = p - (b.last || p), b.el = a("tagName" in t.target ? t.target : t.target.parentNode), c && clearTimeout(c), b.x1 = t.pageX, b.y1 = t.pageY, q > 0 && 250 >= q && (b.isDoubleTap = !0), b.last =
            p,
            f = setTimeout(j, g), h && u && h.addPointer(d.pointerId))
        }).on(w, function(a) {
            (!( u = o(a, "move")) || m(a)) && ( t = u ? a : a.touches[0], k(), b.x2 = t.pageX, b.y2 = t.pageY, isNaN(r) && ( r = 0), isNaN(s) && ( s = 0), r += Math.abs(b.x1 - b.x2), s += Math.abs(b.y1 - b.y2), b.el && b.el.trigger("swipeMove" + i(b.x1, b.x2, b.y1, b.y2), {
                dx : Math.abs(b.x1 - b.x2),
                dy : Math.abs(b.y1 - b.y2)
            }))
        }).on(x, function(f) {
            (!( u = o(f, "up")) || m(f)) && (k(), b.x2 && Math.abs(b.x1 - b.x2) > 30 || b.y2 && Math.abs(b.y1 - b.y2) > 30 ? e = setTimeout(function() {
                b.el.trigger("swipe"), b.el.trigger("swipe" + i(b.x1, b.x2, b.y1, b.y2)),
                b = {}
            }, 0) : "last" in b && (30 > r && 30 > s || n() ? d = setTimeout(function() {
                var d = a.Event("tap");
                d.cancelTouch = l, b.el.trigger(d), b.isDoubleTap ? (b.el && b.el.trigger("doubleTap"),
                b = {}) : c = setTimeout(function() {
                    c = null, b.el && b.el.trigger("singleTap"),
                    b = {}
                }, 250)
            }, 0) : b = {}),
            r = s = 0)
        }).on("touchcancel MSPointerCancel pointercancel", l), a(window).on("scroll", l)
    }), ["swipeMoveLeft", "swipeMoveRight", "swipe", "swipeLeft", "swipeRight", "swipeUp", "swipeDown", "doubleTap", "tap", "singleTap", "longTap"].forEach(function(b) {
        a.fn[b] = function(a) {
            return this.on(b, a)
        }
    })
}(Zepto), function() {
    var a = this,
        b = a._,
        c = Array.prototype,
        d = Object.prototype,
        e = Function.prototype,
        f = c.push,
        g = c.slice,
        h = c.concat,
        i = d.toString,
        j = d.hasOwnProperty,
        k = Array.isArray,
        l = Object.keys,
        m = e.bind,
        n = function(a) {
        return a instanceof n ? a : this instanceof n ?
        void (this._wrapped = a) : new n(a)
    };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && ( exports = module.exports = n), exports._ =
    n) : a._ = n, n.VERSION = "1.6.0";
    var o = function(a, b, c) {
        if (
            void 0 === b)
            return a;
        switch(null==c?3:c) {
        case 1:
            return function(c) {
                return a.call(b, c)
            };
        case 2:
            return function(c, d) {
                return a.call(b, c, d)
            };
        case 3:
            return function(c, d, e) {
                return a.call(b, c, d, e)
            };
        case 4:
            return function(c, d, e, f) {
                return a.call(b, c, d, e, f)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    };
    n.iteratee = function(a, b, c) {
        return null == a ? n.identity : n.isFunction(a) ? o(a, b, c) : n.isObject(a) ? n.matches(a) : n.property(a)
    }, n.each = n.forEach = function(a, b, c) {
        if (null == a)
            return a;
        b = o(b, c);
        var d,
            e = a.length;
        if (e === +e)
            for ( d = 0; e > d; d++)
                b(a[d], d, a);
        else {
            var f = n.keys(a);
            for ( d = 0,
            e = f.length; e > d; d++)
                b(a[f[d]], f[d], a)
        }
        return a
    }, n.map = n.collect = function(a, b, c) {
        if (null == a)
            return [];
        b = n.iteratee(b, c);
        for (var d = a.length !== +a.length && n.keys(a),
            e = (d || a).length,
            f = Array(e),
            g,
            h = 0; e > h; h++)
            g = d ? d[h] : h, f[h] = b(a[g], g, a);
        return f
    };
    var p = "Reduce of empty array with no initial value";
    n.reduce = n.foldl = n.inject = function(a, b, c, d) {
        null == a && ( a = []),
        b = o(b, d, 4);
        var e = a.length !== +a.length && n.keys(a),
            f = (e || a).length,
            g = 0,
            h;
        if (arguments.length < 3) {
            if (!f)
                throw new TypeError(p);
            c = a[ e ? e[g++] : g++]
        }
        for (; f > g; g++)
            h = e ? e[g] : g,
            c = b(c, a[h], h, a);
        return c
    }, n.reduceRight = n.foldr = function(a, b, c, d) {
        null == a && ( a = []),
        b = o(b, d, 4);
        var e = a.length !== +a.length && n.keys(a),
            f = (e || a).length,
            g;
        if (arguments.length < 3) {
            if (!f)
                throw new TypeError(p);
            c = a[ e ? e[--f] : --f]
        }
        while (f--) g = e ? e[f] : f,
        c = b(c, a[g], g, a);
        return c
    }, n.find = n.detect = function(a, b, c) {
        var d;
        return b = n.iteratee(b, c), n.some(a, function(a, c, e) {
            return b(a, c, e) ? ( d = a, !0) :
            void 0
        }), d
    }, n.filter = n.select = function(a, b, c) {
        var d = [];
        return null == a ? d : ( b = n.iteratee(b, c), n.each(a, function(a, c, e) {
            b(a, c, e) && d.push(a)
        }), d)
    }, n.reject = function(a, b, c) {
        return n.filter(a, n.negate(n.iteratee(b)), c)
    }, n.every = n.all = function(a, b, c) {
        if (null == a)
            return !0;
        b = n.iteratee(b, c);
        var d = a.length !== +a.length && n.keys(a),
            e = (d || a).length,
            f,
            g;
        for ( f = 0; e > f; f++)
            if ( g = d ? d[f] : f, !b(a[g], g, a))
                return !1;
        return !0
    }, n.some = n.any = function(a, b, c) {
        if (null == a)
            return !1;
        b = n.iteratee(b, c);
        var d = a.length !== +a.length && n.keys(a),
            e = (d || a).length,
            f,
            g;
        for ( f = 0; e > f; f++)
            if ( g = d ? d[f] : f, b(a[g], g, a))
                return !0;
        return !1
    }, n.contains = n.include = function(a, b) {
        return null == a ? !1 : (a.length !== +a.length && ( a = n.values(a)), n.indexOf(a, b) >= 0)
    }, n.invoke = function(a, b) {
        var c = g.call(arguments, 2),
            d = n.isFunction(b);
        return n.map(a, function(a) {
            return ( d ? b : a[b]).apply(a, c)
        })
    }, n.pluck = function(a, b) {
        return n.map(a, n.property(b))
    }, n.where = function(a, b) {
        return n.filter(a, n.matches(b))
    }, n.findWhere = function(a, b) {
        return n.find(a, n.matches(b))
    }, n.max = function(a, b, c) {
        var d = -(1 / 0),
            e = -(1 / 0),
            f,
            g;
        if (null == b && null != a) {
            a = a.length === +a.length ? a : n.values(a);
            for (var h = 0,
                i = a.length; i > h; h++)
                f = a[h], f > d && ( d = f)
        } else
            b = n.iteratee(b, c), n.each(a, function(a, c, f) {
                g = b(a, c, f), (g > e || g === -(1 / 0) && d === -(1 / 0)) && ( d = a,
                e =
                g)
            });
        return d
    }, n.min = function(a, b, c) {
        var d = 1 / 0,
            e = 1 / 0,
            f,
            g;
        if (null == b && null != a) {
            a = a.length === +a.length ? a : n.values(a);
            for (var h = 0,
                i = a.length; i > h; h++)
                f = a[h], d > f && ( d = f)
        } else
            b = n.iteratee(b, c), n.each(a, function(a, c, f) {
                g = b(a, c, f), (e > g || g === 1 / 0 && d === 1 / 0) && ( d = a,
                e =
                g)
            });
        return d
    }, n.shuffle = function(a) {
        for (var b = a && a.length === +a.length ? a : n.values(a),
            c = b.length,
            d = Array(c),
            e = 0,
            f; c > e; e++)
            f = n.random(0, e), f !== e && (d[e] = d[f]), d[f] = b[e];
        return d
    }, n.sample = function(a, b, c) {
        return null == b || c ? (a.length !== +a.length && ( a = n.values(a)), a[n.random(a.length - 1)]) : n.shuffle(a).slice(0, Math.max(0, b))
    }, n.sortBy = function(a, b, c) {
        return b = n.iteratee(b, c), n.pluck(n.map(a, function(a, c, d) {
            return {
                value : a,
                index : c,
                criteria : b(a, c, d)
            }
        }).sort(function(a, b) {
            var c = a.criteria,
                d = b.criteria;
            if (c !== d) {
                if (c > d ||
                    void 0 === c)
                    return 1;
                if (d > c ||
                    void 0 === d)
                    return -1
            }
            return a.index - b.index
        }), "value")
    };
    var q = function(a) {
        return function(b, c, d) {
            var e = {};
            return c = n.iteratee(c, d), n.each(b, function(d, f) {
                var g = c(d, f, b);
                a(e, d, g)
            }), e
        }
    };
    n.groupBy = q(function(a, b, c) {
        n.has(a, c) ? a[c].push(b) : a[c] = [b]
    }), n.indexBy = q(function(a, b, c) {
        a[c] = b
    }), n.countBy = q(function(a, b, c) {
        n.has(a, c) ? a[c]++ : a[c] = 1
    }), n.sortedIndex = function(a, b, c, d) {
        c = n.iteratee(c, d, 1);
        var e = c(b),
            f = 0,
            g = a.length;
        while (g > f) {
            var h = f + g >>> 1;
            c(a[h]) < e ? f = h + 1 : g = h
        }
        return f
    }, n.toArray = function(a) {
        return a ? n.isArray(a) ? g.call(a) : a.length === +a.length ? n.map(a, n.identity) : n.values(a) : [];

    }, n.size = function(a) {
        return null == a ? 0 : a.length === +a.length ? a.length : n.keys(a).length
    }, n.partition = function(a, b, c) {
        b = n.iteratee(b, c);
        var d = [],
            e = [];
        return n.each(a, function(a, c, f) {
            (b(a, c, f) ? d : e).push(a)
        }), [d, e]
    }, n.first = n.head = n.take = function(a, b, c) {
        return null == a ?
        void 0 : null == b || c ? a[0] : 0 > b ? [] : g.call(a, 0, b)
    }, n.initial = function(a, b, c) {
        return g.call(a, 0, Math.max(0, a.length - (null == b || c ? 1 : b)))
    }, n.last = function(a, b, c) {
        return null == a ?
        void 0 : null == b || c ? a[a.length - 1] : g.call(a, Math.max(a.length - b, 0))
    }, n.rest = n.tail = n.drop = function(a, b, c) {
        return g.call(a, null == b || c ? 1 : b)
    }, n.compact = function(a) {
        return n.filter(a, n.identity)
    };
    var r = function(a, b, c, d) {
        if (b && n.every(a, n.isArray))
            return h.apply(d, a);
        for (var e = 0,
            g = a.length; g > e; e++) {
            var i = a[e];
            n.isArray(i) || n.isArguments(i) ? b ? f.apply(d, i) : r(i, b, c, d) : c || d.push(i)
        }
        return d
    };
    n.flatten = function(a, b) {
        return r(a, b, !1, [])
    }, n.without = function(a) {
        return n.difference(a, g.call(arguments, 1))
    }, n.uniq = n.unique = function(a, b, c, d) {
        if (null == a)
            return [];
        n.isBoolean(b) || ( d = c,
        c =
        b,
        b = !1), null != c && ( c = n.iteratee(c, d));
        for (var e = [],
            f = [],
            g = 0,
            h = a.length; h > g; g++) {
            var i = a[g];
            if (b)
                g && f === i || e.push(i),
                f =
                i;
            else if (c) {
                var j = c(i, g, a);
                n.indexOf(f, j) < 0 && (f.push(j), e.push(i))
            } else
                n.indexOf(e, i) < 0 && e.push(i)
        }
        return e
    }, n.union = function() {
        return n.uniq(r(arguments, !0, !0, []))
    }, n.intersection = function(a) {
        if (null == a)
            return [];
        for (var b = [],
            c = arguments.length,
            d = 0,
            e = a.length; e > d; d++) {
            var f = a[d];
            if (!n.contains(b, f)) {
                for (var g = 1; c > g; g++)
                    if (!n.contains(arguments[g], f))
                        break;
                g === c && b.push(f)
            }
        }
        return b
    }, n.difference = function(a) {
        var b = r(g.call(arguments, 1), !0, !0, []);
        return n.filter(a, function(a) {
            return !n.contains(b, a)
        })
    }, n.zip = function(a) {
        if (null == a)
            return [];
        for (var b = n.max(arguments, "length").length,
            c = Array(b),
            d = 0; b > d; d++)
            c[d] = n.pluck(arguments, d);
        return c
    }, n.object = function(a, b) {
        if (null == a)
            return {};
        for (var c = {},
            d = 0,
            e = a.length; e > d; d++)
            b ? c[a[d]] = b[d] : c[a[d][0]] = a[d][1];
        return c
    }, n.indexOf = function(a, b, c) {
        if (null == a)
            return -1;
        var d = 0,
            e = a.length;
        if (c) {
            if ("number" != typeof c)
                return d = n.sortedIndex(a, b), a[d] === b ? d : -1;
            d = 0 > c ? Math.max(0, e + c) : c
        }
        for (; e > d; d++)
            if (a[d] === b)
                return d;
        return -1
    }, n.lastIndexOf = function(a, b, c) {
        if (null == a)
            return -1;
        var d = a.length;
        "number" == typeof c && ( d = 0 > c ? d + c + 1 : Math.min(d, c + 1));
        while (--d >= 0)
        if (a[d] === b)
            return d;
        return -1
    }, n.range = function(a, b, c) {
        arguments.length <= 1 && ( b = a || 0,
        a = 0),
        c = c || 1;
        for (var d = Math.max(Math.ceil((b - a) / c), 0),
            e = Array(d),
            f = 0; d > f; f++, a += c)
            e[f] = a;
        return e
    };
    var s = function() {
    };
    n.bind = function(a, b) {
        var c,
            d;
        if (m && a.bind === m)
            return m.apply(a, g.call(arguments, 1));
        if (!n.isFunction(a))
            throw new TypeError("Bind must be called on a function");
        return c = g.call(arguments, 2),
        d = function() {
            if (!(this instanceof d))
                return a.apply(b, c.concat(g.call(arguments)));
            s.prototype = a.prototype;
            var e = new s;
            s.prototype = null;
            var f = a.apply(e, c.concat(g.call(arguments)));
            return n.isObject(f) ? f : e
        }
    }, n.partial = function(a) {
        var b = g.call(arguments, 1);
        return function() {
            for (var c = 0,
                d = b.slice(),
                e = 0,
                f = d.length; f > e; e++)
                d[e] === n && (d[e] = arguments[c++]);
            while (c < arguments.length)
            d.push(arguments[c++]);
            return a.apply(this, d)
        }
    }, n.bindAll = function(a) {
        var b,
            c = arguments.length,
            d;
        if (1 >= c)
            throw new Error("bindAll must be passed function names");
        for ( b = 1; c > b; b++)
            d = arguments[b], a[d] = n.bind(a[d], a);
        return a
    }, n.memoize = function(a, b) {
        var c = function(d) {
            var e = c.cache,
                f = b ? b.apply(this, arguments) : d;
            return n.has(e, f) || (e[f] = a.apply(this, arguments)), e[f]
        };
        return c.cache = {}, c
    }, n.delay = function(a, b) {
        var c = g.call(arguments, 2);
        return setTimeout(function() {
            return a.apply(null, c)
        }, b)
    }, n.defer = function(a) {
        return n.delay.apply(n, [a, 1].concat(g.call(arguments, 1)))
    }, n.throttle = function(a, b, c) {
        var d,
            e,
            f,
            g = null,
            h = 0;
        c || ( c = {});
        var i = function() {
            h = c.leading === !1 ? 0 : n.now(),
            g = null,
            f = a.apply(d, e), g || ( d = e = null)
        };
        return function() {
            var j = n.now();
            h || c.leading !== !1 || ( h = j);
            var k = b - (j - h);
            return d = this,
            e =
            arguments, 0 >= k || k > b ? (clearTimeout(g),
            g = null,
            h =
            j,
            f = a.apply(d, e), g || ( d = e = null)) : g || c.trailing === !1 || ( g = setTimeout(i, k)), f
        }
    }, n.debounce = function(a, b, c) {
        var d,
            e,
            f,
            g,
            h,
            i = function() {
            var j = n.now() - g;
            b > j && j > 0 ? d = setTimeout(i, b - j) : ( d = null, c || ( h = a.apply(f, e), d || ( f = e = null)))
        };
        return function() {
            f = this,
            e =
            arguments,
            g = n.now();
            var j = c && !d;
            return d || ( d = setTimeout(i, b)), j && ( h = a.apply(f, e),
            f = e = null), h
        }
    }, n.wrap = function(a, b) {
        return n.partial(b, a)
    }, n.negate = function(a) {
        return function() {
            return !a.apply(this, arguments)
        }
    }, n.compose = function() {
        var a = arguments,
            b = a.length - 1;
        return function() {
            var c = b,
                d = a[b].apply(this, arguments);
            while (c--)
            d = a[c].call(this, d);
            return d
        }
    }, n.after = function(a, b) {
        return function() {
            return --a < 1 ? b.apply(this, arguments) :
            void 0
        }
    }, n.before = function(a, b) {
        var c;
        return function() {
            return --a > 0 ? c = b.apply(this, arguments) : b = null, c
        }
    }, n.once = n.partial(n.before, 2), n.keys = function(a) {
        if (!n.isObject(a))
            return [];
        if (l)
            return l(a);
        var b = [];
        for (var c in a)n.has(a, c) && b.push(c);
        return b
    }, n.values = function(a) {
        for (var b = n.keys(a),
            c = b.length,
            d = Array(c),
            e = 0; c > e; e++)
            d[e] = a[b[e]];
        return d
    }, n.pairs = function(a) {
        for (var b = n.keys(a),
            c = b.length,
            d = Array(c),
            e = 0; c > e; e++)
            d[e] = [b[e], a[b[e]]];
        return d
    }, n.invert = function(a) {
        for (var b = {},
            c = n.keys(a),
            d = 0,
            e = c.length; e > d; d++)
            b[a[c[d]]] = c[d];
        return b
    }, n.functions = n.methods = function(a) {
        var b = [];
        for (var c in a)n.isFunction(a[c]) && b.push(c);
        return b.sort()
    }, n.extend = function(a) {
        if (!n.isObject(a))
            return a;
        for (var b,
            c,
            d = 1,
            e = arguments.length; e > d; d++) {
            b = arguments[d];
            for (c in b)j.call(b, c) && (a[c] = b[c])
        }
        return a
    }, n.pick = function(a, b, c) {
        var d = {},
            e;
        if (null == a)
            return d;
        if (n.isFunction(b)) {
            b = o(b, c);
            for (e in a) {
                var f = a[e];
                b(f, e, a) && (d[e] = f)
            }
        } else {
            var i = h.apply([], g.call(arguments, 1));
            a = new Object(a);
            for (var j = 0,
                k = i.length; k > j; j++)
                e = i[j], e in a && (d[e] = a[e])
        }
        return d
    }, n.omit = function(a, b, c) {
        if (n.isFunction(b))
            b = n.negate(b);
        else {
            var d = n.map(h.apply([], g.call(arguments, 1)), String);
            b = function(a, b) {
                return !n.contains(d, b)
            }
        }
        return n.pick(a, b, c)
    }, n.defaults = function(a) {
        if (!n.isObject(a))
            return a;
        for (var b = 1,
            c = arguments.length; c > b; b++) {
            var d = arguments[b];
            for (var e in d)
            void 0 === a[e] && (a[e] = d[e])
        }
        return a
    }, n.clone = function(a) {
        return n.isObject(a) ? n.isArray(a) ? a.slice() : n.extend({}, a) : a
    }, n.tap = function(a, b) {
        return b(a), a
    };
    var t = function(a, b, c, d) {
        if (a === b)
            return 0 !== a || 1 / a === 1 / b;
        if (null == a || null == b)
            return a === b;
        a instanceof n && ( a = a._wrapped), b instanceof n && ( b = b._wrapped);
        var e = i.call(a);
        if (e !== i.call(b))
            return !1;
        switch(e) {
        case"[object RegExp]":
        case"[object String]":
            return "" + a == "" + b;
        case"[object Number]":
            return +a !== +a ? +b !== +b : 0 === +a ? 1 / +a === 1 / b : +a === +b;
        case"[object Date]":
        case"[object Boolean]":
            return +a === +b
        }
        if ("object" != typeof a || "object" != typeof b)
            return !1;
        var f = c.length;
        while (f--)
        if (c[f] === a)
            return d[f] === b;
        var g = a.constructor,
            h = b.constructor;
        if (g !== h && "constructor" in a && "constructor" in b && !(n.isFunction(g) && g instanceof g && n.isFunction(h) && h instanceof h))
            return !1;
        c.push(a), d.push(b);
        var j,
            k;
        if ("[object Array]" === e) {
            if ( j = a.length,
                k = j === b.length)
                while (j--)
                if (!( k = t(a[j], b[j], c, d)))
                    break
        } else {
            var l = n.keys(a),
                m;
            if ( j = l.length,
                k = n.keys(b).length === j)
                while (j--)
                if ( m = l[j], !( k = n.has(b, m) && t(a[m], b[m], c, d)))
                    break
        }
        return c.pop(), d.pop(), k
    };
    n.isEqual = function(a, b) {
        return t(a, b, [], [])
    }, n.isEmpty = function(a) {
        if (null == a)
            return !0;
        if (n.isArray(a) || n.isString(a) || n.isArguments(a))
            return 0 === a.length;
        for (var b in a)
        if (n.has(a, b))
            return !1;
        return !0
    }, n.isElement = function(a) {
        return !(!a || 1 !== a.nodeType)
    }, n.isArray = k ||
    function(a) {
        return "[object Array]" === i.call(a)
    }, n.isObject = function(a) {
        var b = typeof a;
        return "function" === b || "object" === b && !!a
    }, n.each(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(a) {
        n["is" + a] = function(b) {
            return i.call(b) === "[object " + a + "]"
        }
    }), n.isArguments(arguments) || (n.isArguments = function(a) {
        return n.has(a, "callee")
    }), "function" != typeof /./ && (n.isFunction = function(a) {
        return "function" == typeof a || !1
    }), n.isFinite = function(a) {
        return isFinite(a) && !isNaN(parseFloat(a))
    }, n.isNaN = function(a) {
        return n.isNumber(a) && a !== +a
    }, n.isBoolean = function(a) {
        return a === !0 || a === !1 || "[object Boolean]" === i.call(a)
    }, n.isNull = function(a) {
        return null === a
    }, n.isUndefined = function(a) {
        return
        void 0 === a
    }, n.has = function(a, b) {
        return null != a && j.call(a, b)
    }, n.noConflict = function() {
        return a._ = b, this
    }, n.identity = function(a) {
        return a
    }, n.constant = function(a) {
        return function() {
            return a
        }
    }, n.noop = function() {
    }, n.property = function(a) {
        return function(b) {
            return b[a]
        }
    }, n.matches = function(a) {
        var b = n.pairs(a),
            c = b.length;
        return function(a) {
            if (null == a)
                return !c;
            a = new Object(a);
            for (var d = 0; c > d; d++) {
                var e = b[d],
                    f = e[0];
                if (e[1] !== a[f] || !( f in a))
                    return !1
            }
            return !0
        }
    }, n.times = function(a, b, c) {
        var d = Array(Math.max(0, a));
        b = o(b, c, 1);
        for (var e = 0; a > e; e++)
            d[e] = b(e);
        return d
    }, n.random = function(a, b) {
        return null == b && ( b = a,
        a = 0), a + Math.floor(Math.random() * (b - a + 1))
    }, n.now = Date.now ||
    function() {
        return (new Date).getTime()
    };
    var u = {
        "&" : "&amp;",
        "<" : "&lt;",
        ">" : "&gt;",
        '"' : "&quot;",
        "'" : "&#x27;",
        "`" : "&#x60;"
    },
        v = n.invert(u),
        w = function(a) {
        var b = function(b) {
            return a[b]
        },
            c = "(?:" + n.keys(a).join("|") + ")",
            d = RegExp(c),
            e = RegExp(c, "g");
        return function(a) {
            return a = null == a ? "" : "" + a, d.test(a) ? a.replace(e, b) : a
        }
    };
    n.escape = w(u), n.unescape = w(v), n.result = function(a, b) {
        if (null == a)
            return
            void 0;
        var c = a[b];
        return n.isFunction(c) ? a[b]() : c
    };
    var x = 0;
    n.uniqueId = function(a) {
        var b = ++x + "";
        return a ? a + b : b
    }, n.templateSettings = {
        evaluate : /<%([\s\S]+?)%>/g,
        interpolate : /<%=([\s\S]+?)%>/g,
        escape : /<%-([\s\S]+?)%>/g
    };
    var y = /(.)^/,
        z = {
        "'" : "'",
        "\\" : "\\",
        "\r" : "r",
        "\n" : "n",
        "\u2028" : "u2028",
        "\u2029" : "u2029"
    },
        A = /\\|'|\r|\n|\u2028|\u2029/g,
        B = function(a) {
        return "\\" + z[a]
    };
    n.template = function(a, b, c) {
        !b && c && ( b = c),
        b = n.defaults({}, b, n.templateSettings);
        var d = RegExp([(b.escape || y).source, (b.interpolate || y).source, (b.evaluate || y).source].join("|") + "|$", "g"),
            e = 0,
            f = "__p+='";
        a.replace(d, function(b, c, d, g, h) {
            return f += a.slice(e, h).replace(A, B),
            e = h + b.length, c ? f += "'+\n((__t=(" + c + "))==null?'':_.escape(__t))+\n'" : d ? f += "'+\n((__t=(" + d + "))==null?'':__t)+\n'" : g && (f += "';\n" + g + "\n__p+='"), b
        }), f += "';\n", b.variable || ( f = "with(obj||{}){\n" + f + "}\n"),
        f = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + f + "return __p;\n";
        try {
            var g = new Function(b.variable || "obj", "_", f)
        } catch(h) {
            throw h.source = f, h
        }
        var i = function(a) {
            return g.call(this, a, n)
        },
            j = b.variable || "obj";
        return i.source = "function(" + j + "){\n" + f + "}", i
    }, n.chain = function(a) {
        var b = n(a);
        return b._chain = !0, b
    };
    var C = function(a) {
        return this._chain ? n(a).chain() : a
    };
    n.mixin = function(a) {
        n.each(n.functions(a), function(b) {
            var c = n[b] = a[b];
            n.prototype[b] = function() {
                var a = [this._wrapped];
                return f.apply(a, arguments), C.call(this, c.apply(n, a))
            }
        })
    }, n.mixin(n), n.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(a) {
        var b = c[a];
        n.prototype[a] = function() {
            var c = this._wrapped;
            return b.apply(c, arguments), "shift" !== a && "splice" !== a || 0 !== c.length ||
            delete c[0], C.call(this, c)
        }
    }), n.each(["concat", "join", "slice"], function(a) {
        var b = c[a];
        n.prototype[a] = function() {
            return C.call(this, b.apply(this._wrapped, arguments))
        }
    }), n.prototype.value = function() {
        return this._wrapped
    }, "function" == typeof define && define.amd && define("underscore", [], function() {
        return n
    })
}.call(this), function(a, b) {
    if ("function" == typeof define && define.amd)
        define(["underscore", "jquery", "exports"], function(c, d, e) {
            a.Backbone = b(a, e, c, d)
        });
    else if ("undefined" != typeof exports) {
        var c = require("underscore");
        b(a, exports, c)
    } else
        a.Backbone = b(a, {}, a._, a.jQuery || a.Zepto || a.ender || a.$)
}(this, function(a, b, c, d) {
    var e = a.Backbone,
        f = [],
        g = f.slice;
    b.VERSION = "1.1.2", b.$ =
    d, b.noConflict = function() {
        return a.Backbone = e, this
    }, b.emulateHTTP = !1, b.emulateJSON = !1;
    var h = b.Events = {
        on : function(a, b, c) {
            if (!j(this, "on", a, [b, c]) || !b)
                return this;
            this._events || (this._events = {});
            var d = this._events[a] || (this._events[a] = []);
            return d.push({
                callback : b,
                context : c,
                ctx : c || this
            }), this
        },
        once : function(a, b, d) {
            if (!j(this, "once", a, [b, d]) || !b)
                return this;
            var e = this,
                f = c.once(function() {
                e.off(a, f), b.apply(this, arguments)
            });
            return f._callback = b, this.on(a, f, d)
        },
        off : function(a, b, d) {
            if (!this._events || !j(this, "off", a, [b, d]))
                return this;
            if (!a && !b && !d)
                return this._events =
                void 0, this;
            for (var e = a ? [a] : c.keys(this._events),
                f = 0,
                g = e.length; g > f; f++) {
                a = e[f];
                var h = this._events[a];
                if (h)
                    if (b || d) {
                        for (var i = [],
                            k = 0,
                            l = h.length; l > k; k++) {
                            var m = h[k];
                            (b && b !== m.callback && b !== m.callback._callback || d && d !== m.context) && i.push(m)
                        }
                        i.length ? this._events[a] = i :
                        delete this._events[a]
                    } else
                        delete this._events[a]
            }
            return this
        },
        trigger : function(a) {
            if (!this._events)
                return this;
            var b = g.call(arguments, 1);
            if (!j(this, "trigger", a, b))
                return this;
            var c = this._events[a],
                d = this._events.all;
            return c && k(c, b), d && k(d, arguments), this
        },
        stopListening : function(a, b, d) {
            var e = this._listeningTo;
            if (!e)
                return this;
            var f = !b && !d;
            d || "object" != typeof b || ( d = this), a && ((e={})[a._listenId] = a);
            for (var g in e) a = e[g], a.off(b, d, this), (f || c.isEmpty(a._events)) &&
            delete this._listeningTo[g];
            return this
        }
    },
        i = /\s+/,
        j = function(a, b, c, d) {
        if (!c)
            return !0;
        if ("object" == typeof c) {
            for (var e in c)
            a[b].apply(a, [e, c[e]].concat(d));
            return !1
        }
        if (i.test(c)) {
            for (var f = c.split(i),
                g = 0,
                h = f.length; h > g; g++)
                a[b].apply(a, [f[g]].concat(d));
            return !1
        }
        return !0
    },
        k = function(a, b) {
        var c,
            d = -1,
            e = a.length,
            f = b[0],
            g = b[1],
            h = b[2];
        switch(b.length) {
        case 0:
            while (++d < e)
            ( c = a[d]).callback.call(c.ctx);
            return;
        case 1:
            while (++d < e)
            ( c = a[d]).callback.call(c.ctx, f);
            return;
        case 2:
            while (++d < e)
            ( c = a[d]).callback.call(c.ctx, f, g);
            return;
        case 3:
            while (++d < e)
            ( c = a[d]).callback.call(c.ctx, f, g, h);
            return;
        default:
            while (++d < e)
            ( c = a[d]).callback.apply(c.ctx, b);
            return
        }
    },
        l = {
        listenTo : "on",
        listenToOnce : "once"
    };
    c.each(l, function(a, b) {
        h[b] = function(b, d, e) {
            var f = this._listeningTo || (this._listeningTo = {}),
                g = b._listenId || (b._listenId = c.uniqueId("l"));
            return f[g] = b, e || "object" != typeof d || ( e = this), b[a](d, e, this), this
        }
    }), h.bind = h.on, h.unbind = h.off, c.extend(b, h);
    var m = b.Model = function(a, b) {
        var d = a || {};
        b || ( b = {}), this.cid = c.uniqueId("c"), this.attributes = {}, b.collection && (this.collection = b.collection), b.parse && ( d = this.parse(d, b) || {}),
        d = c.defaults({}, d, c.result(this, "defaults")), this.set(d, b), this.changed = {}, this.initialize.apply(this, arguments)
    };
    c.extend(m.prototype, h, {
        changed : null,
        validationError : null,
        idAttribute : "id",
        initialize : function() {
        },
        toJSON : function(a) {
            return c.clone(this.attributes)
        },
        sync : function() {
            return b.sync.apply(this, arguments)
        },
        get : function(a) {
            return this.attributes[a]
        },
        escape : function(a) {
            return c.escape(this.get(a))
        },
        has : function(a) {
            return null != this.get(a)
        },
        set : function(a, b, d) {
            var e,
                f,
                g,
                h,
                i,
                j,
                k,
                l;
            if (null == a)
                return this;
            if ("object" == typeof a ? ( f = a,
                d =
                b) : (f={})[a] = b, d || ( d = {}), !this._validate(f, d))
                return !1;
            g = d.unset,
            i = d.silent,
            h = [],
            j = this._changing, this._changing = !0, j || (this._previousAttributes = c.clone(this.attributes), this.changed = {}),
            l = this.attributes,
            k = this._previousAttributes, this.idAttribute in f && (this.id = f[this.idAttribute]);
            for (e in f) b = f[e], c.isEqual(l[e], b) || h.push(e), c.isEqual(k[e], b) ?
            delete this.changed[e] : this.changed[e] = b, g ?
            delete l[e] : l[e] = b;
            if (!i) {
                h.length && (this._pending = d);
                for (var m = 0,
                    n = h.length; n > m; m++)
                    this.trigger("change:" + h[m], this, l[h[m]], d)
            }
            if (j)
                return this;
            if (!i)
                while (this._pending) d = this._pending, this._pending = !1, this.trigger("change", this, d);
            return this._pending = !1, this._changing = !1, this
        },
        unset : function(a, b) {
            return this.set(a,
            void 0, c.extend({}, b, {
                unset : !0
            }))
        },
        clear : function(a) {
            var b = {};
            for (var d in this.attributes)
            b[d] =
            void 0;
            return this.set(b, c.extend({}, a, {
                unset : !0
            }))
        },
        hasChanged : function(a) {
            return null == a ? !c.isEmpty(this.changed) : c.has(this.changed, a)
        },
        changedAttributes : function(a) {
            if (!a)
                return this.hasChanged() ? c.clone(this.changed) : !1;
            var b,
                d = !1,
                e = this._changing ? this._previousAttributes : this.attributes;
            for (var f in a)c.isEqual(e[f], b = a[f]) || ((d||(d={}))[f] = b);
            return d
        },
        previous : function(a) {
            return null != a && this._previousAttributes ? this._previousAttributes[a] : null
        },
        previousAttributes : function() {
            return c.clone(this._previousAttributes)
        },
        fetch : function(a) {
            a = a ? c.clone(a) : {},
            void 0 === a.parse && (a.parse = !0);
            var b = this,
                d = a.success;
            return a.success = function(c) {
                return b.set(b.parse(c, a), a) ? (d && d(b, c, a),
                void  b.trigger("sync", b, c, a)) : !1
            }, I(this, a), this.sync("read", this, a)
        },
        save : function(a, b, d) {
            var e,
                f,
                g,
                h = this.attributes;
            if (null == a || "object" == typeof a ? ( e = a,
            d =
            b) : (e={})[a] = b,
            d = c.extend({
                validate : !0
            }, d), e && !d.wait) {
                if (!this.set(e, d))
                    return !1
            } else if (!this._validate(e, d))
                return !1;
            e && d.wait && (this.attributes = c.extend({}, h, e)),
            void 0 === d.parse && (d.parse = !0);
            var i = this,
                j = d.success;
            return d.success = function(a) {
                i.attributes = h;
                var b = i.parse(a, d);
                return d.wait && ( b = c.extend(e || {}, b)), c.isObject(b) && !i.set(b, d) ? !1 : (j && j(i, a, d),
                void  i.trigger("sync", i, a, d))
            }, I(this, d),
            f = this.isNew() ? "create" : d.patch ? "patch" : "update", "patch" !== f || d.attrs || (d.attrs = e),
            g = this.sync(f, this, d), e && d.wait && (this.attributes = h), g
        },
        destroy : function(a) {
            a = a ? c.clone(a) : {};
            var b = this,
                d = a.success,
                e = function() {
                b.stopListening(), b.trigger("destroy", b, b.collection, a)
            };
            if (a.success = function(c) {
                    (a.wait || b.isNew()) && e(), d && d(b, c, a), b.isNew() || b.trigger("sync", b, c, a)
                }, this.isNew())
                return a.success(), !1;
            I(this, a);
            var f = this.sync("delete", this, a);
            return a.wait || e(), f
        },
        url : function() {
            var a = c.result(this, "urlRoot") || c.result(this.collection, "url") || H();
            return this.isNew() ? a : a.replace(/([^\/])$/, "$1/") + encodeURIComponent(this.id)
        },
        parse : function(a, b) {
            return a
        },
        clone : function() {
            return new this.constructor(this.attributes)
        },
        isNew : function() {
            return !this.has(this.idAttribute)
        },
        isValid : function(a) {
            return this._validate({}, c.extend(a || {}, {
                validate : !0
            }))
        },
        _validate : function(a, b) {
            if (!b.validate || !this.validate)
                return !0;
            a = c.extend({}, this.attributes, a);
            var d = this.validationError = this.validate(a, b) || null;
            return d ? (this.trigger("invalid", this, d, c.extend(b, {
                validationError : d
            })), !1) : !0
        }
    });
    var n = ["keys", "values", "pairs", "invert", "pick", "omit", "chain"];
    c.each(n, function(a) {
        c[a] && (m.prototype[a] = function() {
            var b = g.call(arguments);
            return b.unshift(this.attributes), c[a].apply(c, b)
        })
    });
    var o = b.Collection = function(a, b) {
        b || ( b = {}), b.model && (this.model = b.model),
        void 0 !== b.comparator && (this.comparator = b.comparator), this._reset(), this.initialize.apply(this, arguments), a && this.reset(a, c.extend({
            silent : !0
        }, b))
    },
        p = {
        add : !0,
        remove : !0,
        merge : !0
    },
        q = {
        add : !0,
        remove : !1
    };
    c.extend(o.prototype, h, {
        model : m,
        initialize : function() {
        },
        toJSON : function(a) {
            return this.map(function(b) {
                return b.toJSON(a)
            })
        },
        sync : function() {
            return b.sync.apply(this, arguments)
        },
        add : function(a, b) {
            return this.set(a, c.extend({
                merge : !1
            }, b, q))
        },
        remove : function(a, b) {
            var d = !c.isArray(a);
            a = d ? [a] : c.clone(a), b || ( b = {});
            for (var e = 0,
                f = a.length; f > e; e++) {
                var g = a[e] = this.get(a[e]);
                if (g) {
                    var h = this.modelId(g.attributes);
                    null != h &&
                    delete this._byId[h],
                    delete this._byId[g.cid];
                    var i = this.indexOf(g);
                    this.models.splice(i, 1), this.length--, b.silent || (b.index = i, g.trigger("remove", g, this, b)), this._removeReference(g, b)
                }
            }
            return d ? a[0] : a
        },
        set : function(a, b) {
            b = c.defaults({}, b, p), b.parse && ( a = this.parse(a, b));
            var d = !c.isArray(a);
            a = d ? a ? [a] : [] : a.slice();
            for (var e,
                f,
                g,
                h,
                i,
                j = b.at,
                k = this.comparator && null == j && b.sort !== !1,
                l = c.isString(this.comparator) ? this.comparator : null,
                m = [],
                n = [],
                o = {},
                q = b.add,
                r = b.merge,
                s = b.remove,
                t = !k && q && s ? [] : !1,
                u = 0,
                v = a.length; v > u; u++) {
                if ( g = a[u],
                    h = this.get(g))
                    s && (o[h.cid] = !0), r && g !== h && ( g = this._isModel(g) ? g.attributes : g, b.parse && ( g = h.parse(g, b)), h.set(g, b), k && !i && h.hasChanged(l) && ( i = !0)), a[u] =
                    h;
                else if (q) {
                    if ( f = a[u] = this._prepareModel(g, b), !f)
                        continue;
                    m.push(f), this._addReference(f, b)
                }
                f = h || f, f && ( e = this.modelId(f.attributes), !t || !f.isNew() && o[e] || t.push(f), o[e] = !0)
            }
            if (s) {
                for (var u = 0,
                    v = this.length; v > u; u++)
                    o[( f = this.models[u]).cid] || n.push(f);
                n.length && this.remove(n, b)
            }
            if (m.length || t && t.length)
                if (k && ( i = !0), this.length += m.length, null != j)
                    for (var u = 0,
                        v = m.length; v > u; u++)
                        this.models.splice(j + u, 0, m[u]);
                else {
                    t && (this.models.length = 0);
                    for (var w = t || m,
                        u = 0,
                        v = w.length; v > u; u++)
                        this.models.push(w[u])
                }
            if (i && this.sort({
                silent : !0
            }), !b.silent) {
                for (var u = 0,
                    v = m.length; v > u; u++)
                    ( f = m[u]).trigger("add", f, this, b);
                (i || t && t.length) && this.trigger("sort", this, b)
            }
            return d ? a[0] : a
        },
        reset : function(a, b) {
            b || ( b = {});
            for (var d = 0,
                e = this.models.length; e > d; d++)
                this._removeReference(this.models[d], b);
            return b.previousModels = this.models, this._reset(),
            a = this.add(a, c.extend({
                silent : !0
            }, b)), b.silent || this.trigger("reset", this, b), a
        },
        push : function(a, b) {
            return this.add(a, c.extend({
                at : this.length
            }, b))
        },
        pop : function(a) {
            var b = this.at(this.length - 1);
            return this.remove(b, a), b
        },
        unshift : function(a, b) {
            return this.add(a, c.extend({
                at : 0
            }, b))
        },
        shift : function(a) {
            var b = this.at(0);
            return this.remove(b, a), b
        },
        slice : function() {
            return g.apply(this.models, arguments)
        },
        get : function(a) {
            if (null == a)
                return
                void 0;
            var b = this.modelId(this._isModel(a) ? a.attributes : a);
            return this._byId[a] || this._byId[b] || this._byId[a.cid]
        },
        at : function(a) {
            return this.models[a]
        },
        where : function(a, b) {
            return c.isEmpty(a) ? b ?
            void 0 : [] : this[b?"find":"filter"](function(b) {
                for (var c in a)
                if (a[c] !== b.get(c))
                    return !1;
                return !0
            })
        },
        findWhere : function(a) {
            return this.where(a, !0)
        },
        sort : function(a) {
            if (!this.comparator)
                throw new Error("Cannot sort a set without a comparator");
            return a || ( a = {}), c.isString(this.comparator) || 1 === this.comparator.length ? this.models = this.sortBy(this.comparator, this) : this.models.sort(c.bind(this.comparator, this)), a.silent || this.trigger("sort", this, a), this
        },
        pluck : function(a) {
            return c.invoke(this.models, "get", a)
        },
        fetch : function(a) {
            a = a ? c.clone(a) : {},
            void 0 === a.parse && (a.parse = !0);
            var b = a.success,
                d = this;
            return a.success = function(c) {
                var e = a.reset ? "reset" : "set";
                d[e](c, a), b && b(d, c, a), d.trigger("sync", d, c, a)
            }, I(this, a), this.sync("read", this, a)
        },
        create : function(a, b) {
            if ( b = b ? c.clone(b) : {}, !( a = this._prepareModel(a, b)))
                return !1;
            b.wait || this.add(a, b);
            var d = this,
                e = b.success;
            return b.success = function(a, c) {
                b.wait && d.add(a, b), e && e(a, c, b)
            }, a.save(null, b), a
        },
        parse : function(a, b) {
            return a
        },
        clone : function() {
            return new this.constructor(this.models, {
                model : this.model,
                comparator : this.comparator
            })
        },
        modelId : function(a) {
            return a[this.model.prototype.idAttribute || "id"]
        },
        _reset : function() {
            this.length = 0, this.models = [], this._byId = {}
        },
        _prepareModel : function(a, b) {
            if (this._isModel(a))
                return a.collection || (a.collection = this), a;
            b = b ? c.clone(b) : {}, b.collection = this;
            var d = new this.model(a, b);
            return d.validationError ? (this.trigger("invalid", this, d.validationError, b), !1) : d
        },
        _isModel : function(a) {
            return a instanceof m
        },
        _addReference : function(a, b) {
            this._byId[a.cid] = a;
            var c = this.modelId(a.attributes);
            null != c && (this._byId[c] = a), a.on("all", this._onModelEvent, this)
        },
        _removeReference : function(a, b) {
            this === a.collection &&
            delete a.collection, a.off("all", this._onModelEvent, this)
        },
        _onModelEvent : function(a, b, c, d) {
            if ("add" !== a && "remove" !== a || c === this) {
                if ("destroy" === a && this.remove(b, d), "change" === a) {
                    var e = this.modelId(b.previousAttributes()),
                        f = this.modelId(b.attributes);
                    e !== f && (null != e &&
                    delete this._byId[e], null != f && (this._byId[f] = b))
                }
                this.trigger.apply(this, arguments)
            }
        }
    });
    var r = ["forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "toArray", "size", "first", "head", "take", "initial", "rest", "tail", "drop", "last", "without", "difference", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "chain", "sample", "partition"];
    c.each(r, function(a) {
        c[a] && (o.prototype[a] = function() {
            var b = g.call(arguments);
            return b.unshift(this.models), c[a].apply(c, b)
        })
    });
    var s = ["groupBy", "countBy", "sortBy", "indexBy"];
    c.each(s, function(a) {
        c[a] && (o.prototype[a] = function(b, d) {
            var e = c.isFunction(b) ? b : function(a) {
                return a.get(b)
            };
            return c[a](this.models, e, d)
        })
    });
    var t = b.View = function(a) {
        this.cid = c.uniqueId("view"), a || ( a = {}), c.extend(this, c.pick(a, v)), this._ensureElement(), this.initialize.apply(this, arguments)
    },
        u = /^(\S+)\s*(.*)$/,
        v = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
    c.extend(t.prototype, h, {
        tagName : "div",
        $ : function(a) {
            return this.$el.find(a)
        },
        initialize : function() {
        },
        render : function() {
            return this
        },
        remove : function() {
            return this._removeElement(), this.stopListening(), this
        },
        _removeElement : function() {
            this.$el.remove()
        },
        setElement : function(a) {
            return this.undelegateEvents(), this._setElement(a), this.delegateEvents(), this
        },
        _setElement : function(a) {
            this.$el = a instanceof b.$ ? a : b.$(a), this.el = this.$el[0]
        },
        delegateEvents : function(a) {
            if (!a && !( a = c.result(this, "events")))
                return this;
            this.undelegateEvents();
            for (var b in a) {
                var d = a[b];
                if (c.isFunction(d) || ( d = this[a[b]]), d) {
                    var e = b.match(u);
                    this.delegate(e[1], e[2], c.bind(d, this))
                }
            }
            return this
        },
        delegate : function(a, b, c) {
            this.$el.on(a + ".delegateEvents" + this.cid, b, c)
        },
        undelegateEvents : function() {
            return this.$el && this.$el.off(".delegateEvents" + this.cid), this
        },
        undelegate : function(a, b, c) {
            this.$el.off(a + ".delegateEvents" + this.cid, b, c)
        },
        _createElement : function(a) {
            return document.createElement(a)
        },
        _ensureElement : function() {
            if (this.el)
                this.setElement(c.result(this, "el"));
            else {
                var a = c.extend({}, c.result(this, "attributes"));
                this.id && (a.id = c.result(this, "id")), this.className && (a["class"] = c.result(this, "className")), this.setElement(this._createElement(c.result(this, "tagName"))), this._setAttributes(a)
            }
        },
        _setAttributes : function(a) {
            this.$el.attr(a)
        }
    }), b.sync = function(a, d, e) {
        var f = w[a];
        c.defaults(e || ( e = {}), {
            emulateHTTP : b.emulateHTTP,
            emulateJSON : b.emulateJSON
        });
        var g = {
            type : f,
            dataType : "json"
        };
        if (e.url || (g.url = c.result(d, "url") || H()), null != e.data || !d || "create" !== a && "update" !== a && "patch" !== a || (g.contentType = "application/json", g.data = JSON.stringify(e.attrs || d.toJSON(e))), e.emulateJSON && (g.contentType = "application/x-www-form-urlencoded", g.data = g.data ? {
            model : g.data
        } : {}), e.emulateHTTP && ("PUT" === f || "DELETE" === f || "PATCH" === f)) {
            g.type = "POST", e.emulateJSON && (g.data._method = f);
            var h = e.beforeSend;
            e.beforeSend = function(a) {
                return a.setRequestHeader("X-HTTP-Method-Override", f), h ? h.apply(this, arguments) :
                void 0
            }
        }
        "GET" === g.type || e.emulateJSON || (g.processData = !1);
        var i = e.error;
        e.error = function(a, b, c) {
            e.textStatus = b, e.errorThrown =
            c, i && i.apply(this, arguments)
        };
        var j = e.xhr = b.ajax(c.extend(g, e));
        return d.trigger("request", d, j, e), j
    };
    var w = {
        create : "POST",
        update : "PUT",
        patch : "PATCH",
        "delete" : "DELETE",
        read : "GET"
    };
    b.ajax = function() {
        return b.$.ajax.apply(b.$, arguments)
    };
    var x = b.Router = function(a) {
        a || ( a = {}), a.routes && (this.routes = a.routes), this._bindRoutes(), this.initialize.apply(this, arguments)
    },
        y = /\((.*?)\)/g,
        z = /(\(\?)?:\w+/g,
        A = /\*\w+/g,
        B = /[\-{}\[\]+?.,\\\^$|#\s]/g;
    c.extend(x.prototype, h, {
        initialize : function() {
        },
        route : function(a, d, e) {
            c.isRegExp(a) || ( a = this._routeToRegExp(a)), c.isFunction(d) && ( e = d,
            d = ""), e || ( e = this[d]);
            var f = this;
            return b.history.route(a, function(c) {
                var g = f._extractParameters(a, c);
                f.execute(e, g, d) !== !1 && (f.trigger.apply(f, ["route:" + d].concat(g)), f.trigger("route", d, g), b.history.trigger("route", f, d, g))
            }), this
        },
        execute : function(a, b, c) {
            a && a.apply(this, b)
        },
        navigate : function(a, c) {
            return b.history.navigate(a, c), this
        },
        _bindRoutes : function() {
            if (this.routes) {
                this.routes = c.result(this, "routes");
                var a,
                    b = c.keys(this.routes);
                while (null != ( a = b.pop()))
                this.route(a, this.routes[a])
            }
        },
        _routeToRegExp : function(a) {
            return a = a.replace(B, "\\$&").replace(y, "(?:$1)?").replace(z, function(a, b) {
                return b ? a : "([^/?]+)"
            }).replace(A, "([^?]*?)"), new RegExp("^" + a + "(?:\\?([\\s\\S]*))?$")
        },
        _extractParameters : function(a, b) {
            var d = a.exec(b).slice(1);
            return c.map(d, function(a, b) {
                return b === d.length - 1 ? a || null : a ? decodeURIComponent(a) : null
            })
        }
    });
    var C = b.History = function() {
        this.handlers = [], c.bindAll(this, "checkUrl"), "undefined" != typeof window && (this.location = window.location, this.history = window.history)
    },
        D = /^[#\/]|\s+$/g,
        E = /^\/+|\/+$/g,
        F = /#.*$/;
    C.started = !1, c.extend(C.prototype, h, {
        interval : 50,
        atRoot : function() {
            var a = this.location.pathname.replace(/[^\/]$/, "$&/");
            return a === this.root && !this.getSearch()
        },
        getSearch : function() {
            var a = this.location.href.replace(/#.*/, "").match(/\?.+/);
            return a ? a[0] : ""
        },
        getHash : function(a) {
            var b = (a || this).location.href.match(/#(.*)$/);
            return b ? b[1] : ""
        },
        getPath : function() {
            var a = decodeURI(this.location.pathname + this.getSearch()),
                b = this.root.slice(0, -1);
            return a.indexOf(b) || ( a = a.slice(b.length)), a.slice(1)
        },
        getFragment : function(a) {
            return null == a && ( a = this._hasPushState || !this._wantsHashChange ? this.getPath() : this.getHash()), a.replace(D, "")
        },
        start : function(a) {
            if (C.started)
                throw new Error("Backbone.history has already been started");
            C.started = !0, this.options = c.extend({
                root : "/"
            }, this.options, a), this.root = this.options.root, this._wantsHashChange = this.options.hashChange !== !1, this._hasHashChange = "onhashchange" in window, this._wantsPushState = !!this.options.pushState, this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState), this.fragment = this.getFragment();
            var b = window.addEventListener ||
            function(a, b) {
                return attachEvent("on" + a, b)
            };
            if (this.root = ("/" + this.root + "/").replace(E, "/"), !(this._hasHashChange || !this._wantsHashChange || this._wantsPushState && this._hasPushState)) {
                var d = document.createElement("iframe");
                d.src = "javascript:0", d.style.display = "none", d.tabIndex = -1;
                var e = document.body;
                this.iframe = e.insertBefore(d, e.firstChild).contentWindow, this.navigate(this.fragment)
            }
            if (this._hasPushState ? b("popstate", this.checkUrl, !1) : this._wantsHashChange && this._hasHashChange && !this.iframe ? b("hashchange", this.checkUrl, !1) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), this._wantsHashChange && this._wantsPushState) {
                if (!this._hasPushState && !this.atRoot())
                    return this.location.replace(this.root + "#" + this.getPath()), !0;
                this._hasPushState && this.atRoot() && this.navigate(this.getHash(), {
                    replace : !0
                })
            }
            return this.options.silent ?
            void 0 : this.loadUrl()
        },
        stop : function() {
            var a = window.removeEventListener ||
            function(a, b) {
                return detachEvent("on" + a, b)
            };
            this._hasPushState ? a("popstate", this.checkUrl, !1) : this._wantsHashChange && this._hasHashChange && !this.iframe && a("hashchange", this.checkUrl, !1), this.iframe && (document.body.removeChild(this.iframe.frameElement), this.iframe = null), this._checkUrlInterval && clearInterval(this._checkUrlInterval), C.started = !1
        },
        route : function(a, b) {
            this.handlers.unshift({
                route : a,
                callback : b
            })
        },
        checkUrl : function(a) {
            var b = this.getFragment();
            return b === this.fragment && this.iframe && ( b = this.getHash(this.iframe)), b === this.fragment ? !1 : (this.iframe && this.navigate(b),
            void  this.loadUrl())
        },
        loadUrl : function(a) {
            return a = this.fragment = this.getFragment(a), c.any(this.handlers, function(b) {
                return b.route.test(a) ? (b.callback(a), !0) :
                void 0
            })
        },
        navigate : function(a, b) {
            if (!C.started)
                return !1;
            b && b !== !0 || ( b = {
                trigger : !!b
            });
            var c = this.root + ( a = this.getFragment(a || ""));
            if ( a = decodeURI(a.replace(F, "")), this.fragment !== a) {
                if (this.fragment = a, "" === a && "/" !== c && ( c = c.slice(0, -1)), this._hasPushState)
                    this.history[b.replace?"replaceState":"pushState"]({}, document.title, c);
                else {
                    if (!this._wantsHashChange)
                        return this.location.assign(c);
                    this._updateHash(this.location, a, b.replace), this.iframe && a !== this.getHash(this.iframe) && (b.replace || this.iframe.document.open().close(), this._updateHash(this.iframe.location, a, b.replace))
                }
                return b.trigger ? this.loadUrl(a) :
                void 0
            }
        },
        _updateHash : function(a, b, c) {
            if (c) {
                var d = a.href.replace(/(javascript:|#).*$/, "");
                a.replace(d + "#" + b)
            } else
                a.hash = "#" + b
        }
    }), b.history = new C;
    var G = function(a, b) {
        var d = this,
            e;
        e = a && c.has(a, "constructor") ? a.constructor : function() {
            return d.apply(this, arguments)
        }, c.extend(e, d, b);
        var f = function() {
            this.constructor = e
        };
        return f.prototype = d.prototype, e.prototype = new f, a && c.extend(e.prototype, a), e.__super__ = d.prototype, e
    };
    m.extend = o.extend = x.extend = t.extend = C.extend = G;
    var H = function() {
        throw new Error('A "url" property or function must be specified')
    },
        I = function(a, b) {
        var c = b.error;
        b.error = function(d) {
            c && c(a, d, b), a.trigger("error", a, d, b)
        }
    };
    return b
}), function(a) {
    var b = {},
        c = !1,
        d = [],
        e = !1;
    b.modules = {};
    var f = function() {
        var a = 65536,
            b = 0;
        return function() {
            return b = (b + 1) % a
        }
    }(),
        g = function(a) {
        a = a || 6,
        a = parseInt(a, 10),
        a = isNaN(a) ? 6 : a;
        var b = "0123456789abcdefghijklmnopqrstubwxyzABCEDFGHIJKLMNOPQRSTUVWXYZ",
            c = b.length - 1,
            d = "";
        while (a--)
        d += b[Math.round(Math.random() * c)];
        return d
    },
        h = function(a) {
        return "[object Function]" === Object.prototype.toString.call(a)
    },
        i = function(a) {
        return "[object String]" === Object.prototype.toString.call(a)
    },
        j = function(a) {
        return "[object Object]" === Object.prototype.toString.call(a)
    },
        k = function(a) {
        return "[object Array]" === Object.prototype.toString.call(a)
    },
        l = function(a) {
        return null != a && a == a.window
    },
        m = function(a) {
        return j(a) && !l(a) && Object.getPrototypeOf(a) == Object.prototype
    },
        n = function(a, b, c) {
        var d = null;
        for (d in b)c && (m(b[d]) || k(b[d])) ? (m(b[d]) && !m(a[d]) && (a[d] = {}), k(b[d]) && !k(a[d]) && (a[d] = []), n(a[d], b[d], c)) :
        void 0 !== b[d] && (a[d] = b[d]);
        return a
    };
    b.version = "1.0.0 Beta";

    var o = {
        moduleName : "\u6a21\u5757\u7684\u540d\u5b57\u5fc5\u987b\u4e3a\u5b57\u7b26\u4e32\u5e76\u4e14\u4e0d\u80fd\u4e3a\u7a7a\uff01",
        moduleFactory : "\u6a21\u5757\u6784\u9020\u5bf9\u8c61\u5fc5\u987b\u662f\u51fd\u6570\uff01"
    };
    b.define = function(a, c) {
        if (h(a) && ( a = "",
            c =
            a), !a || !i(a))
            throw new Error(o.moduleName);
        if (!h(c))
            throw new Error(o.moduleFactory);
        var d = {
            exports : {}
        },
            e = c.call(this, b.require("dom"), d.exports, d),
            f = d.exports || e;
        return a in b ? (b[a] = [b.name], b[a].push(f)) : b[a] = f, f
    }, b.extend = function(a, c) {
        if (arguments.length > 1 && m(a))
            return n.apply(b, arguments);
        (h(a) || m(a)) && ( c = a,
        a = ""),
        a = a ? a : this;
        var d = b.require(a);
        d = d ? d : this;
        var e = {
            exports : {}
        },
            f = null,
            g = e.exports;
        return h(c) && ( f = c.call(this, d, g, e),
        f = f || e.exports, n(d, f)), m(c) && n(d, c), d
    }, b.require = function(a) {
        if (!a)
            throw new Error(o.moduleName);
        if (!i(a))
            return a;
        var c = b[a];
        return k(c) && c.length < 2 ? c[0] : c || null
    }, b.use = function(a, c) {
        if (h(a) && ( c = a,
            a = []), i(a) && ( a = [a],
            c =
            c), !k(a))
            throw new Error("\u4ee5\u6765\u6a21\u5757\u53c2\u6570\u4e0d\u6b63\u786e\uff01");
        var d = [];
        d.push(b.require("dom"));
        for (var e = 0,
            f = a.length; f > e; e++)
            d.push(b.require(a[e]));
        return c.apply(b, d)
    }, b.extend({
        isPlainObject : m,
        isFunction : h,
        isString : i,
        isArray : k,
        isAppcan : e,
        getOptionId : f,
        getUID : g
    }), b.inherit = function(a, b, c) {
        h(a) ? a = a : ( c = b,
        b =
        a,
        a = function() {
        });
        var d;
        d = b && b.hasOwnProperty("constructor") ? b.constructor : function() {
            return a.apply(this, arguments), this.initated && this.initated.apply(this, arguments), this
        }, n(d, a), n(d, c);
        var e = function() {
            this.constructor = d
        };
        return e.prototype = a.prototype, d.prototype = new e, b && n(d.prototype, b), d.__super__ = a.prototype, d
    };
    function p() {
        for (var a = 0,
            c = d.length; c > a; a++)
            d[a].call(b);
        d.length = 0
    }

    function q(a) {
        return a = h(a) ? a : function() {
        }, d.push(a), c ?
        void  p() : "uexWindow" in window ? ( c = !0,
        void  p()) :
        void (d.length > 1 || (h(window.uexOnload) && d.unshift(window.uexOnload), window.uexOnload = function(a) {
            e = !0, b.isAppcan = !0, a || ( c = !0, p())
        }))
    }
    b.ready = q, a.appcan =
    b
}(this), window.appcan && window.appcan.define("dom", function(a, b, c) {
    c.exports = Zepto
}), window.appcan && appcan.define("Backbone", function(a, b, c) {
    c.exports = Backbone
}), window.appcan && appcan.define("_", function(a, b, c) {
    c.exports = _
}), window.appcan && appcan.define("underscore", function(a, b, c) {
    c.exports = _
}), window.appcan && appcan.extend(function(a, b, c) {
    var d = function(a) {
        try {
            window.uexLog ? window.uexLog && uexLog.sendLog(a) : console && console.log(a)
        } catch(b) {
            return b
        }
    };
    a.logs = d
}), window.appcan && appcan.extend("dom", function(a, b, c) {!
    appcan.isAppcan
}), appcan && appcan.define("detect", function(a, b, c) {
    var d = {},
        e = {},
        f = window.navigator.userAgent,
        g = f.match(/Web[kK]it[\/]{0,1}([\d.]+)/),
        h = f.match(/(Android);?[\s\/]+([\d.]+)?/),
        i = f.match(/\(Macintosh\; Intel .*OS X ([\d_.]+).+\)/),
        j = f.match(/(iPad).*OS\s([\d_]+)/),
        k = f.match(/(iPod)(.*OS\s([\d_]+))?/),
        l = !j && f.match(/(iPhone\sOS)\s([\d_]+)/),
        m = f.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),
        n = f.match(/Windows Phone ([\d.]+)/),
        o = m && f.match(/TouchPad/),
        p = f.match(/Kindle\/([\d.]+)/),
        q = f.match(/Silk\/([\d._]+)/),
        r = f.match(/(BlackBerry).*Version\/([\d.]+)/),
        s = f.match(/(BB10).*Version\/([\d.]+)/),
        t = f.match(/(RIM\sTablet\sOS)\s([\d.]+)/),
        u = f.match(/PlayBook/),
        v = f.match(/Chrome\/([\d.]+)/) || f.match(/CriOS\/([\d.]+)/),
        w = f.match(/Firefox\/([\d.]+)/),
        x = f.match(/MSIE\s([\d.]+)/) || f.match(/Trident\/[\d](?=[^\?]+).*rv:([0-9.].)/),
        y = !v && f.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/),
        z = y || f.match(/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/);
    (e.webkit = !!g) && (e.version = g[1]), h && (d.name = "android", d.android = !0, d.version = h[2]), l && !k && (d.name = "iphone", d.ios = d.iphone = !0, d.version = l[2].replace(/_/g, ".")), j && (d.name = "ipad", d.ios = d.ipad = !0, d.version = j[2].replace(/_/g, ".")), k && (d.name = "ipod", d.ios = d.ipod = !0, d.version = k[3] ? k[3].replace(/_/g, ".") : null), n && (d.name = "wp", d.wp = !0, d.version = n[1]), m && (d.name = "webos", d.webos = !0, d.version = m[2]), o && (d.name = "touchpad", d.touchpad = !0), r && (d.name = "blackberry", d.blackberry = !0, d.version = r[2]), s && (d.name = "bb10", d.bb10 = !0, d.version = s[2]), t && (d.name = "rimtabletos", d.rimtabletos = !0, d.version = t[2]), u && (e.name = "playbook", e.playbook = !0), p && (d.name = "kindle", d.kindle = !0, d.version = p[1]), q && (e.name = "silk", e.silk = !0, e.version = q[1]), !q && d.android && f.match(/Kindle Fire/) && (e.name = "silk", e.silk = !0), v && (e.name = "chrome", e.chrome = !0, e.version = v[1]), w && (e.name = "firefox", e.firefox = !0, e.version = w[1]), x && (e.name = "ie", e.ie = !0, e.version = x[1]), z && (i || d.ios) && (e.name = "safari", e.safari = !0, i && (e.version = z[1])), i && (d.name = "osx", d.version = i[1].split("_").join(".")), y && (e.name = "webview", e.webview = !0), appcan.isAppcan && (e.name = "appcan", e.appcan = !0), d.tablet = !!(j || u || h && !f.match(/Mobile/) || w && f.match(/Tablet/) || x && !f.match(/Phone/) && f.match(/Touch/)), d.phone = !(d.tablet || d.ipod || !(h || l || m || r || s || v && f.match(/Android/) || v && f.match(/CriOS\/([\d.]+)/) || w && f.match(/Mobile/) || x && f.match(/Touch/)));
    var A = function() {
        return "ontouchstart" in window || window.DocumentTouch && window.document instanceof window.DocumentTouch ? !0 : !1
    },
        B = function() {
        for (var a = document.createElement("div"),
            b = !1,
            c = ["perspectiveProperty", "WebkitPerspective"],
            d = c.length - 1; d >= 0; d--)
            b = b ? b :
            void 0 !== a.style[c[d]];
        if (b) {
            var e = document.createElement("style");
            e.textContent = "@media (-webkit-transform-3d){#test3d{height:3px}}", document.getElementsByTagName("head")[0].appendChild(e), a.id = "test3d", document.documentElement.appendChild(a),
            b = 3 === a.offsetHeight, e.parentNode.removeChild(e), a.parentNode.removeChild(a)
        }
        return b
    },
        C = {
        supportTouch : A()
    },
        D = {
        support3d : B()
    };
    c.exports = {
        browser : e,
        os : d,
        event : C,
        css : D,
        ua : f
    }
}), appcan && appcan.define("crypto", function(a, b, c) {
    function d(a) {
        for (var b = [],
            c = 0,
            d,
            e = 0; 256 > e; e++)
            b[e] = e;
        for ( e = 0; 256 > e; e++)
            c = (c + b[e] + a.charCodeAt(e % a.length)) % 256,
            d = b[e], b[e] = b[c], b[c] =
            d;
        return b
    }

    function e(a, b) {
        var c = 0,
            d = 0,
            e = "",
            f = [],
            g = null;
        f = f.concat(b);
        for (var h = 0; h < a.length; h++) {
            c = (c + 1) % 256,
            d = (d + f[c]) % 256,
            g = f[c], f[c] = f[d], f[d] =
            g;
            var i = a.charCodeAt(h) ^ f[(f[c] + f[d]) % 256] || a.charCodeAt(h);
            e += String.fromCharCode(i)
        }
        return e
    }

    function f(a, b) {
        if (!a || !b)
            return "";
        var c = d(a);
        return e(b, c)
    }

    function g(a) {
        function b(a) {
            var b = (a >>> 0).toString(16);
            return "00000000".substr(0, 8 - b.length) + b
        }

        function c(a) {
            for (var b = [],
                c = 0; c < a.length; c++)
                b = b.concat(k(a[c]));
            return b
        }

        function d(a) {
            for (var b = [],
                c = 0; 8 > c; c++)
                b.push(255 & a), a >>>= 8;
            return b
        }

        function e(a, b) {
            return a << b & 4294967295 | a >>> 32 - b
        }

        function f(a, b, c) {
            return a & b | ~a & c
        }

        function g(a, b, c) {
            return c & a | ~c & b
        }

        function h(a, b, c) {
            return a ^ b ^ c
        }

        function i(a, b, c) {
            return b ^ (a | ~c)
        }

        function j(a, b) {
            return a[b + 3] << 24 | a[b + 2] << 16 | a[b + 1] << 8 | a[b]
        }

        function k(a) {
            for (var b = [],
                c = 0; c < a.length; c++)
                if (a.charCodeAt(c) <= 127)
                    b.push(a.charCodeAt(c));
                else
                    for (var d = encodeURIComponent(a.charAt(c)).substr(1).split("%"),
                        e = 0; e < d.length; e++)
                        b.push(parseInt(d[e], 16));
            return b
        }

        function l(a, c, d, e) {
            for (var f = "",
                g = 0,
                h = 0,
                i = 3; i >= 0; i--)
                h = arguments[i],
                g = 255 & h, h >>>= 8, g <<= 8, g |= 255 & h, h >>>= 8, g <<= 8, g |= 255 & h, h >>>= 8, g <<= 8, g |= h, f += b(g);
            return f
        }

        function m(a) {
            for (var b = new Array(a.length),
                c = 0; c < a.length; c++)
                b[c] = a[c];
            return b
        }

        var n = null,
            o = null;
        "string" == typeof a ? n = k(a) : a.constructor == Array ? 0 === a.length ? n = a : "string" == typeof a[0] ? n = c(a) : "number" == typeof a[0] ? n = a : o = typeof a[0] : "undefined" != typeof ArrayBuffer ? a instanceof ArrayBuffer ? n = m(new Uint8Array(a)) : a instanceof Uint8Array || a instanceof Int8Array ? n = m(a) : a instanceof Uint32Array || a instanceof Int32Array || a instanceof Uint16Array || a instanceof Int16Array || a instanceof Float32Array || a instanceof Float64Array ? n = m(new Uint8Array(a.buffer)) : o = typeof a : o = typeof a, o && alert("MD5 type mismatch, cannot process " + o);
        function p(a, b) {
            return 4294967295 & a + b
        }
        return q();
        function q() {
            function a(a, b, c, d) {
                var f = v;
                v = u,
                u =
                t,
                t = p(t, e(p(s, p(a, p(b, c))), d)),
                s =
                f
            }

            var b = n.length;
            n.push(128);
            var c = n.length % 64;
            if (c > 56) {
                for (var k = 0; 64 - c > k; k++)
                    n.push(0);
                c = n.length % 64
            }
            for ( k = 0; 56 - c > k; k++)
                n.push(0);
            n = n.concat(d(8 * b));
            var m = 1732584193,
                o = 4023233417,
                q = 2562383102,
                r = 271733878,
                s = 0,
                t = 0,
                u = 0,
                v = 0;
            for ( k = 0; k < n.length / 64; k++) {
                s = m,
                t =
                o,
                u =
                q,
                v =
                r;
                var w = 64 * k;
                a(f(t, u, v), 3614090360, j(n, w), 7), a(f(t, u, v), 3905402710, j(n, w + 4), 12), a(f(t, u, v), 606105819, j(n, w + 8), 17), a(f(t, u, v), 3250441966, j(n, w + 12), 22), a(f(t, u, v), 4118548399, j(n, w + 16), 7), a(f(t, u, v), 1200080426, j(n, w + 20), 12), a(f(t, u, v), 2821735955, j(n, w + 24), 17), a(f(t, u, v), 4249261313, j(n, w + 28), 22), a(f(t, u, v), 1770035416, j(n, w + 32), 7), a(f(t, u, v), 2336552879, j(n, w + 36), 12), a(f(t, u, v), 4294925233, j(n, w + 40), 17), a(f(t, u, v), 2304563134, j(n, w + 44), 22), a(f(t, u, v), 1804603682, j(n, w + 48), 7), a(f(t, u, v), 4254626195, j(n, w + 52), 12), a(f(t, u, v), 2792965006, j(n, w + 56), 17), a(f(t, u, v), 1236535329, j(n, w + 60), 22), a(g(t, u, v), 4129170786, j(n, w + 4), 5), a(g(t, u, v), 3225465664, j(n, w + 24), 9), a(g(t, u, v), 643717713, j(n, w + 44), 14), a(g(t, u, v), 3921069994, j(n, w), 20), a(g(t, u, v), 3593408605, j(n, w + 20), 5), a(g(t, u, v), 38016083, j(n, w + 40), 9), a(g(t, u, v), 3634488961, j(n, w + 60), 14), a(g(t, u, v), 3889429448, j(n, w + 16), 20), a(g(t, u, v), 568446438, j(n, w + 36), 5), a(g(t, u, v), 3275163606, j(n, w + 56), 9), a(g(t, u, v), 4107603335, j(n, w + 12), 14), a(g(t, u, v), 1163531501, j(n, w + 32), 20), a(g(t, u, v), 2850285829, j(n, w + 52), 5), a(g(t, u, v), 4243563512, j(n, w + 8), 9), a(g(t, u, v), 1735328473, j(n, w + 28), 14), a(g(t, u, v), 2368359562, j(n, w + 48), 20), a(h(t, u, v), 4294588738, j(n, w + 20), 4), a(h(t, u, v), 2272392833, j(n, w + 32), 11), a(h(t, u, v), 1839030562, j(n, w + 44), 16), a(h(t, u, v), 4259657740, j(n, w + 56), 23), a(h(t, u, v), 2763975236, j(n, w + 4), 4), a(h(t, u, v), 1272893353, j(n, w + 16), 11), a(h(t, u, v), 4139469664, j(n, w + 28), 16), a(h(t, u, v), 3200236656, j(n, w + 40), 23), a(h(t, u, v), 681279174, j(n, w + 52), 4), a(h(t, u, v), 3936430074, j(n, w), 11), a(h(t, u, v), 3572445317, j(n, w + 12), 16), a(h(t, u, v), 76029189, j(n, w + 24), 23), a(h(t, u, v), 3654602809, j(n, w + 36), 4), a(h(t, u, v), 3873151461, j(n, w + 48), 11), a(h(t, u, v), 530742520, j(n, w + 60), 16), a(h(t, u, v), 3299628645, j(n, w + 8), 23), a(i(t, u, v), 4096336452, j(n, w), 6), a(i(t, u, v), 1126891415, j(n, w + 28), 10), a(i(t, u, v), 2878612391, j(n, w + 56), 15), a(i(t, u, v), 4237533241, j(n, w + 20), 21), a(i(t, u, v), 1700485571, j(n, w + 48), 6), a(i(t, u, v), 2399980690, j(n, w + 12), 10), a(i(t, u, v), 4293915773, j(n, w + 40), 15), a(i(t, u, v), 2240044497, j(n, w + 4), 21), a(i(t, u, v), 1873313359, j(n, w + 32), 6), a(i(t, u, v), 4264355552, j(n, w + 60), 10), a(i(t, u, v), 2734768916, j(n, w + 24), 15), a(i(t, u, v), 1309151649, j(n, w + 52), 21), a(i(t, u, v), 4149444226, j(n, w + 16), 6), a(i(t, u, v), 3174756917, j(n, w + 44), 10), a(i(t, u, v), 718787259, j(n, w + 8), 15), a(i(t, u, v), 3951481745, j(n, w + 36), 21),
                m = p(m, s),
                o = p(o, t),
                q = p(q, u),
                r = p(r, v)
            }
            return l(r, q, o, m).toUpperCase()
        }

    }

    var h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    function i(a) {
        var b = "",
            c,
            d,
            e,
            f,
            g,
            i,
            j,
            l = 0;
        a = k(a);
        while (l < a.length) c = a.charCodeAt(l++),
        d = a.charCodeAt(l++),
        e = a.charCodeAt(l++),
        f = c >> 2,
        g = (3 & c) << 4 | d >> 4,
        i = (15 & d) << 2 | e >> 6,
        j = 63 & e, isNaN(d) ? i = j = 64 : isNaN(e) && ( j = 64),
        b = b + h.charAt(f) + h.charAt(g) + h.charAt(i) + h.charAt(j);
        return b
    }

    function j(a) {
        var b = "",
            c,
            d,
            e,
            f,
            g,
            i,
            j,
            k = 0;
        a = a.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        while (k < a.length) f = h.indexOf(a.charAt(k++)),
        g = h.indexOf(a.charAt(k++)),
        i = h.indexOf(a.charAt(k++)),
        j = h.indexOf(a.charAt(k++)),
        c = f << 2 | g >> 4,
        d = (15 & g) << 4 | i >> 2,
        e = (3 & i) << 6 | j, b += String.fromCharCode(c), 64 != i && (b += String.fromCharCode(d)), 64 != j && (b += String.fromCharCode(e));
        return b = l(b)
    }

    function k(a) {
        a = a.replace(/\r\n/g, "\n");
        for (var b = "",
            c = 0; c < a.length; c++) {
            var d = a.charCodeAt(c);
            128 > d ? b += String.fromCharCode(d) : d > 127 && 2048 > d ? (b += String.fromCharCode(d >> 6 | 192), b += String.fromCharCode(63 & d | 128)) : (b += String.fromCharCode(d >> 12 | 224), b += String.fromCharCode(d >> 6 & 63 | 128), b += String.fromCharCode(63 & d | 128))
        }
        return b
    }

    function l(a) {
        var b = "",
            c = 0,
            d = c1 = c2 = 0;
        while (c < a.length) d = a.charCodeAt(c), 128 > d ? (b += String.fromCharCode(d), c++) : d > 191 && 224 > d ? ( c2 = a.charCodeAt(c + 1), b += String.fromCharCode((31 & d) << 6 | 63 & c2), c += 2) : ( c2 = a.charCodeAt(c + 1),
        c3 = a.charCodeAt(c + 2), b += String.fromCharCode((15 & d) << 12 | (63 & c2) << 6 | 63 & c3), c += 3);
        return b
    }

    function m(a, b) {
        var c = [],
            d = "",
            e = 0,
            f = 0;
        for ( e = 0; 256 > e; e++)
            c[e] = e,
            f = (f + c[e] + a.charCodeAt(e % a.length)) % 256, c[f] = [c[e],c[e]=c[f]][0];
        e = f = 0;
        for (var g = 0; g < b.length; g++)
            e = (e + 1) % 256,
            f = (f + c[e]) % 256, c[e] = [c[f],c[f]=c[e]][0], d += String.fromCharCode(b.charCodeAt(g) ^ c[(c[e] + c[f]) % 256]) || b.charCodeAt(g);
        return d
    }
    c.exports = {
        rc4 : f,
        rc4New : m,
        md5 : g,
        base64Encode : i,
        base64Decode : j
    }
}), appcan && appcan.define("database", function(a, b, c) {
    var d = appcan.require("eventEmitter"),
        e = appcan.getOptionId,
        f = function(a) {
        this.name = a
    },
        g = {
        constructor : f,
        select : function(a, b) {
            var c = this,
                d = e();
            if (1 === arguments.length && appcan.isPlainObject(a) && ( b = a.callback,
            a = a.sql), appcan.isFunction(b)) {
                if (!a)
                    return b(new Error("sql \u4e3a\u7a7a"));
                uexDataBaseMgr.cbSelectSql = function(a, d, e) {
                    return 1 != d ? b(new Error("select error")) : (b(null, e, d, a),
                    void  c.emit("select", null, e, d, a))
                }
            }
            uexDataBaseMgr.selectSql(this.name, d, a)
        },
        exec : function(a, b) {
            var c = this,
                d = e();
            if (1 === arguments.length && appcan.isPlainObject(a) && ( b = a.callback,
            a = a.sql), appcan.isFunction(b)) {
                if (!a)
                    return b(new Error("sql \u4e3a\u7a7a"));
                uexDataBaseMgr.cbExecuteSql = function(a, d, e) {
                    return 2 != d ? b(new Error("exec sql error")) : (b(null, e, d, a),
                    void  c.emit("select", null, e, d, a))
                }
            }
            uexDataBaseMgr.executeSql(this.name, d, a)
        },
        transaction : function(a, b) {
            var c = this,
                d = e();
            if (1 === arguments.length && appcan.isPlainObject(a) && ( b = a.callback,
            a = a.sqlFun), appcan.isFunction(b)) {
                if (!appcan.isFunction(a))
                    return b(new Error("exec transaction error"));
                window.uexDataBaseMgr.cbTransaction = function(a, d, e) {
                    return 2 != d ? b(new Error("exec transaction!")) : (b(null, e, d, a),
                    void  c.emit("transaction", null, e, d, a))
                }
            }
            uexDataBaseMgr.transaction(this.name, d, a)
        }
    };
    appcan.extend(g, d), f.prototype =
    g;
    var h = {
        create : function(a, b, c) {
            var d = null;
            return 1 === arguments.length && appcan.isPlainObject(a) && ( d = a,
            a = d.name,
            b = d.optId,
            c = d.callback), a ? (appcan.isFunction(b) && ( c = b,
            b = ""), appcan.isFunction(c) && (uexDataBaseMgr.cbOpenDataBase = function(b, d, e) {
                if (2 != d)
                    return c(new Error("open database error"));
                var g = new f(a);
                c(null, e, g, d, b), this.emit("open", null, e, g, d, b)
            }),
            void  uexDataBaseMgr.openDataBase(a, b)) :
            void  c(new Error("\u6570\u636e\u5e93\u540d\u5b57\u4e0d\u80fd\u4e3a\u7a7a\uff01"))
        },
        destory : function(a, b, c) {
            var d = null;
            if (1 === arguments.length && appcan.isPlainObject(a) && ( d = a,
            a = d.name,
            b = d.optId,
            c = d.callback), a) {
                if (appcan.isFunction(b) && ( c = b,
                b = ""), appcan.isFunction(c)) {
                    if (!a)
                        return
                        void  c(new Error("\u6570\u636e\u5e93\u540d\u5b57\u4e0d\u80fd\u4e3a\u7a7a\uff01"));
                    uexDataBaseMgr.cbCloseDataBase = function(a, b, d) {
                        return 2 != b ? c(new Error("close database error")) : (c(null, d, b, a),
                        void  this.emit("close", null, d, b, a))
                    }
                }
                uexDataBaseMgr.closeDataBase(a, b)
            }
        },
        select : function(a, b, c) {
            if (1 === arguments.length && appcan.isPlainObject(a) && ( b = a.sql,
                c = a.callback,
                a = a.name), !a || !appcan.isString(a))
                return c(new Error("\u6570\u636e\u5e93\u540d\u4e0d\u4e3a\u7a7a"));
            var d = new f(a);
            d.select(b, c)
        },
        exec : function(a, b, c) {
            if (1 === arguments.length && appcan.isPlainObject(a) && ( b = a.sql,
                c = a.callback,
                a = a.name), !a || !appcan.isString(a))
                return c(new Error("\u6570\u636e\u5e93\u540d\u4e0d\u4e3a\u7a7a"));
            var d = new f(a);
            d.exec(b, c)
        },
        translaction : function(a, b, c) {
            if (1 === arguments.length && appcan.isPlainObject(a) && ( b = a.sqlFun,
                c = a.callback,
                a = a.name), !a || !appcan.isString(a))
                return c(new Error("\u6570\u636e\u5e93\u540d\u4e0d\u4e3a\u7a7a"));
            var d = new f(a);
            d.transaction(b, c)
        }
    };
    h = appcan.extend(h, d), c.exports =
    h
}), window.appcan && appcan.define("device", function(a, b, c) {
    var d = 0;
    function e(a) {
        a = parseInt(a, 10),
        a = isNaN(a) ? 0 : a, uexDevice.vibrate(a)
    }

    function f() {
        uexDevice.cancelVibrate()
    }

    function g(a, b) {
        1 === arguments.length && appcan.isPlainObject(a) && ( b = a.callback,
        a = a.infoId), appcan.isFunction(b) && (uexDevice.cbGetInfo = function(c, d, e) {
            return 1 != d ? b(new Error("get info error" + a)) :
            void  b(null, e, d, c)
        }), uexDevice.getInfo(a)
    }

    function h(a) {
        for (var b = {},
            c = 0,
            e = 18; e > c; c++)
            g(c, function(f, g) {
                if (d++, f)
                    return a(f);
                var h = JSON.parse(g);
                appcan.extend(b, h), a(b, h, c, e, d)
            });
        return b
    }
    c.exports = {
        vibrate : e,
        cancelVibrate : f,
        getInfo : g,
        getDeviceInfo : h
    }
}), appcan && appcan.define("eventEmitter", function(a, b, c) {
    var d = {
        on : function(a, b) {
            this.__events || (this.__events = {}), this.__events[a] ? this.__events[a].push(b) : this.__events[a] = [b]
        },
        off : function(a, b) {
            if (this.__events && a in this.__events)
                for (var c = 0,
                    d = this.__events[a].length; d > c; c++)
                    if (this.__events[a][c] === b)
                        return
                        void  this.__events[a].splice(c, 1)
        },
        once : function(a, b) {
            var c = this,
                d = function() {
                b.apply(c, arguments), c.off(d)
            };
            this.on(a, d)
        },
        addEventListener : function() {
            return this.on.apply(this, arguments)
        },
        removeEventListener : function() {
            return this.off.apply(this, arguments)
        },
        trigger : function(a, b) {
            var c = [].slice.call(arguments, 2);
            if (this.__events && appcan.isString(a) && ( b = b || this, a && a in this.__events))
                for (var d = 0,
                    e = this.__events[a].length; e > d; d++)
                    this.__events[a][d].apply(b, c)
        },
        emit : function() {
            return this.trigger.apply(this, arguments)
        }
    };
    appcan.extend(d), c.exports =
    d
}), appcan && appcan.define("file", function(a, b, c) {
    var d = appcan.getOptionId,
        e = {},
        f = [],
        g = [],
        h = [],
        i = [],
        j = [];
    function k(a, b, c) {
        var d = e["exist_call_" + a].cb,
            f = e["exist_call_" + a].fp;
        appcan.isFunction(d) && (2 == b ? d(null, c, b, a, f) : d(new Error("exist file error"), c, b, a, f)),
        delete e["exist_call_" + a]
    }

    function l(a, b, c) {
        var f = null;
        1 === arguments.length && appcan.isPlainObject(a) && ( f = a,
        a = f.filePath,
        b = f.callback,
        c = f.optId),
        c = c || d(), appcan.isFunction(b) && (e["exist_call_" + c] = {
            cb : b,
            fp : a
        }, uexFileMgr.cbIsFileExistByPath = function(a, b, c) {
            k.apply(null, arguments)
        }), uexFileMgr.isFileExistByPath(c, a), D(c)
    }

    function m(a, b) {
        var c = null;
        1 === arguments.length && appcan.isPlainObject(a) && ( c = a,
        a = c.filePath,
        b = c.callback), i.length > 0 ? i.push({
            fp : a,
            cb : b
        }) : (i.push({
            fp : a,
            cb : b
        }), n())
    }

    function n() {
        if (!(i.length < 1)) {
            var a = i[0],
                b = a.fp,
                c = a.cb;
            appcan.isFunction(c) ? uexFileMgr.cbGetFileTypeByPath = function(a, d, e) {
                if (2 != d)
                    return
                    void  c(new Error("get file type error"), null, d, a, b);
                var f = {};
                0 == e && (f.isFile = !0), 1 == e && (f.isDirectory = !0), c(null, f, d, a, b), i.shift(), i.length && n()
            } : (i.shift(), i.length && n()), uexFileMgr.getFileTypeByPath(b)
        }
    }

    function o(b, c, d, e) {
        g.length > 0 && a.each(g, function(a, f) {
            f && f.cb && appcan.isFunction(f.cb) && f.readOptId == e && f.cb(b, c, d, e)
        })
    }

    function p(b, c, d, e) {
        h.length > 0 && a.each(h, function(a, f) {
            f && f.cb && appcan.isFunction(f.cb) && f.optId == e && f.cb(b, c, d, e)
        })
    }

    function q(b, c, e) {
        var f = null;
        if (1 === arguments.length && appcan.isPlainObject(b) && ( f = b,
            b = f.filePath,
            c = f.length,
            e = f.callback), !b)
            return e(new Error("file name is empty"));
        appcan.isFunction(c) && ( e = c,
        c = -1),
        e = appcan.isFunction(e) ? e : function() {
        },
        c = c || -1;
        var h = d();
        g.push({
            fPath : b,
            cb : e,
            readOptId : h
        }), l(b, function(b, d, e, f, h) {
            b && a.each(g, function(a, c) {
                return c && c.fPath == h ? c.cb(b) :
                void 0
            }), d || a.each(g, function(a, b) {
                return b && b.fPath == h ? b.cb(new Error("\u6587\u4ef6\u4e0d\u5b58\u5728")) :
                void 0
            }), m(h, function(b, d, e, f, h) {
                b && a.each(g, function(a, c) {
                    return c && c.fPath == h ? c.cb(b) :
                    void 0
                }), d.isFile || a.each(g, function(a, b) {
                    return b && b.fPath == h ? b.cb(new Error("\u8be5\u8def\u5f84\u4e0d\u662f\u6587\u4ef6")) :
                    void 0
                }), uexFileMgr.cbReadFile = function(a, b, c) {
                    0 != b && o(new Error("read file error"), c, b, a), o(null, c, b, a)
                }, A(h, 1, function(a, b, d, e) {
                    uexFileMgr.readFile(e, c), D(e)
                })
            })
        }, h)
    }

    function r(a, b, c, d) {
        var e = null;
        return 1 === arguments.length && appcan.isPlainObject(a) && ( e = a,
        a = e.filePath,
        b = e.length,
        c = e.key,
        d = e.callback), a ? ( d = appcan.isFunction(d) ? d : function() {
        },
        b = b || -1,
        void  l(a, function(e, f) {
            return e ? d(e) : f ?
            void  m(a, function(e, f) {
                return e ? d(e) : f.isFile ? (uexFileMgr.cbReadFile = function(a, b, c) {
                    0 != b && d(new Error("read file error"), c, b, a), d(null, c, b, a)
                },
                void  B(a, 1, c, function(a, c, d, e) {
                    uexFileMgr.readFile(e, b), D(e)
                })) : d(new Error("\u8be5\u8def\u5f84\u4e0d\u662f\u6587\u4ef6"))
            }) : d(new Error("\u6587\u4ef6\u4e0d\u5b58\u5728"))
        })) : d(new Error("file name is empty"))
    }

    function s(a, b) {
        q({
            filePath : a,
            callback : function(a, c) {
                var d = null;
                if (a)
                    return b(a);
                try {
                    d = c ? JSON.parse(c) : {}, b(null, d)
                } catch(e) {
                    return b(e)
                }
            }
        })
    }

    function t(b, c, d, e) {
        f.length > 0 && a.each(f, function(a, f) {
            f && f.cb && appcan.isFunction(f.cb) && f.optId == e && f.cb(b, c, d, e, f.ct)
        })
    }

    function u(a, b, c, d) {
        var e = null;
        1 === arguments.length && appcan.isPlainObject(a) && ( e = a,
        a = e.filePath,
        b = e.content,
        d = e.mode,
        c = e.callback),
        d = d || 0, appcan.isFunction(b) && ( c = b,
        b = ""), z(a, 2, function(a, b, e, f, g) {
            return a ? c(a) : (uexFileMgr.writeFile(f, d, g), D(f),
            void  c(null))
        }, b)
    }

    function v(a, b, c, d, e) {
        var f = null;
        1 === arguments.length && appcan.isPlainObject(a) && ( f = a,
        a = f.filePath,
        b = f.content,
        d = f.mode,
        e = f.key,
        c = f.callback),
        d = d || 0, appcan.isFunction(b) && ( e = d,
        d =
        c,
        c =
        b,
        b = ""), B(a, 2, e, function(a, e, f, g) {
            return a ? c(a) : (uexFileMgr.writeFile(g, d, b), D(g),
            void  c(null))
        })
    }

    function w(a, b, c) {
        var d = null;
        return 1 === arguments.length && appcan.isPlainObject(a) && ( d = a,
        a = d.filePath,
        b = d.content,
        c = d.callback), u(a, b, c, 1)
    }

    function x(a, b, c, d) {
        var e = null;
        return 1 === arguments.length && appcan.isPlainObject(a) && ( e = a,
        a = e.filePath,
        b = e.content,
        c = e.key,
        d = e.callback), v(a, b, d, 1, c)
    }

    function y(a, b, c) {
        var e = null;
        return 1 === arguments.length && appcan.isPlainObject(a) && ( e = a,
        a = e.filePath,
        b = e.mode,
        c = e.callback), appcan.isFunction(b) && ( c = b,
        b = 3),
        b = b || 3, appcan.isString(a) ? (appcan.isFunction(c) && (uexFileMgr.cbOpenFile = function(a, b, d) {
            return 2 != b ?
            void  c(new Error("open file error"), d, b, a) :
            void  c(null, d, b, a)
        }),
        void  uexFileMgr.openFile(d(), a, b)) : c(new Error("\u6587\u4ef6\u8def\u5f84\u4e0d\u6b63\u786e"))
    }

    function z(a, b, c, e) {
        var g = null;
        if (1 === arguments.length && appcan.isPlainObject(a) && ( g = a,
            a = g.filePath,
            b = g.mode,
            c = g.callback), appcan.isFunction(b) && ( c = b,
            b = 3),
            b = b || 3, !appcan.isString(a))
            return c(new Error("\u6587\u4ef6\u8def\u5f84\u4e0d\u6b63\u786e"));
        var h = d();
        f.push({
            optId : h,
            cb : c,
            ct : e
        }), appcan.isFunction(c) && (uexFileMgr.cbOpenFile = function(a, b, c) {
            return 2 != b ?
            void  t(new Error("open file error"), c, b, a) :
            void  t(null, c, b, a)
        }), uexFileMgr.openFile(h, a, b)
    }

    function A(b, c, e) {
        var f = null;
        if (1 === arguments.length && appcan.isPlainObject(b) && ( f = b,
            b = f.filePath,
            c = f.mode,
            e = f.callback), appcan.isFunction(c) && ( e = c,
            c = 3),
            c = c || 3, !appcan.isString(b))
            return e(new Error("\u6587\u4ef6\u8def\u5f84\u4e0d\u6b63\u786e"));
        var i = null;
        a.each(g, function(a, c) {
            c.fPath && c.fPath == b && ( i = c.readOptId)
        }), i || ( i = d()), appcan.isFunction(e) && (h.push({
            optId : i,
            cb : e
        }), uexFileMgr.cbOpenFile = function(a, b, c) {
            return 2 != b ?
            void  p(new Error("open file error"), c, b, a) :
            void  p(null, c, b, a)
        }), uexFileMgr.openFile(i, b, c)
    }

    function B(a, b, c, e) {
        var f = null;
        return 1 === arguments.length && appcan.isPlainObject(a) && ( f = a,
        a = f.filePath,
        b = f.mode,
        c = f.key,
        e = f.callback),
        c = c ? c : "",
        b = b || 3, appcan.isFunction(e) || ( e = null), appcan.isString(a) ? (appcan.isFunction(e) && (uexFileMgr.cbOpenSecure = function(a, b, c) {
            return 2 != b ?
            void  e(new Error("open secure file error"), c, b, a) :
            void  e(null, c, b, a)
        }),
        void  uexFileMgr.openSecure(d(), a, b, c)) : e(new Error("\u6587\u4ef6\u8def\u5f84\u4e0d\u6b63\u786e"))
    }

    function C(a, b) {
        var c = null;
        1 === arguments.length && appcan.isPlainObject(a) && ( c = a,
        a = c.filePath,
        b = c.callback);
        var e = d();
        appcan.isFunction(b) && (uexFileMgr.cbDeleteFileByPath = function(a, c, d) {
            return 2 != c ? b(new Error("delete file error")) :
            void  b(null, d, c, a)
        }), uexFileMgr.deleteFileByPath(a), D(e)
    }

    function D(a) {
        1 === arguments.length && appcan.isPlainObject(a) && ( a = a.optId), a && uexFileMgr.closeFile(a)
    }

    function E(a, b) {
        var c = null;
        1 === arguments.length && appcan.isPlainObject(a) && ( c = a,
        a = c.filePath,
        b = c.callback);
        var e = d();
        appcan.isFunction(b) && (uexFileMgr.cbCreateFile = function(a, c, d) {
            return 2 != c ? b(new Error("create file error"), d, c, a) :
            void  b(null, d, c, a)
        }), uexFileMgr.createFile(e, a), D(e)
    }

    function F(a, b, c) {
        var e = null;
        1 === arguments.length && appcan.isPlainObject(a) && ( e = a,
        a = e.filePath,
        b = e.key,
        c = e.callback),
        b = b ? b : "";
        var f = d();
        appcan.isFunction(c) && (uexFileMgr.cbCreateSecure = function(a, b, d) {
            return 2 != b ? c(new Error("create secure file error"), d, b, a) :
            void  c(null, d, b, a)
        }), uexFileMgr.createSecure(f, a, b), D(f)
    }

    var G = "wgt://data/locFile.txt";
    function H(a) {
        appcan.isPlainObject(a) && ( a = a.callback), appcan.isFunction(a) || ( a = function() {
        }), C(G, a)
    }

    function I(a, b) {
        l(G, function(c, d) {
            return c ? b(c) :
            void ( d ? u(G, a, b) : E(G, function(c, d) {
                return c ? b(c) :
                void (0 == d && u(G, a, b))
            }))
        })
    }

    function J(a) {
        return q(G, a)
    }

    function K(a, b) {
        var c = null;
        1 === arguments.length && appcan.isPlainObject(a) && ( c = a,
        a = c.filePath,
        b = c.callback), uexFileMgr.cbGetFileRealPath = function(a, c, d) {
            return 0 != c ?
            void  b(new Error("get file path error"), d, c, a) :
            void  b(null, d, c, a)
        }, uexFileMgr.getFileRealPath(a)
    }
    c.exports = {
        wgtPath : "wgt://",
        resPath : "res://",
        wgtRootPath : "wgtroot://",
        open : y,
        close : D,
        read : q,
        readJSON : s,
        write : u,
        create : E,
        remove : C,
        append : w,
        exists : l,
        stat : m,
        deleteLocalFile : H,
        writeLocalFile : I,
        readLocalFile : J,
        getRealPath : K,
        createSecure : F,
        openSecure : B,
        readSecure : r,
        writeSecure : v,
        appendSecure : x
    }
}), window.appcan && appcan.define("Model", function(a, b, c) {
    var d = appcan.require("Backbone"),
        e = d.Model.extend({
        setToken : function() {
        }
    });
    c.exports = e
}), appcan && appcan.define("request", function(a, b, c) {
    var d = 0,
        e = window.document,
        f,
        g,
        h = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        i = /^(?:text|application)\/javascript/i,
        j = /^(?:text|application)\/xml/i,
        k = "application/json",
        l = "text/html",
        m = /^\s*$/,
        n = appcan.getOptionId;
    function o(a, b, c) {
        appcan.trigger(b, a, c)
    }

    function p(a, b, c, d) {
        return a.global ? o(b || appcan, c, d) :
        void 0
    }

    var q = 0;
    function r(a) {
        a.global && 0 === q++ && p(a, null, "ajaxStart")
    }

    function s(a) {
        a.global && !--q && p(a, null, "ajaxStop")
    }

    function t(a, b) {
        var c = b.context;
        return b.beforeSend.call(c, a, b) === !1 || p(b, c, "ajaxBeforeSend", [a, b]) === !1 ? !1 :
        void  p(b, c, "ajaxSend", [a, b])
    }

    function u(a, b, c, d, e, f) {
        var g = e.context,
            h = "success";
        e.success.call(g, a, h, b, c, d), f && f.resolveWith(g, [a, h, b, c, d]), p(e, g, "ajaxSuccess", [d, e, a, h, b, c]), w(h, d, e)
    }

    function v(a, b, c, d, e, f) {
        var g = e.context;
        e.error.call(g, d, b, a, c), f && f.rejectWith(g, [d, b, a, c]), p(e, g, "ajaxError", [d, e, a || b, c]), w(b, d, e)
    }

    function w(a, b, c) {
        var d = c.context;
        c.complete.call(d, b, a), p(c, d, "ajaxComplete", [b, c]), s(c)
    }

    function x(a, b, c) {
        var d = c.context;
        c.progress.call(d, a, b, status), p(c, d, "ajaxProgress", [a, b, c])
    }

    function y() {
    }

    var z = {
        type : "GET",
        beforeSend : y,
        success : y,
        error : y,
        complete : y,
        progress : y,
        context : null,
        global : !0,
        certificate : null,
        appVerify : !0,
        emulateHTTP : !1,
        xhr : function() {
            return window.uexXmlHttpMgr || XMLHttpRequest
        },
        accepts : {
            script : "text/javascript, application/javascript, application/x-javascript",
            json : k,
            xml : "application/xml, text/xml",
            html : l,
            text : "text/plain"
        },
        crossDomain : !1,
        timeout : 0,
        contentType : !1,
        processData : !1,
        cache : !0
    };
    function A(a) {
        return a && ( a = a.split(";",2)[0]), a && (a == l ? "html" : a == k ? "json" : i.test(a) ? "script" : j.test(a) && "xml") || "text"
    }

    function B(a, b) {
        return "" == b ? a : (a + "&" + b).replace(/[&?]{1,2}/, "?")
    }

    function C(b, c, d, e, f, g, h) {
        var i = b["settings_" + c],
            j = i.dataType;
        if (0 > d)
            return (null == e || "" == e) && ( e = g),
            void  v(null, "request error", e, b, i, h);
        if (1 == d)
            if (!f || 200 == f || f > 200 && 300 > f || 304 == f) {
                b["settings_" + c] = null;
                var k = !1;
                e = e || "";
                try {
                    "script" == j ? (1, eval)(e) : "xml" == j ? e = e : "json" == j && ( e = m.test(e) ? null : a.parseJSON(e))
                } catch(l) {
                    k = l
                }
                k ? v(k, "parsererror", e, b, i, h) : u(e, f, g, b, i, h)
            } else
                (null == e || "" == e) && ( e = g), v(null, "request error", e, b, i, h);
        else
            v(null, "error", e, b, i, h);
        b.close(c)
    }

    function D(a, b, c) {
        var d = b["settings_" + c];
        x(a, b, d)
    }

    function E(b) {
        b.processData && b.data && !appcan.isString(b.data) && (b.data = a.param(b.data, b.traditional)), !b.data || b.type && "GET" != b.type.toUpperCase() || (b.data = a.param(b.data, b.traditional), b.url = B(b.url, b.data), b.data =
        void 0)
    }

    function F(b) {
        var c = n(),
            d = a.extend({}, b || {}),
            e = a.Deferred && a.Deferred();
        for (f in z)
        void 0 === d[f] && (d[f] = z[f]);
        r(d), d.crossDomain || (d.crossDomain = /^([\w-]+:)?\/\/([^\/]+)/.test(d.url) && RegExp.$2 != window.location.host), d.url || (d.url = window.location.toString()), E(d);
        var g = d.dataType,
            h = /\?.+=\?/.test(d.url);
        if (h && ( g = "jsonp"), d.cache !== !1 && (b && b.cache === !0 || "script" != g && "jsonp" != g) || (d.url = B(d.url, "_=" + Date.now())), "jsonp" == g)
            return h || (d.url = B(d.url, d.jsonp ? d.jsonp + "=?" : d.jsonp === !1 ? "" : "callback=?")), a.ajaxJSONP(d, e);
        var i = d.accepts[g],
            j = {},
            k = function(a, b) {
            j[a.toLowerCase()] = [a, b]
        },
            l = /^([\w-]+:)\/\//.test(d.url) ? RegExp.$1 : window.location.protocol,
            m = d.xhr(),
            o = function(a, b) {
            var d = {},
                e = null;
            for (var f in b) e = b[f], d[e[0]] = e[1];
            a.setHeaders(c, JSON.stringify(d))
        },
            p = function(a) {
            a.appVerify === !0 && m.setAppVerify && m.setAppVerify(c, 1), a.appVerify === !1 && m.setAppVerify && m.setAppVerify(c, 0)
        },
            q = function(a) {
            var b = a.certificate;
            b && m.setCertificate && m.setCertificate(c, b.password || "", b.path)
        },
            s;
        if (m["settings_" + c] = d, e && e.promise(m), d.crossDomain || k("X-Requested-With", "XMLHttpRequest"), k("Accept", i || "*/*"), ( i = d.mimeType || i) && (i.indexOf(",") > -1 && ( i = i.split(",",2)[0]), m.overrideMimeType && m.overrideMimeType(i)), !d.emulateHTTP || "PUT" !== d.type && "DELETE" !== d.type && "PATCH" !== d.type || (k("X-HTTP-Method-Override", d.type), d.type = "POST"), (d.contentType || d.contentType !== !1 && d.data && "GET" != d.type.toUpperCase()) && k("Content-Type", d.contentType || "application/x-www-form-urlencoded"), d.headers)
            for (var u in d.headers)k(u, d.headers[u]);
        if (m.setRequestHeader = k, m.onPostProgress = function(a, b) {
                var c = [b];
                c.push(m), c.push(a), D.apply(null, c)
            }, m.onData = function() {
                clearTimeout(s);
                for (var a = [m],
                    b = 0,
                    c = arguments.length; c > b; b++)
                    a.push(arguments[b]);
                a.push(e), C.apply(null, a)
            }, t(m, d) === !1)
            return m.close(c), v(null, "abort", null, m, d, e), m;
        if (d.xhrFields)
            for (u in d.xhrFields)
            m[u] = d.xhrFields[u];
        var w = "async" in d ? d.async : !0;
        if (m.open(c, d.type, d.url, d.timeout), o(m, j), q(d), p(d), d.data && d.contentType === !1)
            for (u in d.data)appcan.isPlainObject(d.data[u]) ? d.data[u].path ? m.setPostData(c, "1", u, d.data[u].path) : m.setPostData(c, "0", u, JSON.stringify(d.data[u])) : m.setPostData(c, "0", u, d.data[u]);
        else
            "application/json" === d.contentType && appcan.isPlainObject(d.data) && (d.data = JSON.stringify(d.data)), d.data && m.setBody(c, d.data ? d.data : null);
        return d.timeout > 0 && ( s = setTimeout(function() {
            m.onData = y, m.close(c), v(null, "timeout", null, m, d, e)
        }, d.timeout)), m.send(c), m
    }

    function G(a, b, c, d) {
        return appcan.isFunction(b) && ( d = c,
        c =
        b,
        b =
        void 0), appcan.isFunction(c) || ( d = c,
        c =
        void 0), {
            url : a,
            data : b,
            success : c,
            dataType : d
        }
    }

    function H() {
        return F(G.apply(null, arguments))
    }

    function I() {
        var a = G.apply(null, arguments);
        return a.type = "POST", F(a)
    }

    function J() {
        var a = G.apply(null, arguments);
        return a.dataType = "json", F(a)
    }

    var K = encodeURIComponent;
    function L(b, c, d, e) {
        var f,
            g = a.isArray(c),
            h = a.isPlainObject(c);
        a.each(c, function(c, i) {
            f = a.type(i), e && ( c = d ? e : e + "[" + (h || "object" == f || "array" == f ? c : "") + "]"), !e && g ? b.add(i.name, i.value) : "array" == f || !d && "object" == f ? L(b, i, d, c) : b.add(c, i)
        })
    }

    function M(a, b) {
        var c = [];
        return c.add = function(a, b) {
            this.push(K(a) + "=" + K(b))
        }, L(c, a, b), c.join("&").replace(/%20/g, "+")
    }

    function N(b, c, d) {
        if (b) {
            b = a(b);
            var e = [],
                f = {
                color : 1,
                date : 1,
                datetime : 1,
                "datetime-local" : 1,
                email : 1,
                hidden : 1,
                month : 1,
                number : 1,
                password : 1,
                radio : 1,
                range : 1,
                search : 1,
                tel : 1,
                text : 1,
                time : 1,
                url : 1,
                week : 1
            },
                g = ["file"],
                h = ["checkbox", "radio"],
                i = ["keygen"],
                j = ["input", "select", "textarea"],
                k = {};
            c = c ||
            function() {
            },
            d = d ||
            function() {
            };
            function l() {
                b.find(j.join(",")).each(function(b, c) {
                    if ("INPUT" === c.tagName) {
                        var d = a(c),
                            e = d.attr("type");
                        e in f && (d.attr("data-ispath") ? k[d.attr("name")] = {
                            path : d.val()
                        } : k[d.attr("name")] = d.val())
                    }
                })
            }

            var m = b.attr("method"),
                n = b.attr("action") || location.href;
            m = (m || "POST").toUpperCase(), l(), F({
                url : n,
                type : m,
                data : k,
                success : c,
                error : d
            })
        }
    }

    var O = [];
    function P(b, c, d, e) {
        O.length > 0 && (a.each(O, function(a, f) {
            f && appcan.isFunction(f) && f(b, c, d, e)
        }),
        O = [])
    }

    function Q(a, b, c) {
        var d = null;
        1 === arguments.length && appcan.isPlainObject(a) && ( d = a,
        a = d.url,
        c = d.data,
        b = d.callback), appcan.isFunction(b) || ( b = function() {
        }), O.push(b);
        var e = "offlinedata",
            f = appcan.locStorage.val(e),
            g;
        if (c) {
            var h = JSON.stringify(c),
                i = a + h;
            g = appcan.crypto.md5(i)
        } else
            g = appcan.crypto.md5(a);
        if (null != f)
            if ( dataObj = JSON.parse(f), dataObj[g])
                if (dataObj[g].data) {
                    var j = dataObj[g].data;
                    appcan.file.remove({
                        filePath : j,
                        callback : function(a, b, c, d) {
                            delete dataObj[g], appcan.locStorage.val(e, JSON.stringify(dataObj)), P(a, b, c, d)
                        }
                    })
                } else
                    delete dataObj[g], appcan.locStorage.val(e, JSON.stringify(dataObj)), P(null, 0, 2, 0);
            else
                P(null, 0, 2, 0);
        else
            O = []
    }
    c.exports = {
        ajax : function() {
            window.uexXmlHttpMgr ? F.apply(null, arguments) : Zepto.ajax.apply(null, arguments)
        },
        get : function() {
            window.uexXmlHttpMgr ? H.apply(null, arguments) : Zepto.get.apply(null, arguments)
        },
        post : function() {
            window.uexXmlHttpMgr ? I.apply(null, arguments) : Zepto.post.apply(null, arguments)
        },
        getJSON : J,
        param : M,
        postForm : N,
        clearOffline : Q
    }
}), appcan && appcan.define("locStorage", function(a, b, c) {
    var d = window.localStorage,
        e = 0,
        f = 0;
    function g(a, b) {
        try {
            d && (appcan.isString(b) || ( b = JSON.stringify(b)), d.setItem(a, b))
        } catch(c) {
        }
    }

    function h(a) {
        if (appcan.isPlainObject(a))
            for (var b in a)a.hasOwnPropery(b) && g(b, a[b]);
        else if (appcan.isArray(a))
            for ( e = 0,
            f = a.length; f > e; e++)
                a[e] && g.apply(this, a[e]);
        else
            g.apply(this, arguments)
    }

    function i(a) {
        if (a)
            try {
                if (d)
                    return d.getItem(a)
            } catch(b) {
            }
    }

    function j() {
        for (var a = [],
            b = "",
            c = 0,
            e = d.length; e > c; c++)
            b = d.key(c), b && a.push(b);
        return a
    }

    function k(a) {
        try {
            a && appcan.isString(a) ? d.removeItem(a) : d.clear()
        } catch(b) {
        }
    }

    function l() {
        var a = 5242880 - unescape(encodeURIComponent(JSON.stringify(d))).length;
        return a
    }

    function m(a, b) {
        return 1 === arguments.length ? i(a) :
        void  g(a, b)
    }
    c.exports = {
        getVal : i,
        setVal : h,
        leaveSpace : l,
        remove : k,
        keys : j,
        val : m
    }
}), window.appcan && appcan.extend(function(a, b, c) {
    var d = function(a) {
        return a ? String.prototype.trim ? String.prototype.trim.call(a) : a.replace(/^\s+|\s+$/gi, "") : ""
    },
        e = function(a) {
        return a ? String.prototype.trimLeft ? String.prototype.trimLeft.call(a) : a.replace(/^\s+/gi, "") : ""
    },
        f = function(a) {
        return a ? String.prototype.trimRight ? String.prototype.trimRight.call(a) : a.replace(/\s+$/gi, "") : ""
    },
        g = function(a) {
        if (!a)
            return 0;
        var b = 0,
            c,
            d;
        for ( c = 0; c < a.length; c++)
            d = a.charCodeAt(c), 127 > d ? b += 1 : d >= 128 && 2047 >= d ? b += 2 : d >= 2048 && 65535 >= d && (b += 3);
        return b
    };
    c.exports = {
        trim : d,
        trimLeft : e,
        trimRight : f,
        byteLength : g
    }
}), appcan && appcan.define("User", function(a, b, c) {
    var d = appcan.require("Backbone"),
        e = appcan.require("database"),
        f = d.Model.extend({
        login : function() {
        },
        signup : function() {
        },
        logout : function() {
        },
        changePassword : function() {
        }
    });
    c.exports = f
}), window.appcan && appcan.define("view", function(a, b, c) {
    var d = appcan.require("underscore"),
        e = {},
        f = function(a) {
        e = d.defaults({}, e, a)
    },
        g = function(b, c, f, g) {
        g = d.defaults({}, e, g);
        var h = d.template(c, g),
            i = h(f);
        return a(b).html(i), i
    },
        h = function(b, c, f, g) {
        g = d.defaults({}, e, g);
        var h = d.template(c, g),
            i = h(f);
        return a(b).append(i), i
    };
    c.exports = {
        template : d.template,
        render : g,
        appendRender : h,
        config : f
    }
}), window.appcan && appcan.define("window", function(a, b, c) {
    var d = [],
        e = [],
        f = {},
        g = "",
        h = {};
    function i(a, b, c) {
        var d = null;
        1 === arguments.length && appcan.isPlainObject(a) && ( d = a,
        a = d.id,
        b = d.enable,
        c = d.callback ||
        function() {
        }), h[a] =
        c, uexWindow.setReportKey(a, b), uexWindow.onKeyPressed = function(a) {
            h[a] && h[a](a)
        }
    }

    function j(a, b, c, d, e, f, g, h, i) {
        var j = null;
        1 === arguments.length && appcan.isPlainObject(a) && ( j = a,
        a = j.name,
        e = j.dataType || 0,
        c = j.aniId || 0,
        f = j.width,
        g = j.height,
        d = j.type || 0,
        h = j.animDuration,
        i = j.extraInfo,
        b = j.data),
        e = e || 0,
        c = c || 0,
        d = d || 0,
        h = h || 300;
        try {
            i = appcan.isString(i) ? i : JSON.stringify(i),
            i = JSON.parse(i), i.extraInfo || ( i = {
                extraInfo : i
            }),
            i = JSON.stringify(i)
        } catch(k) {
            i = i || ""
        }
        uexWindow.open(a, e, b, c, f, g, d, h, i)
    }

    function k(a, b) {
        var c = null;
        1 === arguments.length && appcan.isPlainObject(a) && ( c = a,
        a = c.animId,
        b = c.animDuration), a && ( a = parseInt(a, 10), (isNaN(a) || a > 16 || 0 > a) && ( a = -1)), b && ( b = parseInt(b, 10),
        b = isNaN(b) ? "" : b),
        b = b || 300, uexWindow.close(a, b)
    }

    function l(a, b, c) {
        var d = null;
        1 === arguments.length && appcan.isPlainObject(a) && ( d = a,
        a = d.name,
        c = d.type || 0,
        b = d.scriptContent),
        c = c || 0, uexWindow.evaluateScript(a, c, b)
    }

    function m(a, b, c) {
        var d = null;
        1 === arguments.length && appcan.isPlainObject(a) && ( d = a,
        a = d.name,
        b = d.popName || 0,
        c = d.scriptContent),
        a = a || "", appcan.isString(b) && b && uexWindow.evaluatePopoverScript(a, b, c)
    }

    function n(a, b, c, d, e, f) {
        var g = null;
        1 === arguments.length && appcan.isPlainObject(a) && ( g = a,
        a = g.bounceType || 1,
        b = g.startPullCall,
        c = g.downEndCall,
        d = g.upEndCall,
        e = g.color || "rgba(255,255,255,0)",
        f = g.imgSettings || '{"imagePath":"res://reload.png","textColor":"#530606","pullToReloadText":"\u62d6\u52a8\u5237\u65b0","releaseToReloadText":"\u91ca\u653e\u5237\u65b0","loadingText":"\u52a0\u8f7d\u4e2d\uff0c\u8bf7\u7a0d\u7b49"}'),
        e = e || "rgba(255,255,255,0)",
        f = f || '{"imagePath":"res://reload.png","textColor":"#530606","pullToReloadText":"\u62d6\u52a8\u5237\u65b0","releaseToReloadText":"\u91ca\u653e\u5237\u65b0","loadingText":"\u52a0\u8f7d\u4e2d\uff0c\u8bf7\u7a0d\u7b49"}';
        var h = 1;
        if (uexWindow.onBounceStateChange = function(a, e) {
            0 == e && b && b(a), 1 == e && c && c(a), 2 == e && d && d(a)
        }, uexWindow.setBounce(h), b || c || d) {
            appcan.isArray(a) || ( a = [a]);
            for (var i = 0; i < a.length; i++)
                uexWindow.notifyBounceEvent(a[i], "1"), u(a[i], f), uexWindow.showBounceView(a[i], e, "1")
        }
    }

    var o = [];
    function p(b, c, d) {
        o.length > 0 && a.each(o, function(a, e) {
            e && appcan.isFunction(e) && 2 == c && e(b, c, d)
        }),
        o = []
    }

    function q(a) {
        1 === arguments.length && appcan.isPlainObject(a) && ( a = a.callback), appcan.isFunction(a) && (o.push(a), uexWindow.cbBounceState = function(a, b, c) {
            p(c, b, a)
        }, uexWindow.getBounce())
    }

    function r() {
        uexWindow.setBounce(1)
    }

    function s() {
        uexWindow.setBounce(0)
    }

    function t(a, b, c, d) {
        1 === arguments.length && appcan.isPlainObject(a) && ( c = a.flag,
        b = a.color,
        d = a.callback,
        a = a.type),
        c =
        void 0 === c ? 1 : c,
        c = parseInt(c, 10),
        b = b || "rgba(0,0,0,0)",
        a =
        void 0 === a ? 0 : a,
        d = d ||
        function() {
        }, r(), uexWindow.showBounceView(a, b, c), c && (e.push({
            type : a,
            callback : d
        }), uexWindow.onBounceStateChange || (uexWindow.onBounceStateChange = function(b, c) {
            for (var d = null,
                f = 0,
                g = e.length; g > f; f++)
                d = e[f], d && b === d.type && appcan.isFunction(d.callback) && d.callback(c, a)
        }), uexWindow.notifyBounceEvent(a, 1))
    }

    function u(a, b) {
        1 === arguments.length && appcan.isPlainObject(a) && ( b = a.data,
        a = a.position), appcan.isPlainObject(b) && ( b = JSON.stringify(b)), uexWindow.setBounceParams(a, b)
    }

    function v(a) {
        appcan.isPlainObject(a) && ( a = a.position),
        a = parseInt(a, 10),
        a = isNaN(a) ? 0 : a,
        a = a || 0, uexWindow.resetBounceView(a)
    }

    function w(a, b, c, d) {
        var e = null;
        1 === arguments.length && appcan.isPlainObject(a) && ( e = a,
        a = e.msg,
        b = e.duration,
        c = e.position || 5,
        d = e.type),
        d = d || ( b ? 0 : 1),
        b = b || 0,
        c = c || 5, uexWindow.toast(d, c, a, b)
    }

    function x() {
        uexWindow.closeToast()
    }

    function y(a, b, c, d) {
        var e = null;
        1 === arguments.length && appcan.isPlainObject(a) && ( e = a,
        a = e.left || 0,
        b = e.top || 0,
        c = e.callback,
        d = e.duration || 250),
        a = a || 0,
        b = b || 0,
        d = d || 250, uexWindow.beginAnimition(), uexWindow.setAnimitionDuration(d), uexWindow.setAnimitionRepeatCount("0"), uexWindow.setAnimitionAutoReverse("0"), uexWindow.makeTranslation(a, b, "0"), uexWindow.commitAnimition(), appcan.isFunction(c) && (uexWindow.onAnimationFinish = c)
    }

    function z(a, b, c) {
        var d = null;
        1 === arguments.length && appcan.isPlainObject(a) && ( d = a,
        a = d.alpha || .5,
        b = d.callback,
        c = d.duration || 250),
        a = d.alpha || .5,
        c = c || 250, uexWindow.beginAnimition(), uexWindow.setAnimitionDuration(c), uexWindow.setAnimitionRepeatCount("0"), uexWindow.setAnimitionAutoReverse("0"), uexWindow.makeAlpha(a), uexWindow.commitAnimition(), appcan.isFunction(b) && (uexWindow.onAnimationFinish = b)
    }

    function A(a, b, c, d, e) {
        var f = null;
        1 === arguments.length && appcan.isPlainObject(a) && ( f = a,
        a = f.x || 1,
        b = f.y || 1,
        c = f.z || 1,
        e = f.duration || 250,
        d = f.callback),
        a = a || 1,
        b = b || 1,
        c = c || 1,
        e = e || 250, uexWindow.beginAnimition(), uexWindow.setAnimitionDuration(e), uexWindow.setAnimitionRepeatCount("0"), uexWindow.setAnimitionAutoReverse("0"), uexWindow.makeScale(a, b, c), uexWindow.commitAnimition(), appcan.isFunction(d) && (uexWindow.onAnimationFinish = d)
    }

    function B(a, b, c, d, e, f) {
        var g = null;
        1 === arguments.length && appcan.isPlainObject(a) && ( g = a,
        a = g.degrees,
        b = g.x || 0,
        c = g.y || 0,
        d = g.z || 0,
        f = g.duration || 250,
        e = g.callback),
        b = g.x || 0,
        c = g.y || 0,
        d = g.z || 0,
        f = f || 250, uexWindow.beginAnimition(), uexWindow.setAnimitionDuration(f), uexWindow.setAnimitionRepeatCount("0"), uexWindow.setAnimitionAutoReverse("0"), uexWindow.makeRotate(a, b, c, d), uexWindow.commitAnimition(), appcan.isFunction(e) && (uexWindow.onAnimationFinish = e)
    }

    function C(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
        var q = null;
        1 === arguments.length && appcan.isPlainObject(a) && ( q = a,
        a = q.left || 0,
        b = q.top || 0,
        c = q.scaleX || 1,
        d = q.scaleY || 1,
        e = q.scaleZ || 1,
        f = q.degrees || 0,
        g = q.rotateX || 0,
        h = q.rotateY || 0,
        i = q.rotateZ || 0,
        j = q.alpha || 0,
        k = q.delay || 0,
        l = q.curve || 0,
        m = q.repeatCount || 0,
        n = q.isReverse || 0,
        o = q.callback,
        p = q.duration || 250),
        a = q.left || 0,
        b = q.top || 0,
        c = q.scaleX || 1,
        d = q.scaleY || 1,
        e = q.scaleZ || 1,
        f = q.degrees || 0,
        g = q.rotateX || 0,
        h = q.rotateY || 0,
        i = q.rotateZ || 0,
        j = q.alpha || 0,
        k = q.delay || 0,
        l = q.curve || 0,
        m = q.repeatCount || 0,
        n = q.isReverse || 0,
        p = p || 250, uexWindow.beginAnimition(), k && uexWindow.setAnimitionDelay(k), uexWindow.setAnimitionDuration(p), uexWindow.setAnimitionCurve(l), uexWindow.setAnimitionRepeatCount(m), uexWindow.setAnimitionAutoReverse(n), Math.abs(a) + Math.abs(b) && uexWindow.makeTranslation(a, b, "0"), (1 != c || 1 != d || 1 != e) && uexWindow.makeScale(c, d, e), f && Math.abs(f) > 0 && parseInt(g) + parseInt(h) + parseInt(i) > 0 && uexWindow.makeRotate(f, g, h, i), j && uexWindow.makeAlpha(j), uexWindow.commitAnimition(), appcan.isFunction(o) && (uexWindow.onAnimationFinish = o)
    }

    function D(a, b, c, d) {
        1 === arguments.length && appcan.isPlainObject(a) && ( argObj = a,
        a = argObj.dx || 0,
        b = argObj.dy || 0,
        c = argObj.duration || 250,
        d = argObj.callback ||
        function() {
        }), uexWindow.onSetWindowFrameFinish =
        d, uexWindow.setWindowFrame(a, b, c)
    }

    function E(b, c, d, e, f, g) {
        var h = null;
        1 === arguments.length && appcan.isPlainObject(b) && ( h = b,
        b = h.id || 0,
        c = h.url,
        e = h.top,
        d = h.left,
        g = h.extraInfo,
        f = h.name),
        e = e || 0,
        d = d || 0;
        var i = a("#" + b),
            j = i.width(),
            k = i.height(),
            l = i.css("font-size");
        e = parseInt(e, 10),
        e = isNaN(e) ? i.offset().top : e,
        d = parseInt(d, 10),
        d = isNaN(d) ? i.offset().left : d,
        f = f ? f : b,
        g = g || "",
        l = parseInt(l, 10),
        l = isNaN(l) ? 0 : l, F(f, 0, c, "", d, e, j, k, l, 0, 0, g)
    }

    function F(a, b, c, d, e, f, g, h, i, j, k, m) {
        var n = null;
        1 === arguments.length && appcan.isPlainObject(a) && ( n = a,
        a = n.name,
        b = n.dataType,
        c = n.url,
        d = n.data,
        e = n.left,
        f = n.top,
        g = n.width,
        h = n.height,
        i = n.fontSize,
        j = n.type,
        k = n.bottomMargin,
        m = n.extraInfo),
        b = b || 0,
        e = e || 0,
        f = f || 0,
        h = h || 0,
        g = g || 0,
        j = j || 0,
        k = k || 0,
        i = i || 0,
        d = d || "",
        i = parseInt(i, 10),
        i = isNaN(i) ? 0 : i;
        try {
            m = appcan.isString(m) ? m : JSON.stringify(m),
            m = JSON.parse(m), m.extraInfo || ( m = {
                extraInfo : m
            }),
            m = JSON.stringify(m)
        } catch(o) {
            m = m || ""
        }
        if (uexWidgetOne.platformName && uexWidgetOne.platformName.toLowerCase().indexOf("ios") > -1) {
            var p = ['"' + a + '"', b, '"' + c + '"', '"' + d + '"', e, f, g, h, i, j, k, "'" + m + "'"],
                q = "uexWindow.openPopover(" + p.join(",") + ")";
            return
            void  l("", q)
        }
        uexWindow.openPopover(a, b, c, d, e, f, g, h, i, j, k, m)
    }

    function G(a) {
        1 === arguments.length && appcan.isPlainObject(a) && ( a = a.name), uexWindow.closePopover(a)
    }

    function H(b, c, d, e) {
        var f = null;
        1 === arguments.length && appcan.isPlainObject(b) && ( f = b,
        b = f.id,
        c = f.left,
        d = f.top,
        e = f.name),
        c = c || 0,
        d = d || 0;
        var g = a("#" + b),
            h = g.width(),
            i = g.height();
        c = parseInt(c, 10),
        c = isNaN(c) ? 0 : c,
        d = parseInt(d, 10),
        d = isNaN(d) ? 0 : d,
        e = e ? e : b, uexWindow.setPopoverFrame(e, c, d, h, i)
    }

    function I(a, b, c, d, e) {
        var f = null;
        1 === arguments.length && appcan.isPlainObject(a) && ( f = a,
        a = f.name,
        b = f.left,
        c = f.top,
        d = f.width,
        e = f.height),
        b = b || 0,
        c = c || 0,
        d = d || 0,
        e = e || 0,
        b = parseInt(b, 10),
        b = isNaN(b) ? 0 : b,
        c = parseInt(c, 10),
        c = isNaN(c) ? 0 : c,
        d = parseInt(d, 10),
        d = isNaN(d) ? 0 : d,
        e = parseInt(e, 10),
        e = isNaN(e) ? 0 : e, uexWindow.setPopoverFrame(a, b, c, d, e)
    }

    function J(a, b, c, d) {
        1 === arguments.length && appcan.isPlainObject(a) && ( d = a.callback,
        c = a.buttons,
        b = a.content,
        a = a.title),
        a = a || "\u63d0\u793a",
        c = c || ["\u786e\u5b9a"],
        c = appcan.isArray(c) ? c : [c], N(a, b, c, d)
    }

    function K(a, b, c) {
        1 === arguments.length && appcan.isPlainObject(a) && ( c = a.buttons,
        b = a.content,
        a = a.title),
        c = appcan.isArray(c) ? c : [c], uexWindow.alert(a, b, c[0])
    }

    var L = [];
    function M(b, c, d) {
        L.length > 0 && a.each(L, function(a, e) {
            if (e && appcan.isFunction(e)) {
                if (2 != c)
                    return e(new Error("confirm error"));
                e(null, b, c, d)
            }
        }),
        L = []
    }

    function N(a, b, c, d) {
        1 === arguments.length && appcan.isPlainObject(a) && ( d = a.callback,
        c = a.buttons,
        b = a.content,
        a = a.title),
        c = appcan.isArray(c) ? c : [c], appcan.isFunction(d) && (L.push(d), uexWindow.cbConfirm = function(a, b, c) {
            M(c, b, a)
        }), uexWindow.confirm(a, b, c)
    }

    function O(a, b, c, d, e) {
        1 === arguments.length && appcan.isPlainObject(a) && ( e = a.callback,
        d = a.buttons,
        b = a.content,
        c = a.defaultValue,
        a = a.title),
        d = appcan.isArray(d) ? d : [d], appcan.isFunction(e) && (uexWindow.cbPrompt = function(a, b, c) {
            try {
                var c = JSON.parse(c);
                e(null, c, b, a)
            } catch(d) {
                e(d)
            }
        }), uexWindow.prompt(a, b, c, d)
    }

    function P(a) {
        1 === arguments.length && appcan.isPlainObject(a) && ( a = a.name), a ? uexWindow.bringPopoverToFront(a) : uexWindow.bringToFront()
    }

    function Q(a) {
        1 === arguments.length && appcan.isPlainObject(a) && ( a = a.name), a ? uexWindow.sendPopoverToBack(a) : uexWindow.sendToBack()
    }

    function R(a, b) {
        if (1 === arguments.length && appcan.isPlainObject(a) && ( b = a.callback,
        a = a.channelId), appcan.isFunction(b)) {
            var c = "notify_callback_" + appcan.getUID();
            uexWindow[c] = b, uexWindow.subscribeChannelNotification(a, c)
        }
    }

    function S(a, b) {
        1 === arguments.length && appcan.isPlainObject(a) && ( b = a.msg,
        a = a.channelId), appcan.isPlainObject(b) && ( b = JSON.stringify(b)), uexWindow.publishChannelNotification(a, b)
    }

    function T(a) {
        1 === arguments.length && appcan.isPlainObject(a) && ( a = a.msg), uexWindow.postGlobalNotification(a)
    }

    function U(b) {
        d.length > 0 && a.each(d, function(a, c) {
            c && appcan.isFunction(c) && c(b)
        })
    }

    function V(a) {
        1 === arguments.length && appcan.isPlainObject(a) && ( a = a.callback), appcan.isFunction(a) && (d.push(a), uexWindow.onGlobalNotification = function(a) {
            U(a)
        })
    }

    function W(a) {
        if (1 === arguments.length && appcan.isPlainObject(a) && ( a = a.callback), appcan.isFunction(a))
            for (var b = 0,
                c = d.length; c > b; b++)
                if (d[b] === a)
                    return
                    void  d.splice(b, 1)
    }

    function X(b, c) {
        if (b)
            ;
        else {
            if (appcan.isString(c) && ( c = JSON.parse(c)), !c.multiPopName)
                return;
            var d = f[c.multiPopName];
            a.each(d, function(a, b) {
                appcan.isFunction(b) && b(null, c)
            })
        }
    }

    function Y(b, c, d, e, g, h, i, j, k, l, m, n) {
        1 === arguments.length && appcan.isPlainObject(b) && ( m = b.indexSelected,
        l = b.flag,
        k = b.fontSize,
        j = b.change,
        i = b.height,
        h = b.width,
        g = b.top,
        e = b.left,
        d = b.dataType,
        c = b.content,
        n = b.extraInfo,
        b = b.popName),
        d = d || 0,
        l = l || 0,
        m = parseInt(m, 10),
        m = isNaN(m) ? 0 : m,
        h = h || "",
        i = i || "",
        j = j ||
        function() {
        };
        try {
            n = appcan.isString(n) ? n : JSON.stringify(n),
            n = JSON.parse(n), n.extraInfo || ( n = {
                extraInfo : n
            }),
            n = JSON.stringify(n)
        } catch(o) {
            n = n || ""
        }
        appcan.isString(c) ? ( c = JSON.parse(c), c.content || ( c = {
            content : c
        })) : c.content || ( c = {
            content : c
        });
        var p = ["inPageName", "inUrl", "inData"],
            q = c.content;
        a.each(q, function(b, c) {
            a.each(p, function(a, b) {
                b in c || (c[b] = "")
            })
        }),
        c = JSON.stringify(c), f[b] ? f[b].push(j) : f[b] = [j], uexWindow.openMultiPopover(c, b, d, e, g, h, i, k, l, m, n), uexWindow.cbOpenMultiPopover = function(a, b, c) {
            0 == a && (1 != b ? X(new Error("multi popover error")) : X(null, c))
        }, $(b, m)
    }

    function Z(a) {
        1 === arguments.length && appcan.isPlainObject(a) && ( a = a.popName), a && uexWindow.closeMultiPopover(a)
    }

    function $(a, b) {
        1 === arguments.length && appcan.isPlainObject(a) && ( b = a.index,
        a = a.popName), a && ( b = parseInt(b, 10),
        b = isNaN(b) ? 0 : b, uexWindow.setSelectedPopOverInMultiWindow && uexWindow.setSelectedPopOverInMultiWindow(a, b))
    }

    var _ = [];
    function aa(b) {
        a.each(_, function(a, c) {
            appcan.isFunction(c) && c(b)
        })
    }

    function ba(a) {
        appcan.isFunction(a) && (_.push(a), uexWindow.onStateChange =
        aa)
    }

    function ca(a) {
        var b = null,
            c = null;
        appcan.window.onResume && ( b = appcan.window.onResume), appcan.window.onPause && ( c = appcan.window.onPause), 0 === a && (Ua.emit("resume"), b && b()), 1 === a && (Ua.emit("pause"), c && c())
    }

    var da = {
        left : [],
        right : []
    };
    function ea() {
        a.each(da.left, function(a, b) {
            appcan.isFunction(b) && b()
        })
    }

    function fa() {
        a.each(da.right, function(a, b) {
            appcan.isFunction(b) && b()
        })
    }

    function ga(a, b) {
        return "left" === a ? (da[a].push(b),
        void (uexWindow.onSwipeLeft = ea)) : "right" === a ? (da[a].push(b),
        void (uexWindow.onSwipeRight = fa)) :
        void 0
    }

    function ha(a) {
        appcan.isFunction(a) && ga("left", a)
    }

    function ia(a) {
        appcan.isFunction(a) && ga("right", a)
    }

    function ja() {
        var a = null,
            b = null;
        appcan.window.onSwipeLeft && ( a = appcan.window.onSwipeLeft), appcan.frame.onSwipeLeft && ( b = appcan.frame.onSwipeLeft), Ua.emit("swipeLeft"), appcan.frame && appcan.frame.emit && appcan.frame.emit("swipeLeft"), a && a(), b && b()
    }

    function ka() {
        var a = null,
            b = null;
        appcan.window.onSwipeRight && ( a = appcan.window.onSwipeRight), appcan.frame.onSwipeRight && ( b = appcan.frame.onSwipeRight), Ua.emit("swipeRight"), appcan.frame && appcan.frame.emit && appcan.frame.emit("swipeRight"), a && a(), b && b()
    }

    function la(a) {
        var a = parseInt(a, 10);
        a = isNaN(a) ? 0 : a,
        a = 1 != a ? 0 : a, uexWindow.setMultilPopoverFlippingEnbaled(a)
    }

    var ma = [];
    function na(b, c, d) {
        ma.length > 0 && a.each(ma, function(a, e) {
            if (e && appcan.isFunction(e)) {
                if (2 != c)
                    return e(new Error(" error"));
                e(null, b, c, d)
            }
        }),
        ma = []
    }

    function oa(a, b, c, d) {
        1 === arguments.length && appcan.isPlainObject(a) && ( d = a.callback,
        c = a.buttons,
        b = a.cancelText,
        a = a.title),
        c = appcan.isArray(c) ? c : [c], appcan.isFunction(d) && (uexWindow.cbActionSheet = function(a, b, c) {
            ma.push(d), na(c, b, opId)
        }), uexWindow.actionSheet(a, b, c)
    }

    function pa(a, b, c, d) {
        var e = null;
        1 === arguments.length && appcan.isPlainObject(a) ? e = JSON.stringify(a) : ( e = {}, appcan.isPlainObject(a) ? e.leftSliding = a : e.leftSliding = JSON.parse(a), appcan.isPlainObject(b) ? e.rightSliding = b : e.rightSliding = JSON.parse(b), e.animationId = c || "1", e.bg = d || "",
        e = JSON.stringify(e)), uexWindow.setSlidingWindow(e)
    }

    function qa(a, b) {
        var c = null;
        appcan.isPlainObject(a) || JSON.parse(a) ? c = a : ( c = {}, c.mark =
        a, b && (c.reload = b)), appcan.isPlainObject(c) && ( c = JSON.stringify(c)), uexWindow.toggleSlidingWindow(c)
    }

    function ra(a) {
        var a = parseInt(a, 10);
        a = isNaN(a) ? 0 : a,
        a = 0 != a ? 1 : a, uexWindow.setSlidingWindowEnabled(a)
    }

    var sa = [];
    function ta(b, c, d) {
        sa.length > 0 && a.each(sa, function(a, e) {
            e && appcan.isFunction(e) && e(b, c, d)
        }),
        sa = []
    }

    function ua(a) {
        1 === arguments.length && appcan.isPlainObject(a) && ( a = a.callback), appcan.isFunction(a) && ( sa = sa || [], sa.push(a), uexWindow.cbGetUrlQuery = function(a, b, c) {
            ta(c, b, a)
        }, uexWindow.getUrlQuery())
    }

    var va = [];
    function wa(b) {
        va.length > 0 && a.each(va, function(a, c) {
            c && appcan.isFunction(c) && c(b)
        }),
        va = []
    }

    function xa(a) {
        1 === arguments.length && appcan.isPlainObject(a) && ( a = a.callback), appcan.isFunction(a) && ( va = va || [], va.push(a), uexWindow.cbSlidingWindowState = function(a) {
            wa(a)
        }, uexWindow.getSlidingWindowState())
    }

    function ya(a) {
        var a = parseInt(a, 10);
        a = isNaN(a) ? 0 : a,
        a = 0 != a ? 1 : a, uexWindow.setStatusBarTitleColor(a)
    }

    function za(a, b) {
        var c = null;
        1 === arguments.length && appcan.isPlainObject(a) && ( c = a,
        a = c.animId,
        b = c.animDuration), a && ( a = parseInt(a, 10), (isNaN(a) || a > 16 || 0 > a) && ( a = 0)), b && ( b = parseInt(b, 10),
        b = isNaN(b) ? "" : b),
        b = b || 260, uexWindow.windowForward(a, b)
    }

    function Aa(a, b) {
        var c = null;
        1 === arguments.length && appcan.isPlainObject(a) && ( c = a,
        a = c.animId,
        b = c.animDuration), a && ( a = parseInt(a, 10), (isNaN(a) || a > 16 || 0 > a) && ( a = 0)), b && ( b = parseInt(b, 10),
        b = isNaN(b) ? "" : b),
        b = b || 260, uexWindow.windowBack(a, b)
    }

    function Ba() {
        uexWindow.preOpenStart()
    }

    function Ca() {
        uexWindow.preOpenFinish()
    }

    var Da = [];
    function Ea(b, c, d) {
        Da.length > 0 && a.each(Da, function(a, e) {
            e && appcan.isFunction(e) && e(null, b, c, d)
        }),
        Da = []
    }

    function Fa(a) {
        if (1 === arguments.length && appcan.isPlainObject(a) && ( a = a.callback), appcan.isFunction(a)) {
            Da.push(a);
            try {
                uexWindow.cbGetState = function(a, b, c) {
                    Ea(c, b, a)
                }
            } catch(b) {
                a(b)
            }
            uexWindow.getState()
        }
    }

    function Ga(a, b) {
        var c = null;
        1 === arguments.length && appcan.isPlainObject(a) && ( c = a,
        a = c.title || "",
        b = c.msg || ""),
        a = a || "",
        b = b || "", "" != b && uexWindow.statusBarNotification(a, b)
    }

    function Ha(a) {
        var a = parseInt(a, 10);
        a = isNaN(a) ? 0 : a,
        a = 0 != a ? "true" : "false", uexWindow.setWindowScrollbarVisible(a)
    }

    function Ia(a) {
        a = 1 != a ? 0 : a, uexWindow.hiddenBounceView(a)
    }

    function Ja(a, b, c) {
        var d = null;
        1 === arguments.length && appcan.isPlainObject(a) && ( d = a,
        a = d.type || 0,
        b = d.color,
        c = d.flag || 1),
        a = a || 0,
        c = c || 1, uexWindow.showBounceView(a, b, c)
    }

    function Ka(a) {
        1 === arguments.length && appcan.isPlainObject(a) && ( a = a.name), a && uexWindow.insertAbove(a)
    }

    function La(a) {
        1 === arguments.length && appcan.isPlainObject(a) && ( a = a.name), a && uexWindow.insertBelow(a)
    }

    function Ma(a, b) {
        var c = null;
        1 === arguments.length && appcan.isPlainObject(a) && ( c = a,
        a = c.nameA,
        b = c.nameB), a && b && uexWindow.insertPopoverAbovePopover(a, b)
    }

    function Na(a, b) {
        var c = null;
        1 === arguments.length && appcan.isPlainObject(a) && ( c = a,
        a = c.nameA,
        b = c.nameB), a && b && uexWindow.insertPopoverBelowPopover(a, b)
    }

    function Oa(a) {
        a = 1 != a ? 0 : a, uexWindow.setWindowHidden(a)
    }

    function Pa(a, b) {
        var c = null;
        1 === arguments.length && appcan.isPlainObject(a) && ( c = a,
        a = c.nameA,
        b = c.nameB), a && b && uexWindow.insertWindowAboveWindow(a, b)
    }

    function Qa(a, b) {
        var c = null;
        1 === arguments.length && appcan.isPlainObject(a) && ( c = a,
        a = c.nameA,
        b = c.nameB), a && b && uexWindow.insertWindowBelowWindow(a, b)
    }

    var Ra = [];
    function Sa(b, c) {
        a.each(Ra, function(a, d) {
            appcan.isFunction(d) && d(b, c)
        }),
        Ra = []
    }

    function Ta(a) {
        appcan.isFunction(a) && (Ra.push(a), uexWindow.onPopoverLoadFinishInRootWnd =
        Sa)
    }
    appcan.ready(function() {
        ba(ca), ha(ja), ia(ka)
    });
    var Ua = c.exports = {
        open : j,
        close : k,
        evaluateScript : l,
        evaluatePopoverScript : m,
        setBounce : n,
        setBounceParams : u,
        enableBounce : r,
        disableBounce : s,
        setBounceType : t,
        resetBounceView : v,
        openToast : w,
        closeToast : x,
        moveAnim : y,
        popoverElement : E,
        openPopover : F,
        closePopover : G,
        resizePopover : I,
        resizePopoverByEle : H,
        alert : J,
        confirm : N,
        prompt : O,
        bringPopoverToFront : P,
        sendPopoverToBack : Q,
        publish : S,
        subscribe : R,
        selectMultiPopover : $,
        openMultiPopover : Y,
        closeMultiPopover : Z,
        setWindowFrame : D,
        monitorKey : i,
        stateChange : ba,
        swipeLeft : ha,
        swipeRight : ia,
        getBounceStatus : q,
        setMultilPopoverFlippingEnbaled : la,
        actionSheet : oa,
        scaleAnim : A,
        alphaAnim : z,
        rotateAnim : B,
        customAnim : C,
        setSlidingWindow : pa,
        toggleSlidingWindow : qa,
        getSlidingWindowState : xa,
        setSlidingWindowEnabled : ra,
        getUrlQuery : ua,
        setStatusBarTitleColor : ya,
        windowForward : za,
        windowBack : Aa,
        preOpenStart : Ba,
        preOpenFinish : Ca,
        getState : Fa,
        setWindowScrollbarVisible : Ha,
        insertPopoverBelowPopover : Na,
        insertPopoverAbovePopover : Ma,
        insertBelow : La,
        insertAbove : Ka,
        insertWindowBelowWindow : Qa,
        insertWindowAboveWindow : Pa,
        showBounceView : Ja,
        hiddenBounceView : Ia,
        onPopoverLoadFinishInRootWnd : Ta
    };
    appcan.extend(Ua, appcan.eventEmitter)
}), window.appcan && appcan.define("frame", function(a, b, c) {
    var d = appcan.require("window"),
        e = c.exports = {
        close : d.closePopover,
        bringToFront : d.bringPopoverToFront,
        sendToBack : d.sendPopoverToBack,
        evaluateScript : d.evaluatePopoverScript,
        publish : d.publish,
        subscribe : d.subscribe,
        selectMulti : d.selectMultiPopover,
        openMulti : d.openMultiPopover,
        closeMulti : d.closeMultiPopover,
        setBounce : d.setBounce,
        getBounceStatus : d.getBounceStatus,
        resetBounce : d.resetBounceView,
        open : function(b, c, e, f, g, h, i, j) {
            var k = null;
            if (1 === arguments.length && appcan.isPlainObject(b) && ( k = b,
            b = k.id || 0,
            c = k.url,
            f = k.top,
            e = k.left,
            g = k.name,
            h = k.index,
            i = k.change), appcan.isArray(c)) {
                var l = a("#" + b),
                    m = l.width(),
                    n = l.height(),
                    o = l.css("font-size");
                f = parseInt(f, 10),
                f = isNaN(f) ? l.offset().top : f,
                e = parseInt(e, 10),
                e = isNaN(e) ? l.offset().left : e,
                g = g ? g : b,
                o = parseInt(o, 10),
                o = isNaN(o) ? 0 : o, d.openMultiPopover(g || b, c, 0, e, f, m, n, i ||
                function() {
                }, o, 0, h, j)
            } else
                d.popoverElement(b, c, e, f, g, j)
        },
        resize : d.resizePopoverByEle,
        swipeLeft : d.swipeLeft,
        swipeRight : d.swipeRight
    };
    appcan.extend(e, appcan.eventEmitter)
}), function() {
    var a = appcan.request.ajax,
        b = "wgt://offlinedata/",
        c = "offlinedata",
        d = appcan.file.read,
        e = appcan.file.readSecure,
        f = appcan.file.write,
        g = appcan.file.writeSecure;
    function h(f) {
        if (1 === arguments.length && appcan.isPlainObject(f)) {
            var g,
                h;
            if (f.data) {
                var k = JSON.stringify(f.data),
                    l = f.url + k;
                g = appcan.crypto.md5(l)
            } else
                g = appcan.crypto.md5(f.url);
            if (f.expires && "number" == typeof f.expires)
                h = parseInt(f.expires) + parseInt((new Date).getTime());
            else if (f.expires && "string" == typeof f.expires) {
                var m = j(f.expires);
                h = m
            } else
                h = 0;
            if (
            void 0 != f.offlineDataPath && "string" == typeof f.offlineDataPath && ( b = f.offlineDataPath), f.crypto && !f.password && (f.password = "123qwe"),
            void 0 != f.offline) {
                var n = f.offline;
                if (n === !0) {
                    var o = appcan.locStorage.val(c),
                        p = null;
                    if (null != o)
                        if ( p = JSON.parse(o), p[g]) {
                            var q = p[g],
                                r = q.data ? q.data : "",
                                s = {
                                filePath : r,
                                length : -1,
                                callback : function(b, c, d, e) {
                                    if (null == b) {
                                        var j = f.success;
                                        "function" == typeof j && ("string" == typeof c && f.dataType && "json" == f.dataType.toLowerCase() && ( c = JSON.parse(c)), f.success(c, "success", 200, null, null))
                                    } else {
                                        var j = f.success,
                                            k = f.error;
                                        f.success = function(a) {
                                            j.apply(this, arguments), i(g, a, h, f)
                                        }, f.error = function(a) {
                                            k.apply(this, arguments)
                                        }, a(f)
                                    }
                                }
                            };
                            if (q.timeout && q.now && q.data) {
                                var t = parseInt(q.now) + parseInt(q.timeout),
                                    u = new Date;
                                if (q.expires && q.expires > u.getTime())
                                    f.crypto ? (s.key = f.password, e(s)) : d(s);
                                else if (t > u.getTime())
                                    f.crypto ? (s.key = f.password, e(s)) : d(s);
                                else {
                                    var v = f.success,
                                        w = f.error;
                                    f.success = function(a) {
                                        v.apply(this, arguments), i(g, a, h, f)
                                    }, f.error = function(a) {
                                        w.apply(this, arguments)
                                    }, a(f)
                                }
                            } else if (q.data)
                                if (q.expires) {
                                    var u = new Date;
                                    if (q.expires > u.getTime())
                                        f.crypto ? (s.key = f.password, e(s)) : d(s);
                                    else {
                                        var v = f.success,
                                            w = f.error;
                                        f.success = function(a) {
                                            v.apply(this, arguments), i(g, a, h, f)
                                        }, f.error = function(a) {
                                            w.apply(this, arguments)
                                        }, a(f)
                                    }
                                } else
                                    f.crypto ? (s.key = f.password, e(s)) : d(s);
                            else {
                                var v = f.success,
                                    w = f.error;
                                f.success = function(a) {
                                    v.apply(this, arguments), i(g, a, h, f)
                                }, f.error = function(a) {
                                    w.apply(this, arguments)
                                }, a(f)
                            }
                        } else {
                            var v = f.success,
                                w = f.error;
                            f.success = function(a) {
                                v.apply(this, arguments), i(g, a, h, f)
                            }, f.error = function(a) {
                                w.apply(this, arguments)
                            }, a(f)
                        }
                    else {
                        var v = f.success,
                            w = f.error;
                        f.success = function(a) {
                            v.apply(this, arguments), i(g, a, h, f)
                        }, f.error = function(a) {
                            w.apply(this, arguments)
                        }, a(f)
                    }
                } else {
                    var v = f.success,
                        w = f.error;
                    f.success = function(a) {
                        v.apply(this, arguments), i(g, a, h, f)
                    }, f.error = function(a) {
                        w.apply(this, arguments)
                    }, a(f)
                }
            } else {
                var v = f.success,
                    w = f.error;
                f.success = function(a) {
                    v.apply(this, arguments)
                }, f.error = function(a) {
                    w.apply(this, arguments)
                }, a(f)
            }
        }
    }

    function i(a, d, e, h) {
        try {
            var i = a,
                j = b + i + ".txt",
                k = {};
            "object" != typeof d || "[object object]" != Object.prototype.toString.call(d).toLowerCase() || d.length || ( d = JSON.stringify(d));
            var l = (new Date).getTime(),
                m =
                d;
            writeFileParams = {
                filePath : j,
                content : d,
                callback : function(a) {
                    if (null == a) {
                        if (k.now = l, k.data =
                            j, m.timeout)
                            k.timeout = m.timeout;
                        else if ("string" == typeof m)
                            try {
                                var b = JSON.parse(m);
                                b.timeout && (k.timeout = b.timeout)
                            } catch(d) {
                            }
                        e > 0 && (k.expires = e);
                        var f = appcan.locStorage.val(c) || "{}",
                            g = JSON.parse(f);
                        g[i] = k, appcan.locStorage.val(c, JSON.stringify(g))
                    }
                }
            }, h.crypto ? (writeFileParams.key = h.password, g(writeFileParams)) : f(writeFileParams)
        } catch(n) {
            throw n
        }
    }

    function j(a) {
        var b = "([0-9]{4})(-([0-9]{2})(-([0-9]{2})(T([0-9]{2}):([0-9]{2})(:([0-9]{2})(.([0-9]+))?)?(Z|(([-+])([0-9]{2}):([0-9]{2})))?)?)?)?";
        if (!a)
            return 0;
        try {
            var c = a.match(new RegExp(b)),
                d = 0,
                e = new Date(c[1], 0, 1);
            return c[3] && e.setMonth(c[3] - 1), c[5] && e.setDate(c[5]), c[7] && e.setHours(c[7]), c[8] && e.setMinutes(c[8]), c[10] && e.setSeconds(c[10]), c[12] && e.setMilliseconds(1e3 * Number("0." + c[12])), c[14] && ( d = 60 * Number(c[16]) + Number(c[17]), d *= "-" == c[15] ? 1 : -1), d -= e.getTimezoneOffset(),
            time = Number(e) + 60 * d * 1e3, Number(time)
        } catch(f) {
            return 0
        }
    }

    function k(a) {
        function b(a) {
            return 10 > a ? "0" + a : a
        }
        return a.getUTCFullYear() + "-" + b(a.getUTCMonth() + 1) + "-" + b(a.getUTCDate()) + "T" + b(a.getUTCHours()) + ":" + b(a.getUTCMinutes()) + ":" + b(a.getUTCSeconds()) + "Z"
    }
    appcan.extend(appcan.request, {
        ajax : h
    })
}(), appcan.define("ajax", function(a, b, c) {
    c.exports = appcan.request.ajax
}), appcan.define("icache", function(a, b, c) {
    var d = 1e3,
        e = "box://icache/";
    function f(b) {
        var c = this;
        appcan.extend(this, appcan.eventEmitter), c.waiting = [], c.running = [], c.option = a.extend({
            maxtask : 3
        }, b, !0), uexFileMgr.cbGetFileRealPath = function(a, b, d) {
            c.realpath = d, c.emit("NEXT_SESSION")
        }, uexFileMgr.cbIsFileExistByPath = function(a, b, d) {
            c.emit("FS" + a, c, d)
        }, uexDownloaderMgr.cbCreateDownloader = function(a, b, d) {
            c.emit("CDL" + a, c, d)
        }, uexDownloaderMgr.onStatus = function(a, b, d, e) {
            c.emit("DLS" + a, c, {
                fileSize : b,
                percent : d,
                status : e
            })
        }, uexFileMgr.getFileRealPath("box://"), c.on("NEXT_SESSION", c._next)
    }
    f.prototype = {
        _progress : function(a, b) {
            b.progress && b.progress(a, b)
        },
        _success : function(a, b) {
            var c = this;
            if (c.off("DLS" + b.id), uexDownloaderMgr.closeDownloader(b.id), b.success)
                b.success(a, b);
            else if (b.dom && b.dom.length)
                switch(b.dom[0].tagName.toLowerCase()) {
                case"img":
                    b.dom.attr("src", a);
                    break;
                default:
                    b.dom.css("background-image", "url(file://" + a + ") !important")
                }
            var d = c.running.valueOf(b);
            void 0 != d && c.running.splice(d, 1), c.emit("NEXT_SESSION")
        },
        _fail : function(a) {
            var b = this;
            b.off("DLS" + a.id), uexDownloaderMgr.closeDownloader(a.id);
            var c = b.running.valueOf(a);
            void 0 != c && b.running.splice(c, 1), a.fail && a.fail(a), b.emit("NEXT_SESSION")
        },
        _next : function() {
            var a = this;
            if (a.realpath && !(a.running.length >= a.option.maxtask)) {
                var b = a.waiting.shift();
                b && (a.running.push(b), a._download(b))
            }
        },
        _download : function(a) {
            var b = this,
                c = appcan.crypto.md5(a.url),
                d = b.realpath + "/icache/" + c;
            b.once("FS" + a.id, function(c) {
                c ? b._success(d, a) : uexDownloaderMgr.createDownloader(a.id)
            }), b.once("CDL" + a.id, function(c) {
                c ? b._fail(a) : (uexDownloaderMgr.setHeaders && a.header && uexDownloaderMgr.setHeaders(a.id, a.header), uexDownloaderMgr.download(a.id, a.url, d, "0"))
            }), b.on("DLS" + a.id, function(c) {
                switch(parseInt(c.status)) {
                case 0:
                    b._progress(c, a);
                    break;
                case 1:
                    b._success(d, a);
                    break;
                default:
                    b._fail(a)
                }
            }), uexFileMgr.isFileExistByPath(a.id, d)
        },
        run : function(b) {
            var c = this,
                e = a.extend({
                id : "" + d++,
                status : 0
            }, b, !0);
            c.waiting.push(e), c.emit("NEXT_SESSION")
        },
        clearcache : function() {
            uexFileMgr.deleteFileByPath(e)
        }
    }, c.exports = function(a) {
        return new f(a)
    }
}), window.appcan && appcan.define("widget", function(a, b, c) {
    function d(a, b, c, d, e, f) {
        var g = null;
        return 1 === arguments.length && appcan.isPlainObject(a) && ( g = a,
        a = g.appId,
        b = g.animId || 0,
        c = g.funName,
        d = g.info,
        e = g.animDuration || "",
        f = g.callback ||
        function() {
        }), a ? ( b = b || 0,
        e = e || "",
        f = f ||
        function() {
        }, b && ( b = parseInt(b, 10), (isNaN(b) || b > 16 || 0 > b) && ( b = 0)), e && ( e = parseInt(e, 10),
        e = isNaN(e) ? "" : e), uexWidget.cbStartWidget = function(a, b, c) {
            f(null, c, b, a)
        },
        void  uexWidget.startWidget(a, b, c, d, e)) : f(new Error("appId is empty"))
    }

    function e(a, b, c) {
        var d = null;
        1 === arguments.length && appcan.isPlainObject(a) && ( d = a,
        a = d.resultInfo,
        b = d.appId,
        c = d.isWgtBG), a && b && c ? uexWidget.finishWidget(a, b, c) : a && b ? uexWidget.finishWidget(a, b) : uexWidget.finishWidget(a)
    }

    function f(a, b) {
        var c = null;
        1 === arguments.length && appcan.isPlainObject(a) && ( c = a,
        a = c.appId,
        b = c.callback ||
        function() {
        }), uexWidget.cbRemoveWidget = function(a, c, d) {
            b(null, d, c, a)
        }, uexWidget.removeWidget(a)
    }

    function g(a) {
        var b = null;
        1 === arguments.length && appcan.isPlainObject(a) && ( a = b.callback ||
        function() {
        }),
        a = a ||
        function() {
        };
        try {
            uexWidget.cbCheckUpdate = function(b, c, d) {
                var e = JSON.parse(d),
                    f = e.result || 2;
                a(null, f, c, b)
            }
        } catch(c) {
            a(new Error("\u68c0\u67e5\u5931\u8d25\uff01"))
        }
        uexWidget.checkUpdate()
    }

    function h(a) {
        var b = null;
        1 === arguments.length && appcan.isPlainObject(a) && ( b = a,
        a = b.appInfo), uexWidget.loadApp(a)
    }

    function i(a, b, c, d, e) {
        var f = null;
        1 === arguments.length && appcan.isPlainObject(a) && ( f = a,
        a = f.startMode,
        b = f.mainInfo,
        c = f.addInfo,
        d = f.optInfo,
        e = e ||
        function() {
        }), appcan.isFunction(e) && (uexWidget.cbStartApp = function(a) {
            e(a)
        }), uexWidget.startApp(a, b, c, d)
    }

    function j(a) {
        1 === arguments.length && appcan.isPlainObject(a) && ( a = a.callback), appcan.isFunction(a) && (uexWidget.cbGetOpenerInfo = function(b, c, d) {
            a(null, d, c, b)
        }, uexWidget.getOpenerInfo())
    }

    function k(a) {
        var b = null;
        1 === arguments.length && appcan.isPlainObject(a) && ( b = a,
        a = b.appPath), uexWidget.installApp(a)
    }

    function l(a) {
        var b = null;
        1 === arguments.length && appcan.isPlainObject(a) && ( a = b.callback), appcan.isFunction(a) && (uexWidget.cbGetPushInfo = function(b, c, d) {
            a(null, d, c, b)
        }, uexWidget.getPushInfo())
    }

    function m(a) {
        1 === arguments.length && appcan.isPlainObject(a) && ( a = a.cbFunction), uexWidget.setPushNotifyCallback(a)
    }

    function n(a, b) {
        var c = null;
        1 === arguments.length && appcan.isPlainObject(a) && ( c = a,
        a = c.uId,
        b = c.uNickName), uexWidget.setPushInfo(a, b)
    }

    function o(a) {
        var b = null;
        1 === arguments.length && appcan.isPlainObject(a) && ( b = a,
        a = b.state),
        a = parseInt(a, 10),
        a = isNaN(a) ? 0 : a,
        a = 0 != a ? 1 : a, uexWidget.setPushState(a)
    }

    function p(a) {
        var b = null;
        1 === arguments.length && appcan.isPlainObject(a) && ( a = b.callback), appcan.isFunction(a) && (uexWidget.cbGetPushState = function(b, c, d) {
            a(null, d, c, b)
        }, uexWidget.getPushState())
    }

    function q(a, b) {
        var c = {},
            d = null;
        if (1 === arguments.length && appcan.isPlainObject(a) && ( c = a,
        a = c.appData,
        b = c.callback), appcan.isFunction(b)) {
            uexWidget.cbIsAppInstalled = function(a) {
                try {
                    var c = JSON.parse(a);
                    b(null, c.installed, 2)
                } catch(d) {
                    b(new Error("error"))
                }
            };
            var e = {};
            e.appData = a,
            e = JSON.stringify(e), uexWidget.isAppInstalled(e)
        }
    }

    var r = [];
    function s(b) {
        a.each(r, function(a, c) {
            appcan.isFunction(c) && c(b)
        })
    }

    function t() {
        var a = null;
        appcan.widget.onLoadByOtherApp && ( a = appcan.widget.onLoadByOtherApp), D.emit("loadByOtherApp"), a && a()
    }

    function u(a) {
        1 === arguments.length && appcan.isPlainObject(a) && ( a = a.callback), r.push(a), uexWidget.onLoadByOtherApp = function(a) {
            s(a)
        }
    }

    var v = [];
    function w() {
        a.each(v, function(a, b) {
            appcan.isFunction(b) && b()
        })
    }

    function x() {
        var a = null;
        appcan.widget.onSuspend && ( a = appcan.widget.onSuspend), D.emit("suspend"), a && a()
    }

    function y(a) {
        appcan.isFunction(a) && (v.push(a), uexWidget.onSuspend =
        w)
    }

    var z = [];
    function A() {
        a.each(z, function(a, b) {
            appcan.isFunction(b) && b()
        })
    }

    function B() {
        var a = null;
        appcan.widget.onResume && ( a = appcan.widget.onResume), D.emit("resume"), a && a()
    }

    function C(a) {
        appcan.isFunction(a) && (z.push(a), uexWidget.onResume =
        A)
    }
    appcan.ready(function() {
        y(x), C(B)
    });
    var D = c.exports = {
        startWidget : d,
        finishWidget : e,
        removeWidget : f,
        checkUpdate : g,
        loadApp : h,
        startApp : i,
        getOpenerInfo : j,
        installApp : k,
        getPushInfo : l,
        setPushNotifyCallback : m,
        setPushInfo : n,
        setPushState : o,
        getPushState : p,
        isAppInstalled : q,
        suspend : y,
        resume : C
    };
    appcan.extend(D, appcan.eventEmitter)
}), appcan.define("widgetOne", function(a, b, c) {
    function d(a) {
        if (1 === arguments.length && appcan.isPlainObject(a) && ( a = a.callback), appcan.isFunction(a))
            try {
                uexWidgetOne.cbGetPlatform = function(b, c, d) {
                    a(null, d, c, b)
                }, uexWidgetOne.getPlatform()
            } catch(b) {
                a(b)
            }
    }

    function e() {
        return uexWidgetOne.platformName
    }

    function f() {
        return uexWidgetOne.platformVersion
    }

    function g() {
        return uexWidgetOne.iOS7Style || 0
    }

    function h() {
        return uexWidgetOne.isFullScreen
    }

    function i(a) {
        1 === arguments.length && appcan.isPlainObject(a) && ( a = a.flag),
        a = isNaN(a) ? 0 : a, uexWidgetOne.exit(a)
    }

    function j(a) {
        if (1 === arguments.length && appcan.isPlainObject(a) && ( a = a.callback), appcan.isFunction(a))
            try {
                uexWidgetOne.cbGetCurrentWidgetInfo = function(b, c, d) {
                    a(null, d, c, b)
                }, uexWidgetOne.getCurrentWidgetInfo()
            } catch(b) {
                a(b)
            }
    }

    function k(a) {
        if (1 === arguments.length && appcan.isPlainObject(a) && ( a = a.callback), appcan.isFunction(a))
            try {
                uexWidgetOne.cbCleanCache = function(b, c, d) {
                    a(null, d, c, b)
                }, uexWidgetOne.cleanCache()
            } catch(b) {
                a(b)
            }
    }

    function l(a) {
        if (1 === arguments.length && appcan.isPlainObject(a) && ( a = a.callback), appcan.isFunction(a))
            try {
                uexWidgetOne.cbGetMainWidgetId = function(b, c, d) {
                    a(null, d, c, b)
                }, uexWidgetOne.getMainWidgetId()
            } catch(b) {
                a(b)
            }
    }

    var m = c.exports = {
        getPlatform : d,
        getPlatformName : e,
        getPlatformVersion : f,
        isIOS7Style : g,
        isFullScreen : h,
        exit : i,
        getCurrentWidgetInfo : j,
        cleanCache : k,
        getMainWidgetId : l
    }
}); 