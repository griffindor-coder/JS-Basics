function criticalCode() {
  throw "throwing an exception";
}

function logError(ex) {
  console.log(ex);
}

try {
  criticalCode();
} catch (error) {
  logError(error);
} finally {
  console.log("This block gets executed everytime");
}