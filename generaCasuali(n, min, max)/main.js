/* 
Scrivi una funzione generaCasuali(n, min, max) che restituisca un array di n numeri casuali compresi tra min e max */

/*SUMMARY
- empty array
- function randomGenerator(for loop x times)+(element push)
*/
//array
const numbersArray = []
//function
randomGenerator(1, 10)
function randomGenerator(min, max) {
    //for loop
    for (let i = 0; i < 10; i++) {
        //const that generate a random number between a min and max number
        const thisNumber = Math.ceil(Math.random() * (min, max))
        numbersArray.push(thisNumber)
    }
}
console.log(numbersArray);

