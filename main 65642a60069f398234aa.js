"use strict";
(self["webpackChunkcalculator"] = self["webpackChunkcalculator"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/style.scss */ "./src/sass/style.scss");
/* harmony import */ var _sass_component_RoundFloat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sass/component/RoundFloat */ "./src/sass/component/RoundFloat.js");


const numbs = document.querySelectorAll(".numb");
const operators = document.querySelectorAll(".operator");
const clear = document.querySelector(".clear");
const backspace = document.querySelector(".backspace");
const equal = document.querySelector(".equal");
const flipSign = document.querySelector(".flipSign");
const powerSquare = document.querySelector(".powerSquare");
const currentNumberDisplay = document.querySelector(".currentNumberDisplay");
const previousNumberDisplay = document.querySelector(".previousNumberDisplay");
let textOne = "";
let textTwo = "";
let textThree = "";
let textFour = "";
let sign = "";
let previousSign = "";
let result = "";
let resultTwo = "";
let isSigned = false;
calculator();
function loopNumbers(customEvent) {
  numbs.forEach(numb => {
    numb.addEventListener("click", customEvent);
  });
}
function loopOperators(customEvent) {
  operators.forEach(operator => {
    operator.addEventListener("click", customEvent);
  });
}
function calculator() {
  previousNumberDisplay.textContent = 0;
  previousNumberDisplay.style.visibility = "hidden";
  loopNumbers(firstNumberSelect);
  operatorSelect();
  backSpaceButton();
  flipSignButton();
  equalButton();
  powerButton();
  clearButton();
}
function firstNumberSelect(e) {
  if (textOne.length < 13) {
    textOne += e.target.textContent; // += for writing number adjacent
    currentNumberDisplay.textContent = textOne;
    isSigned = false;
    console.log(`This is TextOne ${textOne}`);
  }
}
function operatorSelectFnc(e) {
  console.log(`This is operatorButtonPressed `);
  if (!isSigned) {
    isSigned = true; // disable selecting multiple sign
    sign = e.target.textContent;
    currentNumberDisplay.textContent += ` ${sign} `;
    previousNumberDisplay.textContent = currentNumberDisplay.textContent;
    previousNumberDisplay.style.visibility = "visible";
    currentNumberDisplay.textContent = "";
    // currentNumberDisplay.style.marginTop = "31.5px";

    // Clears After an operator is selected
    textTwo = textOne; // stores the value so that textOne can get a fresh value
    textOne = "";

    // Calculating without using Equal button
    if (!result && sign === "+", "-", "*", "/") {
      console.log(`This is If Operator ${sign}`);
      loopNumbers(CalculatingWithoutEqual);
    }
  }
}
function operatorSelect() {
  loopOperators(operatorSelectFnc);
}
function CalculatingWithoutEqualFnc(e) {
  // Same Operator Adjacent Calculation
  if (previousSign === sign) {
    calculatingWithoutEqualSameSign();
  }
  // Different Operator Adjacent Calculation
  else {
    calculatingWithoutEqualDifferentSign(e);
  }
}
function CalculatingWithoutEqual() {
  console.log(`  Number for NotEqualButton  `);
  textThree = textOne;
  textFour = textTwo;

  // Calculate the result before hand so that we can use it for nonAdjacentOperatorCalculation
  if (sign === "+") {
    previousSign = sign;
    console.log(resultTwo = +textFour + +textThree);
  }
  if (sign === "-") {
    previousSign = sign;
    console.log(resultTwo = +textFour - +textThree);
  }
  if (sign === "*") {
    previousSign = sign;
    console.log(resultTwo = +textFour * +textThree);
  }
  if (sign === "/") {
    previousSign = sign;
    console.log(resultTwo = +textFour / +textThree);
  }
  loopOperators(CalculatingWithoutEqualFnc);
}
function calculatingWithoutEqualSameSignFnc(e) {
  console.log(`-------------This is Continuos Result Inside Inside ${resultTwo}----------------`);
  textTwo = resultTwo;
  previousNumberDisplay.textContent = `${textTwo}  ${e.target.textContent}`;
  currentNumberDisplay.textContent = "";
  sign = e.target.textContent;
}
function calculatingWithoutEqualSameSign() {
  console.log("  previousSign === sign  ");
  if (sign === "+") {
    console.log(`  Adjacent Adding Without EqualButton`);
    resultTwo = +textFour + +textThree;
    previousNumberDisplay.textContent = ` ${textFour} ${sign} ${textThree}`;
    currentNumberDisplay.textContent = resultTwo;
    console.log(`This is resultTwo ${resultTwo}`);
  }
  if (sign === "-") {
    console.log(`  Adjacent Subtracting Without EqualButton`);
    resultTwo = +textFour - +textThree;
    previousNumberDisplay.textContent = ` ${textFour} ${sign} ${textThree}`;
    currentNumberDisplay.textContent = resultTwo;
    console.log(`This is resultTwo ${resultTwo}`);
  }
  if (sign === "*") {
    console.log(`  Adjacent Multiplying Without EqualButton`);
    resultTwo = +textFour * +textThree;
    previousNumberDisplay.textContent = ` ${textFour} ${sign} ${textThree}`;
    currentNumberDisplay.textContent = resultTwo;
    console.log(`This is resultTwo ${resultTwo}`);
  }
  if (sign === "/") {
    console.log(`  Adjacent Dividing Without EqualButton `);
    resultTwo = +textFour / +textThree;
    previousNumberDisplay.textContent = ` ${textFour} ${sign} ${textThree}`;
    currentNumberDisplay.textContent = resultTwo;
    console.log(`This is resultTwo ${resultTwo}`);
  }

  //  Adjacent Number Continuos - Calculation
  loopOperators(calculatingWithoutEqualSameSignFnc);
}
function calculatingWithoutEqualDifferentSign(e) {
  console.log(`previousSign !== sign`);
  previousNumberDisplay.textContent = ` ${resultTwo} ${e.target.textContent}  `;
  textTwo = resultTwo;
  loopNumbers(calculatingWithoutEqualDifferentSignFnc);
}
function calculatingWithoutEqualDifferentSignFnc() {
  console.log(`previousSign !== sign H!`);
  if (sign === "+") {
    resultTwo = +textTwo + +textOne;
    console.log("Diff Adjacent Result Adding Continuos");
  }
  if (sign === "-") {
    resultTwo = +textTwo - +textOne;
    console.log("Diff Adjacent Result Subtracting Continuos ");
  }
  if (sign === "*") {
    resultTwo = +textTwo * +textOne;
    console.log("Diff Adjacent Result Multiplying Continuos ");
  }
  if (sign === "/") {
    resultTwo = +textTwo / +textOne;
    console.log("Diff Adjacent Result Dividing Continuos ");
  }
}

// --------------------------- Button Declaration ------------------------------------- //

function clearButton() {
  clear.addEventListener("click", () => {
    console.clear();
    textOne = "";
    textTwo = "";
    textThree = "";
    textFour = "";
    currentNumberDisplay.textContent = 0;
    previousNumberDisplay.textContent = 0;
    // sign = "";
    // previousSign = "";
    result = "";
    // resultTwo = "";
    // isSigned = false;
    // resultPredefined = "";
    // currentNumberDisplay.classList.remove("resultSize");
    // currentNumberDisplay.style.marginTop = "62px";
  });
}

function backSpaceButton() {
  backspace.addEventListener("click", () => {
    textOne = textOne.slice(0, -1);
    currentNumberDisplay.textContent = textOne;
    console.log(textOne);
    console.log("backSpace");
  });
}
function flipSignButton() {
  flipSign.addEventListener("click", e => {
    console.log("flipped");
    if (textOne > 0) {
      currentNumberDisplay.textContent = -currentNumberDisplay.textContent;
      textOne = currentNumberDisplay.textContent;
    } else {
      currentNumberDisplay.textContent = -currentNumberDisplay.textContent;
      textOne = currentNumberDisplay.textContent;
    }
  });
}
function powerButton() {
  powerSquare.addEventListener("click", () => {
    // currentNumberDisplay.style.marginTop = "35px";
    if (resultTwo) {
      console.log("Else not hello");
      result = resultTwo * resultTwo;
      result = (0,_sass_component_RoundFloat__WEBPACK_IMPORTED_MODULE_1__["default"])(result); // rounds the value to 5 point
      currentNumberDisplay.textContent = result;
      previousNumberDisplay.textContent = `Sqr(${resultTwo})`;
      console.log(`Power Result Two${result}`);
    } else {
      result = textOne * textOne;
      result = (0,_sass_component_RoundFloat__WEBPACK_IMPORTED_MODULE_1__["default"])(result); // rounds the value to 5 point
      currentNumberDisplay.textContent = result;
      previousNumberDisplay.textContent = `Sqr(${textOne})`;
      console.log("well hello");
      console.log(textOne);
      textOne = result;
    }
    isSigned = false;
  });
}
function equalButton() {
  equal.addEventListener("click", () => {
    if (textOne && textTwo) {
      isSigned = false;
      //   currentNumberDisplay.classList.add("resultSize");
      if (sign === "+") {
        addNum();
      }
      if (sign === "*") {
        multipleNum();
      }
      if (sign === "-") {
        subtractNum();
      }
      if (sign === "/") {
        divideNum();
      }
      if (sign === "%") {
        percentageNum();
      }

      // Continuous Calculating
      loopNumbers(equalButtonResetCalculation);

      // Reset the Result if the user press a number after using the Equal button
      loopOperators(equalButtonContinueCalculation); // FIXXXXXXXXXX [after getting result from equal .....clear ....add again [opposite sign ]]
    }
  });
}

// --------------------------- Function Declaration ------------------------------------- //

// Store both the value and when the equal button is pressed we check for the signs

function equalButtonContinueCalculation() {
  console.log(`----------------Continuous Calculating [Equal]-------------------} `);
  textTwo = result;
  previousNumberDisplay.textContent = ` ${textTwo} ${sign} `;
  currentNumberDisplay.textContent = "";
}
function equalButtonResetCalculation() {
  console.log("-------- Clears the result when pressed on a number  [Equal] ---------");
  loopOperators(equalButtonContinueCalculation);

  // previousNumberDisplay.textContent = "";
  // currentNumberDisplay.textContent = textOne;
  result = "";
}

