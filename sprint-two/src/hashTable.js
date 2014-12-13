var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};
// EC
// To prevent excessive collisions, make your hashTable double in size as soon as 75 percent of the spaces have been filled.
// To save space, make sure the hashTable shrinks when space usage falls below 25 percent.


// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between the
// numbers 0 and `max`

HashTable.prototype.insert = function(k, v) {
  var i = getIndexBelowMaxForKey(k, this._limit);
  // [ [['bob', 'thebuilder'], ['chacha', 'real smooth']], undefined, undefined ]

  var mainElement = this._storage.get(i)

  if (mainElement === undefined) {
    this._storage.set(i, [[k, v]]);
  } else {
    mainElement.push([k ,v]);
    this._storage.set(i, mainElement);
  }

};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

  var mainElement = this._storage.get(i);
  for ( var j = 0; j < mainElement.length; j++){
    if ( mainElement[j][0] === k){
      return mainElement[j][1]
    }
  }

  return null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

  var mainElement = this._storage.get(i);

  for (var j =0; j <mainElement.length; j++) {
    if (mainElement[j][0] === k) {
      // want to get rid of mainElement[j]
      mainElement.splice(j, 1);
      break;
    }
  }

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
