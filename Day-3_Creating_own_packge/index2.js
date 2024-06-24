const fs = require("fs");
const filePath = "data.json";
const userData = [
  {
    id: 1,
    name: "Anupam",
    age: 21,
  },
];
const newUser = {
  id: 3,
  name: "New user3",
  age: 22,
};
const writeFileFunc = (fileName, content) => {
  fs.writeFile(fileName, content, (err) => {
    if (err) {
      console.log("Error occured", err);
      return;
    }
    console.log("writefile done");
  });
};

const readFileFunc = (fileName) => {
  fs.readFile(fileName, (err, data) => {
    if (err) {
      console.log("error: ", err);
      return;
    }
    // console.log("Data is:-", data.toString());
    const usersData = JSON.parse(data.toString());
    usersData.push(newUser);
    console.log(usersData);

    writeFileFunc(fileName, JSON.stringify(usersData));
  });
};

const updateFile = (fileName, content) => {
  fs.appendFile(fileName, content, (err) => {
    if (err) {
      console.log(err);
    }
    console.log("updated successfully");
  });
};

// updateFile("file1.txt", "\nthis is updated content");
// readFileFunc(filePath);
// writeFileFunc(filePath, JSON.stringify(userData));

console.log(__dirname);
console.log(__filename);
// path module
// readline module
// child process module
// node wifi package
