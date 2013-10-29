var welcomeText = 
"Welcome stranger.\nPlease, say me your name using `name <your_name> command`";

function Level1() {
}

Level1.prototype.load = function() {
	battlefield.value += welcomeText;
}
