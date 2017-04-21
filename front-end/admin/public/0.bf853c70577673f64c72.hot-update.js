webpackHotUpdate(0,{

/***/ 628:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.changeProvince = changeProvince;
	exports.changeUnit = changeUnit;
	exports.changeDepart = changeDepart;
	exports.show_add_record = show_add_record;
	exports.hide_add_record = hide_add_record;
	exports.add_record = add_record;
	exports.change_add_form_data = change_add_form_data;
	exports.show_delete_record = show_delete_record;
	exports.hide_delete_record = hide_delete_record;
	exports.delete_record = delete_record;
	exports.show_edit_record = show_edit_record;
	exports.hide_edit_record = hide_edit_record;
	exports.change_edit_form_data = change_edit_form_data;
	exports.edit_record = edit_record;
	exports.fetch_address_data = fetch_address_data;

	var _config = __webpack_require__(582);

	var CHANGE_PROVINCE = "CHANGE_PROVINCE";
	var CHANGE_UNIT = "CHANGE_UNIT";
	var CHANGE_DEPART = "CHANGE_DEPART";

	var UPDATE_DATA = "UPDATE_DATA";

	var DELETE_RECORD = "DELETE_RECORD";
	var SHOW_DELETE_RECORD = "SHOW_DELETE_RECORD";
	var HIDE_DELETE_RECORD = "HIDE_DELETE_RECORD";

	var SHOW_EDIT_RECORD = "SHOW_EDIT_RECORD";
	var HIDE_EDIT_RECORD = "HIDE_EDIT_RECORD";
	var CHANGE_EDIT_FORM_DATA = "CHANGE_EDIT_FORM_DATA";

	var ADD_RECORD = "ADD_RECORD";
	var SHOW_ADD_RECORD = "SHOW_ADD_RECORD";
	var HIDE_ADD_RECORD = "HIDE_ADD_RECORD";
	var CHANGE_ADD_FORM_DATA = "CHANGE_ADD_FORM_DATA";

	var SHOW_SNACKBAR = "SHOW_SNACKBAR";
	var show_snackbar = function show_snackbar(msg) {
		return {
			type: SHOW_SNACKBAR,
			msg: msg
		};
	};
	exports.show_snackbar = show_snackbar;

	function changeProvince(event, index, value) {
		return {
			type: CHANGE_PROVINCE,
			data: value
		};
	}

	function changeUnit(event, index, value) {
		return {
			type: CHANGE_UNIT,
			data: value
		};
	}

	function changeDepart(event, index, value) {
		return {
			type: CHANGE_DEPART,
			data: value
		};
	}

	function show_add_record() {
		return {
			type: SHOW_ADD_RECORD
		};
	}
	function hide_add_record() {
		return {
			type: HIDE_ADD_RECORD
		};
	}
	function add_record() {
		return function (dispatch, getState) {
			dispatch(show_snackbar("正在添加记录..."));
			dispatch({
				type: HIDE_ADD_RECORD
			});
			var token = window.localStorage.getItem('token'),
			    form = getState().address.addRecord.form;
			window.fetch("" + _config.baseUrl + _config.addressUrl, {
				method: 'POST',
				headers: {
					"Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
					token: token
				},
				body: "province=" + form.province + "&unit=" + form.unit + "&depart=" + form.depart + "&phone=" + form.phone + "&address=" + form.address
			}).then(function (response) {
				if (response.ok) {
					response.json().then(function (data) {
						if (data.code == 10000) {
							data = data.data;
							dispatch(show_snackbar("添加成功"));
							dispatch({
								type: ADD_RECORD,
								data: {
									_id: data,
									province: form.province,
									unit: form.unit,
									depart: form.depart,
									phone: form.phone,
									address: form.address
								}
							});
						} else {
							dispatch(show_snackbar(data.error));
						}
					});
				} else {
					dispatch(show_snackbar("连接服务器失败"));
				}
			}, function (err) {
				dispatch(show_snackbar("连接服务器失败"));
			});
		};
	}
	function change_add_form_data(field, value) {
		return {
			type: CHANGE_ADD_FORM_DATA,
			data: {
				field: field,
				value: value
			}
		};
	}

	function show_delete_record(id) {
		return {
			type: SHOW_DELETE_RECORD,
			data: id
		};
	}
	function hide_delete_record() {
		return {
			type: HIDE_DELETE_RECORD
		};
	}
	function delete_record() {
		return function (dispatch, getState) {
			dispatch(show_snackbar("正在删除记录..."));
			dispatch({
				type: HIDE_DELETE_RECORD
			});
			var token = window.localStorage.getItem('token'),
			    id = getState().address.deleteRecord.id;
			window.fetch("" + _config.baseUrl + _config.addressUrl + "/" + id, {
				method: 'DELETE',
				headers: {
					"Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
					token: token
				}
			}).then(function (response) {
				if (response.ok) {
					response.json().then(function (data) {
						if (data.code == 10000) {
							data = data.data;
							dispatch(show_snackbar("删除成功"));
							dispatch({
								type: DELETE_RECORD,
								data: id
							});
						} else {
							dispatch(show_snackbar(data.error));
						}
					});
				} else {
					dispatch(show_snackbar("连接服务器失败"));
				}
			}, function (err) {
				dispatch(show_snackbar("连接服务器失败"));
			});
		};
	}

	function show_edit_record(id) {
		return {
			type: SHOW_EDIT_RECORD,
			data: id
		};
	}
	function hide_edit_record() {
		return {
			type: HIDE_EDIT_RECORD
		};
	}
	function change_edit_form_data(field, value) {
		return {
			type: CHANGE_EDIT_FORM_DATA,
			data: {
				field: field,
				value: value
			}
		};
	}
	function edit_record() {
		return function (dispatch, getState) {
			console.log("保存更改: " + JSON.stringify(getState().address.editRecord.form));
		};
	}

	function fetch_address_data() {
		return function (dispatch, getState) {
			dispatch(show_snackbar("正在获取数据..."));
			var token = window.localStorage.getItem("token");
			window.fetch("" + _config.baseUrl + _config.addressUrl, {
				method: 'GET',
				headers: {
					"Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
					token: token
				}
			}).then(function (response) {
				var token = response.headers.get('token');
				if (response.ok) {
					response.json().then(function (data) {
						if (data.code == 10000) {
							data = data.data;
							dispatch(show_snackbar("获取数据成功"));
							dispatch({
								type: UPDATE_DATA,
								data: data
							});
						} else {
							dispatch(show_snackbar(data.error));
						}
					});
				} else {
					dispatch(show_snackbar("连接服务器失败"));
				}
			}, function (err) {
				dispatch(show_snackbar("连接服务器失败"));
			});
		};
	}

/***/ },

/***/ 629:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = address;

	var _immutable = __webpack_require__(627);

	var initialState = {
		province: {
			current: 0,
			items: ['请选择省份', '广东省', '福建省', '北京市']
		},
		unit: {
			current: 0,
			items: ['请选择派遣单位', '派遣单位1']
		},
		depart: {
			current: 0,
			items: ['请选择部门', '部门1']
		},
		addRecord: {
			show: false,
			form: {
				province: '',
				unit: '',
				depart: '',
				phone: '',
				address: ''
			}
		},
		deleteRecord: {
			show: false,
			id: null
		},
		editRecord: {
			show: false,
			form: {
				_id: '',
				province: '',
				unit: '',
				depart: '',
				phone: '',
				address: ''
			}
		},
		addresses: []
	};

	var generate_new_state = function generate_new_state(state) {
		var newState = (0, _immutable.fromJS)(state);
		return newState.toJS();
	};

	var change_province = function change_province(state, value) {
		var newState = generate_new_state(state);
		newState.province.current = value;
		newState.unit.current = 0;
		return newState;
	};

	var change_unit = function change_unit(state, value) {
		var newState = generate_new_state(state);
		newState.unit.current = value;
		newState.depart.current = 0;
		return newState;
	};

	var change_depart = function change_depart(state, value) {
		var newState = generate_new_state(state);
		newState.depart.current = value;
		return newState;
	};

	var update_data = function update_data(state, data) {
		var newState = generate_new_state(state);
		newState.addresses = data;
		return newState;
	};

	var show_delete_record = function show_delete_record(state, data) {
		var newState = generate_new_state(state);
		newState.deleteRecord = {
			show: true,
			id: data
		};
		return newState;
	};
	var hide_delete_record = function hide_delete_record(state) {
		var newState = generate_new_state(state);
		newState.deleteRecord.show = false;
		return newState;
	};
	var delete_record = function delete_record(state, id) {
		var newState = generate_new_state(state);
		newState.addresses = newState.addresses.filter(function (address) {
			return address._id != id;
		});
		return newState;
	};

	var show_edit_record = function show_edit_record(state, data) {
		var newState = generate_new_state(state);
		newState.editRecord.show = true;
		for (var i = 0; i < newState.addresses.length; ++i) {
			if (newState.addresses[i]._id == data) {
				newState.editRecord.form = newState.addresses[i];
				break;
			}
		}
		return newState;
	};
	var hide_edit_record = function hide_edit_record(state, data) {
		var newState = generate_new_state(state);
		newState.editRecord.show = false;
		return newState;
	};
	var change_edit_form_data = function change_edit_form_data(state, data) {
		var newState = generate_new_state(state);
		newState.editRecord.form[data.field] = data.value;
		return newState;
	};

	var show_add_record = function show_add_record(state) {
		var newState = generate_new_state(state);
		var province = newState.province,
		    unit = newState.unit,
		    depart = newState.depart;

		newState.addRecord.show = true;
		newState.addRecord.form = {
			province: province.current == 0 ? '' : province.items[province.current],
			unit: unit.current == 0 ? '' : unit.items[unit.current],
			depart: depart.current == 0 ? '' : depart.items[depart.current],
			phone: '',
			address: ''
		};
		return newState;
	};
	var hide_add_record = function hide_add_record(state) {
		var newState = generate_new_state(state);
		newState.addRecord.show = false;
		return newState;
	};
	var change_add_form_data = function change_add_form_data(state, data) {
		var newState = generate_new_state(state);
		newState.addRecord.form[data.field] = data.value;
		return newState;
	};
	var add_record = function add_record(state, data) {
		var newState = generate_new_state(state);
		newState.addresses.push(data);
		return newState;
	};

	var CHANGE_PROVINCE = "CHANGE_PROVINCE";
	var CHANGE_UNIT = "CHANGE_UNIT";
	var CHANGE_DEPART = "CHANGE_DEPART";

	var UPDATE_DATA = "UPDATE_DATA";

	var DELETE_RECORD = "DELETE_RECORD";
	var SHOW_DELETE_RECORD = "SHOW_DELETE_RECORD";
	var HIDE_DELETE_RECORD = "HIDE_DELETE_RECORD";

	var SHOW_EDIT_RECORD = "SHOW_EDIT_RECORD";
	var HIDE_EDIT_RECORD = "HIDE_EDIT_RECORD";
	var CHANGE_EDIT_FORM_DATA = "CHANGE_EDIT_FORM_DATA";

	var ADD_RECORD = "ADD_RECORD";
	var SHOW_ADD_RECORD = "SHOW_ADD_RECORD";
	var HIDE_ADD_RECORD = "HIDE_ADD_RECORD";
	var CHANGE_ADD_FORM_DATA = "CHANGE_ADD_FORM_DATA";

	function address() {
		var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
		var action = arguments[1];

		switch (action.type) {
			case CHANGE_PROVINCE:
				return change_province(state, action.data);
			case CHANGE_UNIT:
				return change_unit(state, action.data);
			case CHANGE_DEPART:
				return change_depart(state, action.data);
			case UPDATE_DATA:
				return update_data(state, action.data);
			case ADD_RECORD:
				return add_record(state, action.data);
			case SHOW_ADD_RECORD:
				return show_add_record(state);
			case HIDE_ADD_RECORD:
				return hide_add_record(state);
			case SHOW_EDIT_RECORD:
				return show_edit_record(state, action.data);
			case HIDE_EDIT_RECORD:
				return hide_edit_record(state);
			case SHOW_DELETE_RECORD:
				return show_delete_record(state, action.data);
			case HIDE_DELETE_RECORD:
				return hide_delete_record(state);
			case CHANGE_EDIT_FORM_DATA:
				return change_edit_form_data(state, action.data);
			case CHANGE_ADD_FORM_DATA:
				return change_add_form_data(state, action.data);
			default:
				return state;
		}
	}

/***/ }

})