var colors = [
  "rgb(255, 0, 0)",
  "rgb(255, 255, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 255, 255)",
  "rgb(0, 0, 255)",
  "rgb(255, 0, 255)"
];

var squares = document.querySelectorAll(".square");
// var pickedColor = colors[3].substring(3,colors[3].length+1);
var pickedColor = colors[3];


var colorDisplay = document.querySelector("#colorDisplay");
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
        console.log("You're right!");
    } else {
      console.log("Wrong color!");
    }
  });
};
