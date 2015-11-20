

var HashTable = function() {
  this._limit = 8;
  // var obj = Object.create(linkedList);
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // var value = this._storage.get(k)
  // if (value !== undefined) 
    // this._storage.each(function(item, i , collection) {
      // if (i === index) {
        // if (collection[i][bucket] !== undefined) {
          // collection[i][bucket] = [];
          // collection[i][bucket][value] = collection[i]
        // } else {
        // collection[i][bucket][k] === v;
      // }
    // else 
      // })
  this._storage.set(index, v);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var valToRemove = this._storage.get(index);
  this._storage.each(function(item,i, collection) {
    if (item === valToRemove) {
      delete collection[i];
    }
  })
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