// --------------------------- Operator Function------------------------------------- //
const addNum = () => {
  result = +textOne + +textTwo; // +textTwo converts a string to a number
  previousNumberDisplay.textContent = `${textTwo} + ${textOne} `;
  currentNumberDisplay.textContent = result;
  //   currentNumberDisplay.style.marginTop = "50px";
  textOne = ""; // erase the result value from text so that we can continuously add number
  textTwo = "";
};
const subtractNum = () => {
  result = +textTwo - +textOne;
  previousNumberDisplay.textContent = `${textTwo} - ${textOne} `;
  currentNumberDisplay.textContent = result;
  //   currentNumberDisplay.style.marginTop = "50px";
  textOne = "";
  textTwo = "";
};
const multipleNum = () => {
  result = +textOne * +textTwo;
  previousNumberDisplay.textContent = `${textTwo} * ${textOne} `;
  currentNumberDisplay.textContent = result;
  //   currentNumberDisplay.style.marginTop = "50px";
  textOne = "";
  textTwo = "";
};
const divideNum = () => {
  if (textOne === "0") {
    previousNumberDisplay.textContent = `${textTwo} / ${textOne}`;
    currentNumberDisplay.textContent = "Error";
    // currentNumberDisplay.style.marginTop = "50px";
    textOne = "";
    textTwo = "";
    console.log("Cannot divide by 0");
  } else {
    result = +textTwo / +textOne;
    const newLength = result.toString().length; // converted the result to a string
    console.log(`I lengthen It ${newLength}`);

    // if the string value is greater than 12 [maximum number which can fit in a calculator] round the value
    if (newLength > 12) {
      result = (0,_sass_component_RoundFloat__WEBPACK_IMPORTED_MODULE_1__["default"])(result); // rounds the value to 5 point
      previousNumberDisplay.textContent = `${textTwo} / ${textOne}`;
      currentNumberDisplay.textContent = result;
      //   currentNumberDisplay.style.marginTop = "50px";
      textOne = "";
      textTwo = "";
      console.log("round number");
    } else {
      previousNumberDisplay.textContent = `${textTwo} / ${textOne}`;
      currentNumberDisplay.textContent = result;
      //   currentNumberDisplay.style.marginTop = "50px";
      textOne = "";
      textTwo = "";
      console.log("normal number");
    }
  }
};
const percentageNum = () => {
  //   currentNumberDisplay.style.marginTop = "50px";
  result = textTwo / 100 * textOne;
  result = (0,_sass_component_RoundFloat__WEBPACK_IMPORTED_MODULE_1__["default"])(result); // rounds the value to 5 point
  previousNumberDisplay.textContent = `${textTwo} % ${textOne}`;
  currentNumberDisplay.textContent = result;
  console.log(`This is Percentage ${result}`);
  textOne = "";
  textTwo = "";
};

/***/ }),

/***/ "./src/sass/component/RoundFloat.js":
/*!******************************************!*\
  !*** ./src/sass/component/RoundFloat.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RoundFloat)
/* harmony export */ });
function RoundFloat(result) {
  return Number.parseFloat(result).toFixed(5);
}

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
  font-size: 50px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial, sans-serif;
  background-color: rgb(192, 190, 190);
  border-color: rgb(77, 40, 16) !important;
}

html {
  box-sizing: border-box;
  font-size: 100%;
}

h1 {
  font-size: 80px;
  margin: 20px;
  color: rgb(65, 54, 54);
  /* font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; */
  font-family: "Noto Sans Mono", monospace;
}

.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
}

.content {
  width: 500px;
  padding: 10px;
  border: 2px solid goldenrod !important;
  border-radius: 10px;
  background-color: rgb(15, 0, 0);
  box-shadow: 3px 3px 20px rgb(0, 0, 0);
}

.previousNumberDisplay {
  font-size: 22px;
  padding-right: 5px;
  display: flex;
  flex-wrap: wrap-reverse;
}

.currentNumberDisplay {
  margin-right: 5px;
}

.sectionOne,
.sectionTwo,
.sectionThree,
.sectionFour,
.sectionFive,
.sectionSix {
  display: flex;
}

