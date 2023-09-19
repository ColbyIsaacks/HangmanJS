$(document).ready(function(){
    console.log("JS received");
    function addPart(strike){
        if(strike == 0){
          $("#headLine").html("          |       O");
        }
        else if(strike == 1){
          $("#torsoLine").html("          |       ||");
        }
        else if(strike == 2){
          $("#torsoLine").html("          |      /||");
        }
        else if(strike == 3){
          $("#torsoLine").html("          |      /||\\");
        }
        if(strike == 4){
          $("#legLine").html("          |\\      /");
        }
        if(strike == 5){
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

      function game(){
        const wordBank = ["DOG", "PYTHON", "JAVASCRIPT", "ACCESSORY", "MASSIVE", "FOREST"];

        var gameOver = false;
        var count = 0;
        var strike = 0;
        var word = wordBank[Math.floor(Math.random() * wordBank.length)];
        var blanks = "";
        console.log(word);

        for(let i = 0; i < word.length; i++){
            blanks += "-";
        }

        $("#reset").on("click", function(){
            game();
        })

        $("#winner").html("Guess the letters...");
        $("#mystery").html(blanks);
        console.log("hello?");
        // GAME LOOP
        while(gameOver == false){

            $("button:not(#reset").on("click", function(){
                var letter = $(this).html();
                count = 0;
                for(let i = 0; i < word.length; i++){
                    if(word[i] == letter){
                        blanks[i] = letter;
                        count++;
                    }
                }
                if(count == 0){
                    addPart(strike);
                    strike++;
                }
                $("#mystery").html(blanks);

                if(blanks == word){
                    $("#winner").html("You win!!!");
                    gameOver = true;
                }

                if(strikes == 5){
                    $("#winner").html("Better luck next time!");
                    gameOver = true;
                }
            });
        }
      }

     game();
});