/**
 * @param {string} parola inserita dall'utente
 * @return {string} il confronto tra parola utente e il nuovo sort è lo stesso?
 */
function isPalindrome(word){
    wordLowercase = word.toLowerCase();
    const charArray = wordLowercase.split("");
    const charReverse = charArray.reverse();
    const palindrome = charReverse.join("");

    if (wordLowercase === palindrome){
        return "Sì, è palindromo";
    } else{
        return "No, non è palindromo";
    }
}

/**
 * Genera un numero random
 */
function createRandomNum(){
    randomNum = (Math.ceil(Math.random() * 5));
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
        return "pari"
    } else{
        return "dispari"
    }
}