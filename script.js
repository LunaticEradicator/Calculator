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
let textOne = "";
let textTwo = "";
let sign = "";

numbButtonPressed();
operatorButtonPressed();
equalButton();
clearButton();
backSpaceButton();
flipSignButton();



function numbButtonPressed() {
    for (let numbs of numb) {
        numbs.addEventListener("click", e => {
            if (textOne.length < 13) {
                textOne += e.target.textContent;            // for writing number adjacent 
                currentNumberDisplay.textContent = textOne;
                console.log(`This is TextOne ${textOne}`);
            }
        })
    }
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
        console.log(textOne);

    })
}
let isSigned = false;
function operatorButtonPressed() {
    for (let operators of operator) {
        operators.addEventListener("click", e => {
            if (!isSigned) {
                isSigned = true;                                                       // disable selecting multiple sign
                sign = e.target.textContent;
                currentNumberDisplay.textContent += ` ${sign} `;
                console.log(` ${sign} `);
                previousNumberDisplay.textContent = currentNumberDisplay.textContent;
                textTwo = textOne;
                textOne = "";
                currentNumberDisplay.textContent = "";                                  // clear the current number
                currentNumberDisplay.style.marginTop = "70px";                          // so currentNumber won't change position
                // operators.classList.remove("operator");
            }
        })
    }
}

// function disableButton() {
//     operator.disabled = true;
//     console.log("Disabled")
// }

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

function clearFunction() {
    textOne = "";
    textTwo = "";
    sign.textContent = "";
    currentNumberDisplay.textContent = 0;
    previousNumberDisplay.textContent = "";
    currentNumberDisplay.style.marginTop = "95px";
    currentNumberDisplay.classList.remove("resultSize");
    isSigned = false;
}

function backspaceFunction() {
    textOne = textOne.slice(0, -1);
    currentNumberDisplay.textContent = textOne;
    console.log(textOne);
    console.log("Cleared");
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
    })

}


const addNum = function () {
    result = +textOne + +textTwo;
    previousNumberDisplay.textContent = `${textTwo} + ${textOne}`;
    currentNumberDisplay.textContent = result;
    textOne = "";                                                               // erase the result value from text so that we can continuously add number
    currentNumberDisplay.style.marginTop = "80px";
}

const multipleNum = function () {
    result = +textOne * +textTwo;
    previousNumberDisplay.textContent = `${textTwo} * ${textOne}`
    currentNumberDisplay.textContent = result;
    textOne = "";
    currentNumberDisplay.style.marginTop = "80px";
}

const subtractNum = function () {
    result = +textTwo - +textOne;
    // result = result.toFixed(9);
    previousNumberDisplay.textContent = `${textTwo} - ${textOne}`
    currentNumberDisplay.textContent = result;
    textOne = "";
    currentNumberDisplay.style.marginTop = "80px";
}

const divideNum = function () {
    result = +textTwo / +textOne;
    // result = result.toFixed(9);
    previousNumberDisplay.textContent = `${textTwo} / ${textOne}`;
    currentNumberDisplay.textContent = result;
    textOne = "";
    currentNumberDisplay.style.marginTop = "80px";
}

// const addNum = function () {
//     result = +textOne + +textTwo;                                          // + before variable convert string to a integer
//     if (textOne.length + textTwo.length < 11) {
//         previousNumberDisplay.textContent = `${textTwo} + ${textOne}`;
//         currentNumberDisplay.textContent = result;
//         textOne = "";
//         currentNumberDisplay.style.marginTop = "40px";
//     }
//     else {
//         result = result.toFixed(4);
//         previousNumberDisplay.textContent = ``;
//         currentNumberDisplay.textContent = result;
//         textOne = "";
//     }
// }
