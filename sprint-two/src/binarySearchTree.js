var BinarySearchTree = function(value) {
  var binaryTree = Object.create(binaryMethods);
  binaryTree.value = value;
  binaryTree.left = null;
  binaryTree.right = null;
  return binaryTree;
};

binaryMethods = {};

binaryMethods.insert = function(value) {
  var newBinaryTree = BinarySearchTree(value);
  var node = this;
  while (node.value) {
    if (value > node.value) {
      if (node.right) {
        node = node.right;
      } else {
        node.right = newBinaryTree;
        return;
      }
    } else {
      if (node.left) {
        node = node.left;
      } else {
        node.left = newBinaryTree;
        return;
      }
    }
  }
};

binaryMethods.contains = function(value) {

};

binaryMethods.depthFirstLog = function() {

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
