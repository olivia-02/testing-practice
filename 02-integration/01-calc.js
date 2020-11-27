// ==================================================
// DEFINE FUNCTION(S)
// ==================================================
function calc(op, num1, num2){

switch(op) {
  case 'add':
    if (num1 === undefined) num1 =0;
    if (num2 === undefined) num2 =0;
    return num1 + num2;
  case 'subtract':
    if (num1 === undefined) num1 =0;
    if (num2 === undefined) num2 =0;
    return num1 - num2;
  case 'multiply':
    if (num1 === undefined && num2 === undefined){
      num1 = 0;
      num2 = 0;
    } else if (num1 === undefined){
      num1 =1;
    } else if (num2 === undefined){
      num2 =1;
    }
    return num1 * num2;
  case 'divide':
    if (num1 === undefined){
      return 0;
    } else if (num2 === 0){
      return "ERROR";
    } else if (num2 === undefined){
      return num1;
    } else {
      return num1 / num2;
    }
    default:
      return "Operation not supported"
  }
}

// ==================================================
// DEFINE AND EXECUTE TEST CASES
// ==================================================
try {
  // --------------------------------------------------
  // Test Case 1
  // --------------------------------------------------
  // It should return the correct sum when the user provides: 'add', 1, 1.
  var result = calc('add', 1, 1);
  if (result !== 2) throw new Error('Expected calc("add", 1, 1) to be 2. Received: ' + result);

  // --------------------------------------------------
  // Test Case 2
  // --------------------------------------------------
  // It should return the correct difference when the user provides: 'subtract', 20, 10.
  var result = calc('subtract', 20, 10);
  if (result !== 10) throw new Error('Expected calc("subtract", 20, 10) to be 10. Received: ' + result);
  // --------------------------------------------------
  // Test Case 3
  // --------------------------------------------------
  // It should return the correct product when the user provides: 'multiply', 9, 9.
  var result = calc('multiply', 9, 9);
  if (result !== 81) throw new Error('Expected calc("multiply", 9, 9) to be 81. Received: ' + result);
  // --------------------------------------------------
  // Test Case 4
  // --------------------------------------------------
  // It should return the correct quotient when the user provides: 'divide', 9, 3.
  var result = calc('divide', 9, 3);
  if (result !== 3) throw new Error('Expected calc("divide", 9, 3) to be 3. Received: ' + result);
  // --------------------------------------------------
  // Test Case 5
  // --------------------------------------------------
  // It should return the message 'Operation not supported.' when the user provides: exponent, 2, 8.
  var result = calc('exponent', 2, 8);
  if (result !== "Operation not supported") throw new Error('Expected calc("exponent", 2, 8) to be Operation Error Received: ' + result);

  console.log('All tests passed successfully.');

// ==================================================
// PRINT ERRORS
// ==================================================
} catch (e) {
  console.warn('Whoops, the following test did not pass:');
  console.error(e.message);
}
