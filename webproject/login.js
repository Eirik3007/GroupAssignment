var submit = document.getElementById('submit');

submit.onclick = function(){
  console.log("Button is clicked");
};
function validate (){
  var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if (username == "Eirik" && password == "eirik123"){
  window.location = "calcatch.html";
  return false;
}
else {
  
  alert ("Login error");

}
}
