let nameElement = document.getElementById("name");
let emailElement = document.getElementById("email");
let websiteElement = document.getElementById("website");
let messageElement = document.getElementById("msg");
let nameErrElement = document.getElementById("nameErr");
let emailErrElement = document.getElementById("emailErr");
let siteErrElement = document.getElementById("siteErr");
let msgErrElement = document.getElementById("msgErr");
let formElement = document.getElementById("form");

formElement.addEventListener("submit",(event)=>{
    event.preventDefault();
    if(nameElement.value===""){
        nameErrElement.textContent = "This field is required";
        nameElement.classList.add("borders");
    }
    if(emailElement.value===""){
        emailErrElement.textContent = "A vaild email address is required";
        emailElement.classList.add("borders");
    }
    if(websiteElement.value===""){
        siteErrElement.textContent = "A valid url is required";
        websiteElement.classList.add("borders");
    }
    if(messageElement.value===""){
        msgErrElement.textContent = "This field is required";
        messageElement.classList.add("borders");
    }
})