var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.count = 0;
  this.storage ={};
};



Stack.prototype.push = function(value){
  this.storage[this.count] = value;
  this.count += 1;
}

Stack.prototype.pop = function(){
  // Count starts at 1 (length of array)
  // Indexing starts at 0
  if (this.count) {
    this.count -= 1;
  }

  var result = this.storage[this.count];
  delete this.storage[this.count];
  return result;
}

Stack.prototype.size = function(){
  return this.count;
}
