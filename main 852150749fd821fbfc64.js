"use strict";
(self["webpackChunkcalculator"] = self["webpackChunkcalculator"] || []).push([["main"],{

/***/ "./src/Module/Button/BackSpace.js":
/*!****************************************!*\
  !*** ./src/Module/Button/BackSpace.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BackSpaceButton)
/* harmony export */ });
/* harmony import */ var _Source_Main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Source/Main */ "./src/Module/Source/Main.js");

function BackSpaceButton() {
  const backspace = document.querySelector(".backspace");
  backspace.addEventListener("click", () => {
    _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.textOne = _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.textOne.slice(0, -1);
    _Source_Main__WEBPACK_IMPORTED_MODULE_0__.currentNumberDisplay.textContent = _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.textOne;
    console.log(_Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.textOne);
    console.log("backSpace");
  });
}

/***/ }),

/***/ "./src/Module/Button/ClearButton.js":
/*!******************************************!*\
  !*** ./src/Module/Button/ClearButton.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ClearButton)
/* harmony export */ });
/* harmony import */ var _Source_Main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Source/Main */ "./src/Module/Source/Main.js");

function ClearButton() {
  const clear = document.querySelector(".clear");
  clear.addEventListener("click", () => {
    console.clear();
    console.log("CLEARED");
    _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.textOne = "";
    _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.textTwo = "";
    _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.sign = "";
    _Source_Main__WEBPACK_IMPORTED_MODULE_0__.currentNumberDisplay.textContent = 0;
    _Source_Main__WEBPACK_IMPORTED_MODULE_0__.previousNumberDisplay.textContent = "";
    _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.result = "";
    _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.isSign = false;
    _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.isEqual = false;
  });
}

/***/ }),

/***/ "./src/Module/Button/FlipSign.js":
/*!***************************************!*\
  !*** ./src/Module/Button/FlipSign.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FlipSignButton)
/* harmony export */ });
/* harmony import */ var _Source_Main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Source/Main */ "./src/Module/Source/Main.js");

function FlipSignButton() {
  const flipSign = document.querySelector(".flipSign");
  flipSign.addEventListener("click", () => {
    console.log("flipped");
    if (_Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.textOne > 0) {
      if (_Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.result !== 0) {
        // flip number after pressing EqualButton
        _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.result = -_Source_Main__WEBPACK_IMPORTED_MODULE_0__.currentNumberDisplay.textContent;
      }
      _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.textOne = -_Source_Main__WEBPACK_IMPORTED_MODULE_0__.currentNumberDisplay.textContent;
      _Source_Main__WEBPACK_IMPORTED_MODULE_0__.currentNumberDisplay.textContent = _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.textOne;
    } else {
      if (_Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.result !== 0) {
        // flip number after pressing EqualButton
        _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.result = -_Source_Main__WEBPACK_IMPORTED_MODULE_0__.currentNumberDisplay.textContent;
      }
      _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.textOne = -_Source_Main__WEBPACK_IMPORTED_MODULE_0__.currentNumberDisplay.textContent;
      _Source_Main__WEBPACK_IMPORTED_MODULE_0__.currentNumberDisplay.textContent = _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.textOne;
    }
  });
}

/***/ }),

/***/ "./src/Module/Button/Power.js":
/*!************************************!*\
  !*** ./src/Module/Button/Power.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PowerButton)
/* harmony export */ });
/* harmony import */ var _Source_Main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Source/Main */ "./src/Module/Source/Main.js");
/* harmony import */ var _Components_RoundFloat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/RoundFloat */ "./src/Module/Components/RoundFloat.js");


function PowerButton() {
  const powerSquare = document.querySelector(".powerSquare");
  powerSquare.addEventListener("click", () => {
    // currentNumberDisplay.style.marginTop = "35px";
    if (_Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.result) {
      console.log("Else not hello");
      _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.result *= _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.result;

      // if result.length > 12
      _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.result = (0,_Components_RoundFloat__WEBPACK_IMPORTED_MODULE_1__["default"])(_Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.result); // rounds the value to 5 point

      _Source_Main__WEBPACK_IMPORTED_MODULE_0__.currentNumberDisplay.textContent = _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.result;
      _Source_Main__WEBPACK_IMPORTED_MODULE_0__.previousNumberDisplay.textContent = `Sqr(${_Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.result})`;
      // console.log(`Power Result Two${result}`);
    } else {
      _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.result = _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.textOne * _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.textOne;

      // if result.length > 12
      _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.result = (0,_Components_RoundFloat__WEBPACK_IMPORTED_MODULE_1__["default"])(_Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.result); // rounds the value to 5 point

      _Source_Main__WEBPACK_IMPORTED_MODULE_0__.currentNumberDisplay.textContent = _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.result;
      _Source_Main__WEBPACK_IMPORTED_MODULE_0__.previousNumberDisplay.textContent = `Sqr(${_Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.textOne})`;
      _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.textOne = _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.result;
      // console.log(textOne);
    }

    _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.isSign = false;
  });
}

/***/ }),

/***/ "./src/Module/Components/CalculateWithOutEqual.js":
/*!********************************************************!*\
  !*** ./src/Module/Components/CalculateWithOutEqual.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CalculateWithOutEqual)
/* harmony export */ });
/* harmony import */ var _Source_Main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Source/Main */ "./src/Module/Source/Main.js");
/* harmony import */ var _RoundFloat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RoundFloat */ "./src/Module/Components/RoundFloat.js");


function CalculateWithOutEqual(e) {
  //! "----------CalculateWithOutEqual------------"
  // isEqual = false;
  // textOne = textTwo;
  // console.log(isSign);
  // console.log(isEqual);
  // console.log(textOne);
  // console.log(textTwo);
  // console.log(result);
  // console.log(sign);

  function addNumWithoutEqual() {
    console.log("----------CalculateWithOutEqual------------");
    console.log(`  Adjacent Adding Without EqualButton`);
    _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.result = parseFloat(_Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.textTwo) + parseFloat(_Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.textOne);
    // console.log(userInput.textOne);
    // console.log(userInput.textTwo);
    // console.log(userInput.result);
    _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.textTwo = _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.result;
    _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.sign = e.target.textContent;
    _Source_Main__WEBPACK_IMPORTED_MODULE_0__.previousNumberDisplay.textContent = ` ${_Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.textTwo} ${_Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.sign} `;
    _Source_Main__WEBPACK_IMPORTED_MODULE_0__.currentNumberDisplay.textContent = 0;
    // console.log(`This is result ${result}`);
    _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.textOne = "";
    _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.result = "";
    // console.log(textOne);
    // console.log(textTwo);
    // console.log(result);
    // console.log(sign);
  }

  function subtractNumWithoutEqual() {
    // userInput.isSign = false;

    console.log(`  Adjacent Subtracting Without EqualButton`);
    _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.result = parseFloat(_Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.textTwo) - parseFloat(_Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.textOne);
    _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.textTwo = _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.result;
    // console.log(userInput.textTwo);
    // console.log(userInput.result);

    _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.sign = e.target.textContent;
    _Source_Main__WEBPACK_IMPORTED_MODULE_0__.previousNumberDisplay.textContent = ` ${_Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.textTwo} ${_Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.sign} `;
    _Source_Main__WEBPACK_IMPORTED_MODULE_0__.currentNumberDisplay.textContent = 0;
    // console.log(`This is result ${result}`);
    _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.textOne = "";
    _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.result = "";
    console.log(_Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.textOne);
    console.log(_Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.textTwo);
    console.log(_Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.result);
    console.log(_Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.sign);
  }
  function multipleNumWithoutEqual() {
    console.log(`  Adjacent Multiplying Without EqualButton`);
    _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.result = parseFloat(_Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.textTwo) * parseFloat(_Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.textOne);
    _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.textTwo = _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.result;
    _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.sign = e.target.textContent;
    _Source_Main__WEBPACK_IMPORTED_MODULE_0__.previousNumberDisplay.textContent = ` ${_Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.result} ${_Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.sign} `;
    _Source_Main__WEBPACK_IMPORTED_MODULE_0__.currentNumberDisplay.textContent = 0;
    // console.log(`This is result ${result}`);
    _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.textOne = "";
    _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.result = "";
  }
  function divideNumWithoutEqual() {
    if (_Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.textOne === "0") {
      _Source_Main__WEBPACK_IMPORTED_MODULE_0__.previousNumberDisplay.textContent = `${_Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.textTwo} / ${_Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.textOne}`;
      _Source_Main__WEBPACK_IMPORTED_MODULE_0__.currentNumberDisplay.textContent = "Error, Cannot divide by 0";
      _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.textOne = "";
      _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.textTwo = "";
      _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.result = "";
      console.log("Cannot divide by 0");
    } else {
      console.log(`  Adjacent Dividing Without EqualButton `);
      _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.result = parseFloat(_Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.textTwo) / parseFloat(_Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.textOne);
      // if result.length > 12 call RoundFloat, else return score
      _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.result = (0,_RoundFloat__WEBPACK_IMPORTED_MODULE_1__["default"])(_Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.result); // rounds the value to 5 point
      _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.textTwo = _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.result;
      _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.sign = e.target.textContent;
      _Source_Main__WEBPACK_IMPORTED_MODULE_0__.previousNumberDisplay.textContent = ` ${_Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.result} ${_Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.sign} `;
      _Source_Main__WEBPACK_IMPORTED_MODULE_0__.currentNumberDisplay.textContent = 0;
      // console.log(`This is result ${result}`);
      _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.textOne = "";
      _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.result = "";
      // console.log(textOne);
      // console.log(textTwo);
      // console.log(result);
      // console.log(sign);
    }
  }

  function percentageNumWithoutEqual() {
    console.log(`  Adjacent Dividing Without EqualButton `);
    _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.result = parseFloat(_Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.textTwo) / 100 * parseFloat(_Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.textOne);
    // if result.length > 12 call RoundFloat, else return score
    _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.result = (0,_RoundFloat__WEBPACK_IMPORTED_MODULE_1__["default"])(_Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.result); // rounds the value to 5 point
    _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.textTwo = _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.result;
    _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.sign = e.target.textContent;
    _Source_Main__WEBPACK_IMPORTED_MODULE_0__.previousNumberDisplay.textContent = ` ${_Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.result} ${_Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.sign} `;
    _Source_Main__WEBPACK_IMPORTED_MODULE_0__.currentNumberDisplay.textContent = 0;
    // console.log(`This is result ${result}`);
    _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.textOne = "";
    _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.result = "";
    // console.log(textOne);
    // console.log(textTwo);
    // console.log(result);
    // console.log(sign);
  }

  if (_Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.sign === "+" && _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.textOne !== "" && _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.isEqual === false) {
    addNumWithoutEqual(e);
  } else if (_Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.sign === "-" && _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.textOne !== "" && _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.isEqual === false) {
    subtractNumWithoutEqual(e);
  } else if (_Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.sign === "*" && _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.textOne !== "" && _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.isEqual === false) {
    multipleNumWithoutEqual(e);
  } else if (_Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.sign === "/" && _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.textOne !== "" && _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.isEqual === false) {
    divideNumWithoutEqual(e);
  } else if (_Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.sign === "%" && _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.textOne !== "" && _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.isEqual === false) {
    percentageNumWithoutEqual(e);
  }
}

/***/ }),

/***/ "./src/Module/Components/EqualButton.js":
/*!**********************************************!*\
  !*** ./src/Module/Components/EqualButton.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EqualButton)
/* harmony export */ });
/* harmony import */ var _Source_Main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Source/Main */ "./src/Module/Source/Main.js");
/* harmony import */ var _Source_SelectOperators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Source/SelectOperators */ "./src/Module/Source/SelectOperators.js");
/* harmony import */ var _Source_SelectNumbers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Source/SelectNumbers */ "./src/Module/Source/SelectNumbers.js");
/* harmony import */ var _EqualButtonReset__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EqualButtonReset */ "./src/Module/Components/EqualButtonReset.js");
/* harmony import */ var _RoundFloat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RoundFloat */ "./src/Module/Components/RoundFloat.js");





const equal = document.querySelector(".equal");
function EqualButton() {
  const addNum = () => {
    _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.result = parseFloat(_Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.textOne) + parseFloat(_Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.textTwo); // +textTwo converts a string to a number
    _Source_Main__WEBPACK_IMPORTED_MODULE_0__.previousNumberDisplay.textContent = `${_Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.textTwo} + ${_Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.textOne} `;
    _Source_Main__WEBPACK_IMPORTED_MODULE_0__.currentNumberDisplay.textContent = _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.result;
    _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.textTwo = _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.result;
    _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.textOne = ""; // erase the result value from text so that we can continuously add number
  };

  const subtractNum = () => {
    _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.result = parseFloat(_Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.textTwo) - parseFloat(_Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.textOne); // +textTwo converts a string to a number
    _Source_Main__WEBPACK_IMPORTED_MODULE_0__.previousNumberDisplay.textContent = `${_Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.textTwo} - ${_Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.textOne} `;
    _Source_Main__WEBPACK_IMPORTED_MODULE_0__.currentNumberDisplay.textContent = _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.result;
    _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.textTwo = _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.result;
    _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.textOne = ""; // erase the result value from text so that we can continuously add number
  };

  const multipleNum = () => {
    _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.result = parseFloat(_Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.textOne) * parseFloat(_Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.textTwo); // +textTwo converts a string to a number
    _Source_Main__WEBPACK_IMPORTED_MODULE_0__.previousNumberDisplay.textContent = `${_Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.textTwo} * ${_Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.textOne} `;
    _Source_Main__WEBPACK_IMPORTED_MODULE_0__.currentNumberDisplay.textContent = _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.result;
    //   currentNumberDisplay.style.marginTop = "50px";
    _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.textOne = "";
    _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.textTwo = "";
  };
  const divideNum = () => {
    console.log("Divide Number");
    if (_Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.textOne === "0") {
      _Source_Main__WEBPACK_IMPORTED_MODULE_0__.previousNumberDisplay.textContent = `${_Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.textTwo} / ${_Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.textOne}`;
      _Source_Main__WEBPACK_IMPORTED_MODULE_0__.currentNumberDisplay.textContent = "Error";
      _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.textOne = "";
      _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.textTwo = "";
      console.log("Cannot divide by 0");
    } else {
      _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.result = parseFloat(_Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.textTwo) / parseFloat(_Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.textOne); // +textTwo converts a string to a number
      // if result.length > 12 call RoundFloat, else return score
      _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.result = (0,_RoundFloat__WEBPACK_IMPORTED_MODULE_4__["default"])(_Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.result);
      _Source_Main__WEBPACK_IMPORTED_MODULE_0__.previousNumberDisplay.textContent = `${_Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.textTwo} / ${_Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.textOne}`;
      _Source_Main__WEBPACK_IMPORTED_MODULE_0__.currentNumberDisplay.textContent = _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.result;
      _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.textOne = "";
      _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.textTwo = "";
      console.log("normal number");
    }
  };
  const percentageNum = () => {
    _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.result = _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.textTwo / 100 * _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.textOne;
    // if result.length > 12 call RoundFloat, else return score
    _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.result = (0,_RoundFloat__WEBPACK_IMPORTED_MODULE_4__["default"])(_Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.result);
    _Source_Main__WEBPACK_IMPORTED_MODULE_0__.previousNumberDisplay.textContent = `${_Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.textTwo} % ${_Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.textOne}`;
    _Source_Main__WEBPACK_IMPORTED_MODULE_0__.currentNumberDisplay.textContent = _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.result;
    console.log(`This is Percentage ${_Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.result}`);
    _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.textOne = "";
    _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.textTwo = "";
  };
  equal.addEventListener("click", () => {
    _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.isEqual = true;
    console.log(_Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.isEqual);
    if (_Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.sign === "+" && _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.textOne !== "" && _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.isEqual === true) {
      addNum();
    }
    if (_Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.sign === "*" && _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.textOne !== "" && _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.isEqual === true) {
      multipleNum();
    }
    if (_Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.sign === "-" && _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.textOne !== "" && _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.isEqual === true) {
      subtractNum();
    }
    if (_Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.sign === "/" && _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.textOne !== "" && _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.isEqual === true) {
      divideNum();
    }
    if (_Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.sign === "%" && _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.textOne !== "" && _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.isEqual === true) {
      percentageNum();
    }
    _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.isSign = false;

    // console.log(textOne);
    // console.log(textTwo);
    // console.log(result);
    // console.log(sign);
    // console.log(isEqual);

    // Continuous Calculating
    // SelectOperators(secondNumber);

    // Reset Calculation
    (0,_Source_SelectNumbers__WEBPACK_IMPORTED_MODULE_2__["default"])(_EqualButtonReset__WEBPACK_IMPORTED_MODULE_3__["default"]); // Reset the result, if User Select an number after pressing equalButton
  });
}

/***/ }),

/***/ "./src/Module/Components/EqualButtonReset.js":
/*!***************************************************!*\
  !*** ./src/Module/Components/EqualButtonReset.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EqualButtonReset)
/* harmony export */ });
/* harmony import */ var _Source_Main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Source/Main */ "./src/Module/Source/Main.js");

function EqualButtonReset(e) {
  if (_Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.isEqual === true) {
    console.clear();
    console.log("CLEARED");
    _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.textOne = "";
    _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.textTwo = "";
    _Source_Main__WEBPACK_IMPORTED_MODULE_0__.previousNumberDisplay.textContent = "";
    _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.result = "";
    _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.sign = "";
    _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.isSign = false;
    _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.isEqual = false;
    _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.textOne = e.target.textContent;
    console.log(_Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.textOne);
    console.log(_Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.isEqual);
    _Source_Main__WEBPACK_IMPORTED_MODULE_0__.currentNumberDisplay.textContent = _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.textOne;
  }
}

/***/ }),

/***/ "./src/Module/Components/FirstNumber.js":
/*!**********************************************!*\
  !*** ./src/Module/Components/FirstNumber.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FirstNumber)
/* harmony export */ });
/* harmony import */ var _Source_Main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Source/Main */ "./src/Module/Source/Main.js");

function FirstNumber(e) {
  if (_Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.textOne.length < 13) {
    _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.textOne += e.target.textContent; // += for writing number adjacent
    _Source_Main__WEBPACK_IMPORTED_MODULE_0__.currentNumberDisplay.textContent = _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.textOne;
    // userInput.isSign = false;
    console.clear();
    console.log(`TextOne ${_Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.textOne}`);
    console.log(`TextTwo ${_Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.textTwo}`);
  }
}

/***/ }),

/***/ "./src/Module/Components/OperatorSelect.js":
/*!*************************************************!*\
  !*** ./src/Module/Components/OperatorSelect.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OperatorSelect)
/* harmony export */ });
/* harmony import */ var _Source_Main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Source/Main */ "./src/Module/Source/Main.js");
/* harmony import */ var _Source_SelectNumbers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Source/SelectNumbers */ "./src/Module/Source/SelectNumbers.js");
/* harmony import */ var _SecondNumber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SecondNumber */ "./src/Module/Components/SecondNumber.js");
/* harmony import */ var _Source_SelectOperators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Source/SelectOperators */ "./src/Module/Source/SelectOperators.js");





// function operatorSelect() {
// SelectOperators(OperatorSelectFnc);
// SelectOperators(OperatorSelectFnc(e));
// }

function OperatorSelect() {
  function OperatorSelectFnc(e) {
    console.log(`Operator Selected `);
    console.log(_Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.result);
    // disable selecting multiple sign
    if (_Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.isSign === false) {
      _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.isSign = true; // disable selecting multiple sign
      _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.isEqual = false;
      _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.sign = e.target.textContent;
      _Source_Main__WEBPACK_IMPORTED_MODULE_0__.currentNumberDisplay.textContent += ` ${_Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.sign} `; // += textOne +  sign
      _Source_Main__WEBPACK_IMPORTED_MODULE_0__.previousNumberDisplay.textContent = _Source_Main__WEBPACK_IMPORTED_MODULE_0__.currentNumberDisplay.textContent;
      _Source_Main__WEBPACK_IMPORTED_MODULE_0__.previousNumberDisplay.style.visibility = "visible";
      _Source_Main__WEBPACK_IMPORTED_MODULE_0__.currentNumberDisplay.textContent = "";
      if (_Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.result === "") {
        _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.textTwo = _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.textOne; // stores the value so that textOne can get a fresh value
      } else {
        _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.textTwo = _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.result; // when we use equalButton fnc [continuous calculation after equal button is pressed ]
      }

      _Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.textOne = "";

      // select SecondNumber
      (0,_Source_SelectNumbers__WEBPACK_IMPORTED_MODULE_1__["default"])(_SecondNumber__WEBPACK_IMPORTED_MODULE_2__["default"]);
    }
  }
  (0,_Source_SelectOperators__WEBPACK_IMPORTED_MODULE_3__["default"])(OperatorSelectFnc);
}

/***/ }),

/***/ "./src/Module/Components/RoundFloat.js":
/*!*********************************************!*\
  !*** ./src/Module/Components/RoundFloat.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RoundFloat)
/* harmony export */ });
function RoundFloat(result) {
  const resultLength = result.toString();
  console.log(resultLength);
  if (resultLength.length > 12 && resultLength.includes(".")) {
    // let value = Math.round(Number.parseFloat(result));
    // value = value.toString().slice(0, 12);
    // return parseFloat(value);
    return Number.parseFloat(result).toFixed(3);
  }
  if (resultLength > 12 && !resultLength.includes(".")) {
    return Number.parseFloat(result);
  }
  return result;
}

/***/ }),

/***/ "./src/Module/Components/SecondNumber.js":
/*!***********************************************!*\
  !*** ./src/Module/Components/SecondNumber.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SecondNumber)
/* harmony export */ });
/* harmony import */ var _Source_Main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Source/Main */ "./src/Module/Source/Main.js");
/* harmony import */ var _Source_SelectOperators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Source/SelectOperators */ "./src/Module/Source/SelectOperators.js");
/* harmony import */ var _CalculateWithOutEqual__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CalculateWithOutEqual */ "./src/Module/Components/CalculateWithOutEqual.js");
/* harmony import */ var _EqualButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EqualButton */ "./src/Module/Components/EqualButton.js");




function SecondNumber() {
  console.log(`textOne === ${_Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.textOne}`);
  console.log(_Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.isSign);
  if (_Source_Main__WEBPACK_IMPORTED_MODULE_0__.userInput.isEqual === false) {
    (0,_Source_SelectOperators__WEBPACK_IMPORTED_MODULE_1__["default"])(_CalculateWithOutEqual__WEBPACK_IMPORTED_MODULE_2__["default"]);
  }
  (0,_EqualButton__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./src/Module/Source/Main.js":
/*!***********************************!*\
  !*** ./src/Module/Source/Main.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   currentNumberDisplay: () => (/* binding */ currentNumberDisplay),
/* harmony export */   previousNumberDisplay: () => (/* binding */ previousNumberDisplay),
/* harmony export */   userInput: () => (/* binding */ userInput)
/* harmony export */ });
const currentNumberDisplay = document.querySelector(".currentNumberDisplay");
const previousNumberDisplay = document.querySelector(".previousNumberDisplay");
const userInput = {
  textOne: "",
  textTwo: "",
  sign: "",
  result: "",
  isSign: false,
  isEqual: false
};


/***/ }),

/***/ "./src/Module/Source/SelectNumbers.js":
/*!********************************************!*\
  !*** ./src/Module/Source/SelectNumbers.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SelectNumbers)
/* harmony export */ });
function SelectNumbers(customEvent) {
  const numbs = document.querySelectorAll(".numb");
  numbs.forEach(numb => {
    numb.addEventListener("click", customEvent);
  });
}

/***/ }),

/***/ "./src/Module/Source/SelectOperators.js":
/*!**********************************************!*\
  !*** ./src/Module/Source/SelectOperators.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SelectOperators)
/* harmony export */ });
function SelectOperators(customEvent) {
  const operators = document.querySelectorAll(".operator");
  console.log("LoopOperators");
  operators.forEach(operator => {
    operator.addEventListener("click", customEvent);
  });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/style.scss */ "./src/sass/style.scss");
/* harmony import */ var _Module_Source_SelectNumbers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Module/Source/SelectNumbers */ "./src/Module/Source/SelectNumbers.js");
/* harmony import */ var _Module_Source_SelectOperators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Module/Source/SelectOperators */ "./src/Module/Source/SelectOperators.js");
/* harmony import */ var _Module_Source_Main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Module/Source/Main */ "./src/Module/Source/Main.js");
/* harmony import */ var _Module_Components_RoundFloat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Module/Components/RoundFloat */ "./src/Module/Components/RoundFloat.js");
/* harmony import */ var _Module_Components_FirstNumber__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Module/Components/FirstNumber */ "./src/Module/Components/FirstNumber.js");
/* harmony import */ var _Module_Components_OperatorSelect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Module/Components/OperatorSelect */ "./src/Module/Components/OperatorSelect.js");
/* harmony import */ var _Module_Button_ClearButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Module/Button/ClearButton */ "./src/Module/Button/ClearButton.js");
/* harmony import */ var _Module_Button_BackSpace__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Module/Button/BackSpace */ "./src/Module/Button/BackSpace.js");
/* harmony import */ var _Module_Button_FlipSign__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Module/Button/FlipSign */ "./src/Module/Button/FlipSign.js");
/* harmony import */ var _Module_Button_Power__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Module/Button/Power */ "./src/Module/Button/Power.js");


