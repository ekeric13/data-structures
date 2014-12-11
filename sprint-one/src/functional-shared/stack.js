var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // Define someInstance, storage, count
  var someInstance = {};

  someInstance.storage = {};
  someInstance.count = 0;

  // Extend stackMethods
  _.extend(someInstance, stackMethods);
  // Return someInstance
  return someInstance;

};

var stackMethods = {
  // Here will go push/pop/size
  push: function(value) {
    this.storage[this.count] = value;
    this.count += 1
  },

  pop: function() {
    if (this.count){
      this.count -= 1;
    }
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;

  },
  size: function() {
    return this.count;
  }
};



