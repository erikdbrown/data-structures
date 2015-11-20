var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  _.extend(newTree, treeMethods);
  // your code here
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var created = Tree(value);
  this.children.push(created);  // fix me
};

treeMethods.contains = function(target, isTrue) {
  // var isFound = false; clure variable

  // new function closure function(target)
  // target is a value
  // this.value === target ???
  isTrue = isTrue || false;
  if (this.value === target) {
    // if true, return true
    isTrue = true;
    // else if this.children.length > 0 ??
  } else if (this.children.length > 0) {
    for (var i = 0; i < this.children.length; i++) {
      isTrue = this.children[i].contains(target, isTrue);
    }
  }
  return isTrue;
        // if true, loop through children, return invoke contains(target)
        // else return
  // return false
    

};




/*
 * Complexity: What is the time complexity of the above functions?
 */
