/**
Muokkaa funktio capitalize palauttamaan saamansa sana kirjoitettuna vain isolla alkukirjaimella
 */

function capitalize(word) {
    let lower = word.toLowerCase()
    return word.charAt(0).toUpperCase() + lower.slice(1);
  }
  
  // Esimerkki - älä muokkaa
  console.log(capitalize('Pique')); 
  console.log(capitalize('RAMOS')); 
  console.log(capitalize('VIdic')); 
  
  
  
  // Treenaa: Keksi itse samanlainen funktio eri nimellä
  
  capitalCorrect = (word) => {
      const lower = word.toLowerCase()
      return word.charAt(0).toUpperCase() + lower.slice(1);
  }
  
  // Kutsu tekemääsi funktiota
  console.log(capitalCorrect("ARseNAl"));