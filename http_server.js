var http = require('http');

var server = http.createServer(function(request, response){
  response.writeHead(200, {"Content-Type": "application/javascript"});
  
});

server.listen(80);

function getGitDataJon() {
  return {
    [
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
    ]
  }
}
