function isLeapYear(str){
    let temp = str;
    str = new Date(str);
    if(new Date(str) === "Invalid Date" || isNaN(str) || str === temp.toString){
        return 'Invalid date';
    }
    let parsed = str.toString();
    parsed = new Date(parsed);
    parsed = parsed.getFullYear();
    if((parsed % 4 === 0) && (parsed % 100 !== 0) || (parsed % 400 === 0)){
        return `${parsed} is a leap year`;
    } else { 
        return `${parsed} is not a leap year`;
    }   
}

isLeapYear(1213131313);
isLeapYear('2020-01-01 00:00:00777');
isLeapYear('2020-01-01 00:00:00');