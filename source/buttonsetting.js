/**
 * @callback ButtonSetting~clickCallback
 * @summary Callback on button click
 * @arg {android.view.View} view
*/

/**
 * @class ButtonSetting
 * @description Button-like setting for module
 * @param {string} name Setting's name
 * @param {ButtonSetting~clickCallback} callback Click callback
 */
var ButtonSetting = function(name, callback) {}

ButtonSetting.prototype = {
    /**
    * @method
    * @returns {string} Name
    * @summary Returns setting's name
    */
    getName: function() {},

    /**
    * @method
    * @returns {string} Type
    * @summary Returns setting's type
    */
    getType: function() {},

    /**
    * @method
    * @returns {boolean} Visibility
    * @summary Checks if setting is visible or not
    */
    isVisible: function() {},

    /**
    * @method
    * @argument {boolean} visibility
    * @summary Sets setting's visibility
    */
    setVisibility: function(visibility) {}
}