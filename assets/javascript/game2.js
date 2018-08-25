var $numberplaceholder = document.getElementById("numberplaceholder");
var $Score = document.getElementById("Score");
var $wins = document.getElementById("wins");
var $losses = document.getElementById("losses");
var win = 0;
var lose = 0;
var computernumber = Math.floor(Math.random() * 102) + 19;
var c1 = Math.floor(Math.random() * 11) + 1;
var c2 = Math.floor(Math.random() * 11) + 1;
var c3 = Math.floor(Math.random() * 11) + 1;
var c4 = Math.floor(Math.random() * 11) + 1;

var counter = 0;

$(document).ready(function(){

  function getcomputernumber () {
    $("#numberplaceholder").html(computernumber);
  }
  console.log(computernumber);

  getcomputernumber();

  

  $("#crystal1 img").on("click", function () {
    counter = counter + parseInt(c1);
    $("#Score").text(counter);
    checkWin(computernumber);
    checkLoss(computernumber);
  });

  $("#crystal2 img").on("click", function () {
    counter = counter + parseInt(c2);
    $("#Score").text(counter);
    checkWin(computernumber);
    checkLoss(computernumber);
  });

  $("#crystal3 img").on("click", function () {
    counter = counter + parseInt(c3);
    $("#Score").text(counter);
    checkWin(computernumber);
    checkLoss(computernumber);
  });

  $("#crystal4 img").on("click", function () {
    counter = counter + parseInt(c4);
    $("#Score").text(counter);
    checkWin(computernumber);
    checkLoss(computernumber);
  });
});


function checkWin (computernum ) {
  console.log(counter, typeof counter, computernum, typeof computernum)
  if (counter === computernum) {
    win++;
    $("#wins").text(win); 
    alert ("You Win");
    console.log(win);
    
    
    counter = 0;
    console.log(computernumber)
    $("#Score").text(counter);
    computernumber = Math.floor(Math.random() * 101) + 19;
    $("#numberplaceholder").html(computernumber);
    console.log(computernumber)

  }
}

function checkLoss (computernum) {
  if (counter >= computernum) {
    lose++;
    $("#losses").text(lose);
    alert ("You Lose");
    console.log(lose);
    console.log(counter);

    counter = 0;
    //and here
    $("#Score").text(counter);
    computernumber = Math.floor(Math.random() * 101) + 19;
    $("#numberplaceholder").html(computernumber);
    console.log(computernumber)
  }
}