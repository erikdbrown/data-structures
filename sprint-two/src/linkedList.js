var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    this.tail = new Node(value);
    if (this.head === null) {
      this.head = this.tail;
    }
  };

  list.removeHead = function() {
    var removeHead = this.head.value;
    this.head = this.tail;
    return removeHead;
  };

  list.contains = function(target) {
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
