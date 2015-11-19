var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.queueSize = 0;
  this.counter = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.counter] = value;
  this.queueSize++;
  this.counter++;
}

Queue.prototype.dequeue = function() {
  var dequeued = this.storage[this.counter - this.queueSize];
  this.queueSize--;
  this.queueSize = this.size();
  return dequeued;
}
Queue.prototype.size = function() {
  return this.queueSize < 0 ? 0 : this.queueSize;
}



