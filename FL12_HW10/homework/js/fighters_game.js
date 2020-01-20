	/* Your code goes here */
function Fighter (fighter){
	let _name = fighter.name;
	let _damage = fighter.damage;
    let _hp = fighter.hp;
    let _str = fighter.strength;
    let _agl = fighter.agility;
	let _currentHP = _hp;
	let _win = 0;
	let _losses = 0;
	
	this.getName = function() {
        return _name;
    }
	
	this.getDamage = function() {
        return _damage;
    }
	
	this.getHealth = function() {
        return _currentHP;
    }
	
	this.getAgility = function() {
        return _agl;
    }
	
	this.getStrength = function() {
        return _str;
    }
	
	this.attack = function(obj){
		let defence = obj.getAgility() + obj.getStrength();
		let successProb = 100 - defence; //probability of successful strike 100% - sum of strength and agility
		if(Math.random() * (100 - 1) + 1 > successProb){
			console.log(`${_name} attack missed`);
		} else {
			console.log(`${_name} makes ${_damage} damage to ${obj.getName()}`);
			obj.dealDamage(_damage);
		}
		
	}
	
	this.logCombatHistory = function(){
		console.log(`Name: ${_name}, Wins: ${_win}, Losses: ${_losses}`);
	}
	
	this.heal = function(healAmount){
		_currentHP = _currentHP + healAmount;
		if(_currentHP > _hp){
			_currentHP = _hp;
		}
	}
	
	this.dealDamage = function(damageAmount){
		_currentHP = _currentHP - damageAmount;
		if(_currentHP < 0){
			_currentHP = 0;
		}
	}
	
	this.addWin = function(){
		_win++;
		return _win;
	}
	
	this.addLoss = function(){
		_losses++;
		return _losses;
	}
}

const myFighter = new Fighter({name: 'Maximus', damage: 25, hp: 100, strength: 30, agility: 25});
const myFighter2 = new Fighter({name: 'Commodus', damage: 35, hp: 80, strength: 30, agility: 30});


function battle(obj1, obj2){
	if(obj1.getHealth() === 0){
		console.log(`${obj1.getName()} is dead and can't fight`);
		return;
	}
	if(obj2.getHealth() === 0){
		console.log(`${obj2.getName()} is dead and can't fight`);
		return;
	}
	
	while(obj1.getHealth() !== 0 && obj2.getHealth() !== 0){
		obj1.attack(obj2);
		if(obj2.getHealth() !== 0){
			obj2.attack(obj1);
		}
	}
	if(obj1.getHealth() < obj2.getHealth()){
		obj1.addLoss();
		obj2.addWin();
		console.log(`${obj2.getName()} has won!`);
	} else if(obj1.getHealth() > obj2.getHealth()){
		obj2.addLoss();
		obj1.addWin();
		console.log(`${obj1.getName()} has won!`);
	} else {
 console.log('Something went wrong' + obj1.getHealth() + ' ' + obj1.getHealth()); 
}	
}



	