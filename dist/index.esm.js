/** @preserve ZeonWang 0.0.7 Last Build: Sat, 24 Feb 2018 10:23:53 GMT */
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

export default oreal;
