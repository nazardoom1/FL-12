function makeNumber(string){
	let newstring ='';
	for (let i = 0; i < string.length; i++) {
		if(!isNaN(parseInt(string[i], 10))){
			newstring += string[i];
		}
	}
	return newstring;
}

makeNumber('erer384jjjfd123');
makeNumber('123098h76gfdd');
makeNumber('ijifjgdj');