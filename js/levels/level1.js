var NONE = 0;
var WALL = 1;
var JACK = 2;
var USER = 3;
var DOOR = 4;


level = {
	welcomeText:
    	"Welcome stranger.\nPlease, say me your name using `name <your_name> command`",

	doorOpened: false,

	steppedItem: NONE,

	labyrinth: [
	    [USER, NONE, WALL, NONE],
	    [WALL, NONE, NONE, NONE],
	    [JACK, NONE, WALL, NONE],
	    [WALL, WALL, DOOR, NONE]
	],

	load: function() {
   		position = findUserPosition(this.labyrinth),
   	 	user.setPosition(position[0], position[1]);
    		battlefield.value += this.welcomeText;
	},


	left: function () {
	    var nextPosition = this.labyrinth[user.position.y][user.position.x - 1];
	    var nextIsFree =  nextPosition != undefined && nextPosition != WALL;
	    if (user.position.x > 0 && nextIsFree) {
	        this.labyrinth[user.position.y][user.position.x] = this.steppedItem;
	        this.steppedItem = this.labyrinth[user.position.y][user.position.x - 1];
	        this.labyrinth[user.position.y][user.position.x - 1] = USER;
	        user.position.x = user.position.x - 1;
	    }
	},

	right: function () {
   	    var nextPosition = this.labyrinth[user.position.y][user.position.x + 1];
	    var nextIsFree =  nextPosition != undefined && nextPosition != WALL;
	    if (user.position.x < this.labyrinth[user.position.y].length && nextIsFree) {
	        this.labyrinth[user.position.y][user.position.x] = this.steppedItem;
	        this.steppedItem = this.labyrinth[user.position.y][user.position.x + 1];
	        this.labyrinth[user.position.y][user.position.x + 1] = USER;
	        user.position.x = user.position.x + 1;
	    }
	},

	up: function () {
   	    var nextPosition = this.labyrinth[user.position.y - 1][user.position.x];
	    var nextIsFree =  nextPosition != undefined && nextPosition != WALL;
	    if (user.position.y > 0 && nextIsFree) {
	        this.labyrinth[user.position.y][user.position.x] = this.steppedItem;
	        this.steppedItem = labyrinth[user.position.y - 1][user.position.x];
	        this.labyrinth[user.position.y - 1][user.position.x] = USER;
	        user.position.y = user.position.y - 1;
	    }
	},

	down: function () {
	    var nextPosition = this.labyrinth[user.position.y + 1][user.position.x];
	    var nextIsFree =  nextPosition != undefined && nextPosition != WALL;
	    if (user.position.y < this.labyrinth.length && nextIsFree) {
	        this.labyrinth[user.position.y][user.position.x] = this.steppedItem;
	        this.steppedItem = this.labyrinth[user.position.y + 1][user.position.x];
	        this.labyrinth[user.position.y + 1][user.position.x] = USER;
	        user.position.y = user.position.y + 1;
	    }
	},

	pick: function () {
	    if (this.steppedItem == JACK) {
	        user.pick(this.steppedItem);
	        this.steppedItem = NONE;
	    }
	},

	map: function() {
	    return this.labyrinth;
	},

	drop: function(item) {
		if (user.drop(item)) {
			this.labyrinth[user.position.y][user.position.x] = item;
			return "Item " + item + " dropped";
		} else {
			return "No such item in inventory";
		}
	}
}

function findUserPosition(labyrinth) {
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
