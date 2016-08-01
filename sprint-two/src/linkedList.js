var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    if (!list.head) {
      list.head = newNode;
    }
    list.tail = newNode;
  };

  list.removeHead = function() {
    var oldHead = list.head;
    list.head = list.tail;
    list.tail = list.tail.next;
    return oldHead.value;
  };

  list.contains = function(target) {
    var node = list.head;
    while (node) {
      if (node.value === target) {
        console.log('contains:', target)
        return true;
      }
      node = node.next;
    }
    console.log('to false')
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
