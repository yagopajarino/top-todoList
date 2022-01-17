/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html {\\n    font-size: 20px;\\n}\\n\\nbody {\\n    margin: 0;\\n    font-family: 'Open Sans', sans-serif;\\n    min-height: 100vh;\\n}\\n\\nheader {\\n    background-color: #778F89;\\n}\\n\\nmain {\\n    min-height: calc(100vh - 5.4rem);\\n    width: 100%;\\n    display: flex;\\n    justify-content: flex-start;\\n    align-items: stretch;\\n}\\n\\n.barraLateral {\\n    width: 20vw;\\n    padding: 0 1.5rem;\\n    background-color: #BCD8C9;\\n}\\n\\n.dash {\\n    padding: 0 1.5rem;\\n    width: 80vw;\\n    background-color: #b0bacf;\\n}\\n\\nheader {\\n    padding: 1rem;\\n    font-size: 2.5rem;\\n\\n}\\n\\n.quickTasks {\\n    display: flex;\\n    flex-direction: column;\\n}\\n\\n.qa {\\n    padding: 0.5rem 1rem;\\n    margin: 0.25rem 0;\\n    background-color: #778f89;\\n    border-radius: 5px;\\n    font-weight: 600;\\n}\\n\\n.newProBtn {\\n    background-color: #b0bbcf;\\n    padding: 0.5rem 1rem ;\\n\\n}\\n\\n.newProBtn:hover {\\n    background-color: rgb(123, 130, 138);\\n\\n}\\n\\n.projHeaders {\\n    display: flex;\\n    align-items: center;\\n    justify-content: space-between;\\n}\\n\\n.newTask {\\n    position: absolute;\\n    right: 40px;\\n    bottom: 40px;\\n    width: 100px;\\n    aspect-ratio: 1/1;\\n    background-color: rgb(119 143 137);\\n    border-radius: 50%;\\n    opacity: 0.6;\\n    transition: 0.2s;\\n}\\n\\n.newTask:hover {\\n    opacity: 1;\\n    transform: rotate(180deg);\\n    transition: 0.25s;\\n\\n  }\\n.newTask:before, .newTask:after {\\n    position: absolute;\\n    left: 45%;\\n    top: 20%;\\n    content: ' ';\\n    height: 60px;\\n    width: 10px;\\n    background-color: rgb(0, 0, 0);\\n}\\n.newTask:before {\\n    transform: rotate(90deg);\\n}\\n\\n.newItemDiv {\\n    position: absolute;\\n    top: 0;\\n    left: 0;\\n    height: 100vh;\\n    width: 100%;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    justify-content: center;\\n    background-color: #0000008a;\\n}\\n\\n.newItemForm {\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: space-around;\\n    align-items: stretch;\\n    align-content: center;\\n}\\n\\n.newItemForm > * {\\n    margin: 0.5rem 0;\\n}\\n\\n.formContainer {\\n    padding: 0 2rem 1rem 2rem;\\n    background-color: hsl(0deg 0% 16%);\\n    border-radius: 5px;\\n    color: #eeeeee;\\n}\\n\\nselect {\\n    /* Reset Select */\\n    appearance: none;\\n    outline: 0;\\n    border: 0;\\n    box-shadow: none;\\n    /* Personalize */\\n    flex: 1;\\n    padding: 0 1em;\\n    color: #fff;\\n    background-color: #545454;\\n    background-image: none;\\n    cursor: pointer;\\n    padding: 10px;\\n  }\\n  /* Remove IE arrow */\\n  select::-ms-expand {\\n    display: none;\\n  }\\n\\n  .colorBox {\\n      width: 12%;\\n      aspect-ratio: 1/1;\\n      border-radius: 50%;\\n      margin: 0.2rem 1rem;\\n  }\\n\\ninput[type=text], select {\\n    width: 100%;\\n    padding: 12px 20px;\\n    margin: 8px 0;\\n    display: inline-block;\\n    border: 1px solid #ccc;\\n    border-radius: 4px;\\n    box-sizing: border-box;\\n    font-size: 1rem;\\n}\\n\\ninput[type=\\\"color\\\"] {\\n\\tdisplay: block;\\n\\twidth: 32px;\\n\\theight: 32px;\\n\\tborder: none;\\n    margin-right: 0;\\n    margin-left: 0;\\n    border-radius: 5px;\\n}\\n\\ninput:focus-visible {\\n    outline-color: transparent;\\n}\\n\\n.newItemButton {\\n    font-size: 1rem;\\n    padding: 0.5rem;\\n    margin: 0;\\n}\\n\\n.colorDiv {\\n    display: flex;\\n    align-items: center;\\n}\\n\\n.colorDiv > label {\\n    margin-right: 1rem;\\n}\\n\\n.projectList {\\n    display: flex;\\n    flex-direction: column;\\n}\\n\\n.projItem {\\n    display: flex;\\n    justify-content: flex-start;\\n    align-items: center;\\n    font-size: 1.1rem;\\n    border-bottom: 1px solid #778f89;\\n}\\n\\n.projItem:hover {\\n    background-color: #90aaa3;\\n}\\n\\n.tasksList {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n}\\n\\n.taskItem {\\n    display: flex;\\n    justify-content: space-between;\\n    width: 100%;\\n    padding: 10px 0;\\n    border-bottom: 1px solid #7189b5\\n}\\n\\n.taskItem:hover {\\n    background-color: #94a2bb\\n}\\n\\n.taskItem>div>span {\\n    padding: 0.5rem;\\n}\\n\\n.taskTitle {\\n    font-weight: 600;\\n}\\n\\n.taskDescription {\\n    font-weight: 300;\\n}\\n\\n.boxSelected {\\n    background-color: #94a2bb;\\n    opacity: 0.6;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://top-todolist/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://top-todolist/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://top-todolist/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://top-todolist/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://top-todolist/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://top-todolist/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://top-todolist/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://top-todolist/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://top-todolist/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://top-todolist/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/dashboard.js":
/*!**************************!*\
  !*** ./src/dashboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ dashboard)\n/* harmony export */ });\nfunction dashboard(){\n    let main = document.createElement(\"main\")\n    main.classList.toggle(\"dashboardContainer\")\n    \n    let barraLateral = document.createElement(\"div\")\n    barraLateral.classList.toggle(\"barraLateral\")\n    let quickAccess = document.createElement(\"div\")\n    quickAccess.classList=\"quickTasks\"\n    let h2q = document.createElement(\"h2\")\n    h2q.textContent = \"Quick Access\"\n    let all = document.createElement(\"span\")\n    all.textContent = \"All\"\n    all.id = \"allNotes\"\n    all.classList.toggle(\"qa\")\n    let today = document.createElement(\"span\")\n    today.classList.toggle(\"qa\")\n    today.textContent = \"Today\"\n    today.id = \"todayNotes\"\n\n    quickAccess.appendChild(h2q)\n    quickAccess.appendChild(all)\n    quickAccess.appendChild(today)\n    barraLateral.appendChild(quickAccess)\n\n    let projectsDiv = document.createElement(\"div\")\n    projectsDiv.classList.toggle(\"projectsDiv\")\n    let projectsHeaderDiv = document.createElement(\"div\")\n    projectsHeaderDiv.classList.toggle(\"projHeaders\")\n\n    let h2p = document.createElement(\"h2\")\n    let addProject = document.createElement(\"span\")\n    addProject.textContent = \"New\"\n    addProject.classList.toggle(\"newProBtn\")\n    addProject.classList.toggle(\"qa\")\n    h2p.textContent = \"Projects\"\n    projectsHeaderDiv.appendChild(h2p)\n    projectsHeaderDiv.appendChild(addProject)\n\n    let projects = document.createElement(\"div\")\n    projects.classList.toggle(\"projectsList\")\n\n    projectsDiv.appendChild(projectsHeaderDiv)\n    projectsDiv.appendChild(projects)\n    barraLateral.appendChild(projectsDiv)\n\n    let dash = document.createElement(\"div\")\n    dash.classList.toggle(\"dash\")\n    let dashTitle = document.createElement(\"h2\")\n    let phrases = [\"Here are your notes \", \"Do today, not tomorrow \", \"Hi there \", \"The secret of getting ahead is getting started \"]\n    let p = phrases[Math.floor(Math.random() * phrases.length)]\n    dashTitle.textContent = p + String.fromCodePoint(0x1f603);\n    let taskDiv = document.createElement(\"div\")\n    taskDiv.classList.toggle(\"tasksList\")\n    dash.appendChild(dashTitle)\n    dash.appendChild(taskDiv)\n\n    let newTaskButton = document.createElement(\"div\")\n    newTaskButton.classList.toggle(\"newTask\")\n\n    main.appendChild(barraLateral)\n    main.appendChild(dash)\n    main.appendChild(newTaskButton)\n    return main\n}\n\n//# sourceURL=webpack://top-todolist/./src/dashboard.js?");

/***/ }),

