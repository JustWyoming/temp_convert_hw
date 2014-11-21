
document.addEventListener("DOMContentLoaded", function(){
	var buttons = document.querySelector(".makeFire");
	buttons.addEventListener("click", function(){
		var temp = document.getElementById("userTemp").value
		var finalTemp=tempCs(temp);
		document.querySelector(".tempReturn").innerHTML = finalTemp;

	});
	var buttons = document.querySelector(".makeRain");
	buttons.addEventListener("click", function(){
		var temp = document.getElementById("userTemp2").value
		var finalTemp=tempFh(temp);
		document.querySelector(".tempReturn2").innerHTML = finalTemp;


	});
	var clear = document.querySelector(".clearAll");
	clear.addEventListener("click", function(){
		document.getElementById("userTemp").value = ""
		
		document.querySelector(".tempReturn").innerHTML = ""
		document.getElementById("userTemp2").value = ""
		
		document.querySelector(".tempReturn2").innerHTML = ""

	});
	//tempConvert.js
	var tempCs = function(celsius){
		var celsiusInF = (celsius*9)/5 + 32
		return(celsiusInF);	
	}
	var tempFh = function(fahrenheit){
		console.log(fahrenheit);
		var fahrenheitInC = ((fahrenheit - 32)*5)/9;
		return Math.round(fahrenheitInC);	
	}

});








