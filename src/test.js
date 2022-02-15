// var http = require("http");

async function async1() {
  console.log("async1 start");
  await async2();
  console.log("-----------------");
  await async3();
  console.log("async1 enddddddddddddddddddddddddddddddddddddddddddd");
}

async function async2() {
  console.log("async2");
  // return async3()
}

async function async3() {
  console.log("async3");
}

console.log("script start");

setTimeout(function() {
  console.log("setTimeout");
}, 0);

async1();

new Promise(function(resolve) {
  console.log("promise1");
  resolve();
}).then(function() {
  console.log("promise2");
});

console.log("script end");

//create a server object:
// http
//   .createServer(function(req, res) {
//     res.write("Hello World!"); //write a response to the client
//     res.end(); //end the response
//   })
//   .listen(8080); //the server object listens on port 8080
