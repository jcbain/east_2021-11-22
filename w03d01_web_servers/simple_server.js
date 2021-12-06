const http = require('http');

const server = http.createServer((request, response) => {
  const method = request.method;
  const url = request.url;
  const requestInfo =  `${method} ${url}`;

  console.log(requestInfo);

  if(requestInfo === "GET /home"){
    response.write("welcome to the home page!")
  } else if (requestInfo === "GET /about") {
    response.write('you made it to the about page!')
  } else {
    response.write("this isn't the page you are looking for");

  }

  response.end();
});

server.listen(4567);