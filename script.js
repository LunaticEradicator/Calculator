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
let textThree = "";
let textFour = "";
let sign = "";
let result = "";
let continuosResult = "";


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

let showed = "";
let isSigned = false;
let isResult = false;

// Fix Multi and divide
function operatorButtonPressed() {
    for (let operators of operator) {
        operators.addEventListener("click", e => {
            if (!isSigned) {
                isSigned = true;                                                        // disable selecting multiple sign
                sign = e.target.textContent;
                currentNumberDisplay.textContent += ` ${sign} `;
                previousNumberDisplay.textContent = currentNumberDisplay.textContent;
                currentNumberDisplay.textContent = "";                                  // clear the current number
                currentNumberDisplay.style.marginTop = "70px";                          // so current Number won't change position
                textTwo = textOne;
                textOne = "";

                // && textFour === "" && textThree === ""x
                if (result && !continuosResult) {
                    console.log(`---------------- Calculating with equalButton -------------------}`);
                    textTwo = textOne;
                    textOne = "";
                }

                else {
                    if (sign === "+") {
                        CalculatingResultEndToEndSum();
                    }
                    if (sign === "-") {
                        CalculatingResultEndToEndSubtract();
                    }
                    if (sign === "*") {
                        CalculatingResultEndToEndMultiple();
                    }
                    if (sign === "/") {
                        CalculatingResultEndToEndDivide();
                    }
                }
            }
        })
    }
}

function CalculatingResultEndToEndSum() {
    for (let numbs of numb) {
        numbs.addEventListener("click", e => {
            continuosResult = +textTwo + +textOne;
            textThree = textOne;
            textFour = textTwo;
            for (let operators of operator) {
                operators.addEventListener("click", e => {
                    console.log(`---------------- Adding Without EqualButton -------------------}`);
                    previousNumberDisplay.textContent = ` ${textFour} ${sign} ${textThree}`
                    currentNumberDisplay.textContent = continuosResult;
                    console.log(`This is ContinuosResult ${continuosResult}`);
                    console.log(`This is TextThree ${textThree}`);
                    console.log(`This is TextFour ${textFour}`);
                    for (let operators of operator) {
                        operators.addEventListener("click", e => {
                            console.log(`This is Continuos Result Inside ${continuosResult}`);
                            textTwo = continuosResult;
                            continuosResult = +textTwo + +textOne;
                            // previousNumberDisplay.textContent = textTwo + sign;
                            previousNumberDisplay.textContent = `${textTwo}  ${sign}`;
                            currentNumberDisplay.textContent = continuosResult;
                            console.log(`-------------This is Continuos Result Inside Inside ${continuosResult}----------------`);
                            console.log(`This is TextOne${textOne}`);
                            console.log(`This is TextTwo${textTwo}`);
                        })
                    }
                })
            }
        })
    }
}

function CalculatingResultEndToEndSubtract() {
    for (let numbs of numb) {
        numbs.addEventListener("click", e => {
            continuosResult = +textTwo - +textOne;
            textThree = textOne;
            textFour = textTwo;
            for (let operators of operator) {
                operators.addEventListener("click", e => {
                    console.log(`---------------- Adding Without EqualButton -------------------}`);
                    previousNumberDisplay.textContent = ` ${textFour} ${sign} ${textThree}`
                    currentNumberDisplay.textContent = continuosResult;
                    console.log(`This is ContinuosResult ${continuosResult}`);
                    console.log(`This is TextThree ${textThree}`);
                    console.log(`This is TextFour ${textFour}`);
                    for (let operators of operator) {
                        operators.addEventListener("click", e => {
                            console.log(`This is Continuos Result Inside ${continuosResult}`);
                            textTwo = continuosResult;
                            continuosResult = +textTwo - +textOne;
                            // previousNumberDisplay.textContent = textTwo + sign;
                            previousNumberDisplay.textContent = `${textTwo}  ${sign}`;
                            currentNumberDisplay.textContent = continuosResult;
                            console.log(`-------------This is Continuos Result Inside Inside ${continuosResult}----------------`);
                            console.log(`This is TextOne${textOne}`);
                            console.log(`This is TextTwo${textTwo}`);
                        })
                    }
                })
            }
        })
    }
}

