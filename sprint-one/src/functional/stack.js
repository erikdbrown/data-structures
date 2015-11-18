var Stack = function() {
  var someInstance = {};
  var stackSize = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    storage[stackSize] = value;
    stackSize++;
  };

  someInstance.pop = function() {
    stackSize--;
    return storage[stackSize]
  };

  someInstance.size = function() {
    return stackSize >= 0 ? stackSize : 0;
  };

  return someInstance;
};
