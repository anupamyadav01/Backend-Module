const http = require("http");
const data = require("./data.js");

// creating server
const PORT = 8080;
const notFound = (req, res) => {
  res.writeHead(404, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ message: "Route not found" }));
};
const homeAPICalls = (req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  switch (req.method) {
    case "GET":
      res.end(JSON.stringify(data));
      break;
    case "POST":
      res.end(JSON.stringify({ message: "Data created" }));
      break;
    default:
      notFound(req, res);
      break;
  }
  res.end(JSON.stringify(data));
};

const app = (req, res) => {
  console.log(req.url);
  switch (req.url) {
    case "/":
      homeAPICalls(req, res);
      break;
    default:
      notFound(req, res);
      break;
  }
};

const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`Server is running on PORT NO. ${PORT}`);
});
