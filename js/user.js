
function User() {
    this.position = [];
    this.position.x = 0;
    this.position.y = 0;

    this.bag = [];
    this.currentItem = undefined;
    this.hand = NONE;
}

User.prototype.setPosition = function(x, y) {
    this.position.x = x;
    this.position.y = y;
};

User.prototype.pick = function(item) {
    this.bag.push(item);
    if (this.hand == NONE) {
        this.hand = item;
    }
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

User.prototype.inventory = function() {
    var inventory = [];
    for (var i = 0; i < this.bag.length; i++) {
        inventory.push(getItemName(this.bag[i]));
    }

    if (inventory.length == 0) {
        inventory.push("Bag is empty");
    }
    return inventory;
}

User.prototype.handItem = function() {
    return getItemName(this.hand);
}

function getItemName(item) {
    var itemName = "No item in hand.";
    switch (item) {
        case JACK:
            itemName = "jack";
            break;
    }
    return itemName;
}