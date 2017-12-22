# vrep

Replaces variables in a string.

## Installation

For using it as a library:

    npm install --save vrep

For using it from the command line:

    npm install -g vrep

Please note: you might need to use `sudo` on some systems for global install.


## Library Usage Examples

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


## Command Line Usage Example

For echoing the result:

    vrep template.txt data.json

For writing the result to file:

    vrep template.txt data.json result.txt


