/**
 * @param {string} parola inserita dall'utente
 * @return {boolean} il confronto tra parola utente e il nuovo sort è lo stesso?
 */
function isPalindrome(word){
    wordLowercase = word.toLowerCase();
    const charArray = wordLowercase.split("");
    const charReverse = charArray.reverse();
    const palindrome = charReverse.join("");

    if (wordLowercase === palindrome){
        console.log("Sì, è palindromo");
        return true;
    } else{
        console.log("No, non è palindromo");
        return false;
    }
}

/**
 * Genera un numero random
 */
function createRandomNum(){
    randomNum = (Math.ceil(Math.random() * 5));
    // console.log(randomNum);
    return randomNum;
}

/**
 * @param {number} numero scelto dall'utente
 * @param {number} numero generato con la funzione createRandomNum
 * @return {string} la somma dei due argomenti dà un numero pari o dispari?
 */
function isOddOrEven(num1, num2){
    sum = num1 + num2;

    if (sum % 2 === 0){
        console.log("La somma dei due numeri è pari")
        return "is even"
    } else{
        console.log("La somma dei due numeri è dispari")
        return "is odd"
    }
}