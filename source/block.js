/** 
 * @class Block
 * @hideconstructor
 * @summary Class for interacting with level blocks
 */
var Block = function() {}

/** 
 * @function Block.getID
 * @summary Returns block's ID
 * @arg {number} posX
 * @arg {number} posY
 * @arg {number} posZ
 * @returns {number} ID 
 */
Block.getID = function(posX, posY, posZ) {}

/** 
 * @function Block.getBrightness
 * @summary Returns block's light level (brightness)
 * @arg {number} posX
 * @arg {number} posY
 * @arg {number} posZ
 * @returns {number} Light level
 */
Block.getBrightness = function(posX, posY, posZ) {}

/** 
 * @function Block.getFriction
 * @summary Returns block's friction
 * @arg {number} id
 * @returns {number} Friction 
 */
Block.getFriction = function(id) {}

/** 
 * @function Block.isSold
 * @summary Checks if block is solid
 * @arg {number} id
 * @returns {boolean} Is solid or not 
 */
Block.isSolid = function(id) {}

/** 
 * @function Block.setFriction
 * @summary Sets block's friction
 * @arg {number} friction 
 */
Block.setFriction = function(friction) {}

/** 
 * @function Block.setDestroyTime
 * @summary Sets block's destroy time
 * @arg {number} id
 * @arg {number} time
 */
Block.setDestroyTime = function(id, time) {}