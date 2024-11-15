/**
Muokkaa funktio getFullName function palauttamaan interpolation avulla so that it 
returns the person's full name by utilizing string interpolation.
 */

function getFullName(firstName, lastName) {
    return `${firstName} ${lastName} `;
  }
  
  // Esimerkki - älä muokkaa
  console.log(getFullName('Jude', 'Bellingham')); 
  console.log(getFullName('Jadon', 'Sancho')); 
  
  
  
  // Treenaa: Keksi itse samanlainen funktio eri nimellä 
  legalName = (firstName, middleName, lastName) => {
    return `${firstName} ${middleName} ${lastName}`;
  }
  

  // Kutsu tekemääsi funktiota

  console.log(legalName("Nike", "Adidas", "Puma"));
  console.log(legalName("Pep", "", "Guardiola"));