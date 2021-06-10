
import appEvents from "./appEvents.js";

import { createServer } from 'http';

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  // Simulate a log message
  //
  console.log(new Date().toISOString() + " - " + appEvents.Events.DatabaseConnectionSuccess);
  console.log("---");

  // Enumerate the Events and write to HTTP response and console for clarity
  //
  console.log("Events:");
  res.write("Events:" + "\n")
  for (const [key, value] of Object.entries(appEvents.Events)) {
    console.log("\t" + `${key}: ${value}`);
    res.write("\t" + `${key}: ${value}` + "\n");
  }

  res.write("---" + "\n")
  console.log("---");

  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});