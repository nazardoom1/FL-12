// Your code goes here
// Try edit message
let a, b, c;
let i = 0;
let temp;
//initializing variables to make eslint happy
const whtSpaceFlag = -1;


while(i!==1) { //a spelling check
a = prompt('Put a value:');
temp = a;
a = parseFloat(a);
if(isNaN(temp)) {
  console.log('input values should be ONLY numbers');
  a = prompt('Put a value:');
  temp = a;
  a = parseFloat(a);
} else if(a <= 0) {
  console.log('A triangle must have 3 sides with a positive definite length');
  a = prompt('Put a value:');
  temp = a;
  a = parseFloat(a);
} else if(temp.indexOf(' ') > whtSpaceFlag) {
  console.log('input values should be ONLY numbers');
  a = prompt('Put a value:');
  temp = a;
  a = parseFloat(a);
} else {
 i = 1;
console.log(' a valid, a =' + a); 
}
}
i=0;

while(i!==1) { //b spelling check
b = prompt('Put b value:');
temp = b;
b = parseFloat(b);
if(isNaN(temp)) {
  console.log('input values should be ONLY numbers');
  b = prompt('Put b value:');
  temp = b;
  b = parseFloat(b);
} else if(b <= 0) {
  console.log('A triangle must have 3 sides with a positive definite length');
  b = prompt('Put b value:');
  temp = b;
  b = parseFloat(b);
} else if(temp.indexOf(' ') > whtSpaceFlag) {
  console.log('input values should be ONLY numbers');
  b = prompt('Put b value:');
  temp = b;
  b = parseFloat(b);
} else {
 i = 1;
console.log(' b valid, b =' + b); 
}
}

i=0;

while(i!==1) { //c spelling check
c = prompt('Put c value:');
temp = c;
c = parseFloat(c);
if(isNaN(temp)) {
  console.log('input values should be ONLY numbers');
  c = prompt('Put b value:');
  temp = c;
  c = parseFloat(c);
} else if(c <= 0) {
  console.log('A triangle must have 3 sides with a positive definite length');
  c = prompt('Put b value:');
  temp = c;
  c = parseFloat(c);
} else if(temp.indexOf(' ') > whtSpaceFlag) {
  console.log('input values should be ONLY numbers');
  c = prompt('Put b value:');
  temp = c;
  c = parseFloat(c);
} else {
 i = 1;
console.log(' c valid, c =' + c); 
}
}

if(a+b<c || a+c<b || c+b<a) {
 console.log('Triangle doesn’t exist'); 
} else if(a === b && b === c) {
 console.log('Equilateral triangle'); 
} else if(a === b || b === c || a === c) {
 console.log('Isosceles triangle'); 
} else {
 console.log('Scalene triangle'); 
}
	
