const assert = require("assert");
const unixseconds = require("./index");

// Math.trunc(Date.now() / 1000) === unixseconds()
// Should be true most of the time since they are usually executed within the same second.

// Problems might arise but rarely if the difference crosses over to the next second
// Thus solution is to add a second check for this case by adding 1 second

assert(
  Math.trunc(Date.now() / 1000) === unixseconds() ||
    Math.trunc(Date.now() / 1000) + 1 === unixseconds()
);
