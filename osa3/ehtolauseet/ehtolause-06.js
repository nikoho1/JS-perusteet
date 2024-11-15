/**
Kehitä funktio nimeltä greaterNum, joka:

- Hyväksyy kaksi argumenttia, jotka molemmat ovat numeroita.
- Palauttaa näistä kahdesta suuremman numeron.
 */

function greaterNum(num1, num2) {
    if (num1 > num2) {
        return (`${num1}`)
    } else {
        return (`${num2}`)
    }
}

// Esimerkkikäyttö - älä muokkaa
console.log(greaterNum(10, 15));
console.log(greaterNum(20, 10));
console.log(greaterNum(20, 30));