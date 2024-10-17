// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL 
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have 
		// two entries: an across entry and a down entry
		var puzzleData = [
			{
				clue: "Child of Bhaal",
				answer: "bhaalspawn",
				position: 1,
				orientation: "across",
				startx: 1,
				starty: 2,
			  },
			  {
				clue: "The number of skeletons in Nothic's Pit",
				answer: "three",
				position: 2,
				orientation: "across",
				startx: 6,
				starty: 4,
			  },
			  {
				clue: "The plauge that raveged Neverwinter",
				answer: "monkeypox",
				position: 3,
				orientation: "across",
				startx: 11,
				starty: 5,
			  },
			  {
				clue: "Cragmaw Goblin cook",
				answer: "yegg",
				position: 4,
				orientation: "across",
				startx: 5,
				starty: 8,
			  },
			  {
				clue: "Shopkeeper of a metalworking-type shop in Phandalin",
				answer: "linene",
				position: 5,
				orientation: "across",
				startx: 10,
				starty: 9,
			  },
			  {
				clue: "The dragon protecting Womanshoon",
				answer: "valkross",
				position: 6,
				orientation: "across",
				startx: 5,
				starty: 11,
			  },
			  {
				clue: "The Goddess of luck",
				answer: "tymora",
				position: 7,
				orientation: "across",
				startx: 13,
				starty: 13,
			  },
			  {
				clue: "First party member to leave",
				answer: "vixen",
				position: 8,
				orientation: "across",
				startx: 7,
				starty: 14,
			  },
			  {
				clue: "Leader of the Bregan D'aerthe",
				answer: "jarlaxle",
				position: 9,
				orientation: "down",
				startx: 3,
				starty: 1,
			  },
			  {
				clue: "Zhentarim contact stationed in The Yawning Portal",
				answer: "yagra",
				position: 10,
				orientation: "down",
				startx: 8,
				starty: 1,
			  },
			  {
				clue: "What species Vyerith was",
				answer: "doppleganger",
				position: 11,
				orientation: "down",
				startx: 17,
				starty: 2,
			  },
			  {
				clue: "Status of Grak",
				answer: "unknown",
				position: 12,
				orientation: "down",
				startx: 14,
				starty: 3,
			  },
			  {
				clue: "The manor where the Redbrands were",
				answer: "tresendar",
				position: 13,
				orientation: "down",
				startx: 6,
				starty: 4,
			  },
			  {
				clue: "The Sixth Hell",
				answer: "malbolge",
				position: 14,
				orientation: "down",
				startx: 10,
				starty: 7,
			  },
			  {
				clue: "How \Slydar/Slidar\ is actually spelled",
				answer: "sildar",
				position: 15,
				orientation: "down",
				startx: 8,
				starty: 13,
			  },
			  
			  
			]
	
		$('#puzzle-wrapper').crossword(puzzleData);
		
	})
	
})(jQuery)

