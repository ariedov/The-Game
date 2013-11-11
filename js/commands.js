var user;

var helpText = 	"pick - picks up a item from floor.\n" +
	 	"drop - drops item to the floor.\n" +
		"use - uses item action.\n"+
		"forward - Rotates forward.\n"+
		"back - Rotates back.\n"+
		"left - Rotates left.\n"+
		"right - Rotates right.\n"+
		"enter - enters the door.\n"+
		"say <smth> - prints smth to the console.\n"+
		"inventory - shows your inventory\n"+
		"choose <name> - picks item from inverntory\n"+
		"hand - shows item in your hand\n"+
		"name <text> - sets user name\n"+
		"\n"+
		"help - shows main help for the game\n"+
		"help <command> - shows command help\n"+
		"help <item> - shows item help\n";

commandActions = {
	name: function(name) { user = name; return "Name changed to " + user; },
	help: function(param) {
		var commandHelp = {
			"pick": "picks up a item from floor",
			"drop": "drops item to the floor",
			"use": "uses item action",
			"forward": "rotates forward",
			"back": "rotates back",
			"left": "rotates left",
			"right": "rotates right",
			"enter": "enters the door",
			"say": "prints smth to console",
			"inventory": "shows your inventory",
			"choose": "picks item from inventory",
			"hand": "shows item in your hand",
			"name": "sets user name",
			"help": "shows main help for the game"
		};

		var helpString = commandHelp[param];
		if (helpString != undefined) {
			return param + " - " + helpString;
		}
		return helpText;
	},
    left: function() {
        level.left();
        map.innerHTML = drawMap(level.map());
        return "Moved to left.";
    },
    right: function() {
        level.right();
        map.innerHTML = drawMap(level.map());
        return "Moved to right.";
    },
    up: function() {
        level.up();
        map.innerHTML = drawMap(level.map());
        return "Moved up.";
    },
    down: function() {
        level.down();
        map.innerHTML = drawMap(level.map());
        return "Moved down.";
    }
};

function startCommand(command, param) {
	action = commandActions[command];
	if (action != undefined) {
		return action(param);
	}
    return "";
}
