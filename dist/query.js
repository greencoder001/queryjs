"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Times:
var queryTimes = {
  milisecond: 1
};
queryTimes.second = queryTimes.milisecond * 1000;
queryTimes.minute = queryTimes.second * 60;
queryTimes.hour = queryTimes.minute * 60;
queryTimes.day = queryTimes.hour * 24;
queryTimes.month = queryTimes.day * 31;
queryTimes.year = queryTimes.day * 365;
queryTimes.ms = queryTimes.milisecond; // Create query object:

var query = {
  Promise: window.Promise,
  time: {
    // Times:
    milisecond: queryTimes.ms,
    second: queryTimes.second,
    minute: queryTimes.minute,
    month: queryTimes.month,
    hour: queryTimes.hour,
    day: queryTimes.day,
    year: queryTimes.year,
    s: queryTimes.second,
    m: queryTimes.minute,
    h: queryTimes.hour,
    d: queryTimes.day,
    y: queryTimes.year,
    // Functions:
    ms: function ms(count) {
      return query.time.milisecond * count;
    },
    miliseconds: function miliseconds(count) {
      return query.time.milisecond * count;
    },
    seconds: function seconds(count) {
      return query.time.second * count;
    },
    minutes: function minutes(count) {
      return query.time.minutes * count;
    },
    months: function months(count) {
      return query.time.month * count;
    },
    hours: function hours(count) {
      return query.time.hour * count;
    },
    days: function days(count) {
      return query.time.day * count;
    },
    years: function years(count) {
      return query.time.year * count;
    },
    sleep: function sleep(miliseconds) {
      return new query.Promise(function (resolve) {
        return setTimeout(resolve, miliseconds);
      });
    },
    wait: function wait(miliseconds) {
      return new query.Promise(function (resolve) {
        return setTimeout(resolve, miliseconds);
      });
    }
  },
  Sound: /*#__PURE__*/function () {
    function Sound(audio) {
      _classCallCheck(this, Sound);

      this.src = audio.src;
      this.preload = audio.preload || 'auto';
      this.autoPlay = audio.autoPlay || false;
      this.volume = audio.volume || 1;

      this.onEnd = audio.onended || function () {};

      this.init();
    }

    _createClass(Sound, [{
      key: "init",
      value: function init() {
        this.audio = new window.Audio(this.src);
        this.audio.preload = this.preload;
        this.audio.volume = this.volume;

        if (this.autoPlay) {
          this.play();
        } // Events:


        this.audio.onended = this.onEnd;
      }
    }, {
      key: "time",
      value: function time(ms) {
        if (query.exist(ms)) {
          this.audio.currentTime = ms;
        } else {
          return this.audio.currentTime;
        }
      }
    }, {
      key: "play",
      value: function play() {
        this.audio.play();
        this.isPlaying = true;
      }
    }, {
      key: "pause",
      value: function pause() {
        this.audio.pause();
        this.isPlaying = false;
      }
    }, {
      key: "stop",
      value: function stop() {
        this.pause();
      }
    }, {
      key: "toggle",
      value: function toggle() {
        if (this.audio.paused) {
          this.audio.play();
        } else {
          this.audio.pause();
        }
      }
    }, {
      key: "toggleMute",
      value: function toggleMute() {
        this.audio.muted = !this.audio.muted;
      }
    }, {
      key: "mute",
      value: function mute() {
        this.audio.muted = true;
      }
    }, {
      key: "unmute",
      value: function unmute() {
        this.audio.muted = false;
      }
    }]);

    return Sound;
  }(),
  loadStyle: function loadCSSStyles(css) {
    document.head.innerHTML += '<style type="text/css">' + css + '</style>';
  },
  makeDraggable: function createADraggableDiv(element, dragZone) {
    var ondrag = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};
    var ondragstart = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {};
    var ondragclose = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : function () {};
    var options = arguments.length > 5 ? arguments[5] : undefined;
    var opts = options || {
      scroll: false
    };
    element.style.position = opts.scroll || false ? 'fixed' : 'absolute';
    var pos1 = 0;
    var pos2 = 0;
    var pos3 = 0;
    var pos4 = 0;

    if (dragZone) {
      // if present, the header is where you move the DIV from:
      dragZone.onmousedown = dragMouseDown;
    } else {
      // otherwise, move the DIV from anywhere inside the DIV:
      element.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
      if (ondragstart() !== false) {
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement; // call a function whenever the cursor moves:

        document.onmousemove = elementDrag;
      }

      e = e || window.event;
      e.preventDefault();
    }

    function elementDrag(e) {
      ondrag();
      e = e || window.event;
      e.preventDefault(); // calculate the new cursor position:

      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY; // set the element's new position:

      element.style.top = element.offsetTop - pos2 + 'px';
      element.style.left = element.offsetLeft - pos1 + 'px';
    }

    function closeDragElement() {
      ondragclose(); // stop moving when mouse button is released:

      document.onmouseup = null;
      document.onmousemove = null;
    }
  },
  cookie: {
    set: function setCookie(name, value, expires
    /* value in ms */
    ) {
      if (query.exist(expires)) {
        var date = new Date();
        date = new Date(date.getTime() + expires);
        var del = 'expires=' + date.toGMTString();
        date.setTime(date.getTime() + del);
        document.cookie = name + '=' + value + '' + del;
      } else {
        document.cookie = name + '=' + value + '';
      }
    },
    "delete": function _delete(name) {
      document.cookie = name + '= expires=Thu, 01-Jan-70 00:00:01 GMT';
    },
    get: function getCookie(ckiName) {
      var ckiVal = document.cookie.match('(^|)\\s*' + ckiName + '\\s*=\\s*([^]+)');
      return decodeURIComponent(ckiVal ? ckiVal.pop() : null);
    }
  },
  storage: {
    local: {
      get: function get(name, json) {
        if (query.exist(json)) {
          return JSON.parse(window.localStorage.getItem(name));
        } else {
          return window.localStorage.getItem(name);
        }
      },
      set: function set(name, value) {
        return window.localStorage.setItem(name, value);
      },
      "delete": function remove(name) {
        window.localStorage.removeItem(name);
      },
      clear: function clear() {
        window.localStorage.clear();
      }
    },
    session: {
      get: function get(name, json) {
        if (query.exist(json)) {
          return JSON.parse(window.localStorage.getItem(name));
        } else {
          return window.localStorage.getItem(name);
        }
      },
      set: function set(name, value) {
        return window.localStorage.setItem(name, value);
      },
      "delete": function remove(name) {
        window.sessionStorage.removeItem(name);
      },
      clear: function clear() {
        window.sessionStorage.clear();
      }
    }
  },
  locator: {
    getPos: function getPos(thenDo) {
      if (navigator.geolocation) {
        return navigator.geolocation.getCurrentPosition(thenDo);
      } else {
        console.error('[QUERY Locator] Geolocation is not supported!');
        return {
          type: 'error',
          err: 'Geolocation is not supported'
        };
      }
    }
  },
  goTo: function goTo(page) {
    window.location.href = page;
  },
  page: {
    navigate: function navigate(page) {
      window.location.href = page;
    },
    darkMode: function darkMode() {
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    },
    close: function close() {
      return window.close();
    },
    reload: function reload() {
      window.location = window.location.href;
    },
    history: {
      back: function back(count) {
        if (query.exist(count)) {
          window.history.back(count);
        } else {
          window.history.back();
        }
      },
      forward: function forward(count) {
        if (query.exist(count)) {
          window.history.forward(count);
        } else {
          window.history.forward();
        }
      }
    }
  },
  Math: {
    add: function add(addend, summand) {
      if (!query.exist(summand)) {
        return addend + 1;
      } else {
        return addend + summand;
      }
    },
    subtract: function subtract(one, two) {
      if (!query.exist(two)) {
        return one - 1;
      } else {
        return one - two;
      }
    },
    multiplicate: function multiplicate(one, two) {
      return one * two;
    },
    modulo: function modulo(one, two) {
      return one % two;
    },
    divide: function divide(one, two) {
      return one / two;
    },
    diff: function diff(one, two) {
      if (one > two) {
        return one - two;
      } else {
        return two - one;
      }
    },
    PI: 3.141592653589793
  },
  clearDOM: function clearDOM() {
    document.querySelector('html').innerHTML = '';
  },
  exist: function exist(what) {
    if (what === null || what === undefined) {
      return false;
    } else {
      return true;
    }
  },
  conncetion: function conncetion() {
    return navigator.onLine;
  },
  connceted: function connceted() {
    return navigator.onLine;
  },

  /* system: '', */
  lang: navigator.language,
  browsers: {},

  /* browser: '',
  browsers: {
    safari: null,
    chromium: null,
    chrome: null,
    webkit: null,
    ms: null,
    edge: null,
    ie: null,
    ie11: null,
    ieLower: null,
    opera: null,
    firefox: null,
    brave: null,
    blink: null
  }, */
  sel: function selectDOMElement(selector) {
    if (selector === document) {
      return function onReady(thenDo) {
        window.addEventListener('DOMContentLoaded', thenDo);
      };
    }

    var selected = document.querySelectorAll(selector);

    if (selected.length > 1) {
      selected.any = function (key, value) {
        var keys = key.split('.');

        if (keys.length === 1) {
          var _iterator = _createForOfIteratorHelper(this),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var element = _step.value;
              element[keys[0]] = value;
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        } else if (keys.length === 2) {
          var _iterator2 = _createForOfIteratorHelper(this),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var _element = _step2.value;
              _element[keys[0]][keys[1]] = value;
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        } else if (keys.length === 3) {
          var _iterator3 = _createForOfIteratorHelper(this),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var _element2 = _step3.value;
              _element2[keys[0]][keys[1]][keys[2]] = value;
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        } else if (keys.length === 4) {
          var _iterator4 = _createForOfIteratorHelper(this),
              _step4;

          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var _element3 = _step4.value;
              _element3[keys[0]][keys[1]][keys[2]][keys[3]] = value;
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
        }

        return true;
      };

      selected.on = function addEventListener(e, t) {
        var _iterator5 = _createForOfIteratorHelper(this),
            _step5;

        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var element = _step5.value;
            element.addEventListener(e, t);
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
      };

      selected.removeClass = function (DOMclass) {
        var _iterator6 = _createForOfIteratorHelper(this),
            _step6;

        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
            var element = _step6.value;
            element.classList.remove(DOMclass);
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }
      };

      selected.addClass = function (DOMclass) {
        var _iterator7 = _createForOfIteratorHelper(this),
            _step7;

        try {
          for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
            var element = _step7.value;
            element.classList.add(DOMclass);
          }
        } catch (err) {
          _iterator7.e(err);
        } finally {
          _iterator7.f();
        }
      };

      selected.toggleClass = function (DOMclass) {
        var _iterator8 = _createForOfIteratorHelper(this),
            _step8;

        try {
          for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
            var element = _step8.value;
            element.classList.toggle(DOMclass);
          }
        } catch (err) {
          _iterator8.e(err);
        } finally {
          _iterator8.f();
        }
      }; // Toggle visibility:


      selected.hide = function () {
        var _iterator9 = _createForOfIteratorHelper(this),
            _step9;

        try {
          for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
            var element = _step9.value;
            element.style.visibility = 'hidden';
          }
        } catch (err) {
          _iterator9.e(err);
        } finally {
          _iterator9.f();
        }
      };

      selected.show = function () {
        var _iterator10 = _createForOfIteratorHelper(this),
            _step10;

        try {
          for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
            var element = _step10.value;
            element.style.visibility = 'visible';
          }
        } catch (err) {
          _iterator10.e(err);
        } finally {
          _iterator10.f();
        }
      };

      selected.toggleVisibility = function () {
        var vis = this[0].style.visibility === 'visible';

        var _iterator11 = _createForOfIteratorHelper(this),
            _step11;

        try {
          for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
            var element = _step11.value;

            if (vis) {
              element.style.visibility = 'hidden';
            } else {
              element.style.visibility = 'visible';
            }
          }
        } catch (err) {
          _iterator11.e(err);
        } finally {
          _iterator11.f();
        }
      }; // Remove Element:


      selected["delete"] = function () {
        var _iterator12 = _createForOfIteratorHelper(this),
            _step12;

        try {
          for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
            var element = _step12.value;
            element.outerHTML = '';
          }
        } catch (err) {
          _iterator12.e(err);
        } finally {
          _iterator12.f();
        }
      }; // Blur:


      selected.blur = function (radius) {
        if (typeof radius === 'number') {
          var _iterator13 = _createForOfIteratorHelper(this),
              _step13;

          try {
            for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
              var element = _step13.value;
              element.style.filter = "blur(".concat(radius, "px)");
            }
          } catch (err) {
            _iterator13.e(err);
          } finally {
            _iterator13.f();
          }
        } else {
          var _iterator14 = _createForOfIteratorHelper(this),
              _step14;

          try {
            for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
              var _element4 = _step14.value;
              _element4.style.filter = "blur(".concat(radius, ")");
            }
          } catch (err) {
            _iterator14.e(err);
          } finally {
            _iterator14.f();
          }
        }
      };

      selected.unblur = function () {
        var _iterator15 = _createForOfIteratorHelper(this),
            _step15;

        try {
          for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
            var element = _step15.value;
            element.style.filter = null;
          }
        } catch (err) {
          _iterator15.e(err);
        } finally {
          _iterator15.f();
        }
      }; // inner:


      selected.inner = function (html) {
        if (!query.exist(html)) {
          return this[0].innerHTML;
        }

        var _iterator16 = _createForOfIteratorHelper(this),
            _step16;

        try {
          for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
            var element = _step16.value;
            element.innerHTML = html;
          }
        } catch (err) {
          _iterator16.e(err);
        } finally {
          _iterator16.f();
        }
      }; // outer:


      selected.outer = function (html) {
        if (!query.exist(html)) {
          return this[0].outerHTML;
        }

        var _iterator17 = _createForOfIteratorHelper(this),
            _step17;

        try {
          for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
            var element = _step17.value;
            element.outerHTML = html;
          }
        } catch (err) {
          _iterator17.e(err);
        } finally {
          _iterator17.f();
        }
      }; // SET THE SELECTOR:


      selected.selector = selector;
      return selected;
    } else {
      var s = selected[0];

      s.on = function (e, t) {
        this.addEventListener(e, t);
      };

      s.removeClass = function (DOMclass) {
        this.classList.remove(DOMclass);
      };

      s.addClass = function (DOMclass) {
        this.classList.add(DOMclass);
      };

      s.toggleClass = function (DOMclass) {
        this.classList.toggle(DOMclass);
      }; // Toggle visibility:


      s.hide = function () {
        this.style.visibility = 'hidden';
      };

      s.show = function () {
        this.style.visibility = 'visible';
      };

      s.toggleVisibility = function () {
        var vis = this[0].style.visibility === 'visible';

        if (vis) {
          this.style.visibility = 'hidden';
        } else {
          this.style.visibility = 'visible';
        }
      }; // Remove Element:


      s["delete"] = function () {
        this.outerHTML = '';
      }; // Blur:


      s.blur = function (radius) {
        if (typeof radius === 'number') {
          this.style.filter = "blur(".concat(radius, "px)");
        } else {
          this.style.filter = "blur(".concat(radius, ")");
        }
      };

      selected.unblur = function () {
        this.style.filter = null;
      }; //  inner:


      selected.inner = function (html) {
        this.innerHTML = html;
      }; // outer:


      selected.outer = function (html) {
        this.outerHTML = html;
      };

      s.selector = selector;
      return s;
    }
  }
}; // Initialize query:
// Set the browser:

