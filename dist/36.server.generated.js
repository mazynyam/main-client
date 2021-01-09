exports.ids = [36];
exports.modules = {

/***/ "./client/admin/views/charts/Charts.js":
/*!*********************************************!*\
  !*** ./client/admin/views/charts/Charts.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/react */ \"@coreui/react\");\n/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_coreui_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _coreui_react_chartjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coreui/react-chartjs */ \"@coreui/react-chartjs\");\n/* harmony import */ var _coreui_react_chartjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_coreui_react_chartjs__WEBPACK_IMPORTED_MODULE_2__);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n // import { DocsLink } from './../../../routes'\n\nconst Charts = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__[\"CCardGroup\"], {\n    columns: true,\n    className: \"cols-2\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__[\"CCard\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__[\"CCardHeader\"], null, \"Bar Chart\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DocsLink, {\n    href: \"http://www.chartjs.org\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__[\"CCardBody\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react_chartjs__WEBPACK_IMPORTED_MODULE_2__[\"CChartBar\"], {\n    datasets: [{\n      label: 'GitHub Commits',\n      backgroundColor: '#f87979',\n      data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]\n    }],\n    labels: \"months\",\n    options: {\n      tooltips: {\n        enabled: true\n      }\n    }\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__[\"CCard\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__[\"CCardHeader\"], null, \"Doughnut Chart\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__[\"CCardBody\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react_chartjs__WEBPACK_IMPORTED_MODULE_2__[\"CChartDoughnut\"], {\n    datasets: [{\n      backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],\n      data: [40, 20, 80, 10]\n    }],\n    labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],\n    options: {\n      tooltips: {\n        enabled: true\n      }\n    }\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__[\"CCard\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__[\"CCardHeader\"], null, \"Line Chart\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__[\"CCardBody\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react_chartjs__WEBPACK_IMPORTED_MODULE_2__[\"CChartLine\"], {\n    datasets: [{\n      label: 'Data One',\n      backgroundColor: 'rgb(228,102,81,0.9)',\n      data: [30, 39, 10, 50, 30, 70, 35]\n    }, {\n      label: 'Data Two',\n      backgroundColor: 'rgb(0,216,255,0.9)',\n      data: [39, 80, 40, 35, 40, 20, 45]\n    }],\n    options: {\n      tooltips: {\n        enabled: true\n      }\n    },\n    labels: \"months\"\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__[\"CCard\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__[\"CCardHeader\"], null, \"Pie Chart\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__[\"CCardBody\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react_chartjs__WEBPACK_IMPORTED_MODULE_2__[\"CChartPie\"], {\n    datasets: [{\n      backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],\n      data: [40, 20, 80, 10]\n    }],\n    labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],\n    options: {\n      tooltips: {\n        enabled: true\n      }\n    }\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__[\"CCard\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__[\"CCardHeader\"], null, \"Polar Area Chart\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__[\"CCardBody\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react_chartjs__WEBPACK_IMPORTED_MODULE_2__[\"CChartPolarArea\"], {\n    datasets: [{\n      label: 'My First dataset',\n      backgroundColor: 'rgba(179,181,198,0.2)',\n      pointBackgroundColor: 'rgba(179,181,198,1)',\n      pointBorderColor: '#fff',\n      pointHoverBackgroundColor: 'rgba(179,181,198,1)',\n      pointHoverBorderColor: 'rgba(179,181,198,1)',\n      data: [65, 59, 90, 81, 56, 55, 40]\n    }, {\n      label: 'My Second dataset',\n      backgroundColor: 'rgba(255,99,132,0.2)',\n      pointBackgroundColor: 'rgba(255,99,132,1)',\n      pointBorderColor: '#fff',\n      pointHoverBackgroundColor: 'rgba(255,99,132,1)',\n      pointHoverBorderColor: 'rgba(255,99,132,1)',\n      data: [28, 48, 40, 19, 96, 27, 100]\n    }],\n    options: {\n      aspectRatio: 1.5,\n      tooltips: {\n        enabled: true\n      }\n    },\n    labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running']\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__[\"CCard\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__[\"CCardHeader\"], null, \"Radar Chart\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__[\"CCardBody\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react_chartjs__WEBPACK_IMPORTED_MODULE_2__[\"CChartRadar\"], {\n    datasets: [{\n      label: '2019',\n      backgroundColor: 'rgba(179,181,198,0.2)',\n      borderColor: 'rgba(179,181,198,1)',\n      pointBackgroundColor: 'rgba(179,181,198,1)',\n      pointBorderColor: '#fff',\n      pointHoverBackgroundColor: '#fff',\n      pointHoverBorderColor: 'rgba(179,181,198,1)',\n      tooltipLabelColor: 'rgba(179,181,198,1)',\n      data: [65, 59, 90, 81, 56, 55, 40]\n    }, {\n      label: '2020',\n      backgroundColor: 'rgba(255,99,132,0.2)',\n      borderColor: 'rgba(255,99,132,1)',\n      pointBackgroundColor: 'rgba(255,99,132,1)',\n      pointBorderColor: '#fff',\n      pointHoverBackgroundColor: '#fff',\n      pointHoverBorderColor: 'rgba(255,99,132,1)',\n      tooltipLabelColor: 'rgba(255,99,132,1)',\n      data: [28, 48, 40, 19, 96, 27, 100]\n    }],\n    options: {\n      aspectRatio: 1.5,\n      tooltips: {\n        enabled: true\n      }\n    },\n    labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running']\n  }))));\n};\n\nconst _default = Charts;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(Charts, \"Charts\", \"C:\\\\Users\\\\PHINEHAS\\\\Desktop\\\\Kiriikou-Main\\\\client\\\\admin\\\\views\\\\charts\\\\Charts.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\PHINEHAS\\\\Desktop\\\\Kiriikou-Main\\\\client\\\\admin\\\\views\\\\charts\\\\Charts.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./client/admin/views/charts/Charts.js?");

/***/ })

};;