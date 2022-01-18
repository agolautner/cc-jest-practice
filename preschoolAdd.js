const preschoolAdd = (num1, num2) => {
    let number = num1 + num2;
    if (number > 10) return 'sok';
    if (number < 0) return 0;
    
    return Math.floor(number);
}

// export default preschoolAdd;
module.exports = preschoolAdd; //same thing with older syntax, oh and also it works. :)