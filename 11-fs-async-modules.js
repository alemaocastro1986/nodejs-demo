const { readFile, writeFile } = require("fs");
console.log("START");
readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.error(err);
    return;
  }
  const first = result;
  readFile("./content/second.txt", "utf-8", (err, result) => {
    if (err) {
      console.error(err);
      return;
    }

    const second = result;

    writeFile(
      "./content/result-async.txt",
      `Here is the result: ${first} and ${second}`,
      (err, result) => {
        if (err) {
          console.error(err);
          return;
        }

        console.log("File successfully created!");
        console.log("DONE WITH THIS TASK");
      }
    );
  });
});

console.log("STARTING NEXT ONE TASK");
