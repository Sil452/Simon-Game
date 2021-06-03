let buttonColours = ['red','blue','green','yellow'];
let gamePattern = [];
let userClickedPattern = [];

const playSound = (name) => {
  let sound = new Audio('sounds/' + name + '.mp3');
  sound.play();
}

const changeBgn = (color) => {
  let x = 500;
  $('#' + color ).css("background-color", color);
  setTimeout(function(){
    $('#' + color ).css("background-color", 'transparent');
  }, x);
}

const nextSequence = () => {
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
 
  changeBgn(randomChosenColour)
  playSound(randomChosenColour) 
}

const userclick = () => {
  $(document).click(function(event){
    let userChosenColour = event.target.id
    userClickedPattern.push(userChosenColour);
    changeBgn(userChosenColour)
    playSound(userChosenColour);
  });
}

$(document).on('keydown', function(event) {
  // 13 == enter in all browsers
  if(event.which == 13){
    $('#level-title').text('Level')
    nextSequence();
  }
})


userclick()


