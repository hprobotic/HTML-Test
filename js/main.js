new WOW().init();
var W1t = {
    'g': function(t, e) {
        return t > e;
    },
    'z': function(t, e) {
        return t == e;
    },
    'v': 'body',
    'K': '#menu-overlay',
    'X': "removeClass",
    'H': "removeAttr",
    'G2': "addClass",
    'A': function(t, e) {
        return t > e;
    },
    'l': function(t, e) {
        return t < e;
    },
    'L': function(t, e) {
        return t > e;
    },
    's': "ready",
    'E': "resize",
    'J': 'style'
};

function onTouch() {
    var t = 'acordion',
        e = '.havesub',
        c = 960,
        x = "width",
        p = "l";
    if (W1t[p]($(W1t.v)[x](), c)) {
        $(e)[W1t.G2](t);
    } else {
        $(e)[W1t.X](t);
        $(W1t.K)[W1t.H](W1t.J);
        $(W1t.v)[W1t.H](W1t.J);
    }
}
$(document)[W1t.s](function() {

    var D = ".navbar-toggle",
        U = "is",
        n = "click",
        C = '.stt1',
        M = '.acordion',
        w = "g",
        Z = "next",
        f = 'current',
        m = 3,
        d = 1,
        r = 4,
        i = 340,
        h = false,
        B = '1000',
        q = '.ulSliderProd',
        k = "A",
        T = '500',
        V = true,
        W = "bxSlider",
        R = 0,
        b = "length",
        S = '.fwSlider',
        a = "L";
    onTouch();
    if (W1t[a]($(S)[b], R)) {
        $(S)[W]({
            auto: V,
            speed: T,
            randomStart: V,
        });
    }
    if (W1t[k]($(q)[b], R)) {
        $(q)[W]({
            auto: V,
            speed: B,
            pager: h,
            slideWidth: i,
            maxSlides: r,
            moveSlides: d,
            minSlides: m,
            onSliderLoad: function() {
                var t = "eq",
                    e = '.ulSliderProd li:not(.bx-clone)';
                $(e)[t](d)[W1t.G2](f);
            },
            onSlideBefore: function($slideElement, e, c) {
                var x = '.ulSliderProd li';
                $(x)[W1t.X](f);
                $($slideElement)[Z]()[W1t.G2](f);
            }
        });
    }
    if (W1t[w]($(M)[b], R)) {
        $(C)[n](function() {
            var t = "slideDown",
                e = ':hidden',
                c = "z",
                x = 'normal',
                p = "slideUp",
                N = '.childnav',
                j = 'viewless',
                u = '.viewless';
            $(u)[W1t.X](j);
            $(N)[p](x);
            if (W1t[c]($(this)[Z](N)[U](e), V)) {
                $(this)[W1t.G2](j);
                $(this)[Z](N)[t](x);
            }
            return h;
        });
    }
    $(D)[n](function() {
        var t = "15px",
            e = "hidden",
            c = "fadeIn",
            x = "#menu-overlay",
            p = 'in',
            N = "animate",
            j = "0",
            u = "scroll",
            P = "relative",
            Y = "css",
            G = 300,
            Q = "fadeOut",
            O = ":visible",
            o = '.offcanvas';
        if ($(o)[U](O)) {
            $(W1t.K)[Q](G);
            $(W1t.v)[Y]({
                "position": P,
                "overflow-y": u,
                "padding-left": j
            })[N]({
                right: R
            });
            $(o)[W1t.X](p);
        } else {
            $(x)[c](G);
            $(W1t.v)[Y]({
                "position": P,
                "overflow": e,
                "padding-left": t
            })[N]({
                right: G
            });
            $(o)[W1t.G2](p);
            $(x)[n](function() {
                $(this)[Q](G);
                $(W1t.v)[W1t.H](W1t.J);
                $(o)[W1t.X](p);
            });
        }
    });
});
$(window)[W1t.E](function() {
    onTouch();
});
