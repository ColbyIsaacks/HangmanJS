$(document).ready(function(){

  function addPart(count){
    if(count == 0){
      $("#headLine").html("          |       O");
    }
    else if(count == 1){
      $("#torsoLine").html("          |       ||");
    }
    else if(count == 2){
      $("#torsoLine").html("          |      /||");
    }
    else if(count == 3){
      $("#torsoLine").html("          |      /||\\");
    }
    if(count == 4){
      $("#legLine").html("          |\\      /");
    }
    if(count == 5){
      $("#legLine").html("          |\\      /\\");
    }
  }

  function resetParts(){
      $("#headLine").html("          |        ");

      $("#torsoLine").html("          |       ");

      $("#torsoLine").html("          |      ");

      $("#torsoLine").html("          |      ");

      $("#legLine").html("          |       ");

      $("#legLine").html("          |\\      ");
  }

  function getIndex(letter, word, length){
    var tempArray = new Array();
    for(let i = 0; i < length; i++){
      if(word[i] == letter){
        tempArray.push(i);
        //testing
        // console.log(tempArray);
      }
    }
    return tempArray;
  }

  function checkLetter(letter, word, length){
    for(let i = 0; i < length; i++){
      if(word[i] == letter){
        return true;
      }
    }
    return false;
  }

  function game(){
    // resetParts();
  //  window.location.reload();
    const buttonArray = $("button");

    const wordBank = ["DOG", "PYTHON", "JAVASCRIPT", "ACCESSORY", "MASSIVE", "FOREST"]

    var guessed = false;
    var gameOver = false;
    var count = 0;

    $("#winner").html("Guess the word's letters...");


    // INITIALIZE GAME COOMPONENTS
    var word = wordBank[Math.floor(Math.random() * wordBank.length)] //generates word from word bank
    console.log(word);

    blanks = "-";
    $("#mystery").html(blanks.repeat(word.length));

    $("#reset").click(function(){
      game();
    })

    $("#submit").click(function(){

    })


    // GAME LOOP
    while(gameOver == false){


      // PROGRAMMING BUTTONS
      $("button:not(#reset)").click(function(){
        var letter = $(this).html();
        var blank = $("#mystery").html();
        var newString = "";

        $(this).css("background-color", "rgb(105,105,105)")
        //if the player guesses a correct letter
        if(checkLetter(letter, word, word.length)){

          

          var tempArray = getIndex(letter, word, word.length);

          for(let i = 0; i < blank.length; i++){
            if(tempArray.includes(i)){
              newString += letter;
              console.log(newString);
              console.log(word);
              console.log(newString == word);
              if($("#mystery").html() == word){
                $("#winner").html("You win!");
                gameOver = true;
              }
            }
            else{
              newString += blank[i];
            }
          }
          $("#mystery").html(newString);
          //console.log(newString);
        }
          //if the player guesses a wrong letter
        else{
          addPart(count);
          count++;
          if(count >= 6){
            $("#winner").html("Better luck next time!");
            gameOver = true;
          }
          console.log(count);
        }
      });
      break;
    }
  }

  // GAME CALL
  game();
});