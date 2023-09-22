$(document).ready(function(){

    function addPart(strike){
        console.log("Strike!");
        const imgSrcArray = ["rope.png", "head.png", "body.png", "arm1.png",
                           "arm2.png", "leg1.png", "leg2.png"];
        $("#frameImg").attr("src", "/public/images/" + imgSrcArray[strike]);
    }

    function game(){
        const placeBank = ["LONDON", "PARIS", "ROME", "CHICAGO", "NEW YORK", "LOS ANGELES", "AUSTIN",
                          "DALLAS", "ROME", "BERLIN", "MOSCOW", "TOKYO", "BEIJING", "PYONGYONG",
                          "GERMANY", "UNITED STATES", "FRANCE", "RUSSIAN", "JAPAN", "CHINA", "MEXICO",
                          "PERU", "TEXAS"];
        const animalBank = ["DOG", "KANGAROO", "CAT", "ELEPHANT", "FOX", "HORSE", "GIRAFFE", "RABBIT",
                            "PENGUIN", "SKUNK", "ANTEATER"];
        const spaceBank = ["PLUTO", "MILKY WAY", "SOLAR SYSTEM", "ANDROMEDA", "NEBULA", "JUPITER", "EARTH",
                           "SATURN", "PULSAR", "COMET", "GAS GIANT", ];
        const foodBank = ["PIZZA", "BREAD", "HAM", "MILKSHAKE", "BURGER", "CRACKER", "FORTUNE COOKIE", "CHEESE",
                          "SPAGHETTI", "HOTDOG", "ICE CREAM", "SANDWICH"];
        const transportBank = ["TRAIN", "BUS", "TOYOTA TOCOMA", "AIRPLANE", "CAR", "SUBWAY", "BOAT", "SHIP", "HELICOPTER",
                               "TRUCK", "BICYCLE", "MOTORCYCLE"];
        const jobBank = ["DOCTOR", "SALESMAN", "CHEF", "TEACHER", "NURSE", "ENGINEER", "PROFESSOR", "THERAPIST"];
        const sportsBank = ["FOOTBALL", "SOCCER", "HOCKEY", "BASKETBALL", "FENCING", "TENNIS", "RUGBY", "SKATING",
                            "LACROSSE", "MARTIAL ARTS", "BOWLING", "SWIMMING"];


        const superBank = [placeBank, animalBank, spaceBank, foodBank, transportBank, jobBank, sportsBank];    
        const hintBank = ["Geograpy", "Animal", "Space", "Food", "Transportation", "Occupation", "Sports"]                      
        var gameOver = false;
        var count = 0;
        var strike = 0;
        var randomBank = Math.floor(Math.random() * superBank.length);
        var wordBank = superBank[randomBank];

        $("#hint").html("hint : " + hintBank[randomBank]);

        var word = wordBank[Math.floor(Math.random() * wordBank.length)];

        var blanks = "";
        console.log(word);

        for(let i = 0; i < word.length; i++){
            if(word[i] != " "){
              blanks += "-";
            }
            else{
              blanks += " ";
            }
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
                    $("#mystery").css("color", "rgb(0,255,0)");
                    gameOver = true;
                }

                if(strike == 7){
                    $("#winner").html("Better luck next time!");
                    $("#mystery").html(word);
                    $("#mystery").css("color", "rgb(220,0,0)");
                    gameOver = true;
                }
            });
            break;
        }
      }
     game();
});