exports.ids = [15];
exports.modules = {

/***/ "./client/admin/reusable/DocsLink.js":
/*!*******************************************!*\
  !*** ./client/admin/reusable/DocsLink.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/react */ \"@coreui/react\");\n/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_coreui_react__WEBPACK_IMPORTED_MODULE_1__);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\nconst DocsLink = props => {\n  const {\n    name,\n    text,\n    ...rest\n  } = props;\n  const href = name ? `https://kiriikou.com/${name}` : props.href;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"card-header-actions\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__[\"CLink\"], _extends({}, rest, {\n    href: href,\n    rel: \"noreferrer noopener\",\n    target: \"_blank\",\n    className: \"card-header-action\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"small\", {\n    className: \"text-muted\"\n  }, text || 'docs')));\n};\n\nconst _default = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(DocsLink);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(DocsLink, \"DocsLink\", \"C:\\\\Users\\\\PHINEHAS\\\\Desktop\\\\Kiriikou-Main\\\\client\\\\admin\\\\reusable\\\\DocsLink.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\PHINEHAS\\\\Desktop\\\\Kiriikou-Main\\\\client\\\\admin\\\\reusable\\\\DocsLink.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./client/admin/reusable/DocsLink.js?");

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

/***/ "./client/admin/views/base/popovers/Popovers.js":
/*!******************************************************!*\
  !*** ./client/admin/views/base/popovers/Popovers.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/react */ \"@coreui/react\");\n/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_coreui_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _reusable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../reusable */ \"./client/admin/reusable/index.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\nconst Popovers = () => {\n  const placements = ['top-start', 'top', 'top-end', 'bottom-start', 'bottom', 'bottom-end', 'right-start', 'right', 'right-end', 'left-start', 'left', 'left-end'];\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__[\"CCard\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__[\"CCardHeader\"], null, \"Popovers\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reusable__WEBPACK_IMPORTED_MODULE_2__[\"DocsLink\"], {\n    name: \"CPopover\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__[\"CCardBody\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    className: \"text-muted\"\n  }, \"Hover over the links below to see popover:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    className: \"muted\"\n  }, \"Tight pants next level keffiyeh\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__[\"CPopover\"], {\n    header: \"Popover header\",\n    content: \"Popover text\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__[\"CLink\"], null, \" you probably \")), \"haven't heard of them. Photo booth beard raw denim letterpress vegan messenger bag stumptown. Farm-to-table seitan, mcsweeney's fixie sustainable quinoa 8-bit american apparel\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__[\"CPopover\"], {\n    header: \"Popover header\",\n    content: \"Popover text\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__[\"CLink\"], null, \" have a \")), \"terry richardson vinyl chambray. Beard stumptown, cardigans banh mi lomo thundercats. Tofu biodiesel williamsburg marfa, four loko mcsweeney''s cleanse vegan chambray. A really ironic artisan\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__[\"CPopover\"], {\n    header: \"Popover header\",\n    content: \"Popover text\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__[\"CLink\"], null, \" whatever keytar \")), \"scenester farm-to-table banksy Austin\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__[\"CPopover\"], {\n    header: \"Popover header\",\n    content: \"Popover text\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__[\"CLink\"], null, \" twitter handle \")), \"freegan cred raw denim single-origin coffee viral.\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"hr\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__[\"CCard\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__[\"CCardHeader\"], null, \"Popovers\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"small\", null, \" placement\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__[\"CCardBody\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"my-3\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__[\"CRow\"], null, placements.map(placement => {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__[\"CCol\"], {\n      md: \"4\",\n      className: \"py-4 text-center\",\n      key: placement\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__[\"CPopover\"], {\n      header: \"Popover header\",\n      content: `Popover with placement: ${placement}`,\n      placement: placement,\n      interactive: true,\n      trigger: \"click\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__[\"CButton\"], {\n      color: \"primary\"\n    }, placement)));\n  }))))));\n};\n\nconst _default = Popovers;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(Popovers, \"Popovers\", \"C:\\\\Users\\\\PHINEHAS\\\\Desktop\\\\Kiriikou-Main\\\\client\\\\admin\\\\views\\\\base\\\\popovers\\\\Popovers.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\PHINEHAS\\\\Desktop\\\\Kiriikou-Main\\\\client\\\\admin\\\\views\\\\base\\\\popovers\\\\Popovers.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./client/admin/views/base/popovers/Popovers.js?");

/***/ })

};;