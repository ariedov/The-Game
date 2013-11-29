
user = {
	
    
    	position: {
		x: 0,
    		y: 0
	},

    	bag: [],
    	
	currentItem: undefined,
    
	hand: NONE,

	setPosition: function(x, y) {
	    this.position.x = x;
	    this.position.y = y;
	},

	pick: function(item) {
    		this.bag.push(item);
    		if (this.hand == NONE) {
    	   		this.hand = item;
    		}
	},

	drop: function(item) {
		var bag = this.bag;
		var itemIndex = bag.indexOf(item);
		if (itemIndex > -1) {
			this.bag.slice(index, 1);
			return true;
		} else {
			return false;
		}
	},

	select: function(item) {
    		if (this.bag.contains(item)) {
    	    		this.currentItem = item;
    		}
	},

	use: function() {
    		if (this.currentItem != undefined) {
        		this.currentItem.use();
    		}
	},

	getPosition: function() {
    		return this.position;
	},

	inventory: function() {
    		var inventory = [];
    		for (var i = 0; i < this.bag.length; i++) {
        		inventory.push(getItemName(this.bag[i]));
    		}

    		if (inventory.length == 0) {
        		inventory.push("Bag is empty");
    		}
    		return inventory;
	},

	handItem: function() {
    		return getItemName(this.hand);
	},

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

