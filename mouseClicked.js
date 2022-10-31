// The following will hold the position of the two last flipped cards
let prevFLipCol1 ;
let prevFLipRow1 ;
let prevPosX1;
let prevPosY1;
let cardFlipped1;

let prevFLipCol2 ;
let prevFLipRow2 ;
let prevPosX2;
let prevPosY2;
let cardFlipped2;


// end of holding previous positions;//Do the following on every Mouse Click
function mouseClicked(){
  // console.log("Clicks before loop",clicks);
  //Increment number of clicks by 1
  clicks = clicks + 1;
  
  //Fetching the x and y coordinate of the mouse click
  let mouseClickPosX = mouseX;
  let mouseClickPosY = mouseY;
  // console.log(mouseClickPosX,mouseClickPosY)
  
  //Declaring the col and the row where the mouse has been clicked
  let col;
  let row;
   
  //Fetchng the grid of the mouse click
  //Column 1
  if(mouseClickPosX >= ((1-0.5)*(width/sect)) && (mouseClickPosX < (1+0.5)*(width/sect))){
    col = 0;
    if(mouseClickPosY < (1)*(height/sect)){
      row = 0;
    }
    else if(mouseClickPosY < (2)*(height/sect)){
      row = 1;
    }
    else if(mouseClickPosY < (3)*(height/sect)){
      row = 2;
    }
    else if(mouseClickPosY < (4)*(height/sect)){
      row = 3;
    }
  }
  //Column 2
  else if(mouseClickPosX >= ((2-0.5)*(width/sect)) && (mouseClickPosX < (2+0.5)*(width/sect))){
    col = 1;
    if(mouseClickPosY < (1)*(height/sect)){
      row = 0;
    }
    else if(mouseClickPosY < (2)*(height/sect)){
      row = 1;
    }
    else if(mouseClickPosY < (3)*(height/sect)){
      row = 2;
    }
    else if(mouseClickPosY < (4)*(height/sect)){
      row = 3;
    }
  }  
  //Column 3
  else if(mouseClickPosX >= ((3-0.5)*(width/sect)) && (mouseClickPosX < (3+0.5)*(width/sect))){
    col = 2;
    if(mouseClickPosY < (1)*(height/sect)){
      row = 0;
    }
    else if(mouseClickPosY < (2)*(height/sect)){
      row = 1;
    }
    else if(mouseClickPosY < (3)*(height/sect)){
      row = 2;
    }
    else if(mouseClickPosY < (4)*(height/sect)){
      row = 3;
    }
  }
  
  //If the mouse was clicked beyond the grids, print the following to the console
  else{
    console.log('Not here')
  }
  
  //Variables to store the current card flipped position 
  let flipPosX ;
  let flipPosY ;
  
  //Do the following for the first click of the mouse
  if(clicks === 1){
    flipPosX = (col+1)*(width/sect);        // Get the x position of the mouse click
    flipPosY = (row+0.5)*(height/sect) ;    // Get the y position of the mouse click
    showCard(col, row,flipPosX, flipPosY);  // Display the card in the above position on clicking the grid
    prevFlipCol1 = col;                     // Store the current grid index in column
    prevFlipRow1 = row;                     // Store the current grid index in row
    prevPosX1 = flipPosX;                   // Store the current x coordinate in col
    prevPosY1 = flipPosY;                   // Store the current y coordinate in row
    print("Position1:")                     // Print the first clicked position
    print(prevFlipCol1, prevFlipRow1)       // Print the first clicked column and row
    cardFlipped1 = nameOfCards[prevFlipCol1][prevFlipRow1]; // Store the name of the card that has just been flipped
    print(cardFlipped1);                    // Print the name of the card that has just been flipped
  }
  //Do the following for the second click of the mouse
  else if(clicks === 2){
    flipPosX = (col+1)*(width/sect);
    flipPosY = (row+0.5)*(height/sect) ;
    showCard(col, row,flipPosX, flipPosY);
    prevFlipCol2 = col;
    prevFlipRow2 = row;
    prevPosX2 = flipPosX;
    prevPosY2 = flipPosY;
    print("Position2:")
    print(prevFlipCol2, prevFlipRow2)
    cardFlipped2 = nameOfCards[prevFlipCol2][prevFlipRow2];
    print(cardFlipped2);
    if(cardMatched[col][row] === 0){
      if(cardFlipped1 === cardFlipped2) {
         if(((prevFlipCol1 === prevFlipCol2) && (prevFlipRow1 === prevFlipRow2))){
          // text("Can't match a card with itself! Try Again!!", width/2-30, height/2-30, 50);
          print("Can't match a card with itself! Try Again!!");
          streak = 0;    //Resetting the streak parameter to 0
         }
        else if((prevFlipCol1 !== prevFlipCol2) || (prevFlipRow1 !== prevFlipRow2)){
          cardMatched[prevFlipCol1][prevFlipRow1] = 1;
          cardMatched[prevFlipCol2][prevFlipRow2] = 1;
          // text("There's a card match! Awesome!", width/2-30, height/2-30, 50);
          print("There's a card match! Awesome!");
          totalMatches = totalMatches + 1;  // this is to ensure that all matches are completed
          streak = streak + 1;              // increment the streak by 1
          //check if there is a longer streak than the previous streak
          if(streak >= longestStreak){
            longestStreak = streak;         // set longestStreak to the higher value of streak and longestStreak
          }
          //The following runs after all the cards are matched
          if(totalMatches === numCards){
            noStroke();
            fill(0,0,0, 220);
            rect(width/2-50, height/2-50, width/4, height/4-15);
            fill('white');
            textSize(16);
            textAlign(CENTER);
            text("That's a streak of "+ longestStreak + "! Awesome!", width/2-30, height/2-40, 70);
            //This is the end of the game
          }//end of totalMatches === numCards
        }//end of actual card matched scenario
      }//end of card matched scenario
      else {
        // text("Try Again!", width/2-30, height/2-30, 50);
        //Reset streak to 0, since there's is a mismatch
        streak = 0;
        print("Try Again!")
        // text(`${round(millis()/1000)} seconds have gone by!`, 20, height/2);
      }// end of card no match scenario
    }// end of card flipped and checked scenario
  }//end of actions after second click
  //For every third click, mask the unmatched cards and reset clicks to zero
  
  
  else if(clicks>2) {
    //mask the card only if there have not matched i.e. their cardMatched marker is 0
    if(cardMatched[prevFlipCol1][prevFlipRow1] !== 1 ){
      maskFlippedCard(prevFlipCol1, prevFlipRow1, prevPosX1, prevPosY1);
    }//end of mask card1
    //mask the card only if there have not matched i.e. their cardMatched marker is 0
    if(cardMatched[prevFlipCol2][prevFlipRow2] !== 1){
      maskFlippedCard(prevFlipCol2, prevFlipRow2, prevPosX2, prevPosY2);
    }//end of mask card2
    //reset clicks to 0, since more than two unmatched cards cannot be faced up at one point
    clicks = 0;
  }//end of clicks =3
}//end of function mouseClicked()