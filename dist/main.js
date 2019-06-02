/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./IzvještajHTML.js":
/*!**************************!*\
  !*** ./IzvještajHTML.js ***!
  \**************************/
/*! exports provided: showData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showData\", function() { return showData; });\nlet showData = (data) => {\r\n\r\n    let table = document.getElementById('tabla'),\r\n        table2 = document.getElementById('tabla2');\r\n\r\n    if (data.parkovi) {\r\n        let tr = '<tr>';\r\n        data.parkovi.forEach((e) => {\r\n            tr += \"<td>\" + e.naziv + \"</td>\";\r\n            tr += \"<td>\" + e.godina + \"</td>\";\r\n            tr += '<td>' + e.povrsina + '</td>';\r\n            tr += '<td>' + e.drvece + '</td>';\r\n            tr += '<td>' + e.gustoca + '</td></tr>';\r\n            table.innerHTML = tr;\r\n        });\r\n    }\r\n    if (data.ulice) {\r\n        let tr = '<tr>';\r\n        data.ulice.forEach((e) => {\r\n            tr += \"<td>\" + e.naziv + \"</td>\";\r\n            tr += \"<td>\" + e.godina + \"</td>\";\r\n            tr += '<td>' + e.duzina + '</td>';\r\n            tr += '<td>' + e.klasifikacija + '</td></tr>';\r\n            table2.innerHTML = tr;\r\n        });\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./Izvje%C5%A1tajHTML.js?");

/***/ }),

/***/ "./IzvještajTasks.js":
/*!***************************!*\
  !*** ./IzvještajTasks.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst SortByTrees = (parkovi) => {\r\n    console.log('Parkovi sortirani po broju drveća');\r\n    parkovi.sort((a, b) => b.treesCount - a.treesCount);\r\n    parkovi.forEach(e => console.log(e));\r\n}\r\nconst SortBySize = (parkovi) => {\r\n    console.log('Parkovi sortirani po veličini');\r\n    parkovi.sort((a, b) => b.area - a.area);\r\n    parkovi.forEach(e => console.log(e));\r\n}\r\nconst Age = (parkovi) => {\r\n    let ukupno = 0;\r\n    parkovi.forEach(element => ukupno += (2019 - element.year));\r\n    console.log('Prosjek starosti parkova: ' + (ukupno / parkovi.length).toFixed(2) + ' godina');\r\n}\r\nlet ProsjecnaUkupnaDuzinaUlica = (ulice) => {\r\n    let ukupno = 0;\r\n    ulice.forEach(e => ukupno += e.streetLength);\r\n    console.log('Ukupna dužina ulica: ' + ukupno.toFixed(2) + ' km2 a prosječna: ' +\r\n        (ukupno / ulice.length).toFixed(2) + ' km2');\r\n}\r\nlet Ulice80tih = (ulice) => {\r\n    console.log('Ulice osamdesetih:');\r\n    ulice.forEach((e) => {\r\n        if (e.year >= 1980 && e.year < 1990)\r\n            console.log(e)\r\n    });\r\n\r\n}\r\nlet Report = (data) => {\r\n    if (data.parkovi) {\r\n        SortByTrees(data.parkovi);\r\n        SortBySize(data.parkovi);\r\n        Age(data.parkovi);\r\n    }\r\n    if (data.ulice) {\r\n        ProsjecnaUkupnaDuzinaUlica(data.ulice);\r\n        Ulice80tih(data.ulice);\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Report);\n\n//# sourceURL=webpack:///./Izvje%C5%A1tajTasks.js?");

/***/ }),

/***/ "./apiService.js":
/*!***********************!*\
  !*** ./apiService.js ***!
  \***********************/
/*! exports provided: fetchData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchData\", function() { return fetchData; });\nconst fetchData = () => fetch('https://cityscapes-masters.herokuapp.com/cityElements')\r\n        .then(resp => resp.json())\r\n        .then(response => response);\r\n\r\n\n\n//# sourceURL=webpack:///./apiService.js?");

/***/ }),

/***/ "./dataInfo.js":
/*!*********************!*\
  !*** ./dataInfo.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst printParks = (parkovi = []) => {\r\n    console.log(\"--------Parkovi----------\");\r\n    parkovi.forEach(e => e.info());\r\n};\r\n\r\nconst printStreets = (ulice = []) => {\r\n    console.log(\"--------Ulice----------\");\r\n    ulice.forEach(e => e.info());\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    printParks,\r\n    printStreets\r\n});\n\n//# sourceURL=webpack:///./dataInfo.js?");

/***/ }),

