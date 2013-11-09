var commandHistory = [];
var historyCursor = 0;
var leftCursor = 0;
var battlefield;
var user;
var level;
var map;

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

window.onload = function () {

    battlefield = document.getElementById("input");
    map = document.getElementById("map");

    moveCaretToEnd(battlefield);

    battlefield.onkeydown = textAreaKeyPress;
    battlefield.onmousedown = textAreaMouseDown;

    level = new Level1();
    level.load();
    map.value = level.map();
    mapAdjust(map);
    writeConsoleLine();
};

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

    if (key == 13) {
        enterPressed();
        return false;
    } else if (key == 8) {
        return backspacePressed();
    } else if (key == 46) {
        deletePressed();
        return false;
    } else if (key == 37) { // left
        if (leftCursor > 0) {
            leftCursor -= 1;
        } else {
            return false;
        }
    } else if (key == 39) { // right
        if (leftCursor < enteredText.length) {
            leftCursor += 1;
        } else {
            return false;
        }
    } else if (key == 38) { // up
        upPressed();
        return false;
    } else if (key == 40) { // down
        downPressed();
        return false;
    } else if (keyValue.match(inputCheck)) {
        enteredText += keyValue;
        leftCursor = enteredText.length;
    } else {
        return false;
    }
    return true;
}

function textAreaMouseDown() {
    return false;
}

function mapAdjust(o) {
    o.style.height = "1px";
    o.style.height = (1 + o.scrollHeight) + "px";
    o.style.width= "1px";
    o.style.width = (100 + o.scrollWidth) + "px";
}

function enterPressed() {
    var commandLine = enteredText.toLowerCase().split(" ");
    var consoleResult = startCommand(commandLine[0], commandLine[1]);
    if (consoleResult != undefined) {
        battlefield.value += "\n" + consoleResult;
    }

    if (enteredText != undefined && enteredText.length > 0) {
        commandHistory.push(enteredText.toLowerCase());
        historyCursor = commandHistory.length;
        console.log(historyCursor);
    }
    enteredText = "";

    writeConsoleLine();
    battlefield.scrollTop = battlefield.scrollHeight;

    leftCursor = 0;
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

function upPressed() {
    if (historyCursor > 0) {
        historyCursor -= 1;
    }
    var lastExecuted = commandHistory[historyCursor];

    if (lastExecuted != undefined) {
        var allScreen = battlefield.value;
        battlefield.value = allScreen.substring(0, allScreen.length - enteredText.length);
        enteredText = lastExecuted;
        battlefield.value += enteredText;
    }

    console.log(historyCursor);
}

function downPressed() {
    var allScreenText;
    historyCursor += 1;
    if (historyCursor > commandHistory.length) {
        historyCursor = commandHistory.length;
    }
    if (historyCursor > commandHistory.length - 1 && enteredText.length > 0) {
        allScreenText = battlefield.value;
        battlefield.value = allScreenText.substring(0, allScreenText.length - enteredText.length);
        enteredText = "";
    } else {
        var lastExecuted = commandHistory[historyCursor];
        if (lastExecuted != undefined) {
            allScreenText = battlefield.value;
            battlefield.value = allScreenText.substring(0, allScreenText.length - enteredText.length);
            enteredText = lastExecuted;
            battlefield.value += enteredText;
        }
    }
    console.log(historyCursor);
}

