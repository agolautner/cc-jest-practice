// import preschoolAdd from './preschoolAdd';
const preschoolAdd = require('./preschoolAdd');
const check = require('./myTestLib');

check(preschoolAdd(2,4),6,'Two integers under 10, expecting 6');
check(preschoolAdd(1,10),'sok','Result over 10, expecting the string SOK');
check(preschoolAdd(5,3.8),8,'Result is under 10 and fractional, expecting it to be rounded down');
check(preschoolAdd(5,-9),0,'Result lower than 0, expecting 0');
check(preschoolAdd(5,5),10,'Result is 10, expecting 10');