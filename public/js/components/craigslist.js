webpackJsonp([0],{

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(17);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
            return _react2.default.createElement(
                'header',
                null,
                _react2.default.createElement(
                    'div',
                    { className: "left-menu" },
                    _react2.default.createElement(
                        'div',
                        { className: "logo" },
                        'Craigslist'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: "city" },
                        'Boston',
                        _react2.default.createElement('i', { className: 'fas fa-chevron-down' })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: "right-menu" },
                    _react2.default.createElement(
                        'div',
                        { className: "user-img" },
                        'image'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: "user-dropdown" },
                        'my account',
                        _react2.default.createElement('i', { className: 'fas fa-chevron-down' })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: "post-btn" },
                        'post to classified'
                    )
                )
            );
        }
    }]);

    return Header;
}(_react.Component);

exports.default = Header;

/***/ }),

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(17);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
                return _react2.default.createElement(
                    'div',
                    { className: "categories", key: item },
                    _react2.default.createElement(
                        'div',
                        { className: "container" },
                        _react2.default.createElement(
                            'div',
                            { className: "link-title" },
                            'Community'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: "group-links" },
                            _react2.default.createElement(
                                'a',
                                { href: '#', className: "link" },
                                'Community'
                            ),
                            _react2.default.createElement(
                                'a',
                                { href: '#', className: "link" },
                                'General'
                            ),
                            _react2.default.createElement(
                                'a',
                                { href: '#', className: "link" },
                                'Groups'
                            ),
                            _react2.default.createElement(
                                'a',
                                { href: '#', className: "link" },
                                'Activities'
                            ),
                            _react2.default.createElement(
                                'a',
                                { href: '#', className: "link" },
                                'Artists'
                            ),
                            _react2.default.createElement(
                                'a',
                                { href: '#', className: "link" },
                                'Local News'
                            ),
                            _react2.default.createElement(
                                'a',
                                { href: '#', className: "link" },
                                'Child Care'
                            ),
                            _react2.default.createElement(
                                'a',
                                { href: '#', className: "link" },
                                'Lost & FOund'
                            ),
                            _react2.default.createElement(
                                'a',
                                { href: '#', className: "link" },
                                'Classes'
                            ),
                            _react2.default.createElement(
                                'a',
                                { href: '#', className: "link" },
                                'Musician'
                            ),
                            _react2.default.createElement(
                                'a',
                                { href: '#', className: "link" },
                                'Events'
                            ),
                            _react2.default.createElement(
                                'a',
                                { href: '#', className: "link" },
                                'Pets'
                            )
                        )
                    )
                );
            });
        };

        _this.loopTags = function () {
            var testTags = ["a", "b", "c", "d", "e", "f", "g"];
            return testTags.map(function (item) {
                return _react2.default.createElement(
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
            return _react2.default.createElement(
                'div',
                { className: "home" },
                _react2.default.createElement(
                    'h1',
                    null,
                    'Connecting People',
                    _react2.default.createElement('br', null),
                    ' Everywhere'
                ),
                _react2.default.createElement(
                    'section',
                    { className: "link-section" },
                    this.loopCategories()
                ),
                _react2.default.createElement(
                    'section',
                    { className: "trending" },
                    _react2.default.createElement('input', { type: 'text', name: 'search' }),
                    _react2.default.createElement(
                        'div',
                        { className: "title" },
                        _react2.default.createElement('i', { className: 'far fa-clock' }),
                        'trending'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: "trending-tags" },
                        this.loopTags()
                    )
                )
            );
        }
    }]);

    return Header;
}(_react.Component);

exports.default = Header;

/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(17);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Header = __webpack_require__(100);

var _Header2 = _interopRequireDefault(_Header);

var _Home = __webpack_require__(101);

var _Home2 = _interopRequireDefault(_Home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(_Home2.default, null)
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;

/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(17);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(97);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(_App2.default, null), app);

/***/ })

},[99]);