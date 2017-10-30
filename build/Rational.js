"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Rational = exports.Rational = function () {
  function Rational(n, d) {
    _classCallCheck(this, Rational);

    this.n = n;
    this.d = d;
  }

  _createClass(Rational, [{
    key: "add",
    value: function add(_ref) {
      var numerator = _ref.numerator,
          denominator = _ref.denominator;

      return new this.constructor(this.numerator * denominator + numerator * this.denominator, this.denominator * denominator);
    }
  }, {
    key: "toString",
    value: function toString() {
      return `${this.numerator}/${this.denominator}`;
    }
  }, {
    key: "numerator",
    get: function get() {
      return this.n;
    },
    set: function set(n) {
      this.n = n;
    }
  }, {
    key: "denominator",
    get: function get() {
      return this.d;
    },
    set: function set(d) {
      this.d = d;
    }
  }]);

  return Rational;
}();

var gcd = function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
};

var simplify = function simplify(a, b) {
  var d = gcd(a, b);
  return [a / d, b / d];
};

var SimplifiedRational = exports.SimplifiedRational = function (_Rational) {
  _inherits(SimplifiedRational, _Rational);

  function SimplifiedRational(n, d) {
    var _ref2;

    _classCallCheck(this, SimplifiedRational);

    return _possibleConstructorReturn(this, (_ref2 = SimplifiedRational.__proto__ || Object.getPrototypeOf(SimplifiedRational)).call.apply(_ref2, [this].concat(_toConsumableArray(simplify(n, d)))));
  }

  return SimplifiedRational;
}(Rational);