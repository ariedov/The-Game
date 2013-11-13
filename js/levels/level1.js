var welcomeText =
    "Welcome stranger.\nPlease, say me your name using `name <your_name> command`";

var NONE = 0;
var WALL = 1;
var JACK = 2;
var USER = 3;
var DOOR = 4;

var doorOpened = false;

var steppedItem = NONE;

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
    var nextPosition = labyrinth[user.position.y][user.position.x - 1];
    var nextIsFree =  nextPosition != undefined && nextPosition != WALL;
    if (user.position.x > 0 && nextIsFree) {
        labyrinth[user.position.y][user.position.x] = steppedItem;
        steppedItem = labyrinth[user.position.y][user.position.x - 1];
        labyrinth[user.position.y][user.position.x - 1] = USER;
        this.user.position.x = user.position.x - 1;
    }
};

Level1.prototype.right = function () {
    var user = this.user;
    var nextPosition = labyrinth[user.position.y][user.position.x + 1];
    var nextIsFree =  nextPosition != undefined && nextPosition != WALL;
    if (user.position.x < labyrinth[user.position.y].length && nextIsFree) {
        labyrinth[user.position.y][user.position.x] = steppedItem;
        steppedItem = labyrinth[user.position.y][user.position.x + 1];
        labyrinth[user.position.y][user.position.x + 1] = USER;
        this.user.position.x = user.position.x + 1;
    }
};

Level1.prototype.up = function () {
    var user = this.user;
    var nextPosition = labyrinth[user.position.y - 1][user.position.x];
    var nextIsFree =  nextPosition != undefined && nextPosition != WALL;
    if (user.position.y > 0 && nextIsFree) {
        labyrinth[user.position.y][user.position.x] = steppedItem;
        steppedItem = labyrinth[user.position.y - 1][user.position.x];
        labyrinth[user.position.y - 1][user.position.x] = USER;
        this.user.position.y = user.position.y - 1;
    }
};

Level1.prototype.down = function () {
    var user = this.user;
    var nextPosition = labyrinth[user.position.y + 1][user.position.x];
    var nextIsFree =  nextPosition != undefined && nextPosition != WALL;
    if (user.position.y < labyrinth.length && nextIsFree) {
        labyrinth[user.position.y][user.position.x] = steppedItem;
        steppedItem = labyrinth[user.position.y + 1][user.position.x];
        labyrinth[user.position.y + 1][user.position.x] = USER;
        this.user.position.y = user.position.y + 1;
    }
};

Level1.prototype.pick = function () {
    var user = this.user;
    if (steppedItem == JACK) {
        this.user.pick(steppedItem);
        steppedItem = NONE;
    }
};

Level1.prototype.map = function() {
    return labyrinth;
};


