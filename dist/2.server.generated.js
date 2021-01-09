exports.ids = [2];
exports.modules = {

/***/ "./client/admin/reusable/DocsLink.js":
/*!*******************************************!*\
  !*** ./client/admin/reusable/DocsLink.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/react */ \"@coreui/react\");\n/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_coreui_react__WEBPACK_IMPORTED_MODULE_1__);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\nconst DocsLink = props => {\n  const {\n    name,\n    text,\n    ...rest\n  } = props;\n  const href = name ? `https://coreui.io/react/docs/components/${name}` : props.href;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"card-header-actions\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__[\"CLink\"], _extends({}, rest, {\n    href: href,\n    rel: \"noreferrer noopener\",\n    target: \"_blank\",\n    className: \"card-header-action\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"small\", {\n    className: \"text-muted\"\n  }, text || 'docs')));\n};\n\nconst _default = react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(DocsLink);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(DocsLink, \"DocsLink\", \"C:\\\\Users\\\\PHINEHAS\\\\Desktop\\\\Kiriikou-Main\\\\client\\\\admin\\\\reusable\\\\DocsLink.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\PHINEHAS\\\\Desktop\\\\Kiriikou-Main\\\\client\\\\admin\\\\reusable\\\\DocsLink.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./client/admin/reusable/DocsLink.js?");

/***/ }),

/***/ "./client/admin/reusable/index.js":
/*!****************************************!*\
  !*** ./client/admin/reusable/index.js ***!
  \****************************************/
/*! exports provided: DocsLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _DocsLink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DocsLink */ \"./client/admin/reusable/DocsLink.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"DocsLink\", function() { return _DocsLink__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n//# sourceURL=webpack:///./client/admin/reusable/index.js?");

/***/ }),

