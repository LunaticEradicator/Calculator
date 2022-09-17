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
            textOne = currentNumberDisplay.textContent += e.target.textContent;
        }
    })
}

for (let operators of operator) {
    operators.addEventListener("click", e => {
        sign = e.target.textContent;
        currentNumberDisplay.textContent += ` ${sign} `;
        previousNumberDisplay.textContent = currentNumberDisplay.textContent;
        textOne = "";
        console.log(textOne + " " + sign);
        currentNumberDisplay.textContent = "";
    })

}

clear.addEventListener("click", e => {
    currentNumberDisplay.textContent = "";
    previousNumberDisplay.textContent = 0;
    sign.textContent = "";
})



const addNum = function (a, b) {
    const result = a + b;
    return result;
}


equal.addEventListener("click", e => {
    callLogic();
})

const callLogic = function (operator) {
    if (sign === "+") {
        console.log("added dude");
    }
}




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