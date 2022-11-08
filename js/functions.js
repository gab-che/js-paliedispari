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
    console.log(randomNum);
    return randomNum;
}