query.browsers.chromium = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
query.browsers.edge = /Edg/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
query.browsers.opera = !!window.opr && !!window.opr.addons || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
query.browsers.firefox = typeof InstallTrigger !== 'undefined';
query.browsers.blink = (query.browsers.chromium || query.browsers.opera) && !!window.CSS;
query.browsers.brave = query.exist(navigator.brave); // It is ie10 or lower?

query.browsers.ieLower = navigator.appName === 'Microsoft Internet Explorer'; // It is ie?

if (navigator.appName === 'Microsoft Internet Explorer') {
  query.browsers.ie = true;
} else {
  query.browsers.ie = false;
}

if (/rv:11.0/i.test(navigator.userAgent)
/* && !navigator.appVersion.indexOf('Trident') === -1 */
) {
    // Ie11!
    query.browsers.ie = true;
    query.browsers.ie11 = true;
    query.browsers.ieLower = false;
  }

query.browsers.safari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor); // Chromium based browsers

if (!query.browsers.edge && !query.browsers.brave && !query.browsers.opera) {
  query.browsers.chrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
} else {
  // Chromium based browser (!!!No Chrome):
  query.browsers.chrome = false;
} // It is a ms browser?


if (query.browsers.edge || query.browsers.ie) {
  // It's a Microsoft browser:
  query.browsers.ms = true;
} else {
  query.browsers.ms = false;
} // Not ie?


