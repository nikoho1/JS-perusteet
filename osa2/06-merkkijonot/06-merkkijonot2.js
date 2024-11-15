/**
Muokkaa funktio shoutMyName palauttamaan saamansa name-parametri isolla kirjaimilla.
 */


function shoutMyName (founder) {
    return founder.toUpperCase();
}

let result = shoutMyName("name-parametri");

console.log(result);

// Esimerkki - älä muokkaa
console.log(shoutMyName('Sam')); // "SAM"
console.log(shoutMyName('Charley')); // "CHARLEY"
console.log(shoutMyName('alex')); // "ALEX"



// Treenaa: Keksi itse samanlainen funktio eri nimellä




// Kutsu tekemääsi funktiota