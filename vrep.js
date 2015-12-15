/* global module */

(function () {
    
    var format = create("{", "}"), output;
    
    function create (left, right) {
        
        if (typeof left !== "string" || typeof right !== "string") {
            throw new Error("Arguments left and right must be strings.");
        }
        
        return function (text, values) {
            
            var key;
            
            if (Array.isArray(values)) {
                values.forEach(function (value, i) {
                    text = text.split(left + (i + 1) + right).join(value);
                });
            }
            else {
                for (key in values) {
                    text = text.split(left + key + right).join(values[key]);
                }
            }
            
            return text;
        };
    }
    
    output = {
        create: create,
        format: format
    };
    
    if (typeof require === "function") {
        module.exports = output;
    }
    else {
        window.VREP = output;
    }
    
}());
