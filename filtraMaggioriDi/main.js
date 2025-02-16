/* 
Scrivi una funzione filtraMaggioriDi che prende un array di numeri e un valore, e restituisce un nuovo array contenente solo i numeri maggiori del valore specificato.
 */
/*SUMMARY
- array of numbers
- empty array
- function filterBiggerOnes (for loop)+(IF condition > than x element in the array)+(push)
*/
//array of numbers
const numbersArray = [11, 2, 3, 12, 16, 77, 9, 4, 22, 0]
//empty array
const biggerNumbers = []
//function
filterBiggerOnes(15)
function filterBiggerOnes(value) {
    //for loop
    for (let i = 0; i < numbersArray.length; i++) {
        const thisNumber = numbersArray[i];
        //if condition
        if (thisNumber > value) {
            biggerNumbers.push(thisNumber)
        }
    }
}
console.log(biggerNumbers);
