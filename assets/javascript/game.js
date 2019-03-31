$(document).ready(function() {
	var magicNumber;
	var totalScore = 0;
	var wins = 0;
	var losses = 0;
	var crystal1Num;
	var crystal2Num;
	var crystal3Num;
	var crystal4Num;

	function newNumbers() {
		snowflakeNumber = Math.floor(Math.random() * 110) + 20;
		crystal1Num = Math.ceil(Math.random() * 12);
		crystal2Num = Math.ceil(Math.random() * 12);
		crystal3Num = Math.ceil(Math.random() * 12);
		crystal4Num = Math.ceil(Math.random() * 12);
	}

	function newGame() {
		newNumbers();
		totalScore = 0;
		$("#snowflakeNumber").text(snowflakeNumber);
		$("#totalScore").text(totalScore);
		$("#snowflake1").attr("data-crystalvalue", crystal1Num);
		$("#snowflake2").attr("data-crystalvalue", crystal2Num);
		$("#snowflake3").attr("data-crystalvalue", crystal3Num);
		$("#snowflake4").attr("data-crystalvalue", crystal4Num);
		$("#wins").text(wins);
		$("#losses").text(losses);
		$("#winOrLose").text("");

		//console.log(crystal1Num, crystal2Num, crystal3Num, crystal4Num);
	}

	function youWin() {
		$("#winOrLose").text("YOU WIN!");
		wins++;
		$("#wins").text(wins);
	}

	function youLose() {
		$("#winOrLose").text("YOU LOSE");
		losses++;
		$("#losses").text(losses);
	}

	newGame();

	$(".snowflakeimg").hover(function() {
		$(this).css({opacity: 0.3});
	},
	function() {
		$(this).css({opacity: 1});
	});

	// Function to add the crystal values together
	$(".snowflakeimg").on("click", function() {
		if (totalScore >= snowflakeNumber) {
			return;
		}

		var crystalValue = $(this).attr("data-crystalvalue");
		crystalValue = parseInt(crystalValue);
		totalScore += crystalValue;
		$("#totalScore").text(totalScore);

		if (totalScore === snowflakeNumber) {
			youWin();
		} else if (totalScore > snowflakeNumber) {
			youLose();
		}
	});

	$(".btn").on("click", function() {
		newGame();
	});

});