function CalculatingResultEndToEndMultiple() {
    for (let numbs of numb) {
        numbs.addEventListener("click", e => {
            continuosResult = +textTwo * +textOne;
            textThree = textOne;
            textFour = textTwo;
            for (let operators of operator) {
                operators.addEventListener("click", e => {
                    console.log(`---------------- Adding Without EqualButton -------------------}`);
                    previousNumberDisplay.textContent = ` ${textFour} ${sign} ${textThree}`
                    currentNumberDisplay.textContent = continuosResult;
                    console.log(`This is TextThree ${textThree}`);
                    console.log(`This is TextFour ${textFour}`);
                    console.log(`This is ContinuosResult ${continuosResult}`);
                    for (let operators of operator) {
                        operators.addEventListener("click", e => {
                            textTwo = continuosResult;
                            continuosResult = +textTwo * +textOne;
                            console.log(`textTwo ${textTwo}`);
                            console.log(`This is Continuos Result Inside ${continuosResult}`);
                            // previousNumberDisplay.textContent = textTwo + sign;
                            previousNumberDisplay.textContent = `${textTwo}  ${sign}`;
                            currentNumberDisplay.textContent = textTwo;
                            console.log(`-------------This is Continuos Result Inside Inside ${continuosResult}----------------`);
                            console.log(`This is TextOne${textOne}`);
                            console.log(`This is TextTwo${textTwo}`);
                        })
                    }
                })
            }
        })
    }
}

function CalculatingResultEndToEndDivide() {
    for (let numbs of numb) {
        numbs.addEventListener("click", e => {
            continuosResult = +textTwo / +textOne;
            textThree = textOne;
            textFour = textTwo;
            for (let operators of operator) {
                operators.addEventListener("click", e => {
                    console.log(`---------------- Adding Without EqualButton -------------------}`);
                    previousNumberDisplay.textContent = ` ${textFour} ${sign} ${textThree}`
                    currentNumberDisplay.textContent = continuosResult;
                    console.log(`This is ContinuosResult ${continuosResult}`);
                    console.log(`This is TextThree ${textThree}`);
                    console.log(`This is TextFour ${textFour}`);
                    for (let operators of operator) {
                        operators.addEventListener("click", e => {
                            console.log(`This is Continuos Result Inside ${continuosResult}`);
                            textTwo = continuosResult;
                            continuosResult = +textTwo / +textOne;
                            // previousNumberDisplay.textContent = textTwo + sign;
                            previousNumberDisplay.textContent = `${textTwo}  ${sign}`;
                            currentNumberDisplay.textContent = continuosResult;
                            console.log(`-------------This is Continuos Result Inside Inside ${continuosResult}----------------`);
                            console.log(`This is TextOne${textOne}`);
                            console.log(`This is TextTwo${textTwo}`);
                        })
                    }
                })
            }
        })
    }
}



// numbs.addEventListener("click", e => {
//     continuosResult = +textOne + +textTwo;
//     textThree = textOne;
//     textFour = textTwo;
//     for (let operators of operator) {
//         operators.addEventListener("click", e => {
//             console.log(`---------------- Adding Without EqualButton -------------------}`);
//             previousNumberDisplay.textContent = `${textFour} ${sign} ${textThree}`
//             currentNumberDisplay.textContent = continuosResult;
//             console.log(`This is ContinuosResult ${continuosResult}`);
//             console.log(`This is TextThree ${textThree}`);
//             console.log(`This is TextFour ${textFour}`);
//             for (let operators of operator) {
//                 operators.addEventListener("click", e => {
//                     console.log(`This is ContinuosResult Inside ${continuosResult}`);
//                     textTwo = continuosResult;
//                     continuosResult = textTwo + textOne;
//                     previousNumberDisplay.textContent = textTwo + sign;
//                     // previousNumberDisplay.textContent = `${textTwo}  ${sign}`;
//                     currentNumberDisplay.textContent = continuosResult;
//                     console.log(`-------------This is ContinuosResult Inside ${continuosResult}----------------`);
//                     console.log(`This is TextOne${textOne}`);
//                     console.log(`This is TextTwo${textTwo}`);
//                 })
//             }
//         })
//     }
// })



