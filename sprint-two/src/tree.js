var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  // newTree = { value: 5, children: []}
  // newTree.children = [{ value: 5, children: [{value: 2, children: []}] }, {value: 6, children: []}]

  _.extend(newTree, treeMethods)

  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
  var newTree = Tree(value);
  var parentTree = this;

  parentTree.children.push(newTree);
};

treeMethods.contains = function(target){
  // method, takes any input and returns a boolean reflecting whether it can be found as the value of the target node or any descendant node
  // tree.addChild(5);
  // expect(tree.contains(5)).to.equal(true);

  // iterating through children : use recursion to iterate
  // if (newTree.value = target) ? true : false
  var parentTree = this;

  // isSomethingContained(tree)
    // if (tree.value || tree.children.values) { return true; }
    // for each in tree.children run isSomethingContained(tree.children)

  // var isContainedBool = false;

  // var isContained = function(tree) {
  //   var valArr = _.pluck(tree.children, 'value');
  //   valArr.push(tree.value);
  //   if (_.contains(valArr, target)) {
  //     isContainedBool = true;
  //   }

  //   _.each(tree.children, function(item) {
  //     isContained(item);
  //   })
  // };

  // isContained(parentTree);

  // return isContainedBool;

  var isContainedBool = false;

  var recursion = function(tree){

    if (target === tree.value) {
      isContainedBool = true;
    } else {
        for ( var i = 0; i < tree.children.length; i++) {
           if (tree.children[i].value === target){
            isContainedBool = true;
           }
       }
    }

    for (var j = 0; j < tree.children.length; j++ ) {
       recursion(tree.children[j])
    }

  }

  recursion(parentTree);

  return isContainedBool;

};


/*
 * Complexity: What is the time complexity of the above functions?
 */

// Tree.addChild() is O(1)
// Tree.contains() is O(log n) Double the children => 1 increased step
