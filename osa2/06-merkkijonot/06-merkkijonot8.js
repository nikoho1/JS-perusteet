/**
Muokkaa funktio sayHello jotta se sisällyttää parametrina saamansa nimen tervehdykseen. 

 */
function sayHello(name) {
    return `Hello ${name}`;
  }
  
  // Esimerkki - älä muokkaa
  console.log(sayHello('Cristiano')); 
  console.log(sayHello('Ronaldo')); 
  
  
  
  // Treenaa: Keksi itse samanlainen funktio eri nimellä ja tervehdyksellä
greet = (name) => {
    return `Neymar ${name}`;
}
  
  // Kutsu tekemääsi funktiota
  console.log(greet('JR'));