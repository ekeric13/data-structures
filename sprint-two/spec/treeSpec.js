describe('tree', function() {
  var tree;

  beforeEach(function() {
    tree = Tree();
  });

  it('should have methods named "addChild" and "contains", and a property named "value"', function() {
    expect(tree.addChild).to.be.a("function");
    expect(tree.contains).to.be.a("function");
    expect(tree.hasOwnProperty("value")).to.equal(true);
  });

  it('should add children to the tree', function() {
    tree.addChild(5);
    expect(tree.children[0].value).to.equal(5);
  });

  it('should return true for a value that the tree contains', function(){
    tree.addChild(5);
    expect(tree.contains(5)).to.equal(true);
  });

  it('should return false for a value that was not added', function(){
    tree.addChild(5);
    expect(tree.contains(6)).to.equal(false);
  });

  it('should be able to add children to a tree\'s child', function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).to.equal(6);
  });

  it('should correctly detect nested children', function(){
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
  });

  it("should remove child from parent tree", function(){
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    // tree.children[0].children[0].removeFromParent()
    // {value: undefined, parent: null, children : [{value : 5, parent : tree object, children : [{value : 7, parent : tree.children[0] object, children : [] }]}, {value : 6, parent : tree object, children : [{value : 8, parent : tree.children[1] object, children : []}]}]}
    expect(tree.children[0].children[0].removeFromParent().value).to.equal(7);
    expect(tree.contains(7)).to.equal(false);
  });

  it("should remove parent from child tree", function(){
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.children[0].children[0].removeFromParent().parent).to.equal(null);
  });

  it('should traverse through the array and run a callback on every value', function() {
    var add5 = function(val) { return 5 + val; };
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    tree.traverse(add5);
    expect(tree.contains(10)).to.equal(true);
    expect(tree.contains(11)).to.equal(true);
    expect(tree.contains(12)).to.equal(true);
    expect(tree.contains(13)).to.equal(true);
  });
});
