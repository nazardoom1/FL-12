function addOne(value){
	return value + 1;
}

function pipe(value, ...args){
	args.forEach(func => {
		value = func(value);
	}); 
	return value ;
}

pipe(1, addOne, addOne, addOne, addOne);
pipe(1, addOne, addOne);
pipe(1, addOne);