/***/ "./src/domanipulation.js":
/*!*******************************!*\
  !*** ./src/domanipulation.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Dm)\n/* harmony export */ });\nclass Dm {\n    static displayProjectForm(){\n        let div = document.createElement(\"div\")\n        div.classList.toggle(\"newItemDiv\")\n\n        let formContainer = document.createElement(\"div\")\n        formContainer.classList.toggle(\"formContainer\")\n\n        let title = document.createElement(\"h2\")\n        title.textContent = \"Add project\"\n        title.classList.toggle(\"formTitle\")\n        let form = document.createElement(\"form\")\n        form.classList.toggle(\"newItemForm\")\n        \n        let name = document.createElement(\"input\")\n        name.type = \"text\"\n        name.placeholder = \"Name\"\n        name.id = \"projectName\"\n\n        let colorDiv = document.createElement(\"div\")\n        colorDiv.classList.toggle(\"colorDiv\")\n        let colorLabel = document.createElement(\"label\")\n        colorLabel.textContent = \"Color\"\n        let colorSelector = document.createElement(\"input\")\n        colorSelector.id = \"projectColor\"\n        colorSelector.type = \"color\"\n        colorSelector.value = \"#ff0000\"\n        colorDiv.appendChild(colorLabel)\n        colorDiv.appendChild(colorSelector)\n\n        let button = document.createElement(\"button\")\n        button.type = \"button\"\n        button.classList.toggle(\"newItemButton\")\n        button.id = \"newProjectButton\"\n        button.textContent = \"Save\"\n\n        form.appendChild(name)\n        form.appendChild(colorDiv)\n        form.appendChild(button)\n\n        formContainer.appendChild(title)\n        formContainer.appendChild(form)\n        div.appendChild(formContainer)\n        return div\n    }\n\n    static displayNewTask(proyectos){\n        let div = document.createElement(\"div\")\n        div.classList.toggle(\"newItemDiv\")\n\n        let formContainer = document.createElement(\"div\")\n        formContainer.classList.toggle(\"formContainer\")\n\n        let title = document.createElement(\"h2\")\n        title.textContent = \"Add Task\"\n        title.classList.toggle(\"formTitle\")\n        let form = document.createElement(\"form\")\n        form.classList.toggle(\"newItemForm\")\n\n        let name = document.createElement(\"input\")\n        name.type = \"text\"\n        name.placeholder = \"Title\"\n        name.id = \"taskTitle\"\n\n        let description = document.createElement(\"input\")\n        description.type = \"text\"\n        description.placeholder = \"Description\"\n        description.id = \"taskDesc\"\n\n        let date = document.createElement(\"input\")\n        date.type = \"date\"\n        date.id = \"taskDate\"\n        let today = new Date();\n        let k = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()\n        date.value = k\n\n        let proj = document.createElement(\"select\")\n        proj.id = \"taskProj\"\n        let op = document.createElement(\"option\")\n        op.textContent = \"Project\"\n        op.selected = true\n        op.disabled = true\n        proj.appendChild(op)\n\n        proyectos.forEach(element => {\n            let opcion = document.createElement(\"option\")\n            opcion.textContent = element\n            proj.appendChild(opcion)\n\n        });\n\n        let button = document.createElement(\"button\")\n        button.type = \"button\"\n        button.classList.toggle(\"newItemButton\")\n        button.id = \"newTaskButton\"\n        button.textContent = \"Save\"\n\n        form.appendChild(name)\n        form.appendChild(description)\n        form.appendChild(date)\n        form.appendChild(proj)\n        form.appendChild(button)\n\n        formContainer.appendChild(title)\n        formContainer.appendChild(form)\n        div.appendChild(formContainer)\n        return div\n    }\n\n    static displayProjects(projectsArray) {\n        let proyListDiv = document.querySelector(\".projectsList\")\n        while (proyListDiv.firstChild) {\n            proyListDiv.removeChild(proyListDiv.lastChild);\n        }\n        projectsArray.forEach(project => {\n            let div = document.createElement(\"div\")\n            div.classList.toggle(\"projItem\")\n            let colorBox = document.createElement(\"div\")\n            colorBox.classList.toggle(\"colorBox\")\n            let name = document.createElement(\"span\")\n            colorBox.style.backgroundColor = project.color\n            name.textContent = project.name\n\n            div.appendChild(colorBox)\n            div.appendChild(name)\n            proyListDiv.appendChild(div)\n        });\n    }\n\n    static displayTasks(tasksArray) {\n        let listDiv = document.querySelector(\".tasksList\")\n        while (listDiv.firstChild) {\n            listDiv.removeChild(listDiv.lastChild);\n        }\n        tasksArray.forEach(task => {\n            let div = document.createElement(\"div\")\n            div.classList.toggle(\"taskItem\")\n            let title = document.createElement(\"span\")\n            title.classList.toggle(\"taskTitle\")\n            let taskone = document.createElement(\"div\")\n            title.textContent = task.title\n            let description = document.createElement(\"span\")\n            description.classList.toggle(\"taskDescription\")\n            description.textContent = task.description\n\n            let checkbox = document.createElement(\"input\")\n            checkbox.type = \"checkbox\"\n            checkbox.classList.toggle(\"checkbox\")\n            taskone.appendChild(checkbox)\n            taskone.appendChild(title)\n            taskone.appendChild(description)\n\n            let tasktwo = document.createElement(\"div\")\n            let date = document.createElement(\"span\")\n            let project = document.createElement(\"span\")\n            date.classList.toggle(\"taskDate\")\n            project.classList.toggle(\"taskProj\")\n            date.textContent = task.date\n            project.textContent = task.project\n            tasktwo.appendChild(project)\n            tasktwo.appendChild(date)\n\n            div.appendChild(taskone)\n            div.appendChild(tasktwo)\n            listDiv.appendChild(div)\n        });\n    }\n}\n\n//# sourceURL=webpack://top-todolist/./src/domanipulation.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _dashboard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.js */ \"./src/dashboard.js\");\n/* harmony import */ var _task_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task.png */ \"./src/task.png\");\n/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task.js */ \"./src/task.js\");\n/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projects.js */ \"./src/projects.js\");\n/* harmony import */ var _domanipulation_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./domanipulation.js */ \"./src/domanipulation.js\");\n\n\n\n\n\n\n\nlet body = document.querySelector(\"body\")\nbody.appendChild((0,_dashboard_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])())\n\nlet tasks = []\nlet projects = []\n\n//body.appendChild(Dm.displayProjectForm())\n\ntasks.push(new _task_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](\"Supermercado\",\"Tengo que ir al super\", \"2022-01-17\",\"Casa\"))\ntasks.push(new _task_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](\"Estudiar\",\"Estudiar para el examen\", \"2022-01-18\",\"Facultad\"))\n\nprojects.push(new _projects_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](\"Casa\",\"#959743\"))\nprojects.push(new _projects_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](\"Trabajo\",\"#34267e\"))\nprojects.push(new _projects_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](\"Facultad\",\"#bf7e0d\"))\n_domanipulation_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].displayProjects(projects)\nprojectsEvent()\nnewTaskBtn()\n_domanipulation_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].displayTasks(tasks)\ncheckboxes()\n\n\n// body.appendChild(Dm.displayNewTask(p))\n\nfunction newTaskBtn(){\n    let newTaskButton = document.querySelector(\".newTask\")\n    newTaskButton.addEventListener(\"click\", function() {\n        let p = projects.map(p => {\n            return p.name\n            })\n        body.appendChild(_domanipulation_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].displayNewTask(p))\n        let saveTaskBtn = document.querySelector(\"#newTaskButton\")\n        console.log(\"here\")\n        saveTaskBtn.addEventListener(\"click\", function(){\n            console.log(\"inside saveclick\")\n            let title = document.querySelector(\"#taskTitle\")\n            let disc = document.querySelector(\"#taskDesc\")\n            let date = document.querySelector(\"#taskDate\")\n            let proj = document.querySelector(\"#taskProj\")\n            tasks\n            tasks.push(new _task_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](title.value, disc.value, date.value, proj.value))\n            tasks\n            let div = document.querySelector(\".newItemDiv\")\n                div.remove()\n            _domanipulation_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].displayTasks(tasks)\n            checkboxes()\n        })\n    })\n}\n\nlet newPorjectButton = document.querySelector(\".newProBtn\")\nnewPorjectButton.addEventListener(\"click\", function() {\n    body.appendChild(_domanipulation_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].displayProjectForm())\n    let newProjBtn = document.querySelector(\"#newProjectButton\")\n    newProjBtn.addEventListener(\"click\", function() {\n        let name = document.querySelector(\"#projectName\")\n        let color = document.querySelector(\"#projectColor\")\n        projects.push(new _projects_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](name.value, color.value))\n        _domanipulation_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].displayProjects(projects)\n        projectsEvent()\n        removeNewTaskBtn()\n        newTaskBtn()\n        let div = document.querySelector(\".newItemDiv\")\n        div.remove()\n  })\n})\n\nfunction removeNewTaskBtn(){\n    let btn = document.querySelector(\".newProBtn\")\n    let addProject = document.createElement(\"span\")\n    addProject.textContent = \"New\"\n    addProject.classList.toggle(\"newProBtn\")\n    addProject.classList.toggle(\"qa\")\n    let div = document.querySelector(\".projHeaders\")\n    btn.remove()\n    div.appendChild(addProject)\n}\n\ndocument.addEventListener('keydown', (event) => {\n    const keyName = event.key;\n    if (keyName == \"Escape\"){\n        let div = document.querySelector(\".newItemDiv\")\n        div.remove()\n    }\n});\n\nfunction checkboxes(){\n    let checkboxes = document.querySelectorAll(\".checkbox\")\n    checkboxes.forEach(box => {\n        box.addEventListener(\"click\", function() {\n            box.parentNode.parentNode.classList.toggle(\"boxSelected\")\n        })\n    });\n}\n\nfunction projectsEvent(){\n    let projItem = document.querySelectorAll(\".projItem\")\n    projItem.forEach(project => {\n    project.addEventListener(\"click\", function() {\n        let name = project.querySelector(\"span\").textContent\n        let arr = tasks.filter(t => t.project == name)\n        _domanipulation_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].displayTasks(arr)\n        checkboxes()\n        })\n    });\n}\n\nlet allNotes = document.querySelector(\"#allNotes\")\nallNotes.addEventListener(\"click\", function(){\n    _domanipulation_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].displayTasks(tasks)\n    checkboxes()\n})\n\nlet today = document.querySelector(\"#todayNotes\")\ntoday.addEventListener(\"click\", function(){\n    let today = new Date()\n    let f = today.getFullYear()+'-'+(today.getMonth()+1).toString().padStart(2, '0')+'-'+today.getDate()\n    let arr = tasks.filter(t => t.date==f)\n    _domanipulation_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].displayTasks(arr)\n    checkboxes()\n})\n\n\n//# sourceURL=webpack://top-todolist/./src/index.js?");

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\nclass Project {\n    constructor(name, color){\n        this.name = name\n        this.color = color\n    }\n}\n\n//# sourceURL=webpack://top-todolist/./src/projects.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\n    constructor(title, description, date, project, priority){\n        this.title = title\n        this.description = description\n        this.date = date\n        this.project = project\n        this.done = false\n    }\n    \n    changeDone(){\n        this.done = true\n    }\n\n}\n\n//# sourceURL=webpack://top-todolist/./src/task.js?");

/***/ }),

/***/ "./src/task.png":
/*!**********************!*\
  !*** ./src/task.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f5c1e745f1d1d58f2655.png\";\n\n//# sourceURL=webpack://top-todolist/./src/task.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;