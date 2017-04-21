webpackHotUpdate(0,{

/***/ 630:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _Table = __webpack_require__(631);

	var _FlatButton = __webpack_require__(534);

	var _FlatButton2 = _interopRequireDefault(_FlatButton);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var AddressTable = function (_Component) {
		_inherits(AddressTable, _Component);

		function AddressTable() {
			_classCallCheck(this, AddressTable);

			return _possibleConstructorReturn(this, (AddressTable.__proto__ || Object.getPrototypeOf(AddressTable)).apply(this, arguments));
		}

		_createClass(AddressTable, [{
			key: 'render',
			value: function render() {
				var addresses = this.props.addresses;


				return _react2.default.createElement(
					_Table.Table,
					null,
					_react2.default.createElement(
						_Table.TableHeader,
						{
							displaySelectAll: false,
							adjustForCheckbox: false,
							selectable: true
						},
						_react2.default.createElement(
							_Table.TableRow,
							null,
							_react2.default.createElement(
								_Table.TableHeaderColumn,
								null,
								'\u7701\u4EFD'
							),
							_react2.default.createElement(
								_Table.TableHeaderColumn,
								null,
								'\u6D3E\u9063\u5355\u4F4D'
							),
							_react2.default.createElement(
								_Table.TableHeaderColumn,
								null,
								'\u90E8\u95E8'
							),
							_react2.default.createElement(
								_Table.TableHeaderColumn,
								null,
								'\u7535\u8BDD'
							),
							_react2.default.createElement(
								_Table.TableHeaderColumn,
								null,
								'\u5730\u5740'
							),
							_react2.default.createElement(
								_Table.TableHeaderColumn,
								{ width: 80 },
								'\u64CD\u4F5C'
							),
							_react2.default.createElement(
								_Table.TableHeaderColumn,
								{ width: 50 },
								'\u5220\u9664'
							)
						)
					),
					_react2.default.createElement(
						_Table.TableBody,
						{
							displayRowCheckbox: false,
							showRowHover: true
						},
						addresses.map(function (address, index) {
							return _react2.default.createElement(
								_Table.TableRow,
								{ key: index },
								_react2.default.createElement(
									_Table.TableRowColumn,
									null,
									address.province
								),
								_react2.default.createElement(
									_Table.TableRowColumn,
									null,
									address.unit
								),
								_react2.default.createElement(
									_Table.TableRowColumn,
									null,
									address.depart
								),
								_react2.default.createElement(
									_Table.TableRowColumn,
									null,
									address.phone
								),
								_react2.default.createElement(
									_Table.TableRowColumn,
									null,
									address.address
								),
								_react2.default.createElement(
									_Table.TableRowColumn,
									{ width: 80 },
									_react2.default.createElement(_FlatButton2.default, { label: '\u67E5\u770B/\u7F16\u8F91', primary: true })
								),
								_react2.default.createElement(
									_Table.TableRowColumn,
									{ width: 50 },
									_react2.default.createElement(_FlatButton2.default, { label: '\u5220\u9664', secondary: true })
								)
							);
						})
					)
				);
			}
		}]);

		return AddressTable;
	}(_react.Component);

	exports.default = AddressTable;

/***/ }

})