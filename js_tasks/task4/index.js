let dateElement = document.getElementById("date");
let timeElement = document.getElementById("time");
let dateResElement = document.getElementById("dateResult");
let timeResElement = document.getElementById("timeResult");

const d = new Date();

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

dateElement.addEventListener("click",()=>{
    dateResElement.textContent = d.getDate()+"/"+months[d.getMonth()]+"/"+d.getFullYear();
});

timeElement.addEventListener("click",()=>{
    timeResElement.textContent = d;
});