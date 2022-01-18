const check = (result, expected, testCaseDescription) => {
    console.log(`${result === expected ? 'SUCCESS' : 'FAILED'} :: Result: ${result} :: Expected: ${expected} :: ${testCaseDescription}`);
}

module.exports = check;