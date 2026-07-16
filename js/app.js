document.addEventListener("DOMContentLoaded", () => {

const startButton = document.querySelector(".hero button");

if(startButton){

startButton.addEventListener("click",()=>{

alert("مرحبًا بك في Sunu Daara. سننتقل قريبًا إلى صفحة البحث عن المعلمين.");

});
// ===========================
// Navigation
// ===========================

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

link.addEventListener("mouseenter", () => {

link.style.opacity = "0.8";

});

link.addEventListener("mouseleave", () => {

link.style.opacity = "1";

});

});

}

});
// ===========================
// Buttons Navigation
// ===========================

const primaryButton = document.querySelector(".primary-btn");

if (primaryButton) {

primaryButton.addEventListener("click", () => {

window.location.href = "publish.html";

});

}

const searchButton = document.querySelector(".secondary-btn");

if (searchButton) {

searchButton.addEventListener("click", () => {

window.location.href = "teachers.html";

});

}
