let caca = document.querySelector("#name")
let numbers = document.querySelector("#number")
let pageAge = document.querySelector("#pa")
let pageName = document.querySelector("#pn")

window.location.search
// let test = (window.location.search).split("&")
// console.log(test[0])

let paremUrl = new  URLSearchParams(window.location.search)
console.log(paremUrl)

let urlParams = paremUrl.get("name")
let spanlastname = document.querySelector("#spanlastname")
spanlastname.innerHTML +=urlParams

/// += conserve le html du span de page.html

let paremNum = new  URLSearchParams(window.location.search)
let urlnumber = paremNum.get("number")
let spannumber = document.querySelector("#spannumber")
spannumber.innerHTML +=urlnumber