if (!query.browsers.ie) {
  query.browsers.ie11 = false;
  query.browsers.ieLower = false;
} // It is a webkit browser?


if (query.browsers.safari || query.browsers.chrome || query.browsers.chromium) {
  // Yes, it is.
  query.browsers.webkit = true;
} else {
  /* Non webkit browser: */
  query.browsers.webkit = false;
} // Set the browser property to the browser:


if (query.browsers.safari) {
  query.browser = 'safari';
} else if (query.browsers.opera) {
  query.browser = 'opera';
} else if (query.browsers.brave) {
  query.browser = 'brave';
} else if (query.browsers.edge) {
  query.browser = 'edge';
} else if (query.browsers.firefox) {
  query.browser = 'firefox';
} else if (query.browsers.ie) {
  query.browser = 'internet-explorer';
} else if (query.browsers.opera) {
  query.browser = 'chromium';
} else if (query.browsers.chrome) {
  query.browser = 'chrome';
} else {
  query.browser = 'unknown';
} // Set the System:


if (navigator.platform.toLocaleLowerCase().indexOf('win') === 0) query.system = 'Windows';
if (navigator.platform.toLocaleLowerCase().indexOf('mac') === 0) query.system = 'MacOS'; // Set the cki shortcut for cookie:

query.cki = query.cookie; // Font loader:

query.loadFont = function loadCustomFontFromSpecificURL(name, url) {
  query.loadStyle('@font-face{font-family:\'' + name + '\'font-display:swapsrc:local(' + name + '),url(' + url + ')}');
}; // Script Loader:


query.loadScript = function loadScript(js) {
  document.head.innerHTML += "<script type=\"text/javascript\">".concat(js, "</script>");
}; // External Script Loader:


query.loadExternalScript = function loadExternalScript(src) {
  document.head.innerHTML += "<script type=\"text/javascript\" src=\"".concat(src, "\"></script>");
}; // Refresh:


query.page.refresh = query.page.reload; // Background Services:

setInterval(function () {
  query.page.focus = document.hasFocus();
}, 200); // Add query to $:

var $ = query;
var $$ = query.sel; // IE Error:

if (query.browsers.ie) {
  console.error('[query] query don\'t support Internet Explorer!');
} // set Query to window:


if (!window.$) {
  window.$ = $;
  window.$$ = $$;
}

window.query = query;
window.queryjs = query;