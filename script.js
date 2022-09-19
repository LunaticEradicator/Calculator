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

let textOne = "";
let textTwo = "";
let sign = "";

numbButtonPressed();
operatorButtonPressed();
equalButton();
clearButton();
backSpaceButton();


function numbButtonPressed() {
    for (let numbs of numb) {
        numbs.addEventListener("click", e => {
            if (textOne.length < 11) {
                textOne += e.target.textContent;           // for writing number adjacent 
                currentNumberDisplay.textContent = textOne;
            }
        })
    }
}

// function numbButtonErase() {
//     for (let numbs of numb) {
//         numbs.addEventListener("click", e => {
//             textOne -= e.target.textContent;           // for writing number adjacent 
//             // currentNumberDisplay.textContent = textOne;
//         })
//     }
// }


function operatorButtonPressed() {
    for (let operators of operator) {
        operators.addEventListener("click", e => {
            sign = e.target.textContent;
            currentNumberDisplay.textContent += ` ${sign} `;
            previousNumberDisplay.textContent = currentNumberDisplay.textContent;
            textTwo = textOne;
            textOne = "";
            currentNumberDisplay.textContent = "";                                  // clear the current number
            currentNumberDisplay.style.marginTop = "40px";                          // so currentNumber won't change position
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

function backspaceFunction() {
    textOne = textOne.slice(0, -1);
    currentNumberDisplay.textContent = textOne;
    console.log(textOne);
    console.log("Cleared");
}

function clearFunction() {
    textOne = "";
    textTwo = "";
    sign.textContent = "";
    currentNumberDisplay.textContent = "";
    previousNumberDisplay.textContent = "";
    currentNumberDisplay.style.marginTop = "80px";
}

function equalButton() {
    equal.addEventListener("click", e => {
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
    result = +textOne + +textTwo;                                          // + before variable convert string to a integer
    if (textOne.length + textTwo.length < 11) {
        previousNumberDisplay.textContent = `${textTwo} + ${textOne}`;
        currentNumberDisplay.textContent = result;
        textOne = "";
        currentNumberDisplay.style.marginTop = "40px";
    }
    else {
        result = result.toFixed(4);
        previousNumberDisplay.textContent = ``;
        currentNumberDisplay.textContent = result;
        textOne = "";
    }
}

const multipleNum = function () {
    result = +textOne * +textTwo;
    previousNumberDisplay.textContent = `${textTwo} * ${textOne}`
    currentNumberDisplay.textContent = result;
    textOne = "";
    currentNumberDisplay.style.marginTop = "40px";
}

const subtractNum = function () {
    result = +textTwo - +textOne;
    // result = result.toFixed(9);
    previousNumberDisplay.textContent = `${textTwo} - ${textOne}`
    currentNumberDisplay.textContent = result;
    textOne = "";
    currentNumberDisplay.style.marginTop = "40px";
}

const divideNum = function () {
    result = +textTwo / +textOne;
    result = result.toFixed(9);
    previousNumberDisplay.textContent = `${textTwo} / ${textOne}`;
    currentNumberDisplay.textContent = result;
    textOne = "";
    currentNumberDisplay.style.marginTop = "40px";
}

