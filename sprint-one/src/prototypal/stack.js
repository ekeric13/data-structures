var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  someInstance.count = 0;
  return someInstance;

};

var stackMethods = {
  push: function(value) {
    this.storage[this.count] = value;
    this.count += 1;
  },
  pop: function() {
    if (this.count) {
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

