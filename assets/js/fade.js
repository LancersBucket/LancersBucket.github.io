document.addEventListener('DOMContentLoaded', function() {
    const textLines = [
		['They grow stronger.', '#C35831'],
		['Is that a problem?', '#2271B3'],
		["No. I'm sure that they will fall in due time. They need to.", '#C35831'],
		['You continue to help yet seek their demise. Why not end it here, before they grow stronger?', '#2271B3'],
		["I... can not.", '#C35831'],
		["What's the problem? You've killed far stronger before.", '#2271B3'],
		['Do not question me, <i>Yharon</i>. In due time you will understand.', '#C35831'],
		['Then let me kill them, master.', '#2271B3'],
		['No.', '#C35831'],
		["If you don't stop them now, what will stop them later?", '#2271B3'],
		['That is why I created you. That is why you are one of the strongest.', '#C35831'],
		["I don't understand, master. I am supposed to stop them, but I can't do it now?", '#2271B3'], 
		['I want to see if they will fall on their own, it would be easier for all of us.', '#C35831'], 
		['Who could they fall to?', '#2271B3'],
		['I have my faith in <i>Higgs</i>, and they chose to leave <i>Deathbringer</i> alive. They will not give them a second chance.', '#C35831'],
		['What will you do if he loses?', '#2271B3'],
		['Rain blood across the land.', '#FF0000']
	];

    const container = document.getElementById('fade-text-container');

    textLines.forEach((line) => {
        const lineElement = document.createElement('div');
        lineElement.classList.add('text-line');
        lineElement.innerHTML = line[0];
		lineElement.style.color = line[1];
        container.appendChild(lineElement);
    });

    const lines = document.querySelectorAll('#fade-text-container .text-line');
    let currentLine = 0;

    function showNextLine() {
        // Fade in the current line
        lines[currentLine].style.opacity = 1;

        // After 3 seconds (or a duration of your choice), fade it out
        setTimeout(() => {
            lines[currentLine].style.opacity = 0;

            // After the fade-out is complete, show the next line
            setTimeout(() => {
                if (currentLine < lines.length - 1) {
                    currentLine++;
                    showNextLine(); // Call the function again to show the next line
                }
            }, 3000); // This timing should match the fade-out duration (set in CSS)
        }, 7000); // This is how long the line stays visible before fading out
    }

    // Start with a delay before the first line shows
    setTimeout(() => {
        showNextLine();
    }, 3000); // Delay before the first line
});
