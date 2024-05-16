var numSquares = 6;
var colors = [];//generateRandomColor(numSquares);
var pickedColor ; //=pickColor();
var squares = document.querySelectorAll(".square")
var colordisplay = document.getElementById("colordisplay")
var messageDisplay =document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
/*var easy = document.querySelector("#easy");           
var hard = document.querySelector("#hard");*/
var modeButton = document.querySelectorAll(".mode");

init();

function init(){
    setupModeButtons();
    setupSquare();
    reset();
      } 
function setupModeButtons(){
      //stup mode button eventListeners
    for(var i = 0; i < modeButton.length; i++){
        modeButton[i].addEventListener("click", function(){
        modeButton[0].classList.remove("selected");
        modeButton[1].classList.remove("selected");
          this.classList.add("selected");
           this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
         /* if(this.textContent === "easy"){
              numSquares = 3;
          }else{
              numSquares = 6;
          } */
          reset();
          });
        
   
}
}

function setupSquare(){
      //clickListeners to each squares
    for(var i = 0; i < squares.length; i++){
        // squares[i].style.background = colors[i];
         
         squares[i].addEventListener("click", function(){
         var clickedColor = this.style.background;
         if( clickedColor === pickedColor){
           messageDisplay.textContent ="Correct!";
           resetButton.textContent = "Play Again?";
           changeColors(clickedColor);
           h1.style.background = clickedColor; 
         }
         else{
             this.style.background = "#232323";
             messageDisplay.textContent ='Try Again';
         }
         });
     }      
}

function reset(){
     colors = generateRandomColor(numSquares);
     
    pickedColor = pickColor(); 
    colordisplay.textContent = pickedColor;
    resetButton.textContent = "New color"
    messageDisplay.textContent = "";
    for(var i = 0; i < squares.length; i++)
    {if (colors[i]){
        squares[i].style.display = "block"; 
        squares[i].style.background = colors[i];}
     else{
        squares[i].style.display = "none";
     }
    }   
    h1.style.background = "steelblue";
 }


/*easy.addEventListener("click", function(){
 easy.classList.add("selected");
 hard.classList.remove("selected");
 numSquares = 3;
 colors =generateRandomColor(numSquares);
 pickedColor = pickColor();
 colordisplay.textContent = pickedColor;
 for( var i = 0; i < squares.length; i++){
     if (colors[i]){
        squares[i].style.background = colors[i];
     }else{
        squares[i].style.display = "none";
     }
 }
} )

hard.addEventListener("click", function(){
    hard.classList.add("selected");
    easy.classList.remove("selected");
    numSquares = 6;
    colors =generateRandomColor(numSquares);
    pickedColor = pickColor();
    colordisplay.textContent = pickedColor;
    for( var i = 0; i < squares.length; i++){
        {
           squares[i].style.background = colors[i];
           squares[i].style.display = "block";
        }
 }
} )*/


 resetButton.addEventListener("click",  function(){
   reset();
   /* colors = generateRandomColor(numSquares);
     
    pickedColor = pickColor(); 
    colordisplay.textContent = pickedColor;
    this.textContent = "New color"
    messageDisplay.textContent = "";
    for(var i = 0; i < squares.length; i++){
        squares[i].style.background = colors[i];}
    h1.style.background = "steelblue";*/
 })

//colordisplay.textContent = pickedColor;



function changeColors( color){
for (var i =0; i < squares.length; i++){
    squares[i].style.background = color;
}
}

function pickColor(){
 var random = Math.floor (Math.random()*colors.length)
  return colors[random];
}

function generateRandomColor(num){
    var arr = []
    for ( var i = 0; i < num; i++)
    arr.push(randomColor())
    return arr;
} 

function randomColor(){
    //pick "red" randomly from 0-255
 var r = Math.floor( Math.random() * 256); 
  //pick "green" randomly from 0-255
  var g = Math.floor( Math.random() * 256); 
   //pick "blue" randomly from 0-255
 var b = Math.floor( Math.random() * 256); 
  return "rgb(" + r + ", " + g + ", " + b + ")";
}