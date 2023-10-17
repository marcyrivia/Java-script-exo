let lastname = document.querySelector("#name")
let firstName = document.querySelector("#firstName")
let age = document.querySelector("#Age")
let numbers = document.querySelector("#number")
let mail = document.querySelector("#mail")
let tel = document.querySelector("#tel")
let select = document.querySelector("select")
let avis = document.querySelector("#avis")


window.location.search
// let test = (window.location.search).split("&")
// console.log(test[0])

let paremUrl = new  URLSearchParams(window.location.search)
console.log(paremUrl)

let urlParams = paremUrl.get("lastName")
let spanLastname = document.querySelector("#spanlastname")
spanLastname.innerHTML +=urlParams

/// += conserve le html du span de page.html

let paremFirstName = new  URLSearchParams(window.location.search)
let urlFirstName = paremUrl.get("firstName")
let spanFirstName = document.querySelector("#spanFirstName")
spanFirstName.innerHTML +=urlFirstName

let paremAge = new  URLSearchParams(window.location.search)
let urlAge = paremUrl.get("age")
let spanAge = document.querySelector("#spanAge")
spanAge.innerHTML +=urlAge



let urlNumbers = paremUrl.get("number")
let spanNumbers = document.querySelector("#spanNumber")
spanNumbers.innerHTML +=urlNumbers


let urlMail = paremUrl.get("mail")
let spanMail = document.querySelector("#spanMail")
spanMail.innerHTML += urlMail


let urlTel = paremUrl.get("tel")
let spanTel = document.querySelector("#spanTel")
spanTel.innerHTML +=urlTel

let urlSelect = paremUrl.get("select")
let spanSelect = document.querySelector("#spanSelect")
spanSelect.innerHTML += urlSelect

let urlAvis = paremUrl.get("avis")
let spanAvis = document.querySelector("#spanAvis")
spanAvis.innerHTML += urlAvis