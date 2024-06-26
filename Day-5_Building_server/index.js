const http = require("http");

const myServer = (req, res) => {
  console.log("request recieved");
  console.log(req.url);

  const response = {
    sucess: true,
    message: "This is my first API ",
    url: req.url,
  };

  if (req.url === "/login") {
    res.end(JSON.stringify(response));
  } else if (req.url === "/about") {
    res.end("This is about page");
  } else if (req.url === "/contact") {
    res.end("This is contact page");
  }
};

const server = http.createServer(myServer);
server.listen(5000, () => {
  console.log(`Server is running on PORT NO. ${5000}`);
});
