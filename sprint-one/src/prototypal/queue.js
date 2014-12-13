var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);


  someInstance._storage = {};

  someInstance._start = 0;

  someInstance._end = 0;

  return someInstance;

};

var queueMethods = {};


queueMethods.enqueue = function(value){
    this.storage[this.end++] = value;
};

queueMethods.dequeue = function(){
  var result = this.storage[this.start];
  if (this.size() ){
    this.start++
    delete this.storage[this.start]
  }
  return result;
};

queueMethods.size = function(){
  return this.end - this.start;
};
