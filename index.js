var randomNumber1=Math.floor(Math.random()*6)+1;
var randomizeImage="dice"+randomNumber1+".png";
var randomimgSrc="images/"+randomizeImage;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomimgSrc );


var randomNumber2=Math.floor(Math.random()*6)+1;
var randomizeImage2="dice"+randomNumber2+".png";
var randomimgSrc2="images/"+randomizeImage2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomimgSrc2);

if(randomNumber1>randomNumber2){
  document.querySelector
}
if(randomNumber1>randomNumber2){
document.querySelector("h1").innerHTML="❤Player1 win";}
else if(randomNumber1<randomNumber2){
document.querySelector("h1").innerHTML="❤Player2 win";
} else{
  document.querySelector("h1").innerHTML="🤝Draw";
}
