const main = document.querySelector(".main");
const content = document.querySelector(".content");
const display = document.querySelector(".display");
const numb = document.querySelectorAll(".bottom")

// function row() {
//     for (let i = 0; i < 3 * 3; i++) {
//         let sum = 1;
//         const div = document.createElement("div");
//         cal.style.gridTemplateColumns = "repeat(3, 1fr)";
//         cal.style.gridTemplateRows = "repeat(3, 1fr)";
//         div.classList.add("num");

//         cal.append(div);
//     }
// }
// row();


for (let numbs of numb) {
    numbs.addEventListener("click", e => {
        display.textContent = numbs.textContent;
    })
}


const addNum = function (a, b) {
    const result = a + b;
    return result;
}
const subtractNum = function (a, b) {
    const result = a - b;
    return result;
}
const multipleNum = function (a, b) {
    const result = a * b;
    return result;
}
const divideNum = function (a, b) {
    const result = a / b;
    return result;
}

// number + number = result
const operator = function (numOne, numTwo) {
    numOne = btn.textContent;
    // user select a Number
    // user select an operator
    // user select a number again
    // user press = sign
    // get result

}