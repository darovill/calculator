/**
 * "parser" checks inputs searching for patterns
 *
 * @name: parser
 * @version: 0.0.1
 * @author: DAW-M08
 * @description: checks inputs searching for patterns
 * @params {none}
 * @return: none
 */	
var parser = {
	version: "0.0.1",
	version: function () {
		return this.version;
	},
	/**
	 * @name: isDigit
	 * @description: Checks if number is between 0-9
 	 * @params {number}
 	 * @return: true if number is between 0-9, false otherwise
	 */
	isDigit: function (number) {
 		return false;
	},
	/**
	 * @name: isBit
	 * @description: Checks if number is 0 or 1
 	 * @params {number}
 	 * @return: true if number is 0 or 1, false otherwise
	 */
	isBit: function (number) {
		
		var num = parseInt(number);
		
		var isBit = false;
		
		var bits = [];
		
		for (i = 0; i < num.length; i++){
			
			var bit = number % 10;
			
			number = number / 10;
			
			bits[i] = bit;
	
		}
		
		for (j = 0; j < num.length; j++){
			
			if(bits[j] == 0 || bits[j] == 1){
				
				isBit = true;
				
			}else{
				
				isBit = false;
			}
		}
 		return isBit;
	}
}