// function usingMoreThanOneOperator() {
//     for (let numbs of numb) {
//         numbs.addEventListener("click", e => {
//             // if (sign === "+") {
//             console.log("--------------Pressing operator [First Layer] ---------------")
//             console.log(`This is TextOne${textOne}`);
//             console.log(`This is TextTwo${textTwo}`);
//             textThree = textOne;
//             textFour = textTwo;
//             if (textTwo !== result) {
//                 for (let operators of operator) {
//                     operators.addEventListener("click", operatorRepeat);
//                 }
//             }
//             else {
//                 previousNumberDisplay.textContent = textTwo + sign + textOne;
//                 console.log("-------------- Pressing operator [Third Layer] ---------------")
//                 result = +textOne + +textTwo;
//                 currentNumberDisplay.textContent = result;
//                 for (let operators of operator) {
//                     operators.removeEventListener("click", operatorRepeat);
//                 }
//             }
//         })
//     }
// }

// function operatorRepeat() {
//     textOne = textThree;
//     textTwo = textFour;
//     result = +textTwo + +textOne;
//     currentNumberDisplay.textContent = result;
//     currentNumberDisplay.style.marginTop = "70px";
//     textTwo = result;
//     textOne = "";
//     console.log("--------Pressed Operator  [Second Layer]--------");
//     console.log(`This is TextOne ${textOne}`);
//     console.log(`This is TextTwo ${textTwo}`);
//     console.log(`This is result ${result}`);
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
    textThree = "";
    textFour = "";
    sign = "";
    result = "";
    continuosResult = "";

    currentNumberDisplay.textContent = 0;
    previousNumberDisplay.textContent = "";
    currentNumberDisplay.style.marginTop = "95px";
    currentNumberDisplay.classList.remove("resultSize");
    isSigned = false;                                                       // enable to select a sign

    for (let operators of operator) {
        operators.removeEventListener("click", addResultEventListener)      //disable the result to be summed when clear is pressed
    }


    // console.log(`-----------Clear----------------`)
    // console.log(`This is TextOne ${textOne}`)
    // console.log(`This is TextTwo ${textTwo}`)
    // console.log(`This is result ${result}`)
    // console.log(`This is sign ${sign}`)

    console.clear();
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

        // AddingWithOutEqualButton
        for (let operators of operator) {
            console.log(`---------------- Calculating with equalButton [Result + textOne] -------------------}`);
            operators.addEventListener("click", addResultEventListener)
        }



        // Clear the result when a number is pressed
        for (let numbs of numb) {
            numbs.addEventListener("click", clearResultEventListener);
        }
    })
}

function addResultEventListener() {
    textTwo = result;
    console.log(`This is TextOne ${textOne}`);
    console.log(`This is TextTwo ${textTwo}`);
    console.log(`This is result ${result}`);
}

function clearResultEventListener() {
    for (let operators of operator) {
        operators.removeEventListener("click", addResultEventListener);
    }
    result = "";
    console.log("-------- Clears the result when pressed on a number ---------");
    //     console.log(`This is TextOne ${textOne}`);
    //     console.log(`This is TextTwo ${textTwo}`);
    //     console.log(`This is result ${result}`);
    //     console.log(`This is sign ${sign}`);
}

// ---------------------------Explaining Function-------------------------------------


const addNum = function () {
    console.log(`This is textOne ${textOne}`);
    console.log(`This is textTwo ${textTwo}`);
    result = +textOne + +textTwo;                                                // +textTwo converts a string to a number
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

// for (let numbs of numb) {
//     numbs.addEventListener("click", e => {
//         if (sign === "+") {
//             console.log("Pressing + than =")
//             console.log(`This is TextOne${textOne}`);
//             console.log(`This is TextTwo${textTwo}`);

//             result = +textTwo + +textOne;
//             previousNumberDisplay.textContent = `${textTwo} ${sign} ${textOne}`;
//             currentNumberDisplay.textContent = result;

//             // for (let operators of operator) {
//             //     operators.addEventListener("click", e => {
//             //         console.log("Pressing + than = continuously")
//             //         textTwo = result;
//             //         console.log(`This is TextOne${textOne}`);
//             //         console.log(`This is TextOne${textTwo}`);
//             //     })
//             // }
//         }
//     })
// }