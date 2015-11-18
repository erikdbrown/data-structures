var Queue = function() {
  var someInstance = {};
  var stackSize = 0;
  var counter = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[stackSize] = value;
    stackSize++;
  };

  someInstance.dequeue = function() {
    stackSize--;
    var value = storage[0];
    counter++;
    return value;
    
  };

  someInstance.size = function() {
    return stackSize < 0 ? 0 : stackSize;
  };

  return someInstance;
};
