var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var header = document.querySelector("#header");
var resetButton = document.querySelector("#resetBtn");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
  //mode buttons event listeners
  setupModeButtons();
  setupSquares();
}

function setupModeButtons(){
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
      reset();
    });
  }
}

function setupSquares(){
  for( var i = 0; i < squares.length; i++){
      //add event listeners to squares
      squares[i].addEventListener("click", function(){
        //grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        //compare color to picked square
        if (clickedColor === pickedColor) {
          messageDisplay.textContent = "Correct!";
          resetButton.textContent = "Play again?"
          changeColor(clickedColor);
          header.style.backgroundColor = clickedColor;
        } else {
          this.style.backgroundColor = "#232323";
          messageDisplay.textContent = "Try Again";
        }
      });
    }
    reset();
}

function reset(){
  colors = generateRandomColor(numSquares);
  //pick a new random color from array
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "New Colors";
  messageDisplay.textContent = "";
  //change colors on the page
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  header.style.backgroundColor = "#4176AE";
}

resetButton.addEventListener("click", function() {
  reset();
});

function changeColor(color){
  //loop through all squares
  for (var i = 0; i < squares.length; i++) {
    //change each color to match given color
    squares[i].style.backgroundColor = color;
  }
}

function pickColor(){
  //pick the color by random number from 1 to colors length
  var random = Math.floor(Math.random() * colors.length);
  //return the color
  return colors[random];
}

function generateRandomColor(num){
  //craet an empty array
  var colors = [];
  //fill the array with random colors
  for (var i = 0; i < num; i++) {
    var color = creatColor();
    colors.push(color);
  }
  //return that array
  return colors;
}

//creat new color
function creatColor(){
  var colorStr = "rgb("
  for (var i = 0; i < 3; i++) {
    var num = Math.floor(Math.random() * 256);
    colorStr += num + ", "
  }
  colorStr = colorStr.substring(0,colorStr.length-2) + ")";
  return colorStr;

//instead of we could do like that

  // //pick red from 0 to 255
  // var r = Math.floor(Math.random() * 256);
  // //pick green from 0 to 255
  // var g = Math.floor(Math.random() * 256);
  // //pick blue from 0 to 255
  // var b = Math.floor(Math.random() * 256);
  // return "rgb(" + r + ", " + g + ", " + b + ")";
}
