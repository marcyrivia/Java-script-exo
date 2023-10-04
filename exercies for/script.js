///FOR

/*
for ( var i=0 ; i<=13 ; i++ )
	console.log( "Vendredi" + i);
*/

/*
for ( var i=0 ; i<=99 ; i+=3 )
	console.log(i);
*/

// for ( var i=20 ; i>=0 ; i-- ){
	

//     if(i === 20){
//     console.log("Start")

//     }

//     console.log(i);

//      if (i===0){
//         console.log(" Finish ")
//     }
// }



// for( var i = 1 ; i<=100 ; i ++ ){

//     if(i%3 == 0 && i%5 == 0){
//         console.log("FIZZ BUZZ")
//     }
//     else if (i%3 == 0){
//         console.log("FIZZ")
//     }
//     else if (i%5 == 0){
//         console.log("BUZZ")
//     }

//     else{
//         console.log(i)
//     }


// }

// // Mettre les plus rares en premier



// let kebab = " " 
// for (let i = 1; i <= 10; i++) {
//     if(i==10) {
//     kebab+= i 
//   } else {
//     kebab+= i + "-"
  
//   }
// }

// console.log(kebab)


///Tableau

// let calendrier = ["Janvier", "Février", "Mars", "Avril", "Mai"];
// console.table(calendrier)

// let tableau = new Array ("Janvier", "Février", "Mars", "Avril", "Mai")
// console.table(tableau)



// let semaine = new Array  ("Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi");
// console.table(semaine [4])

// /// L'index demarre toujours à zero


// let tableau = new Array ("Janvier", "Février", "Mars", "Avril", "Mai" ,"Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre")

// for ( var i=0 ; i<=11 ; i++ ){
// 	console.log( i+1 + " - ", tableau [i]);
// }



// let megArray = [

// [["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Decembre"],
// ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"]],


// [["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],

// ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]]

// ]

//  console.log(megArray [0] [0] [10])
//  console.log(megArray [1] [0] [4])

//  let kebab = ""
//  for(let i=0; i <=11; i++){
//     if( i == 11){
//     console.log(megArray[1] [0])
//     } else {
//         kebab += megArray[1] [0] [i] 
//     }
//  }



let princesse = ["Cendrillion", "Mulan", "Peach", "Raiponce", "Belle","Vaiana", "Daisy", "Jasmine" ]; 
princesse.splice(2,1);
princesse.splice(5,1);
console.table(princesse)

princesse.sort()
console.log(princesse)

console.log(`Il y a ${princesse.length} princesses dans le tableau`)