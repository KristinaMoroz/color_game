var colors = [
  "rgb(255, 0, 0)",
  "rgb(255, 255, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 255, 255)",
  "rgb(0, 0, 255)",
  "rgb(255, 0, 255)"
];

var squares = document.querySelectorAll(".square");
var pickedColor = colors[3];
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");

colorDisplay.textContent = pickedColor;

for( var i = 0; i < squares.length; i++){
  // add initial colors to squares
  console.log(squares[i] + " " + colors[i])
	squares[i].style.backgroundColor = colors[i];

  //add event listeners to squares
  squares[i].addEventListener("click", function(){
    //grab color of clicked square
    var clickedColor = this.style.backgroundColor;
    console.log(clickedColor);
    //compare color to picked square
    if (clickedColor === pickedColor) {
        document.body.style.backgroundColor = pickedColor;
        messageDisplay.textContent = "Correct!";
        changeColor(clickedColor);
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
