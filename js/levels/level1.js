var welcomeText =
    "Welcome stranger.\nPlease, say me your name using `name <your_name> command`";

var NONE = 0;
var WALL = 1;
var JACK = 2;
var USER = 3;
var DOOR = 4;

var doorOpened = false;

var labyrinth = [
    [USER, NONE, WALL, NONE],
    [WALL, NONE, NONE, NONE],
    [JACK, NONE, WALL, NONE],
    [WALL, WALL, DOOR, NONE]
];

function Level1() {
}

Level1.prototype.load = function () {
    battlefield.value += welcomeText;
};

Level1.prototype.left = function () {
};

Level1.prototype.right = function () {
};

Level1.prototype.up = function () {
};

Level1.prototype.down = function () {
};

Level1.prototype.go = function () {
};

Level1.prototype.pick = function () {
};


