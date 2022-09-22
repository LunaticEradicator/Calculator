//  Successfully wasted 1-2 week for this logic
//  The whole logic was that we did not need to store two different variable but make textOne = textTwo [through for loop, addEventListener ]
//  I tried to make textTwo from current.textContent [Dump decision need to think more logically and create better problem solving skill]

const main = document.querySelector(".main");
const content = document.querySelector(".content");
const display = document.querySelector(".display");
const numb = document.querySelectorAll(".numb")
const clear = document.querySelector(".clear");
const backspace = document.querySelector(".backspace");
const add = document.querySelector(".add");
const equal = document.querySelector(".equal");
const operator = document.querySelectorAll(".operator")
const currentNumberDisplay = document.querySelector(".currentNumberDisplay");
const previousNumberDisplay = document.querySelector(".previousNumberDisplay");

const flipSign = document.querySelector(".flipSign");
const powerSquare = document.querySelector(".powerSquare");

let textOne = "";
let textTwo = "";
let sign = "";
let result = "";

numbButtonPressed();
operatorButtonPressed();
clearButton();
backSpaceButton();
flipSignButton();
powerButton();
equalButton();

function numbButtonPressed() {
    for (let numbs of numb) {
        numbs.addEventListener("click", e => {
            if (textOne.length < 13) {
                textOne += e.target.textContent;            // for writing number adjacent 
                currentNumberDisplay.textContent = textOne;
                isSigned = false;
                // console.log(`This is TextOne ${textOne}`);
            }
        })
    }
}

let isSigned = false;
function operatorButtonPressed() {
    for (let operators of operator) {
        operators.addEventListener("click", e => {
            if (!isSigned) {
                isSigned = true;                                                       // disable selecting multiple sign
                sign = e.target.textContent;
                currentNumberDisplay.textContent += ` ${sign} `;
                previousNumberDisplay.textContent = currentNumberDisplay.textContent;
                textTwo = textOne;
                textOne = "";
                currentNumberDisplay.textContent = "";                                  // clear the current number
                currentNumberDisplay.style.marginTop = "70px";                          // so currentNumber won't change position
            }
        })
    }
}

function clearButton() {
    clear.addEventListener("click", e => {
        clearFunction();
    })
}

function backSpaceButton() {
    backspace.addEventListener("click", e => {
        backspaceFunction();
    })
}

function flipSignButton() {
    flipSign.addEventListener("click", e => {
        console.log("flipped");
        if (textOne > 0) {
            currentNumberDisplay.textContent = -(currentNumberDisplay.textContent);
            textOne = currentNumberDisplay.textContent;
        }
        else {
            currentNumberDisplay.textContent = -(currentNumberDisplay.textContent);
            textOne = currentNumberDisplay.textContent;
        }
    })
}

function clearFunction() {
    textOne = "";
    textTwo = "";
    sign = "";
    result = "";
    currentNumberDisplay.textContent = 0;
    previousNumberDisplay.textContent = "";
    currentNumberDisplay.style.marginTop = "95px";
    currentNumberDisplay.classList.remove("resultSize");
    isSigned = false;                                                       // enable to select a sign

    for (let operators of operator) {
        operators.removeEventListener("click", addResultEventListener)      //disable the result to be summed when clear is pressed
    }
    console.log(`-----------Clear----------------`)
    console.log(`This is TextOne ${textOne}`)
    console.log(`This is TextTwo ${textTwo}`)
    console.log(`This is result ${result}`)
    console.log(`This is sign ${sign}`)
}

function backspaceFunction() {
    textOne = textOne.slice(0, -1);
    currentNumberDisplay.textContent = textOne;
    console.log(textOne);
    console.log("Cleared");
}

function powerButton() {
    powerSquare.addEventListener("click", e => {
        powerFunction();
    })
}

function equalButton() {
    equal.addEventListener("click", e => {
        isSigned = false;
        currentNumberDisplay.classList.add("resultSize");
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

        for (let operators of operator) {                                       // To add result with a number 
            operators.addEventListener("click", addResultEventListener)
        }

        for (let numbs of numb) {
            numbs.addEventListener("click", clearResultEventListener)            // To clear the result when a number is pressed
        }
    })
}

function addResultEventListener() {
    console.log("--------After equal button pressed textTwo = result---------")
    textTwo = result;
}

function clearResultEventListener() {
    for (let operators of operator) {
        operators.removeEventListener("click", addResultEventListener)
    }
    result = "";
    console.log("--------Clears the result when pressed on a number---------")
}

// ---------------------------Explaining Function-------------------------------------


const addNum = function () {
    result = +textOne + +textTwo;
    previousNumberDisplay.textContent = `${textTwo} + ${textOne}`;
    currentNumberDisplay.textContent = result;
    currentNumberDisplay.style.marginTop = "80px";
    textOne = "";                                                               // erase the result value from text so that we can continuously add number
    textTwo = "";
    console.log(`-------------Result-------------`);
    console.log(`This is result  ${result}`);
    console.log(`This is textOne ${textOne}`);
    console.log(`This is textTwo ${textTwo}`);
    console.log(`This is Sign ${sign}`);
}

const subtractNum = function () {
    result = +textTwo - +textOne;
    // result = result.toFixed(9);
    previousNumberDisplay.textContent = `${textTwo} - ${textOne}`
    currentNumberDisplay.textContent = result;
    currentNumberDisplay.style.marginTop = "80px";
    textOne = "";
    textTwo = "";
}

const multipleNum = function () {
    result = +textOne * +textTwo;
    previousNumberDisplay.textContent = `${textTwo} * ${textOne}`
    currentNumberDisplay.textContent = result;
    currentNumberDisplay.style.marginTop = "80px";
    textOne = "";
    textTwo = "";
}

const divideNum = function () {
    console.log(`This is textOne ${textOne}`);
    console.log(`This is textTwo ${textTwo}`);
    if (textTwo / 0) {
        previousNumberDisplay.textContent = `${textTwo} / ${textOne}`;
        currentNumberDisplay.textContent = "Cannot divide by 0";
        currentNumberDisplay.style.marginTop = "80px";
        textOne = "";
        textTwo = "";
        console.log("Huh Are You About that?")
    }
    else {
        // result = result.toFixed(9);
        result = +textTwo / +textOne;
        previousNumberDisplay.textContent = `${textTwo} / ${textOne}`;
        currentNumberDisplay.textContent = result;
        currentNumberDisplay.style.marginTop = "80px";
        textOne = "";
        textTwo = "";
    }
}

const powerFunction = function () {
    console.log(textTwo);
    result = textTwo * textTwo;
    currentNumberDisplay.textContent = result;
    previousNumberDisplay.textContent = `Sqr(${(textTwo)})`;
}

// const addNum = function () {
//     if (!isResult) {
//         result = +textOne + +textTwo;
//         previousNumberDisplay.textContent = `${textTwo} + ${textOne}`;
//         currentNumberDisplay.textContent = result;
//         currentNumberDisplay.style.marginTop = "80px";
//         textOne = "";                                                               // erase the result value from text so that we can continuously add number
//         textTwo = "";
//         console.log(`This is result  ${result}`);
//         console.log(`This is textOne ${textOne}`);
//         console.log(`This is textTwo ${textTwo}`);
//     }
//     else if (isResult) {
//         isResult = false;
//         for (let operators of operator) {
//             operators.addEventListener("click", e => {
//                 textTwo = result;
//                 console.log("--------After equal button pressed textTwo = result")
//             })
//         }
//     }
// }