let inputElement = document.getElementById('x');
let formElement = document.getElementById('form');
let outputElement = document.getElementById('output');

formElement.addEventListener('submit',(event)=>{
    event.preventDefault();
    let numStr = inputElement.value;
    let reversedStr = '';
    for (let i = numStr.length - 1; i >= 0; i--) {
        reversedStr += numStr[i];
    }
    outputElement.textContent = reversedStr;
});