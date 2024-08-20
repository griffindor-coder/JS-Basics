function setTimeoutPromise(ms) {
  return new Promise((resolve, reject) => {
    // logic for executing the long running code
    try {
      setTimeout(reject, ms);
    } catch (error) {
      console.log(error);
    }
  });
}

async function simulateLongRunningOP() {
  await setTimeoutPromise(2000);
  // return 42 is same as Promise.resolve(42)
  return "setTimeOut() is successful!";
}

async function run() {
  const answer = await simulateLongRunningOP();
  console.log(answer);
}

run();

// try out the error handling with Promise.reject()