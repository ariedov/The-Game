var battlefield;
var user;
var level;

var enteredText = "";

function moveCaretToEnd(el) {
    if (typeof el.selectionStart == "number") {
        el.selectionStart = el.selectionEnd = el.value.length;
    } else if (typeof el.createTextRange != "undefined") {
        el.focus();
        var range = el.createTextRange();
        range.collapse(false);
        range.select();
    }
}

window.onload = function() {

	battlefield = document.getElementById("input");
	console.log(battlefield);
	
	moveCaretToEnd(battlefield);

	battlefield.onkeydown = textAreaKeyPress;

	level = new Level1();
	level.load();
	
	writeConsoleLine();
}

function textAreaKeyPress(event) { 
    var key;
    var keyValue;
    var inputCheck = /^[a-z0-9\s]+$/i;
    if (event) {
       	key = event.keyCode;
       	keyValue = String.fromCharCode(key);
    } else {
       	key = e.which;
    }

    console.log(keyValue);
    if (key == 13) {
        enterPressed();
	return false;
    } else if (key == 8) {
	return backspacePressed();
    } else if (key == 46) {
	deletePressed();
	return false;
    } 
	
    if (keyValue.match(inputCheck)) {
 	enteredText += keyValue;
    } else {
	return false;
    }
    return true;
}

function enterPressed() {
	var commandLine = enteredText.toLowerCase().split(" ");	
	var consoleResult = startCommand(commandLine[0], commandLine[1]);
	if (consoleResult != undefined) {
		battlefield.value += "\n" + consoleResult;
	}
        enteredText = "";   

	console.log(user);
	writeConsoleLine();
	moveCaretToEnd(battlefield);
}

function writeConsoleLine() {
	//var user = window.name;
	battlefield.value += "\n" + ((typeof user === 'undefined') ? ("noname") : (user)) + "@thegame $ ";
}

function backspacePressed() {
	if (enteredText.length > 0) {
		enteredText = enteredText.substring(0, enteredText.length - 1);
		value = battlefield.value;
		battlefield.value = value.substring(0, value.length - 1);
	}
	return false;
}

function deletePressed() {
	
}
