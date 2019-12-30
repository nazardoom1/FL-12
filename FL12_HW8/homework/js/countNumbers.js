function countNumbers(string) {
	function makeNumber(string){
		let newstring ='';
		for (let i = 0; i < string.length; i++) {
			if(!isNaN(parseInt(string[i], 10))){
				newstring += string[i];
			}
		}
		return newstring;
	}
	let res = {};
	if (!string) {
		return res;
	}
	string = makeNumber(string);
	for (let i = 0; i < string.length; i++) {
		let value = string[i];
		res[value] = (res[value] || 0) + 1;
	}
	return res;
}

countNumbers('erer384jj4444666888jfd123');
countNumbers('jdjjka000466588kkkfs662555');
countNumbers('');