// Your code goes here
// Try edit message
let a, b, c;
let i = 0;
let temp;

//initializing variables to make eslint happy
const whtSpaceFlag = -1;
const squareTwo = 2;
const squareFour = 4;

while(i!==1) { //a spelling check
a = prompt('Put a value:');
temp = a;
a = parseFloat(a);
if(isNaN(temp)) {
  console.log('Invalid input data');
  a = prompt('Put a value:');
  temp = a;
  a = parseFloat(a);
} else if(a === 0) {
  console.log('Invalid input data');
  a = prompt('Put a value:');
  temp = a;
  a = parseFloat(a);
} else if(temp.indexOf(' ') > whtSpaceFlag) {
  console.log('Invalid input data');
  a = prompt('Put a value:');
  temp = a;
  a = parseFloat(a);
} else {
 i = 1;
}
}


i=0;

while(i!==1) { //b spelling check
b = prompt('Put b value:');
temp = b;
b = parseFloat(b);
if(isNaN(temp)) {
  console.log('Invalid input data');
  b = prompt('Put b value:');
  temp = b;
  b = parseFloat(b);
} else if(temp.indexOf(' ') > whtSpaceFlag) {
  console.log('Invalid input data');
  b = prompt('Put b value:');
  temp = b;
  b = parseFloat(b);
} else {
 i = 1;
}
}

i=0;

while(i!==1) { //c spelling check
c = prompt('Put c value:');
temp = c;
c = parseFloat(c);
if(isNaN(temp)) {
  console.log('Invalid input data');
  c = prompt('Put c value:');
  temp = c;
  c = parseFloat(c);
} else if(temp.indexOf(' ') > whtSpaceFlag) {
  console.log('Invalid input data');
  c = prompt('Put c value:');
  temp = c;
  c = parseFloat(c);
} else {
 i = 1;
}
}

let d = b*b - squareFour*a*c;
let x1 = (-b + Math.sqrt(d)) / (squareTwo*a);
let x2 = (-b - Math.sqrt(d)) / (squareTwo*a);
if(d === 0) {
 console.log('x= ' + Math.round(x1)) 
} else if(d < 0) {
 console.log('No solution (Discriminant < 0)'); 
} else {
 console.log('x1= ' + Math.round(x1) + ' and x2= ' + Math.round(x2)); 
}
