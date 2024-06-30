let inputElement = document.getElementById('x');
let formElement = document.getElementById('form');
let outputElement = document.getElementById('output');

formElement.addEventListener('submit',(event)=>{
    event.preventDefault();
    let numStr = inputElement.value.split("").sort().join("");
    outputElement.textContent = numStr;
});