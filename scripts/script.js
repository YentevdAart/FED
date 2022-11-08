// JavaScript Document

// language button drop down list//
var buttonEN = document.querySelector("section button");
var dropDown = document.querySelector("section>ul");

buttonEN.addEventListener("click",uitklappen);

function uitklappen(){
    dropDown.classList.toggle("anders");
}

//footer arrow dropdownlijst //
var deEersteButton = document.querySelector("footer nav>ul li:first-of-type div button");
var deTweedeButton = document.querySelector("footer nav>ul li:nth-of-type(2) div button");
var deDerdeButton = document.querySelector("footer nav>ul li:nth-of-type(3) div button");


var deEerstePee = document.querySelector("footer nav>ul li:first-of-type div p");
var deTweedePee = document.querySelector("footer nav>ul li:nth-of-type(2) div p");
var deDerdePee = document.querySelector("footer nav>ul li:nth-of-type(3) div p");

deEersteButton.addEventListener("click", revealFirst);
deTweedeButton.addEventListener("click", revealSecond);
deDerdeButton.addEventListener("click", revealThird);

deEerstePee.addEventListener("click", revealFirst);
deTweedePee.addEventListener("click", revealSecond);
deDerdePee.addEventListener("click", revealThird);

function revealFirst(){
var deLijst = document.querySelector("footer nav>ul li:first-of-type ul");
  deLijst.classList.toggle("show");

}
function revealSecond(){
    var deLijst = document.querySelector("footer nav>ul li:nth-of-type(2) ul");
      deLijst.classList.toggle("show");

    }

function revealThird(){
        var deLijst = document.querySelector("footer nav>ul li:nth-of-type(3) ul");
          deLijst.classList.toggle("show");

        }



