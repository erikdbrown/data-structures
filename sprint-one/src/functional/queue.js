var Queue = function() {
  var someInstance = {};
  var queueSize = 0;
  var counter = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[counter] = value;
    //{1:b, 2: c}
    queueSize++;
    //st = 2;
    counter++;
    //v = 3:
  };

  someInstance.dequeue = function() {
   var val = storage[counter - queueSize];
   queueSize--;
   // delete storage[counter - queueSize];
   if (queueSize < 0) {
    queueSize = 0;
   }
   return val;
  };

  someInstance.size = function() {
    return queueSize < 0 ? 0 : queueSize;
  };

  return someInstance;
};
