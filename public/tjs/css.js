define(["jquery"], function() {
	if (typeof window == "undefined") return {
		load: function(e, t, n) {
			n()
		}
	};
	var e = document.getElementsByTagName("head")[0],
		t = window.navigator.userAgent.match(/Trident\/([^ ;]*)|AppleWebKit\/([^ ;]*)|Opera\/([^ ;]*)|rv\:([^ ;]*)(.*?)Gecko\/([^ ;]*)|MSIE\s([^ ;]*)/) || 0,
		n = !1,
		r = !0;
	t[1] || t[7] ? n = parseInt(t[1]) < 6 || parseInt(t[7]) <= 9 : t[2] ? r = !1 : t[4] && (n = parseInt(t[4]) < 18);
	var i = {};
	i.pluginBuilder = "./css-builder";
	var s, o, u = function() {
			s = document.createElement("style"), e.appendChild(s), o = s.styleSheet || s.sheet
		},
		a = 0,
		f = [],
		l, c = function(e) {
			a++, a == 32 && (u(), a = 0), o.addImport(e), s.onload = function() {
				h()
			}
		},
		h = function() {
			l();
			var e = f.shift();
			if (!e) {
				l = null;
				return
			}
			l = e[1], c(e[0])
		},
		p = function(e, t) {
			(!o || !o.addImport) && u();
			if (o && o.addImport) l ? f.push([e, t]) : (c(e), l = t);
			else {
				s.textContent = '@import "' + e + '";';
				var n = setInterval(function() {
					try {
						s.sheet.cssRules, clearInterval(n), t()
					} catch (e) {}
				}, 10)
			}
		},
		d = function(t, n) {
			var i = document.createElement("link");
			i.type = "text/css", i.rel = "stylesheet";
			if (r) i.onload = function() {
				i.onload = function() {}, setTimeout(n, 7)
			};
			else var s = setInterval(function() {
				for (var e = 0; e < document.styleSheets.length; e++) {
					var t = document.styleSheets[e];
					if (t.href == i.href) return clearInterval(s), n()
				}
			}, 10);
			i.href = t, e.appendChild(i)
		};
	return i.normalize = function(e, t) {
		return e.substr(e.length - 4, 4) == ".css" && (e = e.substr(0, e.length - 4)), t(e)
	}, i.load = function(e, t, r, i) {
		(n ? p : d)(t.toUrl(e + ".css"), r)
	}, i
});