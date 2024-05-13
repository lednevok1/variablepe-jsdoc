/** 
 * @namespace Constants
 * @summary Constant classes (enums) for describing some other shit
 */

/**
 * @enum {string}
 * @memberof Constants
 * @readonly
 * @instance
 * @summary Class for describing module categories
 */
const ModuleCategory = {
    "COMBAT": "Combat",
    "MOVEMENT": "Movement",
    "PLAYER": "Player",
    "MISC": "Misc",
    "OTHER": "Other"
}

/**
 * @enum {number}
 * @instance
 * @memberof Constants
 * @readonly
 * @summary Enum that describes block sides
 */
const BlockSide = {
    "DOWN": 0,
    "UP": 1,
    "NORTH": 2, 
    "SOUTH": 3,
    "WEST": 4,
    "EAST": 5
}

/**
 * @enum {number}
 * @instance
 * @readonly
 * @memberof Constants
 * @summary Enum that describes move buttons
 */
const MoveButton = {
    "JUMP": -3,
    "SHIFT": -2,
    "JUMP_IN_FLIGHT": 0, 
    "FORWARD": 1,
    "BACK": 2,
    "LEFT": 3,
    "RIGHT": 4,
    "LEFT_TOP": 5,
    "RIGHT_TOP": 6
}

/**
 * @enum {string}
 * @instance
 * @readonly
 * @memberof Constants
 * @summary Enum that describes types of packets
 */
const PacketType = {
    "ADD_BEHAVIOR_TREE_PACKET": "AddBehaviorTreePacket",
    "ADD_ENTITY_PACKET": "AddEntityPacket",
    "ADD_ITEM_ENTITY_PACKET": "AddItemEntityPacket",
    "ADD_ITEM_PACKET": "AddItemPacket",
    "ADD_PAINTING_PACKET": "AddPaintingPacket",
    "ADD_PLAYER_PACKET": "AddPlayerPacket",
    "ADVENTURE_SETTINGS_PACKET": "AdventureSettingsPacket",
    "ANIMATE_PACKET": "AnimatePacket",
    "AVAILABLE_COMMANDS_PACKET": "AvailableCommandsPacket",
    "BLOCK_ENTITY_DATA_PACKET": "BlockEntityDataPacket",
    "BLOCK_EVENT_PACKET": "BlockEventPacket",
    "BLOCK_PICK_REQUEST_PACKET": "BlockPickRequestPacket",
    "BOSS_EVENT_PACKET": "BossEventPacket",
    "CAMERA_PACKET": "CameraPacket",
    "CHANGE_DIMENSION_PACKET": "ChangeDimensionPacket",
    "CHUNK_RADIUS_UPDATED_PACKET": "ChunkRadiusUpdatedPacket",
    "CLIENT_TO_SERVER_HANDSHAKE_PACKET": "ClientToServerHandshakePacket",
    "COMMAND_BLOCK_UPDATE_PACKET": "CommandBlockUpdatePacket",
    "CONTAINER_CLOSE_PACKET": "ContainerClosePacket",
    "CONTAINER_OPEN_PACKET": "ContainerOpenPacket",
    "CONTAINER_SET_CONTENT_PACKET": "ContainerSetContentPacket",
    "CONTAINER_SET_DATA_PACKET": "ContainerSetDataPacket",
    "CONTAINER_SET_SLOT_PACKET": "ContainerSetSlotPacket",
    "CRAFTING_DATA_PACKET": "CraftingDataPacket",
    "CRAFTING_EVENT_PACKET": "CraftingEventPacket",
    "DISCONNECT_PACKET": "DisconnectPacket",
    "DROP_ITEM_PACKET": "DropItemPacket",
    "ENTITY_EVENT_PACKET": "EntityEventPacket",
    "ENTITY_FALL_PACKET": "EntityFallPacket",
    "EXPLODE_PACKET": "ExplodePacket",
    "FULL_CHUNK_DATA_PACKET": "FullChunkDataPacket",
    "GAME_RULES_CHANGED_PACKET": "GameRulesChangedPacket",
    "HURT_ARMOR_PACKET": "HurtArmorPacket",
    "INVENTORY_ACTION_PACKET": "InventoryActionPacket",
    "INTERACT_PACKET": "InteractPacket",
    "ITEM_FRAME_DROP_ITEM_PACKET": "ItemFrameDropItemPacket",
    "LEVEL_EVENT_PACKET": "LevelEventPacket",
    "LEVEL_SOUND_EVENT_PACKET": "LevelSoundEventPacket",
    "LOGIN_PACKET": "LoginPacket",
    "MAP_INFO_REQUEST_PACKET": "MapInfoRequestPacket",
    "MINING_FATIGUE_PARTICLE": "MiningFatigueParticle",
    "MOB_ARMOR_EQUIPMENT_PACKET": "MobArmorEquipmentPacket",
    "MOB_EFFECT_PACKET": "MobEffectPacket",
    "MOB_EQUIPMENT_PACKET": "MobEquipmentPacket",
    "MOVE_ENTITY_PACKET": "MoveEntityPacket",
    "MOVE_PLAYER_PACKET": "MovePlayerPacket",
    "PLAYER_ACTION_PACKET": "PlayerActionPacket",
    "PLAYER_INPUT_PACKET": "PlayerInputPacket",
    "PLAYER_LIST_PACKET": "PlayerListPacket",
    "PLAY_SOUND_PACKET": "PlaySoundPacket",
    "PLAY_STATUS_PACKET": "PlayStatusPacket",
    "PURCHASE_RECEIPT_PACKET": "PurchaseReceiptPacket",
    "REMOVE_BLOCK_PACKET": "RemoveBlockPacket",
    "REMOVE_ENTITY_PACKET": "RemoveEntityPacket",
    "REPLACE_ITEM_IN_SLOT_PACKET": "ReplaceItemInSlotPacket",
    "REQUEST_CHUNK_RADIUS_PACKET": "RequestChunkRadiusPacket",
    "RESPAWN_PACKET": "RespawnPacket",
    "RESOURCE_PACK_CHUNK_DATA_PACKET": "ResourcePackChunkDataPacket",
    "RESOURCE_PACK_CHUNK_REQUEST_PACKET": "ResourcePackChunkRequestPacket",
    "RESOURCE_PACK_DATA_INFO_PACKET": "ResourcePackDataInfoPacket",
    "RESOURCE_PACK_STACK_PACKET": "ResourcePackStackPacket",
    "RESOURCE_PACKS_INFO_PACKET": "ResourcePacksInfoPacket",
    "RIDER_JUMP_PACKET": "RiderJumpPacket",
    "SERVER_TO_CLIENT_HANDSHAKE_PACKET ": "ServerToClientHandshakePacket ",
    "SET_COMMANDS_ENABLED_PACKET": "SetCommandsEnabledPacket",
    "SET_DIFFICULTY_PACKET": "SetDifficultyPacket",
    "SET_ENTITY_DATA_PACKET": "SetEntityDataPacket",
    "SET_ENTITY_LINK_PACKET": "SetEntityLinkPacket",
    "SET_ENTITY_MOTION_PACKET": "SetEntityMotionPacket",
    "SET_HEALTH_PACKET": "SetHealthPacket",
    "SET_PLAYER_GAME_TYPE_PACKET": "SetPlayerGameTypePacket",
    "SET_TIME_PACKET": "SetTimePacket",
    "SET_TITLE_PACKET": "SetTitlePacket",
    "SHOW_CREDITS_PACKET": "ShowCreditsPacket",
    "SHOW_STORE_OFFER_PACKET": "ShowStoreOfferPacket",
    "SIMPLE_EVENT_PACKET": "SimpleEventPacket",
    "SPAWN_EXPERIENCE_ORB_PACKET": "SpawnExperienceOrbPacket",
    "START_GAME_PACKET": "StartGamePacket",
    "STOP_SOUND_PACKET": "StopSoundPacket",
    "STRUCTURE_BLOCK_UPDATE_PACKET": "StructureBlockUpdatePacket",
    "TAKE_ITEM_ENTITY_PACKET": "TakeItemEntityPacket",
    "TEXT_PACKET": "TextPacket",
    "TRANSFER_PACKET": "TransferPacket",
    "UPDATE_ATTRIBUTES_PACKET": "UpdateAttributesPacket",
    "UPDATE_BLOCK_PACKET": "UpdateBlockPacket",
    "UPDATE_EQUIP_PACKET": "UpdateEquipPacket",
    "UPDATE_TRADE_PACKET": "UpdateTradePacket",
    "USE_ITEM_PACKET": "UseItemPacket"
}

