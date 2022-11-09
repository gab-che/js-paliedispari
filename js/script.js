//*********************
//#palindromo
const nameValidator = document.getElementById("name_validator");
nameValidator.addEventListener("click", function(){
    const userWorHtml = document.querySelector("[name=insert_name]");
    userWord = userWorHtml.value;
    const palindromeAnswerEl = document.querySelector("#palindrome span");
    palindromeAnswerEl.innerHTML = isPalindrome(userWord);
})

//************************
//#morra
const gameResult = document.getElementById("game_result");
gameResult.addEventListener("click", function(){
    const oddEvenToggle = document.querySelector("[name='even_odd']");

    const userNumHtml = document.querySelector("[name='num_user']");
    const userNum = parseInt(userNumHtml.value);
    const randomNumComputer = createRandomNum();
    const winLose = document.getElementById("win_lose");
    const numComputerEl = document.getElementById("num_comp");
    const numSumEl = document.getElementById("num_sum");

    if (userNum <=0 || userNum > 5 || isNaN(userNum)){
        alert("Inserisci un numero valido da 1 a 5");
    } else{
        const oddEvenResult = isOddOrEven(userNum, randomNumComputer);
        numComputerEl.innerHTML = randomNumComputer;
        numSumEl.innerHTML = oddEvenResult;
    
        if (oddEvenToggle.value === oddEvenResult){
            winLose.innerHTML = "Hai indovinato! :)"
        } else{
            winLose.innerHTML = "Hai perso :("
        }
    }
})

const resetString = document.getElementById("reset_string");
resetString.addEventListener("click", function(){
    const winLose = document.getElementById("win_lose");
    const numComputerEl = document.getElementById("num_comp");
    const numSumEl = document.getElementById("num_sum");

    winLose.innerHTML = ""
    numComputerEl.innerHTML = "";
    numSumEl.innerHTML = "";
})