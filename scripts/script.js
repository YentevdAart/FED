// JavaScript Document

// language button drop down list//
var buttonEN = document.querySelector("section button")
var dropDown = document.querySelector("section>ul")
buttonEN.addEventListener("click", function(){
  dropDown.classList.toggle("anders")
});