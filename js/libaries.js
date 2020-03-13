/*!
 * Bootstrap v3.3.1 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");+function (a) {
  var b = a.fn.jquery.split(" ")[0].split(".");if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher");
}(jQuery), +function (a) {
  "use strict";
  function b() {
    var a = document.createElement("bootstrap"),
        b = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" };for (var c in b) if (void 0 !== a.style[c]) return { end: b[c] };return !1;
  }a.fn.emulateTransitionEnd = function (b) {
    var c = !1,
        d = this;a(this).one("bsTransitionEnd", function () {
      c = !0;
    });var e = function () {
      c || a(d).trigger(a.support.transition.end);
    };return setTimeout(e, b), this;
  }, a(function () {
    a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = { bindType: a.support.transition.end, delegateType: a.support.transition.end, handle: function (b) {
        return a(b.target).is(this) ? b.handleObj.handler.apply(this, arguments) : void 0;
      } });
  });
}(jQuery), +function (a) {
  "use strict";
  function b(b) {
    return this.each(function () {
      var c = a(this),
          e = c.data("bs.alert");e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c);
    });
  }var c = '[data-dismiss="alert"]',
      d = function (b) {
    a(b).on("click", c, this.close);
  };d.VERSION = "3.3.1", d.TRANSITION_DURATION = 150, d.prototype.close = function (b) {
    function c() {
      g.detach().trigger("closed.bs.alert").remove();
    }var e = a(this),
        f = e.attr("data-target");f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, ""));var g = a(f);b && b.preventDefault(), g.length || (g = e.closest(".alert")), g.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (g.removeClass("in"), a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c());
  };var e = a.fn.alert;a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function () {
    return a.fn.alert = e, this;
  }, a(document).on("click.bs.alert.data-api", c, d.prototype.close);
}(jQuery), +function (a) {
  "use strict";
  function b(b) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.button"),
          f = "object" == typeof b && b;e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b);
    });
  }var c = function (b, d) {
    this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1;
  };c.VERSION = "3.3.1", c.DEFAULTS = { loadingText: "loading..." }, c.prototype.setState = function (b) {
    var c = "disabled",
        d = this.$element,
        e = d.is("input") ? "val" : "html",
        f = d.data();b += "Text", null == f.resetText && d.data("resetText", d[e]()), setTimeout(a.proxy(function () {
      d[e](null == f[b] ? this.options[b] : f[b]), "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c));
    }, this), 0);
  }, c.prototype.toggle = function () {
    var a = !0,
        b = this.$element.closest('[data-toggle="buttons"]');if (b.length) {
      var c = this.$element.find("input");"radio" == c.prop("type") && (c.prop("checked") && this.$element.hasClass("active") ? a = !1 : b.find(".active").removeClass("active")), a && c.prop("checked", !this.$element.hasClass("active")).trigger("change");
    } else this.$element.attr("aria-pressed", !this.$element.hasClass("active"));a && this.$element.toggleClass("active");
  };var d = a.fn.button;a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function () {
    return a.fn.button = d, this;
  }, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (c) {
    var d = a(c.target);d.hasClass("btn") || (d = d.closest(".btn")), b.call(d, "toggle"), c.preventDefault();
  }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (b) {
    a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type));
  });
}(jQuery), +function (a) {
  "use strict";
  function b(b) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.carousel"),
          f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b),
          g = "string" == typeof b ? b : f.slide;e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle();
    });
  }var c = function (b, c) {
    this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, this.paused = this.sliding = this.interval = this.$active = this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this));
  };c.VERSION = "3.3.1", c.TRANSITION_DURATION = 600, c.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0, keyboard: !0 }, c.prototype.keydown = function (a) {
    if (!/input|textarea/i.test(a.target.tagName)) {
      switch (a.which) {case 37:
          this.prev();break;case 39:
          this.next();break;default:
          return;}a.preventDefault();
    }
  }, c.prototype.cycle = function (b) {
    return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this;
  }, c.prototype.getItemIndex = function (a) {
    return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active);
  }, c.prototype.getItemForDirection = function (a, b) {
    var c = "prev" == a ? -1 : 1,
        d = this.getItemIndex(b),
        e = (d + c) % this.$items.length;return this.$items.eq(e);
  }, c.prototype.to = function (a) {
    var b = this,
        c = this.getItemIndex(this.$active = this.$element.find(".item.active"));return a > this.$items.length - 1 || 0 > a ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function () {
      b.to(a);
    }) : c == a ? this.pause().cycle() : this.slide(a > c ? "next" : "prev", this.$items.eq(a));
  }, c.prototype.pause = function (b) {
    return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this;
  }, c.prototype.next = function () {
    return this.sliding ? void 0 : this.slide("next");
  }, c.prototype.prev = function () {
    return this.sliding ? void 0 : this.slide("prev");
  }, c.prototype.slide = function (b, d) {
    var e = this.$element.find(".item.active"),
        f = d || this.getItemForDirection(b, e),
        g = this.interval,
        h = "next" == b ? "left" : "right",
        i = "next" == b ? "first" : "last",
        j = this;if (!f.length) {
      if (!this.options.wrap) return;f = this.$element.find(".item")[i]();
    }if (f.hasClass("active")) return this.sliding = !1;var k = f[0],
        l = a.Event("slide.bs.carousel", { relatedTarget: k, direction: h });if (this.$element.trigger(l), !l.isDefaultPrevented()) {
      if (this.sliding = !0, g && this.pause(), this.$indicators.length) {
        this.$indicators.find(".active").removeClass("active");var m = a(this.$indicators.children()[this.getItemIndex(f)]);m && m.addClass("active");
      }var n = a.Event("slid.bs.carousel", { relatedTarget: k, direction: h });return a.support.transition && this.$element.hasClass("slide") ? (f.addClass(b), f[0].offsetWidth, e.addClass(h), f.addClass(h), e.one("bsTransitionEnd", function () {
        f.removeClass([b, h].join(" ")).addClass("active"), e.removeClass(["active", h].join(" ")), j.sliding = !1, setTimeout(function () {
          j.$element.trigger(n);
        }, 0);
      }).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e.removeClass("active"), f.addClass("active"), this.sliding = !1, this.$element.trigger(n)), g && this.cycle(), this;
    }
  };var d = a.fn.carousel;a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function () {
    return a.fn.carousel = d, this;
  };var e = function (c) {
    var d,
        e = a(this),
        f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));if (f.hasClass("carousel")) {
      var g = a.extend({}, f.data(), e.data()),
          h = e.attr("data-slide-to");h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault();
    }
  };a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), a(window).on("load", function () {
    a('[data-ride="carousel"]').each(function () {
      var c = a(this);b.call(c, c.data());
    });
  });
}(jQuery), +function (a) {
  "use strict";
  function b(b) {
    var c,
        d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "");return a(d);
  }function c(b) {
    return this.each(function () {
      var c = a(this),
          e = c.data("bs.collapse"),
          f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);!e && f.toggle && "show" == b && (f.toggle = !1), e || c.data("bs.collapse", e = new d(this, f)), "string" == typeof b && e[b]();
    });
  }var d = function (b, c) {
    this.$element = a(b), this.options = a.extend({}, d.DEFAULTS, c), this.$trigger = a(this.options.trigger).filter('[href="#' + b.id + '"], [data-target="#' + b.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle();
  };d.VERSION = "3.3.1", d.TRANSITION_DURATION = 350, d.DEFAULTS = { toggle: !0, trigger: '[data-toggle="collapse"]' }, d.prototype.dimension = function () {
    var a = this.$element.hasClass("width");return a ? "width" : "height";
  }, d.prototype.show = function () {
    if (!this.transitioning && !this.$element.hasClass("in")) {
      var b,
          e = this.$parent && this.$parent.find("> .panel").children(".in, .collapsing");if (!(e && e.length && (b = e.data("bs.collapse"), b && b.transitioning))) {
        var f = a.Event("show.bs.collapse");if (this.$element.trigger(f), !f.isDefaultPrevented()) {
          e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null));var g = this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;var h = function () {
            this.$element.removeClass("collapsing").addClass("collapse in")[g](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse");
          };if (!a.support.transition) return h.call(this);var i = a.camelCase(["scroll", g].join("-"));this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i]);
        }
      }
    }
  }, d.prototype.hide = function () {
    if (!this.transitioning && this.$element.hasClass("in")) {
      var b = a.Event("hide.bs.collapse");if (this.$element.trigger(b), !b.isDefaultPrevented()) {
        var c = this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;var e = function () {
          this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse");
        };return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this);
      }
    }
  }, d.prototype.toggle = function () {
    this[this.$element.hasClass("in") ? "hide" : "show"]();
  }, d.prototype.getParent = function () {
    return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function (c, d) {
      var e = a(d);this.addAriaAndCollapsedClass(b(e), e);
    }, this)).end();
  }, d.prototype.addAriaAndCollapsedClass = function (a, b) {
    var c = a.hasClass("in");a.attr("aria-expanded", c), b.toggleClass("collapsed", !c).attr("aria-expanded", c);
  };var e = a.fn.collapse;a.fn.collapse = c, a.fn.collapse.Constructor = d, a.fn.collapse.noConflict = function () {
    return a.fn.collapse = e, this;
  }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (d) {
    var e = a(this);e.attr("data-target") || d.preventDefault();var f = b(e),
        g = f.data("bs.collapse"),
        h = g ? "toggle" : a.extend({}, e.data(), { trigger: this });c.call(f, h);
  });
}(jQuery), +function (a) {
  "use strict";
  function b(b) {
    b && 3 === b.which || (a(e).remove(), a(f).each(function () {
      var d = a(this),
          e = c(d),
          f = { relatedTarget: this };e.hasClass("open") && (e.trigger(b = a.Event("hide.bs.dropdown", f)), b.isDefaultPrevented() || (d.attr("aria-expanded", "false"), e.removeClass("open").trigger("hidden.bs.dropdown", f)));
    }));
  }function c(b) {
    var c = b.attr("data-target");c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));var d = c && a(c);return d && d.length ? d : b.parent();
  }function d(b) {
    return this.each(function () {
      var c = a(this),
          d = c.data("bs.dropdown");d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c);
    });
  }var e = ".dropdown-backdrop",
      f = '[data-toggle="dropdown"]',
      g = function (b) {
    a(b).on("click.bs.dropdown", this.toggle);
  };g.VERSION = "3.3.1", g.prototype.toggle = function (d) {
    var e = a(this);if (!e.is(".disabled, :disabled")) {
      var f = c(e),
          g = f.hasClass("open");if (b(), !g) {
        "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click", b);var h = { relatedTarget: this };if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return;e.trigger("focus").attr("aria-expanded", "true"), f.toggleClass("open").trigger("shown.bs.dropdown", h);
      }return !1;
    }
  }, g.prototype.keydown = function (b) {
    if (/(38|40|27|32)/.test(b.which) && !/input|textarea/i.test(b.target.tagName)) {
      var d = a(this);if (b.preventDefault(), b.stopPropagation(), !d.is(".disabled, :disabled")) {
        var e = c(d),
            g = e.hasClass("open");if (!g && 27 != b.which || g && 27 == b.which) return 27 == b.which && e.find(f).trigger("focus"), d.trigger("click");var h = " li:not(.divider):visible a",
            i = e.find('[role="menu"]' + h + ', [role="listbox"]' + h);if (i.length) {
          var j = i.index(b.target);38 == b.which && j > 0 && j--, 40 == b.which && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus");
        }
      }
    }
  };var h = a.fn.dropdown;a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function () {
    return a.fn.dropdown = h, this;
  }, a(document).on("click.bs.dropdown.data-api", b).on("click.bs.dropdown.data-api", ".dropdown form", function (a) {
    a.stopPropagation();
  }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="menu"]', g.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="listbox"]', g.prototype.keydown);
}(jQuery), +function (a) {
  "use strict";
  function b(b, d) {
    return this.each(function () {
      var e = a(this),
          f = e.data("bs.modal"),
          g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d);
    });
  }var c = function (b, c) {
    this.options = c, this.$body = a(document.body), this.$element = a(b), this.$backdrop = this.isShown = null, this.scrollbarWidth = 0, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function () {
      this.$element.trigger("loaded.bs.modal");
    }, this));
  };c.VERSION = "3.3.1", c.TRANSITION_DURATION = 300, c.BACKDROP_TRANSITION_DURATION = 150, c.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }, c.prototype.toggle = function (a) {
    return this.isShown ? this.hide() : this.show(a);
  }, c.prototype.show = function (b) {
    var d = this,
        e = a.Event("show.bs.modal", { relatedTarget: b });this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.backdrop(function () {
      var e = a.support.transition && d.$element.hasClass("fade");d.$element.parent().length || d.$element.appendTo(d.$body), d.$element.show().scrollTop(0), d.options.backdrop && d.adjustBackdrop(), d.adjustDialog(), e && d.$element[0].offsetWidth, d.$element.addClass("in").attr("aria-hidden", !1), d.enforceFocus();var f = a.Event("shown.bs.modal", { relatedTarget: b });e ? d.$element.find(".modal-dialog").one("bsTransitionEnd", function () {
        d.$element.trigger("focus").trigger(f);
      }).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f);
    }));
  }, c.prototype.hide = function (b) {
    b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal());
  }, c.prototype.enforceFocus = function () {
    a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function (a) {
      this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus");
    }, this));
  }, c.prototype.escape = function () {
    this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function (a) {
      27 == a.which && this.hide();
    }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal");
  }, c.prototype.resize = function () {
    this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal");
  }, c.prototype.hideModal = function () {
    var a = this;this.$element.hide(), this.backdrop(function () {
      a.$body.removeClass("modal-open"), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger("hidden.bs.modal");
    });
  }, c.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove(), this.$backdrop = null;
  }, c.prototype.backdrop = function (b) {
    var d = this,
        e = this.$element.hasClass("fade") ? "fade" : "";if (this.isShown && this.options.backdrop) {
      var f = a.support.transition && e;if (this.$backdrop = a('<div class="modal-backdrop ' + e + '" />').prependTo(this.$element).on("click.dismiss.bs.modal", a.proxy(function (a) {
        a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this));
      }, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b();
    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass("in");var g = function () {
        d.removeBackdrop(), b && b();
      };a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g();
    } else b && b();
  }, c.prototype.handleUpdate = function () {
    this.options.backdrop && this.adjustBackdrop(), this.adjustDialog();
  }, c.prototype.adjustBackdrop = function () {
    this.$backdrop.css("height", 0).css("height", this.$element[0].scrollHeight);
  }, c.prototype.adjustDialog = function () {
    var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;this.$element.css({ paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "", paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : "" });
  }, c.prototype.resetAdjustments = function () {
    this.$element.css({ paddingLeft: "", paddingRight: "" });
  }, c.prototype.checkScrollbar = function () {
    this.bodyIsOverflowing = document.body.scrollHeight > document.documentElement.clientHeight, this.scrollbarWidth = this.measureScrollbar();
  }, c.prototype.setScrollbar = function () {
    var a = parseInt(this.$body.css("padding-right") || 0, 10);this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth);
  }, c.prototype.resetScrollbar = function () {
    this.$body.css("padding-right", "");
  }, c.prototype.measureScrollbar = function () {
    var a = document.createElement("div");a.className = "modal-scrollbar-measure", this.$body.append(a);var b = a.offsetWidth - a.clientWidth;return this.$body[0].removeChild(a), b;
  };var d = a.fn.modal;a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function () {
    return a.fn.modal = d, this;
  }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (c) {
    var d = a(this),
        e = d.attr("href"),
        f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")),
        g = f.data("bs.modal") ? "toggle" : a.extend({ remote: !/#/.test(e) && e }, f.data(), d.data());d.is("a") && c.preventDefault(), f.one("show.bs.modal", function (a) {
      a.isDefaultPrevented() || f.one("hidden.bs.modal", function () {
        d.is(":visible") && d.trigger("focus");
      });
    }), b.call(f, g, this);
  });
}(jQuery), +function (a) {
  "use strict";
  function b(b) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.tooltip"),
          f = "object" == typeof b && b,
          g = f && f.selector;(e || "destroy" != b) && (g ? (e || d.data("bs.tooltip", e = {}), e[g] || (e[g] = new c(this, f))) : e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]());
    });
  }var c = function (a, b) {
    this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", a, b);
  };c.VERSION = "3.3.1", c.TRANSITION_DURATION = 150, c.DEFAULTS = { animation: !0, placement: "top", selector: !1, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, container: !1, viewport: { selector: "body", padding: 0 } }, c.prototype.init = function (b, c, d) {
    this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(this.options.viewport.selector || this.options.viewport);for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
      var g = e[f];if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));else if ("manual" != g) {
        var h = "hover" == g ? "mouseenter" : "focusin",
            i = "hover" == g ? "mouseleave" : "focusout";this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this));
      }
    }this.options.selector ? this._options = a.extend({}, this.options, { trigger: "manual", selector: "" }) : this.fixTitle();
  }, c.prototype.getDefaults = function () {
    return c.DEFAULTS;
  }, c.prototype.getOptions = function (b) {
    return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = { show: b.delay, hide: b.delay }), b;
  }, c.prototype.getDelegateOptions = function () {
    var b = {},
        c = this.getDefaults();return this._options && a.each(this._options, function (a, d) {
      c[a] != d && (b[a] = d);
    }), b;
  }, c.prototype.enter = function (b) {
    var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);return c && c.$tip && c.$tip.is(":visible") ? void (c.hoverState = "in") : (c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void (c.timeout = setTimeout(function () {
      "in" == c.hoverState && c.show();
    }, c.options.delay.show)) : c.show());
  }, c.prototype.leave = function (b) {
    var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void (c.timeout = setTimeout(function () {
      "out" == c.hoverState && c.hide();
    }, c.options.delay.hide)) : c.hide();
  }, c.prototype.show = function () {
    var b = a.Event("show.bs." + this.type);if (this.hasContent() && this.enabled) {
      this.$element.trigger(b);var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);if (b.isDefaultPrevented() || !d) return;var e = this,
          f = this.tip(),
          g = this.getUID(this.type);this.setContent(), f.attr("id", g), this.$element.attr("aria-describedby", g), this.options.animation && f.addClass("fade");var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement,
          i = /\s?auto?\s?/i,
          j = i.test(h);j && (h = h.replace(i, "") || "top"), f.detach().css({ top: 0, left: 0, display: "block" }).addClass(h).data("bs." + this.type, this), this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element);var k = this.getPosition(),
          l = f[0].offsetWidth,
          m = f[0].offsetHeight;if (j) {
        var n = h,
            o = this.options.container ? a(this.options.container) : this.$element.parent(),
            p = this.getPosition(o);h = "bottom" == h && k.bottom + m > p.bottom ? "top" : "top" == h && k.top - m < p.top ? "bottom" : "right" == h && k.right + l > p.width ? "left" : "left" == h && k.left - l < p.left ? "right" : h, f.removeClass(n).addClass(h);
      }var q = this.getCalculatedOffset(h, k, l, m);this.applyPlacement(q, h);var r = function () {
        var a = e.hoverState;e.$element.trigger("shown.bs." + e.type), e.hoverState = null, "out" == a && e.leave(e);
      };a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", r).emulateTransitionEnd(c.TRANSITION_DURATION) : r();
    }
  }, c.prototype.applyPlacement = function (b, c) {
    var d = this.tip(),
        e = d[0].offsetWidth,
        f = d[0].offsetHeight,
        g = parseInt(d.css("margin-top"), 10),
        h = parseInt(d.css("margin-left"), 10);isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top = b.top + g, b.left = b.left + h, a.offset.setOffset(d[0], a.extend({ using: function (a) {
        d.css({ top: Math.round(a.top), left: Math.round(a.left) });
      } }, b), 0), d.addClass("in");var i = d[0].offsetWidth,
        j = d[0].offsetHeight;"top" == c && j != f && (b.top = b.top + f - j);var k = this.getViewportAdjustedDelta(c, b, i, j);k.left ? b.left += k.left : b.top += k.top;var l = /top|bottom/.test(c),
        m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
        n = l ? "offsetWidth" : "offsetHeight";d.offset(b), this.replaceArrow(m, d[0][n], l);
  }, c.prototype.replaceArrow = function (a, b, c) {
    this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "");
  }, c.prototype.setContent = function () {
    var a = this.tip(),
        b = this.getTitle();a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right");
  }, c.prototype.hide = function (b) {
    function d() {
      "in" != e.hoverState && f.detach(), e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), b && b();
    }var e = this,
        f = this.tip(),
        g = a.Event("hide.bs." + this.type);return this.$element.trigger(g), g.isDefaultPrevented() ? void 0 : (f.removeClass("in"), a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(), this.hoverState = null, this);
  }, c.prototype.fixTitle = function () {
    var a = this.$element;(a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "");
  }, c.prototype.hasContent = function () {
    return this.getTitle();
  }, c.prototype.getPosition = function (b) {
    b = b || this.$element;var c = b[0],
        d = "BODY" == c.tagName,
        e = c.getBoundingClientRect();null == e.width && (e = a.extend({}, e, { width: e.right - e.left, height: e.bottom - e.top }));var f = d ? { top: 0, left: 0 } : b.offset(),
        g = { scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop() },
        h = d ? { width: a(window).width(), height: a(window).height() } : null;return a.extend({}, e, g, h, f);
  }, c.prototype.getCalculatedOffset = function (a, b, c, d) {
    return "bottom" == a ? { top: b.top + b.height, left: b.left + b.width / 2 - c / 2 } : "top" == a ? { top: b.top - d, left: b.left + b.width / 2 - c / 2 } : "left" == a ? { top: b.top + b.height / 2 - d / 2, left: b.left - c } : { top: b.top + b.height / 2 - d / 2, left: b.left + b.width };
  }, c.prototype.getViewportAdjustedDelta = function (a, b, c, d) {
    var e = { top: 0, left: 0 };if (!this.$viewport) return e;var f = this.options.viewport && this.options.viewport.padding || 0,
        g = this.getPosition(this.$viewport);if (/right|left/.test(a)) {
      var h = b.top - f - g.scroll,
          i = b.top + f - g.scroll + d;h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i);
    } else {
      var j = b.left - f,
          k = b.left + f + c;j < g.left ? e.left = g.left - j : k > g.width && (e.left = g.left + g.width - k);
    }return e;
  }, c.prototype.getTitle = function () {
    var a,
        b = this.$element,
        c = this.options;return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title);
  }, c.prototype.getUID = function (a) {
    do a += ~~(1e6 * Math.random()); while (document.getElementById(a));return a;
  }, c.prototype.tip = function () {
    return this.$tip = this.$tip || a(this.options.template);
  }, c.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow");
  }, c.prototype.enable = function () {
    this.enabled = !0;
  }, c.prototype.disable = function () {
    this.enabled = !1;
  }, c.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled;
  }, c.prototype.toggle = function (b) {
    var c = this;b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), c.tip().hasClass("in") ? c.leave(c) : c.enter(c);
  }, c.prototype.destroy = function () {
    var a = this;clearTimeout(this.timeout), this.hide(function () {
      a.$element.off("." + a.type).removeData("bs." + a.type);
    });
  };var d = a.fn.tooltip;a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function () {
    return a.fn.tooltip = d, this;
  };
}(jQuery), +function (a) {
  "use strict";
  function b(b) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.popover"),
          f = "object" == typeof b && b,
          g = f && f.selector;(e || "destroy" != b) && (g ? (e || d.data("bs.popover", e = {}), e[g] || (e[g] = new c(this, f))) : e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]());
    });
  }var c = function (a, b) {
    this.init("popover", a, b);
  };if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");c.VERSION = "3.3.1", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>' }), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function () {
    return c.DEFAULTS;
  }, c.prototype.setContent = function () {
    var a = this.tip(),
        b = this.getTitle(),
        c = this.getContent();a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide();
  }, c.prototype.hasContent = function () {
    return this.getTitle() || this.getContent();
  }, c.prototype.getContent = function () {
    var a = this.$element,
        b = this.options;return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content);
  }, c.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find(".arrow");
  }, c.prototype.tip = function () {
    return this.$tip || (this.$tip = a(this.options.template)), this.$tip;
  };var d = a.fn.popover;a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function () {
    return a.fn.popover = d, this;
  };
}(jQuery), +function (a) {
  "use strict";
  function b(c, d) {
    var e = a.proxy(this.process, this);this.$body = a("body"), this.$scrollElement = a(a(c).is("body") ? window : c), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", e), this.refresh(), this.process();
  }function c(c) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.scrollspy"),
          f = "object" == typeof c && c;e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]();
    });
  }b.VERSION = "3.3.1", b.DEFAULTS = { offset: 10 }, b.prototype.getScrollHeight = function () {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight);
  }, b.prototype.refresh = function () {
    var b = "offset",
        c = 0;a.isWindow(this.$scrollElement[0]) || (b = "position", c = this.$scrollElement.scrollTop()), this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight();var d = this;this.$body.find(this.selector).map(function () {
      var d = a(this),
          e = d.data("target") || d.attr("href"),
          f = /^#./.test(e) && a(e);return f && f.length && f.is(":visible") && [[f[b]().top + c, e]] || null;
    }).sort(function (a, b) {
      return a[0] - b[0];
    }).each(function () {
      d.offsets.push(this[0]), d.targets.push(this[1]);
    });
  }, b.prototype.process = function () {
    var a,
        b = this.$scrollElement.scrollTop() + this.options.offset,
        c = this.getScrollHeight(),
        d = this.options.offset + c - this.$scrollElement.height(),
        e = this.offsets,
        f = this.targets,
        g = this.activeTarget;if (this.scrollHeight != c && this.refresh(), b >= d) return g != (a = f[f.length - 1]) && this.activate(a);if (g && b < e[0]) return this.activeTarget = null, this.clear();for (a = e.length; a--;) g != f[a] && b >= e[a] && (!e[a + 1] || b <= e[a + 1]) && this.activate(f[a]);
  }, b.prototype.activate = function (b) {
    this.activeTarget = b, this.clear();var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
        d = a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy");
  }, b.prototype.clear = function () {
    a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
  };var d = a.fn.scrollspy;a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function () {
    return a.fn.scrollspy = d, this;
  }, a(window).on("load.bs.scrollspy.data-api", function () {
    a('[data-spy="scroll"]').each(function () {
      var b = a(this);c.call(b, b.data());
    });
  });
}(jQuery), +function (a) {
  "use strict";
  function b(b) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.tab");e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]();
    });
  }var c = function (b) {
    this.element = a(b);
  };c.VERSION = "3.3.1", c.TRANSITION_DURATION = 150, c.prototype.show = function () {
    var b = this.element,
        c = b.closest("ul:not(.dropdown-menu)"),
        d = b.data("target");if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
      var e = c.find(".active:last a"),
          f = a.Event("hide.bs.tab", { relatedTarget: b[0] }),
          g = a.Event("show.bs.tab", { relatedTarget: e[0] });if (e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented()) {
        var h = a(d);this.activate(b.closest("li"), c), this.activate(h, h.parent(), function () {
          e.trigger({ type: "hidden.bs.tab", relatedTarget: b[0] }), b.trigger({ type: "shown.bs.tab", relatedTarget: e[0] });
        });
      }
    }
  }, c.prototype.activate = function (b, d, e) {
    function f() {
      g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu") && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), e && e();
    }var g = d.find("> .active"),
        h = e && a.support.transition && (g.length && g.hasClass("fade") || !!d.find("> .fade").length);g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(), g.removeClass("in");
  };var d = a.fn.tab;a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function () {
    return a.fn.tab = d, this;
  };var e = function (c) {
    c.preventDefault(), b.call(a(this), "show");
  };a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e);
}(jQuery), +function (a) {
  "use strict";
  function b(b) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.affix"),
          f = "object" == typeof b && b;e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]();
    });
  }var c = function (b, d) {
    this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(b), this.affixed = this.unpin = this.pinnedOffset = null, this.checkPosition();
  };c.VERSION = "3.3.1", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = { offset: 0, target: window }, c.prototype.getState = function (a, b, c, d) {
    var e = this.$target.scrollTop(),
        f = this.$element.offset(),
        g = this.$target.height();if (null != c && "top" == this.affixed) return c > e ? "top" : !1;if ("bottom" == this.affixed) return null != c ? e + this.unpin <= f.top ? !1 : "bottom" : a - d >= e + g ? !1 : "bottom";var h = null == this.affixed,
        i = h ? e : f.top,
        j = h ? g : b;return null != c && c >= i ? "top" : null != d && i + j >= a - d ? "bottom" : !1;
  }, c.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset) return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a = this.$target.scrollTop(),
        b = this.$element.offset();return this.pinnedOffset = b.top - a;
  }, c.prototype.checkPositionWithEventLoop = function () {
    setTimeout(a.proxy(this.checkPosition, this), 1);
  }, c.prototype.checkPosition = function () {
    if (this.$element.is(":visible")) {
      var b = this.$element.height(),
          d = this.options.offset,
          e = d.top,
          f = d.bottom,
          g = a("body").height();"object" != typeof d && (f = e = d), "function" == typeof e && (e = d.top(this.$element)), "function" == typeof f && (f = d.bottom(this.$element));var h = this.getState(g, b, e, f);if (this.affixed != h) {
        null != this.unpin && this.$element.css("top", "");var i = "affix" + (h ? "-" + h : ""),
            j = a.Event(i + ".bs.affix");if (this.$element.trigger(j), j.isDefaultPrevented()) return;this.affixed = h, this.unpin = "bottom" == h ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed") + ".bs.affix");
      }"bottom" == h && this.$element.offset({ top: g - b - f });
    }
  };var d = a.fn.affix;a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function () {
    return a.fn.affix = d, this;
  }, a(window).on("load", function () {
    a('[data-spy="affix"]').each(function () {
      var c = a(this),
          d = c.data();d.offset = d.offset || {}, null != d.offsetBottom && (d.offset.bottom = d.offsetBottom), null != d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d);
    });
  });
}(jQuery);
/*
 * cond - v0.1 - 6/10/2009
 * http://benalman.com/projects/jquery-cond-plugin/
 * 
 * Copyright (c) 2009 "Cowboy" Ben Alman
 * Licensed under the MIT license
 * http://benalman.com/about/license/
 * 
 * Based on suggestions and sample code by Stephen Band and DBJDBJ in the
 * jquery-dev Google group: http://bit.ly/jqba1
 */
