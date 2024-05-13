/** 
 * @class Item
 * @summary Static methods for interacting with inventory items
 * @hideconstructor
 */
const Item = function() {}

/**
* @method
* @returns {Number} ID
* @argument {Number} slot
* @summary Returns ID of item in the slot 
*/
Item.getID = function(slot) {
    return;
}

/**
* @method
* @returns {Number} Aux value
* @argument {Number} slot
* @summary Returns data (damage, aux) of item in the slot 
*/
Item.getData = function(slot) {
    return; 
}

/**
* @method
* @returns {String} Name
* @argument {Number} slot
* @summary Returns name of item in the slot
*/
Item.getName = function(slot) {
    return;
}

/**
* @method
* @argument {Number} slot
* @argument {Number|Enchantment} enchantment
* @argument {Number} level 
* @summary Enchants an item
*/
Item.enchant = function(slot, enchantment, level) {
    return;
}

/**
* @method
* @returns {Number} Use time 
* @summary Returns item's use duration (time)
*/
Item.getUseDuration = function(slot) {
    return;
}

/**
* @method
* @argument {Number} slot
* @returns {Number} Max stack size 
* @summary Returns item's maximum stack size
*/
Item.getMaxStackSize = function(slot) {
    return;
}

/**
* @method
* @argument {Number} slot
* @returns {Number} Max durability
* @summary Returns item's maximum damage (durability)
*/
Item.getMaxDamage = function(slot) {
    return;
}

/**
* @method
* @argument {Number} slot
* @returns {Number} Damage
* @summary Returns item's damage (NOT durability)
*/
Item.getDamage = function(slot) {
    return;
}

/**
* @method
* @argument {Number} slot
* @returns {Number} Count
* @summary Returns item's count
*/
Item.getCount = function(slot) {
    return;
}

/**
* @method
* @argument {Number} slot
* @returns {Boolean} Armor or not
* @summary Checks if item is an armor
*/
Item.isArmor = function(slot) {
    return;
}

/**
* @method
* @argument {Number} slot
* @returns {Boolean} Block or not
* @summary Checks if item is a block
*/
Item.isBlock = function(slot) {
    return;
}

/**
* @method
* @argument {Number} slot
* @returns {Boolean} Damageable or not
* @summary Checks if item can be damaged
*/
Item.isDamageable = function(slot) {
    return;
}

/**
* @method
* @argument {Number} slot
* @returns {Boolean} Stackable or not
* @summary Checks if item is stackable
*/
Item.isStackable = function(slot) {
    return;
}

/**
* @method
* @argument {Number} slot
* @returns {Boolean} Full stacked or not
* @summary Checks if item(-s) is (are) fully stacked
*/
Item.isFullStack = function(slot) {
    return;
}

/**
* @method
* @argument {Number} slot
* @returns {Boolean} Is item throwable or not 
* @summary Checks if item is throwable
*/
Item.isThrowable = function(slot) {
    return;
}

/**
* @method
* @argument {Number} slot
* @returns {Boolean} Is damaged or not 
* @summary Checks if item is damaged
*/
Item.isDamaged = function(slot) {
    return;
}

/**
* @method
* @argument {Number} slot
* @returns {Boolean} Is item potion or not 
* @summary Checks if item is potion
*/
Item.isPotion = function(slot) {
    return;
}

/**
* @method
* @argument {Number} slot
* @returns {Boolean} Is item enchanted or not 
* @summary Checks if item is enchanted
*/
Item.isEnchanted = function(slot) {
    return;
}

/**
* @method
* @argument {Number} slot
* @argument {String} name New name
* @summary Globally (!) sets item's name
*/
Item.setName = function(slot, name) {
    return;
}

/**
* @method
* @argument {Number} slot
* @argument {Number} duration Use duration
* @summary Sets item's use duration 
*/
Item.setUseDuration = function(slot, duration) {
    return;
}

/**
* @method
* @argument {Number} slot
* @argument {Number} duration Count
* @summary Sets item's count 
*/
Item.setCount = function(slot, count) {
    return;
}
