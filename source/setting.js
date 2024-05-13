/** 
 * @class Setting
 * @hideconstructor
 * @summary Class for interacting with settings
 */
var Setting = function() {}

/** 
 * @function Setting.getType
 * @summary Returns setting's type
 * @arg {string} moduleName
 * @arg {string} settingName
 * @returns {boolean} Setting type's string representation
 */
Setting.getType = function(moduleName, settingName) {}

/**
* @function Setting.isVisible
* @arg {string} moduleName
* @arg {string} settingName
* @returns {boolean} Visible or not
* @summary Checks if setting is visible
*/
Setting.isVisible = function(moduleName, settingName) {}

/**
* @function Setting.setVisibility
* @arg {string} moduleName
* @arg {string} settingName
* @arg {boolean} visibility
* @summary Sets setting's visibility
*/
Setting.setVisibility = function(moduleName, settingName, visibility) {}

/**
* @function Setting.getCurrentMode
* @arg {string} moduleName
* @arg {string} settingName
* @returns {string} Current mode
* @summary Returns setting's current mode
* @throws {RuntimeException} If the setting's type isn't ModeSetting
*/
Setting.getCurrentMode = function(moduleName, settingName) {}

/**
* @function Setting.getCurrentValue
* @arg {string} moduleName
* @arg {string} settingName
* @returns {Number} Current value
* @summary Returns setting's current slider value
* @throws {RuntimeException} If the setting's type isn't SliderSetting
*/
Setting.getCurrentValue = function(moduleName, settingName) {}

/**
* @function Setting.isActive
* @arg {string} moduleName
* @arg {string} settingName
* @returns {boolean} Active or not
* @summary Checks if setting is active
* @throws {RuntimeException} If the setting's type isn't StateSetting
*/
Setting.isActive = function(moduleName, settingName) {}

/**
* @function Setting.getText
* @arg {string} moduleName
* @arg {string} settingName
* @returns {string} Current text
* @summary Returns setting's current text
* @throws {RuntimeException} If the setting's type isn't TextFieldSetting 
*/
Setting.getText = function(moduleName, settingName) {}