/*Border Fixing --------------------------------------*/
.bottom {
  margin-top: 5px;
  border-right: none;
  border-bottom: none;
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

.top {
  margin-top: 5px;
  border: 2.5px solid rgb(228, 152, 1) !important;
  border-radius: 5px;
}

.sectionFive {
  height: 150px;
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
  width: 75%;
  padding: 0px !important;
  background-color: rgb(255, 255, 255);
  border-radius: 0px !important;
}

/* Button Styling --------------------------------------*/
sup,
.operator,
.clear,
.equal,
.powerSquare,
.operator > button,
.clear > button,
.equal > button,
.powerSquare > button {
  background-color: rgb(128, 122, 122);
  color: aliceblue;
}

.numb,
.flipSign,
.numb > button,
.flipSign > button,
.currentNumberDisplay,
.previousNumberDisplay {
  background-color: rgb(255, 255, 255);
  color: rgba(204, 27, 27, 0.856);
}

/* -------------------------------------------------- */
sup {
  font-size: 30px;
}

.sectionFive {
  height: 120px;
}

.clear {
  padding-left: 20px;
  padding-top: 5px;
}

.backspace,
.backspaceImg {
  background-color: rgb(15, 0, 0);
}

.backspace {
  width: 83px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.5s;
}

.backspaceImg {
  width: 100%;
  height: 100%;
  transition: background-color 0.5s;
}

.resultSize {
  font-size: 38px;
  margin-top: 95px;
}

button {
  border: none;
  background-color: white;
}

.bottom,
.backspace * {
  cursor: pointer;
}

/* Hover and Transition --------------------------------------*/
.numb:hover,
.flipSign:hover {
  background-color: black;
  opacity: 80%;
  transition: background-color 0.25s;
}

.numb:active,
.flipSign:active {
  background-color: rgb(238, 192, 150);
  opacity: 20%;
  transition: background-color 0.05s;
}

.operator:hover,
.equal:hover,
.clear:hover,
.sectionSix > .powerSquare:hover,
.sectionSix > .powerSquare:hover * {
  background-color: whitesmoke;
  transition: background-color 0.25s;
  color: black;
}

.operator:active,
.equal:active,
.clear:active,
.sectionSix > .powerSquare:active,
.sectionSix > .powerSquare:active * {
  background-color: rgb(238, 192, 150);
  opacity: 20%;
  transition: background-color 0.25s;
}

.backspace:active *,
.backspace:active {
  background-color: whitesmoke;
  transition: ease-out;
}`, "",{"version":3,"sources":["webpack://./src/sass/globals/_boilerPlates.scss","webpack://./src/sass/style.scss"],"names":[],"mappings":"AAAA;EACE,eAAA;EACA,qGAAA;EAEA,oCAAA;EACA,wCAAA;ACAF;;ADGA;EACE,sBAAA;EACA,eAAA;ACAF;;AARA;EACE,eAAA;EACA,YAAA;EACA,sBAAA;EACA,8EAAA;EACA,wCAAA;AAWF;;AARA;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,aAAA;AAWF;;AARA;EACE,YAAA;EACA,aAAA;EACA,sCAAA;EACA,mBAAA;EACA,+BAAA;EACA,qCAAA;AAWF;;AARA;EACE,eAAA;EACA,kBAAA;EACA,aAAA;EACA,uBAAA;AAWF;;AARA;EACE,iBAAA;AAWF;;AAPA;;;;;;EAME,aAAA;AAUF;;AAPA,uDAAA;AAEA;EACE,eAAA;EACA,kBAAA;EACA,mBAAA;AASF;;AANA;;;;;EAKE,aAAA;EACA,kBAAA;EACA,YAAA;EACA,WAAA;EACA,iCAAA;EACA,kCAAA;AASF;;AANA;EACE,eAAA;EACA,+CAAA;EACA,kBAAA;AASF;;AANA;EACE,aAAA;AASF;;AANA;EACE,aAAA;EACA,kBAAA;EACA,kBAAA;AASF;;AANA;EACE,aAAA;EACA,sBAAA;EACA,8BAAA;EACA,qBAAA;EACA,UAAA;EACA,uBAAA;EACA,oCAAA;EACA,6BAAA;AASF;;AANA,yDAAA;AACA;;;;;;;;;EASE,oCAAA;EACA,gBAAA;AASF;;AANA;;;;;;EAME,oCAAA;EACA,+BAAA;AASF;;AANA,uDAAA;AACA;EACE,eAAA;AASF;;AANA;EACE,aAAA;AASF;;AANA;EACE,kBAAA;EACA,gBAAA;AASF;;AANA;;EAEE,+BAAA;AASF;;AANA;EACE,WAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,iCAAA;AASF;;AANA;EACE,WAAA;EACA,YAAA;EACA,iCAAA;AASF;;AANA;EACE,eAAA;EACA,gBAAA;AASF;;AANA;EACE,YAAA;EACA,uBAAA;AASF;;AANA;;EAEE,eAAA;AASF;;AANA,+DAAA;AACA;;EAEE,uBAAA;EACA,YAAA;EACA,kCAAA;AASF;;AANA;;EAEE,oCAAA;EACA,YAAA;EACA,kCAAA;AASF;;AANA;;;;;EAKE,4BAAA;EACA,kCAAA;EACA,YAAA;AASF;;AANA;;;;;EAKE,oCAAA;EACA,YAAA;EACA,kCAAA;AASF;;AANA;;EAEE,4BAAA;EACA,oBAAA;AASF","sourcesContent":["* {\r\n  font-size: 50px;\r\n  font-family: \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\",\r\n    \"Lucida Sans\", Arial, sans-serif;\r\n  background-color: rgb(192, 190, 190);\r\n  border-color: rgb(77, 40, 16) !important;\r\n}\r\n\r\nhtml {\r\n  box-sizing: border-box;\r\n  font-size: 100%;\r\n}\r\n\r\n// *,\r\n// *::before,\r\n// *::after {\r\n//   box-sizing: inherit;\r\n// }\r\n","@forward \"globals\";\r\n\r\nh1 {\r\n  font-size: 80px;\r\n  margin: 20px;\r\n  color: rgb(65, 54, 54);\r\n  /* font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; */\r\n  font-family: \"Noto Sans Mono\", monospace;\r\n}\r\n\r\n.main {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: 10px;\r\n}\r\n\r\n.content {\r\n  width: 500px;\r\n  padding: 10px;\r\n  border: 2px solid goldenrod !important;\r\n  border-radius: 10px;\r\n  background-color: rgb(15, 0, 0);\r\n  box-shadow: 3px 3px 20px rgb(0, 0, 0);\r\n}\r\n\r\n.previousNumberDisplay {\r\n  font-size: 22px;\r\n  padding-right: 5px;\r\n  display: flex;\r\n  flex-wrap: wrap-reverse;\r\n}\r\n\r\n.currentNumberDisplay {\r\n  margin-right: 5px;\r\n  //   margin-top: 62px;\r\n}\r\n\r\n.sectionOne,\r\n.sectionTwo,\r\n.sectionThree,\r\n.sectionFour,\r\n.sectionFive,\r\n.sectionSix {\r\n  display: flex;\r\n}\r\n\r\n/*Border Fixing --------------------------------------*/\r\n\r\n.bottom {\r\n  margin-top: 5px;\r\n  border-right: none;\r\n  border-bottom: none;\r\n}\r\n\r\n.sectionOne > div,\r\n.sectionTwo > div,\r\n.sectionThree > div,\r\n.sectionFour > div,\r\n.sectionSix > div {\r\n  padding: 20px;\r\n  text-align: center;\r\n  flex-grow: 1;\r\n  width: 43px;\r\n  border-right: 2px solid goldenrod;\r\n  border-bottom: 2px solid goldenrod;\r\n}\r\n\r\n.top {\r\n  margin-top: 5px;\r\n  border: 2.5px solid rgb(228, 152, 1) !important;\r\n  border-radius: 5px;\r\n}\r\n\r\n.sectionFive {\r\n  height: 150px;\r\n}\r\n\r\n.sectionFive > div {\r\n  padding: 20px;\r\n  text-align: center;\r\n  border-radius: 5px;\r\n}\r\n\r\n.display {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  align-items: flex-end;\r\n  width: 75%;\r\n  padding: 0px !important;\r\n  background-color: rgb(255, 255, 255);\r\n  border-radius: 0px !important;\r\n}\r\n\r\n/* Button Styling --------------------------------------*/\r\nsup,\r\n.operator,\r\n.clear,\r\n.equal,\r\n.powerSquare,\r\n.operator > button,\r\n.clear > button,\r\n.equal > button,\r\n.powerSquare > button {\r\n  background-color: rgb(128, 122, 122);\r\n  color: aliceblue;\r\n}\r\n\r\n.numb,\r\n.flipSign,\r\n.numb > button,\r\n.flipSign > button,\r\n.currentNumberDisplay,\r\n.previousNumberDisplay {\r\n  background-color: rgb(255, 255, 255);\r\n  color: rgba(204, 27, 27, 0.856);\r\n}\r\n\r\n/* -------------------------------------------------- */\r\nsup {\r\n  font-size: 30px;\r\n}\r\n\r\n.sectionFive {\r\n  height: 120px;\r\n}\r\n\r\n.clear {\r\n  padding-left: 20px;\r\n  padding-top: 5px;\r\n}\r\n\r\n.backspace,\r\n.backspaceImg {\r\n  background-color: rgb(15, 0, 0);\r\n}\r\n\r\n.backspace {\r\n  width: 83px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  transition: background-color 0.5s;\r\n}\r\n\r\n.backspaceImg {\r\n  width: 100%;\r\n  height: 100%;\r\n  transition: background-color 0.5s;\r\n}\r\n\r\n.resultSize {\r\n  font-size: 38px;\r\n  margin-top: 95px;\r\n}\r\n\r\nbutton {\r\n  border: none;\r\n  background-color: white;\r\n}\r\n\r\n.bottom,\r\n.backspace * {\r\n  cursor: pointer;\r\n}\r\n\r\n/* Hover and Transition --------------------------------------*/\r\n.numb:hover,\r\n.flipSign:hover {\r\n  background-color: black;\r\n  opacity: 80%;\r\n  transition: background-color 0.25s;\r\n}\r\n\r\n.numb:active,\r\n.flipSign:active {\r\n  background-color: rgb(238, 192, 150);\r\n  opacity: 20%;\r\n  transition: background-color 0.05s;\r\n}\r\n\r\n.operator:hover,\r\n.equal:hover,\r\n.clear:hover,\r\n.sectionSix > .powerSquare:hover,\r\n.sectionSix > .powerSquare:hover * {\r\n  background-color: whitesmoke;\r\n  transition: background-color 0.25s;\r\n  color: black;\r\n}\r\n\r\n.operator:active,\r\n.equal:active,\r\n.clear:active,\r\n.sectionSix > .powerSquare:active,\r\n.sectionSix > .powerSquare:active * {\r\n  background-color: rgb(238, 192, 150);\r\n  opacity: 20%;\r\n  transition: background-color 0.25s;\r\n}\r\n\r\n.backspace:active *,\r\n.backspace:active {\r\n  background-color: whitesmoke;\r\n  transition: ease-out;\r\n}\r\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyx3SUFBd0ksVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sVUFBVSxVQUFVLE1BQU0sV0FBVyxLQUFLLFVBQVUsV0FBVyxXQUFXLE1BQU0sU0FBUyxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxXQUFXLGFBQWEsV0FB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QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NhbGN1bGF0b3IvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2FsY3VsYXRvci8uL3NyYy9zYXNzL2NvbXBvbmVudC9Sb3VuZEZsb2F0LmpzIiwid2VicGFjazovL2NhbGN1bGF0b3IvLi9zcmMvc2Fzcy9zdHlsZS5zY3NzIiwid2VicGFjazovL2NhbGN1bGF0b3IvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2NhbGN1bGF0b3IvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9jYWxjdWxhdG9yLy4vc3JjL3Nhc3Mvc3R5bGUuc2Nzcz80ZDM3Iiwid2VicGFjazovL2NhbGN1bGF0b3IvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vY2FsY3VsYXRvci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vY2FsY3VsYXRvci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9jYWxjdWxhdG9yLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2NhbGN1bGF0b3IvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9jYWxjdWxhdG9yLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi9zYXNzL3N0eWxlLnNjc3NcIjtcclxuaW1wb3J0IFJvdW5kRmxvYXQgZnJvbSBcIi4vc2Fzcy9jb21wb25lbnQvUm91bmRGbG9hdFwiO1xyXG5cclxuY29uc3QgbnVtYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm51bWJcIik7XHJcbmNvbnN0IG9wZXJhdG9ycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIub3BlcmF0b3JcIik7XHJcblxyXG5jb25zdCBjbGVhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xlYXJcIik7XHJcbmNvbnN0IGJhY2tzcGFjZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmFja3NwYWNlXCIpO1xyXG5jb25zdCBlcXVhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZXF1YWxcIik7XHJcbmNvbnN0IGZsaXBTaWduID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mbGlwU2lnblwiKTtcclxuY29uc3QgcG93ZXJTcXVhcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvd2VyU3F1YXJlXCIpO1xyXG5cclxuY29uc3QgY3VycmVudE51bWJlckRpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmN1cnJlbnROdW1iZXJEaXNwbGF5XCIpO1xyXG5jb25zdCBwcmV2aW91c051bWJlckRpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByZXZpb3VzTnVtYmVyRGlzcGxheVwiKTtcclxuXHJcbmxldCB0ZXh0T25lID0gXCJcIjtcclxubGV0IHRleHRUd28gPSBcIlwiO1xyXG5sZXQgdGV4dFRocmVlID0gXCJcIjtcclxubGV0IHRleHRGb3VyID0gXCJcIjtcclxubGV0IHNpZ24gPSBcIlwiO1xyXG5sZXQgcHJldmlvdXNTaWduID0gXCJcIjtcclxubGV0IHJlc3VsdCA9IFwiXCI7XHJcbmxldCByZXN1bHRUd28gPSBcIlwiO1xyXG5sZXQgaXNTaWduZWQgPSBmYWxzZTtcclxuXHJcbmNhbGN1bGF0b3IoKTtcclxuXHJcbmZ1bmN0aW9uIGxvb3BOdW1iZXJzKGN1c3RvbUV2ZW50KSB7XHJcbiAgbnVtYnMuZm9yRWFjaCgobnVtYikgPT4ge1xyXG4gICAgbnVtYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY3VzdG9tRXZlbnQpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBsb29wT3BlcmF0b3JzKGN1c3RvbUV2ZW50KSB7XHJcbiAgb3BlcmF0b3JzLmZvckVhY2goKG9wZXJhdG9yKSA9PiB7XHJcbiAgICBvcGVyYXRvci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY3VzdG9tRXZlbnQpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjYWxjdWxhdG9yKCkge1xyXG4gIHByZXZpb3VzTnVtYmVyRGlzcGxheS50ZXh0Q29udGVudCA9IDA7XHJcbiAgcHJldmlvdXNOdW1iZXJEaXNwbGF5LnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xyXG5cclxuICBsb29wTnVtYmVycyhmaXJzdE51bWJlclNlbGVjdCk7XHJcbiAgb3BlcmF0b3JTZWxlY3QoKTtcclxuICBiYWNrU3BhY2VCdXR0b24oKTtcclxuICBmbGlwU2lnbkJ1dHRvbigpO1xyXG4gIGVxdWFsQnV0dG9uKCk7XHJcbiAgcG93ZXJCdXR0b24oKTtcclxuICBjbGVhckJ1dHRvbigpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmaXJzdE51bWJlclNlbGVjdChlKSB7XHJcbiAgaWYgKHRleHRPbmUubGVuZ3RoIDwgMTMpIHtcclxuICAgIHRleHRPbmUgKz0gZS50YXJnZXQudGV4dENvbnRlbnQ7IC8vICs9IGZvciB3cml0aW5nIG51bWJlciBhZGphY2VudFxyXG4gICAgY3VycmVudE51bWJlckRpc3BsYXkudGV4dENvbnRlbnQgPSB0ZXh0T25lO1xyXG4gICAgaXNTaWduZWQgPSBmYWxzZTtcclxuICAgIGNvbnNvbGUubG9nKGBUaGlzIGlzIFRleHRPbmUgJHt0ZXh0T25lfWApO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gb3BlcmF0b3JTZWxlY3RGbmMoZSkge1xyXG4gIGNvbnNvbGUubG9nKGBUaGlzIGlzIG9wZXJhdG9yQnV0dG9uUHJlc3NlZCBgKTtcclxuICBpZiAoIWlzU2lnbmVkKSB7XHJcbiAgICBpc1NpZ25lZCA9IHRydWU7IC8vIGRpc2FibGUgc2VsZWN0aW5nIG11bHRpcGxlIHNpZ25cclxuICAgIHNpZ24gPSBlLnRhcmdldC50ZXh0Q29udGVudDtcclxuICAgIGN1cnJlbnROdW1iZXJEaXNwbGF5LnRleHRDb250ZW50ICs9IGAgJHtzaWdufSBgO1xyXG4gICAgcHJldmlvdXNOdW1iZXJEaXNwbGF5LnRleHRDb250ZW50ID0gY3VycmVudE51bWJlckRpc3BsYXkudGV4dENvbnRlbnQ7XHJcbiAgICBwcmV2aW91c051bWJlckRpc3BsYXkuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xyXG4gICAgY3VycmVudE51bWJlckRpc3BsYXkudGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gICAgLy8gY3VycmVudE51bWJlckRpc3BsYXkuc3R5bGUubWFyZ2luVG9wID0gXCIzMS41cHhcIjtcclxuXHJcbiAgICAvLyBDbGVhcnMgQWZ0ZXIgYW4gb3BlcmF0b3IgaXMgc2VsZWN0ZWRcclxuICAgIHRleHRUd28gPSB0ZXh0T25lOyAvLyBzdG9yZXMgdGhlIHZhbHVlIHNvIHRoYXQgdGV4dE9uZSBjYW4gZ2V0IGEgZnJlc2ggdmFsdWVcclxuICAgIHRleHRPbmUgPSBcIlwiO1xyXG5cclxuICAgIC8vIENhbGN1bGF0aW5nIHdpdGhvdXQgdXNpbmcgRXF1YWwgYnV0dG9uXHJcbiAgICBpZiAoKCFyZXN1bHQgJiYgc2lnbiA9PT0gXCIrXCIsIFwiLVwiLCBcIipcIiwgXCIvXCIpKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGBUaGlzIGlzIElmIE9wZXJhdG9yICR7c2lnbn1gKTtcclxuICAgICAgbG9vcE51bWJlcnMoQ2FsY3VsYXRpbmdXaXRob3V0RXF1YWwpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gb3BlcmF0b3JTZWxlY3QoKSB7XHJcbiAgbG9vcE9wZXJhdG9ycyhvcGVyYXRvclNlbGVjdEZuYyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIENhbGN1bGF0aW5nV2l0aG91dEVxdWFsRm5jKGUpIHtcclxuICAvLyBTYW1lIE9wZXJhdG9yIEFkamFjZW50IENhbGN1bGF0aW9uXHJcbiAgaWYgKHByZXZpb3VzU2lnbiA9PT0gc2lnbikge1xyXG4gICAgY2FsY3VsYXRpbmdXaXRob3V0RXF1YWxTYW1lU2lnbigpO1xyXG4gIH1cclxuICAvLyBEaWZmZXJlbnQgT3BlcmF0b3IgQWRqYWNlbnQgQ2FsY3VsYXRpb25cclxuICBlbHNlIHtcclxuICAgIGNhbGN1bGF0aW5nV2l0aG91dEVxdWFsRGlmZmVyZW50U2lnbihlKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIENhbGN1bGF0aW5nV2l0aG91dEVxdWFsKCkge1xyXG4gIGNvbnNvbGUubG9nKGAgIE51bWJlciBmb3IgTm90RXF1YWxCdXR0b24gIGApO1xyXG4gIHRleHRUaHJlZSA9IHRleHRPbmU7XHJcbiAgdGV4dEZvdXIgPSB0ZXh0VHdvO1xyXG5cclxuICAvLyBDYWxjdWxhdGUgdGhlIHJlc3VsdCBiZWZvcmUgaGFuZCBzbyB0aGF0IHdlIGNhbiB1c2UgaXQgZm9yIG5vbkFkamFjZW50T3BlcmF0b3JDYWxjdWxhdGlvblxyXG4gIGlmIChzaWduID09PSBcIitcIikge1xyXG4gICAgcHJldmlvdXNTaWduID0gc2lnbjtcclxuICAgIGNvbnNvbGUubG9nKChyZXN1bHRUd28gPSArdGV4dEZvdXIgKyArdGV4dFRocmVlKSk7XHJcbiAgfVxyXG4gIGlmIChzaWduID09PSBcIi1cIikge1xyXG4gICAgcHJldmlvdXNTaWduID0gc2lnbjtcclxuICAgIGNvbnNvbGUubG9nKChyZXN1bHRUd28gPSArdGV4dEZvdXIgLSArdGV4dFRocmVlKSk7XHJcbiAgfVxyXG4gIGlmIChzaWduID09PSBcIipcIikge1xyXG4gICAgcHJldmlvdXNTaWduID0gc2lnbjtcclxuICAgIGNvbnNvbGUubG9nKChyZXN1bHRUd28gPSArdGV4dEZvdXIgKiArdGV4dFRocmVlKSk7XHJcbiAgfVxyXG4gIGlmIChzaWduID09PSBcIi9cIikge1xyXG4gICAgcHJldmlvdXNTaWduID0gc2lnbjtcclxuICAgIGNvbnNvbGUubG9nKChyZXN1bHRUd28gPSArdGV4dEZvdXIgLyArdGV4dFRocmVlKSk7XHJcbiAgfVxyXG5cclxuICBsb29wT3BlcmF0b3JzKENhbGN1bGF0aW5nV2l0aG91dEVxdWFsRm5jKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2FsY3VsYXRpbmdXaXRob3V0RXF1YWxTYW1lU2lnbkZuYyhlKSB7XHJcbiAgY29uc29sZS5sb2coXHJcbiAgICBgLS0tLS0tLS0tLS0tLVRoaXMgaXMgQ29udGludW9zIFJlc3VsdCBJbnNpZGUgSW5zaWRlICR7cmVzdWx0VHdvfS0tLS0tLS0tLS0tLS0tLS1gXHJcbiAgKTtcclxuICB0ZXh0VHdvID0gcmVzdWx0VHdvO1xyXG4gIHByZXZpb3VzTnVtYmVyRGlzcGxheS50ZXh0Q29udGVudCA9IGAke3RleHRUd299ICAke2UudGFyZ2V0LnRleHRDb250ZW50fWA7XHJcbiAgY3VycmVudE51bWJlckRpc3BsYXkudGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gIHNpZ24gPSBlLnRhcmdldC50ZXh0Q29udGVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gY2FsY3VsYXRpbmdXaXRob3V0RXF1YWxTYW1lU2lnbigpIHtcclxuICBjb25zb2xlLmxvZyhcIiAgcHJldmlvdXNTaWduID09PSBzaWduICBcIik7XHJcbiAgaWYgKHNpZ24gPT09IFwiK1wiKSB7XHJcbiAgICBjb25zb2xlLmxvZyhgICBBZGphY2VudCBBZGRpbmcgV2l0aG91dCBFcXVhbEJ1dHRvbmApO1xyXG4gICAgcmVzdWx0VHdvID0gK3RleHRGb3VyICsgK3RleHRUaHJlZTtcclxuICAgIHByZXZpb3VzTnVtYmVyRGlzcGxheS50ZXh0Q29udGVudCA9IGAgJHt0ZXh0Rm91cn0gJHtzaWdufSAke3RleHRUaHJlZX1gO1xyXG4gICAgY3VycmVudE51bWJlckRpc3BsYXkudGV4dENvbnRlbnQgPSByZXN1bHRUd287XHJcbiAgICBjb25zb2xlLmxvZyhgVGhpcyBpcyByZXN1bHRUd28gJHtyZXN1bHRUd299YCk7XHJcbiAgfVxyXG4gIGlmIChzaWduID09PSBcIi1cIikge1xyXG4gICAgY29uc29sZS5sb2coYCAgQWRqYWNlbnQgU3VidHJhY3RpbmcgV2l0aG91dCBFcXVhbEJ1dHRvbmApO1xyXG4gICAgcmVzdWx0VHdvID0gK3RleHRGb3VyIC0gK3RleHRUaHJlZTtcclxuICAgIHByZXZpb3VzTnVtYmVyRGlzcGxheS50ZXh0Q29udGVudCA9IGAgJHt0ZXh0Rm91cn0gJHtzaWdufSAke3RleHRUaHJlZX1gO1xyXG4gICAgY3VycmVudE51bWJlckRpc3BsYXkudGV4dENvbnRlbnQgPSByZXN1bHRUd287XHJcbiAgICBjb25zb2xlLmxvZyhgVGhpcyBpcyByZXN1bHRUd28gJHtyZXN1bHRUd299YCk7XHJcbiAgfVxyXG4gIGlmIChzaWduID09PSBcIipcIikge1xyXG4gICAgY29uc29sZS5sb2coYCAgQWRqYWNlbnQgTXVsdGlwbHlpbmcgV2l0aG91dCBFcXVhbEJ1dHRvbmApO1xyXG4gICAgcmVzdWx0VHdvID0gK3RleHRGb3VyICogK3RleHRUaHJlZTtcclxuICAgIHByZXZpb3VzTnVtYmVyRGlzcGxheS50ZXh0Q29udGVudCA9IGAgJHt0ZXh0Rm91cn0gJHtzaWdufSAke3RleHRUaHJlZX1gO1xyXG4gICAgY3VycmVudE51bWJlckRpc3BsYXkudGV4dENvbnRlbnQgPSByZXN1bHRUd287XHJcbiAgICBjb25zb2xlLmxvZyhgVGhpcyBpcyByZXN1bHRUd28gJHtyZXN1bHRUd299YCk7XHJcbiAgfVxyXG4gIGlmIChzaWduID09PSBcIi9cIikge1xyXG4gICAgY29uc29sZS5sb2coYCAgQWRqYWNlbnQgRGl2aWRpbmcgV2l0aG91dCBFcXVhbEJ1dHRvbiBgKTtcclxuICAgIHJlc3VsdFR3byA9ICt0ZXh0Rm91ciAvICt0ZXh0VGhyZWU7XHJcbiAgICBwcmV2aW91c051bWJlckRpc3BsYXkudGV4dENvbnRlbnQgPSBgICR7dGV4dEZvdXJ9ICR7c2lnbn0gJHt0ZXh0VGhyZWV9YDtcclxuICAgIGN1cnJlbnROdW1iZXJEaXNwbGF5LnRleHRDb250ZW50ID0gcmVzdWx0VHdvO1xyXG4gICAgY29uc29sZS5sb2coYFRoaXMgaXMgcmVzdWx0VHdvICR7cmVzdWx0VHdvfWApO1xyXG4gIH1cclxuXHJcbiAgLy8gIEFkamFjZW50IE51bWJlciBDb250aW51b3MgLSBDYWxjdWxhdGlvblxyXG4gIGxvb3BPcGVyYXRvcnMoY2FsY3VsYXRpbmdXaXRob3V0RXF1YWxTYW1lU2lnbkZuYyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNhbGN1bGF0aW5nV2l0aG91dEVxdWFsRGlmZmVyZW50U2lnbihlKSB7XHJcbiAgY29uc29sZS5sb2coYHByZXZpb3VzU2lnbiAhPT0gc2lnbmApO1xyXG4gIHByZXZpb3VzTnVtYmVyRGlzcGxheS50ZXh0Q29udGVudCA9IGAgJHtyZXN1bHRUd299ICR7ZS50YXJnZXQudGV4dENvbnRlbnR9ICBgO1xyXG4gIHRleHRUd28gPSByZXN1bHRUd287XHJcbiAgbG9vcE51bWJlcnMoY2FsY3VsYXRpbmdXaXRob3V0RXF1YWxEaWZmZXJlbnRTaWduRm5jKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2FsY3VsYXRpbmdXaXRob3V0RXF1YWxEaWZmZXJlbnRTaWduRm5jKCkge1xyXG4gIGNvbnNvbGUubG9nKGBwcmV2aW91c1NpZ24gIT09IHNpZ24gSCFgKTtcclxuXHJcbiAgaWYgKHNpZ24gPT09IFwiK1wiKSB7XHJcbiAgICByZXN1bHRUd28gPSArdGV4dFR3byArICt0ZXh0T25lO1xyXG4gICAgY29uc29sZS5sb2coXCJEaWZmIEFkamFjZW50IFJlc3VsdCBBZGRpbmcgQ29udGludW9zXCIpO1xyXG4gIH1cclxuICBpZiAoc2lnbiA9PT0gXCItXCIpIHtcclxuICAgIHJlc3VsdFR3byA9ICt0ZXh0VHdvIC0gK3RleHRPbmU7XHJcbiAgICBjb25zb2xlLmxvZyhcIkRpZmYgQWRqYWNlbnQgUmVzdWx0IFN1YnRyYWN0aW5nIENvbnRpbnVvcyBcIik7XHJcbiAgfVxyXG4gIGlmIChzaWduID09PSBcIipcIikge1xyXG4gICAgcmVzdWx0VHdvID0gK3RleHRUd28gKiArdGV4dE9uZTtcclxuICAgIGNvbnNvbGUubG9nKFwiRGlmZiBBZGphY2VudCBSZXN1bHQgTXVsdGlwbHlpbmcgQ29udGludW9zIFwiKTtcclxuICB9XHJcbiAgaWYgKHNpZ24gPT09IFwiL1wiKSB7XHJcbiAgICByZXN1bHRUd28gPSArdGV4dFR3byAvICt0ZXh0T25lO1xyXG4gICAgY29uc29sZS5sb2coXCJEaWZmIEFkamFjZW50IFJlc3VsdCBEaXZpZGluZyBDb250aW51b3MgXCIpO1xyXG4gIH1cclxufVxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEJ1dHRvbiBEZWNsYXJhdGlvbiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXHJcblxyXG5mdW5jdGlvbiBjbGVhckJ1dHRvbigpIHtcclxuICBjbGVhci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgY29uc29sZS5jbGVhcigpO1xyXG4gICAgdGV4dE9uZSA9IFwiXCI7XHJcbiAgICB0ZXh0VHdvID0gXCJcIjtcclxuICAgIHRleHRUaHJlZSA9IFwiXCI7XHJcbiAgICB0ZXh0Rm91ciA9IFwiXCI7XHJcbiAgICBjdXJyZW50TnVtYmVyRGlzcGxheS50ZXh0Q29udGVudCA9IDA7XHJcbiAgICBwcmV2aW91c051bWJlckRpc3BsYXkudGV4dENvbnRlbnQgPSAwO1xyXG4gICAgLy8gc2lnbiA9IFwiXCI7XHJcbiAgICAvLyBwcmV2aW91c1NpZ24gPSBcIlwiO1xyXG4gICAgcmVzdWx0ID0gXCJcIjtcclxuICAgIC8vIHJlc3VsdFR3byA9IFwiXCI7XHJcbiAgICAvLyBpc1NpZ25lZCA9IGZhbHNlO1xyXG4gICAgLy8gcmVzdWx0UHJlZGVmaW5lZCA9IFwiXCI7XHJcbiAgICAvLyBjdXJyZW50TnVtYmVyRGlzcGxheS5jbGFzc0xpc3QucmVtb3ZlKFwicmVzdWx0U2l6ZVwiKTtcclxuICAgIC8vIGN1cnJlbnROdW1iZXJEaXNwbGF5LnN0eWxlLm1hcmdpblRvcCA9IFwiNjJweFwiO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBiYWNrU3BhY2VCdXR0b24oKSB7XHJcbiAgYmFja3NwYWNlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICB0ZXh0T25lID0gdGV4dE9uZS5zbGljZSgwLCAtMSk7XHJcbiAgICBjdXJyZW50TnVtYmVyRGlzcGxheS50ZXh0Q29udGVudCA9IHRleHRPbmU7XHJcbiAgICBjb25zb2xlLmxvZyh0ZXh0T25lKTtcclxuICAgIGNvbnNvbGUubG9nKFwiYmFja1NwYWNlXCIpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmbGlwU2lnbkJ1dHRvbigpIHtcclxuICBmbGlwU2lnbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiZmxpcHBlZFwiKTtcclxuICAgIGlmICh0ZXh0T25lID4gMCkge1xyXG4gICAgICBjdXJyZW50TnVtYmVyRGlzcGxheS50ZXh0Q29udGVudCA9IC1jdXJyZW50TnVtYmVyRGlzcGxheS50ZXh0Q29udGVudDtcclxuICAgICAgdGV4dE9uZSA9IGN1cnJlbnROdW1iZXJEaXNwbGF5LnRleHRDb250ZW50O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY3VycmVudE51bWJlckRpc3BsYXkudGV4dENvbnRlbnQgPSAtY3VycmVudE51bWJlckRpc3BsYXkudGV4dENvbnRlbnQ7XHJcbiAgICAgIHRleHRPbmUgPSBjdXJyZW50TnVtYmVyRGlzcGxheS50ZXh0Q29udGVudDtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcG93ZXJCdXR0b24oKSB7XHJcbiAgcG93ZXJTcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIC8vIGN1cnJlbnROdW1iZXJEaXNwbGF5LnN0eWxlLm1hcmdpblRvcCA9IFwiMzVweFwiO1xyXG4gICAgaWYgKHJlc3VsdFR3bykge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkVsc2Ugbm90IGhlbGxvXCIpO1xyXG4gICAgICByZXN1bHQgPSByZXN1bHRUd28gKiByZXN1bHRUd287XHJcbiAgICAgIHJlc3VsdCA9IFJvdW5kRmxvYXQocmVzdWx0KTsgLy8gcm91bmRzIHRoZSB2YWx1ZSB0byA1IHBvaW50XHJcbiAgICAgIGN1cnJlbnROdW1iZXJEaXNwbGF5LnRleHRDb250ZW50ID0gcmVzdWx0O1xyXG4gICAgICBwcmV2aW91c051bWJlckRpc3BsYXkudGV4dENvbnRlbnQgPSBgU3FyKCR7cmVzdWx0VHdvfSlgO1xyXG4gICAgICBjb25zb2xlLmxvZyhgUG93ZXIgUmVzdWx0IFR3byR7cmVzdWx0fWApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVzdWx0ID0gdGV4dE9uZSAqIHRleHRPbmU7XHJcbiAgICAgIHJlc3VsdCA9IFJvdW5kRmxvYXQocmVzdWx0KTsgLy8gcm91bmRzIHRoZSB2YWx1ZSB0byA1IHBvaW50XHJcbiAgICAgIGN1cnJlbnROdW1iZXJEaXNwbGF5LnRleHRDb250ZW50ID0gcmVzdWx0O1xyXG4gICAgICBwcmV2aW91c051bWJlckRpc3BsYXkudGV4dENvbnRlbnQgPSBgU3FyKCR7dGV4dE9uZX0pYDtcclxuICAgICAgY29uc29sZS5sb2coXCJ3ZWxsIGhlbGxvXCIpO1xyXG4gICAgICBjb25zb2xlLmxvZyh0ZXh0T25lKTtcclxuICAgICAgdGV4dE9uZSA9IHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBpc1NpZ25lZCA9IGZhbHNlO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBlcXVhbEJ1dHRvbigpIHtcclxuICBlcXVhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgaWYgKHRleHRPbmUgJiYgdGV4dFR3bykge1xyXG4gICAgICBpc1NpZ25lZCA9IGZhbHNlO1xyXG4gICAgICAvLyAgIGN1cnJlbnROdW1iZXJEaXNwbGF5LmNsYXNzTGlzdC5hZGQoXCJyZXN1bHRTaXplXCIpO1xyXG4gICAgICBpZiAoc2lnbiA9PT0gXCIrXCIpIHtcclxuICAgICAgICBhZGROdW0oKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoc2lnbiA9PT0gXCIqXCIpIHtcclxuICAgICAgICBtdWx0aXBsZU51bSgpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChzaWduID09PSBcIi1cIikge1xyXG4gICAgICAgIHN1YnRyYWN0TnVtKCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHNpZ24gPT09IFwiL1wiKSB7XHJcbiAgICAgICAgZGl2aWRlTnVtKCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHNpZ24gPT09IFwiJVwiKSB7XHJcbiAgICAgICAgcGVyY2VudGFnZU51bSgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBDb250aW51b3VzIENhbGN1bGF0aW5nXHJcbiAgICAgIGxvb3BOdW1iZXJzKGVxdWFsQnV0dG9uUmVzZXRDYWxjdWxhdGlvbik7XHJcblxyXG4gICAgICAvLyBSZXNldCB0aGUgUmVzdWx0IGlmIHRoZSB1c2VyIHByZXNzIGEgbnVtYmVyIGFmdGVyIHVzaW5nIHRoZSBFcXVhbCBidXR0b25cclxuICAgICAgbG9vcE9wZXJhdG9ycyhlcXVhbEJ1dHRvbkNvbnRpbnVlQ2FsY3VsYXRpb24pOyAvLyBGSVhYWFhYWFhYWFggW2FmdGVyIGdldHRpbmcgcmVzdWx0IGZyb20gZXF1YWwgLi4uLi5jbGVhciAuLi4uYWRkIGFnYWluIFtvcHBvc2l0ZSBzaWduIF1dXHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBGdW5jdGlvbiBEZWNsYXJhdGlvbiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXHJcblxyXG4vLyBTdG9yZSBib3RoIHRoZSB2YWx1ZSBhbmQgd2hlbiB0aGUgZXF1YWwgYnV0dG9uIGlzIHByZXNzZWQgd2UgY2hlY2sgZm9yIHRoZSBzaWduc1xyXG5cclxuZnVuY3Rpb24gZXF1YWxCdXR0b25Db250aW51ZUNhbGN1bGF0aW9uKCkge1xyXG4gIGNvbnNvbGUubG9nKFxyXG4gICAgYC0tLS0tLS0tLS0tLS0tLS1Db250aW51b3VzIENhbGN1bGF0aW5nIFtFcXVhbF0tLS0tLS0tLS0tLS0tLS0tLS0tfSBgXHJcbiAgKTtcclxuICB0ZXh0VHdvID0gcmVzdWx0O1xyXG4gIHByZXZpb3VzTnVtYmVyRGlzcGxheS50ZXh0Q29udGVudCA9IGAgJHt0ZXh0VHdvfSAke3NpZ259IGA7XHJcbiAgY3VycmVudE51bWJlckRpc3BsYXkudGV4dENvbnRlbnQgPSBcIlwiO1xyXG59XHJcblxyXG5mdW5jdGlvbiBlcXVhbEJ1dHRvblJlc2V0Q2FsY3VsYXRpb24oKSB7XHJcbiAgY29uc29sZS5sb2coXHJcbiAgICBcIi0tLS0tLS0tIENsZWFycyB0aGUgcmVzdWx0IHdoZW4gcHJlc3NlZCBvbiBhIG51bWJlciAgW0VxdWFsXSAtLS0tLS0tLS1cIlxyXG4gICk7XHJcbiAgbG9vcE9wZXJhdG9ycyhlcXVhbEJ1dHRvbkNvbnRpbnVlQ2FsY3VsYXRpb24pO1xyXG5cclxuICAvLyBwcmV2aW91c051bWJlckRpc3BsYXkudGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gIC8vIGN1cnJlbnROdW1iZXJEaXNwbGF5LnRleHRDb250ZW50ID0gdGV4dE9uZTtcclxuICByZXN1bHQgPSBcIlwiO1xyXG59XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gT3BlcmF0b3IgRnVuY3Rpb24tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXHJcbmNvbnN0IGFkZE51bSA9ICgpID0+IHtcclxuICByZXN1bHQgPSArdGV4dE9uZSArICt0ZXh0VHdvOyAvLyArdGV4dFR3byBjb252ZXJ0cyBhIHN0cmluZyB0byBhIG51bWJlclxyXG4gIHByZXZpb3VzTnVtYmVyRGlzcGxheS50ZXh0Q29udGVudCA9IGAke3RleHRUd299ICsgJHt0ZXh0T25lfSBgO1xyXG4gIGN1cnJlbnROdW1iZXJEaXNwbGF5LnRleHRDb250ZW50ID0gcmVzdWx0O1xyXG4gIC8vICAgY3VycmVudE51bWJlckRpc3BsYXkuc3R5bGUubWFyZ2luVG9wID0gXCI1MHB4XCI7XHJcbiAgdGV4dE9uZSA9IFwiXCI7IC8vIGVyYXNlIHRoZSByZXN1bHQgdmFsdWUgZnJvbSB0ZXh0IHNvIHRoYXQgd2UgY2FuIGNvbnRpbnVvdXNseSBhZGQgbnVtYmVyXHJcbiAgdGV4dFR3byA9IFwiXCI7XHJcbn07XHJcblxyXG5jb25zdCBzdWJ0cmFjdE51bSA9ICgpID0+IHtcclxuICByZXN1bHQgPSArdGV4dFR3byAtICt0ZXh0T25lO1xyXG4gIHByZXZpb3VzTnVtYmVyRGlzcGxheS50ZXh0Q29udGVudCA9IGAke3RleHRUd299IC0gJHt0ZXh0T25lfSBgO1xyXG4gIGN1cnJlbnROdW1iZXJEaXNwbGF5LnRleHRDb250ZW50ID0gcmVzdWx0O1xyXG4gIC8vICAgY3VycmVudE51bWJlckRpc3BsYXkuc3R5bGUubWFyZ2luVG9wID0gXCI1MHB4XCI7XHJcbiAgdGV4dE9uZSA9IFwiXCI7XHJcbiAgdGV4dFR3byA9IFwiXCI7XHJcbn07XHJcblxyXG5jb25zdCBtdWx0aXBsZU51bSA9ICgpID0+IHtcclxuICByZXN1bHQgPSArdGV4dE9uZSAqICt0ZXh0VHdvO1xyXG4gIHByZXZpb3VzTnVtYmVyRGlzcGxheS50ZXh0Q29udGVudCA9IGAke3RleHRUd299ICogJHt0ZXh0T25lfSBgO1xyXG4gIGN1cnJlbnROdW1iZXJEaXNwbGF5LnRleHRDb250ZW50ID0gcmVzdWx0O1xyXG4gIC8vICAgY3VycmVudE51bWJlckRpc3BsYXkuc3R5bGUubWFyZ2luVG9wID0gXCI1MHB4XCI7XHJcbiAgdGV4dE9uZSA9IFwiXCI7XHJcbiAgdGV4dFR3byA9IFwiXCI7XHJcbn07XHJcblxyXG5jb25zdCBkaXZpZGVOdW0gPSAoKSA9PiB7XHJcbiAgaWYgKHRleHRPbmUgPT09IFwiMFwiKSB7XHJcbiAgICBwcmV2aW91c051bWJlckRpc3BsYXkudGV4dENvbnRlbnQgPSBgJHt0ZXh0VHdvfSAvICR7dGV4dE9uZX1gO1xyXG4gICAgY3VycmVudE51bWJlckRpc3BsYXkudGV4dENvbnRlbnQgPSBcIkVycm9yXCI7XHJcbiAgICAvLyBjdXJyZW50TnVtYmVyRGlzcGxheS5zdHlsZS5tYXJnaW5Ub3AgPSBcIjUwcHhcIjtcclxuICAgIHRleHRPbmUgPSBcIlwiO1xyXG4gICAgdGV4dFR3byA9IFwiXCI7XHJcbiAgICBjb25zb2xlLmxvZyhcIkNhbm5vdCBkaXZpZGUgYnkgMFwiKTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmVzdWx0ID0gK3RleHRUd28gLyArdGV4dE9uZTtcclxuICAgIGNvbnN0IG5ld0xlbmd0aCA9IHJlc3VsdC50b1N0cmluZygpLmxlbmd0aDsgLy8gY29udmVydGVkIHRoZSByZXN1bHQgdG8gYSBzdHJpbmdcclxuICAgIGNvbnNvbGUubG9nKGBJIGxlbmd0aGVuIEl0ICR7bmV3TGVuZ3RofWApO1xyXG5cclxuICAgIC8vIGlmIHRoZSBzdHJpbmcgdmFsdWUgaXMgZ3JlYXRlciB0aGFuIDEyIFttYXhpbXVtIG51bWJlciB3aGljaCBjYW4gZml0IGluIGEgY2FsY3VsYXRvcl0gcm91bmQgdGhlIHZhbHVlXHJcbiAgICBpZiAobmV3TGVuZ3RoID4gMTIpIHtcclxuICAgICAgcmVzdWx0ID0gUm91bmRGbG9hdChyZXN1bHQpOyAvLyByb3VuZHMgdGhlIHZhbHVlIHRvIDUgcG9pbnRcclxuICAgICAgcHJldmlvdXNOdW1iZXJEaXNwbGF5LnRleHRDb250ZW50ID0gYCR7dGV4dFR3b30gLyAke3RleHRPbmV9YDtcclxuICAgICAgY3VycmVudE51bWJlckRpc3BsYXkudGV4dENvbnRlbnQgPSByZXN1bHQ7XHJcbiAgICAgIC8vICAgY3VycmVudE51bWJlckRpc3BsYXkuc3R5bGUubWFyZ2luVG9wID0gXCI1MHB4XCI7XHJcbiAgICAgIHRleHRPbmUgPSBcIlwiO1xyXG4gICAgICB0ZXh0VHdvID0gXCJcIjtcclxuICAgICAgY29uc29sZS5sb2coXCJyb3VuZCBudW1iZXJcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBwcmV2aW91c051bWJlckRpc3BsYXkudGV4dENvbnRlbnQgPSBgJHt0ZXh0VHdvfSAvICR7dGV4dE9uZX1gO1xyXG4gICAgICBjdXJyZW50TnVtYmVyRGlzcGxheS50ZXh0Q29udGVudCA9IHJlc3VsdDtcclxuICAgICAgLy8gICBjdXJyZW50TnVtYmVyRGlzcGxheS5zdHlsZS5tYXJnaW5Ub3AgPSBcIjUwcHhcIjtcclxuICAgICAgdGV4dE9uZSA9IFwiXCI7XHJcbiAgICAgIHRleHRUd28gPSBcIlwiO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIm5vcm1hbCBudW1iZXJcIik7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgcGVyY2VudGFnZU51bSA9ICgpID0+IHtcclxuICAvLyAgIGN1cnJlbnROdW1iZXJEaXNwbGF5LnN0eWxlLm1hcmdpblRvcCA9IFwiNTBweFwiO1xyXG4gIHJlc3VsdCA9ICh0ZXh0VHdvIC8gMTAwKSAqIHRleHRPbmU7XHJcbiAgcmVzdWx0ID0gUm91bmRGbG9hdChyZXN1bHQpOyAvLyByb3VuZHMgdGhlIHZhbHVlIHRvIDUgcG9pbnRcclxuICBwcmV2aW91c051bWJlckRpc3BsYXkudGV4dENvbnRlbnQgPSBgJHt0ZXh0VHdvfSAlICR7dGV4dE9uZX1gO1xyXG4gIGN1cnJlbnROdW1iZXJEaXNwbGF5LnRleHRDb250ZW50ID0gcmVzdWx0O1xyXG4gIGNvbnNvbGUubG9nKGBUaGlzIGlzIFBlcmNlbnRhZ2UgJHtyZXN1bHR9YCk7XHJcbiAgdGV4dE9uZSA9IFwiXCI7XHJcbiAgdGV4dFR3byA9IFwiXCI7XHJcbn07XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJvdW5kRmxvYXQocmVzdWx0KSB7XHJcbiAgcmV0dXJuIE51bWJlci5wYXJzZUZsb2F0KHJlc3VsdCkudG9GaXhlZCg1KTtcclxufVxyXG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgZm9udC1mYW1pbHk6IFwiVHJlYnVjaGV0IE1TXCIsIFwiTHVjaWRhIFNhbnMgVW5pY29kZVwiLCBcIkx1Y2lkYSBHcmFuZGVcIiwgXCJMdWNpZGEgU2Fuc1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MiwgMTkwLCAxOTApO1xuICBib3JkZXItY29sb3I6IHJnYig3NywgNDAsIDE2KSAhaW1wb3J0YW50O1xufVxuXG5odG1sIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1zaXplOiAxMDAlO1xufVxuXG5oMSB7XG4gIGZvbnQtc2l6ZTogODBweDtcbiAgbWFyZ2luOiAyMHB4O1xuICBjb2xvcjogcmdiKDY1LCA1NCwgNTQpO1xuICAvKiBmb250LWZhbWlseTogJ0ZyYW5rbGluIEdvdGhpYyBNZWRpdW0nLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7ICovXG4gIGZvbnQtZmFtaWx5OiBcIk5vdG8gU2FucyBNb25vXCIsIG1vbm9zcGFjZTtcbn1cblxuLm1haW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uY29udGVudCB7XG4gIHdpZHRoOiA1MDBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyOiAycHggc29saWQgZ29sZGVucm9kICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNSwgMCwgMCk7XG4gIGJveC1zaGFkb3c6IDNweCAzcHggMjBweCByZ2IoMCwgMCwgMCk7XG59XG5cbi5wcmV2aW91c051bWJlckRpc3BsYXkge1xuICBmb250LXNpemU6IDIycHg7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwLXJldmVyc2U7XG59XG5cbi5jdXJyZW50TnVtYmVyRGlzcGxheSB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4uc2VjdGlvbk9uZSxcbi5zZWN0aW9uVHdvLFxuLnNlY3Rpb25UaHJlZSxcbi5zZWN0aW9uRm91cixcbi5zZWN0aW9uRml2ZSxcbi5zZWN0aW9uU2l4IHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLypCb3JkZXIgRml4aW5nIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi5ib3R0b20ge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cblxuLnNlY3Rpb25PbmUgPiBkaXYsXG4uc2VjdGlvblR3byA+IGRpdixcbi5zZWN0aW9uVGhyZWUgPiBkaXYsXG4uc2VjdGlvbkZvdXIgPiBkaXYsXG4uc2VjdGlvblNpeCA+IGRpdiB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZmxleC1ncm93OiAxO1xuICB3aWR0aDogNDNweDtcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgZ29sZGVucm9kO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgZ29sZGVucm9kO1xufVxuXG4udG9wIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBib3JkZXI6IDIuNXB4IHNvbGlkIHJnYigyMjgsIDE1MiwgMSkgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uc2VjdGlvbkZpdmUge1xuICBoZWlnaHQ6IDE1MHB4O1xufVxuXG4uc2VjdGlvbkZpdmUgPiBkaXYge1xuICBwYWRkaW5nOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmRpc3BsYXkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgd2lkdGg6IDc1JTtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgYm9yZGVyLXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi8qIEJ1dHRvbiBTdHlsaW5nIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbnN1cCxcbi5vcGVyYXRvcixcbi5jbGVhcixcbi5lcXVhbCxcbi5wb3dlclNxdWFyZSxcbi5vcGVyYXRvciA+IGJ1dHRvbixcbi5jbGVhciA+IGJ1dHRvbixcbi5lcXVhbCA+IGJ1dHRvbixcbi5wb3dlclNxdWFyZSA+IGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjgsIDEyMiwgMTIyKTtcbiAgY29sb3I6IGFsaWNlYmx1ZTtcbn1cblxuLm51bWIsXG4uZmxpcFNpZ24sXG4ubnVtYiA+IGJ1dHRvbixcbi5mbGlwU2lnbiA+IGJ1dHRvbixcbi5jdXJyZW50TnVtYmVyRGlzcGxheSxcbi5wcmV2aW91c051bWJlckRpc3BsYXkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gIGNvbG9yOiByZ2JhKDIwNCwgMjcsIDI3LCAwLjg1Nik7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5zdXAge1xuICBmb250LXNpemU6IDMwcHg7XG59XG5cbi5zZWN0aW9uRml2ZSB7XG4gIGhlaWdodDogMTIwcHg7XG59XG5cbi5jbGVhciB7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgcGFkZGluZy10b3A6IDVweDtcbn1cblxuLmJhY2tzcGFjZSxcbi5iYWNrc3BhY2VJbWcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUsIDAsIDApO1xufVxuXG4uYmFja3NwYWNlIHtcbiAgd2lkdGg6IDgzcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNXM7XG59XG5cbi5iYWNrc3BhY2VJbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNXM7XG59XG5cbi5yZXN1bHRTaXplIHtcbiAgZm9udC1zaXplOiAzOHB4O1xuICBtYXJnaW4tdG9wOiA5NXB4O1xufVxuXG5idXR0b24ge1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uYm90dG9tLFxuLmJhY2tzcGFjZSAqIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKiBIb3ZlciBhbmQgVHJhbnNpdGlvbiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4ubnVtYjpob3Zlcixcbi5mbGlwU2lnbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBvcGFjaXR5OiA4MCU7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4yNXM7XG59XG5cbi5udW1iOmFjdGl2ZSxcbi5mbGlwU2lnbjphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM4LCAxOTIsIDE1MCk7XG4gIG9wYWNpdHk6IDIwJTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjA1cztcbn1cblxuLm9wZXJhdG9yOmhvdmVyLFxuLmVxdWFsOmhvdmVyLFxuLmNsZWFyOmhvdmVyLFxuLnNlY3Rpb25TaXggPiAucG93ZXJTcXVhcmU6aG92ZXIsXG4uc2VjdGlvblNpeCA+IC5wb3dlclNxdWFyZTpob3ZlciAqIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjI1cztcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4ub3BlcmF0b3I6YWN0aXZlLFxuLmVxdWFsOmFjdGl2ZSxcbi5jbGVhcjphY3RpdmUsXG4uc2VjdGlvblNpeCA+IC5wb3dlclNxdWFyZTphY3RpdmUsXG4uc2VjdGlvblNpeCA+IC5wb3dlclNxdWFyZTphY3RpdmUgKiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzgsIDE5MiwgMTUwKTtcbiAgb3BhY2l0eTogMjAlO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMjVzO1xufVxuXG4uYmFja3NwYWNlOmFjdGl2ZSAqLFxuLmJhY2tzcGFjZTphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICB0cmFuc2l0aW9uOiBlYXNlLW91dDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zYXNzL2dsb2JhbHMvX2JvaWxlclBsYXRlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Fzcy9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsZUFBQTtFQUNBLHFHQUFBO0VBRUEsb0NBQUE7RUFDQSx3Q0FBQTtBQ0FGOztBREdBO0VBQ0Usc0JBQUE7RUFDQSxlQUFBO0FDQUY7O0FBUkE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEVBQUE7RUFDQSx3Q0FBQTtBQVdGOztBQVJBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBV0Y7O0FBUkE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNDQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtFQUNBLHFDQUFBO0FBV0Y7O0FBUkE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFXRjs7QUFSQTtFQUNFLGlCQUFBO0FBV0Y7O0FBUEE7Ozs7OztFQU1FLGFBQUE7QUFVRjs7QUFQQSx1REFBQTtBQUVBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFTRjs7QUFOQTs7Ozs7RUFLRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlDQUFBO0VBQ0Esa0NBQUE7QUFTRjs7QUFOQTtFQUNFLGVBQUE7RUFDQSwrQ0FBQTtFQUNBLGtCQUFBO0FBU0Y7O0FBTkE7RUFDRSxhQUFBO0FBU0Y7O0FBTkE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQVNGOztBQU5BO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtFQUNBLG9DQUFBO0VBQ0EsNkJBQUE7QUFTRjs7QUFOQSx5REFBQTtBQUNBOzs7Ozs7Ozs7RUFTRSxvQ0FBQTtFQUNBLGdCQUFBO0FBU0Y7O0FBTkE7Ozs7OztFQU1FLG9DQUFBO0VBQ0EsK0JBQUE7QUFTRjs7QUFOQSx1REFBQTtBQUNBO0VBQ0UsZUFBQTtBQVNGOztBQU5BO0VBQ0UsYUFBQTtBQVNGOztBQU5BO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQVNGOztBQU5BOztFQUVFLCtCQUFBO0FBU0Y7O0FBTkE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQ0FBQTtBQVNGOztBQU5BO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQ0FBQTtBQVNGOztBQU5BO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBU0Y7O0FBTkE7RUFDRSxZQUFBO0VBQ0EsdUJBQUE7QUFTRjs7QUFOQTs7RUFFRSxlQUFBO0FBU0Y7O0FBTkEsK0RBQUE7QUFDQTs7RUFFRSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtBQVNGOztBQU5BOztFQUVFLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLGtDQUFBO0FBU0Y7O0FBTkE7Ozs7O0VBS0UsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLFlBQUE7QUFTRjs7QUFOQTs7Ozs7RUFLRSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtBQVNGOztBQU5BOztFQUVFLDRCQUFBO0VBQ0Esb0JBQUE7QUFTRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXHJcXG4gIGZvbnQtc2l6ZTogNTBweDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVHJlYnVjaGV0IE1TXFxcIiwgXFxcIkx1Y2lkYSBTYW5zIFVuaWNvZGVcXFwiLCBcXFwiTHVjaWRhIEdyYW5kZVxcXCIsXFxyXFxuICAgIFxcXCJMdWNpZGEgU2Fuc1xcXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MiwgMTkwLCAxOTApO1xcclxcbiAgYm9yZGVyLWNvbG9yOiByZ2IoNzcsIDQwLCAxNikgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgZm9udC1zaXplOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4vLyAqLFxcclxcbi8vICo6OmJlZm9yZSxcXHJcXG4vLyAqOjphZnRlciB7XFxyXFxuLy8gICBib3gtc2l6aW5nOiBpbmhlcml0O1xcclxcbi8vIH1cXHJcXG5cIixcIkBmb3J3YXJkIFxcXCJnbG9iYWxzXFxcIjtcXHJcXG5cXHJcXG5oMSB7XFxyXFxuICBmb250LXNpemU6IDgwcHg7XFxyXFxuICBtYXJnaW46IDIwcHg7XFxyXFxuICBjb2xvcjogcmdiKDY1LCA1NCwgNTQpO1xcclxcbiAgLyogZm9udC1mYW1pbHk6ICdGcmFua2xpbiBHb3RoaWMgTWVkaXVtJywgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmOyAqL1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJOb3RvIFNhbnMgTW9ub1xcXCIsIG1vbm9zcGFjZTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQge1xcclxcbiAgd2lkdGg6IDUwMHB4O1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGdvbGRlbnJvZCAhaW1wb3J0YW50O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNSwgMCwgMCk7XFxyXFxuICBib3gtc2hhZG93OiAzcHggM3B4IDIwcHggcmdiKDAsIDAsIDApO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJldmlvdXNOdW1iZXJEaXNwbGF5IHtcXHJcXG4gIGZvbnQtc2l6ZTogMjJweDtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXAtcmV2ZXJzZTtcXHJcXG59XFxyXFxuXFxyXFxuLmN1cnJlbnROdW1iZXJEaXNwbGF5IHtcXHJcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcclxcbiAgLy8gICBtYXJnaW4tdG9wOiA2MnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VjdGlvbk9uZSxcXHJcXG4uc2VjdGlvblR3byxcXHJcXG4uc2VjdGlvblRocmVlLFxcclxcbi5zZWN0aW9uRm91cixcXHJcXG4uc2VjdGlvbkZpdmUsXFxyXFxuLnNlY3Rpb25TaXgge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLypCb3JkZXIgRml4aW5nIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG5cXHJcXG4uYm90dG9tIHtcXHJcXG4gIG1hcmdpbi10b3A6IDVweDtcXHJcXG4gIGJvcmRlci1yaWdodDogbm9uZTtcXHJcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uT25lID4gZGl2LFxcclxcbi5zZWN0aW9uVHdvID4gZGl2LFxcclxcbi5zZWN0aW9uVGhyZWUgPiBkaXYsXFxyXFxuLnNlY3Rpb25Gb3VyID4gZGl2LFxcclxcbi5zZWN0aW9uU2l4ID4gZGl2IHtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmbGV4LWdyb3c6IDE7XFxyXFxuICB3aWR0aDogNDNweDtcXHJcXG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIGdvbGRlbnJvZDtcXHJcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBnb2xkZW5yb2Q7XFxyXFxufVxcclxcblxcclxcbi50b3Age1xcclxcbiAgbWFyZ2luLXRvcDogNXB4O1xcclxcbiAgYm9yZGVyOiAyLjVweCBzb2xpZCByZ2IoMjI4LCAxNTIsIDEpICFpbXBvcnRhbnQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uRml2ZSB7XFxyXFxuICBoZWlnaHQ6IDE1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VjdGlvbkZpdmUgPiBkaXYge1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmRpc3BsYXkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxyXFxuICB3aWR0aDogNzUlO1xcclxcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwcHggIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLyogQnV0dG9uIFN0eWxpbmcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcbnN1cCxcXHJcXG4ub3BlcmF0b3IsXFxyXFxuLmNsZWFyLFxcclxcbi5lcXVhbCxcXHJcXG4ucG93ZXJTcXVhcmUsXFxyXFxuLm9wZXJhdG9yID4gYnV0dG9uLFxcclxcbi5jbGVhciA+IGJ1dHRvbixcXHJcXG4uZXF1YWwgPiBidXR0b24sXFxyXFxuLnBvd2VyU3F1YXJlID4gYnV0dG9uIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjgsIDEyMiwgMTIyKTtcXHJcXG4gIGNvbG9yOiBhbGljZWJsdWU7XFxyXFxufVxcclxcblxcclxcbi5udW1iLFxcclxcbi5mbGlwU2lnbixcXHJcXG4ubnVtYiA+IGJ1dHRvbixcXHJcXG4uZmxpcFNpZ24gPiBidXR0b24sXFxyXFxuLmN1cnJlbnROdW1iZXJEaXNwbGF5LFxcclxcbi5wcmV2aW91c051bWJlckRpc3BsYXkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcclxcbiAgY29sb3I6IHJnYmEoMjA0LCAyNywgMjcsIDAuODU2KTtcXHJcXG59XFxyXFxuXFxyXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXHJcXG5zdXAge1xcclxcbiAgZm9udC1zaXplOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VjdGlvbkZpdmUge1xcclxcbiAgaGVpZ2h0OiAxMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNsZWFyIHtcXHJcXG4gIHBhZGRpbmctbGVmdDogMjBweDtcXHJcXG4gIHBhZGRpbmctdG9wOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5iYWNrc3BhY2UsXFxyXFxuLmJhY2tzcGFjZUltZyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUsIDAsIDApO1xcclxcbn1cXHJcXG5cXHJcXG4uYmFja3NwYWNlIHtcXHJcXG4gIHdpZHRoOiA4M3B4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC41cztcXHJcXG59XFxyXFxuXFxyXFxuLmJhY2tzcGFjZUltZyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC41cztcXHJcXG59XFxyXFxuXFxyXFxuLnJlc3VsdFNpemUge1xcclxcbiAgZm9udC1zaXplOiAzOHB4O1xcclxcbiAgbWFyZ2luLXRvcDogOTVweDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uYm90dG9tLFxcclxcbi5iYWNrc3BhY2UgKiB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8qIEhvdmVyIGFuZCBUcmFuc2l0aW9uIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG4ubnVtYjpob3ZlcixcXHJcXG4uZmxpcFNpZ246aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICBvcGFjaXR5OiA4MCU7XFxyXFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMjVzO1xcclxcbn1cXHJcXG5cXHJcXG4ubnVtYjphY3RpdmUsXFxyXFxuLmZsaXBTaWduOmFjdGl2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM4LCAxOTIsIDE1MCk7XFxyXFxuICBvcGFjaXR5OiAyMCU7XFxyXFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMDVzO1xcclxcbn1cXHJcXG5cXHJcXG4ub3BlcmF0b3I6aG92ZXIsXFxyXFxuLmVxdWFsOmhvdmVyLFxcclxcbi5jbGVhcjpob3ZlcixcXHJcXG4uc2VjdGlvblNpeCA+IC5wb3dlclNxdWFyZTpob3ZlcixcXHJcXG4uc2VjdGlvblNpeCA+IC5wb3dlclNxdWFyZTpob3ZlciAqIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxyXFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMjVzO1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4ub3BlcmF0b3I6YWN0aXZlLFxcclxcbi5lcXVhbDphY3RpdmUsXFxyXFxuLmNsZWFyOmFjdGl2ZSxcXHJcXG4uc2VjdGlvblNpeCA+IC5wb3dlclNxdWFyZTphY3RpdmUsXFxyXFxuLnNlY3Rpb25TaXggPiAucG93ZXJTcXVhcmU6YWN0aXZlICoge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzOCwgMTkyLCAxNTApO1xcclxcbiAgb3BhY2l0eTogMjAlO1xcclxcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjI1cztcXHJcXG59XFxyXFxuXFxyXFxuLmJhY2tzcGFjZTphY3RpdmUgKixcXHJcXG4uYmFja3NwYWNlOmFjdGl2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcclxcbiAgdHJhbnNpdGlvbjogZWFzZS1vdXQ7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07Il0sIm5hbWVzIjpbIlJvdW5kRmxvYXQiLCJudW1icyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsIm9wZXJhdG9ycyIsImNsZWFyIiwicXVlcnlTZWxlY3RvciIsImJhY2tzcGFjZSIsImVxdWFsIiwiZmxpcFNpZ24iLCJwb3dlclNxdWFyZSIsImN1cnJlbnROdW1iZXJEaXNwbGF5IiwicHJldmlvdXNOdW1iZXJEaXNwbGF5IiwidGV4dE9uZSIsInRleHRUd28iLCJ0ZXh0VGhyZWUiLCJ0ZXh0Rm91ciIsInNpZ24iLCJwcmV2aW91c1NpZ24iLCJyZXN1bHQiLCJyZXN1bHRUd28iLCJpc1NpZ25lZCIsImNhbGN1bGF0b3IiLCJsb29wTnVtYmVycyIsImN1c3RvbUV2ZW50IiwiZm9yRWFjaCIsIm51bWIiLCJhZGRFdmVudExpc3RlbmVyIiwibG9vcE9wZXJhdG9ycyIsIm9wZXJhdG9yIiwidGV4dENvbnRlbnQiLCJzdHlsZSIsInZpc2liaWxpdHkiLCJmaXJzdE51bWJlclNlbGVjdCIsIm9wZXJhdG9yU2VsZWN0IiwiYmFja1NwYWNlQnV0dG9uIiwiZmxpcFNpZ25CdXR0b24iLCJlcXVhbEJ1dHRvbiIsInBvd2VyQnV0dG9uIiwiY2xlYXJCdXR0b24iLCJlIiwibGVuZ3RoIiwidGFyZ2V0IiwiY29uc29sZSIsImxvZyIsIm9wZXJhdG9yU2VsZWN0Rm5jIiwiQ2FsY3VsYXRpbmdXaXRob3V0RXF1YWwiLCJDYWxjdWxhdGluZ1dpdGhvdXRFcXVhbEZuYyIsImNhbGN1bGF0aW5nV2l0aG91dEVxdWFsU2FtZVNpZ24iLCJjYWxjdWxhdGluZ1dpdGhvdXRFcXVhbERpZmZlcmVudFNpZ24iLCJjYWxjdWxhdGluZ1dpdGhvdXRFcXVhbFNhbWVTaWduRm5jIiwiY2FsY3VsYXRpbmdXaXRob3V0RXF1YWxEaWZmZXJlbnRTaWduRm5jIiwic2xpY2UiLCJhZGROdW0iLCJtdWx0aXBsZU51bSIsInN1YnRyYWN0TnVtIiwiZGl2aWRlTnVtIiwicGVyY2VudGFnZU51bSIsImVxdWFsQnV0dG9uUmVzZXRDYWxjdWxhdGlvbiIsImVxdWFsQnV0dG9uQ29udGludWVDYWxjdWxhdGlvbiIsIm5ld0xlbmd0aCIsInRvU3RyaW5nIiwiTnVtYmVyIiwicGFyc2VGbG9hdCIsInRvRml4ZWQiXSwic291cmNlUm9vdCI6IiJ9