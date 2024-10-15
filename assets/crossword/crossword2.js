// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL 
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have 
		// two entries: an across entry and a down entry
		var puzzleData = [
			{
				clue: "Tavern where you met Manshoon for the first time (no spaces)",
				answer: "cryingturtletavern",
				position: 1,
				orientation: "across",
				startx: 1,
				starty: 2,
			  },
			  {
				clue: "Scott's title",
				answer: "werewolf-father",
				position: 2,
				orientation: "across",
				startx: 5,
				starty: 5,
			  },
			  {
				clue: "Oriana's last session",
				answer: "twenty",
				position: 3,
				orientation: "across",
				startx: 11,
				starty: 7,
			  },
			  {
				clue: "Name of gold in Waterdeep",
				answer: "dragon",
				position: 4,
				orientation: "across",
				startx: 10,
				starty: 10,
			  },
			  {
				clue: "Number of party members who know Common",
				answer: "five",
				position: 5,
				orientation: "across",
				startx: 9,
				starty: 14,
			  },
			  {
				clue: "What the Cult of Bhaal is known for",
				answer: "murder",
				position: 6,
				orientation: "across",
				startx: 15,
				starty: 14,
			  },
			  {
				clue: "Omicron",
				answer: "orbakh",
				position: 7,
				orientation: "across",
				startx: 14,
				starty: 17,
			  },
			  {
				clue: "Dkcruh ev jycui jxyi iudjudsu mqi ixyvjut",
				answer: "iynjuud",
				position: 8,
				orientation: "down",
				startx: 3,
				starty: 1,
			  },
			  {
				clue: "Ain's sister",
				answer: "lillith",
				position: 9,
				orientation: "down",
				startx: 11,
				starty: 2,
			  },
			  {
				clue: "Who is Jan Matejko?",
				answer: "jester",
				position: 10,
				orientation: "down",
				startx: 8,
				starty: 4,
			  },
			  {
				clue: "Dead dwarf found near the encephalon gemmules",
				answer: "marthungrim",
				position: 11,
				orientation: "down",
				startx: 15,
				starty: 4,
			  },
			  {
				clue: "Milk Boy's real name",
				answer: "ted",
				position: 12,
				orientation: "down",
				startx: 18,
				starty: 4,
			  },
			  {
				clue: "The last name of the leader of the Redbrands",
				answer: "albrek",
				position: 13,
				orientation: "down",
				startx: 12,
				starty: 10,
			  },
			  {
				clue: "Gus's full name",
				answer: "goradash",
				position: 14,
				orientation: "down",
				startx: 17,
				starty: 12,
			  },
			  {
				clue: "Number of siblings Jinn has",
				answer: "nine",
				position: 15,
				orientation: "down",
				startx: 10,
				starty: 13,
			  },
			  
			]
	
		$('#puzzle-wrapper').crossword(puzzleData);
		
	})
	
})(jQuery)

