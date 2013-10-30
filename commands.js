var user;

commandActions = {
	"name": function(name) { user = name; return "Name changed to " + user; }
}

function startCommand(command, param) {
	action = commandActions[command];
	if (action != undefined) {
		return action(param);
	}
}
