//  Wasted 1-2 week for this logic
//  Took 1 Whole month for this project
//  The whole logic was that we did not need to store two different variable but make textOne = textTwo [through for loop, addEventListener ]
//  I tried to make textTwo from current.textContent [Dump decision need to think more logically and create better problem solving skill]
//  Also need to create a sign variable so that when we press equal button we can search for that sign and do the appropriate sign calculation


const main = document.querySelector(".main");
const content = document.querySelector(".content");
const display = document.querySelector(".display");

const numb = document.querySelectorAll(".numb")
const operator = document.querySelectorAll(".operator")

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


numbButtonPressed();
operatorButtonPressed();
clearButton();
backSpaceButton();
flipSignButton();
equalButton();
powerButton();

function numbButtonPressed() {
    for (let numbs of numb) {
        numbs.addEventListener("click", numbButtonPressedFunction)
    }
}

function numbButtonPressedFunction(e) {
    if (textOne.length < 13) {
        textOne += e.target.textContent;                                        // for writing number adjacent 
        currentNumberDisplay.textContent = textOne;
        isSigned = false;
        console.log(`This is TextOne ${textOne}`);
    }
}

function operatorButtonPressed() {
    for (let operators of operator) {
        operators.addEventListener("click", operatorButtonPressedFunction)
    }
}

function operatorButtonPressedFunction(e) {
    console.log(`This is operatorButtonPressed `);

    if (!isSigned) {
        // console.log(`This is isSigned`);
        isSigned = true;                                                        // disable selecting multiple sign
        sign = e.target.textContent;
        currentNumberDisplay.textContent += ` ${sign} `;
        previousNumberDisplay.textContent = currentNumberDisplay.textContent;
        currentNumberDisplay.textContent = "";                                  // clear the current number
        currentNumberDisplay.style.marginTop = "31.5px";                          // so current Number won't change position

        // Clears After an operator is selected

        textTwo = textOne;
        textOne = "";
        // (`----------TextTwo = textOne ${textTwo}--------------`)

        if (!result && sign === "+", "-", "*", "/") {
            console.log(`This is If Operator ${sign}`);
            for (let numbs of numb) {
                numbs.addEventListener("click", CalculatingWithoutEqual);
            }
        }

    }
}


