//Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero//

const avengers = [
  "Hulk",
  "Thor",
  "IronMan",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];

let findLongestWord = ("");

function findLongestWord (avemgers) {
 for (let i = 0; i < avengers.length; i++) {
     if (avengers [i].lenght > findLongestWord.lenght){
         longestWord = avengers [i];
     }

}
}
findLongestWord (avengers);
console.log(longestWord);