// Source




// Components


// import OperatorSelectFnc from "./Module/Components/OperatorSelect";


// const numbs = document.querySelectorAll(".numb");
// const operators = document.querySelectorAll(".operator");






// const backspace = document.querySelector(".backspace");
// const equal = document.querySelector(".equal");
// const flipSign = document.querySelector(".flipSign");

// const currentNumberDisplay = document.querySelector(".currentNumberDisplay");
// const previousNumberDisplay = document.querySelector(".previousNumberDisplay");

// userInput.textOne = "";
// userInput.textTwo = "";
//  userInput.sign = "";
//  userInput.result = "";
// let userInput.isSign = false;
// let userInput.isEqual = false;

console.log("``````````````````````");
console.log(_Module_Source_Main__WEBPACK_IMPORTED_MODULE_3__.userInput.isEqual);

// function SelectNumbers(customEvent) {
//   numbs.forEach((numb) => {
//     numb.addEventListener("click", customEvent);
//   });
// }

// function SelectOperators(customEvent) {
//   console.log("LoopOperators");
//   operators.forEach((operator) => {
//     operator.addEventListener("click", customEvent);
//   });
// }

// function operatorSelect() {
// SelectOperators(OperatorSelectFnc);
// SelectOperators(OperatorSelectFnc(e));
// }

// function ClearButton() {
//   clear.addEventListener("click", () => {
//     console.clear();
//     console.log("CLEARED");
//     userInput.textOne = "";
//     userInput.textTwo = "";
//     userInput.sign = "";

//     currentNumberDisplay.textContent = 0;
//     previousNumberDisplay.textContent = "";
//     userInput.result = "";
//     userInput.isSign = false;
//     userInput.isEqual = false;
//   });
// }

// function BackSpaceButton() {
//   backspace.addEventListener("click", () => {
//     userInput.textOne = userInput.textOne.slice(0, -1);
//     currentNumberDisplay.textContent = userInput.textOne;
//     console.log(userInput.textOne);
//     console.log("backSpace");
//   });
// }

// function flipSignButton() {
//   flipSign.addEventListener("click", (e) => {
//     console.log("flipped");
//     if (userInput.textOne > 0) {
//       currentNumberDisplay.textContent = -currentNumberDisplay.textContent;
//       userInput.textOne = currentNumberDisplay.textContent;
//     } else {
//       currentNumberDisplay.textContent = -currentNumberDisplay.textContent;
//       userInput.textOne = currentNumberDisplay.textContent;
//     }
//   });
// }

function calculator() {
  _Module_Source_Main__WEBPACK_IMPORTED_MODULE_3__.previousNumberDisplay.textContent = 0;
  _Module_Source_Main__WEBPACK_IMPORTED_MODULE_3__.previousNumberDisplay.style.visibility = "hidden";
  (0,_Module_Source_SelectNumbers__WEBPACK_IMPORTED_MODULE_1__["default"])(_Module_Components_FirstNumber__WEBPACK_IMPORTED_MODULE_5__["default"]);
  // operatorSelect();
  (0,_Module_Components_OperatorSelect__WEBPACK_IMPORTED_MODULE_6__["default"])();
  (0,_Module_Button_ClearButton__WEBPACK_IMPORTED_MODULE_7__["default"])();
  (0,_Module_Button_BackSpace__WEBPACK_IMPORTED_MODULE_8__["default"])();
  (0,_Module_Button_FlipSign__WEBPACK_IMPORTED_MODULE_9__["default"])(); // fix flip after result
  // equalButton();
  (0,_Module_Button_Power__WEBPACK_IMPORTED_MODULE_10__["default"])();
}
calculator();

// select the first number
// function FirstNumber(e) {
//   if (textOne.length < 13) {
//     textOne += e.target.textContent; // += for writing number adjacent
//     currentNumberDisplay.textContent = textOne;
//     // isSign = false;
//     console.clear();
//     console.log(`TextOne ${textOne}`);
//     console.log(`TextTwo ${textTwo}`);
//   }
// }

// select the first operator

// function OperatorSelectFnc(e) {
//   console.log(`Operator Selected `);
//   console.log(userInput.result);
//   // disable selecting multiple sign
//   if (userInput.isSign === false) {
//     userInput.isSign = true; // disable selecting multiple sign
//     userInput.isEqual = false;
//     userInput.sign = e.target.textContent;
//     currentNumberDisplay.textContent += ` ${userInput.sign} `; // += textOne +  sign
//     previousNumberDisplay.textContent = currentNumberDisplay.textContent;
//     previousNumberDisplay.style.visibility = "visible";
//     currentNumberDisplay.textContent = "";

//     if (userInput.result === "") {
//       userInput.textTwo = userInput.textOne; // stores the value so that textOne can get a fresh value
//     } else {
//       userInput.textTwo = userInput.result; // when we use equalButton fnc [continuous calculation after equal button is pressed ]
//     }
//     userInput.textOne = "";

//     // select SecondNumber
//     SelectNumbers(secondNumber);
//   }
// }

// function secondNumber() {
//   console.log(`textOne === ${userInput.textOne}`);
//   console.log(userInput.isSign);

//   if (userInput.isEqual === false) {
//     SelectOperators(calculateWithOutEqual);
//   }
//   equalButton();
// }

// calculate continuously
// function calculateWithOutEqual(e) {
//   //! "----------CalculateWithOutEqual------------"
//   // isEqual = false;
//   // textOne = textTwo;
//   // console.log(isSign);
//   // console.log(isEqual);
//   // console.log(textOne);
//   // console.log(textTwo);
//   // console.log(result);
//   // console.log(sign);

//   if (
//     userInput.sign === "+" &&
//     userInput.textOne !== "" &&
//     userInput.isEqual === false
//   ) {
//     addNumWithoutEqual(e);
//   } else if (
//     userInput.sign === "-" &&
//     userInput.textOne !== "" &&
//     userInput.isEqual === false
//   ) {
//     subtractNumWithoutEqual(e);
//   } else if (
//     userInput.sign === "*" &&
//     userInput.textOne !== "" &&
//     userInput.isEqual === false
//   ) {
//     multipleNumWithoutEqual(e);
//   } else if (
//     userInput.sign === "/" &&
//     userInput.textOne !== "" &&
//     userInput.isEqual === false
//   ) {
//     divideNumWithoutEqual(e);
//   } else if (
//     userInput.sign === "%" &&
//     userInput.textOne !== "" &&
//     userInput.isEqual === false
//   ) {
//     percentageNumWithoutEqual(e);
//   }
// }

// function equalButton() {
//   equal.addEventListener("click", () => {
//     userInput.isEqual = true;
//     console.log(userInput.isEqual);
//     if (
//       userInput.sign === "+" &&
//       userInput.textOne !== "" &&
//       userInput.isEqual === true
//     ) {
//       addNum();
//     }
//     if (
//       userInput.sign === "*" &&
//       userInput.textOne !== "" &&
//       userInput.isEqual === true
//     ) {
//       multipleNum();
//     }
//     if (
//       userInput.sign === "-" &&
//       userInput.textOne !== "" &&
//       userInput.isEqual === true
//     ) {
//       subtractNum();
//     }
//     if (
//       userInput.sign === "/" &&
//       userInput.textOne !== "" &&
//       userInput.isEqual === true
//     ) {
//       divideNum();
//     }
//     if (
//       userInput.sign === "%" &&
//       userInput.textOne !== "" &&
//       userInput.isEqual === true
//     ) {
//       percentageNum();
//     }
//     userInput.isSign = false;

//     // console.log(textOne);
//     // console.log(textTwo);
//     // console.log(result);
//     // console.log(sign);
//     // console.log(isEqual);

//     // Continuous Calculating
//     SelectOperators(secondNumber);

//     // Reset Calculation
//     SelectNumbers(equalButtonReset); // Reset the result, if User Select an number after pressing equalButton
//   });
// }

// function equalButtonReset(e) {
//   if (userInput.isEqual === true) {
//     console.clear();
//     console.log("CLEARED");
//     userInput.textOne = "";
//     userInput.textTwo = "";
//     previousNumberDisplay.textContent = "";
//     userInput.result = "";
//     userInput.sign = "";
//     userInput.isSign = false;
//     userInput.isEqual = false;
//     userInput.textOne = e.target.textContent;
//     console.log(userInput.textOne);
//     console.log(userInput.isEqual);
//     currentNumberDisplay.textContent = userInput.textOne;
//   }
// }

// When Pressing Equal Button

// const addNum = () => {
//   userInput.result =
//     parseFloat(userInput.textOne) + parseFloat(userInput.textTwo); // +textTwo converts a string to a number
//   previousNumberDisplay.textContent = `${userInput.textTwo} + ${userInput.textOne} `;
//   currentNumberDisplay.textContent = userInput.result;
//   userInput.textTwo = userInput.result;
//   userInput.textOne = ""; // erase the result value from text so that we can continuously add number
// };

// const subtractNum = () => {
//   userInput.result =
//     parseFloat(userInput.textTwo) - parseFloat(userInput.textOne); // +textTwo converts a string to a number
//   previousNumberDisplay.textContent = `${userInput.textTwo} - ${userInput.textOne} `;
//   currentNumberDisplay.textContent = userInput.result;
//   userInput.textTwo = userInput.result;
//   userInput.textOne = ""; // erase the result value from text so that we can continuously add number
// };

// const multipleNum = () => {
//   userInput.result =
//     parseFloat(userInput.textOne) * parseFloat(userInput.textTwo); // +textTwo converts a string to a number
//   previousNumberDisplay.textContent = `${userInput.textTwo} * ${userInput.textOne} `;
//   currentNumberDisplay.textContent = userInput.result;
//   //   currentNumberDisplay.style.marginTop = "50px";
//   userInput.textOne = "";
//   userInput.textTwo = "";
// };

// const divideNum = () => {
//   console.log("Divide Number");
//   if (userInput.textOne === "0") {
//     previousNumberDisplay.textContent = `${userInput.textTwo} / ${userInput.textOne}`;
//     currentNumberDisplay.textContent = "Error";
//     userInput.textOne = "";
//     userInput.textTwo = "";
//     console.log("Cannot divide by 0");
//   } else {
//     userInput.result =
//       parseFloat(userInput.textTwo) / parseFloat(userInput.textOne); // +textTwo converts a string to a number
//     // if result.length > 12 call RoundFloat, else return score
//     userInput.result = RoundFloat(userInput.result);
//     previousNumberDisplay.textContent = `${userInput.textTwo} / ${userInput.textOne}`;
//     currentNumberDisplay.textContent = userInput.result;
//     userInput.textOne = "";
//     userInput.textTwo = "";
//     console.log("normal number");
//   }
// };

// const percentageNum = () => {
//   userInput.result = (userInput.textTwo / 100) * userInput.textOne;
//   // if result.length > 12 call RoundFloat, else return score
//   userInput.result = RoundFloat(userInput.result);
//   previousNumberDisplay.textContent = `${userInput.textTwo} % ${userInput.textOne}`;
//   currentNumberDisplay.textContent = userInput.result;
//   console.log(`This is Percentage ${userInput.result}`);
//   userInput.textOne = "";
//   userInput.textTwo = "";
// };

// Without Pressing Equal Button [Continuously]

// function addNumWithoutEqual(e) {
//   console.log("----------CalculateWithOutEqual------------");
//   console.log(`  Adjacent Adding Without EqualButton`);
//   userInput.result =
//     parseFloat(userInput.textTwo) + parseFloat(userInput.textOne);
//   // console.log(userInput.textOne);
//   // console.log(userInput.textTwo);
//   // console.log(userInput.result);
//   userInput.textTwo = userInput.result;

//   userInput.sign = e.target.textContent;
//   previousNumberDisplay.textContent = ` ${userInput.textTwo} ${userInput.sign} `;
//   currentNumberDisplay.textContent = 0;
//   // console.log(`This is result ${result}`);
//   userInput.textOne = "";
//   userInput.result = "";
//   // console.log(textOne);
//   // console.log(textTwo);
//   // console.log(result);
//   // console.log(sign);
// }

// function subtractNumWithoutEqual(e) {
//   // userInput.isSign = false;

//   console.log(`  Adjacent Subtracting Without EqualButton`);
//   userInput.result =
//     parseFloat(userInput.textTwo) - parseFloat(userInput.textOne);
//   userInput.textTwo = userInput.result;
//   // console.log(userInput.textTwo);
//   // console.log(userInput.result);

//   userInput.sign = e.target.textContent;
//   previousNumberDisplay.textContent = ` ${userInput.textTwo} ${userInput.sign} `;
//   currentNumberDisplay.textContent = 0;
//   // console.log(`This is result ${result}`);
//   userInput.textOne = "";
//   userInput.result = "";
//   console.log(userInput.textOne);
//   console.log(userInput.textTwo);
//   console.log(userInput.result);
//   console.log(userInput.sign);
// }

// function multipleNumWithoutEqual(e) {
//   console.log(`  Adjacent Multiplying Without EqualButton`);
//   userInput.result =
//     parseFloat(userInput.textTwo) * parseFloat(userInput.textOne);
//   userInput.textTwo = userInput.result;
//   userInput.sign = e.target.textContent;
//   previousNumberDisplay.textContent = ` ${userInput.result} ${userInput.sign} `;
//   currentNumberDisplay.textContent = 0;
//   // console.log(`This is result ${result}`);
//   userInput.textOne = "";
//   userInput.result = "";
// }

// function divideNumWithoutEqual(e) {
//   if (userInput.textOne === "0") {
//     previousNumberDisplay.textContent = `${userInput.textTwo} / ${userInput.textOne}`;
//     currentNumberDisplay.textContent = "Error, Cannot divide by 0";
//     userInput.textOne = "";
//     userInput.textTwo = "";
//     userInput.result = "";
//     console.log("Cannot divide by 0");
//   } else {
//     console.log(`  Adjacent Dividing Without EqualButton `);
//     userInput.result =
//       parseFloat(userInput.textTwo) / parseFloat(userInput.textOne);
//     // if result.length > 12 call RoundFloat, else return score
//     userInput.result = RoundFloat(userInput.result); // rounds the value to 5 point
//     userInput.textTwo = userInput.result;
//     userInput.sign = e.target.textContent;
//     previousNumberDisplay.textContent = ` ${userInput.result} ${userInput.sign} `;
//     currentNumberDisplay.textContent = 0;
//     // console.log(`This is result ${result}`);
//     userInput.textOne = "";
//     userInput.result = "";
//     // console.log(textOne);
//     // console.log(textTwo);
//     // console.log(result);
//     // console.log(sign);
//   }
// }

// function percentageNumWithoutEqual(e) {
//   console.log(`  Adjacent Dividing Without EqualButton `);
//   userInput.result =
//     (parseFloat(userInput.textTwo) / 100) * parseFloat(userInput.textOne);
//   // if result.length > 12 call RoundFloat, else return score
//   userInput.result = RoundFloat(userInput.result); // rounds the value to 5 point
//   userInput.textTwo = userInput.result;
//   userInput.sign = e.target.textContent;
//   previousNumberDisplay.textContent = ` ${userInput.result} ${userInput.sign} `;
//   currentNumberDisplay.textContent = 0;
//   // console.log(`This is result ${result}`);
//   userInput.textOne = "";
//   userInput.result = "";
//   // console.log(textOne);
//   // console.log(textTwo);
//   // console.log(result);
//   // console.log(sign);
// }

// function equalButtonResetCalculation() {
//   console.log(
//     "-------- Clears the result when pressed on a number  [Equal] ---------"
//   );
//   previousNumberDisplay.textContent = "";
//   result = "";
//   // console.log(textOne);
//   // operators.forEach((operator) => {
//   //   textTwo = textOne;
//   //   textOne = "";
//   //   operator.addEventListener("click", (e) => {
//   //     "-------- Clears the result when pressed on a number  [Equal=>] ---------";

//   //     previousNumberDisplay.textContent = `${textTwo} ${sign} `;
//   //   });
//   // });
// }

// function CalculatingWithoutEqual() {
//   console.log(`  Number for NotEqualButton  `);
//   // textThree = textOne;
//   // textFour = textTwo;

//   // Calculate the result before hand so that we can use it for nonAdjacentOperatorCalculation
//   if (sign === "+") {
//     addNum();
//     // previousSign = sign;
//     // console.log((result = +textTwo + +textOne));
//   }
//   if (sign === "-") {
//     // previousSign = sign;
//     console.log((result = +textTwo - +textOne));
//   }
//   if (sign === "*") {
//     // previousSign = sign;
//     console.log((result = +textTwo * +textOne));
//   }
//   if (sign === "/") {
//     // previousSign = sign;
//     console.log((result = +textTwo / +textOne));
//   }

//   loopOperators(CalculatingWithoutEqualFnc);
// }

// function calculatingWithoutEqualSameSignFnc(e) {
//   console.log(
//     `-------------This is Continuos Result Inside Inside ${result}----------------`
//   );
//   textTwo = result;
//   previousNumberDisplay.textContent = `${textTwo}  ${e.target.textContent}`;
//   currentNumberDisplay.textContent = "";
//   sign = e.target.textContent;
// }

// function calculatingWithoutEqualSameSign() {
//   console.log("  previousSign === sign  ");
//   if (sign === "+") {
//     console.log(`  Adjacent Adding Without EqualButton`);
//     resultTwo = +textTwo + +textOne;
//     previousNumberDisplay.textContent = ` ${textTwo} ${sign} ${textOne}`;
//     currentNumberDisplay.textContent = resultTwo;
//     console.log(`This is resultTwo ${resultTwo}`);
//   }
//   if (sign === "-") {
//     console.log(`  Adjacent Subtracting Without EqualButton`);
//     resultTwo = +textTwo - +textOne;
//     previousNumberDisplay.textContent = ` ${textTwo} ${sign} ${textOne}`;
//     currentNumberDisplay.textContent = resultTwo;
//     console.log(`This is resultTwo ${resultTwo}`);
//   }
//   if (sign === "*") {
//     console.log(`  Adjacent Multiplying Without EqualButton`);
//     resultTwo = +textTwo * +textOne;
//     previousNumberDisplay.textContent = ` ${textTwo} ${sign} ${textOne}`;
//     currentNumberDisplay.textContent = resultTwo;
//     console.log(`This is resultTwo ${resultTwo}`);
//   }
//   if (sign === "/") {
//     console.log(`  Adjacent Dividing Without EqualButton `);
//     resultTwo = +textTwo / +textOne;
//     previousNumberDisplay.textContent = ` ${textTwo} ${sign} ${textOne}`;
//     currentNumberDisplay.textContent = resultTwo;
//     console.log(`This is resultTwo ${resultTwo}`);
//   }

//   //  Adjacent Number Continuos - Calculation
//   loopOperators(calculatingWithoutEqualSameSignFnc);
// }

// function calculatingWithoutEqualDifferentSign(e) {
//   console.log(`previousSign !== sign`);
//   previousNumberDisplay.textContent = ` ${resultTwo} ${e.target.textContent}  `;
//   textTwo = resultTwo;
//   loopNumbers(calculatingWithoutEqualDifferentSignFnc);
// }

// function calculatingWithoutEqualDifferentSignFnc() {
//   console.log(`previousSign !== sign H!`);

//   if (sign === "+") {
//     resultTwo = +textTwo + +textOne;
//     console.log("Diff Adjacent Result Adding Continuos");
//   }
//   if (sign === "-") {
//     resultTwo = +textTwo - +textOne;
//     console.log("Diff Adjacent Result Subtracting Continuos ");
//   }
//   if (sign === "*") {
//     resultTwo = +textTwo * +textOne;
//     console.log("Diff Adjacent Result Multiplying Continuos ");
//   }
//   if (sign === "/") {
//     resultTwo = +textTwo / +textOne;
//     console.log("Diff Adjacent Result Dividing Continuos ");
//   }
// }

// --------------------------- Button Declaration ------------------------------------- //

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/style.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/style.scss ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  font-size: 3.1rem;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial, sans-serif;
  border-color: rgb(77, 40, 16) !important;
}
@media (max-width: 90em) {
  * {
    font-size: 2.5rem;
  }
}
@media (max-width: 56.25em) {
  * {
    font-size: 2rem;
  }
}
@media (max-width: 43.75em) {
  * {
    font-size: 1.5rem;
  }
}

body {
  background-color: rgb(192, 190, 190);
}

html {
  box-sizing: border-box;
  font-size: 100%;
}

.top {
  margin-top: 5px;
  border: 2.5px solid rgb(228, 152, 1) !important;
  border-radius: 5px;
}

.sectionFive {
  display: flex;
}
.sectionFive > div {
  padding: 20px;
  text-align: center;
  border-radius: 5px;
}

.display {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  width: 80%;
  padding: 0px !important;
  background-color: var(--number-background);
  border-radius: 0px !important;
}

.previousNumberDisplay {
  color: var(--font-color);
  font-size: 1.5rem;
  padding-right: 5px;
  display: flex;
  flex-wrap: wrap-reverse;
}
@media (max-width: 90em) {
  .previousNumberDisplay {
    font-size: 1.4rem;
  }
}
@media (max-width: 56.25em) {
  .previousNumberDisplay {
    font-size: 1.3rem;
  }
}
@media (max-width: 43.75em) {
  .previousNumberDisplay {
    font-size: 1.2rem;
  }
}

.currentNumberDisplay {
  color: var(--font-color);
  margin-right: 5px;
}

.backspace:active *, .backspace:active {
  background-color: aliceblue;
}

.backspace:hover *, .backspace:hover {
  transform: scale(1.01);
}

.backspace {
  cursor: pointer;
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.25s, background-color 0.25s;
  background-color: var(--background-color);
}
@media (max-width: 43.75em) {
  .backspace {
    width: 14.5%;
  }
}
@media (max-width: 375px) {
  .backspace {
    width: 11%;
  }
}
.backspaceImg {
  background-color: var(--background-color);
  width: 100%;
  height: 100%;
  transition: background-color 0.25s;
}
@media (max-width: 90em) {
  .backspaceImg {
    width: 90px;
    height: 90px;
  }
}
@media (max-width: 56.25em) {
  .backspaceImg {
    width: 80px;
    height: 80px;
  }
}
@media (max-width: 43.75em) {
  .backspaceImg {
    width: 60px;
    height: 60px;
  }
}
@media (max-width: 375px) {
  .backspaceImg {
    width: 45px;
    height: 45px;
  }
}

.bottom {
  margin-top: 5px;
  border-right: none;
  border-bottom: none;
  cursor: pointer;
}

.sectionOne,
.sectionTwo,
.sectionThree,
.sectionFour,
.sectionSix {
  display: flex;
}
.sectionOne > div,
.sectionTwo > div,
.sectionThree > div,
.sectionFour > div,
.sectionSix > div {
  padding: 20px;
  text-align: center;
  flex-grow: 1;
  width: 43px;
  border-right: 2px solid goldenrod;
  border-bottom: 2px solid goldenrod;
}

.powerSquare:active *, .powerSquare:active, .operator:active,
.equal:active,
.clear:active {
  background-color: rgb(238, 192, 150) !important;
  opacity: 20%;
}

.powerSquare:hover *, .powerSquare:hover, .operator:hover,
.equal:hover,
.clear:hover {
  background-color: whitesmoke;
  color: var(--background-color);
}

.operator,
.equal,
.clear {
  background-color: rgb(128, 122, 122);
  color: var(--number-background);
}
.operator,
.equal,
.clear {
  transition: background-color 0.25s;
}

.powerSquare {
  background-color: rgb(128, 122, 122);
  color: var(--number-background);
}
.powerSquare > sup {
  font-size: 2rem;
  background-color: rgb(128, 122, 122);
  color: var(--number-background);
}
@media (max-width: 90em) {
  .powerSquare > sup {
    font-size: 2rem;
  }
}
@media (max-width: 56.25em) {
  .powerSquare > sup {
    font-size: 1.5rem;
  }
}
@media (max-width: 43.75em) {
  .powerSquare > sup {
    font-size: 1.2rem;
  }
}
.numb {
  background-color: var(--number-background);
  color: var(--font-color);
  transition: background-color 0.25s;
}
.numb:hover {
  background-color: var(--background-color);
  opacity: 80%;
}
.numb:active {
  background-color: rgb(238, 192, 150);
  opacity: 20%;
}

