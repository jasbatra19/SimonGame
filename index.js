var buttonColor=["green","yellow","red","blue"];
var gameSeq=[];
var userSeq=[];
var randomNo;
var start=false;
var level=1;

// keypress
$(document).keypress(function() {
    console.log( "Handler for .keypress() called." );
    if(!start){
        $("h1").text("level"+ level);
        Seq();
        start=true;
        }
  });

// generating sequence
function Seq(){
    userSeq=[];
    level++;
    randomNo=Math.floor(Math.random()*4);
    console.log(randomNo);
    randomColor=buttonColor[randomNo];
    console.log("random color seq ---"+randomColor);
    gameSeq.push(buttonColor[randomNo]);
    console.log(gameSeq);
    

    $(".btn-"+randomColor).fadeOut(100).fadeIn(100);
   playSound(randomColor);
   userClicks();

    
}
//playsound
function playSound(name){
    var audio=new Audio("sounds/"+name+".mp3");
    audio.play();

}

//user clicks
$(".btn").click(function userClicks(){
   var id=$(this).attr("id");
   console.log(id);
   userSeq.push(id);
   console.log("user seq---"+userSeq);
   console.log(userSeq);

   playSound(id); 
   checkAnswer(userSeq.length-1);
});

//answer checking
function checkAnswer(currentLevel){
    if (gameSeq[currentLevel] === userSeq[1,currentLevel]) {
        if (userSeq.length === gameSeq.length){
          console.log("right");
          $("h1").text("level"+level);
          setTimeout(function () {
            Seq();
          }, 1000);
        }
      } else {
          console.log("wrong");
        playSound("wrong");
        $("body").addClass("game-over");
        $("h1").text("Game Over, Press Any Key to Restart");
  
        setTimeout(function () {
          $("body").removeClass("game-over");
        }, 200);
  
        startOver();
      }
}
//start over
function startOver() {
    level = 1;
    gameSeq = [];
    userSeq=[];
    start = false;
  }





