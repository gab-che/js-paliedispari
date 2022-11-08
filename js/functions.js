/**
 * @param {string} parola inserita dall'utente
 * @return {boolean} il confronto tra parola utente e il nuovo sort è lo stesso?
 */
function isPalindrome(word){
    const charArray = word.split("");
    const charReverse = charArray.reverse();
    const palindrome = charReverse.join("");

    if (word === palindrome){
        console.log("Sì, è palindromo");
        return true;
    } else{
        console.log("No, non è palindromo");
        return false;
    }
}