/***/ "./dataParse.js":
/*!**********************!*\
  !*** ./dataParse.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _model_Park__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model/Park */ \"./model/Park.js\");\n/* harmony import */ var _model_Ulica__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/Ulica */ \"./model/Ulica.js\");\n\r\n\r\n\r\nconst parseParks = (data = []) => {\r\n    const parks = [];\r\n    data.forEach(element => {\r\n        parks.push(new _model_Park__WEBPACK_IMPORTED_MODULE_0__[\"default\"](element.name, element.year, element.area, element.treesCount));\r\n    });\r\n    return parks;\r\n};\r\n\r\nconst parseStreets = (data = []) => {\r\n    const streets = [];\r\n    data.forEach(element => {\r\n        streets.push(new _model_Ulica__WEBPACK_IMPORTED_MODULE_1__[\"default\"](element.name, element.year, element.streetLength, element.size))\r\n    });\r\n    return streets;\r\n};\r\n\r\nconst parseData = (data = {}) => {\r\n    const parsedData = {};\r\n\r\n    if (data.parkovi) {\r\n        parsedData.parkovi = parseParks(data.parkovi);\r\n    }\r\n    if (data.ulice) {\r\n        parsedData.ulice = parseStreets(data.ulice);\r\n    }\r\n\r\n    return parsedData;\r\n};\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (parseData);\n\n//# sourceURL=webpack:///./dataParse.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _apiService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiService */ \"./apiService.js\");\n/* harmony import */ var _dataParse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dataParse */ \"./dataParse.js\");\n/* harmony import */ var _dataInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dataInfo */ \"./dataInfo.js\");\n/* harmony import */ var _Izvje_tajHTML__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./IzvještajHTML */ \"./IzvještajHTML.js\");\n/* harmony import */ var _Izvje_tajTasks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./IzvještajTasks */ \"./IzvještajTasks.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nObject(_apiService__WEBPACK_IMPORTED_MODULE_0__[\"fetchData\"])()\r\n    .then(data => {\r\n        const podaci = Object(_dataParse__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data);\r\n        // prebaciti metode za ispis izvještaja u dataInfo modul i iz ove metode proslijeđivati podatke\r\n        _dataInfo__WEBPACK_IMPORTED_MODULE_2__[\"default\"].printParks(podaci.parkovi);\r\n        _dataInfo__WEBPACK_IMPORTED_MODULE_2__[\"default\"].printStreets(podaci.ulice);\r\n        Object(_Izvje_tajTasks__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(data);\r\n        //Bonus korak, napraviti modul koji će izvještaje i podatke ispisati u HTML, \r\n        //te takav projekat postviti na svoj github i podići na netlify demo stranicu. \r\n        Object(_Izvje_tajHTML__WEBPACK_IMPORTED_MODULE_3__[\"showData\"])(podaci);\r\n    });\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./model/GradskiElement.js":
/*!*********************************!*\
  !*** ./model/GradskiElement.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass GradskiElement {\r\n  constructor(naziv, godina) {\r\n    this.naziv = naziv;\r\n    this.godina = godina;\r\n  }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (GradskiElement);\n\n//# sourceURL=webpack:///./model/GradskiElement.js?");

/***/ }),

/***/ "./model/Park.js":
/*!***********************!*\
  !*** ./model/Park.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _GradskiElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GradskiElement */ \"./model/GradskiElement.js\");\n\r\n\r\nclass Park extends _GradskiElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor(naziv, godina, povrsina, drvece) {\r\n        super(naziv, godina);\r\n        this.povrsina = povrsina;\r\n        this.drvece = drvece;\r\n        this.gustoca = (this.drvece / this.povrsina).toFixed(2);\r\n    }\r\n    info() {\r\n        console.log(this.naziv + '    ' + this.godina + '    ' + this.povrsina + ' km2     ' + this.drvece +\r\n            '           ' + this.gustoca);\r\n    }\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Park);\n\n//# sourceURL=webpack:///./model/Park.js?");

/***/ }),

/***/ "./model/Ulica.js":
/*!************************!*\
  !*** ./model/Ulica.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _GradskiElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GradskiElement */ \"./model/GradskiElement.js\");\n\r\n\r\nlet myMap = new Map();\r\nmyMap.set(1, 'prolaz');\r\nmyMap.set(2, 'mala');\r\nmyMap.set(3, 'normalna');\r\nmyMap.set(4, 'velika');\r\n\r\nclass Ulica extends _GradskiElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor(naziv, godina, duzina, klasifikacija) {\r\n        super(naziv, godina);\r\n        this.duzina = duzina;\r\n        klasifikacija == null ?\r\n            this.klasifikacija = myMap.get(3) : this.klasifikacija = myMap.get(klasifikacija);\r\n    }\r\n    info() {\r\n        console.log(this.naziv + ' ' + this.godina + '  ' + this.duzina + ' km2 ' +\r\n            this.klasifikacija);\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Ulica);\n\n//# sourceURL=webpack:///./model/Ulica.js?");

/***/ })

/******/ });