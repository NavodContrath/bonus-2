/* 
Scrivi una funzione invertiArray(arr) che accetti un array e restituisca un nuovo array con gli elementi in ordine inverso.
 */
/*SUMMARY
- array 
- empty array
- function reverseArray (for loop in negative position)+(push in the empty array)
*/
//array
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
//empty array
const reversedArray = []
//function
reverseArray()
function reverseArray() {
    //for loop
    for (let i = array.length - 1; i >= 0; i--) {
        const thisElement = array[i];
        //push
        reversedArray.push(thisElement)
    }
}
console.log(reversedArray);
