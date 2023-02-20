function mainDSixFunction(){

  let images = [
    "images/d6_dice/d6_dice_1_430.png",
    "images/d6_dice/d6_dice_2_430.png",
    "images/d6_dice/d6_dice_3_430.png",
    "images/d6_dice/d6_dice_4_430.png",
    "images/d6_dice/d6_dice_5_430.png",
    "images/d6_dice/d6_dice_6_430.png"
];
let currentIndex = 0;
let diceCounter = 0;
let intervalId = setInterval(changeImage, 100);


function changeImage() {
  let image = document.getElementById("dice_d6");
  currentIndex = (currentIndex + 1) % images.length;
  image.src = images[currentIndex];
  diceCounter++;
  console.log(diceCounter);
  if (diceCounter == 16) {
    clearInterval(intervalId);
    image.src = images[Math.floor(Math.random() * 6)]
    }
  };
};

function mainDTenFunction(){

  let images = [
    "images/d10_dice/d10_dice_0.png",
    "images/d10_dice/d10_dice_1.png",
    "images/d10_dice/d10_dice_2.png",
    "images/d10_dice/d10_dice_3.png",
    "images/d10_dice/d10_dice_4.png",
    "images/d10_dice/d10_dice_5.png",
    "images/d10_dice/d10_dice_6.png",
    "images/d10_dice/d10_dice_7.png",
    "images/d10_dice/d10_dice_8.png",
    "images/d10_dice/d10_dice_9.png",

];
let currentIndex = 0;
let diceCounter = 0;
let intervalId = setInterval(changeImage, 100);


function changeImage() {
  let image = document.getElementById("dice_d10");
  currentIndex = (currentIndex + 1) % images.length;
  image.src = images[currentIndex];
  diceCounter++;
  console.log(currentIndex);
  if (diceCounter == 16) {
    clearInterval(intervalId);
    image.src = images[Math.floor(Math.random() * 9)]
    }
  };
};