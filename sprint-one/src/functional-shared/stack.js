var Stack = function() {
  var results = {};

  results.stackSize = 0;
  results.size = stackMethods.size;
  results.push = stackMethods.push;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  return results;
};

var stackMethods = {
  push: function(value) {
    this.stackSize++;
  },

  pop: function() {

  },

  size: function() {
    return this.stackSize;
  },

};


