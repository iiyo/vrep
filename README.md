# vrep

Replaces variables in a string.

## Installation

    npm install vrep

## Usage

```javascript
var format = require("vrep");

var text1 = format("Hi, my name is {name} and I'm {age}.", {name: "Marc", age: "23"});
var text2 = format("Hi, my name is {1} and I'm {2}.", ["Marc", "23"]);
```

Use your own variable style:

```javascript
var format = require("vrep").create("[$", "]");

var text1 = format("Hi, my name is [$name] and I'm [$age].", {name: "Marc", age: "23"});
var text2 = format("Hi, my name is [$1] and I'm [$2].", ["Marc", "23"]);
```
