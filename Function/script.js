// let body = document.getElementById("body")
// let pink = document.getElementById("pinkBtn")
// let blue = document.getElementById("blueBtn")

function changeBackground (color, opacity){
    let body = document.querySelector("body")
    body.style.backgroundColor = color
    body.style.opacity = opacity
}

let btnBackgroundColor= document.querySelector
("#btn-bg")



document.addEventListener("click", function (e){
    let buttonColor = e.target.textContent

    changeBackgroundColor(buttonColor, "1")
} )

document.addEventListener("db click", function (e) {
    let butonColor = e.target.textContent
    changeBackgroundColor(buttonColor, "1")
})