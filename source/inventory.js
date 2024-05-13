/**
 * @class Inventory
 * @summary Static methods for interacting with localplayer's inventory
 */
const Inventory = function() {}

/**
* @method
* @argument {Number} slot1
* @argument {Number} slot2
* @summary Swaps items in slots
*/
Inventory.swapSlots = function(slot1, slot2) {
    return;
}

/**
* @method
* @argument {Number} slot
* @argument {Boolean} dropAll Should all items from the slot be dropped
* @argument {Boolean} deleteDrop Should the drop be deleted
* @summary Drops item(-s) from inventory
*/
Inventory.dropSlot = function(slot, dropAll, deleteDrop) {
    return;
}

/**
* @method
* @argument {Number} slot
* @summary Clears slot
*/
Inventory.clearSlot = function(slot) {
    return;
}

/**
* @method
* @returns {Number} Slot number
* @summary Returns selected (main hand) slot's number
*/
Inventory.getSelectedSlot = function() {
    return;
}

/**
* @method
* @returns {Number} Item's ID
* @summary Returns ID of the item in the offhand slot
*/
Inventory.getOffhandSlot = function() {
    return;
}

/**
* @method
* @returns {Number} Item's ID
* @argument {Number} slot Armor slot number 
* @summary Returns ID of item in an armor slot
*/
Inventory.getArmor = function(slot) {
    return;
} 

/**
* @method
* @argument {Number} slot
* @summary Selects hotbar slot 
*/
Inventory.setSelectedSlot = function(slot) {
    return;
}

/**
* @method
* @argument {Number} slot
* @summary Puts (swaps) item into offhand slot
*/
Inventory.setOffhandSlot = function(slot) {
    return;
}

/**
* @method
* @argument {Number} slot Item slot
* @argument {Number} armorSlot Armor slot
* @argument {Number} freeSlot Free slot (for item from armorSlot)
* @summary Puts item into armor slot
*/
Inventory.setArmor = function(slot, armorSlot, freeSlot) {
    return;
}
