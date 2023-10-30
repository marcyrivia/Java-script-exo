
let screen = document.querySelector('#screen')
let button = document.querySelector('.bouton')
let operateur = document.querySelector["+", "- ", "*", "/"]



window.addEventListener('click', (e) => {
    console.log(e)

    if (e.target.classList.contains("bouton")) {
        screen.value += e.target.value
}
})

function addition() {
    
}
