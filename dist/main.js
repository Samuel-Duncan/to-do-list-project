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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n  --primary-color: #eff6ff;\\n  --secondary-color:#172554;\\n  --tertiary-color: #2563eb;\\n}\\n\\nbody {\\n  overflow-y: hidden;\\n}\\n\\n#header {\\n  background-color: var(--secondary-color) !important;\\n  color: var(--primary-color) !important;\\n}\\n\\n\\n\\n#projects-container {\\n  box-shadow: 8px 0 6px -6px rgba(0, 0, 0, 0.5);\\n  height: 100vh;\\n}\\n\\n.navbar-brand, .nav-link {\\n  color: var(--primary-color);\\n}\\n\\na:hover {\\n  color: var(--tertiary-color) !important;\\n}\\n\\na.active {\\n  color: var(--tertiary-color) !important;\\n}\\n\\n.navbar-toggler {\\n  color: white !important;\\n}\\n\\n\\n#new-project-button, .add-todo-button, #submit-project, #cancel-project, \\n.delete-project-button {\\n  color: var(--tertiary-color);\\n  border-color: var(--tertiary-color);\\n}\\n\\n#new-project-button:hover, .add-todo-button:hover, \\n#submit-project:hover, #cancel-project:hover, .delete-project-button:hover {\\n  color: var(--primary-color);\\n  background-color: var(--secondary-color);\\n}\\n\\n.todo-edit-button, .todo-delete-button, .todo-save-button, .todo-cancel-button {\\n  background-color: var(--primary-color);\\n  color: var(--tertiary-color);\\n  border-color: var(--tertiary-color);\\n}\\n\\n.todo-edit-button:hover, .todo-delete-button:hover,\\n.todo-save-button:hover, .todo-cancel-button:hover {\\n  background-color: var(--tertiary-color);\\n  color: var(--secondary-color);\\n}\\n\\nbutton.nav-link {\\n  color: var(--tertiary-color) !important;\\n}\\n\\nbutton.nav-link:hover {\\n  background-color: var(--secondary-color) !important;\\n  color: var(--primary-color) !important;\\n}\\n\\nbutton.active {\\n  background-color: var(--secondary-color) !important;\\n  color: var(--primary-color) !important;\\n}\\n\\n.todo-item {\\n  border-radius: 1em;\\n  padding: 15px;\\n  color: var(--primary-color);\\n}\\n\\n.tab-content .todo-item {\\n  background-color: var(--secondary-color);\\n}\\n\\n.hide-display {\\n  display: none;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list-project/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list-project/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list-project/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list-project/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list-project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list-project/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list-project/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list-project/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list-project/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list-project/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DOM)\n/* harmony export */ });\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.js */ \"./src/storage.js\");\n\n\n\nclass DOM {\n  static loadPage() {\n    this.handleListeners();\n  }\n\n  static resetForms(button, form) {\n    button.addEventListener('click', () => {\n      form.classList.toggle('hide-display');\n      form.reset();\n    });\n  }\n\n  static createProjectTabs(project, index) {\n    const PROJECT_DISPLAY_AREA = document.querySelector('.projects-container');\n    const projectTab = document.createElement('button');\n\n    projectTab.classList.add('nav-link', 'mb-2');\n    projectTab.id = `v-pills-${index}-tab`;\n    projectTab.setAttribute('data-bs-toggle', 'pill');\n    projectTab.setAttribute('data-bs-target', `#v-pills-${index}`);\n    projectTab.type = 'button';\n    projectTab.role = 'tab';\n    projectTab.setAttribute('aria-controls', `v-pills-${index}`);\n    projectTab.setAttribute('aria-selected', 'true');\n    projectTab.textContent = `${project.name}`;\n\n    PROJECT_DISPLAY_AREA.appendChild(projectTab);\n\n    this.createProjectContent(project, index);\n  }\n\n  static createProjectContent(project, index) {\n    const PROJECT_CONTENT = document.getElementById('v-pills-tabContent');\n    const projectContent = document.createElement('div');\n\n    projectContent.classList.add('tab-pane', 'fade');\n    projectContent.id = `v-pills-${index}`;\n    projectContent.setAttribute('role', 'tabpanel');\n    projectContent.setAttribute('aria-labelledby', `v-pills-${index}-tab`);\n\n    if (project.name === 'Default') {\n      projectContent.innerHTML = `<div class=\"d-flex justify-content-between\">\n          <button id=\"add-todo-button${index}\" class=\"btn btn-outline-primary add-todo-button\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-plus-lg\" viewBox=\"0 0 16 16\">\n              <path fill-rule=\"evenodd\" d=\"M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z\"></path>\n            </svg> Add To Do\n          </button>\n          </div>`;\n    } else {\n      projectContent.innerHTML = `<div class=\"d-flex justify-content-between\">\n          <button id=\"add-todo-button${index}\" class=\"btn btn-outline-primary add-todo-button\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-plus-lg\" viewBox=\"0 0 16 16\">\n              <path fill-rule=\"evenodd\" d=\"M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z\"></path>\n            </svg> Add To Do\n          </button>\n          <button id=\"delete-project-button${index}\" class=\"btn btn-outline-primary delete-project-button\">Delete Project</button>\n          </div>`;\n    }\n\n    PROJECT_CONTENT.appendChild(projectContent);\n\n    this.handleProjectDeleteButtons(project, index);\n  }\n\n  static handleProjectDeleteButtons(project, index) {\n    if (project.name !== 'Default') {\n      const PROJECT_DELETE_BUTTON = document.getElementById(`delete-project-button${index}`);\n      PROJECT_DELETE_BUTTON.addEventListener('click', () => {\n        const isLastProject = _projects__WEBPACK_IMPORTED_MODULE_0__[\"default\"].projects.length === 2;\n        _projects__WEBPACK_IMPORTED_MODULE_0__[\"default\"].deleteProject(project.name);\n        DOM.addProjectTabAndContent();\n\n        if (isLastProject) {\n          // Remove \"active\" class from all tabs and contents\n          const allTabs = document.querySelectorAll('.nav-link');\n          const allContents = document.querySelectorAll('.tab-pane');\n\n          allTabs.forEach((tab) => {\n            tab.classList.remove('active');\n          });\n\n          allContents.forEach((content) => {\n            content.classList.remove('active', 'show');\n          });\n\n          // Set active tab to default if it's the last project\n          const defaultTab = document.getElementById('v-pills-0-tab');\n          const defaultContent = document.getElementById('v-pills-0');\n\n          defaultTab.classList.add('active');\n          defaultContent.classList.add('active', 'show');\n        } else {\n          const updatedProjectTab = document.getElementById(`v-pills-${index}-tab`);\n          const updatedProjectContent = document.getElementById(`v-pills-${index}`);\n\n          updatedProjectTab.setAttribute('aria-selected', 'true');\n          updatedProjectTab.classList.add('active');\n          updatedProjectContent.classList.add('show', 'active');\n        }\n      });\n    }\n  }\n\n  static createToDos(project, index) {\n    const projectContent = document.getElementById(`v-pills-${index}`);\n    const TODO_FORM = document.getElementById('todo-form');\n    const TODO_ADD_BUTTON = document.getElementById(`add-todo-button${index}`);\n\n    TODO_ADD_BUTTON.addEventListener('click', () => {\n      TODO_FORM.reset();\n      TODO_FORM.classList.toggle('hide-display');\n    });\n\n    project.toDoList.forEach((todo, todoIndex) => {\n      const toDoItem = document.createElement('div');\n      toDoItem.classList.add('todo-item', 'mt-3', 'd-flex', 'flex-sm-column', 'flex-md-row', 'justify-content-between', 'align-items-center', 'flex-wrap');\n      toDoItem.innerHTML = `<div class=\"d-flex flex-row\">\n          <div class=\"title mx-2\">${todo.title}</div>\n          </div>\n          <div class=\"d-flex flex-row align-items-center\">\n          <div class=\"due-date mx-2\">${todo.dueDate ? `Due date: ${todo.dueDate}` : ''}</div>\n          <button id=\"todo-edit-button${index}-${todoIndex}\" class=\"btn btn-outline-primary todo-edit-button mx-2\">Edit</button>\n          <button id=\"todo-delete-button${index}-${todoIndex}\" class=\"btn btn-outline-primary todo-delete-button\">Delete</button>\n          </div>`;\n\n      projectContent.appendChild(toDoItem);\n\n      this.handleToDoButtons(index, todo, todoIndex, toDoItem);\n    });\n  }\n\n  static handleToDoButtons(index, todo, todoIndex, toDoItem) {\n    function handleToDoDeleteButton() {\n      const TODO_DELETE_BUTTON = document.getElementById(`todo-delete-button${index}-${todoIndex}`);\n      TODO_DELETE_BUTTON.addEventListener('click', () => {\n        const projectName = document.querySelector('.projects-container .nav-link.active').textContent;\n        const currentProject = _projects__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getProjectByName(projectName);\n\n        currentProject.deleteToDo(todo.title);\n        DOM.addProjectTabAndContent();\n\n        const currentProjectIndex = _projects__WEBPACK_IMPORTED_MODULE_0__[\"default\"].projects.indexOf(currentProject);\n        const currentProjectTab = document.getElementById(`v-pills-${currentProjectIndex}-tab`);\n        const currentProjectContent = document.getElementById(`v-pills-${currentProjectIndex}`);\n\n        currentProjectTab.setAttribute('aria-selected', 'true');\n        currentProjectTab.classList.add('active');\n        currentProjectContent.classList.add('show', 'active');\n      });\n    }\n\n    handleToDoDeleteButton();\n\n    function handleToDoEditButton() {\n      const TODO_EDIT_BUTTON = document.getElementById(`todo-edit-button${index}-${todoIndex}`);\n      TODO_EDIT_BUTTON.addEventListener('click', () => {\n        const currentProject = _projects__WEBPACK_IMPORTED_MODULE_0__[\"default\"].projects[index];\n        const currentTodo = currentProject.toDoList[todoIndex];\n\n        const titleContainer = toDoItem.querySelector('.title');\n        const todoTitleInput = document.createElement('input');\n        todoTitleInput.value = currentTodo.title;\n        todoTitleInput.classList.add('edit-input');\n\n        // Replace the title container with the input element\n        titleContainer.replaceWith(todoTitleInput);\n\n        const saveButton = document.createElement('button');\n        saveButton.id = `todo-save-button${index}-${todoIndex}`;\n        saveButton.classList.add('btn', 'btn-outline-primary', 'todo-save-button', 'mx-2');\n        saveButton.textContent = 'Save';\n\n        const buttonContainer = document.createElement('div');\n        buttonContainer.classList.add('d-flex', 'flex-row', 'align-items-center');\n        buttonContainer.append(saveButton);\n\n        const buttonsContainer = toDoItem.querySelector('.d-flex.flex-row.align-items-center');\n        buttonsContainer.replaceWith(buttonContainer);\n\n        saveButton.addEventListener('click', () => {\n          const newTitle = todoTitleInput.value;\n\n          currentTodo.title = newTitle;\n\n          DOM.addProjectTabAndContent();\n\n          const updatedProjectTab = document.getElementById(`v-pills-${index}-tab`);\n          const updatedProjectContent = document.getElementById(`v-pills-${index}`);\n\n          updatedProjectTab.setAttribute('aria-selected', 'true');\n          updatedProjectTab.classList.add('active');\n          updatedProjectContent.classList.add('show', 'active');\n        });\n      });\n    }\n\n    handleToDoEditButton();\n  }\n\n  static addProjectTabAndContent() {\n    const PROJECT_DISPLAY_AREA = document.querySelector('.projects-container');\n    PROJECT_DISPLAY_AREA.innerHTML = '';\n    const PROJECT_CONTENT = document.getElementById('v-pills-tabContent');\n    PROJECT_CONTENT.innerHTML = '';\n    _projects__WEBPACK_IMPORTED_MODULE_0__[\"default\"].projects.forEach((project, index) => {\n      this.createProjectTabs(project, index);\n      this.createToDos(project, index);\n    });\n  }\n\n  static handleListeners() {\n    const PROJECT_NEW_BUTTON = document.getElementById('new-project-button');\n    const PROJECT_FORM = document.getElementById('project-form');\n    const projectNameInput = document.getElementById('name');\n    const PROJECT_CANCEL_BUTTON = document.getElementById('cancel-project');\n    const TODO_FORM = document.getElementById('todo-form');\n    const TODO_CANCEL_BUTTON = document.getElementById('cancel-todo');\n\n    this.resetForms(PROJECT_NEW_BUTTON, PROJECT_FORM);\n    this.resetForms(PROJECT_CANCEL_BUTTON, PROJECT_FORM);\n    this.resetForms(TODO_CANCEL_BUTTON, TODO_FORM);\n\n    PROJECT_FORM.addEventListener('submit', (e) => {\n      e.preventDefault();\n      _projects__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addProject(projectNameInput);\n      DOM.addProjectTabAndContent();\n      PROJECT_FORM.reset();\n      PROJECT_FORM.classList.toggle('hide-display');\n\n      // Set most recently created tab as active\n      const lastProjectIndex = _projects__WEBPACK_IMPORTED_MODULE_0__[\"default\"].projects.length - 1;\n      const lastProjectTab = document.getElementById(`v-pills-${lastProjectIndex}-tab`);\n      const lastProjectContent = document.getElementById(`v-pills-${lastProjectIndex}`);\n\n      lastProjectTab.setAttribute('aria-selected', 'true');\n      lastProjectTab.classList.add('active');\n      lastProjectContent.classList.add('show', 'active');\n    });\n\n    const DEFAULT_TODO_ADD_BUTTON = document.getElementById('add-todo-button');\n    DEFAULT_TODO_ADD_BUTTON.addEventListener('click', () => {\n      TODO_FORM.reset();\n      TODO_FORM.classList.toggle('hide-display');\n    });\n\n    TODO_FORM.addEventListener('submit', (e) => {\n      e.preventDefault();\n\n      const projectName = document.querySelector('.projects-container .nav-link.active').textContent;\n      const project = _projects__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getProjectByName(projectName);\n\n      if (project) {\n        project.addToDo(TODO_FORM);\n        DOM.addProjectTabAndContent();\n      }\n      TODO_FORM.reset();\n      TODO_FORM.classList.toggle('hide-display');\n      const currentProjectIndex = _projects__WEBPACK_IMPORTED_MODULE_0__[\"default\"].projects.indexOf(project);\n      const currentProjectTab = document.getElementById(`v-pills-${currentProjectIndex}-tab`);\n      const currentProjectContent = document.getElementById(`v-pills-${currentProjectIndex}`);\n\n      currentProjectTab.setAttribute('aria-selected', 'true');\n      currentProjectTab.classList.add('active');\n      currentProjectContent.classList.add('show', 'active');\n    });\n  }\n}\n\n\n//# sourceURL=webpack://to-do-list-project/./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n\n\n\ndocument.addEventListener('DOMContentLoaded', _dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].loadPage());\n\n\n//# sourceURL=webpack://to-do-list-project/./src/index.js?");

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\n/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todos */ \"./src/todos.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n\n\n\nclass Project {\n  static projects = [];\n\n  constructor(name) {\n    this.name = name;\n    this.toDoList = [];\n  }\n\n  static addProject(input) {\n    const name = input.value;\n\n    if (name === '') {\n      alert('Project name cannot be empty.');\n      return;\n    }\n\n    const existingProject = this.projects.find((project) => project.name === name);\n    if (existingProject) {\n      alert('Project with the same name already exists.');\n      return;\n    }\n\n    const project = new Project(name);\n    this.projects.push(project);\n  }\n\n  static deleteProject(name) {\n    this.projects = this.projects.filter((project) => project.name !== name);\n  }\n\n  static getProjectByName(projectName) {\n    return this.projects.find((project) => project.name === projectName);\n  }\n\n  addToDo(form) {\n    const {\n      title, dueDate,\n    } = form.elements;\n    const todo = new _todos__WEBPACK_IMPORTED_MODULE_0__[\"default\"](title.value, dueDate.value);\n    this.toDoList.push(todo);\n    return todo;\n  }\n\n  deleteToDo(toDoTitle) {\n    this.toDoList = this.toDoList.filter((toDo) => toDo.title !== toDoTitle);\n  }\n\n  getToDoByTitle(todoTitle) {\n    return this.toDoList.find((todo) => todo.title === todoTitle);\n  }\n}\n\nProject.projects.push(new Project('Default'));\n\n\n//# sourceURL=webpack://to-do-list-project/./src/projects.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Storage)\n/* harmony export */ });\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todos */ \"./src/todos.js\");\n\n\n\nclass Storage {\n  static save(key, data) {\n    const serializedData = JSON.stringify(data);\n    localStorage.setItem(key, serializedData);\n  }\n\n  static load(key) {\n    const serializedData = localStorage.getItem(key);\n    if (serializedData) {\n      return JSON.parse(serializedData);\n    }\n    return null;\n  }\n\n  static remove(key) {\n    localStorage.removeItem(key);\n  }\n}\n\n\n//# sourceURL=webpack://to-do-list-project/./src/storage.js?");

/***/ }),

/***/ "./src/todos.js":
/*!**********************!*\
  !*** ./src/todos.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ToDo)\n/* harmony export */ });\nclass ToDo {\n  constructor(title, dueDate) {\n    if (!title) {\n      throw new Error('Invalid input. Please provide all required fields.');\n    }\n\n    this.title = title;\n    this.dueDate = dueDate;\n    this.completed = false;\n  }\n\n  toggleComplete() {\n    this.completed = !this.completed;\n  }\n}\n\n\n//# sourceURL=webpack://to-do-list-project/./src/todos.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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