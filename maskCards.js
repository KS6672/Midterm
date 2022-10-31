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
