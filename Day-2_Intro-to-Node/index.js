const fs = require("fs");

const writeFileFunc = () => {
  fs.writeFile("sample1.txt", "hello ", (error) => {
    if (error) {
      console.log("Error Occured while writing file");
      return;
    }

    console.log("File written successfully");
  });
};

const readFileFunc = () => {
  fs.readFile("sampleee.txt", (error, data) => {
    if (error) {
      console.log("Error while reading file", error);
      return;
    }
    console.log("File data is ", data.toString());
  });
};

readFileFunc();
