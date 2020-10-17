var Input1= document.getElementById("Input1");
var Input2= document.getElementById("Input2");
var Input3= document.getElementById("Input3");
var resultField = document.getElementById('resultField');
var btn = document.querySelector("button");

function render()
{
	var x = parseFloat(Input1.value);
	var y = parseFloat(Input2.value);
	var z = parseFloat(Input3.value);
	var result = x*y*1000/z;
	
	resultField.innerText = "Your building is worth $ " + result;
}	
  btn.addEventListener("click", render);
  
 
 function coord()
 {
 	confirm("would you like to proceed?");
 };

 // function for anyone who clicks others, a box comes in
var otherBox = document.getElementById("otherBox");
console.log(otherBox);
 function getOtherBox(){
   
 }
 

