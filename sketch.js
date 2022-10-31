/*
This is a memory game. The aim of this game is to unmask all the cards by sequentially clicking on a pair of cards that match each other. Every sequential match will increase your streak.

Tip: Rather than trying to unmask all pairs at random times, Try to get unmask cards, remember their position in the grid and increase your streak to get the longest possible streak of 6 (since there are six pairs of cards).

*/



let longestStreak = 0;      // counting the streak to display at the end of the game
let streak = 0 ;            // counting the ongoing streak

var s;                      // Scribble to make the grid
let sect = 4;               // Number of Sections to divide the canvas
let ncol = 3;               // number of columns to display cards
let nrow = 4;               // Number of rows to display cards

let numCards = 6;           // Total number of pairs of cards to be matched
let c1, c2, c3, c4, c5, c6; // name of the images to be loaded
var cards = [];             // Array to store all images in image format
var cardName = [];          // Array to store name of each card in 'cards' array
let orderOfCards =[];       // Array to store images in random order
let nameOfCards  =[];       // Array to store name of the each image in the 'orderOfImages' array
var cardMatched = [];       // Array to mark the card as matched when the match is found
let totalMatches = 0;       // Stop the game when total matches reach the total number of pairs

let clicks = 0;             //when a card is flipped this  will increment, maximum value is 2


//Preload the mask of each image (cover) and all images
function preload(){
  cover = loadImage('./card_cover.webp')
 
  for (let i = 0; i<numCards; i++){
    cards[i] = loadImage("c"+int(i+1)+".jpg")
    cardName[i]="c"+int(i+1);
    cards[i+numCards] = loadImage("c"+int(i+1)+".jpg")
    cardName[i+numCards]="c"+int(i+1);
  }
  print(cardName);
}


function setup() {
  createCanvas(400, 500);
  s = new Scribble();
  
  // Button to reset the board
  // buttonRestart = createButton('Restart');
  // buttonRestart.position(width/2-30, height+10);
}


function draw() {
  background(255);
  
  placeCards();
  
  maskCards();
    
  //The following were to check if the calculations for displaying the images were correct or not prior to using 'i' and 'j' in the loop prior to this
   // image(cj, (2.5+0.25)*width/sect,0.25*height/sect, width/8,height/8)
   // image(cj, (0.5+0.25)*width/sect,(2+0.25)*height/sect, width/8,height/8)
   // image(cover, (1+0.5+0.25)*width/sect,(0+0.25)*height/sect, width/8,height/8);
  
  noLoop();
}








//Display the card when clicked on it
function showCard(col, row, x, y){
  image(orderOfCards[col][row], x-(0.25*width/sect), y-(0.25*height/sect), width/8,height/8);
}

//Mask the card when unmatched
function maskFlippedCard(col, row, x, y){
  image(cover, x-(0.25*width/sect), y-(0.25*height/sect), width/8,height/8);
}