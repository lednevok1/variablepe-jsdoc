/** 
 * @class ModeSetting
 * @description Mode (selector) setting for module
 * @param {string} name Setting name
 * @param {string[]} modes Setting's modes
 */
var ModeSetting = function(name, modes) {}

ModeSetting.prototype = {
    /**
    * @method
    * @returns {string} Setting name
    * @summary Returns setting's name
    */
    getName: function() {},

    /**
    * @method
    * @returns {string} Setting's type string representation
    * @summary Returns setting's type
    */
    getType: function() {},

    /**
    * @method
    * @returns {boolean} Is setting visible or not
    * @summary Checks if setting is visible or not
    */
    isVisible: function() {},

    /**
    * @method
    * @argument {boolean} visibility
    * @summary Sets setting's visibility
    */
    setVisibility: function(visibility) {},

    /**
    * @method
    * @returns {string} Setting's current mode
    * @summary Returns setting's currently selected mode
    */
    getCurrentMode: function() {},

    /**
     * @callback ModeSetting~modeSelectCallback
     * @summary Callback on mode selection
     * @arg {string} mode
     */

    /**
    * @method
    * @argument {ModeSetting~modeSelectCallback} callback Callback function
    * @returns {string} Setting's current mode
    * @summary Sets setting's callback on mode select
    */
    setOnModeSelectedListener: function() {}
}