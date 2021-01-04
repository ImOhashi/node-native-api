import http from "http";

const router = (req, res) => {
  const { url } = req;

  if (url === "/") {
    res.writeHead(200);
    res.end("<h1>Hello World!</h1>");
  } else {
    res.writeHead(404);
    res.end("<h1>Not Found :(</h1>");
  }
};

http.createServer(router).listen(process.env.PORT || 3000, () => {
  console.log(`Server listening on port: ${process.env.PORT || 3000}`);
});
