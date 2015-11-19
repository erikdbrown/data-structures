var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var results = Object.create(stackMethods);
  results.stackSize = 0;
  results.storage = {};

  return results;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.stackSize] = value;
  this.stackSize++;
};
stackMethods.pop = function() {
  this.stackSize--;
  return this.storage[this.stackSize];
};
stackMethods.size = function() {
  return this.stackSize < 0 ? 0 : this.stackSize;
};


