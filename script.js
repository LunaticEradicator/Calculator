//  Successfully wasted 1-2 week for this logic
//  The whole logic was that we did not need to store two different variable but make textOne = textTwo [through for loop, addEventListener ]
//  I tried to make textTwo from current.textContent [Dump decision need to think more logically and create better problem solving skill]

const main = document.querySelector(".main");
const content = document.querySelector(".content");
const display = document.querySelector(".display");
const numb = document.querySelectorAll(".numb")
const clear = document.querySelector(".clear");
const add = document.querySelector(".add");
const equal = document.querySelector(".equal");
const operator = document.querySelectorAll(".operator")

const currentNumberDisplay = document.querySelector(".currentNumberDisplay");
const previousNumberDisplay = document.querySelector(".previousNumberDisplay");

let textOne = "";
let textTwo = "";
let sign = "";


for (let numbs of numb) {
    numbs.addEventListener("click", e => {
        if (textOne.length < 11) {
            textOne = currentNumberDisplay.textContent += e.target.textContent; // for writing number adjacent 
        }
    })
}

for (let operators of operator) {
    operators.addEventListener("click", e => {
        sign = e.target.textContent;
        currentNumberDisplay.textContent += ` ${sign} `;
        previousNumberDisplay.textContent = currentNumberDisplay.textContent;
        textTwo = textOne;
        // textOne = "";
        currentNumberDisplay.textContent = "";                                  // clear the current number
    })
}

clear.addEventListener("click", e => {
    currentNumberDisplay.textContent = "";
    previousNumberDisplay.textContent = 0;
    sign.textContent = "";
})

const callLogic = function () {
    textOne;
    textTwo;
    if (sign === "+") {

        console.log(textTwo);
        console.log(textOne);
        console.log(+textOne + +textTwo);
    }
}


const addNum = function (a, b) {
    const result = a + b;
    return result;
}


equal.addEventListener("click", e => {
    callLogic();
})





// const multipleNum = function (a, b) {
//     const result = a * b;
//     return result;
// }
// const divideNum = function (a, b) {
//     const result = a / b;
//     return result;
// }

// // number + number = result
// const operator = function (numOne, numTwo) {
//     numOne = btn.textContent;
//     // user select a Number
//     // user select an operator
//     // user select a number again
//     // user press = sign
//     // get result

// }

 // sign = e.target.textContent;
        // currentNumber.textContent = textOne;
        // console.log(`This is sign ${sign}`);
        // console.log(`This is TextOne ${textOne}`);
        // previousNumber.textContent = currentNumber.textContent;