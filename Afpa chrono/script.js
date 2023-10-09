// Declaration des elements
const btnStart = document.getElementById('btn-start')
const btnPause = document.querySelector('#btn-pause')
const btnStop = document.querySelector('#btn-stop')
const spanInfo = document.querySelector('#span-info')

// initialisation du temps de départ
let tpsEcoule = 0

let pause = ""

let tpsTempo = 0
btnStart.addEventListener('click', function () {
    // Algo de calcul de nombre heures, minutes et secondes écoulées

    // On démarre avec le timestamp lorsque l'on clique sur start qu'on stock dans startTime
    var startTime = new Date();

    // on lance un setInterval
    decompte = setInterval(function () {
        // 1- Convertir en secondes ：
        var seconds = Math.round(
            (new Date().getTime() - startTime.getTime()) / 1000 + tpsTempo);

        // 2- Extraire les heures:
        var hours = parseInt(seconds / 3600);
        seconds = seconds % 3600; // secondes restantes

        // 3- Extraire les minutes:
        var minutes = parseInt(seconds / 60);
        seconds = seconds % 60; // secondes restantes

        // 4- afficher dans le span
        spanInfo.innerHTML = ajouteUnZero(hours)
            + ": " + ajouteUnZero(minutes)
            + ": " + ajouteUnZero(seconds);
        
            tpsTempo ++
    }, 1000); // fin de function anonyme dans setInterval

    btnStart.style.visibility = "hidden"
    

})

btnPause.addEventListener("click", function () {
    clearInterval(decompte)
    pause = true
    if(pause == true){
        decomptepause = false 
    } else {
        clearInterval(decompte)
        pause = true
    }
})

function ajouteUnZero(tps) {
    if ( tps <= 9){
        return '0' + tps
    } else {
        return tps
    }
}