var randomNumber1=Math.floor(Math.random()*6)+1;
var imgName1="./images/dice"+randomNumber1+".png";
document.querySelector("div .img1").setAttribute("src",imgName1);
console.log(randomNumber1);
var randomNumber2=Math.floor(Math.random()*6)+1;
var imgName2="./images/dice"+randomNumber2+".png";
document.querySelector("div .img2").setAttribute("src",imgName2);
console.log(randomNumber2);

if(randomNumber1==randomNumber2)
document.querySelector("h1").innerHTML="Draw!";
else if(randomNumber1>randomNumber2)
document.querySelector("h1").innerHTML="Player 1 wins";
else
document.querySelector("h1").innerHTML="Player 2 wins";