var Queue = function() {
  var someInstance = {};
  var stackSize = 0;
  var counter = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[counter] = value;
    //{1:b, 2: c}
    stackSize++;
    //st = 2;
    counter++;
    //v = 3:
  };

  someInstance.dequeue = function() {
    var arr = [];
    for (var key in storage) {
        arr.push(key);
        //arr = [0,1]
        //arr = [1,2]
    }
    var value = storage[arr[0]]
    //value = a;
    //val = b:
    stackSize--;
    //st = 1;
    //st = 1;
    delete storage[arr[0]];
    //delete a IN storate
    //delete b IN storage
    return value;
    //return a
    // c=2, st=1, {1:b}
    //returb b
    // c =3, st = 1, {2:c}
    
  };

  someInstance.size = function() {
    return stackSize < 0 ? 0 : stackSize;
  };

  return someInstance;
};
