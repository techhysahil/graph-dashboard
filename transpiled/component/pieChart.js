'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactChartjs = require('react-chartjs-2');

var _pieChart = require('./../data/pie-chart.json');

var _pieChart2 = _interopRequireDefault(_pieChart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PieChart = function (_Component) {
  _inherits(PieChart, _Component);

  function PieChart() {
    _classCallCheck(this, PieChart);

    return _possibleConstructorReturn(this, (PieChart.__proto__ || Object.getPrototypeOf(PieChart)).apply(this, arguments));
  }

  _createClass(PieChart, [{
    key: 'render',
    value: function render() {
      var className = "";
      if (this.props.width === 100) {
        className = "fullWidth";
      } else if (this.props.width === 50) {
        className = "halfWidth";
      }

      return _react2.default.createElement(
        'div',
        { className: "chart-wrapper " + className },
        _react2.default.createElement(
          'div',
          { className: 'chart-title' },
          'Pie Chart'
        ),
        _react2.default.createElement(_reactChartjs.Pie, { data: _pieChart2.default.data, options: _pieChart2.default.options })
      );
    }
  }]);

  return PieChart;
}(_react.Component);

exports.default = PieChart;