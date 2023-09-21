$(document).ready(function(){

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

      function game(){
        const wordBank = ["DOG", "PYTHON", "JAVASCRIPT", "ACCESSORY", "MASSIVE", "FOREST"];

        var gameOver = false;
        var count = 0;
        var strike = 0;
        var word = wordBank[Math.floor(Math.random() * wordBank.length)];
        var blanks = "";
        //console.log(word);

        for(let i = 0; i < word.length; i++){
            blanks += "-";
        }

        $("#reset").click(function(){
            game();
        })

        $("#winner").html("Guess the letters...");
        $("#mystery").html(blanks);
        console.log("hello?");
        // GAME LOOP
        while(gameOver == false){

            $("button:not(#reset)").click(function(){
                var letter = $(this).html();
                count = 0;
                $(this).css("background-color", "rgb(105,105,105)")
                for(let i = 0; i < word.length; i++){
                    if(word[i] == letter){
                        var temp = blanks.split("");
                        temp[i] = letter;
                        blanks = temp.join("");
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

                if(strike == 6){
                    $("#winner").html("Better luck next time!");
                    gameOver = true;
                }
            });
            break;
        }
      }
     game();
});