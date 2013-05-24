var http = require('http');
var fs = require('fs');

routing = {
  "/index.html": serveStaticFile,
  "/d3graph.js": serveStaticFile,
  "/d3graph.json": serveGitDataJSON
}

var server = http.createServer(
  function(request, response) {
    routingFunction = routing[request.url] || serveGitDataJSON
    console.log(routingFunction)
    routingFunction(request.url, response);
  });

server.listen(1234);

function serveStaticFile(url, response) {
  return fs.readFile("." + url, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    console.log(data);
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(data)
    response.end()
  });
}

function serveGitDataJSON(url, response) {
  response.writeHead(200, {"Content-Type": "application/javascript"});
  response.end(
    JSON.stringify([
    {
      title: "koans",
      value: 12
    },
    {
      title: "livienyin.github.com",
      value: 3
    },
    {
      title: "MandalaSF",
      value: 20
    },
    {
      title: "memoryGame-coffee",
      value: 3
    },
    {
      title: "memoryGame-js",
      value: 2
    },
    {
      title: "movieapp-ajax",
      value: 6
    },
    {
      title: "oh-my-zsh",
      value: 35
    },
    {
      title: "pair_programming_bot",
      value: 1
    },
    {
      title: "rails_moviesapp",
      value: 4
    },
    {
      title: "rails_store",
      value: 23
    },
    {
      title: "sinatra_movies",
      value: 7
    },
    {
      title: "sinatra_store",
      value: 11
    },
    {
      title: "statusboard-github",
      value: 17
    }
  ]));
}
