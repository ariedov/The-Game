var user;
var helpText = 	"pick - picks up a item from floor.\n" +
	 	"drop - drops item to the floor.\n" +
		"use - uses item action.\n"+
		"go - moves one step to choosed direction.\n"+
		"forward - Rotates forward.\n"+
		"back - Rotates back.\n"+
		"left - Rotates left.\n"+
		"right - Rotates right.\n"+
		"enter - enters the door.\n"+
		"say <smth> - prints smth to the console.\n"+
		"inventory - shows your inventory\n"+
		"pick <name> - picks item from inverntory\n"+
		"hand - shows item in your hand\n"+
		"name <text> - sets user name\n"+
		"\n"+
		"help - shows main help for the game\n"+
		"help <command> - shows command help\n"+
		"help <item> - shows item help\n";

commandActions = {
	"name": function(name) { user = name; return "Name changed to " + user; },
	"help": function() { return helpText; },
}

function startCommand(command, param) {
	action = commandActions[command];
	if (action != undefined) {
		return action(param);
	}
}
