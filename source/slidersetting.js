/**
 * @class SliderSetting
 * @description Slider setting for module
 * @param {string} name Setting name
 * @param {array} params Slider's parameters
 * @param {number} params.params[0]] Default value
 * @param {number} params.params[1]] Minimum value
 * @param {number} params.params[2]] Maximum value
 * @param {number} params.params[3]] Step
*/
var SliderSetting = function(name, params) {}

SliderSetting.prototype = {
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
    * @returns {string} Current value
    * @summary Returns setting's current slider value
    */
    getCurrentValue: function() {},

    /**
     * @callback SliderSetting~valueChangeCallback
     * @summary Callback on button click
     * @arg {number} newValue
    */

    /**
    * @method
    * @argument {SliderSetting~valueChangeCallback} callback
    * @summary Sets callback on slider value change
    */
    setOnCurrentValueChangedListener: function() {
        return 
    }
}