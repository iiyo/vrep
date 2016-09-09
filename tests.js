/* global describe, it */

var assert = require("assert");
var vrep = require("./vrep");
var format = vrep.format;
var create = vrep.create;

describe("vrep", function () {
    
    describe(".format(input, values)", function () {
        
        it("replaces '{1}', '{2}' etc. when 'values' is an array, starting at {1}", function () {
            assert.equal(
                format("foo, {0}, {1}, {2}, {bar}", ["bar", "baz"]),
                "foo, {0}, bar, baz, {bar}"
            );
        });
        
        it("replaces '{foo}', '{bar}' etc. when 'values' is an object", function () {
            assert.equal(
                format("foo, {0}, {baz}, {foo}, {bar}", {foo: "nope", bar: "zzz"}),
                "foo, {0}, {baz}, nope, zzz"
            );
        });
        
    });
    
    describe(".create(left, right, escape)", function () {
        
        it("works like format when using '{' and '}' for left and right", function () {
            assert.equal(
                format("foo, {0}, {1}, {2}, {bar}", ["bar", "baz"]),
                create("{", "}")("foo, {0}, {1}, {2}, {bar}", ["bar", "baz"])
            );
        });
        
        it("works with various delimiters", function () {
            [
                ["{", "}"],
                ["...", "..."],
                ["begin", "end"],
                ["/", "/"],
                ["[$", "]"]
            ].forEach(function (d) {
                
                var dl = d[0], dr = d[1];
                var format = create(dl, dr);
                
                assert.equal(
                    format(dl + "1" + dr + " " + dl + "2" + dr, ["bar", "baz"]),
                    "bar baz"
                );
                
                assert.equal(
                    format(dl + "foo" + dr + " " + dl + "bar" + dr, {foo: "bar", bar: "baz"}),
                    "bar baz"
                );
            });
            
        });
        
        it("works with an escape function", function () {
            assert.equal(
                create("{", "}", encodeURIComponent)("{1}", ["?foo=23&bar=baz"]),
                "%3Ffoo%3D23%26bar%3Dbaz"
            );
        });
        
    });
    
});
