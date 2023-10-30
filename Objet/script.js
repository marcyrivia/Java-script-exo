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



let customElement = document.querySelector('#container');
    for (i in character) 

    customElement.innerHTML += `
    <div class="card">
    <img src="Images/${character[i].photo}" alt="">
    <h2> ${character[i].Name}</h2>
    <ul> 
    <li>  </b> ${character[i].Age} </li>
    <li>    </b> ${character[i].Profession} </li>
    </ul>
    </div>
    `