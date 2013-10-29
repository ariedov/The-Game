var battlefield;
var user;

var welcomeText = 
"Welcome stranger.\nPlease say me your name: ";

var nameEntered = false;
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
	
	battlefield.value += welcomeText;
	moveCaretToEnd(battlefield);

	battlefield.onkeydown = textAreaKeyPress;
}

function textAreaKeyPress(event) { 
    var key;
    var keyValue;
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
    } else {
 	enteredText += keyValue;
    }
    return true;
}

function enterPressed() {
        if (!nameEntered) {
  		user = enteredText.toLowerCase();
		nameEntered = true;
	}  
	
        enteredText = "";   

	console.log(user);
	battlefield.value += "\n" + user + "@thegame $ ";
	moveCaretToEnd(battlefield);
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
