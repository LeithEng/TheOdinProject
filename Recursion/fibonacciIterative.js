function fibonacciIterative(n) {
    if (n <= 1) {
      return n;
    }
  
    let a = 0;
    let b = 1;
    for (let i = 2; i <= n; i++) {
      const next = a + b;
      a = b;
      b = next;
    }
    return b;
  }
  
  const args = process.argv.slice(2);
  
  if (args.length !== 1) {
    console.error("Please provide exactly one number as a command-line argument.");
  } else {
    const inputNumber = parseInt(args[0]);
  
    if (isNaN(inputNumber)) {
      console.error("Invalid input. Please provide a valid integer.");
    } else if (inputNumber < 0) {
      console.error("Please provide a non-negative integer.");
    } else {
      const result = fibonacciIterative(inputNumber);
      console.log(`The Fibonacci sequence at position ${inputNumber} is: ${result}`);
    }
  }
  