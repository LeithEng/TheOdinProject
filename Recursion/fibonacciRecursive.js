function fibonacciRecursive(n) {
    if (n <= 1) {
      return n;
    } else {
      return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
    }
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
      const result = fibonacciRecursive(inputNumber);
      console.log(`The Fibonacci sequence at position ${inputNumber} is: ${result}`);
    }
  }