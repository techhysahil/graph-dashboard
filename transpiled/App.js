'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _pieChart = require('./component/pieChart.js');

var _pieChart2 = _interopRequireDefault(_pieChart);

var _lineChart = require('./component/lineChart.js');

var _lineChart2 = _interopRequireDefault(_lineChart);

var _barChart = require('./component/barChart.js');

var _barChart2 = _interopRequireDefault(_barChart);

var _polarChart = require('./component/polarChart.js');

var _polarChart2 = _interopRequireDefault(_polarChart);

var _graphConfig = require('./graphConfig.json');

var _graphConfig2 = _interopRequireDefault(_graphConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import './App.css';

var App = function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
    // super gives us our context for 'this'


    _this.state = {
      chartConfig: _graphConfig2.default
    };
    _this.renderCharts = _this.renderCharts.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'renderCharts',
    value: function renderCharts() {
      return this.state.chartConfig.map(function (item, index) {
        switch (item.type) {
          case "pieChart":
            return _react2.default.createElement(_pieChart2.default, { key: "PieChart" + index, width: item.width });
          case "barChart":
            return _react2.default.createElement(_barChart2.default, { key: "PieChart" + index, width: item.width });
          case "polarChart":
            return _react2.default.createElement(_polarChart2.default, { key: "PieChart" + index, width: item.width });
          case "lineChart":
            return _react2.default.createElement(_lineChart2.default, { key: "PieChart" + index, width: item.width });
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'App' },
        this.renderCharts()
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;