function CalculatingWithoutEqual() {
    console.log(`  Number for NotEqualButton  `);

    textThree = textOne;
    textFour = textTwo;


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

    // console.log(`This is previousSign ${previousSign}`);
    // console.log(`This is sign ${sign}`);

    for (let operators of operator) {
        operators.addEventListener("click", e => {
            // Calculating Adjacent Number

            if (previousSign === sign) {
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
                    previousNumberDisplay.textContent = ` ${textFour} ${sign} ${textThree}`
                    currentNumberDisplay.textContent = resultTwo;
                    console.log(`This is resultTwo ${resultTwo}`);
                }
                if (sign === "*") {
                    console.log(`  Adjacent Multiplying Without EqualButton`);
                    resultTwo = +textFour * +textThree;
                    previousNumberDisplay.textContent = ` ${textFour} ${sign} ${textThree}`
                    currentNumberDisplay.textContent = resultTwo;
                    console.log(`This is resultTwo ${resultTwo}`);
                }
                if (sign === "/") {
                    console.log(`  Adjacent Dividing Without EqualButton `);
                    resultTwo = +textFour / +textThree;
                    previousNumberDisplay.textContent = ` ${textFour} ${sign} ${textThree}`
                    currentNumberDisplay.textContent = resultTwo;
                    console.log(`This is resultTwo ${resultTwo}`);
                }
                //  Adjacent Number Calculation Continuos
                for (let operators of operator) {
                    operators.addEventListener("click", e => {
                        console.log(`-------------This is Continuos Result Inside Inside ${resultTwo}----------------`);
                        textTwo = resultTwo;
                        previousNumberDisplay.textContent = `${textTwo}  ${e.target.textContent}`;
                        currentNumberDisplay.textContent = "";
                        sign = e.target.textContent;
                    })
                }
            }

            //  Diff Adjacent Number Calculation 
            else {
                console.log(`previousSign !== sign`);
                previousNumberDisplay.textContent = ` ${resultTwo} ${e.target.textContent}  `;
                // console.log(`This is else resultTwo ${resultTwo} `);
                textTwo = resultTwo;

                for (let numbs of numb) {
                    numbs.addEventListener("click", e => {
                        //    Diff Adjacent Number Calculating Continuos
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
                    })
                }
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
    equal.addEventListener("click", equalFunction);
}

// we stored both the value and when we press equal button we check for the signs
function equalFunction() {
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
    if (sign === "%") {
        percentageNum();
    }

    // ContinuousCalculating 
    for (let numbs of numb) {
        numbs.addEventListener("click", clearResultEventListener);
        // currentNumberDisplay.style.marginTop = "80px";
    }
    for (let operators of operator) {
        operators.addEventListener("click", continuousCalculatingResultEventListener);
        // currentNumberDisplay.style.marginTop = "95px";
    }

}

function continuousCalculatingResultEventListener() {
    console.log(`----------------Continuous Calculating[Result + textOne]-------------------} `);
    textTwo = result;
    previousNumberDisplay.textContent = ` ${textTwo} ${sign} `
    currentNumberDisplay.textContent = "";
    currentNumberDisplay.style.marginTop = "62px";                                      // so current Number won't change position
}

function clearResultEventListener() {
    console.log("-------- Clears the result when pressed on a number ---------");
    for (let operators of operator) {
        operators.removeEventListener("click", continuousCalculatingResultEventListener);
    }
    result = "";
    currentNumberDisplay.style.marginTop = "48px";                                       // default it after clearing
}

function clearFunction() {
    window.location.reload();
    console.clear();
    // textOne = "";
    // textTwo = "";
    // textThree = "";
    // textFour = "";
    // sign = "";
    // previousSign = "";
    // result = "";
    // resultTwo = "";
    // isSigned = false;
    // resultPredefined = "";
    // currentNumberDisplay.textContent = 0;
    // previousNumberDisplay.textContent = "";
    // currentNumberDisplay.classList.remove("resultSize");
    // currentNumberDisplay.style.marginTop = "95px";
}

// ---------------------------Explaining Function-------------------------------------

const addNum = function () {
    result = +textOne + +textTwo;                                                // +textTwo converts a string to a number
    previousNumberDisplay.textContent = `${textTwo} + ${textOne} `;
    currentNumberDisplay.textContent = result;
    currentNumberDisplay.style.marginTop = "50px";
    textOne = "";                                                               // erase the result value from text so that we can continuously add number
    textTwo = "";
}

const subtractNum = function () {
    result = +textTwo - +textOne;
    previousNumberDisplay.textContent = `${textTwo} - ${textOne} `
    currentNumberDisplay.textContent = result;
    currentNumberDisplay.style.marginTop = "50px";
    textOne = "";
    textTwo = "";
}

const multipleNum = function () {
    result = +textOne * +textTwo;
    previousNumberDisplay.textContent = `${textTwo} * ${textOne} `
    currentNumberDisplay.textContent = result;
    currentNumberDisplay.style.marginTop = "50px";
    textOne = "";
    textTwo = "";
}

const divideNum = function () {
    console.log(`This is textOne ${textOne} `);
    console.log(`This is textTwo ${textTwo} `);
    if (textOne === "0") {
        previousNumberDisplay.textContent = `${textTwo} / ${textOne}`;
        currentNumberDisplay.textContent = "Error";
        currentNumberDisplay.style.marginTop = "50px";
        textOne = "";
        textTwo = "";
        console.log("Cannot divide by 0")
    }
    else {
        result = +textTwo / +textOne;
        const newLength = result.toString().length;
        console.log("I length IT " + newLength);

        if (newLength > 12) {
            result = result.toFixed(5);
            previousNumberDisplay.textContent = `${textTwo} / ${textOne}`;
            currentNumberDisplay.textContent = result;
            currentNumberDisplay.style.marginTop = "50px";
            textOne = "";
            textTwo = "";
            console.log("round number");
        }
        else {
            previousNumberDisplay.textContent = `${textTwo} / ${textOne}`;
            currentNumberDisplay.textContent = result;
            currentNumberDisplay.style.marginTop = "50px";
            textOne = "";
            textTwo = "";
            console.log("normal number");
        }


    }
}

function percentageNum() {
    currentNumberDisplay.style.marginTop = "50px";                          // so current Number won't change position
    result = textTwo / 100 * textOne;
    previousNumberDisplay.textContent = `${textTwo} % ${textOne}`;
    currentNumberDisplay.textContent = result;
    console.log(`This is Percentage ${result}`);
    textOne = "";
    textTwo = "";
}

const powerFunction = function () {
    currentNumberDisplay.style.marginTop = "35px";                          // so current Number won't change position
    if (resultTwo) {
        console.log("Else not hello");
        result = resultTwo * resultTwo;
        currentNumberDisplay.textContent = result;
        previousNumberDisplay.textContent = `Sqr(${(resultTwo)})`;
        console.log(`Power Result Two${result}`);
    }
    else {
        result = textOne * textOne;
        currentNumberDisplay.textContent = result;
        previousNumberDisplay.textContent = `Sqr(${(textOne)})`;
        console.log("well hello")
        console.log(textOne);
        textOne = result;
    }
    isSigned = false;
}


// --------------------------------------------------------------- Trail and Error---------------------------------------------------------------

// function CalculatingResultEndToEndSum() {
//     // for (let numbs of numb) {
//     //     numbs.addEventListener("click",)
//     // }
//     // continuosResult = "";
// }

// function CalculatingResultEndToEndSubtract() {
//     for (let numbs of numb) {
//         numbs.addEventListener("click", e => {
//             textThree = textOne;
//             textFour = textTwo;
//             console.log(`---------------- Number for NotEqualButton  -------------------}`);
//             console.log(`This is ContinuosResult ${continuosResult}`);
//             console.log(`This is TextThree ${textThree}`);
//             console.log(`This is TextFour ${textFour}`);

//             for (let operators of operator) {
//                 operators.addEventListener("click", e => {
//                     console.log(`---------------- Adding WithoutEqualButton -------------------}`);
//                     continuosResult = +textFour - +textThree;
//                     previousNumberDisplay.textContent = ` ${textFour} ${sign} ${textThree}`
//                     currentNumberDisplay.textContent = continuosResult;
//                     // console.log(`This is ContinuosResult ${continuosResult}`);
//                     // console.log(`This is TextThree ${textThree}`);
//                     // console.log(`This is TextFour ${textFour}`);

//                     for (let operators of operator) {
//                         operators.addEventListener("click", e => {
//                             sign = "";
//                             sign = e.target.textContent;
//                             console.log(`-------------This is Continuos Result Inside Inside ${continuosResult}----------------`);
//                             if (e.target.textContent === "-") {
//                                 console.log("NOT hello");
//                                 textTwo = continuosResult;
//                                 previousNumberDisplay.textContent = `${textTwo}  ${sign}`;
//                                 currentNumberDisplay.textContent = continuosResult;
//                                 // continuosResult = +textFour + +textThree;
//                                 // console.log(`This is TextOne${textOne}`);
//                                 // console.log(`This is TextTwo${textTwo}`);
//                                 // console.log(`This is ContinuosResult ${continuosResult}`);

//                             }

//                         })
//                     }
//                 })
//             }


//         })
//     }
// }

// function CalculatingResultEndToEndMultiple() {
//     for (let numbs of numb) {
//         numbs.addEventListener("click", e => {
//             continuosResult = +textTwo * +textOne;
//             textThree = textOne;
//             textFour = textTwo;
//             for (let operators of operator) {
//                 operators.addEventListener("click", e => {
//                     console.log(`---------------- Adding Without EqualButton -------------------}`);
//                     previousNumberDisplay.textContent = ` ${textFour} ${sign} ${textThree}`
//                     currentNumberDisplay.textContent = continuosResult;
//                     console.log(`This is TextThree ${textThree}`);
//                     console.log(`This is TextFour ${textFour}`);
//                     console.log(`This is ContinuosResult ${continuosResult}`);
//                     for (let operators of operator) {
//                         operators.addEventListener("click", e => {
//                             textTwo = continuosResult;
//                             // continuosResult = +textTwo * +textOne;
//                             console.log(`textTwo ${textTwo}`);
//                             console.log(`This is Continuos Result Inside ${continuosResult}`);
//                             // previousNumberDisplay.textContent = textTwo + sign;
//                             previousNumberDisplay.textContent = `${textTwo}  ${sign}`;
//                             currentNumberDisplay.textContent = textTwo;
//                             console.log(`-------------This is Continuos Result Inside Inside ${continuosResult}----------------`);
//                             console.log(`This is TextOne${textOne}`);
//                             console.log(`This is TextTwo${textTwo}`);
//                         })
//                     }
//                 })
//             }
//         })
//     }
// }

// function CalculatingResultEndToEndDivide() {
//     for (let numbs of numb) {
//         numbs.addEventListener("click", e => {
//             continuosResult = +textTwo / +textOne;
//             textThree = textOne;
//             textFour = textTwo;
//             for (let operators of operator) {
//                 operators.addEventListener("click", e => {
//                     console.log(`---------------- Adding Without EqualButton -------------------}`);
//                     previousNumberDisplay.textContent = ` ${textFour} ${sign} ${textThree}`
//                     currentNumberDisplay.textContent = continuosResult;
//                     console.log(`This is ContinuosResult ${continuosResult}`);
//                     console.log(`This is TextThree ${textThree}`);
//                     console.log(`This is TextFour ${textFour}`);
//                     for (let operators of operator) {
//                         operators.addEventListener("click", e => {
//                             console.log(`This is Continuos Result Inside ${continuosResult}`);
//                             textTwo = continuosResult;
//                             // continuosResult = +textTwo / +textOne;
//                             // previousNumberDisplay.textContent = textTwo + sign;
//                             previousNumberDisplay.textContent = `${textTwo}  ${sign}`;
//                             currentNumberDisplay.textContent = continuosResult;
//                             console.log(`-------------This is Continuos Result Inside Inside ${continuosResult}----------------`);
//                             console.log(`This is TextOne${textOne}`);
//                             console.log(`This is TextTwo${textTwo}`);
//                         })
//                     }
//                 })
//             }
//         })
//     }
// }



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