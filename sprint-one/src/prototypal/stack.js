var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var results = Object.create(stackMethods);
  results.stackSize = 0;
  results.storage = {};

  return results;
};

var stackMethods = {};

stackMethods.push = function(value) {};
stackMethods.pop = function() {};
stackMethods.size = function() {
  return 0;
};


