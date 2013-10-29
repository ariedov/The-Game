var user;

commandActions = {
	"name": function(name) { user = name }
}

function startCommand(command, param) {
	action = commandActions[command];
	if (action != undefined) {
		action(param);
	}
}
