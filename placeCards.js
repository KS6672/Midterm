//Place the cards at random position
function placeCards(){
  
  for(i=0; i<ncol; i++){
    orderOfCards[i] = [] ;
    nameOfCards[i]  = [] ;
    cardMatched[i]  = [] ;
    for (j=0; j<nrow; j++){
      //Get the x and y coordinates to place the cards
      var xcoord = (i+1)*(width/sect) ;
      var ycoord = (j+0.5)*(height/sect) ;
      // console.log(xcoord, ycoord);
      //Create gridlines on the canvas
      s.scribbleRect(xcoord,ycoord,width/sect,height/sect); 
      //Select a random card from the cards array
      let pos = int(random(cards.length))
      // console.log(pos)
      //Display the above chosen random card
      image(cards[pos], xcoord-(0.25*width/sect), ycoord-(0.25*height/sect), width/8,height/8)
      //Place the cards in an array in the order they were placed. This will be used during unmasking the card
      orderOfCards[i][j] = cards[pos];
      //Store the names of the cards in the orderOfImages array
      nameOfCards[i][j]  = cardName[pos];
      //Mark each card as unmatched, mark them as 1 when matched
      cardMatched[i][j]  = 0;
      
      //Drop the randomly chosen card from the cards array and cardNames array to ensure it does not get picked up again
      cards.splice(pos,1)
      cardName.splice(pos,1)
      // console.log("OrderOfCards:",orderOfCards)
      
      // console.log("The length later is ", orderOfCards.length)
      // image(orderOfCards[0], xcoord-(0.25*width/sect), ycoord-(0.25*height/sect), width/8,height/8)
    }
  }
  console.log("OrderOfCards:",orderOfCards)
  console.log("NameOfCards:",nameOfCards)
}

//Mask the cards for the game
function maskCards(){
  for(i=0; i<ncol; i++){
    for (j=0; j<nrow; j++){
      var xcoord = (i+1)*(width/sect) ;
      var ycoord = (j+0.5)*(height/sect) ;
      image(cover, xcoord-(0.25*width/sect), ycoord-(0.25*height/sect), width/8,height/8);
    }
  }
}