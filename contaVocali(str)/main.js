/* 
Scrivi una funzione contaVocali(str) che accetti una stringa e restituisca il numero di vocali (a, e, i, o, u) presenti nella stringa. */
/* SUMMARY
- const string
-const countVowels
- function howManyVowels (for loop)+(IF condition for each vowel)
*/

//string
const string = "damn son where'd you find this?"
//vowel count variable
let countVowels = 0
//function
function howManyVowels() {
    //for loop
    for (let i = 0; i < string.length; i++) {
        const thisLetter = string[i];
        //if condition for each vowel
        if (thisLetter == "a" || thisLetter == "e" || thisLetter == "i" || thisLetter == "o" || thisLetter == "u") {
            countVowels += 1;
        }
        return countVowels
    }
}
console.log(countVowels);
//output:8