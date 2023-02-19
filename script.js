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



function startChange() {
  if (diceCounter = 5) {
    setInterval(changeImage, 300);
    setInterval(countTime, 1000);
  }
  else {
    currentIndex = 6;
  }

};

function changeImage() {
  let image = document.getElementById("dice_d6");
  currentIndex = (currentIndex + 1) % images.length;
  image.src = images[currentIndex];

};

function countTime() {
  diceCounter++;
  console.log(diceCounter)
};

// console.log(Math.floor(Math.random() * 7));