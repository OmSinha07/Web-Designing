var name1=prompt("Enter 1st player name");
var name2=prompt("Enter 2nd player name");
document.querySelectorAll("p")[0].innerHTML="Player "+name1;
document.querySelectorAll("p")[1].innerHTML="Player "+name2;
function diceroll()
{
var randomnumb1=Math.random()*6;
randomnumb1=(Math.floor(randomnumb1))+1;
var Imagecreate="dice"+randomnumb1+".png";
var ImageSource="images/"+Imagecreate;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",ImageSource)
// second dice
var randomnum2=Math.random()*6;
randomnumb2=(Math.floor(randomnum2))+1
var Imagecreate2="dice"+randomnumb2+".png";
var ImageSource2="images/"+Imagecreate2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",ImageSource2);

// for heading
if(randomnumb1>randomnumb2)
{
    document.querySelector("h1").innerHTML="Player "+name1+" Wins";
}
else if(randomnumb2>randomnumb1)
{
    document.querySelector("h1").innerHTML="Player "+name2+" Wins";
}
else
{
    document.querySelector("h1").innerHTML="it's a Draw!";
}
}