.flipSign {
  background-color: var(--number-background);
  color: var(--font-color);
  transition: background-color 0.25s;
}
.flipSign:hover {
  background-color: var(--background-color);
  opacity: 80%;
}
.flipSign:active {
  background-color: rgb(238, 192, 150);
  opacity: 20%;
}
@media (max-width: 43.75em) {
  .flipSign {
    font-size: 1.2rem;
  }
}

:root {
  --font-color: rgba(204, 27, 27, 0.856);
  --background-color: black;
  --number-background: white;
}

h1 {
  font-size: 5rem;
  margin: 20px;
  color: rgb(65, 54, 54);
  font-family: "Noto Sans Mono", monospace;
}
@media (max-width: 90em) {
  h1 {
    font-size: 4rem;
  }
}
@media (max-width: 56.25em) {
  h1 {
    font-size: 3rem;
  }
}
@media (max-width: 43.75em) {
  h1 {
    font-size: 2.5rem;
  }
}

button {
  border: none;
  background-color: var(--number-background);
}

.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
}

.content {
  width: 650px;
  padding: 10px;
  border: 2px solid goldenrod !important;
  border-radius: 10px;
  background-color: var(--background-color);
  box-shadow: 3px 3px 20px var(--background-color);
}
@media (max-width: 43.75em) {
  .content {
    width: 100%;
  }
}`, "",{"version":3,"sources":["webpack://./src/sass/globals/_boilerPlates.scss","webpack://./src/sass/style.scss","webpack://./src/sass/utils/breakPoints.scss","webpack://./src/sass/components/top.scss","webpack://./src/sass/components/bottom.scss"],"names":[],"mappings":"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","sourcesContent":["@use \"../utils/\" as ut;\r\n* {\r\n  font-size: 3.1rem;\r\n  font-family: \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\",\r\n    \"Lucida Sans\", Arial, sans-serif;\r\n  border-color: rgb(77, 40, 16) !important;\r\n  @include ut.breakpoint(xLarge) {\r\n    font-size: 2.5rem;\r\n  }\r\n  @include ut.breakpoint(large) {\r\n    font-size: 2rem;\r\n  }\r\n  @include ut.breakpoint(medium) {\r\n    font-size: 1.5rem;\r\n  }\r\n}\r\nbody {\r\n  background-color: rgb(192, 190, 190);\r\n}\r\n\r\nhtml {\r\n  box-sizing: border-box;\r\n  font-size: 100%;\r\n}\r\n\r\n// *,\r\n// *::before,\r\n// *::after {\r\n//   box-sizing: inherit;\r\n// }\r\n","@forward \"globals\";\r\n@forward \"components\";\r\n@use \"./utils/\" as ut;\r\n\r\n:root {\r\n  --font-color: rgba(204, 27, 27, 0.856);\r\n  --background-color: black;\r\n  --number-background: white;\r\n}\r\n\r\nh1 {\r\n  font-size: 5rem;\r\n  margin: 20px;\r\n  color: rgb(65, 54, 54);\r\n  font-family: \"Noto Sans Mono\", monospace;\r\n  @include ut.breakpoint(xLarge) {\r\n    font-size: 4rem;\r\n  }\r\n  @include ut.breakpoint(large) {\r\n    font-size: 3rem;\r\n  }\r\n  @include ut.breakpoint(medium) {\r\n    font-size: 2.5rem;\r\n  }\r\n}\r\n\r\nbutton {\r\n  border: none;\r\n  background-color: var(--number-background);\r\n}\r\n\r\n.main {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: 10px;\r\n}\r\n\r\n.content {\r\n  width: 650px;\r\n  padding: 10px;\r\n  border: 2px solid goldenrod !important;\r\n  border-radius: 10px;\r\n  background-color: var(--background-color);\r\n  box-shadow: 3px 3px 20px var(--background-color);\r\n  @include ut.breakpoint(medium) {\r\n    width: 100%;\r\n  }\r\n}\r\n","$breakpoints: (\r\n  \"xSmall\": 320px,\r\n  \"small\": 375px,\r\n  \"medium\": 43.75em,\r\n  \"large\": 56.25em,\r\n  \"xLarge\": 90em,\r\n);\r\n\r\n@mixin breakpoint($size) {\r\n  @media (max-width: map-get($breakpoints,$size)) {\r\n    @content;\r\n  }\r\n}\r\n","@use \"../utils/\" as ut;\r\n\r\n.top {\r\n  margin-top: 5px;\r\n  border: 2.5px solid rgb(228, 152, 1) !important;\r\n  border-radius: 5px;\r\n}\r\n\r\n.sectionFive {\r\n  display: flex;\r\n  & > div {\r\n    padding: 20px;\r\n    text-align: center;\r\n    border-radius: 5px;\r\n  }\r\n}\r\n\r\n// !\r\n\r\n.display {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  align-items: flex-end;\r\n  width: 80%;\r\n  padding: 0px !important;\r\n  background-color: var(--number-background);\r\n  border-radius: 0px !important;\r\n}\r\n\r\n.previousNumberDisplay {\r\n  color: var(--font-color);\r\n  font-size: 1.5rem;\r\n  @include ut.breakpoint(xLarge) {\r\n    font-size: 1.4rem;\r\n  }\r\n  @include ut.breakpoint(large) {\r\n    font-size: 1.3rem;\r\n  }\r\n  @include ut.breakpoint(medium) {\r\n    font-size: 1.2rem;\r\n  }\r\n  padding-right: 5px;\r\n  display: flex;\r\n  flex-wrap: wrap-reverse;\r\n}\r\n\r\n.currentNumberDisplay {\r\n  color: var(--font-color);\r\n  margin-right: 5px;\r\n}\r\n\r\n// !\r\n\r\n%backspaceActive {\r\n  background-color: aliceblue;\r\n}\r\n%backspaceHover {\r\n  transform: scale(1.01);\r\n}\r\n\r\n.backspace {\r\n  cursor: pointer;\r\n  width: 20%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  transition: transform 0.25s, background-color 0.25s;\r\n  background-color: var(--background-color);\r\n  &:active {\r\n    @extend %backspaceActive;\r\n  }\r\n  &:hover {\r\n    @extend %backspaceHover;\r\n  }\r\n\r\n  @include ut.breakpoint(medium) {\r\n    width: 14.5%;\r\n  }\r\n  @include ut.breakpoint(small) {\r\n    width: 11%;\r\n  }\r\n  &Img {\r\n    background-color: var(--background-color);\r\n    width: 100%;\r\n    height: 100%;\r\n    transition: background-color 0.25s;\r\n    @include ut.breakpoint(xLarge) {\r\n      width: 90px;\r\n      height: 90px;\r\n    }\r\n    @include ut.breakpoint(large) {\r\n      width: 80px;\r\n      height: 80px;\r\n    }\r\n    @include ut.breakpoint(medium) {\r\n      width: 60px;\r\n      height: 60px;\r\n    }\r\n    @include ut.breakpoint(small) {\r\n      width: 45px;\r\n      height: 45px;\r\n    }\r\n  }\r\n}\r\n\r\n.backspace:active * {\r\n  @extend %backspaceActive;\r\n}\r\n\r\n.backspace:hover * {\r\n  @extend %backspaceHover;\r\n}\r\n","@use \"../utils/\" as ut;\r\n\r\n.bottom {\r\n  margin-top: 5px;\r\n  border-right: none;\r\n  border-bottom: none;\r\n  cursor: pointer;\r\n}\r\n\r\n.sectionOne,\r\n.sectionTwo,\r\n.sectionThree,\r\n.sectionFour,\r\n.sectionSix {\r\n  display: flex;\r\n  & > div {\r\n    padding: 20px;\r\n    text-align: center;\r\n    flex-grow: 1;\r\n    width: 43px;\r\n    border-right: 2px solid goldenrod;\r\n    border-bottom: 2px solid goldenrod;\r\n  }\r\n}\r\n\r\n// !\r\n%buttonActive {\r\n  background-color: rgb(238, 192, 150) !important;\r\n  opacity: 20%;\r\n}\r\n\r\n%buttonHover {\r\n  background-color: whitesmoke;\r\n  color: var(--background-color);\r\n}\r\n\r\n%buttonStyle {\r\n  background-color: rgb(128, 122, 122);\r\n  color: var(--number-background);\r\n  &:hover {\r\n    @extend %buttonHover;\r\n  }\r\n  &:active {\r\n    @extend %buttonActive;\r\n  }\r\n}\r\n\r\n.operator,\r\n.equal,\r\n.clear {\r\n  transition: background-color 0.25s;\r\n  @extend %buttonStyle;\r\n}\r\n\r\n.powerSquare {\r\n  background-color: rgb(128, 122, 122);\r\n  color: var(--number-background);\r\n  & > sup {\r\n    font-size: 2rem;\r\n    background-color: rgb(128, 122, 122);\r\n    color: var(--number-background);\r\n    @include ut.breakpoint(xLarge) {\r\n      font-size: 2rem;\r\n    }\r\n    @include ut.breakpoint(large) {\r\n      font-size: 1.5rem;\r\n    }\r\n    @include ut.breakpoint(medium) {\r\n      font-size: 1.2rem;\r\n    }\r\n  }\r\n  &:hover {\r\n    @extend %buttonHover;\r\n  }\r\n  &:active {\r\n    @extend %buttonActive;\r\n  }\r\n}\r\n\r\n// !\r\n\r\n.powerSquare:hover * {\r\n  @extend %buttonHover;\r\n}\r\n.powerSquare:active * {\r\n  @extend %buttonActive;\r\n}\r\n\r\n.numb {\r\n  background-color: var(--number-background);\r\n  color: var(--font-color);\r\n  transition: background-color 0.25s;\r\n  &:hover {\r\n    background-color: var(--background-color);\r\n    opacity: 80%;\r\n  }\r\n  &:active {\r\n    background-color: rgb(238, 192, 150);\r\n    opacity: 20%;\r\n  }\r\n}\r\n\r\n.flipSign {\r\n  background-color: var(--number-background);\r\n  color: var(--font-color);\r\n  transition: background-color 0.25s;\r\n  &:hover {\r\n    background-color: var(--background-color);\r\n    opacity: 80%;\r\n  }\r\n  &:active {\r\n    background-color: rgb(238, 192, 150);\r\n    opacity: 20%;\r\n  }\r\n  @include ut.breakpoint(medium) {\r\n    font-size: 1.2rem;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b0VBQWUsQ0FBQyxDQUFDO0VBQ2pCa0IsbUVBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNsQjtFQUNBRyxpRUFBVyxDQUFDLENBQUM7QUFDZjtBQUVBd0MsVUFBVSxDQUFDLENBQUM7O0FBRVo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdmpCQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTywrUUFBK1EsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sS0FBSyxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sS0FBSyxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sS0FBSyxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsT0FBTyxVQUFVLFVBQVUsTUFBTSxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sUUFBUSxXQUFXLFVBQVUsT0FBTyxR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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2FsY3VsYXRvci8uL3NyYy9Nb2R1bGUvQnV0dG9uL0JhY2tTcGFjZS5qcyIsIndlYnBhY2s6Ly9jYWxjdWxhdG9yLy4vc3JjL01vZHVsZS9CdXR0b24vQ2xlYXJCdXR0b24uanMiLCJ3ZWJwYWNrOi8vY2FsY3VsYXRvci8uL3NyYy9Nb2R1bGUvQnV0dG9uL0ZsaXBTaWduLmpzIiwid2VicGFjazovL2NhbGN1bGF0b3IvLi9zcmMvTW9kdWxlL0J1dHRvbi9Qb3dlci5qcyIsIndlYnBhY2s6Ly9jYWxjdWxhdG9yLy4vc3JjL01vZHVsZS9Db21wb25lbnRzL0NhbGN1bGF0ZVdpdGhPdXRFcXVhbC5qcyIsIndlYnBhY2s6Ly9jYWxjdWxhdG9yLy4vc3JjL01vZHVsZS9Db21wb25lbnRzL0VxdWFsQnV0dG9uLmpzIiwid2VicGFjazovL2NhbGN1bGF0b3IvLi9zcmMvTW9kdWxlL0NvbXBvbmVudHMvRXF1YWxCdXR0b25SZXNldC5qcyIsIndlYnBhY2s6Ly9jYWxjdWxhdG9yLy4vc3JjL01vZHVsZS9Db21wb25lbnRzL0ZpcnN0TnVtYmVyLmpzIiwid2VicGFjazovL2NhbGN1bGF0b3IvLi9zcmMvTW9kdWxlL0NvbXBvbmVudHMvT3BlcmF0b3JTZWxlY3QuanMiLCJ3ZWJwYWNrOi8vY2FsY3VsYXRvci8uL3NyYy9Nb2R1bGUvQ29tcG9uZW50cy9Sb3VuZEZsb2F0LmpzIiwid2VicGFjazovL2NhbGN1bGF0b3IvLi9zcmMvTW9kdWxlL0NvbXBvbmVudHMvU2Vjb25kTnVtYmVyLmpzIiwid2VicGFjazovL2NhbGN1bGF0b3IvLi9zcmMvTW9kdWxlL1NvdXJjZS9NYWluLmpzIiwid2VicGFjazovL2NhbGN1bGF0b3IvLi9zcmMvTW9kdWxlL1NvdXJjZS9TZWxlY3ROdW1iZXJzLmpzIiwid2VicGFjazovL2NhbGN1bGF0b3IvLi9zcmMvTW9kdWxlL1NvdXJjZS9TZWxlY3RPcGVyYXRvcnMuanMiLCJ3ZWJwYWNrOi8vY2FsY3VsYXRvci8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9jYWxjdWxhdG9yLy4vc3JjL3Nhc3Mvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9jYWxjdWxhdG9yLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9jYWxjdWxhdG9yLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vY2FsY3VsYXRvci8uL3NyYy9zYXNzL3N0eWxlLnNjc3M/NGQzNyIsIndlYnBhY2s6Ly9jYWxjdWxhdG9yLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2NhbGN1bGF0b3IvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2NhbGN1bGF0b3IvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vY2FsY3VsYXRvci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9jYWxjdWxhdG9yLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vY2FsY3VsYXRvci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZXJJbnB1dCwgY3VycmVudE51bWJlckRpc3BsYXkgfSBmcm9tIFwiLi4vU291cmNlL01haW5cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJhY2tTcGFjZUJ1dHRvbigpIHtcclxuICBjb25zdCBiYWNrc3BhY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJhY2tzcGFjZVwiKTtcclxuICBiYWNrc3BhY2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIHVzZXJJbnB1dC50ZXh0T25lID0gdXNlcklucHV0LnRleHRPbmUuc2xpY2UoMCwgLTEpO1xyXG4gICAgY3VycmVudE51bWJlckRpc3BsYXkudGV4dENvbnRlbnQgPSB1c2VySW5wdXQudGV4dE9uZTtcclxuICAgIGNvbnNvbGUubG9nKHVzZXJJbnB1dC50ZXh0T25lKTtcclxuICAgIGNvbnNvbGUubG9nKFwiYmFja1NwYWNlXCIpO1xyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgdXNlcklucHV0LFxyXG4gIGN1cnJlbnROdW1iZXJEaXNwbGF5LFxyXG4gIHByZXZpb3VzTnVtYmVyRGlzcGxheSxcclxufSBmcm9tIFwiLi4vU291cmNlL01haW5cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENsZWFyQnV0dG9uKCkge1xyXG4gIGNvbnN0IGNsZWFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbGVhclwiKTtcclxuXHJcbiAgY2xlYXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGNvbnNvbGUuY2xlYXIoKTtcclxuICAgIGNvbnNvbGUubG9nKFwiQ0xFQVJFRFwiKTtcclxuICAgIHVzZXJJbnB1dC50ZXh0T25lID0gXCJcIjtcclxuICAgIHVzZXJJbnB1dC50ZXh0VHdvID0gXCJcIjtcclxuICAgIHVzZXJJbnB1dC5zaWduID0gXCJcIjtcclxuXHJcbiAgICBjdXJyZW50TnVtYmVyRGlzcGxheS50ZXh0Q29udGVudCA9IDA7XHJcbiAgICBwcmV2aW91c051bWJlckRpc3BsYXkudGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gICAgdXNlcklucHV0LnJlc3VsdCA9IFwiXCI7XHJcbiAgICB1c2VySW5wdXQuaXNTaWduID0gZmFsc2U7XHJcbiAgICB1c2VySW5wdXQuaXNFcXVhbCA9IGZhbHNlO1xyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCB7IHVzZXJJbnB1dCwgY3VycmVudE51bWJlckRpc3BsYXkgfSBmcm9tIFwiLi4vU291cmNlL01haW5cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZsaXBTaWduQnV0dG9uKCkge1xyXG4gIGNvbnN0IGZsaXBTaWduID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mbGlwU2lnblwiKTtcclxuICBmbGlwU2lnbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJmbGlwcGVkXCIpO1xyXG4gICAgaWYgKHVzZXJJbnB1dC50ZXh0T25lID4gMCkge1xyXG4gICAgICBpZiAodXNlcklucHV0LnJlc3VsdCAhPT0gMCkge1xyXG4gICAgICAgIC8vIGZsaXAgbnVtYmVyIGFmdGVyIHByZXNzaW5nIEVxdWFsQnV0dG9uXHJcbiAgICAgICAgdXNlcklucHV0LnJlc3VsdCA9IC1jdXJyZW50TnVtYmVyRGlzcGxheS50ZXh0Q29udGVudDtcclxuICAgICAgfVxyXG4gICAgICB1c2VySW5wdXQudGV4dE9uZSA9IC1jdXJyZW50TnVtYmVyRGlzcGxheS50ZXh0Q29udGVudDtcclxuICAgICAgY3VycmVudE51bWJlckRpc3BsYXkudGV4dENvbnRlbnQgPSB1c2VySW5wdXQudGV4dE9uZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICh1c2VySW5wdXQucmVzdWx0ICE9PSAwKSB7XHJcbiAgICAgICAgLy8gZmxpcCBudW1iZXIgYWZ0ZXIgcHJlc3NpbmcgRXF1YWxCdXR0b25cclxuICAgICAgICB1c2VySW5wdXQucmVzdWx0ID0gLWN1cnJlbnROdW1iZXJEaXNwbGF5LnRleHRDb250ZW50O1xyXG4gICAgICB9XHJcbiAgICAgIHVzZXJJbnB1dC50ZXh0T25lID0gLWN1cnJlbnROdW1iZXJEaXNwbGF5LnRleHRDb250ZW50O1xyXG4gICAgICBjdXJyZW50TnVtYmVyRGlzcGxheS50ZXh0Q29udGVudCA9IHVzZXJJbnB1dC50ZXh0T25lO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgdXNlcklucHV0LFxyXG4gIHByZXZpb3VzTnVtYmVyRGlzcGxheSxcclxuICBjdXJyZW50TnVtYmVyRGlzcGxheSxcclxufSBmcm9tIFwiLi4vU291cmNlL01haW5cIjtcclxuaW1wb3J0IFJvdW5kRmxvYXQgZnJvbSBcIi4uL0NvbXBvbmVudHMvUm91bmRGbG9hdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG93ZXJCdXR0b24oKSB7XHJcbiAgY29uc3QgcG93ZXJTcXVhcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvd2VyU3F1YXJlXCIpO1xyXG4gIHBvd2VyU3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAvLyBjdXJyZW50TnVtYmVyRGlzcGxheS5zdHlsZS5tYXJnaW5Ub3AgPSBcIjM1cHhcIjtcclxuICAgIGlmICh1c2VySW5wdXQucmVzdWx0KSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiRWxzZSBub3QgaGVsbG9cIik7XHJcbiAgICAgIHVzZXJJbnB1dC5yZXN1bHQgKj0gdXNlcklucHV0LnJlc3VsdDtcclxuXHJcbiAgICAgIC8vIGlmIHJlc3VsdC5sZW5ndGggPiAxMlxyXG4gICAgICB1c2VySW5wdXQucmVzdWx0ID0gUm91bmRGbG9hdCh1c2VySW5wdXQucmVzdWx0KTsgLy8gcm91bmRzIHRoZSB2YWx1ZSB0byA1IHBvaW50XHJcblxyXG4gICAgICBjdXJyZW50TnVtYmVyRGlzcGxheS50ZXh0Q29udGVudCA9IHVzZXJJbnB1dC5yZXN1bHQ7XHJcbiAgICAgIHByZXZpb3VzTnVtYmVyRGlzcGxheS50ZXh0Q29udGVudCA9IGBTcXIoJHt1c2VySW5wdXQucmVzdWx0fSlgO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhgUG93ZXIgUmVzdWx0IFR3byR7cmVzdWx0fWApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdXNlcklucHV0LnJlc3VsdCA9IHVzZXJJbnB1dC50ZXh0T25lICogdXNlcklucHV0LnRleHRPbmU7XHJcblxyXG4gICAgICAvLyBpZiByZXN1bHQubGVuZ3RoID4gMTJcclxuICAgICAgdXNlcklucHV0LnJlc3VsdCA9IFJvdW5kRmxvYXQodXNlcklucHV0LnJlc3VsdCk7IC8vIHJvdW5kcyB0aGUgdmFsdWUgdG8gNSBwb2ludFxyXG5cclxuICAgICAgY3VycmVudE51bWJlckRpc3BsYXkudGV4dENvbnRlbnQgPSB1c2VySW5wdXQucmVzdWx0O1xyXG4gICAgICBwcmV2aW91c051bWJlckRpc3BsYXkudGV4dENvbnRlbnQgPSBgU3FyKCR7dXNlcklucHV0LnRleHRPbmV9KWA7XHJcbiAgICAgIHVzZXJJbnB1dC50ZXh0T25lID0gdXNlcklucHV0LnJlc3VsdDtcclxuICAgICAgLy8gY29uc29sZS5sb2codGV4dE9uZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXNlcklucHV0LmlzU2lnbiA9IGZhbHNlO1xyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgdXNlcklucHV0LFxyXG4gIHByZXZpb3VzTnVtYmVyRGlzcGxheSxcclxuICBjdXJyZW50TnVtYmVyRGlzcGxheSxcclxufSBmcm9tIFwiLi4vU291cmNlL01haW5cIjtcclxuaW1wb3J0IFJvdW5kRmxvYXQgZnJvbSBcIi4vUm91bmRGbG9hdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FsY3VsYXRlV2l0aE91dEVxdWFsKGUpIHtcclxuICAvLyEgXCItLS0tLS0tLS0tQ2FsY3VsYXRlV2l0aE91dEVxdWFsLS0tLS0tLS0tLS0tXCJcclxuICAvLyBpc0VxdWFsID0gZmFsc2U7XHJcbiAgLy8gdGV4dE9uZSA9IHRleHRUd287XHJcbiAgLy8gY29uc29sZS5sb2coaXNTaWduKTtcclxuICAvLyBjb25zb2xlLmxvZyhpc0VxdWFsKTtcclxuICAvLyBjb25zb2xlLmxvZyh0ZXh0T25lKTtcclxuICAvLyBjb25zb2xlLmxvZyh0ZXh0VHdvKTtcclxuICAvLyBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gIC8vIGNvbnNvbGUubG9nKHNpZ24pO1xyXG5cclxuICBmdW5jdGlvbiBhZGROdW1XaXRob3V0RXF1YWwoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS1DYWxjdWxhdGVXaXRoT3V0RXF1YWwtLS0tLS0tLS0tLS1cIik7XHJcbiAgICBjb25zb2xlLmxvZyhgICBBZGphY2VudCBBZGRpbmcgV2l0aG91dCBFcXVhbEJ1dHRvbmApO1xyXG4gICAgdXNlcklucHV0LnJlc3VsdCA9XHJcbiAgICAgIHBhcnNlRmxvYXQodXNlcklucHV0LnRleHRUd28pICsgcGFyc2VGbG9hdCh1c2VySW5wdXQudGV4dE9uZSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh1c2VySW5wdXQudGV4dE9uZSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh1c2VySW5wdXQudGV4dFR3byk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh1c2VySW5wdXQucmVzdWx0KTtcclxuICAgIHVzZXJJbnB1dC50ZXh0VHdvID0gdXNlcklucHV0LnJlc3VsdDtcclxuXHJcbiAgICB1c2VySW5wdXQuc2lnbiA9IGUudGFyZ2V0LnRleHRDb250ZW50O1xyXG4gICAgcHJldmlvdXNOdW1iZXJEaXNwbGF5LnRleHRDb250ZW50ID0gYCAke3VzZXJJbnB1dC50ZXh0VHdvfSAke3VzZXJJbnB1dC5zaWdufSBgO1xyXG4gICAgY3VycmVudE51bWJlckRpc3BsYXkudGV4dENvbnRlbnQgPSAwO1xyXG4gICAgLy8gY29uc29sZS5sb2coYFRoaXMgaXMgcmVzdWx0ICR7cmVzdWx0fWApO1xyXG4gICAgdXNlcklucHV0LnRleHRPbmUgPSBcIlwiO1xyXG4gICAgdXNlcklucHV0LnJlc3VsdCA9IFwiXCI7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh0ZXh0T25lKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHRleHRUd28pO1xyXG4gICAgLy8gY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHNpZ24pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc3VidHJhY3ROdW1XaXRob3V0RXF1YWwoKSB7XHJcbiAgICAvLyB1c2VySW5wdXQuaXNTaWduID0gZmFsc2U7XHJcblxyXG4gICAgY29uc29sZS5sb2coYCAgQWRqYWNlbnQgU3VidHJhY3RpbmcgV2l0aG91dCBFcXVhbEJ1dHRvbmApO1xyXG4gICAgdXNlcklucHV0LnJlc3VsdCA9XHJcbiAgICAgIHBhcnNlRmxvYXQodXNlcklucHV0LnRleHRUd28pIC0gcGFyc2VGbG9hdCh1c2VySW5wdXQudGV4dE9uZSk7XHJcbiAgICB1c2VySW5wdXQudGV4dFR3byA9IHVzZXJJbnB1dC5yZXN1bHQ7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh1c2VySW5wdXQudGV4dFR3byk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh1c2VySW5wdXQucmVzdWx0KTtcclxuXHJcbiAgICB1c2VySW5wdXQuc2lnbiA9IGUudGFyZ2V0LnRleHRDb250ZW50O1xyXG4gICAgcHJldmlvdXNOdW1iZXJEaXNwbGF5LnRleHRDb250ZW50ID0gYCAke3VzZXJJbnB1dC50ZXh0VHdvfSAke3VzZXJJbnB1dC5zaWdufSBgO1xyXG4gICAgY3VycmVudE51bWJlckRpc3BsYXkudGV4dENvbnRlbnQgPSAwO1xyXG4gICAgLy8gY29uc29sZS5sb2coYFRoaXMgaXMgcmVzdWx0ICR7cmVzdWx0fWApO1xyXG4gICAgdXNlcklucHV0LnRleHRPbmUgPSBcIlwiO1xyXG4gICAgdXNlcklucHV0LnJlc3VsdCA9IFwiXCI7XHJcbiAgICBjb25zb2xlLmxvZyh1c2VySW5wdXQudGV4dE9uZSk7XHJcbiAgICBjb25zb2xlLmxvZyh1c2VySW5wdXQudGV4dFR3byk7XHJcbiAgICBjb25zb2xlLmxvZyh1c2VySW5wdXQucmVzdWx0KTtcclxuICAgIGNvbnNvbGUubG9nKHVzZXJJbnB1dC5zaWduKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG11bHRpcGxlTnVtV2l0aG91dEVxdWFsKCkge1xyXG4gICAgY29uc29sZS5sb2coYCAgQWRqYWNlbnQgTXVsdGlwbHlpbmcgV2l0aG91dCBFcXVhbEJ1dHRvbmApO1xyXG4gICAgdXNlcklucHV0LnJlc3VsdCA9XHJcbiAgICAgIHBhcnNlRmxvYXQodXNlcklucHV0LnRleHRUd28pICogcGFyc2VGbG9hdCh1c2VySW5wdXQudGV4dE9uZSk7XHJcbiAgICB1c2VySW5wdXQudGV4dFR3byA9IHVzZXJJbnB1dC5yZXN1bHQ7XHJcbiAgICB1c2VySW5wdXQuc2lnbiA9IGUudGFyZ2V0LnRleHRDb250ZW50O1xyXG4gICAgcHJldmlvdXNOdW1iZXJEaXNwbGF5LnRleHRDb250ZW50ID0gYCAke3VzZXJJbnB1dC5yZXN1bHR9ICR7dXNlcklucHV0LnNpZ259IGA7XHJcbiAgICBjdXJyZW50TnVtYmVyRGlzcGxheS50ZXh0Q29udGVudCA9IDA7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhgVGhpcyBpcyByZXN1bHQgJHtyZXN1bHR9YCk7XHJcbiAgICB1c2VySW5wdXQudGV4dE9uZSA9IFwiXCI7XHJcbiAgICB1c2VySW5wdXQucmVzdWx0ID0gXCJcIjtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGRpdmlkZU51bVdpdGhvdXRFcXVhbCgpIHtcclxuICAgIGlmICh1c2VySW5wdXQudGV4dE9uZSA9PT0gXCIwXCIpIHtcclxuICAgICAgcHJldmlvdXNOdW1iZXJEaXNwbGF5LnRleHRDb250ZW50ID0gYCR7dXNlcklucHV0LnRleHRUd299IC8gJHt1c2VySW5wdXQudGV4dE9uZX1gO1xyXG4gICAgICBjdXJyZW50TnVtYmVyRGlzcGxheS50ZXh0Q29udGVudCA9IFwiRXJyb3IsIENhbm5vdCBkaXZpZGUgYnkgMFwiO1xyXG4gICAgICB1c2VySW5wdXQudGV4dE9uZSA9IFwiXCI7XHJcbiAgICAgIHVzZXJJbnB1dC50ZXh0VHdvID0gXCJcIjtcclxuICAgICAgdXNlcklucHV0LnJlc3VsdCA9IFwiXCI7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiQ2Fubm90IGRpdmlkZSBieSAwXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coYCAgQWRqYWNlbnQgRGl2aWRpbmcgV2l0aG91dCBFcXVhbEJ1dHRvbiBgKTtcclxuICAgICAgdXNlcklucHV0LnJlc3VsdCA9XHJcbiAgICAgICAgcGFyc2VGbG9hdCh1c2VySW5wdXQudGV4dFR3bykgLyBwYXJzZUZsb2F0KHVzZXJJbnB1dC50ZXh0T25lKTtcclxuICAgICAgLy8gaWYgcmVzdWx0Lmxlbmd0aCA+IDEyIGNhbGwgUm91bmRGbG9hdCwgZWxzZSByZXR1cm4gc2NvcmVcclxuICAgICAgdXNlcklucHV0LnJlc3VsdCA9IFJvdW5kRmxvYXQodXNlcklucHV0LnJlc3VsdCk7IC8vIHJvdW5kcyB0aGUgdmFsdWUgdG8gNSBwb2ludFxyXG4gICAgICB1c2VySW5wdXQudGV4dFR3byA9IHVzZXJJbnB1dC5yZXN1bHQ7XHJcbiAgICAgIHVzZXJJbnB1dC5zaWduID0gZS50YXJnZXQudGV4dENvbnRlbnQ7XHJcbiAgICAgIHByZXZpb3VzTnVtYmVyRGlzcGxheS50ZXh0Q29udGVudCA9IGAgJHt1c2VySW5wdXQucmVzdWx0fSAke3VzZXJJbnB1dC5zaWdufSBgO1xyXG4gICAgICBjdXJyZW50TnVtYmVyRGlzcGxheS50ZXh0Q29udGVudCA9IDA7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGBUaGlzIGlzIHJlc3VsdCAke3Jlc3VsdH1gKTtcclxuICAgICAgdXNlcklucHV0LnRleHRPbmUgPSBcIlwiO1xyXG4gICAgICB1c2VySW5wdXQucmVzdWx0ID0gXCJcIjtcclxuICAgICAgLy8gY29uc29sZS5sb2codGV4dE9uZSk7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRleHRUd28pO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhzaWduKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHBlcmNlbnRhZ2VOdW1XaXRob3V0RXF1YWwoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhgICBBZGphY2VudCBEaXZpZGluZyBXaXRob3V0IEVxdWFsQnV0dG9uIGApO1xyXG4gICAgdXNlcklucHV0LnJlc3VsdCA9XHJcbiAgICAgIChwYXJzZUZsb2F0KHVzZXJJbnB1dC50ZXh0VHdvKSAvIDEwMCkgKiBwYXJzZUZsb2F0KHVzZXJJbnB1dC50ZXh0T25lKTtcclxuICAgIC8vIGlmIHJlc3VsdC5sZW5ndGggPiAxMiBjYWxsIFJvdW5kRmxvYXQsIGVsc2UgcmV0dXJuIHNjb3JlXHJcbiAgICB1c2VySW5wdXQucmVzdWx0ID0gUm91bmRGbG9hdCh1c2VySW5wdXQucmVzdWx0KTsgLy8gcm91bmRzIHRoZSB2YWx1ZSB0byA1IHBvaW50XHJcbiAgICB1c2VySW5wdXQudGV4dFR3byA9IHVzZXJJbnB1dC5yZXN1bHQ7XHJcbiAgICB1c2VySW5wdXQuc2lnbiA9IGUudGFyZ2V0LnRleHRDb250ZW50O1xyXG4gICAgcHJldmlvdXNOdW1iZXJEaXNwbGF5LnRleHRDb250ZW50ID0gYCAke3VzZXJJbnB1dC5yZXN1bHR9ICR7dXNlcklucHV0LnNpZ259IGA7XHJcbiAgICBjdXJyZW50TnVtYmVyRGlzcGxheS50ZXh0Q29udGVudCA9IDA7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhgVGhpcyBpcyByZXN1bHQgJHtyZXN1bHR9YCk7XHJcbiAgICB1c2VySW5wdXQudGV4dE9uZSA9IFwiXCI7XHJcbiAgICB1c2VySW5wdXQucmVzdWx0ID0gXCJcIjtcclxuICAgIC8vIGNvbnNvbGUubG9nKHRleHRPbmUpO1xyXG4gICAgLy8gY29uc29sZS5sb2codGV4dFR3byk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgLy8gY29uc29sZS5sb2coc2lnbik7XHJcbiAgfVxyXG5cclxuICBpZiAoXHJcbiAgICB1c2VySW5wdXQuc2lnbiA9PT0gXCIrXCIgJiZcclxuICAgIHVzZXJJbnB1dC50ZXh0T25lICE9PSBcIlwiICYmXHJcbiAgICB1c2VySW5wdXQuaXNFcXVhbCA9PT0gZmFsc2VcclxuICApIHtcclxuICAgIGFkZE51bVdpdGhvdXRFcXVhbChlKTtcclxuICB9IGVsc2UgaWYgKFxyXG4gICAgdXNlcklucHV0LnNpZ24gPT09IFwiLVwiICYmXHJcbiAgICB1c2VySW5wdXQudGV4dE9uZSAhPT0gXCJcIiAmJlxyXG4gICAgdXNlcklucHV0LmlzRXF1YWwgPT09IGZhbHNlXHJcbiAgKSB7XHJcbiAgICBzdWJ0cmFjdE51bVdpdGhvdXRFcXVhbChlKTtcclxuICB9IGVsc2UgaWYgKFxyXG4gICAgdXNlcklucHV0LnNpZ24gPT09IFwiKlwiICYmXHJcbiAgICB1c2VySW5wdXQudGV4dE9uZSAhPT0gXCJcIiAmJlxyXG4gICAgdXNlcklucHV0LmlzRXF1YWwgPT09IGZhbHNlXHJcbiAgKSB7XHJcbiAgICBtdWx0aXBsZU51bVdpdGhvdXRFcXVhbChlKTtcclxuICB9IGVsc2UgaWYgKFxyXG4gICAgdXNlcklucHV0LnNpZ24gPT09IFwiL1wiICYmXHJcbiAgICB1c2VySW5wdXQudGV4dE9uZSAhPT0gXCJcIiAmJlxyXG4gICAgdXNlcklucHV0LmlzRXF1YWwgPT09IGZhbHNlXHJcbiAgKSB7XHJcbiAgICBkaXZpZGVOdW1XaXRob3V0RXF1YWwoZSk7XHJcbiAgfSBlbHNlIGlmIChcclxuICAgIHVzZXJJbnB1dC5zaWduID09PSBcIiVcIiAmJlxyXG4gICAgdXNlcklucHV0LnRleHRPbmUgIT09IFwiXCIgJiZcclxuICAgIHVzZXJJbnB1dC5pc0VxdWFsID09PSBmYWxzZVxyXG4gICkge1xyXG4gICAgcGVyY2VudGFnZU51bVdpdGhvdXRFcXVhbChlKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICB1c2VySW5wdXQsXHJcbiAgcHJldmlvdXNOdW1iZXJEaXNwbGF5LFxyXG4gIGN1cnJlbnROdW1iZXJEaXNwbGF5LFxyXG59IGZyb20gXCIuLi9Tb3VyY2UvTWFpblwiO1xyXG5pbXBvcnQgU2VsZWN0T3BlcmF0b3JzIGZyb20gXCIuLi9Tb3VyY2UvU2VsZWN0T3BlcmF0b3JzXCI7XHJcbmltcG9ydCBTZWxlY3ROdW1iZXJzIGZyb20gXCIuLi9Tb3VyY2UvU2VsZWN0TnVtYmVyc1wiO1xyXG5pbXBvcnQgRXF1YWxCdXR0b25SZXNldCBmcm9tIFwiLi9FcXVhbEJ1dHRvblJlc2V0XCI7XHJcbmltcG9ydCBSb3VuZEZsb2F0IGZyb20gXCIuL1JvdW5kRmxvYXRcIjtcclxuXHJcbmNvbnN0IGVxdWFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lcXVhbFwiKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVxdWFsQnV0dG9uKCkge1xyXG4gIGNvbnN0IGFkZE51bSA9ICgpID0+IHtcclxuICAgIHVzZXJJbnB1dC5yZXN1bHQgPVxyXG4gICAgICBwYXJzZUZsb2F0KHVzZXJJbnB1dC50ZXh0T25lKSArIHBhcnNlRmxvYXQodXNlcklucHV0LnRleHRUd28pOyAvLyArdGV4dFR3byBjb252ZXJ0cyBhIHN0cmluZyB0byBhIG51bWJlclxyXG4gICAgcHJldmlvdXNOdW1iZXJEaXNwbGF5LnRleHRDb250ZW50ID0gYCR7dXNlcklucHV0LnRleHRUd299ICsgJHt1c2VySW5wdXQudGV4dE9uZX0gYDtcclxuICAgIGN1cnJlbnROdW1iZXJEaXNwbGF5LnRleHRDb250ZW50ID0gdXNlcklucHV0LnJlc3VsdDtcclxuICAgIHVzZXJJbnB1dC50ZXh0VHdvID0gdXNlcklucHV0LnJlc3VsdDtcclxuICAgIHVzZXJJbnB1dC50ZXh0T25lID0gXCJcIjsgLy8gZXJhc2UgdGhlIHJlc3VsdCB2YWx1ZSBmcm9tIHRleHQgc28gdGhhdCB3ZSBjYW4gY29udGludW91c2x5IGFkZCBudW1iZXJcclxuICB9O1xyXG5cclxuICBjb25zdCBzdWJ0cmFjdE51bSA9ICgpID0+IHtcclxuICAgIHVzZXJJbnB1dC5yZXN1bHQgPVxyXG4gICAgICBwYXJzZUZsb2F0KHVzZXJJbnB1dC50ZXh0VHdvKSAtIHBhcnNlRmxvYXQodXNlcklucHV0LnRleHRPbmUpOyAvLyArdGV4dFR3byBjb252ZXJ0cyBhIHN0cmluZyB0byBhIG51bWJlclxyXG4gICAgcHJldmlvdXNOdW1iZXJEaXNwbGF5LnRleHRDb250ZW50ID0gYCR7dXNlcklucHV0LnRleHRUd299IC0gJHt1c2VySW5wdXQudGV4dE9uZX0gYDtcclxuICAgIGN1cnJlbnROdW1iZXJEaXNwbGF5LnRleHRDb250ZW50ID0gdXNlcklucHV0LnJlc3VsdDtcclxuICAgIHVzZXJJbnB1dC50ZXh0VHdvID0gdXNlcklucHV0LnJlc3VsdDtcclxuICAgIHVzZXJJbnB1dC50ZXh0T25lID0gXCJcIjsgLy8gZXJhc2UgdGhlIHJlc3VsdCB2YWx1ZSBmcm9tIHRleHQgc28gdGhhdCB3ZSBjYW4gY29udGludW91c2x5IGFkZCBudW1iZXJcclxuICB9O1xyXG5cclxuICBjb25zdCBtdWx0aXBsZU51bSA9ICgpID0+IHtcclxuICAgIHVzZXJJbnB1dC5yZXN1bHQgPVxyXG4gICAgICBwYXJzZUZsb2F0KHVzZXJJbnB1dC50ZXh0T25lKSAqIHBhcnNlRmxvYXQodXNlcklucHV0LnRleHRUd28pOyAvLyArdGV4dFR3byBjb252ZXJ0cyBhIHN0cmluZyB0byBhIG51bWJlclxyXG4gICAgcHJldmlvdXNOdW1iZXJEaXNwbGF5LnRleHRDb250ZW50ID0gYCR7dXNlcklucHV0LnRleHRUd299ICogJHt1c2VySW5wdXQudGV4dE9uZX0gYDtcclxuICAgIGN1cnJlbnROdW1iZXJEaXNwbGF5LnRleHRDb250ZW50ID0gdXNlcklucHV0LnJlc3VsdDtcclxuICAgIC8vICAgY3VycmVudE51bWJlckRpc3BsYXkuc3R5bGUubWFyZ2luVG9wID0gXCI1MHB4XCI7XHJcbiAgICB1c2VySW5wdXQudGV4dE9uZSA9IFwiXCI7XHJcbiAgICB1c2VySW5wdXQudGV4dFR3byA9IFwiXCI7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZGl2aWRlTnVtID0gKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJEaXZpZGUgTnVtYmVyXCIpO1xyXG4gICAgaWYgKHVzZXJJbnB1dC50ZXh0T25lID09PSBcIjBcIikge1xyXG4gICAgICBwcmV2aW91c051bWJlckRpc3BsYXkudGV4dENvbnRlbnQgPSBgJHt1c2VySW5wdXQudGV4dFR3b30gLyAke3VzZXJJbnB1dC50ZXh0T25lfWA7XHJcbiAgICAgIGN1cnJlbnROdW1iZXJEaXNwbGF5LnRleHRDb250ZW50ID0gXCJFcnJvclwiO1xyXG4gICAgICB1c2VySW5wdXQudGV4dE9uZSA9IFwiXCI7XHJcbiAgICAgIHVzZXJJbnB1dC50ZXh0VHdvID0gXCJcIjtcclxuICAgICAgY29uc29sZS5sb2coXCJDYW5ub3QgZGl2aWRlIGJ5IDBcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB1c2VySW5wdXQucmVzdWx0ID1cclxuICAgICAgICBwYXJzZUZsb2F0KHVzZXJJbnB1dC50ZXh0VHdvKSAvIHBhcnNlRmxvYXQodXNlcklucHV0LnRleHRPbmUpOyAvLyArdGV4dFR3byBjb252ZXJ0cyBhIHN0cmluZyB0byBhIG51bWJlclxyXG4gICAgICAvLyBpZiByZXN1bHQubGVuZ3RoID4gMTIgY2FsbCBSb3VuZEZsb2F0LCBlbHNlIHJldHVybiBzY29yZVxyXG4gICAgICB1c2VySW5wdXQucmVzdWx0ID0gUm91bmRGbG9hdCh1c2VySW5wdXQucmVzdWx0KTtcclxuICAgICAgcHJldmlvdXNOdW1iZXJEaXNwbGF5LnRleHRDb250ZW50ID0gYCR7dXNlcklucHV0LnRleHRUd299IC8gJHt1c2VySW5wdXQudGV4dE9uZX1gO1xyXG4gICAgICBjdXJyZW50TnVtYmVyRGlzcGxheS50ZXh0Q29udGVudCA9IHVzZXJJbnB1dC5yZXN1bHQ7XHJcbiAgICAgIHVzZXJJbnB1dC50ZXh0T25lID0gXCJcIjtcclxuICAgICAgdXNlcklucHV0LnRleHRUd28gPSBcIlwiO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIm5vcm1hbCBudW1iZXJcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcGVyY2VudGFnZU51bSA9ICgpID0+IHtcclxuICAgIHVzZXJJbnB1dC5yZXN1bHQgPSAodXNlcklucHV0LnRleHRUd28gLyAxMDApICogdXNlcklucHV0LnRleHRPbmU7XHJcbiAgICAvLyBpZiByZXN1bHQubGVuZ3RoID4gMTIgY2FsbCBSb3VuZEZsb2F0LCBlbHNlIHJldHVybiBzY29yZVxyXG4gICAgdXNlcklucHV0LnJlc3VsdCA9IFJvdW5kRmxvYXQodXNlcklucHV0LnJlc3VsdCk7XHJcbiAgICBwcmV2aW91c051bWJlckRpc3BsYXkudGV4dENvbnRlbnQgPSBgJHt1c2VySW5wdXQudGV4dFR3b30gJSAke3VzZXJJbnB1dC50ZXh0T25lfWA7XHJcbiAgICBjdXJyZW50TnVtYmVyRGlzcGxheS50ZXh0Q29udGVudCA9IHVzZXJJbnB1dC5yZXN1bHQ7XHJcbiAgICBjb25zb2xlLmxvZyhgVGhpcyBpcyBQZXJjZW50YWdlICR7dXNlcklucHV0LnJlc3VsdH1gKTtcclxuICAgIHVzZXJJbnB1dC50ZXh0T25lID0gXCJcIjtcclxuICAgIHVzZXJJbnB1dC50ZXh0VHdvID0gXCJcIjtcclxuICB9O1xyXG5cclxuICBlcXVhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgdXNlcklucHV0LmlzRXF1YWwgPSB0cnVlO1xyXG4gICAgY29uc29sZS5sb2codXNlcklucHV0LmlzRXF1YWwpO1xyXG4gICAgaWYgKFxyXG4gICAgICB1c2VySW5wdXQuc2lnbiA9PT0gXCIrXCIgJiZcclxuICAgICAgdXNlcklucHV0LnRleHRPbmUgIT09IFwiXCIgJiZcclxuICAgICAgdXNlcklucHV0LmlzRXF1YWwgPT09IHRydWVcclxuICAgICkge1xyXG4gICAgICBhZGROdW0oKTtcclxuICAgIH1cclxuICAgIGlmIChcclxuICAgICAgdXNlcklucHV0LnNpZ24gPT09IFwiKlwiICYmXHJcbiAgICAgIHVzZXJJbnB1dC50ZXh0T25lICE9PSBcIlwiICYmXHJcbiAgICAgIHVzZXJJbnB1dC5pc0VxdWFsID09PSB0cnVlXHJcbiAgICApIHtcclxuICAgICAgbXVsdGlwbGVOdW0oKTtcclxuICAgIH1cclxuICAgIGlmIChcclxuICAgICAgdXNlcklucHV0LnNpZ24gPT09IFwiLVwiICYmXHJcbiAgICAgIHVzZXJJbnB1dC50ZXh0T25lICE9PSBcIlwiICYmXHJcbiAgICAgIHVzZXJJbnB1dC5pc0VxdWFsID09PSB0cnVlXHJcbiAgICApIHtcclxuICAgICAgc3VidHJhY3ROdW0oKTtcclxuICAgIH1cclxuICAgIGlmIChcclxuICAgICAgdXNlcklucHV0LnNpZ24gPT09IFwiL1wiICYmXHJcbiAgICAgIHVzZXJJbnB1dC50ZXh0T25lICE9PSBcIlwiICYmXHJcbiAgICAgIHVzZXJJbnB1dC5pc0VxdWFsID09PSB0cnVlXHJcbiAgICApIHtcclxuICAgICAgZGl2aWRlTnVtKCk7XHJcbiAgICB9XHJcbiAgICBpZiAoXHJcbiAgICAgIHVzZXJJbnB1dC5zaWduID09PSBcIiVcIiAmJlxyXG4gICAgICB1c2VySW5wdXQudGV4dE9uZSAhPT0gXCJcIiAmJlxyXG4gICAgICB1c2VySW5wdXQuaXNFcXVhbCA9PT0gdHJ1ZVxyXG4gICAgKSB7XHJcbiAgICAgIHBlcmNlbnRhZ2VOdW0oKTtcclxuICAgIH1cclxuICAgIHVzZXJJbnB1dC5pc1NpZ24gPSBmYWxzZTtcclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZyh0ZXh0T25lKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHRleHRUd28pO1xyXG4gICAgLy8gY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHNpZ24pO1xyXG4gICAgLy8gY29uc29sZS5sb2coaXNFcXVhbCk7XHJcblxyXG4gICAgLy8gQ29udGludW91cyBDYWxjdWxhdGluZ1xyXG4gICAgLy8gU2VsZWN0T3BlcmF0b3JzKHNlY29uZE51bWJlcik7XHJcblxyXG4gICAgLy8gUmVzZXQgQ2FsY3VsYXRpb25cclxuICAgIFNlbGVjdE51bWJlcnMoRXF1YWxCdXR0b25SZXNldCk7IC8vIFJlc2V0IHRoZSByZXN1bHQsIGlmIFVzZXIgU2VsZWN0IGFuIG51bWJlciBhZnRlciBwcmVzc2luZyBlcXVhbEJ1dHRvblxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgdXNlcklucHV0LFxyXG4gIHByZXZpb3VzTnVtYmVyRGlzcGxheSxcclxuICBjdXJyZW50TnVtYmVyRGlzcGxheSxcclxufSBmcm9tIFwiLi4vU291cmNlL01haW5cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVxdWFsQnV0dG9uUmVzZXQoZSkge1xyXG4gIGlmICh1c2VySW5wdXQuaXNFcXVhbCA9PT0gdHJ1ZSkge1xyXG4gICAgY29uc29sZS5jbGVhcigpO1xyXG4gICAgY29uc29sZS5sb2coXCJDTEVBUkVEXCIpO1xyXG4gICAgdXNlcklucHV0LnRleHRPbmUgPSBcIlwiO1xyXG4gICAgdXNlcklucHV0LnRleHRUd28gPSBcIlwiO1xyXG4gICAgcHJldmlvdXNOdW1iZXJEaXNwbGF5LnRleHRDb250ZW50ID0gXCJcIjtcclxuICAgIHVzZXJJbnB1dC5yZXN1bHQgPSBcIlwiO1xyXG4gICAgdXNlcklucHV0LnNpZ24gPSBcIlwiO1xyXG4gICAgdXNlcklucHV0LmlzU2lnbiA9IGZhbHNlO1xyXG4gICAgdXNlcklucHV0LmlzRXF1YWwgPSBmYWxzZTtcclxuICAgIHVzZXJJbnB1dC50ZXh0T25lID0gZS50YXJnZXQudGV4dENvbnRlbnQ7XHJcbiAgICBjb25zb2xlLmxvZyh1c2VySW5wdXQudGV4dE9uZSk7XHJcbiAgICBjb25zb2xlLmxvZyh1c2VySW5wdXQuaXNFcXVhbCk7XHJcbiAgICBjdXJyZW50TnVtYmVyRGlzcGxheS50ZXh0Q29udGVudCA9IHVzZXJJbnB1dC50ZXh0T25lO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBjdXJyZW50TnVtYmVyRGlzcGxheSwgdXNlcklucHV0IH0gZnJvbSBcIi4uL1NvdXJjZS9NYWluXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGaXJzdE51bWJlcihlKSB7XHJcbiAgaWYgKHVzZXJJbnB1dC50ZXh0T25lLmxlbmd0aCA8IDEzKSB7XHJcbiAgICB1c2VySW5wdXQudGV4dE9uZSArPSBlLnRhcmdldC50ZXh0Q29udGVudDsgLy8gKz0gZm9yIHdyaXRpbmcgbnVtYmVyIGFkamFjZW50XHJcbiAgICBjdXJyZW50TnVtYmVyRGlzcGxheS50ZXh0Q29udGVudCA9IHVzZXJJbnB1dC50ZXh0T25lO1xyXG4gICAgLy8gdXNlcklucHV0LmlzU2lnbiA9IGZhbHNlO1xyXG4gICAgY29uc29sZS5jbGVhcigpO1xyXG4gICAgY29uc29sZS5sb2coYFRleHRPbmUgJHt1c2VySW5wdXQudGV4dE9uZX1gKTtcclxuICAgIGNvbnNvbGUubG9nKGBUZXh0VHdvICR7dXNlcklucHV0LnRleHRUd299YCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgdXNlcklucHV0LFxyXG4gIGN1cnJlbnROdW1iZXJEaXNwbGF5LFxyXG4gIHByZXZpb3VzTnVtYmVyRGlzcGxheSxcclxufSBmcm9tIFwiLi4vU291cmNlL01haW5cIjtcclxuaW1wb3J0IFNlbGVjdE51bWJlcnMgZnJvbSBcIi4uL1NvdXJjZS9TZWxlY3ROdW1iZXJzXCI7XHJcbmltcG9ydCBTZWNvbmROdW1iZXIgZnJvbSBcIi4vU2Vjb25kTnVtYmVyXCI7XHJcbmltcG9ydCBTZWxlY3RPcGVyYXRvcnMgZnJvbSBcIi4uL1NvdXJjZS9TZWxlY3RPcGVyYXRvcnNcIjtcclxuXHJcbi8vIGZ1bmN0aW9uIG9wZXJhdG9yU2VsZWN0KCkge1xyXG4vLyBTZWxlY3RPcGVyYXRvcnMoT3BlcmF0b3JTZWxlY3RGbmMpO1xyXG4vLyBTZWxlY3RPcGVyYXRvcnMoT3BlcmF0b3JTZWxlY3RGbmMoZSkpO1xyXG4vLyB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBPcGVyYXRvclNlbGVjdCgpIHtcclxuICBmdW5jdGlvbiBPcGVyYXRvclNlbGVjdEZuYyhlKSB7XHJcbiAgICBjb25zb2xlLmxvZyhgT3BlcmF0b3IgU2VsZWN0ZWQgYCk7XHJcbiAgICBjb25zb2xlLmxvZyh1c2VySW5wdXQucmVzdWx0KTtcclxuICAgIC8vIGRpc2FibGUgc2VsZWN0aW5nIG11bHRpcGxlIHNpZ25cclxuICAgIGlmICh1c2VySW5wdXQuaXNTaWduID09PSBmYWxzZSkge1xyXG4gICAgICB1c2VySW5wdXQuaXNTaWduID0gdHJ1ZTsgLy8gZGlzYWJsZSBzZWxlY3RpbmcgbXVsdGlwbGUgc2lnblxyXG4gICAgICB1c2VySW5wdXQuaXNFcXVhbCA9IGZhbHNlO1xyXG4gICAgICB1c2VySW5wdXQuc2lnbiA9IGUudGFyZ2V0LnRleHRDb250ZW50O1xyXG4gICAgICBjdXJyZW50TnVtYmVyRGlzcGxheS50ZXh0Q29udGVudCArPSBgICR7dXNlcklucHV0LnNpZ259IGA7IC8vICs9IHRleHRPbmUgKyAgc2lnblxyXG4gICAgICBwcmV2aW91c051bWJlckRpc3BsYXkudGV4dENvbnRlbnQgPSBjdXJyZW50TnVtYmVyRGlzcGxheS50ZXh0Q29udGVudDtcclxuICAgICAgcHJldmlvdXNOdW1iZXJEaXNwbGF5LnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcclxuICAgICAgY3VycmVudE51bWJlckRpc3BsYXkudGV4dENvbnRlbnQgPSBcIlwiO1xyXG5cclxuICAgICAgaWYgKHVzZXJJbnB1dC5yZXN1bHQgPT09IFwiXCIpIHtcclxuICAgICAgICB1c2VySW5wdXQudGV4dFR3byA9IHVzZXJJbnB1dC50ZXh0T25lOyAvLyBzdG9yZXMgdGhlIHZhbHVlIHNvIHRoYXQgdGV4dE9uZSBjYW4gZ2V0IGEgZnJlc2ggdmFsdWVcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB1c2VySW5wdXQudGV4dFR3byA9IHVzZXJJbnB1dC5yZXN1bHQ7IC8vIHdoZW4gd2UgdXNlIGVxdWFsQnV0dG9uIGZuYyBbY29udGludW91cyBjYWxjdWxhdGlvbiBhZnRlciBlcXVhbCBidXR0b24gaXMgcHJlc3NlZCBdXHJcbiAgICAgIH1cclxuICAgICAgdXNlcklucHV0LnRleHRPbmUgPSBcIlwiO1xyXG5cclxuICAgICAgLy8gc2VsZWN0IFNlY29uZE51bWJlclxyXG4gICAgICBTZWxlY3ROdW1iZXJzKFNlY29uZE51bWJlcik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFNlbGVjdE9wZXJhdG9ycyhPcGVyYXRvclNlbGVjdEZuYyk7XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUm91bmRGbG9hdChyZXN1bHQpIHtcclxuICBjb25zdCByZXN1bHRMZW5ndGggPSByZXN1bHQudG9TdHJpbmcoKTtcclxuICBjb25zb2xlLmxvZyhyZXN1bHRMZW5ndGgpO1xyXG4gIGlmIChyZXN1bHRMZW5ndGgubGVuZ3RoID4gMTIgJiYgcmVzdWx0TGVuZ3RoLmluY2x1ZGVzKFwiLlwiKSkge1xyXG4gICAgLy8gbGV0IHZhbHVlID0gTWF0aC5yb3VuZChOdW1iZXIucGFyc2VGbG9hdChyZXN1bHQpKTtcclxuICAgIC8vIHZhbHVlID0gdmFsdWUudG9TdHJpbmcoKS5zbGljZSgwLCAxMik7XHJcbiAgICAvLyByZXR1cm4gcGFyc2VGbG9hdCh2YWx1ZSk7XHJcbiAgICByZXR1cm4gTnVtYmVyLnBhcnNlRmxvYXQocmVzdWx0KS50b0ZpeGVkKDMpO1xyXG4gIH1cclxuICBpZiAocmVzdWx0TGVuZ3RoID4gMTIgJiYgIXJlc3VsdExlbmd0aC5pbmNsdWRlcyhcIi5cIikpIHtcclxuICAgIHJldHVybiBOdW1iZXIucGFyc2VGbG9hdChyZXN1bHQpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG4iLCJpbXBvcnQgeyB1c2VySW5wdXQgfSBmcm9tIFwiLi4vU291cmNlL01haW5cIjtcclxuaW1wb3J0IFNlbGVjdE9wZXJhdG9ycyBmcm9tIFwiLi4vU291cmNlL1NlbGVjdE9wZXJhdG9yc1wiO1xyXG5pbXBvcnQgQ2FsY3VsYXRlV2l0aE91dEVxdWFsIGZyb20gXCIuL0NhbGN1bGF0ZVdpdGhPdXRFcXVhbFwiO1xyXG5pbXBvcnQgRXF1YWxCdXR0b24gZnJvbSBcIi4vRXF1YWxCdXR0b25cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlY29uZE51bWJlcigpIHtcclxuICBjb25zb2xlLmxvZyhgdGV4dE9uZSA9PT0gJHt1c2VySW5wdXQudGV4dE9uZX1gKTtcclxuICBjb25zb2xlLmxvZyh1c2VySW5wdXQuaXNTaWduKTtcclxuXHJcbiAgaWYgKHVzZXJJbnB1dC5pc0VxdWFsID09PSBmYWxzZSkge1xyXG4gICAgU2VsZWN0T3BlcmF0b3JzKENhbGN1bGF0ZVdpdGhPdXRFcXVhbCk7XHJcbiAgfVxyXG4gIEVxdWFsQnV0dG9uKCk7XHJcbn1cclxuIiwiY29uc3QgY3VycmVudE51bWJlckRpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmN1cnJlbnROdW1iZXJEaXNwbGF5XCIpO1xyXG5jb25zdCBwcmV2aW91c051bWJlckRpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByZXZpb3VzTnVtYmVyRGlzcGxheVwiKTtcclxuXHJcbmNvbnN0IHVzZXJJbnB1dCA9IHtcclxuICB0ZXh0T25lOiBcIlwiLFxyXG4gIHRleHRUd286IFwiXCIsXHJcbiAgc2lnbjogXCJcIixcclxuICByZXN1bHQ6IFwiXCIsXHJcbiAgaXNTaWduOiBmYWxzZSxcclxuICBpc0VxdWFsOiBmYWxzZSxcclxufTtcclxuXHJcbmV4cG9ydCB7IHVzZXJJbnB1dCwgY3VycmVudE51bWJlckRpc3BsYXksIHByZXZpb3VzTnVtYmVyRGlzcGxheSB9O1xyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWxlY3ROdW1iZXJzKGN1c3RvbUV2ZW50KSB7XHJcbiAgY29uc3QgbnVtYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm51bWJcIik7XHJcbiAgbnVtYnMuZm9yRWFjaCgobnVtYikgPT4ge1xyXG4gICAgbnVtYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY3VzdG9tRXZlbnQpO1xyXG4gIH0pO1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlbGVjdE9wZXJhdG9ycyhjdXN0b21FdmVudCkge1xyXG4gIGNvbnN0IG9wZXJhdG9ycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIub3BlcmF0b3JcIik7XHJcbiAgY29uc29sZS5sb2coXCJMb29wT3BlcmF0b3JzXCIpO1xyXG4gIG9wZXJhdG9ycy5mb3JFYWNoKChvcGVyYXRvcikgPT4ge1xyXG4gICAgb3BlcmF0b3IuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGN1c3RvbUV2ZW50KTtcclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgXCIuL3Nhc3Mvc3R5bGUuc2Nzc1wiO1xyXG5cclxuLy8gU291cmNlXHJcbmltcG9ydCBTZWxlY3ROdW1iZXJzIGZyb20gXCIuL01vZHVsZS9Tb3VyY2UvU2VsZWN0TnVtYmVyc1wiO1xyXG5pbXBvcnQgU2VsZWN0T3BlcmF0b3JzIGZyb20gXCIuL01vZHVsZS9Tb3VyY2UvU2VsZWN0T3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7XHJcbiAgdXNlcklucHV0LFxyXG4gIGN1cnJlbnROdW1iZXJEaXNwbGF5LFxyXG4gIHByZXZpb3VzTnVtYmVyRGlzcGxheSxcclxufSBmcm9tIFwiLi9Nb2R1bGUvU291cmNlL01haW5cIjtcclxuXHJcbi8vIENvbXBvbmVudHNcclxuaW1wb3J0IFJvdW5kRmxvYXQgZnJvbSBcIi4vTW9kdWxlL0NvbXBvbmVudHMvUm91bmRGbG9hdFwiO1xyXG5pbXBvcnQgRmlyc3ROdW1iZXIgZnJvbSBcIi4vTW9kdWxlL0NvbXBvbmVudHMvRmlyc3ROdW1iZXJcIjtcclxuLy8gaW1wb3J0IE9wZXJhdG9yU2VsZWN0Rm5jIGZyb20gXCIuL01vZHVsZS9Db21wb25lbnRzL09wZXJhdG9yU2VsZWN0XCI7XHJcbmltcG9ydCBPcGVyYXRvclNlbGVjdCBmcm9tIFwiLi9Nb2R1bGUvQ29tcG9uZW50cy9PcGVyYXRvclNlbGVjdFwiO1xyXG5cclxuLy8gY29uc3QgbnVtYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm51bWJcIik7XHJcbi8vIGNvbnN0IG9wZXJhdG9ycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIub3BlcmF0b3JcIik7XHJcblxyXG5pbXBvcnQgQ2xlYXJCdXR0b24gZnJvbSBcIi4vTW9kdWxlL0J1dHRvbi9DbGVhckJ1dHRvblwiO1xyXG5pbXBvcnQgQmFja1NwYWNlQnV0dG9uIGZyb20gXCIuL01vZHVsZS9CdXR0b24vQmFja1NwYWNlXCI7XHJcbmltcG9ydCBGbGlwU2lnbkJ1dHRvbiBmcm9tIFwiLi9Nb2R1bGUvQnV0dG9uL0ZsaXBTaWduXCI7XHJcbmltcG9ydCBQb3dlckJ1dHRvbiBmcm9tIFwiLi9Nb2R1bGUvQnV0dG9uL1Bvd2VyXCI7XHJcblxyXG4vLyBjb25zdCBiYWNrc3BhY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJhY2tzcGFjZVwiKTtcclxuLy8gY29uc3QgZXF1YWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVxdWFsXCIpO1xyXG4vLyBjb25zdCBmbGlwU2lnbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmxpcFNpZ25cIik7XHJcblxyXG4vLyBjb25zdCBjdXJyZW50TnVtYmVyRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3VycmVudE51bWJlckRpc3BsYXlcIik7XHJcbi8vIGNvbnN0IHByZXZpb3VzTnVtYmVyRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJldmlvdXNOdW1iZXJEaXNwbGF5XCIpO1xyXG5cclxuLy8gdXNlcklucHV0LnRleHRPbmUgPSBcIlwiO1xyXG4vLyB1c2VySW5wdXQudGV4dFR3byA9IFwiXCI7XHJcbi8vICB1c2VySW5wdXQuc2lnbiA9IFwiXCI7XHJcbi8vICB1c2VySW5wdXQucmVzdWx0ID0gXCJcIjtcclxuLy8gbGV0IHVzZXJJbnB1dC5pc1NpZ24gPSBmYWxzZTtcclxuLy8gbGV0IHVzZXJJbnB1dC5pc0VxdWFsID0gZmFsc2U7XHJcblxyXG5jb25zb2xlLmxvZyhcImBgYGBgYGBgYGBgYGBgYGBgYGBgYGBcIik7XHJcbmNvbnNvbGUubG9nKHVzZXJJbnB1dC5pc0VxdWFsKTtcclxuXHJcbi8vIGZ1bmN0aW9uIFNlbGVjdE51bWJlcnMoY3VzdG9tRXZlbnQpIHtcclxuLy8gICBudW1icy5mb3JFYWNoKChudW1iKSA9PiB7XHJcbi8vICAgICBudW1iLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjdXN0b21FdmVudCk7XHJcbi8vICAgfSk7XHJcbi8vIH1cclxuXHJcbi8vIGZ1bmN0aW9uIFNlbGVjdE9wZXJhdG9ycyhjdXN0b21FdmVudCkge1xyXG4vLyAgIGNvbnNvbGUubG9nKFwiTG9vcE9wZXJhdG9yc1wiKTtcclxuLy8gICBvcGVyYXRvcnMuZm9yRWFjaCgob3BlcmF0b3IpID0+IHtcclxuLy8gICAgIG9wZXJhdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjdXN0b21FdmVudCk7XHJcbi8vICAgfSk7XHJcbi8vIH1cclxuXHJcbi8vIGZ1bmN0aW9uIG9wZXJhdG9yU2VsZWN0KCkge1xyXG4vLyBTZWxlY3RPcGVyYXRvcnMoT3BlcmF0b3JTZWxlY3RGbmMpO1xyXG4vLyBTZWxlY3RPcGVyYXRvcnMoT3BlcmF0b3JTZWxlY3RGbmMoZSkpO1xyXG4vLyB9XHJcblxyXG4vLyBmdW5jdGlvbiBDbGVhckJ1dHRvbigpIHtcclxuLy8gICBjbGVhci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4vLyAgICAgY29uc29sZS5jbGVhcigpO1xyXG4vLyAgICAgY29uc29sZS5sb2coXCJDTEVBUkVEXCIpO1xyXG4vLyAgICAgdXNlcklucHV0LnRleHRPbmUgPSBcIlwiO1xyXG4vLyAgICAgdXNlcklucHV0LnRleHRUd28gPSBcIlwiO1xyXG4vLyAgICAgdXNlcklucHV0LnNpZ24gPSBcIlwiO1xyXG5cclxuLy8gICAgIGN1cnJlbnROdW1iZXJEaXNwbGF5LnRleHRDb250ZW50ID0gMDtcclxuLy8gICAgIHByZXZpb3VzTnVtYmVyRGlzcGxheS50ZXh0Q29udGVudCA9IFwiXCI7XHJcbi8vICAgICB1c2VySW5wdXQucmVzdWx0ID0gXCJcIjtcclxuLy8gICAgIHVzZXJJbnB1dC5pc1NpZ24gPSBmYWxzZTtcclxuLy8gICAgIHVzZXJJbnB1dC5pc0VxdWFsID0gZmFsc2U7XHJcbi8vICAgfSk7XHJcbi8vIH1cclxuXHJcbi8vIGZ1bmN0aW9uIEJhY2tTcGFjZUJ1dHRvbigpIHtcclxuLy8gICBiYWNrc3BhY2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuLy8gICAgIHVzZXJJbnB1dC50ZXh0T25lID0gdXNlcklucHV0LnRleHRPbmUuc2xpY2UoMCwgLTEpO1xyXG4vLyAgICAgY3VycmVudE51bWJlckRpc3BsYXkudGV4dENvbnRlbnQgPSB1c2VySW5wdXQudGV4dE9uZTtcclxuLy8gICAgIGNvbnNvbGUubG9nKHVzZXJJbnB1dC50ZXh0T25lKTtcclxuLy8gICAgIGNvbnNvbGUubG9nKFwiYmFja1NwYWNlXCIpO1xyXG4vLyAgIH0pO1xyXG4vLyB9XHJcblxyXG4vLyBmdW5jdGlvbiBmbGlwU2lnbkJ1dHRvbigpIHtcclxuLy8gICBmbGlwU2lnbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuLy8gICAgIGNvbnNvbGUubG9nKFwiZmxpcHBlZFwiKTtcclxuLy8gICAgIGlmICh1c2VySW5wdXQudGV4dE9uZSA+IDApIHtcclxuLy8gICAgICAgY3VycmVudE51bWJlckRpc3BsYXkudGV4dENvbnRlbnQgPSAtY3VycmVudE51bWJlckRpc3BsYXkudGV4dENvbnRlbnQ7XHJcbi8vICAgICAgIHVzZXJJbnB1dC50ZXh0T25lID0gY3VycmVudE51bWJlckRpc3BsYXkudGV4dENvbnRlbnQ7XHJcbi8vICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICBjdXJyZW50TnVtYmVyRGlzcGxheS50ZXh0Q29udGVudCA9IC1jdXJyZW50TnVtYmVyRGlzcGxheS50ZXh0Q29udGVudDtcclxuLy8gICAgICAgdXNlcklucHV0LnRleHRPbmUgPSBjdXJyZW50TnVtYmVyRGlzcGxheS50ZXh0Q29udGVudDtcclxuLy8gICAgIH1cclxuLy8gICB9KTtcclxuLy8gfVxyXG5cclxuZnVuY3Rpb24gY2FsY3VsYXRvcigpIHtcclxuICBwcmV2aW91c051bWJlckRpc3BsYXkudGV4dENvbnRlbnQgPSAwO1xyXG4gIHByZXZpb3VzTnVtYmVyRGlzcGxheS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcclxuXHJcbiAgU2VsZWN0TnVtYmVycyhGaXJzdE51bWJlcik7XHJcbiAgLy8gb3BlcmF0b3JTZWxlY3QoKTtcclxuICBPcGVyYXRvclNlbGVjdCgpO1xyXG4gIENsZWFyQnV0dG9uKCk7XHJcbiAgQmFja1NwYWNlQnV0dG9uKCk7XHJcbiAgRmxpcFNpZ25CdXR0b24oKTsgLy8gZml4IGZsaXAgYWZ0ZXIgcmVzdWx0XHJcbiAgLy8gZXF1YWxCdXR0b24oKTtcclxuICBQb3dlckJ1dHRvbigpO1xyXG59XHJcblxyXG5jYWxjdWxhdG9yKCk7XHJcblxyXG4vLyBzZWxlY3QgdGhlIGZpcnN0IG51bWJlclxyXG4vLyBmdW5jdGlvbiBGaXJzdE51bWJlcihlKSB7XHJcbi8vICAgaWYgKHRleHRPbmUubGVuZ3RoIDwgMTMpIHtcclxuLy8gICAgIHRleHRPbmUgKz0gZS50YXJnZXQudGV4dENvbnRlbnQ7IC8vICs9IGZvciB3cml0aW5nIG51bWJlciBhZGphY2VudFxyXG4vLyAgICAgY3VycmVudE51bWJlckRpc3BsYXkudGV4dENvbnRlbnQgPSB0ZXh0T25lO1xyXG4vLyAgICAgLy8gaXNTaWduID0gZmFsc2U7XHJcbi8vICAgICBjb25zb2xlLmNsZWFyKCk7XHJcbi8vICAgICBjb25zb2xlLmxvZyhgVGV4dE9uZSAke3RleHRPbmV9YCk7XHJcbi8vICAgICBjb25zb2xlLmxvZyhgVGV4dFR3byAke3RleHRUd299YCk7XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG4vLyBzZWxlY3QgdGhlIGZpcnN0IG9wZXJhdG9yXHJcblxyXG4vLyBmdW5jdGlvbiBPcGVyYXRvclNlbGVjdEZuYyhlKSB7XHJcbi8vICAgY29uc29sZS5sb2coYE9wZXJhdG9yIFNlbGVjdGVkIGApO1xyXG4vLyAgIGNvbnNvbGUubG9nKHVzZXJJbnB1dC5yZXN1bHQpO1xyXG4vLyAgIC8vIGRpc2FibGUgc2VsZWN0aW5nIG11bHRpcGxlIHNpZ25cclxuLy8gICBpZiAodXNlcklucHV0LmlzU2lnbiA9PT0gZmFsc2UpIHtcclxuLy8gICAgIHVzZXJJbnB1dC5pc1NpZ24gPSB0cnVlOyAvLyBkaXNhYmxlIHNlbGVjdGluZyBtdWx0aXBsZSBzaWduXHJcbi8vICAgICB1c2VySW5wdXQuaXNFcXVhbCA9IGZhbHNlO1xyXG4vLyAgICAgdXNlcklucHV0LnNpZ24gPSBlLnRhcmdldC50ZXh0Q29udGVudDtcclxuLy8gICAgIGN1cnJlbnROdW1iZXJEaXNwbGF5LnRleHRDb250ZW50ICs9IGAgJHt1c2VySW5wdXQuc2lnbn0gYDsgLy8gKz0gdGV4dE9uZSArICBzaWduXHJcbi8vICAgICBwcmV2aW91c051bWJlckRpc3BsYXkudGV4dENvbnRlbnQgPSBjdXJyZW50TnVtYmVyRGlzcGxheS50ZXh0Q29udGVudDtcclxuLy8gICAgIHByZXZpb3VzTnVtYmVyRGlzcGxheS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XHJcbi8vICAgICBjdXJyZW50TnVtYmVyRGlzcGxheS50ZXh0Q29udGVudCA9IFwiXCI7XHJcblxyXG4vLyAgICAgaWYgKHVzZXJJbnB1dC5yZXN1bHQgPT09IFwiXCIpIHtcclxuLy8gICAgICAgdXNlcklucHV0LnRleHRUd28gPSB1c2VySW5wdXQudGV4dE9uZTsgLy8gc3RvcmVzIHRoZSB2YWx1ZSBzbyB0aGF0IHRleHRPbmUgY2FuIGdldCBhIGZyZXNoIHZhbHVlXHJcbi8vICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICB1c2VySW5wdXQudGV4dFR3byA9IHVzZXJJbnB1dC5yZXN1bHQ7IC8vIHdoZW4gd2UgdXNlIGVxdWFsQnV0dG9uIGZuYyBbY29udGludW91cyBjYWxjdWxhdGlvbiBhZnRlciBlcXVhbCBidXR0b24gaXMgcHJlc3NlZCBdXHJcbi8vICAgICB9XHJcbi8vICAgICB1c2VySW5wdXQudGV4dE9uZSA9IFwiXCI7XHJcblxyXG4vLyAgICAgLy8gc2VsZWN0IFNlY29uZE51bWJlclxyXG4vLyAgICAgU2VsZWN0TnVtYmVycyhzZWNvbmROdW1iZXIpO1xyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuLy8gZnVuY3Rpb24gc2Vjb25kTnVtYmVyKCkge1xyXG4vLyAgIGNvbnNvbGUubG9nKGB0ZXh0T25lID09PSAke3VzZXJJbnB1dC50ZXh0T25lfWApO1xyXG4vLyAgIGNvbnNvbGUubG9nKHVzZXJJbnB1dC5pc1NpZ24pO1xyXG5cclxuLy8gICBpZiAodXNlcklucHV0LmlzRXF1YWwgPT09IGZhbHNlKSB7XHJcbi8vICAgICBTZWxlY3RPcGVyYXRvcnMoY2FsY3VsYXRlV2l0aE91dEVxdWFsKTtcclxuLy8gICB9XHJcbi8vICAgZXF1YWxCdXR0b24oKTtcclxuLy8gfVxyXG5cclxuLy8gY2FsY3VsYXRlIGNvbnRpbnVvdXNseVxyXG4vLyBmdW5jdGlvbiBjYWxjdWxhdGVXaXRoT3V0RXF1YWwoZSkge1xyXG4vLyAgIC8vISBcIi0tLS0tLS0tLS1DYWxjdWxhdGVXaXRoT3V0RXF1YWwtLS0tLS0tLS0tLS1cIlxyXG4vLyAgIC8vIGlzRXF1YWwgPSBmYWxzZTtcclxuLy8gICAvLyB0ZXh0T25lID0gdGV4dFR3bztcclxuLy8gICAvLyBjb25zb2xlLmxvZyhpc1NpZ24pO1xyXG4vLyAgIC8vIGNvbnNvbGUubG9nKGlzRXF1YWwpO1xyXG4vLyAgIC8vIGNvbnNvbGUubG9nKHRleHRPbmUpO1xyXG4vLyAgIC8vIGNvbnNvbGUubG9nKHRleHRUd28pO1xyXG4vLyAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbi8vICAgLy8gY29uc29sZS5sb2coc2lnbik7XHJcblxyXG4vLyAgIGlmIChcclxuLy8gICAgIHVzZXJJbnB1dC5zaWduID09PSBcIitcIiAmJlxyXG4vLyAgICAgdXNlcklucHV0LnRleHRPbmUgIT09IFwiXCIgJiZcclxuLy8gICAgIHVzZXJJbnB1dC5pc0VxdWFsID09PSBmYWxzZVxyXG4vLyAgICkge1xyXG4vLyAgICAgYWRkTnVtV2l0aG91dEVxdWFsKGUpO1xyXG4vLyAgIH0gZWxzZSBpZiAoXHJcbi8vICAgICB1c2VySW5wdXQuc2lnbiA9PT0gXCItXCIgJiZcclxuLy8gICAgIHVzZXJJbnB1dC50ZXh0T25lICE9PSBcIlwiICYmXHJcbi8vICAgICB1c2VySW5wdXQuaXNFcXVhbCA9PT0gZmFsc2VcclxuLy8gICApIHtcclxuLy8gICAgIHN1YnRyYWN0TnVtV2l0aG91dEVxdWFsKGUpO1xyXG4vLyAgIH0gZWxzZSBpZiAoXHJcbi8vICAgICB1c2VySW5wdXQuc2lnbiA9PT0gXCIqXCIgJiZcclxuLy8gICAgIHVzZXJJbnB1dC50ZXh0T25lICE9PSBcIlwiICYmXHJcbi8vICAgICB1c2VySW5wdXQuaXNFcXVhbCA9PT0gZmFsc2VcclxuLy8gICApIHtcclxuLy8gICAgIG11bHRpcGxlTnVtV2l0aG91dEVxdWFsKGUpO1xyXG4vLyAgIH0gZWxzZSBpZiAoXHJcbi8vICAgICB1c2VySW5wdXQuc2lnbiA9PT0gXCIvXCIgJiZcclxuLy8gICAgIHVzZXJJbnB1dC50ZXh0T25lICE9PSBcIlwiICYmXHJcbi8vICAgICB1c2VySW5wdXQuaXNFcXVhbCA9PT0gZmFsc2VcclxuLy8gICApIHtcclxuLy8gICAgIGRpdmlkZU51bVdpdGhvdXRFcXVhbChlKTtcclxuLy8gICB9IGVsc2UgaWYgKFxyXG4vLyAgICAgdXNlcklucHV0LnNpZ24gPT09IFwiJVwiICYmXHJcbi8vICAgICB1c2VySW5wdXQudGV4dE9uZSAhPT0gXCJcIiAmJlxyXG4vLyAgICAgdXNlcklucHV0LmlzRXF1YWwgPT09IGZhbHNlXHJcbi8vICAgKSB7XHJcbi8vICAgICBwZXJjZW50YWdlTnVtV2l0aG91dEVxdWFsKGUpO1xyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuLy8gZnVuY3Rpb24gZXF1YWxCdXR0b24oKSB7XHJcbi8vICAgZXF1YWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuLy8gICAgIHVzZXJJbnB1dC5pc0VxdWFsID0gdHJ1ZTtcclxuLy8gICAgIGNvbnNvbGUubG9nKHVzZXJJbnB1dC5pc0VxdWFsKTtcclxuLy8gICAgIGlmIChcclxuLy8gICAgICAgdXNlcklucHV0LnNpZ24gPT09IFwiK1wiICYmXHJcbi8vICAgICAgIHVzZXJJbnB1dC50ZXh0T25lICE9PSBcIlwiICYmXHJcbi8vICAgICAgIHVzZXJJbnB1dC5pc0VxdWFsID09PSB0cnVlXHJcbi8vICAgICApIHtcclxuLy8gICAgICAgYWRkTnVtKCk7XHJcbi8vICAgICB9XHJcbi8vICAgICBpZiAoXHJcbi8vICAgICAgIHVzZXJJbnB1dC5zaWduID09PSBcIipcIiAmJlxyXG4vLyAgICAgICB1c2VySW5wdXQudGV4dE9uZSAhPT0gXCJcIiAmJlxyXG4vLyAgICAgICB1c2VySW5wdXQuaXNFcXVhbCA9PT0gdHJ1ZVxyXG4vLyAgICAgKSB7XHJcbi8vICAgICAgIG11bHRpcGxlTnVtKCk7XHJcbi8vICAgICB9XHJcbi8vICAgICBpZiAoXHJcbi8vICAgICAgIHVzZXJJbnB1dC5zaWduID09PSBcIi1cIiAmJlxyXG4vLyAgICAgICB1c2VySW5wdXQudGV4dE9uZSAhPT0gXCJcIiAmJlxyXG4vLyAgICAgICB1c2VySW5wdXQuaXNFcXVhbCA9PT0gdHJ1ZVxyXG4vLyAgICAgKSB7XHJcbi8vICAgICAgIHN1YnRyYWN0TnVtKCk7XHJcbi8vICAgICB9XHJcbi8vICAgICBpZiAoXHJcbi8vICAgICAgIHVzZXJJbnB1dC5zaWduID09PSBcIi9cIiAmJlxyXG4vLyAgICAgICB1c2VySW5wdXQudGV4dE9uZSAhPT0gXCJcIiAmJlxyXG4vLyAgICAgICB1c2VySW5wdXQuaXNFcXVhbCA9PT0gdHJ1ZVxyXG4vLyAgICAgKSB7XHJcbi8vICAgICAgIGRpdmlkZU51bSgpO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgaWYgKFxyXG4vLyAgICAgICB1c2VySW5wdXQuc2lnbiA9PT0gXCIlXCIgJiZcclxuLy8gICAgICAgdXNlcklucHV0LnRleHRPbmUgIT09IFwiXCIgJiZcclxuLy8gICAgICAgdXNlcklucHV0LmlzRXF1YWwgPT09IHRydWVcclxuLy8gICAgICkge1xyXG4vLyAgICAgICBwZXJjZW50YWdlTnVtKCk7XHJcbi8vICAgICB9XHJcbi8vICAgICB1c2VySW5wdXQuaXNTaWduID0gZmFsc2U7XHJcblxyXG4vLyAgICAgLy8gY29uc29sZS5sb2codGV4dE9uZSk7XHJcbi8vICAgICAvLyBjb25zb2xlLmxvZyh0ZXh0VHdvKTtcclxuLy8gICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbi8vICAgICAvLyBjb25zb2xlLmxvZyhzaWduKTtcclxuLy8gICAgIC8vIGNvbnNvbGUubG9nKGlzRXF1YWwpO1xyXG5cclxuLy8gICAgIC8vIENvbnRpbnVvdXMgQ2FsY3VsYXRpbmdcclxuLy8gICAgIFNlbGVjdE9wZXJhdG9ycyhzZWNvbmROdW1iZXIpO1xyXG5cclxuLy8gICAgIC8vIFJlc2V0IENhbGN1bGF0aW9uXHJcbi8vICAgICBTZWxlY3ROdW1iZXJzKGVxdWFsQnV0dG9uUmVzZXQpOyAvLyBSZXNldCB0aGUgcmVzdWx0LCBpZiBVc2VyIFNlbGVjdCBhbiBudW1iZXIgYWZ0ZXIgcHJlc3NpbmcgZXF1YWxCdXR0b25cclxuLy8gICB9KTtcclxuLy8gfVxyXG5cclxuLy8gZnVuY3Rpb24gZXF1YWxCdXR0b25SZXNldChlKSB7XHJcbi8vICAgaWYgKHVzZXJJbnB1dC5pc0VxdWFsID09PSB0cnVlKSB7XHJcbi8vICAgICBjb25zb2xlLmNsZWFyKCk7XHJcbi8vICAgICBjb25zb2xlLmxvZyhcIkNMRUFSRURcIik7XHJcbi8vICAgICB1c2VySW5wdXQudGV4dE9uZSA9IFwiXCI7XHJcbi8vICAgICB1c2VySW5wdXQudGV4dFR3byA9IFwiXCI7XHJcbi8vICAgICBwcmV2aW91c051bWJlckRpc3BsYXkudGV4dENvbnRlbnQgPSBcIlwiO1xyXG4vLyAgICAgdXNlcklucHV0LnJlc3VsdCA9IFwiXCI7XHJcbi8vICAgICB1c2VySW5wdXQuc2lnbiA9IFwiXCI7XHJcbi8vICAgICB1c2VySW5wdXQuaXNTaWduID0gZmFsc2U7XHJcbi8vICAgICB1c2VySW5wdXQuaXNFcXVhbCA9IGZhbHNlO1xyXG4vLyAgICAgdXNlcklucHV0LnRleHRPbmUgPSBlLnRhcmdldC50ZXh0Q29udGVudDtcclxuLy8gICAgIGNvbnNvbGUubG9nKHVzZXJJbnB1dC50ZXh0T25lKTtcclxuLy8gICAgIGNvbnNvbGUubG9nKHVzZXJJbnB1dC5pc0VxdWFsKTtcclxuLy8gICAgIGN1cnJlbnROdW1iZXJEaXNwbGF5LnRleHRDb250ZW50ID0gdXNlcklucHV0LnRleHRPbmU7XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG4vLyBXaGVuIFByZXNzaW5nIEVxdWFsIEJ1dHRvblxyXG5cclxuLy8gY29uc3QgYWRkTnVtID0gKCkgPT4ge1xyXG4vLyAgIHVzZXJJbnB1dC5yZXN1bHQgPVxyXG4vLyAgICAgcGFyc2VGbG9hdCh1c2VySW5wdXQudGV4dE9uZSkgKyBwYXJzZUZsb2F0KHVzZXJJbnB1dC50ZXh0VHdvKTsgLy8gK3RleHRUd28gY29udmVydHMgYSBzdHJpbmcgdG8gYSBudW1iZXJcclxuLy8gICBwcmV2aW91c051bWJlckRpc3BsYXkudGV4dENvbnRlbnQgPSBgJHt1c2VySW5wdXQudGV4dFR3b30gKyAke3VzZXJJbnB1dC50ZXh0T25lfSBgO1xyXG4vLyAgIGN1cnJlbnROdW1iZXJEaXNwbGF5LnRleHRDb250ZW50ID0gdXNlcklucHV0LnJlc3VsdDtcclxuLy8gICB1c2VySW5wdXQudGV4dFR3byA9IHVzZXJJbnB1dC5yZXN1bHQ7XHJcbi8vICAgdXNlcklucHV0LnRleHRPbmUgPSBcIlwiOyAvLyBlcmFzZSB0aGUgcmVzdWx0IHZhbHVlIGZyb20gdGV4dCBzbyB0aGF0IHdlIGNhbiBjb250aW51b3VzbHkgYWRkIG51bWJlclxyXG4vLyB9O1xyXG5cclxuLy8gY29uc3Qgc3VidHJhY3ROdW0gPSAoKSA9PiB7XHJcbi8vICAgdXNlcklucHV0LnJlc3VsdCA9XHJcbi8vICAgICBwYXJzZUZsb2F0KHVzZXJJbnB1dC50ZXh0VHdvKSAtIHBhcnNlRmxvYXQodXNlcklucHV0LnRleHRPbmUpOyAvLyArdGV4dFR3byBjb252ZXJ0cyBhIHN0cmluZyB0byBhIG51bWJlclxyXG4vLyAgIHByZXZpb3VzTnVtYmVyRGlzcGxheS50ZXh0Q29udGVudCA9IGAke3VzZXJJbnB1dC50ZXh0VHdvfSAtICR7dXNlcklucHV0LnRleHRPbmV9IGA7XHJcbi8vICAgY3VycmVudE51bWJlckRpc3BsYXkudGV4dENvbnRlbnQgPSB1c2VySW5wdXQucmVzdWx0O1xyXG4vLyAgIHVzZXJJbnB1dC50ZXh0VHdvID0gdXNlcklucHV0LnJlc3VsdDtcclxuLy8gICB1c2VySW5wdXQudGV4dE9uZSA9IFwiXCI7IC8vIGVyYXNlIHRoZSByZXN1bHQgdmFsdWUgZnJvbSB0ZXh0IHNvIHRoYXQgd2UgY2FuIGNvbnRpbnVvdXNseSBhZGQgbnVtYmVyXHJcbi8vIH07XHJcblxyXG4vLyBjb25zdCBtdWx0aXBsZU51bSA9ICgpID0+IHtcclxuLy8gICB1c2VySW5wdXQucmVzdWx0ID1cclxuLy8gICAgIHBhcnNlRmxvYXQodXNlcklucHV0LnRleHRPbmUpICogcGFyc2VGbG9hdCh1c2VySW5wdXQudGV4dFR3byk7IC8vICt0ZXh0VHdvIGNvbnZlcnRzIGEgc3RyaW5nIHRvIGEgbnVtYmVyXHJcbi8vICAgcHJldmlvdXNOdW1iZXJEaXNwbGF5LnRleHRDb250ZW50ID0gYCR7dXNlcklucHV0LnRleHRUd299ICogJHt1c2VySW5wdXQudGV4dE9uZX0gYDtcclxuLy8gICBjdXJyZW50TnVtYmVyRGlzcGxheS50ZXh0Q29udGVudCA9IHVzZXJJbnB1dC5yZXN1bHQ7XHJcbi8vICAgLy8gICBjdXJyZW50TnVtYmVyRGlzcGxheS5zdHlsZS5tYXJnaW5Ub3AgPSBcIjUwcHhcIjtcclxuLy8gICB1c2VySW5wdXQudGV4dE9uZSA9IFwiXCI7XHJcbi8vICAgdXNlcklucHV0LnRleHRUd28gPSBcIlwiO1xyXG4vLyB9O1xyXG5cclxuLy8gY29uc3QgZGl2aWRlTnVtID0gKCkgPT4ge1xyXG4vLyAgIGNvbnNvbGUubG9nKFwiRGl2aWRlIE51bWJlclwiKTtcclxuLy8gICBpZiAodXNlcklucHV0LnRleHRPbmUgPT09IFwiMFwiKSB7XHJcbi8vICAgICBwcmV2aW91c051bWJlckRpc3BsYXkudGV4dENvbnRlbnQgPSBgJHt1c2VySW5wdXQudGV4dFR3b30gLyAke3VzZXJJbnB1dC50ZXh0T25lfWA7XHJcbi8vICAgICBjdXJyZW50TnVtYmVyRGlzcGxheS50ZXh0Q29udGVudCA9IFwiRXJyb3JcIjtcclxuLy8gICAgIHVzZXJJbnB1dC50ZXh0T25lID0gXCJcIjtcclxuLy8gICAgIHVzZXJJbnB1dC50ZXh0VHdvID0gXCJcIjtcclxuLy8gICAgIGNvbnNvbGUubG9nKFwiQ2Fubm90IGRpdmlkZSBieSAwXCIpO1xyXG4vLyAgIH0gZWxzZSB7XHJcbi8vICAgICB1c2VySW5wdXQucmVzdWx0ID1cclxuLy8gICAgICAgcGFyc2VGbG9hdCh1c2VySW5wdXQudGV4dFR3bykgLyBwYXJzZUZsb2F0KHVzZXJJbnB1dC50ZXh0T25lKTsgLy8gK3RleHRUd28gY29udmVydHMgYSBzdHJpbmcgdG8gYSBudW1iZXJcclxuLy8gICAgIC8vIGlmIHJlc3VsdC5sZW5ndGggPiAxMiBjYWxsIFJvdW5kRmxvYXQsIGVsc2UgcmV0dXJuIHNjb3JlXHJcbi8vICAgICB1c2VySW5wdXQucmVzdWx0ID0gUm91bmRGbG9hdCh1c2VySW5wdXQucmVzdWx0KTtcclxuLy8gICAgIHByZXZpb3VzTnVtYmVyRGlzcGxheS50ZXh0Q29udGVudCA9IGAke3VzZXJJbnB1dC50ZXh0VHdvfSAvICR7dXNlcklucHV0LnRleHRPbmV9YDtcclxuLy8gICAgIGN1cnJlbnROdW1iZXJEaXNwbGF5LnRleHRDb250ZW50ID0gdXNlcklucHV0LnJlc3VsdDtcclxuLy8gICAgIHVzZXJJbnB1dC50ZXh0T25lID0gXCJcIjtcclxuLy8gICAgIHVzZXJJbnB1dC50ZXh0VHdvID0gXCJcIjtcclxuLy8gICAgIGNvbnNvbGUubG9nKFwibm9ybWFsIG51bWJlclwiKTtcclxuLy8gICB9XHJcbi8vIH07XHJcblxyXG4vLyBjb25zdCBwZXJjZW50YWdlTnVtID0gKCkgPT4ge1xyXG4vLyAgIHVzZXJJbnB1dC5yZXN1bHQgPSAodXNlcklucHV0LnRleHRUd28gLyAxMDApICogdXNlcklucHV0LnRleHRPbmU7XHJcbi8vICAgLy8gaWYgcmVzdWx0Lmxlbmd0aCA+IDEyIGNhbGwgUm91bmRGbG9hdCwgZWxzZSByZXR1cm4gc2NvcmVcclxuLy8gICB1c2VySW5wdXQucmVzdWx0ID0gUm91bmRGbG9hdCh1c2VySW5wdXQucmVzdWx0KTtcclxuLy8gICBwcmV2aW91c051bWJlckRpc3BsYXkudGV4dENvbnRlbnQgPSBgJHt1c2VySW5wdXQudGV4dFR3b30gJSAke3VzZXJJbnB1dC50ZXh0T25lfWA7XHJcbi8vICAgY3VycmVudE51bWJlckRpc3BsYXkudGV4dENvbnRlbnQgPSB1c2VySW5wdXQucmVzdWx0O1xyXG4vLyAgIGNvbnNvbGUubG9nKGBUaGlzIGlzIFBlcmNlbnRhZ2UgJHt1c2VySW5wdXQucmVzdWx0fWApO1xyXG4vLyAgIHVzZXJJbnB1dC50ZXh0T25lID0gXCJcIjtcclxuLy8gICB1c2VySW5wdXQudGV4dFR3byA9IFwiXCI7XHJcbi8vIH07XHJcblxyXG4vLyBXaXRob3V0IFByZXNzaW5nIEVxdWFsIEJ1dHRvbiBbQ29udGludW91c2x5XVxyXG5cclxuLy8gZnVuY3Rpb24gYWRkTnVtV2l0aG91dEVxdWFsKGUpIHtcclxuLy8gICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS1DYWxjdWxhdGVXaXRoT3V0RXF1YWwtLS0tLS0tLS0tLS1cIik7XHJcbi8vICAgY29uc29sZS5sb2coYCAgQWRqYWNlbnQgQWRkaW5nIFdpdGhvdXQgRXF1YWxCdXR0b25gKTtcclxuLy8gICB1c2VySW5wdXQucmVzdWx0ID1cclxuLy8gICAgIHBhcnNlRmxvYXQodXNlcklucHV0LnRleHRUd28pICsgcGFyc2VGbG9hdCh1c2VySW5wdXQudGV4dE9uZSk7XHJcbi8vICAgLy8gY29uc29sZS5sb2codXNlcklucHV0LnRleHRPbmUpO1xyXG4vLyAgIC8vIGNvbnNvbGUubG9nKHVzZXJJbnB1dC50ZXh0VHdvKTtcclxuLy8gICAvLyBjb25zb2xlLmxvZyh1c2VySW5wdXQucmVzdWx0KTtcclxuLy8gICB1c2VySW5wdXQudGV4dFR3byA9IHVzZXJJbnB1dC5yZXN1bHQ7XHJcblxyXG4vLyAgIHVzZXJJbnB1dC5zaWduID0gZS50YXJnZXQudGV4dENvbnRlbnQ7XHJcbi8vICAgcHJldmlvdXNOdW1iZXJEaXNwbGF5LnRleHRDb250ZW50ID0gYCAke3VzZXJJbnB1dC50ZXh0VHdvfSAke3VzZXJJbnB1dC5zaWdufSBgO1xyXG4vLyAgIGN1cnJlbnROdW1iZXJEaXNwbGF5LnRleHRDb250ZW50ID0gMDtcclxuLy8gICAvLyBjb25zb2xlLmxvZyhgVGhpcyBpcyByZXN1bHQgJHtyZXN1bHR9YCk7XHJcbi8vICAgdXNlcklucHV0LnRleHRPbmUgPSBcIlwiO1xyXG4vLyAgIHVzZXJJbnB1dC5yZXN1bHQgPSBcIlwiO1xyXG4vLyAgIC8vIGNvbnNvbGUubG9nKHRleHRPbmUpO1xyXG4vLyAgIC8vIGNvbnNvbGUubG9nKHRleHRUd28pO1xyXG4vLyAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbi8vICAgLy8gY29uc29sZS5sb2coc2lnbik7XHJcbi8vIH1cclxuXHJcbi8vIGZ1bmN0aW9uIHN1YnRyYWN0TnVtV2l0aG91dEVxdWFsKGUpIHtcclxuLy8gICAvLyB1c2VySW5wdXQuaXNTaWduID0gZmFsc2U7XHJcblxyXG4vLyAgIGNvbnNvbGUubG9nKGAgIEFkamFjZW50IFN1YnRyYWN0aW5nIFdpdGhvdXQgRXF1YWxCdXR0b25gKTtcclxuLy8gICB1c2VySW5wdXQucmVzdWx0ID1cclxuLy8gICAgIHBhcnNlRmxvYXQodXNlcklucHV0LnRleHRUd28pIC0gcGFyc2VGbG9hdCh1c2VySW5wdXQudGV4dE9uZSk7XHJcbi8vICAgdXNlcklucHV0LnRleHRUd28gPSB1c2VySW5wdXQucmVzdWx0O1xyXG4vLyAgIC8vIGNvbnNvbGUubG9nKHVzZXJJbnB1dC50ZXh0VHdvKTtcclxuLy8gICAvLyBjb25zb2xlLmxvZyh1c2VySW5wdXQucmVzdWx0KTtcclxuXHJcbi8vICAgdXNlcklucHV0LnNpZ24gPSBlLnRhcmdldC50ZXh0Q29udGVudDtcclxuLy8gICBwcmV2aW91c051bWJlckRpc3BsYXkudGV4dENvbnRlbnQgPSBgICR7dXNlcklucHV0LnRleHRUd299ICR7dXNlcklucHV0LnNpZ259IGA7XHJcbi8vICAgY3VycmVudE51bWJlckRpc3BsYXkudGV4dENvbnRlbnQgPSAwO1xyXG4vLyAgIC8vIGNvbnNvbGUubG9nKGBUaGlzIGlzIHJlc3VsdCAke3Jlc3VsdH1gKTtcclxuLy8gICB1c2VySW5wdXQudGV4dE9uZSA9IFwiXCI7XHJcbi8vICAgdXNlcklucHV0LnJlc3VsdCA9IFwiXCI7XHJcbi8vICAgY29uc29sZS5sb2codXNlcklucHV0LnRleHRPbmUpO1xyXG4vLyAgIGNvbnNvbGUubG9nKHVzZXJJbnB1dC50ZXh0VHdvKTtcclxuLy8gICBjb25zb2xlLmxvZyh1c2VySW5wdXQucmVzdWx0KTtcclxuLy8gICBjb25zb2xlLmxvZyh1c2VySW5wdXQuc2lnbik7XHJcbi8vIH1cclxuXHJcbi8vIGZ1bmN0aW9uIG11bHRpcGxlTnVtV2l0aG91dEVxdWFsKGUpIHtcclxuLy8gICBjb25zb2xlLmxvZyhgICBBZGphY2VudCBNdWx0aXBseWluZyBXaXRob3V0IEVxdWFsQnV0dG9uYCk7XHJcbi8vICAgdXNlcklucHV0LnJlc3VsdCA9XHJcbi8vICAgICBwYXJzZUZsb2F0KHVzZXJJbnB1dC50ZXh0VHdvKSAqIHBhcnNlRmxvYXQodXNlcklucHV0LnRleHRPbmUpO1xyXG4vLyAgIHVzZXJJbnB1dC50ZXh0VHdvID0gdXNlcklucHV0LnJlc3VsdDtcclxuLy8gICB1c2VySW5wdXQuc2lnbiA9IGUudGFyZ2V0LnRleHRDb250ZW50O1xyXG4vLyAgIHByZXZpb3VzTnVtYmVyRGlzcGxheS50ZXh0Q29udGVudCA9IGAgJHt1c2VySW5wdXQucmVzdWx0fSAke3VzZXJJbnB1dC5zaWdufSBgO1xyXG4vLyAgIGN1cnJlbnROdW1iZXJEaXNwbGF5LnRleHRDb250ZW50ID0gMDtcclxuLy8gICAvLyBjb25zb2xlLmxvZyhgVGhpcyBpcyByZXN1bHQgJHtyZXN1bHR9YCk7XHJcbi8vICAgdXNlcklucHV0LnRleHRPbmUgPSBcIlwiO1xyXG4vLyAgIHVzZXJJbnB1dC5yZXN1bHQgPSBcIlwiO1xyXG4vLyB9XHJcblxyXG4vLyBmdW5jdGlvbiBkaXZpZGVOdW1XaXRob3V0RXF1YWwoZSkge1xyXG4vLyAgIGlmICh1c2VySW5wdXQudGV4dE9uZSA9PT0gXCIwXCIpIHtcclxuLy8gICAgIHByZXZpb3VzTnVtYmVyRGlzcGxheS50ZXh0Q29udGVudCA9IGAke3VzZXJJbnB1dC50ZXh0VHdvfSAvICR7dXNlcklucHV0LnRleHRPbmV9YDtcclxuLy8gICAgIGN1cnJlbnROdW1iZXJEaXNwbGF5LnRleHRDb250ZW50ID0gXCJFcnJvciwgQ2Fubm90IGRpdmlkZSBieSAwXCI7XHJcbi8vICAgICB1c2VySW5wdXQudGV4dE9uZSA9IFwiXCI7XHJcbi8vICAgICB1c2VySW5wdXQudGV4dFR3byA9IFwiXCI7XHJcbi8vICAgICB1c2VySW5wdXQucmVzdWx0ID0gXCJcIjtcclxuLy8gICAgIGNvbnNvbGUubG9nKFwiQ2Fubm90IGRpdmlkZSBieSAwXCIpO1xyXG4vLyAgIH0gZWxzZSB7XHJcbi8vICAgICBjb25zb2xlLmxvZyhgICBBZGphY2VudCBEaXZpZGluZyBXaXRob3V0IEVxdWFsQnV0dG9uIGApO1xyXG4vLyAgICAgdXNlcklucHV0LnJlc3VsdCA9XHJcbi8vICAgICAgIHBhcnNlRmxvYXQodXNlcklucHV0LnRleHRUd28pIC8gcGFyc2VGbG9hdCh1c2VySW5wdXQudGV4dE9uZSk7XHJcbi8vICAgICAvLyBpZiByZXN1bHQubGVuZ3RoID4gMTIgY2FsbCBSb3VuZEZsb2F0LCBlbHNlIHJldHVybiBzY29yZVxyXG4vLyAgICAgdXNlcklucHV0LnJlc3VsdCA9IFJvdW5kRmxvYXQodXNlcklucHV0LnJlc3VsdCk7IC8vIHJvdW5kcyB0aGUgdmFsdWUgdG8gNSBwb2ludFxyXG4vLyAgICAgdXNlcklucHV0LnRleHRUd28gPSB1c2VySW5wdXQucmVzdWx0O1xyXG4vLyAgICAgdXNlcklucHV0LnNpZ24gPSBlLnRhcmdldC50ZXh0Q29udGVudDtcclxuLy8gICAgIHByZXZpb3VzTnVtYmVyRGlzcGxheS50ZXh0Q29udGVudCA9IGAgJHt1c2VySW5wdXQucmVzdWx0fSAke3VzZXJJbnB1dC5zaWdufSBgO1xyXG4vLyAgICAgY3VycmVudE51bWJlckRpc3BsYXkudGV4dENvbnRlbnQgPSAwO1xyXG4vLyAgICAgLy8gY29uc29sZS5sb2coYFRoaXMgaXMgcmVzdWx0ICR7cmVzdWx0fWApO1xyXG4vLyAgICAgdXNlcklucHV0LnRleHRPbmUgPSBcIlwiO1xyXG4vLyAgICAgdXNlcklucHV0LnJlc3VsdCA9IFwiXCI7XHJcbi8vICAgICAvLyBjb25zb2xlLmxvZyh0ZXh0T25lKTtcclxuLy8gICAgIC8vIGNvbnNvbGUubG9nKHRleHRUd28pO1xyXG4vLyAgICAgLy8gY29uc29sZS5sb2cocmVzdWx0KTtcclxuLy8gICAgIC8vIGNvbnNvbGUubG9nKHNpZ24pO1xyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuLy8gZnVuY3Rpb24gcGVyY2VudGFnZU51bVdpdGhvdXRFcXVhbChlKSB7XHJcbi8vICAgY29uc29sZS5sb2coYCAgQWRqYWNlbnQgRGl2aWRpbmcgV2l0aG91dCBFcXVhbEJ1dHRvbiBgKTtcclxuLy8gICB1c2VySW5wdXQucmVzdWx0ID1cclxuLy8gICAgIChwYXJzZUZsb2F0KHVzZXJJbnB1dC50ZXh0VHdvKSAvIDEwMCkgKiBwYXJzZUZsb2F0KHVzZXJJbnB1dC50ZXh0T25lKTtcclxuLy8gICAvLyBpZiByZXN1bHQubGVuZ3RoID4gMTIgY2FsbCBSb3VuZEZsb2F0LCBlbHNlIHJldHVybiBzY29yZVxyXG4vLyAgIHVzZXJJbnB1dC5yZXN1bHQgPSBSb3VuZEZsb2F0KHVzZXJJbnB1dC5yZXN1bHQpOyAvLyByb3VuZHMgdGhlIHZhbHVlIHRvIDUgcG9pbnRcclxuLy8gICB1c2VySW5wdXQudGV4dFR3byA9IHVzZXJJbnB1dC5yZXN1bHQ7XHJcbi8vICAgdXNlcklucHV0LnNpZ24gPSBlLnRhcmdldC50ZXh0Q29udGVudDtcclxuLy8gICBwcmV2aW91c051bWJlckRpc3BsYXkudGV4dENvbnRlbnQgPSBgICR7dXNlcklucHV0LnJlc3VsdH0gJHt1c2VySW5wdXQuc2lnbn0gYDtcclxuLy8gICBjdXJyZW50TnVtYmVyRGlzcGxheS50ZXh0Q29udGVudCA9IDA7XHJcbi8vICAgLy8gY29uc29sZS5sb2coYFRoaXMgaXMgcmVzdWx0ICR7cmVzdWx0fWApO1xyXG4vLyAgIHVzZXJJbnB1dC50ZXh0T25lID0gXCJcIjtcclxuLy8gICB1c2VySW5wdXQucmVzdWx0ID0gXCJcIjtcclxuLy8gICAvLyBjb25zb2xlLmxvZyh0ZXh0T25lKTtcclxuLy8gICAvLyBjb25zb2xlLmxvZyh0ZXh0VHdvKTtcclxuLy8gICAvLyBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4vLyAgIC8vIGNvbnNvbGUubG9nKHNpZ24pO1xyXG4vLyB9XHJcblxyXG4vLyBmdW5jdGlvbiBlcXVhbEJ1dHRvblJlc2V0Q2FsY3VsYXRpb24oKSB7XHJcbi8vICAgY29uc29sZS5sb2coXHJcbi8vICAgICBcIi0tLS0tLS0tIENsZWFycyB0aGUgcmVzdWx0IHdoZW4gcHJlc3NlZCBvbiBhIG51bWJlciAgW0VxdWFsXSAtLS0tLS0tLS1cIlxyXG4vLyAgICk7XHJcbi8vICAgcHJldmlvdXNOdW1iZXJEaXNwbGF5LnRleHRDb250ZW50ID0gXCJcIjtcclxuLy8gICByZXN1bHQgPSBcIlwiO1xyXG4vLyAgIC8vIGNvbnNvbGUubG9nKHRleHRPbmUpO1xyXG4vLyAgIC8vIG9wZXJhdG9ycy5mb3JFYWNoKChvcGVyYXRvcikgPT4ge1xyXG4vLyAgIC8vICAgdGV4dFR3byA9IHRleHRPbmU7XHJcbi8vICAgLy8gICB0ZXh0T25lID0gXCJcIjtcclxuLy8gICAvLyAgIG9wZXJhdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4vLyAgIC8vICAgICBcIi0tLS0tLS0tIENsZWFycyB0aGUgcmVzdWx0IHdoZW4gcHJlc3NlZCBvbiBhIG51bWJlciAgW0VxdWFsPT5dIC0tLS0tLS0tLVwiO1xyXG5cclxuLy8gICAvLyAgICAgcHJldmlvdXNOdW1iZXJEaXNwbGF5LnRleHRDb250ZW50ID0gYCR7dGV4dFR3b30gJHtzaWdufSBgO1xyXG4vLyAgIC8vICAgfSk7XHJcbi8vICAgLy8gfSk7XHJcbi8vIH1cclxuXHJcbi8vIGZ1bmN0aW9uIENhbGN1bGF0aW5nV2l0aG91dEVxdWFsKCkge1xyXG4vLyAgIGNvbnNvbGUubG9nKGAgIE51bWJlciBmb3IgTm90RXF1YWxCdXR0b24gIGApO1xyXG4vLyAgIC8vIHRleHRUaHJlZSA9IHRleHRPbmU7XHJcbi8vICAgLy8gdGV4dEZvdXIgPSB0ZXh0VHdvO1xyXG5cclxuLy8gICAvLyBDYWxjdWxhdGUgdGhlIHJlc3VsdCBiZWZvcmUgaGFuZCBzbyB0aGF0IHdlIGNhbiB1c2UgaXQgZm9yIG5vbkFkamFjZW50T3BlcmF0b3JDYWxjdWxhdGlvblxyXG4vLyAgIGlmIChzaWduID09PSBcIitcIikge1xyXG4vLyAgICAgYWRkTnVtKCk7XHJcbi8vICAgICAvLyBwcmV2aW91c1NpZ24gPSBzaWduO1xyXG4vLyAgICAgLy8gY29uc29sZS5sb2coKHJlc3VsdCA9ICt0ZXh0VHdvICsgK3RleHRPbmUpKTtcclxuLy8gICB9XHJcbi8vICAgaWYgKHNpZ24gPT09IFwiLVwiKSB7XHJcbi8vICAgICAvLyBwcmV2aW91c1NpZ24gPSBzaWduO1xyXG4vLyAgICAgY29uc29sZS5sb2coKHJlc3VsdCA9ICt0ZXh0VHdvIC0gK3RleHRPbmUpKTtcclxuLy8gICB9XHJcbi8vICAgaWYgKHNpZ24gPT09IFwiKlwiKSB7XHJcbi8vICAgICAvLyBwcmV2aW91c1NpZ24gPSBzaWduO1xyXG4vLyAgICAgY29uc29sZS5sb2coKHJlc3VsdCA9ICt0ZXh0VHdvICogK3RleHRPbmUpKTtcclxuLy8gICB9XHJcbi8vICAgaWYgKHNpZ24gPT09IFwiL1wiKSB7XHJcbi8vICAgICAvLyBwcmV2aW91c1NpZ24gPSBzaWduO1xyXG4vLyAgICAgY29uc29sZS5sb2coKHJlc3VsdCA9ICt0ZXh0VHdvIC8gK3RleHRPbmUpKTtcclxuLy8gICB9XHJcblxyXG4vLyAgIGxvb3BPcGVyYXRvcnMoQ2FsY3VsYXRpbmdXaXRob3V0RXF1YWxGbmMpO1xyXG4vLyB9XHJcblxyXG4vLyBmdW5jdGlvbiBjYWxjdWxhdGluZ1dpdGhvdXRFcXVhbFNhbWVTaWduRm5jKGUpIHtcclxuLy8gICBjb25zb2xlLmxvZyhcclxuLy8gICAgIGAtLS0tLS0tLS0tLS0tVGhpcyBpcyBDb250aW51b3MgUmVzdWx0IEluc2lkZSBJbnNpZGUgJHtyZXN1bHR9LS0tLS0tLS0tLS0tLS0tLWBcclxuLy8gICApO1xyXG4vLyAgIHRleHRUd28gPSByZXN1bHQ7XHJcbi8vICAgcHJldmlvdXNOdW1iZXJEaXNwbGF5LnRleHRDb250ZW50ID0gYCR7dGV4dFR3b30gICR7ZS50YXJnZXQudGV4dENvbnRlbnR9YDtcclxuLy8gICBjdXJyZW50TnVtYmVyRGlzcGxheS50ZXh0Q29udGVudCA9IFwiXCI7XHJcbi8vICAgc2lnbiA9IGUudGFyZ2V0LnRleHRDb250ZW50O1xyXG4vLyB9XHJcblxyXG4vLyBmdW5jdGlvbiBjYWxjdWxhdGluZ1dpdGhvdXRFcXVhbFNhbWVTaWduKCkge1xyXG4vLyAgIGNvbnNvbGUubG9nKFwiICBwcmV2aW91c1NpZ24gPT09IHNpZ24gIFwiKTtcclxuLy8gICBpZiAoc2lnbiA9PT0gXCIrXCIpIHtcclxuLy8gICAgIGNvbnNvbGUubG9nKGAgIEFkamFjZW50IEFkZGluZyBXaXRob3V0IEVxdWFsQnV0dG9uYCk7XHJcbi8vICAgICByZXN1bHRUd28gPSArdGV4dFR3byArICt0ZXh0T25lO1xyXG4vLyAgICAgcHJldmlvdXNOdW1iZXJEaXNwbGF5LnRleHRDb250ZW50ID0gYCAke3RleHRUd299ICR7c2lnbn0gJHt0ZXh0T25lfWA7XHJcbi8vICAgICBjdXJyZW50TnVtYmVyRGlzcGxheS50ZXh0Q29udGVudCA9IHJlc3VsdFR3bztcclxuLy8gICAgIGNvbnNvbGUubG9nKGBUaGlzIGlzIHJlc3VsdFR3byAke3Jlc3VsdFR3b31gKTtcclxuLy8gICB9XHJcbi8vICAgaWYgKHNpZ24gPT09IFwiLVwiKSB7XHJcbi8vICAgICBjb25zb2xlLmxvZyhgICBBZGphY2VudCBTdWJ0cmFjdGluZyBXaXRob3V0IEVxdWFsQnV0dG9uYCk7XHJcbi8vICAgICByZXN1bHRUd28gPSArdGV4dFR3byAtICt0ZXh0T25lO1xyXG4vLyAgICAgcHJldmlvdXNOdW1iZXJEaXNwbGF5LnRleHRDb250ZW50ID0gYCAke3RleHRUd299ICR7c2lnbn0gJHt0ZXh0T25lfWA7XHJcbi8vICAgICBjdXJyZW50TnVtYmVyRGlzcGxheS50ZXh0Q29udGVudCA9IHJlc3VsdFR3bztcclxuLy8gICAgIGNvbnNvbGUubG9nKGBUaGlzIGlzIHJlc3VsdFR3byAke3Jlc3VsdFR3b31gKTtcclxuLy8gICB9XHJcbi8vICAgaWYgKHNpZ24gPT09IFwiKlwiKSB7XHJcbi8vICAgICBjb25zb2xlLmxvZyhgICBBZGphY2VudCBNdWx0aXBseWluZyBXaXRob3V0IEVxdWFsQnV0dG9uYCk7XHJcbi8vICAgICByZXN1bHRUd28gPSArdGV4dFR3byAqICt0ZXh0T25lO1xyXG4vLyAgICAgcHJldmlvdXNOdW1iZXJEaXNwbGF5LnRleHRDb250ZW50ID0gYCAke3RleHRUd299ICR7c2lnbn0gJHt0ZXh0T25lfWA7XHJcbi8vICAgICBjdXJyZW50TnVtYmVyRGlzcGxheS50ZXh0Q29udGVudCA9IHJlc3VsdFR3bztcclxuLy8gICAgIGNvbnNvbGUubG9nKGBUaGlzIGlzIHJlc3VsdFR3byAke3Jlc3VsdFR3b31gKTtcclxuLy8gICB9XHJcbi8vICAgaWYgKHNpZ24gPT09IFwiL1wiKSB7XHJcbi8vICAgICBjb25zb2xlLmxvZyhgICBBZGphY2VudCBEaXZpZGluZyBXaXRob3V0IEVxdWFsQnV0dG9uIGApO1xyXG4vLyAgICAgcmVzdWx0VHdvID0gK3RleHRUd28gLyArdGV4dE9uZTtcclxuLy8gICAgIHByZXZpb3VzTnVtYmVyRGlzcGxheS50ZXh0Q29udGVudCA9IGAgJHt0ZXh0VHdvfSAke3NpZ259ICR7dGV4dE9uZX1gO1xyXG4vLyAgICAgY3VycmVudE51bWJlckRpc3BsYXkudGV4dENvbnRlbnQgPSByZXN1bHRUd287XHJcbi8vICAgICBjb25zb2xlLmxvZyhgVGhpcyBpcyByZXN1bHRUd28gJHtyZXN1bHRUd299YCk7XHJcbi8vICAgfVxyXG5cclxuLy8gICAvLyAgQWRqYWNlbnQgTnVtYmVyIENvbnRpbnVvcyAtIENhbGN1bGF0aW9uXHJcbi8vICAgbG9vcE9wZXJhdG9ycyhjYWxjdWxhdGluZ1dpdGhvdXRFcXVhbFNhbWVTaWduRm5jKTtcclxuLy8gfVxyXG5cclxuLy8gZnVuY3Rpb24gY2FsY3VsYXRpbmdXaXRob3V0RXF1YWxEaWZmZXJlbnRTaWduKGUpIHtcclxuLy8gICBjb25zb2xlLmxvZyhgcHJldmlvdXNTaWduICE9PSBzaWduYCk7XHJcbi8vICAgcHJldmlvdXNOdW1iZXJEaXNwbGF5LnRleHRDb250ZW50ID0gYCAke3Jlc3VsdFR3b30gJHtlLnRhcmdldC50ZXh0Q29udGVudH0gIGA7XHJcbi8vICAgdGV4dFR3byA9IHJlc3VsdFR3bztcclxuLy8gICBsb29wTnVtYmVycyhjYWxjdWxhdGluZ1dpdGhvdXRFcXVhbERpZmZlcmVudFNpZ25GbmMpO1xyXG4vLyB9XHJcblxyXG4vLyBmdW5jdGlvbiBjYWxjdWxhdGluZ1dpdGhvdXRFcXVhbERpZmZlcmVudFNpZ25GbmMoKSB7XHJcbi8vICAgY29uc29sZS5sb2coYHByZXZpb3VzU2lnbiAhPT0gc2lnbiBIIWApO1xyXG5cclxuLy8gICBpZiAoc2lnbiA9PT0gXCIrXCIpIHtcclxuLy8gICAgIHJlc3VsdFR3byA9ICt0ZXh0VHdvICsgK3RleHRPbmU7XHJcbi8vICAgICBjb25zb2xlLmxvZyhcIkRpZmYgQWRqYWNlbnQgUmVzdWx0IEFkZGluZyBDb250aW51b3NcIik7XHJcbi8vICAgfVxyXG4vLyAgIGlmIChzaWduID09PSBcIi1cIikge1xyXG4vLyAgICAgcmVzdWx0VHdvID0gK3RleHRUd28gLSArdGV4dE9uZTtcclxuLy8gICAgIGNvbnNvbGUubG9nKFwiRGlmZiBBZGphY2VudCBSZXN1bHQgU3VidHJhY3RpbmcgQ29udGludW9zIFwiKTtcclxuLy8gICB9XHJcbi8vICAgaWYgKHNpZ24gPT09IFwiKlwiKSB7XHJcbi8vICAgICByZXN1bHRUd28gPSArdGV4dFR3byAqICt0ZXh0T25lO1xyXG4vLyAgICAgY29uc29sZS5sb2coXCJEaWZmIEFkamFjZW50IFJlc3VsdCBNdWx0aXBseWluZyBDb250aW51b3MgXCIpO1xyXG4vLyAgIH1cclxuLy8gICBpZiAoc2lnbiA9PT0gXCIvXCIpIHtcclxuLy8gICAgIHJlc3VsdFR3byA9ICt0ZXh0VHdvIC8gK3RleHRPbmU7XHJcbi8vICAgICBjb25zb2xlLmxvZyhcIkRpZmYgQWRqYWNlbnQgUmVzdWx0IERpdmlkaW5nIENvbnRpbnVvcyBcIik7XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gQnV0dG9uIERlY2xhcmF0aW9uIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cclxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICBmb250LXNpemU6IDMuMXJlbTtcbiAgZm9udC1mYW1pbHk6IFwiVHJlYnVjaGV0IE1TXCIsIFwiTHVjaWRhIFNhbnMgVW5pY29kZVwiLCBcIkx1Y2lkYSBHcmFuZGVcIiwgXCJMdWNpZGEgU2Fuc1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgYm9yZGVyLWNvbG9yOiByZ2IoNzcsIDQwLCAxNikgIWltcG9ydGFudDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5MGVtKSB7XG4gICoge1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTYuMjVlbSkge1xuICAqIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0My43NWVtKSB7XG4gICoge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTkyLCAxOTAsIDE5MCk7XG59XG5cbmh0bWwge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LXNpemU6IDEwMCU7XG59XG5cbi50b3Age1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGJvcmRlcjogMi41cHggc29saWQgcmdiKDIyOCwgMTUyLCAxKSAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5zZWN0aW9uRml2ZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uc2VjdGlvbkZpdmUgPiBkaXYge1xuICBwYWRkaW5nOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmRpc3BsYXkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgd2lkdGg6IDgwJTtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW51bWJlci1iYWNrZ3JvdW5kKTtcbiAgYm9yZGVyLXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5wcmV2aW91c051bWJlckRpc3BsYXkge1xuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcC1yZXZlcnNlO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDkwZW0pIHtcbiAgLnByZXZpb3VzTnVtYmVyRGlzcGxheSB7XG4gICAgZm9udC1zaXplOiAxLjRyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1Ni4yNWVtKSB7XG4gIC5wcmV2aW91c051bWJlckRpc3BsYXkge1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDMuNzVlbSkge1xuICAucHJldmlvdXNOdW1iZXJEaXNwbGF5IHtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgfVxufVxuXG4uY3VycmVudE51bWJlckRpc3BsYXkge1xuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4uYmFja3NwYWNlOmFjdGl2ZSAqLCAuYmFja3NwYWNlOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcbn1cblxuLmJhY2tzcGFjZTpob3ZlciAqLCAuYmFja3NwYWNlOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcbn1cblxuLmJhY2tzcGFjZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IDIwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjI1cywgYmFja2dyb3VuZC1jb2xvciAwLjI1cztcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDMuNzVlbSkge1xuICAuYmFja3NwYWNlIHtcbiAgICB3aWR0aDogMTQuNSU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAzNzVweCkge1xuICAuYmFja3NwYWNlIHtcbiAgICB3aWR0aDogMTElO1xuICB9XG59XG4uYmFja3NwYWNlSW1nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4yNXM7XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTBlbSkge1xuICAuYmFja3NwYWNlSW1nIHtcbiAgICB3aWR0aDogOTBweDtcbiAgICBoZWlnaHQ6IDkwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1Ni4yNWVtKSB7XG4gIC5iYWNrc3BhY2VJbWcge1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIGhlaWdodDogODBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQzLjc1ZW0pIHtcbiAgLmJhY2tzcGFjZUltZyB7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMzc1cHgpIHtcbiAgLmJhY2tzcGFjZUltZyB7XG4gICAgd2lkdGg6IDQ1cHg7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICB9XG59XG5cbi5ib3R0b20ge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc2VjdGlvbk9uZSxcbi5zZWN0aW9uVHdvLFxuLnNlY3Rpb25UaHJlZSxcbi5zZWN0aW9uRm91cixcbi5zZWN0aW9uU2l4IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5zZWN0aW9uT25lID4gZGl2LFxuLnNlY3Rpb25Ud28gPiBkaXYsXG4uc2VjdGlvblRocmVlID4gZGl2LFxuLnNlY3Rpb25Gb3VyID4gZGl2LFxuLnNlY3Rpb25TaXggPiBkaXYge1xuICBwYWRkaW5nOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZsZXgtZ3JvdzogMTtcbiAgd2lkdGg6IDQzcHg7XG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIGdvbGRlbnJvZDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGdvbGRlbnJvZDtcbn1cblxuLnBvd2VyU3F1YXJlOmFjdGl2ZSAqLCAucG93ZXJTcXVhcmU6YWN0aXZlLCAub3BlcmF0b3I6YWN0aXZlLFxuLmVxdWFsOmFjdGl2ZSxcbi5jbGVhcjphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM4LCAxOTIsIDE1MCkgIWltcG9ydGFudDtcbiAgb3BhY2l0eTogMjAlO1xufVxuXG4ucG93ZXJTcXVhcmU6aG92ZXIgKiwgLnBvd2VyU3F1YXJlOmhvdmVyLCAub3BlcmF0b3I6aG92ZXIsXG4uZXF1YWw6aG92ZXIsXG4uY2xlYXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICBjb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XG59XG5cbi5vcGVyYXRvcixcbi5lcXVhbCxcbi5jbGVhciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjgsIDEyMiwgMTIyKTtcbiAgY29sb3I6IHZhcigtLW51bWJlci1iYWNrZ3JvdW5kKTtcbn1cbi5vcGVyYXRvcixcbi5lcXVhbCxcbi5jbGVhciB7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4yNXM7XG59XG5cbi5wb3dlclNxdWFyZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjgsIDEyMiwgMTIyKTtcbiAgY29sb3I6IHZhcigtLW51bWJlci1iYWNrZ3JvdW5kKTtcbn1cbi5wb3dlclNxdWFyZSA+IHN1cCB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyOCwgMTIyLCAxMjIpO1xuICBjb2xvcjogdmFyKC0tbnVtYmVyLWJhY2tncm91bmQpO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDkwZW0pIHtcbiAgLnBvd2VyU3F1YXJlID4gc3VwIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1Ni4yNWVtKSB7XG4gIC5wb3dlclNxdWFyZSA+IHN1cCB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0My43NWVtKSB7XG4gIC5wb3dlclNxdWFyZSA+IHN1cCB7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gIH1cbn1cbi5udW1iIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbnVtYmVyLWJhY2tncm91bmQpO1xuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4yNXM7XG59XG4ubnVtYjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xuICBvcGFjaXR5OiA4MCU7XG59XG4ubnVtYjphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM4LCAxOTIsIDE1MCk7XG4gIG9wYWNpdHk6IDIwJTtcbn1cblxuLmZsaXBTaWduIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbnVtYmVyLWJhY2tncm91bmQpO1xuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4yNXM7XG59XG4uZmxpcFNpZ246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgb3BhY2l0eTogODAlO1xufVxuLmZsaXBTaWduOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzgsIDE5MiwgMTUwKTtcbiAgb3BhY2l0eTogMjAlO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQzLjc1ZW0pIHtcbiAgLmZsaXBTaWduIHtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgfVxufVxuXG46cm9vdCB7XG4gIC0tZm9udC1jb2xvcjogcmdiYSgyMDQsIDI3LCAyNywgMC44NTYpO1xuICAtLWJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAtLW51bWJlci1iYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuaDEge1xuICBmb250LXNpemU6IDVyZW07XG4gIG1hcmdpbjogMjBweDtcbiAgY29sb3I6IHJnYig2NSwgNTQsIDU0KTtcbiAgZm9udC1mYW1pbHk6IFwiTm90byBTYW5zIE1vbm9cIiwgbW9ub3NwYWNlO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDkwZW0pIHtcbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU2LjI1ZW0pIHtcbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQzLjc1ZW0pIHtcbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICB9XG59XG5cbmJ1dHRvbiB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbnVtYmVyLWJhY2tncm91bmQpO1xufVxuXG4ubWFpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5jb250ZW50IHtcbiAgd2lkdGg6IDY1MHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCBnb2xkZW5yb2QgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XG4gIGJveC1zaGFkb3c6IDNweCAzcHggMjBweCB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0My43NWVtKSB7XG4gIC5jb250ZW50IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3Nhc3MvZ2xvYmFscy9fYm9pbGVyUGxhdGVzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zYXNzL3N0eWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zYXNzL3V0aWxzL2JyZWFrUG9pbnRzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zYXNzL2NvbXBvbmVudHMvdG9wLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zYXNzL2NvbXBvbmVudHMv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SHNJRjtBQUNGOztBQXRQQTtFQUNFLHNDQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtBQXlQRjs7QUF0UEE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esd0NBQUE7QUF5UEY7QUM5UEU7RURDRjtJQU1JLGVBQUE7RUEyUEY7QUFDRjtBQ25RRTtFRENGO0lBU0ksZUFBQTtFQTZQRjtBQUNGO0FDeFFFO0VEQ0Y7SUFZSSxpQkFBQTtFQStQRjtBQUNGOztBQTVQQTtFQUNFLFlBQUE7RUFDQSwwQ0FBQTtBQStQRjs7QUE1UEE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUErUEY7O0FBNVBBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQ0FBQTtFQUNBLG1CQUFBO0VBQ0EseUNBQUE7RUFDQSxnREFBQTtBQStQRjtBQ2xTRTtFRDZCRjtJQVFJLFdBQUE7RUFpUUY7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAdXNlIFxcXCIuLi91dGlscy9cXFwiIGFzIHV0O1xcclxcbioge1xcclxcbiAgZm9udC1zaXplOiAzLjFyZW07XFxyXFxuICBmb250LWZhbWlseTogXFxcIlRyZWJ1Y2hldCBNU1xcXCIsIFxcXCJMdWNpZGEgU2FucyBVbmljb2RlXFxcIiwgXFxcIkx1Y2lkYSBHcmFuZGVcXFwiLFxcclxcbiAgICBcXFwiTHVjaWRhIFNhbnNcXFwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG4gIGJvcmRlci1jb2xvcjogcmdiKDc3LCA0MCwgMTYpICFpbXBvcnRhbnQ7XFxyXFxuICBAaW5jbHVkZSB1dC5icmVha3BvaW50KHhMYXJnZSkge1xcclxcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG4gIH1cXHJcXG4gIEBpbmNsdWRlIHV0LmJyZWFrcG9pbnQobGFyZ2UpIHtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgfVxcclxcbiAgQGluY2x1ZGUgdXQuYnJlYWtwb2ludChtZWRpdW0pIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICB9XFxyXFxufVxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MiwgMTkwLCAxOTApO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBmb250LXNpemU6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi8vICosXFxyXFxuLy8gKjo6YmVmb3JlLFxcclxcbi8vICo6OmFmdGVyIHtcXHJcXG4vLyAgIGJveC1zaXppbmc6IGluaGVyaXQ7XFxyXFxuLy8gfVxcclxcblwiLFwiQGZvcndhcmQgXFxcImdsb2JhbHNcXFwiO1xcclxcbkBmb3J3YXJkIFxcXCJjb21wb25lbnRzXFxcIjtcXHJcXG5AdXNlIFxcXCIuL3V0aWxzL1xcXCIgYXMgdXQ7XFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgLS1mb250LWNvbG9yOiByZ2JhKDIwNCwgMjcsIDI3LCAwLjg1Nik7XFxyXFxuICAtLWJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgLS1udW1iZXItYmFja2dyb3VuZDogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbmgxIHtcXHJcXG4gIGZvbnQtc2l6ZTogNXJlbTtcXHJcXG4gIG1hcmdpbjogMjBweDtcXHJcXG4gIGNvbG9yOiByZ2IoNjUsIDU0LCA1NCk7XFxyXFxuICBmb250LWZhbWlseTogXFxcIk5vdG8gU2FucyBNb25vXFxcIiwgbW9ub3NwYWNlO1xcclxcbiAgQGluY2x1ZGUgdXQuYnJlYWtwb2ludCh4TGFyZ2UpIHtcXHJcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcclxcbiAgfVxcclxcbiAgQGluY2x1ZGUgdXQuYnJlYWtwb2ludChsYXJnZSkge1xcclxcbiAgICBmb250LXNpemU6IDNyZW07XFxyXFxuICB9XFxyXFxuICBAaW5jbHVkZSB1dC5icmVha3BvaW50KG1lZGl1bSkge1xcclxcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW51bWJlci1iYWNrZ3JvdW5kKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQge1xcclxcbiAgd2lkdGg6IDY1MHB4O1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGdvbGRlbnJvZCAhaW1wb3J0YW50O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcclxcbiAgYm94LXNoYWRvdzogM3B4IDNweCAyMHB4IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcclxcbiAgQGluY2x1ZGUgdXQuYnJlYWtwb2ludChtZWRpdW0pIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICB9XFxyXFxufVxcclxcblwiLFwiJGJyZWFrcG9pbnRzOiAoXFxyXFxuICBcXFwieFNtYWxsXFxcIjogMzIwcHgsXFxyXFxuICBcXFwic21hbGxcXFwiOiAzNzVweCxcXHJcXG4gIFxcXCJtZWRpdW1cXFwiOiA0My43NWVtLFxcclxcbiAgXFxcImxhcmdlXFxcIjogNTYuMjVlbSxcXHJcXG4gIFxcXCJ4TGFyZ2VcXFwiOiA5MGVtLFxcclxcbik7XFxyXFxuXFxyXFxuQG1peGluIGJyZWFrcG9pbnQoJHNpemUpIHtcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cywkc2l6ZSkpIHtcXHJcXG4gICAgQGNvbnRlbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcblwiLFwiQHVzZSBcXFwiLi4vdXRpbHMvXFxcIiBhcyB1dDtcXHJcXG5cXHJcXG4udG9wIHtcXHJcXG4gIG1hcmdpbi10b3A6IDVweDtcXHJcXG4gIGJvcmRlcjogMi41cHggc29saWQgcmdiKDIyOCwgMTUyLCAxKSAhaW1wb3J0YW50O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VjdGlvbkZpdmUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gICYgPiBkaXYge1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLy8gIVxcclxcblxcclxcbi5kaXNwbGF5IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbnVtYmVyLWJhY2tncm91bmQpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi5wcmV2aW91c051bWJlckRpc3BsYXkge1xcclxcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBAaW5jbHVkZSB1dC5icmVha3BvaW50KHhMYXJnZSkge1xcclxcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG4gIH1cXHJcXG4gIEBpbmNsdWRlIHV0LmJyZWFrcG9pbnQobGFyZ2UpIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICB9XFxyXFxuICBAaW5jbHVkZSB1dC5icmVha3BvaW50KG1lZGl1bSkge1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIH1cXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXAtcmV2ZXJzZTtcXHJcXG59XFxyXFxuXFxyXFxuLmN1cnJlbnROdW1iZXJEaXNwbGF5IHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXHJcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4vLyAhXFxyXFxuXFxyXFxuJWJhY2tzcGFjZUFjdGl2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XFxyXFxufVxcclxcbiViYWNrc3BhY2VIb3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xcclxcbn1cXHJcXG5cXHJcXG4uYmFja3NwYWNlIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHdpZHRoOiAyMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMjVzLCBiYWNrZ3JvdW5kLWNvbG9yIDAuMjVzO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxyXFxuICAmOmFjdGl2ZSB7XFxyXFxuICAgIEBleHRlbmQgJWJhY2tzcGFjZUFjdGl2ZTtcXHJcXG4gIH1cXHJcXG4gICY6aG92ZXIge1xcclxcbiAgICBAZXh0ZW5kICViYWNrc3BhY2VIb3ZlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIEBpbmNsdWRlIHV0LmJyZWFrcG9pbnQobWVkaXVtKSB7XFxyXFxuICAgIHdpZHRoOiAxNC41JTtcXHJcXG4gIH1cXHJcXG4gIEBpbmNsdWRlIHV0LmJyZWFrcG9pbnQoc21hbGwpIHtcXHJcXG4gICAgd2lkdGg6IDExJTtcXHJcXG4gIH1cXHJcXG4gICZJbWcge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjI1cztcXHJcXG4gICAgQGluY2x1ZGUgdXQuYnJlYWtwb2ludCh4TGFyZ2UpIHtcXHJcXG4gICAgICB3aWR0aDogOTBweDtcXHJcXG4gICAgICBoZWlnaHQ6IDkwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgQGluY2x1ZGUgdXQuYnJlYWtwb2ludChsYXJnZSkge1xcclxcbiAgICAgIHdpZHRoOiA4MHB4O1xcclxcbiAgICAgIGhlaWdodDogODBweDtcXHJcXG4gICAgfVxcclxcbiAgICBAaW5jbHVkZSB1dC5icmVha3BvaW50KG1lZGl1bSkge1xcclxcbiAgICAgIHdpZHRoOiA2MHB4O1xcclxcbiAgICAgIGhlaWdodDogNjBweDtcXHJcXG4gICAgfVxcclxcbiAgICBAaW5jbHVkZSB1dC5icmVha3BvaW50KHNtYWxsKSB7XFxyXFxuICAgICAgd2lkdGg6IDQ1cHg7XFxyXFxuICAgICAgaGVpZ2h0OiA0NXB4O1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5iYWNrc3BhY2U6YWN0aXZlICoge1xcclxcbiAgQGV4dGVuZCAlYmFja3NwYWNlQWN0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uYmFja3NwYWNlOmhvdmVyICoge1xcclxcbiAgQGV4dGVuZCAlYmFja3NwYWNlSG92ZXI7XFxyXFxufVxcclxcblwiLFwiQHVzZSBcXFwiLi4vdXRpbHMvXFxcIiBhcyB1dDtcXHJcXG5cXHJcXG4uYm90dG9tIHtcXHJcXG4gIG1hcmdpbi10b3A6IDVweDtcXHJcXG4gIGJvcmRlci1yaWdodDogbm9uZTtcXHJcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uT25lLFxcclxcbi5zZWN0aW9uVHdvLFxcclxcbi5zZWN0aW9uVGhyZWUsXFxyXFxuLnNlY3Rpb25Gb3VyLFxcclxcbi5zZWN0aW9uU2l4IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAmID4gZGl2IHtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmbGV4LWdyb3c6IDE7XFxyXFxuICAgIHdpZHRoOiA0M3B4O1xcclxcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCBnb2xkZW5yb2Q7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBnb2xkZW5yb2Q7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi8vICFcXHJcXG4lYnV0dG9uQWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzgsIDE5MiwgMTUwKSAhaW1wb3J0YW50O1xcclxcbiAgb3BhY2l0eTogMjAlO1xcclxcbn1cXHJcXG5cXHJcXG4lYnV0dG9uSG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuJWJ1dHRvblN0eWxlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjgsIDEyMiwgMTIyKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1udW1iZXItYmFja2dyb3VuZCk7XFxyXFxuICAmOmhvdmVyIHtcXHJcXG4gICAgQGV4dGVuZCAlYnV0dG9uSG92ZXI7XFxyXFxuICB9XFxyXFxuICAmOmFjdGl2ZSB7XFxyXFxuICAgIEBleHRlbmQgJWJ1dHRvbkFjdGl2ZTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLm9wZXJhdG9yLFxcclxcbi5lcXVhbCxcXHJcXG4uY2xlYXIge1xcclxcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjI1cztcXHJcXG4gIEBleHRlbmQgJWJ1dHRvblN0eWxlO1xcclxcbn1cXHJcXG5cXHJcXG4ucG93ZXJTcXVhcmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyOCwgMTIyLCAxMjIpO1xcclxcbiAgY29sb3I6IHZhcigtLW51bWJlci1iYWNrZ3JvdW5kKTtcXHJcXG4gICYgPiBzdXAge1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjgsIDEyMiwgMTIyKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLW51bWJlci1iYWNrZ3JvdW5kKTtcXHJcXG4gICAgQGluY2x1ZGUgdXQuYnJlYWtwb2ludCh4TGFyZ2UpIHtcXHJcXG4gICAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgQGluY2x1ZGUgdXQuYnJlYWtwb2ludChsYXJnZSkge1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICB9XFxyXFxuICAgIEBpbmNsdWRlIHV0LmJyZWFrcG9pbnQobWVkaXVtKSB7XFxyXFxuICAgICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gICY6aG92ZXIge1xcclxcbiAgICBAZXh0ZW5kICVidXR0b25Ib3ZlcjtcXHJcXG4gIH1cXHJcXG4gICY6YWN0aXZlIHtcXHJcXG4gICAgQGV4dGVuZCAlYnV0dG9uQWN0aXZlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4vLyAhXFxyXFxuXFxyXFxuLnBvd2VyU3F1YXJlOmhvdmVyICoge1xcclxcbiAgQGV4dGVuZCAlYnV0dG9uSG92ZXI7XFxyXFxufVxcclxcbi5wb3dlclNxdWFyZTphY3RpdmUgKiB7XFxyXFxuICBAZXh0ZW5kICVidXR0b25BY3RpdmU7XFxyXFxufVxcclxcblxcclxcbi5udW1iIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW51bWJlci1iYWNrZ3JvdW5kKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXHJcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4yNXM7XFxyXFxuICAmOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxyXFxuICAgIG9wYWNpdHk6IDgwJTtcXHJcXG4gIH1cXHJcXG4gICY6YWN0aXZlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzOCwgMTkyLCAxNTApO1xcclxcbiAgICBvcGFjaXR5OiAyMCU7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5mbGlwU2lnbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1udW1iZXItYmFja2dyb3VuZCk7XFxyXFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxyXFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMjVzO1xcclxcbiAgJjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcclxcbiAgICBvcGFjaXR5OiA4MCU7XFxyXFxuICB9XFxyXFxuICAmOmFjdGl2ZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzgsIDE5MiwgMTUwKTtcXHJcXG4gICAgb3BhY2l0eTogMjAlO1xcclxcbiAgfVxcclxcbiAgQGluY2x1ZGUgdXQuYnJlYWtwb2ludChtZWRpdW0pIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07Il0sIm5hbWVzIjpbInVzZXJJbnB1dCIsImN1cnJlbnROdW1iZXJEaXNwbGF5IiwiQmFja1NwYWNlQnV0dG9uIiwiYmFja3NwYWNlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRleHRPbmUiLCJzbGljZSIsInRleHRDb250ZW50IiwiY29uc29sZSIsImxvZyIsInByZXZpb3VzTnVtYmVyRGlzcGxheSIsIkNsZWFyQnV0dG9uIiwiY2xlYXIiLCJ0ZXh0VHdvIiwic2lnbiIsInJlc3VsdCIsImlzU2lnbiIsImlzRXF1YWwiLCJGbGlwU2lnbkJ1dHRvbiIsImZsaXBTaWduIiwiUm91bmRGbG9hdCIsIlBvd2VyQnV0dG9uIiwicG93ZXJTcXVhcmUiLCJDYWxjdWxhdGVXaXRoT3V0RXF1YWwiLCJlIiwiYWRkTnVtV2l0aG91dEVxdWFsIiwicGFyc2VGbG9hdCIsInRhcmdldCIsInN1YnRyYWN0TnVtV2l0aG91dEVxdWFsIiwibXVsdGlwbGVOdW1XaXRob3V0RXF1YWwiLCJkaXZpZGVOdW1XaXRob3V0RXF1YWwiLCJwZXJjZW50YWdlTnVtV2l0aG91dEVxdWFsIiwiU2VsZWN0T3BlcmF0b3JzIiwiU2VsZWN0TnVtYmVycyIsIkVxdWFsQnV0dG9uUmVzZXQiLCJlcXVhbCIsIkVxdWFsQnV0dG9uIiwiYWRkTnVtIiwic3VidHJhY3ROdW0iLCJtdWx0aXBsZU51bSIsImRpdmlkZU51bSIsInBlcmNlbnRhZ2VOdW0iLCJGaXJzdE51bWJlciIsImxlbmd0aCIsIlNlY29uZE51bWJlciIsIk9wZXJhdG9yU2VsZWN0IiwiT3BlcmF0b3JTZWxlY3RGbmMiLCJzdHlsZSIsInZpc2liaWxpdHkiLCJyZXN1bHRMZW5ndGgiLCJ0b1N0cmluZyIsImluY2x1ZGVzIiwiTnVtYmVyIiwidG9GaXhlZCIsImN1c3RvbUV2ZW50IiwibnVtYnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsIm51bWIiLCJvcGVyYXRvcnMiLCJvcGVyYXRvciIsImNhbGN1bGF0b3IiXSwic291cmNlUm9vdCI6IiJ9