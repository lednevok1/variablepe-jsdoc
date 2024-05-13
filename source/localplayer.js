/**
 * @class LocalPlayer 
 * @hideconstructor
 * @description Class for working w/ client's (local) player
 */
var LocalPlayer = function() {}

/**
* @function LocalPlayer.getUniqueID
* @returns {number} ID
* @summary Returns LocalPlayer's ID
*/
LocalPlayer.getUniqueID = function() {
    return;
}

/**
* @function LocalPlayer.getPointedPlayer
* @returns {number} ID
* @summary Returns ID of the player you're looking at
*/
LocalPlayer.getPointedPlayer = function() {
    return;
}

/**
* @function LocalPlayer.getPointedVector
* @returns {number[]} Coordinates
* @summary Returns coordinates of block you're looking at
*/
LocalPlayer.getPointedVector = function() {
    return;
}

/**
* @function LocalPlayer.attack
* @argument {number} playerId ID
* @summary Attacks player
*/
LocalPlayer.attack = function(playerId) {
    return;
}

/**
* @function LocalPlayer.attackTp
* @argument {number} playerId ID
* @summary Teleports & attacks player
*/
LocalPlayer.attackTp = function(playerId) {
    return;
}

/**
* @function LocalPlayer.click
* @argument {boolean} rightClick Sets click type to RMB
* @summary Emulates clicking
*/
LocalPlayer.click = function(rightClick) {
    return;
}

/**
* @function LocalPlayer.longClick
* @summary Emulates long tap (click)
*/
LocalPlayer.longClick = function() {
    return;
}

/**
* @function LocalPlayer.buildBlock
* @argument {number} posX
* @argument {number} posY
* @argument {number} posZ
* @argument {number|BlockSide} side
* @summary Clicks on block (commonly used for building)
*/
LocalPlayer.buildBlock = function(posX, posY, posZ, side) {
    return;
}

/**
* @function LocalPlayer.destroyBlock
* @argument {number} posX
* @argument {number} posY
* @argument {number} posZ
* @summary Destroys a block (globally)
*/
LocalPlayer.destroyBlock = function(posX, posY, posZ) {
    return;
}

/**
* @function LocalPlayer.openContainer
* @argument {number} posX
* @argument {number} posY
* @argument {number} posZ
* @summary Opens container-block
*/
LocalPlayer.openContainer = function(posX, posY, posZ) {
    return;
}

/**
* @function LocalPlayer.openInventory
* @summary Opens your inventory
*/
LocalPlayer.openInventory = function() {
    return;
}

/**
* @function LocalPlayer.closeScreen
* @summary Closes current screen (GUI) (note: may cause bugs)
*/
LocalPlayer.closeScreen = function() {
    return;
}

/**
* @function LocalPlayer.sendChatMessage
* @argument {string} text Message text
* @summary Sends message in chat
*/
LocalPlayer.sendChatMessage = function(text) {
    return;
}

/**
* @function LocalPlayer.isMoveButtonPressed
* @argument {number|MoveButton} buttonId
* @returns {boolean} Is button pressed or not
* @summary Checks if move button is pressed
*/
LocalPlayer.isMoveButtonPressed = function(buttonId) {
    return;
}

/**
* @function LocalPlayer.setMoveButtonStatus
* @argument {number|MoveButton} buttonId
* @argument {boolean} status
* @summary Sets move button's status
*/
LocalPlayer.setMoveButtonStatus = function(buttonId, status) {
    return;
}

/**
* @function LocalPlayer.setStepHeight
* @argument {number} height
* @summary Sets your step height
*/
LocalPlayer.setStepHeight = function(height) {
    return;
}

/**
* @function LocalPlayer.setOnGround
* @argument {number} isOnGround
* @summary Sets your isOnGround status
*/
LocalPlayer.setOnGround = function(isOnGround) {
    return;
}

/**
* @function LocalPlayer.setSprinting
* @argument {number} isSprinting
* @summary Sets sprinting status for 1 tick
*/
LocalPlayer.setSprinting = function(isSprinting) {
    return;
}

/**
* @function LocalPlayer.setStatusFlag
* @argument {number} flagId Flag's ID
* @argument {boolean} status Flag's status
* @summary SUMMARY!!!
*/
LocalPlayer.setStatusFlag = function(flagId, status) {
    return;
}

/**
* @function LocalPlayer.addEffect
* @argument {number} type Effect type
* @argument {number} duration Effect's duration
* @argument {number} amplifier Effect's amplifier
* @argument {boolean} showParticles Should effect spawn particles or not
* @summary Adds effect to localplayer
*/
LocalPlayer.addEffect = function(type, duration, amplifier, showParticles) {
    return;
}

/**
* @function LocalPlayer.removeEffect
* @argument {number} type
* @summary Removes effect from localplayer
*/
LocalPlayer.removeEffect = function(type) {
    return;
}

