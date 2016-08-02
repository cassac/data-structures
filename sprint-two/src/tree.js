var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  newChild = Tree(value);
  this.children.push(newChild);
};

treeMethods.contains = function(target) {
	if (this.value === target) {
		return true;
	} 
	for (var i = 0; i < this.children.length; i++) {
		var child = this.children[i];
		if (child.children[i])
	}

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
