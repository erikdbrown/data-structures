var Queue = function() {
  var results = Object.create(queueMethods);
  results.queueSize = 0;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  return results;
};

var queueMethods = {};

queueMethods.size = function() {
  return this.queueSize > 0 ? this.queueSize : 0;
};
queueMethods.enqueue = function() {
  this.queueSize++;
};
queueMethods.dequeue = function() {
  this.queueSize--;
};


