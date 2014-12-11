var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  var count = 0;

  // Independent of count & dequeue, this will increment every time enqueue is called.
  var key = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[key] = value;
    count += 1;
    key +=1;
  };

  someInstance.dequeue = function(){

    if (count) {
      count -= 1;
    }

    var lowestKey = Object.keys(storage).sort()[0];
    var result = storage[lowestKey];
    delete storage[lowestKey];
    return result;
  };

  someInstance.size = function(){
    return count;
  };

  return someInstance;
};
