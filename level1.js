var battlefield;

var welcomeText = 
"Welcome stranger.\nPlease say me your name: ";

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
	
	battlefield.innerText += welcomeText;
	moveCaretToEnd(battlefield);

	battlefield.onkeypress = textAreaKeyPress;
}

var nameEntered = false;
var enteredText = "";

function textAreaKeyPress() { 
    var key;
    var keyValue;
    if (window.event) {
       key = event.keyCode;
       keyValue = String.fromCharCode(key);
    } else {
       key = e.which;
    }
    if (key == 13) {
        enterPressed();
   } else {
	enteredText += keyValue;
    }
    return true;
}

function enterPressed() {
          
	console.log(enteredText);
        enteredText = "";   
}
