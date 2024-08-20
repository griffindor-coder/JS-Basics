// Manage long running operations using Promises

function promiseTimeout(ms) {
  // Promise is all based upon the Promise Object
  return new Promise((resolve, reject) => {
    // Promise will call this anonymous function to execute the
    // long running operation like setTimeout()
    // Promise also passes 2 args "resolve" and "reject" to
    // indicate a success or a failure of the operation
    // In case the operation is a success we would need to resolve
    // it in the code or reject it in the code
    // resolve and reject are functions

    // setTimeout(ms);
    // resolve();

    setTimeout(resolve, ms);
  });
}

promiseTimeout(3000)
  .then(() => {
    console.log("Done!");
    return promiseTimeout(2000);
  })
  .then(() => {
    console.log("Also Done!");
    return Promise.resolve(42);
  })
  .then((result) => {
    console.log(result);
  })
  .catch(() => {
    console.log("Failed!");
  });
