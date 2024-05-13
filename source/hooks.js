/**
 *
 * @namespace Hooks
 * @summary List of listenable events
 * @description Note: you can prevent some hooks using [preventDefault()]{@link preventDefault}
 */ 

/**
 * @event onScriptEnabled
 * @memberof Hooks
 * @instance
 * @summary Hooks (re-)loading current script
 */
function onScriptEnabled() {}

 /**
 * @event onScriptDisabled
 * @memberof Hooks
 * @instance
 * @summary Hooks unloading current script
 */
 function onScriptDisabled() {}

/**
 * @event onFastTick
 * @memberof Hooks
 * @instance
 * @summary Called 1000 times/second
 */ 
function onFastTick() {}

/**
 * @event onLevelTick
 * @memberof Hooks
 * @instance
 * @summary Hooks a game tick
 * @description Note: called only in worlds
 * @see Level.setGameSpeed
 */ 
function onLevelTick() {}

/**
 * @event onAttack
 * @memberof Hooks
 * @instance
 * @summary Hooks localplayer's attacks
 * @arg {number} player Target player's ID
 */ 
function onAttack(player) {}

/**
 * @event onPlayerAdded
 * @memberof Hooks
 * @instance
 * @summary Hooks loading of other players 
 * @arg {number} player
 */ 
function onPlayerAdded(player) {}

/**
 * @event onUseItem
 * @memberof Hooks
 * @instance
 * @summary Hooks using item (tapping on blocks)
 * @description Note: preventable
 * @arg {number} posX
 * @arg {number} posY
 * @arg {number} posZ
 * @arg {number} side
 * @arg {number} item
 * @arg {number} block
 */ 
function onUseItem(posX, posY, posZ, side, item, block) {}

/**
 * @event onTeleport
 * @memberof Hooks
 * @instance
 * @summary Hooks player teleports
 * @description Note: preventable
 * @arg {number} player
 * @arg {number} posX Note: position after teleport
 * @arg {number} posY
 * @arg {number} posZ
 */ 
function onTeleport(player, posX, posY, posZ) {}

/**
 * @event onChat
 * @memberof Hooks
 * @instance
 * @summary Hooks message send (from localplayer)
 * @description Note: preventable
 * @arg {string} text
 */ 
function onChat(text) {}

/**
 * @event onReceiveServerMessage
 * @memberof Hooks
 * @instance
 * @summary Hooks message receive
 * @description Note: preventable; Note 2: some servers bypass this D:
 * @arg {string} text
 */ 
function onReceiveServerMessage(text) {}

/**
 * @event onScreenChange
 * @memberof Hooks
 * @instance
 * @summary Hooks screen changes (ex.: pressing the chat button)
 * @arg {string} screenName Screen name (ex.: chat_screen)
 */ 
function onScreenChange(screenName) {}

/**
 * @event onServerConnect
 * @memberof Hooks
 * @instance
 * @summary Hooks server joining
 * @arg {string} ip 
 * @arg {number} port
 */ 
function onServerConnect(screenName) {}

/**
 * @event onServerDisconnect
 * @memberof Hooks
 * @instance
 * @summary Hooks disconnecting from server
 */ 
function onServerDisconnect() {}

/**
 * @event onSendPacket
 * @memberof Hooks
 * @instance
 * @description Note: preventable
 * @summary Hooks sending data packets
 * @arg {string} type 
 * @arg {number} address
 */ 
function onSendPacket(type, address) {}