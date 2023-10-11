

let showPassword = document.querySelector("#show")
let showTime = document.querySelector("#sw")
let password = document.querySelector("#password")
let confirmPassword = document.querySelector("#confirmPassword")
let change = document.querySelector("#check")
let information = document.querySelector("#information")
let letter = document.querySelector("#letter")
let capital = document.querySelector("#capital")
let length = document.querySelector("#length")
let number = document.querySelector("#number")
let special = document.querySelector("#special")

showPassword.addEventListener('mousedown', function (){
    password.type = "text"
})

showPassword.addEventListener('mouseup', function (){
    password.type = "password"
})

showPassword.addEventListener('mouseout', function (){
    password.type = "password"
})

///deuxieme bouton
showTime.addEventListener('mousedown', function (){
    confirmPassword.type = "text"
})

showTime.addEventListener('mouseup', function (){
    confirmPassword.type = "password"
})

showTime.addEventListener('mouseout', function (){
    confirmPassword.type = "password"
})

///Changement icone

// let iconBtn = document.querySelector("#icon")

// iconBtn.addEventListener("mousedown", function(){
//     find('#icon').toggleClass("bi bi-eye-fill").toggleClass("bi bi-eye-slash-fill");
// })

// iconBtn.addEventListener("mouseup", function(){
//     find('#icon').toggleClass("bi bi-eye-fill").toggleClass("bi bi-eye-slash-fill");
// })




/// BLOCK
password.addEventListener("focus", function(){
    document.getElementById("message").style.display = "block"
})

password.addEventListener("blur", function(){
    document.getElementById("message").style.display = "none"
})

///valider les minuscule
password.addEventListener( 'keyup', function(){
    var lowerCaseLetters = /[a-z]/g //: G = GLOBAL
    if(password.value.match(lowerCaseLetters)){
        letter.classList.remove("invalid")
        letter.classList.add("valid")
    } else {
        letter.classList.remove("valid")
        letter.classList.add("invalid")
        
    }

    ///MAJUSCULE

    var upperCaseLetters = /[A-Z]/g
    if(password.value.match(upperCaseLetters)){
        capital.classList.remove("invalid")
        capital.classList.add("valid")
    } else {
        capital.classList.remove("valid")
        capital.classList.add("invalid")
    }

    ///Nombre

    var numbers = /[0-9]/g
    if(password.value.match(numbers)){
        number.classList.remove("invalid")
        number.classList.add("valid")
    } else {
        number.classList.remove("valid")
        number.classList.add("invalid")
    }



    //// lenght
    if(password.value.length >=8 ){
        length.classList.remove("invalid")
        length.classList.add("valid")
    } else {
        length.classList.remove("valid")
        length.classList.add("invalid")
    }



    /// caractères speciaux

    var specials = /[*#@+/!?]/g
if(password.value.match(specials)){
    special.classList.remove("invalid")
    special.classList.add("valid")
    console.group("ok")
} else {
    special.classList.remove("valid")
    special.classList.add("invalid")
    console.log("ko")
}



})




confirmPassword.addEventListener("focus", function(){
    document.getElementById("message").style.display = "block"
})

confirmPassword.addEventListener("blur", function(){
    document.getElementById("message").style.display = "none"
})









function checkPassword(){

    let inputPassword = password.value
    let inputConfirmPassword = confirmPassword.value

    if (inputPassword === inputConfirmPassword){
        information.innerHTML = "Mots de passe identique"
        information.classList.add("validate")
    } else {
        information.innerHTML = "Mots de passe non identique"
        information.classList.add("danger")
    }
}



change.addEventListener("click", function(){
    checkPassword()
})

password.addEventListener("focus", function(){
    information.innerHTML = ""
})

confirmPassword.addEventListener("focus", function(){
    information.innerHTML = ""
})








