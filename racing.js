/*******************************************************************************
    Your Object Definition
*******************************************************************************/

var friendly_dog = {
  distanceFromShore: 100,
  travelDistance: 10,
  veryFurry: true,
  likesBones: true,
  isQuiet: true,
  name: "Boat",
  size: 50,
  barks: function() {
    alert("Arf arf!");
  this.isQuiet = false;
  },
  moveCloserToShore: function() {
    this.distanceFromShore = (this.distanceFromShore - this.travelDistance)
  };
};


/*******************************************************************************
    Running Race Code
*******************************************************************************/

var racer = friendly_dog;

function runRace()
{
    do{
      moveCloserToShore()
    }
    while (distanceFromShore > 0)
    (console.log "FINISHED RACE");
}

function resetRace()
{
    distanceFromShore = 100;
}

/*******************************************************************************
    jquery definitions
    these connect the javascript defined above to the html
*******************************************************************************/
$(document).ready(function(){

    // the inside function runs when the start race button is clicked
    $('#start-race').on('click', function (){
        runRace();
    });

    // the inside function runs when the reset race button is clicked
    $('#reset-race').on('click', function (){
        resetRace();
    });

});
