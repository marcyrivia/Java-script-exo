let nomObjet = ["Une chaise gaming", "un costume d'Halloween", "Un barbecue", "Une Guitare", "Un sac à main", ]
let imageObjet = ["chaise.png", "costume-halloween.png", "grill.png", "guitare.png", "sac-a-main.png"]
let prixMystere
let prixPropose
let aleatoire
let tentative
let image = document.querySelector("#image")
let nomImage = document.querySelector("#nom-objet")
let button = document.querySelector("#check")
let message = document.querySelector("#indication")

let affichageTentative = document.querySelector("#tentative")

function genereChiffre(valeurMax) {
    return Math.floor(Math.random() * Math.floor(valeurMax))
}

prixMystere = genereChiffre(100) + 1;
aleatoire = genereChiffre(5)

function afficheImage(valeur){
    return "<img src = .../image" + valeur +'"class= img-fluid width = "30%" alt = reponsive img">'
}
image.innerHTML = afficheImage(imageObjet[aleatoire])
nomImage.innerHTML = nomObjet[aleatoire]
tentative = 10
affichageTentative.innerHTML = "Il vous reste" + compteurTentative + "tentatives..."


function verifieProposition (){
    prixPropose = document.querySelector("#propose-prix").value
    if(compteurTentative === 0){
        affichageTentative.innerHTML = "Il vous reste" + compteurTentative + "tentatives ..."
        message.innerHTML = "Désolé vous avez perdu ! <br> Le juste prix est de" + prixMystere + "euros"
        button.disabled = true
    } else {
        if ( prixPropose > prixMystere){
            message.innerHTML = "c'est moins !"
            compteurTentative --
            affichageTentative.innerHTML = "Il vous reste" + compteurTentative + "tentatives ..."
        }
        if ( prixPropose < prixMystere){
            message.innerHTML = "c'est plus !"
            compteurTentative --
            affichageTentative.innerHTML = "Il vous reste" + compteurTentative + "tentatives ..."
        }
        if ( prixPropose == prixMystere){
            message.innerHTML = "Vous avez trouvé !"
            affichageTentative.innerHTML = "Vous avez trouvez en" + compteurTentative + "tentatives ..."
            button.disabled = true
        }
    }
}

button.addEventListener("click", verifieProposition, false)