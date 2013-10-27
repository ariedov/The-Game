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

function textAreaKeyPress() { 
    var key;
    var keyValue;
    if (window.event) {
       key = event.keyCode;
       keyValue = String.fromCharCode(key);
    } else {
       key = e.which;
    }

    console.log(key);
    if (key == 13) {
        enterPressed();
	return false;
    } else if (key == 8) {
	backspacePressed();
    } else if (key == 46) {
	deletePressed();
    } else {
 	enteredText += keyValue;
    }
    return true;
}

function enterPressed() {
        if (!nameEntered) {
  		user = enteredText;
		nameEntered = true;
	}  
	
        enteredText = "";   

	console.log(user);
	battlefield.value += "\n" + user + "$ ";
	moveCaretToEnd(battlefield);
}

function backspacePressed() {
	alert("Backspace pressed");
}

function deletePressed() {
	alert("Delete pressed");
}
