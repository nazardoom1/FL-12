// Your code goes here
//task 1
function convert(){
	let res = [];
	for(let i = 0; i < arguments.length; i++){
		if(typeof arguments[i]=== 'string' && parseInt(arguments[i])+1 !== parseInt(arguments[i] + 1)){
			res.push(parseInt(arguments[i]));
		} else if(typeof arguments[i] === 'number'){
			res.push(arguments[i]+"");
		}
	}
	return res;
}
//task 2
function executeforEach(input, func){
	for(let i = 0; i < input.length; i++){
		func(input[i]);
	}
}
//task 3
function mapArray(input, func) {
    let res = [];

    executeforEach(input, function(val) {
        res.push(func(+val));
    });

    return res;
}
//task 4
function filterArray(input, func) {
    let res = [];

    executeforEach(input, function(val) {
        if (func(val)) {
            res.push(val);
        }
    });

    return res;
}
//taks 5
function flipOver(input){
	let temp=[];
	let res = '';
	for(let i = 0; i < input.length; i++){
		temp[i] = input[input.length - i - 1];
		res += temp[i];
	}
	return res;
}
//task 6
function makeListFromRange([a, b]){
	let res = [];
	let min, max;
	if(a < b){
		min = a;
		max = b;
		res[0] = a;
	} else {
		min = b;
		max = a;
		res[0] = b;
	}
	
	for(let i = 1; i < max-min + 1; i++){
		res[i] = res[i-1] + 1;
	}
	return res;
}
//task 7
const actors = [
  { name: 'tommy', age: 36 },
  { name: 'lee', age: 28 }
];

function getArrayOfKeys(input, key) {
    let res = [];
    executeforEach(input, function(obj) {
        res.push(obj[key]);
    });
    return res;
}
//task 8
function substitute(input){
	let res = [];
	for(let i = 0; i < input.length; i++){
		if(input[i] < 30){
			res[i] = '*';
		} else {
			res[i] = input[i];
		}
	}
	return res;
}
//task 9
const date = new Date(2019, 0, 2);
function getPastDay(date, amount){
	let msValue = date.getTime();
	amount = amount * (3600 * 24 * 1000);
	msValue -= amount;
	const res = new Date(msValue);
	return res.getDate();
}
//task 10
function formatDate(str){
	let day = str.getDate();
	let mon = str.getMonth();
	let year = str.getFullYear();
	let min = str.getMinutes();
	let hour = str.getHours();
	if(hour < 10){
		return `${year}/${mon+1}/${day} 0${hour}:${min}`;
	} else if(min < 10){
		return `${year}/${mon+1}/${day} ${hour}:0${min}`;
	} else if(min < 10 && hour < 10){
		return `${year}/${mon+1}/${day} 0${hour}:0${min}`;
	} else {
 return `${year}/${mon+1}/${day} ${hour}:${min}`; 
}
}


