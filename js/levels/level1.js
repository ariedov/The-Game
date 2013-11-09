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
    this.user = new User();
    var position = findUserPosition();
    this.user.setPosition(position[0], position[1]);
}

function findUserPosition() {
    var x,y;
    for (var i = 0; i < labyrinth.length; i++) {
        for (var j = 0; j < labyrinth[i].length; j++) {
            if (labyrinth[i][j] == USER) {
                x = j;
                y = i;
            }
        }
    }
    return [x, y];
}

Level1.prototype.load = function () {
    battlefield.value += welcomeText;
};

Level1.prototype.left = function () {
    var user = this.user;
    if (user.position.x > 0) {

    }
};

Level1.prototype.right = function () {
    var user = this.user;
    if (user.position.x < labyrinth[user.position.y].length) {

    }
};

Level1.prototype.up = function () {
    var user = this.user;
    if (user.position.y > 0) {

    }
};

Level1.prototype.down = function () {
    var user = this.user;
    if (user.position.y < labyrinth.length) {
        
    }
};

Level1.prototype.pick = function () {
    var labyrinthItem = labyrinth[user.position.y][user.position.x];
    if (labyrinthItem == JACK) {
        this.user.pick(labyrinthItem);
    }
};

Level1.prototype.map = function() {
    var map = "";
    for (var i = 0; i < labyrinth.length; i++) {
        for (var j = 0; j < labyrinth[i].length; j++) {
            var item = labyrinth[i][j];
            if (item == USER) {
                map += "U";
            } else if (item == NONE) {
                map += ".";
            } else if (item == WALL) {
                map += "*";
            } else if (item == DOOR) {
                map += "#";
            }
        }
        map += "\n";
    }
    return map;
};


