

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
    var bucket = this._storage.get(index);
    if (typeof bucket === "undefined") {
      bucket = [];
    }
    var keyExists = false; 
    _.each(bucket, function(tuple) {
      if (tuple[0] === k) {
        tuple[1] = v;
        keyExists = true;
      }
    })
    if (!keyExists) {
     bucket.push([k,v]); 
    }
    this._storage.set(index, bucket);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (typeof bucket === 'undefined') {
    return;
  }

  var returnValue;
  _.each(bucket, function(tuple) {
    if (tuple[0] === k) {
      returnValue = tuple[1];
    }
  });

  return returnValue;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index); 
  _.each(bucket, function(tuple, i) {
    if (tuple[0] === k) {
      bucket.splice(i, 1);
    }
  })
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

