// Graph structure =>
// Nodes (value)
// Edges/connectors (= 2 nodes)

var Graph = function(){
  this._nodes = [];
  this._edges = [];
  //this._nodes = [];
  //this._edges = [];
  // graph has nodes and edges
  // should we create a relationship between edges and nodes
      // this.node = { value: value, edges: [] }
      // this._nodes = [ { ]
  //this.graph = { node : [edges], []}
  //this._nodes = []
};

Graph.prototype.addNode = function(node){
  // graph = new Graph();
  // graph.contains('kittens')
    this._nodes.push(node);
};

//[]
// graph.addNode('kittens')
// [{ value: 'kittens' }]


// {"kittens" : "kittens", "dog" : "dog"}

Graph.prototype.contains = function(node){

    return this._nodes.indexOf(node) !== -1;

    //this.forEachNode(function(objectNode) {
    //    if (objectNode.value === node) {
    //        return true;
    //    }
    //});
    //return false;
};

Graph.prototype.removeNode = function(node){
  // loop through this._nodes array. keep track of the index
  // if this._nodes[i] === node then remove node at specific index
  for (var i =0; i<this._nodes.length; i++){
    if (this._nodes[i] === node ){
      this._nodes.splice(i, 1)
    }
  }
};

Graph.prototype.hasEdge = function(fromNode, toNode){

  // loop through edges array of fromNode
  // loop through edges array of fromNode
  // if the edges arrays contain the same exact edge return true
  //fromNode.edges === toNode.value

  for (var i=0;i<this._edges.length;i++) {
      if (this._edges[i].indexOf(fromNode) !== -1 && this._edges[i].indexOf(toNode) !== -1) {
          return true;
      }
  }
    return false;

    // var x = [1,2,3,4]
    // x.indexOf(1) ==> 0
    // x.indexOf(5) ==> -1
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this._edges.push([fromNode, toNode]);
  // this._nodes = [our node array]
    // [] => graph.edges
    // graph.addEdge('kittens', 'bunnies')
    // [['kittens', 'bunnies']]
    // graph.addEdge('kittens', 'dogs');
    // [['kittens', 'bunnies'],['kittens','dogs']]
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  for (var i=0;i<this._edges.length;i++) {
      if (this._edges[i].indexOf(fromNode) !== -1 && this._edges[i].indexOf(toNode) !== -1) {
          this._edges.splice(this._edges[i], 1);
      }
  }
};

Graph.prototype.forEachNode = function(cb){

  for (var i = 0; i < this._nodes.length; i++){
    cb(this._nodes[i])
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



