console.log('ddddgg')
function _typeof(t) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
    function(t) {
        return typeof t
    }: function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol": typeof t
    })(t)
};
function imgRightClick() {
    var t = $("img");
    t.on("contextmenu",
    function() {
        return ! 1
    }),
    t.on("dragstart",
    function() {
        return ! 1
    })
};
function coverColor() {
    var _document$getElementB, path = null === (_document$getElementB = document.getElementById("post-cover")) || void 0 === _document$getElementB ? void 0 : _document$getElementB.src,
    httpRequest;
    void 0 !== path ? (httpRequest = new XMLHttpRequest, httpRequest.open("GET", path + "?imageAve", !0), httpRequest.send(), httpRequest.onreadystatechange = function() {
        var json, obj, value, value;
        4 == httpRequest.readyState && 200 == httpRequest.status && (json = httpRequest.responseText, obj = eval("(" + json + ")"), value = obj.RGB, value = "#" + value.slice(2), "light" == getContrastYIQ(value) && (value = LightenDarkenColor(colorHex(value), -60)), document.styleSheets[0].addRule(":root", "--just-main:" + value + "!important"))
    }) : document.styleSheets[0].addRule(":root", "--just-main: #286dea!important")
};
function colorHex(t) {
    var e = t;
    if (/^(rgb|RGB)/.test(e)) {
        for (var n = e.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(","), o = "#", i = 0; i < n.length; i++) {
            var r = Number(n[i]).toString(16);
            "0" === r && (r += r),
            o += r
        }
        return 7 !== o.length && (o = e),
        o
    }
    if (!/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(e)) return e;
    var a = e.replace(/#/, "").split("");
    if (6 === a.length) return e;
    if (3 === a.length) {
        for (var u = "#",
        i = 0; i < a.length; i += 1) u += a[i] + a[i];
        return u
    }
};
function colorRgb(t) {
    var e = t.toLowerCase();
    if (e && /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(e)) {
        if (4 === e.length) {
            for (var n = "#",
            o = 1; o < 4; o += 1) n += e.slice(o, o + 1).concat(e.slice(o, o + 1));
            e = n
        }
        for (var i = [], o = 1; o < 7; o += 2) i.push(parseInt("0x" + e.slice(o, o + 2)));
        return "rgb(" + i.join(",") + ")"
    }
    return e
};
function LightenDarkenColor(t, e) {
    var n = !1;
    "#" == t[0] && (t = t.slice(1), n = !0);
    var o = parseInt(t, 16),
    i = (o >> 16) + e;
    255 < i ? i = 255 : i < 0 && (i = 0);
    var r = (o >> 8 & 255) + e;
    255 < r ? r = 255 : r < 0 && (r = 0);
    var a = (255 & o) + e;
    return 255 < a ? a = 255 : a < 0 && (a = 0),
    (n ? "#": "") + String("000000" + (a | r << 8 | i << 16).toString(16)).slice( - 6)
};
function getContrastYIQ(t) {
    var e = colorRgb(t).match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/),
    n = 299 * e[1] + 587 * e[2] + 114 * e[3];
    return.5 <= (n /= 255e3) ? "light": "dark"
};
var getTimeState = function() {
    var t = (new Date).getHours(),
    e = "";
    return 0 <= t && t <= 5 ? e = "夜深了": 5 < t && t <= 10 ? e = "早上好": 10 < t && t <= 14 ? e = "中午好": 14 < t && t <= 18 ? e = "下午好": 18 < t && t <= 24 && (e = "晚上好"),
    e
};
function fly_to_top() {
    document.getElementById("guli_top").classList.add("open_wing"),
    setTimeout(function() {
        document.getElementById("guli_top").classList.add("flying"),
        btf.scrollToDest(0, 300)
    },
    300),
    setTimeout(function() {
        document.getElementById("guli_top").classList.remove("flying"),
        document.getElementById("guli_top").classList.remove("open_wing"),
        document.getElementById("guli_top").style.cssText = "opacity: ''; transform: ''"
    },
    600)
};
var navFn = {
    switchDarkMode: function() {
        "light" == ("dark" === document.documentElement.getAttribute("data-theme") ? "dark": "light") ? (activateDarkMode(), saveToLocal.set("theme", "dark", 2), void 0 !== GLOBAL_CONFIG.Snackbar && btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)) : (activateLightMode(), saveToLocal.set("theme", "light", 2), void 0 !== GLOBAL_CONFIG.Snackbar && btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day)),
        "function" == typeof utterancesTheme && utterancesTheme(),
        "object" === ("undefined" == typeof FB ? "undefined": _typeof(FB)) && window.loadFBComment(),
        window.DISQUS && document.getElementById("disqus_thread").children.length && setTimeout(function() {
            return window.disqusReset()
        },
        200)
    }
};