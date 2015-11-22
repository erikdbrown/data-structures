var BinarySearchTree = function(value) {
  var newTree = Object.create(BinarySearchTree.methods);
  newTree.value = value;
  newTree.right = null;
  newTree.left = null;
  return newTree;
};

BinarySearchTree.methods = {};

BinarySearchTree.methods.findLocation = function(node, currentNode, cb) {
  // if there is no currentNode = this.parent
  currentNode = currentNode || this;
  // compare if input node value < currentNode's value
  if (node.value < currentNode.value){
    // check if currentNode.left === null
    if (currentNode.left === null) {
      // currentNode.left = node
      currentNode.left = node;
    // else (already an existing left node)
    } else {
      // navigateTree(node, currentNode.left)
      this.findLocation(node, currentNode.left);
    }
  // else if input node value > currentNode's value
  } else if (node.value  > currentNode.value) {
    // check if currentNode.right === null
    if (currentNode.right === null) {
      // currentNode.right = node
      currentNode.right = node;
    // else (already an existing right node)
    } else {
      // navigateTree(node, currentNode.right)
      this.findLocation(node, currentNode.right);
    }
  } 
};

// var setLocation = function() {

// }

BinarySearchTree.methods.insert = function(value) {
  var branch = BinarySearchTree(value);
  this.findLocation(branch);
 };

BinarySearchTree.methods.contains = function(value, currentNode) {
  debugger;
  currentNode = currentNode || this;

  if (value === currentNode.value) {
    return true;
  }

  if (value < currentNode.value) {
    if (currentNode.left === null) {
      return false;
    } else {
      returnthis.contains(value, currentNode.left);
    }
  } else if (value > currentNode.value) {
    if (currentNode.right === null) {
      return false;
    } else {
      return this.contains(value, currentNode.right);
    }
  }

};

BinarySearchTree.methods.depthFirstLog = function(func, node) {
  node = node || this;
  func(node.value);
  var array = [];
  if (node.left !== null) {
    array.push(node.left); 
  } 
  if (node.right !== null) {
    array.push(node.right);
  }
  if (array.length > 0) {
    for (var i = 0; i < array.length; i++) {
      this.depthFirstLog(func, array[i]);
    }
  }
}


/*
 * Complexity: What is the time complexity of the above functions?
 */
