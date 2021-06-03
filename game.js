let buttonColours = ['red','blue','green','yellow'];
let gamePattern = [];
let userClickedPattern = [];
let score = -1
let started = false

$(document).on('keydown', function(event) {
  // 13 == enter in all browsers
  if(event.which == 13 && !started){
    $('#level-title').text('Score: ' + score)
    nextSequence();
    userClick()
    started = true;
  }
});

const nextSequence = () => {

  userClickedPattern = [];
  
  score++;
  $('#level-title').text('Score: ' + score)

  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
 
  changeBgn(randomChosenColour)
  playSound(randomChosenColour)
}

function userClick() {
  $('.btn').click(function(event){

    let userChosenColour = event.target.id
    userClickedPattern.push(userChosenColour);

    changeBgn(userChosenColour)
    playSound(userChosenColour);

    checkAnswer(userClickedPattern.length-1);
  });
}

  function checkAnswer(currentLevel){
  if(userClickedPattern[currentLevel] == gamePattern[currentLevel]){
    
    console.log('yep')

    if (userClickedPattern.length === gamePattern.length){

      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  }
  else{
    console.log('nope')
  }
};

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