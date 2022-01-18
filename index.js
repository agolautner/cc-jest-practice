const preschoolAdd = (num1, num2) => {
    let number = num1 + num2;
    if (number > 10) return 'sok';
    if (number < 0) return 0;
    
    return Math.floor(number);
}

console.log('hello world');
console.log(preschoolAdd(1,2)); // should return 3
console.log(preschoolAdd(1,10)); // should return 'sok'
console.log(preschoolAdd(5,3.8)); // should return 8
console.log(preschoolAdd(5,-9)); // should return 0
