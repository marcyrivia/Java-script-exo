class Characters {
    constructor(Photo,Name, Age, Profession) {
        this.Photo = Photo;
        this.Name = Name;
        this.Age = Age;
        this.Profession = Profession;
        

    }
}

let HermanMelville = new Characters("Herrman.jpg","Herman Melville","72 ans", "Auteur de Moby Dick")
let Achab = new Characters("Achab.jpg","Achab","40 ans","Capitaine du Peaqod")
let Ishmael = new Characters("Ishmael.jpg","Ishmael","33 ans", "Matelot sur le peaqod")
let Queeqeg = new Characters("Qeecueg.jpg","Queeuqeg","29 ans", "Harponneur du Peaqod")
let MobyDick = new Characters("Moby-Dick.jpg","Moby Dick", "", "Baleine redoutée par l'équipage qui a arraché la jambe du capitaine Achab")


const character = [ HermanMelville, Achab, Ishmael, Queeqeg, MobyDick,]


let createElement = {
    createCard() {
        for (let i = 0; i < character.length; i++) {
            let card = document.createElement("div")
            card.classList.add("card")
            card.innerHTML = 
            `
             <img id="photo" src="Images/${character[i].Photo}"  alt="Logo">
             <h2>${character[i].Name}</h2>
             <ul>
             <li>${character[i].Age}<li>
             <li>${character[i].Profession}</li>
             </ul>


            `

           infos.appendChild(card)
    }
}}

infos.appendChild(createElement.createCard())