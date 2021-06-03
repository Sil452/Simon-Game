let buttonColours = ['red','blue','green','yellow'];
let gamePattern = [];
let userClickedPattern = [];
let score = -1;
let highscore = 0;
let started = false;

$(document).on('keydown', function(event) {
  // 13 == enter in all browsers
  if(event.which == 13 && !started){
    nextSequence();
    userClick();
    started = true;
  }
});

const nextSequence = () => {

  userClickedPattern = [];

  score++;

  if(score >= highscore){
    highscore = score;
  }

  $('#level-title').text('Score:' + score + ' -- Highscore:' + highscore);

  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
 
  changeBgn(randomChosenColour);
  playSound(randomChosenColour);

}

const userClick = () => {
  $('.btn').click(function(event){

    let userChosenColour = event.target.id
    userClickedPattern.push(userChosenColour);

    changeBgn(userChosenColour);
    playSound(userChosenColour);

    checkAnswer(userClickedPattern.length-1);
  });
}

const startOver = () =>{
  score = -1;
  gamePattern = [];
  $(document).one("keydown", function(event) {
    if(event.which == 13){
      nextSequence();
    }
  });
}


  const checkAnswer = (currentLevel) => {

  if(userClickedPattern[currentLevel] == gamePattern[currentLevel]){

    if (userClickedPattern.length === gamePattern.length){

      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  }
  else{
    $('#level-title').text('Game Over! Press enter to restart');
    $('body').addClass('game-over')
    setTimeout(function (){
      $('body').removeClass('game-over')
    }, 500);
    let wrong = new Audio('sounds/wrong.mp3');
    wrong.play();
    startOver();
  }
};

const playSound = (name) => {
  let sound = new Audio('sounds/' + name + '.mp3');
  sound.play();
}

const changeBgn = (color) => {
  $('#' + color ).css("background-color", color);
  setTimeout(function(){
    $('#' + color ).css("background-color", 'transparent');
  }, 500);
}