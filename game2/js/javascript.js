//Global Variables 
        var painted;

        var content;

        var winningCombinations;

        var turn = 0;

        var theCanvas;

        var c;

        var cxt;

        var squaresFilled = 0;

        var w;

        var y;

 

//Instanciate Arrays

        window.onload=function(){

             

            painted = new Array();

            content = new Array();
            
            // winningCombinations is a multi-dimensional array
            winningCombinations = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

            for(var l = 0; l <= 8; l++){

            painted[l] = false;

            content[l]='';

            }

        }

 

//Game methods

        
        // canvasClicked gives the number that is sent from the body of the html to the variable canvasNumber
        function canvasClicked(canvasNumber){

            //This is where we can see which canvas that is being used
            theCanvas = "canvas"+canvasNumber;
            // c will now hold the canvas that is being used
            c = document.getElementById(theCanvas);
            // Here the context of the canvas is given
            cxt = c.getContext("2d");

 
            // Here it is checked if the canvas has already been drawn on
            if(painted[canvasNumber-1] ==false){
                
                // Here it is decided whos turn it is
                if(turn%2==0){
                    
                    // This makes sure that the symbol is drawn
                    cxt.beginPath();
                    
                    // This is a specific location in the canvas
                    cxt.moveTo(10,10);
                    
                    // This draws a line from 10,10 to 40,40
                    cxt.lineTo(40,40);
                    
                    // This is another specific location in the canvac
                    cxt.moveTo(40,10);
                    
                    // This draws another line
                    cxt.lineTo(10,40);

                    //  This will actually draw the line
                    cxt.stroke();
                    
                    // This makes sure that the imaginary cursoer is removed
                    cxt.closePath();
                    
                    // This makes sure an X is drawn
                    content[canvasNumber-1] = 'X';

                }

 

                else{
                    
                    // If it isn't X's turn, it is O's turn. So a circle is drawn instead.
                    cxt.beginPath();

                    cxt.arc(25,25,20,0,Math.PI*2,true);

                    cxt.stroke();

                    cxt.closePath();

                    content[canvasNumber-1] = 'O';

                }

 
                // The turn is incremented so that the next turn will be the other player
                turn++;

                painted[canvasNumber-1] = true;

                squaresFilled++;
                
                // This function gets the content of the current canvas so it knows which player who just had a turn
                checkForWinners(content[canvasNumber-1]);

 

                if(squaresFilled==9){

                    alert("THE GAME IS OVER!");

                    location.reload(true);

                }

             

            }

            else{
                
                // This check that the canvas that is chosen is not already drawn
                alert("That space is already taken!");

            }

 

        }

 
// This function checks the last dran symbol so that it knows what player who just made a move.
function checkForWinners(symbol){

             
 for(var a = 0; a < winningCombinations.length; a++){

            if(content[winningCombinations[a][0]]==symbol&&content[winningCombinations[a][1]]== symbol&&content[winningCombinations[a][2]]==symbol){

                alert(symbol+ " WON!");

                playAgain();

            }

     }


 }

 
// This enables players to play again
function playAgain(){

            y=confirm("Play Again?");

            if(y==true){

                alert("Okay!Let's go!>");

                location.reload(true);

            }

            else{

                alert("Paa gensyn!");

        }

 

 }
