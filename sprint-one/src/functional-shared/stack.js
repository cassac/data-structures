var Stack = function() {
  var obj = {};
  obj.storage = {};
  obj.index = 0;
  _.extend(obj, stackMethods);
  return obj;
};

var stackMethods = {};

stackMethods.push = function(value) {
	this.storage[this.index++] = value;
}

stackMethods.pop = function() {
	var keys = Object.keys(this.storage);
	var targetKey = keys[keys.length - 1];
	var targetValue = this.storage[targetKey];
	delete this.storage[targetKey];
	return targetValue;
}

stackMethods.size = function() {
	return Object.keys(this.storage).length;
}