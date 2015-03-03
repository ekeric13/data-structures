var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.count = 0;
  this.key = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.key] = value;
  this.count += 1;
  this.key += 1;
};

Queue.prototype.dequeue = function() {
  if (this.count) {
    this.count -= 1;
  }

  var lowestKey = Object.keys(this.storage).sort()[0];
  var result = this.storage[lowestKey];
  delete this.storage[lowestKey];
  return result;
};

Queue.prototype.size = function() {
  return this.count;
};
