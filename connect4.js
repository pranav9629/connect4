console.log("connect4.js is sucessfully linked");

var button = $("button");
var cells = $("span");
var header = $("th");
var clicks = [0,0,0,0,0,0,0];
var turnChecker = 0;
var restart = $(".restart");

function boardFill(n) {
  button.eq(n).click(function(){
    clicks[n] = clicks[n]+1;
    var i = (42+n)-(clicks[n]*7);
    if (turnChecker%2 === 0) {
      cells.eq(i).addClass("blueDot");
    }else {
      cells.eq(i).addClass("redDot");
    }
    turnChecker = turnChecker + 1;
    console.log(turnChecker);
    console.log(clicks);
    console.log(i);
  });
}

for (i=0;i<6;i++){
  boardFill(i);
}



restart.click(function() {
  location.reload(true);
});