/**
 * @enum {number}
 * @readonly
 * @instance
 * @memberof Constants
 * @summary Enum that describes types of packets
 */
const Enchantment = {
    "PROTECTION": 0,
    "FIRE_PROTECTION": 1,
    "FEATHER_FALLING": 2,
    "BLAST_PROTECTION": 3,
    "PROJECTILE_PROTECTION": 4,
    "THORNS": 5, 
    "RESPIRATION": 6,
    "AQUA_AFFINITY": 7,
    "DEPTH_STRIDER": 8,
    "SHARPNESS": 9,
    "SMITE": 10,
    "BANE_OF_ARTHROPODS": 11,
    "KNOCKBACK": 12,
    "FIRE_ASPECT": 13,
    "LOOTING": 14,
    "EFFICIENCY": 15,
    "SILK_TOUCH": 16,
    "UNBREAKING": 17,
    "FORTUNE": 18,
    "POWER": 19,
    "PUNCH": 20,
    "FLAME": 21,
    "INFINITY": 22,
    "LUCK_OF_THE_SEA": 23,
    "LURE": 24,
    "FROST_WALKER": 25,
    "MENDING": 26
}

/**
 * @enum {number}
 * @instance
 * @readonly
 * @memberof Constants
 * @summary Enum that describes types of packets
 */
const ParticleType = {
    "BUBBLE": 0,
    "CRITICAL": 1,
    "EXPLODE": 2,
    "EVAPORATION": 3,
    "FLAME": 4,
    "LAVA": 5,
    "RED_DUST": 6,
    "SNOW_BALL_POOF": 7,
    "LARGE_EXPLODE": 8,
    "ULTRA_LARGE_EXPLODE": 9,
    "MOB_FLAME": 10,
    "HEART": 11,
    "TERRAIN": 12,
    "TOWN_AURA": 13,
    "PORTAL": 14,
    "WATER_SPLASH": 15,
    "WATER_WAKE": 16,
    "DRIP_WATER": 17,
    "DRIP_LAVA": 18,
    "FALLING_DUST": 19,
    "SLIME": 20,
    "RAIN_SPLASH": 21,
    "VILLAGE_ANGRY": 22,
    "VILLAGE_HAPPY": 23,
    "ENCHANTING_TABLE": 24,
    "NOTE": 25
}