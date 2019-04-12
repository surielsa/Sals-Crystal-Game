$(document).ready(function(){



	var counter = 0;
	var wins= 0;
	var losses = 0;


	function randomNum(min,max){
		min = Math.floor(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max-min +1)) + min;

	}

	var targetNumber = randomNum(19,120);
	$("#target").html(targetNumber);

	var crystalOne= randomNum(1, 12);
	var crystalTwo= randomNum(1, 12);
	var crystalThree= randomNum(1, 12);
	var crystalFour= randomNum(1, 12);


	function reset(){
		counter = 0;
		$("#target").html(targetNumber);
		targetNumber = randomNum(19,120);
		$("#playerScore").text(counter);
		crystalOne= randomNum(1, 12);  
		crystalTwo= randomNum(1, 12);
		crystalThree= randomNum(1, 12);
		crystalFour= randomNum(1, 12);
	}

	
	$("#crystal1").on("click", function(){
		counter += crystalOne;
		WinLose();
		$(playerScore).text(counter);
		
	});

	$("#crystal2").on("click", function(){
		counter += crystalTwo;
		WinLose();
		$(playerScore).text(counter);
		
	});

	$("#crystal3").on("click", function(){
		counter += crystalThree;
		WinLose();
		$(playerScore).text(counter);
		
	});

	$("#crystal4").on("click", function(){
		counter += crystalFour;
		WinLose();
		$(playerScore).text(counter);
		
	});

	function WinLose (){

	if (counter === targetNumber){
		wins += 1;
		alert("You Win!");
		$(win).text(wins);
		reset();
    } 
    
    else if(counter >= targetNumber){
		losses += 1;
		alert("You Lose!");
		$(loss).text(losses);
		reset();
	}
	
}
	
}); 



