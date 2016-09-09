/* global module */

(function () {
    
    var format = create("{", "}"), output;
    
    function id (v) {
        return v;
    }
    
//
// Creates a format function using `left` as the left delimiter, `right` as the right
// delimiter. If `filter` is supplied, every value inserted into the input template is run
// through this `filter` function. This can be used to add HTML escaping and similar things.
//
    function create (left, right, escape) {
        
        if (typeof left !== "string" || typeof right !== "string") {
            throw new Error("Arguments left and right must be strings.");
        }
        
        escape = (typeof escape === "function" ? escape : id);
        
        return function (text, values) {
            
            if (Array.isArray(values)) {
                values.forEach(function (value, i) {
                    text = text.split(left + (i + 1) + right).join(escape(value));
                });
            }
            else {
                Object.keys(values).forEach(function (key) {
                    text = text.split(left + key + right).join(escape(values[key]));
                });
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
