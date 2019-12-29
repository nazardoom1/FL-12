let email, passVar, newPass;
let validityFlag = true;
let whtSpaceFlag = -1;
let adminEmail = 'admin@gmail.com';
let userEmail = 'user@gmail.com';
let adminPass = 'AdminPass';
let userPass = 'UserPass';
let inFlag = true;
let passMinLen = 6;
let emailMinLen = 5;
let temp = true;

email = prompt('Enter your email');
if(email === null || email === '') {
	alert('Canceled');
} else if(email === adminEmail || email === userEmail){
	passVar = prompt('Please fill in your password:');
	if(passVar === null || passVar === '') {
			alert('Canceled');
	}else if(passVar !== adminPass && email === adminEmail || passVar !== userPass && email === userEmail){
		alert('Wrong password'); // if password and username do not correspond
	}
	if(passVar === adminPass && email === adminEmail || passVar === userPass && email === userEmail){
	temp = confirm('Do you want to change your password?');
	if(temp === false){
		alert('You have failed the change');
	} else {
		passVar = prompt('Please fill in your old password:');         
	} if(passVar === adminPass && email === adminEmail && temp === true 
		|| passVar === userPass && email === userEmail && temp === true) {
		newPass = prompt('Please fil in your new password:'); //fill in new password only if user clicked OK
			if(newPass === null || newPass === ''){
			alert('Canceled');	
		}
		if(newPass.length < passMinLen){
			alert('Its too short password. Sorry.')
		} else {
			passVar = prompt('Please fill in your new password again:');
				if(passVar === newPass){
					alert('You have successfully changed your password.');	
				} else if(newPass === null || newPass === '') {
					alert('Canceled');
				} else if(passVar !== newPass){
					alert('You wrote wrong password');	
				}
			}
		} else if(passVar === null || passVar === '') {
			alert('Canceled');
		} else if((passVar !== adminPass || passVar !== userPass) && passVar !== null){
			alert('You wrote wrong password');
		}
		}
		} else if(email.length < emailMinLen) {
			alert('I don`t know any emails having name length less than 5 symbols');
			
		} else {
			alert('I don`t know you');
		}