var randomNumber=[],randomDice=[];
for(var n=0;n<2;n++)
{
  randomNumber[n] = Math.floor(Math.random()*6)+1;

  randomDice[n] = "images/dice" + randomNumber[n] + ".png";
  var image = document.querySelectorAll("img")[n];
  image.setAttribute("src", randomDice[n]);
}

if(randomNumber[0]===randomNumber[1])
{
  document.querySelector("h1").textContent="Draw !!";
}
else if(randomNumber[0]>randomNumber[1])
{
  document.querySelector("h1").textContent="Player 1 Wins! 🚩";
}
else
{
    document.querySelector("h1").textContent="Player 2 Wins! 🚩";
}


// var randomNumber1 = Math.floor(Math.random()*6)+1;
// var randomDice1 = "images/dice" + randomNumber1 + ".png";
// var image = document.querySelectorAll("img")[0];
// image.setAttribute("src", randomDice1);
