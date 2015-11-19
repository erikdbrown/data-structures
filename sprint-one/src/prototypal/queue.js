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
  var dequeued = this.storage[this.counter - this.queueSize];
  this.queueSize--;
  this.queueSize = this.size();
  return dequeued;
};
