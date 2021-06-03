let buttonColours = ['red','blue','green','yellow'];
const gamePattern = [];

const nextSequence = () => {
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $('#' + randomChosenColour ).fadeIn(100).fadeOut(100).fadeIn(100);
  
  let audio = new Audio('sounds/' + randomChosenColour + '.mp3');
  audio.play();

}

$(document).on("keydown", function(event){

  if (event.key)

  {

    nextSequence();

  }

});


