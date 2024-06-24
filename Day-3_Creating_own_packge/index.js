const fs = require("fs");

const writeFileFunc = () => {
  fs.writeFile("demo.txt", "Anupam Yadav", (error) => {
    if (error) {
      console.log("ERROR OCCURED WHILE WRITING", error);
      return;
    }
    console.log("File written successfully");
  });
};

const readFileFunc = () => {
  fs.readFile("demo.txt", (e, data) => {
    if (e) {
      console.log("Error occured", e);
      return;
    }
    console.log("File readed sucessfully", data.toString());
  });
};

const deleteFileFunc = () => {
  fs.unlink("demo.txt", (error) => {
    if (error) {
      console.log("error", error);
      return;
    }
    console.log("file deleted successfully");
  });
};

const doesFileExist = () => {
  fs.access("demo.txt", (error) => {
    if (error) {
      console.log("error occured", error);
      return;
    }
    console.log("File exists");
  });
};

const updateFileFunc = () => {
  fs.appendFile("demo.txt", "\nThis is new content", (error) => {
    if (error) {
      console.log("Error occured while appendng", error);
      return;
    }
    console.log("file updated");
  });
};
const dynamicUpdateFileFunc = (filePath, content) => {
  fs.appendFile(filePath, content, (error) => {
    if (error) {
      console.log("Error occured while appendng", error);
      return;
    }
    console.log("file updated");
  });
};

const fileName = "users.json";
const users = [
  {
    id: 1,
    Name: "Anupam Yadav",
    age: 21,
  },
];

// writeFileFunc();
// readFileFunc();
// deleteFileFunc();
// doesFileExist();
// updateFileFunc();
dynamicUpdateFileFunc("demo-file.txt", "\nthis is text file1");
