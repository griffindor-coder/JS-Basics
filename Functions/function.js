// Function Definition - {}
// Reco - Use return stmt in a function. return stmt is optional in a function
function printer(param1) {
  console.log(param1);
  return;
}

// Function invocation - ()
printer("Hello World!");

// Functions themselves are Objects. It will have several properties
console.log(printer.name);
console.log(typeof printer);