/***/ "./client/admin/views/base/tables/Tables.js":
/*!**************************************************!*\
  !*** ./client/admin/views/base/tables/Tables.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/react */ \"@coreui/react\");\n/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_coreui_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _reusable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../reusable */ \"./client/admin/reusable/index.js\");\n/* harmony import */ var _users_UsersData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../users/UsersData */ \"./client/admin/views/users/UsersData.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\nconst getBadge = status => {\n  switch (status) {\n    case 'Active':\n      return 'success';\n\n    case 'Inactive':\n      return 'secondary';\n\n    case 'Pending':\n      return 'warning';\n\n    case 'Banned':\n      return 'danger';\n\n    default:\n      return 'primary';\n  }\n};\n\nconst fields = ['name', 'registered', 'role', 'status'];\n\nconst Tables = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__[\"CRow\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__[\"CCol\"], {\n    xs: \"12\",\n    lg: \"6\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__[\"CCard\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__[\"CCardHeader\"], null, \"Simple Table\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reusable__WEBPACK_IMPORTED_MODULE_2__[\"DocsLink\"], {\n    name: \"CModal\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__[\"CCardBody\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__[\"CDataTable\"], {\n    items: _users_UsersData__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    fields: fields,\n    itemsPerPage: 5,\n    pagination: true,\n    scopedSlots: {\n      'status': item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__[\"CBadge\"], {\n        color: getBadge(item.status)\n      }, item.status))\n    }\n  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__[\"CCol\"], {\n    xs: \"12\",\n    lg: \"6\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__[\"CCard\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__[\"CCardHeader\"], null, \"Striped Table\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__[\"CCardBody\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__[\"CDataTable\"], {\n    items: _users_UsersData__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    fields: fields,\n    striped: true,\n    itemsPerPage: 5,\n    pagination: true,\n    scopedSlots: {\n      'status': item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__[\"CBadge\"], {\n        color: getBadge(item.status)\n      }, item.status))\n    }\n  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__[\"CRow\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__[\"CCol\"], {\n    xs: \"12\",\n    lg: \"6\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__[\"CCard\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__[\"CCardHeader\"], null, \"Condensed Table\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__[\"CCardBody\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__[\"CDataTable\"], {\n    items: _users_UsersData__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    fields: fields,\n    size: \"sm\",\n    itemsPerPage: 5,\n    pagination: true,\n    scopedSlots: {\n      'status': item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__[\"CBadge\"], {\n        color: getBadge(item.status)\n      }, item.status))\n    }\n  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__[\"CCol\"], {\n    xs: \"12\",\n    lg: \"6\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__[\"CCard\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__[\"CCardHeader\"], null, \"Bordered Table\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__[\"CCardBody\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__[\"CDataTable\"], {\n    items: _users_UsersData__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    fields: fields,\n    bordered: true,\n    itemsPerPage: 5,\n    pagination: true,\n    scopedSlots: {\n      'status': item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__[\"CBadge\"], {\n        color: getBadge(item.status)\n      }, item.status))\n    }\n  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__[\"CRow\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__[\"CCol\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__[\"CCard\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__[\"CCardHeader\"], null, \"Combined All Table\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__[\"CCardBody\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__[\"CDataTable\"], {\n    items: _users_UsersData__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    fields: fields,\n    hover: true,\n    striped: true,\n    bordered: true,\n    size: \"sm\",\n    itemsPerPage: 10,\n    pagination: true,\n    scopedSlots: {\n      'status': item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__[\"CBadge\"], {\n        color: getBadge(item.status)\n      }, item.status))\n    }\n  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__[\"CRow\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__[\"CCol\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__[\"CCard\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__[\"CCardHeader\"], null, \"Combined All dark Table\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__[\"CCardBody\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__[\"CDataTable\"], {\n    items: _users_UsersData__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    fields: fields,\n    dark: true,\n    hover: true,\n    striped: true,\n    bordered: true,\n    size: \"sm\",\n    itemsPerPage: 10,\n    pagination: true,\n    scopedSlots: {\n      'status': item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__[\"CBadge\"], {\n        color: getBadge(item.status)\n      }, item.status))\n    }\n  }))))));\n};\n\nconst _default = Tables;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(getBadge, \"getBadge\", \"C:\\\\Users\\\\PHINEHAS\\\\Desktop\\\\Kiriikou-Main\\\\client\\\\admin\\\\views\\\\base\\\\tables\\\\Tables.js\");\n  reactHotLoader.register(fields, \"fields\", \"C:\\\\Users\\\\PHINEHAS\\\\Desktop\\\\Kiriikou-Main\\\\client\\\\admin\\\\views\\\\base\\\\tables\\\\Tables.js\");\n  reactHotLoader.register(Tables, \"Tables\", \"C:\\\\Users\\\\PHINEHAS\\\\Desktop\\\\Kiriikou-Main\\\\client\\\\admin\\\\views\\\\base\\\\tables\\\\Tables.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\PHINEHAS\\\\Desktop\\\\Kiriikou-Main\\\\client\\\\admin\\\\views\\\\base\\\\tables\\\\Tables.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./client/admin/views/base/tables/Tables.js?");

/***/ }),

