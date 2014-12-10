var Stack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;

  // Implement the methods below
  someInstance.push = function(value){
    counter += 1;
    storage[counter] = value;
  };

  someInstance.pop = function(){
    counter -= 1;
    var popVal = storage[counter];

  };

  someInstance.size = function(){
  };

  return someInstance;
};
