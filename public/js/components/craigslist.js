webpackJsonp([0],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Header = function (_Component) {
    _inherits(Header, _Component);

    function Header() {
        _classCallCheck(this, Header);

        var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

        _this.clickedBtn = function () {
            console.log('swag');
        };

        _this.state = {
            name: 'Joe'
        };
        return _this;
    }

    _createClass(Header, [{
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: "container" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'header',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: "left-menu" },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: "logo" },
                            'Craigslist'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: "city" },
                            'Boston',
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fas fa-chevron-down' })
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: "right-menu" },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: "user-img" },
                            'image'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: "user-dropdown" },
                            'my account',
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fas fa-chevron-down' })
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: "post-btn" },
                            'post to classified'
                        )
                    )
                )
            );
        }
    }]);

    return Header;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Header = function (_Component) {
    _inherits(Header, _Component);

    function Header() {
        _classCallCheck(this, Header);

        var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

        _this.clickedBtn = function () {
            console.log('swag');
        };

        _this.loopCategories = function () {
            var testArray = [1, 2, 3, 4, 5, 6, 7];
            return testArray.map(function (item) {
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: "categories", key: item },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: "link-title" },
                        'Community'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: "group-links" },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'a',
                            { href: '#', className: "link" },
                            'Community'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'a',
                            { href: '#', className: "link" },
                            'General'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'a',
                            { href: '#', className: "link" },
                            'Groups'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'a',
                            { href: '#', className: "link" },
                            'Activities'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'a',
                            { href: '#', className: "link" },
                            'Artists'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'a',
                            { href: '#', className: "link" },
                            'Local News'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'a',
                            { href: '#', className: "link" },
                            'Child Care'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'a',
                            { href: '#', className: "link" },
                            'Lost & Found'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'a',
                            { href: '#', className: "link" },
                            'Classes'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'a',
                            { href: '#', className: "link" },
                            'Musician'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'a',
                            { href: '#', className: "link" },
                            'Events'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'a',
                            { href: '#', className: "link" },
                            'Pets'
                        )
                    )
                );
            });
        };

        _this.loopTags = function () {
            var testTags = ["a", "b", "c", "d", "e", "f", "g"];
            return testTags.map(function (item) {
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { key: item, className: "tag" },
                    'Apple Macbook'
                );
            });
        };

        _this.state = {
            name: 'Angel'
        };
        return _this;
    }

    _createClass(Header, [{
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: "home" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: "container" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'h1',
                        null,
                        'Connecting People',
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
                        ' Everywhere'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'section',
                        { className: "links" },
                        this.loopCategories()
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'section',
                        { className: "trending" },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text', name: 'search' }),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: "title" },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'far fa-clock' }),
                            'trending'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: "trending-tags" },
                            this.loopTags()
                        )
                    )
                )
            );
        }
    }]);

    return Header;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__includes_Header_js__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_Home_js__ = __webpack_require__(101);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.clickedBtn = function () {
      console.log('swag');
    };

    _this.state = {
      name: 'Joe'
    };
    return _this;
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__includes_Header_js__["a" /* default */], null),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__pages_Home_js__["a" /* default */], null)
      );
    }
  }]);

  return App;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__App_js__ = __webpack_require__(97);




var app = document.getElementById('app');

__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__App_js__["a" /* default */], null), app);

/***/ })

},[99]);