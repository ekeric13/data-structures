var BinarySearchTree = function(value){
  var bst = {};
  bst.left = undefined;
  bst.right = undefined;
  bst.value = value;

  bst.insert = function(value) {
    // starting point is at 5
      if (bst.value >= value) {
          if (bst.left) {
              bst.left.insert(value)
          } else {
            bst.left = BinarySearchTree(value);
        }
      }
      if (bst.value < value){
        if (bst.right) {
          bst.right.insert(value)
        } else {
          bst.right = BinarySearchTree(value);
        }
      }
  };

  bst.contains = function(target){
    // boolean
    // iterate through by going left right
    // starting point is 5
    // 2, 3, 7, 6
    // target = 8

    var isContained = false;

    var recursion = function(rTarget, treeNode){

      if (treeNode.value === rTarget) {
        isContained = true;
      }

      if (treeNode.value < rTarget ) {
        if (treeNode.right){
          recursion(rTarget, treeNode.right)
        }
      }

      if (treeNode.value > rTarget ){
        if (treeNode.left){
          recursion(rTarget, treeNode.left)
        }
      }
    };

    recursion(target, bst);

    return isContained;


  };

  bst.depthFirstLog = function(cb){
    cb(bst.value);
    if (bst.left){
      bst.left.depthFirstLog(cb);
    }
    if (bst.right){
      bst.right.depthFirstLog(cb);
    }
  };

  return bst;
};

  // when inserting a new tree. we go left or right
  //  values to the left are lower, values to the right are higher
  // check to see if value is lower or higher than this.value;
    // if value is lower or equal to, then  this.left = new BinarySearchTree(value)


/*
 * Complexity: What is the time complexity of the above functions?
 */
