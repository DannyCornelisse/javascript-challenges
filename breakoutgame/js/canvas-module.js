var canvas = (function () {
	// make empty object to return to global
	var myObject = {};

	// Get element
	myObject.element = document.getElementById("canvas");

	// define context
	myObject.ctx = myObject.element.getContext("2d");

	// return global object
	return myObject;

})();