/**
* @function LocalPlayer.setRot
* @argument {number} yaw Yaw rotation
* @argument {number} pitch Pitch rotation
* @summary Sets localplayer's head rotation
*/
LocalPlayer.setRot = function(yaw, pitch) {
    return;
}

/**
* @function LocalPlayer.setPosition
* @argument {number} posX
* @argument {number} posY
* @argument {number} posZ
* @summary Teleports player
*/
LocalPlayer.setPosition = function(posX, posY, posZ) {
    return;
}

/**
* @function LocalPlayer.setPositionX
* @argument {number} posX
* @summary Sets localplayer's X position
*/
LocalPlayer.setPositionX = function(posX) {
    return;
}

/**
* @function LocalPlayer.setPositionY
* @argument {number} posY
* @summary Sets localplayer's Y position
*/
LocalPlayer.setPositionY = function(posY) {
    return;
}

/**
* @function LocalPlayer.setPositionZ
* @argument {number} posZ
* @summary Sets localplayer's Z position
*/
LocalPlayer.setPositionZ = function(posZ) {
    return;
}

/**
* @function LocalPlayer.setPositionRelative
* @argument {number} posX
* @argument {number} posY
* @argument {number} posZ
* @summary Sets localplayer's position relative current coordinates
*/
LocalPlayer.setPositionRelative = function(posX, posY, posZ) {
    return;
}

/**
* @function LocalPlayer.setVelocity
* @argument {number} velX
* @argument {number} velY
* @argument {number} velZ
* @summary Sets localplayer's velocity
*/
LocalPlayer.setVelocity = function(velX, velY, velZ) {
    return;
}

/**
* @function LocalPlayer.setVelocityX
* @argument {number} velX
* @summary Sets localplayer's X velocity
*/
LocalPlayer.setVelocityX = function(velX) {
    return;
}

/**
* @functionLocalPlayer.setVelocityY
* @argument {number} velY
* @summary Sets localplayer's Y velocity
*/
LocalPlayer.setVelocityY = function(velY) {
    return;
}

/**
* @function LocalPlayer.setVelocityZ
* @argument {number} velZ
* @summary Sets localplayer's Z velocity
*/
LocalPlayer.setVelocityZ = function(velZ) {
    return;
}

/**
* @function LocalPlayer.isInGame
* @returns {boolean} In game or not
* @summary Checks if you're in game (on level)
*/
LocalPlayer.isInGame = function() {
    return;
}

/**
* @function LocalPlayer.getViewPerspective
* @returns {number} View perspective
* @summary Returns localplayer's view perspective
*/
LocalPlayer.getViewPerspective = function() {
    return;
}

/**
* @function LocalPlayer.setViewPerspective
* @argument {number} view (todo: make id table)
* @summary Sets localplayer's view perspective
*/
LocalPlayer.setViewPerspective = function(view) {
    return;
}

/**
* @function LocalPlayer.isMovingForward
* @returns {boolean} Moving forward or not
* @summary Checks if localplayer is moving forward
*/
LocalPlayer.isMovingForward = function() {
    return;
}

/**
* @function LocalPlayer.getDistanceTo
* @argument {number} playerId
* @returns {number} Distance to player
* @summary Returns distance to player
*/
LocalPlayer.getDistanceTo = function(playerId) {
    return;
}

/**
* @function LocalPlayer.getDistanceToCoords
* @argument {number} posX
* @argument {number} posY
* @argument {number} posZ
* @returns {number} Distance to coordinates
* @summary Returns distance to coordinates
*/
LocalPlayer.getDistanceToCoords = function(posX, posY, posZ) {
    return;
}

/**
* @function LocalPlayer.getNearestPlayer
* @argument {number} radius
* @returns {number} Player's ID
* @summary Returns nearest player's ID
*/
LocalPlayer.getNearestPlayer = function(radius) {
    return;
}

/**
* @function LocalPlayer.lookAt
* @argument {number} playerId
* @summary Aims at player
*/
LocalPlayer.lookAt = function(playerId) {
    return;
}

/**
* @function LocalPlayer.smoothLookAt
* @argument {number} playerId
* @argument {number} smoothness Rotation smoothness (step)
* @summary Smoothly aims at player
*/
LocalPlayer.smoothLookAt = function(playerId, smoothness) {
    return;
}

/**
* @function LocalPlayer.getNameTag
* @returns {string} Nametag
* @summary Returns localplayer's nametag
*/
LocalPlayer.getNameTag = function() {
    return;
}

/**
* @function LocalPlayer.setNameTag 
* @argument {string} nameTag Nametag
* @summary Sets localplayer's nametag
*/
LocalPlayer.setNameTag = function(nameTag) {
    return;
}

/**
* @function LocalPlayer.getHealth
* @returns {number} Current health
* @summary Returns localplayer's health
*/
LocalPlayer.getHealth = function() {
    return;
}

/**
* @function LocalPlayer.getYaw
* @returns {number} Yaw rotation
* @summary Returns localplayer's head yaw
*/
LocalPlayer.getYaw = function() {
    return;
}

