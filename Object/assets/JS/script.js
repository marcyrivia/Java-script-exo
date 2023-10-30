// let container = document.querySelector('#container');

// let Emhyr = {
//     photo : "../images/EvE.webp",
//     name: 'Emhyr van Emreis',
//     age: '45',
//     gender: 'Male',
//     occupation: 'Empereur de Nilfgaard',
//     nationnality: 'Nilfgaardien',

//     cri () {
//       window.alert('grognement');
//     }
// }

// container.innerHTML = 
// `
// <div id="container" class="container">
// <div class="image">
//     <img src="assets/Images/EvE.webp" alt="">
// </div>
// <p><b>Nom : </b> ${Emhyr.name}</p>
// <p><b>Âge:</b> ${Emhyr.age}</p>
// <p><b>Sexe:</b> ${Emhyr.gender} </p>
// <p><b>Nationnalité</b> ${Emhyr.nationnality} </p>
// <p><b>Profession</b> ${Emhyr.occupation} </p>
// <div class="button-container">
// <button id="button"> click ! </button>
// </div>
// </div>
// `
// let button = document.querySelector('#button');

// button.addEventListener('click', function () {
//     Emhyr.cri();
// });

class character{
    constructor(race, type, nom, photo, habitat){
        this.race = race;
        this.type = type;
        this.nom = nom;
        this.photo = photo;
        this.habitat = habitat;
    }
}

let Achab = new character('Humain', "Capitaine", 'Achab', 'Achab.jpg', "Peaquod");
let vesemir = new character('chat de gouttière', 'chat', 'Vesemir', "rouxchat.jpg", "chez moi",)
let MobyDick = new character('Baleine bleue', 'Baleine', 'Moby Dick', "BlueWhale.jpg", "océan",)


const table = [Achab, vesemir, MobyDick];

console.log(table);

let customElement = document.querySelector('#container');
    for (i in table) 

    customElement.innerHTML = `
    <div class="card">
    <img src="assets/Images/${table[i].photo}" alt="">
    <div class="card">
    <p><b>  Race : </b> ${table[i].race}</p>
    <p><b> Type : </b> ${table[i].type}</p>
    <p><b> Nom : </b> ${table[i].nom} </p>
    <p><b> Habitat :</b> ${table[i].habitat} </p>
    </div>
    `