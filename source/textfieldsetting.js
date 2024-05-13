/** 
 * @class TextFieldSetting
 * @summary Text-field setting for module
 * @param {string} name Setting name
 * @param {string} hint Text-field's hint
 * @param {string} defaultText Setting's default text
 */
var TextFieldSetting = function(name, hint, defaultText) {}

TextFieldSetting.prototype = {
    /**
    * @method
    * @returns {string} Name
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
    * @returns {Boolean} Visible or not
    * @summary Checks if setting is visible or not
    */
    isVisible: function() {},

    /**
    * @method
    * @argument {Boolean} visibility Visibility
    * @summary Sets setting's visibility
    */
    setVisibility: function(visibility) {},

    /**
    * @method
    * @returns {string} Current text
    * @summary Returns setting's current text 
    */
    getText: function() {},

    /**
     * @callback TextFieldSetting~textChangeCallback
     * @summary Callback on text change
     * @arg {string} newText
    */

    /**
    * @method
    * @argument {Function} callback Callback function
    * @summary Sets callback on text-field's text change
    */
    setOnTextChangedListener: function() {}
}