/**
* @function LocalPlayer.getPitch
* @returns {number} Pitch rotation
* @summary Returns localplayer's head pitch
*/
LocalPlayer.getPitch = function() {
    return;
}

/**
* @function LocalPlayer.getPositionX
* @returns {number} X position
* @summary Returns localplayer's X position
*/
LocalPlayer.getPositionX = function() {
    return;
}

/**
* @function LocalPlayer.getPositoinY
* @returns {number} Y position
* @summary Returns localplayer's Y position
*/
LocalPlayer.getPositoinY = function() {
    return;
}

/**
* @function LocalPlayer.getPositionZ
* @returns {number} Z position
* @summary Returns localplayer's Z position
*/
LocalPlayer.getPositionZ = function() {
    return;
}

/**
* @function LocalPlayer.getVelocityX
* @returns {number} X velocity
* @summary Returns localplayer's X velocity
*/
LocalPlayer.getVelocityX = function() {
    return;
}

/**
* @function LocalPlayer.getVelocityY
* @returns {number} Y velocity
* @summary Returns localplayer's Y velocity
*/
LocalPlayer.getVelocityY = function() {
    return;
}

/**
* @function LocalPlayer.getVelocityZ
* @returns {number} Z velocity
* @summary Returns localplayer's Z velocity
*/
LocalPlayer.getVelocityZ = function() {
    return;
}

/**
* @function LocalPlayer.getCollisionSize
* @returns {number[]} Hitbox sizes
* @summary Returns localplayer's hitbox size
*/
LocalPlayer.getCollisionSize = function() {
    return;
}

/**
* @function LocalPlayer.getStatusFlag
* @argument {number} flag
* @returns {boolean} Status
* @summary Checks flag's status
*/
LocalPlayer.getStatusFlag = function(flag) {
    return;
}

/**
* @function LocalPlayer.getFallDistance
* @returns {number} Distance
* @summary Returns localplayer's fall distance
*/
LocalPlayer.getFallDistance = function() {
    return;
}

/**
* @function LocalPlayer.isInCreativeMode
* @returns {boolean} Creative mode or not
* @summary Checks if localplayer is in creative mode
*/
LocalPlayer.isInCreativeMode = function() {
    return;
}

/**
* @function LocalPlayer.isInLava
* @returns {boolean} In lava or not
* @summary Checks if localplayer is in lava
*/
LocalPlayer.isInLava = function() {
    return;
}

/**
* @function LocalPlayer.isInvisible
* @returns {boolean} Is invisible or not
* @summary Checks if localplayer is invisible
*/
LocalPlayer.isInvisible = function() {
    return;
}

/**
* @function LocalPlayer.isInWall
* @returns {boolean} Is in wall or not
* @summary Checks if localplayer is in wall
*/
LocalPlayer.isInWall = function() {
    return;
}

/**
* @function LocalPlayer.isInWater
* @returns {boolean} Is in water or not
* @summary Checks if localplayer is in water
*/
LocalPlayer.isInWater = function() {
    return;
}

/**
* @function LocalPlayer.isOnFire
* @returns {boolean} Is on fire or not
* @summary Checks if localplayer is on fire
*/
LocalPlayer.isOnFire = function() {
    return;
}

/**
* @function LocalPlayer.isOnGround
* @returns {boolean} Is on ground or not
* @summary Checks if localplayer is on ground
*/
LocalPlayer.isOnGround = function() {
    return;
}

/**
* @function LocalPlayer.isFalling
* @returns {boolean} Is falling or not
* @summary Checks if localplayer is falling
*/
LocalPlayer.isFalling = function() {
    return;
}

/**
* @function LocalPlayer.isImmobile
* @returns {boolean} Is immobile or not
* @summary Checks if localplayer is immobile
*/
LocalPlayer.isImmobile = function() {
    return;
}

/**
* @function LocalPlayer.isSitting
* @returns {boolean} Is sitting or not
* @summary Checks if localplayer is sitting
*/
LocalPlayer.isSitting = function() {
    return;
}

/**
* @function LocalPlayer.isSneaking
* @returns {boolean} Is sneaking or not
* @summary Checks if localplayer is sneaking
*/
LocalPlayer.isSneaking = function() {
    return;
}

/**
* @function LocalPlayer.isAlive
* @returns {boolean} Is alive or not
* @summary Checks if localplayer is alive
*/
LocalPlayer.isAlive = function() {
    return;
}

/**
* @function LocalPlayer.isOnLadder
* @returns {boolean} Is on ladder or not
* @summary Checks if localplayer is on ladder
*/
LocalPlayer.isOnLadder = function() {
    return;
}

/**
* @function LocalPlayer.canFly
* @returns {boolean} Can fly or not
* @summary Checks if localplayer is able to fly
*/
LocalPlayer.canFly = function() {
    return;
}

/**
* @function LocalPlayer.canShowNameTag
* @returns {boolean} Can be shown or not
* @summary Checks if localplayer's nametag can be shown
*/
LocalPlayer.canShowNameTag = function() {
    return;
}
