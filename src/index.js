// video Explicativo
// https://www.youtube.com/watch?v=sA3t4d1v7OI

import app from "./app";
import "@babel/polyfill";

async function main() {
  await app.listen(4000);
  console.log("server on port 4000");
}

main();
