// import preschoolAdd from './preschoolAdd';
const preschoolAdd = require('./preschoolAdd');

const check = (result, expected, testCaseDescription) => {
    // console.log(testCaseDescription);
    // if (result === expected) {
    //     console.log('SUCCESS');
    // } else {
    //     console.log('FAILED');
    // }
    console.log(`${result === expected ? 'SUCCESS' : 'FAILED'} :: Result: ${result} :: Expected: ${expected} :: ${testCaseDescription}`);
}

check(preschoolAdd(2,4),6,'Two integers under 10, expecting 6');
check(preschoolAdd(1,10),'sok','Result over 10, expecting the string SOK');
check(preschoolAdd(5,3.8),8,'Result is fractional, expecting it rounded to 8');
check(preschoolAdd(5,-9),0,'Result lower than 0, expecting 0');

/* console.log('hello world');
console.log(preschoolAdd(1,2)); // should return 3
console.log(preschoolAdd(1,10)); // should return 'sok'
console.log(preschoolAdd(5,3.8)); // should return 8
console.log(preschoolAdd(5,-9)); // should return 0 */