(function ($) {
  $.fn.cond = function () {
    var e,
        a = arguments,
        b = 0,
        f,
        d,
        c;while (!f && b < a.length) {
      f = a[b++];d = a[b++];f = $.isFunction(f) ? f.call(this) : f;c = !d ? f : f ? d.call(this, f) : e;
    }return c !== e ? c : this;
  };
})(jQuery);
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Â© 2001 Robert Penner
 * All rights reserved.
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Â© 2008 George McGinley Smith
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/
jQuery.easing.jswing = jQuery.easing.swing;jQuery.extend(jQuery.easing, { def: "easeOutQuad", swing: function (e, f, a, h, g) {
    return jQuery.easing[jQuery.easing.def](e, f, a, h, g);
  }, easeInQuad: function (e, f, a, h, g) {
    return h * (f /= g) * f + a;
  }, easeOutQuad: function (e, f, a, h, g) {
    return -h * (f /= g) * (f - 2) + a;
  }, easeInOutQuad: function (e, f, a, h, g) {
    if ((f /= g / 2) < 1) {
      return h / 2 * f * f + a;
    }return -h / 2 * (--f * (f - 2) - 1) + a;
  }, easeInCubic: function (e, f, a, h, g) {
    return h * (f /= g) * f * f + a;
  }, easeOutCubic: function (e, f, a, h, g) {
    return h * ((f = f / g - 1) * f * f + 1) + a;
  }, easeInOutCubic: function (e, f, a, h, g) {
    if ((f /= g / 2) < 1) {
      return h / 2 * f * f * f + a;
    }return h / 2 * ((f -= 2) * f * f + 2) + a;
  }, easeInQuart: function (e, f, a, h, g) {
    return h * (f /= g) * f * f * f + a;
  }, easeOutQuart: function (e, f, a, h, g) {
    return -h * ((f = f / g - 1) * f * f * f - 1) + a;
  }, easeInOutQuart: function (e, f, a, h, g) {
    if ((f /= g / 2) < 1) {
      return h / 2 * f * f * f * f + a;
    }return -h / 2 * ((f -= 2) * f * f * f - 2) + a;
  }, easeInQuint: function (e, f, a, h, g) {
    return h * (f /= g) * f * f * f * f + a;
  }, easeOutQuint: function (e, f, a, h, g) {
    return h * ((f = f / g - 1) * f * f * f * f + 1) + a;
  }, easeInOutQuint: function (e, f, a, h, g) {
    if ((f /= g / 2) < 1) {
      return h / 2 * f * f * f * f * f + a;
    }return h / 2 * ((f -= 2) * f * f * f * f + 2) + a;
  }, easeInSine: function (e, f, a, h, g) {
    return -h * Math.cos(f / g * (Math.PI / 2)) + h + a;
  }, easeOutSine: function (e, f, a, h, g) {
    return h * Math.sin(f / g * (Math.PI / 2)) + a;
  }, easeInOutSine: function (e, f, a, h, g) {
    return -h / 2 * (Math.cos(Math.PI * f / g) - 1) + a;
  }, easeInExpo: function (e, f, a, h, g) {
    return f == 0 ? a : h * Math.pow(2, 10 * (f / g - 1)) + a;
  }, easeOutExpo: function (e, f, a, h, g) {
    return f == g ? a + h : h * (-Math.pow(2, -10 * f / g) + 1) + a;
  }, easeInOutExpo: function (e, f, a, h, g) {
    if (f == 0) {
      return a;
    }if (f == g) {
      return a + h;
    }if ((f /= g / 2) < 1) {
      return h / 2 * Math.pow(2, 10 * (f - 1)) + a;
    }return h / 2 * (-Math.pow(2, -10 * --f) + 2) + a;
  }, easeInCirc: function (e, f, a, h, g) {
    return -h * (Math.sqrt(1 - (f /= g) * f) - 1) + a;
  }, easeOutCirc: function (e, f, a, h, g) {
    return h * Math.sqrt(1 - (f = f / g - 1) * f) + a;
  }, easeInOutCirc: function (e, f, a, h, g) {
    if ((f /= g / 2) < 1) {
      return -h / 2 * (Math.sqrt(1 - f * f) - 1) + a;
    }return h / 2 * (Math.sqrt(1 - (f -= 2) * f) + 1) + a;
  }, easeInElastic: function (f, h, e, l, k) {
    var i = 1.70158;var j = 0;var g = l;if (h == 0) {
      return e;
    }if ((h /= k) == 1) {
      return e + l;
    }if (!j) {
      j = k * 0.3;
    }if (g < Math.abs(l)) {
      g = l;var i = j / 4;
    } else {
      var i = j / (2 * Math.PI) * Math.asin(l / g);
    }return -(g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e;
  }, easeOutElastic: function (f, h, e, l, k) {
    var i = 1.70158;var j = 0;var g = l;if (h == 0) {
      return e;
    }if ((h /= k) == 1) {
      return e + l;
    }if (!j) {
      j = k * 0.3;
    }if (g < Math.abs(l)) {
      g = l;var i = j / 4;
    } else {
      var i = j / (2 * Math.PI) * Math.asin(l / g);
    }return g * Math.pow(2, -10 * h) * Math.sin((h * k - i) * (2 * Math.PI) / j) + l + e;
  }, easeInOutElastic: function (f, h, e, l, k) {
    var i = 1.70158;var j = 0;var g = l;if (h == 0) {
      return e;
    }if ((h /= k / 2) == 2) {
      return e + l;
    }if (!j) {
      j = k * (0.3 * 1.5);
    }if (g < Math.abs(l)) {
      g = l;var i = j / 4;
    } else {
      var i = j / (2 * Math.PI) * Math.asin(l / g);
    }if (h < 1) {
      return -0.5 * (g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e;
    }return g * Math.pow(2, -10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j) * 0.5 + l + e;
  }, easeInBack: function (e, f, a, i, h, g) {
    if (g == undefined) {
      g = 1.70158;
    }return i * (f /= h) * f * ((g + 1) * f - g) + a;
  }, easeOutBack: function (e, f, a, i, h, g) {
    if (g == undefined) {
      g = 1.70158;
    }return i * ((f = f / h - 1) * f * ((g + 1) * f + g) + 1) + a;
  }, easeInOutBack: function (e, f, a, i, h, g) {
    if (g == undefined) {
      g = 1.70158;
    }if ((f /= h / 2) < 1) {
      return i / 2 * (f * f * (((g *= 1.525) + 1) * f - g)) + a;
    }return i / 2 * ((f -= 2) * f * (((g *= 1.525) + 1) * f + g) + 2) + a;
  }, easeInBounce: function (e, f, a, h, g) {
    return h - jQuery.easing.easeOutBounce(e, g - f, 0, h, g) + a;
  }, easeOutBounce: function (e, f, a, h, g) {
    if ((f /= g) < 1 / 2.75) {
      return h * (7.5625 * f * f) + a;
    } else {
      if (f < 2 / 2.75) {
        return h * (7.5625 * (f -= 1.5 / 2.75) * f + 0.75) + a;
      } else {
        if (f < 2.5 / 2.75) {
          return h * (7.5625 * (f -= 2.25 / 2.75) * f + 0.9375) + a;
        } else {
          return h * (7.5625 * (f -= 2.625 / 2.75) * f + 0.984375) + a;
        }
      }
    }
  }, easeInOutBounce: function (e, f, a, h, g) {
    if (f < g / 2) {
      return jQuery.easing.easeInBounce(e, f * 2, 0, h, g) * 0.5 + a;
    }return jQuery.easing.easeOutBounce(e, f * 2 - g, 0, h, g) * 0.5 + h * 0.5 + a;
  } });
/*! fancyBox v2.1.5 fancyapps.com | fancyapps.com/fancybox/#license */
(function (r, G, f, v) {
  var J = f("html"),
      n = f(r),
      p = f(G),
      b = f.fancybox = function () {
    b.open.apply(this, arguments);
  },
      I = navigator.userAgent.match(/msie/i),
      B = null,
      s = G.createTouch !== v,
      t = function (a) {
    return a && a.hasOwnProperty && a instanceof f;
  },
      q = function (a) {
    return a && "string" === f.type(a);
  },
      E = function (a) {
    return q(a) && 0 < a.indexOf("%");
  },
      l = function (a, d) {
    var e = parseInt(a, 10) || 0;d && E(a) && (e *= b.getViewport()[d] / 100);return Math.ceil(e);
  },
      w = function (a, b) {
    return l(a, b) + "px";
  };f.extend(b, { version: "2.1.5", defaults: { padding: 15, margin: 20,
      width: 800, height: 600, minWidth: 100, minHeight: 100, maxWidth: 9999, maxHeight: 9999, pixelRatio: 1, autoSize: !0, autoHeight: !1, autoWidth: !1, autoResize: !0, autoCenter: !s, fitToView: !0, aspectRatio: !1, topRatio: 0.5, leftRatio: 0.5, scrolling: "auto", wrapCSS: "", arrows: !0, closeBtn: !0, closeClick: !1, nextClick: !1, mouseWheel: !0, autoPlay: !1, playSpeed: 3E3, preload: 3, modal: !1, loop: !0, ajax: { dataType: "html", headers: { "X-fancyBox": !0 } }, iframe: { scrolling: "auto", preload: !0 }, swf: { wmode: "transparent", allowfullscreen: "true", allowscriptaccess: "always" },
      keys: { next: { 13: "left", 34: "up", 39: "left", 40: "up" }, prev: { 8: "right", 33: "down", 37: "right", 38: "down" }, close: [27], play: [32], toggle: [70] }, direction: { next: "left", prev: "right" }, scrollOutside: !0, index: 0, type: null, href: null, content: null, title: null, tpl: { wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>', image: '<img class="fancybox-image" src="{href}" alt="" />', iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (I ? ' allowtransparency="true"' : "") + "></iframe>", error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>', closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>', next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>', prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>' }, openEffect: "fade", openSpeed: 250, openEasing: "swing", openOpacity: !0,
      openMethod: "zoomIn", closeEffect: "fade", closeSpeed: 250, closeEasing: "swing", closeOpacity: !0, closeMethod: "zoomOut", nextEffect: "elastic", nextSpeed: 250, nextEasing: "swing", nextMethod: "changeIn", prevEffect: "elastic", prevSpeed: 250, prevEasing: "swing", prevMethod: "changeOut", helpers: { overlay: !0, title: !0 }, onCancel: f.noop, beforeLoad: f.noop, afterLoad: f.noop, beforeShow: f.noop, afterShow: f.noop, beforeChange: f.noop, beforeClose: f.noop, afterClose: f.noop }, group: {}, opts: {}, previous: null, coming: null, current: null, isActive: !1,
    isOpen: !1, isOpened: !1, wrap: null, skin: null, outer: null, inner: null, player: { timer: null, isActive: !1 }, ajaxLoad: null, imgPreload: null, transitions: {}, helpers: {}, open: function (a, d) {
      if (a && (f.isPlainObject(d) || (d = {}), !1 !== b.close(!0))) return f.isArray(a) || (a = t(a) ? f(a).get() : [a]), f.each(a, function (e, c) {
        var k = {},
            g,
            h,
            j,
            m,
            l;"object" === f.type(c) && (c.nodeType && (c = f(c)), t(c) ? (k = { href: c.data("fancybox-href") || c.attr("href"), title: c.data("fancybox-title") || c.attr("title"), isDom: !0, element: c }, f.metadata && f.extend(!0, k, c.metadata())) : k = c);g = d.href || k.href || (q(c) ? c : null);h = d.title !== v ? d.title : k.title || "";m = (j = d.content || k.content) ? "html" : d.type || k.type;!m && k.isDom && (m = c.data("fancybox-type"), m || (m = (m = c.prop("class").match(/fancybox\.(\w+)/)) ? m[1] : null));q(g) && (m || (b.isImage(g) ? m = "image" : b.isSWF(g) ? m = "swf" : "#" === g.charAt(0) ? m = "inline" : q(c) && (m = "html", j = c)), "ajax" === m && (l = g.split(/\s+/, 2), g = l.shift(), l = l.shift()));j || ("inline" === m ? g ? j = f(q(g) ? g.replace(/.*(?=#[^\s]+$)/, "") : g) : k.isDom && (j = c) : "html" === m ? j = g : !m && !g && k.isDom && (m = "inline", j = c));f.extend(k, { href: g, type: m, content: j, title: h, selector: l });a[e] = k;
      }), b.opts = f.extend(!0, {}, b.defaults, d), d.keys !== v && (b.opts.keys = d.keys ? f.extend({}, b.defaults.keys, d.keys) : !1), b.group = a, b._start(b.opts.index);
    }, cancel: function () {
      var a = b.coming;a && !1 !== b.trigger("onCancel") && (b.hideLoading(), b.ajaxLoad && b.ajaxLoad.abort(), b.ajaxLoad = null, b.imgPreload && (b.imgPreload.onload = b.imgPreload.onerror = null), a.wrap && a.wrap.stop(!0, !0).trigger("onReset").remove(), b.coming = null, b.current || b._afterZoomOut(a));
    }, close: function (a) {
      b.cancel();!1 !== b.trigger("beforeClose") && (b.unbindEvents(), b.isActive && (!b.isOpen || !0 === a ? (f(".fancybox-wrap").stop(!0).trigger("onReset").remove(), b._afterZoomOut()) : (b.isOpen = b.isOpened = !1, b.isClosing = !0, f(".fancybox-item, .fancybox-nav").remove(), b.wrap.stop(!0, !0).removeClass("fancybox-opened"), b.transitions[b.current.closeMethod]())));
    }, play: function (a) {
      var d = function () {
        clearTimeout(b.player.timer);
      },
          e = function () {
        d();b.current && b.player.isActive && (b.player.timer = setTimeout(b.next, b.current.playSpeed));
      },
          c = function () {
        d();p.unbind(".player");b.player.isActive = !1;b.trigger("onPlayEnd");
      };if (!0 === a || !b.player.isActive && !1 !== a) {
        if (b.current && (b.current.loop || b.current.index < b.group.length - 1)) b.player.isActive = !0, p.bind({ "onCancel.player beforeClose.player": c, "onUpdate.player": e, "beforeLoad.player": d }), e(), b.trigger("onPlayStart");
      } else c();
    }, next: function (a) {
      var d = b.current;d && (q(a) || (a = d.direction.next), b.jumpto(d.index + 1, a, "next"));
    }, prev: function (a) {
      var d = b.current;
      d && (q(a) || (a = d.direction.prev), b.jumpto(d.index - 1, a, "prev"));
    }, jumpto: function (a, d, e) {
      var c = b.current;c && (a = l(a), b.direction = d || c.direction[a >= c.index ? "next" : "prev"], b.router = e || "jumpto", c.loop && (0 > a && (a = c.group.length + a % c.group.length), a %= c.group.length), c.group[a] !== v && (b.cancel(), b._start(a)));
    }, reposition: function (a, d) {
      var e = b.current,
          c = e ? e.wrap : null,
          k;c && (k = b._getPosition(d), a && "scroll" === a.type ? (delete k.position, c.stop(!0, !0).animate(k, 200)) : (c.css(k), e.pos = f.extend({}, e.dim, k)));
    }, update: function (a) {
      var d = a && a.type,
          e = !d || "orientationchange" === d;e && (clearTimeout(B), B = null);b.isOpen && !B && (B = setTimeout(function () {
        var c = b.current;c && !b.isClosing && (b.wrap.removeClass("fancybox-tmp"), (e || "load" === d || "resize" === d && c.autoResize) && b._setDimension(), "scroll" === d && c.canShrink || b.reposition(a), b.trigger("onUpdate"), B = null);
      }, e && !s ? 0 : 300));
    }, toggle: function (a) {
      b.isOpen && (b.current.fitToView = "boolean" === f.type(a) ? a : !b.current.fitToView, s && (b.wrap.removeAttr("style").addClass("fancybox-tmp"), b.trigger("onUpdate")), b.update());
    }, hideLoading: function () {
      p.unbind(".loading");f("#fancybox-loading").remove();
    }, showLoading: function () {
      var a, d;b.hideLoading();a = f('<div id="fancybox-loading"><div></div></div>').click(b.cancel).appendTo("body");p.bind("keydown.loading", function (a) {
        if (27 === (a.which || a.keyCode)) a.preventDefault(), b.cancel();
      });b.defaults.fixed || (d = b.getViewport(), a.css({ position: "absolute", top: 0.5 * d.h + d.y, left: 0.5 * d.w + d.x }));
    }, getViewport: function () {
      var a = b.current && b.current.locked || !1,
          d = { x: n.scrollLeft(),
        y: n.scrollTop() };a ? (d.w = a[0].clientWidth, d.h = a[0].clientHeight) : (d.w = s && r.innerWidth ? r.innerWidth : n.width(), d.h = s && r.innerHeight ? r.innerHeight : n.height());return d;
    }, unbindEvents: function () {
      b.wrap && t(b.wrap) && b.wrap.unbind(".fb");p.unbind(".fb");n.unbind(".fb");
    }, bindEvents: function () {
      var a = b.current,
          d;a && (n.bind("orientationchange.fb" + (s ? "" : " resize.fb") + (a.autoCenter && !a.locked ? " scroll.fb" : ""), b.update), (d = a.keys) && p.bind("keydown.fb", function (e) {
        var c = e.which || e.keyCode,
            k = e.target || e.srcElement;
        if (27 === c && b.coming) return !1;!e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey && (!k || !k.type && !f(k).is("[contenteditable]")) && f.each(d, function (d, k) {
          if (1 < a.group.length && k[c] !== v) return b[d](k[c]), e.preventDefault(), !1;if (-1 < f.inArray(c, k)) return b[d](), e.preventDefault(), !1;
        });
      }), f.fn.mousewheel && a.mouseWheel && b.wrap.bind("mousewheel.fb", function (d, c, k, g) {
        for (var h = f(d.target || null), j = !1; h.length && !j && !h.is(".fancybox-skin") && !h.is(".fancybox-wrap");) j = h[0] && !(h[0].style.overflow && "hidden" === h[0].style.overflow) && (h[0].clientWidth && h[0].scrollWidth > h[0].clientWidth || h[0].clientHeight && h[0].scrollHeight > h[0].clientHeight), h = f(h).parent();if (0 !== c && !j && 1 < b.group.length && !a.canShrink) {
          if (0 < g || 0 < k) b.prev(0 < g ? "down" : "left");else if (0 > g || 0 > k) b.next(0 > g ? "up" : "right");d.preventDefault();
        }
      }));
    }, trigger: function (a, d) {
      var e,
          c = d || b.coming || b.current;if (c) {
        f.isFunction(c[a]) && (e = c[a].apply(c, Array.prototype.slice.call(arguments, 1)));if (!1 === e) return !1;c.helpers && f.each(c.helpers, function (d, e) {
          if (e && b.helpers[d] && f.isFunction(b.helpers[d][a])) b.helpers[d][a](f.extend(!0, {}, b.helpers[d].defaults, e), c);
        });p.trigger(a);
      }
    }, isImage: function (a) {
      return q(a) && a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i);
    }, isSWF: function (a) {
      return q(a) && a.match(/\.(swf)((\?|#).*)?$/i);
    }, _start: function (a) {
      var d = {},
          e,
          c;a = l(a);e = b.group[a] || null;if (!e) return !1;d = f.extend(!0, {}, b.opts, e);e = d.margin;c = d.padding;"number" === f.type(e) && (d.margin = [e, e, e, e]);"number" === f.type(c) && (d.padding = [c, c, c, c]);d.modal && f.extend(!0, d, { closeBtn: !1, closeClick: !1, nextClick: !1, arrows: !1,
        mouseWheel: !1, keys: null, helpers: { overlay: { closeClick: !1 } } });d.autoSize && (d.autoWidth = d.autoHeight = !0);"auto" === d.width && (d.autoWidth = !0);"auto" === d.height && (d.autoHeight = !0);d.group = b.group;d.index = a;b.coming = d;if (!1 === b.trigger("beforeLoad")) b.coming = null;else {
        c = d.type;e = d.href;if (!c) return b.coming = null, b.current && b.router && "jumpto" !== b.router ? (b.current.index = a, b[b.router](b.direction)) : !1;b.isActive = !0;if ("image" === c || "swf" === c) d.autoHeight = d.autoWidth = !1, d.scrolling = "visible";"image" === c && (d.aspectRatio = !0);"iframe" === c && s && (d.scrolling = "scroll");d.wrap = f(d.tpl.wrap).addClass("fancybox-" + (s ? "mobile" : "desktop") + " fancybox-type-" + c + " fancybox-tmp " + d.wrapCSS).appendTo(d.parent || "body");f.extend(d, { skin: f(".fancybox-skin", d.wrap), outer: f(".fancybox-outer", d.wrap), inner: f(".fancybox-inner", d.wrap) });f.each(["Top", "Right", "Bottom", "Left"], function (a, b) {
          d.skin.css("padding" + b, w(d.padding[a]));
        });b.trigger("onReady");if ("inline" === c || "html" === c) {
          if (!d.content || !d.content.length) return b._error("content");
        } else if (!e) return b._error("href");
        "image" === c ? b._loadImage() : "ajax" === c ? b._loadAjax() : "iframe" === c ? b._loadIframe() : b._afterLoad();
      }
    }, _error: function (a) {
      f.extend(b.coming, { type: "html", autoWidth: !0, autoHeight: !0, minWidth: 0, minHeight: 0, scrolling: "no", hasError: a, content: b.coming.tpl.error });b._afterLoad();
    }, _loadImage: function () {
      var a = b.imgPreload = new Image();a.onload = function () {
        this.onload = this.onerror = null;b.coming.width = this.width / b.opts.pixelRatio;b.coming.height = this.height / b.opts.pixelRatio;b._afterLoad();
      };a.onerror = function () {
        this.onload = this.onerror = null;b._error("image");
      };a.src = b.coming.href;!0 !== a.complete && b.showLoading();
    }, _loadAjax: function () {
      var a = b.coming;b.showLoading();b.ajaxLoad = f.ajax(f.extend({}, a.ajax, { url: a.href, error: function (a, e) {
          b.coming && "abort" !== e ? b._error("ajax", a) : b.hideLoading();
        }, success: function (d, e) {
          "success" === e && (a.content = d, b._afterLoad());
        } }));
    }, _loadIframe: function () {
      var a = b.coming,
          d = f(a.tpl.iframe.replace(/\{rnd\}/g, new Date().getTime())).attr("scrolling", s ? "auto" : a.iframe.scrolling).attr("src", a.href);
      f(a.wrap).bind("onReset", function () {
        try {
          f(this).find("iframe").hide().attr("src", "//about:blank").end().empty();
        } catch (a) {}
      });a.iframe.preload && (b.showLoading(), d.one("load", function () {
        f(this).data("ready", 1);s || f(this).bind("load.fb", b.update);f(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();b._afterLoad();
      }));a.content = d.appendTo(a.inner);a.iframe.preload || b._afterLoad();
    }, _preloadImages: function () {
      var a = b.group,
          d = b.current,
          e = a.length,
          c = d.preload ? Math.min(d.preload, e - 1) : 0,
          f,
          g;for (g = 1; g <= c; g += 1) f = a[(d.index + g) % e], "image" === f.type && f.href && (new Image().src = f.href);
    }, _afterLoad: function () {
      var a = b.coming,
          d = b.current,
          e,
          c,
          k,
          g,
          h;b.hideLoading();if (a && !1 !== b.isActive) if (!1 === b.trigger("afterLoad", a, d)) a.wrap.stop(!0).trigger("onReset").remove(), b.coming = null;else {
        d && (b.trigger("beforeChange", d), d.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove());b.unbindEvents();e = a.content;c = a.type;k = a.scrolling;f.extend(b, { wrap: a.wrap, skin: a.skin,
          outer: a.outer, inner: a.inner, current: a, previous: d });g = a.href;switch (c) {case "inline":case "ajax":case "html":
            a.selector ? e = f("<div>").html(e).find(a.selector) : t(e) && (e.data("fancybox-placeholder") || e.data("fancybox-placeholder", f('<div class="fancybox-placeholder"></div>').insertAfter(e).hide()), e = e.show().detach(), a.wrap.bind("onReset", function () {
              f(this).find(e).length && e.hide().replaceAll(e.data("fancybox-placeholder")).data("fancybox-placeholder", !1);
            }));break;case "image":
            e = a.tpl.image.replace("{href}", g);break;case "swf":
            e = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + g + '"></param>', h = "", f.each(a.swf, function (a, b) {
              e += '<param name="' + a + '" value="' + b + '"></param>';h += " " + a + '="' + b + '"';
            }), e += '<embed src="' + g + '" type="application/x-shockwave-flash" width="100%" height="100%"' + h + "></embed></object>";}(!t(e) || !e.parent().is(a.inner)) && a.inner.append(e);b.trigger("beforeShow");a.inner.css("overflow", "yes" === k ? "scroll" : "no" === k ? "hidden" : k);b._setDimension();b.reposition();b.isOpen = !1;b.coming = null;b.bindEvents();if (b.isOpened) {
          if (d.prevMethod) b.transitions[d.prevMethod]();
        } else f(".fancybox-wrap").not(a.wrap).stop(!0).trigger("onReset").remove();b.transitions[b.isOpened ? a.nextMethod : a.openMethod]();b._preloadImages();
      }
    }, _setDimension: function () {
      var a = b.getViewport(),
          d = 0,
          e = !1,
          c = !1,
          e = b.wrap,
          k = b.skin,
          g = b.inner,
          h = b.current,
          c = h.width,
          j = h.height,
          m = h.minWidth,
          u = h.minHeight,
          n = h.maxWidth,
          p = h.maxHeight,
          s = h.scrolling,
          q = h.scrollOutside ? h.scrollbarWidth : 0,
          x = h.margin,
          y = l(x[1] + x[3]),
          r = l(x[0] + x[2]),
          v,
          z,
          t,
          C,
          A,
          F,
          B,
          D,
          H;e.add(k).add(g).width("auto").height("auto").removeClass("fancybox-tmp");x = l(k.outerWidth(!0) - k.width());v = l(k.outerHeight(!0) - k.height());z = y + x;t = r + v;C = E(c) ? (a.w - z) * l(c) / 100 : c;A = E(j) ? (a.h - t) * l(j) / 100 : j;if ("iframe" === h.type) {
        if (H = h.content, h.autoHeight && 1 === H.data("ready")) try {
          H[0].contentWindow.document.location && (g.width(C).height(9999), F = H.contents().find("body"), q && F.css("overflow-x", "hidden"), A = F.outerHeight(!0));
        } catch (G) {}
      } else if (h.autoWidth || h.autoHeight) g.addClass("fancybox-tmp"), h.autoWidth || g.width(C), h.autoHeight || g.height(A), h.autoWidth && (C = g.width()), h.autoHeight && (A = g.height()), g.removeClass("fancybox-tmp");c = l(C);j = l(A);D = C / A;m = l(E(m) ? l(m, "w") - z : m);n = l(E(n) ? l(n, "w") - z : n);u = l(E(u) ? l(u, "h") - t : u);p = l(E(p) ? l(p, "h") - t : p);F = n;B = p;h.fitToView && (n = Math.min(a.w - z, n), p = Math.min(a.h - t, p));z = a.w - y;r = a.h - r;h.aspectRatio ? (c > n && (c = n, j = l(c / D)), j > p && (j = p, c = l(j * D)), c < m && (c = m, j = l(c / D)), j < u && (j = u, c = l(j * D))) : (c = Math.max(m, Math.min(c, n)), h.autoHeight && "iframe" !== h.type && (g.width(c), j = g.height()), j = Math.max(u, Math.min(j, p)));if (h.fitToView) if (g.width(c).height(j), e.width(c + x), a = e.width(), y = e.height(), h.aspectRatio) for (; (a > z || y > r) && c > m && j > u && !(19 < d++);) j = Math.max(u, Math.min(p, j - 10)), c = l(j * D), c < m && (c = m, j = l(c / D)), c > n && (c = n, j = l(c / D)), g.width(c).height(j), e.width(c + x), a = e.width(), y = e.height();else c = Math.max(m, Math.min(c, c - (a - z))), j = Math.max(u, Math.min(j, j - (y - r)));q && "auto" === s && j < A && c + x + q < z && (c += q);g.width(c).height(j);e.width(c + x);a = e.width();
      y = e.height();e = (a > z || y > r) && c > m && j > u;c = h.aspectRatio ? c < F && j < B && c < C && j < A : (c < F || j < B) && (c < C || j < A);f.extend(h, { dim: { width: w(a), height: w(y) }, origWidth: C, origHeight: A, canShrink: e, canExpand: c, wPadding: x, hPadding: v, wrapSpace: y - k.outerHeight(!0), skinSpace: k.height() - j });!H && h.autoHeight && j > u && j < p && !c && g.height("auto");
    }, _getPosition: function (a) {
      var d = b.current,
          e = b.getViewport(),
          c = d.margin,
          f = b.wrap.width() + c[1] + c[3],
          g = b.wrap.height() + c[0] + c[2],
          c = { position: "absolute", top: c[0], left: c[3] };d.autoCenter && d.fixed && !a && g <= e.h && f <= e.w ? c.position = "fixed" : d.locked || (c.top += e.y, c.left += e.x);c.top = w(Math.max(c.top, c.top + (e.h - g) * d.topRatio));c.left = w(Math.max(c.left, c.left + (e.w - f) * d.leftRatio));return c;
    }, _afterZoomIn: function () {
      var a = b.current;a && (b.isOpen = b.isOpened = !0, b.wrap.css("overflow", "visible").addClass("fancybox-opened"), b.update(), (a.closeClick || a.nextClick && 1 < b.group.length) && b.inner.css("cursor", "pointer").bind("click.fb", function (d) {
        !f(d.target).is("a") && !f(d.target).parent().is("a") && (d.preventDefault(), b[a.closeClick ? "close" : "next"]());
      }), a.closeBtn && f(a.tpl.closeBtn).appendTo(b.skin).bind("click.fb", function (a) {
        a.preventDefault();b.close();
      }), a.arrows && 1 < b.group.length && ((a.loop || 0 < a.index) && f(a.tpl.prev).appendTo(b.outer).bind("click.fb", b.prev), (a.loop || a.index < b.group.length - 1) && f(a.tpl.next).appendTo(b.outer).bind("click.fb", b.next)), b.trigger("afterShow"), !a.loop && a.index === a.group.length - 1 ? b.play(!1) : b.opts.autoPlay && !b.player.isActive && (b.opts.autoPlay = !1, b.play()));
    }, _afterZoomOut: function (a) {
      a = a || b.current;f(".fancybox-wrap").trigger("onReset").remove();f.extend(b, { group: {}, opts: {}, router: !1, current: null, isActive: !1, isOpened: !1, isOpen: !1, isClosing: !1, wrap: null, skin: null, outer: null, inner: null });b.trigger("afterClose", a);
    } });b.transitions = { getOrigPosition: function () {
      var a = b.current,
          d = a.element,
          e = a.orig,
          c = {},
          f = 50,
          g = 50,
          h = a.hPadding,
          j = a.wPadding,
          m = b.getViewport();!e && a.isDom && d.is(":visible") && (e = d.find("img:first"), e.length || (e = d));t(e) ? (c = e.offset(), e.is("img") && (f = e.outerWidth(), g = e.outerHeight())) : (c.top = m.y + (m.h - g) * a.topRatio, c.left = m.x + (m.w - f) * a.leftRatio);if ("fixed" === b.wrap.css("position") || a.locked) c.top -= m.y, c.left -= m.x;return c = { top: w(c.top - h * a.topRatio), left: w(c.left - j * a.leftRatio), width: w(f + j), height: w(g + h) };
    }, step: function (a, d) {
      var e,
          c,
          f = d.prop;c = b.current;var g = c.wrapSpace,
          h = c.skinSpace;if ("width" === f || "height" === f) e = d.end === d.start ? 1 : (a - d.start) / (d.end - d.start), b.isClosing && (e = 1 - e), c = "width" === f ? c.wPadding : c.hPadding, c = a - c, b.skin[f](l("width" === f ? c : c - g * e)), b.inner[f](l("width" === f ? c : c - g * e - h * e));
    }, zoomIn: function () {
      var a = b.current,
          d = a.pos,
          e = a.openEffect,
          c = "elastic" === e,
          k = f.extend({ opacity: 1 }, d);delete k.position;c ? (d = this.getOrigPosition(), a.openOpacity && (d.opacity = 0.1)) : "fade" === e && (d.opacity = 0.1);b.wrap.css(d).animate(k, { duration: "none" === e ? 0 : a.openSpeed, easing: a.openEasing, step: c ? this.step : null, complete: b._afterZoomIn });
    }, zoomOut: function () {
      var a = b.current,
          d = a.closeEffect,
          e = "elastic" === d,
          c = { opacity: 0.1 };e && (c = this.getOrigPosition(), a.closeOpacity && (c.opacity = 0.1));b.wrap.animate(c, { duration: "none" === d ? 0 : a.closeSpeed, easing: a.closeEasing, step: e ? this.step : null, complete: b._afterZoomOut });
    }, changeIn: function () {
      var a = b.current,
          d = a.nextEffect,
          e = a.pos,
          c = { opacity: 1 },
          f = b.direction,
          g;e.opacity = 0.1;"elastic" === d && (g = "down" === f || "up" === f ? "top" : "left", "down" === f || "right" === f ? (e[g] = w(l(e[g]) - 200), c[g] = "+=200px") : (e[g] = w(l(e[g]) + 200), c[g] = "-=200px"));"none" === d ? b._afterZoomIn() : b.wrap.css(e).animate(c, { duration: a.nextSpeed, easing: a.nextEasing, complete: b._afterZoomIn });
    }, changeOut: function () {
      var a = b.previous,
          d = a.prevEffect,
          e = { opacity: 0.1 },
          c = b.direction;"elastic" === d && (e["down" === c || "up" === c ? "top" : "left"] = ("up" === c || "left" === c ? "-" : "+") + "=200px");a.wrap.animate(e, { duration: "none" === d ? 0 : a.prevSpeed, easing: a.prevEasing, complete: function () {
          f(this).trigger("onReset").remove();
        } });
    } };b.helpers.overlay = { defaults: { closeClick: !0, speedOut: 200, showEarly: !0, css: {}, locked: !s, fixed: !0 }, overlay: null, fixed: !1, el: f("html"), create: function (a) {
      a = f.extend({}, this.defaults, a);this.overlay && this.close();this.overlay = f('<div class="fancybox-overlay"></div>').appendTo(b.coming ? b.coming.parent : a.parent);this.fixed = !1;a.fixed && b.defaults.fixed && (this.overlay.addClass("fancybox-overlay-fixed"), this.fixed = !0);
    }, open: function (a) {
      var d = this;a = f.extend({}, this.defaults, a);this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(a);this.fixed || (n.bind("resize.overlay", f.proxy(this.update, this)), this.update());a.closeClick && this.overlay.bind("click.overlay", function (a) {
        if (f(a.target).hasClass("fancybox-overlay")) return b.isActive ? b.close() : d.close(), !1;
      });this.overlay.css(a.css).show();
    }, close: function () {
      var a, b;n.unbind("resize.overlay");this.el.hasClass("fancybox-lock") && (f(".fancybox-margin").removeClass("fancybox-margin"), a = n.scrollTop(), b = n.scrollLeft(), this.el.removeClass("fancybox-lock"), n.scrollTop(a).scrollLeft(b));f(".fancybox-overlay").remove().hide();f.extend(this, { overlay: null, fixed: !1 });
    }, update: function () {
      var a = "100%",
          b;this.overlay.width(a).height("100%");I ? (b = Math.max(G.documentElement.offsetWidth, G.body.offsetWidth), p.width() > b && (a = p.width())) : p.width() > n.width() && (a = p.width());this.overlay.width(a).height(p.height());
    }, onReady: function (a, b) {
      var e = this.overlay;f(".fancybox-overlay").stop(!0, !0);e || this.create(a);a.locked && this.fixed && b.fixed && (e || (this.margin = p.height() > n.height() ? f("html").css("margin-right").replace("px", "") : !1), b.locked = this.overlay.append(b.wrap), b.fixed = !1);!0 === a.showEarly && this.beforeShow.apply(this, arguments);
    }, beforeShow: function (a, b) {
      var e, c;b.locked && (!1 !== this.margin && (f("*").filter(function () {
        return "fixed" === f(this).css("position") && !f(this).hasClass("fancybox-overlay") && !f(this).hasClass("fancybox-wrap");
      }).addClass("fancybox-margin"), this.el.addClass("fancybox-margin")), e = n.scrollTop(), c = n.scrollLeft(), this.el.addClass("fancybox-lock"), n.scrollTop(e).scrollLeft(c));this.open(a);
    }, onUpdate: function () {
      this.fixed || this.update();
    }, afterClose: function (a) {
      this.overlay && !b.coming && this.overlay.fadeOut(a.speedOut, f.proxy(this.close, this));
    } };b.helpers.title = { defaults: { type: "float", position: "bottom" }, beforeShow: function (a) {
      var d = b.current,
          e = d.title,
          c = a.type;f.isFunction(e) && (e = e.call(d.element, d));if (q(e) && "" !== f.trim(e)) {
        d = f('<div class="fancybox-title fancybox-title-' + c + '-wrap">' + e + "</div>");switch (c) {case "inside":
            c = b.skin;break;case "outside":
            c = b.wrap;break;case "over":
            c = b.inner;break;default:
            c = b.skin, d.appendTo("body"), I && d.width(d.width()), d.wrapInner('<span class="child"></span>'), b.current.margin[2] += Math.abs(l(d.css("margin-bottom")));}d["top" === a.position ? "prependTo" : "appendTo"](c);
      }
    } };f.fn.fancybox = function (a) {
    var d,
        e = f(this),
        c = this.selector || "",
        k = function (g) {
      var h = f(this).blur(),
          j = d,
          k,
          l;!g.ctrlKey && !g.altKey && !g.shiftKey && !g.metaKey && !h.is(".fancybox-wrap") && (k = a.groupAttr || "data-fancybox-group", l = h.attr(k), l || (k = "rel", l = h.get(0)[k]), l && "" !== l && "nofollow" !== l && (h = c.length ? f(c) : e, h = h.filter("[" + k + '="' + l + '"]'), j = h.index(this)), a.index = j, !1 !== b.open(h, a) && g.preventDefault());
    };a = a || {};d = a.index || 0;!c || !1 === a.live ? e.unbind("click.fb-start").bind("click.fb-start", k) : p.undelegate(c, "click.fb-start").delegate(c + ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", k);this.filter("[data-fancybox-start=1]").trigger("click");return this;
  };p.ready(function () {
    var a, d;f.scrollbarWidth === v && (f.scrollbarWidth = function () {
      var a = f('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),
          b = a.children(),
          b = b.innerWidth() - b.height(99).innerWidth();a.remove();return b;
    });if (f.support.fixedPosition === v) {
      a = f.support;d = f('<div style="position:fixed;top:20px;"></div>').appendTo("body");var e = 20 === d[0].offsetTop || 15 === d[0].offsetTop;d.remove();a.fixedPosition = e;
    }f.extend(b.defaults, { scrollbarWidth: f.scrollbarWidth(), fixed: f.support.fixedPosition, parent: f("body") });a = f(r).width();J.addClass("fancybox-lock-test");d = f(r).width();J.removeClass("fancybox-lock-test");f("<style type='text/css'>.fancybox-margin{margin-right:" + (d - a) + "px;}</style>").appendTo("head");
  });
})(window, document, jQuery);
/*
Plugin: jQuery Parallax
Version 1.1.3
Author: Ian Lunn
Twitter: @IanLunn
Author URL: http://www.ianlunn.co.uk/
Plugin URL: http://www.ianlunn.co.uk/plugins/jquery-parallax/

Dual licensed under the MIT and GPL licenses:
http://www.opensource.org/licenses/mit-license.php
http://www.gnu.org/licenses/gpl.html
*/

(function ($) {
	var $window = $(window);
	var windowHeight = $window.height();

	$window.resize(function () {
		windowHeight = $window.height();
	});

	$.fn.parallax = function (xpos, speedFactor, outerHeight) {
		var $this = $(this);
		var getHeight;
		var firstTop;
		var paddingTop = 0;

		//get the starting position of each element to have parallax applied to it		
		$this.each(function () {
			firstTop = $this.offset().top;
		});

		if (outerHeight) {
			getHeight = function (jqo) {
				return jqo.outerHeight(true);
			};
		} else {
			getHeight = function (jqo) {
				return jqo.height();
			};
		}

		// setup defaults if arguments aren't specified
		if (arguments.length < 1 || xpos === null) xpos = "50%";
		if (arguments.length < 2 || speedFactor === null) speedFactor = 0.1;
		if (arguments.length < 3 || outerHeight === null) outerHeight = true;

		// function to be called whenever the window is scrolled or resized
		function update() {
			var pos = $window.scrollTop();

			$this.each(function () {
				var $element = $(this);
				var top = $element.offset().top;
				var height = getHeight($element);

				// Check if totally above or totally below viewport
				if (top + height < pos || top > pos + windowHeight) {
					return;
				}

				$this.css('backgroundPosition', xpos + " " + Math.round((firstTop - pos) * speedFactor) + "px");
			});
		}

		$window.bind('scroll', update).resize(update);
		update();
	};
})(jQuery);
/**
 * Single Page Nav Plugin
 * Copyright (c) 2014 Chris Wojcik <hello@chriswojcik.net>
 * Dual licensed under MIT and GPL.
 * @author Chris Wojcik
 * @version 1.2.0
 */
if (typeof Object.create !== "function") {
  Object.create = function (e) {
    function t() {}t.prototype = e;return new t();
  };
}(function (e, t, n, r) {
  "use strict";
  var i = { init: function (n, r) {
      this.options = e.extend({}, e.fn.singlePageNav.defaults, n);this.container = r;this.$container = e(r);this.$links = this.$container.find("a");if (this.options.filter !== "") {
        this.$links = this.$links.filter(this.options.filter);
      }this.$window = e(t);this.$htmlbody = e("html, body");this.$links.on("click.singlePageNav", e.proxy(this.handleClick, this));this.didScroll = false;this.checkPosition();this.setTimer();
    }, handleClick: function (t) {
      var n = this,
          r = t.currentTarget,
          i = e(r.hash);t.preventDefault();if (i.length) {
        n.clearTimer();if (typeof n.options.beforeStart === "function") {
          n.options.beforeStart();
        }n.setActiveLink(r.hash);n.scrollTo(i, function () {
          if (n.options.updateHash && history.pushState) {
            history.pushState(null, null, r.hash);
          }n.setTimer();if (typeof n.options.onComplete === "function") {
            n.options.onComplete();
          }
        });
      }
    }, scrollTo: function (e, t) {
      var n = this;var r = n.getCoords(e).top;var i = false;n.$htmlbody.stop().animate({ scrollTop: r }, { duration: n.options.speed, easing: n.options.easing, complete: function () {
          if (typeof t === "function" && !i) {
            t();
          }i = true;
        } });
    }, setTimer: function () {
      var e = this;e.$window.on("scroll.singlePageNav", function () {
        e.didScroll = true;
      });e.timer = setInterval(function () {
        if (e.didScroll) {
          e.didScroll = false;e.checkPosition();
        }
      }, 250);
    }, clearTimer: function () {
      clearInterval(this.timer);this.$window.off("scroll.singlePageNav");this.didScroll = false;
    }, checkPosition: function () {
      var e = this.$window.scrollTop();var t = this.getCurrentSection(e);this.setActiveLink(t);
    }, getCoords: function (e) {
      return { top: Math.round(e.offset().top) - this.options.offset };
    }, setActiveLink: function (e) {
      var t = this.$container.find("a[href$='" + e + "']");if (!t.hasClass(this.options.currentClass)) {
        this.$links.removeClass(this.options.currentClass);t.addClass(this.options.currentClass);
      }
    }, getCurrentSection: function (t) {
      var n, r, i, s;for (n = 0; n < this.$links.length; n++) {
        r = this.$links[n].hash;if (e(r).length) {
          i = this.getCoords(e(r));if (t >= i.top - this.options.threshold) {
            s = r;
          }
        }
      }return s || this.$links[0].hash;
    } };e.fn.singlePageNav = function (e) {
    return this.each(function () {
      var t = Object.create(i);t.init(e, this);
    });
  };e.fn.singlePageNav.defaults = { offset: 0, threshold: 120, speed: 400, currentClass: "current", easing: "swing", updateHash: false, filter: "", onComplete: false, beforeStart: false };
})(jQuery, window, document);
/*
 *	jQuery OwlCarousel v1.31
 *  
 *	Copyright (c) 2013 Bartosz Wojciechowski
 *	http://www.owlgraphic.com/owlcarousel
 *
 *	Licensed under MIT
 *
 */
eval(function (p, a, c, k, e, r) {
  e = function (c) {
    return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36));
  };if (!''.replace(/^/, String)) {
    while (c--) r[e(c)] = k[c] || e(c);k = [function (e) {
      return r[e];
    }];e = function () {
      return '\\w+';
    };c = 1;
  };while (c--) if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);return p;
}('7(B 3i.3E!=="9"){3i.3E=9(e){9 t(){}t.5v=e;q 5c t}}(9(e,t,n,r){b i={1J:9(t,n){b r=d;r.$k=e(n);r.6=e.3K({},e.3A.2c.6,r.$k.w(),t);r.29=t;r.3U()},3U:9(){b t=d;7(B t.6.2M==="9"){t.6.2M.P(d,[t.$k])}7(B t.6.2I==="2F"){b n=t.6.2I;9 r(e){7(B t.6.3F==="9"){t.6.3F.P(d,[e])}m{b n="";1C(b r 2f e["h"]){n+=e["h"][r]["1K"]}t.$k.2h(n)}t.2Y()}e.5G(n,r)}m{t.2Y()}},2Y:9(e){b t=d;t.$k.w("h-4p",t.$k.2s("2t")).w("h-4K",t.$k.2s("J"));t.$k.A({2z:0});t.2A=t.6.v;t.4L();t.5R=0;t.1M;t.1P()},1P:9(){b e=d;7(e.$k.1S().S===0){q c}e.1O();e.3H();e.$X=e.$k.1S();e.G=e.$X.S;e.4M();e.$I=e.$k.16(".h-1K");e.$L=e.$k.16(".h-1h");e.2H="Y";e.15=0;e.1W=[0];e.p=0;e.4I();e.4G()},4G:9(){b e=d;e.2V();e.31();e.4D();e.35();e.4C();e.4A();e.2x();e.4z();7(e.6.2w!==c){e.4w(e.6.2w)}7(e.6.Q===j){e.6.Q=5i}e.1e();e.$k.16(".h-1h").A("4v","4r");7(!e.$k.2p(":33")){e.34()}m{e.$k.A("2z",1)}e.56=c;e.2o();7(B e.6.39==="9"){e.6.39.P(d,[e.$k])}},2o:9(){b e=d;7(e.6.1I===j){e.1I()}7(e.6.1A===j){e.1A()}e.4n();7(B e.6.3n==="9"){e.6.3n.P(d,[e.$k])}},3o:9(){b e=d;7(B e.6.3p==="9"){e.6.3p.P(d,[e.$k])}e.34();e.2V();e.31();e.4m();e.35();e.2o();7(B e.6.3t==="9"){e.6.3t.P(d,[e.$k])}},4i:9(e){b t=d;19(9(){t.3o()},0)},34:9(){b e=d;7(e.$k.2p(":33")===c){e.$k.A({2z:0});18(e.1r);18(e.1M)}m{q c}e.1M=4g(9(){7(e.$k.2p(":33")){e.4i();e.$k.4f({2z:1},2J);18(e.1M)}},5O)},4M:9(){b e=d;e.$X.5N(\'<M J="h-1h">\').3G(\'<M J="h-1K"></M>\');e.$k.16(".h-1h").3G(\'<M J="h-1h-4d">\');e.1U=e.$k.16(".h-1h-4d");e.$k.A("4v","4r")},1O:9(){b e=d;b t=e.$k.1V(e.6.1O);b n=e.$k.1V(e.6.28);7(!t){e.$k.K(e.6.1O)}7(!n){e.$k.K(e.6.28)}},2V:9(){b t=d;7(t.6.2Z===c){q c}7(t.6.4b===j){t.6.v=t.2A=1;t.6.17=c;t.6.1q=c;t.6.21=c;t.6.24=c;t.6.25=c;t.6.26=c;q c}b n=e(t.6.4a).1m();7(n>(t.6.1q[0]||t.2A)){t.6.v=t.2A}7(B t.6.17!=="3b"&&t.6.17!==c){t.6.17.5x(9(e,t){q e[0]-t[0]});1C(b r 2f t.6.17){7(B t.6.17[r]!=="3b"&&t.6.17[r][0]<=n){t.6.v=t.6.17[r][1]}}}m{7(n<=t.6.1q[0]&&t.6.1q!==c){t.6.v=t.6.1q[1]}7(n<=t.6.21[0]&&t.6.21!==c){t.6.v=t.6.21[1]}7(n<=t.6.24[0]&&t.6.24!==c){t.6.v=t.6.24[1]}7(n<=t.6.25[0]&&t.6.25!==c){t.6.v=t.6.25[1]}7(n<=t.6.26[0]&&t.6.26!==c){t.6.v=t.6.26[1]}}7(t.6.v>t.G&&t.6.49===j){t.6.v=t.G}},4C:9(){b n=d,r;7(n.6.2Z!==j){q c}b i=e(t).1m();n.3f=9(){7(e(t).1m()!==i){7(n.6.Q!==c){18(n.1r)}5o(r);r=19(9(){i=e(t).1m();n.3o()},n.6.48)}};e(t).47(n.3f)},4m:9(){b e=d;e.2j(e.p);7(e.6.Q!==c){e.3l()}},46:9(){b t=d;b n=0;b r=t.G-t.6.v;t.$I.2i(9(i){b s=e(d);s.A({1m:t.N}).w("h-1K",3q(i));7(i%t.6.v===0||i===r){7(!(i>r)){n+=1}}s.w("h-1L",n)})},45:9(){b e=d;b t=0;b t=e.$I.S*e.N;e.$L.A({1m:t*2,V:0});e.46()},31:9(){b e=d;e.44();e.45();e.43();e.3x()},44:9(){b e=d;e.N=1N.5a(e.$k.1m()/e.6.v)},3x:9(){b e=d;b t=(e.G*e.N-e.6.v*e.N)*-1;7(e.6.v>e.G){e.C=0;t=0;e.3D=0}m{e.C=e.G-e.6.v;e.3D=t}q t},42:9(){q 0},43:9(){b t=d;t.H=[0];t.2C=[];b n=0;b r=0;1C(b i=0;i<t.G;i++){r+=t.N;t.H.2D(-r);7(t.6.14===j){b s=e(t.$I[i]);b o=s.w("h-1L");7(o!==n){t.2C[n]=t.H[i];n=o}}}},4D:9(){b t=d;7(t.6.2b===j||t.6.1s===j){t.D=e(\'<M J="h-4R"/>\').4Q("4P",!t.F.13).5E(t.$k)}7(t.6.1s===j){t.3Z()}7(t.6.2b===j){t.3Y()}},3Y:9(){b t=d;b n=e(\'<M J="h-5h"/>\');t.D.1k(n);t.1w=e("<M/>",{"J":"h-1l",2h:t.6.2T[0]||""});t.1y=e("<M/>",{"J":"h-Y",2h:t.6.2T[1]||""});n.1k(t.1w).1k(t.1y);n.z("2W.D 1Z.D",\'M[J^="h"]\',9(e){e.1n()});n.z("2a.D 2n.D",\'M[J^="h"]\',9(n){n.1n();7(e(d).1V("h-Y")){t.Y()}m{t.1l()}})},3Z:9(){b t=d;t.1o=e(\'<M J="h-1s"/>\');t.D.1k(t.1o);t.1o.z("2a.D 2n.D",".h-1p",9(n){n.1n();7(3q(e(d).w("h-1p"))!==t.p){t.1i(3q(e(d).w("h-1p")),j)}})},3T:9(){b t=d;7(t.6.1s===c){q c}t.1o.2h("");b n=0;b r=t.G-t.G%t.6.v;1C(b i=0;i<t.G;i++){7(i%t.6.v===0){n+=1;7(r===i){b s=t.G-t.6.v}b o=e("<M/>",{"J":"h-1p"});b u=e("<3Q></3Q>",{54:t.6.38===j?n:"","J":t.6.38===j?"h-5l":""});o.1k(u);o.w("h-1p",r===i?s:i);o.w("h-1L",n);t.1o.1k(o)}}t.3a()},3a:9(){b t=d;7(t.6.1s===c){q c}t.1o.16(".h-1p").2i(9(n,r){7(e(d).w("h-1L")===e(t.$I[t.p]).w("h-1L")){t.1o.16(".h-1p").Z("2d");e(d).K("2d")}})},3d:9(){b e=d;7(e.6.2b===c){q c}7(e.6.2e===c){7(e.p===0&&e.C===0){e.1w.K("1b");e.1y.K("1b")}m 7(e.p===0&&e.C!==0){e.1w.K("1b");e.1y.Z("1b")}m 7(e.p===e.C){e.1w.Z("1b");e.1y.K("1b")}m 7(e.p!==0&&e.p!==e.C){e.1w.Z("1b");e.1y.Z("1b")}}},35:9(){b e=d;e.3T();e.3d();7(e.D){7(e.6.v>=e.G){e.D.3N()}m{e.D.3L()}}},5g:9(){b e=d;7(e.D){e.D.3j()}},Y:9(e){b t=d;7(t.1G){q c}t.p+=t.6.14===j?t.6.v:1;7(t.p>t.C+(t.6.14==j?t.6.v-1:0)){7(t.6.2e===j){t.p=0;e="2k"}m{t.p=t.C;q c}}t.1i(t.p,e)},1l:9(e){b t=d;7(t.1G){q c}7(t.6.14===j&&t.p>0&&t.p<t.6.v){t.p=0}m{t.p-=t.6.14===j?t.6.v:1}7(t.p<0){7(t.6.2e===j){t.p=t.C;e="2k"}m{t.p=0;q c}}t.1i(t.p,e)},1i:9(e,t,n){b r=d;7(r.1G){q c}7(B r.6.1F==="9"){r.6.1F.P(d,[r.$k])}7(e>=r.C){e=r.C}m 7(e<=0){e=0}r.p=r.h.p=e;7(r.6.2w!==c&&n!=="4e"&&r.6.v===1&&r.F.1u===j){r.1B(0);7(r.F.1u===j){r.1H(r.H[e])}m{r.1x(r.H[e],1)}r.2q();r.4k();q c}b i=r.H[e];7(r.F.1u===j){r.1T=c;7(t===j){r.1B("1D");19(9(){r.1T=j},r.6.1D)}m 7(t==="2k"){r.1B(r.6.2u);19(9(){r.1T=j},r.6.2u)}m{r.1B("1j");19(9(){r.1T=j},r.6.1j)}r.1H(i)}m{7(t===j){r.1x(i,r.6.1D)}m 7(t==="2k"){r.1x(i,r.6.2u)}m{r.1x(i,r.6.1j)}}r.2q()},2j:9(e){b t=d;7(B t.6.1F==="9"){t.6.1F.P(d,[t.$k])}7(e>=t.C||e===-1){e=t.C}m 7(e<=0){e=0}t.1B(0);7(t.F.1u===j){t.1H(t.H[e])}m{t.1x(t.H[e],1)}t.p=t.h.p=e;t.2q()},2q:9(){b e=d;e.1W.2D(e.p);e.15=e.h.15=e.1W[e.1W.S-2];e.1W.55(0);7(e.15!==e.p){e.3a();e.3d();e.2o();7(e.6.Q!==c){e.3l()}}7(B e.6.3z==="9"&&e.15!==e.p){e.6.3z.P(d,[e.$k])}},W:9(){b e=d;e.3k="W";18(e.1r)},3l:9(){b e=d;7(e.3k!=="W"){e.1e()}},1e:9(){b e=d;e.3k="1e";7(e.6.Q===c){q c}18(e.1r);e.1r=4g(9(){e.Y(j)},e.6.Q)},1B:9(e){b t=d;7(e==="1j"){t.$L.A(t.2y(t.6.1j))}m 7(e==="1D"){t.$L.A(t.2y(t.6.1D))}m 7(B e!=="2F"){t.$L.A(t.2y(e))}},2y:9(e){b t=d;q{"-1R-1a":"2B "+e+"1z 2r","-27-1a":"2B "+e+"1z 2r","-o-1a":"2B "+e+"1z 2r",1a:"2B "+e+"1z 2r"}},3I:9(){q{"-1R-1a":"","-27-1a":"","-o-1a":"",1a:""}},3J:9(e){q{"-1R-O":"1g("+e+"T, E, E)","-27-O":"1g("+e+"T, E, E)","-o-O":"1g("+e+"T, E, E)","-1z-O":"1g("+e+"T, E, E)",O:"1g("+e+"T, E,E)"}},1H:9(e){b t=d;t.$L.A(t.3J(e))},3M:9(e){b t=d;t.$L.A({V:e})},1x:9(e,t){b n=d;n.2g=c;n.$L.W(j,j).4f({V:e},{59:t||n.6.1j,3O:9(){n.2g=j}})},4L:9(){b e=d;b r="1g(E, E, E)",i=n.5f("M");i.2t.3P="  -27-O:"+r+"; -1z-O:"+r+"; -o-O:"+r+"; -1R-O:"+r+"; O:"+r;b s=/1g\\(E, E, E\\)/g,o=i.2t.3P.5k(s),u=o!==1d&&o.S===1;b a="5z"2f t||5C.4U;e.F={1u:u,13:a}},4A:9(){b e=d;7(e.6.22!==c||e.6.23!==c){e.3R();e.3S()}},3H:9(){b e=d;b t=["s","e","x"];e.12={};7(e.6.22===j&&e.6.23===j){t=["2W.h 1Z.h","2P.h 3V.h","2a.h 3W.h 2n.h"]}m 7(e.6.22===c&&e.6.23===j){t=["2W.h","2P.h","2a.h 3W.h"]}m 7(e.6.22===j&&e.6.23===c){t=["1Z.h","3V.h","2n.h"]}e.12["3X"]=t[0];e.12["2O"]=t[1];e.12["2N"]=t[2]},3S:9(){b t=d;t.$k.z("5A.h",9(e){e.1n()});t.$k.z("1Z.40",9(t){q e(t.1f).2p("5F, 5H, 5Q, 5S")})},3R:9(){9 o(e){7(e.2L){q{x:e.2L[0].2K,y:e.2L[0].41}}m{7(e.2K!==r){q{x:e.2K,y:e.41}}m{q{x:e.52,y:e.53}}}}9 u(t){7(t==="z"){e(n).z(i.12["2O"],f);e(n).z(i.12["2N"],l)}m 7(t==="R"){e(n).R(i.12["2O"]);e(n).R(i.12["2N"])}}9 a(n){b n=n.3B||n||t.3w;7(n.5d===3){q c}7(i.G<=i.6.v){q}7(i.2g===c&&!i.6.3v){q c}7(i.1T===c&&!i.6.3v){q c}7(i.6.Q!==c){18(i.1r)}7(i.F.13!==j&&!i.$L.1V("3s")){i.$L.K("3s")}i.11=0;i.U=0;e(d).A(i.3I());b r=e(d).2l();s.3g=r.V;s.3e=o(n).x-r.V;s.3c=o(n).y-r.5y;u("z");s.2m=c;s.30=n.1f||n.4c}9 f(r){b r=r.3B||r||t.3w;i.11=o(r).x-s.3e;i.2S=o(r).y-s.3c;i.U=i.11-s.3g;7(B i.6.2R==="9"&&s.2Q!==j&&i.U!==0){s.2Q=j;i.6.2R.P(i,[i.$k])}7(i.U>8||i.U<-8&&i.F.13===j){r.1n?r.1n():r.5M=c;s.2m=j}7((i.2S>10||i.2S<-10)&&s.2m===c){e(n).R("2P.h")}b u=9(){q i.U/5};b a=9(){q i.3D+i.U/5};i.11=1N.3x(1N.42(i.11,u()),a());7(i.F.1u===j){i.1H(i.11)}m{i.3M(i.11)}}9 l(n){b n=n.3B||n||t.3w;n.1f=n.1f||n.4c;s.2Q=c;7(i.F.13!==j){i.$L.Z("3s")}7(i.U<0){i.1t=i.h.1t="V"}m{i.1t=i.h.1t="2G"}7(i.U!==0){b r=i.4h();i.1i(r,c,"4e");7(s.30===n.1f&&i.F.13!==j){e(n.1f).z("3u.4j",9(t){t.4S();t.4T();t.1n();e(n.1f).R("3u.4j")});b o=e.4O(n.1f,"4V")["3u"];b a=o.4W();o.4X(0,0,a)}}u("R")}b i=d;b s={3e:0,3c:0,4Y:0,3g:0,2l:1d,4Z:1d,50:1d,2m:1d,51:1d,30:1d};i.2g=j;i.$k.z(i.12["3X"],".h-1h",a)},4h:9(){b e=d,t;t=e.4l();7(t>e.C){e.p=e.C;t=e.C}m 7(e.11>=0){t=0;e.p=0}q t},4l:9(){b t=d,n=t.6.14===j?t.2C:t.H,r=t.11,i=1d;e.2i(n,9(s,o){7(r-t.N/20>n[s+1]&&r-t.N/20<o&&t.3m()==="V"){i=o;7(t.6.14===j){t.p=e.4o(i,t.H)}m{t.p=s}}m 7(r+t.N/20<o&&r+t.N/20>(n[s+1]||n[s]-t.N)&&t.3m()==="2G"){7(t.6.14===j){i=n[s+1]||n[n.S-1];t.p=e.4o(i,t.H)}m{i=n[s+1];t.p=s+1}}});q t.p},3m:9(){b e=d,t;7(e.U<0){t="2G";e.2H="Y"}m{t="V";e.2H="1l"}q t},4I:9(){b e=d;e.$k.z("h.Y",9(){e.Y()});e.$k.z("h.1l",9(){e.1l()});e.$k.z("h.1e",9(t,n){e.6.Q=n;e.1e();e.36="1e"});e.$k.z("h.W",9(){e.W();e.36="W"});e.$k.z("h.1i",9(t,n){e.1i(n)});e.$k.z("h.2j",9(t,n){e.2j(n)})},2x:9(){b e=d;7(e.6.2x===j&&e.F.13!==j&&e.6.Q!==c){e.$k.z("57",9(){e.W()});e.$k.z("58",9(){7(e.36!=="W"){e.1e()}})}},1I:9(){b t=d;7(t.6.1I===c){q c}1C(b n=0;n<t.G;n++){b i=e(t.$I[n]);7(i.w("h-1c")==="1c"){4q}b s=i.w("h-1K"),o=i.16(".5b"),u;7(B o.w("1X")!=="2F"){i.w("h-1c","1c");4q}7(i.w("h-1c")===r){o.3N();i.K("4s").w("h-1c","5e")}7(t.6.4t===j){u=s>=t.p}m{u=j}7(u&&s<t.p+t.6.v&&o.S){t.4u(i,o)}}},4u:9(e,t){9 s(){r+=1;7(n.2X(t.2U(0))||i===j){o()}m 7(r<=2v){19(s,2v)}m{o()}}9 o(){e.w("h-1c","1c").Z("4s");t.5j("w-1X");n.6.4x==="4y"?t.5m(5n):t.3L();7(B n.6.3r==="9"){n.6.3r.P(d,[n.$k])}}b n=d,r=0;7(t.5p("5q")==="5r"){t.A("5s-5t","5u("+t.w("1X")+")");b i=j}m{t[0].1X=t.w("1X")}s()},1A:9(){9 s(){i+=1;7(t.2X(n.2U(0))){o()}m 7(i<=2v){19(s,2v)}m{t.1U.A("3h","")}}9 o(){b n=e(t.$I[t.p]).3h();t.1U.A("3h",n+"T");7(!t.1U.1V("1A")){19(9(){t.1U.K("1A")},0)}}b t=d;b n=e(t.$I[t.p]).16("5w");7(n.2U(0)!==r){b i=0;s()}m{o()}},2X:9(e){7(!e.3O){q c}7(B e.4B!=="3b"&&e.4B==0){q c}q j},4n:9(){b t=d;7(t.6.37===j){t.$I.Z("2d")}t.1v=[];1C(b n=t.p;n<t.p+t.6.v;n++){t.1v.2D(n);7(t.6.37===j){e(t.$I[n]).K("2d")}}t.h.1v=t.1v},4w:9(e){b t=d;t.4E="h-"+e+"-5B";t.4F="h-"+e+"-2f"},4k:9(){9 u(e,t){q{2l:"5D",V:e+"T"}}b e=d;e.1G=j;b t=e.4E,n=e.4F,r=e.$I.1E(e.p),i=e.$I.1E(e.15),s=1N.4H(e.H[e.p])+e.H[e.15],o=1N.4H(e.H[e.p])+e.N/2;e.$L.K("h-1Y").A({"-1R-O-1Y":o+"T","-27-4J-1Y":o+"T","4J-1Y":o+"T"});b a="5I 5J 5K 5L";i.A(u(s,10)).K(t).z(a,9(){e.3C=j;i.R(a);e.32(i,t)});r.K(n).z(a,9(){e.2E=j;r.R(a);e.32(r,n)})},32:9(e,t){b n=d;e.A({2l:"",V:""}).Z(t);7(n.3C&&n.2E){n.$L.Z("h-1Y");n.3C=c;n.2E=c;n.1G=c}},4z:9(){b e=d;e.h={29:e.29,5P:e.$k,X:e.$X,I:e.$I,p:e.p,15:e.15,1v:e.1v,13:e.F.13,F:e.F,1t:e.1t}},4N:9(){b r=d;r.$k.R(".h h 1Z.40");e(n).R(".h h");e(t).R("47",r.3f)},1Q:9(){b e=d;7(e.$k.1S().S!==0){e.$L.3y();e.$X.3y().3y();7(e.D){e.D.3j()}}e.4N();e.$k.2s("2t",e.$k.w("h-4p")||"").2s("J",e.$k.w("h-4K"))},5T:9(){b e=d;e.W();18(e.1M);e.1Q();e.$k.5U()},5V:9(t){b n=d;b r=e.3K({},n.29,t);n.1Q();n.1J(r,n.$k)},5W:9(e,t){b n=d,i;7(!e){q c}7(n.$k.1S().S===0){n.$k.1k(e);n.1P();q c}n.1Q();7(t===r||t===-1){i=-1}m{i=t}7(i>=n.$X.S||i===-1){n.$X.1E(-1).5X(e)}m{n.$X.1E(i).5Y(e)}n.1P()},5Z:9(e){b t=d,n;7(t.$k.1S().S===0){q c}7(e===r||e===-1){n=-1}m{n=e}t.1Q();t.$X.1E(n).3j();t.1P()}};e.3A.2c=9(t){q d.2i(9(){7(e(d).w("h-1J")===j){q c}e(d).w("h-1J",j);b n=3i.3E(i);n.1J(t,d);e.w(d,"2c",n)})};e.3A.2c.6={v:5,17:c,1q:[60,4],21:[61,3],24:[62,2],25:c,26:[63,1],4b:c,49:c,1j:2J,1D:64,2u:65,Q:c,2x:c,2b:c,2T:["1l","Y"],2e:j,14:c,1s:j,38:c,2Z:j,48:2J,4a:t,1O:"h-66",28:"h-28",1I:c,4t:j,4x:"4y",1A:c,2I:c,3F:c,3v:j,22:j,23:j,37:c,2w:c,3p:c,3t:c,2M:c,39:c,1F:c,3z:c,3n:c,2R:c,3r:c}})(67,68,69)', 62, 382, '||||||options|if||function||var|false|this||||owl||true|elem||else|||currentItem|return|||||items|data|||on|css|typeof|maximumItem|owlControls|0px|browser|itemsAmount|positionsInArray|owlItems|class|addClass|owlWrapper|div|itemWidth|transform|apply|autoPlay|off|length|px|newRelativeX|left|stop|userItems|next|removeClass||newPosX|ev_types|isTouch|scrollPerPage|prevItem|find|itemsCustom|clearInterval|setTimeout|transition|disabled|loaded|null|play|target|translate3d|wrapper|goTo|slideSpeed|append|prev|width|preventDefault|paginationWrapper|page|itemsDesktop|autoPlayInterval|pagination|dragDirection|support3d|visibleItems|buttonPrev|css2slide|buttonNext|ms|autoHeight|swapSpeed|for|paginationSpeed|eq|beforeMove|isTransition|transition3d|lazyLoad|init|item|roundPages|checkVisible|Math|baseClass|setVars|unWrap|webkit|children|isCss3Finish|wrapperOuter|hasClass|prevArr|src|origin|mousedown||itemsDesktopSmall|mouseDrag|touchDrag|itemsTablet|itemsTabletSmall|itemsMobile|moz|theme|userOptions|touchend|navigation|owlCarousel|active|rewindNav|in|isCssFinish|html|each|jumpTo|rewind|position|sliding|mouseup|eachMoveUpdate|is|afterGo|ease|attr|style|rewindSpeed|100|transitionStyle|stopOnHover|addCssSpeed|opacity|orignalItems|all|pagesInArray|push|endCurrent|string|right|playDirection|jsonPath|200|pageX|touches|beforeInit|end|move|touchmove|dragging|startDragging|newPosY|navigationText|get|updateItems|touchstart|completeImg|logIn|responsive|targetElement|calculateAll|clearTransStyle|visible|watchVisibility|updateControls|hoverStatus|addClassActive|paginationNumbers|afterInit|checkPagination|undefined|offsetY|checkNavigation|offsetX|resizer|relativePos|height|Object|remove|apStatus|checkAp|moveDirection|afterAction|updateVars|beforeUpdate|Number|afterLazyLoad|grabbing|afterUpdate|click|dragBeforeAnimFinish|event|max|unwrap|afterMove|fn|originalEvent|endPrev|maximumPixels|create|jsonSuccess|wrap|eventTypes|removeTransition|doTranslate|extend|show|css2move|hide|complete|cssText|span|gestures|disabledEvents|updatePagination|loadContent|mousemove|touchcancel|start|buildButtons|buildPagination|disableTextSelect|pageY|min|loops|calculateWidth|appendWrapperSizes|appendItemsSizes|resize|responsiveRefreshRate|itemsScaleUp|responsiveBaseWidth|singleItem|srcElement|outer|drag|animate|setInterval|getNewPosition|reload|disable|singleItemTransition|closestItem|updatePosition|onVisibleItems|inArray|originalStyles|continue|block|loading|lazyFollow|lazyPreload|display|transitionTypes|lazyEffect|fade|owlStatus|moveEvents|naturalWidth|response|buildControls|outClass|inClass|onStartup|abs|customEvents|perspective|originalClasses|checkBrowser|wrapItems|clearEvents|_data|clickable|toggleClass|controls|stopImmediatePropagation|stopPropagation|msMaxTouchPoints|events|pop|splice|baseElWidth|minSwipe|maxSwipe|dargging|clientX|clientY|text|shift|onstartup|mouseover|mouseout|duration|round|lazyOwl|new|which|checked|createElement|destroyControls|buttons|5e3|removeAttr|match|numbers|fadeIn|400|clearTimeout|prop|tagName|DIV|background|image|url|prototype|img|sort|top|ontouchstart|dragstart|out|navigator|relative|appendTo|input|getJSON|textarea|webkitAnimationEnd|oAnimationEnd|MSAnimationEnd|animationend|returnValue|wrapAll|500|baseElement|select|wrapperWidth|option|destroy|removeData|reinit|addItem|after|before|removeItem|1199|979|768|479|800|1e3|carousel|jQuery|window|document'.split('|'), 0, {}));
/**
 * Swiper 3.4.0
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * 
 * http://www.idangero.us/swiper/
 * 
 * Copyright 2016, Vladimir Kharlampidi
 * The iDangero.us
 * http://www.idangero.us/
 * 
 * Licensed under MIT
 * 
 * Released on: October 16, 2016
 */
!function () {
  "use strict";
  function e(e) {
    e.fn.swiper = function (a) {
      var s;return e(this).each(function () {
        var e = new t(this, a);s || (s = e);
      }), s;
    };
  }var a,
      t = function (e, i) {
    function n(e) {
      return Math.floor(e);
    }function o() {
      var e = S.params.autoplay,
          a = S.slides.eq(S.activeIndex);a.attr("data-swiper-autoplay") && (e = a.attr("data-swiper-autoplay") || S.params.autoplay), S.autoplayTimeoutId = setTimeout(function () {
        S.params.loop ? (S.fixLoop(), S._slideNext(), S.emit("onAutoplay", S)) : S.isEnd ? i.autoplayStopOnLast ? S.stopAutoplay() : (S._slideTo(0), S.emit("onAutoplay", S)) : (S._slideNext(), S.emit("onAutoplay", S));
      }, e);
    }function l(e, t) {
      var s = a(e.target);if (!s.is(t)) if ("string" == typeof t) s = s.parents(t);else if (t.nodeType) {
        var i;return s.parents().each(function (e, a) {
          a === t && (i = t);
        }), i ? t : void 0;
      }if (0 !== s.length) return s[0];
    }function p(e, a) {
      a = a || {};var t = window.MutationObserver || window.WebkitMutationObserver,
          s = new t(function (e) {
        e.forEach(function (e) {
          S.onResize(!0), S.emit("onObserverUpdate", S, e);
        });
      });s.observe(e, { attributes: "undefined" == typeof a.attributes || a.attributes, childList: "undefined" == typeof a.childList || a.childList, characterData: "undefined" == typeof a.characterData || a.characterData }), S.observers.push(s);
    }function d(e) {
      e.originalEvent && (e = e.originalEvent);var a = e.keyCode || e.charCode;if (!S.params.allowSwipeToNext && (S.isHorizontal() && 39 === a || !S.isHorizontal() && 40 === a)) return !1;if (!S.params.allowSwipeToPrev && (S.isHorizontal() && 37 === a || !S.isHorizontal() && 38 === a)) return !1;if (!(e.shiftKey || e.altKey || e.ctrlKey || e.metaKey || document.activeElement && document.activeElement.nodeName && ("input" === document.activeElement.nodeName.toLowerCase() || "textarea" === document.activeElement.nodeName.toLowerCase()))) {
        if (37 === a || 39 === a || 38 === a || 40 === a) {
          var t = !1;if (S.container.parents("." + S.params.slideClass).length > 0 && 0 === S.container.parents("." + S.params.slideActiveClass).length) return;var s = { left: window.pageXOffset, top: window.pageYOffset },
              i = window.innerWidth,
              r = window.innerHeight,
              n = S.container.offset();S.rtl && (n.left = n.left - S.container[0].scrollLeft);for (var o = [[n.left, n.top], [n.left + S.width, n.top], [n.left, n.top + S.height], [n.left + S.width, n.top + S.height]], l = 0; l < o.length; l++) {
            var p = o[l];p[0] >= s.left && p[0] <= s.left + i && p[1] >= s.top && p[1] <= s.top + r && (t = !0);
          }if (!t) return;
        }S.isHorizontal() ? (37 !== a && 39 !== a || (e.preventDefault ? e.preventDefault() : e.returnValue = !1), (39 === a && !S.rtl || 37 === a && S.rtl) && S.slideNext(), (37 === a && !S.rtl || 39 === a && S.rtl) && S.slidePrev()) : (38 !== a && 40 !== a || (e.preventDefault ? e.preventDefault() : e.returnValue = !1), 40 === a && S.slideNext(), 38 === a && S.slidePrev());
      }
    }function u() {
      var e = "onwheel",
          a = e in document;if (!a) {
        var t = document.createElement("div");t.setAttribute(e, "return;"), a = "function" == typeof t[e];
      }return !a && document.implementation && document.implementation.hasFeature && document.implementation.hasFeature("", "") !== !0 && (a = document.implementation.hasFeature("Events.wheel", "3.0")), a;
    }function c(e) {
      e.originalEvent && (e = e.originalEvent);var a = 0,
          t = S.rtl ? -1 : 1,
          s = m(e);if (S.params.mousewheelForceToAxis) {
        if (S.isHorizontal()) {
          if (!(Math.abs(s.pixelX) > Math.abs(s.pixelY))) return;a = s.pixelX * t;
        } else {
          if (!(Math.abs(s.pixelY) > Math.abs(s.pixelX))) return;a = s.pixelY;
        }
      } else a = Math.abs(s.pixelX) > Math.abs(s.pixelY) ? -s.pixelX * t : -s.pixelY;if (0 !== a) {
        if (S.params.mousewheelInvert && (a = -a), S.params.freeMode) {
          var i = S.getWrapperTranslate() + a * S.params.mousewheelSensitivity,
              r = S.isBeginning,
              n = S.isEnd;if (i >= S.minTranslate() && (i = S.minTranslate()), i <= S.maxTranslate() && (i = S.maxTranslate()), S.setWrapperTransition(0), S.setWrapperTranslate(i), S.updateProgress(), S.updateActiveIndex(), (!r && S.isBeginning || !n && S.isEnd) && S.updateClasses(), S.params.freeModeSticky ? (clearTimeout(S.mousewheel.timeout), S.mousewheel.timeout = setTimeout(function () {
            S.slideReset();
          }, 300)) : S.params.lazyLoading && S.lazy && S.lazy.load(), S.emit("onScroll", S, e), S.params.autoplay && S.params.autoplayDisableOnInteraction && S.stopAutoplay(), 0 === i || i === S.maxTranslate()) return;
        } else {
          if (new window.Date().getTime() - S.mousewheel.lastScrollTime > 60) if (a < 0) {
            if (S.isEnd && !S.params.loop || S.animating) {
              if (S.params.mousewheelReleaseOnEdges) return !0;
            } else S.slideNext(), S.emit("onScroll", S, e);
          } else if (S.isBeginning && !S.params.loop || S.animating) {
            if (S.params.mousewheelReleaseOnEdges) return !0;
          } else S.slidePrev(), S.emit("onScroll", S, e);S.mousewheel.lastScrollTime = new window.Date().getTime();
        }return e.preventDefault ? e.preventDefault() : e.returnValue = !1, !1;
      }
    }function m(e) {
      var a = 10,
          t = 40,
          s = 800,
          i = 0,
          r = 0,
          n = 0,
          o = 0;return "detail" in e && (r = e.detail), "wheelDelta" in e && (r = -e.wheelDelta / 120), "wheelDeltaY" in e && (r = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (i = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (i = r, r = 0), n = i * a, o = r * a, "deltaY" in e && (o = e.deltaY), "deltaX" in e && (n = e.deltaX), (n || o) && e.deltaMode && (1 === e.deltaMode ? (n *= t, o *= t) : (n *= s, o *= s)), n && !i && (i = n < 1 ? -1 : 1), o && !r && (r = o < 1 ? -1 : 1), { spinX: i, spinY: r, pixelX: n, pixelY: o };
    }function h(e, t) {
      e = a(e);var s,
          i,
          r,
          n = S.rtl ? -1 : 1;s = e.attr("data-swiper-parallax") || "0", i = e.attr("data-swiper-parallax-x"), r = e.attr("data-swiper-parallax-y"), i || r ? (i = i || "0", r = r || "0") : S.isHorizontal() ? (i = s, r = "0") : (r = s, i = "0"), i = i.indexOf("%") >= 0 ? parseInt(i, 10) * t * n + "%" : i * t * n + "px", r = r.indexOf("%") >= 0 ? parseInt(r, 10) * t + "%" : r * t + "px", e.transform("translate3d(" + i + ", " + r + ",0px)");
    }function g(e) {
      return 0 !== e.indexOf("on") && (e = e[0] !== e[0].toUpperCase() ? "on" + e[0].toUpperCase() + e.substring(1) : "on" + e), e;
    }if (!(this instanceof t)) return new t(e, i);var f = { direction: "horizontal", touchEventsTarget: "container", initialSlide: 0, speed: 300, autoplay: !1, autoplayDisableOnInteraction: !0, autoplayStopOnLast: !1, iOSEdgeSwipeDetection: !1, iOSEdgeSwipeThreshold: 20, freeMode: !1, freeModeMomentum: !0, freeModeMomentumRatio: 1, freeModeMomentumBounce: !0, freeModeMomentumBounceRatio: 1, freeModeMomentumVelocityRatio: 1, freeModeSticky: !1, freeModeMinimumVelocity: .02, autoHeight: !1, setWrapperSize: !1, virtualTranslate: !1, effect: "slide", coverflow: { rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: !0 }, flip: { slideShadows: !0, limitRotation: !0 }, cube: { slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: .94 }, fade: { crossFade: !1 }, parallax: !1, zoom: !1, zoomMax: 3, zoomMin: 1, zoomToggle: !0, scrollbar: null, scrollbarHide: !0, scrollbarDraggable: !1, scrollbarSnapOnRelease: !1, keyboardControl: !1, mousewheelControl: !1, mousewheelReleaseOnEdges: !1, mousewheelInvert: !1, mousewheelForceToAxis: !1, mousewheelSensitivity: 1, mousewheelEventsTarged: "container", hashnav: !1, hashnavWatchState: !1, history: !1, replaceState: !1, breakpoints: void 0, spaceBetween: 0, slidesPerView: 1, slidesPerColumn: 1, slidesPerColumnFill: "column", slidesPerGroup: 1, centeredSlides: !1, slidesOffsetBefore: 0, slidesOffsetAfter: 0, roundLengths: !1, touchRatio: 1, touchAngle: 45, simulateTouch: !0, shortSwipes: !0, longSwipes: !0, longSwipesRatio: .5, longSwipesMs: 300, followFinger: !0, onlyExternal: !1, threshold: 0, touchMoveStopPropagation: !0, touchReleaseOnEdges: !1, uniqueNavElements: !0, pagination: null, paginationElement: "span", paginationClickable: !1, paginationHide: !1, paginationBulletRender: null, paginationProgressRender: null, paginationFractionRender: null, paginationCustomRender: null, paginationType: "bullets", resistance: !0, resistanceRatio: .85, nextButton: null, prevButton: null, watchSlidesProgress: !1, watchSlidesVisibility: !1, grabCursor: !1, preventClicks: !0, preventClicksPropagation: !0, slideToClickedSlide: !1, lazyLoading: !1, lazyLoadingInPrevNext: !1, lazyLoadingInPrevNextAmount: 1, lazyLoadingOnTransitionStart: !1, preloadImages: !0, updateOnImagesReady: !0, loop: !1, loopAdditionalSlides: 0, loopedSlides: null, control: void 0, controlInverse: !1, controlBy: "slide", normalizeSlideIndex: !0, allowSwipeToPrev: !0, allowSwipeToNext: !0, swipeHandler: null, noSwiping: !0, noSwipingClass: "swiper-no-swiping", passiveListeners: !0, containerModifierClass: "swiper-container-", slideClass: "swiper-slide", slideActiveClass: "swiper-slide-active", slideDuplicateActiveClass: "swiper-slide-duplicate-active", slideVisibleClass: "swiper-slide-visible", slideDuplicateClass: "swiper-slide-duplicate", slideNextClass: "swiper-slide-next", slideDuplicateNextClass: "swiper-slide-duplicate-next", slidePrevClass: "swiper-slide-prev", slideDuplicatePrevClass: "swiper-slide-duplicate-prev", wrapperClass: "swiper-wrapper", bulletClass: "swiper-pagination-bullet", bulletActiveClass: "swiper-pagination-bullet-active", buttonDisabledClass: "swiper-button-disabled", paginationCurrentClass: "swiper-pagination-current", paginationTotalClass: "swiper-pagination-total", paginationHiddenClass: "swiper-pagination-hidden", paginationProgressbarClass: "swiper-pagination-progressbar", paginationClickableClass: "swiper-pagination-clickable", paginationModifierClass: "swiper-pagination-", lazyLoadingClass: "swiper-lazy", lazyStatusLoadingClass: "swiper-lazy-loading", lazyStatusLoadedClass: "swiper-lazy-loaded", lazyPreloaderClass: "swiper-lazy-preloader", notificationClass: "swiper-notification", preloaderClass: "preloader", zoomContainerClass: "swiper-zoom-container", observer: !1, observeParents: !1, a11y: !1, prevSlideMessage: "Previous slide", nextSlideMessage: "Next slide", firstSlideMessage: "This is the first slide", lastSlideMessage: "This is the last slide", paginationBulletMessage: "Go to slide {{index}}", runCallbacksOnInit: !0 },
        v = i && i.virtualTranslate;i = i || {};var w = {};for (var y in i) if ("object" != typeof i[y] || null === i[y] || i[y].nodeType || i[y] === window || i[y] === document || "undefined" != typeof s && i[y] instanceof s || "undefined" != typeof jQuery && i[y] instanceof jQuery) w[y] = i[y];else {
      w[y] = {};for (var x in i[y]) w[y][x] = i[y][x];
    }for (var T in f) if ("undefined" == typeof i[T]) i[T] = f[T];else if ("object" == typeof i[T]) for (var b in f[T]) "undefined" == typeof i[T][b] && (i[T][b] = f[T][b]);var S = this;if (S.params = i, S.originalParams = w, S.classNames = [], "undefined" != typeof a && "undefined" != typeof s && (a = s), ("undefined" != typeof a || (a = "undefined" == typeof s ? window.Dom7 || window.Zepto || window.jQuery : s)) && (S.$ = a, S.currentBreakpoint = void 0, S.getActiveBreakpoint = function () {
      if (!S.params.breakpoints) return !1;var e,
          a = !1,
          t = [];for (e in S.params.breakpoints) S.params.breakpoints.hasOwnProperty(e) && t.push(e);t.sort(function (e, a) {
        return parseInt(e, 10) > parseInt(a, 10);
      });for (var s = 0; s < t.length; s++) e = t[s], e >= window.innerWidth && !a && (a = e);return a || "max";
    }, S.setBreakpoint = function () {
      var e = S.getActiveBreakpoint();if (e && S.currentBreakpoint !== e) {
        var a = e in S.params.breakpoints ? S.params.breakpoints[e] : S.originalParams,
            t = S.params.loop && a.slidesPerView !== S.params.slidesPerView;for (var s in a) S.params[s] = a[s];S.currentBreakpoint = e, t && S.destroyLoop && S.reLoop(!0);
      }
    }, S.params.breakpoints && S.setBreakpoint(), S.container = a(e), 0 !== S.container.length)) {
      if (S.container.length > 1) {
        var C = [];return S.container.each(function () {
          C.push(new t(this, i));
        }), C;
      }S.container[0].swiper = S, S.container.data("swiper", S), S.classNames.push(S.params.containerModifierClass + S.params.direction), S.params.freeMode && S.classNames.push(S.params.containerModifierClass + "free-mode"), S.support.flexbox || (S.classNames.push(S.params.containerModifierClass + "no-flexbox"), S.params.slidesPerColumn = 1), S.params.autoHeight && S.classNames.push(S.params.containerModifierClass + "autoheight"), (S.params.parallax || S.params.watchSlidesVisibility) && (S.params.watchSlidesProgress = !0), S.params.touchReleaseOnEdges && (S.params.resistanceRatio = 0), ["cube", "coverflow", "flip"].indexOf(S.params.effect) >= 0 && (S.support.transforms3d ? (S.params.watchSlidesProgress = !0, S.classNames.push(S.params.containerModifierClass + "3d")) : S.params.effect = "slide"), "slide" !== S.params.effect && S.classNames.push(S.params.containerModifierClass + S.params.effect), "cube" === S.params.effect && (S.params.resistanceRatio = 0, S.params.slidesPerView = 1, S.params.slidesPerColumn = 1, S.params.slidesPerGroup = 1, S.params.centeredSlides = !1, S.params.spaceBetween = 0, S.params.virtualTranslate = !0, S.params.setWrapperSize = !1), "fade" !== S.params.effect && "flip" !== S.params.effect || (S.params.slidesPerView = 1, S.params.slidesPerColumn = 1, S.params.slidesPerGroup = 1, S.params.watchSlidesProgress = !0, S.params.spaceBetween = 0, S.params.setWrapperSize = !1, "undefined" == typeof v && (S.params.virtualTranslate = !0)), S.params.grabCursor && S.support.touch && (S.params.grabCursor = !1), S.wrapper = S.container.children("." + S.params.wrapperClass), S.params.pagination && (S.paginationContainer = a(S.params.pagination), S.params.uniqueNavElements && "string" == typeof S.params.pagination && S.paginationContainer.length > 1 && 1 === S.container.find(S.params.pagination).length && (S.paginationContainer = S.container.find(S.params.pagination)), "bullets" === S.params.paginationType && S.params.paginationClickable ? S.paginationContainer.addClass(S.params.paginationModifierClass + "clickable") : S.params.paginationClickable = !1, S.paginationContainer.addClass(S.params.paginationModifierClass + S.params.paginationType)), (S.params.nextButton || S.params.prevButton) && (S.params.nextButton && (S.nextButton = a(S.params.nextButton), S.params.uniqueNavElements && "string" == typeof S.params.nextButton && S.nextButton.length > 1 && 1 === S.container.find(S.params.nextButton).length && (S.nextButton = S.container.find(S.params.nextButton))), S.params.prevButton && (S.prevButton = a(S.params.prevButton), S.params.uniqueNavElements && "string" == typeof S.params.prevButton && S.prevButton.length > 1 && 1 === S.container.find(S.params.prevButton).length && (S.prevButton = S.container.find(S.params.prevButton)))), S.isHorizontal = function () {
        return "horizontal" === S.params.direction;
      }, S.rtl = S.isHorizontal() && ("rtl" === S.container[0].dir.toLowerCase() || "rtl" === S.container.css("direction")), S.rtl && S.classNames.push(S.params.containerModifierClass + "rtl"), S.rtl && (S.wrongRTL = "-webkit-box" === S.wrapper.css("display")), S.params.slidesPerColumn > 1 && S.classNames.push(S.params.containerModifierClass + "multirow"), S.device.android && S.classNames.push(S.params.containerModifierClass + "android"), S.container.addClass(S.classNames.join(" ")), S.translate = 0, S.progress = 0, S.velocity = 0, S.lockSwipeToNext = function () {
        S.params.allowSwipeToNext = !1, S.params.allowSwipeToPrev === !1 && S.params.grabCursor && S.unsetGrabCursor();
      }, S.lockSwipeToPrev = function () {
        S.params.allowSwipeToPrev = !1, S.params.allowSwipeToNext === !1 && S.params.grabCursor && S.unsetGrabCursor();
      }, S.lockSwipes = function () {
        S.params.allowSwipeToNext = S.params.allowSwipeToPrev = !1, S.params.grabCursor && S.unsetGrabCursor();
      }, S.unlockSwipeToNext = function () {
        S.params.allowSwipeToNext = !0, S.params.allowSwipeToPrev === !0 && S.params.grabCursor && S.setGrabCursor();
      }, S.unlockSwipeToPrev = function () {
        S.params.allowSwipeToPrev = !0, S.params.allowSwipeToNext === !0 && S.params.grabCursor && S.setGrabCursor();
      }, S.unlockSwipes = function () {
        S.params.allowSwipeToNext = S.params.allowSwipeToPrev = !0, S.params.grabCursor && S.setGrabCursor();
      }, S.setGrabCursor = function (e) {
        S.container[0].style.cursor = "move", S.container[0].style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", S.container[0].style.cursor = e ? "-moz-grabbin" : "-moz-grab", S.container[0].style.cursor = e ? "grabbing" : "grab";
      }, S.unsetGrabCursor = function () {
        S.container[0].style.cursor = "";
      }, S.params.grabCursor && S.setGrabCursor(), S.imagesToLoad = [], S.imagesLoaded = 0, S.loadImage = function (e, a, t, s, i, r) {
        function n() {
          r && r();
        }var o;e.complete && i ? n() : a ? (o = new window.Image(), o.onload = n, o.onerror = n, s && (o.sizes = s), t && (o.srcset = t), a && (o.src = a)) : n();
      }, S.preloadImages = function () {
        function e() {
          "undefined" != typeof S && null !== S && (void 0 !== S.imagesLoaded && S.imagesLoaded++, S.imagesLoaded === S.imagesToLoad.length && (S.params.updateOnImagesReady && S.update(), S.emit("onImagesReady", S)));
        }S.imagesToLoad = S.container.find("img");for (var a = 0; a < S.imagesToLoad.length; a++) S.loadImage(S.imagesToLoad[a], S.imagesToLoad[a].currentSrc || S.imagesToLoad[a].getAttribute("src"), S.imagesToLoad[a].srcset || S.imagesToLoad[a].getAttribute("srcset"), S.imagesToLoad[a].sizes || S.imagesToLoad[a].getAttribute("sizes"), !0, e);
      }, S.autoplayTimeoutId = void 0, S.autoplaying = !1, S.autoplayPaused = !1, S.startAutoplay = function () {
        return "undefined" == typeof S.autoplayTimeoutId && !!S.params.autoplay && !S.autoplaying && (S.autoplaying = !0, S.emit("onAutoplayStart", S), void o());
      }, S.stopAutoplay = function (e) {
        S.autoplayTimeoutId && (S.autoplayTimeoutId && clearTimeout(S.autoplayTimeoutId), S.autoplaying = !1, S.autoplayTimeoutId = void 0, S.emit("onAutoplayStop", S));
      }, S.pauseAutoplay = function (e) {
        S.autoplayPaused || (S.autoplayTimeoutId && clearTimeout(S.autoplayTimeoutId), S.autoplayPaused = !0, 0 === e ? (S.autoplayPaused = !1, o()) : S.wrapper.transitionEnd(function () {
          S && (S.autoplayPaused = !1, S.autoplaying ? o() : S.stopAutoplay());
        }));
      }, S.minTranslate = function () {
        return -S.snapGrid[0];
      }, S.maxTranslate = function () {
        return -S.snapGrid[S.snapGrid.length - 1];
      }, S.updateAutoHeight = function () {
        var e = [],
            a = 0;if ("auto" !== S.params.slidesPerView && S.params.slidesPerView > 1) for (r = 0; r < Math.ceil(S.params.slidesPerView); r++) {
          var t = S.activeIndex + r;if (t > S.slides.length) break;e.push(S.slides.eq(t)[0]);
        } else e.push(S.slides.eq(S.activeIndex)[0]);for (r = 0; r < e.length; r++) if ("undefined" != typeof e[r]) {
          var s = e[r].offsetHeight;a = s > a ? s : a;
        }a && S.wrapper.css("height", a + "px");
      }, S.updateContainerSize = function () {
        var e, a;e = "undefined" != typeof S.params.width ? S.params.width : S.container[0].clientWidth, a = "undefined" != typeof S.params.height ? S.params.height : S.container[0].clientHeight, 0 === e && S.isHorizontal() || 0 === a && !S.isHorizontal() || (e = e - parseInt(S.container.css("padding-left"), 10) - parseInt(S.container.css("padding-right"), 10), a = a - parseInt(S.container.css("padding-top"), 10) - parseInt(S.container.css("padding-bottom"), 10), S.width = e, S.height = a, S.size = S.isHorizontal() ? S.width : S.height);
      }, S.updateSlidesSize = function () {
        S.slides = S.wrapper.children("." + S.params.slideClass), S.snapGrid = [], S.slidesGrid = [], S.slidesSizesGrid = [];var e,
            a = S.params.spaceBetween,
            t = -S.params.slidesOffsetBefore,
            s = 0,
            i = 0;if ("undefined" != typeof S.size) {
          "string" == typeof a && a.indexOf("%") >= 0 && (a = parseFloat(a.replace("%", "")) / 100 * S.size), S.virtualSize = -a, S.rtl ? S.slides.css({ marginLeft: "", marginTop: "" }) : S.slides.css({ marginRight: "", marginBottom: "" });var r;S.params.slidesPerColumn > 1 && (r = Math.floor(S.slides.length / S.params.slidesPerColumn) === S.slides.length / S.params.slidesPerColumn ? S.slides.length : Math.ceil(S.slides.length / S.params.slidesPerColumn) * S.params.slidesPerColumn, "auto" !== S.params.slidesPerView && "row" === S.params.slidesPerColumnFill && (r = Math.max(r, S.params.slidesPerView * S.params.slidesPerColumn)));var o,
              l = S.params.slidesPerColumn,
              p = r / l,
              d = p - (S.params.slidesPerColumn * p - S.slides.length);for (e = 0; e < S.slides.length; e++) {
            o = 0;var u = S.slides.eq(e);if (S.params.slidesPerColumn > 1) {
              var c, m, h;"column" === S.params.slidesPerColumnFill ? (m = Math.floor(e / l), h = e - m * l, (m > d || m === d && h === l - 1) && ++h >= l && (h = 0, m++), c = m + h * r / l, u.css({ "-webkit-box-ordinal-group": c, "-moz-box-ordinal-group": c, "-ms-flex-order": c, "-webkit-order": c, order: c })) : (h = Math.floor(e / p), m = e - h * p), u.css("margin-" + (S.isHorizontal() ? "top" : "left"), 0 !== h && S.params.spaceBetween && S.params.spaceBetween + "px").attr("data-swiper-column", m).attr("data-swiper-row", h);
            }"none" !== u.css("display") && ("auto" === S.params.slidesPerView ? (o = S.isHorizontal() ? u.outerWidth(!0) : u.outerHeight(!0), S.params.roundLengths && (o = n(o))) : (o = (S.size - (S.params.slidesPerView - 1) * a) / S.params.slidesPerView, S.params.roundLengths && (o = n(o)), S.isHorizontal() ? S.slides[e].style.width = o + "px" : S.slides[e].style.height = o + "px"), S.slides[e].swiperSlideSize = o, S.slidesSizesGrid.push(o), S.params.centeredSlides ? (t = t + o / 2 + s / 2 + a, 0 === e && (t = t - S.size / 2 - a), Math.abs(t) < .001 && (t = 0), i % S.params.slidesPerGroup === 0 && S.snapGrid.push(t), S.slidesGrid.push(t)) : (i % S.params.slidesPerGroup === 0 && S.snapGrid.push(t), S.slidesGrid.push(t), t = t + o + a), S.virtualSize += o + a, s = o, i++);
          }S.virtualSize = Math.max(S.virtualSize, S.size) + S.params.slidesOffsetAfter;var g;if (S.rtl && S.wrongRTL && ("slide" === S.params.effect || "coverflow" === S.params.effect) && S.wrapper.css({ width: S.virtualSize + S.params.spaceBetween + "px" }), S.support.flexbox && !S.params.setWrapperSize || (S.isHorizontal() ? S.wrapper.css({ width: S.virtualSize + S.params.spaceBetween + "px" }) : S.wrapper.css({ height: S.virtualSize + S.params.spaceBetween + "px" })), S.params.slidesPerColumn > 1 && (S.virtualSize = (o + S.params.spaceBetween) * r, S.virtualSize = Math.ceil(S.virtualSize / S.params.slidesPerColumn) - S.params.spaceBetween, S.isHorizontal() ? S.wrapper.css({ width: S.virtualSize + S.params.spaceBetween + "px" }) : S.wrapper.css({ height: S.virtualSize + S.params.spaceBetween + "px" }), S.params.centeredSlides)) {
            for (g = [], e = 0; e < S.snapGrid.length; e++) S.snapGrid[e] < S.virtualSize + S.snapGrid[0] && g.push(S.snapGrid[e]);S.snapGrid = g;
          }if (!S.params.centeredSlides) {
            for (g = [], e = 0; e < S.snapGrid.length; e++) S.snapGrid[e] <= S.virtualSize - S.size && g.push(S.snapGrid[e]);S.snapGrid = g, Math.floor(S.virtualSize - S.size) - Math.floor(S.snapGrid[S.snapGrid.length - 1]) > 1 && S.snapGrid.push(S.virtualSize - S.size);
          }0 === S.snapGrid.length && (S.snapGrid = [0]), 0 !== S.params.spaceBetween && (S.isHorizontal() ? S.rtl ? S.slides.css({ marginLeft: a + "px" }) : S.slides.css({ marginRight: a + "px" }) : S.slides.css({ marginBottom: a + "px" })), S.params.watchSlidesProgress && S.updateSlidesOffset();
        }
      }, S.updateSlidesOffset = function () {
        for (var e = 0; e < S.slides.length; e++) S.slides[e].swiperSlideOffset = S.isHorizontal() ? S.slides[e].offsetLeft : S.slides[e].offsetTop;
      }, S.updateSlidesProgress = function (e) {
        if ("undefined" == typeof e && (e = S.translate || 0), 0 !== S.slides.length) {
          "undefined" == typeof S.slides[0].swiperSlideOffset && S.updateSlidesOffset();var a = -e;S.rtl && (a = e), S.slides.removeClass(S.params.slideVisibleClass);for (var t = 0; t < S.slides.length; t++) {
            var s = S.slides[t],
                i = (a + (S.params.centeredSlides ? S.minTranslate() : 0) - s.swiperSlideOffset) / (s.swiperSlideSize + S.params.spaceBetween);if (S.params.watchSlidesVisibility) {
              var r = -(a - s.swiperSlideOffset),
                  n = r + S.slidesSizesGrid[t],
                  o = r >= 0 && r < S.size || n > 0 && n <= S.size || r <= 0 && n >= S.size;o && S.slides.eq(t).addClass(S.params.slideVisibleClass);
            }s.progress = S.rtl ? -i : i;
          }
        }
      }, S.updateProgress = function (e) {
        "undefined" == typeof e && (e = S.translate || 0);var a = S.maxTranslate() - S.minTranslate(),
            t = S.isBeginning,
            s = S.isEnd;0 === a ? (S.progress = 0, S.isBeginning = S.isEnd = !0) : (S.progress = (e - S.minTranslate()) / a, S.isBeginning = S.progress <= 0, S.isEnd = S.progress >= 1), S.isBeginning && !t && S.emit("onReachBeginning", S), S.isEnd && !s && S.emit("onReachEnd", S), S.params.watchSlidesProgress && S.updateSlidesProgress(e), S.emit("onProgress", S, S.progress);
      }, S.updateActiveIndex = function () {
        var e,
            a,
            t,
            s = S.rtl ? S.translate : -S.translate;for (a = 0; a < S.slidesGrid.length; a++) "undefined" != typeof S.slidesGrid[a + 1] ? s >= S.slidesGrid[a] && s < S.slidesGrid[a + 1] - (S.slidesGrid[a + 1] - S.slidesGrid[a]) / 2 ? e = a : s >= S.slidesGrid[a] && s < S.slidesGrid[a + 1] && (e = a + 1) : s >= S.slidesGrid[a] && (e = a);S.params.normalizeSlideIndex && (e < 0 || "undefined" == typeof e) && (e = 0), t = Math.floor(e / S.params.slidesPerGroup), t >= S.snapGrid.length && (t = S.snapGrid.length - 1), e !== S.activeIndex && (S.snapIndex = t, S.previousIndex = S.activeIndex, S.activeIndex = e, S.updateClasses(), S.updateRealIndex());
      }, S.updateRealIndex = function () {
        S.realIndex = S.slides.eq(S.activeIndex).attr("data-swiper-slide-index") || S.activeIndex;
      }, S.updateClasses = function () {
        S.slides.removeClass(S.params.slideActiveClass + " " + S.params.slideNextClass + " " + S.params.slidePrevClass + " " + S.params.slideDuplicateActiveClass + " " + S.params.slideDuplicateNextClass + " " + S.params.slideDuplicatePrevClass);var e = S.slides.eq(S.activeIndex);e.addClass(S.params.slideActiveClass), i.loop && (e.hasClass(S.params.slideDuplicateClass) ? S.wrapper.children("." + S.params.slideClass + ":not(." + S.params.slideDuplicateClass + ')[data-swiper-slide-index="' + S.realIndex + '"]').addClass(S.params.slideDuplicateActiveClass) : S.wrapper.children("." + S.params.slideClass + "." + S.params.slideDuplicateClass + '[data-swiper-slide-index="' + S.realIndex + '"]').addClass(S.params.slideDuplicateActiveClass));var t = e.next("." + S.params.slideClass).addClass(S.params.slideNextClass);S.params.loop && 0 === t.length && (t = S.slides.eq(0), t.addClass(S.params.slideNextClass));var s = e.prev("." + S.params.slideClass).addClass(S.params.slidePrevClass);if (S.params.loop && 0 === s.length && (s = S.slides.eq(-1), s.addClass(S.params.slidePrevClass)), i.loop && (t.hasClass(S.params.slideDuplicateClass) ? S.wrapper.children("." + S.params.slideClass + ":not(." + S.params.slideDuplicateClass + ')[data-swiper-slide-index="' + t.attr("data-swiper-slide-index") + '"]').addClass(S.params.slideDuplicateNextClass) : S.wrapper.children("." + S.params.slideClass + "." + S.params.slideDuplicateClass + '[data-swiper-slide-index="' + t.attr("data-swiper-slide-index") + '"]').addClass(S.params.slideDuplicateNextClass), s.hasClass(S.params.slideDuplicateClass) ? S.wrapper.children("." + S.params.slideClass + ":not(." + S.params.slideDuplicateClass + ')[data-swiper-slide-index="' + s.attr("data-swiper-slide-index") + '"]').addClass(S.params.slideDuplicatePrevClass) : S.wrapper.children("." + S.params.slideClass + "." + S.params.slideDuplicateClass + '[data-swiper-slide-index="' + s.attr("data-swiper-slide-index") + '"]').addClass(S.params.slideDuplicatePrevClass)), S.paginationContainer && S.paginationContainer.length > 0) {
          var r,
              n = S.params.loop ? Math.ceil((S.slides.length - 2 * S.loopedSlides) / S.params.slidesPerGroup) : S.snapGrid.length;if (S.params.loop ? (r = Math.ceil((S.activeIndex - S.loopedSlides) / S.params.slidesPerGroup), r > S.slides.length - 1 - 2 * S.loopedSlides && (r -= S.slides.length - 2 * S.loopedSlides), r > n - 1 && (r -= n), r < 0 && "bullets" !== S.params.paginationType && (r = n + r)) : r = "undefined" != typeof S.snapIndex ? S.snapIndex : S.activeIndex || 0, "bullets" === S.params.paginationType && S.bullets && S.bullets.length > 0 && (S.bullets.removeClass(S.params.bulletActiveClass), S.paginationContainer.length > 1 ? S.bullets.each(function () {
            a(this).index() === r && a(this).addClass(S.params.bulletActiveClass);
          }) : S.bullets.eq(r).addClass(S.params.bulletActiveClass)), "fraction" === S.params.paginationType && (S.paginationContainer.find("." + S.params.paginationCurrentClass).text(r + 1), S.paginationContainer.find("." + S.params.paginationTotalClass).text(n)), "progress" === S.params.paginationType) {
            var o = (r + 1) / n,
                l = o,
                p = 1;S.isHorizontal() || (p = o, l = 1), S.paginationContainer.find("." + S.params.paginationProgressbarClass).transform("translate3d(0,0,0) scaleX(" + l + ") scaleY(" + p + ")").transition(S.params.speed);
          }"custom" === S.params.paginationType && S.params.paginationCustomRender && (S.paginationContainer.html(S.params.paginationCustomRender(S, r + 1, n)), S.emit("onPaginationRendered", S, S.paginationContainer[0]));
        }S.params.loop || (S.params.prevButton && S.prevButton && S.prevButton.length > 0 && (S.isBeginning ? (S.prevButton.addClass(S.params.buttonDisabledClass), S.params.a11y && S.a11y && S.a11y.disable(S.prevButton)) : (S.prevButton.removeClass(S.params.buttonDisabledClass), S.params.a11y && S.a11y && S.a11y.enable(S.prevButton))), S.params.nextButton && S.nextButton && S.nextButton.length > 0 && (S.isEnd ? (S.nextButton.addClass(S.params.buttonDisabledClass), S.params.a11y && S.a11y && S.a11y.disable(S.nextButton)) : (S.nextButton.removeClass(S.params.buttonDisabledClass), S.params.a11y && S.a11y && S.a11y.enable(S.nextButton))));
      }, S.updatePagination = function () {
        if (S.params.pagination && S.paginationContainer && S.paginationContainer.length > 0) {
          var e = "";if ("bullets" === S.params.paginationType) {
            for (var a = S.params.loop ? Math.ceil((S.slides.length - 2 * S.loopedSlides) / S.params.slidesPerGroup) : S.snapGrid.length, t = 0; t < a; t++) e += S.params.paginationBulletRender ? S.params.paginationBulletRender(S, t, S.params.bulletClass) : "<" + S.params.paginationElement + ' class="' + S.params.bulletClass + '"></' + S.params.paginationElement + ">";S.paginationContainer.html(e), S.bullets = S.paginationContainer.find("." + S.params.bulletClass), S.params.paginationClickable && S.params.a11y && S.a11y && S.a11y.initPagination();
          }"fraction" === S.params.paginationType && (e = S.params.paginationFractionRender ? S.params.paginationFractionRender(S, S.params.paginationCurrentClass, S.params.paginationTotalClass) : '<span class="' + S.params.paginationCurrentClass + '"></span> / <span class="' + S.params.paginationTotalClass + '"></span>', S.paginationContainer.html(e)), "progress" === S.params.paginationType && (e = S.params.paginationProgressRender ? S.params.paginationProgressRender(S, S.params.paginationProgressbarClass) : '<span class="' + S.params.paginationProgressbarClass + '"></span>', S.paginationContainer.html(e)), "custom" !== S.params.paginationType && S.emit("onPaginationRendered", S, S.paginationContainer[0]);
        }
      }, S.update = function (e) {
        function a() {
          S.rtl ? -S.translate : S.translate;s = Math.min(Math.max(S.translate, S.maxTranslate()), S.minTranslate()), S.setWrapperTranslate(s), S.updateActiveIndex(), S.updateClasses();
        }if (S.updateContainerSize(), S.updateSlidesSize(), S.updateProgress(), S.updatePagination(), S.updateClasses(), S.params.scrollbar && S.scrollbar && S.scrollbar.set(), e) {
          var t, s;S.controller && S.controller.spline && (S.controller.spline = void 0), S.params.freeMode ? (a(), S.params.autoHeight && S.updateAutoHeight()) : (t = ("auto" === S.params.slidesPerView || S.params.slidesPerView > 1) && S.isEnd && !S.params.centeredSlides ? S.slideTo(S.slides.length - 1, 0, !1, !0) : S.slideTo(S.activeIndex, 0, !1, !0), t || a());
        } else S.params.autoHeight && S.updateAutoHeight();
      }, S.onResize = function (e) {
        S.params.breakpoints && S.setBreakpoint();var a = S.params.allowSwipeToPrev,
            t = S.params.allowSwipeToNext;S.params.allowSwipeToPrev = S.params.allowSwipeToNext = !0, S.updateContainerSize(), S.updateSlidesSize(), ("auto" === S.params.slidesPerView || S.params.freeMode || e) && S.updatePagination(), S.params.scrollbar && S.scrollbar && S.scrollbar.set(), S.controller && S.controller.spline && (S.controller.spline = void 0);var s = !1;if (S.params.freeMode) {
          var i = Math.min(Math.max(S.translate, S.maxTranslate()), S.minTranslate());S.setWrapperTranslate(i), S.updateActiveIndex(), S.updateClasses(), S.params.autoHeight && S.updateAutoHeight();
        } else S.updateClasses(), s = ("auto" === S.params.slidesPerView || S.params.slidesPerView > 1) && S.isEnd && !S.params.centeredSlides ? S.slideTo(S.slides.length - 1, 0, !1, !0) : S.slideTo(S.activeIndex, 0, !1, !0);S.params.lazyLoading && !s && S.lazy && S.lazy.load(), S.params.allowSwipeToPrev = a, S.params.allowSwipeToNext = t;
      }, S.touchEventsDesktop = { start: "mousedown", move: "mousemove", end: "mouseup" }, window.navigator.pointerEnabled ? S.touchEventsDesktop = { start: "pointerdown", move: "pointermove", end: "pointerup" } : window.navigator.msPointerEnabled && (S.touchEventsDesktop = { start: "MSPointerDown", move: "MSPointerMove", end: "MSPointerUp" }), S.touchEvents = { start: S.support.touch || !S.params.simulateTouch ? "touchstart" : S.touchEventsDesktop.start, move: S.support.touch || !S.params.simulateTouch ? "touchmove" : S.touchEventsDesktop.move, end: S.support.touch || !S.params.simulateTouch ? "touchend" : S.touchEventsDesktop.end }, (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && ("container" === S.params.touchEventsTarget ? S.container : S.wrapper).addClass("swiper-wp8-" + S.params.direction), S.initEvents = function (e) {
        var a = e ? "off" : "on",
            t = e ? "removeEventListener" : "addEventListener",
            s = "container" === S.params.touchEventsTarget ? S.container[0] : S.wrapper[0],
            r = S.support.touch ? s : document,
            n = !!S.params.nested;if (S.browser.ie) s[t](S.touchEvents.start, S.onTouchStart, !1), r[t](S.touchEvents.move, S.onTouchMove, n), r[t](S.touchEvents.end, S.onTouchEnd, !1);else {
          if (S.support.touch) {
            var o = !("touchstart" !== S.touchEvents.start || !S.support.passiveListener || !S.params.passiveListeners) && { passive: !0, capture: !1 };s[t](S.touchEvents.start, S.onTouchStart, o), s[t](S.touchEvents.move, S.onTouchMove, n), s[t](S.touchEvents.end, S.onTouchEnd, o);
          }(i.simulateTouch && !S.device.ios && !S.device.android || i.simulateTouch && !S.support.touch && S.device.ios) && (s[t]("mousedown", S.onTouchStart, !1), document[t]("mousemove", S.onTouchMove, n), document[t]("mouseup", S.onTouchEnd, !1));
        }window[t]("resize", S.onResize), S.params.nextButton && S.nextButton && S.nextButton.length > 0 && (S.nextButton[a]("click", S.onClickNext), S.params.a11y && S.a11y && S.nextButton[a]("keydown", S.a11y.onEnterKey)), S.params.prevButton && S.prevButton && S.prevButton.length > 0 && (S.prevButton[a]("click", S.onClickPrev), S.params.a11y && S.a11y && S.prevButton[a]("keydown", S.a11y.onEnterKey)), S.params.pagination && S.params.paginationClickable && (S.paginationContainer[a]("click", "." + S.params.bulletClass, S.onClickIndex), S.params.a11y && S.a11y && S.paginationContainer[a]("keydown", "." + S.params.bulletClass, S.a11y.onEnterKey)), (S.params.preventClicks || S.params.preventClicksPropagation) && s[t]("click", S.preventClicks, !0);
      }, S.attachEvents = function () {
        S.initEvents();
      }, S.detachEvents = function () {
        S.initEvents(!0);
      }, S.allowClick = !0, S.preventClicks = function (e) {
        S.allowClick || (S.params.preventClicks && e.preventDefault(), S.params.preventClicksPropagation && S.animating && (e.stopPropagation(), e.stopImmediatePropagation()));
      }, S.onClickNext = function (e) {
        e.preventDefault(), S.isEnd && !S.params.loop || S.slideNext();
      }, S.onClickPrev = function (e) {
        e.preventDefault(), S.isBeginning && !S.params.loop || S.slidePrev();
      }, S.onClickIndex = function (e) {
        e.preventDefault();var t = a(this).index() * S.params.slidesPerGroup;S.params.loop && (t += S.loopedSlides), S.slideTo(t);
      }, S.updateClickedSlide = function (e) {
        var t = l(e, "." + S.params.slideClass),
            s = !1;if (t) for (var i = 0; i < S.slides.length; i++) S.slides[i] === t && (s = !0);if (!t || !s) return S.clickedSlide = void 0, void (S.clickedIndex = void 0);if (S.clickedSlide = t, S.clickedIndex = a(t).index(), S.params.slideToClickedSlide && void 0 !== S.clickedIndex && S.clickedIndex !== S.activeIndex) {
          var r,
              n = S.clickedIndex;if (S.params.loop) {
            if (S.animating) return;r = a(S.clickedSlide).attr("data-swiper-slide-index"), S.params.centeredSlides ? n < S.loopedSlides - S.params.slidesPerView / 2 || n > S.slides.length - S.loopedSlides + S.params.slidesPerView / 2 ? (S.fixLoop(), n = S.wrapper.children("." + S.params.slideClass + '[data-swiper-slide-index="' + r + '"]:not(.' + S.params.slideDuplicateClass + ")").eq(0).index(), setTimeout(function () {
              S.slideTo(n);
            }, 0)) : S.slideTo(n) : n > S.slides.length - S.params.slidesPerView ? (S.fixLoop(), n = S.wrapper.children("." + S.params.slideClass + '[data-swiper-slide-index="' + r + '"]:not(.' + S.params.slideDuplicateClass + ")").eq(0).index(), setTimeout(function () {
              S.slideTo(n);
            }, 0)) : S.slideTo(n);
          } else S.slideTo(n);
        }
      };var z,
          M,
          E,
          P,
          I,
          k,
          L,
          D,
          B,
          H,
          G = "input, select, textarea, button, video",
          X = Date.now(),
          Y = [];S.animating = !1, S.touches = { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 };var A, O;S.onTouchStart = function (e) {
        if (e.originalEvent && (e = e.originalEvent), A = "touchstart" === e.type, A || !("which" in e) || 3 !== e.which) {
          if (S.params.noSwiping && l(e, "." + S.params.noSwipingClass)) return void (S.allowClick = !0);if (!S.params.swipeHandler || l(e, S.params.swipeHandler)) {
            var t = S.touches.currentX = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX,
                s = S.touches.currentY = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY;if (!(S.device.ios && S.params.iOSEdgeSwipeDetection && t <= S.params.iOSEdgeSwipeThreshold)) {
              if (z = !0, M = !1, E = !0, I = void 0, O = void 0, S.touches.startX = t, S.touches.startY = s, P = Date.now(), S.allowClick = !0, S.updateContainerSize(), S.swipeDirection = void 0, S.params.threshold > 0 && (D = !1), "touchstart" !== e.type) {
                var i = !0;a(e.target).is(G) && (i = !1), document.activeElement && a(document.activeElement).is(G) && document.activeElement.blur(), i && e.preventDefault();
              }S.emit("onTouchStart", S, e);
            }
          }
        }
      }, S.onTouchMove = function (e) {
        if (e.originalEvent && (e = e.originalEvent), !A || "mousemove" !== e.type) {
          if (e.preventedByNestedSwiper) return S.touches.startX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, void (S.touches.startY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY);if (S.params.onlyExternal) return S.allowClick = !1, void (z && (S.touches.startX = S.touches.currentX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, S.touches.startY = S.touches.currentY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, P = Date.now()));if (A && S.params.touchReleaseOnEdges && !S.params.loop) if (S.isHorizontal()) {
            if (S.touches.currentX < S.touches.startX && S.translate <= S.maxTranslate() || S.touches.currentX > S.touches.startX && S.translate >= S.minTranslate()) return;
          } else if (S.touches.currentY < S.touches.startY && S.translate <= S.maxTranslate() || S.touches.currentY > S.touches.startY && S.translate >= S.minTranslate()) return;if (A && document.activeElement && e.target === document.activeElement && a(e.target).is(G)) return M = !0, void (S.allowClick = !1);if (E && S.emit("onTouchMove", S, e), !(e.targetTouches && e.targetTouches.length > 1)) {
            if (S.touches.currentX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, S.touches.currentY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, "undefined" == typeof I) {
              var t;S.isHorizontal() && S.touches.currentY === S.touches.startY || !S.isHorizontal() && S.touches.currentX !== S.touches.startX ? I = !1 : (t = 180 * Math.atan2(Math.abs(S.touches.currentY - S.touches.startY), Math.abs(S.touches.currentX - S.touches.startX)) / Math.PI, I = S.isHorizontal() ? t > S.params.touchAngle : 90 - t > S.params.touchAngle);
            }if (I && S.emit("onTouchMoveOpposite", S, e), "undefined" == typeof O && S.browser.ieTouch && (S.touches.currentX === S.touches.startX && S.touches.currentY === S.touches.startY || (O = !0)), z) {
              if (I) return void (z = !1);if (O || !S.browser.ieTouch) {
                S.allowClick = !1, S.emit("onSliderMove", S, e), e.preventDefault(), S.params.touchMoveStopPropagation && !S.params.nested && e.stopPropagation(), M || (i.loop && S.fixLoop(), L = S.getWrapperTranslate(), S.setWrapperTransition(0), S.animating && S.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"), S.params.autoplay && S.autoplaying && (S.params.autoplayDisableOnInteraction ? S.stopAutoplay() : S.pauseAutoplay()), H = !1, !S.params.grabCursor || S.params.allowSwipeToNext !== !0 && S.params.allowSwipeToPrev !== !0 || S.setGrabCursor(!0)), M = !0;var s = S.touches.diff = S.isHorizontal() ? S.touches.currentX - S.touches.startX : S.touches.currentY - S.touches.startY;s *= S.params.touchRatio, S.rtl && (s = -s), S.swipeDirection = s > 0 ? "prev" : "next", k = s + L;var r = !0;if (s > 0 && k > S.minTranslate() ? (r = !1, S.params.resistance && (k = S.minTranslate() - 1 + Math.pow(-S.minTranslate() + L + s, S.params.resistanceRatio))) : s < 0 && k < S.maxTranslate() && (r = !1, S.params.resistance && (k = S.maxTranslate() + 1 - Math.pow(S.maxTranslate() - L - s, S.params.resistanceRatio))), r && (e.preventedByNestedSwiper = !0), !S.params.allowSwipeToNext && "next" === S.swipeDirection && k < L && (k = L), !S.params.allowSwipeToPrev && "prev" === S.swipeDirection && k > L && (k = L), S.params.threshold > 0) {
                  if (!(Math.abs(s) > S.params.threshold || D)) return void (k = L);if (!D) return D = !0, S.touches.startX = S.touches.currentX, S.touches.startY = S.touches.currentY, k = L, void (S.touches.diff = S.isHorizontal() ? S.touches.currentX - S.touches.startX : S.touches.currentY - S.touches.startY);
                }S.params.followFinger && ((S.params.freeMode || S.params.watchSlidesProgress) && S.updateActiveIndex(), S.params.freeMode && (0 === Y.length && Y.push({ position: S.touches[S.isHorizontal() ? "startX" : "startY"], time: P }), Y.push({ position: S.touches[S.isHorizontal() ? "currentX" : "currentY"], time: new window.Date().getTime() })), S.updateProgress(k), S.setWrapperTranslate(k));
              }
            }
          }
        }
      }, S.onTouchEnd = function (e) {
        if (e.originalEvent && (e = e.originalEvent), E && S.emit("onTouchEnd", S, e), E = !1, z) {
          S.params.grabCursor && M && z && (S.params.allowSwipeToNext === !0 || S.params.allowSwipeToPrev === !0) && S.setGrabCursor(!1);var t = Date.now(),
              s = t - P;if (S.allowClick && (S.updateClickedSlide(e), S.emit("onTap", S, e), s < 300 && t - X > 300 && (B && clearTimeout(B), B = setTimeout(function () {
            S && (S.params.paginationHide && S.paginationContainer.length > 0 && !a(e.target).hasClass(S.params.bulletClass) && S.paginationContainer.toggleClass(S.params.paginationHiddenClass), S.emit("onClick", S, e));
          }, 300)), s < 300 && t - X < 300 && (B && clearTimeout(B), S.emit("onDoubleTap", S, e))), X = Date.now(), setTimeout(function () {
            S && (S.allowClick = !0);
          }, 0), !z || !M || !S.swipeDirection || 0 === S.touches.diff || k === L) return void (z = M = !1);z = M = !1;var i;if (i = S.params.followFinger ? S.rtl ? S.translate : -S.translate : -k, S.params.freeMode) {
            if (i < -S.minTranslate()) return void S.slideTo(S.activeIndex);if (i > -S.maxTranslate()) return void (S.slides.length < S.snapGrid.length ? S.slideTo(S.snapGrid.length - 1) : S.slideTo(S.slides.length - 1));if (S.params.freeModeMomentum) {
              if (Y.length > 1) {
                var r = Y.pop(),
                    n = Y.pop(),
                    o = r.position - n.position,
                    l = r.time - n.time;S.velocity = o / l, S.velocity = S.velocity / 2, Math.abs(S.velocity) < S.params.freeModeMinimumVelocity && (S.velocity = 0), (l > 150 || new window.Date().getTime() - r.time > 300) && (S.velocity = 0);
              } else S.velocity = 0;S.velocity = S.velocity * S.params.freeModeMomentumVelocityRatio, Y.length = 0;var p = 1e3 * S.params.freeModeMomentumRatio,
                  d = S.velocity * p,
                  u = S.translate + d;S.rtl && (u = -u);var c,
                  m = !1,
                  h = 20 * Math.abs(S.velocity) * S.params.freeModeMomentumBounceRatio;if (u < S.maxTranslate()) S.params.freeModeMomentumBounce ? (u + S.maxTranslate() < -h && (u = S.maxTranslate() - h), c = S.maxTranslate(), m = !0, H = !0) : u = S.maxTranslate();else if (u > S.minTranslate()) S.params.freeModeMomentumBounce ? (u - S.minTranslate() > h && (u = S.minTranslate() + h), c = S.minTranslate(), m = !0, H = !0) : u = S.minTranslate();else if (S.params.freeModeSticky) {
                var g,
                    f = 0;for (f = 0; f < S.snapGrid.length; f += 1) if (S.snapGrid[f] > -u) {
                  g = f;break;
                }u = Math.abs(S.snapGrid[g] - u) < Math.abs(S.snapGrid[g - 1] - u) || "next" === S.swipeDirection ? S.snapGrid[g] : S.snapGrid[g - 1], S.rtl || (u = -u);
              }if (0 !== S.velocity) p = S.rtl ? Math.abs((-u - S.translate) / S.velocity) : Math.abs((u - S.translate) / S.velocity);else if (S.params.freeModeSticky) return void S.slideReset();S.params.freeModeMomentumBounce && m ? (S.updateProgress(c), S.setWrapperTransition(p), S.setWrapperTranslate(u), S.onTransitionStart(), S.animating = !0, S.wrapper.transitionEnd(function () {
                S && H && (S.emit("onMomentumBounce", S), S.setWrapperTransition(S.params.speed), S.setWrapperTranslate(c), S.wrapper.transitionEnd(function () {
                  S && S.onTransitionEnd();
                }));
              })) : S.velocity ? (S.updateProgress(u), S.setWrapperTransition(p), S.setWrapperTranslate(u), S.onTransitionStart(), S.animating || (S.animating = !0, S.wrapper.transitionEnd(function () {
                S && S.onTransitionEnd();
              }))) : S.updateProgress(u), S.updateActiveIndex();
            }return void ((!S.params.freeModeMomentum || s >= S.params.longSwipesMs) && (S.updateProgress(), S.updateActiveIndex()));
          }var v,
              w = 0,
              y = S.slidesSizesGrid[0];for (v = 0; v < S.slidesGrid.length; v += S.params.slidesPerGroup) "undefined" != typeof S.slidesGrid[v + S.params.slidesPerGroup] ? i >= S.slidesGrid[v] && i < S.slidesGrid[v + S.params.slidesPerGroup] && (w = v, y = S.slidesGrid[v + S.params.slidesPerGroup] - S.slidesGrid[v]) : i >= S.slidesGrid[v] && (w = v, y = S.slidesGrid[S.slidesGrid.length - 1] - S.slidesGrid[S.slidesGrid.length - 2]);var x = (i - S.slidesGrid[w]) / y;if (s > S.params.longSwipesMs) {
            if (!S.params.longSwipes) return void S.slideTo(S.activeIndex);"next" === S.swipeDirection && (x >= S.params.longSwipesRatio ? S.slideTo(w + S.params.slidesPerGroup) : S.slideTo(w)), "prev" === S.swipeDirection && (x > 1 - S.params.longSwipesRatio ? S.slideTo(w + S.params.slidesPerGroup) : S.slideTo(w));
          } else {
            if (!S.params.shortSwipes) return void S.slideTo(S.activeIndex);"next" === S.swipeDirection && S.slideTo(w + S.params.slidesPerGroup), "prev" === S.swipeDirection && S.slideTo(w);
          }
        }
      }, S._slideTo = function (e, a) {
        return S.slideTo(e, a, !0, !0);
      }, S.slideTo = function (e, a, t, s) {
        "undefined" == typeof t && (t = !0), "undefined" == typeof e && (e = 0), e < 0 && (e = 0), S.snapIndex = Math.floor(e / S.params.slidesPerGroup), S.snapIndex >= S.snapGrid.length && (S.snapIndex = S.snapGrid.length - 1);var i = -S.snapGrid[S.snapIndex];if (S.params.autoplay && S.autoplaying && (s || !S.params.autoplayDisableOnInteraction ? S.pauseAutoplay(a) : S.stopAutoplay()), S.updateProgress(i), S.params.normalizeSlideIndex) for (var r = 0; r < S.slidesGrid.length; r++) -Math.floor(100 * i) >= Math.floor(100 * S.slidesGrid[r]) && (e = r);return !(!S.params.allowSwipeToNext && i < S.translate && i < S.minTranslate()) && !(!S.params.allowSwipeToPrev && i > S.translate && i > S.maxTranslate() && (S.activeIndex || 0) !== e) && ("undefined" == typeof a && (a = S.params.speed), S.previousIndex = S.activeIndex || 0, S.activeIndex = e, S.updateRealIndex(), S.rtl && -i === S.translate || !S.rtl && i === S.translate ? (S.params.autoHeight && S.updateAutoHeight(), S.updateClasses(), "slide" !== S.params.effect && S.setWrapperTranslate(i), !1) : (S.updateClasses(), S.onTransitionStart(t), 0 === a || S.browser.lteIE9 ? (S.setWrapperTranslate(i), S.setWrapperTransition(0), S.onTransitionEnd(t)) : (S.setWrapperTranslate(i), S.setWrapperTransition(a), S.animating || (S.animating = !0, S.wrapper.transitionEnd(function () {
          S && S.onTransitionEnd(t);
        }))), !0));
      }, S.onTransitionStart = function (e) {
        "undefined" == typeof e && (e = !0), S.params.autoHeight && S.updateAutoHeight(), S.lazy && S.lazy.onTransitionStart(), e && (S.emit("onTransitionStart", S), S.activeIndex !== S.previousIndex && (S.emit("onSlideChangeStart", S), S.activeIndex > S.previousIndex ? S.emit("onSlideNextStart", S) : S.emit("onSlidePrevStart", S)));
      }, S.onTransitionEnd = function (e) {
        S.animating = !1, S.setWrapperTransition(0), "undefined" == typeof e && (e = !0), S.lazy && S.lazy.onTransitionEnd(), e && (S.emit("onTransitionEnd", S), S.activeIndex !== S.previousIndex && (S.emit("onSlideChangeEnd", S), S.activeIndex > S.previousIndex ? S.emit("onSlideNextEnd", S) : S.emit("onSlidePrevEnd", S))), S.params.history && S.history && S.history.setHistory(S.params.history, S.activeIndex), S.params.hashnav && S.hashnav && S.hashnav.setHash();
      }, S.slideNext = function (e, a, t) {
        if (S.params.loop) {
          if (S.animating) return !1;S.fixLoop();S.container[0].clientLeft;return S.slideTo(S.activeIndex + S.params.slidesPerGroup, a, e, t);
        }return S.slideTo(S.activeIndex + S.params.slidesPerGroup, a, e, t);
      }, S._slideNext = function (e) {
        return S.slideNext(!0, e, !0);
      }, S.slidePrev = function (e, a, t) {
        if (S.params.loop) {
          if (S.animating) return !1;S.fixLoop();S.container[0].clientLeft;return S.slideTo(S.activeIndex - 1, a, e, t);
        }return S.slideTo(S.activeIndex - 1, a, e, t);
      }, S._slidePrev = function (e) {
        return S.slidePrev(!0, e, !0);
      }, S.slideReset = function (e, a, t) {
        return S.slideTo(S.activeIndex, a, e);
      }, S.disableTouchControl = function () {
        return S.params.onlyExternal = !0, !0;
      }, S.enableTouchControl = function () {
        return S.params.onlyExternal = !1, !0;
      }, S.setWrapperTransition = function (e, a) {
        S.wrapper.transition(e), "slide" !== S.params.effect && S.effects[S.params.effect] && S.effects[S.params.effect].setTransition(e), S.params.parallax && S.parallax && S.parallax.setTransition(e), S.params.scrollbar && S.scrollbar && S.scrollbar.setTransition(e), S.params.control && S.controller && S.controller.setTransition(e, a), S.emit("onSetTransition", S, e);
      }, S.setWrapperTranslate = function (e, a, t) {
        var s = 0,
            i = 0,
            r = 0;S.isHorizontal() ? s = S.rtl ? -e : e : i = e, S.params.roundLengths && (s = n(s), i = n(i)), S.params.virtualTranslate || (S.support.transforms3d ? S.wrapper.transform("translate3d(" + s + "px, " + i + "px, " + r + "px)") : S.wrapper.transform("translate(" + s + "px, " + i + "px)")), S.translate = S.isHorizontal() ? s : i;var o,
            l = S.maxTranslate() - S.minTranslate();o = 0 === l ? 0 : (e - S.minTranslate()) / l, o !== S.progress && S.updateProgress(e), a && S.updateActiveIndex(), "slide" !== S.params.effect && S.effects[S.params.effect] && S.effects[S.params.effect].setTranslate(S.translate), S.params.parallax && S.parallax && S.parallax.setTranslate(S.translate), S.params.scrollbar && S.scrollbar && S.scrollbar.setTranslate(S.translate), S.params.control && S.controller && S.controller.setTranslate(S.translate, t), S.emit("onSetTranslate", S, S.translate);
      }, S.getTranslate = function (e, a) {
        var t, s, i, r;return "undefined" == typeof a && (a = "x"), S.params.virtualTranslate ? S.rtl ? -S.translate : S.translate : (i = window.getComputedStyle(e, null), window.WebKitCSSMatrix ? (s = i.transform || i.webkitTransform, s.split(",").length > 6 && (s = s.split(", ").map(function (e) {
          return e.replace(",", ".");
        }).join(", ")), r = new window.WebKitCSSMatrix("none" === s ? "" : s)) : (r = i.MozTransform || i.OTransform || i.MsTransform || i.msTransform || i.transform || i.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), t = r.toString().split(",")), "x" === a && (s = window.WebKitCSSMatrix ? r.m41 : 16 === t.length ? parseFloat(t[12]) : parseFloat(t[4])), "y" === a && (s = window.WebKitCSSMatrix ? r.m42 : 16 === t.length ? parseFloat(t[13]) : parseFloat(t[5])), S.rtl && s && (s = -s), s || 0);
      }, S.getWrapperTranslate = function (e) {
        return "undefined" == typeof e && (e = S.isHorizontal() ? "x" : "y"), S.getTranslate(S.wrapper[0], e);
      }, S.observers = [], S.initObservers = function () {
        if (S.params.observeParents) for (var e = S.container.parents(), a = 0; a < e.length; a++) p(e[a]);p(S.container[0], { childList: !1 }), p(S.wrapper[0], { attributes: !1 });
      }, S.disconnectObservers = function () {
        for (var e = 0; e < S.observers.length; e++) S.observers[e].disconnect();S.observers = [];
      }, S.createLoop = function () {
        S.wrapper.children("." + S.params.slideClass + "." + S.params.slideDuplicateClass).remove();var e = S.wrapper.children("." + S.params.slideClass);"auto" !== S.params.slidesPerView || S.params.loopedSlides || (S.params.loopedSlides = e.length), S.loopedSlides = parseInt(S.params.loopedSlides || S.params.slidesPerView, 10), S.loopedSlides = S.loopedSlides + S.params.loopAdditionalSlides, S.loopedSlides > e.length && (S.loopedSlides = e.length);var t,
            s = [],
            i = [];for (e.each(function (t, r) {
          var n = a(this);t < S.loopedSlides && i.push(r), t < e.length && t >= e.length - S.loopedSlides && s.push(r), n.attr("data-swiper-slide-index", t);
        }), t = 0; t < i.length; t++) S.wrapper.append(a(i[t].cloneNode(!0)).addClass(S.params.slideDuplicateClass));for (t = s.length - 1; t >= 0; t--) S.wrapper.prepend(a(s[t].cloneNode(!0)).addClass(S.params.slideDuplicateClass));
      }, S.destroyLoop = function () {
        S.wrapper.children("." + S.params.slideClass + "." + S.params.slideDuplicateClass).remove(), S.slides.removeAttr("data-swiper-slide-index");
      }, S.reLoop = function (e) {
        var a = S.activeIndex - S.loopedSlides;S.destroyLoop(), S.createLoop(), S.updateSlidesSize(), e && S.slideTo(a + S.loopedSlides, 0, !1);
      }, S.fixLoop = function () {
        var e;S.activeIndex < S.loopedSlides ? (e = S.slides.length - 3 * S.loopedSlides + S.activeIndex, e += S.loopedSlides, S.slideTo(e, 0, !1, !0)) : ("auto" === S.params.slidesPerView && S.activeIndex >= 2 * S.loopedSlides || S.activeIndex > S.slides.length - 2 * S.params.slidesPerView) && (e = -S.slides.length + S.activeIndex + S.loopedSlides, e += S.loopedSlides, S.slideTo(e, 0, !1, !0));
      }, S.appendSlide = function (e) {
        if (S.params.loop && S.destroyLoop(), "object" == typeof e && e.length) for (var a = 0; a < e.length; a++) e[a] && S.wrapper.append(e[a]);else S.wrapper.append(e);S.params.loop && S.createLoop(), S.params.observer && S.support.observer || S.update(!0);
      }, S.prependSlide = function (e) {
        S.params.loop && S.destroyLoop();var a = S.activeIndex + 1;if ("object" == typeof e && e.length) {
          for (var t = 0; t < e.length; t++) e[t] && S.wrapper.prepend(e[t]);a = S.activeIndex + e.length;
        } else S.wrapper.prepend(e);S.params.loop && S.createLoop(), S.params.observer && S.support.observer || S.update(!0), S.slideTo(a, 0, !1);
      }, S.removeSlide = function (e) {
        S.params.loop && (S.destroyLoop(), S.slides = S.wrapper.children("." + S.params.slideClass));var a,
            t = S.activeIndex;if ("object" == typeof e && e.length) {
          for (var s = 0; s < e.length; s++) a = e[s], S.slides[a] && S.slides.eq(a).remove(), a < t && t--;t = Math.max(t, 0);
        } else a = e, S.slides[a] && S.slides.eq(a).remove(), a < t && t--, t = Math.max(t, 0);S.params.loop && S.createLoop(), S.params.observer && S.support.observer || S.update(!0), S.params.loop ? S.slideTo(t + S.loopedSlides, 0, !1) : S.slideTo(t, 0, !1);
      }, S.removeAllSlides = function () {
        for (var e = [], a = 0; a < S.slides.length; a++) e.push(a);S.removeSlide(e);
      }, S.effects = { fade: { setTranslate: function () {
            for (var e = 0; e < S.slides.length; e++) {
              var a = S.slides.eq(e),
                  t = a[0].swiperSlideOffset,
                  s = -t;S.params.virtualTranslate || (s -= S.translate);var i = 0;S.isHorizontal() || (i = s, s = 0);var r = S.params.fade.crossFade ? Math.max(1 - Math.abs(a[0].progress), 0) : 1 + Math.min(Math.max(a[0].progress, -1), 0);a.css({ opacity: r }).transform("translate3d(" + s + "px, " + i + "px, 0px)");
            }
          }, setTransition: function (e) {
            if (S.slides.transition(e), S.params.virtualTranslate && 0 !== e) {
              var a = !1;S.slides.transitionEnd(function () {
                if (!a && S) {
                  a = !0, S.animating = !1;for (var e = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], t = 0; t < e.length; t++) S.wrapper.trigger(e[t]);
                }
              });
            }
          } }, flip: { setTranslate: function () {
            for (var e = 0; e < S.slides.length; e++) {
              var t = S.slides.eq(e),
                  s = t[0].progress;S.params.flip.limitRotation && (s = Math.max(Math.min(t[0].progress, 1), -1));var i = t[0].swiperSlideOffset,
                  r = -180 * s,
                  n = r,
                  o = 0,
                  l = -i,
                  p = 0;if (S.isHorizontal() ? S.rtl && (n = -n) : (p = l, l = 0, o = -n, n = 0), t[0].style.zIndex = -Math.abs(Math.round(s)) + S.slides.length, S.params.flip.slideShadows) {
                var d = S.isHorizontal() ? t.find(".swiper-slide-shadow-left") : t.find(".swiper-slide-shadow-top"),
                    u = S.isHorizontal() ? t.find(".swiper-slide-shadow-right") : t.find(".swiper-slide-shadow-bottom");0 === d.length && (d = a('<div class="swiper-slide-shadow-' + (S.isHorizontal() ? "left" : "top") + '"></div>'), t.append(d)), 0 === u.length && (u = a('<div class="swiper-slide-shadow-' + (S.isHorizontal() ? "right" : "bottom") + '"></div>'), t.append(u)), d.length && (d[0].style.opacity = Math.max(-s, 0)), u.length && (u[0].style.opacity = Math.max(s, 0));
              }t.transform("translate3d(" + l + "px, " + p + "px, 0px) rotateX(" + o + "deg) rotateY(" + n + "deg)");
            }
          }, setTransition: function (e) {
            if (S.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), S.params.virtualTranslate && 0 !== e) {
              var t = !1;S.slides.eq(S.activeIndex).transitionEnd(function () {
                if (!t && S && a(this).hasClass(S.params.slideActiveClass)) {
                  t = !0, S.animating = !1;for (var e = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], s = 0; s < e.length; s++) S.wrapper.trigger(e[s]);
                }
              });
            }
          } }, cube: { setTranslate: function () {
            var e,
                t = 0;S.params.cube.shadow && (S.isHorizontal() ? (e = S.wrapper.find(".swiper-cube-shadow"), 0 === e.length && (e = a('<div class="swiper-cube-shadow"></div>'), S.wrapper.append(e)), e.css({ height: S.width + "px" })) : (e = S.container.find(".swiper-cube-shadow"), 0 === e.length && (e = a('<div class="swiper-cube-shadow"></div>'), S.container.append(e))));for (var s = 0; s < S.slides.length; s++) {
              var i = S.slides.eq(s),
                  r = 90 * s,
                  n = Math.floor(r / 360);S.rtl && (r = -r, n = Math.floor(-r / 360));var o = Math.max(Math.min(i[0].progress, 1), -1),
                  l = 0,
                  p = 0,
                  d = 0;s % 4 === 0 ? (l = 4 * -n * S.size, d = 0) : (s - 1) % 4 === 0 ? (l = 0, d = 4 * -n * S.size) : (s - 2) % 4 === 0 ? (l = S.size + 4 * n * S.size, d = S.size) : (s - 3) % 4 === 0 && (l = -S.size, d = 3 * S.size + 4 * S.size * n), S.rtl && (l = -l), S.isHorizontal() || (p = l, l = 0);var u = "rotateX(" + (S.isHorizontal() ? 0 : -r) + "deg) rotateY(" + (S.isHorizontal() ? r : 0) + "deg) translate3d(" + l + "px, " + p + "px, " + d + "px)";if (o <= 1 && o > -1 && (t = 90 * s + 90 * o, S.rtl && (t = 90 * -s - 90 * o)), i.transform(u), S.params.cube.slideShadows) {
                var c = S.isHorizontal() ? i.find(".swiper-slide-shadow-left") : i.find(".swiper-slide-shadow-top"),
                    m = S.isHorizontal() ? i.find(".swiper-slide-shadow-right") : i.find(".swiper-slide-shadow-bottom");0 === c.length && (c = a('<div class="swiper-slide-shadow-' + (S.isHorizontal() ? "left" : "top") + '"></div>'), i.append(c)), 0 === m.length && (m = a('<div class="swiper-slide-shadow-' + (S.isHorizontal() ? "right" : "bottom") + '"></div>'), i.append(m)), c.length && (c[0].style.opacity = Math.max(-o, 0)), m.length && (m[0].style.opacity = Math.max(o, 0));
              }
            }if (S.wrapper.css({ "-webkit-transform-origin": "50% 50% -" + S.size / 2 + "px", "-moz-transform-origin": "50% 50% -" + S.size / 2 + "px", "-ms-transform-origin": "50% 50% -" + S.size / 2 + "px", "transform-origin": "50% 50% -" + S.size / 2 + "px" }), S.params.cube.shadow) if (S.isHorizontal()) e.transform("translate3d(0px, " + (S.width / 2 + S.params.cube.shadowOffset) + "px, " + -S.width / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + S.params.cube.shadowScale + ")");else {
              var h = Math.abs(t) - 90 * Math.floor(Math.abs(t) / 90),
                  g = 1.5 - (Math.sin(2 * h * Math.PI / 360) / 2 + Math.cos(2 * h * Math.PI / 360) / 2),
                  f = S.params.cube.shadowScale,
                  v = S.params.cube.shadowScale / g,
                  w = S.params.cube.shadowOffset;e.transform("scale3d(" + f + ", 1, " + v + ") translate3d(0px, " + (S.height / 2 + w) + "px, " + -S.height / 2 / v + "px) rotateX(-90deg)");
            }var y = S.isSafari || S.isUiWebView ? -S.size / 2 : 0;S.wrapper.transform("translate3d(0px,0," + y + "px) rotateX(" + (S.isHorizontal() ? 0 : t) + "deg) rotateY(" + (S.isHorizontal() ? -t : 0) + "deg)");
          }, setTransition: function (e) {
            S.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), S.params.cube.shadow && !S.isHorizontal() && S.container.find(".swiper-cube-shadow").transition(e);
          } }, coverflow: { setTranslate: function () {
            for (var e = S.translate, t = S.isHorizontal() ? -e + S.width / 2 : -e + S.height / 2, s = S.isHorizontal() ? S.params.coverflow.rotate : -S.params.coverflow.rotate, i = S.params.coverflow.depth, r = 0, n = S.slides.length; r < n; r++) {
              var o = S.slides.eq(r),
                  l = S.slidesSizesGrid[r],
                  p = o[0].swiperSlideOffset,
                  d = (t - p - l / 2) / l * S.params.coverflow.modifier,
                  u = S.isHorizontal() ? s * d : 0,
                  c = S.isHorizontal() ? 0 : s * d,
                  m = -i * Math.abs(d),
                  h = S.isHorizontal() ? 0 : S.params.coverflow.stretch * d,
                  g = S.isHorizontal() ? S.params.coverflow.stretch * d : 0;Math.abs(g) < .001 && (g = 0), Math.abs(h) < .001 && (h = 0), Math.abs(m) < .001 && (m = 0), Math.abs(u) < .001 && (u = 0), Math.abs(c) < .001 && (c = 0);var f = "translate3d(" + g + "px," + h + "px," + m + "px)  rotateX(" + c + "deg) rotateY(" + u + "deg)";if (o.transform(f), o[0].style.zIndex = -Math.abs(Math.round(d)) + 1, S.params.coverflow.slideShadows) {
                var v = S.isHorizontal() ? o.find(".swiper-slide-shadow-left") : o.find(".swiper-slide-shadow-top"),
                    w = S.isHorizontal() ? o.find(".swiper-slide-shadow-right") : o.find(".swiper-slide-shadow-bottom");0 === v.length && (v = a('<div class="swiper-slide-shadow-' + (S.isHorizontal() ? "left" : "top") + '"></div>'), o.append(v)), 0 === w.length && (w = a('<div class="swiper-slide-shadow-' + (S.isHorizontal() ? "right" : "bottom") + '"></div>'), o.append(w)), v.length && (v[0].style.opacity = d > 0 ? d : 0), w.length && (w[0].style.opacity = -d > 0 ? -d : 0);
              }
            }if (S.browser.ie) {
              var y = S.wrapper[0].style;y.perspectiveOrigin = t + "px 50%";
            }
          }, setTransition: function (e) {
            S.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e);
          } } }, S.lazy = { initialImageLoaded: !1, loadImageInSlide: function (e, t) {
          if ("undefined" != typeof e && ("undefined" == typeof t && (t = !0), 0 !== S.slides.length)) {
            var s = S.slides.eq(e),
                i = s.find("." + S.params.lazyLoadingClass + ":not(." + S.params.lazyStatusLoadedClass + "):not(." + S.params.lazyStatusLoadingClass + ")");!s.hasClass(S.params.lazyLoadingClass) || s.hasClass(S.params.lazyStatusLoadedClass) || s.hasClass(S.params.lazyStatusLoadingClass) || (i = i.add(s[0])), 0 !== i.length && i.each(function () {
              var e = a(this);e.addClass(S.params.lazyStatusLoadingClass);var i = e.attr("data-background"),
                  r = e.attr("data-src"),
                  n = e.attr("data-srcset"),
                  o = e.attr("data-sizes");S.loadImage(e[0], r || i, n, o, !1, function () {
                if (i ? (e.css("background-image", 'url("' + i + '")'), e.removeAttr("data-background")) : (n && (e.attr("srcset", n), e.removeAttr("data-srcset")), o && (e.attr("sizes", o), e.removeAttr("data-sizes")), r && (e.attr("src", r), e.removeAttr("data-src"))), e.addClass(S.params.lazyStatusLoadedClass).removeClass(S.params.lazyStatusLoadingClass), s.find("." + S.params.lazyPreloaderClass + ", ." + S.params.preloaderClass).remove(), S.params.loop && t) {
                  var a = s.attr("data-swiper-slide-index");if (s.hasClass(S.params.slideDuplicateClass)) {
                    var l = S.wrapper.children('[data-swiper-slide-index="' + a + '"]:not(.' + S.params.slideDuplicateClass + ")");S.lazy.loadImageInSlide(l.index(), !1);
                  } else {
                    var p = S.wrapper.children("." + S.params.slideDuplicateClass + '[data-swiper-slide-index="' + a + '"]');S.lazy.loadImageInSlide(p.index(), !1);
                  }
                }S.emit("onLazyImageReady", S, s[0], e[0]);
              }), S.emit("onLazyImageLoad", S, s[0], e[0]);
            });
          }
        }, load: function () {
          var e,
              t = S.params.slidesPerView;if ("auto" === t && (t = 0), S.lazy.initialImageLoaded || (S.lazy.initialImageLoaded = !0), S.params.watchSlidesVisibility) S.wrapper.children("." + S.params.slideVisibleClass).each(function () {
            S.lazy.loadImageInSlide(a(this).index());
          });else if (t > 1) for (e = S.activeIndex; e < S.activeIndex + t; e++) S.slides[e] && S.lazy.loadImageInSlide(e);else S.lazy.loadImageInSlide(S.activeIndex);if (S.params.lazyLoadingInPrevNext) if (t > 1 || S.params.lazyLoadingInPrevNextAmount && S.params.lazyLoadingInPrevNextAmount > 1) {
            var s = S.params.lazyLoadingInPrevNextAmount,
                i = t,
                r = Math.min(S.activeIndex + i + Math.max(s, i), S.slides.length),
                n = Math.max(S.activeIndex - Math.max(i, s), 0);for (e = S.activeIndex + t; e < r; e++) S.slides[e] && S.lazy.loadImageInSlide(e);for (e = n; e < S.activeIndex; e++) S.slides[e] && S.lazy.loadImageInSlide(e);
          } else {
            var o = S.wrapper.children("." + S.params.slideNextClass);o.length > 0 && S.lazy.loadImageInSlide(o.index());var l = S.wrapper.children("." + S.params.slidePrevClass);l.length > 0 && S.lazy.loadImageInSlide(l.index());
          }
        }, onTransitionStart: function () {
          S.params.lazyLoading && (S.params.lazyLoadingOnTransitionStart || !S.params.lazyLoadingOnTransitionStart && !S.lazy.initialImageLoaded) && S.lazy.load();
        }, onTransitionEnd: function () {
          S.params.lazyLoading && !S.params.lazyLoadingOnTransitionStart && S.lazy.load();
        } }, S.scrollbar = { isTouched: !1, setDragPosition: function (e) {
          var a = S.scrollbar,
              t = S.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY,
              s = t - a.track.offset()[S.isHorizontal() ? "left" : "top"] - a.dragSize / 2,
              i = -S.minTranslate() * a.moveDivider,
              r = -S.maxTranslate() * a.moveDivider;s < i ? s = i : s > r && (s = r), s = -s / a.moveDivider, S.updateProgress(s), S.setWrapperTranslate(s, !0);
        }, dragStart: function (e) {
          var a = S.scrollbar;a.isTouched = !0, e.preventDefault(), e.stopPropagation(), a.setDragPosition(e), clearTimeout(a.dragTimeout), a.track.transition(0), S.params.scrollbarHide && a.track.css("opacity", 1), S.wrapper.transition(100), a.drag.transition(100), S.emit("onScrollbarDragStart", S);
        }, dragMove: function (e) {
          var a = S.scrollbar;a.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, a.setDragPosition(e), S.wrapper.transition(0), a.track.transition(0), a.drag.transition(0), S.emit("onScrollbarDragMove", S));
        }, dragEnd: function (e) {
          var a = S.scrollbar;a.isTouched && (a.isTouched = !1, S.params.scrollbarHide && (clearTimeout(a.dragTimeout), a.dragTimeout = setTimeout(function () {
            a.track.css("opacity", 0), a.track.transition(400);
          }, 1e3)), S.emit("onScrollbarDragEnd", S), S.params.scrollbarSnapOnRelease && S.slideReset());
        }, draggableEvents: function () {
          return S.params.simulateTouch !== !1 || S.support.touch ? S.touchEvents : S.touchEventsDesktop;
        }(), enableDraggable: function () {
          var e = S.scrollbar,
              t = S.support.touch ? e.track : document;a(e.track).on(e.draggableEvents.start, e.dragStart), a(t).on(e.draggableEvents.move, e.dragMove), a(t).on(e.draggableEvents.end, e.dragEnd);
        }, disableDraggable: function () {
          var e = S.scrollbar,
              t = S.support.touch ? e.track : document;a(e.track).off(S.draggableEvents.start, e.dragStart), a(t).off(S.draggableEvents.move, e.dragMove), a(t).off(S.draggableEvents.end, e.dragEnd);
        }, set: function () {
          if (S.params.scrollbar) {
            var e = S.scrollbar;e.track = a(S.params.scrollbar), S.params.uniqueNavElements && "string" == typeof S.params.scrollbar && e.track.length > 1 && 1 === S.container.find(S.params.scrollbar).length && (e.track = S.container.find(S.params.scrollbar)), e.drag = e.track.find(".swiper-scrollbar-drag"), 0 === e.drag.length && (e.drag = a('<div class="swiper-scrollbar-drag"></div>'), e.track.append(e.drag)), e.drag[0].style.width = "", e.drag[0].style.height = "", e.trackSize = S.isHorizontal() ? e.track[0].offsetWidth : e.track[0].offsetHeight, e.divider = S.size / S.virtualSize, e.moveDivider = e.divider * (e.trackSize / S.size), e.dragSize = e.trackSize * e.divider, S.isHorizontal() ? e.drag[0].style.width = e.dragSize + "px" : e.drag[0].style.height = e.dragSize + "px", e.divider >= 1 ? e.track[0].style.display = "none" : e.track[0].style.display = "", S.params.scrollbarHide && (e.track[0].style.opacity = 0);
          }
        }, setTranslate: function () {
          if (S.params.scrollbar) {
            var e,
                a = S.scrollbar,
                t = (S.translate || 0, a.dragSize);e = (a.trackSize - a.dragSize) * S.progress, S.rtl && S.isHorizontal() ? (e = -e, e > 0 ? (t = a.dragSize - e, e = 0) : -e + a.dragSize > a.trackSize && (t = a.trackSize + e)) : e < 0 ? (t = a.dragSize + e, e = 0) : e + a.dragSize > a.trackSize && (t = a.trackSize - e), S.isHorizontal() ? (S.support.transforms3d ? a.drag.transform("translate3d(" + e + "px, 0, 0)") : a.drag.transform("translateX(" + e + "px)"), a.drag[0].style.width = t + "px") : (S.support.transforms3d ? a.drag.transform("translate3d(0px, " + e + "px, 0)") : a.drag.transform("translateY(" + e + "px)"), a.drag[0].style.height = t + "px"), S.params.scrollbarHide && (clearTimeout(a.timeout), a.track[0].style.opacity = 1, a.timeout = setTimeout(function () {
              a.track[0].style.opacity = 0, a.track.transition(400);
            }, 1e3));
          }
        }, setTransition: function (e) {
          S.params.scrollbar && S.scrollbar.drag.transition(e);
        } }, S.controller = { LinearSpline: function (e, a) {
          this.x = e, this.y = a, this.lastIndex = e.length - 1;var t, s;this.x.length;this.interpolate = function (e) {
            return e ? (s = i(this.x, e), t = s - 1, (e - this.x[t]) * (this.y[s] - this.y[t]) / (this.x[s] - this.x[t]) + this.y[t]) : 0;
          };var i = function () {
            var e, a, t;return function (s, i) {
              for (a = -1, e = s.length; e - a > 1;) s[t = e + a >> 1] <= i ? a = t : e = t;return e;
            };
          }();
        }, getInterpolateFunction: function (e) {
          S.controller.spline || (S.controller.spline = S.params.loop ? new S.controller.LinearSpline(S.slidesGrid, e.slidesGrid) : new S.controller.LinearSpline(S.snapGrid, e.snapGrid));
        }, setTranslate: function (e, a) {
          function s(a) {
            e = a.rtl && "horizontal" === a.params.direction ? -S.translate : S.translate, "slide" === S.params.controlBy && (S.controller.getInterpolateFunction(a), r = -S.controller.spline.interpolate(-e)), r && "container" !== S.params.controlBy || (i = (a.maxTranslate() - a.minTranslate()) / (S.maxTranslate() - S.minTranslate()), r = (e - S.minTranslate()) * i + a.minTranslate()), S.params.controlInverse && (r = a.maxTranslate() - r), a.updateProgress(r), a.setWrapperTranslate(r, !1, S), a.updateActiveIndex();
          }var i,
              r,
              n = S.params.control;if (S.isArray(n)) for (var o = 0; o < n.length; o++) n[o] !== a && n[o] instanceof t && s(n[o]);else n instanceof t && a !== n && s(n);
        }, setTransition: function (e, a) {
          function s(a) {
            a.setWrapperTransition(e, S), 0 !== e && (a.onTransitionStart(), a.wrapper.transitionEnd(function () {
              r && (a.params.loop && "slide" === S.params.controlBy && a.fixLoop(), a.onTransitionEnd());
            }));
          }var i,
              r = S.params.control;if (S.isArray(r)) for (i = 0; i < r.length; i++) r[i] !== a && r[i] instanceof t && s(r[i]);else r instanceof t && a !== r && s(r);
        } }, S.hashnav = { onHashCange: function (e, a) {
          var t = document.location.hash.replace("#", ""),
              s = S.slides.eq(S.activeIndex).attr("data-hash");t !== s && S.slideTo(S.wrapper.children("." + S.params.slideClass + '[data-hash="' + t + '"]').index());
        }, attachEvents: function (e) {
          var t = e ? "off" : "on";a(window)[t]("hashchange", S.hashnav.onHashCange);
        }, setHash: function () {
          if (S.hashnav.initialized && S.params.hashnav) if (S.params.replaceState && window.history && window.history.replaceState) window.history.replaceState(null, null, "#" + S.slides.eq(S.activeIndex).attr("data-hash") || "");else {
            var e = S.slides.eq(S.activeIndex),
                a = e.attr("data-hash") || e.attr("data-history");document.location.hash = a || "";
          }
        }, init: function () {
          if (S.params.hashnav && !S.params.history) {
            S.hashnav.initialized = !0;var e = document.location.hash.replace("#", "");if (e) {
              for (var a = 0, t = 0, s = S.slides.length; t < s; t++) {
                var i = S.slides.eq(t),
                    r = i.attr("data-hash") || i.attr("data-history");if (r === e && !i.hasClass(S.params.slideDuplicateClass)) {
                  var n = i.index();S.slideTo(n, a, S.params.runCallbacksOnInit, !0);
                }
              }S.params.hashnavWatchState && S.hashnav.attachEvents();
            }
          }
        }, destroy: function () {
          S.params.hashnavWatchState && S.hashnav.attachEvents(!0);
        } }, S.history = { init: function () {
          if (S.params.history) {
            if (!window.history || !window.history.pushState) return S.params.history = !1, void (S.params.hashnav = !0);S.history.initialized = !0, this.paths = this.getPathValues(), (this.paths.key || this.paths.value) && (this.scrollToSlide(0, this.paths.value, S.params.runCallbacksOnInit), S.params.replaceState || window.addEventListener("popstate", this.setHistoryPopState));
          }
        }, setHistoryPopState: function () {
          S.history.paths = S.history.getPathValues(), S.history.scrollToSlide(S.params.speed, S.history.paths.value, !1);
        }, getPathValues: function () {
          var e = window.location.pathname.slice(1).split("/"),
              a = e.length,
              t = e[a - 2],
              s = e[a - 1];return { key: t, value: s };
        }, setHistory: function (e, a) {
          if (S.history.initialized && S.params.history) {
            var t = S.slides.eq(a),
                s = this.slugify(t.attr("data-history"));window.location.pathname.includes(e) || (s = e + "/" + s), S.params.replaceState ? window.history.replaceState(null, null, s) : window.history.pushState(null, null, s);
          }
        }, slugify: function (e) {
          return e.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
        }, scrollToSlide: function (e, a, t) {
          if (a) for (var s = 0, i = S.slides.length; s < i; s++) {
            var r = S.slides.eq(s),
                n = this.slugify(r.attr("data-history"));if (n === a && !r.hasClass(S.params.slideDuplicateClass)) {
              var o = r.index();S.slideTo(o, e, t);
            }
          } else S.slideTo(0, e, t);
        } }, S.disableKeyboardControl = function () {
        S.params.keyboardControl = !1, a(document).off("keydown", d);
      }, S.enableKeyboardControl = function () {
        S.params.keyboardControl = !0, a(document).on("keydown", d);
      }, S.mousewheel = { event: !1, lastScrollTime: new window.Date().getTime() }, S.params.mousewheelControl && (S.mousewheel.event = navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : u() ? "wheel" : "mousewheel"), S.disableMousewheelControl = function () {
        if (!S.mousewheel.event) return !1;var e = S.container;return "container" !== S.params.mousewheelEventsTarged && (e = a(S.params.mousewheelEventsTarged)), e.off(S.mousewheel.event, c), !0;
      }, S.enableMousewheelControl = function () {
        if (!S.mousewheel.event) return !1;var e = S.container;return "container" !== S.params.mousewheelEventsTarged && (e = a(S.params.mousewheelEventsTarged)), e.on(S.mousewheel.event, c), !0;
      }, S.parallax = { setTranslate: function () {
          S.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function () {
            h(this, S.progress);
          }), S.slides.each(function () {
            var e = a(this);e.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function () {
              var a = Math.min(Math.max(e[0].progress, -1), 1);h(this, a);
            });
          });
        }, setTransition: function (e) {
          "undefined" == typeof e && (e = S.params.speed), S.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function () {
            var t = a(this),
                s = parseInt(t.attr("data-swiper-parallax-duration"), 10) || e;0 === e && (s = 0), t.transition(s);
          });
        } }, S.zoom = { scale: 1, currentScale: 1, isScaling: !1, gesture: { slide: void 0, slideWidth: void 0, slideHeight: void 0, image: void 0, imageWrap: void 0, zoomMax: S.params.zoomMax }, image: { isTouched: void 0, isMoved: void 0, currentX: void 0, currentY: void 0, minX: void 0, minY: void 0, maxX: void 0, maxY: void 0, width: void 0, height: void 0, startX: void 0, startY: void 0, touchesStart: {}, touchesCurrent: {} }, velocity: { x: void 0, y: void 0, prevPositionX: void 0, prevPositionY: void 0, prevTime: void 0 }, getDistanceBetweenTouches: function (e) {
          if (e.targetTouches.length < 2) return 1;var a = e.targetTouches[0].pageX,
              t = e.targetTouches[0].pageY,
              s = e.targetTouches[1].pageX,
              i = e.targetTouches[1].pageY,
              r = Math.sqrt(Math.pow(s - a, 2) + Math.pow(i - t, 2));return r;
        }, onGestureStart: function (e) {
          var t = S.zoom;if (!S.support.gestures) {
            if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;t.gesture.scaleStart = t.getDistanceBetweenTouches(e);
          }return t.gesture.slide && t.gesture.slide.length || (t.gesture.slide = a(this), 0 === t.gesture.slide.length && (t.gesture.slide = S.slides.eq(S.activeIndex)), t.gesture.image = t.gesture.slide.find("img, svg, canvas"), t.gesture.imageWrap = t.gesture.image.parent("." + S.params.zoomContainerClass), t.gesture.zoomMax = t.gesture.imageWrap.attr("data-swiper-zoom") || S.params.zoomMax, 0 !== t.gesture.imageWrap.length) ? (t.gesture.image.transition(0), void (t.isScaling = !0)) : void (t.gesture.image = void 0);
        }, onGestureChange: function (e) {
          var a = S.zoom;if (!S.support.gestures) {
            if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;a.gesture.scaleMove = a.getDistanceBetweenTouches(e);
          }a.gesture.image && 0 !== a.gesture.image.length && (S.support.gestures ? a.scale = e.scale * a.currentScale : a.scale = a.gesture.scaleMove / a.gesture.scaleStart * a.currentScale, a.scale > a.gesture.zoomMax && (a.scale = a.gesture.zoomMax - 1 + Math.pow(a.scale - a.gesture.zoomMax + 1, .5)), a.scale < S.params.zoomMin && (a.scale = S.params.zoomMin + 1 - Math.pow(S.params.zoomMin - a.scale + 1, .5)), a.gesture.image.transform("translate3d(0,0,0) scale(" + a.scale + ")"));
        }, onGestureEnd: function (e) {
          var a = S.zoom;!S.support.gestures && ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2) || a.gesture.image && 0 !== a.gesture.image.length && (a.scale = Math.max(Math.min(a.scale, a.gesture.zoomMax), S.params.zoomMin), a.gesture.image.transition(S.params.speed).transform("translate3d(0,0,0) scale(" + a.scale + ")"), a.currentScale = a.scale, a.isScaling = !1, 1 === a.scale && (a.gesture.slide = void 0));
        }, onTouchStart: function (e, a) {
          var t = e.zoom;t.gesture.image && 0 !== t.gesture.image.length && (t.image.isTouched || ("android" === e.device.os && a.preventDefault(), t.image.isTouched = !0, t.image.touchesStart.x = "touchstart" === a.type ? a.targetTouches[0].pageX : a.pageX, t.image.touchesStart.y = "touchstart" === a.type ? a.targetTouches[0].pageY : a.pageY));
        }, onTouchMove: function (e) {
          var a = S.zoom;if (a.gesture.image && 0 !== a.gesture.image.length && (S.allowClick = !1, a.image.isTouched && a.gesture.slide)) {
            a.image.isMoved || (a.image.width = a.gesture.image[0].offsetWidth, a.image.height = a.gesture.image[0].offsetHeight, a.image.startX = S.getTranslate(a.gesture.imageWrap[0], "x") || 0, a.image.startY = S.getTranslate(a.gesture.imageWrap[0], "y") || 0, a.gesture.slideWidth = a.gesture.slide[0].offsetWidth, a.gesture.slideHeight = a.gesture.slide[0].offsetHeight, a.gesture.imageWrap.transition(0));var t = a.image.width * a.scale,
                s = a.image.height * a.scale;if (!(t < a.gesture.slideWidth && s < a.gesture.slideHeight)) {
              if (a.image.minX = Math.min(a.gesture.slideWidth / 2 - t / 2, 0), a.image.maxX = -a.image.minX, a.image.minY = Math.min(a.gesture.slideHeight / 2 - s / 2, 0), a.image.maxY = -a.image.minY, a.image.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, a.image.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !a.image.isMoved && !a.isScaling) {
                if (S.isHorizontal() && Math.floor(a.image.minX) === Math.floor(a.image.startX) && a.image.touchesCurrent.x < a.image.touchesStart.x || Math.floor(a.image.maxX) === Math.floor(a.image.startX) && a.image.touchesCurrent.x > a.image.touchesStart.x) return void (a.image.isTouched = !1);if (!S.isHorizontal() && Math.floor(a.image.minY) === Math.floor(a.image.startY) && a.image.touchesCurrent.y < a.image.touchesStart.y || Math.floor(a.image.maxY) === Math.floor(a.image.startY) && a.image.touchesCurrent.y > a.image.touchesStart.y) return void (a.image.isTouched = !1);
              }e.preventDefault(), e.stopPropagation(), a.image.isMoved = !0, a.image.currentX = a.image.touchesCurrent.x - a.image.touchesStart.x + a.image.startX, a.image.currentY = a.image.touchesCurrent.y - a.image.touchesStart.y + a.image.startY, a.image.currentX < a.image.minX && (a.image.currentX = a.image.minX + 1 - Math.pow(a.image.minX - a.image.currentX + 1, .8)), a.image.currentX > a.image.maxX && (a.image.currentX = a.image.maxX - 1 + Math.pow(a.image.currentX - a.image.maxX + 1, .8)), a.image.currentY < a.image.minY && (a.image.currentY = a.image.minY + 1 - Math.pow(a.image.minY - a.image.currentY + 1, .8)), a.image.currentY > a.image.maxY && (a.image.currentY = a.image.maxY - 1 + Math.pow(a.image.currentY - a.image.maxY + 1, .8)), a.velocity.prevPositionX || (a.velocity.prevPositionX = a.image.touchesCurrent.x), a.velocity.prevPositionY || (a.velocity.prevPositionY = a.image.touchesCurrent.y), a.velocity.prevTime || (a.velocity.prevTime = Date.now()), a.velocity.x = (a.image.touchesCurrent.x - a.velocity.prevPositionX) / (Date.now() - a.velocity.prevTime) / 2, a.velocity.y = (a.image.touchesCurrent.y - a.velocity.prevPositionY) / (Date.now() - a.velocity.prevTime) / 2, Math.abs(a.image.touchesCurrent.x - a.velocity.prevPositionX) < 2 && (a.velocity.x = 0), Math.abs(a.image.touchesCurrent.y - a.velocity.prevPositionY) < 2 && (a.velocity.y = 0), a.velocity.prevPositionX = a.image.touchesCurrent.x, a.velocity.prevPositionY = a.image.touchesCurrent.y, a.velocity.prevTime = Date.now(), a.gesture.imageWrap.transform("translate3d(" + a.image.currentX + "px, " + a.image.currentY + "px,0)");
            }
          }
        }, onTouchEnd: function (e, a) {
          var t = e.zoom;if (t.gesture.image && 0 !== t.gesture.image.length) {
            if (!t.image.isTouched || !t.image.isMoved) return t.image.isTouched = !1, void (t.image.isMoved = !1);t.image.isTouched = !1, t.image.isMoved = !1;var s = 300,
                i = 300,
                r = t.velocity.x * s,
                n = t.image.currentX + r,
                o = t.velocity.y * i,
                l = t.image.currentY + o;0 !== t.velocity.x && (s = Math.abs((n - t.image.currentX) / t.velocity.x)), 0 !== t.velocity.y && (i = Math.abs((l - t.image.currentY) / t.velocity.y));var p = Math.max(s, i);t.image.currentX = n, t.image.currentY = l;var d = t.image.width * t.scale,
                u = t.image.height * t.scale;t.image.minX = Math.min(t.gesture.slideWidth / 2 - d / 2, 0), t.image.maxX = -t.image.minX, t.image.minY = Math.min(t.gesture.slideHeight / 2 - u / 2, 0), t.image.maxY = -t.image.minY, t.image.currentX = Math.max(Math.min(t.image.currentX, t.image.maxX), t.image.minX), t.image.currentY = Math.max(Math.min(t.image.currentY, t.image.maxY), t.image.minY), t.gesture.imageWrap.transition(p).transform("translate3d(" + t.image.currentX + "px, " + t.image.currentY + "px,0)");
          }
        }, onTransitionEnd: function (e) {
          var a = e.zoom;a.gesture.slide && e.previousIndex !== e.activeIndex && (a.gesture.image.transform("translate3d(0,0,0) scale(1)"), a.gesture.imageWrap.transform("translate3d(0,0,0)"), a.gesture.slide = a.gesture.image = a.gesture.imageWrap = void 0, a.scale = a.currentScale = 1);
        }, toggleZoom: function (e, t) {
          var s = e.zoom;if (s.gesture.slide || (s.gesture.slide = e.clickedSlide ? a(e.clickedSlide) : e.slides.eq(e.activeIndex), s.gesture.image = s.gesture.slide.find("img, svg, canvas"), s.gesture.imageWrap = s.gesture.image.parent("." + e.params.zoomContainerClass)), s.gesture.image && 0 !== s.gesture.image.length) {
            var i, r, n, o, l, p, d, u, c, m, h, g, f, v, w, y, x, T;"undefined" == typeof s.image.touchesStart.x && t ? (i = "touchend" === t.type ? t.changedTouches[0].pageX : t.pageX, r = "touchend" === t.type ? t.changedTouches[0].pageY : t.pageY) : (i = s.image.touchesStart.x, r = s.image.touchesStart.y), s.scale && 1 !== s.scale ? (s.scale = s.currentScale = 1, s.gesture.imageWrap.transition(300).transform("translate3d(0,0,0)"), s.gesture.image.transition(300).transform("translate3d(0,0,0) scale(1)"), s.gesture.slide = void 0) : (s.scale = s.currentScale = s.gesture.imageWrap.attr("data-swiper-zoom") || e.params.zoomMax, t ? (x = s.gesture.slide[0].offsetWidth, T = s.gesture.slide[0].offsetHeight, n = s.gesture.slide.offset().left, o = s.gesture.slide.offset().top, l = n + x / 2 - i, p = o + T / 2 - r, c = s.gesture.image[0].offsetWidth, m = s.gesture.image[0].offsetHeight, h = c * s.scale, g = m * s.scale, f = Math.min(x / 2 - h / 2, 0), v = Math.min(T / 2 - g / 2, 0), w = -f, y = -v, d = l * s.scale, u = p * s.scale, d < f && (d = f), d > w && (d = w), u < v && (u = v), u > y && (u = y)) : (d = 0, u = 0), s.gesture.imageWrap.transition(300).transform("translate3d(" + d + "px, " + u + "px,0)"), s.gesture.image.transition(300).transform("translate3d(0,0,0) scale(" + s.scale + ")"));
          }
        }, attachEvents: function (e) {
          var t = e ? "off" : "on";if (S.params.zoom) {
            var s = (S.slides, !("touchstart" !== S.touchEvents.start || !S.support.passiveListener || !S.params.passiveListeners) && { passive: !0, capture: !1 });S.support.gestures ? (S.slides[t]("gesturestart", S.zoom.onGestureStart, s), S.slides[t]("gesturechange", S.zoom.onGestureChange, s), S.slides[t]("gestureend", S.zoom.onGestureEnd, s)) : "touchstart" === S.touchEvents.start && (S.slides[t](S.touchEvents.start, S.zoom.onGestureStart, s), S.slides[t](S.touchEvents.move, S.zoom.onGestureChange, s), S.slides[t](S.touchEvents.end, S.zoom.onGestureEnd, s)), S[t]("touchStart", S.zoom.onTouchStart), S.slides.each(function (e, s) {
              a(s).find("." + S.params.zoomContainerClass).length > 0 && a(s)[t](S.touchEvents.move, S.zoom.onTouchMove);
            }), S[t]("touchEnd", S.zoom.onTouchEnd), S[t]("transitionEnd", S.zoom.onTransitionEnd), S.params.zoomToggle && S.on("doubleTap", S.zoom.toggleZoom);
          }
        }, init: function () {
          S.zoom.attachEvents();
        }, destroy: function () {
          S.zoom.attachEvents(!0);
        } }, S._plugins = [];for (var N in S.plugins) {
        var W = S.plugins[N](S, S.params[N]);W && S._plugins.push(W);
      }return S.callPlugins = function (e) {
        for (var a = 0; a < S._plugins.length; a++) e in S._plugins[a] && S._plugins[a][e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
      }, S.emitterEventListeners = {}, S.emit = function (e) {
        S.params[e] && S.params[e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);var a;if (S.emitterEventListeners[e]) for (a = 0; a < S.emitterEventListeners[e].length; a++) S.emitterEventListeners[e][a](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);S.callPlugins && S.callPlugins(e, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
      }, S.on = function (e, a) {
        return e = g(e), S.emitterEventListeners[e] || (S.emitterEventListeners[e] = []), S.emitterEventListeners[e].push(a), S;
      }, S.off = function (e, a) {
        var t;if (e = g(e), "undefined" == typeof a) return S.emitterEventListeners[e] = [], S;if (S.emitterEventListeners[e] && 0 !== S.emitterEventListeners[e].length) {
          for (t = 0; t < S.emitterEventListeners[e].length; t++) S.emitterEventListeners[e][t] === a && S.emitterEventListeners[e].splice(t, 1);return S;
        }
      }, S.once = function (e, a) {
        e = g(e);var t = function () {
          a(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]), S.off(e, t);
        };return S.on(e, t), S;
      }, S.a11y = { makeFocusable: function (e) {
          return e.attr("tabIndex", "0"), e;
        }, addRole: function (e, a) {
          return e.attr("role", a), e;
        }, addLabel: function (e, a) {
          return e.attr("aria-label", a), e;
        }, disable: function (e) {
          return e.attr("aria-disabled", !0), e;
        }, enable: function (e) {
          return e.attr("aria-disabled", !1), e;
        }, onEnterKey: function (e) {
          13 === e.keyCode && (a(e.target).is(S.params.nextButton) ? (S.onClickNext(e), S.isEnd ? S.a11y.notify(S.params.lastSlideMessage) : S.a11y.notify(S.params.nextSlideMessage)) : a(e.target).is(S.params.prevButton) && (S.onClickPrev(e), S.isBeginning ? S.a11y.notify(S.params.firstSlideMessage) : S.a11y.notify(S.params.prevSlideMessage)), a(e.target).is("." + S.params.bulletClass) && a(e.target)[0].click());
        }, liveRegion: a('<span class="' + S.params.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>'), notify: function (e) {
          var a = S.a11y.liveRegion;0 !== a.length && (a.html(""), a.html(e));
        }, init: function () {
          S.params.nextButton && S.nextButton && S.nextButton.length > 0 && (S.a11y.makeFocusable(S.nextButton), S.a11y.addRole(S.nextButton, "button"), S.a11y.addLabel(S.nextButton, S.params.nextSlideMessage)), S.params.prevButton && S.prevButton && S.prevButton.length > 0 && (S.a11y.makeFocusable(S.prevButton), S.a11y.addRole(S.prevButton, "button"), S.a11y.addLabel(S.prevButton, S.params.prevSlideMessage)), a(S.container).append(S.a11y.liveRegion);
        }, initPagination: function () {
          S.params.pagination && S.params.paginationClickable && S.bullets && S.bullets.length && S.bullets.each(function () {
            var e = a(this);S.a11y.makeFocusable(e), S.a11y.addRole(e, "button"), S.a11y.addLabel(e, S.params.paginationBulletMessage.replace(/{{index}}/, e.index() + 1));
          });
        }, destroy: function () {
          S.a11y.liveRegion && S.a11y.liveRegion.length > 0 && S.a11y.liveRegion.remove();
        } }, S.init = function () {
        S.params.loop && S.createLoop(), S.updateContainerSize(), S.updateSlidesSize(), S.updatePagination(), S.params.scrollbar && S.scrollbar && (S.scrollbar.set(), S.params.scrollbarDraggable && S.scrollbar.enableDraggable()), "slide" !== S.params.effect && S.effects[S.params.effect] && (S.params.loop || S.updateProgress(), S.effects[S.params.effect].setTranslate()), S.params.loop ? S.slideTo(S.params.initialSlide + S.loopedSlides, 0, S.params.runCallbacksOnInit) : (S.slideTo(S.params.initialSlide, 0, S.params.runCallbacksOnInit), 0 === S.params.initialSlide && (S.parallax && S.params.parallax && S.parallax.setTranslate(), S.lazy && S.params.lazyLoading && (S.lazy.load(), S.lazy.initialImageLoaded = !0))), S.attachEvents(), S.params.observer && S.support.observer && S.initObservers(), S.params.preloadImages && !S.params.lazyLoading && S.preloadImages(), S.params.zoom && S.zoom && S.zoom.init(), S.params.autoplay && S.startAutoplay(), S.params.keyboardControl && S.enableKeyboardControl && S.enableKeyboardControl(), S.params.mousewheelControl && S.enableMousewheelControl && S.enableMousewheelControl(), S.params.hashnavReplaceState && (S.params.replaceState = S.params.hashnavReplaceState), S.params.history && S.history && S.history.init(), S.params.hashnav && S.hashnav && S.hashnav.init(), S.params.a11y && S.a11y && S.a11y.init(), S.emit("onInit", S);
      }, S.cleanupStyles = function () {
        S.container.removeClass(S.classNames.join(" ")).removeAttr("style"), S.wrapper.removeAttr("style"), S.slides && S.slides.length && S.slides.removeClass([S.params.slideVisibleClass, S.params.slideActiveClass, S.params.slideNextClass, S.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"), S.paginationContainer && S.paginationContainer.length && S.paginationContainer.removeClass(S.params.paginationHiddenClass), S.bullets && S.bullets.length && S.bullets.removeClass(S.params.bulletActiveClass), S.params.prevButton && a(S.params.prevButton).removeClass(S.params.buttonDisabledClass), S.params.nextButton && a(S.params.nextButton).removeClass(S.params.buttonDisabledClass), S.params.scrollbar && S.scrollbar && (S.scrollbar.track && S.scrollbar.track.length && S.scrollbar.track.removeAttr("style"), S.scrollbar.drag && S.scrollbar.drag.length && S.scrollbar.drag.removeAttr("style"));
      }, S.destroy = function (e, a) {
        S.detachEvents(), S.stopAutoplay(), S.params.scrollbar && S.scrollbar && S.params.scrollbarDraggable && S.scrollbar.disableDraggable(), S.params.loop && S.destroyLoop(), a && S.cleanupStyles(), S.disconnectObservers(), S.params.zoom && S.zoom && S.zoom.destroy(), S.params.keyboardControl && S.disableKeyboardControl && S.disableKeyboardControl(), S.params.mousewheelControl && S.disableMousewheelControl && S.disableMousewheelControl(), S.params.a11y && S.a11y && S.a11y.destroy(), S.params.history && !S.params.replaceState && window.removeEventListener("popstate", S.history.setHistoryPopState), S.params.hashnav && S.hashnav && S.hashnav.destroy(), S.emit("onDestroy"), e !== !1 && (S = null);
      }, S.init(), S;
    }
  };t.prototype = { isSafari: function () {
      var e = navigator.userAgent.toLowerCase();return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0;
    }(), isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent), isArray: function (e) {
      return "[object Array]" === Object.prototype.toString.apply(e);
    }, browser: { ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled, ieTouch: window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1, lteIE9: function () {
        var e = document.createElement("div");return e.innerHTML = "<!--[if lte IE 9]><i></i><![endif]-->", 1 === e.getElementsByTagName("i").length;
      }() }, device: function () {
      var e = navigator.userAgent,
          a = e.match(/(Android);?[\s\/]+([\d.]+)?/),
          t = e.match(/(iPad).*OS\s([\d_]+)/),
          s = e.match(/(iPod)(.*OS\s([\d_]+))?/),
          i = !t && e.match(/(iPhone\sOS)\s([\d_]+)/);return { ios: t || i || s, android: a };
    }(), support: { touch: window.Modernizr && Modernizr.touch === !0 || function () {
        return !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch);
      }(), transforms3d: window.Modernizr && Modernizr.csstransforms3d === !0 || function () {
        var e = document.createElement("div").style;return "webkitPerspective" in e || "MozPerspective" in e || "OPerspective" in e || "MsPerspective" in e || "perspective" in e;
      }(), flexbox: function () {
        for (var e = document.createElement("div").style, a = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), t = 0; t < a.length; t++) if (a[t] in e) return !0;
      }(), observer: function () {
        return "MutationObserver" in window || "WebkitMutationObserver" in window;
      }(), passiveListener: function () {
        var e = !1;try {
          var a = Object.defineProperty({}, "passive", { get: function () {
              e = !0;
            } });window.addEventListener("testPassiveListener", null, a);
        } catch (e) {}return e;
      }(), gestures: function () {
        return "ongesturestart" in window;
      }() }, plugins: {} };for (var s = function () {
    var e = function (e) {
      var a = this,
          t = 0;for (t = 0; t < e.length; t++) a[t] = e[t];return a.length = e.length, this;
    },
        a = function (a, t) {
      var s = [],
          i = 0;if (a && !t && a instanceof e) return a;if (a) if ("string" == typeof a) {
        var r,
            n,
            o = a.trim();if (o.indexOf("<") >= 0 && o.indexOf(">") >= 0) {
          var l = "div";for (0 === o.indexOf("<li") && (l = "ul"), 0 === o.indexOf("<tr") && (l = "tbody"), 0 !== o.indexOf("<td") && 0 !== o.indexOf("<th") || (l = "tr"), 0 === o.indexOf("<tbody") && (l = "table"), 0 === o.indexOf("<option") && (l = "select"), n = document.createElement(l), n.innerHTML = a, i = 0; i < n.childNodes.length; i++) s.push(n.childNodes[i]);
        } else for (r = t || "#" !== a[0] || a.match(/[ .<>:~]/) ? (t || document).querySelectorAll(a) : [document.getElementById(a.split("#")[1])], i = 0; i < r.length; i++) r[i] && s.push(r[i]);
      } else if (a.nodeType || a === window || a === document) s.push(a);else if (a.length > 0 && a[0].nodeType) for (i = 0; i < a.length; i++) s.push(a[i]);return new e(s);
    };return e.prototype = { addClass: function (e) {
        if ("undefined" == typeof e) return this;for (var a = e.split(" "), t = 0; t < a.length; t++) for (var s = 0; s < this.length; s++) this[s].classList.add(a[t]);return this;
      }, removeClass: function (e) {
        for (var a = e.split(" "), t = 0; t < a.length; t++) for (var s = 0; s < this.length; s++) this[s].classList.remove(a[t]);return this;
      }, hasClass: function (e) {
        return !!this[0] && this[0].classList.contains(e);
      }, toggleClass: function (e) {
        for (var a = e.split(" "), t = 0; t < a.length; t++) for (var s = 0; s < this.length; s++) this[s].classList.toggle(a[t]);return this;
      }, attr: function (e, a) {
        if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;for (var t = 0; t < this.length; t++) if (2 === arguments.length) this[t].setAttribute(e, a);else for (var s in e) this[t][s] = e[s], this[t].setAttribute(s, e[s]);return this;
      }, removeAttr: function (e) {
        for (var a = 0; a < this.length; a++) this[a].removeAttribute(e);return this;
      }, data: function (e, a) {
        if ("undefined" != typeof a) {
          for (var t = 0; t < this.length; t++) {
            var s = this[t];s.dom7ElementDataStorage || (s.dom7ElementDataStorage = {}), s.dom7ElementDataStorage[e] = a;
          }return this;
        }if (this[0]) {
          var i = this[0].getAttribute("data-" + e);return i ? i : this[0].dom7ElementDataStorage && (e in this[0].dom7ElementDataStorage) ? this[0].dom7ElementDataStorage[e] : void 0;
        }
      }, transform: function (e) {
        for (var a = 0; a < this.length; a++) {
          var t = this[a].style;t.webkitTransform = t.MsTransform = t.msTransform = t.MozTransform = t.OTransform = t.transform = e;
        }return this;
      }, transition: function (e) {
        "string" != typeof e && (e += "ms");for (var a = 0; a < this.length; a++) {
          var t = this[a].style;t.webkitTransitionDuration = t.MsTransitionDuration = t.msTransitionDuration = t.MozTransitionDuration = t.OTransitionDuration = t.transitionDuration = e;
        }return this;
      }, on: function (e, t, s, i) {
        function r(e) {
          var i = e.target;if (a(i).is(t)) s.call(i, e);else for (var r = a(i).parents(), n = 0; n < r.length; n++) a(r[n]).is(t) && s.call(r[n], e);
        }var n,
            o,
            l = e.split(" ");for (n = 0; n < this.length; n++) if ("function" == typeof t || t === !1) for ("function" == typeof t && (s = arguments[1], i = arguments[2] || !1), o = 0; o < l.length; o++) this[n].addEventListener(l[o], s, i);else for (o = 0; o < l.length; o++) this[n].dom7LiveListeners || (this[n].dom7LiveListeners = []), this[n].dom7LiveListeners.push({ listener: s, liveListener: r }), this[n].addEventListener(l[o], r, i);return this;
      }, off: function (e, a, t, s) {
        for (var i = e.split(" "), r = 0; r < i.length; r++) for (var n = 0; n < this.length; n++) if ("function" == typeof a || a === !1) "function" == typeof a && (t = arguments[1], s = arguments[2] || !1), this[n].removeEventListener(i[r], t, s);else if (this[n].dom7LiveListeners) for (var o = 0; o < this[n].dom7LiveListeners.length; o++) this[n].dom7LiveListeners[o].listener === t && this[n].removeEventListener(i[r], this[n].dom7LiveListeners[o].liveListener, s);return this;
      }, once: function (e, a, t, s) {
        function i(n) {
          t(n), r.off(e, a, i, s);
        }var r = this;"function" == typeof a && (a = !1, t = arguments[1], s = arguments[2]), r.on(e, a, i, s);
      }, trigger: function (e, a) {
        for (var t = 0; t < this.length; t++) {
          var s;try {
            s = new window.CustomEvent(e, { detail: a, bubbles: !0, cancelable: !0 });
          } catch (t) {
            s = document.createEvent("Event"), s.initEvent(e, !0, !0), s.detail = a;
          }this[t].dispatchEvent(s);
        }return this;
      }, transitionEnd: function (e) {
        function a(r) {
          if (r.target === this) for (e.call(this, r), t = 0; t < s.length; t++) i.off(s[t], a);
        }var t,
            s = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
            i = this;if (e) for (t = 0; t < s.length; t++) i.on(s[t], a);return this;
      }, width: function () {
        return this[0] === window ? window.innerWidth : this.length > 0 ? parseFloat(this.css("width")) : null;
      }, outerWidth: function (e) {
        return this.length > 0 ? e ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth : null;
      }, height: function () {
        return this[0] === window ? window.innerHeight : this.length > 0 ? parseFloat(this.css("height")) : null;
      }, outerHeight: function (e) {
        return this.length > 0 ? e ? this[0].offsetHeight + parseFloat(this.css("margin-top")) + parseFloat(this.css("margin-bottom")) : this[0].offsetHeight : null;
      }, offset: function () {
        if (this.length > 0) {
          var e = this[0],
              a = e.getBoundingClientRect(),
              t = document.body,
              s = e.clientTop || t.clientTop || 0,
              i = e.clientLeft || t.clientLeft || 0,
              r = window.pageYOffset || e.scrollTop,
              n = window.pageXOffset || e.scrollLeft;return { top: a.top + r - s, left: a.left + n - i };
        }return null;
      }, css: function (e, a) {
        var t;if (1 === arguments.length) {
          if ("string" != typeof e) {
            for (t = 0; t < this.length; t++) for (var s in e) this[t].style[s] = e[s];return this;
          }if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(e);
        }if (2 === arguments.length && "string" == typeof e) {
          for (t = 0; t < this.length; t++) this[t].style[e] = a;return this;
        }return this;
      }, each: function (e) {
        for (var a = 0; a < this.length; a++) e.call(this[a], a, this[a]);return this;
      }, html: function (e) {
        if ("undefined" == typeof e) return this[0] ? this[0].innerHTML : void 0;for (var a = 0; a < this.length; a++) this[a].innerHTML = e;return this;
      }, text: function (e) {
        if ("undefined" == typeof e) return this[0] ? this[0].textContent.trim() : null;for (var a = 0; a < this.length; a++) this[a].textContent = e;return this;
      }, is: function (t) {
        if (!this[0]) return !1;var s, i;if ("string" == typeof t) {
          var r = this[0];if (r === document) return t === document;if (r === window) return t === window;if (r.matches) return r.matches(t);if (r.webkitMatchesSelector) return r.webkitMatchesSelector(t);if (r.mozMatchesSelector) return r.mozMatchesSelector(t);if (r.msMatchesSelector) return r.msMatchesSelector(t);for (s = a(t), i = 0; i < s.length; i++) if (s[i] === this[0]) return !0;return !1;
        }if (t === document) return this[0] === document;if (t === window) return this[0] === window;if (t.nodeType || t instanceof e) {
          for (s = t.nodeType ? [t] : t, i = 0; i < s.length; i++) if (s[i] === this[0]) return !0;return !1;
        }return !1;
      }, index: function () {
        if (this[0]) {
          for (var e = this[0], a = 0; null !== (e = e.previousSibling);) 1 === e.nodeType && a++;return a;
        }
      }, eq: function (a) {
        if ("undefined" == typeof a) return this;var t,
            s = this.length;return a > s - 1 ? new e([]) : a < 0 ? (t = s + a, new e(t < 0 ? [] : [this[t]])) : new e([this[a]]);
      }, append: function (a) {
        var t, s;for (t = 0; t < this.length; t++) if ("string" == typeof a) {
          var i = document.createElement("div");for (i.innerHTML = a; i.firstChild;) this[t].appendChild(i.firstChild);
        } else if (a instanceof e) for (s = 0; s < a.length; s++) this[t].appendChild(a[s]);else this[t].appendChild(a);return this;
      }, prepend: function (a) {
        var t, s;for (t = 0; t < this.length; t++) if ("string" == typeof a) {
          var i = document.createElement("div");for (i.innerHTML = a, s = i.childNodes.length - 1; s >= 0; s--) this[t].insertBefore(i.childNodes[s], this[t].childNodes[0]);
        } else if (a instanceof e) for (s = 0; s < a.length; s++) this[t].insertBefore(a[s], this[t].childNodes[0]);else this[t].insertBefore(a, this[t].childNodes[0]);return this;
      }, insertBefore: function (e) {
        for (var t = a(e), s = 0; s < this.length; s++) if (1 === t.length) t[0].parentNode.insertBefore(this[s], t[0]);else if (t.length > 1) for (var i = 0; i < t.length; i++) t[i].parentNode.insertBefore(this[s].cloneNode(!0), t[i]);
      }, insertAfter: function (e) {
        for (var t = a(e), s = 0; s < this.length; s++) if (1 === t.length) t[0].parentNode.insertBefore(this[s], t[0].nextSibling);else if (t.length > 1) for (var i = 0; i < t.length; i++) t[i].parentNode.insertBefore(this[s].cloneNode(!0), t[i].nextSibling);
      }, next: function (t) {
        return new e(this.length > 0 ? t ? this[0].nextElementSibling && a(this[0].nextElementSibling).is(t) ? [this[0].nextElementSibling] : [] : this[0].nextElementSibling ? [this[0].nextElementSibling] : [] : []);
      }, nextAll: function (t) {
        var s = [],
            i = this[0];if (!i) return new e([]);for (; i.nextElementSibling;) {
          var r = i.nextElementSibling;t ? a(r).is(t) && s.push(r) : s.push(r), i = r;
        }return new e(s);
      }, prev: function (t) {
        return new e(this.length > 0 ? t ? this[0].previousElementSibling && a(this[0].previousElementSibling).is(t) ? [this[0].previousElementSibling] : [] : this[0].previousElementSibling ? [this[0].previousElementSibling] : [] : []);
      }, prevAll: function (t) {
        var s = [],
            i = this[0];if (!i) return new e([]);for (; i.previousElementSibling;) {
          var r = i.previousElementSibling;t ? a(r).is(t) && s.push(r) : s.push(r), i = r;
        }return new e(s);
      }, parent: function (e) {
        for (var t = [], s = 0; s < this.length; s++) e ? a(this[s].parentNode).is(e) && t.push(this[s].parentNode) : t.push(this[s].parentNode);return a(a.unique(t));
      }, parents: function (e) {
        for (var t = [], s = 0; s < this.length; s++) for (var i = this[s].parentNode; i;) e ? a(i).is(e) && t.push(i) : t.push(i), i = i.parentNode;return a(a.unique(t));
      }, find: function (a) {
        for (var t = [], s = 0; s < this.length; s++) for (var i = this[s].querySelectorAll(a), r = 0; r < i.length; r++) t.push(i[r]);return new e(t);
      }, children: function (t) {
        for (var s = [], i = 0; i < this.length; i++) for (var r = this[i].childNodes, n = 0; n < r.length; n++) t ? 1 === r[n].nodeType && a(r[n]).is(t) && s.push(r[n]) : 1 === r[n].nodeType && s.push(r[n]);return new e(a.unique(s));
      }, remove: function () {
        for (var e = 0; e < this.length; e++) this[e].parentNode && this[e].parentNode.removeChild(this[e]);return this;
      }, add: function () {
        var e,
            t,
            s = this;for (e = 0; e < arguments.length; e++) {
          var i = a(arguments[e]);for (t = 0; t < i.length; t++) s[s.length] = i[t], s.length++;
        }return s;
      } }, a.fn = e.prototype, a.unique = function (e) {
      for (var a = [], t = 0; t < e.length; t++) a.indexOf(e[t]) === -1 && a.push(e[t]);return a;
    }, a;
  }(), i = ["jQuery", "Zepto", "Dom7"], r = 0; r < i.length; r++) window[i[r]] && e(window[i[r]]);var n;n = "undefined" == typeof s ? window.Dom7 || window.Zepto || window.jQuery : s, n && ("transitionEnd" in n.fn || (n.fn.transitionEnd = function (e) {
    function a(r) {
      if (r.target === this) for (e.call(this, r), t = 0; t < s.length; t++) i.off(s[t], a);
    }var t,
        s = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
        i = this;if (e) for (t = 0; t < s.length; t++) i.on(s[t], a);return this;
  }), "transform" in n.fn || (n.fn.transform = function (e) {
    for (var a = 0; a < this.length; a++) {
      var t = this[a].style;t.webkitTransform = t.MsTransform = t.msTransform = t.MozTransform = t.OTransform = t.transform = e;
    }return this;
  }), "transition" in n.fn || (n.fn.transition = function (e) {
    "string" != typeof e && (e += "ms");for (var a = 0; a < this.length; a++) {
      var t = this[a].style;t.webkitTransitionDuration = t.MsTransitionDuration = t.msTransitionDuration = t.MozTransitionDuration = t.OTransitionDuration = t.transitionDuration = e;
    }return this;
  }), "outerWidth" in n.fn || (n.fn.outerWidth = function (e) {
    return this.length > 0 ? e ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth : null;
  })), window.Swiper = t;
}(), "undefined" != typeof module ? module.exports = window.Swiper : "function" == typeof define && define.amd && define([], function () {
  "use strict";
  return window.Swiper;
});
//# sourceMappingURL=maps/swiper.min.js.map
/*! WOW - v0.1.9 - 2014-05-10
* Copyright (c) 2014 Matthieu Aussaguel; Licensed MIT */(function () {
  var a,
      b,
      c = function (a, b) {
    return function () {
      return a.apply(b, arguments);
    };
  };a = function () {
    function a() {}return a.prototype.extend = function (a, b) {
      var c, d;for (c in a) d = a[c], null != d && (b[c] = d);return b;
    }, a.prototype.isMobile = function (a) {
      return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)
      );
    }, a;
  }(), b = this.WeakMap || (b = function () {
    function a() {
      this.keys = [], this.values = [];
    }return a.prototype.get = function (a) {
      var b, c, d, e, f;for (f = this.keys, b = d = 0, e = f.length; e > d; b = ++d) if (c = f[b], c === a) return this.values[b];
    }, a.prototype.set = function (a, b) {
      var c, d, e, f, g;for (g = this.keys, c = e = 0, f = g.length; f > e; c = ++e) if (d = g[c], d === a) return void (this.values[c] = b);return this.keys.push(a), this.values.push(b);
    }, a;
  }()), this.WOW = function () {
    function d(a) {
      null == a && (a = {}), this.scrollCallback = c(this.scrollCallback, this), this.scrollHandler = c(this.scrollHandler, this), this.start = c(this.start, this), this.scrolled = !0, this.config = this.util().extend(a, this.defaults), this.animationNameCache = new b();
    }return d.prototype.defaults = { boxClass: "wow", animateClass: "animated", offset: 0, mobile: !0 }, d.prototype.init = function () {
      var a;return this.element = window.document.documentElement, "interactive" === (a = document.readyState) || "complete" === a ? this.start() : document.addEventListener("DOMContentLoaded", this.start);
    }, d.prototype.start = function () {
      var a, b, c, d;if (this.boxes = this.element.getElementsByClassName(this.config.boxClass), this.boxes.length) {
        if (this.disabled()) return this.resetStyle();for (d = this.boxes, b = 0, c = d.length; c > b; b++) a = d[b], this.applyStyle(a, !0);return window.addEventListener("scroll", this.scrollHandler, !1), window.addEventListener("resize", this.scrollHandler, !1), this.interval = setInterval(this.scrollCallback, 50);
      }
    }, d.prototype.stop = function () {
      return window.removeEventListener("scroll", this.scrollHandler, !1), window.removeEventListener("resize", this.scrollHandler, !1), null != this.interval ? clearInterval(this.interval) : void 0;
    }, d.prototype.show = function (a) {
      return this.applyStyle(a), a.className = "" + a.className + " " + this.config.animateClass;
    }, d.prototype.applyStyle = function (a, b) {
      var c, d, e;return d = a.getAttribute("data-wow-duration"), c = a.getAttribute("data-wow-delay"), e = a.getAttribute("data-wow-iteration"), this.animate(function (f) {
        return function () {
          return f.customStyle(a, b, d, c, e);
        };
      }(this));
    }, d.prototype.animate = function () {
      return "requestAnimationFrame" in window ? function (a) {
        return window.requestAnimationFrame(a);
      } : function (a) {
        return a();
      };
    }(), d.prototype.resetStyle = function () {
      var a, b, c, d, e;for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) a = d[b], e.push(a.setAttribute("style", "visibility: visible;"));return e;
    }, d.prototype.customStyle = function (a, b, c, d, e) {
      return b && this.cacheAnimationName(a), a.style.visibility = b ? "hidden" : "visible", c && this.vendorSet(a.style, { animationDuration: c }), d && this.vendorSet(a.style, { animationDelay: d }), e && this.vendorSet(a.style, { animationIterationCount: e }), this.vendorSet(a.style, { animationName: b ? "none" : this.cachedAnimationName(a) }), a;
    }, d.prototype.vendors = ["moz", "webkit"], d.prototype.vendorSet = function (a, b) {
      var c, d, e, f;f = [];for (c in b) d = b[c], a["" + c] = d, f.push(function () {
        var b, f, g, h;for (g = this.vendors, h = [], b = 0, f = g.length; f > b; b++) e = g[b], h.push(a["" + e + c.charAt(0).toUpperCase() + c.substr(1)] = d);return h;
      }.call(this));return f;
    }, d.prototype.vendorCSS = function (a, b) {
      var c, d, e, f, g, h;for (d = window.getComputedStyle(a), c = d.getPropertyCSSValue(b), h = this.vendors, f = 0, g = h.length; g > f; f++) e = h[f], c = c || d.getPropertyCSSValue("-" + e + "-" + b);return c;
    }, d.prototype.animationName = function (a) {
      var b;try {
        b = this.vendorCSS(a, "animation-name").cssText;
      } catch (c) {
        b = window.getComputedStyle(a).getPropertyValue("animation-name");
      }return "none" === b ? "" : b;
    }, d.prototype.cacheAnimationName = function (a) {
      return this.animationNameCache.set(a, this.animationName(a));
    }, d.prototype.cachedAnimationName = function (a) {
      return this.animationNameCache.get(a);
    }, d.prototype.scrollHandler = function () {
      return this.scrolled = !0;
    }, d.prototype.scrollCallback = function () {
      var a;return this.scrolled && (this.scrolled = !1, this.boxes = function () {
        var b, c, d, e;for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) a = d[b], a && (this.isVisible(a) ? this.show(a) : e.push(a));return e;
      }.call(this), !this.boxes.length) ? this.stop() : void 0;
    }, d.prototype.offsetTop = function (a) {
      for (var b; void 0 === a.offsetTop;) a = a.parentNode;for (b = a.offsetTop; a = a.offsetParent;) b += a.offsetTop;return b;
    }, d.prototype.isVisible = function (a) {
      var b, c, d, e, f;return c = a.getAttribute("data-wow-offset") || this.config.offset, f = window.pageYOffset, e = f + this.element.clientHeight - c, d = this.offsetTop(a), b = d + a.clientHeight, e >= d && b >= f;
    }, d.prototype.util = function () {
      return this._util || (this._util = new a());
    }, d.prototype.disabled = function () {
      return !this.config.mobile && this.util().isMobile(navigator.userAgent);
    }, d;
  }();
}).call(this);
