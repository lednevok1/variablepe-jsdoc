/** 
 * @class Level
 * @hideconstructor
 * @summary Class for interacting with (server) levels
 */
var Level = function() {}

/** 
 * @function Level.getAddress
 * @summary Returns server's IP
 * @returns {string} Server's IP (not domain name) 
 */
Level.getAddress = function() {}

/** 
 * @function Level.getPort
 * @summary Returns server's port
 * @returns {string} Server's port
 */
Level.getPort = function() {}

/** 
 * @function Level.getAllPlayers
 * @summary Returns IDs of loaded (by server) players
 * @returns {Array<number>} Players' IDs 
 */
Level.getAllPlayers = function() {}

/**
* @function Level.getTime
* @summary Returns current time
* @returns {number} Level time (0-24000?)
*/
Level.getTime = function() {}

/**
* @function Level.getGameSpeed
* @summary Returns current client-side TPS
* @returns {number} Client's TPS
*/
Level.getGameSpeed = function() {}

/**
* @function Level.addParticle
* @summary Spawns a particle
* @description Note: some particles have size requirements (>=100 for 3 & 27, >=256 for 10) 
* @arg {number|ParticleType} type
* @arg {number} posX
* @arg {number} posY
* @arg {number} posZ
* @arg {number} velX
* @arg {number} velY
* @arg {number} velZ
* @arg {number} size
*/
Level.addParticle = function(type, posX, posY, posZ, velX, velY, velZ, size) {}

/**
* @function Level.setTime
* @summary Sets current level's time
* @arg {number} time
*/
Level.setTime = function(time) {}

/**
* @function Level.setGameSpeed
* @summary Sets current client-side TPS
* @arg {number} tps Note: {tps}/second
*/
Level.setGameSpeed = function(tps) {}

/**
* @function Level.setTitle
* @summary Displays a title (subtitle) text
* @arg {string} titleText
* @arg {string} subtitleText Note: might display "undefined" if not set (bug?)
*/
Level.setTitle = function(titleText, subtitleText) {}

/**
* @function Level.displayClientMessage
* @summary Displays a client-side chat message
* @arg {string} text
*/
Level.displayClientMessage = function(text) {}

/**
* @function Level.showTipMessage
* @summary Displays a tip message (above hotbar)
* @arg {string} text
*/
Level.showTipMessage = function(text) {}