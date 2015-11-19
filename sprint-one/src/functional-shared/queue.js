var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var results = {};
  _.extend(results, queueMethods);
  results.queueSize = 0;
  results.counter = 0;
  results.storage = {};
  return results;
};

var queueMethods = {
  dequeue : function() {
    var dequeued = this.storage[this.counter - this.queueSize];
    this.queueSize--;
    this.queueSize = this.size();
    return dequeued;
  }, 
  enqueue: function(value) {
    this.queueSize++;
    this.storage[this.counter] = value;
    this.counter++;
  },
  size: function() {
    return this.queueSize < 0 ? 0 : this.queueSize;
  }
};


