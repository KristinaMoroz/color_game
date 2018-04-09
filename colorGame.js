var numSquares = 6;
var colors = generateRandomColor(numSquares);

var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var header = document.querySelector("#header");
var resetButton = document.querySelector("#resetBtn");
var easyButton = document.querySelector("#easyBtn");
var hardButton = document.querySelector("#hardBtn");
var pickedColor = pickColor();

resetButton.addEventListener("click", function() {
  //generate all new colors
  colors = generateRandomColor(numSquares);
  //pick a new random color from array
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  //change colors on the page
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
  header.style.backgroundColor = "#4176AE";
});

easyButton.addEventListener("click", function(){
  easyButton.classList.add("selected");
  hardButton.classList.remove("selected");
  //generate all new colors
  numSquares = 3;
  colors = generateRandomColor(numSquares);
  console.log(colors);
  //pick a new random color from array
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  //change colors on the page
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].classList.add("hide");
    }
  }
});

hardButton.addEventListener("click", function(){
  hardButton.classList.add("selected");
  easyButton.classList.remove("selected");
  //generate all new colors
  numSquares = 6;
  colors = generateRandomColor(numSquares);
  //pick a new random color from array
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  //change colors on the page
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].classList.remove("hide");
  }
});

colorDisplay.textContent = pickedColor;

for( var i = 0; i < squares.length; i++){
    // add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    //add event listeners to squares
    squares[i].addEventListener("click", function(){
      //grab color of clicked square
      var clickedColor = this.style.backgroundColor;
      //compare color to picked square
      if (clickedColor === pickedColor) {
          messageDisplay.textContent = "Correct!";
          header.style.backgroundColor = pickedColor;
          changeColor(clickedColor);
          //change content of the text in reset button to Play again?
          resetButton.textContent = "Play again?"
      } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again";
      }
    });
  };




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

//instead of we could like that

  // //pick red from 0 to 255
  // var r = Math.floor(Math.random() * 256);
  // //pick green from 0 to 255
  // var g = Math.floor(Math.random() * 256);
  // //pick blue from 0 to 255
  // var b = Math.floor(Math.random() * 256);
  // return "rgb(" + r + ", " + g + ", " + b + ")";
}
