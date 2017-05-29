var submitButton = document.getElementById('SendTheOSCSotry');
	submitButton.addEventListener('click', OCSMadLibGame);

function OCSMadLibGame() {
	var noun = document.getElementById('noun').value;
	var friend = document.getElementById('friend').value;
	var verb = document.getElementById('verb').value;
	console.log(noun, verb, friend);
	var keyDiv = createMadLib(noun, friend, verb);
	var keyDivContainer = document.getElementById('keyDiv');
	keyDivContainer.innerHTML = keyDiv;
}

function createMadLib(noun, friend, verb) {
	return '<h1>The story of your journey to Afghanistan</h1><br><br> We welcome you to the beautiful province of <span class="fill">' + noun + '</span> of Afghanistan. You and your friend <span class="fill">' + friend + '</span> are the bravest people to choose such a destination. It sounds like your friend was  <span class="fill">' + verb + '</span>, it was a historic trip.';
}

function reLoadButton() {
    document.getElementById("reFresh").style.display = "block";
}
