var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.parent = null;
  newTree.children = [];
  // newTree = { value: 5, children: []}
  // newTree.children = [{ value: 5, children: [{value: 2, children: []}] }, {value: 6, children: []}]

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

// tree = Tree(); { value: undefined, parent: null, children: [] }
// tree.addChild(5); { value: undefined, parent: null, children : [ { value: 5, parent: { tree Object }, children: [] }
// tree.children[0].addChild(7); { value: undefined, parent: null, children : [ { value: 5, parent: { tree Object }, children : [ { value: 7, parent: { tree.children[0] Object }, children: [] } ] } }

// tree.parent ==> null
// tree.children[0].parent ==> tree Object

// tree.children[0].children = null;
// tree.children[0].children[0].parent = null;

treeMethods.addChild = function(value){
  var newTree = Tree(value);
  var parentTree = this;
  // When child is added, add reference to parent
  newTree.parent = parentTree;

  parentTree.children.push(newTree);
};

treeMethods.removeFromParent = function() {
  var currentTree = this;
  var parentTree = currentTree.parent;

  // If currentTree has no parent
  if (!parentTree) {
    return null;
  }

  // Set parent property to null
  currentTree.parent = null;

  // Iterate through parentTree's children
  for (var i = 0; i<parentTree.children.length; i++) {
    if (parentTree.children[i] === currentTree) {
      parentTree.children.splice(i, 1);
      break;
    }
  }

  return currentTree;
    // If childTree === this
      // Splice it
};

treeMethods.traverse = function(cb) {

  var childLength = this.children.length;

  if (this.value) {
    this.value = cb(this.value)
  }
  for (var i = 0; i < childLength; i++) {
    this.children[i].traverse(cb);
  }
};

treeMethods.contains = function(target){
  var parentTree = this;
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
  };
  recursion(parentTree);
  return isContainedBool;


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
};


/*
 * Complexity: What is the time complexity of the above functions?
 */

// Tree.addChild() is O(1)
// Tree.contains() is O(log n) Double the children => 1 increased step
