/**
 * @class Memory
 * @summary Static methods for accessing game's memory (RAM)
 * @hideconstructor 
*/
const Memory = function() {}

/**
* @method
* @argument {Number} address
* @argument {Number[]} patch
* @summary Patchs (writes) bytes 
*/
Memory.write = function(address, patch) {
    return;
}

/**
* @method
* @argument {Number} address
* @argument {Number} length
* @returns {Number[]} Read bytes
* @summary Reads bytes
*/
Memory.read = function(address, length) {
    return;
}

/**
* @method
* @returns {Number} Library's address  
* @summary Returns game library's address (base address)
*/
Memory.getLibrary = function() {
    return;
}

/**
* @method
* @argument {Strnig} symbol
* @returns {Number} Symbol's address
* @summary Returns address of symbol 
*/
Memory.getSymbol = function(symbol) {
    return;
}

/**
* @method
* @argument {Number} playerId
* @returns {Number} Player's address
* @summary Returns player object's address
*/
Memory.getPlayer = function(playerId) {
    return;
}

/**
* @method
* @returns {Number} Localplayer's address
* @summary Returns localplayer object's address
*/
Memory.getLocalPlayer = function() {
    return;
}

/**
* @method
* @returns {Number} Gamemode's address
* @summary Returns gamemode object's address
*/
Memory.getGameMode = function() {
    return;
}

/**
* @method
* @returns {Number} HitResult's address
* @summary Returns HitResult object's address
*/
Memory.getHitResult = function() {
    return;
}

/**
* @method
* @returns {Number} Level's address 
* @summary Returns level object's address
*/
Memory.getLevel = function() {
    return;
}

/**
* @method
* @returns {Number} Dimension's address
* @summary Returns dimension object's address
*/
Memory.getDimension = function() {
    return;
}

/**
* @method
* @returns {Number} Level renderer's address
* @summary Returns level renderer object's address
*/
Memory.getLevelRenderer = function() {
    return;
}

/**
* @method
* @returns {Number} Option's address
* @summary Returns option object's address
*/
Memory.getOptions = function() {
    return;
}

/**
* @method
* @returns {Number} Timer's address
* @summary Returns timer object's address
*/
Memory.getTimer = function() {
    return;
}

/**
* @method
* @argument {Number} address
* @argument {Number} offset
* @returns {String} Read string
* @summary Reads string
*/
Memory.getString = function(address, offset) {
    return;
}

/**
* @method
* @argument {Number} address
* @argument {Number} offset
* @returns {Boolean} Read boolean
* @summary Reads boolean
*/
Memory.getBoolean = function(address, offset) {
    return;
}

/**
* @method
* @argument {Number} address
* @argument {Number} offset
* @returns {Number} Read integer
* @summary Reads integer
*/
Memory.getInt = function(address, offset) {
    return;
}

/**
* @method
* @argument {Number} address
* @argument {Number} offset
* @returns {Number} Read float
* @summary Reads float
*/
Memory.getFloat = function(address, offset) {
    return;
}

/**
* @method
* @argument {Number} address
* @argument {Number} offset
* @returns {String} Read char 
* @summary Reads char (character)
*/
Memory.getChar = function(address, offset) {
    return;
}

/**
* @method
* @argument {Number} address
* @argument {Number} offset
* @argument {String} value
* @summary Sets string
*/
Memory.setString = function(address, offset, value) {
    return;
}

/**
* @method
* @argument {Number} address
* @argument {Number} offset
* @argument {Boolean} value
* @summary Sets boolean
*/
Memory.setBoolean = function(address, offset, value) {
    return;
}

/**
* @method
* @argument {Number} address
* @argument {Number} offset
* @argument {Number} value
* @summary Sets integer
*/
Memory.setInt = function(address, offset, value) {
    return;
}

/**
* @method
* @argument {Number} address
* @argument {Number} offset
* @argument {Number} value
* @summary Sets float
*/
Memory.setFloat = function(address, offset, value) {
    return;
}

/**
* @method
* @argument {Number} address
* @argument {Number} offset
* @argument {Number} value
* @summary Sets char
*/
Memory.setChar = function(address, offset, value) {
    return;
}
