// Note: Sets should not use up any more space than necessary. Once a value is added to a set, adding it a second time should not increase the size of the set.
// Note: Until the extra credit section, your sets should handle only string values.
// Note: This is a rather simple data structure. Take a look at the Wikipedia) entry. Which native Javascript type fits the requirements best?

var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  //  takes any string and adds it to the set
  if (!this.contains(item)){
    this._storage.push(item);
  };
};

setPrototype.contains = function(item){
  //  method, takes any string and returns a boolean reflecting whether it can be found in the set
  // if (this._storage.indexOf(item) !== -1) {
  //   return true;
  // }
  // return false;
  return this._storage.indexOf(item) !== -1
};


setPrototype.remove = function(item){
  // , takes any string and removes it from the set, if present

  for (var i=0;i<this._storage.length;i++) {
    if (this._storage[i] === item) {
      this._storage.splice(i, 1);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
