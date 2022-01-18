const preschoolAdd = (num1, num2) => {
    let number = num1 + num2;
    if (number > 10) return 'sok';
    if (number === 0) return 0;
    
    return Math.floor(number);
}

console.log('hello world');
console.log(preschoolAdd(112,-109));