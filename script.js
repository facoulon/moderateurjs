
var btnModeration = document.getElementById("moderer");
var result = document.getElementById("result");


btnModeration.addEventListener("click",function(){
  var mytext = document.getElementById("mytext").value;
  result.innerHTML = mytext.replace(":)" ,"--").replace(":')" ,"--").replace(":D" ,"--");
});
