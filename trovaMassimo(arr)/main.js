/* 
Scrivi una funzione trovaMassimo(arr) che accetti un array di numeri e restituisca il valore massimo presente. */

/*SUMMARY
- array of number
- const with array value
- function findMaxValue (for loop)+(IF)
*/
const numbersList = [1, 2, 3, 44, 5, 66, 7, 8, 9, 10]
//max value use to compare with the elements in the array
let maxNumber = numbersList[0]
//function
function findMaxValue() {
    //for loop to check each element
    for (let i = 0; i < numbersList.length; i++) {
        const thisNumber = numbersList[i]
        //IF element of the list is bigger than the value of the var, var and element will be equal
        if (thisNumber > maxNumber) {
            maxNumber = thisNumber;
        }
    }
    return maxNumber
}
findMaxValue()
const maxNumberFound = maxNumber
console.log(maxNumberFound);



