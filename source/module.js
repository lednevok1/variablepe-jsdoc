/** 
 * @class Module
 * @summary Class for creating and interacting with cheat modules
 * @param {string} name Display name
 * @param {boolean} toggleable Makes module toggleable 
 * @param {boolean} bindable Lets user bind module
 * @param {string|ModuleCategory} category Category to add module to
 */
var Module = function(name, toggleable, bindable, category) {}

Module.prototype = { 
    // prototype methods
    /**
     * @summary Returns module's name
     * @description Note: modules' names are also used as identificators in VariableAPI
     * @returns {string} Module's name
     */
    getName: function() {},

    /**
     * @summary Checks if module can be toggled
     * @returns {boolean} Module's toggleability
     */
    isToggleable: function() {},

    /**
     * @summary Checks if module's bind can be toggled
     * @returns {string} Module bind's toggleability 
     */
    isBindable: function() {},

    /**
     * @summary Checks if module's bind can be toggled
     * @returns {string} Module bind's toggleability 
     */
    getCategory: function() {},

    /**
     * @summary Checks if module's bind can be toggled
     * @returns {string} Module bind's toggleability 
     */
    isActive: function() {},

    /**
     * @summary Checks if module's bind can be toggled
     * @returns {string} Module bind's toggleability 
     */
    isBindActive: function() {},

    /**
     * @summary Checks if module's bind can be toggled
     * @returns {boolean} Does module have settings
     */
    hasSettings: function() {},

    /**
     * @summary Returns module's setting
     * @returns {string} Module's setting
     */
    getSetting: function(settingName) {},

    /**
     * @summary Returns an array of module's settings
     * @returns {string} Module's settings
     */
    getSettings: function() {},
    
    /**
     * @summary Adds setting into module
     * @argument {ButtonSetting|ModeSetting|SliderSetting|StateSetting|TextFieldSetting} setting
     */
    addSetting: function(setting) {},

    /**
     * @summary Adds settings into module
     * @argument {Array<ButtonSetting|ModeSetting|SliderSetting|StateSetting|TextFieldSetting>} settings
     */
    addSettings: function(settings) {},

    /**
     * @callback Module~toggleCallback 
     * @param {android.view.View} view Module button view
     * @param {boolean} toggled New module status
     */

    /**
     * @summary Sets module's callback on toggle (enable/disable)
     * @argument {Module~toggleCallback} callback
     */
    setOnToggleListener: function(callback) {},

    /**
     * @callback Module~clickCallback 
     * @param {android.view.View} view Module button view
     */

    /**
     * @summary Sets module's callback on click
     * @argument {Module~clickCallback} callback 
     */
    setOnClickListener: function(callback) {},

    // constant methods

}

/** 
 * @method Module.isToggleable
 * @summary Checks if module can be toggled
 * @arg {string} name
 * @returns {boolean} Module's toggleability
 */
Module.isToggleable = function(name) {}

/** 
 * @function Module.isBindable
 * @summary Checks if module's bind can be toggled
 * @arg {string} name
 * @returns {boolean} Module's toggleability
 */
Module.isBindable = function(name) {}

/** 
 * @function Module.getCategory
 * @summary Returns module's category
 * @arg {string} name
 * @returns {boolean} Module's toggleability
 */
Module.getCategory = function(name) {}

/** 
 * @function Module.isActive
 * @summary Checks if module is enabled
 * @arg {string} name
 * @returns {boolean} Module's toggleability
 */
Module.isActive = function(name) {}

/** 
 * @function Module.isBindActive
 * @summary Checks if module's bind is enabled
 * @arg {string} name
 * @returns {boolean} Module's toggleability
 */
Module.isBindActive = function(name) {}

/** 
 * @function Module.hasSettings
 * @summary Checks if module has setting(-s)
 * @arg {string} name
 * @returns {boolean} Module's toggleability
*/
Module.hasSettings = function(name) {}

/** 
 * @function Module.getSettingNames
 * @summary Returns module's setting's names
 * @arg {string} name
 * @returns {Array<string>} Settings' names
 */
Module.getSettingNames = function(name) {}