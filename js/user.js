
function User() {
    this.position = [];
    this.position.x = 0;
    this.position.y = 0;

    this.bag = [];
    this.currentItem = undefined;
}

User.prototype.setPosition = function(x, y) {
    this.position.x = x;
    this.position.y = y;
};

User.prototype.pick = function(item) {
    this.bag.push(item);
};

User.prototype.select = function(item) {
    if (this.bag.contains(item)) {
        this.currentItem = item;
    }
};

User.prototype.use = function() {
    if (this.currentItem != undefined) {
        this.currentItem.use();
    }
};

User.prototype.getPosition = function() {
    return this.position;
};