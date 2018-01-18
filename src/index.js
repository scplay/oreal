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

module.exports = oreal;