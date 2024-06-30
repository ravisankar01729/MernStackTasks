let num1Element = document.getElementById("num1");
let num2Element = document.getElementById("num2");
let multiplyBtn = document.getElementById("multiply");
let divideBtn = document.getElementById("divide");
let resultElement = document.getElementById("result");

multiplyBtn.addEventListener("click",()=>{
    resultElement.textContent = num1Element.value * num2Element.value;
});

divideBtn.addEventListener("click",()=>{
    resultElement.textContent = num1Element.value / num2Element.value;
});