let buttonColours = ['red','blue','green','yellow'];
let gamePattern = [];
let userClickedPattern = [];

const nextSequence = () => {
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $('#' + randomChosenColour ).fadeIn(100).fadeOut(100).fadeIn(100);
  $(document).click(function(event){
    let userChosenColour = event.target.id
    userClickedPattern.push(userChosenColour);
  });
  
  let audio = new Audio('sounds/' + randomChosenColour + '.mp3');
  audio.play();

}

nextSequence()


