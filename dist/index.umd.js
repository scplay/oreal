/** @preserve ZeonWang 0.0.6 Last Build: Sat, 24 Feb 2018 10:22:01 GMT */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.oreal = factory());
}(this, (function () { 'use strict';

function oreal(obj, getters) {
	if (! obj) return false;

	if (typeof getters === 'string') {
		getters = getters.split('.');
	}

	let property = getters.shift();
	
	if (! obj[property]) {
		return false;
	}

	if (getters.length) {
		return oreal(obj[property], getters);
 	}
 	
 	return true;
}

return oreal;

})));
