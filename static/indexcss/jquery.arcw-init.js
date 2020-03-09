! function (a) {
    a.fn.archivesCW = function (b) {
        return b && "object" != typeof b || (b = a.extend({}, a.fn.archivesCW.defaults, b)), this.each(function () {
            new $archivesCW(a(this), b)
        })
    }, $archivesCW = function (b, c) {
        var d = b.find(".calendar-navigation"),
            e = d.find(".menu"),
            f = parseInt(e.find("a.current").attr("rel")),
            g = d.find(".title"),
            h = d.find(".prev-year"),
            i = d.find(".next-year"),
            j = function (a) {
                g.html(a)
            },
            k = function () {
                f == n - 1 ? h.addClass("disabled") : h.removeClass("disabled"), 0 == f ? i.addClass("disabled") : i.removeClass("disabled")
            },
            l = function () {
                e.find("a.selected, a[rel=" + f + "]").toggleClass("selected");
                var a = e.find("a.selected").parent();
                e.css("top", -a.index() * parseInt(d.outerHeight()))
            },
            m = function (c, d) {
                var e = f;
                c < e ? a.isFunction(d.goNext) ? d.goNext(b, e, c) : a.fn.archivesCW.defaults.goNext(b, e, c) : a.isFunction(d.goPrev) ? d.goPrev(b, e, c) : a.fn.archivesCW.defaults.goPrev(b, e, c), f = c;
                var g = b.find(".menu a[rel=" + f + "]");
                b.find('a.title:not([href="#"])').attr("href", g.attr("href")), j(g.html()), k(), l()
            };
        d.find(".prev-year").on("click", function (b) {
            b.preventDefault(), a(this).is(".disabled") || m(f + 1, c)
        }), d.find(".next-year").on("click", function (b) {
            b.preventDefault(), a(this).is(".disabled") || m(f - 1, c)
        }), d.on("click", '.arrow-down, a.title[href="#"]', function (b) {
            b.preventDefault(), a.isFunction(c.showDropdown) && c.showDropdown(e)
        }), e.mouseleave(function () {
            var b = a(this);
            a(this).data("timer", setTimeout(function () {
                a.isFunction(c.hideDropdown) && c.hideDropdown(b)
            }, 300))
        }).mouseenter(function () {
            a(this).data("timer") && clearTimeout(a(this).data("timer"))
        }), e.find("a").on("click", function (b) {
            if (b.preventDefault(), !a(this).is(".selected")) {
                a(this).removeClass("selected");
                var d = parseInt(a(this).attr("rel"));
                m(d, c), a.isFunction(c.hideDropdown) && c.hideDropdown(e)
            }
        });
        var n = e.find("li").length;
        n <= 1 && d.find(".arrow-down").hide(), l(), k()
    }, a.fn.archivesCW.defaults = {
        goNext: function (a, b, c) {
            a.find(".year").css({
                "margin-left": "-100%",
                opacity: 1
            }), a.find(".year[rel=" + b + "]").css({
                "margin-left": 0,
                "z-index": 2
            }).animate({
                opacity: .5
            }, 300), a.find(".year[rel=" + c + "]").css({
                "z-index": 3
            }).animate({
                "margin-left": 0
            })
        },
        goPrev: function (a, b, c) {
            a.find(".year:not(.last)").css({
                "margin-left": "-100%",
                opacity: 1
            }), a.find(".year[rel=" + c + "]").css({
                "margin-left": 0,
                opacity: .3,
                "z-index": 2
            }).animate({
                opacity: 1
            }, 300), a.find(".year[rel=" + b + "]").css({
                "margin-left": 0,
                "z-index": 3
            }).animate({
                "margin-left": "-100%"
            })
        },
        showDropdown: function (a) {
            a.show()
        },
        hideDropdown: function (a) {
            a.hide()
        }
    }
}(jQuery), jQuery(function (a) {
    a(".calendar-archives").archivesCW()
});