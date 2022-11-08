// const userWord = prompt("inserisci una parola");

// isPalindrome(userWord);

// const numComputerHtml = document.getElementById("num_computer");
// numComputerHtml.addEventListener("click", createRandomNum);


const gameResult = document.getElementById("game_result");
gameResult.addEventListener("click", function(){
    const oddEvenToggle = document.querySelector("[name='even_odd']");

    const userNumHtml = document.querySelector("[name='num_user']");
    const userNum = parseInt(userNumHtml.value);
    const randomNumComputer = createRandomNum();

    if (userNum <=0 || userNum > 5 || isNaN(userNum)){
        alert("Inserisci un numero valido da 1 a 5");
    } else{
        const oddEvenResult = isOddOrEven(userNum, randomNumComputer);
        console.log("Tu avevi scelto: " + oddEvenToggle.value);
        console.log("Il tuo numero: " + userNum);
        console.log("Il numero del computer: " + randomNumComputer);
    
        if (oddEvenToggle.value === oddEvenResult){
            console.log("Hai indovinato!");
        } else{
            console.log("Hai perso");
        }
    }
})