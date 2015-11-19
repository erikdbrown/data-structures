var Queue = function() {
  var results = Object.create(queueMethods);
  results.queueSize = 0;
  results.counter = 0;
  results.storage = {};
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  return results;
};

var queueMethods = {};

queueMethods.size = function() {
  return this.queueSize > 0 ? this.queueSize : 0;
};
queueMethods.enqueue = function(value) {
  this.storage[this.counter] = value;
  this.counter++;
  this.queueSize++;
};
queueMethods.dequeue = function() {
  this.queueSize--;
  var array = [];
  for (var key in this.storage) {
    array.push(key);
  }
  var value = this.storage[array[0]];
  delete this.storage[array[0]];
  return value;
};