/***/ "./client/admin/views/users/UsersData.js":
/*!***********************************************!*\
  !*** ./client/admin/views/users/UsersData.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst usersData = [{\n  id: 0,\n  name: 'John Doe',\n  registered: '2018/01/01',\n  role: 'Guest',\n  status: 'Pending'\n}, {\n  id: 1,\n  name: 'Samppa Nori',\n  registered: '2018/01/01',\n  role: 'Member',\n  status: 'Active'\n}, {\n  id: 2,\n  name: 'Estavan Lykos',\n  registered: '2018/02/01',\n  role: 'Staff',\n  status: 'Banned'\n}, {\n  id: 3,\n  name: 'Chetan Mohamed',\n  registered: '2018/02/01',\n  role: 'Admin',\n  status: 'Inactive'\n}, {\n  id: 4,\n  name: 'Derick Maximinus',\n  registered: '2018/03/01',\n  role: 'Member',\n  status: 'Pending'\n}, {\n  id: 5,\n  name: 'Friderik Dávid',\n  registered: '2018/01/21',\n  role: 'Staff',\n  status: 'Active'\n}, {\n  id: 6,\n  name: 'Yiorgos Avraamu',\n  registered: '2018/01/01',\n  role: 'Member',\n  status: 'Active'\n}, {\n  id: 7,\n  name: 'Avram Tarasios',\n  registered: '2018/02/01',\n  role: 'Staff',\n  status: 'Banned'\n}, {\n  id: 8,\n  name: 'Quintin Ed',\n  registered: '2018/02/01',\n  role: 'Admin',\n  status: 'Inactive'\n}, {\n  id: 9,\n  name: 'Enéas Kwadwo',\n  registered: '2018/03/01',\n  role: 'Member',\n  status: 'Pending'\n}, {\n  id: 10,\n  name: 'Agapetus Tadeáš',\n  registered: '2018/01/21',\n  role: 'Staff',\n  status: 'Active'\n}, {\n  id: 11,\n  name: 'Carwyn Fachtna',\n  registered: '2018/01/01',\n  role: 'Member',\n  status: 'Active'\n}, {\n  id: 12,\n  name: 'Nehemiah Tatius',\n  registered: '2018/02/01',\n  role: 'Staff',\n  status: 'Banned'\n}, {\n  id: 13,\n  name: 'Ebbe Gemariah',\n  registered: '2018/02/01',\n  role: 'Admin',\n  status: 'Inactive'\n}, {\n  id: 14,\n  name: 'Eustorgios Amulius',\n  registered: '2018/03/01',\n  role: 'Member',\n  status: 'Pending'\n}, {\n  id: 15,\n  name: 'Leopold Gáspár',\n  registered: '2018/01/21',\n  role: 'Staff',\n  status: 'Active'\n}, {\n  id: 16,\n  name: 'Pompeius René',\n  registered: '2018/01/01',\n  role: 'Member',\n  status: 'Active'\n}, {\n  id: 17,\n  name: 'Paĉjo Jadon',\n  registered: '2018/02/01',\n  role: 'Staff',\n  status: 'Banned'\n}, {\n  id: 18,\n  name: 'Micheal Mercurius',\n  registered: '2018/02/01',\n  role: 'Admin',\n  status: 'Inactive'\n}, {\n  id: 19,\n  name: 'Ganesha Dubhghall',\n  registered: '2018/03/01',\n  role: 'Member',\n  status: 'Pending'\n}, {\n  id: 20,\n  name: 'Hiroto Šimun',\n  registered: '2018/01/21',\n  role: 'Staff',\n  status: 'Active'\n}, {\n  id: 21,\n  name: 'Vishnu Serghei',\n  registered: '2018/01/01',\n  role: 'Member',\n  status: 'Active'\n}, {\n  id: 22,\n  name: 'Zbyněk Phoibos',\n  registered: '2018/02/01',\n  role: 'Staff',\n  status: 'Banned'\n}, {\n  id: 23,\n  name: 'Aulus Agmundr',\n  registered: '2018/01/01',\n  role: 'Member',\n  status: 'Pending'\n}, {\n  id: 42,\n  name: 'Ford Prefect',\n  registered: '2001/05/25',\n  role: 'Alien',\n  status: 'Don\\'t panic!'\n}];\nconst _default = usersData;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(usersData, \"usersData\", \"C:\\\\Users\\\\PHINEHAS\\\\Desktop\\\\Kiriikou-Main\\\\client\\\\admin\\\\views\\\\users\\\\UsersData.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\PHINEHAS\\\\Desktop\\\\Kiriikou-Main\\\\client\\\\admin\\\\views\\\\users\\\\UsersData.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./client/admin/views/users/UsersData.js?");

/***/ })

};;