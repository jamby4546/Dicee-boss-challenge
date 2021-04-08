// define variables

var randomNumber1 = (Math.floor(Math.random() * 6)) + 1;
var randomNumber2 = (Math.floor(Math.random() * 6)) + 1;

var firstImage = document.querySelector(".img1");
var secondImage = document.querySelector(".img2");
var randomDice1 = "images/dice" + randomNumber1 + ".png";
var randomDice2 = "images/dice" + randomNumber2 + ".png";
var myHeading = document.querySelector("h1");

// initial page onLoad

if (window.performance.navigation.type===1) {
  // dice rolling
  firstImage.classList.toggle("roll");
  firstImage.src = randomDice1;

  secondImage.classList.toggle("roll");
  secondImage.src = randomDice2;



  // declare winner
  if (randomNumber1 > randomNumber2) {
    myHeading.innerHTML = "<h1><span class='flag'>🚩</span>Player 1 Wins!</h1>";
  }
  else if (randomNumber1 < randomNumber2) {
    myHeading.innerHTML = "<h1>Player 2 Wins!<span class='flag'>🚩</span></h1>"
  } else {
    myHeading.innerText = "Draw!";
  }
} else {
  myHeading = "Refresh Me!";
}
