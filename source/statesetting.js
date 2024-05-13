/** 
 * @class StateSetting
 * @description State (toggle) setting for module
 * @param {string} name Setting name
 * @param {boolean} defaultState Default state
 */
var StateSetting = function(name, defaultState) {}

StateSetting.prototype = {
    /**
    * @method
    * @returns {string} Setting name
    * @summary Returns setting's name 
    */
    getName: function() {},

    /**
    * @method
    * @returns {string} Type (string representation)
    * @summary Returns setting's type  
    */
    getType: function() {},

    /**
    * @method
    * @returns {boolean} Visible or not
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
    * @returns {boolean} Active or not
    * @summary Checks if setting is active 
    */
    isActive: function() {},

    /**
     * @callback StateSetting~toggleCallback
     * @summary Callback on button click
     * @arg {boolean} newState
    */

    /**
    * @method
    * @argument {StateSetting~toggleCallback} callback
    * @summary Sets callback on setting toggle
    */
    setOnStateToggleListener: function() {}
}