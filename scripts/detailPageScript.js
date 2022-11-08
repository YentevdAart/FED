// JavaScript Document
// detal pagina filter button //

var buttonFilter = document.querySelector("main button");
var FilterList = document.querySelector("main ul:first-of-type");

buttonFilter.addEventListener("click", appear);

function appear(){
    FilterList.classList.toggle("see");
}