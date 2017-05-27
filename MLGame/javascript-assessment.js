var submitButton = document.getElementById('SendTheOSCSotry');

// When submit button with the ID SendTheOSCSotry is clicked, run the OCSMadLibGame function
submitButton.addEventListener('click', OCSMadLibGame);

function OCSMadLibGame() {
	// Get the values of HTML input boxes
	// with the IDs "noun", "verb", and "adjective"
	var noun = document.getElementById('noun').value;
	var adjective = document.getElementById('adjective').value;
	var verb = document.getElementById('verb').value;

	// For testing purposes, display the values in the console
	console.log(noun, verb, adjective);

	// Make the Mad Lib and save it to a variable
	var keyDiv = createMadLib(noun, verb, adjective);

	// Make a JavaScript object for the HTML element with id "keyDiv"...
	var keyDivContainer = document.getElementById('keyDiv');

	// ...and change its contents to contain our madLib string, turning the string into HTML
	keyDivContainer.innerHTML = keyDiv;
	

}

function createMadLib(noun, adjective, verb) {
	return '<h1>The story of your journey to Afghanistan</h1><br><br> We welcome you to the beautiful province of <span class="fill">' + noun + '</span> of Afghanistan. You and your friend <span class="fill">' + adjective + '</span> are the bravest people to choose such a destination. It sounds like your friend was  <span class="fill">' + verb + '</span>, it was a historic trip.';
}

function reLoadButton() {
    document.getElementById("reFresh").style.display = "block";
}
