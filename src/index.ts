function oreal(obj: any, getters: string[]|string): boolean {
	if (! obj) return false;

	if (typeof getters === 'string') {
		getters = getters.split('.');
	}

	let prop: string = getters.shift();
	
	if (! obj[prop]) {
		return false;
	}

	if (getters.length) {
		return oreal(obj[prop], getters);
 	}
 	
 	return true;
}

export default oreal;
