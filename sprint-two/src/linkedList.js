var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){

    var newNode = Node(value);

    if (list.tail === null){
      list.head = newNode;
    } else {
      list.tail.next = newNode;
      newNode.previous = list.tail;
    }
    list.tail = newNode;
  };

  list.addToHead = function(value){
    var newNode = Node(value);

    if (list.head === null){
      list.tail = newNode;
    } else {
      newNode.next = list.head;
      list.head.previous = newNode;
    }
    list.head = newNode;

  };

  list.removeHead = function(){
    // have a bunch of nodes with a pointer.
    // if doesn't point to anything, garbage collection will take it out

    // 1. get rid of the previous head.
    // 2. set the node, the previous head pointed to, as the new head.
    var originalHead = list.head;
    list.head = originalHead.next;
    return originalHead.value;
  };

  list.removeTail = function(){
    var originalTail = list.tail;
    list.tail = originalTail.previous;
    return originalTail.value;
  };

  list.contains = function(target){

    var node = list.head;
    while ( node.value !== target ) {
      if (node === list.tail){
        return false;
      }
      node = node.next;
    }
    return true;
    //  if nothing happens in the while statement, then return false.
    //  if something happens, return true
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
