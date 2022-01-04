// commonjs, every file is module (by default)
// modules - Encapsuled code (only share minimum)

const {jane, john} = require("./4-names")
const sayHi = require("./5-utils")

const data = require("./6-alternative-flavor")
require('./7-mind-granade')

// sayHi("Andrius");
// sayHi(john);
// sayHi(jane)