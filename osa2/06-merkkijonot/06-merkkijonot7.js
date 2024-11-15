/**
Moukkaa funktio concatInitials palauttamaan merkkijono, joka yhdistää parametrit firstNameInitial ja lastNameInitial.
 */

function concatInitials(firstNameInitial, lastNameInitial) {
    return firstNameInitial + lastNameInitial;
}

// Esimerkki - älä muokkaa
console.log(concatInitials('C', 'R')); // "CR"
console.log(concatInitials('M', 'B')); // "MB"



// Treenaa: Keksi itse samanlainen funktio eri nimellä
initalAdder = (first, last) => {
    return first + last;
}

// Kutsu tekemääsi funktiota
console.log(initalAdder('A', 'I'));
console.log(initalAdder('E', 'T'));