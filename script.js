var mytext = document.getElementById("mytext");
var btnMod = document.getElementById("moderation");
var result = document.getElementById("result");

btnMod.addEventListener("click",function(){
  if (mytext.indexOf(":)") !=-1 {
      result = mytext.replace(":)","--");
      result.innerText = mytext;
  }})
