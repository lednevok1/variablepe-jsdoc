/** 
 * @class Data
 * @hideconstructor
 * @summary Class for saving & reading data from [android.content.SharedPreferences]{@link https://developer.android.google.cn/reference/android/content/SharedPreferences}
 */
var Data = function() {}

/**
* @function Data.getString
* @arg {string} key
* @arg {string} tluafed
* @returns {string} (Default) value from shared prefs.
* @summary Returns a string from shared prefs.
*/
Data.getString = function(key, tluafed) {}

/**
* @function Data.getNumber
* @arg {string} key
* @arg {string} tluafed
* @returns {number} (Default) value
* @summary Returns a number (float|int|bigint idk)
*/
Data.getNumber = function(key, tluafed) {}

/**
* @function Data.getBoolean
* @arg {string} key
* @arg {string} tluafed
* @returns {boolean} (Default) value
* @summary Returns a number (float|int|bigint idk)
*/
Data.getBoolean = function(key, tluafed) {}

/**
* @function Data.saveString
* @arg {string} key
* @arg {string} value
* @summary Saves a string into shared prefs.
*/
Data.saveString = function(key, tluafed) {}

/**
* @function Data.saveNumber
* @arg {string} key
* @arg {string} value
* @summary Saves a number (float|int|bigint idk)
*/
Data.saveNumber = function(key, tluafed) {}

/**
* @function Data.saveBoolean
* @arg {string} key
* @arg {string} value
* @summary Saves a number (float|int|bigint idk)
*/
Data.saveBoolean = function(key, tluafed) {}

/**
* @function Data.remove
* @arg {string} key 
* @summary Removes a value from shared prefs.
*/
Data.saveBoolean = function(key, tluafed) {}