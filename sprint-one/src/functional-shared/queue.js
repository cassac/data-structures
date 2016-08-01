var Queue = function() {
  var obj = {};
  obj.storage = {};
  obj.index = 0;
  _.extend(obj, queueMethods);
  return obj;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
	this.storage[this.index++] = value;
}

queueMethods.dequeue = function() {
	var targetKey = Object.keys(this.storage)[0];
	var targetValue = this.storage[targetKey];
	delete this.storage[targetKey];
	return targetValue;
}

queueMethods.size = function() {
	return Object.keys(this.storage).length;
}