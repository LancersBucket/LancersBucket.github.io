// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL 
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have 
		// two entries: an across entry and a down entry
		var puzzleData = [
			{
				clue: "Volo's full name",
				answer: "volothamp",
				position: 1,
				orientation: "across",
				startx: 7,
				starty: 1,
			  },
			  {
				clue: "The badger",
				answer: "bessie",
				position: 2,
				orientation: "across",
				startx: 10,
				starty: 3,
			  },
			  {
				clue: "Total number of obelisk fragments",
				answer: "seven",
				position: 3,
				orientation: "across",
				startx: 8,
				starty: 6,
			  },
			  {
				clue: "A cursed magical feline",
				answer: "mercury",
				position: 4,
				orientation: "across",
				startx: 3,
				starty: 8,
			  },
			  {
				clue: "The dad Favric wanted",
				answer: "venomfang",
				position: 5,
				orientation: "across",
				startx: 11,
				starty: 10,
			  },
			  {
				clue: "The meaning of Ulfur",
				answer: "wolf",
				position: 6,
				orientation: "across",
				startx: 7,
				starty: 11,
			  },
			  {
				clue: "The acronym of the campaign",
				answer: "pabtso",
				position: 7,
				orientation: "across",
				startx: 1,
				starty: 17,
			  },
			  {
				clue: "Ferdie's roommate",
				answer: "trex",
				position: 8,
				orientation: "across",
				startx: 3,
				starty: 20,
			  },
			  {
				clue: "Roman Bold's age",
				answer: "twelve",
				position: 9,
				orientation: "down",
				startx: 11,
				starty: 1,
			  },
			  {
				clue: "The game the Redbrands play",
				answer: "knucklebones",
				position: 10,
				orientation: "down",
				startx: 18,
				starty: 1,
			  },
			  {
				clue: "Unused coin currency",
				answer: "electrum",
				position: 11,
				orientation: "down",
				startx: 15,
				starty: 3,
			  },
			  {
				clue: "Manshoon has Ferdie's...?",
				answer: "rock",
				position: 12,
				orientation: "down",
				startx: 6,
				starty: 6,
			  },
			  {
				clue: "Unmet person within the Cult of Bhaal",
				answer: "sarevok",
				position: 13,
				orientation: "down",
				startx: 8,
				starty: 6,
			  },
			  {
				clue: "Name of the theorem developed by Mercury",
				answer: "mercury-zathur",
				position: 14,
				orientation: "down",
				startx: 4,
				starty: 7,
			  },
			  {
				clue: "Mystical island learned about through Issac",
				answer: "diversia",
				position: 15,
				orientation: "down",
				startx: 2,
				starty: 10,
			  },
			  
			  
			]
	
		$('#puzzle-wrapper').crossword(puzzleData);
		
	})
	
})(jQuery)

