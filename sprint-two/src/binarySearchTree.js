var BinarySearchTree = function(value){
  var bst = {};
  bst.left = undefined;
  bst.right = undefined;
  bst.value = value;
  bst.depth = 0;
  // bst = {left: undefined, right: undefined, value : undefined, depth : 0}
  // bst.left = {left: undefined, right: undefined, value : 1, depth : 0}
  // bst.left.depth

  bst.insert = function(value) {
    // starting point is at 5

      // if (bst.value >= value) {
      //     if (bst.left) {
      //         bst.left.insert(value)
      //     } else {
      //       bst.left = BinarySearchTree(value);
      //   }
      // }
      // if (bst.value < value){
      //   if (bst.right) {
      //     bst.right.insert(value)
      //   } else {
      //     bst.right = BinarySearchTree(value);
      //   }
      // }

    var count = 0;

    var recurse = function(val, treeNode) {
       count++;
       if (treeNode.value >= val) {
         if (treeNode.left) {
           recurse(val, treeNode.left)
         } else {
           treeNode.left = BinarySearchTree(val);
           treeNode.left.depth = count;
         }
       }
       if (treeNode.value < val) {
         if (treeNode.right) {
           recurse(val, treeNode.right)
         } else {
           treeNode.right = BinarySearchTree(val);
           treeNode.right.depth = count;
         }
       }
    };
    recurse(value, bst);
  };

  bst.contains = function(target){

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

  bst.breadthFirstLog = function(cb){
   // as we recurse through the
   // if we
   // find the max depth
   // level by level
   // push them into an array
   // run call back on each element of array

   // while ( depth !== depthMax + 1){
   //  depth++;
   //  array.push(bst.value)
   //  _.each(array, cb);

   // solution taken from this stackexchange post
   // http://codereview.stackexchange.com/questions/31513/linkedlist-and-binary-search-tree-in-javascript


   var queue = [];

   if (bst !== null){
    queue.push(bst);
    cb(bst.value);
   }

   while (queue.length > 0){
    var tempNode = queue.shift();
    if ( tempNode.left !== undefined){
      cb(tempNode.left.value)
      queue.push(tempNode.left)
    }
    if (tempNode.right !== undefined){
      cb(tempNode.right.value)
      queue.push(tempNode.right)
    }
   }



    /*
    * procedure BFS(G,v) is
     2      create a queue Q
     3      create a set V
     4      add v to V
     5      enqueue v onto Q
     6      while Q is not empty loop
     7         t ← Q.dequeue()
     8         if t is what we are looking for then
     9            return t
     10        end if
     11        for all edges e in G.adjacentEdges(t) loop
     12           u ← G.adjacentVertex(t,e)
     13           if u is not in V then
     14               add u to V
     15               enqueue u onto Q
     16           end if
     17        end loop
     18     end loop
     19     return none
     20 end BFS
     */


  }

  return bst;
};

  // when inserting a new tree. we go left or right
  //  values to the left are lower, values to the right are higher
  // check to see if value is lower or higher than this.value;
    // if value is lower or equal to, then  this.left = new BinarySearchTree(value)


/*
 * Complexity: What is the time complexity of the above functions?
 */
