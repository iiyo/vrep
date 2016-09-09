# vrep

Replaces variables in a string.

## Installation

    npm install vrep

## Usage

```javascript
var format = require("vrep").format;

var text1 = format("Hi, my name is {name} and I'm {age}.", {name: "Marc", age: "23"});
var text2 = format("Hi, my name is {1} and I'm {2}.", ["Marc", "23"]);
```

Use your own variable style and encode the values before insertion:

```javascript
var format = require("vrep").create("[$", "]", encodeURIComponent);

var text1 = format("Hi, my name is [$name] and I'm [$age].", {name: "Marc", age: "23"});
var text2 = format("Hi, my name is [$1] and I'm [$2].", ["Marc", "23"]);
```
