var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var results = {};
  results.size = queueMethods.size;
  results.enqueue = queueMethods.enqueue;
  results.dequeue = queueMethods.dequeue;
  results.queueSize = 0;
  return results;
};

var queueMethods = {
  dequeue : function() {
    this.queueSize--;
  }, 
  enqueue: function(value) {
    this.queueSize++;
  },
  size: function() {
    return this.queueSize < 0 ? 0 : this.queueSize;
  }
};


