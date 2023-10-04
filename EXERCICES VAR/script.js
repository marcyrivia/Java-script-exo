
/* var message = ("Dialogue");

window.alert(Dialogue);*/


/* var partone = ("ok");

var parttwo = ("pas ok");

window.alert( partone + parttwo ); */


/*
 let  firstname = "Venom"

 let  lastname = "Snake"

 let  age = "36 ans"

 let  city = "outer heaven"

 window.alert(`Bonjour ${firstname} ${lastname} j'ai ${age} et j'habite à ${city}`)
*/

/*

let nom = prompt ("Veuillez entrer votre nom")

let prenom = prompt ("Veuillez entrer votre prenom ")

let age = prompt ("veuillez entrer votre âge")

let mail = prompt ("veuillez entrer cotre adresse mail")

alert(nom + " " + prenom + " " + age + " " + mail)

*/

/*
let nombre1 = prompt ("Veuillez entrer un nombre") 

let nombre2 = prompt ("Veuillez entrer un autre nombre")

alert(Number(nombre1) +  parseInt(nombre2))
*/

/*
let age = prompt ("Veuillez entrer votre âge") 

window.alert(age)
    
    if (age >= 18) {

        console.log("Cette personne est majeure")

    } else  {

        console.log("Cette personne est mineure")
    }*/
 
    
/*
let number = Number(prompt("Veuillez entrer un nombre entier")) 

if(number%2 == 0)
{
       console.log("Nombre pair");
}
else
{
       console.log("Nombre impair"); 
}*/

/*
let nmbr = prompt("Veuillez entrer un nombre entier")

if (Number.isInteger(nmbr/2)) {
    console.log("nombre pair")
}

else {
    console.log("nombre impaire")
}
*/


/*
var passw = ("neo")
let password = prompt("Veuillez entrer un mot de passe")

if (passw = password) {
    console.log("Hello Mr.Anderson")
}

else  {
    console.log("Mot de passe incorrect")
}
*/

/*
var femme = ("femme")
var homme = ("homme")

let genre = prompt("Veuillez entrer votre sexe")
let age = prompt("Veuillez entrer votre âge")

if (genre == femme && age <= 18) {
    console.log("Cet utilisateur est une femme mineure")
}

else if  (genre == femme && age >= 18){
    console.log("Cet utilisateur est une femme majeure")
}

else if (genre == homme && age >=18) {
    console.log("Cet utilisateur est un homme majeure ")
}

else if (genre == homme && age <=18) {
    console.log("Cet utilisateur est un homme mineur")
}

else{
    console.log("Saisie incorrecte")
}
*/


/* SWITCH
var mois = prompt("Veuillez saisir un mois entre 1 et 5")
var NomMois = " "
switch(mois){
    case "1" :
       NomMois = "Janvier"
       break;

       case "2" :
        NomMois = "Février"
        break;

        case "3" :
            NomMois = "Mars"
            break;

            case "4" :
                NomMois = "Avril"
                break;

                case "5" :
                    NomMois = "Mai"
                    break;

                    default:
                    NomMois = "Veuillez sisir un moisne netre 1 et 5"
}

console.log (`le mois numéro ${mois} correspond à ${NomMois}`)

*/

///TERNAIRE
/*
let number = Number(prompt("Veuillez entrer un nombre entier")) 
console.log((number%2) == 0  ? `Le nombre est pair` : `Le nombre est impair`)
*/

//Window confirm

/*
let choice = window.confirm("Voulez vous accepter les CGU ?")

if(choice == true) {
    console.log("OK")
} else{
    console.log("NO")
} 
*/

/// WHILE

/*
let compteur = "0"

while(compteur<100){
    compteur++
    console.log(compteur)
}
*/

/*
let compteur = 100

while(compteur>=0){
console.log(compteur)
   compteur-=2    
}
*/


/*
let nb1 = 3
let nb2 = 6

while(nb1 + nb2 < 2023 ) {
    console.log(nb1 + nb2)
    nb2 = nb2+ (nb1 + nb2)
    
}
*/


// let message = "Message"
// let number = 1
// while(number < 10){
//     console.log(message + number)

//     number++

// if(number === 10){
//    console.log( message + number + " " +  "c'est le dernier message")
// }

// }